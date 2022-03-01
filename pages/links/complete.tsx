import { useState } from 'react';
import { useRouter } from 'next/router';

import Steps from 'components/Steps';

type Props = {};

function LinkComplete() {
  const router = useRouter();
  const {
    query: { link },
  } = router;
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Steps step={3} />
      <a className="link link-accent">{link}</a>
      <button className="btn btn-wide">복사하기</button>
    </div>
  );
}

export default LinkComplete;
