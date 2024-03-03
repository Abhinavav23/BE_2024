const express = require("express");
const app = express();
const productRouter = require("./routes/productRoute");
const {isLoggedIn, isValidUser} = require("./middleware");

app.use(isLoggedIn);
app.use(isValidUser);
app.use("/product", productRouter);

app.get("/", (req, res) => {
    res.send("product page")
})

module.exports = app

// http://localhost:4500