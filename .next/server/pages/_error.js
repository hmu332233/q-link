'use strict';
(() => {
  var e = {};
  (e.id = 820),
    (e.ids = [820, 888, 660]),
    (e.modules = {
      6968: (e, t, r) => {
        r.a(e, async (e, a) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => S,
                default: () => c,
                getServerSideProps: () => g,
                getStaticPaths: () => _,
                getStaticProps: () => d,
                reportWebVitals: () => x,
                routeModule: () => f,
                unstable_getServerProps: () => v,
                unstable_getServerSideProps: () => q,
                unstable_getStaticParams: () => m,
                unstable_getStaticPaths: () => b,
                unstable_getStaticProps: () => P,
              });
            var s = r(7093),
              i = r(5244),
              o = r(1323),
              l = r(1207),
              u = r(5913),
              p = r(6908),
              n = e([u]);
            u = (n.then ? (await n)() : n)[0];
            let c = (0, o.l)(p, 'default'),
              d = (0, o.l)(p, 'getStaticProps'),
              _ = (0, o.l)(p, 'getStaticPaths'),
              g = (0, o.l)(p, 'getServerSideProps'),
              S = (0, o.l)(p, 'config'),
              x = (0, o.l)(p, 'reportWebVitals'),
              P = (0, o.l)(p, 'unstable_getStaticProps'),
              b = (0, o.l)(p, 'unstable_getStaticPaths'),
              m = (0, o.l)(p, 'unstable_getStaticParams'),
              v = (0, o.l)(p, 'unstable_getServerProps'),
              q = (0, o.l)(p, 'unstable_getServerSideProps'),
              f = new s.PagesRouteModule({
                definition: {
                  kind: i.x.PAGES,
                  page: '/_error',
                  pathname: '/_error',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: u.default, Document: l.default },
                userland: p,
              });
            a();
          } catch (e) {
            a(e);
          }
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
      4520: (e) => {
        e.exports = import('@vercel/analytics/next');
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
    r = t.X(0, [761, 163, 859, 450, 908, 207, 913], () =>
      __webpack_exec__(6968),
    );
  module.exports = r;
})();
