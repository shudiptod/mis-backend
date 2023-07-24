let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let state = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  region: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "region",
  },
});

// Define the State model
const State = mongoose.model("state", state);

module.exports = State;
