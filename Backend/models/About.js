import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  aboutText: {
    type: String,
    required: true,
  },
  services: {
    type: [serviceSchema],
    required: true,
  },
});

const About = mongoose.model("About", aboutSchema);

export default About;
