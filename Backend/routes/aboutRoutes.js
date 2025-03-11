import express from "express";
import About from "../models/About.js"; // Import Mongoose model

const router = express.Router();

// GET: Retrieve About Us content
router.get("/", async (req, res) => {
  try {
    const about = await About.findOne();
    if (about) {
      res.status(200).json(about);
    } else {
      res.status(404).json({ message: "About Us content not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch About Us content", error });
  }
});

// PUT: Update About Us content
router.put("/", async (req, res) => {
  const { aboutText, services } = req.body;

  try {
    let about = await About.findOne();
    if (about) {
      about.aboutText = aboutText;
      about.services = services;
      await about.save();
      res.status(200).json({ message: "About Us content updated successfully", about });
    } else {
      about = new About({ aboutText, services });
      await about.save();
      res.status(201).json({ message: "About Us content created successfully", about });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update About Us content", error });
  }
});

export default router;
