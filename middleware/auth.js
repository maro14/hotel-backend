const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers("auth")

  if (!token) {
    res.status(401).json({
      msg: "No token, autherization denied",
    });
  }

  new Promise((resolve, reject) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (decoded) {
      resolve(decoded)
    } else {
      reject(new Error("Token verification failed"))
    }
  })
  .then(decoded => {
    req.userId = decoded.userId
  })
  .catch(error => {
    return res.status(401).json({
      message: "Token is not valid", error
    })
  })
};

module.exports = uath;
