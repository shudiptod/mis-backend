var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var medical_item = new Schema({
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
    enum: ["none", "drugs", "consumables", "other"],
  },
  price: {
    type: Number,
    required: true,
  },
  package: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

const MedicalItem = mongoose.model("medical_item", medical_item);

module.exports = MedicalItem;
