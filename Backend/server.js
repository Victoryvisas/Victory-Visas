import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import heroSectionRoutes from "./routes/heroSectionRoutes.js";
import servicesRoutes from "./routes/serviceSectionRoutes.js";
import countriesRoutes from "./routes/countriesRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js"; // Import about routes
import whyUsRoutes from "./routes/whyUsRoutes.js"; // Import WhyUs routes
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/hero-section", heroSectionRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/countries", countriesRoutes);
app.use("/api/about", aboutRoutes); // Add about routes
app.use("/api/why-us", whyUsRoutes); // Add WhyUs routes
app.use('/api/contact', contactRoutes); 


// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

