import mongoose from "mongoose";

const heroSectionSchema = new mongoose.Schema({
  images: {
    type: [String], // Array of image URLs
    required: true,
  },
  whatsappLink: {
    type: String, // WhatsApp link
    required: true,
  },
});

const HeroSection = mongoose.model("HeroSection", heroSectionSchema);
export default HeroSection;
