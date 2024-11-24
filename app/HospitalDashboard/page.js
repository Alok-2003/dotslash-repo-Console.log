"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 45,
    gender: "Male",
    email: "john.doe@example.com",
    phone: "+1-555-123-4567",
    address: {
      street: "123 Elm Street",
      city: "Springfield",
      state: "Illinois",
      zipCode: "62704",
      country: "USA",
    },
    emergencyContact: {
      name: "Jane Doe",
      relation: "Spouse",
      phone: "+1-555-987-6543",
    },
    medicalHistory: [
      { condition: "Hypertension", diagnosedOn: "2018-03-15" },
      { condition: "Diabetes Type II", diagnosedOn: "2020-06-22" },
    ],
    admissionDetails: {
      admissionDate: "2024-11-01",
      ward: "Cardiology",
      roomNumber: "101A",
    },
    dischargeDetails: null,
    activeStatus: true,
  },
  {
    id: 2,
    name: "Emily Carter",
    age: 32,
    gender: "Female",
    email: "emily.carter@example.com",
    phone: "+1-555-789-0123",
    address: {
      street: "456 Oak Avenue",
      city: "Riverdale",
      state: "New York",
      zipCode: "10567",
      country: "USA",
    },
    emergencyContact: {
      name: "Michael Carter",
      relation: "Brother",
      phone: "+1-555-234-5678",
    },
    medicalHistory: [{ condition: "Asthma", diagnosedOn: "2010-05-18" }],
    admissionDetails: {
      admissionDate: "2024-10-15",
      ward: "Pulmonology",
      roomNumber: "202B",
    },
    dischargeDetails: {
      dischargeDate: "2024-11-10",
      notes: "Follow up after 2 weeks.",
    },
    activeStatus: false,
  },
];

export default function Page() {
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  // Filter and sort patients
  const activePatients = patients
    .filter((patient) => patient.activeStatus)
    .sort(
      (a, b) =>
        new Date(b.admissionDetails.admissionDate) -
        new Date(a.admissionDetails.admissionDate)
    );

  const inactivePatients = patients
    .filter((patient) => !patient.activeStatus)
    .sort(
      (a, b) =>
        new Date(b.admissionDetails.admissionDate) -
        new Date(a.admissionDetails.admissionDate)
    );

  const handleSelectPatient = (id) => {
    setSelectedPatientId(selectedPatientId === id ? null : id);
  };

  const renderPatientDetails = (patient) => (
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Email:</strong> {patient.email}</p>
      <p><strong>Phone:</strong> {patient.phone}</p>
      <p>
        <strong>Address:</strong>{" "}
        {`${patient.address.street}, ${patient.address.city}, ${patient.address.state}, ${patient.address.country}`}
      </p>
      <p><strong>Emergency Contact:</strong> {patient.emergencyContact.name} ({patient.emergencyContact.relation})</p>
      <p><strong>Medical History:</strong></p>
      <ul>
        {patient.medicalHistory.map((history, index) => (
          <li key={index}>
            {history.condition} (Diagnosed on {history.diagnosedOn})
          </li>
        ))}
      </ul>
      <p><strong>Admission Details:</strong></p>
      <ul>
        <li>Date: {patient.admissionDetails.admissionDate}</li>
        <li>Ward: {patient.admissionDetails.ward}</li>
        <li>Room: {patient.admissionDetails.roomNumber}</li>
      </ul>
      {patient.dischargeDetails && (
        <>
          <p><strong>Discharge Details:</strong></p>
          <ul>
            <li>Date: {patient.dischargeDetails.dischargeDate}</li>
            <li>Notes: {patient.dischargeDetails.notes}</li>
          </ul>
        </>
      )}
    </div>
  );

  const router = useRouter(); // Initialize the router

  const handleAddHospital = () => {
    router.push("/CreatePatient"); // Redirect to the CreateHospital page
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

     <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Hospital Dashboard
          </h1>
          <button
            className="relative h-11 inline-flex items-center justify-center px-8 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
            onClick={handleAddHospital} // Add the click handler
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-teal-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative text-base font-semibold">
              Add New Patient
            </span>
          </button>
        </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Active Patients</h2>
          <div className="space-y-2">
            {activePatients.map((patient) => (
              <div key={patient.id}>
                <button
                  className="w-full text-left bg-white px-4 py-2 border rounded-lg shadow-md hover:bg-gray-100"
                  onClick={() => handleSelectPatient(patient.id)}
                >
                  {patient.name}
                </button>
                {selectedPatientId === patient.id && renderPatientDetails(patient)}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Inactive Patients</h2>
          <div className="space-y-2">
            {inactivePatients.map((patient) => (
              <div key={patient.id}>
                <button
                  className="w-full text-left bg-white px-4 py-2 border rounded-lg shadow-md hover:bg-gray-100"
                  onClick={() => handleSelectPatient(patient.id)}
                >
                  {patient.name}
                </button>
                {selectedPatientId === patient.id && renderPatientDetails(patient)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
