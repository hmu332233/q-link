import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  onNextClick: ({
    link,
    correct,
    contents,
  }: {
    link?: string;
    correct?: string;
    contents?: string;
  }) => void;
};

function Step1Body({ onNextClick }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const { link } = Object.fromEntries(formData);
    onNextClick({
      link: link as string,
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
            name="link"
            type="text"
            placeholder="https://aaaa.com/bbbb"
            className="input input-bordered w-full"
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
  const [value, setValue] = useState('');

  const handleQuizChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
            className="textarea w-full h-24 textarea-bordered"
            name="contents"
            placeholder="## 퀴즈"
            value={value}
            onChange={handleQuizChange}
          />
          <label className="label">
            <span className="label-text-alt">
              퀴즈를 입력해주세요. (마크다운 지원)
            </span>
          </label>
        </div>
      </form>

      <article className="prose w-full max-w-lg">
        <ReactMarkdown children={value} />
      </article>

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
