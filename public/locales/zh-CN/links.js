module.exports = {
  feedback: {
    correct: '回答正确！将在5秒后跳转到链接。',
    fail: '回答错误。',
  },
  steps: {
    one: '答案 / 链接',
    two: '内容',
    three: '完成',
  },
  stepBody: {
    step1: {
      feedback1: `输入答案正确时要跳转的链接。<br />如果没有要跳转的链接，可以尝试使用 <4 className="link" href="https://celebration.minung.dev" target="_blank" rel="noreferrer">celebration.minung.dev</4>`,
    },
    step2: {
      feedback1: '输入正确答案。',
      feedback2: '输入问答内容。（支持Markdown）',
      example: `### 问答示例

支持Markdown语法。

\`\`\`
1 + 2 + 3 + 4 = ?
\`\`\``,
    },
  },
};
