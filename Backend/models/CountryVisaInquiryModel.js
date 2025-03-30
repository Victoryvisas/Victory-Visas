// models/CountryVisaInquiry.js
import mongoose from "mongoose";

const countryVisaInquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    visaType: { type: String, required: true },
    message: { type: String }, // Optional field
  },
  { timestamps: true }
);

export default mongoose.model("CountryVisaInquiry", countryVisaInquirySchema);
