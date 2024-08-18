import mongoose, { Schema, Document } from "mongoose";

interface Bet {
  matchId: mongoose.Schema.Types.ObjectId;
  selectedOutcome: string;
  potentialPayout: number;
  resultStatus: "Pending" | "Won" | "Lost"; // New field to track result status
}

export interface IUser extends Document {
  username: string;
  email: string;
  address: string;
  bets: Bet[];
  totalBetsPlaced: number;
  wonBets: boolean;
}

const BetSchema: Schema = new Schema({
  matchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MatchOdds",
    required: true,
  },
  selectedOutcome: { type: String, required: true },
  potentialPayout: { type: Number, required: true },
  resultStatus: { type: String, default: "Pending" }, // Default status is "Pending"
  placedAt: { type: Date, default: Date.now },
});

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  bets: { type: [BetSchema], default: [] },
  totalBetsPlaced: { type: Number, default: 0 },
  wonBets: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model<IUser>("User", UserSchema);
