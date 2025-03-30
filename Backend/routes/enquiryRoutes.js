import express from "express";
import Enquiry from "../models/EnquiryModel.js";

const router = express.Router();

// POST - Create new enquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, country, purpose, message } = req.body;

    // Validation
    if (!name || !email || !phone || !country || !purpose) {
      return res.status(400).json({ 
        error: "Name, email, phone, country, and purpose are required." 
      });
    }

    // Create enquiry
    const newEnquiry = new Enquiry({
      name,
      email,
      phone,
      country,
      purpose,
      message: message || "",
      status: "new",
      createdAt: new Date()
    });

    // Save to database
    await newEnquiry.save();

    return res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry: newEnquiry
    });

  } catch (error) {
    console.error("Error creating enquiry:", error);
    return res.status(500).json({ 
      error: "Internal server error" 
    });
  }
});

// GET - All enquiries
router.get("/", async (req, res) => {
  try {
    const { status, search } = req.query;
    let query = {};

    // Add status filter if provided
    if (status && status !== "all") {
      query.status = status;
    }

    // Add search filter if provided
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search } },
        { purpose: { $regex: search, $options: "i" } }
      ];
    }

    const enquiries = await Enquiry.find(query)
      .sort({ createdAt: -1 });

    return res.status(200).json(enquiries);

  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return res.status(500).json({ 
      error: "Internal server error" 
    });
  }
});

// GET - Single enquiry
router.get("/:id", async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    
    if (!enquiry) {
      return res.status(404).json({ 
        error: "Enquiry not found" 
      });
    }

    return res.status(200).json(enquiry);

  } catch (error) {
    console.error("Error fetching enquiry:", error);
    return res.status(500).json({ 
      error: "Internal server error" 
    });
  }
});

// PUT - Update enquiry
router.put("/:id", async (req, res) => {
  try {
    const { status, notes } = req.body;
    const updateFields = {};

    if (status) updateFields.status = status;
    if (notes) updateFields.notes = notes;

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );

    if (!updatedEnquiry) {
      return res.status(404).json({ 
        error: "Enquiry not found" 
      });
    }

    return res.status(200).json(updatedEnquiry);

  } catch (error) {
    console.error("Error updating enquiry:", error);
    return res.status(500).json({ 
      error: "Internal server error" 
    });
  }
});

// DELETE - Remove enquiry
router.delete("/:id", async (req, res) => {
  try {
    const deletedEnquiry = await Enquiry.findByIdAndDelete(req.params.id);
    
    if (!deletedEnquiry) {
      return res.status(404).json({ 
        error: "Enquiry not found" 
      });
    }

    return res.status(200).json({ 
      message: "Enquiry deleted successfully" 
    });

  } catch (error) {
    console.error("Error deleting enquiry:", error);
    return res.status(500).json({ 
      error: "Internal server error" 
    });
  }
});

export default router;