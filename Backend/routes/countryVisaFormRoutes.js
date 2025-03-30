import express from "express";
import CountryVisaInquiry from "../models/CountryVisaInquiryModel.js";

const router = express.Router();

// Create inquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, country, visaType, message } = req.body;
    if (!name || !email || !phone || !country || !visaType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const inquiry = await CountryVisaInquiry.create({
      name, email, phone, country, visaType, message,
      status: "new"
    });
    
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all inquiries
router.get("/", async (req, res) => {
  try {
    const { status, country, search } = req.query;
    const query = {};
    
    if (status && status !== "all") query.status = status;
    if (country && country !== "all") query.country = country;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search } }
      ];
    }

    const inquiries = await CountryVisaInquiry.find(query).sort("-createdAt");
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Update inquiry
router.put("/:id", async (req, res) => {
  try {
    const inquiry = await CountryVisaInquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete inquiry
router.delete("/:id", async (req, res) => {
  try {
    await CountryVisaInquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Inquiry deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;