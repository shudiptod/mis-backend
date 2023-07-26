const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    phone: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, required: true, ref: "role" },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    blocked: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
