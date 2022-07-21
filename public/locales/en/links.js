module.exports = {
  feedback: {
    correct: 'Correct! You will be redirected to link in 5 seconds.',
    fail: 'Incorrect answer.',
  },
  steps: {
    one: 'Enter Link',
    two: 'Create Quiz',
    three: 'Complete',
  },
  stepBody: {
    step1: {
      feedback1: `Enter a link to move when the answer is correct.<br />If you don't have a link to move, try using <4 className="link" href="https://celebration.minung.dev" target="_blank" rel="noreferrer">celebration.minung.dev</4>`,
    },
    step2: {
      feedback1: 'Enter the correct answer.',
      feedback2: 'Enter the quiz. (Markdown support)',
      example: `### Quiz Example\n\nMarkdown grammar is available.\n\n\`\`\`\n1 + 2 + 3 + 4 = ?\n\`\`\``,
    },
  },
};
