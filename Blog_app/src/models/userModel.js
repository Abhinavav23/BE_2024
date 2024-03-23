const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: {
       type: String,
       required: true,
       unique: true,
       minLength: 4
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minLength: 5
     },
     email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5
     },
});

const userModel = model("users", userSchema);

module.exports = userModel;