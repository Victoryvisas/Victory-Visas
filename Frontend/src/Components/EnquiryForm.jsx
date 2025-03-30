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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\d\s+-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (10-15 digits)";
    }
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.purpose) newErrors.purpose = "Purpose is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        service: service || "General Enquiry"
      };
      
      await axios.post("/api/enquiries", payload);
      alert("Thank you for your enquiry! We'll contact you soon.");
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: "" }));
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          disabled={isSubmitting}
        >
          <AiOutlineClose size={24} />
        </button>
        
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {service ? `Enquiry for ${service}` : "General Enquiry"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                Name *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                placeholder="Phone number"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="country">
                Country *
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.country ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select country</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="UK">United Kingdom</option>
                <option value="USA">United States</option>
                <option value="Other">Other</option>
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="purpose">
              Purpose of Enquiry *
            </label>
            <select
              id="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.purpose ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select purpose</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Permanent Residency">Permanent Residency</option>
              <option value="Other">Other</option>
            </select>
            {errors.purpose && <p className="text-red-500 text-xs mt-1">{errors.purpose}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              placeholder="Additional details about your enquiry..."
            />
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;