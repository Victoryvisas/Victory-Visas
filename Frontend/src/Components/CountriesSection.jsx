import React from "react";

// Importing images from the assets folder
import southAfricaFlag from "../assets/south_africa.png";
import newZealandFlag from "../assets/new_zeland.png";
import australiaFlag from "../assets/australia.png";
import usaFlag from "../assets/usa.png";
import ukFlag from "../assets/UK.png";
import canadaFlag from "../assets/canada.png";

const CountriesSection = () => {
  const countries = [
    { name: "South Africa", path: "/south-africa", flag: southAfricaFlag },
    { name: "New Zealand", path: "/new-zealand", flag: newZealandFlag },
    { name: "Australia", path: "/australia", flag: australiaFlag },
    { name: "USA", path: "/usa", flag: usaFlag },
    { name: "UK", path: "/uk", flag: ukFlag },
    { name: "Canada", path: "/canada", flag: canadaFlag },
  ];

  return (
    <div className="bg-gray-100 py-8">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Immigration Countries
      </h2>

      {/* Countries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6">
        {countries.map((country) => (
          <div
            key={country.name}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            {/* Country Flag */}
            <div className="p-2">
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-[300px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            {/* Country Name */}
            <div className="text-center pb-4">
              <h3 className="text-lg font-semibold text-gray-700 transition-colors duration-300 ease-in-out hover:text-blue-500">
                {country.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesSection;
