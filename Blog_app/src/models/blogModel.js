const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 4,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
  tag: {
    type: [String],
    default: ["General"],
    required: true
  },
  imageUrl: {
    type: String,
    default: ""
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  username: String,
  upVote: {
    type: Number,
    default: 0
  },
  downVote: {
    type: Number,
    default: 0
  }

});

const blogModel = model("blogs", blogSchema);

module.exports = blogModel;
