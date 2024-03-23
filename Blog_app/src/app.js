const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

app.use(express.json());
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/blog", blogRouter);

module.exports = app;
