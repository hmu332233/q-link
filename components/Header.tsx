import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <header className="text-center py-4">
      <h1 className="text-4xl font-bold text-base-content ">
        <span className="text-primary">Q.</span>Link
      </h1>
    </header>
  );
}

export default Header;
