import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Importing images from the assets folder
import southAfricaFlag from "../assets/south_africa.png";
import newZealandFlag from "../assets/new_zeland.png";
import australiaFlag from "../assets/australia.png";
import usaFlag from "../assets/usa.png";
import ukFlag from "../assets/UK.png";
import canadaFlag from "../assets/canada.png";

const CountriesSection = () => {
  const navigate = useNavigate();

  const countries = [
    { name: "South Africa", path: "/south-africa", flag: southAfricaFlag },
    { name: "New Zealand", path: "/new-zealand", flag: newZealandFlag },
    { name: "Australia", path: "/australia", flag: australiaFlag },
    { name: "USA", path: "/usa", flag: usaFlag },
    { name: "UK", path: "/uk", flag: ukFlag },
    { name: "Canada", path: "/canada", flag: canadaFlag },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      id="countries-section"
      className="bg-gray-100 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Section Title */}
      <motion.h2
        className="text-center text-3xl font-bold text-gray-800 mb-8 px-4 sm:px-0"
        variants={itemVariants}
      >
        Immigration Countries
      </motion.h2>

      {/* Countries Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12"
        variants={containerVariants}
      >
        {countries.map((country) => (
          <motion.div
            key={country.name}
            onClick={() => navigate(country.path)}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Country Flag */}
            <div className="p-2">
              <motion.img
                src={country.flag}
                alt={country.name}
                 
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Country Name */}
            <div className="text-center pb-4">
              <motion.h3
                className="text-lg font-semibold text-gray-700 transition-colors duration-300 ease-in-out hover:text-blue-500"
                whileHover={{ color: "#3B82F6" }}
              >
                {country.name}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CountriesSection;
