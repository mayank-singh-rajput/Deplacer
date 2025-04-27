import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.CONNECTION_URL!;
const client = new MongoClient(uri);
const dbName = "deplacer"; 
const collectionName = "contacts";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, type, message } = body;

    const newContact = { name, email, phone, type, message };

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne(newContact);

    return NextResponse.json({ message: "Contact saved" }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ message: "Failed to save contact" }, { status: 500 });
  } finally {
    await client.close();
  }
}
