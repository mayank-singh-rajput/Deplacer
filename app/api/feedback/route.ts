import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.CONNECTION_URL!;
const client = new MongoClient(uri);
const dbName = "deplacer"; 
const collectionName = "feedbacks";

export async function GET(req: NextRequest) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const feedbacks = await collection.aggregate([{ $sample: { size: 3 } }]).toArray();

    return NextResponse.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return NextResponse.json({ message: "Failed to fetch feedbacks" }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, rating, feedback, type } = body;

    const newFeedback = { name, email, rating, feedback, type };

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne(newFeedback);

    return NextResponse.json({ message: "Feedback saved" }, { status: 201 });
  } catch (error) {
    console.error("Error saving feedback:", error);
    return NextResponse.json({ message: "Failed to save feedback" }, { status: 500 });
  } finally {
    await client.close();
  }
}
