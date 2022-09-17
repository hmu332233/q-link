import { useTranslation } from 'next-i18next';

import cn from 'classnames';

const STEP_ITEMS = [
  {
    id: 'quiz',
    textId: 'steps.two',
  },
  {
    id: 'link',
    textId: 'steps.one',
  },
  {
    id: 'complete',
    textId: 'steps.three',
  },
] as const;

type Props = {
  step: number;
};

function Steps({ step }: Props) {
  const { t } = useTranslation('links');

  return (
    <ul className="steps w-96">
      {STEP_ITEMS.map((item, index) => (
        <li
          key={item.id}
          className={cn('step', step > index && 'step-primary')}
        >
          {t(item.textId)}
        </li>
      ))}
    </ul>
  );
}

export default Steps;
