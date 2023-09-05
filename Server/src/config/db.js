const mongoose = require('mongoose');
const { mongodbURL } = require('../secrect');
const connectDB = async(options = {}) =>{
    try{
        await mongoose.connect(mongodbURL, options);
        console.log('Connect to db is working');

        mongoose.connection.on('error', (error) =>{
            console.error('DB connection error',error);
        })
    }
    catch(error){
        console.error('Could not connect to DB',error.toString());
    }
};

module.exports = connectDB;