import React from 'react';
import aboutImage from '../assets/aboutus.jpg'; // Replace with the correct path to the image

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are a leading visa services provider, offering tailored solutions for immigration, study, and tourist visas.
          </p>
          
          {/* Our Best Services */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Best Services</h3>
            <p className="text-gray-700">
              We provide expert advice and fast processing for all types of visas, ensuring a smooth experience for our clients.
            </p>
          </div>
          
          {/* Customer Receiving */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Customer Receiving</h3>
            <p className="text-gray-700">
              We pride ourselves on exceptional customer service, providing assistance and support at every step of your visa application.
            </p>
          </div>

          {/* Low Pricing & Best Quality */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Low Pricing & Best Quality</h3>
            <p className="text-gray-700">
              Our services are affordably priced without compromising on quality, offering the best value for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
