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
    </section>
  );
};

export default ServiceSection;
