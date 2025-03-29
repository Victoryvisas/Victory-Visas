// models/Enquiry.js
import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    purpose: { type: String, required: true },
    message: { type: String }, // Optional field
  },
  { timestamps: true }
);

export default mongoose.model("Enquiry", enquirySchema);
