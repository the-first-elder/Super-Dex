import mongoose, { Document, Schema } from "mongoose";

// Define a sub-document for each match selection
const MatchSelectionSchema = new Schema({
  matchId: { type: String, required: true },
  selectedOutcome: {
    type: String,
    enum: ["home", "draw", "away"],
    required: true,
  },
  odds: { type: Number, required: true },
});

// Main Bet Schema
const BetSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  selections: { type: [MatchSelectionSchema], required: true },
  totalOdds: { type: Number, required: true },
  potentialPayout: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "won", "lost"],
    default: "pending",
  },
  placedAt: { type: Date, default: Date.now },
});

export interface IMatchSelection {
  matchId: string;
  selectedOutcome: "home" | "draw" | "away";
  odds: number;
}

export interface IBet extends Document {
  userId: string;
  selections: IMatchSelection[];
  totalOdds: number;
  potentialPayout: number;
  status: "pending" | "won" | "lost";
  placedAt: Date;
}

export const Bet = mongoose.model<IBet>("Bet", BetSchema);
