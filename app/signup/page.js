"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Page = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-emerald-600 text-white p-10">
        <h1 className="text-6xl font-bold mb-8">Join Us!</h1>
        <DotLottieReact
          src="https://lottie.host/2cf086ab-daac-4fa9-b586-52738cb89a9d/1hYr1QxIOR.lottie"
          loop
          autoplay
          className="h-96"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-10">
        <form className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm text-gray-700"
            >
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-[#32a852] text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition duration-200"
          >
            Sign Up
          </button>

          {/* Alternate Login Option */}
          <div className="text-center mt-4">
            <p className="text-gray-500">
              Already have an account?{" "}
              <a href="login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
