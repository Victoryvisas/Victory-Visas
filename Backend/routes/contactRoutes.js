import express from "express";
import Contact from "../models/Contact.js"; // Ensure Contact is using ES modules as well

const router = express.Router();

router.get("/contact", async (req, res) => {
  try {
    const contact = await Contact.findOne();
    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact information not found." });
    }
    res.json({ success: true, data: contact });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error retrieving contact information.", error: error.message });
  }
});

router.put("/contact", async (req, res) => {
  try {
    const updatedContact = await Contact.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json({
      success: true,
      message: "Contact information updated successfully.",
      data: updatedContact,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating contact information.", error: error.message });
  }
});

router.delete("/contact", async (req, res) => {
  try {
    await Contact.deleteMany();
    res.json({ success: true, message: "All contact information deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting contact information.", error: error.message });
  }
});

export default router;
