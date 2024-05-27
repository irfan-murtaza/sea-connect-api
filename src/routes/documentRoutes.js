import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import { uploadDocument } from "../controllers/documentUploadController.js";
import { getDocument, getAllDocuments } from "../controllers/documentDownloadController.js";

const documentRoutes = Router();
documentRoutes.get('/', isLoggedIn, getAllDocuments);
documentRoutes.get('/:title', isLoggedIn, getDocument);
documentRoutes.post('/upload/:title', isLoggedIn, uploadDocument);

export default documentRoutes
