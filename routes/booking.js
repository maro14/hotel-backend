const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const Booking = require('../models/booking')
const Hooking = require('../models/hooking')
const User = require('../models/user');


router.get('/live', auth, async(req, res) => {
    const hookings = await Hooking.find({ id: userId })
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


router.get('/yourbookings', auth, async(req, res) => {
    const bookings = await Booking.find({ user: req.userId })
    bookings.then(docs => {
        res.status(200).json({
            Bookings: docs.map(doc => {
                return {
                    room: doc.room,
                    createAt: doc.createAt
                }
            })
        })
    })
    .catch(err => {
        res.status(400).json({
            data: err
        })
    })
})

module.exports = router