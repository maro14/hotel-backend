const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String
})

const Room = mongoose.model('rooms', roomSchema)

module.exports = Room