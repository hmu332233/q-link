import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import axios from 'axios';

import Layout from 'components/Layout';
import QLinkContents from 'components/QLinkContents';

type Props = {
  id: string;
  url: string;
  contents: string;
  correct: string;
};

function LinkId({ id, url, contents, correct }: Props) {
  return (
    <Layout>
      <Head>
        <title>Q.Link - {id}</title>
      </Head>
      <QLinkContents url={url} contents={contents} correct={correct} />
      <div className="flex justify-center mt-8">
        <ins
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit="DAN-rXXQPJTmNrjhYiub"
          data-ad-width="320"
          data-ad-height="480"
        />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale = 'ko',
}) => {
  const { id } = query;

  const {
    data: { data },
  } = await axios.get(`${process.env.API_URL}/api/links`, { params: { id } });

  const { url, contents, correct } = data;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'links'])),
      id,
      url,
      contents,
      correct,
    },
  };
};

export default LinkId;
