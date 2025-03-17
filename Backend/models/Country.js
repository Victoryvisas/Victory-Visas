import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
});

const Country = mongoose.model("Country", countrySchema);

export default Country;
