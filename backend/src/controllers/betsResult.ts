import { Request, Response } from "express";
import { MatchOdds, IMatchOdds } from "../models/matchOdds";
import { User } from "../models/userModel";
import { ObjectId } from "mongoose";

export const betsResult = async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const user = await User.findOne({ address });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    res.status(200).json({
      message: "User fetched successfully",
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      success: false,
      error,
    });
  }
};
