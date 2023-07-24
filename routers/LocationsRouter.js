const express = require("express");
const LocationsController = require("../controller/LocationsController");

const LocationsRouter = express.Router();

LocationsRouter.get("/", LocationsController.getAllLocations);

LocationsRouter.get("/region", LocationsController.getAllRegions);
LocationsRouter.get("/state", LocationsController.getAllStates);
LocationsRouter.get("/lga", LocationsController.getAllMunicipalities);
LocationsRouter.get("/ward", LocationsController.getAllWards);

// Create a new region
LocationsRouter.post("/region", LocationsController.createRegion);

// Create a new state
LocationsRouter.post("/state", LocationsController.createState);

// Create a new lga
LocationsRouter.post("/lga", LocationsController.createLGA);

// Create a new ward
LocationsRouter.post("/ward", LocationsController.createWard);

module.exports = LocationsRouter;
