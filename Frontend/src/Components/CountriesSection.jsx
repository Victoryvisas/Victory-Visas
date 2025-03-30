import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import southAfricaFlag from "../assets/south_africa.png";
import newZealandFlag from "../assets/new_zeland.png";
import australiaFlag from "../assets/australia.png";
import usaFlag from "../assets/usa.png";
import ukFlag from "../assets/UK.png";
import canadaFlag from "../assets/canada.png";
import EnquiryForm from "./EnquiryForm"; // Adjust the path if needed

const CountriesSection = () => {
  const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const countries = [
    { name: "South Africa", path: "/south-africa", flag: southAfricaFlag },
    { name: "New Zealand", path: "/new-zealand", flag: newZealandFlag },
    { name: "Australia", path: "/australia", flag: australiaFlag },
    { name: "USA", path: "/usa", flag: usaFlag },
    { name: "UK", path: "/uk", flag: ukFlag },
    { name: "Canada", path: "/canada", flag: canadaFlag },
  ];

  return (
    <>
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

        {/* Example trigger button to show the EnquiryForm modal */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsFormVisible(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Enquire More
          </button>
        </div>
      </div>

      {/* Modal for EnquiryForm */}
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
            <EnquiryForm
              service="Visa Inquiry"
              onClose={() => setIsFormVisible(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CountriesSection;
