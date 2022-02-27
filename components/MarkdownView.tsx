import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  contents: string;
};

function MarkdownView({ contents }: Props) {
  return (
    <article className="prose w-full max-w-lg">
      <ReactMarkdown>{contents}</ReactMarkdown>
    </article>
  );
}

export default MarkdownView;
