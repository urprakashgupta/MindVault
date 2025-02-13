"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
const db_1 = __importDefault(require("./db/db"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.default)()
    .then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    });
})
    .catch((err) => {
    console.log("Server running failed", err);
});
