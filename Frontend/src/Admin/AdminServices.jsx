import React, { useState } from "react";

const AdminServices = () => {
  const [services, setServices] = useState([
    { title: "Business Visas", description: "Comprehensive solutions for your business travel needs.", link: "/business-visas" },
    { title: "Tourist/Visitor Visas", description: "Explore new destinations with ease and confidence.", link: "/tourist-visas" },
    { title: "Student Visas", description: "Turn your academic aspirations into reality.", link: "/student-visas" },
    { title: "Permanent Residency", description: "Expert assistance in obtaining permanent residency status.", link: "/permanent-residency" },
    { title: "Citizenship Services", description: "Guidance on your journey to citizenship.", link: "/citizenship-services" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedServices = [...services];
    updatedServices[index][field] = value;
    setServices(updatedServices);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Services:", services);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Manage Services</h2>
      <form onSubmit={handleSubmit}>
        {services.map((service, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <input
              type="text"
              value={service.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              className="block w-full p-2 border rounded mb-2"
              placeholder="Service Title"
            />
            <textarea
              value={service.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              className="block w-full p-2 border rounded mb-2"
              placeholder="Service Description"
            />
            <input
              type="text"
              value={service.link}
              onChange={(e) => handleChange(index, "link", e.target.value)}
              className="block w-full p-2 border rounded mb-2"
              placeholder="Service Link"
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Changes</button>
      </form>
    </div>
  );
};

export default AdminServices;