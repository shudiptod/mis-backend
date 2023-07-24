var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var medical_service = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["preventive", "curative"],
  },
  price: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const MedicalService = mongoose.model("medical_service", medical_service);

module.exports = MedicalService;
