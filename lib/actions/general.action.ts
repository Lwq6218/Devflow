"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import { SearchParams } from "./shared.types";
import User from "@/database/user.model";
import Answer from "@/database/answer.model";
import Tag from "@/database/tag.model";
const SearchableTypes = ["question", "answer", "user", "tag"];
export async function globalSearch(params: SearchParams) {
  try {
    await connectToDatabase();
    const { query, type } = params;
    const regexQuery = { $regex: query, $options: "i" };
    let results = [];
    const modelsAndTypes = [
      { model: Question, searchFileld: "title", type: "question" },
      { model: User, searchFileld: "name", type: "user" },
      { model: Answer, searchFileld: "content", type: "answer" },
      { model: Tag, searchFileld: "name", type: "tag" },
    ];
    const typeLower = type?.toLowerCase();
    if (!typeLower || !SearchableTypes.includes(typeLower)) {
      for (const { model, searchFileld, type } of modelsAndTypes) {
        const queryResults = await model
          .find({ [searchFileld]: regexQuery })
          .limit(2);
        results.push(
          ...queryResults.map((item) => ({
            title:
              type === "answer"
                ? `Answers containing ${query}`
                : item[searchFileld],
            type,
            id:
              type === "user"
                ? item.clerkId
                : type === "answer"
                ? item.question
                : item.id,
          }))
        );
      }
    } else {
      const modelInfo = modelsAndTypes.find((item) => item.type === type);
      if (!modelInfo) {
        throw new Error("invalid search type");
      }
      const queryResults = await modelInfo.model
        .find({ [modelInfo.searchFileld]: regexQuery })
        .limit(8);

      results = queryResults.map((item) => ({
        title:
          type === "answer"
            ? `Answers containing ${query}`
            : item[modelInfo.searchFileld],
        type,
        id:
          type === "user"
            ? item.clerkId
            : type === "answer"
            ? item.question
            : item.id,
      }));
    }
    return JSON.stringify(results);
  } catch (error) {
    console.log(`Error fetching global results. ${error}`);
    throw error;
  }
}
