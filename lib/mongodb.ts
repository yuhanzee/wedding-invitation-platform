import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000, // Timeout after 10s
    family: 4, // Force IPv4
  })
  .then((db) => {
    console.log("✅ Connected to MongoDB");
    return db;
  })
  .catch((err) => {
    console.error("❌ MongoDB Connect Error");
    console.error(err);
    throw err;
  });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

export default connectDB;