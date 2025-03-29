// routes/adminRoutes.js
import express from "express";
import Admin from "../models/AdminModel.js"; // Make sure this path is correct for your project
import bcrypt from "bcrypt";
// Optionally, import jwt if you want to generate tokens
// import jwt from "jsonwebtoken";

const router = express.Router();

// POST /api/victory-visas/admin-login
router.post("/admin-login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    // Optionally, generate a token (e.g., with JWT)
    // const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    const token = "YOUR_GENERATED_TOKEN_HERE"; // Replace with actual token logic if needed

    return res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
