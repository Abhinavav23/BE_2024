const express = require("express");
const router = express.Router();
const { isUserValid } = require("../middleware/authMiddleware");

const {
  createBlog,
  getAllBlogs,
  getOneBlog,
  addComment
} = require("../controllers/blogController");

router.post("/new", isUserValid, createBlog);
router.get("/all", getAllBlogs);
router.get("/one/:blogId", getOneBlog);
router.post("/comment/:blogId", isUserValid, addComment);

module.exports = router;
