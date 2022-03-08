import Head from 'next/head';

import QLinkContents from 'components/QLinkContents';

const correct = '라';
const url = 'https://q-link.minung.dev';
const contents = `### Q.Link는 무엇인가요?

Q.Link란 퀴즈로 접근하는 링크라는 의미로 퀴즈의 정답을 맞췄을 때만 링크에 접속 할 수 있도록 해주는 간단한 서비스입니다. 이벤트, 구인 페이지, 모바일 청접장등 여러 상황에서 사용해보세요!  
이 프로젝트는 [codecaptcha.io](https://www.codecaptcha.io/)에서 영감을 받았습니다.

### Q.Link는 무엇인가요?

링크 생성하기를 통해 링크를 생성하고, 퀴즈와 정답을 입력하세요.
정답을 맞춘 사람만이 링크로 접근할 수 있게 됩니다.

### 어떤 상황에서 사용하나요?

- 간단한 문제를 푼 사람만 지원을 할 수 있도록 하기
- 생일을 알고 있는 사람만 모바일 초대장을 볼 수 있도록 하기
- 비밀번호를 입력한 사람만 특정 API를 호출되도록 하기

등등 간단하지만 다양한 상황에서 활용해볼 수 있습니다.

---

### 예시

다음은 실제 [Q.Link](https://q-link.minung.dev)의 예시입니다. 😀😀  
Q.Link는 예시와 같이 퀴즈를 내고 정답을 맞춘 사람이 지정해둔 링크로 이동할 수 있도록 도와줍니다.

\`\`\`
Q. [?]에 들어갈 것은?

가나다[?]마
\`\`\`
정답을 맞췄을 경우에는 \`https://q-link.minung.dev\`로 이동합니다.`;

function LinkIntro() {
  return (
    <>
      <Head>
        <title>Q.Link - intro</title>
      </Head>
      <QLinkContents url={url} contents={contents} correct={correct} />
    </>
  );
}

export default LinkIntro;
