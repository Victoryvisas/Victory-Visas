import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import { motion } from "framer-motion"; // Import Framer Motion for animations

// Import images for the Hero section
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";

const HeroSection = () => {
  const images = [photo1, photo2, photo3, photo4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center px-8 mt-16">
      {/* Hero Image Carousel */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#124769] via-transparent to-[#124769] z-10"></div>
      <motion.img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt="Hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full object-cover rounded-xl shadow-lg absolute inset-0"
      />

      {/* Hero Content */}
      <motion.div
        className="absolute z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Victory Visas
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Your Most Reliable Visa Partner
        </motion.p>
        <motion.button
          className="bg-[#24bbf2] text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-[#124769] shadow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919818718419?text=Hello%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-800 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
};

export default HeroSection;