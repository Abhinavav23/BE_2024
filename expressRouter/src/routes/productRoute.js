const express = require("express");

const router = express.Router();

router.get("/all", (req, res) => {
    console.log("inside product all");
    res.send("all products")
})

router.get("/shirt", (req, res) => {
    res.send("shirt list")
})

router.get("/jeans", (req, res) => {
    res.send("jeans list")
})

module.exports = router;

// http://localhost:4500/product