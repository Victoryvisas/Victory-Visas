import  { useState } from "react";
import aboutImage from "../assets/aboutus.jpg";

const AdminAboutUs = () => {
  const [aboutText, setAboutText] = useState(
    "We are a leading visa services provider, offering tailored solutions for immigration, study, and tourist visas."
  );
  const [services, setServices] = useState([
    {
      title: "Our Best Services",
      description:
        "We provide expert advice and fast processing for all types of visas, ensuring a smooth experience for our clients.",
    },
    {
      title: "Customer Receiving",
      description:
        "We pride ourselves on exceptional customer service, providing assistance and support at every step of your visa application.",
    },
    {
      title: "Low Pricing & Best Quality",
      description:
        "Our services are affordably priced without compromising on quality, offering the best value for our clients.",
    },
  ]);

  const handleTextChange = (e) => {
    setAboutText(e.target.value);
  };

  const handleServiceChange = (index, newValue) => {
    const updatedServices = [...services];
    updatedServices[index].description = newValue;
    setServices(updatedServices);
  };

  return (
    <section className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit About Us Section</h2>
      
      <label className="block mb-2 font-semibold">Main About Us Text:</label>
      <textarea
        className="w-full p-2 border rounded mb-4"
        value={aboutText}
        onChange={handleTextChange}
      />
      
      <h3 className="text-xl font-semibold mb-2">Edit Services</h3>
      {services.map((service, index) => (
        <div key={index} className="mb-4">
          <label className="block font-semibold">{service.title}</label>
          <textarea
            className="w-full p-2 border rounded"
            value={service.description}
            onChange={(e) => handleServiceChange(index, e.target.value)}
          />
        </div>
      ))}
      
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
        Save Changes
      </button>
    </section>
  );
};

export default AdminAboutUs;