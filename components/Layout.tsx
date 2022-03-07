import React from 'react';

import Seo from 'components/Seo';
import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children: JSX.Element;
  hideHeader: boolean;
};

function Layout({ children, hideHeader }: Props) {
  return (
    <>
      <Seo />
      {hideHeader || <Header />}
      <main className="mb-auto">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
