import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashLink = (path, hash) => {
    if (location.pathname !== "/") {
      // If not on the home page, navigate to the home page and then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure the page loads before scrolling
    }
  };

  return (
    <nav className="p-5 bg-white shadow sticky top-0 z-50 md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img className="h-10 inline" src={logo} alt="Logo" />
          VICTORY VISA
        </span>
      </div>

      <ul className="md:flex md:items-center">
        <li className="mx-4">
          {location.pathname === "/" ? (
            <HashLink smooth to="#" className="text-xl hover:text-cyan-500 duration-500">
              Home
            </HashLink>
          ) : (
            <Link
              to="/"
              onClick={() => handleHashLink("/", "#")}
              className="text-xl hover:text-cyan-500 duration-500"
            >
              Home
            </Link>
          )}
        </li>
        <li className="mx-4">
          {location.pathname === "/" ? (
            <HashLink smooth to="#services" className="text-xl hover:text-cyan-500 duration-500">
              Visa Services
            </HashLink>
          ) : (
            <Link
              to="/"
              onClick={() => handleHashLink("/", "#services")}
              className="text-xl hover:text-cyan-500 duration-500"
            >
              Visa Services
            </Link>
          )}
        </li>
        <li className="mx-4">
          <Link to="/flight-tickets" className="text-xl hover:text-cyan-500 duration-500">
            Flight Tickets
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/travel-insurance" className="text-xl hover:text-cyan-500 duration-500">
            Travel Insurance
          </Link>
        </li>
        <li className="mx-4">
          {location.pathname === "/" ? (
            <HashLink smooth to="#contact-us" className="text-xl hover:text-cyan-500 duration-500">
              Contact Us
            </HashLink>
          ) : (
            <Link
              to="/"
              onClick={() => handleHashLink("/", "#contact-us")}
              className="text-xl hover:text-cyan-500 duration-500"
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
