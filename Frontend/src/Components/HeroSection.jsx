import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

// Import images for the Hero section
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";

const HeroSection = () => {
  const images = [photo1, photo2, photo3, photo4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false); // State for popup form

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

  // Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center px-8 mt-16">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>

      {/* Image Carousel */}
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Hero Content */}
      <motion.div
        className="absolute z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Victory Visas
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Simplify Your Visa Process
        </motion.p>

        {/* Horizontal Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 w-full max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col w-1/3">
            <label className="block text-gray-700 mb-2" htmlFor="nationality">
              Your Nationality
            </label>
            <select
              id="nationality"
              className="w-full p-2 border border-gray-300 rounded"
              disabled
            >
              <option value="India">India</option>
            </select>
          </div>
          <div className="flex flex-col w-1/3">
            <label className="block text-gray-700 mb-2" htmlFor="destination">
              Traveling To
            </label>
            <select
              id="destination"
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select a country</option>
              {europeanCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end w-1/3">
            <button
              onClick={() => setIsFormVisible(true)}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </motion.div>

      {/* Popup Form */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsFormVisible(false)}
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Enquiry Form
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
