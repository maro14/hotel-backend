const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const User = require('../models/user');

router.get('/', async(req, res) => {
    try {
        const user = User.findById(req.userId).select('-password')
        res.json(user)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
})

module.exports = router