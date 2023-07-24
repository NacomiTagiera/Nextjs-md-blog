import { Db, MongoClient, MongoClientOptions } from 'mongodb';
import { ValidationError } from 'yup';

import { NextResponse } from 'next/server';

import ContactFormValues from '@/interfaces/ContactFormValues';
import ContactFormSchema from '@/lib/formSchema';

async function connectToDatabase(): Promise<Db> {
  const { MONGODB_URI, MONGODB_DB } = process.env;
  if (!MONGODB_URI || !MONGODB_DB) {
    throw new Error('Please add your Mongo URI and DB name to .env.local');
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
  const collection = db.collection('messages');
  await collection.insertOne(data);
}

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await ContactFormSchema.validate(
      { name, email, message },
      { abortEarly: false }
    );

    const db = await connectToDatabase();
    await insertContactForm(db, { name, email, message });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ValidationError)
      return NextResponse.json(
        { message: 'Validation Error' },
        { status: 400 }
      );

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
