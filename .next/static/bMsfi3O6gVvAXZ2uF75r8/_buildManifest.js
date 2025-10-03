(self.__BUILD_MANIFEST = (function (s, e) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    '/': [s, 'static/chunks/pages/index-f7bd63e4d0521b75.js'],
    '/_error': ['static/chunks/pages/_error-a59e2db023c5e431.js'],
    '/intro': [s, e, 'static/chunks/pages/intro-bdff95e44509a1b3.js'],
    '/links/complete': [
      s,
      'static/chunks/pages/links/complete-bb615569398ce30d.js',
    ],
    '/links/new': [
      s,
      e,
      'static/chunks/669-53dacaf2d8c6dd1a.js',
      'static/chunks/pages/links/new-2165712c7b514b0e.js',
    ],
    '/links/[id]': [s, e, 'static/chunks/pages/links/[id]-8b3facb1c9529efa.js'],
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
})(
  'static/chunks/456-3917a253e4d6d6aa.js',
  'static/chunks/46-11fb85663f09a974.js',
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
