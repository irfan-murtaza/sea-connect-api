import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import isAdmin from "../middlewares/isAdmin.js";
import { updateEmail, updateMember, updatePhone, addMember, deleteMember } from "../controllers/memberManagementController.js";

const memberRoutes = Router();
memberRoutes.post('/add', isLoggedIn, isAdmin, addMember)
memberRoutes.put('/update', isLoggedIn, isAdmin, updateMember)
memberRoutes.put('/update_email', isLoggedIn, isAdmin, updateEmail)
memberRoutes.put('/update_phone', isLoggedIn, isAdmin, updatePhone)
memberRoutes.delete('/delete', isLoggedIn, isAdmin, deleteMember)

export default memberRoutes
