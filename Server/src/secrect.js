require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 5001;
const mongodbURL = process.env.MONGODBCONNECT ;

module.exports={serverPort, mongodbURL};