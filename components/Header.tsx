import React from 'react';
import Link from 'next/link';

import LanguageSelector from 'components/LanguageSelector';

type Props = {};

function Header({}: Props) {
  return (
    <header className="p-4 flex items-center relative">
      <h1 className="text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link href="/">
          <span className="text-primary">Q.</span>Link
        </Link>
      </h1>
      <LanguageSelector className="ml-auto" />
    </header>
  );
}

export default Header;
