import React, { CSSProperties, useEffect, useState } from 'react';

type Props = {
  isCorrect: boolean;
};

function FeedbackMessage({ isCorrect }: Props) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (!isCorrect) return;

    setCount((v) => v - 1);
    const intervalId = setInterval(() => {
      setCount((v) => v - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isCorrect]);

  return (
    <span className="countdown whitespace-pre">
      {isCorrect ? (
        <>
          정답입니다! <span style={{ '--value': count } as CSSProperties} />초
          뒤에 링크로 이동합니다
        </>
      ) : (
        '오답입니다.'
      )}
    </span>
  );
}

export default FeedbackMessage;
