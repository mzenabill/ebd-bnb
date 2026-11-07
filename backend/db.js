import mongoose from "mongoose";

export async function connectDB() {
  console.log("Connecting to MongoDB...");
  const uri = process.env.MONGODB_URI;
  await mongoose.connect(uri, { dbName: "ebd-bnb" });
  console.log("Connected to MongoDB");
}