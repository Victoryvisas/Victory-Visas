import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPhoneAlt, FaWhatsapp, FaGlobe } from "react-icons/fa";
import mapImage from "../assets/logo.jpg"; // Replace with the path to your image file in the src folder

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-16 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Contact Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

          {/* Let's Talk */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-red-500 mb-2">
              <FaPhoneAlt className="inline-block mr-2" />
              Let's Talk
            </h3>
            <p>
              <a
                href="tel:+919898498186"
                className="transition duration-300 text-white hover:text-red-500"
              >
                +91 98984 98186
              </a>
            </p>
            <p>
              <a
                href="tel:+919662243672"
                className="transition duration-300 text-white hover:text-red-500"
              >
                +91 96622 43672
              </a>
            </p>
          </div>

          {/* Email Us */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-red-500 mb-2">
              <FaEnvelope className="inline-block mr-2" />
              Email Us
            </h3>
            <p>
              <a
                href="mailto:globalvisa9@yahoo.com"
                className="transition duration-300 text-white hover:text-red-500"
              >
                globalvisa9@yahoo.com
              </a>
            </p>
            <p>
              <a
                href="mailto:globaltourtravels@yahoo.com"
                className="transition duration-300 text-white hover:text-red-500"
              >
                globaltourtravels@yahoo.com
              </a>
            </p>
            <p>
              <a
                href="mailto:info@globalvisaconsultants.co.in"
                className="transition duration-300 text-white hover:text-red-500"
              >
                info@globalvisaconsultants.co.in
              </a>
            </p>
          </div>

          {/* Website */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-red-500 mb-2">
              <FaGlobe className="inline-block mr-2" />
              Website
            </h3>
            <p>
              <a
                href="https://www.globalvisaconsultants.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 text-white hover:text-red-500"
              >
                www.globalvisaconsultants.co.in
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Working Hours & WhatsApp Integration */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-red-500 mb-2">
            <FaClock className="inline-block mr-2" />
            Working Hours
          </h3>
          <p>Mon to Sat - 10:30 AM to 6:30 PM</p>
          <p>Sunday - Holiday</p>

          {/* WhatsApp Integration */}
          <div className="mt-10">
            <a
              href="https://wa.me/916304460976"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:bg-green-600 hover:scale-105"
            >
              <FaWhatsapp className="text-xl mr-2" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Contact Address (Below Left and Right Side) */}
      <div className="mb-6 mt-12">
        <h3 className="text-2xl font-semibold text-red-500 mb-2">
          <FaMapMarkerAlt className="inline-block mr-2" />
          Contact Address
        </h3>
        <p>
          <a
            href="https://www.google.com/maps?q=Global+Visa+Consultants,+Tower+-+B/317,+Atlantis+K-10,+Nr.+Centre+Square+Mall,+Sarabhai+Road,+Vadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 text-white hover:text-red-500"
          >
            Global Visa Consultants, Tower - B/317, Atlantis K-10, Nr. Centre Square Mall, Sarabhai Road, Vadodara
          </a>
        </p>

        {/* Map Image Below Contact Address (Smaller Size) */}
        <div className="mt-4">
          <a
            href="https://www.google.com/maps?q=Global+Visa+Consultants,+Tower+-+B/317,+Atlantis+K-10,+Nr.+Centre+Square+Mall,+Sarabhai+Road,+Vadodara"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mapImage} // Using the imported image here
              alt="Map Location"
              className="w-1/3  h-25 rounded-lg shadow-lg cursor-pointer transition duration-300 transform hover:scale-105" // Adjusted size here
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
