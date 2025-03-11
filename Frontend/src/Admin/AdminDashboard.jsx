import React, { useState, lazy, useMemo, Suspense, useEffect } from "react";
import { FaBars, FaHome, FaUsers, FaGlobe, FaCog, FaPhoneAlt, FaInfoCircle, FaRocket } from "react-icons/fa";
import SkillnaavLogo from "../../assets/skillnaav_logo-250w.png";

// Lazy-loaded components
const AdminContactUs = lazy(() => import("./AdminContactUs"));
const AdminAboutUs = lazy(() => import("./AdminAboutUs"));
const AdminCountries = lazy(() => import("./AdminCountries"));
const AdminHeroSection = lazy(() => import("./AdminHeroSection"));
const AdminServices = lazy(() => import("./AdminServices"));
const AdminWhyUs = lazy(() => import("./AdminWhyUs"));

const Loader = () => (
  <div className="flex justify-center items-center h-full">
    <FaBars className="animate-spin text-4xl text-blue-500" />
  </div>
);

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Hero Section");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = useMemo(
    () => [
      { label: "Hero Section", component: <AdminHeroSection />, icon: <FaHome /> },
      { label: "About Us", component: <AdminAboutUs />, icon: <FaInfoCircle /> },
      { label: "Services", component: <AdminServices />, icon: <FaCog /> },
      { label: "Why Us", component: <AdminWhyUs />, icon: <FaRocket /> },
      { label: "Countries", component: <AdminCountries />, icon: <FaGlobe /> },
      { label: "Contact Us", component: <AdminContactUs />, icon: <FaPhoneAlt /> },
    ],
    []
  );

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-white shadow-md border-b">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img src={SkillnaavLogo} alt="Logo" className="w-32 h-auto md:w-40 mr-3" />
            <span className="text-gray-800 text-lg md:text-xl font-semibold">Admin Dashboard</span>
          </div>
          <span
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/admin-login";
            }}
            className="text-gray-800 text-lg md:text-xl font-semibold cursor-pointer hover:underline"
          >
            Logout
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`bg-gray-800 text-gray-200 ${sidebarOpen ? "w-64" : "w-16"} transition-all duration-300 py-6 shadow-md`}>
          <div className="flex justify-end px-4 mb-6">
            <FaBars className="cursor-pointer text-white" onClick={() => setSidebarOpen(!sidebarOpen)} />
          </div>
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700 transition ${selectedTab === item.label ? "bg-gray-900" : ""}}
                onClick={() => setSelectedTab(item.label)}
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {sidebarOpen && <span className="ml-2 text-md font-medium">{item.label}</span>}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-white overflow-y-auto shadow-inner">
          <Suspense fallback={<Loader />}>
            {navItems.map((item) =>
              item.label === selectedTab ? <div key={item.label}>{item.component}</div> : null
            )}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default React.memo(AdminDashboard);