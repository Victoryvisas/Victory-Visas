// models/Admin.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// Hash password before saving if modified/new
adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

export default mongoose.model("Admin", adminSchema);
