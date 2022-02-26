function Index() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div>
        <button className="btn btn-secondary btn-wide">링크 생성하기</button>
        <button className="btn btn-outline btn-wide ml-4">예시</button>
      </div>

      <article className="prose">
        <h3>Quiz Link란?</h3>
        <p>
          Quiz Link란 간단한 링크 공유 서비스로,
          <br />
          사용자는 퀴즈를 풀고, 정답일 경우에만 본래 링크로 넘어갈 수 있습니다.
          <br />
          이벤트, 구인 페이지, 모바일 청접장(?)등등 여러 상황에서 사용해보세요!
          <br />이 프로젝트는{' '}
          <a href="https://www.codecaptcha.io/" target="_blank">
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
          내 생일을 알고 있는 사람만 모바일 초대장을 볼 수 있도록 하기
          <br />
          등등 간단하지만 다양한 상황에서 활용해볼 수 있습니다.
        </p>
      </article>
    </div>
  );
}

export default Index;
