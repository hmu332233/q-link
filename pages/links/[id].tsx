import { GetServerSideProps } from 'next';

import axios from 'axios';

import MarkdownView from 'components/MarkdownView';

type Props = {
  contents: string;
};

function Link({ contents }: Props) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <MarkdownView contents={contents} />
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

  const {
    data: { data },
  } = await axios.get('http://localhost:3000/api/links', { params: { id } });

  const { contents } = data;
  return {
    props: {
      contents,
    },
  };
};

export default Link;
