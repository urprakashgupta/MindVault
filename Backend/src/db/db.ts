import mongoose from "mongoose";
import dotevn from "dotenv";

dotevn.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DB_URI}`);
    console.log(
      `MongoDB Connected Successfully ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
