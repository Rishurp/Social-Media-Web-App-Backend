const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  userid: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports.Post = Post;
