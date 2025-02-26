import React, { useState } from "react";
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

  return (
    <div className="p-4 sm:p-6 lg:p-12 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left mb-6 text-cyan-600">
            Hassle-Free Flight Booking Services
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            At Victory Visas, we understand that travel planning can be a stressful experience, especially when it comes to booking flights. That's why we offer comprehensive and hassle-free flight booking services to ensure that your journey is as smooth and stress-free as possible. Whether you’re traveling for business, leisure, or any other purpose, our expert team is here to assist you with securing the best flights that suit your needs, budget, and schedule.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={flight_photo}
            alt="Flight booking"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 text-center">
          Our Flight Booking Services Include:
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4 text-sm sm:text-base lg:text-lg">
          <li><b>Customized Flight Options:</b> We take the time to understand your travel preferences, offering you personalized flight options based on your schedule, destination, and comfort level. Whether you need direct flights, stopovers, or special requests for seating, we ensure your journey is tailored to meet your specific requirements.</li>
          <li><b>Best Price Guarantee:</b> At Victory Visas, we aim to provide you with the most cost-effective flight options. Our flight booking services ensure that you get the best prices available, with access to special deals and discounts, so you can travel affordably without compromising on quality.</li>
          <li><b>Convenient Booking Process:</b> Booking your flights with Victory Visas is easy and efficient. Our team handles all aspects of the booking process, from selecting the right flights to confirming your reservation. All you need to do is sit back and relax while we take care of the details.</li>
          <li><b>Flexible Travel Options:</b> We understand that travel plans can change. That's why we offer flexible booking options that allow you to adjust your itinerary with minimal hassle. Whether you need to change your travel dates or require last-minute adjustments, we ensure you have the flexibility to make those changes without stress.</li>
          <li><b>Group Travel & Corporate Bookings:</b> Whether you are traveling with family, friends, or colleagues, we offer group travel services to ensure that everyone is on the same flight with smooth coordination. For corporate travel, we offer special group rates and easy coordination for business trips, conferences, and events.</li>
          <li><b>Global Destinations:</b> Our flight booking services cover a wide range of international destinations. Whether you’re flying to Europe, Asia, the Americas, or any other region, we offer global flight options that ensure you can reach your destination comfortably and on time.</li>
          <li><b>Dedicated Support:</b> From the moment you contact us, our customer support team is with you every step of the way. Should you encounter any issues or need assistance with your flight, our dedicated support team is available to provide prompt solutions, ensuring that your travel experience is as seamless as possible.</li>
        </ul>
      </div>

      {/* Why Choose Section */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 text-center">
          Why Choose Victory Visas for Your Flight Booking Needs?
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-4 text-sm sm:text-base lg:text-lg">
          <li><b>Stress-Free Travel Planning:</b> Our hassle-free flight booking services are designed to save you time and effort, allowing you to focus on your trip while we handle the logistics. We simplify the booking process, ensuring that you have a smooth experience from start to finish.</li>
          <li><b>Expert Guidance:</b> Our experienced team is knowledgeable about the best airlines, routes, and schedules. We offer expert advice to help you make informed choices that best fit your travel needs.</li>
          <li><b>Timely and Reliable Service:</b> With Victory Visas, you can count on timely, reliable flight bookings that meet your travel deadlines. We prioritize your schedule to ensure that you can make your journey with confidence.</li>
          <li><b>No Hidden Fees:</b> We provide transparent flight booking services with no hidden fees. The price you see is the price you pay, ensuring full transparency and no surprises.</li>
        </ul>
      </div>

      {/* Inquiry Form */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 text-center">
          Flight Inquiry Form
        </h2>
        <form className="bg-white p-4 sm:p-8 rounded-lg shadow-lg max-w-full sm:max-w-4xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
              { label: "Contact", name: "contact", type: "number", placeholder: "Enter your contact number" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
              { label: "Destination", name: "destination", type: "text", placeholder: "Enter your destination" },
              { label: "Travel Dates", name: "travelDates", type: "date" },
              { label: "Adults", name: "adults", type: "number", placeholder: "Number of adults" },
              { label: "Kids", name: "kids", type: "number", placeholder: "Number of kids" },
              { label: "Infants", name: "infants", type: "number", placeholder: "Number of infants" },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block font-medium mb-2 text-gray-600">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-6 sm:mt-8 w-full bg-cyan-500 text-white text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-cyan-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlightTickets;
