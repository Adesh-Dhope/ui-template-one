import React from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const BackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-around bg-white px-4 sm:px-6 lg:px-16 py-12 gap-12">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg"
          alt="Forgot Password Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Forgot Password
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="emailOrUsername"
              className="block text-sm font-medium text-gray-700"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="emailOrUsername"
              placeholder="Enter your email or username"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r cursor-pointer from-orange-500 to-red-500 text-white py-3 rounded-md shadow hover:opacity-90 transition"
          >
            Submit
          </button>

          <p
            onClick={BackToLogin}
            className="text-center text-sm text-gray-600 mt-4 cursor-pointer"
          >
            Back to{" "}
            <span className="text-orange-500 hover:underline">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
