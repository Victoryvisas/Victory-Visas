import mongoose from "mongoose";

const serviceFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    visaType: { 
      type: String, 
      required: true, 
      enum: ["business", "study", "tourist", "immigration"] 
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("VisaRequest", serviceFormSchema);