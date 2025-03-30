import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./db.js";

// Route imports
import adminRoutes from "./routes/AdminRoutes.js";
import heroSectionRoutes from "./routes/heroSectionRoutes.js";
import servicesRoutes from "./routes/serviceSectionRoutes.js";
import countriesRoutes from "./routes/countriesRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import whyUsRoutes from "./routes/whyUsRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import ServiceFormRoutes from "./routes/ServiceFormRoutes.js";
import countryVisaFormRoutes from "./routes/countryVisaFormRoutes.js";
import flightTicketRoutes from "./routes/flightTicketRoutes.js";
import travelInsuranceRoutes from "./routes/travelInsuranceRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// Rate limiting (15 minutes, 100 requests per IP)
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// Body parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/hero-section", heroSectionRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/countries", countriesRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/why-us", whyUsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/visaRequests", ServiceFormRoutes);
app.use("/api/country-visa", countryVisaFormRoutes);
app.use("/api/flight-tickets", flightTicketRoutes);
app.use("/api/travel-insurance", travelInsuranceRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/victory-visas", adminRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend connected to: ${process.env.FRONTEND_URL || "http://localhost:5173"}`);
});