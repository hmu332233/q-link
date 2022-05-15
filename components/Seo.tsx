import Head from 'next/head';
import { useTranslation } from 'next-i18next';

type Props = {};

function Seo({}: Props) {
  const { t } = useTranslation();
  return (
    <Head>
      <title>Q.Link</title>
      <meta name="description" content={t('common:seo.description')} />
      <meta name="keywords" content={t('common:seo.keywords')} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Q.Link" />
      <meta property="og:description" content={t('common:seo.description')} />
      {/* <meta property="og:image" content=""/> */}
      <meta property="og:url" content="https://q-link.minung.dev" />
    </Head>
  );
}

export default Seo;
