import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const BackToLogin = ()=>{
        navigate('/login')
    }
  return (
<div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between bg-white px-4 sm:px-6 lg:px-16 py-12 gap-12">
      {/* Left Illustration */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg"
          alt="Register Illustration"
  className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Form Section */}
<div className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h2>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-md shadow hover:opacity-90 transition"
          >
            Register
          </button>

          {/* Already have account */}
          <p
          onClick={BackToLogin}
          className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a className="text-orange-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
