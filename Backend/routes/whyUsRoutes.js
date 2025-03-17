import express from "express";
import WhyUs from "../models/WhyUs.js"; // Mongoose model for the "Why Us" section

const router = express.Router();

// GET: Retrieve "Why Us" section
router.get("/", async (req, res) => {
  try {
    const whyUs = await WhyUs.findOne();
    if (whyUs) {
      res.status(200).json(whyUs);
    } else {
      res.status(404).json({ message: "'Why Us' content not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch 'Why Us' content", error });
  }
});

// PUT: Update "Why Us" section
router.put("/", async (req, res) => {
  const { features } = req.body;

  try {
    let whyUs = await WhyUs.findOne();
    if (whyUs) {
      whyUs.features = features;
      await whyUs.save();
      res.status(200).json({ message: "'Why Us' content updated successfully", whyUs });
    } else {
      whyUs = new WhyUs({ features });
      await whyUs.save();
      res.status(201).json({ message: "'Why Us' content created successfully", whyUs });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update 'Why Us' content", error });
  }
});

export default router;
