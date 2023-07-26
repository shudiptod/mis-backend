var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var insuree = new Schema({
  insurance_no: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  other_name: {
    type: String,
  },
  first_name: {
    type: String,
    required: true,
  },
  martial_status: {
    type: String,
    required: true,
    enum: ["single", "married", "divorced", "widowed", "prefer-not-to-say"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  photo_date: {
    type: Date,
    required: true,
  },
  beneficiary_card: {
    type: Boolean,
    required: true,
  },
  identification_no: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
  },
  education: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  is_family_head: {
    type: Boolean,
    required: true,
  },
  family: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "family",
  },
  ward: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "ward",
  },
  officer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});

const Insuree = mongoose.model("insuree", insuree);

module.exports = Insuree;
