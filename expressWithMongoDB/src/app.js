const express = require("express");
const productRouter = require("./routes/productRoute");
const dotEnv = require("dotenv");
dotEnv.config();

require("./connectToDb");

const app = express();
app.use("/product", productRouter);

module.exports = app;