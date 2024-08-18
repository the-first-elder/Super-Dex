import { Request, Response } from "express";
import { User } from "../models/userModel";

export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, address } = req.body;
    if (!username || !email || !address) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const newUser = new User({
      username,
      email,
      address,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      success: false,
      error,
    });
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    if (!req.params.address) {
      return res
        .status(400)
        .json({ message: "Address is required", success: false });
    }
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
}
