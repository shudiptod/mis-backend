var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var health_facility = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  care_type: {
    type: String,
    required: true,
    enum: ["in-patient", "out-patient", "in-out-patient"],
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  ward: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "ward",
  },
  health_facility_type: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "health_facility_type",
  },
});

const HealthFacility = mongoose.model("health_facility", health_facility);

module.exports = HealthFacility;
