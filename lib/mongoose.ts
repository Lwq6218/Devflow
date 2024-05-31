import mongoose from "mongoose";

let isConnected = false;
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("MONGODB_URI is not defined");
  }
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });
    console.log("Connected to MongoDB");
    isConnected = true;
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
