import React from "react";
import { motion } from "framer-motion";
import australia from "../assets/australia.png";
import CountryVisaForm from "../Components/CountryVisaForm";

const Australia = () => {
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
      aria-label="Australia Visa Information"
    >
      {/* Header Section */}
      <motion.header
        variants={fadeIn}
        className="bg-blue-900 text-white text-center py-8 px-6 shadow-lg"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Explore Australia
        </h1>
        <p className="text-lg md:text-2xl mt-3 font-light tracking-wide">
          A Land of Wonders and Opportunities
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
              Australia is a diverse and captivating country, known for its
              stunning landscapes, vibrant cities, and unique wildlife. From
              the Great Barrier Reef to the bustling streets of Sydney,
              Australia offers endless opportunities for travelers, students,
              and professionals.
            </p>
            <p className="text-lg md:text-xl">
              Whether you&apos;re looking to explore, study, or work, Australia
              has something for everyone.
            </p>
          </div>

          {/* Image with Scale Animation */}
          <motion.div
            variants={scaleIn}
            className="flex-shrink-0 shadow-2xl rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }} // Add hover effect
          >
            <img
              src={australia}
              alt="A scenic view of Australia"
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
            className="flex-1 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg p-8"
            aria-labelledby="visa-info-title"
          >
            <h2
              id="visa-info-title"
              className="text-3xl font-extrabold text-blue-900 mb-4"
            >
              Australia Visas: Your Gateway to the Land Down Under
            </h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="list-disc list-inside text-lg space-y-3 text-gray-700"
            >
              {[
                "Tourist Visa: For travelers exploring Australia for leisure or holidays.",
                "Student Visa: For international students looking to study at an Australian educational institution.",
                "Work Visa: For those seeking employment in Australia or specific skilled job opportunities.",
                "Business Visa: For individuals looking to engage in business activities or investment opportunities in Australia.",
                "Visitor Visa: For short stays, whether for tourism, business, or family visits.",
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  <span className="font-bold">{item.split(":")[0]}:</span> {item.split(":")[1]}
                </motion.li>
              ))}
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
              How Victory Visas Helps You Obtain Your Australia Visa
            </h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-lg text-gray-700 space-y-4 leading-relaxed"
            >
              {[
                "Expert Consultation: We help determine the best visa type for your travel purpose.",
                "Document Assistance: Our team will guide you through the necessary paperwork, ensuring everything is in order.",
                "Smooth Application Submission: Victory Visas ensures your application is submitted accurately and efficiently to avoid delays.",
                "Continuous Updates: We keep you informed throughout the visa process, offering support every step of the way.",
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  <span className="font-bold">{item.split(":")[0]}:</span> {item.split(":")[1]}
                </motion.li>
              ))}
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
            Ready to Visit Australia?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Let Victory Visas take care of your visa application, so you can focus on planning your adventure. Start your Australian journey today with the right visa in hand!
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
          <CountryVisaForm />
        </motion.section>
      </motion.main>
    </motion.div>
  );
};

export default Australia;