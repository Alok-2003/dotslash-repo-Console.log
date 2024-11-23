import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyDmUIcm4kPoZF8YI307wzivjSWY3-mYuHk",
    authDomain: "hotel-60204.firebaseapp.com",
    projectId: "hotel-60204",
    storageBucket: "hotel-60204.appspot.com",
    messagingSenderId: "419924901635",
    appId: "1:419924901635:web:25316be4232420aa62b336",
    measurementId: "G-P1JCSDB7FD",
};

export const useFirebase = () => useContext(FirebaseContext); // Context hook ready
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();


export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // console.log(user)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        })
    }, []);

    const isLoggedIn = user ? true : false;

    console.log(user)



    return <FirebaseContext.Provider value={{
        isLoggedIn,
    }} > {props.children} </FirebaseContext.Provider>
};