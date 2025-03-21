import React from "react";
import { motion } from "framer-motion";
import canadaImage from "../assets/canada.png";
import CountryVisaForm from "../Components/CountryVisaForm";

const Canada = () => {
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
      aria-label="Canada Visa Information"
    >
      {/* Header Section */}
      <motion.header
        variants={fadeIn}
        className="bg-blue-900 text-white text-center py-8 px-6 shadow-lg"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">Explore Canada</h1>
        <p className="text-lg md:text-2xl mt-3 font-light tracking-wide">
          A Country of Natural Beauty and Opportunities
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
              Canada is a vast and diverse country, known for its breathtaking
              landscapes, multicultural cities, and welcoming people. From the
              towering Rocky Mountains to the cosmopolitan streets of Toronto and
              Vancouver, Canada offers endless possibilities for tourists,
              students, and professionals alike.
            </p>
            <p className="text-lg md:text-xl">
              Whether you're planning to visit, study, work, or immigrate,
              Canada has something for everyone.
            </p>
          </div>

          {/* Image with Scale Animation */}
          <motion.div
            variants={scaleIn}
            className="flex-shrink-0 shadow-2xl rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }} // Add hover effect
          >
            <img
              src={canadaImage}
              alt="A scenic view of Canada"
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
              Canada Visas: Everything You Need to Know
            </h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="list-disc list-inside text-lg space-y-3 text-gray-700"
            >
              {[
                "Tourist Visa: For visitors exploring Canada for leisure, tourism, or to visit family and friends.",
                "Study Permit: For international students planning to study at a Canadian institution.",
                "Work Permit: For individuals seeking employment in Canada or working temporarily.",
                "Visitor Visa: For short-term visits to Canada for business, tourism, or family reasons.",
                "Permanent Residency Visas: For those wishing to move to Canada permanently through immigration programs like Express Entry, family sponsorship, or provincial nominee programs.",
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
            className="flex-1 bg-gradient-to-r from-white to-red-50 rounded-lg shadow-lg p-8"
            aria-labelledby="victory-visas-title"
          >
            <h2
              id="victory-visas-title"
              className="text-3xl font-extrabold text-blue-900 mb-4"
            >
              How Victory Visas Helps You Obtain Your Canada Visa
            </h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-lg text-gray-700 space-y-4 leading-relaxed"
            >
              {[
                "Visa Consultation: We help determine which visa type is right for your specific purpose of travel.",
                "Document Preparation: We assist with gathering and preparing the required documentation to meet the Canadian embassy's criteria.",
                "Application Submission: Victory Visas ensures that your application is submitted smoothly, avoiding common mistakes that can lead to delays.",
                "Visa Updates: We keep you informed throughout the process, providing timely updates and addressing any concerns.",
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
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Ready to Explore Canada?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Let Victory Visas take the stress out of your visa application, so
            you can focus on enjoying your trip. Start your Canadian adventure
            today with the right visa in hand!
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
          <CountryVisaForm/>


        </motion.section>
      </motion.main>
    </motion.div>
  );
};

export default Canada;