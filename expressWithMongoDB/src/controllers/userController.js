const { response } = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const SECRET_KEY = "newtonBE2024";
const createUser = async (req, res) => {
  const { password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const securedPassword = bcrypt.hashSync(password, salt);
  console.log("securedPassword", securedPassword);
  try {
    const user = await User.create({ ...req.body, password: securedPassword });
    console.log("user", user);
    res.status(201).send({ message: "user created" });
  } catch (err) {
    res.status(400).send({ message: "failed", err: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // find the user
  try {
    const userValid = await User.findOne({ email });
    if (userValid) {
      // match password
      const isPasswordCorrect = bcrypt.compareSync(
        password,
        userValid.password
      );
      if (isPasswordCorrect) {
        // generate JWT
        const token = jwt.sign(
          {
            userId: userValid._id,
            email: userValid.email,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: 60*60, //in sec
          }
        );
        console.log("token", token);
        res.send({ message: "logged in successfully", token });
      } else {
        res.send({ status: "failed", message: "password incorrect" });
      }
    } else {
      res.send({ status: "failed", message: "not a valid user" });
    }
  } catch (err) {
    res.status(400).send({ message: "failed", err: err.message });
  }
};

const getProfile = (req, res) => {
    const { authorization } = req.headers;
    const tokenArr = authorization.split(" ");
    const jwtToken = tokenArr[1];
    try{
        const userData = jwt.verify(jwtToken, process.env.SECRET_KEY);
        const {userId} = userData;
        User.findById(userId)
        .then((data) => {
            res.send({status: "success", data})
        })
    }catch(err){
        console.log("err", err);
        res.send({status: "failed", err: err.message});
    }
};

module.exports = { createUser, loginUser, getProfile };
