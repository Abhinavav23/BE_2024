const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/all", (req, res) => {
    // read from DB
    Product.find()
    .then((data) => {
        console.log("data", data);
        res.json({status: "success", total: data.length, records: data})  
    })
    .catch((err) => {
        res.send({status: "failed", err: err.message});
    })
})

router.post("/", (req, res) => {
    console.log("body", req.body);
    Product.create(req.body)
    .then((data) => {
        console.log("created data", data);
    })
    .catch((err) => {
        console.log("Error:", err.message);
    })
    res.send("created");
})



module.exports = router