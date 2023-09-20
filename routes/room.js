const express = require("express");
const { getAllRooms, addRoom} = require("../Controllers/room");
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/live/rooms', getAllRooms)
router.post('/add/room', auth, addRoom)

module.exports = router;
