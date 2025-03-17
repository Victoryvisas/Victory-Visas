import express from "express";
import HeroSection from "../models/HeroSection.js";

const router = express.Router();

// GET: Retrieve hero section data
router.get("/", async (req, res) => {
  try {
    const heroSection = await HeroSection.findOne();
    res.status(200).json(heroSection || { images: [], whatsappLink: "" });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch hero section data", error });
  }
});

// PUT: Add or update hero section data
router.put("/", async (req, res) => {
    const { images, whatsappLink } = req.body;
    try {
      let heroSection = await HeroSection.findOne();
      if (heroSection) {
        heroSection.images = images;
        heroSection.whatsappLink = whatsappLink;
      } else {
        heroSection = new HeroSection({ images, whatsappLink });
      }
      await heroSection.save();
      res.status(200).json({ message: "Hero section updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to update hero section", error });
    }
  });
  

// DELETE: Delete an image by index
router.delete("/image/:index", async (req, res) => {
  const { index } = req.params;
  try {
    const heroSection = await HeroSection.findOne();
    if (heroSection && heroSection.images.length > index) {
      heroSection.images.splice(index, 1); // Remove the image
      await heroSection.save();
      res.status(200).json({ message: "Image removed successfully" });
    } else {
      res.status(404).json({ message: "Image not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete image", error });
  }
});

export default router;
