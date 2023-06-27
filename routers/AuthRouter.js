const express = require("express");
const AuthController = require("../controller/AuthController");

const AuthRouter = express.Router();

// Login route
AuthRouter.post("/login", AuthController.login);

module.exports = AuthRouter;
