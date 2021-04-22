const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    booking: {
        type: mongoose.Types.ObjectId,
        ref: 'bookings'
    }

})

const User = mongoose.model('users', userSchema)

module.exports = User