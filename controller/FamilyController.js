const FamilyServices = require("../services/FamilyServices");

class FamilyController {
  async createFamily(req, res) {
    try {
      const family = await FamilyServices.createFamily(req.body);
      res.status(201).json(family);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFamilyById(req, res) {
    try {
      const family = await FamilyServices.getFamilyById(req.params.id);
      if (!family) {
        return res.status(404).json({ error: "Family not found" });
      }
      res.json(family);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateFamily(req, res) {
    try {
      const family = await FamilyServices.updateFamily(req.params.id, req.body);
      if (!family) {
        return res.status(404).json({ error: "Family not found" });
      }
      res.json(family);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteFamily(req, res) {
    try {
      const result = await FamilyServices.deleteFamily(req.params.id);
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new FamilyController();
