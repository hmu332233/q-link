// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { findOne } from '../../../libs/db';

type Data = {
  success: boolean;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ success: false });
  }

  const { id } = req.query;

  const document = await findOne(id as string);

  if (!document) {
    return res.status(404).json({ success: false });
  }

  res.status(200).json({ success: true, data: document });
}
