"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Page = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-emerald-700 text-white p-10">
        <h1 className="text-6xl font-bold mb-8">Welcome Back!</h1>
        {/* <p className="text-lg text-center mb-4">
          Enter your phone number and OTP to securely access your account.
        </p> */}
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
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

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

          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-gray-700 font-medium mb-2"
            >
              OTP
            </label>
            <input
              type="text"
              id="otp"
              placeholder="Enter your OTP"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>

          {/* Alternate Login Options */}
          <div className="text-center mt-4">
            <p className="text-gray-500">
              Don’t have an account?{" "}
              <a href="signup" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
