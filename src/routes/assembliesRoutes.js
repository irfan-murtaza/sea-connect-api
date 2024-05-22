import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import isAdmin from "../middlewares/isAdmin.js";
import { createAssembly, getAllAssemblies } from "../controllers/assembliesController.js";

const assembliesRoutes = Router();
assembliesRoutes.post('/create', isLoggedIn, isAdmin, createAssembly)
assembliesRoutes.get('/get', isLoggedIn, getAllAssemblies)


export default assembliesRoutes

