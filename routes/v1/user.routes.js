const express = require("express");
const userController = require("../../controllers/user.controller");

const router = express.Router();

router.get("/:id", userController.getUserById);
router.get("/search/user", userController.getUserByName);

module.exports = router;
