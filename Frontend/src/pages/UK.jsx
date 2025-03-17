import React, { useState } from "react";
import { motion } from "framer-motion";
import ukImage from "../assets/UK.png";
import CountryVisaForm from "../Components/CountryVisaForm";

const UK = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-900 text-white text-center py-6"
      >
        <h1 className="text-3xl md:text-5xl font-bold">Explore the UK</h1>
        <p className="text-lg md:text-xl mt-2">
          A Blend of History, Culture, and Innovation
        </p>
      </motion.header>

      {/* Main Content Section */}
      <main className="p-6 md:p-12">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-gray-800"
        >
          <p className="text-lg md:text-xl">
            The United Kingdom is a country filled with rich history, iconic
            landmarks, and diverse cultures. From the historic streets of London
            to the scenic landscapes of Scotland and Wales, the UK offers
            countless opportunities for travelers, students, and professionals.
            Whether you're visiting for tourism, study, work, or business, the
            UK welcomes millions of visitors each year.
          </p>
        </motion.section>

        {/* Image Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-8"
        >
          <img
            src={ukImage}
            alt="United Kingdom"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.section>

        {/* Visa Information Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-12 text-gray-800"
        >
          <h2 className="text-2xl font-bold text-blue-900">
            UK Visas: Your Entry to the United Kingdom
          </h2>
          <ul className="list-disc list-inside mt-4 text-lg">
            <li>
              <span className="font-bold">Tourist Visa:</span> For travelers
              visiting the UK for leisure, tourism, or to visit family and
              friends.
            </li>
            <li>
              <span className="font-bold">Student Visa:</span> For international
              students who wish to study at a recognized UK institution.
            </li>
            <li>
              <span className="font-bold">Work Visa:</span> For professionals
              seeking to work in the UK, including skilled workers,
              intra-company transfers, and temporary work visas.
            </li>
            <li>
              <span className="font-bold">Business Visa:</span> For individuals
              looking to engage in business activities or investment
              opportunities in the UK.
            </li>
            <li>
              <span className="font-bold">Visitor Visa:</span> For short-term
              visits for tourism, business, or family visits.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Each visa type has specific requirements, and the application
            process can vary depending on your nationality and travel purpose.
          </p>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-900">
            Ready to Visit the UK?
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Let Victory Visas handle your UK visa application so you can focus
            on enjoying your trip or starting your new chapter in the UK.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Apply Now
          </motion.button>
        </motion.section>

        {/* Form Section */}
        <CountryVisaForm country="UK" />
      </main>
    </div>
  );
};

export default UK;