"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const contentTypes = ["tweet", "youtube", "article", "audio"];
const contentSchema = new mongoose_2.Schema({
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
        type: mongoose_1.default.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    username: {
        type: String,
        ref: "User",
        required: true,
    },
});
exports.ContentModel = mongoose_1.default.model("Content", contentSchema);
