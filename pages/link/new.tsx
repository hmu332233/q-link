import { useState } from 'react';
import { useRouter } from 'next/router';

import Steps from 'components/Steps';
import StepBody from 'components/StepBody';

const LAST_STEP = 3;

type Props = {
  contents: string;
};

function LinkNew() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [quizLink, setQuizLink] = useState({});

  const handleNextClick = (data: any) => {
    const nextStep = step + 1;
    const newQuizLink = { ...quizLink, ...data };

    if (nextStep === LAST_STEP) {
      console.log('quizLink', newQuizLink);
      // TODO: api 쏘기

      router.push(
        {
          pathname: '/link/complete',
          query: {
            link: 'https://test.com/link/alkajslkdjflkajsd',
          },
        },
        '/link/complete',
      );

      return;
    }

    setStep(nextStep);
    setQuizLink(newQuizLink);
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
