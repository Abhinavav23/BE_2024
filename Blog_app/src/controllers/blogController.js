const Blog = require("../models/blogModel");
const User = require("../models/userModel");

const createBlog = async (req, res) => {
  const { title, description, tags, imageUrl } = req.body;
  try {
    const user = await User.findById(req.userId);
    const blog = await Blog.create({
      title,
      description,
      tags,
      imageUrl,
      user: req.userId,
      username: user.username,
    });
    // user --> req.userId
    // blog --> blog._id
    await User.findByIdAndUpdate(req.userId, { $push: { blogs: blog._id } });
    res.status(200).json({ message: "blog created successfully" });
  } catch (err) {
    res.status(500).json({ message: "something went wrong", err: err.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().select({
      title: 1,
      username: 1,
      upVote: 1,
      downVote: 1,
    });
    res
      .status(200)
      .json({ message: "success", total: blogs.length, records: blogs });
  } catch (err) {
    res.status(500).json({ message: "something went wrong", err: err.message });
  }
};

const getOneBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    const blog = await Blog.findById(blogId).populate({path: "user", model: "users"});

    res.status(200).json({ message: "success", data: blog });
  } catch (err) {
    res.status(500).json({ message: "something went wrong", err: err.message });
  }
};

const addComment = (req, res) => {
    const {userId} = req;
    const {blogId} = req.params
    try{

    }catch(err){

    }
};

const updateBlog = () => {
    
}

module.exports = { createBlog, getAllBlogs, getOneBlog, addComment };
