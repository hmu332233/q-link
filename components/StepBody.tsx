import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  onNextClick: () => void;
};

function Step1Body({ onNextClick }: Props) {
  return (
    <>
      <div className="form-control w-full max-w-lg">
        <label className="label">
          <span className="label-text text-lg font-semibold">Link</span>
        </label>
        <input
          type="text"
          placeholder="https://aaaa.com/bbbb"
          className="input input-bordered w-full"
        />
        <label className="label">
          <span className="label-text-alt">이동할 링크를 입력해주세요.</span>
        </label>
      </div>

      <button className="btn btn-wide" onClick={onNextClick}>
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

  return (
    <>
      <div className="form-control w-full max-w-lg">
        <label className="label">
          <span className="label-text text-lg font-semibold">Contents</span>
        </label>
        <textarea
          className="textarea w-full h-24 textarea-bordered"
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
      <article className="prose w-full max-w-lg">
        <ReactMarkdown children={value} />
      </article>
      <div className="form-control w-full max-w-lg">
        <label className="label">
          <span className="label-text text-lg font-semibold">Correct</span>
        </label>
        <input
          type="text"
          placeholder=""
          className="input input-bordered w-full"
        />
        <label className="label">
          <span className="label-text-alt">정답을 입력해주세요.</span>
        </label>
      </div>

      <button className="btn btn-wide" onClick={onNextClick}>
        다음
      </button>
    </>
  );
}

export default {
  Step1: Step1Body,
  Step2: Step2Body,
};
