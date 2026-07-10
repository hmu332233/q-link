'use strict';
(() => {
  var e = {};
  (e.id = 405),
    (e.ids = [405, 888, 660]),
    (e.modules = {
      1496: (e, t, r) => {
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => m,
                default: () => u,
                getServerSideProps: () => _,
                getStaticPaths: () => p,
                getStaticProps: () => x,
                reportWebVitals: () => h,
                routeModule: () => v,
                unstable_getServerProps: () => b,
                unstable_getServerSideProps: () => g,
                unstable_getStaticParams: () => S,
                unstable_getStaticPaths: () => P,
                unstable_getStaticProps: () => f,
              });
            var a = r(7093),
              l = r(5244),
              i = r(1323),
              n = r(1207),
              c = r(5913),
              o = r(2627),
              d = e([c]);
            c = (d.then ? (await d)() : d)[0];
            let u = (0, i.l)(o, 'default'),
              x = (0, i.l)(o, 'getStaticProps'),
              p = (0, i.l)(o, 'getStaticPaths'),
              _ = (0, i.l)(o, 'getServerSideProps'),
              m = (0, i.l)(o, 'config'),
              h = (0, i.l)(o, 'reportWebVitals'),
              f = (0, i.l)(o, 'unstable_getStaticProps'),
              P = (0, i.l)(o, 'unstable_getStaticPaths'),
              S = (0, i.l)(o, 'unstable_getStaticParams'),
              b = (0, i.l)(o, 'unstable_getServerProps'),
              g = (0, i.l)(o, 'unstable_getServerSideProps'),
              v = new a.PagesRouteModule({
                definition: {
                  kind: l.x.PAGES,
                  page: '/index',
                  pathname: '/',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: c.default, Document: n.default },
                userland: o,
              });
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      4369: (e, t, r) => {
        r.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var s = r(997),
          a = r(6689),
          l = r(9003),
          i = r.n(l);
        let __WEBPACK_DEFAULT_EXPORT__ = function ({
          className: e,
          children: t,
          onClick: r,
          ...l
        }) {
          let [n, c] = (0, a.useState)(!1);
          return s.jsx('button', {
            className: i()('btn', n && 'loading', e),
            onClick: (e) => {
              c(!0), r && r(e);
            },
            ...l,
            children: n || t,
          });
        };
      },
      2627: (e, t, r) => {
        r.r(t),
          r.d(t, {
            default: () => __WEBPACK_DEFAULT_EXPORT__,
            getServerSideProps: () => getServerSideProps,
          });
        var s = r(997),
          a = r(5460),
          l = r(1377),
          i = r(1664),
          n = r.n(i),
          c = r(5387),
          o = r(4369),
          d = r(7851);
        let getServerSideProps = async ({ locale: e = 'ko' }) => ({
            props: { ...(await (0, a.serverSideTranslations)(e, ['main'])) },
          }),
          __WEBPACK_DEFAULT_EXPORT__ = function () {
            let { t: e } = (0, l.useTranslation)('main');
            return s.jsx(c.Z, {
              hideHeader: !0,
              children: s.jsx('div', {
                className: 'flex flex-col items-center gap-y-8',
                children: s.jsx('div', {
                  className: 'hero min-h-screen',
                  children: s.jsx('div', {
                    className: 'hero-content w-full text-center mb-24',
                    children: (0, s.jsxs)('div', {
                      className: 'w-full',
                      children: [
                        s.jsx('h1', {
                          className: 'text-4xl font-bold text-base-content ',
                          children: (0, s.jsxs)(n(), {
                            href: '/',
                            children: [
                              s.jsx('span', {
                                className: 'text-primary',
                                children: 'Q.',
                              }),
                              'Link',
                            ],
                          }),
                        }),
                        s.jsx('p', {
                          className: 'py-6 whitespace-pre-line',
                          children: e('description'),
                        }),
                        (0, s.jsxs)('div', {
                          className: 'flex w-full gap-3',
                          children: [
                            s.jsx(n(), {
                              href: '/links/new',
                              className: 'btn btn-primary flex-1',
                              children: e('button.create'),
                            }),
                            s.jsx(n(), {
                              href: '/intro',
                              className: 'btn flex-1',
                              children: e('button.what'),
                            }),
                            s.jsx(n(), {
                              href: e('demoUrl'),
                              passHref: !0,
                              className: 'inline-flex flex-1',
                              children: s.jsx(o.Z, {
                                className: 'btn-outline w-full',
                                children: e('button.demo'),
                              }),
                            }),
                          ],
                        }),
                        s.jsx('div', {
                          className: 'flex justify-center w-full mt-4',
                          children: s.jsx(d.Z, {}),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            });
          };
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
    r = t.X(0, [761, 163, 859, 450, 664, 207, 913, 387], () =>
      __webpack_exec__(1496),
    );
  module.exports = r;
})();
