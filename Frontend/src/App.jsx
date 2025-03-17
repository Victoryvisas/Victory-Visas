import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection";
import WhyUs from "./Components/WhyUs";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import BusinessVisaServices from "./pages/BusinessVisaServices";
import FlightTickets from "./pages/FlightTickets";
import CountriesSection from "./Components/CountriesSection";
import TravelInsurance from "./pages/TravelInsurance";
import SouthAfrica from "./pages/SouthAfrica"; 
import Australia from "./pages/Australia";
import NewZealand from "./pages/NewZeland";
import USA from "./pages/USA";
import UK from "./pages/UK";
import Canada from "./pages/Canada";
import TouristVisaServices from "./pages/TouristVisaServices";
import StudyVisaServices from "./pages/StudyVisaServices";
import PermanentVisaServices from "./pages/PermanentVisaServices";

import Home from "./Admin/Home";
import Login from "./Admin/Login";
//import { ShowLoading, HideLoading } from './redux/rootSlice'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business-visas" element={<BusinessVisaServices />} />
        <Route path="/tourist-visas" element={<TouristVisaServices />} />
        <Route path="/student-visas" element={<StudyVisaServices />} />
        <Route path="/permanent-residency" element={<PermanentVisaServices/>} />

        <Route path="/flight-tickets" element={<FlightTickets />} />
        <Route path="/travel-insurance" element={<TravelInsurance />} />
        <Route path="/south-africa" element={<SouthAfrica />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/new-zealand" element={<NewZealand />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/canada" element={<Canada />} />

          {/* Admin Panel */}
        <Route path="/admin" element={<Home />} />
        <Route path="/admin-login" element={<Login />} />

      </Routes>
      <Footer />
    </Router>
  );
}

const HomePage = () => {
  // Animation variants for the sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 }, // More pronounced slide-down effect
    visible: { opacity: 1, y: 0 },  // Normal position
  };

  // Common transition settings
  const transitionSettings = {
    duration: 0.8, // Slightly longer duration for smoothness
    ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing for smooth acceleration/deceleration
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger animation early
        transition={transitionSettings}
      >
        <HeroSection />
      </motion.div>

      {/* Services Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} // Adjust visibility threshold
        transition={transitionSettings}
      >
        <ServicesSection />
      </motion.div>

      {/* Countries Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} // Adjust visibility threshold
        transition={{
          ...transitionSettings,
          delay: 0.2, // Add a slight delay for better sequencing
        }}
      >
        <CountriesSection />
      </motion.div>

      {/* About Us Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={transitionSettings}
      >
        <AboutUs />
      </motion.div>

      {/* Why Us Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={transitionSettings}
      >
        <WhyUs />
      </motion.div>

      {/* Contact Us Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={transitionSettings}
      >
        <ContactUs />
      </motion.div>
    </div>
  );
};

export default App;
