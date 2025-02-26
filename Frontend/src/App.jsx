import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection";
import WhyUs from "./Components/WhyUs";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import BusinessVisaServices from "./pages/BusinessVisaServices";
import FlightTickets from "./pages/FlightTickets"; // Import the FlightTickets component
import CountriesSection from "./Components/CountriesSection";
import TravelInsurance from "./pages/TravelInsurance";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business-visas" element={<BusinessVisaServices />} />
        <Route path="/flight-tickets" element={<FlightTickets />} />
        <Route path="/travel-insurance" element={<TravelInsurance />} />
         
      </Routes>
      <Footer />
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <CountriesSection />
      <AboutUs />
      <WhyUs />
      <ContactUs />
    </div>
  );
}

export default App;
