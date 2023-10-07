import express from 'express'
import twitchEventsController from '../controllers/twitchEvents.js'
// import controllers for events and locations


const twitchEventsRouter = express.Router()

twitchEventsRouter.get("/", twitchEventsController.gettwitchEvents)
twitchEventsRouter.get("/:locationId", twitchEventsController.gettwitchEventByLocation)
twitchEventsRouter.get("/current/:id", twitchEventsController.gettwitchEventById)
// define routes to get events and locations


export default twitchEventsRouter