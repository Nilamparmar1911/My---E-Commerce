import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* second- navbar */}
      <nav className="bg-[#050a26]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-28 items-center justify-between">
            <div className="flex-shrink-0">
              <img
                className="h-20 w-auto"
                src="src/assets/logo.jpg"
                alt="Your Company"
              />
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <div className="flex space-x-1">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-lg font-medium text-white"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:text-amber-500"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:text-amber-500"
                >
                  About Us
                </Link>
                <Link
                  to="/faq"
                  className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:text-amber-500"
                >
                  FAQ
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:text-amber-500"
                >
                  Contact Us
                </Link>
              </div>

              <Link
                to="/login"
                className="bg-blue-900 text-white px-6 py-1.5 rounded-md hover:bg-blue-800 transition"
              >
                Login
              </Link>
            </div>

            <div className="sm:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About Us
            </Link>
            <Link
              to="/faq"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="w-full block text-left bg-blue-900 text-white px-3 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
