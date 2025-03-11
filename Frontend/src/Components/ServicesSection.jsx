import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import businessVisaImage from "../assets/immigration.jpg";
import touristVisaImage from "../assets/Tourist.jpg";
import studentVisaImage from "../assets/study.jpg";
import permanentResidencyImage from "../assets/study.jpg";

const ServiceSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#124769] mb-10"
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            >
              <Link to={service.link} className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-semibold text-[#24bbf2] mb-4 group-hover:underline"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-700"
                >
                  {service.description}
                </motion.p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;