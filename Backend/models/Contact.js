import mongoose from "mongoose";

// Define the schema for the Contact Us information
const ContactSchema = new mongoose.Schema({
  phone1: { type: String, required: true },
  phone2: { type: String },
  email1: { type: String, required: true },
  email2: { type: String },
  email3: { type: String },
  website: { type: String },
  whatsapp: { type: String },
  workingHours: { type: String, required: true },
  address: { type: String, required: true },
  mapLink: { type: String },
});

// Create and export the model
const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;
