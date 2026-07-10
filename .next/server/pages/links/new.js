'use strict';
(() => {
  var e = {};
  (e.id = 598),
    (e.ids = [598, 888, 660]),
    (e.modules = {
      3111: (e, t, r) => {
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => _,
                default: () => p,
                getServerSideProps: () => m,
                getStaticPaths: () => x,
                getStaticProps: () => d,
                reportWebVitals: () => h,
                routeModule: () => k,
                unstable_getServerProps: () => S,
                unstable_getServerSideProps: () => P,
                unstable_getStaticParams: () => b,
                unstable_getStaticPaths: () => g,
                unstable_getStaticProps: () => f,
              });
            var a = r(7093),
              l = r(5244),
              n = r(1323),
              i = r(1207),
              o = r(5913),
              c = r(5593),
              u = e([o, c]);
            [o, c] = u.then ? (await u)() : u;
            let p = (0, n.l)(c, 'default'),
              d = (0, n.l)(c, 'getStaticProps'),
              x = (0, n.l)(c, 'getStaticPaths'),
              m = (0, n.l)(c, 'getServerSideProps'),
              _ = (0, n.l)(c, 'config'),
              h = (0, n.l)(c, 'reportWebVitals'),
              f = (0, n.l)(c, 'unstable_getStaticProps'),
              g = (0, n.l)(c, 'unstable_getStaticPaths'),
              b = (0, n.l)(c, 'unstable_getStaticParams'),
              S = (0, n.l)(c, 'unstable_getServerProps'),
              P = (0, n.l)(c, 'unstable_getServerSideProps'),
              k = new a.PagesRouteModule({
                definition: {
                  kind: l.x.PAGES,
                  page: '/links/new',
                  pathname: '/links/new',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: o.default, Document: i.default },
                userland: c,
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
          n = r.n(l);
        let __WEBPACK_DEFAULT_EXPORT__ = function ({
          className: e,
          children: t,
          onClick: r,
          ...l
        }) {
          let [i, o] = (0, a.useState)(!1);
          return s.jsx('button', {
            className: n()('btn', i && 'loading', e),
            onClick: (e) => {
              o(!0), r && r(e);
            },
            ...l,
            children: i || t,
          });
        };
      },
      5839: (e, t, r) => {
        r.a(e, async (e, s) => {
          try {
            r.d(t, { Z: () => x });
            var a = r(997),
              l = r(6689),
              n = r(1377),
              i = r(5589),
              o = r(9231),
              c = r(3341),
              u = r(4369),
              p = r(1823),
              d = e([o]);
            o = (d.then ? (await d)() : d)[0];
            let x = {
              Step1: function ({ onNextClick: e }) {
                let { t } = (0, n.useTranslation)(),
                  [r, s] = (0, l.useState)(!1),
                  [i, d] = (0, l.useState)(t('links:stepBody.step2.example'));
                return (0, a.jsxs)('div', {
                  className: 'flex flex-col items-center w-full gap-y-4',
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'flex flex-col lg:flex-row items-center lg:justify-center lg:items-start w-full gap-6 gap-y-4',
                      children: [
                        a.jsx('form', {
                          className: 'w-full max-w-lg',
                          id: 'step2',
                          onSubmit: (t) => {
                            t.preventDefault();
                            let r = new FormData(t.currentTarget),
                              { contents: a } = Object.fromEntries(r);
                            e({ contents: a }), s(!0);
                          },
                          children: a.jsx(c.Z, {
                            label: 'Quiz Contents',
                            feedback: t('links:stepBody.step2.feedback2'),
                            children: a.jsx('textarea', {
                              className:
                                'textarea w-full h-52 lg:h-72 textarea-bordered',
                              name: 'contents',
                              placeholder: '',
                              value: i,
                              onChange: (e) => {
                                let {
                                  currentTarget: { value: t },
                                } = e;
                                d(t);
                              },
                              required: !0,
                            }),
                          }),
                        }),
                        (0, a.jsxs)('div', {
                          className: 'w-full max-w-lg',
                          children: [
                            a.jsx(p.Z, { children: 'Preview' }),
                            a.jsx(o.Z, { contents: i }),
                          ],
                        }),
                      ],
                    }),
                    a.jsx(u.Z, {
                      className: 'btn-wide',
                      type: 'submit',
                      form: 'step2',
                      children: t('common:next'),
                    }),
                  ],
                });
              },
              Step2: function ({ onNextClick: e }) {
                let { t } = (0, n.useTranslation)();
                return (0, a.jsxs)('div', {
                  className: 'flex flex-col items-center w-full gap-y-4',
                  children: [
                    (0, a.jsxs)('form', {
                      className: 'w-full max-w-lg',
                      id: 'step1',
                      onSubmit: (t) => {
                        t.preventDefault();
                        let r = new FormData(t.currentTarget),
                          { correct: s, url: a } = Object.fromEntries(r);
                        e({ correct: s, url: a });
                      },
                      children: [
                        a.jsx(i.Z, {
                          label: 'Quiz Answer',
                          feedback: t('links:stepBody.step2.feedback1'),
                          name: 'correct',
                          placeholder: '',
                          required: !0,
                        }),
                        a.jsx(i.Z, {
                          label: 'Link',
                          feedback: (0, a.jsxs)(n.Trans, {
                            i18nKey: 'links:stepBody.step1.feedback1',
                            children: [
                              '정답을 맞혔을 때 이동할 링크를 입력해 주세요.',
                              a.jsx('br', {}),
                              '이동할 링크가 없다면',
                              ' ',
                              a.jsx('a', {
                                className: 'link',
                                href: 'https://celebration.minung.dev',
                                target: '_blank',
                                rel: 'noreferrer',
                                children: 'celebration.minung.dev',
                              }),
                              '를 활용해보세요.',
                            ],
                          }),
                          name: 'url',
                          type: 'url',
                          placeholder: 'https://aaaa.com/bbbb',
                          required: !0,
                        }),
                      ],
                    }),
                    a.jsx('button', {
                      className: 'btn btn-wide',
                      type: 'submit',
                      form: 'step1',
                      children: t('common:next'),
                    }),
                  ],
                });
              },
            };
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      2249: (e, t, r) => {
        r.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var s = r(997),
          a = r(1377),
          l = r(9003),
          n = r.n(l);
        let i = [
            { id: 'quiz', textId: 'steps.two' },
            { id: 'link', textId: 'steps.one' },
            { id: 'complete', textId: 'steps.three' },
          ],
          __WEBPACK_DEFAULT_EXPORT__ = function ({ step: e }) {
            let { t } = (0, a.useTranslation)('links');
            return s.jsx('ul', {
              className: 'steps w-96',
              children: i.map((r, a) =>
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
      5593: (e, t, r) => {
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                default: () => __WEBPACK_DEFAULT_EXPORT__,
                getServerSideProps: () => getServerSideProps,
              });
            var a = r(997),
              l = r(6689),
              n = r(1163),
              i = r(5460),
              o = r(2167),
              c = r.n(o),
              u = r(5387),
              p = r(2249),
              d = r(5839),
              x = e([d]);
            d = (x.then ? (await x)() : x)[0];
            let getServerSideProps = async ({ locale: e = 'ko' }) => ({
                props: {
                  ...(await (0, i.serverSideTranslations)(e, [
                    'common',
                    'links',
                  ])),
                },
              }),
              __WEBPACK_DEFAULT_EXPORT__ = function () {
                let e = (0, n.useRouter)(),
                  [t, r] = (0, l.useState)(1),
                  [s, i] = (0, l.useState)({}),
                  handleNextClick = async (a) => {
                    let l = t + 1,
                      n = { ...s, ...a };
                    if (3 === l) {
                      try {
                        let {
                          data: { data: t },
                        } = await c().post('/api/links', n);
                        e.push(
                          {
                            pathname: '/links/complete',
                            query: { link: `${location.origin}/links/${t}` },
                          },
                          '/link/complete',
                        );
                      } catch (e) {
                        console.error(e);
                      }
                      return;
                    }
                    r(l), i(n);
                  },
                  o = d.Z[`Step${t}`];
                return a.jsx(u.Z, {
                  fluid: !0,
                  children: (0, a.jsxs)('div', {
                    className: 'flex flex-col items-center gap-y-4',
                    children: [
                      a.jsx(p.Z, { step: t }),
                      a.jsx(o, { onNextClick: handleNextClick }),
                    ],
                  }),
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
    r = t.X(0, [761, 163, 859, 450, 664, 207, 913, 387, 135], () =>
      __webpack_exec__(3111),
    );
  module.exports = r;
})();
