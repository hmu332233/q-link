'use strict';
(exports.id = 387),
  (exports.ids = [387]),
  (exports.modules = {
    7851: (e, t, n) => {
      n.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var s = n(997);
      n(6689);
      var o = n(1664),
        r = n.n(o),
        a = n(1163),
        l = n(9003),
        c = n.n(l);
      let i = [
          { locale: 'en', text: 'English' },
          { locale: 'ko', text: '한국어' },
          { locale: 'ms', text: 'Bahasa Melayu' },
          { locale: 'tr', text: 'T\xfcrk\xe7e' },
          { locale: 'zh-CN', text: '简体中文' },
        ],
        __WEBPACK_DEFAULT_EXPORT__ = function ({ className: e }) {
          let t = (0, a.useRouter)();
          return (0, s.jsxs)('div', {
            className: c()(e, 'dropdown dropdown-end'),
            children: [
              s.jsx('label', {
                tabIndex: 0,
                className: 'btn btn-ghost m-1',
                children: 'Language',
              }),
              s.jsx('ul', {
                tabIndex: 0,
                className:
                  'dropdown-content menu bg-base-100 w-56 rounded-box shadow',
                children: i.map((e) =>
                  s.jsx(
                    'li',
                    {
                      children: s.jsx(r(), {
                        href: t.asPath,
                        locale: e.locale,
                        className: c()(t.locale === e.locale && 'active'),
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
    5387: (e, t, n) => {
      n.d(t, { Z: () => components_Layout });
      var s = n(997);
      n(6689);
      var o = n(9003),
        r = n.n(o),
        a = n(968),
        l = n.n(a),
        c = n(1377);
      let components_Seo = function ({}) {
        let { t: e } = (0, c.useTranslation)();
        return (0, s.jsxs)(l(), {
          children: [
            s.jsx('title', { children: 'Q.Link' }),
            s.jsx('meta', {
              name: 'description',
              content: e('common:seo.description'),
            }),
            s.jsx('meta', {
              name: 'keywords',
              content: e('common:seo.keywords'),
            }),
            s.jsx('meta', { property: 'og:type', content: 'website' }),
            s.jsx('meta', { property: 'og:title', content: 'Q.Link' }),
            s.jsx('meta', {
              property: 'og:description',
              content: e('common:seo.description'),
            }),
            s.jsx('meta', {
              property: 'og:url',
              content: 'https://q-link.minung.dev',
            }),
          ],
        });
      };
      var i = n(1664),
        x = n.n(i),
        m = n(7851);
      let components_Header = function ({}) {
          return (0, s.jsxs)('header', {
            className: 'p-4 flex items-center relative',
            children: [
              s.jsx('h1', {
                className:
                  'text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                children: (0, s.jsxs)(x(), {
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
              s.jsx(m.Z, { className: 'ml-auto' }),
            ],
          });
        },
        components_Footer = function () {
          return s.jsx('footer', {
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
                    s.jsx('a', {
                      className: 'link link-hover',
                      href: 'https://github.com/hmu332233',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Minung Han',
                    }),
                  ],
                }),
                s.jsx('div', {
                  className: 'ml-auto',
                  children: s.jsx('a', {
                    href: 'https://github.com/hmu332233/q-link',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: s.jsx('svg', {
                      className: 'fill-current',
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '24',
                      height: '24',
                      viewBox: '0 0 24 24',
                      children: s.jsx('path', {
                        d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        components_Layout = function ({
          children: e,
          hideHeader: t,
          fluid: n,
        }) {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              s.jsx(components_Seo, {}),
              (0, s.jsxs)('div', {
                className: 'flex flex-col min-h-screen',
                children: [
                  t || s.jsx(components_Header, {}),
                  s.jsx('main', {
                    className: r()('grow', n ? 'container-fluid' : 'container'),
                    children: e,
                  }),
                  s.jsx(components_Footer, {}),
                ],
              }),
            ],
          });
        };
    },
  });
