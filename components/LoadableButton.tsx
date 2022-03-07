import React, { ButtonHTMLAttributes, useState } from 'react';

import cn from 'classnames';

function LoadableButton({
  className,
  children,
  onClick,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={cn('btn', isLoading && 'loading', className)}
      onClick={handleClick}
      {...props}
    >
      {isLoading || children}
    </button>
  );
}

export default LoadableButton;
