const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  createAt: {
    type: String
  },
  room: {
    type: mongoose.Types.ObjectId,
    ref: "rooms",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
