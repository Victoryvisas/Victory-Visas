import React, { useState } from "react";
import { motion } from "framer-motion";
import australia from "../assets/australia.png";

const Australia = () => {
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
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-900 text-white text-center py-6">
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Australia
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          A Land of Wonders and Opportunities
        </motion.p>
      </header>

      {/* Main Content Section */}
      <main className="p-6 md:p-12">
        <motion.section
          className="text-gray-800"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <p className="text-lg md:text-xl">
            Australia is a diverse and captivating country, known for its stunning landscapes, vibrant cities, and unique wildlife. From the Great Barrier Reef to the bustling streets of Sydney, Australia offers endless opportunities for travelers, students, and professionals. Whether you’re looking to explore, study, or work, Australia has something for everyone.
          </p>
        </motion.section>

        {/* Image Section */}
        <motion.section
          className="mt-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <img
            src={australia}
            alt="Australia"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.section>

        {/* Visa Information Section */}
        <motion.section
          className="mt-12 text-gray-800"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl font-bold text-blue-900">Australia Visas: Your Gateway to the Land Down Under</h2>
          <ul className="list-disc list-inside mt-4 text-lg">
            <li><span className="font-bold">Tourist Visa:</span> For travelers exploring Australia for leisure or holidays.</li>
            <li><span className="font-bold">Student Visa:</span> For international students looking to study at an Australian educational institution.</li>
            <li><span className="font-bold">Work Visa:</span> For those seeking employment in Australia or specific skilled job opportunities.</li>
            <li><span className="font-bold">Business Visa:</span> For individuals looking to engage in business activities or investment opportunities in Australia.</li>
            <li><span className="font-bold">Visitor Visa:</span> For short stays, whether for tourism, business, or family visits.</li>
          </ul>
          <p className="mt-4 text-lg">
            Each visa has its own set of requirements and processing times, and the application process can be quite detailed.
          </p>
        </motion.section>

        {/* How Victory Visas Helps Section */}
        <motion.section
          className="mt-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl font-bold text-blue-900">How Victory Visas Helps You Obtain Your Australia Visa</h2>
          <ul className="mt-4 text-lg text-gray-800">
            <li className="mt-2">
              <span className="font-bold">Expert Consultation:</span> We help determine the best visa type for your travel purpose.
            </li>
            <li className="mt-2">
              <span className="font-bold">Document Assistance:</span> Our team will guide you through the necessary paperwork, ensuring everything is in order.
            </li>
            <li className="mt-2">
              <span className="font-bold">Smooth Application Submission:</span> Victory Visas ensures your application is submitted accurately and efficiently to avoid delays.
            </li>
            <li className="mt-2">
              <span className="font-bold">Continuous Updates:</span> We keep you informed throughout the visa process, offering support every step of the way.
            </li>
          </ul>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl font-bold text-blue-900">Ready to Visit Australia?</h2>
          <p className="mt-4 text-lg text-gray-800">
            Let Victory Visas take care of your visa application, so you can focus on planning your adventure. Start your Australian journey today with the right visa in hand!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Apply Now
          </motion.button>
        </motion.section>

        {/* Form Section */}
        <motion.section
          className="mt-12 bg-white p-6 md:p-12 rounded-xl shadow-lg"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl font-bold text-blue-900 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
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
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
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
              <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Phone</label>
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
              <label htmlFor="visaType" className="block text-lg font-semibold text-gray-700">Type of Visa</label>
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
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
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
                whileHover={{ scale: 1.1 }}
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

export default Australia;
