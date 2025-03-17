import  { useState } from "react";

const AdminCountries = () => {
  const [countries, setCountries] = useState([
    { name: "South Africa", path: "/south-africa", flag: "../assets/south_africa.png" },
    { name: "New Zealand", path: "/new-zealand", flag: "../assets/new_zeland.png" },
    { name: "Australia", path: "/australia", flag: "../assets/australia.png" },
    { name: "USA", path: "/usa", flag: "../assets/usa.png" },
    { name: "UK", path: "/uk", flag: "../assets/UK.png" },
    { name: "Canada", path: "/canada", flag: "../assets/canada.png" },
  ]);

  const handleUpdate = (index, key, value) => {
    const updatedCountries = [...countries];
    updatedCountries[index][key] = value;
    setCountries(updatedCountries);
  };

  const handleDelete = (index) => {
    setCountries(countries.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setCountries([...countries, { name: "", path: "", flag: "" }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Manage Immigration Countries</h1>
      <button onClick={handleAdd} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Add Country
      </button>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {countries.map((country, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded shadow">
            <input
              type="text"
              value={country.name}
              onChange={(e) => handleUpdate(index, "name", e.target.value)}
              className="block w-full border p-2 rounded"
              placeholder="Country Name"
            />
            <input
              type="text"
              value={country.path}
              onChange={(e) => handleUpdate(index, "path", e.target.value)}
              className="block w-full border p-2 mt-2 rounded"
              placeholder="Country Path"
            />
            <input
              type="text"
              value={country.flag}
              onChange={(e) => handleUpdate(index, "flag", e.target.value)}
              className="block w-full border p-2 mt-2 rounded"
              placeholder="Flag Image Path"
            />
            <button onClick={() => handleDelete(index)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCountries;