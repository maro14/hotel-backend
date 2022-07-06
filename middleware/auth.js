const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers("auth");

  if (!token) {
    res.status(401).json({
      msg: "No token, autherization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401)
      .json({
      message: "Token is not valid" ,
      data: error
    });
  }
};

module.exports = verifyToken;
