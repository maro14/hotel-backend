const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

// Load environment variables
require("dotenv").config();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

// Connect to the database
const dbConnect = require("./database/mongodb");

// Routers
const userRouter = require("./routes/user");
const roomRouter = require("./routes/room");
const bookRouter = require("./routes/booking");
const authRouter = require("./routes/auth");

// Use routers
app.use("/user", userRouter);
app.use("/room", roomRouter);
app.use("/book", bookRouter);
app.use("/auth", authRouter);

// Set port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnect();
});
