import { type Db, MongoClient } from 'mongodb';

import { type ContactFormValues } from '@/types';

async function connectToDatabase(): Promise<Db> {
  const { MONGODB_URI, MONGODB_DB } = process.env;
  if (!MONGODB_URI || !MONGODB_DB) {
    throw new Error('Please add your Mongo URI and DB name to .env.local');
  }

  const client = await MongoClient.connect(MONGODB_URI);
  return client.db(MONGODB_DB);
}

export async function insertContactForm(data: ContactFormValues): Promise<void> {
  const db = await connectToDatabase();
  const collection = db.collection('messages');
  await collection.insertOne(data);
}
