const express = require('express');
const { createBooking, getAllBookings} = require('../Controllers/booking');
const auth = require('../middleware/auth');

const router = express.Router()

router.get('/all', auth, getAllBookings)
router.post('/', auth, createBooking)

module.exports = router