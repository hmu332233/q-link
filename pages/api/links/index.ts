// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import clientPromise, { ObjectId } from '../../../libs/db/client';

type Data = {
  success: boolean;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const client = await clientPromise;

  switch (req.method) {
    case 'GET': {
      const { id } = req.query;

      const document = await client
        .db()
        .collection('links')
        .findOne(
          { _id: new ObjectId(id as string) },
          { projection: { _id: 0 } },
        );
      if (!document) {
        return res.status(404).json({ success: false });
      }

      return res.status(200).json({ success: true, data: document });
    }
    case 'POST': {
      const { url, contents, correct } = req.body;

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
    }
    default: {
      return res.status(404).json({ success: false });
    }
  }
}
