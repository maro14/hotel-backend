const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const registerUser = async(req, res) => {

  const { name , email, password } = req.body

  User.findOne({ email })
  .then((user) => {
    if (user) {
      return res.status(400).json({ message: 'USer alredy exists'})
    }

    return bcrypt.hash(password, 10)
  })
  .then((hash) => {
    const newUser = new User({
      name,
      email,
      password: hash
    })

    return newUser.save()
  })
  .then((user) => {
    res.status(201).json({
      message: 'USer registered successfully',
      user
    })
  })
  .catch((err) => {
    res.status(500).json({
      error: err
    })
  });

};

const loginUser = async(req, res) => {

  const { email, password } = req.body

  let fetchedUser

  User.findOne({ email })
  .then((user) => {
    if (!user) {
      return res.status(401).json({
        message: "Auth failed: Email not found"
      })
    }

    fetchedUser= user;

    return bcrypt.compare(password, user.password)
  })
  .then((isMatch) => {
    if (!isMatch) {
      return res.status(401).json({
        message: 'AUth failed: Incorrect password'
      })
    }

    const token = jwt.sign(
      { email: fetchedUser.email , userId: fetchedUser._id },
      process.env.JWR_SECRET,
      { expiresIn: '1h'}
    )

    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: fetchedUser._id
    })
  })
  .catch((err) => {
    res.status(500).json({
      error: err
    })
  })

};

module.exports = {
  registerUser,
  loginUser,
};
