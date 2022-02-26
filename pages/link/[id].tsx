import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';

type Props = {
  contents: string;
};

function Link({ contents }: Props) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <article className="prose">
        ㄴ <ReactMarkdown children={contents} />
      </article>
      {/* 제출 */}
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      ></input>
      <button className="btn btn-wide">Submit</button>
      <span>퀴즈 링크 직접 만들어보기</span>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: {
      contents: '# 이것은 퀴즈입니다.\n\n맞춰보세요!',
    },
  };
};

export default Link;
