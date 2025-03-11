import React, { useState } from "react";
import { motion } from "framer-motion";
import flight_photo from "../assets/australia.png";

const FlightTickets = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    destination: "",
    travelDates: "",
    adults: "",
    kids: "",
    infants: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error for the field
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
    if (!formData.adults || parseInt(formData.adults, 10) < 1)
      newErrors.adults = "At least one adult is required.";
    if (formData.kids && parseInt(formData.kids, 10) < 0)
      newErrors.kids = "Number of kids cannot be negative.";
    if (formData.infants && parseInt(formData.infants, 10) < 0)
      newErrors.infants = "Number of infants cannot be negative.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Perform form submission logic here
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const formFields = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "contact", type: "tel", placeholder: "Contact Number" },
    { name: "email", type: "email", placeholder: "Email Address" },
    { name: "destination", type: "text", placeholder: "Destination" },
    { name: "travelDates", type: "date", placeholder: "Travel Dates" },
    { name: "adults", type: "number", placeholder: "Number of Adults" },
    { name: "kids", type: "number", placeholder: "Number of Kids" },
    { name: "infants", type: "number", placeholder: "Number of Infants" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-12 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="flex-1" variants={slideIn}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left mb-6 text-cyan-600">
            Hassle-Free Flight Booking Services
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            At Victory Visas, we understand that travel planning can be a
            stressful experience, especially when it comes to booking flights.
            That's why we offer comprehensive and hassle-free flight booking
            services to ensure that your journey is as smooth and stress-free as
            possible. Whether you’re traveling for business, leisure, or any
            other purpose, our expert team is here to assist you with securing
            the best flights that suit your needs, budget, and schedule.
          </p>
        </motion.div>
        <motion.div className="flex-1" variants={fadeIn}>
          <img
            src={flight_photo}
            alt="Flight booking"
            className="rounded-lg shadow-xl w-full"
          />
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="mt-12 sm:mt-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 text-center">
          Our Flight Booking Services Include:
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4 text-sm sm:text-base lg:text-lg">
          {[
            {
              title: "Customized Flight Options",
              desc: "We take the time to understand your travel preferences, offering you personalized flight options based on your schedule, destination, and comfort level.",
            },
            {
              title: "Best Price Guarantee",
              desc: "Our flight booking services ensure that you get the best prices available, with access to special deals and discounts.",
            },
            {
              title: "Convenient Booking Process",
              desc: "Our team handles all aspects of the booking process, from selecting the right flights to confirming your reservation.",
            },
            {
              title: "Flexible Travel Options",
              desc: "We offer flexible booking options that allow you to adjust your itinerary with minimal hassle.",
            },
          ].map((service, index) => (
            <motion.li
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={slideIn}
              viewport={{ once: true }}
            >
              <b>{service.title}</b>: {service.desc}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Inquiry Form */}
      <motion.div
        className="mt-12 sm:mt-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 text-center">
          Flight Inquiry Form
        </h2>
        <motion.form
          className="bg-white p-4 sm:p-8 rounded-lg shadow-lg max-w-full sm:max-w-4xl mx-auto"
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {formFields.map((field, index) => (
              <div key={index}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-6 bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700 transition"
          >
            Submit Inquiry
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default FlightTickets;
