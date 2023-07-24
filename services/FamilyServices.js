const Family = require("../models/FamilyModel");

class FamilyService {
  async createFamily(data) {
    try {
      const family = new Family(data);
      const savedFamily = await family.save();
      return savedFamily;
    } catch (error) {
      throw new Error("Failed to create family");
    }
  }

  async getFamilyById(id) {
    try {
      const family = await Family.findById(id);
      return family;
    } catch (error) {
      throw new Error("Failed to get family by ID");
    }
  }

  async updateFamily(id, data) {
    try {
      const family = await Family.findByIdAndUpdate(id, data, { new: true });
      return family;
    } catch (error) {
      throw new Error("Failed to update family");
    }
  }

  async deleteFamily(id) {
    try {
      await Family.findByIdAndRemove(id);
      return "Family deleted successfully";
    } catch (error) {
      throw new Error("Failed to delete family");
    }
  }
}

module.exports = new FamilyService();
