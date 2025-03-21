import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

import photo1 from "../assets/heroo1.png";
import photo2 from "../assets/hero2.png";
import photo3 from "../assets/hero3.png";
import photo4 from "../assets/heroo4.png";
import EnquiryForm from "./EnquiryForm";

const HeroSection = () => {
  const images = [photo1, photo2, photo3, photo4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const europeanCountries = [
    "Austria",
    "Belgium",
    "Croatia",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: index === currentImageIndex ? 1 : 0,
            scale: index === currentImageIndex ? 1 : 1.05,
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 gap-8 px-4">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to VICTORY VISAS
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Your Most Reliable Visa Partner
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row  items-center justify-center gap-4 w-full max-w-4xl"
          style={{ alignItems: "flex-end" }}
        >
          {/* Nationality Dropdown */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col w-full sm:w-1/3"
          >
            <label htmlFor="nationality" className="text-white mb-2 text-xl">
              Your Nationality
            </label>
            <select
              id="nationality"
              className="p-3 rounded bg-gray-800 text-gray-200 border border-gray-600"
            >
              <option value="India">India</option>
            </select>
          </motion.div>

          {/* Traveling To Dropdown */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col w-full sm:w-1/3"
          >
            <label htmlFor="destination" className="text-white mb-2 text-xl">
              Traveling To
            </label>
            <select
              id="destination"
              className="p-3 rounded bg-gray-800 text-gray-200 border border-gray-600"
            >
              <option value="">Select a country</option>
              {europeanCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFormVisible(true)}
            className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 sm:w-auto md:w-auto"
          >
            Search
          </motion.button>
        </motion.div>
      </div>

      {/* WhatsApp Integration */}
      <a
        href="https://wa.me/919818718419" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Popup Form */}
{isFormVisible && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black bg-opacity-50"
      onClick={() => setIsFormVisible(false)}
    ></div>

    {/* Form Container */}
    <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg z-60">
      <button
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        onClick={() => setIsFormVisible(false)}
      >
        <AiOutlineClose size={24} />
      </button>
      <EnquiryForm service="Visa Inquiry" onClose={() => setIsFormVisible(false)} />
    </div>
  </div>
)}

    </div>
  );
};

export default HeroSection;