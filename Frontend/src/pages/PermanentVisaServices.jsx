import React from "react";
import { motion } from "framer-motion";
import PermanentVisaPhoto from "../assets/Tourist.jpg";
import ServiceVisaForm from "../Components/ServiceVisaForm";

const PermanentVisaServices = () => {
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
          src={PermanentVisaPhoto}
          alt="Permanent Visa Services"
          className="w-full h-[300px] sm:h-[400px] object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
          <motion.h2
            className="text-lg sm:text-2xl font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Achieve Your Dreams of Settling Abroad
          </motion.h2>
          <motion.h1
            className="text-xl sm:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Permanent Residency & Citizenship Services
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
              src={PermanentVisaPhoto}
              alt="Permanent Visa Services"
              className="rounded-2xl shadow-lg w-full h-[200px] sm:h-full object-cover"
            />
          </motion.div>

          {/* Form Section */}
          <ServiceVisaForm/>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            At Victory Visas, we specialize in providing expert immigration consultancy services for
            individuals seeking Permanent Residency (PR) or Citizenship in various countries.
            Whether you're looking to settle abroad for work, family, or lifestyle reasons, our team
            is committed to guiding you through every step of the process with efficiency, accuracy,
            and personalized support.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Our services are tailored to assist individuals who wish to settle in top destinations
            such as the United States, Canada, Australia, the United Kingdom, New Zealand, and many
            other countries worldwide. We provide holistic solutions to help you establish a
            permanent life abroad.
          </p>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            Our Comprehensive Permanent Residency & Citizenship Services Include:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600 mb-6">
            <li>Personalized Eligibility Assessment</li>
            <li>Permanent Residency Application Assistance</li>
            <li>Citizenship & Naturalization Services</li>
            <li>Investor & Entrepreneur Pathways</li>
            <li>Family Sponsorship & Reunification</li>
            <li>Support for Dependent Visas</li>
            <li>Appeals & Reapplications</li>
            <li>Post-Approval Services</li>
          </ul>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            Why Choose Victory Visas?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600">
            <li>Expert Knowledge of Global Immigration Laws</li>
            <li>Tailored Solutions for Individual Needs</li>
            <li>Comprehensive End-to-End Support</li>
            <li>High Success Rate</li>
            <li>Transparent and Reliable Services</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PermanentVisaServices;
