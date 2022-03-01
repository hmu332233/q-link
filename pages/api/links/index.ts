// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { findOne, insertOne } from '../../../libs/db';

type Data = {
  success: boolean;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    case 'GET': {
      const { id } = req.query;

      const document = await findOne(id as string);

      if (!document) {
        return res.status(404).json({ success: false });
      }

      return res.status(200).json({ success: true, data: document });
    }
    case 'POST': {
      const { url, contents, correct } = req.body;

      const document = await insertOne({ url, contents, correct });

      if (!document) {
        return res.status(404).json({ success: false });
      }

      return res.status(200).json({ success: true, data: document });
    }
    default: {
      return res.status(404).json({ success: false });
    }
  }
}
