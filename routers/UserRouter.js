const express = require("express");
const UserController = require("../controller/UserController");

const userRouter = express.Router();

// Create a user
userRouter.post("/create", UserController.createUser);

// Export the router
module.exports = userRouter;
