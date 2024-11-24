"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { useFirebase } from "../../context/firebase";

const page = () => {
  const { createHospital } = useFirebase();

  const [hospitalData, setHospitalData] = useState({
    name: "",
    licenseNo: "",
    address: "",
    activePatients: 0,
    closedPatients: 0,
    totalWards: "",
    totalLabs: "",
    patientsRegistered: 0,
    doctors: [
      { name: "", specialty: "" }, // Default doctor input
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDoctorChange = (index, field, value) => {
    const updatedDoctors = hospitalData.doctors.map((doc, idx) =>
      idx === index ? { ...doc, [field]: value } : doc
    );
    setHospitalData((prev) => ({
      ...prev,
      doctors: updatedDoctors,
    }));
  };

  const addDoctor = () => {
    setHospitalData((prev) => ({
      ...prev,
      doctors: [...prev.doctors, { name: "", specialty: "" }],
    }));
  };

  const removeDoctor = (index) => {
    const updatedDoctors = hospitalData.doctors.filter((_, idx) => idx !== index);
    setHospitalData((prev) => ({
      ...prev,
      doctors: updatedDoctors,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const hospitalId = await createHospital(hospitalData); // Call the function
      console.log("Hospital created successfully with ID:", hospitalId);
      // Optionally redirect or show a success message
    } catch (error) {
      console.error("Error during hospital creation:", error);
      // Optionally show an error message
    }
  };

  return (
    <div>
      <Navbar />
      <div className="space-y-6 px-20">
        <h3 className="text-2xl font-bold text-center mb-4">Hospital Form</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* General Hospital Details */}
          <div className="flex flex-col">
            <label className="font-semibold">Hospital Name:</label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 rounded p-2"
              value={hospitalData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Hospital License No:</label>
            <input
              type="text"
              name="licenseNo"
              className="border border-gray-300 rounded p-2"
              value={hospitalData.licenseNo}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Hospital Address:</label>
            <textarea
              name="address"
              className="border border-gray-300 rounded p-2"
              rows="4"
              value={hospitalData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* General Details */}
          <div className="flex flex-col">
            <label className="font-semibold">Active Patients:</label>
            <input
              type="number"
              name="activePatients"
              className="border border-gray-300 rounded p-2"
              value={hospitalData.activePatients}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Closed Patients:</label>
            <input
              type="number"
              name="closedPatients"
              className="border border-gray-300 rounded p-2"
              value={hospitalData.closedPatients}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Total Wards:</label>
            <input
              type="number"
              name="totalWards"
              className="border border-gray-300 rounded p-2"
              value={hospitalData.totalWards}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Total Labs:</label>
            <input
              type="number"
              name="totalLabs"
              className="border border-gray-300 rounded p-2"
              value={hospitalData.totalLabs}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Patients Registered:</label>
            <input
              type="number"
              name="patientsRegistered"
              className="border border-gray-300 rounded p-2"
              value={hospitalData.patientsRegistered}
              onChange={handleChange}
            />
          </div>

          {/* Doctors Section */}
          <div className="space-y-4">
            <label className="font-semibold">Doctors:</label>
            {hospitalData.doctors.map((doctor, index) => (
              <div key={index} className="flex space-x-4 items-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded p-2 flex-1"
                  value={doctor.name}
                  onChange={(e) => handleDoctorChange(index, "name", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Specialty"
                  className="border border-gray-300 rounded p-2 flex-1"
                  value={doctor.specialty}
                  onChange={(e) =>
                    handleDoctorChange(index, "specialty", e.target.value)
                  }
                />
                <button
                  type="button"
                  className="bg-red-500 text-white py-1 px-3 rounded"
                  onClick={() => removeDoctor(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-green-500 text-white py-1 px-3 rounded"
              onClick={addDoctor}
            >
              Add Doctor
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
