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
  static async getRoleById(req, res) {
    try {
      const { id } = req.params;
      const role = await RoleService.getRole(id);
      return res.status(200).json(role);
    } catch (err) {
      return res.status(500).json({ error: "Failed to retrieve role" });
    }
  }
  static async updateRole(req, res) {
    const roleId = req.params.id; // Assuming the role ID is provided in the request params
    const updatedRoleData = req.body; // Assuming the updated role data is sent in the request body

    try {
      const updatedRole = await RoleService.updateRole(roleId, updatedRoleData);

      if (!updatedRole) {
        // If the role with the provided ID does not exist, return an error
        return res.status(404).json({ message: "Role not found." });
      }

      // If the role is successfully updated, return the updated role object
      return res.json(updatedRole);
    } catch (error) {
      console.error("Error updating role:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
  static async deleteRoleController(req, res) {
    const roleId = req.params.id; // Assuming the role ID is provided in the request params

    try {
      const deletedRole = await RoleService.deleteRole(roleId);

      if (!deletedRole) {
        // If the role with the provided ID does not exist, return an error
        return res.status(404).json({ message: "Role not found." });
      }

      // If the role is successfully deleted, return a success message
      return res.json({ message: "Role deleted successfully." });
    } catch (error) {
      console.error("Error deleting role:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}

module.exports = RoleController;
