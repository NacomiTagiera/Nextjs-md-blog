import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db, MongoClientOptions } from "mongodb";
import { ValidationError } from "yup";
import ContactFormSchema from "@/lib/formSchema";

const { MONGODB_URI = "", MONGODB_DB = "" } = process.env;

async function connectToDatabase(): Promise<Db> {
  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions & { useNewUrlParser: boolean });
  return client.db(MONGODB_DB);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const { name, email, message } = req.body;

    await ContactFormSchema.validate(
      { name, email, message },
      { abortEarly: false }
    );

    const db = await connectToDatabase();
    const collection = db.collection("messages");
    await collection.insertOne({ name, email, message });

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    if ((error as ValidationError).name === "ValidationError") {
      res.status(400).json({ message: "Validation error" });
      return;
    }

    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
