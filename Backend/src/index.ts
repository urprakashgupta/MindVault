import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import connectDB from "./db/db";

const app = express();
app.use(express.json());

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Server running failed", err);
  });
