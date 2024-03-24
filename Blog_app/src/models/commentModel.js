const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  content: {
    type: String,
    minLength: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  blog: {
    type: Schema.Types.ObjectId
  },
  likes: {
    type: Number,
    default: 0
  },
  isNested: Boolean,
  parentComment: {
    type: Schema.Types.ObjectId,
  },
  replies: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

const commentModel = model("comments", commentSchema);

module.exports = commentModel;