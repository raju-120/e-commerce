const app = require('./app');
const connectDB = require('./config/db');
const {serverPort} = require('./secrect');


app.listen(serverPort, async() =>{
    console.log(`Server is running at http://localhost:${serverPort}`);
    await connectDB();
});