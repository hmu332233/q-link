import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <div className="text-center py-4">
      <h1 className="text-4xl font-bold text-base-content ">
        <span className="text-primary">Quiz</span> Link
      </h1>
    </div>
  );
}

export default Header;
