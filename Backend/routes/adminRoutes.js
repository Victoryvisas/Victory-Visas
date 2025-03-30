import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Admin from "../models/AdminModel.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// POST /api/victory-visas/admin-login
router.post("/admin-login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const admin = await Admin.findOne({ email });
    
    if (!admin) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid email or password" 
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid email or password" 
      });
    }

    const token = await admin.generateAuthToken();
    
    res.status(200).json({ 
      success: true, 
      message: "Login successful", 
      token,
      admin: {
        _id: admin._id,
        email: admin.email
      }
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: "Server error" 
    });
  }
});

// GET /api/victory-visas/admin/me - Get logged in admin profile
router.get("/admin/me", auth, async (req, res) => {
  res.send(req.admin);
});

// POST /api/victory-visas/admin-logout - Logout admin
router.post("/admin-logout", auth, async (req, res) => {
  try {
    req.admin.tokens = req.admin.tokens.filter(token => {
      return token.token !== req.token;
    });

    await req.admin.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

export default router;