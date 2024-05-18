import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import isAdmin from "../middlewares/isAdmin.js";
import { createVote } from "../controllers/voteController.js";
import { createVoteRound } from "../controllers/voteRoundsController.js";

const voteRoutes = Router();
voteRoutes.post('/create-vote', isLoggedIn, isAdmin, createVote)
voteRoutes.post('/create-round', isLoggedIn, isAdmin, createVoteRound)



export default voteRoutes
