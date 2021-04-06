const express = require('express');
const morgan = require('morgan');
require('dotenv').config()

const app = express()
app.use(morgan('dev'))


const PORT = 5000

app.listen(PORT, () => {
    console.log(`SErver on ${PORT}`);
})