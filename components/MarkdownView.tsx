import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
type Props = {
  contents: string;
};

function MarkdownView({ contents }: Props) {
  return (
    <article className="prose w-full max-w-lg">
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            if (inline) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }

            const [, language] = /language-(\w+)/.exec(className || '') || [];
            return (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={atomDark}
                language={language || 'text'}
                PreTag="div"
                {...props}
              />
            );
          },
        }}
      >
        {contents}
      </ReactMarkdown>
    </article>
  );
}

export default MarkdownView;
