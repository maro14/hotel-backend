const express = require('express');
const mongoose = require('mongoose');
const Room = require('../models/room');

const router = express.Router()

router.get('/rooms', (req, res) => {
    const rooms = Room.find({})
    rooms.then(docs => {
        res.send(200).json({
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

router.post('/room', (req, res) => {
    const room = new Room({
        _id: mongoose.Types.ObjectId(),
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