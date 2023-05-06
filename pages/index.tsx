import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Link from 'next/link';

import Layout from 'components/Layout';
import LoadableButton from 'components/LoadableButton';
import LanguageSelector from 'components/LanguageSelector';

function Index() {
  const { t } = useTranslation('main');
  return (
    <Layout hideHeader>
      <div className="flex flex-col items-center gap-y-8">
        <div className="hero min-h-screen">
          <div className="hero-content w-full text-center mb-24">
            <div className="w-full">
              <h1 className="text-4xl font-bold text-base-content ">
                <Link href="/">
                  <span className="text-primary">Q.</span>Link
                </Link>
              </h1>
              <p className="py-6 whitespace-pre-line">{t('description')}</p>
              <div className="flex w-full gap-3">
                <Link href="/links/new" className="btn btn-primary flex-1">
                  {t('button.create')}
                </Link>
                <Link href="/intro" className="btn flex-1">
                  {t('button.what')}
                </Link>
                <Link
                  href={t('demoUrl')}
                  passHref
                  className="inline-flex flex-1"
                >
                  <LoadableButton className="btn-outline w-full">
                    {t('button.demo')}
                  </LoadableButton>
                </Link>
              </div>
              <div className="flex justify-center w-full mt-4">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'ko',
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
};

export default Index;
