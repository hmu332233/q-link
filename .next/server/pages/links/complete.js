'use strict';
(() => {
  var e = {};
  (e.id = 553),
    (e.ids = [553, 888, 660]),
    (e.modules = {
      1665: (e, t, r) => {
        r.r(t),
          r.d(t, {
            config: () => k,
            default: () => h,
            getServerSideProps: () => f,
            getStaticPaths: () => b,
            getStaticProps: () => v,
            reportWebVitals: () => q,
            routeModule: () => C,
            unstable_getServerProps: () => w,
            unstable_getServerSideProps: () => A,
            unstable_getStaticParams: () => E,
            unstable_getStaticPaths: () => T,
            unstable_getStaticProps: () => j,
          });
        var s = {};
        r.r(s),
          r.d(s, {
            default: () => complete,
            getServerSideProps: () => getServerSideProps,
          });
        var a = r(7093),
          i = r(5244),
          n = r(1323),
          l = r(1207),
          o = r(3848),
          c = r(997),
          d = r(6689),
          p = r(5460),
          u = r(1377),
          _ = r(1163),
          x = r(1664),
          m = r.n(x),
          g = r(5387),
          P = r(2249),
          S = r(4141);
        let getServerSideProps = async ({ locale: e = 'ko' }) => ({
            props: {
              ...(await (0, p.serverSideTranslations)(e, ['common', 'links'])),
            },
          }),
          complete = function () {
            let { t: e } = (0, u.useTranslation)('common'),
              [t, r] = (0, d.useState)(!1),
              s = (0, _.useRouter)(),
              {
                query: { link: a = '' },
              } = s;
            return c.jsx(g.Z, {
              children: (0, c.jsxs)('div', {
                className: 'flex flex-col items-center gap-y-4',
                children: [
                  c.jsx(P.Z, { step: 3 }),
                  c.jsx(m(), {
                    href: a,
                    className: 'link link-accent',
                    children: a,
                  }),
                  (0, c.jsxs)('div', {
                    className: 'indicator',
                    children: [
                      t &&
                        c.jsx('span', {
                          className: 'indicator-item',
                          children: c.jsx('span', {
                            className:
                              'badge badge-secondary animate-head-shake',
                            children: e('copied'),
                          }),
                        }),
                      c.jsx(S.Z, { url: a }),
                    ],
                  }),
                ],
              }),
            });
          },
          h = (0, n.l)(s, 'default'),
          v = (0, n.l)(s, 'getStaticProps'),
          b = (0, n.l)(s, 'getStaticPaths'),
          f = (0, n.l)(s, 'getServerSideProps'),
          k = (0, n.l)(s, 'config'),
          q = (0, n.l)(s, 'reportWebVitals'),
          j = (0, n.l)(s, 'unstable_getStaticProps'),
          T = (0, n.l)(s, 'unstable_getStaticPaths'),
          E = (0, n.l)(s, 'unstable_getStaticParams'),
          w = (0, n.l)(s, 'unstable_getServerProps'),
          A = (0, n.l)(s, 'unstable_getServerSideProps'),
          C = new a.PagesRouteModule({
            definition: {
              kind: i.x.PAGES,
              page: '/links/complete',
              pathname: '/links/complete',
              bundlePath: '',
              filename: '',
            },
            components: { App: o.default, Document: l.default },
            userland: s,
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
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    r = t.X(0, [761, 163, 859, 450, 664, 207, 848, 387], () =>
      __webpack_exec__(1665),
    );
  module.exports = r;
})();
