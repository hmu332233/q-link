import React, { useState } from 'react';

import DefaultInput from 'components/DefaultInput';
import MarkdownView from 'components/MarkdownView';
import FormGroup from 'components/FormGroup';

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
        <DefaultInput
          label="Link"
          feedback="이동할 링크를 입력해주세요."
          name="url"
          type="url"
          placeholder="https://aaaa.com/bbbb"
          required
        />
      </form>
      <button className="btn btn-wide" type="submit" form="step1">
        다음
      </button>
    </>
  );
}

function Step2Body({ onNextClick }: Props) {
  const [value, setValue] = useState(QUIZ_EXAMPLE);

  const handleQuizChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const {
      currentTarget: { value },
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
        <DefaultInput
          label="Correct"
          feedback="정답을 입력해주세요."
          name="correct"
          placeholder=""
          required
        />
        <FormGroup
          label="Quiz Contents"
          feedback="퀴즈를 입력해주세요. (마크다운 지원)"
        >
          <textarea
            className="textarea w-full h-48 textarea-bordered"
            name="contents"
            placeholder=""
            value={value}
            onChange={handleQuizChange}
            required
          />
        </FormGroup>
      </form>
      <MarkdownView contents={value} />
      <button className="btn btn-wide" type="submit" form="step2">
        다음
      </button>
    </>
  );
}

const StepBody: { [key: string]: (props: Props) => JSX.Element } = {
  Step1: Step1Body,
  Step2: Step2Body,
};

export default StepBody;
