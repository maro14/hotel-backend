const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
});

roomSchema.plugin(mongoosePaginate);

const Room = mongoose.model("rooms", roomSchema);

module.exports = Room;
