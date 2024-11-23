"use client"
import React, { useState } from 'react'

const Page = () => {
  const [isPatientForm, setIsPatientForm] = useState(true); // Controls the toggle

  const toggleForm = () => {
    setIsPatientForm(!isPatientForm);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Toggle Button */}
      <div className="flex justify-center items-center mb-6">
        <label className="flex items-center cursor-pointer">
          <span className="mr-4 text-xl font-semibold">
            {isPatientForm ? "Patient Form" : "Hospital Form"}
          </span>
          <div className="relative">
            <input
              type="checkbox"
              className="hidden"
              checked={isPatientForm}
              onChange={toggleForm}
            />
            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
            <div
              className={`dot absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition ${
                isPatientForm ? "transform translate-x-full bg-blue-500" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>

      {/* Conditional Rendering of Forms */}
      {isPatientForm ? (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-4">Patient Form</h3>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold">Patient Name:</label>
              <input type="text" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Patient Age:</label>
              <input type="number" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Patient Gender:</label>
              <input type="text" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Patient Blood Group:</label>
              <input type="text" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Patient Aadhar Card Image:</label>
              <input type="file" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Patient Address:</label>
              <textarea className="border border-gray-300 rounded p-2" rows="4"></textarea>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Patient Contact:</label>
              <input type="text" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Patient Alternate Contact:</label>
              <input type="text" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-4">Hospital Form</h3>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold">Hospital Name:</label>
              <input type="text" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Hospital License No:</label>
              <input type="text" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Hospital Address:</label>
              <textarea className="border border-gray-300 rounded p-2" rows="4"></textarea>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Active Patients:</label>
              <input type="number" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Page;
