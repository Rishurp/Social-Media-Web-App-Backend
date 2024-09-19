const express = require("express");
const friendsController = require("../../controllers/friends.controller.js");

const router = express.Router();

router.post("/", friendsController.addFriends);
router.delete("/:id", friendsController.deleteFriends);
module.exports = router;
