const mongoose = require("mongoose");

// Define the Ward schema
const wardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
});

// Define the Ward model
const Ward = mongoose.model("Ward", wardSchema);

module.exports = Ward;
