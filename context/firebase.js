"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const FirebaseContext = createContext(null);

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMbXAQu7utw8dkZo-JtIfgUkhBjFd-ltA",
    authDomain: "healthsync-17d27.firebaseapp.com",
    projectId: "healthsync-17d27",
    storageBucket: "healthsync-17d27.firebasestorage.app",
    messagingSenderId: "249303912248",
    appId: "1:249303912248:web:7e425fe3ea4121518fbbcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Auth state listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user || null);
        });
        return () => unsubscribe();
    }, []);

    console.log(user)
    const isLoggedIn = !!user;

    // Function to fetch and log data from a given collection
    const fetchAndLogCollection = async (collectionName) => {
        try {
            const querySnapshot = await getDocs(collection(firestore, collectionName));
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            // console.log(`Data from collection ${collectionName}:`, data);
            return data;
        } catch (error) {
            // console.error(`Error fetching data from collection ${collectionName}:`, error);
            throw error;
        }
    };

    // Functions for specific collections
    const listOfPatients = () => fetchAndLogCollection("Patients");
    const listOfHospitals = () => fetchAndLogCollection("Hospitals");
    const listOfDistricts = () => fetchAndLogCollection("Districts");

    const addPatient = async (patientData) => {
        try {
            const docRef = await addDoc(collection(firestore, "Patients"), patientData);
            console.log("Patient added with ID:", docRef.id);
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error("Error adding patient:", error);
            return { success: false, error: error.message };
        }
    };

    const createHospital = async (hospitalData) => {
        try {
          const docRef = await addDoc(collection(firestore, "Hospitals"), hospitalData);
          console.log("Hospital added with ID:", docRef.id);
          return docRef.id; // Return the document ID for reference
        } catch (error) {
          console.error("Error adding hospital:", error);
          throw error; // Propagate the error for handling in the calling code
        }
      };

    return (
        <FirebaseContext.Provider
            value={{
                isLoggedIn,
                user,
                listOfPatients,
                listOfHospitals,
                listOfDistricts,
                addPatient,
                createHospital
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
