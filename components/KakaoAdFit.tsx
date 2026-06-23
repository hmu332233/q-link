import { useEffect, useRef } from 'react';

type Props = {
  adUnit: string;
  width: number;
  height: number;
};

function KakaoAdFit({ adUnit, width, height }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ins = document.createElement('ins');
    ins.className = 'kakao_ad_area';
    ins.style.display = 'none';
    ins.setAttribute('data-ad-unit', adUnit);
    ins.setAttribute('data-ad-width', String(width));
    ins.setAttribute('data-ad-height', String(height));

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://t1.kakaocdn.net/kas/static/ba.min.js';
    script.async = true;

    container.appendChild(ins);
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [adUnit, width, height]);

  return <div ref={containerRef} />;
}

export default KakaoAdFit;
