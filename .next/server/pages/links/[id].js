'use strict';
(() => {
  var e = {};
  (e.id = 927),
    (e.ids = [927, 888, 660]),
    (e.modules = {
      4048: (e, t, r) => {
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => g,
                default: () => c,
                getServerSideProps: () => _,
                getStaticPaths: () => x,
                getStaticProps: () => d,
                reportWebVitals: () => S,
                routeModule: () => q,
                unstable_getServerProps: () => v,
                unstable_getServerSideProps: () => b,
                unstable_getStaticParams: () => h,
                unstable_getStaticPaths: () => m,
                unstable_getStaticProps: () => P,
              });
            var a = r(7093),
              i = r(5244),
              o = r(1323),
              n = r(1207),
              l = r(5913),
              p = r(63),
              u = e([l, p]);
            [l, p] = u.then ? (await u)() : u;
            let c = (0, o.l)(p, 'default'),
              d = (0, o.l)(p, 'getStaticProps'),
              x = (0, o.l)(p, 'getStaticPaths'),
              _ = (0, o.l)(p, 'getServerSideProps'),
              g = (0, o.l)(p, 'config'),
              S = (0, o.l)(p, 'reportWebVitals'),
              P = (0, o.l)(p, 'unstable_getStaticProps'),
              m = (0, o.l)(p, 'unstable_getStaticPaths'),
              h = (0, o.l)(p, 'unstable_getStaticParams'),
              v = (0, o.l)(p, 'unstable_getServerProps'),
              b = (0, o.l)(p, 'unstable_getServerSideProps'),
              q = new a.PagesRouteModule({
                definition: {
                  kind: i.x.PAGES,
                  page: '/links/[id]',
                  pathname: '/links/[id]',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: l.default, Document: n.default },
                userland: p,
              });
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      63: (e, t, r) => {
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                default: () => __WEBPACK_DEFAULT_EXPORT__,
                getServerSideProps: () => getServerSideProps,
              });
            var a = r(997),
              i = r(968),
              o = r.n(i),
              n = r(5460),
              l = r(2167),
              p = r.n(l),
              u = r(5387),
              c = r(3666),
              d = e([c]);
            c = (d.then ? (await d)() : d)[0];
            let getServerSideProps = async ({ query: e, locale: t = 'ko' }) => {
                let { id: r } = e,
                  {
                    data: { data: s },
                  } = await p().get(`${process.env.API_URL}/api/links`, {
                    params: { id: r },
                  }),
                  { url: a, contents: i, correct: o } = s;
                return {
                  props: {
                    ...(await (0, n.serverSideTranslations)(t, [
                      'common',
                      'links',
                    ])),
                    id: r,
                    url: a,
                    contents: i,
                    correct: o,
                  },
                };
              },
              __WEBPACK_DEFAULT_EXPORT__ = function ({
                id: e,
                url: t,
                contents: r,
                correct: s,
              }) {
                return (0, a.jsxs)(u.Z, {
                  children: [
                    a.jsx(o(), {
                      children: (0, a.jsxs)('title', {
                        children: ['Q.Link - ', e],
                      }),
                    }),
                    a.jsx(c.Z, { url: t, contents: r, correct: s }),
                  ],
                });
              };
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      2167: (e) => {
        e.exports = require('axios');
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
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    r = t.X(0, [761, 163, 859, 450, 664, 207, 913, 387, 135, 666], () =>
      __webpack_exec__(4048),
    );
  module.exports = r;
})();
