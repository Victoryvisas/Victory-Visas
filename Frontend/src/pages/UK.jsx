import React from "react";
import { motion } from "framer-motion";
import ukImage from "../assets/UK.png";
import CountryVisaForm from "../Components/CountryVisaForm";

const UK = () => {
  // Fade-in animation with slight upward motion
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Staggered container animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Staggered list item animation
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Scale animation for images
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen"
      aria-label="UK Visa Information"
    >
      {/* Header Section */}
      <motion.header
        variants={fadeIn}
        className="bg-blue-900 text-white text-center py-8 px-6 shadow-lg"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">Discover the UK</h1>
        <p className="text-lg md:text-2xl mt-3 font-light tracking-wide">
          A Blend of History, Culture, and Innovation
        </p>
      </motion.header>

      {/* Main Content Section */}
      <motion.main
        variants={staggerContainer}
        className="p-8 md:p-16 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {/* Content and Image Section */}
        <motion.section
          variants={fadeIn}
          className="mt-12 flex flex-col md:flex-row md:items-center gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg md:text-xl">
              The United Kingdom is a country filled with rich history, iconic
              landmarks, and diverse cultures. From the historic streets of London
              to the scenic landscapes of Scotland and Wales, the UK offers
              countless opportunities for travelers, students, and professionals.
            </p>
            <p className="text-lg md:text-xl">
              Whether you&apos;re visiting for tourism, study, work, or business, the
              UK welcomes millions of visitors each year.
            </p>
          </div>

          {/* Image with Scale Animation */}
          <motion.div
            variants={scaleIn}
            className="flex-shrink-0 shadow-2xl rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }} // Add hover effect
          >
            <img
              src={ukImage}
              alt="A scenic view of the United Kingdom"
              className="w-[500px] h-[300px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* Visa Information and Victory Visas Sections */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 px-8 md:px-16 py-16">
          {/* Visa Information Section */}
          <motion.section
            variants={fadeIn}
            className="flex-1 bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-lg p-8"
            aria-labelledby="visa-info-title"
          >
            <h2
              id="visa-info-title"
              className="text-3xl font-extrabold text-blue-900 mb-4"
            >
              UK Visas: Your Entry to the United Kingdom
            </h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="list-disc list-inside text-lg space-y-3 text-gray-700"
            >
              {["Tourist Visa: For leisure and tourism.", "Student Visa: For studying at recognized institutions.", "Work Visa: For skilled workers and professionals.", "Business Visa: For engaging in business activities.", "Visitor Visa: For short-term visits."].map(
                (item, index) => (
                  <motion.li key={index} variants={staggerItem}>
                    <span className="font-bold">{item.split(":")[0]}:</span> {item.split(":")[1]}
                  </motion.li>
                )
              )}
            </motion.ul>
          </motion.section>

          {/* How Victory Visas Helps Section */}
          <motion.section
            variants={fadeIn}
            className="flex-1 bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-lg p-8"
            aria-labelledby="victory-visas-title"
          >
            <h2
              id="victory-visas-title"
              className="text-3xl font-extrabold text-blue-900 mb-4"
            >
              How Victory Visas Helps You Obtain Your UK Visa
            </h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-lg text-gray-700 space-y-4 leading-relaxed"
            >
              {["Visa Consultation: Tailored to your travel purpose.", "Document Preparation: Ensuring all documents meet UK standards.", "Application Submission: Smooth and error-free submissions.", "Visa Updates: Timely updates and support."].map(
                (item, index) => (
                  <motion.li key={index} variants={staggerItem}>
                    <span className="font-bold">{item.split(":")[0]}:</span> {item.split(":")[1]}
                  </motion.li>
                )
              )}
            </motion.ul>
          </motion.section>
        </div>

        {/* Call to Action Section */}
        <motion.section
          variants={fadeIn}
          className="mt-16 text-center bg-gray-50 rounded-lg shadow-lg p-8"
          whileHover={{ scale: 1.02 }} // Add hover effect
        >
          <h2 className="text-3xl font-extrabold text-blue-900">
            Ready to Explore the UK?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Let Victory Visas handle your visa application, so you can focus on
            your journey. Start your UK adventure with ease!
          </p>
        </motion.section>

        {/* Form Section */}
        <motion.section
          variants={fadeIn}
          className="mt-16 bg-transparent"
          aria-labelledby="visa-form-title"
        >
          <h2 id="visa-form-title" className="sr-only">
            Visa Application Form
          </h2>
          <CountryVisaForm country="UK" />
        </motion.section>
      </motion.main>
    </motion.div>
  );
};

export default UK;