import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      {/* Responsive Box with shadow */}
      <div className="flex flex-col p-8 md:flex-row shadow-2xl rounded-lg overflow-hidden bg-white max-w-3xl w-full">
        {/* Image Section - on top in small/medium, left in large */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img
            src="src/assets/Login.jpg"
            alt="Register Illustration"
            className="w-48 sm:w-full md:w-64 lg:w-96 object-contain"
          />
        </div>

        {/* Form Section - below in small/medium, right in large */}
        <div className="w-full md:w-1/2 flex items-center justify-center ">
          <div className="w-full max-w-md space-y-5">
            <h2 className="text-2xl font-semibold">Sign Up</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-3 py-1 border rounded-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Mobile"
                required
                className="w-full px-3 py-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Address"
                required
                className="w-full px-3 py-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-3 py-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="w-full px-3 py-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white mt-2 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign Up
              </button>

              <div className="text-right">
                <Link to="\login" className="text-blue-600">
                  Back to Login Page
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
