import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise, { ObjectId } from 'server/libs/db/client';

type Handler = (req: NextApiRequest, res: NextApiResponse<Data>) => void;

// Response Data Type
type Data = {
  success: boolean;
  data?: any;
};

export const handleGet: Handler = async (req, res) => {
  const { id } = req.query;

  const client = await clientPromise;
  const document = await client
    .db()
    .collection('links')
    .findOne({ _id: new ObjectId(id as string) }, { projection: { _id: 0 } });

  if (!document) {
    return res.status(404).json({ success: false });
  }
  return res.status(200).json({ success: true, data: document });
};

export const handlePost: Handler = async (req, res) => {
  const { url, contents, correct } = req.body;

  const client = await clientPromise;
  const { insertedId } = await client.db().collection('links').insertOne({
    url,
    contents,
    correct,
    createdAt: Date.now(),
  });

  if (!insertedId) {
    return res.status(404).json({ success: false });
  }
  return res.status(200).json({ success: true, data: insertedId });
};
