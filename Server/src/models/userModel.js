const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required.'],
        trim: true, //.... empty space not allowed.
        minLength: [31, 'The length of user name can be maximum 3 Character.'],
        maxLength: [31, 'The length of user name can be maximum 31 Character.'],
    },
    email: {
        type: String,
        required: [true, 'User email is required.'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: (v)=> {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            }
        }
    },
})