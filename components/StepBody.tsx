import React, { useState } from 'react';

import cn from 'classnames';

import DefaultInput from 'components/DefaultInput';
import MarkdownView from 'components/MarkdownView';
import FormGroup from 'components/FormGroup';
import LoadableButton from './LoadableButton';

const QUIZ_EXAMPLE = `### 퀴즈 예시

마크다운 문법을 자유롭게 사용 가능합니다.

\`\`\`
1 + 2 + 3 + 4 = ?
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
          feedback={
            <span>
              정답을 맞혔을 때 이동할 링크를 입력해 주세요.
              <br />
              이동할 링크가 없다면{' '}
              <a
                className="link"
                href="https://celebration.minung.dev"
                target="_blank"
                rel="noreferrer"
              >
                celebration.minung.dev
              </a>
              를 활용해보세요.
            </span>
          }
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
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
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
      <LoadableButton className="btn-wide" type="submit" form="step2">
        다음
      </LoadableButton>
    </>
  );
}

const StepBody: { [key: string]: (props: Props) => JSX.Element } = {
  Step1: Step1Body,
  Step2: Step2Body,
};

export default StepBody;
