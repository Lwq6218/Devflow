"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetUserByIdParams } from "./shared.types";

export async function getUserById(params: GetUserByIdParams) {
  // Fetch user by id
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log("Error fetching user by id", error);
  }
}
