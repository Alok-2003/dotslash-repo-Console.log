"use client";
import { Home } from "lucide-react";
import React from "react";
import { FaShieldAlt, FaHospitalAlt, FaBookMedical, FaChartLine, FaTachometerAlt, FaUser, FaSignInAlt } from "react-icons/fa";

function Page() {
  return (
    <div className="font-sans bg-white">
      {/* Navbar */}
      <nav className="bg-white-800 text-emerald-900 py-4 flex justify-between items-center px-6">
        <div className="flex items-center space-x-6">
          {/* Logo/Image */}
          <img src="logo.png" alt="Logo" className="h-8 lg:h-16" />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-lg flex gap-2 items-center font-semibold">
            <Home/>
            Home</a>
          {/* Profile Button */}
          <a href="#" className="flex items-center space-x-2">
            <FaUser className="text-xl" />
            <span>Profile</span>
          </a>
          {/* Login Button */}
          <a href="#" className="flex items-center space-x-2">
            <FaSignInAlt className="text-xl" />
            <span>Login</span>
          </a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-gray-100 py-10 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 px-4 sm:px-8 lg:px-16">
          <h1 className="text-4xl font-bold text-gray-800 text-left">
            HealthSync - Simplifying Health Data for Smarter Care
          </h1>
          <p className="text-gray-600 mt-4 text-lg text-left">
            HealthSync transforms healthcare by bridging individuals, medical
            institutions, and governing bodies on a unified platform designed
            to simplify health data management. By fostering seamless
            collaboration and providing data-driven tools, HealthSync empowers
            smarter decisions and better outcomes across every level of
            healthcare. Discover a world where innovation meets care, ensuring
            healthier communities and improved accessibility for everyone,
            everywhere.
          </p>
        </div>
        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <img
            src="Hero.png"  // Correct path for public folder
            alt="HealthSync Illustration"
            className="max-w-full h-auto lg:w-2/4"
          />
        </div>
      </header>

      {/* Why HealthSync Section */}
      <section className="py-10">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">Why HealthSync?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16">
          {[
            {
              icon: <FaShieldAlt />,
              title: "Secure Data",
              description: "Your medical data is safe with advanced encryption and privacy settings.",
            },
            {
              icon: <FaHospitalAlt />,
              title: "Hospital Resource Monitoring",
              description: "Monitor hospital resources like beds, equipment, and staff in real-time.",
            },
            {
              icon: <FaBookMedical />,
              title: "Secure Medical Records",
              description: "Access your medical records anytime, anywhere, securely.",
            },
            {
              icon: <FaChartLine />,
              title: "Real-Time Insights",
              description: "Gain actionable insights for better healthcare decisions.",
            },
            {
              icon: <FaTachometerAlt />,
              title: "User-Friendly Dashboards",
              description: "Simplified visuals for efficiency and better monitoring.",
            },
          ].map((feature, index) => (
            <div key={index} className="border rounded-lg p-6 bg-white shadow-lg text-center">
              <div className="text-green-500 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Getting Started Section */}
<section className="py-10 bg-gray-50">
  <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
    Getting Started is Quick and Easy
  </h2>
  <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 px-4 sm:px-8 lg:px-16">
    {/* Left Half (Content) */}
    <div className="lg:w-1/2">
      {[
        {
          step: "1",
          title: "Government-Approved Hospital",
          description: "Sign up with a certified hospital to get started.",
        },
        {
          step: "2",
          title: "Patient Registration at Hospitals",
          description: "Patients are registered easily through secure systems.",
        },
        {
          step: "3",
          title: "Real-Time Patient Treatment Updates",
          description: "Stay informed with real-time updates about your treatment.",
        },
      ].map((step, index) => (
        <div key={index} className="bg-white border rounded-lg p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-green-600 mb-2">
            {step.step}. {step.title}
          </h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>

          {/* Right Half (Image) */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="3rd.png" // Replace with your image path
              alt="Illustration for Getting Started"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Page;
