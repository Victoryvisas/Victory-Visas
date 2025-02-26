import React from "react";
import BusinessVisaPhoto from "../assets/business-visa-photo.png";

const BusinessVisaServices = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src={BusinessVisaPhoto} // Use the appropriate image file for the banner
          alt="Business Visa Services"
          className="w-full h-[400px] object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Explore Global Business Opportunities
          </h2>
          <h1 className="text-2xl sm:text-4xl font-bold mt-2">
            Your Reliable Partner for Business Visa Services
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center p-6 bg-gray-100 sm:p-8">
        {/* Photo and Form Section */}
        <div className="flex flex-col sm:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-8">
          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center mb-6 sm:mb-0 sm:mr-6">
            <img
              src={BusinessVisaPhoto}
              alt="Business Visa Services"
              className="rounded-2xl shadow-lg w-full h-auto sm:h-full object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="flex-1 flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 sm:text-xl text-center sm:text-left">
              Contact Us for Business Visa Assistance
            </h2>
            <form className="flex flex-col space-y-4 h-full">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Visa Type</option>
                <option value="business">Business Visa</option>
                <option value="study">Study Visa</option>
                <option value="tourist">Tourist Visa</option>
                <option value="immigration">Immigration Visa</option>
              </select>
              <textarea
                placeholder="Message"
                rows="4"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-8">
          <p className="text-gray-600 mb-6">
            At Victory Visas, we specialize in offering expert immigration and visa consultancy
            services for businesses and entrepreneurs seeking to travel abroad for professional
            purposes. Whether you are attending meetings, conferences, negotiations, or overseeing
            business operations, our team is dedicated to providing seamless and efficient services
            that ensure your business visa application is processed smoothly and promptly.
          </p>
          <p className="text-gray-600 mb-6">
            Our expertise spans a wide range of Business Visa categories, including those for
            short-term visits, long-term business stays, investment opportunities, and corporate
            transfers. We assist clients looking to do business in countries such as the USA, UK,
            Canada, Australia, the Schengen Area, Singapore, and many more.
          </p>
          <h2 className="text-lg font-semibold text-gray-800 sm:text-xl mb-4">
            Our Comprehensive Business Visa Services Include:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Expert Consultation & Strategy</li>
            <li>Document Preparation & Verification</li>
            <li>Visa Application Filing & Submission</li>
            <li>Visa Interview Preparation</li>
            <li>Tracking & Status Updates</li>
            <li>Post-Visa Assistance & Travel Coordination</li>
            <li>Support for Corporate Transfers & Work Permits</li>
            <li>Assistance with Multiple-Entry and Long-Term Visas</li>
          </ul>
          <h2 className="text-lg font-semibold text-gray-800 sm:text-xl mb-4">
            Why Choose Victory Visas?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Global Expertise</li>
            <li>Tailored Solutions for Business Needs</li>
            <li>Streamlined Process</li>
            <li>Comprehensive Support</li>
            <li>Proven Track Record</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessVisaServices;
