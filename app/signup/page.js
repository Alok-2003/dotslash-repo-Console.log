"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { auth } from "../../context/firebase"; // Ensure this path is correct
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import icons for password toggle

const Page = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter(); // Initialize router

  useEffect(() => {
    setIsMounted(true); // Set mounted to true on client
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate password
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      // Firebase Signup
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User registered:", userCredential.user);
      toast.success(`Welcome, ${fullName}! Your account was created.`);

      // Redirect to CreateProfile page
      router.push("/CreateProfile");
    } catch (error) {
      console.error("Signup error:", error);
      const errorMessage = getFirebaseErrorMessage(error.code);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Firebase Error Message Handler
  const getFirebaseErrorMessage = (errorCode) => {
    const errorMessages = {
      "auth/email-already-in-use": "Email already in use. Please try logging in.",
      "auth/invalid-email": "Invalid email address format.",
      "auth/weak-password": "Password is too weak. Try a stronger password.",
      "auth/network-request-failed": "Network error. Please check your connection.",
    };
    return errorMessages[errorCode] || "An unknown error occurred.";
  };

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
        <Toaster toastOptions={{ duration: 4000 }} />
        <form onSubmit={handleSignup} className="w-full max-w-md">
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div
              className="absolute top-10 right-3 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div
              className="absolute top-10 right-3 cursor-pointer"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
            </div>
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
              I agree to the Terms and Conditions
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#32a852] text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition duration-200"
          >
            {loading ? "Signing Up..." : "Sign Up"}
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
