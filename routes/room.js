const express = require("express");
const { getAllRooms, addRoom} = require("../Controllers/room");

const router = express.Router();

router.get('/live/rooms', getAllRooms)
router.post('/add/room', addRoom)

module.exports = router;
