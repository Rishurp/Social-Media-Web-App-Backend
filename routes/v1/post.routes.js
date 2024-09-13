const express = require("express");
const postController = require("../../controllers/post.controller");
const router = express.Router();
const upload = require("../../utils/imageUpload");
const auth = require("../../middlewares/auth");

router.get("/:userid", auth, postController.getPost);
router.post("/", upload.single("image"), postController.createPost);
router.delete("/:id", postController.deletePost);
router.patch("/:id", postController.updatePost);
router.get("/comment/:postid", postController.getComment);
router.post("/comment", postController.postComment);

module.exports = router;
