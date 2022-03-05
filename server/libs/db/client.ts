// https://docs.atlas.mongodb.com/best-practices-connecting-from-vercel/
// NOTE
// 기존에 사용하던 DB API 방식은 77132084ab0524f7df42ca880e83f2df31e7b887에서 지워짐

import { MongoClient, ObjectId as _ObjectId } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

const uri = process.env.DB_URL as string;

const options = {
  // TODO: 아래 옵션이 필요 없는 건지 확인 필요 - https://docs.mongodb.com/drivers/node/current/whats-new/#mongoclientoptions-interface
  // useUnifiedTopology: true,
  // useNewUrlParser: true,
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
