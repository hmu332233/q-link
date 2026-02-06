import { useEffect, useRef } from 'react';

type Props = {
  adUnit: string;
  width: number;
  height: number;
};

function KakaoAdFit({ adUnit, width, height }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/kas/static/ba.min.js';
    script.async = true;
    containerRef.current?.appendChild(script);

    return () => {
      const container = containerRef.current;
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={adUnit}
        data-ad-width={String(width)}
        data-ad-height={String(height)}
      />
    </div>
  );
}

export default KakaoAdFit;
