// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { handleGet, handlePost } from 'server/controller/links';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Error!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Not found');
  },
});

handler.get(handleGet).post(handlePost);

export default handler;
