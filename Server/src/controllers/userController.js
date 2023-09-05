const createError = require("http-errors");

//Default router: /api/users/

const getUsers =  async(req, res, next) =>{
    try{
        res.status(200).send({
            message: 'Users were returned',
            
        });
    }
    catch(error){
        next(error);
    }
};

module.exports= {getUsers};
