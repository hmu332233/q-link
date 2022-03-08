import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import DefaultInput from 'components/DefaultInput';
import MarkdownView from 'components/MarkdownView';

type Props = {
  url: string;
  contents: string;
  correct: string;
};

function QLinkContents({ url, contents, correct }: Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { answer } = Object.fromEntries(formData);

    setIsCorrect(correct === answer);
    setShowFeedback(true);
  };

  useEffect(() => {
    if (!isCorrect) return;

    setTimeout(() => {
      location.href = url;
    }, 5000);
  }, [isCorrect, url]);

  const feedbackMessage = isCorrect
    ? '정답입니다! 5초 뒤에 링크로 이동합니다'
    : '오답입니다.';

  return (
    <div className="flex flex-col items-center gap-y-4">
      <MarkdownView contents={contents} />
      <form className="w-full max-w-lg" id="answer" onSubmit={handleSubmit}>
        <DefaultInput
          name="answer"
          placeholder="정답을 입력해주세요."
          feedback={showFeedback ? feedbackMessage : undefined}
        />
      </form>
      <button className="btn btn-wide" type="submit" form="answer">
        확인
      </button>
      <Link href="/links/new">
        <a className="link">링크 직접 만들어보기</a>
      </Link>
    </div>
  );
}

export default QLinkContents;
