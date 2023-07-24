var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var product = new Schema({
  code: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  date_from: {
    type: Date,
    required: true,
  },
  date_to: {
    type: Date,
    required: true,
  },
  max_member: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("product", product);

module.exports = Product;
