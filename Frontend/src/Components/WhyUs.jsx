import { FaUserFriends, FaAward, FaHandHoldingUsd, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function WhyUs() {
  const features = [
    {
      icon: <FaUserFriends size={40} className="text-cyan-700" />,
      title: "Exceptional Staff",
    },
    {
      icon: <FaAward size={40} className="text-cyan-700" />,
      title: "Premium Quality",
    },
    {
      icon: <FaHandHoldingUsd size={40} className="text-cyan-700" />,
      title: "Affordable Pricing",
    },
    {
      icon: <FaHeart size={40} className="text-cyan-700" />,
      title: "High Industry Standards",
    },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="why-us" className="py-16 bg-gray-50">
      <motion.div
        className="container mx-auto text-center px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8"
          variants={cardVariants}
        >
          Why Us
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8"
          variants={cardVariants}
        >
          Discover why Victory Visa is your best choice for visa services. Our
          exceptional team, premium quality services, and commitment to your
          success set us apart from the rest.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              variants={cardVariants}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhyUs;
