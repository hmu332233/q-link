(self.__BUILD_MANIFEST = (function (s, c) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    '/': [s, 'static/chunks/pages/index-ae1aebb1b4ceaf7b.js'],
    '/_error': ['static/chunks/pages/_error-a59e2db023c5e431.js'],
    '/intro': [s, c, 'static/chunks/pages/intro-6f8d7999be3a386f.js'],
    '/links/complete': [
      s,
      'static/chunks/pages/links/complete-d3b2665188bee216.js',
    ],
    '/links/new': [
      s,
      c,
      'static/chunks/669-53dacaf2d8c6dd1a.js',
      'static/chunks/pages/links/new-4311c6f633ab6107.js',
    ],
    '/links/[id]': [s, c, 'static/chunks/pages/links/[id]-b22a84da60069a35.js'],
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
