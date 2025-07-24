import React from "react";
import Header from "../component/Navbar";
import Footer from "../component/Footer";
import bannerImage from "../assets/subbanner.jpg";

function About() {
  return (
    <>
      {/* <Header /> */}

      {/* Banner */}
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh]">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1
            style={{
              fontFamily: "Lobster, sans-serif",
              letterSpacing: "0.3em",
            }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            ABOUT
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-[#f0f0f0] py-12 md:py-20">
        <div className="text-center text-3xl font-medium">
          <span className="text-blue-900">About</span>{" "}
          <span className="text-gray-700">the</span>{" "}
          <span className="text-yellow-900">Company</span>
        </div>

        <div className="text-lg font-medium text-center text-gray-500 leading-relaxed mt-8 px-4 md:px-8 max-w-4xl mx-auto">
          <p>
            Welcome to ModernEra, a cutting-edge ecommerce platform designed to
            redefine the online shopping experience. We believe that shopping in
            the digital age should be effortless, enjoyable, and tailored to
            modern lifestyles.
          </p>
          <br />
          <p>
            At ModernEra, we are committed to more than just selling
            products—we’re building a community of shoppers who value
            convenience, style, and trust. Our team works tirelessly to curate
            an exceptional range of goods that blend quality, value, and
            relevance.
          </p>
          <br />
          <p>
            Our mission is to revolutionize the way people shop online by
            prioritizing personalization, speed, and security.
          </p>
          <br />
          <p>
            As we grow, we remain grounded in our core values—quality,
            transparency, and service. Thank you for being a part of the
            ModernEra journey.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default About;
