import express from "express";
import Service from "../models/ServiceSection.js"; // Assuming a Mongoose model for services

const router = express.Router();

// GET: Retrieve all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services", error });
  }
});

// POST: Add a new service
router.post("/", async (req, res) => {
  const { title, description, link, imageUrl } = req.body;
  try {
    const newService = new Service({
      title,
      description,
      link,
      imageUrl,
    });

    const savedService = await newService.save();
    res.status(201).json({ message: "Service added successfully", service: savedService });
  } catch (error) {
    res.status(500).json({ message: "Failed to add service", error });
  }
});

// PUT: Update an existing service by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, link, imageUrl } = req.body;
  try {
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { title, description, link, imageUrl, updatedAt: Date.now() },
      { new: true } // Return the updated document
    );

    if (updatedService) {
      res.status(200).json({ message: "Service updated successfully", service: updatedService });
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update service", error });
  }
});

// DELETE: Remove a specific service by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedService = await Service.findByIdAndDelete(id);
    if (deletedService) {
      res.status(200).json({ message: "Service deleted successfully" });
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete service", error });
  }
});

export default router;
