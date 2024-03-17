const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    gender: String,
})

const User = model("users", userSchema);

module.exports = User;