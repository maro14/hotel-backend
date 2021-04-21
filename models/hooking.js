const mongoose = require('mongoose');

const borderSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    room: {
        type: mongoose.Types.ObjectId,
        ref: 'rooms'
    },
    createAt: {
        type: Date,
        required: true,
        default: Date(),
        expires: 180
    }
})

const Hooking = mongoose.model('hooking', borderSchema)

module.exports = Hooking