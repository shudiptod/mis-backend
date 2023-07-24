var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var policy = new Schema({
  start: {
    type: Date,
  },
  expiry: {
    type: Date,
    required: true,
  },
  officer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  status: {
    type: Boolean,
    enum: ["active", "inactive"],
  },
  value: {
    type: Number,
  },
  balance: {
    type: Number,
  },
  product: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "product",
  },
  family: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "family",
  },
});

const Policy = mongoose.model("policy", policy);

module.exports = Policy;
