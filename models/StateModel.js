const mongoose = require("mongoose");

// Define the State schema
const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  municipalities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Municipality",
    },
  ],
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
    required: true,
  },
});

// Define the State model
const State = mongoose.model("State", stateSchema);

module.exports = State;
