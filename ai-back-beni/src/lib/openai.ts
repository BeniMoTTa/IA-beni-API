import { OpenAI } from "OpenAi";
import "dotenv/config";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});
