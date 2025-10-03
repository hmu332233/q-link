'use strict';
(() => {
  var e = {};
  (e.id = 820),
    (e.ids = [820, 888, 660]),
    (e.modules = {
      6968: (e, t, r) => {
        r.r(t),
          r.d(t, {
            config: () => _,
            default: () => p,
            getServerSideProps: () => d,
            getStaticPaths: () => c,
            getStaticProps: () => n,
            reportWebVitals: () => g,
            routeModule: () => v,
            unstable_getServerProps: () => b,
            unstable_getServerSideProps: () => m,
            unstable_getStaticParams: () => x,
            unstable_getStaticPaths: () => P,
            unstable_getStaticProps: () => S,
          });
        var a = r(7093),
          s = r(5244),
          i = r(1323),
          o = r(1207),
          l = r(3848),
          u = r(6908);
        let p = (0, i.l)(u, 'default'),
          n = (0, i.l)(u, 'getStaticProps'),
          c = (0, i.l)(u, 'getStaticPaths'),
          d = (0, i.l)(u, 'getServerSideProps'),
          _ = (0, i.l)(u, 'config'),
          g = (0, i.l)(u, 'reportWebVitals'),
          S = (0, i.l)(u, 'unstable_getStaticProps'),
          P = (0, i.l)(u, 'unstable_getStaticPaths'),
          x = (0, i.l)(u, 'unstable_getStaticParams'),
          b = (0, i.l)(u, 'unstable_getServerProps'),
          m = (0, i.l)(u, 'unstable_getServerSideProps'),
          v = new a.PagesRouteModule({
            definition: {
              kind: s.x.PAGES,
              page: '/_error',
              pathname: '/_error',
              bundlePath: '',
              filename: '',
            },
            components: { App: l.default, Document: o.default },
            userland: u,
          });
      },
      1377: (e) => {
        e.exports = require('next-i18next');
      },
      2785: (e) => {
        e.exports = require('next/dist/compiled/next-server/pages.runtime.prod.js');
      },
      6689: (e) => {
        e.exports = require('react');
      },
      6405: (e) => {
        e.exports = require('react-dom');
      },
      997: (e) => {
        e.exports = require('react/jsx-runtime');
      },
      7147: (e) => {
        e.exports = require('fs');
      },
      1017: (e) => {
        e.exports = require('path');
      },
      2781: (e) => {
        e.exports = require('stream');
      },
      9796: (e) => {
        e.exports = require('zlib');
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    r = t.X(0, [761, 163, 859, 450, 908, 207, 848], () =>
      __webpack_exec__(6968),
    );
  module.exports = r;
})();
