module.exports = {
  feedback: {
    correct: 'Doğru cevap! 5 saniye sonra bağlantıya yönlendirileceksiniz.',
    fail: 'Yanlış cevap.',
  },
  steps: {
    one: 'Link Girin',
    two: 'Soru Oluşturun',
    three: 'Tamamlandı',
  },
  stepBody: {
    step1: {
      feedback1: `Doğru cevap verildiğinde yönlendirilmesini istediğini linki girin.<br />Eğer linkiniz yoksa <4 className="link" href="https://celebration.minung.dev" target="_blank" rel="noreferrer">celebration.minung.dev</4>'i deneyin. `,
    },
    step2: {
      feedback1: 'Doğru cevabı girin.',
      feedback2: 'Soruyu girin. (Markdown desteği mevcut)',
      example: `### Soru Örneği\n\nMarkdown dili kullanılabilir.\n\n\`\`\`\n1 + 2 + 3 + 4 = ?\n\`\`\``,
    },
  },
};
