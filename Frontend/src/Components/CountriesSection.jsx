import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

  return (
    <div id="countries-section" className="bg-gray-100 py-8">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8 px-4 sm:px-0">
        Immigration Countries
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12">
        {countries.map((country) => (
          <motion.div
            key={country.name}
            onClick={() => navigate(country.path)}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="p-2">
              <motion.img
                src={country.flag}
                alt={country.name}
                className="w-full h-64 rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="text-center pb-4">
              <h3 className="text-lg font-semibold text-gray-700 hover:text-blue-500">
                {country.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountriesSection;
