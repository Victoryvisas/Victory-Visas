import React, { useState } from "react";
import { motion } from "framer-motion";
import travel_insurance_photo from "../assets/travelInsurance.png";
import axios from "axios";

const TravelInsurance = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    destination: "",
    travelDates: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error for the field
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.contact.trim() || !/^[0-9]+$/.test(formData.contact))
      newErrors.contact = "Valid contact number is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.destination.trim())
      newErrors.destination = "Destination is required.";
    if (!formData.travelDates)
      newErrors.travelDates = "Travel dates are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.victoryvisas.com/api/travel-insurance/submit",
        formData
      );
      console.log(response.data);
      alert("Thank you for your submission!");
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your inquiry.");
    }
  };
  const renderInputField = ({ label, name, type, placeholder }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label className="block font-medium mb-2 text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
      )}
    </motion.div>
  );

  return (
    <motion.div
      className="p-4 sm:p-6 lg:p-12 bg-gradient-to-b from-white to-gray-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left mb-6 text-cyan-600">
            Travel Insurance: Your Essential Travel Companion
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            When planning your next trip, whether it's a relaxing vacation, a
            business journey, or an adventurous exploration, one thing you
            should never overlook is travel insurance. Unexpected events can
            happen at any time, and travel insurance is designed to protect you
            from the unexpected. With comprehensive coverage, you can enjoy
            your travels knowing that you're financially protected, no matter
            what comes your way.
          </p>
        </div>
        <div className="flex-1">
          <motion.img
            src={travel_insurance_photo}
            alt="Travel Insurance"
            className="rounded-lg shadow-xl w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Information Sections */}
      {[
        {
          title: "What is Travel Insurance?",
          content:
            "Travel insurance is a type of insurance policy that covers unexpected events or emergencies that may occur while you're traveling. It provides financial protection against a wide range of issues, including medical emergencies, trip cancellations, lost luggage, flight delays, and even more severe situations like natural disasters or accidents. Travel insurance can be purchased for both international and domestic trips, depending on the type of coverage you need.",
        },
        {
          title: "Why Do You Need Travel Insurance?",
          content:
            "While traveling can be exciting and fulfilling, it can also come with its fair share of uncertainties. A single missed flight, a sudden illness, or lost luggage can quickly turn your dream vacation into a nightmare.",
        },
      ].map((section, idx) => (
        <motion.div
          key={idx}
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 text-center">
            {section.title}
          </h2>
          <div className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
            {section.content}
          </div>
        </motion.div>
      ))}

      {/* Inquiry Form */}
      <motion.div
        className="mt-12 sm:mt-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 text-center">
          Travel Insurance Inquiry Form
        </h2>
        <form
          className="bg-white p-4 sm:p-8 rounded-lg shadow-lg max-w-full sm:max-w-4xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                label: "Name",
                name: "name",
                type: "text",
                placeholder: "Enter your name",
              },
              {
                label: "Contact",
                name: "contact",
                type: "number",
                placeholder: "Enter your contact number",
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "Enter your email",
              },
              {
                label: "Destination",
                name: "destination",
                type: "text",
                placeholder: "Enter your destination",
              },
              {
                label: "Travel Dates",
                name: "travelDates",
                type: "date",
              },
            ].map((field, idx) => renderInputField(field))}
          </div>
          <motion.button
            type="submit"
            className="mt-6 sm:mt-8 w-full bg-cyan-500 text-white text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-cyan-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default TravelInsurance;
