var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var role = new Schema({
  level: {
    type: String,
    required: true,
    enum: [0, 1, 2, 3, 4],
  },
  name: {
    type: String,
    required: true,
    enum: [
      "super",
      "admin",
      "health_facility_admin",
      "enrollment_officer",
      "accountant",
    ],
  },
});

// Create the role model
const Role = mongoose.model("role", role);

module.exports = Role;
