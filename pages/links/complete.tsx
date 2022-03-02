import { useRouter } from 'next/router';
import Link from 'next/link';

import Steps from 'components/Steps';
import { useState } from 'react';

function LinkComplete() {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const {
    query: { link = '' },
  } = router;

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(link as string);
    setCopied(true);
  };

  return (
    <div className="flex flex-col items-center gap-y-4">
      <Steps step={3} />
      <Link href={link as string} passHref>
        <a className="link link-accent">{link}</a>
      </Link>
      <div className="indicator">
        {copied && (
          <span className="indicator-item badge badge-secondary">복사됨</span>
        )}
        <button className="btn btn-wide" onClick={handleCopyClick}>
          복사하기
        </button>
      </div>
    </div>
  );
}

export default LinkComplete;
