const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  distDir: 'build',
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en',
  },
};