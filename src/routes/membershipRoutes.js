import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import { getMemberShipHistory } from "../controllers/membershipHistoryConntroller.js";


const memberShipRoutes = Router();
memberShipRoutes.get('/', isLoggedIn, getMemberShipHistory)

export default memberShipRoutes
