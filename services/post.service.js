const { Post, Comment } = require("../models");
const ApiError = require("../utils/ApiError");

const createNewPost = async (post, image, userid) => {
  let newPost = await Post.create({
    post: post,
    image: image,
    userid: userid,
  });
  return newPost;
};

const getPostData = async (userid) => {
  const allPost = await Post.find();

  filterPost = allPost.filter((post) => post.userid === userid);
  // console.log(filterPost);
  return filterPost;
};

const deletePost = async (id) => {
  let post = await Post.findByIdAndDelete(id);
  // console.log(id + "from services");
  // console.log(post.id);

  if (!post) {
    throw new ApiError(400, "User does not have any post with this id");
  }

  return post;
};

const updatePost = async (id, data) => {
  let post = await Post.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!post) {
    throw new ApiError(400, " No post to update");
  }
  return post;
};

const postComment = async (postid, comment) => {
  return await Comment.create({ postid: postid, comment: comment });
};

const getComment = async (postid) => {
  const comment = await Comment.find({ postid: postid });
  console.log(comment);
  return comment;
};

module.exports = {
  createNewPost,
  getPostData,
  deletePost,
  updatePost,
  postComment,
  getComment,
};
