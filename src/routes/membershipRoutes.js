import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import { getMemberShipHistory } from "../controllers/membershipHistoryConntroller.js";


const memberShipRoutes = Router();
memberShipRoutes.get('/create-customer', isLoggedIn, getMemberShipHistory)

export default memberShipRoutes
