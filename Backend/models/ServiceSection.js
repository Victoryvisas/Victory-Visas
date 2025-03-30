import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  imageUrl: { type: String, required: true }, // URL of the uploaded image
  createdAt: { type: Date, default: Date.now }, // Timestamp for when the service was added
  updatedAt: { type: Date, default: Date.now }, // Timestamp for when the service was last updated
});

// Middleware to update the 'updatedAt' field on document save
serviceSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;