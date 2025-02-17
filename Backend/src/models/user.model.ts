import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowecase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isPublic: {
    type: Boolean,
    dafault: false,
  },
});

export const UserModel = mongoose.model("User", userSchema);
