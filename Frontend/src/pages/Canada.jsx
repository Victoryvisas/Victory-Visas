import React, { useState } from "react";
import { motion } from "framer-motion";
import canadaImage from "../assets/canada.png";

const Canada = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // Add form submission logic here
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <motion.header
        className="bg-red-600 text-white text-center py-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Explore Canada</h1>
        <p className="text-lg md:text-xl mt-2">
          A Country of Natural Beauty and Opportunities
        </p>
      </motion.header>

      {/* Main Content Section */}
      <motion.main
        className="p-6 md:p-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Description Section */}
        <motion.section
          className="text-gray-800"
          variants={fadeInUp}
        >
          <p className="text-lg md:text-xl">
            Canada is a vast and diverse country, known for its breathtaking
            landscapes, multicultural cities, and welcoming people. From the
            towering Rocky Mountains to the cosmopolitan streets of Toronto and
            Vancouver, Canada offers endless possibilities for tourists,
            students, and professionals alike. Whether you're planning to visit,
            study, work, or immigrate, Canada has something for everyone.
          </p>
        </motion.section>

        {/* Image Section */}
        <motion.section
          className="mt-8"
          variants={fadeIn}
        >
          <motion.img
            src={canadaImage}
            alt="Canada"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </motion.section>

        {/* Visa Information Section */}
        <motion.section
          className="mt-12 text-gray-800"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-red-600">
            Canada Visas: Your Gateway to the Great White North
          </h2>
          <ul className="list-disc list-inside mt-4 text-lg">
            <motion.li variants={fadeIn}>Tourist Visa: For visitors exploring Canada.</motion.li>
            <motion.li variants={fadeIn}>Study Permit: For international students.</motion.li>
            <motion.li variants={fadeIn}>Work Permit: For individuals seeking employment.</motion.li>
            <motion.li variants={fadeIn}>Visitor Visa: For short-term visits.</motion.li>
            <motion.li variants={fadeIn}>
              Permanent Residency Visas: For those wishing to move to Canada permanently.
            </motion.li>
          </ul>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="mt-12 text-center"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-red-600">
            Ready to Discover Canada?
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Let Victory Visas take care of your visa application so you can focus on enjoying Canada.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Apply Now
          </motion.button>
        </motion.section>

        {/* Form Section */}
        <motion.section
          className="mt-12 bg-white p-6 md:p-12 rounded-xl shadow-lg"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-red-600 text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <motion.div variants={fadeInUp}>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                required
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                required
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="phone" className="block text-lg font-semibold">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                required
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="visaType" className="block text-lg font-semibold">
                Visa Type
              </label>
              <select
                id="visaType"
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
                required
              >
                <option value="">Select Visa Type</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Study Permit">Study Permit</option>
                <option value="Work Permit">Work Permit</option>
                <option value="Visitor Visa">Visitor Visa</option>
                <option value="Permanent Residency Visa">PR Visa</option>
              </select>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
                rows="4"
              />
            </motion.div>
            <motion.div
              className="text-center"
              variants={fadeIn}
            >
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg"
              >
                Submit
              </button>
            </motion.div>
          </form>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Canada;
