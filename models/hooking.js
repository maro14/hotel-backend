const mongoose = require("mongoose");


const borderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rooms",
  },
  createAt: {
    type: Date,
    required: true,
    default: Date(),
    expires: 180,
  },
});

const Hooking = mongoose.model("hooking", borderSchema);

module.exports = Hooking;
