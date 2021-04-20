const express = require('express');
const router = express.Router()
const Booking = require('../models/booking');

router.get('/booking', (req, res) => {
    const bookings = Booking.find({ user: req.userId })
    bookings.then(docs => {
        res.status(200).json({
            Bookings = docs.map(doc => {
                return {
                    room: doc.room,
                    createAt: doc.createAt
                }
            })
        })
    })
    .catch(err => {
        res.status(400).json({
            data = err
        })
    })
})