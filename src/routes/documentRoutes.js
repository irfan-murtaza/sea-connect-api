import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import { uploadDocument } from "../controllers/documentUploadController.js";
import { getDocument } from "../controllers/documentDownloadController.js";

const documentRoutes = Router();
documentRoutes.get('/:title', isLoggedIn, getDocument);
documentRoutes.post('/upload', isLoggedIn, uploadDocument);

export default documentRoutes
