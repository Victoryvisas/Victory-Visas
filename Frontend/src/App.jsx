import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./index.css";
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
import Home from "./Admin/Home/Home";
import Login from "./Admin/Login";
import { setAdmin, logoutAdmin } from "./redux/Adminslice";
import axios from "axios";

// Auth Initializer Component
const AuthInitializer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("https://api.victoryvisas.com/api/victory-visas/admin/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        dispatch(setAdmin(response.data));
      } catch (error) {
        localStorage.removeItem("token");
        dispatch(logoutAdmin());
        if (window.location.pathname.startsWith("/admin")) {
          navigate("/admin-login");
        }
      }
    };

    verifyAuth();
  }, [dispatch, navigate]);

  return null;
};

// Private Route Component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.admin);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }

  return children;
};

// Main App Component
function App() {
  return (
    <Router>
      <AuthInitializer />
      <AppContent />
    </Router>
  );
}

// App Content Component
const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="app-container">
      {!isAdminRoute && <Navbar />}
      
      <main className={isAdminRoute ? "admin-content" : ""}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/business-visas" element={<BusinessVisaServices />} />
          <Route path="/tourist-visas" element={<TouristVisaServices />} />
          <Route path="/student-visas" element={<StudyVisaServices />} />
          <Route path="/permanent-residency" element={<PermanentVisaServices />} />
          <Route path="/flight-tickets" element={<FlightTickets />} />
          <Route path="/travel-insurance" element={<TravelInsurance />} />
          <Route path="/south-africa" element={<SouthAfrica />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/new-zealand" element={<NewZealand />} />
          <Route path="/uk" element={<UK />} />
          <Route path="/usa" element={<USA />} />
          <Route path="/canada" element={<Canada />} />

          {/* Admin Login (Public) */}
          <Route path="/admin-login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const transitionSettings = {
    duration: 0.8,
    ease: [0.42, 0, 0.58, 1],
  };

  return (
    <div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={transitionSettings}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={transitionSettings}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...transitionSettings, delay: 0.2 }}
      >
        <CountriesSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={transitionSettings}
      >
        <AboutUs />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={transitionSettings}
      >
        <WhyUs />
      </motion.div>

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