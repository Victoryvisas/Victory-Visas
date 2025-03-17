import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact-us" className="py-16 bg-black text-white">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left Side - Contact Details */}
        <motion.div className="flex-1" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

          {/* Let's Talk */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-red-500 mb-2">
              <FaPhoneAlt className="inline-block mr-2" />
              Let's Talk
            </h3>
            <p>
              <a
                href="tel:+919818718419"
                className="transition duration-300 text-white hover:text-red-500"
              >
                +91 9818718419
              </a>
            </p>
          </div>

          {/* Email Us */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-red-500 mb-2">
              <FaEnvelope className="inline-block mr-2" />
              Email Us
            </h3>
            <p>
              <a
                href="mailto:INFO@VICTORYVISAS.COM"
                className="transition duration-300 text-white hover:text-red-500"
              >
                INFO@VICTORYVISAS.COM
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right Side - Working Hours & WhatsApp Integration */}
        <motion.div className="flex-1" variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-red-500 mb-2">
            <FaClock className="inline-block mr-2" />
            Working Hours
          </h3>
          <p>Mon to Sat - 10:30 AM to 6:30 PM</p>
          <p>Sunday - Holiday</p>

          {/* WhatsApp Integration */}
          <div className="mt-10">
            <a
              href="https://wa.me/919818718419"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:bg-green-600 hover:scale-105"
            >
              <FaWhatsapp className="text-xl mr-2" />
              Chat with us on WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Address */}
      <motion.div
        className="text-center mt-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <h3 className="text-2xl font-semibold text-red-500 mb-2">
          <FaMapMarkerAlt className="inline-block mr-2" />
          Contact Address
        </h3>
        <p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 text-white hover:text-red-500"
          >
            Delhi, India
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default ContactUs;
