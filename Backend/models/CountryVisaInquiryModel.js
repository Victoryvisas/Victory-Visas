import mongoose from "mongoose";

const countryVisaInquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email']
  },
  phone: { type: String, required: true },
  country: { type: String, required: true, enum: ["Australia", "Canada", "Germany", "India", "UK", "USA", "Other"] },
  visaType: { 
    type: String, 
    required: true,
    enum: ["Tourist Visa", "Business Visa", "Study Visa", "Permanent&CitizenShip Visas", "Other"]
  },
  message: { type: String, default: "" },
  status: { type: String, enum: ["new", "contacted", "resolved", "rejected"], default: "new" },
  notes: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("CountryVisaInquiry", countryVisaInquirySchema);