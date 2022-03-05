// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import clientPromise, { ObjectId } from '../../../libs/db/client';

type Data = {
  success: boolean;
  data?: any;
};

const handler = nc<NextApiRequest, NextApiResponse<Data>>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Error!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Not found');
  },
});

handler
  .get(async (req, res) => {
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
  })
  .post(async (req, res) => {
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
  });

export default handler;
