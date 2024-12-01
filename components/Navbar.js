"use client";
import { Home, LayoutDashboard } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useFirebase } from "../context/firebase";
import { auth } from "../context/firebase"; // Import the auth object from your Firebase setup
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isLoggedIn, user } = useFirebase();
  const UEmail = user?.email;
  const router = useRouter();
  const firebase = useFirebase();
  const [patients, setPatients] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [districts, setDistricts] = useState([]);

  // Helper function to determine the Dashboard URL
  const getDashboardUrl = () => {
    if (patients.some((patient) => patient.PEmail === UEmail)) {
      return "/PatientDashboard";
    } else if (hospitals.some((hospital) => hospital.HEmail === UEmail)) {
      return "/HospitalDashboard";
    } else if (districts.some((district) => district.DEmail === UEmail)) {
      return "/DistrictDashboard";
    }
    return "/Dashboard"; // Default if no match
  };

  useEffect(() => {
    // Fetch data for patients, hospitals, and districts
    firebase
      .listOfPatients()
      .then((patientsSnapshot) => {
        setPatients(patientsSnapshot);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });

    firebase
      .listOfHospitals()
      .then((hospitalSnapshot) => {
        setHospitals(hospitalSnapshot);
      })
      .catch((error) => {
        console.error("Error fetching hospitals:", error);
      });

    firebase
      .listOfDistricts()
      .then((districtSnapshot) => {
        setDistricts(districtSnapshot);
      })
      .catch((error) => {
        console.error("Error fetching districts:", error);
      });
  }, [firebase]);

  const handleLogout = async () => {
    if (isLoggedIn) {
      try {
        await auth.signOut(); // Sign out the user
        console.log("User logged out successfully");
        router.push("login");
      } catch (error) {
        console.error("Error during logout:", error); // Log errors if any
      }
    }
  };

  return (
    <nav className="bg-white-800 text-emerald-900 py-4 flex justify-between items-center px-16">
      <div className="flex items-center space-x-2">
        {/* Logo/Image */}
        <img src="HS.png" alt="Logo" className="h-8 lg:h-12" />
        <h1 className=" text-2xl font-bold " >Health Sync</h1>
        
      </div>
      <div className="flex items-center space-x-6">
        <a href="/" className="text-lg flex gap-2 items-center">
          <Home />
          Home
        </a>
        <a href={getDashboardUrl()} className="text-lg flex gap-2 items-center">
          <LayoutDashboard />
          Dashboard
        </a>
        {/* Profile Button */}
        {isLoggedIn && (
          <a href="#" className="flex items-center space-x-2">
            <FaUser className="text-xl" />
            <span>{user?.email || "Profile"}</span>
          </a>
        )}
        {/* Login/Logout Button */}
        <a
          href={isLoggedIn ? "#" : "login"}
          onClick={isLoggedIn ? handleLogout : undefined}
          className="flex items-center space-x-2"
        >
          {isLoggedIn ? (
            <>
              <FaSignOutAlt className="text-xl" />
              <span>Logout</span>
            </>
          ) : (
            <>
              <FaSignInAlt className="text-xl" />
              <span>Login</span>
            </>
          )}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
