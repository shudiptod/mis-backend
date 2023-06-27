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
}

module.exports = RoleService;
