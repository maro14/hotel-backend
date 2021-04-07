const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dbConnect = require('./database/mongodb');
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/',(req, res) => {
    res.json({
        msg: 'ok'
    })
})

dbConnect()

const userRouter = require('./routes/user')

app.use('/', userRouter);
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
})