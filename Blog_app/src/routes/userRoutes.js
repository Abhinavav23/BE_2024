const express = require("express");
const router = express.Router();
const {isUserValid} = require("../middleware/authMiddleware");
const { signUp, login, getProfile } = require("../controllers/userController");


router.post("/signup", signUp);
router.post("/login", login);

// router.use(isUserValid);
router.get("/profile", isUserValid, getProfile);

module.exports = router;
