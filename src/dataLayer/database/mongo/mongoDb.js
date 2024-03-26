"use strict";
const mongoose = require('mongoose');
const connect = () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection to mongodb has failed'));
        db.once('open', () => {
            console.log('succesfully connected to mongodb');
        });
    }
    catch (error) {
        throw new Error('error in connecting mongodb!');
    }
};
module.exports = {
    connect
};
