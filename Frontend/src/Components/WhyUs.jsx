import { FaUserFriends, FaAward, FaHandHoldingUsd, FaHeart } from "react-icons/fa";

function WhyUs() {
  const features = [
    {
      icon: <FaUserFriends size={40} className="text-orange-500" />,
      title: "Exceptional Staff",
    },
    {
      icon: <FaAward size={40} className="text-orange-500" />,
      title: "Premium Quality",
    },
    {
      icon: <FaHandHoldingUsd size={40} className="text-orange-500" />,
      title: "Affordable Pricing",
    },
    {
      icon: <FaHeart size={40} className="text-orange-500" />,
      title: "High Industry Standards",
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Us</h2>
        <p className="text-gray-600 mb-8">
          Discover why Victory Visa is your best choice for visa services. Our
          exceptional team, premium quality services, and commitment to your
          success set us apart from the rest.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
