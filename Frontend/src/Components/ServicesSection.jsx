import { Link } from "react-router-dom";
import businessVisaImage from "../assets/immigration.jpg";
import touristVisaImage from "../assets/Tourist.jpg";
import studentVisaImage from "../assets/study.jpg";
import permanentResidencyImage from "../assets/study.jpg";
import citizenshipImage from "../assets/study.jpg";

const ServiceSection = () => {
  const services = [
    { title: "Business Visas", description: "Comprehensive solutions for your business travel needs.", image: businessVisaImage, link: "/business-visas" },
    { title: "Tourist/Visitor Visas", description: "Explore new destinations with ease and confidence.", image: touristVisaImage, link: "/tourist-visas" },
    { title: "Student Visas", description: "Turn your academic aspirations into reality.", image: studentVisaImage, link: "/student-visas" },
    { title: "Permanent Residency", description: "Expert assistance in obtaining permanent residency status.", image: permanentResidencyImage, link: "/permanent-residency" },
    { title: "Citizenship Services", description: "Guidance on your journey to citizenship.", image: citizenshipImage, link: "/citizenship-services" },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded shadow transform hover:scale-105 transition-all ease-in-out duration-300 hover:bg-blue-100"
            >
              <Link to={service.link}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
