const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const login = async (req, res) => {
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
            expiresIn: 60 * 60, //in sec
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

const getProfile = async (req, res) => {
  const {userId} = req;
  try{
    const user = await User.findById(userId).select({password: 0});
    res.status(200).json({message: "success", user: user})
  }catch(err){
    res.status(500).send({ message: "failed", err: err.message });
  }
};

module.exports = { signUp, login, getProfile };
