import React from "react";
import { motion } from "framer-motion";
import canadaImage from "../assets/canada.png";
import CountryVisaForm from "../Components/CountryVisaForm";

const Canada = () => {
  const handleFormSubmit = (formData) => {
    console.log("Form submitted: ", formData);

    // Form submission logic
    fetch("/api/submit-canada-visa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Form submission failed. Please try again.");
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <motion.header
        className="bg-red-600 text-white text-center py-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Explore Canada</h1>
        <p className="text-lg md:text-xl mt-2">
          A Country of Natural Beauty and Opportunities
        </p>
      </motion.header>

      {/* Main Content Section */}
      <motion.main
        className="p-6 md:p-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Description Section */}
        <motion.section
          className="text-gray-800"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <p className="text-lg md:text-xl">
            Canada is a vast and diverse country, known for its breathtaking
            landscapes, multicultural cities, and welcoming people. From the
            towering Rocky Mountains to the cosmopolitan streets of Toronto and
            Vancouver, Canada offers endless possibilities for tourists,
            students, and professionals alike. Whether you're planning to visit,
            study, work, or immigrate, Canada has something for everyone.
          </p>
        </motion.section>

        {/* Image Section */}
        <motion.section
          className="mt-8"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
        >
          <motion.img
            src={canadaImage}
            alt="Canada"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </motion.section>

        {/* Visa Information Section */}
        <motion.section
          className="mt-12 text-gray-800"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-2xl font-bold text-red-600">
            Canada Visas: Your Gateway to the Great White North
          </h2>
          <p className="mt-4 text-lg">
            To visit or stay in Canada, you’ll need the appropriate visa depending on your travel purpose. Common visa types include:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg">
            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
              Tourist Visa: For visitors exploring Canada for leisure, tourism, or to visit family and friends.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
              Study Permit: For international students planning to study at a Canadian institution.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
              Work Permit: For individuals seeking employment in Canada or working temporarily.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
              Visitor Visa: For short-term visits to Canada for business, tourism, or family reasons.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
              Permanent Residency Visas: For those wishing to move to Canada permanently through immigration programs like Express Entry, family sponsorship, or provincial nominee programs.
            </motion.li>
          </ul>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="mt-12 text-center"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-2xl font-bold text-red-600">
            Ready to Discover Canada?
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Let Victory Visas take care of your visa application so you can focus on enjoying your Canadian experience.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Apply Now
          </motion.button>
        </motion.section>

        {/* Victory Visas Assistance Section */}
        <motion.section
          className="mt-12 text-gray-800"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-2xl font-bold text-red-600">
            How Victory Visas Helps You Obtain Your Canada Visa
          </h2>
          <p className="mt-4 text-lg">
            The visa application process for Canada can be complicated, but Victory Visas simplifies it for you. Our experienced team helps ensure you have the right documentation and meet the necessary requirements to get your visa quickly and easily.
          </p>
          <ul className="list-disc list-inside mt-4 text-lg">
            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
              Visa Consultation: We’ll help you choose the right visa for your travel, work, or study needs.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
              Document Assistance: We provide guidance on gathering and preparing the necessary paperwork for your application.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
              Application Submission: Victory Visas ensures that your application is submitted accurately and on time to avoid any delays.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}>
              Continuous Support: We keep you updated throughout the process, answering any questions you may have along the way.
            </motion.li>
          </ul>
          <p className="mt-4 text-lg">
            Whether you're planning a short visit or looking to start a new life in Canada, Victory Visas ensures your visa application process is smooth and hassle-free.
          </p>
        </motion.section>

        {/* Form Section */}
        <CountryVisaForm onSubmit={handleFormSubmit} />
      </motion.main>
    </div>
  );
};

export default Canada;
