import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Label({ children }: Props) {
  return (
    <label className="label">
      <span className="label-text text-lg font-semibold">{children}</span>
    </label>
  );
}

export default Label;
