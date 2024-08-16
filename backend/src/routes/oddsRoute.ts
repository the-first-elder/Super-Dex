// src/routes/oddsRoute.ts
import express from "express";
import { generateOddsBatch } from "../controllers/oddsController";

const router = express.Router();

router.post("/generate-odds", generateOddsBatch);

export default router;
