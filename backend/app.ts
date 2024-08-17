import express, { Express } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import oddsRoute from "./src/routes/oddsRoute";

import logger from "morgan";
import mongoose from "mongoose";

import dotenv from "dotenv";
import helmet from "helmet";
dotenv.config();

const app: Express = express();

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoURI = `${process.env.MONGO_URI} ` as string;

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

const port = process.env.PORT || 5005;
app.use("/v1", oddsRoute);

app.listen(port, () => {
  console.log(`[Server]: server is running on http://localhost:${port}`);
});
