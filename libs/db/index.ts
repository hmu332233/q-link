import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.DB_URL_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': process.env.DB_API_KEY as string,
  },
});

export const findOne = async (id: string): Promise<QuizLink | null> => {
  const postData = JSON.stringify({
    collection: 'links',
    database: process.env.DB_NAME,
    dataSource: process.env.DB_DATA_SOURCE,
    filter: { _id: { $oid: id } },
    projection: {
      _id: 0,
    },
  });
  try {
    const {
      data: { document },
    } = await instance.post('/action/findOne', postData);
    return document;
  } catch (err) {
    return null;
  }
};

type QuizLinkBody = {
  url: string;
  contents: string;
  correct: string;
};
export const insertOne = async ({
  url,
  contents,
  correct,
}: QuizLinkBody): Promise<string | null> => {
  const postData = JSON.stringify({
    collection: 'links',
    database: process.env.DB_NAME,
    dataSource: process.env.DB_DATA_SOURCE,
    document: {
      url,
      contents,
      correct,
      createdAt: Date.now(),
    },
  });
  try {
    const {
      data: { insertedId },
    } = await instance.post('/action/insertOne', postData);
    return insertedId;
  } catch (err) {
    console.log(err);
    return null;
  }
};
