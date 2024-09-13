const { postService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getPost = async (req, res) => {
  const userid = req.params.userid;
  // console.log(req);
  const response = await postService.getPostData(userid);
  // console.log(response);
  res.status(200).send(response);
};



const createPost = catchAsync(async (req, res) => {
  const { post, userid } = req.body;

  const image = req.file ? req.file.path.replace(/\\/g, "/") : null;
  objData = {
    post: post,
    image: image,
    userid: userid,
  };
  // console.log(objData);
  const response = await postService.createNewPost(post, image, userid);
  // console.log(response);
  res.status(200).send(response);
});

const deletePost = catchAsync(async (req, res) => {
  // console.log(req.params.id + "params");
  const response = await postService.deletePost(req.params.id);
  // console.log(response);
  res.status(200).send({ response, message: "Post deleted successfully" });
});

const updatePost = catchAsync(async (req, res) => {
  // console.log(req.params.id);
  const response = await postService.updatePost(req.params.id, req.body);
  res.status(200).send({ response, message: "Post updated successfully" });
});

const postComment = catchAsync(async (req, res) => {
  const response = await postService.postComment(
    req.body.postid,
    req.body.comment
  );
  return res.status(200).send(response);
});

const getComment = catchAsync(async (req, res) => {
  console.log(req.params.postid);
  const response = await postService.getComment(req.params.postid);
  return res.status(200).send(response);
});

module.exports = {
  getPost,
  createPost,
  deletePost,
  updatePost,
  postComment,
  getComment,
};
