import LoadableButton from 'components/LoadableButton';
import Link from 'next/link';

const introUrl: string = process.env.NEXT_PUBLIC_INTRO_URL as string;
const demoUrl: string = process.env.NEXT_PUBLIC_DEMO_URL as string;

function Index() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="hero min-h-screen">
        <div className="hero-content w-full text-center mb-24">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-base-content ">
              <Link href="/">
                <a>
                  <span className="text-primary">Q.</span>Link
                </a>
              </Link>
            </h1>
            <p className="py-6 work-keep-all">
              퀴즈로 접근하는 링크, Q.Link!
              <br />
              여러분의 링크를 간단한 퀴즈 뒤에 숨겨보세요
            </p>
            <div className="flex w-full">
              <Link href="/links/new">
                <a className="btn btn-primary flex-1">Q.Link 생성하기</a>
              </Link>
              <Link href={introUrl} passHref>
                <LoadableButton className="flex-1 ml-3">
                  Q.Link란?
                </LoadableButton>
              </Link>
              <Link href={demoUrl} passHref>
                <LoadableButton className="btn-outline flex-1 ml-3">
                  예시
                </LoadableButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
