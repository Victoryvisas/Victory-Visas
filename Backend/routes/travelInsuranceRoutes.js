// routes/travelInsuranceRoutes.js
import express from "express";
import TravelInsurance from "../models/TravelInsuranceModel.js";

const router = express.Router();

// POST route to submit a new travel insurance inquiry
router.post("/submit", async (req, res) => {
  try {
    const { name, contact, email, destination, travelDates } = req.body;

    // Validate required fields
    if (!name || !contact || !email || !destination || !travelDates) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new travel insurance inquiry
    const newInquiry = new TravelInsurance({
      name,
      contact,
      email,
      destination,
      travelDates,
    });

    // Save the inquiry to the database
    await newInquiry.save();

    return res
      .status(201)
      .json({ message: "Inquiry submitted successfully", inquiry: newInquiry });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET route to fetch all travel insurance inquiries
router.get("/inquiries", async (req, res) => {
  try {
    const inquiries = await TravelInsurance.find();
    return res.status(200).json(inquiries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
