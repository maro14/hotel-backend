const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createAt: {
    type: String
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rooms",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
