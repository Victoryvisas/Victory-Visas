// routes/visaRequests.js
import express from "express";
import VisaRequest from "../models/ServiceformModel.js"; // Ensure you include the .js extension

const router = express.Router();

// POST route to submit form data
router.post("/submit", async (req, res) => {
  try {
    const { name, email, phone, visaType, message } = req.body;

    // Validate incoming data
    if (!name || !email || !phone || !visaType || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new visa request
    const newVisaRequest = new VisaRequest({
      name,
      email,
      phone,
      visaType,
      message,
    });

    // Save to the database
    await newVisaRequest.save();

    return res.status(201).json({ message: "Request submitted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET route to fetch all visa requests
router.get("/requests", async (req, res) => {
  try {
    const visaRequests = await VisaRequest.find();
    return res.status(200).json(visaRequests);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
