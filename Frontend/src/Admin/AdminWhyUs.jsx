import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserFriends, FaAward, FaHandHoldingUsd, FaHeart } from "react-icons/fa";

const AdminWhyUs = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch the current "Why Us" data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.victoryvisas.com/api/why-us"); // Full URL for API
        setFeatures(response.data.features || []);
      } catch (err) {
        setError("Failed to load 'Why Us' content.");
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (index, newTitle) => {
    const updatedFeatures = [...features];
    updatedFeatures[index].title = newTitle;
    setFeatures(updatedFeatures);
  };

  const handleAddFeature = () => {
    setFeatures([...features, { title: "New Feature" }]);
  };

  const handleDeleteFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (features.some((feature) => feature.title.trim() === "")) {
      setError("Feature titles cannot be empty.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put("https://api.victoryvisas.com/api/why-us", { // Full URL for API
        features,
      });
      alert(response.data.message);
    } catch (err) {
      setError("Failed to update 'Why Us' content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin - Manage Why Us Section</h2>
      {error && (
        <div className="text-red-500 mb-4 flex justify-between items-center">
          <p>{error}</p>
          <button onClick={() => setError("")} className="ml-4 text-gray-500">
            Dismiss
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-center mb-4">
              {index === 0 && <FaUserFriends size={40} className="text-orange-500" />}
              {index === 1 && <FaAward size={40} className="text-orange-500" />}
              {index === 2 && <FaHandHoldingUsd size={40} className="text-orange-500" />}
              {index === 3 && <FaHeart size={40} className="text-orange-500" />}
            </div>
            <input
              type="text"
              value={feature.title}
              onChange={(e) => handleUpdate(index, e.target.value)}
              className="text-lg font-semibold text-gray-800 border p-2 w-full rounded"
            />
            <button
              onClick={() => handleDeleteFeature(index)}
              className="text-red-500 mt-2 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleAddFeature}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Feature
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default AdminWhyUs;
