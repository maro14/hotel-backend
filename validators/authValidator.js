const{ check } = require('express-validator')

const UserRegisterValidator = [
    check('name', 'Name is required').not().isEmpty(),
    check('email').notEmpty(),
    check('password').isLength({ min: 6}),
]

const userLoginValidator = [
    check("email", "Email required").isEmail(),
    check("password", "Password required").exists(),
  ]

module.exports = { UserRegisterValidator, userLoginValidator}