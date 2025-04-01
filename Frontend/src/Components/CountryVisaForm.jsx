import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function CountryVisaForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", country: "", visaType: "", message: ""
  });
  const [loading, setLoading] = useState(false);

  const countries = ["Australia", "Canada", "Germany", "India", "UK", "USA", "Other"];
  const visaTypes = ["Tourist Visa", "Business Visa", "Study Visa", "Permanent&CitizenShip Visas", "Other"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://api.victoryvisas.comapi/visa-inquiries", formData);
      alert("Inquiry submitted successfully!");
      setFormData({
        name: "", email: "", phone: "", country: "", visaType: "", message: ""
      });
    } catch (error) {
      alert("Submission failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Visa Inquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Phone</label>
            <input
              type="tel"
              required
              className="w-full p-2 border rounded"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-2">Country</label>
            <select
              required
              className="w-full p-2 border rounded"
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
            >
              <option value="">Select Country</option>
              {countries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2">Visa Type</label>
          <select
            required
            className="w-full p-2 border rounded"
            value={formData.visaType}
            onChange={(e) => setFormData({...formData, visaType: e.target.value})}
          >
            <option value="">Select Visa Type</option>
            {visaTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label className="block mb-2">Message</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </motion.button>
      </form>
    </div>
  );
}