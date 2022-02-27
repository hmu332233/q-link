import { useState } from 'react';

import Steps from 'components/Steps';
import StepBody from 'components/StepBody';

type Props = {
  contents: string;
};

function LinkNew() {
  const [step, setStep] = useState(1);
  const [quizLink, setQuizLink] = useState({});

  const handleNextClick = (data: any) => {
    setStep((v) => v + 1);
    setQuizLink((v) => ({ ...v, ...data }));
  };

  const StepBodyComponent = StepBody[`Step${step}`];

  return (
    <div className="flex flex-col items-center gap-y-4">
      <Steps step={step} />
      <StepBodyComponent onNextClick={handleNextClick} />
    </div>
  );
}

export default LinkNew;
