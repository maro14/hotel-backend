const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')
const Hooking = require('../models/hooking')
const User = require('../models/user');


router.get('/live', (req, res) => {
    const hookings = Hooking.find({ id: userId })
    hookings.then(docs => {
        if (docs.length <= 0) {
            return res.status(200).json({
                data: docs,
                message: 'No Rooms'
            })
        } else {
            return res.status(200).json({
                activeRooms: docs.map(doc => {
                    return {
                        bookings: doc._id,
                        room: docs.room
                    }
                })
            })
        }

    }).catch(err => {
        res.status(400).json({
            data: err
        })
    })
})


router.get('/yourbooking', (req, res) => {
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

module.exports = router