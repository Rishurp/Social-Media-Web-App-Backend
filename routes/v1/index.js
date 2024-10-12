const express = require("express");
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const postRoutes = require("./post.routes");
const friendsRoutes = require("./friends.routes");
const healthRoutes = require("./health.routes");
const mainRouter = express.Router();

mainRouter.use("/users", userRoutes);
mainRouter.use("/auth", authRoutes);
mainRouter.use("/posts", express.static("posts"), postRoutes);
mainRouter.use("/friends", friendsRoutes);
mainRouter.use("/health", healthRoutes);
module.exports = mainRouter;
