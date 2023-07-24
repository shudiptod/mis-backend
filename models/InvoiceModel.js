var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var invoice = new Schema({
  proof_of_payment: {
    type: String,
  },
  status: {
    type: Boolean,
    required: true,
    enum: ["paid", "unpaid"],
  },
  claim: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "claim",
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});

const Invoice = mongoose.model("invoice", invoice);
