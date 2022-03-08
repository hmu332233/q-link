import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import axios from 'axios';

import QLinkContents from 'components/QLinkContents';

type Props = {
  id: string;
  url: string;
  contents: string;
  correct: string;
};

function LinkId({ id, url, contents, correct }: Props) {
  return (
    <>
      <Head>
        <title>Q.Link - {id}</title>
      </Head>
      <QLinkContents url={url} contents={contents} correct={correct} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const {
    data: { data },
  } = await axios.get(`${process.env.API_URL}/api/links`, { params: { id } });

  const { url, contents, correct } = data;
  return {
    props: {
      id,
      url,
      contents,
      correct,
    },
  };
};

export default LinkId;
