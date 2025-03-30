import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";

const CountryVisaForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/country-visa/submit', formData);
      console.log(response.data); // Handle success message
      alert("Thank you for your submission!");
    } catch (error) {
      console.error(error); // Handle error
      alert("There was an error submitting your inquiry.");
    }
  };

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Visa Inquiry Form
          </h2>
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">
                Visa Type
              </label>
              <select
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select Visa Type
                </option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Business Visa">Business Visa</option>
                <option value="Study Visa">Study Visa</option>
                <option value="Permanent&CitizenShip Visas">
                  Permanent & Citizenship Visas
                </option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-lg font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Leave a message (optional)"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl"
            >
              Submit Inquiry
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryVisaForm;
