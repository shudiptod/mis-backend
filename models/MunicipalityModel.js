const mongoose = require("mongoose");

const municipalitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  wards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ward",
    },
  ],
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
    required: true,
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
    required: true,
  },
});

// Define the Municipality model
const Municipality = mongoose.model("Municipality", municipalitySchema);

module.exports = Municipality;
