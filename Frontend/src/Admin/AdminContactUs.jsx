import  { useState } from "react";
import { FaSave } from "react-icons/fa";

const AdminContactUs = () => {
  const [contactInfo, setContactInfo] = useState({
    phone1: "+91 98984 98186",
    phone2: "+91 96622 43672",
    email1: "globalvisa9@yahoo.com",
    email2: "globaltourtravels@yahoo.com",
    email3: "info@globalvisaconsultants.co.in",
    website: "https://www.globalvisaconsultants.co.in",
    whatsapp: "https://wa.me/916304460976",
    workingHours: "Mon to Sat - 10:30 AM to 6:30 PM, Sunday - Holiday",
    address:
      "Global Visa Consultants, Tower - B/317, Atlantis K-10, Nr. Centre Square Mall, Sarabhai Road, Vadodara",
    mapLink:
      "https://www.google.com/maps?q=Global+Visa+Consultants,+Tower+-+B/317,+Atlantis+K-10,+Nr.+Centre+Square+Mall,+Sarabhai+Road,+Vadodara",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSave = () => {
    console.log("Saving Contact Info:", contactInfo);
    // Here, you can integrate an API call to update the backend
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Admin Panel - Contact Us</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Phone Numbers */}
        <div className="mb-4">
          <label className="block font-semibold">Phone Numbers:</label>
          <input type="text" name="phone1" value={contactInfo.phone1} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="phone2" value={contactInfo.phone2} onChange={handleChange} className="w-full p-2 border rounded mt-2" />
        </div>

        {/* Emails */}
        <div className="mb-4">
          <label className="block font-semibold">Emails:</label>
          <input type="text" name="email1" value={contactInfo.email1} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="email2" value={contactInfo.email2} onChange={handleChange} className="w-full p-2 border rounded mt-2" />
          <input type="text" name="email3" value={contactInfo.email3} onChange={handleChange} className="w-full p-2 border rounded mt-2" />
        </div>

        {/* Website */}
        <div className="mb-4">
          <label className="block font-semibold">Website:</label>
          <input type="text" name="website" value={contactInfo.website} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* WhatsApp Link */}
        <div className="mb-4">
          <label className="block font-semibold">WhatsApp Link:</label>
          <input type="text" name="whatsapp" value={contactInfo.whatsapp} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* Working Hours */}
        <div className="mb-4">
          <label className="block font-semibold">Working Hours:</label>
          <input type="text" name="workingHours" value={contactInfo.workingHours} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block font-semibold">Address:</label>
          <textarea name="address" value={contactInfo.address} onChange={handleChange} className="w-full p-2 border rounded" rows="3"></textarea>
        </div>

        {/* Map Link */}
        <div className="mb-4">
          <label className="block font-semibold">Map Link:</label>
          <input type="text" name="mapLink" value={contactInfo.mapLink} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* Save Button */}
        <button onClick={handleSave} className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <FaSave className="mr-2" /> Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminContactUs;