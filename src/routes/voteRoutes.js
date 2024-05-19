import { Router } from "express";
import isLoggedIn from "../middlewares/isLoggein.js";
import isAdmin from "../middlewares/isAdmin.js";
import { createVote, getActiveVotes } from "../controllers/voteController.js";
import { createVoteRound, castVote } from "../controllers/voteRoundsController.js";

const voteRoutes = Router();
voteRoutes.post('/create-vote', isLoggedIn, isAdmin, createVote)
voteRoutes.post('/create-round', isLoggedIn, isAdmin, createVoteRound)
voteRoutes.get('/get-active-votes', isLoggedIn, getActiveVotes)
voteRoutes.post('/cast-vote', isLoggedIn, castVote)




export default voteRoutes
