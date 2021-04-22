const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const dbConnect = require('./database/mongodb');
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())


app.get('/',(req, res) => {
    res.json({
        msg: 'OK'
    })
})

dbConnect()

const userRouter = require('./routes/user')
const roomRouter = require('./routes/room')
const bookRouter = require('./routes/booking')

app.use('/user', userRouter)
app.use('/room', roomRouter)
app.use('/book', bookRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
})