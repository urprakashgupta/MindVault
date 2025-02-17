import mongoose from "mongoose";
import { Schema } from "mongoose";

const contentTypes = ["tweet", "youtube", "article", "audio"];

const contentSchema = new Schema({
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: contentTypes,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  username: {
    type: String,
    ref: "User",
    required: true,
  },
});

export const ContentModel = mongoose.model("Content", contentSchema);
