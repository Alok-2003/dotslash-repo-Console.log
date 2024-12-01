"use client";

import HospitalData from "@/components/HospitalData";
import HospitalDropdown from "@/components/HospitalDropdown";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Navbar from "@/components/Navbar";

const hospitals = [
  {
    id: 1,
    name: "Max Super Specialty Hospital",
    facilities:20,
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
];



export default function Page() {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const router = useRouter(); // Initialize the router

  const handleAddHospital = () => {
    router.push("/CreateHospital"); // Redirect to the CreateHospital page
  };

  

  return (
    <main className="min-h-screen bg-gray-100 ">
      <Navbar/>
      <div className="w-full mx-auto p-8 px-20">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            District Health Dashboard
          </h1>
          <button
            className="relative h-11 inline-flex items-center justify-center px-8 py-2 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
            onClick={handleAddHospital} // Add the click handler
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-teal-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative text-base font-semibold">
              Add Hospital
            </span>
          </button>
        </div>
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
