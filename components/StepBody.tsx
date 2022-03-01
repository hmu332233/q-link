import React, { useState } from 'react';

import MarkdownView from 'components/MarkdownView';

const QUIZ_EXAMPLE = `### 퀴즈 예시

마크다운 문법을 자유롭게 사용 가능합니다.

\`\`\`js
console.log('Hi!');
\`\`\`
`;

type Props = {
  onNextClick: ({
    url,
    correct,
    contents,
  }: {
    url?: string;
    correct?: string;
    contents?: string;
  }) => void;
};

function Step1Body({ onNextClick }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { url } = Object.fromEntries(formData);
    onNextClick({
      url: url as string,
    });
  };

  return (
    <>
      <form className="w-full max-w-lg" id="step1" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Link</span>
          </label>
          <input
            name="url"
            type="text"
            placeholder="https://aaaa.com/bbbb"
            className="input input-bordered w-full"
            required
          />
          <label className="label">
            <span className="label-text-alt">이동할 링크를 입력해주세요.</span>
          </label>
        </div>
      </form>
      <button className="btn btn-wide" type="submit" form="step1">
        다음
      </button>
    </>
  );
}

function Step2Body({ onNextClick }: Props) {
  const [value, setValue] = useState(QUIZ_EXAMPLE);

  const handleQuizChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { correct, contents } = Object.fromEntries(formData);
    onNextClick({
      correct: correct as string,
      contents: contents as string,
    });
  };

  return (
    <>
      <form className="w-full max-w-lg" id="step2" onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text text-lg font-semibold">Correct</span>
          </label>
          <input
            name="correct"
            type="text"
            placeholder=""
            className="input input-bordered w-full"
            required
          />
          <label className="label">
            <span className="label-text-alt">정답을 입력해주세요.</span>
          </label>
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Quiz Contents
            </span>
          </label>
          <textarea
            className="textarea w-full h-48 textarea-bordered"
            name="contents"
            placeholder="## 퀴즈"
            value={value}
            onChange={handleQuizChange}
            required
          />
          <label className="label">
            <span className="label-text-alt">
              퀴즈를 입력해주세요. (마크다운 지원)
            </span>
          </label>
        </div>
      </form>
      <MarkdownView contents={value} />
      <button className="btn btn-wide" type="submit" form="step2">
        다음
      </button>
    </>
  );
}

export default {
  Step1: Step1Body,
  Step2: Step2Body,
};
