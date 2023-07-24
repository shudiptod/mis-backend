let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let family = new Schema({
  address: {
    type: String,
  },
  poverty_status: {
    type: Boolean,
  },
  head_insuree: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "insuree",
  },
  officer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  first_point_service: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "health_facility",
  },
});

// Define the Family model
const Family = mongoose.model("family", family);

module.exports = Family;
