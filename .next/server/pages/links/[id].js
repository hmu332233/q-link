'use strict';
(() => {
  var e = {};
  (e.id = 927),
    (e.ids = [927, 888, 660]),
    (e.modules = {
      4048: (e, t, r) => {
        r.a(e, async (e, a) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => g,
                default: () => u,
                getServerSideProps: () => x,
                getStaticPaths: () => _,
                getStaticProps: () => d,
                reportWebVitals: () => m,
                routeModule: () => f,
                unstable_getServerProps: () => v,
                unstable_getServerSideProps: () => b,
                unstable_getStaticParams: () => S,
                unstable_getStaticPaths: () => P,
                unstable_getStaticProps: () => h,
              });
            var s = r(7093),
              i = r(5244),
              n = r(1323),
              l = r(1207),
              o = r(5913),
              c = r(63),
              p = e([o, c]);
            [o, c] = p.then ? (await p)() : p;
            let u = (0, n.l)(c, 'default'),
              d = (0, n.l)(c, 'getStaticProps'),
              _ = (0, n.l)(c, 'getStaticPaths'),
              x = (0, n.l)(c, 'getServerSideProps'),
              g = (0, n.l)(c, 'config'),
              m = (0, n.l)(c, 'reportWebVitals'),
              h = (0, n.l)(c, 'unstable_getStaticProps'),
              P = (0, n.l)(c, 'unstable_getStaticPaths'),
              S = (0, n.l)(c, 'unstable_getStaticParams'),
              v = (0, n.l)(c, 'unstable_getServerProps'),
              b = (0, n.l)(c, 'unstable_getServerSideProps'),
              f = new s.PagesRouteModule({
                definition: {
                  kind: i.x.PAGES,
                  page: '/links/[id]',
                  pathname: '/links/[id]',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: o.default, Document: l.default },
                userland: c,
              });
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      5969: (e, t, r) => {
        r.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var a = r(997),
          s = r(6689);
        let __WEBPACK_DEFAULT_EXPORT__ = function ({
          adUnit: e,
          width: t,
          height: r,
        }) {
          let i = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              let a = i.current;
              if (!a) return;
              let s = document.createElement('ins');
              (s.className = 'kakao_ad_area'),
                (s.style.display = 'none'),
                s.setAttribute('data-ad-unit', e),
                s.setAttribute('data-ad-width', String(t)),
                s.setAttribute('data-ad-height', String(r));
              let n = document.createElement('script');
              return (
                (n.type = 'text/javascript'),
                (n.src = 'https://t1.kakaocdn.net/kas/static/ba.min.js'),
                (n.async = !0),
                a.appendChild(s),
                a.appendChild(n),
                () => {
                  a.innerHTML = '';
                }
              );
            }, [e, t, r]),
            a.jsx('div', { ref: i })
          );
        };
      },
      63: (e, t, r) => {
        r.a(e, async (e, a) => {
          try {
            r.r(t),
              r.d(t, {
                default: () => __WEBPACK_DEFAULT_EXPORT__,
                getServerSideProps: () => getServerSideProps,
              });
            var s = r(997),
              i = r(968),
              n = r.n(i),
              l = r(5460),
              o = r(2167),
              c = r.n(o),
              p = r(5387),
              u = r(3666),
              d = r(5969),
              _ = e([u]);
            u = (_.then ? (await _)() : _)[0];
            let getServerSideProps = async ({ query: e, locale: t = 'ko' }) => {
                let { id: r } = e,
                  {
                    data: { data: a },
                  } = await c().get(`${process.env.API_URL}/api/links`, {
                    params: { id: r },
                  }),
                  { url: s, contents: i, correct: n } = a;
                return {
                  props: {
                    ...(await (0, l.serverSideTranslations)(t, [
                      'common',
                      'links',
                    ])),
                    id: r,
                    url: s,
                    contents: i,
                    correct: n,
                  },
                };
              },
              __WEBPACK_DEFAULT_EXPORT__ = function ({
                id: e,
                url: t,
                contents: r,
                correct: a,
              }) {
                return (0, s.jsxs)(p.Z, {
                  children: [
                    s.jsx(n(), {
                      children: (0, s.jsxs)('title', {
                        children: ['Q.Link - ', e],
                      }),
                    }),
                    s.jsx(u.Z, { url: t, contents: r, correct: a }),
                    s.jsx('div', {
                      className: 'flex justify-center mt-8',
                      children: s.jsx(d.Z, {
                        adUnit: 'DAN-Pq5AyOvOFZlvf0hd',
                        width: 250,
                        height: 250,
                      }),
                    }),
                  ],
                });
              };
            a();
          } catch (e) {
            a(e);
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
