const express = require('express');
const { createBooking, getAllBookings, cancelBooking } = require('../Controllers/booking');
const auth = require('../middleware/auth');

const router = express.Router()

router.get('/all', auth, getAllBookings)
router.post('/', auth, createBooking)
router.delete('/', cancelBooking)

module.exports = router