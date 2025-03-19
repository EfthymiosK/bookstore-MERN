import mongoose from "mongoose";
const MONGODB_URL =
  "mongodb+srv://mkokmotos:rryUs2LCkyaqZO5Z@bookstore-db.f5lk3.mongodb.net/?retryWrites=true&w=majority&appName=bookstore-db";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to mongoDB", error.message);
    process.exit(1);
  }
};
