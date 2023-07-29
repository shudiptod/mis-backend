const Role = require("../models/RoleModel");

class RoleService {
  static async createRole(name) {
    try {
      const role = await Role.create({ name });
      return role;
    } catch (error) {
      throw new Error("Failed to create role");
    }
  }

  static async getAllRoles() {
    try {
      const roles = await Role.find();
      return roles;
    } catch (error) {
      throw new Error("Failed to retrieve roles");
    }
  }
  static async getRole(id) {
    try {
      const role = await Role.findById(id);
      console.log(
        "🚀 ~ file: RoleServices.js:24 ~ RoleService ~ getRole ~ role:",
        role
      );
      return role;
    } catch (error) {
      throw new Error("Failed to retrieve roles");
    }
  }
  static async updateRole(roleId, updatedRoleData) {
    try {
      // Find the role by ID and update it
      const updatedRole = await Role.findByIdAndUpdate(
        roleId,
        updatedRoleData,
        {
          new: true, // Return the updated role object
          runValidators: true, // Run the validators on the updated data
        }
      );

      return updatedRole; // Return the updated role object (or null if role not found)
    } catch (error) {
      console.error("Error updating role:", error);
      throw new Error("Failed to update role.");
    }
  }
  static async deleteRole(roleId) {
    try {
      // Find the role by ID and delete it
      const deletedRole = await Role.findByIdAndDelete(roleId);

      return deletedRole; // Return the deleted role object (or null if role not found)
    } catch (error) {
      console.error("Error deleting role:", error);
      throw new Error("Failed to delete role.");
    }
  }
}

module.exports = RoleService;
