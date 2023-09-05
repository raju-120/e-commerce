const express = require("express");
const morgan = require('morgan');
const xssClean = require('xss-clean');
const rateLimit = require("express-rate-limit");
const createError = require("http-errors");
const userRouter = require("./routers/userRouter");

const app = express();


const rateLimiter = rateLimit({
    windowMs: 1*60*1000,//set it a 1 min
    max: 5,
    message: 'Too many request from this IP.Please try again later.'
})

//Middleware
app.use(xssClean());
app.use(rateLimiter);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//users router
app.use("/api/users",userRouter);


app.get('/', async(req, res) =>{
    res.send('Welcome to Server');
});

app.get('/test', async(req, res) =>{
    res.status(200).send(
        {message: 'API testing is running Fine'}
    );
});

//Client error handling
app.use((req, res, next) =>{
    next(createError(404, "Route not found."));
});

//Server error handling -> all the errors will come here at the end of the server errors
app.use((err,req, res, next) =>{
    return res.status(err.status || 5000).send({
        success: false,
        message: err.message,
    })
});

module.exports = app;