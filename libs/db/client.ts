// https://docs.atlas.mongodb.com/best-practices-connecting-from-vercel/

import { MongoClient, ObjectId as _ObjectId } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

const uri = process.env.DB_URL as string;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise: Promise<MongoClient>;
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (hot module replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const ObjectId = _ObjectId;
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
