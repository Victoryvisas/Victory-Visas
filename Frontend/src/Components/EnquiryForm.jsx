import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const EnquiryForm = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    purpose: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10-15 digits).";
    }
    if (!formData.country) {
      newErrors.country = "Please select a country.";
    }
    if (!formData.purpose) {
      newErrors.purpose = "Please select a purpose.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("/api/enquiry/submit", formData);
        console.log("Form Submitted:", response.data);
        alert("Thank you for your submission!");
        onClose(); // Automatically close the form after submission
      } catch (error) {
        console.error(error);
        alert("There was an error submitting your enquiry.");
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Enquiry for {service}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="country">
                Country
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.country ? "border-red-500" : "border-gray-300"
                } rounded`}
              >
                <option value="" disabled>
                  Select a country
                </option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Other">Other</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="purpose">
              Purpose of Travelling
            </label>
            <select
              id="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.purpose ? "border-red-500" : "border-gray-300"
              } rounded`}
            >
              <option value="" disabled>
                Select a purpose
              </option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Study Visa">Study Visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Immigration">Immigration</option>
              <option value="Other">Other</option>
            </select>
            {errors.purpose && (
              <p className="text-red-500 text-sm">{errors.purpose}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your message"
              rows="4"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
