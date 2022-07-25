(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    '/': ['static/chunks/pages/index-b4d8588691e78983.js'],
    '/_error': ['static/chunks/pages/_error-2280fa386d040b66.js'],
    '/intro': [s, 'static/chunks/pages/intro-aab2dffa6236c08a.js'],
    '/links/complete': [
      'static/chunks/pages/links/complete-ce800ca5880722c3.js',
    ],
    '/links/new': [
      s,
      'static/chunks/669-02d8c27f7cae9417.js',
      'static/chunks/pages/links/new-03296ef80a28854d.js',
    ],
    '/links/[id]': [s, 'static/chunks/pages/links/[id]-0126b2e3148761fd.js'],
    sortedPages: [
      '/',
      '/_app',
      '/_error',
      '/intro',
      '/links/complete',
      '/links/new',
      '/links/[id]',
    ],
  };
})('static/chunks/576-790bbed985185b7c.js')),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
