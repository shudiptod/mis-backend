const RoleService = require("../services/RoleServices");

class RoleController {
  static async createRole(req, res) {
    const { name } = req.body;

    try {
      const role = await RoleService.createRole(name);
      res.status(201).json(role);
    } catch (error) {
      res.status(500).json({ error: "Failed to create role" });
    }
  }

  static async getAllRoles(req, res) {
    try {
      const roles = await RoleService.getAllRoles();
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve roles" });
    }
  }
}

module.exports = RoleController;
