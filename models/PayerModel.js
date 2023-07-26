var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var payer = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["corporative", "donor", "govt", "private", "other"],
  },
  description: {
    type: String,
  },
  state: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "state",
  },
});

const Payer = mongoose.model("payer", payer);

module.exports = Payer;
