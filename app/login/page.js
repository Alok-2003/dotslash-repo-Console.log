"use client"
import React, { useEffect, useState } from "react";
import { auth } from "../../context/firebase"; // Ensure your Firebase config is properly imported
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useFirebase } from "../../context/firebase";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import icons for visibility toggle

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // New state for password visibility
  const firebase = useFirebase();
  const [patients, setPatients] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [districts, setDistricts] = useState([]);
  const router = useRouter();

  useEffect(() => {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User logged in:", userCredential.user);

      if (patients.some((patient) => patient.PEmail === email)) {
        toast.success("Redirecting to Patient Dashboard...");
        router.push("/PatientDashboard");
      } else if (hospitals.some((hospital) => hospital.HEmail === email)) {
        toast.success("Redirecting to Hospital Dashboard...");
        router.push("/HospitalDashboard");
      } else if (districts.some((district) => district.DEmail === email)) {
        toast.success("Redirecting to District Dashboard...");
        router.push("/DistrictDashboard");
      } else {
        toast.error("Email not associated with any dashboard.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-emerald-700 text-white p-10">
        <h1 className="text-6xl font-bold mb-8">Welcome Back!</h1>
        <DotLottieReact
          src="https://lottie.host/2cf086ab-daac-4fa9-b586-52738cb89a9d/1hYr1QxIOR.lottie"
          loop
          autoplay
          className="h-96"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-10">
        <Toaster toastOptions={{ duration: 4000 }} />
        <form onSubmit={handleLogin} className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

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

          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"} // Conditional input type
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

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
