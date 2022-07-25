'use strict';
(() => {
  var exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {
    /***/ 7211: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ _app,
      });

      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997);
      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689);
      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__(1853);
      // EXTERNAL MODULE: external "next-i18next"
      var external_next_i18next_ = __webpack_require__(1377);
      // EXTERNAL MODULE: external "next/head"
      var head_ = __webpack_require__(968);
      var head_default = /*#__PURE__*/ __webpack_require__.n(head_); // CONCATENATED MODULE: ./components/Seo.tsx
      function Seo({}) {
        const { t } = (0, external_next_i18next_.useTranslation)();
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(head_default(), {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx('title', {
              children: 'Q.Link',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('meta', {
              name: 'description',
              content: t('common:seo.description'),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('meta', {
              name: 'keywords',
              content: t('common:seo.keywords'),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('meta', {
              property: 'og:type',
              content: 'website',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('meta', {
              property: 'og:title',
              content: 'Q.Link',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('meta', {
              property: 'og:description',
              content: t('common:seo.description'),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('meta', {
              property: 'og:url',
              content: 'https://q-link.minung.dev',
            }),
          ],
        });
      }
      /* harmony default export */ const components_Seo = Seo;

      // EXTERNAL MODULE: ./node_modules/next/link.js
      var next_link = __webpack_require__(1664);
      // EXTERNAL MODULE: ./components/LanguageSelector.tsx
      var LanguageSelector = __webpack_require__(5479); // CONCATENATED MODULE: ./components/Header.tsx
      function Header({}) {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('header', {
          className: 'p-4 flex items-center relative',
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx('h1', {
              className:
                'text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
              children: /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                href: '/',
                children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('a', {
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx('span', {
                      className: 'text-primary',
                      children: 'Q.',
                    }),
                    'Link',
                  ],
                }),
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LanguageSelector /* default */.Z, {
              className: 'ml-auto',
            }),
          ],
        });
      }
      /* harmony default export */ const components_Header = Header; // CONCATENATED MODULE: ./components/Footer.tsx

      function Footer() {
        return /*#__PURE__*/ jsx_runtime_.jsx('footer', {
          className: 'mt-16 border-t',
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            className: 'container flex py-4 text-sm',
            children: [
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                className: '',
                children: [
                  '\xa9 2022',
                  ' ',
                  /*#__PURE__*/ jsx_runtime_.jsx('a', {
                    className: 'link link-hover',
                    href: 'https://github.com/hmu332233',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: 'Minung Han',
                  }),
                ],
              }),
              /*#__PURE__*/ jsx_runtime_.jsx('div', {
                className: 'ml-auto',
                children: /*#__PURE__*/ jsx_runtime_.jsx('a', {
                  href: 'https://github.com/hmu332233/q-link',
                  target: '_blank',
                  rel: 'noreferrer',
                  children: /*#__PURE__*/ jsx_runtime_.jsx('svg', {
                    className: 'fill-current',
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '24',
                    height: '24',
                    viewBox: '0 0 24 24',
                    children: /*#__PURE__*/ jsx_runtime_.jsx('path', {
                      d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      /* harmony default export */ const components_Footer = Footer; // CONCATENATED MODULE: ./components/Layout.tsx

      function Layout({ children, hideHeader }) {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Seo, {}),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
              className: 'flex flex-col min-h-screen',
              children: [
                hideHeader ||
                  /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx('main', {
                  className: 'container grow',
                  children: children,
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {}),
              ],
            }),
          ],
        });
      }
      /* harmony default export */ const components_Layout = Layout; // CONCATENATED MODULE: ./libs/gtag/index.ts

      // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
      const pageview = (url) => {
        window.gtag('config', process.env.GA_ID, {
          page_path: url,
        });
      };
      // https://developers.google.com/analytics/devguides/collection/gtagjs/events
      const gtag_event = ({ action, category, label, value }) => {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }; // CONCATENATED MODULE: ./pages/_app.tsx

      function MyApp({ Component, pageProps }) {
        const router = (0, router_.useRouter)();
        (0, external_react_.useEffect)(() => {
          const handleRouteChange = (url) => {
            pageview(url);
          };
          router.events.on('routeChangeComplete', handleRouteChange);
          return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
          };
        }, [router.events]);
        const isRoot = router.pathname === '/';
        return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
          hideHeader: isRoot,
          children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps,
          }),
        });
      }
      /* harmony default export */ const _app = (0,
      external_next_i18next_.appWithTranslation)(MyApp);

      /***/
    },

    /***/ 9003: /***/ (module) => {
      module.exports = require('classnames');

      /***/
    },

    /***/ 1377: /***/ (module) => {
      module.exports = require('next-i18next');

      /***/
    },

    /***/ 562: /***/ (module) => {
      module.exports = require('next/dist/server/denormalize-page-path.js');

      /***/
    },

    /***/ 3539: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/detect-domain-locale.js');

      /***/
    },

    /***/ 4014: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js');

      /***/
    },

    /***/ 8524: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js');

      /***/
    },

    /***/ 8020: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/mitt.js');

      /***/
    },

    /***/ 4964: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router-context.js');

      /***/
    },

    /***/ 9565: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js');

      /***/
    },

    /***/ 4365: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/get-middleware-regex.js');

      /***/
    },

    /***/ 1428: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js');

      /***/
    },

    /***/ 1292: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js');

      /***/
    },

    /***/ 979: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/querystring.js');

      /***/
    },

    /***/ 6052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/resolve-rewrites.js');

      /***/
    },

    /***/ 4226: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js');

      /***/
    },

    /***/ 5052: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/router/utils/route-regex.js');

      /***/
    },

    /***/ 9232: /***/ (module) => {
      module.exports = require('next/dist/shared/lib/utils.js');

      /***/
    },

    /***/ 968: /***/ (module) => {
      module.exports = require('next/head');

      /***/
    },

    /***/ 1853: /***/ (module) => {
      module.exports = require('next/router');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react');

      /***/
    },

    /***/ 997: /***/ (module) => {
      module.exports = require('react/jsx-runtime');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [730, 664, 479], () =>
    __webpack_exec__(7211),
  );
  module.exports = __webpack_exports__;
})();
