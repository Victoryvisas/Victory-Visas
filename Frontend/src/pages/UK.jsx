import React, { useState } from "react";
import { motion } from "framer-motion";
import ukImage from "../assets/UK.png";

const UK = () => {
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
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-12 bg-white p-6 md:p-12 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-blue-900 text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
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
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700"
              >
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
              <label
                htmlFor="phone"
                className="block text-lg font-semibold text-gray-700"
              >
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
              <label
                htmlFor="visaType"
                className="block text-lg font-semibold text-gray-700"
              >
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
                <option value="Business Visa">Business Visa</option>
                <option value="Visitor Visa">Visitor Visa</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700"
              >
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </motion.section>
      </main>
    </div>
  );
};

export default UK;