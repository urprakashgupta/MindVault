import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signupSchema, signinSchema } from "../utils/zodValidation";
import { z } from "zod";

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = signupSchema.parse(req.body);
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(403).json({ message: "Account already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({ username, email, password: hashedPassword });

    return res.status(201).json({ message: "User signed up successfully!" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    }
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = signinSchema.parse(req.body);
    const existingUser = await UserModel.findOne({ email });

    if (
      !existingUser ||
      !(await bcrypt.compare(password, existingUser.password))
    ) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: existingUser._id, username: existingUser.username },
      process.env.JWT_SECRET!
    );

    return res.status(200).json({
      message: "User signed in",
      token,
      username: existingUser.username,
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
