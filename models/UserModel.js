const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  last_name: {
    type: String,
    required: [true, "Last name is required"],
  },
  other_name: {
    type: String,
    required: [true, "Other name is required"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid email format",
    },
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
    validator: async function (value) {
      try {
        const roleCount = await mongoose
          .model("Role")
          .countDocuments({ _id: value });
        return roleCount > 0;
      } catch (err) {
        return false;
      }
    },
    message: "Invalid role",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
