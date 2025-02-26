import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center px-8 mt-16">
      {/* Hero Section */}
      <img
        src={images[currentImageIndex]}
        alt="Hero"
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out rounded-2xl shadow-lg"
      />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919392581051?text=Hello%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default HeroSection;
