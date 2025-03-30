// models/FlightTicket.js
import mongoose from "mongoose";

const flightTicketSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    travelDates: { type: String, required: true },
    adults: { type: Number, required: true },
    kids: { type: Number, required: true },
    infants: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("FlightTicket", flightTicketSchema);
