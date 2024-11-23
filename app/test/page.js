"use client";
import React, { useEffect, useState } from "react";
import { useFirebase } from "../../context/firebase";

const Page = () => {
  const firebase = useFirebase();
  const [patients, setPatients] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // Fetch data for patients
    firebase.listOfPatients().then(async (patientsSnapshot) => {
        const patientsData = patientsSnapshot;
        setPatients(patientsData);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });

    firebase.listOfHospitals().then(async (hospitalSnapshot) => {
        const hospitalData = hospitalSnapshot;
        setHospitals(hospitalData);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });

      firebase.listOfHospitals().then(async (districtSnapshot) => {
        const districtData = districtSnapshot;
        setDistricts(districtData);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, [firebase]);

  console.log(patients);
  console.log(hospitals);
  console.log(districts);
  // Log patients data whenever it changes

  return (
    <div>
      <h1>Page</h1>

      {/* Display Patients */}
      <div>
        <h2>Patients</h2>
        {patients.length > 0 ? (
          patients.map((patient, index) => (
            <main key={index}>
              <h1>{patient.PName}</h1>
            </main>
          ))
        ) : (
          <p>No patients found</p>
        )}
      </div>
    </div>
  );
};

export default Page;
