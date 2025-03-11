import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import TouristVisaPhoto from "../assets/Tourist.jpg";

const TouristVisaServices = () => {
  return (
    <div>
      {/* Banner Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={TouristVisaPhoto}
          alt="Tourist Visa Services"
          className="w-full h-[300px] sm:h-[400px] object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Embark on Memorable Journeys
          </motion.h2>
          <motion.h1
            className="text-xl sm:text-2xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Trusted Partner for Tourist Visa Services
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Photo and Form Section */}
        <motion.div
          className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Image Section */}
          <motion.div
            className="flex-1 flex items-center justify-center mb-6 md:mb-0 md:mr-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={TouristVisaPhoto}
              alt="Tourist Visa Services"
              className="rounded-2xl shadow-lg w-full h-[200px] sm:h-[250px] md:h-full object-cover"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="flex-1 flex flex-col space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center md:text-left">
              Contact Us for Tourist Visa Assistance
            </h2>
            <form className="flex flex-col space-y-4 h-full">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Visa Type</option>
                <option value="business">Business Visa</option>
                <option value="study">Study Visa</option>
                <option value="tourist">Tourist Visa</option>
                <option value="immigration">Immigration Visa</option>
              </select>
              <textarea
                placeholder="Message"
                rows="4"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
            At Victory Visas, we specialize in providing comprehensive and expert visa consultancy
            services for individuals seeking to travel abroad for tourism, leisure, or visiting
            family and friends. Our goal is to ensure a smooth and efficient visa application
            process, allowing you to focus on planning your travels while we take care of the
            complex requirements.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
            We assist with Tourist and Visitor Visas for numerous global destinations, including
            popular countries such as the United States, Canada, Australia, Schengen Area
            countries, the United Kingdom, and many more. Our services are designed to meet the
            specific needs of each client, whether you're traveling for a short holiday, attending
            a family gathering, or exploring new opportunities abroad.
          </p>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Our Comprehensive Tourist Visa Services Include:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-600 mb-6">
            <li>Expert Visa Consultation</li>
            <li>Documentation Assistance</li>
            <li>Application Filing & Submission</li>
            <li>Visa Interview Preparation</li>
            <li>Visa Tracking & Updates</li>
            <li>Post-Visa Support</li>
            <li>Assistance with Multiple Entry and Extended Stays</li>
            <li>Family and Group Travel Assistance</li>
          </ul>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Why Choose Victory Visas?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-600">
            <li>Expertise in Global Travel</li>
            <li>Comprehensive Support</li>
            <li>Tailored Solutions</li>
            <li>Track Record of Success</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TouristVisaServices;
