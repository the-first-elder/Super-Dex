import mongoose, { Schema, Document } from "mongoose";

interface Bet {
  matchId: mongoose.Schema.Types.ObjectId;
  selectedOutcome: string;
  potentialPayout: number;
}

export interface IUser extends Document {
  username: string;
  email: string;
  address: string;
  bets: Bet[];
  totalBetsPlaced: number;
}

const BetSchema: Schema = new Schema({
  matchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MatchOdds",
    required: true,
  },
  selectedOutcome: { type: String, required: true },
  potentialPayout: { type: Number, required: true },
});

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  bets: { type: [BetSchema], default: [] },
  totalBetsPlaced: { type: Number, default: 0 },
});

export const User = mongoose.model<IUser>("User", UserSchema);
