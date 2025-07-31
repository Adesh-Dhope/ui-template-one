import React from "react";
import { useNavigate } from "react-router-dom";

const Entrance = () => {

    const navigate = useNavigate();

    const Login = () =>{
navigate('/login')
    }

    const Register = () =>{
navigate('/register')
    }
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
<div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Every child yearns to learn
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Making Your Child's World Better
          </h1>
          <p className="mt-4 text-gray-600">
            Replenish seasons may male hath fruit beast were seas saw you arrie said man beast whales
            his void unto last session for bite. Set have great you'll male grass yielding yielding man.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
            onClick={Register}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition">
              Get Started
            </button>
            <button
            onClick={Login}
            className="border border-gray-400 text-gray-800 px-6 py-3 rounded-full hover:from-orange-500 transition">
              Login
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-5961.jpg"
            alt="Education Illustration"
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Entrance;
