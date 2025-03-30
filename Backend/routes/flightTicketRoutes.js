// routes/flightTicketRoutes.js
import express from "express";
import FlightTicket from "../models/FlightTicketsModel.js";

const router = express.Router();

// POST route to submit a new flight ticket inquiry
router.post("/submit", async (req, res) => {
  try {
    const { name, contact, email, destination, travelDates, adults, kids, infants } = req.body;
    
    // Validate incoming data (you can add more sophisticated validation as needed)
    if (
      !name ||
      !contact ||
      !email ||
      !destination ||
      !travelDates ||
      adults === undefined ||
      kids === undefined ||
      infants === undefined
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    // Create a new flight ticket inquiry
    const newTicket = new FlightTicket({
      name,
      contact,
      email,
      destination,
      travelDates,
      adults,
      kids,
      infants,
    });
    
    // Save to the database
    await newTicket.save();
    
    return res.status(201).json({ message: "Inquiry submitted successfully", ticket: newTicket });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET route to fetch all flight ticket inquiries
router.get("/inquiries", async (req, res) => {
  try {
    const inquiries = await FlightTicket.find();
    return res.status(200).json(inquiries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
