const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const Booking = require('../models/booking')
const Hooking = require('../models/hooking')
const User = require('../models/user');


router.get('/live', auth, async(req, res) => {
    const hookings = await Hooking.find({ id: req.userId })
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
            error: err
        })
    })
})

router.post('/book', auth, async(req, res) => {
    const booking = await Booking.find({ user: req.userId })
    booking.then(docs => {
        if (docs.length >= 1) {
            const newDate = Date().toString().split('', 4).join('-')
            const oldDate = docs.map(doc => { return {pp: doc.createAt }})
            const prp = oldDate[0].pp
            if (newDate === prp) {
                return res.status(200).json({
                    message: 'daily limit reached'
                })
            } else {
                let createdAt = ""
                const book = new Booking({
                    _id: new mongoose.Types.ObjectId(),
                    room: req.body.roomId,
                    user: req.userId,
                    createdAt: Date().toString().split(' ', 4).join('-')
                })
                book.save().then(result => {
                    return User.findById(req.userId)
                }).then(user => {
                    res.status(201).json({
                        message: 'Booking successful'
                    })
                }).catch(err => {
                    console.log(err);
                })

                const hook = new Hooking({
                    _id: mongoose.Types.ObjectId(),
                    room: req.body.roomId,
                    user: req.userId
                })
                hook.save()
            }
        } else {
            let createdAt = ""
            const book = new Booking({
                _id: new mongoose.Types.ObjectId(),
                room: req.body.roomId,
                user: req.userId,
                createdAt: Date().toString().split(' ', 4).join('-')
            })
            book.save().then(result => {
                return User.findById(req.userId)
            }).then(user => {
                res.status(201).json({
                    message: 'Booking successful'
                })
            }).catch(err => {
                console.log(err);
            })
            const hook = new Hooking({
                _id: mongoose.Types.ObjectId(),
                room: req.boody.roomId,
                user: req.userId
            })
            hook.save()
        }
    }).catch(err => {
        res.status(500).json({
            error: err
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
            error: err
        })
    })
})

module.exports = router