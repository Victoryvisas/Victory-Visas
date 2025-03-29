import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors package
import connectDB from "./db.js";
import heroSectionRoutes from "./routes/heroSectionRoutes.js";
import servicesRoutes from "./routes/serviceSectionRoutes.js";
import countriesRoutes from "./routes/countriesRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js"; // Import about routes
import whyUsRoutes from "./routes/whyUsRoutes.js"; // Import WhyUs routes
import contactRoutes from "./routes/contactRoutes.js";
import ServiceFormRoutes from "./routes/ServiceFormRoutes.js"; // Import ServiceForm routes
import countryVisaFormRoutes from "./routes/countryVisaFormRoutes.js"; // Import country visa routes
import flightTicketRoutes from "./routes/flightTicketRoutes.js"; // Import flight ticket routes
import travelInsuranceRoutes from "./routes/travelInsuranceRoutes.js"; // Import travel insurance routes
import enquiryRoutes from "./routes/enquiryRoutes.js"; // Import enquiry routes
import adminRoutes from "./routes/AdminRoutes.js"; // Import admin routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Enable CORS for specific origin (frontend URL)
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/hero-section", heroSectionRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/countries", countriesRoutes);
app.use("/api/about", aboutRoutes); // Add about routes
app.use("/api/why-us", whyUsRoutes); // Add WhyUs routes
app.use("/api/contact", contactRoutes);
app.use("/api/visaRequests", ServiceFormRoutes); // Add ServiceForm routes
app.use("/api/country-visa", countryVisaFormRoutes);
app.use("/api/flight-tickets", flightTicketRoutes);
app.use("/api/travel-insurance", travelInsuranceRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/victory-visas", adminRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
