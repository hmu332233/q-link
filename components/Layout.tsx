import React from 'react';

import Seo from 'components/Seo';
import Header from 'components/Header';

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
