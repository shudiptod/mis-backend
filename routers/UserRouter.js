const express = require("express");
const UserController = require("../controller/UserController");

const userRouter = express.Router();

// Create a user
userRouter.post("/create", UserController.createUser);

// get all user

userRouter.get("/get-all", UserController.getAllUser);
userRouter.get("/:username", UserController.getUserByUsername);
userRouter.put("/:username", UserController.updateUser);
// Delete a user by ID (Protected route, requires admin role)
userRouter.delete("/users/:id", UserController.deleteUser);

// Export the router
module.exports = userRouter;
