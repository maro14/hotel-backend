const express = require('express');
const { getUserProfile } = require('../Controllers/user');
const auth = require('../middleware/auth');

const router = express.Router()

router.get('/profile', auth, getUserProfile)

module.exports = router