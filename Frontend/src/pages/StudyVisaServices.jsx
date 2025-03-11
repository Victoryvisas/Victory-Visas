import React from "react";
import { motion } from "framer-motion";
import StudyVisaPhoto from "../assets/study.jpg";

const StudyVisaServices = () => {
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
          src={StudyVisaPhoto}
          alt="Study Visa Services"
          className="w-full h-[300px] sm:h-[400px] object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
          <motion.h2
            className="text-lg sm:text-2xl font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlock Your Academic Potential
          </motion.h2>
          <motion.h1
            className="text-xl sm:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Guidance for Student Visa Applications
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        className="flex flex-col items-center p-4 sm:p-6 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Photo and Form Section */}
        <motion.div
          className="flex flex-col sm:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Image Section */}
          <motion.div
            className="flex-1 flex items-center justify-center mb-6 sm:mb-0 sm:mr-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={StudyVisaPhoto}
              alt="Study Visa Services"
              className="rounded-2xl shadow-lg w-full h-[200px] sm:h-full object-cover"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="flex-1 flex flex-col space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 text-center sm:text-left">
              Contact Us for Student Visa Assistance
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
              <motion.button
                type="submit"
                className="p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            At Victory Visas, we offer expert visa and immigration consultancy services for students
            seeking to pursue academic opportunities abroad. With a deep understanding of
            international education systems and visa regulations, we provide comprehensive support
            for securing Student Visas to various study destinations worldwide. Whether you are
            planning to enroll in undergraduate, postgraduate, or language programs, our team
            ensures a streamlined and hassle-free visa application process.
          </p>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            Our Student Visa Services Include:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600 mb-6">
            <li>Comprehensive Consultation & Guidance</li>
            <li>Document Preparation & Verification</li>
            <li>Visa Application Filing & Submission</li>
            <li>Visa Interview Coaching & Support</li>
            <li>Visa Progress Tracking & Updates</li>
            <li>Post-Visa Assistance & Pre-Departure Support</li>
            <li>Support for Dependent Visas</li>
          </ul>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            Why Choose Victory Visas?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600">
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

export default StudyVisaServices;
