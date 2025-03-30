import React, { Suspense, lazy, useMemo, useState } from "react";
import { FaBars } from "react-icons/fa";

// Lazy-loaded components
const AdminHeroSection = lazy(() => import("../AdminHeroSection"));
const AdminAboutUs = lazy(() => import("../AdminAboutUs"));
const AdminWhyUs = lazy(() => import("../AdminWhyUs"));
const AdminServices = lazy(() => import("../AdminServices"));
const AdminCountries = lazy(() => import("../AdminCountries"));
const AdminContactUs = lazy(() => import("../AdminContactUs"));
const AdminEnquiryForm = lazy(() => import("../AdminEnquiryForm"));
const AdminServiceForm = lazy(() => import("../AdminServiceForm"));

const AdminCountryForm = lazy(() => import("../AdminCountryForm"));

const AdminFlightForm = lazy(() => import("../AdminFlightForm"));
const AdminInsuranceForm = lazy(() => import("../AdminInsuranceForm"));


// Fallback loader
const Loader = () => (
  <div className="flex justify-center items-center h-full">
    <FaBars className="animate-spin text-4xl text-blue-500" />
  </div>
);

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("Hero Section");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = useMemo(
    () => [
      { label: "Hero Section", component: <AdminHeroSection /> },
      { label: "About Us", component: <AdminAboutUs /> },
      { label: "Why Us", component: <AdminWhyUs /> },
      { label: "Services", component: <AdminServices /> },
      { label: "Countries", component: <AdminCountries /> },
      { label: "Contact Us", component: <AdminContactUs /> },
      { label: "Enquiry Form", component: <AdminEnquiryForm /> },
      { label: "Country Form", component: <AdminCountryForm /> },
      { label: "Service Form", component: <AdminServiceForm /> },
      { label: "Flight Form", component: <AdminFlightForm /> },
      { label: "Insurance Form", component: <AdminInsuranceForm /> },
    ],
    []
  );

  return (
    <div className="flex h-screen bg-gray-100 font-inter">
      {/* Sidebar Navigation */}
      <aside
        className={`bg-gray-800 text-gray-200 ${
          sidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300 py-6 shadow-md`}
      >
        <div className="flex justify-end px-4 mb-6">
          <FaBars
            className="cursor-pointer text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
        </div>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700 transition ${
                selectedTab === item.label ? "bg-gray-900" : ""
              }`}
              onClick={() => setSelectedTab(item.label)}
            >
              <span className="ml-2 text-md font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-6 bg-white shadow-md h-full overflow-y-auto">
          <Suspense fallback={<Loader />}>
            {navItems.map((item) =>
              item.label === selectedTab ? (
                <div key={item.label}>{item.component}</div>
              ) : null
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
