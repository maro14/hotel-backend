const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    createAt: String,
    room: {
        type: mongoose.Types.ObjectId,
        ref: 'rooms'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }
})

const Booking = mongoose.model('booking', bookingSchema)

module.exports = Booking