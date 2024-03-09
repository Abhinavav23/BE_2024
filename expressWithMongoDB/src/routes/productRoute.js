const express = require("express");

const router = express.Router();

router.get("/all", (req, res) => {
    const product = getProductsFromDB()
    res.send("all product");
})

module.exports = router