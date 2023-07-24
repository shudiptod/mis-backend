let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let lga = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  state: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "state",
  },
});

// Define the LGA model
const LGA = mongoose.model("lga", lga);

module.exports = LGA;
