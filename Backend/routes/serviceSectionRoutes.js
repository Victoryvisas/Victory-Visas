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

// POST: Add or update services
router.post("/", async (req, res) => {
  const { services } = req.body;
  try {
    await Service.deleteMany(); // Remove existing services to update the entire list
    const createdServices = await Service.insertMany(services);
    res.status(200).json({ message: "Services updated successfully", services: createdServices });
  } catch (error) {
    res.status(500).json({ message: "Failed to update services", error });
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
