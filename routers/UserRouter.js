const express = require("express");
const UserController = require("../controller/UserController");

const userRouter = express.Router();

// Create a user
userRouter.post("/create", UserController.createUser);

// get all user

userRouter.get("/get-all", UserController.getAllUser);

// Export the router
module.exports = userRouter;
