const express = require("express");
const router = express.Router();
const { userRegistrationValidator, userLoginValidator } = require("../validators/userValidator");
const authController = require("../controllers/authController");

router.post("/register", userRegistrationValidator, authController.registerUser);
router.post("/login", userLoginValidator, authController.loginUser);

module.exports = router;