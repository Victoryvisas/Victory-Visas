import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';
import { toast } from "react-toastify";

const ServiceVisaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Updated endpoint to match your backend route
      const response = await axios.post('https://api.victoryvisas.com/api/visaRequests/submit', formData);
      toast.success("Request submitted successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        visaType: '',
        message: ''
      });
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to submit request. Please try again.");
      console.error("Submission error:", error);
    }
  };

  return (
    <motion.div
      className="flex-1 flex flex-col space-y-4"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-lg font-semibold text-gray-800 sm:text-xl text-center sm:text-left">
        Contact Us for Visa Assistance
      </h2>
      <form className="flex flex-col space-y-4 h-full" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          required
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          onChange={handleChange}
          required
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Visa Type</option>
          <option value="business">Business Visa</option>
          <option value="study">Study Visa</option>
          <option value="tourist">Tourist Visa</option>
          <option value="immigration">Immigration Visa</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          placeholder="Message"
          rows="4"
          onChange={handleChange}
          required
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