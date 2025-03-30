import express from "express";
import VisaRequest from "../models/ServiceformModel.js";

const router = express.Router();

// Submit new visa request
router.post("/submit", async (req, res) => {
  try {
    const { name, email, phone, visaType, message } = req.body;

    if (!name || !email || !phone || !visaType || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newVisaRequest = new VisaRequest({
      name,
      email,
      phone,
      visaType,
      message,
    });

    await newVisaRequest.save();
    return res.status(201).json({ message: "Request submitted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// Get all requests with filtering
router.get("/", async (req, res) => {
  try {
    const { search, visaType } = req.query;
    let query = {};
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (visaType) {
      query.visaType = visaType;
    }
    
    const requests = await VisaRequest.find(query).sort({ createdAt: -1 });
    return res.status(200).json(requests);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// Get single request
router.get("/:id", async (req, res) => {
  try {
    const request = await VisaRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ error: "Request not found" });
    }
    return res.status(200).json(request);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// Delete a request
router.delete("/:id", async (req, res) => {
  try {
    const deletedRequest = await VisaRequest.findByIdAndDelete(req.params.id);
    if (!deletedRequest) {
      return res.status(404).json({ error: "Request not found" });
    }
    return res.status(200).json({ message: "Request deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;