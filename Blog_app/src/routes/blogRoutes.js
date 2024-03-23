const express = require("express");
const router = express.Router();

const { createBlog, getAllBlogs } = require("../controllers/blogController");

router.post("/new", createBlog);
router.get("/all", getAllBlogs);

module.exports = router;