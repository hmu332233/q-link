import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import * as gtag from 'libs/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const isRoot = router.pathname === '/';
  return (
    <Layout hideHeader={isRoot}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
