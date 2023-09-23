const express = require('express');
const { getUserProfile } = require('../Controllers/user');

const router = express.Router()

router.get('/profile', getUserProfile)

module.exports = router