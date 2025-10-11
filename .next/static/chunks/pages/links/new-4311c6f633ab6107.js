(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [598],
  {
    79460: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/links/new',
        function () {
          return n(41047);
        },
      ]);
    },
    25589: function (e, t, n) {
      'use strict';
      var s = n(85893);
      n(67294);
      var l = n(93341);
      t.Z = function (e) {
        let {
          label: t,
          feedback: n,
          name: r,
          placeholder: a,
          type: c = 'text',
          required: i,
        } = e;
        return (0, s.jsx)(l.Z, {
          label: t,
          feedback: n,
          children: (0, s.jsx)('input', {
            className: 'input input-bordered w-full',
            type: c,
            name: r,
            placeholder: a,
            required: i,
          }),
        });
      };
    },
    93341: function (e, t, n) {
      'use strict';
      var s = n(85893);
      n(67294);
      var l = n(31823);
      t.Z = function (e) {
        let { children: t, label: n, feedback: r } = e;
        return (0, s.jsxs)('div', {
          className: 'form-control',
          children: [
            n && (0, s.jsx)(l.Z, { children: n }),
            t,
            r &&
              (0, s.jsx)('label', {
                className: 'label',
                children: (0, s.jsx)('span', {
                  className: 'label-text-alt',
                  children: r,
                }),
              }),
          ],
        });
      };
    },
    31823: function (e, t, n) {
      'use strict';
      var s = n(85893);
      n(67294),
        (t.Z = function (e) {
          let { children: t } = e;
          return (0, s.jsx)('label', {
            className: 'label',
            children: (0, s.jsx)('span', {
              className: 'label-text text-lg font-semibold',
              children: t,
            }),
          });
        });
    },
    87851: function (e, t, n) {
      'use strict';
      var s = n(85893);
      n(67294);
      var l = n(41664),
        r = n.n(l),
        a = n(11163),
        c = n(93967),
        i = n.n(c);
      let o = [
        { locale: 'en', text: 'English' },
        { locale: 'ko', text: '한국어' },
        { locale: 'ms', text: 'Bahasa Melayu' },
        { locale: 'tr', text: 'T\xfcrk\xe7e' },
        { locale: 'zh-CN', text: '简体中文' },
      ];
      t.Z = function (e) {
        let { className: t } = e,
          n = (0, a.useRouter)();
        return (0, s.jsxs)('div', {
          className: i()(t, 'dropdown dropdown-end'),
          children: [
            (0, s.jsx)('label', {
              tabIndex: 0,
              className: 'btn btn-ghost m-1',
              children: 'Language',
            }),
            (0, s.jsx)('ul', {
              tabIndex: 0,
              className:
                'dropdown-content menu bg-base-100 w-56 rounded-box shadow',
              children: o.map((e) =>
                (0, s.jsx)(
                  'li',
                  {
                    children: (0, s.jsx)(r(), {
                      href: n.asPath,
                      locale: e.locale,
                      className: i()(n.locale === e.locale && 'active'),
                      children: e.text,
                    }),
                  },
                  e.locale,
                ),
              ),
            }),
          ],
        });
      };
    },
    5387: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return components_Layout;
        },
      });
      var s = n(85893);
      n(67294);
      var l = n(93967),
        r = n.n(l),
        a = n(9008),
        c = n.n(a),
        i = n(50069),
        components_Seo = function (e) {
          let {} = e,
            { t } = (0, i.$G)();
          return (0, s.jsxs)(c(), {
            children: [
              (0, s.jsx)('title', { children: 'Q.Link' }),
              (0, s.jsx)('meta', {
                name: 'description',
                content: t('common:seo.description'),
              }),
              (0, s.jsx)('meta', {
                name: 'keywords',
                content: t('common:seo.keywords'),
              }),
              (0, s.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, s.jsx)('meta', { property: 'og:title', content: 'Q.Link' }),
              (0, s.jsx)('meta', {
                property: 'og:description',
                content: t('common:seo.description'),
              }),
              (0, s.jsx)('meta', {
                property: 'og:url',
                content: 'https://q-link.minung.dev',
              }),
            ],
          });
        },
        o = n(41664),
        d = n.n(o),
        u = n(87851),
        components_Header = function (e) {
          let {} = e;
          return (0, s.jsxs)('header', {
            className: 'p-4 flex items-center relative',
            children: [
              (0, s.jsx)('h1', {
                className:
                  'text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                children: (0, s.jsxs)(d(), {
                  href: '/',
                  children: [
                    (0, s.jsx)('span', {
                      className: 'text-primary',
                      children: 'Q.',
                    }),
                    'Link',
                  ],
                }),
              }),
              (0, s.jsx)(u.Z, { className: 'ml-auto' }),
            ],
          });
        },
        components_Footer = function () {
          return (0, s.jsx)('footer', {
            className: 'mt-16 border-t',
            children: (0, s.jsxs)('div', {
              className: 'container flex py-4 text-sm',
              children: [
                (0, s.jsxs)('div', {
                  className: '',
                  children: [
                    '\xa9 ',
                    new Date().getFullYear(),
                    ' ',
                    (0, s.jsx)('a', {
                      className: 'link link-hover',
                      href: 'https://github.com/hmu332233',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Minung Han',
                    }),
                  ],
                }),
                (0, s.jsx)('div', {
                  className: 'ml-auto',
                  children: (0, s.jsx)('a', {
                    href: 'https://github.com/hmu332233/q-link',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: (0, s.jsx)('svg', {
                      className: 'fill-current',
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '24',
                      height: '24',
                      viewBox: '0 0 24 24',
                      children: (0, s.jsx)('path', {
                        d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        components_Layout = function (e) {
          let { children: t, hideHeader: n, fluid: l } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(components_Seo, {}),
              (0, s.jsxs)('div', {
                className: 'flex flex-col min-h-screen',
                children: [
                  n || (0, s.jsx)(components_Header, {}),
                  (0, s.jsx)('main', {
                    className: r()('grow', l ? 'container-fluid' : 'container'),
                    children: t,
                  }),
                  (0, s.jsx)(components_Footer, {}),
                ],
              }),
            ],
          });
        };
    },
    4369: function (e, t, n) {
      'use strict';
      var s = n(85893),
        l = n(67294),
        r = n(93967),
        a = n.n(r);
      t.Z = function (e) {
        let { className: t, children: n, onClick: r, ...c } = e,
          [i, o] = (0, l.useState)(!1);
        return (0, s.jsx)('button', {
          className: a()('btn', i && 'loading', t),
          onClick: (e) => {
            o(!0), r && r(e);
          },
          ...c,
          children: i || n,
        });
      };
    },
    59231: function (e, t, n) {
      'use strict';
      var s = n(85893);
      n(67294);
      var l = n(65845),
        r = n(76199),
        a = n(93179),
        c = n(29623);
      let i = a.Z;
      t.Z = function (e) {
        let { contents: t } = e;
        return (0, s.jsx)('article', {
          className: 'prose w-full',
          children: (0, s.jsx)(l.D, {
            remarkPlugins: [r.Z],
            components: {
              code(e) {
                let { node: t, inline: n, className: l, children: r, ...a } = e;
                if (n)
                  return (0, s.jsx)('code', {
                    className: l,
                    ...a,
                    children: r,
                  });
                let [, o] = /language-(\w+)/.exec(l || '') || [];
                return (0, s.jsx)(i, {
                  style: c.Z,
                  language: o || 'text',
                  PreTag: 'div',
                  ...a,
                  children: String(r).replace(/\n$/, ''),
                });
              },
            },
            children: t,
          }),
        });
      };
    },
    92249: function (e, t, n) {
      'use strict';
      var s = n(85893),
        l = n(50069),
        r = n(93967),
        a = n.n(r);
      let c = [
        { id: 'quiz', textId: 'steps.two' },
        { id: 'link', textId: 'steps.one' },
        { id: 'complete', textId: 'steps.three' },
      ];
      t.Z = function (e) {
        let { step: t } = e,
          { t: n } = (0, l.$G)('links');
        return (0, s.jsx)('ul', {
          className: 'steps w-96',
          children: c.map((e, l) =>
            (0, s.jsx)(
              'li',
              {
                className: a()('step', t > l && 'step-primary'),
                children: n(e.textId),
              },
              e.id,
            ),
          ),
        });
      };
    },
    41047: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return j;
          },
          default: function () {
            return links_new;
          },
        });
      var s = n(85893),
        l = n(67294),
        r = n(11163),
        a = n(9669),
        c = n.n(a),
        i = n(5387),
        o = n(92249),
        d = n(50069),
        u = n(25589),
        x = n(59231),
        m = n(93341),
        p = n(4369),
        h = n(31823),
        f = {
          Step1: function (e) {
            let { onNextClick: t } = e,
              { t: n } = (0, d.$G)(),
              [r, a] = (0, l.useState)(!1),
              [c, i] = (0, l.useState)(n('links:stepBody.step2.example'));
            return (0, s.jsxs)('div', {
              className: 'flex flex-col items-center w-full gap-y-4',
              children: [
                (0, s.jsxs)('div', {
                  className:
                    'flex flex-col lg:flex-row items-center lg:justify-center lg:items-start w-full gap-6 gap-y-4',
                  children: [
                    (0, s.jsx)('form', {
                      className: 'w-full max-w-lg',
                      id: 'step2',
                      onSubmit: (e) => {
                        e.preventDefault();
                        let n = new FormData(e.currentTarget),
                          { contents: s } = Object.fromEntries(n);
                        t({ contents: s }), a(!0);
                      },
                      children: (0, s.jsx)(m.Z, {
                        label: 'Quiz Contents',
                        feedback: n('links:stepBody.step2.feedback2'),
                        children: (0, s.jsx)('textarea', {
                          className:
                            'textarea w-full h-52 lg:h-72 textarea-bordered',
                          name: 'contents',
                          placeholder: '',
                          value: c,
                          onChange: (e) => {
                            let {
                              currentTarget: { value: t },
                            } = e;
                            i(t);
                          },
                          required: !0,
                        }),
                      }),
                    }),
                    (0, s.jsxs)('div', {
                      className: 'w-full max-w-lg',
                      children: [
                        (0, s.jsx)(h.Z, { children: 'Preview' }),
                        (0, s.jsx)(x.Z, { contents: c }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(p.Z, {
                  className: 'btn-wide',
                  type: 'submit',
                  form: 'step2',
                  children: n('common:next'),
                }),
              ],
            });
          },
          Step2: function (e) {
            let { onNextClick: t } = e,
              { t: n } = (0, d.$G)();
            return (0, s.jsxs)('div', {
              className: 'flex flex-col items-center w-full gap-y-4',
              children: [
                (0, s.jsxs)('form', {
                  className: 'w-full max-w-lg',
                  id: 'step1',
                  onSubmit: (e) => {
                    e.preventDefault();
                    let n = new FormData(e.currentTarget),
                      { correct: s, url: l } = Object.fromEntries(n);
                    t({ correct: s, url: l });
                  },
                  children: [
                    (0, s.jsx)(u.Z, {
                      label: 'Quiz Answer',
                      feedback: n('links:stepBody.step2.feedback1'),
                      name: 'correct',
                      placeholder: '',
                      required: !0,
                    }),
                    (0, s.jsx)(u.Z, {
                      label: 'Link',
                      feedback: (0, s.jsxs)(d.cC, {
                        i18nKey: 'links:stepBody.step1.feedback1',
                        children: [
                          '정답을 맞혔을 때 이동할 링크를 입력해 주세요.',
                          (0, s.jsx)('br', {}),
                          '이동할 링크가 없다면',
                          ' ',
                          (0, s.jsx)('a', {
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
                (0, s.jsx)('button', {
                  className: 'btn btn-wide',
                  type: 'submit',
                  form: 'step1',
                  children: n('common:next'),
                }),
              ],
            });
          },
        },
        j = !0,
        links_new = function () {
          let e = (0, r.useRouter)(),
            [t, n] = (0, l.useState)(1),
            [a, d] = (0, l.useState)({}),
            handleNextClick = async (s) => {
              let l = t + 1,
                r = { ...a, ...s };
              if (3 === l) {
                try {
                  let {
                    data: { data: t },
                  } = await c().post('/api/links', r);
                  e.push(
                    {
                      pathname: '/links/complete',
                      query: {
                        link: ''.concat(location.origin, '/links/').concat(t),
                      },
                    },
                    '/link/complete',
                  );
                } catch (e) {
                  console.error(e);
                }
                return;
              }
              n(l), d(r);
            },
            u = f['Step'.concat(t)];
          return (0, s.jsx)(i.Z, {
            fluid: !0,
            children: (0, s.jsxs)('div', {
              className: 'flex flex-col items-center gap-y-4',
              children: [
                (0, s.jsx)(o.Z, { step: t }),
                (0, s.jsx)(u, { onNextClick: handleNextClick }),
              ],
            }),
          });
        };
    },
  },
  function (e) {
    e.O(0, [456, 46, 669, 774, 888, 179], function () {
      return e((e.s = 79460));
    }),
      (_N_E = e.O());
  },
]);
