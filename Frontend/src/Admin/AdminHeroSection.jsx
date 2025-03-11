import React, { useState } from "react";

const AdminHeroSection = () => {
  const [heroImages, setHeroImages] = useState(["", "", "", ""]);
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleImageChange = (index, value) => {
    const updatedImages = [...heroImages];
    updatedImages[index] = value;
    setHeroImages(updatedImages);
  };

  const handleSave = () => {
    console.log("Hero Images:", heroImages);
    console.log("WhatsApp Link:", whatsappLink);
    // Implement API call to save data
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Hero Section</h2>
      {heroImages.map((image, index) => (
        <div key={index} className="mb-4">
          <label className="block text-gray-700">Image {index + 1} URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => handleImageChange(index, e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter image URL"
          />
        </div>
      ))}

      <div className="mb-4">
        <label className="block text-gray-700">WhatsApp Link:</label>
        <input
          type="text"
          value={whatsappLink}
          onChange={(e) => setWhatsappLink(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter WhatsApp link"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AdminHeroSection;