const express = require("express");
const RoleController = require("../controller/RoleController");

const roleRouter = express.Router();

// get all roles

roleRouter.get("/get-all", RoleController.getAllRoles);

//create a new role

roleRouter.post("/create", RoleController.createRole);
roleRouter.get("/:id", RoleController.getRoleById);
module.exports = roleRouter;
