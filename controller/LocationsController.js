const LocationsService = require("../services/LocationsService");

class LocationsController {
  static async getAllLocations(req, res) {
    try {
      const locations = await LocationsService.getAllLocations();
      return res.json(locations);
    } catch (error) {
      return res.status(500).json({ error: "Failed to get locations" });
    }
  }

  static async getAllRegions(req, res) {
    try {
      const regions = await LocationsService.getAllRegions();
      res.json(regions);
    } catch (error) {
      res.status(500).json({ error: "Failed to get regions" });
    }
  }

  static async getAllStates(req, res) {
    try {
      const states = await LocationsService.getAllStates();
      res.json(states);
    } catch (error) {
      res.status(500).json({ error: "Failed to get states" });
    }
  }

  static async getAllMunicipalities(req, res) {
    try {
      const municipalities = await LocationsService.getAllMunicipalities();
      res.json(municipalities);
    } catch (error) {
      res.status(500).json({ error: "Failed to get municipalities" });
    }
  }

  static async getAllWards(req, res) {
    try {
      const wards = await LocationsService.getAllWards();
      res.json(wards);
    } catch (error) {
      res.status(500).json({ error: "Failed to get wards" });
    }
  }

  static async createRegion(req, res) {
    try {
      const region = await LocationsService.createRegion(req.body);
      res.status(201).json(region);
    } catch (error) {
      res.status(500).json({ error: "Failed to create region" });
    }
  }
  static async createState(req, res) {
    try {
      const state = await LocationsService.createState(req.body);
      res.status(201).json(state);
    } catch (error) {
      res.status(500).json({ error: "Failed to create state" });
    }
  }

  static async createMunicipality(req, res) {
    try {
      const municipality = await LocationsService.createMunicipality(req.body);
      res.status(201).json(municipality);
    } catch (error) {
      res.status(500).json({ error: "Failed to create municipality" });
    }
  }

  static async createWard(req, res) {
    try {
      const ward = await LocationsService.createWard(req.body);
      res.status(201).json(ward);
    } catch (error) {
      res.status(500).json({ error: "Failed to create ward" });
    }
  }
}

module.exports = LocationsController;
