const mongoose = require("mongoose");

const dbconnect = (req, res) => {
  const db = mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  db.then(() => {
    console.log("Database connect...");
  }).catch((err) => {
    console.log("Database error ...", err.message);
  });
};

module.exports = dbconnect;
