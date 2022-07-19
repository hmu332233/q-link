import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import cn from 'classnames';

const ITEMS = [
  {
    locale: 'en',
    text: 'English',
  },
  {
    locale: 'ko',
    text: '한국어',
  },
  {
    locale: 'ms',
    text: 'Bahasa Melayu',
  },
  {
    locale: 'tr',
    text: 'Türkçe',
  },
];

type Props = {
  className?: string;
};

function LanguageSelector({ className }: Props) {
  const router = useRouter();

  return (
    <div className={cn(className, 'dropdown dropdown-end')}>
      <label tabIndex={0} className="btn btn-ghost m-1">
        Language
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 w-56 rounded-box shadow"
      >
        {ITEMS.map((item) => (
          <li key={item.locale}>
            <Link href={router.asPath} locale={item.locale}>
              <a className={cn(router.locale === item.locale && 'active')}>
                {item.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSelector;
