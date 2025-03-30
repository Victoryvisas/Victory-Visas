import express from "express";
import FlightTicket from "../models/FlightTicketsModel.js";

const router = express.Router();

// POST - Create new inquiry
router.post("/submit", async (req, res) => {
  try {
    const { name, contact, email, destination, travelDates, adults, kids, infants } = req.body;
    
    if (!name || !contact || !email || !destination || !travelDates || adults === undefined) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const newTicket = new FlightTicket({
      name,
      contact,
      email,
      destination,
      travelDates,
      adults: parseInt(adults),
      kids: parseInt(kids) || 0,
      infants: parseInt(infants) || 0,
    });

    await newTicket.save();
    return res.status(201).json(newTicket);
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET - Filtered search (MUST COME FIRST)
router.get("/", async (req, res) => {
  try {
    const { search, destination } = req.query;
    let query = {};
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { contact: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (destination && destination !== "all") {
      query.destination = destination;
    }
    
    const data = await FlightTicket.find(query).sort({ createdAt: -1 });
    return res.status(200).json(data);
  } catch (error) {
    console.error("Search error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET - All inquiries (non-filtered)
router.get("/all", async (req, res) => {
  try {
    const data = await FlightTicket.find().sort({ createdAt: -1 });
    return res.status(200).json(data);
  } catch (error) {
    console.error("Fetch all error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET - Single inquiry
router.get("/:id", async (req, res) => {
  try {
    const inquiry = await FlightTicket.findById(req.params.id);
    if (!inquiry) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(inquiry);
  } catch (error) {
    console.error("Single fetch error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

// DELETE - Remove inquiry
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await FlightTicket.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;