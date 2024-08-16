import mongoose, { Schema, Document } from "mongoose";

interface Odds {
  homeWin: number;
  draw: number;
  awayWin: number;
}

export interface IMatchOdds extends Document {
  homeTeam: string;
  awayTeam: string;
  odds: Odds;
  result?: string;
}

const MatchOddsSchema: Schema = new Schema({
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  odds: {
    homeWin: { type: Number, required: true },
    draw: { type: Number, required: true },
    awayWin: { type: Number, required: true },
  },
  result: { type: String, default: null },
});

export const MatchOdds = mongoose.model<IMatchOdds>(
  "MatchOdds",
  MatchOddsSchema
);
