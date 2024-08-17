// src/routes/oddsRoute.ts
import express from "express";
import { generateOddsBatch } from "../controllers/oddsController";
import { getAllOdds } from "../controllers/getOddsController";
import { placeBet } from "../controllers/selectOddsController";
import { createUser, getUser } from "../controllers/createUserController";

const router = express.Router();
router.post("/generate-odds", generateOddsBatch);
router.get("/get-odds", getAllOdds);
router.post("/place-bet", placeBet);
router.post("/createuser", createUser);
router.get("/getuser/:address", getUser);
export default router;
