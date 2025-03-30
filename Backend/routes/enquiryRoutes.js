// routes/enquiryRoutes.js
import express from "express";
import Enquiry from "../models/EnquiryModel.js";

const router = express.Router();

// POST route to submit a new enquiry
router.post("/submit", async (req, res) => {
  try {
    const { name, email, phone, country, purpose, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !country || !purpose) {
      return res.status(400).json({ error: "Name, email, phone, country, and purpose are required." });
    }

    // Create a new enquiry record
    const newEnquiry = new Enquiry({
      name,
      email,
      phone,
      country,
      purpose,
      message, // This field is optional
    });

    // Save the enquiry to the database
    await newEnquiry.save();

    return res.status(201).json({ message: "Enquiry submitted successfully", enquiry: newEnquiry });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET route to fetch all enquiries
router.get("/enquiries", async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    return res.status(200).json(enquiries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
