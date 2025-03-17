import React from "react";
import { motion } from "framer-motion";

const ServiceVisaForm = () => {
  return (
    <motion.div
      className="flex-1 flex flex-col space-y-4"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-lg font-semibold text-gray-800 sm:text-xl text-center sm:text-left">
        Contact Us for Business Visa Assistance
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
  );
};

export default ServiceVisaForm;
