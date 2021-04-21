const mongoose = require('mongoose');


const dbconnect =(req, res) => {

    const db = mongoose.connect(process.env.MONGODB, {
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