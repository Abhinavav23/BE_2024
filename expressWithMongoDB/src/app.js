const express = require("express");
const productRouter = require("./routes/productRoute");
const dotEnv = require("dotenv");
dotEnv.config();
const app = express();

app.use(express.json());

require("./connectToDb");

app.use("/product", productRouter);

module.exports = app;