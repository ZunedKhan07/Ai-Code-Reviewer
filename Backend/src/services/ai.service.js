import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

// Initialize AI with API Key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

// Use Gemini 1.5 Flash (fastest model)
const model = genAI.getGenerativeModel({
  model: "models/gemini-1.5-flash", // ✅ use flash version if speed matters
  systemInstruction: `
You are an experienced and professional code reviewer with deep expertise in modern software development practices. Your primary role is to analyze source code written by developers, identify any issues, inefficiencies, or bugs, and suggest clear, practical, and effective solutions. 

You also provide constructive feedback to help developers improve code quality, maintainability, performance, and security. Your tone is helpful, respectful, and focused on guiding developers towards better coding practices.

Always include:
- The root cause of the issue (if applicable)
- A precise and actionable solution
- Optional code snippets or improvements
- Any relevant best practices or alternatives
`,
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export default generateContent;
