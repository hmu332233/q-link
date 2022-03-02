import Link from 'next/link';

function Index() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="flex w-full">
        <Link href="/links/new" passHref>
          <button className="btn btn-primary flex-1">링크 생성하기</button>
        </Link>
        <Link href="/links/621fa7d75d3d2554169aaab0" passHref>
          <button className="btn btn-outline flex-1 ml-4">예시</button>
        </Link>
      </div>

      <article className="prose">
        <h3>Quiz Link는 무엇인가요?</h3>
        <p>
          Quiz Link란 퀴즈의 정답을 맞췄을 때만 링크에 접속 할 수 있도록 해주는
          간단한 서비스입니다.
          <br />
          이벤트, 구인 페이지, 모바일 청접장등 여러 상황에서 사용해보세요!
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
          간단한 프로그래밍 문제를 푼 사람만 지원을 할 수 있도록 하기
          <br />
          생일을 알고 있는 사람만 모바일 초대장을 볼 수 있도록 하기
          <br />
          어뷰징성 접근을 막기
          <br />
          등등 간단하지만 다양한 상황에서 활용해볼 수 있습니다.
        </p>
      </article>
    </div>
  );
}

export default Index;
