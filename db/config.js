import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      dbName: "spark_task",
    });
    console.log(
      `MongoDB connected: ${conn.connection.host}:${conn.connection.port}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};
