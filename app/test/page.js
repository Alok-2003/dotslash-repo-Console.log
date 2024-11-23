"use client";
import React, { useEffect, useState } from "react";
import { useFirebase } from "../../context/firebase";  // Assuming you have a custom Firebase context

const Page = () => {
  const firebase = useFirebase();  // Accessing Firebase from context
  const [patients, setPatients] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // Fetch data for patients
    const fetchData = async () => {
      try {
        const patientsSnapshot = await firebase.listOfPatients();
        const patientsData = patientsSnapshot.docs.map((doc) => doc.data());
        setPatients(patientsData);
        console.log("Patients data:", patientsData);
      } catch (error) {
        console.error("Error fetching patients data:", error);
      }

      // Fetch data for hospitals
      try {
        const hospitalsSnapshot = await firebase.listOfHospitals();
        const hospitalsData = hospitalsSnapshot.docs.map((doc) => doc.data());
        setHospitals(hospitalsData);
        console.log("Hospitals data:", hospitalsData);
      } catch (error) {
        console.error("Error fetching hospitals data:", error);
      }

      // Fetch data for districts
      try {
        const districtsSnapshot = await firebase.listOfDistricts();
        const districtsData = districtsSnapshot.docs.map((doc) => doc.data());
        setDistricts(districtsData);
        console.log("Districts data:", districtsData);
      } catch (error) {
        console.error("Error fetching districts data:", error);
      }
    };

    fetchData();
  }, [firebase]);  // Only re-run if firebase context changes


  console.log(patients)
  return (
    <div>
      <h1>Data Dashboard</h1>

      <h2>Patients List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <strong>{patient.PName}</strong> (ID: {patient.id})
          </li>
        ))}
      </ul>

      <h2>Hospitals List</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <strong>{hospital.name}</strong> (ID: {hospital.id})
          </li>
        ))}
      </ul>

      <h2>Districts List</h2>
      <ul>
        {districts.map((district) => (
          <li key={district.id}>
            <strong>{district.name}</strong> (ID: {district.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
