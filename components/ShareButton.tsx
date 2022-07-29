import { useTranslation } from 'next-i18next';

import cn from 'classnames';

type Props = {
  url?: string;
  outline?: boolean;
};

function ShareButton({ outline, url = location.href }: Props) {
  const { t } = useTranslation();

  const handleClick = async () => {
    const isAvailable = typeof navigator.share !== 'undefined';

    if (isAvailable) {
      await navigator.share({
        title: 'Q.Link',
        url,
      });
    } else {
      // share api 지원하지 않을시 clipboard 복사로 대체
      await navigator.clipboard.writeText(url);
      alert(t('common:copied'));
    }
  };

  return (
    <button
      className={cn('btn btn-wide', outline && 'btn-outline')}
      onClick={handleClick}
    >
      {t('common:share')}
    </button>
  );
}

export default ShareButton;
