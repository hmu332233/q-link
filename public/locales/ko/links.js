module.exports = {
  feedback: {
    correct: '정답입니다! 5초 뒤에 링크로 이동합니다.',
    fail: '오답입니다.',
  },
  steps: {
    one: '링크 입력',
    two: '문제 생성',
    three: '완료',
  },
  stepBody: {
    step1: {
      feedback1:
        '정답을 맞혔을 때 이동할 링크를 입력해 주세요.<br />이동할 링크가 없다면 <4 className="link" href="https://celebration.minung.dev" target="_blank" rel="noreferrer">celebration.minung.dev</4>를 활용해보세요.',
    },
    step2: {
      feedback1: '정답을 입력해주세요.',
      feedback2: '퀴즈를 입력해주세요. (마크다운 지원)',
      example: `### 퀴즈 예시\n\n마크다운 문법을 자유롭게 사용 가능합니다.\n\n\`\`\`\n1 + 2 + 3 + 4 = ?\n\`\`\``,
    },
  },
};
