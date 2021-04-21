const express = require('express');
const mongoose = require('mongoose');
const Room = require('../models/room');

const router = express.Router()

router.get('/rooms', (req, res, next) => {
    const rooms = Room.find().select('title _id ')
    rooms.then(docs => {
        res.status(200).json({
            success: true,
            data: docs
        })
    }).catch(err => {
        res.status(400).json({
            success: false,
            data: err
        })
    })
})

router.post('/add/room', (req, res) => {
    const room = new Room({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title
    })
    room.save()
    .then(create => {
        res.status(201).json({
            success: true,
            message: 'room created',
            data: create
        })
    }).catch(err => {
        res.status(400).json({
            success: false,
            data: err
        })
    })
})

module.exports = router