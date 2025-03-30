import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import businessVisaImage from "../assets/immigration.jpg";
import touristVisaImage from "../assets/Tourist.jpg";
import studentVisaImage from "../assets/study.jpg";
import permanentResidencyImage from "../assets/study.jpg";
import EnquiryForm from "./EnquiryForm"; // Adjust the import path as needed

const ServiceSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const services = [
    {
      title: "Business Visas",
      description: "Comprehensive solutions for your business travel needs.",
      image: businessVisaImage,
      link: "/business-visas",
    },
    {
      title: "Tourist/Visitor Visas",
      description: "Explore new destinations with ease and confidence.",
      image: touristVisaImage,
      link: "/tourist-visas",
    },
    {
      title: "Student Visas",
      description: "Turn your academic aspirations into reality.",
      image: studentVisaImage,
      link: "/student-visas",
    },
    {
      title: "Permanent Residency",
      description: "Expert assistance in obtaining permanent residency status.",
      image: permanentResidencyImage,
      link: "/permanent-residency",
    },
  ];

  return (
    <section id="services" className="py-16 bg-cyan-600">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-white mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link to={service.link}>
                <div className="overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[#24bbf2] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
      {/* Enquiry Button */}
      <div className="flex justify-center py-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormVisible(true)}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl"
        >
          Explore More
        </motion.button>
      </div>
      

      {/* Enquiry Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsFormVisible(false)}
          ></div>

          {/* Form Container */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg z-60">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsFormVisible(false)}
            >
              <AiOutlineClose size={24} />
            </button>
            <EnquiryForm
              service="Visa Inquiry"
              onClose={() => setIsFormVisible(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceSection;
