import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import { getActiveEvents } from "../controllers/eventsController.js";


const eventRoutes = Router();
eventRoutes.get('/', isLoggedIn, getActiveEvents);

export default eventRoutes
