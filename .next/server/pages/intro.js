'use strict';
(() => {
  var e = {};
  (e.id = 23),
    (e.ids = [23, 888, 660]),
    (e.modules = {
      2651: (e, t, r) => {
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => g,
                default: () => u,
                getServerSideProps: () => _,
                getStaticPaths: () => x,
                getStaticProps: () => d,
                reportWebVitals: () => S,
                routeModule: () => q,
                unstable_getServerProps: () => v,
                unstable_getServerSideProps: () => b,
                unstable_getStaticParams: () => h,
                unstable_getStaticPaths: () => P,
                unstable_getStaticProps: () => m,
              });
            var a = r(7093),
              i = r(5244),
              n = r(1323),
              o = r(1207),
              l = r(5913),
              p = r(3610),
              c = e([l, p]);
            [l, p] = c.then ? (await c)() : c;
            let u = (0, n.l)(p, 'default'),
              d = (0, n.l)(p, 'getStaticProps'),
              x = (0, n.l)(p, 'getStaticPaths'),
              _ = (0, n.l)(p, 'getServerSideProps'),
              g = (0, n.l)(p, 'config'),
              S = (0, n.l)(p, 'reportWebVitals'),
              m = (0, n.l)(p, 'unstable_getStaticProps'),
              P = (0, n.l)(p, 'unstable_getStaticPaths'),
              h = (0, n.l)(p, 'unstable_getStaticParams'),
              v = (0, n.l)(p, 'unstable_getServerProps'),
              b = (0, n.l)(p, 'unstable_getServerSideProps'),
              q = new a.PagesRouteModule({
                definition: {
                  kind: i.x.PAGES,
                  page: '/intro',
                  pathname: '/intro',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: l.default, Document: o.default },
                userland: p,
              });
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      3610: (e, t, r) => {
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                default: () => __WEBPACK_DEFAULT_EXPORT__,
                getServerSideProps: () => getServerSideProps,
              });
            var a = r(997),
              i = r(968),
              n = r.n(i),
              o = r(5460),
              l = r(1377),
              p = r(5387),
              c = r(3666),
              u = e([c]);
            c = (u.then ? (await u)() : u)[0];
            let getServerSideProps = async ({ locale: e = 'ko' }) => ({
                props: {
                  ...(await (0, o.serverSideTranslations)(e, [
                    'common',
                    'intro',
                    'links',
                  ])),
                },
              }),
              __WEBPACK_DEFAULT_EXPORT__ = function () {
                let { t: e } = (0, l.useTranslation)('intro');
                return (0, a.jsxs)(p.Z, {
                  children: [
                    a.jsx(n(), {
                      children: a.jsx('title', { children: 'Q.Link - intro' }),
                    }),
                    a.jsx(c.Z, {
                      url: 'https://q-link.minung.dev',
                      contents: e('contents'),
                      correct: e('correct'),
                    }),
                  ],
                });
              };
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      9003: (e) => {
        e.exports = require('classnames');
      },
      1377: (e) => {
        e.exports = require('next-i18next');
      },
      5460: (e) => {
        e.exports = require('next-i18next/serverSideTranslations');
      },
      2785: (e) => {
        e.exports = require('next/dist/compiled/next-server/pages.runtime.prod.js');
      },
      968: (e) => {
        e.exports = require('next/head');
      },
      6689: (e) => {
        e.exports = require('react');
      },
      6405: (e) => {
        e.exports = require('react-dom');
      },
      727: (e) => {
        e.exports = require('react-syntax-highlighter');
      },
      2381: (e) => {
        e.exports = require('react-syntax-highlighter/dist/cjs/styles/prism/tomorrow');
      },
      997: (e) => {
        e.exports = require('react/jsx-runtime');
      },
      4520: (e) => {
        e.exports = import('@vercel/analytics/next');
      },
      3135: (e) => {
        e.exports = import('react-markdown');
      },
      6809: (e) => {
        e.exports = import('remark-gfm');
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
    r = t.X(0, [761, 163, 859, 450, 664, 207, 913, 387, 135, 666], () =>
      __webpack_exec__(2651),
    );
  module.exports = r;
})();
