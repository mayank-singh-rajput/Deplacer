import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const feedbackFilePath = path.join(process.cwd(), "data", "tmp", "feedback.json");

// GET method - Fetch feedbacks
export async function GET(req: NextRequest) {
  const fileData = fs.readFileSync(feedbackFilePath, "utf-8");
  const feedbacks = JSON.parse(fileData);
  return NextResponse.json(feedbacks);
}

// POST method - Save new feedback
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, rating, feedback, type } = body;

  const newFeedback = { name, email, rating, feedback, type };

  const fileData = fs.readFileSync(feedbackFilePath, "utf-8");
  const feedbacks = JSON.parse(fileData);

  feedbacks.push(newFeedback);
  fs.writeFileSync(feedbackFilePath, JSON.stringify(feedbacks, null, 2));

  return NextResponse.json({ message: "Feedback saved" }, { status: 201 });
}
