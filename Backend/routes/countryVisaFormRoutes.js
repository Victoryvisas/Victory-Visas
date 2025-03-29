// routes/countryVisaRoutes.js
import express from "express";
import CountryVisaInquiry from "../models/CountryVisaInquiryModel.js"; // Adjust the path as necessary

const router = express.Router();

// POST route to submit a new visa inquiry
router.post("/submit", async (req, res) => {
  try {
    const { name, email, phone, visaType, message } = req.body;
    
    // Basic validation for required fields
    if (!name || !email || !phone || !visaType) {
      return res.status(400).json({ error: "Name, email, phone, and visa type are required." });
    }
    
    // Create and save a new inquiry
    const newInquiry = new CountryVisaInquiry({
      name,
      email,
      phone,
      visaType,
      message,
    });
    await newInquiry.save();
    
    return res.status(201).json({ message: "Inquiry submitted successfully.", inquiry: newInquiry });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET route to fetch all visa inquiries
router.get("/inquiries", async (req, res) => {
  try {
    const inquiries = await CountryVisaInquiry.find();
    return res.status(200).json(inquiries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
