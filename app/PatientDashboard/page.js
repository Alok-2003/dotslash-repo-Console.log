"use client";
import React, { useEffect, useState } from "react";
import { useFirebase } from "../../context/firebase";
import Navbar from "@/components/Navbar";

const PatientDashboard = () => {
  const { user, listOfPatients } = useFirebase();
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    listOfPatients()
      .then((patientsSnapshot) => {
        setPatients(patientsSnapshot);
        const filtered = patientsSnapshot.filter(
          (patient) => patient.PEmail === user.email
        );
        setFilteredPatients(filtered);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, [user, listOfPatients]);

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  console.log(filteredPatients);
  if (filteredPatients === null) {
    return <div>Loading patient data...</div>;
  }

  return (
    <div className="">
      <Navbar />
      <div>
        <h1 className="text-2xl font-bold  px-20">Patient Dashboard</h1>
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className=" p-4 px-20 mb-4 rounded shadow-sm bg-white"
            >
              <h2 className="text-lg font-semibold mb-2">{patient.name}</h2>
              <p>
                <strong>Email:</strong> {patient.PEmail}
              </p>
              <p>
                <strong>Age:</strong> {patient.age}
              </p>
              <p>
                <strong>Gender:</strong> {patient.gender}
              </p>
              <p>
                <strong>Blood Group:</strong> {patient.bloodGroup}
              </p>
              <p>
                <strong>Medical History:</strong> {patient.medicalHistory}
              </p>
              <p>
                <strong>Primary Contact:</strong> {patient.primaryContact}
              </p>
            </div>
          ))
        ) : (
          <p>No patients found for your email.</p>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
