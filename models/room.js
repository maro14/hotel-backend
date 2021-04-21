const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
        type: String,
        unique: true,
        required: true
    }
})

const Room = mongoose.model('rooms', roomSchema)

module.exports = Room