import React, { useState } from "react";
import { motion } from "framer-motion";
import usaImage from "../assets/usa.png";

const USA = () => {
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
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
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
        <h1 className="text-3xl md:text-5xl font-bold">Explore the USA</h1>
        <p className="text-lg md:text-xl mt-2">
          The Land of Endless Opportunities
        </p>
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
            The United States is a land of incredible diversity, offering
            something for everyone. From the vibrant streets of New York to the
            breathtaking national parks like Yellowstone and the Grand Canyon,
            the USA is a top destination for travelers, students, and
            professionals alike. Discover endless opportunities and iconic
            experiences in this dynamic country.
          </p>
        </motion.section>

        {/* Image Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={imageVariant}
          className="mt-8"
        >
          <img
            src={usaImage}
            alt="USA"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-b-2xl"
          />
        </motion.section>

        {/* Visa Information Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 text-gray-800"
        >
          <h2 className="text-2xl font-bold text-blue-900">
            USA Visas: Your Path to the American Dream
          </h2>
          <ul className="list-disc list-inside mt-4 text-lg">
            <li>
              <span className="font-bold">Tourist Visa (B-2):</span> For leisure
              travel and visiting family or friends.
            </li>
            <li>
              <span className="font-bold">Business Visa (B-1):</span> For
              business meetings, conferences, and other professional activities.
            </li>
            <li>
              <span className="font-bold">Student Visa (F-1):</span> For
              international students attending academic programs in the USA.
            </li>
            <li>
              <span className="font-bold">Work Visa (H-1B, L-1):</span> For
              employment or specialized job opportunities in the USA.
            </li>
            <li>
              <span className="font-bold">Exchange Visitor Visa (J-1):</span>{" "}
              For cultural exchange programs, internships, or research.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Each visa type has specific eligibility requirements and processing
            times. The application process can be detailed and complex.
          </p>
        </motion.section>

        {/* How Victory Visas Helps Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-blue-900">
            How Victory Visas Helps You Secure Your USA Visa
          </h2>
          <ul className="mt-4 text-lg text-gray-800">
            <li className="mt-2">
              <span className="font-bold">Expert Guidance:</span> We help you
              select the right visa for your travel needs.
            </li>
            <li className="mt-2">
              <span className="font-bold">Document Preparation:</span> Our team
              ensures all your documents are complete and accurate.
            </li>
            <li className="mt-2">
              <span className="font-bold">Hassle-Free Submission:</span> We
              handle the application process to minimize delays and errors.
            </li>
            <li className="mt-2">
              <span className="font-bold">Ongoing Support:</span> Victory Visas
              keeps you updated throughout the visa process.
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
          <h2 className="text-2xl font-bold text-blue-900">
            Plan Your USA Journey Today
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Let Victory Visas simplify your visa process, so you can focus on
            your travel plans. Start your American adventure with confidence!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Apply Now
          </motion.button>
        </motion.section>

        {/* Form Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 bg-white p-6 md:p-12 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-blue-900 text-center">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Input fields */}
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-lg font-semibold text-gray-700"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            ))}

            {/* Visa Type */}
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
                <option value="Business Visa">Business Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Exchange Visitor Visa">
                  Exchange Visitor Visa
                </option>
              </select>
            </div>

            {/* Message */}
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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

export default USA;
