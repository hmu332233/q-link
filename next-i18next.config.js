const path = require('path');

// https://nextjs.org/docs/advanced-features/i18n-routing
// https://github.com/isaachinman/next-i18next#nextconfigjs
module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localePath: path.resolve('./public/locales'),
    localeExtension: 'js',
  },
};
