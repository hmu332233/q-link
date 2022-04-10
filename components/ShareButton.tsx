import React from 'react';

type Props = {};

function ShareButton({}: Props) {
  const handleClick = async () => {
    const isAvailable = typeof navigator.share !== 'undefined';
    const url = location.href;

    if (isAvailable) {
      await navigator.share({
        title: 'Q.Link',
        url,
      });
    } else {
      // share api 지원하지 않을시 clipboard 복사로 대체
      await navigator.clipboard.writeText(url);
      alert('링크가 복사되었습니다!');
    }
  };

  return (
    <button className="btn btn-outline btn-wide" onClick={handleClick}>
      공유
    </button>
  );
}

export default ShareButton;
