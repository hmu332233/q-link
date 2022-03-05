import React from 'react';

import Seo from 'components/Seo';
import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <>
      <Seo />
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
