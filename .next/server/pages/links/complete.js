'use strict';
(() => {
  var e = {};
  (e.id = 553),
    (e.ids = [553, 888, 660]),
    (e.modules = {
      4438: (e, t, r) => {
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => m,
                default: () => p,
                getServerSideProps: () => x,
                getStaticPaths: () => _,
                getStaticProps: () => u,
                reportWebVitals: () => P,
                routeModule: () => E,
                unstable_getServerProps: () => v,
                unstable_getServerSideProps: () => b,
                unstable_getStaticParams: () => h,
                unstable_getStaticPaths: () => S,
                unstable_getStaticProps: () => g,
              });
            var a = r(7093),
              i = r(5244),
              n = r(1323),
              l = r(1207),
              o = r(5913),
              c = r(4630),
              d = e([o]);
            o = (d.then ? (await d)() : d)[0];
            let p = (0, n.l)(c, 'default'),
              u = (0, n.l)(c, 'getStaticProps'),
              _ = (0, n.l)(c, 'getStaticPaths'),
              x = (0, n.l)(c, 'getServerSideProps'),
              m = (0, n.l)(c, 'config'),
              P = (0, n.l)(c, 'reportWebVitals'),
              g = (0, n.l)(c, 'unstable_getStaticProps'),
              S = (0, n.l)(c, 'unstable_getStaticPaths'),
              h = (0, n.l)(c, 'unstable_getStaticParams'),
              v = (0, n.l)(c, 'unstable_getServerProps'),
              b = (0, n.l)(c, 'unstable_getServerSideProps'),
              E = new a.PagesRouteModule({
                definition: {
                  kind: i.x.PAGES,
                  page: '/links/complete',
                  pathname: '/links/complete',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: o.default, Document: l.default },
                userland: c,
              });
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      4141: (e, t, r) => {
        r.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var s = r(997),
          a = r(1377),
          i = r(9003),
          n = r.n(i);
        let __WEBPACK_DEFAULT_EXPORT__ = function ({ outline: e, url: t }) {
          let { t: r } = (0, a.useTranslation)(),
            handleClick = async () => {
              t ??= location.href;
              let e = void 0 !== navigator.share;
              e
                ? await navigator.share({ title: 'Q.Link', url: t })
                : (await navigator.clipboard.writeText(t),
                  alert(r('common:copied')));
            };
          return s.jsx('button', {
            className: n()('btn btn-wide', e && 'btn-outline'),
            onClick: handleClick,
            children: r('common:share'),
          });
        };
      },
      2249: (e, t, r) => {
        r.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var s = r(997),
          a = r(1377),
          i = r(9003),
          n = r.n(i);
        let l = [
            { id: 'quiz', textId: 'steps.two' },
            { id: 'link', textId: 'steps.one' },
            { id: 'complete', textId: 'steps.three' },
          ],
          __WEBPACK_DEFAULT_EXPORT__ = function ({ step: e }) {
            let { t } = (0, a.useTranslation)('links');
            return s.jsx('ul', {
              className: 'steps w-96',
              children: l.map((r, a) =>
                s.jsx(
                  'li',
                  {
                    className: n()('step', e > a && 'step-primary'),
                    children: t(r.textId),
                  },
                  r.id,
                ),
              ),
            });
          };
      },
      4630: (e, t, r) => {
        r.r(t),
          r.d(t, {
            default: () => __WEBPACK_DEFAULT_EXPORT__,
            getServerSideProps: () => getServerSideProps,
          });
        var s = r(997),
          a = r(6689),
          i = r(5460),
          n = r(1377),
          l = r(1163),
          o = r(1664),
          c = r.n(o),
          d = r(5387),
          p = r(2249),
          u = r(4141);
        let getServerSideProps = async ({ locale: e = 'ko' }) => ({
            props: {
              ...(await (0, i.serverSideTranslations)(e, ['common', 'links'])),
            },
          }),
          __WEBPACK_DEFAULT_EXPORT__ = function () {
            let { t: e } = (0, n.useTranslation)('common'),
              [t, r] = (0, a.useState)(!1),
              i = (0, l.useRouter)(),
              {
                query: { link: o = '' },
              } = i;
            return s.jsx(d.Z, {
              children: (0, s.jsxs)('div', {
                className: 'flex flex-col items-center gap-y-4',
                children: [
                  s.jsx(p.Z, { step: 3 }),
                  s.jsx(c(), {
                    href: o,
                    className: 'link link-accent',
                    children: o,
                  }),
                  (0, s.jsxs)('div', {
                    className: 'indicator',
                    children: [
                      t &&
                        s.jsx('span', {
                          className: 'indicator-item',
                          children: s.jsx('span', {
                            className:
                              'badge badge-secondary animate-head-shake',
                            children: e('copied'),
                          }),
                        }),
                      s.jsx(u.Z, { url: o }),
                    ],
                  }),
                ],
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
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    r = t.X(0, [761, 163, 859, 450, 664, 207, 913, 387], () =>
      __webpack_exec__(4438),
    );
  module.exports = r;
})();
