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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted: ", formData);
      // Add form submission logic here
    };
  
    return (
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
            <option value="Business Visa">Business Visa</option>
            <option value="Study Visa">Study Visa</option>
            <option value="Permanent&CitizenShip Visas">
              Permanent & Citizenship Visas
            </option>
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
    );
  };
  
  export default CountryVisaForm;