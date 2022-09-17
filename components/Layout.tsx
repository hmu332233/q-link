import React from 'react';

import cn from 'classnames';

import Seo from 'components/Seo';
import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children: React.ReactNode;
  hideHeader?: boolean;
  fluid?: boolean;
};

function Layout({ children, hideHeader, fluid }: Props) {
  return (
    <>
      <Seo />
      <div className="flex flex-col min-h-screen">
        {hideHeader || <Header />}
        <main className={cn('grow', fluid ? 'container-fluid' : 'container')}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
