import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Using Lucide icons
import logo from "../assets/logoo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visaDropdown, setVisaDropdown] = useState(false);
  const [immigrationDropdown, setImmigrationDropdown] = useState(false);

  let visaDropdownTimer;
  let immigrationDropdownTimer;

  const handleHashLink = (path, hash) => {
    if (location.pathname !== "/") {
      navigate(path);
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleMouseEnterVisa = () => {
    clearTimeout(visaDropdownTimer);
    setVisaDropdown(true);
  };

  const handleMouseLeaveVisa = () => {
    visaDropdownTimer = setTimeout(() => setVisaDropdown(false), 300); // Delay of 300ms
  };

  const handleMouseEnterImmigration = () => {
    clearTimeout(immigrationDropdownTimer);
    setImmigrationDropdown(true);
  };

  const handleMouseLeaveImmigration = () => {
    immigrationDropdownTimer = setTimeout(() => setImmigrationDropdown(false), 300); // Delay of 300ms
  };

  return (
    <nav className="p-4 bg-white shadow sticky top-0 z-50 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to='/'><img className="h-10 inline mr-2" src={logo} alt="Logo" /></Link>
        <span className="text-xl font-bold cursor-pointer text-cyan-600">
          <Link to='/'>
          VICTORY VISA
        </Link>
        </span>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden block text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Navbar Links */}
      <ul
        className={`md:flex md:items-center md:gap-6 transition-all duration-300 bg-white md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto shadow md:shadow-none ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Home */}
        <li className="mx-4 my-2 md:my-0">
          {location.pathname === "/" ? (
            <HashLink
              smooth
              to="#"
              className="text-lg hover:text-white hover:bg-cyan-500 p-2 rounded transition duration-300"
            >
              Home
            </HashLink>
          ) : (
            <Link
              to="/"
              onClick={() =>{ handleHashLink("/", "#"),  setIsMenuOpen(false)}}
              className="text-lg hover:text-white hover:bg-cyan-500 p-2 rounded transition duration-300"
            >
              Home
            </Link>
          )}
        </li>

        {/* Visa Services */}
        <li
          className="mx-4 relative group my-2 md:my-0"
          onMouseEnter={handleMouseEnterVisa}
          onMouseLeave={handleMouseLeaveVisa}
        >
          <span
            className="text-lg flex items-center gap-1 hover:text-white hover:bg-cyan-500 p-2 rounded cursor-pointer transition duration-300 whitespace-nowrap"
            onClick={() =>
              window.innerWidth <= 768 && setVisaDropdown(!visaDropdown)
            }
          >
            Visa Services <span className="text-sm">&#x25BC;</span>
          </span>
          {visaDropdown && (
            <ul className="absolute bg-white shadow-lg rounded-lg p-2 top-full left-0 mt-2 w-56 z-10">
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/business-visas"
                  className="block"
                  onClick={() => {
                    setVisaDropdown(false), setIsMenuOpen(false);
                  }}
                >
                  Business Visa
                </Link>
              </li>
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/tourist-visas"
                  className="block"
                  onClick={() => {
                    setVisaDropdown(false), setIsMenuOpen(false);
                  }}
                >
                  Tourist Visa
                </Link>
              </li>
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/student-visas"
                  className="block"
                  onClick={() => {
                    setVisaDropdown(false), setIsMenuOpen(false);
                  }}
                >
                  Student Visa
                </Link>
              </li>
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/permanent-residency"
                  className="block"
                  onClick={() => {
                    setVisaDropdown(false), setIsMenuOpen(false);
                  }}
                >
                  Permanent Residency
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Immigration */}
        <li
          className="mx-4 relative group my-2 md:my-0"
          onMouseEnter={handleMouseEnterImmigration}
          onMouseLeave={handleMouseLeaveImmigration}
        >
          <span
            className="text-lg flex items-center gap-1 hover:text-white hover:bg-cyan-500 p-2 rounded cursor-pointer transition duration-300 whitespace-nowrap"
            onClick={() =>
              window.innerWidth <= 768 &&
              setImmigrationDropdown(!immigrationDropdown)
            }
          >
            Immigration to <span className="text-sm">&#x25BC;</span>
          </span>
          {immigrationDropdown && (
            <ul className="absolute bg-white shadow-lg rounded-lg p-2 top-full left-0 mt-2 w-56 z-10">
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/south-africa"
                  className="block"
                  onClick={() => {
                    setImmigrationDropdown(false);
                    setIsMenuOpen(false);
                  }}
                >
                  South Africa
                </Link>
              </li>
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/australia"
                  className="block"
                  onClick={() => {
                    setImmigrationDropdown(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Australia
                </Link>
              </li>
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/new-zealand"
                  className="block"
                  onClick={() => {
                    setImmigrationDropdown(false);
                    setIsMenuOpen(false);
                  }}
                >
                  New Zealand
                </Link>
              </li>
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/uk"
                  className="block"
                  onClick={() => {
                    setImmigrationDropdown(false);
                    setIsMenuOpen(false);
                  }}
                >
                  UK
                </Link>
              </li>
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/usa"
                  className="block"
                  onClick={() => {
                    setImmigrationDropdown(false);
                    setIsMenuOpen(false);
                  }}
                >
                  USA
                </Link>
              </li>
              <li className="hover:bg-cyan-500 hover:text-white p-2 rounded">
                <Link
                  to="/canada"
                  className="block"
                  onClick={() => {
                    setImmigrationDropdown(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Canada
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Other Links */}
        <li className="mx-4 my-2 md:my-0" onClick={() => setIsMenuOpen(false)}>
          <Link
            to="/flight-tickets"
            className="text-lg hover:text-white hover:bg-cyan-500 p-2 rounded transition duration-300"
          >
            Flight Tickets
          </Link>
        </li>
        <li className="mx-4 my-2 md:my-0" onClick={() => setIsMenuOpen(false)}>
          <Link
            to="/travel-insurance"
            className="text-lg hover:text-white hover:bg-cyan-500 p-2 rounded transition duration-300"
          >
            Travel Insurance
          </Link>
        </li>

        {/* Contact Us */}
        <li className="mx-4 my-2 md:my-0" onClick={() => setIsMenuOpen(false)}>
          {location.pathname === "/" ? (
            <HashLink
              smooth
              to="#contact-us"
              className="text-lg hover:text-white hover:bg-cyan-500 p-2 rounded transition duration-300"
            >
              Contact Us
            </HashLink>
          ) : (
            <Link
              to="/"
              onClick={() => handleHashLink("/", "#contact-us")}
              className="text-lg hover:text-white hover:bg-cyan-500 p-2 rounded transition duration-300"
            >
              Contact Us
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;