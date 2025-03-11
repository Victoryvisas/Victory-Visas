import React, { useState } from "react";
import { FaUserFriends, FaAward, FaHandHoldingUsd, FaHeart } from "react-icons/fa";

const AdminWhyUs = () => {
  const [features, setFeatures] = useState([
    { icon: <FaUserFriends size={40} className="text-orange-500" />, title: "Exceptional Staff" },
    { icon: <FaAward size={40} className="text-orange-500" />, title: "Premium Quality" },
    { icon: <FaHandHoldingUsd size={40} className="text-orange-500" />, title: "Affordable Pricing" },
    { icon: <FaHeart size={40} className="text-orange-500" />, title: "High Industry Standards" },
  ]);

  const handleUpdate = (index, newTitle) => {
    const updatedFeatures = [...features];
    updatedFeatures[index].title = newTitle;
    setFeatures(updatedFeatures);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin - Manage Why Us Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <input
              type="text"
              value={feature.title}
              onChange={(e) => handleUpdate(index, e.target.value)}
              className="text-lg font-semibold text-gray-800 border p-2 w-full rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminWhyUs;