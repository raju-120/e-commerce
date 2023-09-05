const express = require('express');
const userRouter = express.Router();
const { getUsers } = require('../controllers/userController');


//Default router: /api/users/

userRouter.get('/', getUsers);

module.exports = userRouter;