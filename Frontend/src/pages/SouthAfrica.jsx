import React from "react";
import { motion } from "framer-motion";
import south_africa from "../assets/south_africa.png";
import CountryVisaForm from "../Components/CountryVisaForm";

const SouthAfrica = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="bg-gray-100 min-h-screen"
    >
      {/* Header Section */}
      <motion.header
        variants={fadeIn}
        className="bg-blue-900 text-white text-center py-6 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          Discover South Africa
        </h1>
        <p className="text-lg md:text-xl mt-2">
          A Land of Diversity and Adventure
        </p>
      </motion.header>

      {/* Main Content Section */}
      <motion.main
        variants={staggerContainer}
        className="p-6 md:p-12"
        initial="hidden"
        animate="visible"
      >
        {/* Content and Image Section */}
        <motion.section
          variants={fadeIn}
          className="mt-8 flex flex-col md:flex-row md:items-start gap-6"
        >
          {/* Text Content */}
          <div className="flex-1 text-gray-800">
            <p className="text-lg md:text-xl text-justify">
              South Africa is a vibrant country known for its stunning
              landscapes, rich culture, and diverse wildlife. From the iconic
              Table Mountain in Cape Town to the thrilling safaris in Kruger
              National Park, it offers a unique experience for travelers.
              Whether you&apos;re visiting for tourism, business, or to study,
              South Africa’s dynamic offerings make it a top destination for
              travelers worldwide.
            </p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={south_africa}
              alt="South Africa"
              className="rounded-xl shadow-lg max-w-md md:max-w-lg h-auto object-cover"
            />
          </div>
        </motion.section>

        {/* Visa Information Section */}
        <motion.section variants={fadeIn} className="mt-12 text-gray-800">
          <h2 className="text-2xl font-bold text-blue-900">
            South Africa Visas: Everything You Need to Know
          </h2>
          <ul className="list-disc list-inside mt-4 text-lg space-y-2">
            <li>
              <span className="font-bold">Tourist Visa:</span> For travelers
              visiting South Africa for leisure or vacation.
            </li>
            <li>
              <span className="font-bold">Business Visa:</span> For business
              meetings, conferences, or work-related purposes.
            </li>
            <li>
              <span className="font-bold">Study Visa:</span> For students
              wishing to study in South Africa.
            </li>
            <li>
              <span className="font-bold">Transit Visa:</span> If you’re passing
              through South Africa to reach another destination.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Each visa type has specific requirements, and the application
            process can vary based on your country of residence.
          </p>
        </motion.section>

        {/* How Victory Visas Helps Section */}
        <motion.section variants={fadeIn} className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900">
            How Victory Visas Helps You Obtain Your South Africa Visa
          </h2>
          <ul className="mt-4 text-lg text-gray-800 space-y-2">
            <li>
              <span className="font-bold">Visa Consultation:</span> We help
              determine which visa type is right for your specific purpose of
              travel.
            </li>
            <li>
              <span className="font-bold">Document Preparation:</span> We assist
              with gathering and preparing the required documentation to meet
              the South African embassy's criteria.
            </li>
            <li>
              <span className="font-bold">Application Submission:</span> Victory
              Visas ensures that your application is submitted smoothly,
              avoiding common mistakes that can lead to delays.
            </li>
            <li>
              <span className="font-bold">Visa Updates:</span> We keep you
              informed throughout the process, providing timely updates and
              addressing any concerns.
            </li>
          </ul>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section variants={fadeIn} className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-blue-900">
            Ready to Explore South Africa?
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Let Victory Visas take the stress out of your visa application, so
            you can focus on enjoying your trip. Start your South African
            adventure today with the right visa in hand!
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
        <motion.section
          variants={fadeIn}
          className="mt-12 bg-white p-6 md:p-12 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-blue-900 text-center">
            Get in Touch
          </h2>
          <CountryVisaForm />
        </motion.section>
      </motion.main>
    </motion.div>
  );
};

export default SouthAfrica;