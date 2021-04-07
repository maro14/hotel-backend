const mongoose = require('mongoose');


const dbconnect =(req, res) => {

    const db = mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useFindAndModify: true,
        useNewUrlParser: true
    })
    db.then(() => {
        console.log('Database connect');
    }).catch((err) => {
        console.log('Nothing Found...'.err.message);
    })
}

module.exports = dbconnect