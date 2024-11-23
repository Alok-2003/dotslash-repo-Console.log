'use client';

import HospitalData from '@/components/HospitalData';
import HospitalDropdown from '@/components/HospitalDropdown';
import { useState } from 'react';

const hospitals = [
  {
    id: 1,
    name: "Max Super Specialty Hospital",
    generalDetails: [
      { Active_Patients: 19 },
      { Closed_Patients: 25 },
      { Total_Wards: "Dr. Jane Smith" },
      { Total_Labs: "Dr. Jane Smith" },
    ],
    patientsRegistered: 5000,
    licenseNo: "CH-12345",
    doctors: [
      { name: "Dr. John Doe", specialty: "Cardiology" },
      { name: "Dr. Jane Smith", specialty: "Neurology" },
      { name: "Dr. Mike Johnson", specialty: "Pediatrics" },
    ],
  },
  {
    id: 2,
    name: "City Medical Center",
    facilities: 12,
    patientsRegistered: 4200,
    licenseNo: "CMC-67890",
    doctors: [
      { name: "Dr. Sarah Brown", specialty: "Oncology" },
      { name: "Dr. Robert Lee", specialty: "Orthopedics" },
    ],
  },
];


export default function page() {
  const [selectedHospital, setSelectedHospital] = useState(null);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">District Health Dashboard</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <HospitalDropdown
            hospitals={hospitals}
            onSelect={(hospital) => setSelectedHospital(hospital)}
          />
        </div>
        {selectedHospital && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <HospitalData hospital={selectedHospital} />
          </div>
        )}
      </div>
    </main>
  );
}
