import type { NextPage } from 'next';

function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-y-4">
        {/* 내용 */}

        {/* 제출 */}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        ></input>
        <button className="btn btn-wide">Submit</button>
      </div>
    </div>
  );
}

export default Home;
