import { NextApiRequest, NextApiResponse } from "next";
import { Db, MongoClient, MongoClientOptions } from "mongodb";
import { ValidationError } from "yup";

import ContactFormSchema from "@/lib/formSchema";
import ContactFormValues from "@/interfaces/ContactFormValues";

async function connectToDatabase(): Promise<Db> {
  const { MONGODB_URI, MONGODB_DB } = process.env;
  if (!MONGODB_URI || !MONGODB_DB) {
    throw new Error("Please add your Mongo URI and DB name to .env.local");
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions & { useNewUrlParser: boolean });
  return client.db(MONGODB_DB);
}

async function insertContactForm(
  db: Db,
  data: ContactFormValues
): Promise<void> {
  const collection = db.collection("messages");
  await collection.insertOne(data);
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
    const { name, email, message } = req.body as ContactFormValues;

    await ContactFormSchema.validate(
      { name, email, message },
      { abortEarly: false }
    );

    const db = await connectToDatabase();
    await insertContactForm(db, { name, email, message });

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: "Validation error" });
      return;
    }

    res.status(500).json({ message: "Internal server error" });
  }
}
