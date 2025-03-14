import React from "react";
import { motion } from "framer-motion";
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
            We are a leading visa services provider, offering tailored solutions
            for immigration, study, and tourist visas.
          </motion.p>

          {/* Our Best Services */}
          <motion.div className="mb-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Our Best Services
            </h3>
            <p className="text-black text-lg">
              We provide expert advice and fast processing for all types of
              visas, ensuring a smooth experience for our clients.
            </p>
          </motion.div>

          {/* Customer Receiving */}
          <motion.div className="mb-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Customer Receiving
            </h3>
            <p className="text-black text-lg">
              We pride ourselves on exceptional customer service, providing
              assistance and support at every step of your visa application.
            </p>
          </motion.div>

          {/* Low Pricing & Best Quality */}
          <motion.div className="mb-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Low Pricing & Best Quality
            </h3>
            <p className="text-black text-lg">
              Our services are affordably priced without compromising on
              quality, offering the best value for our clients.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
