var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var claim = new Schema({
  claim_no: {
    type: String,
    required: true,
  },
  claimed_date: {
    type: Date,
    required: true,
  },
  last_updated: {
    type: Date,
    required: true,
  },
  notes_from_admin: {
    type: String,
    required: true,
  },
  claimed: {
    type: Number,
    required: true,
  },
  approved: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["submitted", "pre-approved", "approved", "rejected"],
  },
  health_facility: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "health_facility",
  },
  insuree: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "insuree",
  },
  notes_from_hospital: {
    type: String,
  },
});

const Claim = mongoose.model("claim", claim);

module.exports = Claim;
