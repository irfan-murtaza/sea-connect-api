import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import isAdmin from "../middlewares/isAdmin.js";
import { getMemberShipHistory } from "../controllers/membershipHistoryConntroller.js";


const memberShipRoutes = Router();
memberShipRoutes.get('/', isLoggedIn, isAdmin, getMemberShipHistory)

export default memberShipRoutes
