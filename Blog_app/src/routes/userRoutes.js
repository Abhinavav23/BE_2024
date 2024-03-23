const express = require("express");
const router = express.Router();

const { signUp, login, getProfile } = require("../controllers/userController");

router.post("/signup", signUp);
router.post("/login", login);
router.get("/profile", getProfile);

module.exports = router;
