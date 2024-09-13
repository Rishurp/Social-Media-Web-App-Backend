const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  postid: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports.Comment = Comment;
