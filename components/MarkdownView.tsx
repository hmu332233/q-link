import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
type Props = {
  contents: string;
};

function MarkdownView({ contents }: Props) {
  return (
    <article className="prose w-full max-w-lg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
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
                style={atomDark}
                language={language || 'text'}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
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
