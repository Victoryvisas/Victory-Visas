import React from "react";
import { motion } from "framer-motion";
import usaImage from "../assets/usa.png";
import CountryVisaForm from "../Components/CountryVisaForm";

const USA = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen"
      aria-label="USA Visa Information"
    >
      {/* Header Section */}
      <motion.header
        variants={fadeIn}
        className="bg-blue-900 text-white text-center py-8 px-6 shadow-lg"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">Discover the USA</h1>
        <p className="text-lg md:text-2xl mt-3 font-light tracking-wide">
          The Land of Endless Opportunities
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
              The United States is a land of incredible diversity, offering
              something for everyone. From vibrant cities to breathtaking
              national parks, it’s a top destination for travelers, students,
              and professionals alike.
            </p>
            <p className="text-lg md:text-xl">
              Whether you’re visiting for leisure, business, or education, the
              USA offers countless opportunities and experiences.
            </p>
          </div>

          {/* Image with Scale Animation */}
          <motion.div
            variants={scaleIn}
            className="flex-shrink-0 shadow-2xl rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }} // Add hover effect
          >
            <img
              src={usaImage}
              alt="A scenic view of the USA"
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
              USA Visas: Your Path to the American Dream
            </h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="list-disc list-inside text-lg space-y-3 text-gray-700"
            >
              {[
                "Tourist Visa (B-2): For leisure travel and visiting family or friends.",
                "Business Visa (B-1): For business meetings, conferences, and professional activities.",
                "Student Visa (F-1): For attending academic programs in the USA.",
                "Work Visa (H-1B, L-1): For employment opportunities.",
                "Exchange Visitor Visa (J-1): For cultural exchange programs.",
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  <span className="font-bold">{item.split(":")[0]}:</span>{" "}
                  {item.split(":")[1]}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* How Victory Visas Helps Section */}
          <motion.section
            variants={fadeIn}
            className="flex-1 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg p-8"
            aria-labelledby="victory-visas-title"
          >
            <h2
              id="victory-visas-title"
              className="text-3xl font-extrabold text-blue-900 mb-4"
            >
              How Victory Visas Helps You Secure Your USA Visa
            </h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-lg text-gray-700 space-y-4 leading-relaxed"
            >
              {[
                "Visa Consultation: Expert advice for selecting the right visa.",
                "Document Preparation: Ensuring all your documents are complete.",
                "Application Submission: Smooth handling of the process to minimize delays.",
                "Ongoing Support: Keeping you informed at every step.",
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  <span className="font-bold">{item.split(":")[0]}:</span>{" "}
                  {item.split(":")[1]}
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
            Start Your USA Adventure Today
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Let Victory Visas take the hassle out of your visa application.
            Begin your journey with confidence!
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

export default USA;
