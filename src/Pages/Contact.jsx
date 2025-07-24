import React from 'react'
import Footer from '../component/Footer'

function Contact() {
  return (
    <div>
       <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh]">
        {/* Banner Image */}
        <img
          src={"src/assets/subbanner.jpg"}
          alt="Banner"
          className="w-full h-full object-cover"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1
            style={{
              fontFamily: "Lobster, sans-serif",
              letterSpacing: "0.3em",
            }}
            className="text-2xl md:text-4xl  font-bold text-white "
          >
            CONTACT US
          </h1>
        </div>
      </div>
    

    <div className="px-10 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Contact Form */}
        <div className="w-full max-w-xl mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-2 text-center sm:text-left">
            SEND US A MESSAGE
          </h2>
          <p className="text-gray-600 mb-6 text-[16px] sm:text-[17px] text-center sm:text-left">
            Feel free to drop us a line and say hi anytime.<br />
            We’ll get back to you within 24 hours.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="tel"
              placeholder="Your Number"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <div className="flex justify-center sm:justify-start">
              <button
                type="submit"
                className="bg-gray-700 hover:bg-blue-900 text-white px-10 py-3 font-bold rounded shadow-md transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Right: Contact Info Box */}
        <div className="bg-blue-900 text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-6  text-center">
            Contact Information
          </h2>

          <div className="mb-4">
            <p className="font-bold text-2xl">Regi. Office:</p>
            <p className="text-gray-200">
              7890, MG Road Bangalore, Karnataka<br />
              560001 India
            </p>
          </div>

          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h2.18a2 2 0 011.64.89l1.72 2.42a2 2 0 01-.01 2.24L9.1 10.6a11.05 11.05 0 005.3 5.3l1.06-1.03a2 2 0 012.24-.01l2.42 1.72a2 2 0 01.89 1.64V19a2 2 0 01-2 2h-1C10.61 21 3 13.39 3 4V5z" />
            </svg>
            <span className="text-white">+91 7887 654 321</span>
          </div>

          <div className="flex items-center ">
            <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v1l10 6 10-6V6a2 2 0 00-2-2zM4 8v10a2 2 0 002 2h12a2 2 0 002-2V8l-10 6L4 8z" />
            </svg>
            <span className="text-white">test@gmail.com</span>
          </div>

          <div className="flex space-x-4 text-white text-2xl mb-6">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-telegram"></i>
            </a>
          </div>

          <p className="text-sm text-white/80 text-center sm:text-left">
            &copy; 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
 


<Footer/>

    </div>
    
  )
}

export default Contact
