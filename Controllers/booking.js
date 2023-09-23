const mongoose = require('mongoose');
const Booking = require('../models/booking');
const Room = require('../models/room');


const createBooking = (req, res) => {
    const { userId, roomId, startDate, endDate } = req.body;

    Booking.findOne({
        room: roomId,
        startDate: { $lt: endDate },
        enddata: { $gt: startDate}
    }).then(existBooking => {
        if (existBooking) {
            return res.status(400).json({
                message: 'Room is already booked for the specified dates.'
            })
        }
    })

    Room.findById(roomId)
    .then(room => {
        if (!room) {
        return res.status(404).json({
            success: false,
            message: 'Room not found'
        });
    }

    const booking = new Booking({
        _id: new mongoose.Types.ObjectId(),
        userId,
        roomId
    });
    
    return booking.save();
    })
    .then(createdBooking => {
        res.status(201).json({
            success: true,
            message: 'Booking created',
            data: createdBooking
        });
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            error: err
        });
    });
};

// Get all bookings
const getAllBookings = (req, res) => {
    
    Booking.find()
    .populate('userId', 'name email')
    .populate('roomId', 'title')
    .then(bookings => {
            res.status(200).json({
            success: true,
            data: bookings
        });
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            error: err
        });
    })
};

const cancelBooking = (req, res) => {

    const bookingId = req.params.bookingId;
    
    Booking.findByIdAndRemove(bookingId)
    .then(result => {
        if (!result) {
            return res.status(404).json({ message: 'Booking not found'})
        }
        res.status(200).json({ message: 'Booking cancelled successsfully'})
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
}

module.exports = {
    createBooking,
    getAllBookings,
    cancelBooking
};
