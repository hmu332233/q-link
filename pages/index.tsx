import Link from 'next/link';

const demoUrl: string = process.env.NEXT_PUBLIC_DEMO_URL as string;

function Index() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="flex w-full">
        <Link href="/links/new">
          <a className="btn btn-primary flex-1">링크 생성하기</a>
        </Link>
        <Link href={demoUrl}>
          <a className="btn btn-outline flex-1 ml-4">예시</a>
        </Link>
      </div>

      <section className="prose">
        <h3>
          <span className="text-primary">Q.</span>Link는 무엇인가요?
        </h3>
        <p>
          <span className="font-bold">
            <span className="text-primary">Q.</span>Link
          </span>
          란 <span className="underline">퀴즈로 접근하는 링크</span>라는 의미로
          퀴즈의 정답을 맞췄을 때만 링크에 접속 할 수 있도록 해주는 간단한
          서비스입니다. 이벤트, 구인 페이지, 모바일 청접장등 여러 상황에서
          사용해보세요!
          <br />이 프로젝트는{' '}
          <a
            className="link"
            href="https://www.codecaptcha.io/"
            target="_blank"
            rel="noreferrer"
          >
            codecaptcha.io
          </a>
          에서 영감을 받았습니다.
        </p>
        <h3>어떻게 사용하나요?</h3>
        <p>
          링크 생성하기를 통해 링크를 생성하고, 퀴즈와 정답을 입력하세요.
          <br />
          정답을 맞춘 사람만이 링크로 접근할 수 있게 됩니다.
        </p>
        <h3>어떤 상황에서 사용하나요?</h3>
        <p>
          간단한 문제를 푼 사람만 지원을 할 수 있도록 하기
          <br />
          생일을 알고 있는 사람만 모바일 초대장을 볼 수 있도록 하기
          <br />
          비밀번호를 입력한 사람만 특정 API를 호출되도록 하기
          <br />
          등등 간단하지만 다양한 상황에서 활용해볼 수 있습니다.
        </p>
      </section>
    </div>
  );
}

export default Index;
