import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Layout from 'components/Layout';
import QLinkContents from 'components/QLinkContents';

const url = 'https://q-link.minung.dev';

function LinkIntro() {
  const { t } = useTranslation('intro');
  return (
    <Layout>
      <Head>
        <title>Q.Link - intro</title>
      </Head>
      <QLinkContents
        url={url}
        contents={t('contents')}
        correct={t('correct')}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'ko',
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'intro', 'links'])),
    },
  };
};

export default LinkIntro;
