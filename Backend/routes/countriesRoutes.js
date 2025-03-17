import express from "express";
import Country from "../models/Country.js"; // Import Mongoose model

const router = express.Router();

// GET: Retrieve all countries
router.get("/", async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch countries", error });
  }
});

// POST: Add a new country
router.post("/", async (req, res) => {
  const { name, path, flag } = req.body;
  try {
    const newCountry = new Country({ name, path, flag });
    await newCountry.save();
    res.status(201).json({ message: "Country added successfully", country: newCountry });
  } catch (error) {
    res.status(500).json({ message: "Failed to add country", error });
  }
});

// PUT: Update an existing country by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, path, flag } = req.body;
  try {
    const updatedCountry = await Country.findByIdAndUpdate(
      id,
      { name, path, flag },
      { new: true } // Return the updated document
    );
    if (updatedCountry) {
      res.status(200).json({ message: "Country updated successfully", country: updatedCountry });
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update country", error });
  }
});

// DELETE: Remove a country by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCountry = await Country.findByIdAndDelete(id);
    if (deletedCountry) {
      res.status(200).json({ message: "Country deleted successfully" });
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete country", error });
  }
});

export default router;
