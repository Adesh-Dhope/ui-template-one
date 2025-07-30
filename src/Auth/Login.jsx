import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const BackToRegister = ()=>{
        navigate('/register')
    }
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white px-4 sm:px-6 lg:px-16 py-12 gap-12">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg"
          alt="Login Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back
        </h2>
        <form className="space-y-6">
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

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-orange-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-md shadow hover:opacity-90 transition"
          >
            Login
          </button>

          <p
          onClick={BackToRegister}
          className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-orange-500 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
