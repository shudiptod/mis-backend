const LGA = require("../models/LgaModel");
const Region = require("../models/RegionModel");
const State = require("../models/StateModel");
const Ward = require("../models/WardModel");

class LocationsService {
  static async getAllLocations() {
    try {
      const regions = await Region.find().populate({
        path: "states",
        populate: {
          path: "municipalities",
          populate: {
            path: "wards",
          },
        },
      });

      return regions;
    } catch (error) {
      throw new Error("Failed to get locations");
    }
  }
  static async getAllRegions() {
    try {
      return await Region.find();
    } catch (error) {
      throw new Error("Failed to get regions");
    }
  }

  static async getAllStates() {
    try {
      return await State.find();
    } catch (error) {
      throw new Error("Failed to get states");
    }
  }

  static async getAllMunicipalities() {
    try {
      return await LGA.find();
    } catch (error) {
      throw new Error("Failed to get municipalities");
    }
  }

  static async getAllWards() {
    try {
      return await Ward.find();
    } catch (error) {
      throw new Error("Failed to get wards");
    }
  }
  static async createRegion(regionData) {
    try {
      const regions = await Region.create(regionData);
      console.log(
        "🚀 ~ file: LocationsService.js:58 ~ LocationsService ~ createRegion ~ regions:",
        regions
      );
      return regions;
    } catch (error) {
      console.log(
        "🚀 ~ file: LocationsService.js:59 ~ LocationsService ~ createRegion ~ error:",
        error
      );
      throw new Error("Failed to create region");
    }
  }

  static async createState(stateData) {
    try {
      const state = await State.create(stateData);
      await Region.findByIdAndUpdate(stateData.region, {
        $push: { states: state._id },
      });
      return state;
    } catch (error) {
      throw new Error("Failed to create state");
    }
  }

  static async createLGA(lgaData) {
    try {
      const lga = await LGA.create(lgaData);
      await State.findByIdAndUpdate(lgaData.state, {
        $push: { municipalities: lga._id },
      });
      return lga;
    } catch (error) {
      throw new Error("Failed to create lga");
    }
  }

  static async createWard(wardData) {
    try {
      const ward = await Ward.create(wardData);
      await LGA.findByIdAndUpdate(wardData.lga, {
        $push: { wards: ward._id },
      });
      return ward;
    } catch (error) {
      throw new Error("Failed to create ward");
    }
  }
}

module.exports = LocationsService;
