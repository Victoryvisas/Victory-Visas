import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // For API calls
import aboutImage from "../assets/aboutus.jpg"; // Replace with the correct path to the image

const AboutUs = () => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // State to store About Us data
  const [aboutData, setAboutData] = useState({
    aboutText: "",
    services: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get("https://api.victoryvisas.com/api/about");
        if (response.data) {
          setAboutData(response.data);
        } else {
          setError("Failed to fetch About Us content.");
        }
      } catch (err) {
        console.error("Error fetching About Us content:", err);
        setError("Failed to fetch About Us content.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading About Us content...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <section id="about-us" className="py-16 bg-cyan-600">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left Side - Image */}
        <motion.div
          className="flex-1 mb-6 md:mb-0"
          variants={imageVariants}
        >
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="flex-1 text-left"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-black mb-6"
            variants={itemVariants}
          >
            {aboutData.aboutText}
          </motion.p>

          {/* Render Services */}
          {aboutData.services.map((service, index) => (
            <motion.div className="mb-6" key={index} variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-black text-lg">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
