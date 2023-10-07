import express from 'express'
import locationsController from '../controllers/locations.js'
// import controllers for events and locations


const locationsRouter = express.Router()
locationsRouter.get("/", locationsController.getLocations)
locationsRouter.get("/:locationId", locationsController.getLocation)

// define routes to get events and locations


export default locationsRouter