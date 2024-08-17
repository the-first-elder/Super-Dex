import { NextFunction, Response, Request } from "express";
import { MatchOdds } from "../models/matchOdds";

export const getAllOdds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getOdds = await MatchOdds.find();
    res.status(201).json(getOdds);
  } catch (error) {
    res.status(500).json({ message: "Error fetching match odds", error });
  }
};

export const getOddsForMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { homeTeam, awayTeam } = req.params;

  try {
    const matchOdds = await MatchOdds.findOne({ homeTeam, awayTeam });
    if (!matchOdds)
      return res.status(404).json({ message: "Match odds not found" });

    res.status(201).json(matchOdds);
  } catch (error) {
    res.status(500).json({ message: "Error fetching match odds", error });
  }
};
