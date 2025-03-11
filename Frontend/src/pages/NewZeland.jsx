import React, { useState } from "react";
import { motion } from "framer-motion";
import new_zeland from "../assets/new_zeland.png";

const NewZealand = () => {
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

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-blue-900 text-white text-center py-6"
      >
        <h1 className="text-3xl md:text-5xl font-bold">Discover New Zealand</h1>
        <p className="text-lg md:text-xl mt-2">A Paradise of Nature and Adventure</p>
      </motion.header>

      {/* Main Content Section */}
      <main className="p-6 md:p-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-gray-800"
        >
          <p className="text-lg md:text-xl">
            New Zealand is renowned for its breathtaking landscapes, from the snow-capped peaks of the Southern Alps to the lush rainforests and crystal-clear lakes. Whether you’re visiting for tourism, studying, or seeking career opportunities, New Zealand offers a unique and welcoming experience for all kinds of travelers.
          </p>
        </motion.section>

        {/* Image Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-8"
        >
          <img
            src={new_zeland}
            alt="New Zealand"
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
        </motion.section>

        {/* Visa Information Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 text-gray-800"
        >
          <h2 className="text-2xl font-bold text-blue-900">New Zealand Visas: Your Path to Exploring Aotearoa</h2>
          <ul className="list-disc list-inside mt-4 text-lg">
            <li>
              <span className="font-bold">Tourist Visa:</span> For travelers visiting New Zealand for leisure and exploration.
            </li>
            <li>
              <span className="font-bold">Student Visa:</span> For those planning to study at a New Zealand educational institution.
            </li>
            <li>
              <span className="font-bold">Work Visa:</span> For individuals wishing to work in New Zealand, either through skilled migration or specific employment opportunities.
            </li>
            <li>
              <span className="font-bold">Visitor Visa:</span> For short-term visits to New Zealand, including tourism, business, or family visits.
            </li>
            <li>
              <span className="font-bold">Working Holiday Visa:</span> For young travelers (usually 18-30) looking to work and travel in New Zealand for a limited period.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Each visa has its own requirements, and the process can vary depending on your nationality and intended stay.
          </p>
        </motion.section>

        {/* How Victory Visas Helps Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-blue-900">How Victory Visas Helps You Obtain Your New Zealand Visa</h2>
          <ul className="mt-4 text-lg text-gray-800">
            <li className="mt-2">
              <span className="font-bold">Visa Consultation:</span> Our team helps you determine which visa is best suited to your needs and travel purpose.
            </li>
            <li className="mt-2">
              <span className="font-bold">Document Guidance:</span> We assist with preparing the necessary documents to meet the New Zealand immigration requirements.
            </li>
            <li className="mt-2">
              <span className="font-bold">Smooth Application Process:</span> Victory Visas ensures your application is submitted without errors, avoiding delays or rejections.
            </li>
            <li className="mt-2">
              <span className="font-bold">Timely Updates:</span> We keep you informed throughout the process, offering support every step of the way.
            </li>
          </ul>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-900">Ready to Explore New Zealand?</h2>
          <p className="mt-4 text-lg text-gray-800">
            Let Victory Visas handle your visa application, ensuring a smooth and successful process. Start your New Zealand adventure today!
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Apply Now
          </button>
        </motion.section>

        {/* Form Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 bg-white p-6 md:p-12 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-blue-900 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="visaType" className="block text-lg font-semibold text-gray-700">
                Type of Visa
              </label>
              <select
                id="visaType"
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Select Visa Type</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Visitor Visa">Visitor Visa</option>
                <option value="Working Holiday Visa">Working Holiday Visa</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.section>
      </main>
    </div>
  );
};

export default NewZealand;