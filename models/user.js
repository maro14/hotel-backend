const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  },
  booking: {
    type: mongoose.Types.ObjectId,
    ref: "bookings",
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
