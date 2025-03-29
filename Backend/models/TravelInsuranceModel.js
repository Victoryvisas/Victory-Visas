// models/TravelInsurance.js
import mongoose from "mongoose";

const travelInsuranceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    travelDates: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("TravelInsurance", travelInsuranceSchema);
