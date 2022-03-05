import React from 'react';
import Link from 'next/link';

type Props = {};

function Header({}: Props) {
  return (
    <header className="text-center py-4">
      <h1 className="text-4xl font-bold text-base-content ">
        <Link href="/">
          <a>
            <span className="text-primary">Q.</span>Link
          </a>
        </Link>
      </h1>
    </header>
  );
}

export default Header;
