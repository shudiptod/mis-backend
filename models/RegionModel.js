// Define the Region schema
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let region = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
});

// Define the Region model
const Region = mongoose.model("region", region);

module.exports = Region;
