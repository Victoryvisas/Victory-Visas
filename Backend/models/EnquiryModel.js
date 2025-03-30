import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true
  },
  country: {
    type: String,
    required: [true, "Country is required"],
    trim: true
  },
  purpose: {
    type: String,
    required: [true, "Purpose is required"],
    trim: true
  },
  message: {
    type: String,
    trim: true,
    default: ""
  },
  status: {
    type: String,
    enum: ["new", "contacted", "resolved", "rejected"],
    default: "new"
  },
  notes: {
    type: String,
    trim: true,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;