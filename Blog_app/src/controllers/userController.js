const User = require("../models/userModel");
const bcrypt = require("bcrypt");

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

const login = (req, res) => {
  res.send("login");
};

const getProfile = (req, res) => {
  res.send("profile");
};

module.exports = { signUp, login, getProfile };
