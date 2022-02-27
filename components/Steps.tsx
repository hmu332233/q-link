import React from 'react';

import cn from 'classnames';

const STEP_ITEMS = [
  {
    id: 'link',
    text: '링크 입력',
  },
  {
    id: 'quiz',
    text: '문제 생성',
  },
  {
    id: 'complete',
    text: '완료',
  },
] as const;

type Props = {
  step: number;
};

function Steps({ step }: Props) {
  return (
    <ul className="steps w-96">
      {STEP_ITEMS.map((item, index) => (
        <li
          key={item.id}
          className={cn('step', step >= index && 'step-primary')}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default Steps;
