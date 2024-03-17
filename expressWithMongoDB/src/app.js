const express = require("express");
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoutes");
const dotEnv = require("dotenv");
dotEnv.config();
const app = express();

app.use(express.json());

require("./connectToDb");

app.use("/product", productRouter);
app.use("/user", userRouter);

module.exports = app;