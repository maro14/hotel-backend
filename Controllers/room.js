const Room = require("../models/room");

const getAllRooms = (req, res) => {
  Room.find()
    .select("title _id")
    .then(rooms => {
      res.status(200).json({
        success: true,
        data: rooms,
      });
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        error: err,
      });
    });
};

const addRoom = (req, res) => {
  const { title } = req.body;

  const room = new Room({
    _id: new mongoose.Types.ObjectId(),
    title: title,
  });

  room.save()
    .then(createdRoom => {
      res.status(201).json({
        success: true,
        message: "Room created",
        data: createdRoom,
      });
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        error: err,
      });
    });
};

module.exports = {
  getAllRooms,
  addRoom,
};
