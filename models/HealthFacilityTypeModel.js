var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var health_facility_type = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const HealthFacilityType = mongoose.model(
  "health_facility_type",
  health_facility_type
);

module.exports = HealthFacility;
