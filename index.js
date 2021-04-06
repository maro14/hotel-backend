const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
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

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`SErver on ${PORT}`);
})