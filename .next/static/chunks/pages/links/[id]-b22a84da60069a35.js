(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [927],
  {
    91893: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/links/[id]',
        function () {
          return n(45206);
        },
      ]);
    },
    25589: function (e, t, n) {
      'use strict';
      var s = n(85893);
      n(67294);
      var r = n(93341);
      t.Z = function (e) {
        let {
          label: t,
          feedback: n,
          name: a,
          placeholder: c,
          type: l = 'text',
          required: i,
        } = e;
        return (0, s.jsx)(r.Z, {
          label: t,
          feedback: n,
          children: (0, s.jsx)('input', {
            className: 'input input-bordered w-full',
            type: l,
            name: a,
            placeholder: c,
            required: i,
          }),
        });
      };
    },
    93341: function (e, t, n) {
      'use strict';
      var s = n(85893);
      n(67294);
      var r = n(31823);
      t.Z = function (e) {
        let { children: t, label: n, feedback: a } = e;
        return (0, s.jsxs)('div', {
          className: 'form-control',
          children: [
            n && (0, s.jsx)(r.Z, { children: n }),
            t,
            a &&
              (0, s.jsx)('label', {
                className: 'label',
                children: (0, s.jsx)('span', {
                  className: 'label-text-alt',
                  children: a,
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
      var r = n(41664),
        a = n.n(r),
        c = n(11163),
        l = n(93967),
        i = n.n(l);
      let o = [
        { locale: 'en', text: 'English' },
        { locale: 'ko', text: '한국어' },
        { locale: 'ms', text: 'Bahasa Melayu' },
        { locale: 'tr', text: 'T\xfcrk\xe7e' },
        { locale: 'zh-CN', text: '简体中文' },
      ];
      t.Z = function (e) {
        let { className: t } = e,
          n = (0, c.useRouter)();
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
                    children: (0, s.jsx)(a(), {
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
      var r = n(93967),
        a = n.n(r),
        c = n(9008),
        l = n.n(c),
        i = n(50069),
        components_Seo = function (e) {
          let {} = e,
            { t } = (0, i.$G)();
          return (0, s.jsxs)(l(), {
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
          let { children: t, hideHeader: n, fluid: r } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(components_Seo, {}),
              (0, s.jsxs)('div', {
                className: 'flex flex-col min-h-screen',
                children: [
                  n || (0, s.jsx)(components_Header, {}),
                  (0, s.jsx)('main', {
                    className: a()('grow', r ? 'container-fluid' : 'container'),
                    children: t,
                  }),
                  (0, s.jsx)(components_Footer, {}),
                ],
              }),
            ],
          });
        };
    },
    59231: function (e, t, n) {
      'use strict';
      var s = n(85893);
      n(67294);
      var r = n(65845),
        a = n(76199),
        c = n(93179),
        l = n(29623);
      let i = c.Z;
      t.Z = function (e) {
        let { contents: t } = e;
        return (0, s.jsx)('article', {
          className: 'prose w-full',
          children: (0, s.jsx)(r.D, {
            remarkPlugins: [a.Z],
            components: {
              code(e) {
                let { node: t, inline: n, className: r, children: a, ...c } = e;
                if (n)
                  return (0, s.jsx)('code', {
                    className: r,
                    ...c,
                    children: a,
                  });
                let [, o] = /language-(\w+)/.exec(r || '') || [];
                return (0, s.jsx)(i, {
                  style: l.Z,
                  language: o || 'text',
                  PreTag: 'div',
                  ...c,
                  children: String(a).replace(/\n$/, ''),
                });
              },
            },
            children: t,
          }),
        });
      };
    },
    62421: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return components_QLinkContents;
        },
      });
      var s = n(85893),
        r = n(67294),
        a = n(41664),
        c = n.n(a),
        l = n(50069),
        i = n(25589),
        o = n(59231),
        components_FeedbackMessage = function (e) {
          let { isCorrect: t } = e,
            { t: n } = (0, l.$G)('links');
          return (0, s.jsx)('span', {
            className: 'countdown whitespace-pre',
            children: n(t ? 'feedback.correct' : 'feedback.fail'),
          });
        },
        d = n(94141),
        components_QLinkContents = function (e) {
          let { url: t, contents: n, correct: a } = e,
            { t: u } = (0, l.$G)(),
            [m, x] = (0, r.useState)(!1),
            [h, f] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              if (!m) return;
              let e = setTimeout(() => {
                location.href = t;
              }, 4500);
              return () => clearTimeout(e);
            }, [m, t]),
            (0, s.jsxs)('div', {
              className: 'flex flex-col items-center gap-y-4',
              children: [
                (0, s.jsx)(o.Z, { contents: n }),
                (0, s.jsx)('form', {
                  className: 'w-full',
                  id: 'answer',
                  onSubmit: (e) => {
                    e.preventDefault();
                    let t = new FormData(e.currentTarget),
                      { answer: n } = Object.fromEntries(t);
                    x(a === n), f(!0);
                  },
                  children: (0, s.jsx)(i.Z, {
                    name: 'answer',
                    placeholder: u('common:contents.answerPlaceholder'),
                    feedback: h
                      ? (0, s.jsx)(components_FeedbackMessage, { isCorrect: m })
                      : void 0,
                  }),
                }),
                (0, s.jsx)('button', {
                  className: 'btn btn-wide',
                  type: 'submit',
                  form: 'answer',
                  children: u('common:submit'),
                }),
                (0, s.jsx)(d.Z, { outline: !0 }),
                (0, s.jsx)(c(), {
                  href: '/links/new',
                  className: 'link',
                  children: u('common:contents.createLink'),
                }),
              ],
            })
          );
        };
    },
    94141: function (e, t, n) {
      'use strict';
      var s = n(85893),
        r = n(50069),
        a = n(93967),
        c = n.n(a);
      t.Z = function (e) {
        let { outline: t, url: n } = e,
          { t: a } = (0, r.$G)(),
          handleClick = async () => {
            null != n || (n = location.href);
            let e = void 0 !== navigator.share;
            e
              ? await navigator.share({ title: 'Q.Link', url: n })
              : (await navigator.clipboard.writeText(n),
                alert(a('common:copied')));
          };
        return (0, s.jsx)('button', {
          className: c()('btn btn-wide', t && 'btn-outline'),
          onClick: handleClick,
          children: a('common:share'),
        });
      };
    },
    45206: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return o;
          },
          default: function () {
            return _id_;
          },
        });
      var s = n(85893),
        r = n(9008),
        a = n.n(r),
        c = n(5387),
        l = n(62421),
        i = n(67294),
        components_KakaoAdFit = function (e) {
          let { adUnit: t, width: n, height: r } = e,
            a = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              let e = a.current;
              if (!e) return;
              let s = document.createElement('ins');
              (s.className = 'kakao_ad_area'),
                (s.style.display = 'none'),
                s.setAttribute('data-ad-unit', t),
                s.setAttribute('data-ad-width', String(n)),
                s.setAttribute('data-ad-height', String(r));
              let c = document.createElement('script');
              return (
                (c.type = 'text/javascript'),
                (c.src = 'https://t1.kakaocdn.net/kas/static/ba.min.js'),
                (c.async = !0),
                e.appendChild(s),
                e.appendChild(c),
                () => {
                  e.innerHTML = '';
                }
              );
            }, [t, n, r]),
            (0, s.jsx)('div', { ref: a })
          );
        },
        o = !0,
        _id_ = function (e) {
          let { id: t, url: n, contents: r, correct: i } = e;
          return (0, s.jsxs)(c.Z, {
            children: [
              (0, s.jsx)(a(), {
                children: (0, s.jsxs)('title', { children: ['Q.Link - ', t] }),
              }),
              (0, s.jsx)(l.Z, { url: n, contents: r, correct: i }),
              (0, s.jsx)('div', {
                className: 'flex justify-center mt-8',
                children: (0, s.jsx)(components_KakaoAdFit, {
                  adUnit: 'DAN-Pq5AyOvOFZlvf0hd',
                  width: 250,
                  height: 250,
                }),
              }),
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
