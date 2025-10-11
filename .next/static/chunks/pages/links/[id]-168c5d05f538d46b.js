(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [927],
  {
    91893: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/links/[id]',
        function () {
          return t(30063);
        },
      ]);
    },
    25589: function (e, n, t) {
      'use strict';
      var s = t(85893);
      t(67294);
      var r = t(93341);
      n.Z = function (e) {
        let {
          label: n,
          feedback: t,
          name: l,
          placeholder: a,
          type: c = 'text',
          required: o,
        } = e;
        return (0, s.jsx)(r.Z, {
          label: n,
          feedback: t,
          children: (0, s.jsx)('input', {
            className: 'input input-bordered w-full',
            type: c,
            name: l,
            placeholder: a,
            required: o,
          }),
        });
      };
    },
    93341: function (e, n, t) {
      'use strict';
      var s = t(85893);
      t(67294);
      var r = t(31823);
      n.Z = function (e) {
        let { children: n, label: t, feedback: l } = e;
        return (0, s.jsxs)('div', {
          className: 'form-control',
          children: [
            t && (0, s.jsx)(r.Z, { children: t }),
            n,
            l &&
              (0, s.jsx)('label', {
                className: 'label',
                children: (0, s.jsx)('span', {
                  className: 'label-text-alt',
                  children: l,
                }),
              }),
          ],
        });
      };
    },
    31823: function (e, n, t) {
      'use strict';
      var s = t(85893);
      t(67294),
        (n.Z = function (e) {
          let { children: n } = e;
          return (0, s.jsx)('label', {
            className: 'label',
            children: (0, s.jsx)('span', {
              className: 'label-text text-lg font-semibold',
              children: n,
            }),
          });
        });
    },
    87851: function (e, n, t) {
      'use strict';
      var s = t(85893);
      t(67294);
      var r = t(41664),
        l = t.n(r),
        a = t(11163),
        c = t(93967),
        o = t.n(c);
      let i = [
        { locale: 'en', text: 'English' },
        { locale: 'ko', text: '한국어' },
        { locale: 'ms', text: 'Bahasa Melayu' },
        { locale: 'tr', text: 'T\xfcrk\xe7e' },
        { locale: 'zh-CN', text: '简体中文' },
      ];
      n.Z = function (e) {
        let { className: n } = e,
          t = (0, a.useRouter)();
        return (0, s.jsxs)('div', {
          className: o()(n, 'dropdown dropdown-end'),
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
              children: i.map((e) =>
                (0, s.jsx)(
                  'li',
                  {
                    children: (0, s.jsx)(l(), {
                      href: t.asPath,
                      locale: e.locale,
                      className: o()(t.locale === e.locale && 'active'),
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
    5387: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return components_Layout;
        },
      });
      var s = t(85893);
      t(67294);
      var r = t(93967),
        l = t.n(r),
        a = t(9008),
        c = t.n(a),
        o = t(50069),
        components_Seo = function (e) {
          let {} = e,
            { t: n } = (0, o.$G)();
          return (0, s.jsxs)(c(), {
            children: [
              (0, s.jsx)('title', { children: 'Q.Link' }),
              (0, s.jsx)('meta', {
                name: 'description',
                content: n('common:seo.description'),
              }),
              (0, s.jsx)('meta', {
                name: 'keywords',
                content: n('common:seo.keywords'),
              }),
              (0, s.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, s.jsx)('meta', { property: 'og:title', content: 'Q.Link' }),
              (0, s.jsx)('meta', {
                property: 'og:description',
                content: n('common:seo.description'),
              }),
              (0, s.jsx)('meta', {
                property: 'og:url',
                content: 'https://q-link.minung.dev',
              }),
            ],
          });
        },
        i = t(41664),
        u = t.n(i),
        d = t(87851),
        components_Header = function (e) {
          let {} = e;
          return (0, s.jsxs)('header', {
            className: 'p-4 flex items-center relative',
            children: [
              (0, s.jsx)('h1', {
                className:
                  'text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                children: (0, s.jsxs)(u(), {
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
              (0, s.jsx)(d.Z, { className: 'ml-auto' }),
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
          let { children: n, hideHeader: t, fluid: r } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(components_Seo, {}),
              (0, s.jsxs)('div', {
                className: 'flex flex-col min-h-screen',
                children: [
                  t || (0, s.jsx)(components_Header, {}),
                  (0, s.jsx)('main', {
                    className: l()('grow', r ? 'container-fluid' : 'container'),
                    children: n,
                  }),
                  (0, s.jsx)(components_Footer, {}),
                ],
              }),
            ],
          });
        };
    },
    59231: function (e, n, t) {
      'use strict';
      var s = t(85893);
      t(67294);
      var r = t(65845),
        l = t(76199),
        a = t(93179),
        c = t(29623);
      let o = a.Z;
      n.Z = function (e) {
        let { contents: n } = e;
        return (0, s.jsx)('article', {
          className: 'prose w-full',
          children: (0, s.jsx)(r.D, {
            remarkPlugins: [l.Z],
            components: {
              code(e) {
                let { node: n, inline: t, className: r, children: l, ...a } = e;
                if (t)
                  return (0, s.jsx)('code', {
                    className: r,
                    ...a,
                    children: l,
                  });
                let [, i] = /language-(\w+)/.exec(r || '') || [];
                return (0, s.jsx)(o, {
                  style: c.Z,
                  language: i || 'text',
                  PreTag: 'div',
                  ...a,
                  children: String(l).replace(/\n$/, ''),
                });
              },
            },
            children: n,
          }),
        });
      };
    },
    62421: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return components_QLinkContents;
        },
      });
      var s = t(85893),
        r = t(67294),
        l = t(41664),
        a = t.n(l),
        c = t(50069),
        o = t(25589),
        i = t(59231),
        components_FeedbackMessage = function (e) {
          let { isCorrect: n } = e,
            { t } = (0, c.$G)('links');
          return (0, s.jsx)('span', {
            className: 'countdown whitespace-pre',
            children: t(n ? 'feedback.correct' : 'feedback.fail'),
          });
        },
        u = t(94141),
        components_QLinkContents = function (e) {
          let { url: n, contents: t, correct: l } = e,
            { t: d } = (0, c.$G)(),
            [m, x] = (0, r.useState)(!1),
            [h, f] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              if (!m) return;
              let e = setTimeout(() => {
                location.href = n;
              }, 4500);
              return () => clearTimeout(e);
            }, [m, n]),
            (0, s.jsxs)('div', {
              className: 'flex flex-col items-center gap-y-4',
              children: [
                (0, s.jsx)(i.Z, { contents: t }),
                (0, s.jsx)('form', {
                  className: 'w-full',
                  id: 'answer',
                  onSubmit: (e) => {
                    e.preventDefault();
                    let n = new FormData(e.currentTarget),
                      { answer: t } = Object.fromEntries(n);
                    x(l === t), f(!0);
                  },
                  children: (0, s.jsx)(o.Z, {
                    name: 'answer',
                    placeholder: d('common:contents.answerPlaceholder'),
                    feedback: h
                      ? (0, s.jsx)(components_FeedbackMessage, { isCorrect: m })
                      : void 0,
                  }),
                }),
                (0, s.jsx)('button', {
                  className: 'btn btn-wide',
                  type: 'submit',
                  form: 'answer',
                  children: d('common:submit'),
                }),
                (0, s.jsx)(u.Z, { outline: !0 }),
                (0, s.jsx)(a(), {
                  href: '/links/new',
                  className: 'link',
                  children: d('common:contents.createLink'),
                }),
              ],
            })
          );
        };
    },
    94141: function (e, n, t) {
      'use strict';
      var s = t(85893),
        r = t(50069),
        l = t(93967),
        a = t.n(l);
      n.Z = function (e) {
        let { outline: n, url: t } = e,
          { t: l } = (0, r.$G)(),
          handleClick = async () => {
            null != t || (t = location.href);
            let e = void 0 !== navigator.share;
            e
              ? await navigator.share({ title: 'Q.Link', url: t })
              : (await navigator.clipboard.writeText(t),
                alert(l('common:copied')));
          };
        return (0, s.jsx)('button', {
          className: a()('btn btn-wide', n && 'btn-outline'),
          onClick: handleClick,
          children: l('common:share'),
        });
      };
    },
    30063: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return o;
          },
        });
      var s = t(85893),
        r = t(9008),
        l = t.n(r),
        a = t(5387),
        c = t(62421),
        o = !0;
      n.default = function (e) {
        let { id: n, url: t, contents: r, correct: o } = e;
        return (0, s.jsxs)(a.Z, {
          children: [
            (0, s.jsx)(l(), {
              children: (0, s.jsxs)('title', { children: ['Q.Link - ', n] }),
            }),
            (0, s.jsx)(c.Z, { url: t, contents: r, correct: o }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [456, 46, 774, 888, 179], function () {
      return e((e.s = 91893));
    }),
      (_N_E = e.O());
  },
]);
