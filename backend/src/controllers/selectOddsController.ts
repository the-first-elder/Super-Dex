import { Request, Response } from "express";
import { MatchOdds, IMatchOdds } from "../models/matchOdds";
import { User } from "../models/userModel";
import { ObjectId } from "mongoose";

type Outcome = "homeWin" | "Draw" | "awayWin";

type MatchInput = {
  address: string;
  homeTeam: string;
  awayTeam: string;
  selectedOutcome: Outcome;
};

export async function placeBet(req: Request, res: Response) {
  try {
    const { address, homeTeam, awayTeam, selectedOutcome }: MatchInput =
      req.body;

    const user = await User.findOne({ address });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    const match = (await MatchOdds.findOne({
      homeTeam,
      awayTeam,
    })) as IMatchOdds;
    if (!match) {
      return res
        .status(404)
        .json({ message: "Match not found", success: false });
    }

    const matchId = match._id as ObjectId;

    // Check if the user has already placed the same bet on this match
    const existingBet = user.bets.find(
      (bet) =>
        bet.matchId.toString() === matchId.toString() &&
        bet.selectedOutcome === selectedOutcome
    );

    if (existingBet) {
      return res.status(400).json({
        message: "You have already placed this bet on the match",
        success: false,
      });
    }
    const odds = match.odds[selectedOutcome as keyof typeof match.odds];
    if (!odds) {
      return res
        .status(400)
        .json({ message: "Invalid outcome selected", success: false });
    }

    const potentialPayout = odds * 10; // Assuming a base bet of 10

    user.bets.push({
      matchId: match._id as ObjectId,
      selectedOutcome,
      potentialPayout,
    });
    user.totalBetsPlaced += potentialPayout; // Adding the potential payout
    await user.save();

    res.status(200).json({
      message: "Bet placed successfully",
      success: true,
      bet: {
        matchId: match._id,
        selectedOutcome,
        potentialPayout,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error placing bet",
      success: false,
      error,
    });
  }
}
