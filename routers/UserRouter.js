const express = require("express");
const UserController = require("../controller/UserController");

const userRouter = express.Router();

// Create a user
userRouter.post("/create", UserController.createUser);

// get all user

userRouter.get("/get-all", UserController.getAllUser);
userRouter.get("/:username", UserController.getUserByUsername);
userRouter.put("/:username", UserController.updateUser);

// Export the router
module.exports = userRouter;
