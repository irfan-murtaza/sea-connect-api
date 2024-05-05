import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import isAdmin from "../middlewares/isAdmin.js";
import { getAllContributions } from "../controllers/contributionsController.js";


const contributionRoutes = Router();
contributionRoutes.get('/', isLoggedIn, isAdmin, getAllContributions)

export default contributionRoutes
