let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ward = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  lga: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "lga",
  },
});

// Define the Ward model
const Ward = mongoose.model("ward", ward);

module.exports = Ward;
