import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true, // Store icon name or class as a string
  },
});

const whyUsSchema = new mongoose.Schema({
  features: {
    type: [featureSchema],
    required: true,
  },
});

const WhyUs = mongoose.model("WhyUs", whyUsSchema);

export default WhyUs;
