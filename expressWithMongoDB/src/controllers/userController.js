const { response } = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async(req, res) => {
    const {password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const securedPassword = bcrypt.hashSync(password, salt);
    console.log("securedPassword", securedPassword);
    try{
        const user = await User.create({...req.body, password: securedPassword});
        console.log("user", user);
        res.status(201).send({message: "user created"});

    }catch(err){
        res.status(400).send({message: "failed", err: err.message})
    }
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    // find the user
    try{
        const userValid = await User.findOne({email});
        if(userValid){
            // match password
            const isPasswordCorrect = bcrypt.compareSync(password, userValid.password);
            if(isPasswordCorrect){
                res.send({message: "logged in successfully"})
            }else{
                res.send({status: "failed", message: "password incorrect"})
            }
        }else{
            res.send({status: "failed", message: "not a valid user"})
        }
    }catch(err){
        res.status(400).send({message: "failed", err: err.message})
    }
}

module.exports = { createUser, loginUser };
