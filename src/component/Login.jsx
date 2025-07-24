import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      {/* Responsive Box with shadow */}
      <div className="flex flex-col p-8 md:flex-row shadow-2xl rounded-lg overflow-hidden bg-white max-w-3xl w-full">
        
        {/* Image Section - on top in small/medium, left in large */}
        <div className="w-full md:w-1/2 h-60 md:h-auto">
          <img
            src="src/assets/Login.jpg"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section - below in small/medium, right in large */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-5">
            <h2 className="text-2xl font-semibold">Sign In</h2>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                id="email"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="text-right mt-1">
                <Link to="#" className="text-sm text-blue-600 hover:underline">
                  Forget Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white mt-2 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>

              <p className="text-center text-sm mt-3">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register for Free
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
