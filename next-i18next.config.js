const path = require('path');

// https://nextjs.org/docs/advanced-features/i18n-routing
// https://github.com/isaachinman/next-i18next#nextconfigjs
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['ko', 'en', 'ms'],
    localePath: path.resolve('./public/locales'),
    localeExtension: 'js',
  },
};
