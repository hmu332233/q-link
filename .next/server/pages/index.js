'use strict';
(() => {
  var e = {};
  (e.id = 405),
    (e.ids = [405, 888, 660]),
    (e.modules = {
      5870: (e, t, r) => {
        r.r(t),
          r.d(t, {
            config: () => P,
            default: () => _,
            getServerSideProps: () => g,
            getStaticPaths: () => b,
            getStaticProps: () => S,
            reportWebVitals: () => v,
            routeModule: () => E,
            unstable_getServerProps: () => w,
            unstable_getServerSideProps: () => k,
            unstable_getStaticParams: () => q,
            unstable_getStaticPaths: () => N,
            unstable_getStaticProps: () => j,
          });
        var s = {};
        r.r(s),
          r.d(s, {
            default: () => pages,
            getServerSideProps: () => getServerSideProps,
          });
        var a = r(7093),
          l = r(5244),
          i = r(1323),
          n = r(1207),
          c = r(3848),
          o = r(997),
          d = r(5460),
          u = r(1377),
          p = r(1664),
          x = r.n(p),
          m = r(5387),
          h = r(4369),
          f = r(7851);
        let getServerSideProps = async ({ locale: e = 'ko' }) => ({
            props: { ...(await (0, d.serverSideTranslations)(e, ['main'])) },
          }),
          pages = function () {
            let { t: e } = (0, u.useTranslation)('main');
            return o.jsx(m.Z, {
              hideHeader: !0,
              children: o.jsx('div', {
                className: 'flex flex-col items-center gap-y-8',
                children: o.jsx('div', {
                  className: 'hero min-h-screen',
                  children: o.jsx('div', {
                    className: 'hero-content w-full text-center mb-24',
                    children: (0, o.jsxs)('div', {
                      className: 'w-full',
                      children: [
                        o.jsx('h1', {
                          className: 'text-4xl font-bold text-base-content ',
                          children: (0, o.jsxs)(x(), {
                            href: '/',
                            children: [
                              o.jsx('span', {
                                className: 'text-primary',
                                children: 'Q.',
                              }),
                              'Link',
                            ],
                          }),
                        }),
                        o.jsx('p', {
                          className: 'py-6 whitespace-pre-line',
                          children: e('description'),
                        }),
                        (0, o.jsxs)('div', {
                          className: 'flex w-full gap-3',
                          children: [
                            o.jsx(x(), {
                              href: '/links/new',
                              className: 'btn btn-primary flex-1',
                              children: e('button.create'),
                            }),
                            o.jsx(x(), {
                              href: '/intro',
                              className: 'btn flex-1',
                              children: e('button.what'),
                            }),
                            o.jsx(x(), {
                              href: e('demoUrl'),
                              passHref: !0,
                              className: 'inline-flex flex-1',
                              children: o.jsx(h.Z, {
                                className: 'btn-outline w-full',
                                children: e('button.demo'),
                              }),
                            }),
                          ],
                        }),
                        o.jsx('div', {
                          className: 'flex justify-center w-full mt-4',
                          children: o.jsx(f.Z, {}),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            });
          },
          _ = (0, i.l)(s, 'default'),
          S = (0, i.l)(s, 'getStaticProps'),
          b = (0, i.l)(s, 'getStaticPaths'),
          g = (0, i.l)(s, 'getServerSideProps'),
          P = (0, i.l)(s, 'config'),
          v = (0, i.l)(s, 'reportWebVitals'),
          j = (0, i.l)(s, 'unstable_getStaticProps'),
          N = (0, i.l)(s, 'unstable_getStaticPaths'),
          q = (0, i.l)(s, 'unstable_getStaticParams'),
          w = (0, i.l)(s, 'unstable_getServerProps'),
          k = (0, i.l)(s, 'unstable_getServerSideProps'),
          E = new a.PagesRouteModule({
            definition: {
              kind: l.x.PAGES,
              page: '/index',
              pathname: '/',
              bundlePath: '',
              filename: '',
            },
            components: { App: c.default, Document: n.default },
            userland: s,
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
    r = t.X(0, [761, 163, 859, 450, 664, 207, 848, 387], () =>
      __webpack_exec__(5870),
    );
  module.exports = r;
})();
