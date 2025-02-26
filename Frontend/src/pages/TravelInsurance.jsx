import React, { useState } from "react";
import australia from "../assets/australia.png";

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
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.contact.trim()) newErrors.contact = "Contact is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.destination.trim()) newErrors.destination = "Destination is required.";
    if (!formData.travelDates.trim()) newErrors.travelDates = "Travel dates are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", contact: "", email: "", destination: "", travelDates: "" });
      setErrors({});
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-8 space-y-6 md:space-y-0 md:space-x-8">
      {/* Left Side Content */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4 text-cyan-600">Travel Insurance: Your Essential Travel Companion</h1>
        <p className="mb-4">
          When planning your next trip, whether it's a relaxing vacation, a business journey, or an adventurous exploration, one thing you should never overlook is travel insurance. Unexpected events can happen at any time, and travel insurance is designed to protect you from the unexpected. With comprehensive coverage, you can enjoy your travels knowing that you're financially protected, no matter what comes your way.
        </p>
        <h2 className="text-2xl font-semibold mb-2">What is Travel Insurance?</h2>
        <p className="mb-4">
          Travel insurance is a type of insurance policy that covers unexpected events or emergencies that may occur while you're traveling. It provides financial protection against a wide range of issues, including medical emergencies, trip cancellations, lost luggage, flight delays, and even more severe situations like natural disasters or accidents. Travel insurance can be purchased for both international and domestic trips, depending on the type of coverage you need.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Why Do You Need Travel Insurance?</h2>
        <p className="mb-4">
          While traveling can be exciting and fulfilling, it can also come with its fair share of uncertainties. A single missed flight, a sudden illness, or lost luggage can quickly turn your dream vacation into a nightmare.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Types of Travel Insurance Coverage</h2>
        <p className="mb-4">
          Travel insurance plans come in a variety of options, each offering specific coverage. You can choose a plan based on your travel needs, whether you're going on a short trip or a lengthy international journey. The main types of coverage include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Medical Insurance:</strong> Covers emergency medical expenses, evacuation, and hospital stays.</li>
          <li><strong>Trip Cancellation and Interruption Insurance:</strong> Reimburses you for pre-paid, non-refundable trip costs if you have to cancel or cut your trip short due to unforeseen reasons.</li>
          <li><strong>Baggage Loss and Delay Insurance:</strong> Protects your luggage and personal belongings in case of theft, loss, or delay.</li>
          <li><strong>Flight Delay Insurance:</strong> Covers costs incurred due to flight delays, such as meals, accommodations, and rebooking fees.</li>
          <li><strong>Accidental Death and Dismemberment Insurance:</strong> Provides financial protection in the event of death or serious injury while traveling.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Victory Visas: Helping You Travel Smoothly and Securely</h2>
        <p className="mb-4">
          At Victory Visas, we understand that navigating the complexities of travel planning can be overwhelming. That's why we’re here to guide you every step of the way, ensuring that your travel experience is not only smooth but also fully insured.
        </p>
        <p className="mb-4">
          Our partnership with leading travel insurance providers means we can help you secure the best travel insurance coverage tailored to your needs. Whether you're traveling for business, leisure, or studying abroad, we provide you with the right tools to protect your journey.
        </p>
        <p className="mb-4">
          Here's how Victory Visas can help you travel with peace of mind:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Expert Assistance with Insurance:</strong> Our team will help you select the most suitable travel insurance plan that meets your specific needs, offering you protection in case of unexpected events.</li>
          <li><strong>Comprehensive Coverage:</strong> With our insurance options, you're covered for medical emergencies, trip cancellations, lost baggage, flight delays, and more. Whatever happens during your travels, we’ve got you covered.</li>
          <li><strong>Streamlined Travel Experience:</strong> We not only assist with your visa and travel documentation but also ensure you are well-prepared for unforeseen circumstances by recommending reliable insurance options.</li>
          <li><strong>Stress-Free Travel Planning:</strong> Let Victory Visas take the stress out of your travel preparations, so you can focus on enjoying your trip without worrying about potential risks.</li>
        </ul>
        <p className="mb-4">
          Whether you are heading on a short getaway or a long-term international adventure, Victory Visas is here to ensure that your travels are protected from start to finish. With the right travel insurance in place, you can travel with the confidence that any challenges that arise will be handled smoothly.
        </p>
      </div>

      {/* Right Side Image and Form */}
      <div className="md:w-1/2">
        <img
          src={australia}
          alt="Travel Insurance"
          className="w-full h-60 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">Travel Insurance Enquiry Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="contact" className="block text-lg font-medium mb-2">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Your Contact Number"
            />
            {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Your Email Address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="destination" className="block text-lg font-medium mb-2">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Your Travel Destination"
            />
            {errors.destination && (
              <p className="text-red-500 text-sm">{errors.destination}</p>
            )}
          </div>
          <div>
            <label htmlFor="travelDates" className="block text-lg font-medium mb-2">
              Travel Dates
            </label>
            <input
              type="text"
              id="travelDates"
              value={formData.travelDates}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Your Travel Dates"
            />
            {errors.travelDates && (
              <p className="text-red-500 text-sm">{errors.travelDates}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TravelInsurance;
