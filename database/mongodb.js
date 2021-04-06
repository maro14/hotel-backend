const mongoose = require('mongoose');


const dbconnect =(req, res) => {

    const db = mongoose.connect('', {
        useCreateIndex: true,
        useFindAndModify: true
    })
    db.then(() => {
        console.log('Database connect');
    }).catch((err) => {
        console.log('Nothing Found...'.err.message);
    })
}

module.exports = dbconnect