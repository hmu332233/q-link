import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import axios from 'axios';

import MarkdownView from 'components/MarkdownView';
import DefaultInput from 'components/DefaultInput';
import { useEffect, useState } from 'react';

type Props = {
  id: string;
  url: string;
  contents: string;
  correct: string;
};

function LinkId({ id, url, contents, correct }: Props) {
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
    <>
      <Head>
        <title>Q.Link - {id}</title>
      </Head>
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const {
    data: { data },
  } = await axios.get(`${process.env.API_URL}/api/links`, { params: { id } });

  const { url, contents, correct } = data;
  return {
    props: {
      id,
      url,
      contents,
      correct,
    },
  };
};

export default LinkId;
