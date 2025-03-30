// createAdmin.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from './models/AdminModel.js'; // Adjust the path if needed

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/victory-visas", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

const createAdmin = async () => {
  await connectDB();

  const email = "";
  const password = ""; // Use a secure password in production

  try {
    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log("Admin account already exists.");
    } else {
      // Create a new admin
      const admin = new Admin({ email, password });
      await admin.save();
      console.log("Admin account created successfully.");
    }
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    mongoose.disconnect();
  }
};

createAdmin();
