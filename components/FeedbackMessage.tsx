import { useTranslation } from 'next-i18next';

type Props = {
  isCorrect: boolean;
};

function FeedbackMessage({ isCorrect }: Props) {
  const { t } = useTranslation('links');

  return (
    <span className="countdown whitespace-pre">
      {isCorrect ? t('feedback.correct') : t('feedback.fail')}
    </span>
  );
}

export default FeedbackMessage;
