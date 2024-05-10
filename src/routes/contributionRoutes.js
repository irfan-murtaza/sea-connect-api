import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import { getAllContributions } from "../controllers/contributionsController.js";


const contributionRoutes = Router();
contributionRoutes.get('/', isLoggedIn, getAllContributions)

export default contributionRoutes
