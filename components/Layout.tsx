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
      <div className="flex flex-col min-h-screen">
        {hideHeader || <Header />}
        <main className="container grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
