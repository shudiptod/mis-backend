const mongoose = require("mongoose");

// Define the Region schema
const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  states: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
    },
  ],
});

// Define the Region model
const Region = mongoose.model("Region", regionSchema);

module.exports = Region;
