const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')
const User = require('../models/user');
const mongoose = require('mongoose');
const router = express.Router()

router.post('/register',
    [
        check('name', 'Name is required')
        .not()
        .isEmpty(),
        check('email', 'Please include valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],async(req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { _id ,name, email, password, booking } = req.body

        try {
            let user = await User.findOne({ email })
            if (user) {
                return res.status(400).json({
                    msg: 'User already exists'
                })
            }

            user = new User({
                _id: new mongoose.Types.ObjectId(),
                name,
                email,
                password,
                booking
            })

            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)
            await user.save()

            const payload = {
                user: {
                    id :user.id
                }
            }

            jwt.sign( payload, process.env.JWT_SECRET, 
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) {
                        throw err
                    }
                    res.json({ token })
                })
        } catch (error) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
})

module.exports = router