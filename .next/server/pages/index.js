'use strict';
(() => {
  var exports = {};
  exports.id = 405;
  exports.ids = [405];
  exports.modules = {
    /***/ 108: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(997);
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(6689);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(9003);
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );

      function LoadableButton({ className, children, onClick, ...props }) {
        const { 0: isLoading, 1: setIsLoading } = (0,
        react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const handleClick = (e) => {
          setIsLoading(true);
          if (onClick) {
            onClick(e);
          }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          'button',
          {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
              'btn',
              isLoading && 'loading',
              className,
            ),
            onClick: handleClick,
            ...props,
            children: isLoading || children,
          },
        );
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        LoadableButton;

      /***/
    },

    /***/ 5075: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getServerSideProps: () =>
          /* binding */ getServerSideProps,
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(997);
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(5460);
      /* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(1377);
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_i18next__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(1664);
      /* harmony import */ var components_LoadableButton__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(108);
      /* harmony import */ var components_LanguageSelector__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(5479);

      function Index() {
        const { t } = (0,
        next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('main');
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          'div',
          {
            className: 'flex flex-col items-center gap-y-8',
            children:
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'div',
                {
                  className: 'hero min-h-screen',
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className: 'hero-content w-full text-center mb-24',
                        children: /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'w-full',
                            children: [
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'h1',
                                {
                                  className:
                                    'text-4xl font-bold text-base-content ',
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      next_link__WEBPACK_IMPORTED_MODULE_3__[
                                        'default'
                                      ],
                                      {
                                        href: '/',
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                          'a',
                                          {
                                            children: [
                                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                'span',
                                                {
                                                  className: 'text-primary',
                                                  children: 'Q.',
                                                },
                                              ),
                                              'Link',
                                            ],
                                          },
                                        ),
                                      },
                                    ),
                                },
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'p',
                                {
                                  className: 'py-6 whitespace-pre-line',
                                  children: t('description'),
                                },
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'div',
                                {
                                  className: 'flex w-full',
                                  children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      next_link__WEBPACK_IMPORTED_MODULE_3__[
                                        'default'
                                      ],
                                      {
                                        href: '/links/new',
                                        children:
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            'a',
                                            {
                                              className:
                                                'btn btn-primary flex-1',
                                              children: t('button.create'),
                                            },
                                          ),
                                      },
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      next_link__WEBPACK_IMPORTED_MODULE_3__[
                                        'default'
                                      ],
                                      {
                                        href: '/intro',
                                        children:
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            'a',
                                            {
                                              className: 'btn flex-1 ml-3',
                                              children: t('button.what'),
                                            },
                                          ),
                                      },
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      next_link__WEBPACK_IMPORTED_MODULE_3__[
                                        'default'
                                      ],
                                      {
                                        href: t('demoUrl'),
                                        passHref: true,
                                        children:
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            components_LoadableButton__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                                            {
                                              className:
                                                'btn-outline flex-1 ml-3',
                                              children: t('button.demo'),
                                            },
                                          ),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'div',
                                {
                                  className: 'flex justify-center w-full mt-4',
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      components_LanguageSelector__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                      {},
                                    ),
                                },
                              ),
                            ],
                          },
                        ),
                      },
                    ),
                },
              ),
          },
        );
      }
      const getServerSideProps = async ({ locale = 'ko' }) => {
        return {
          props: {
            ...(await (0,
            next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(
              locale,
              ['main'],
            )),
          },
        };
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Index;

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

    /***/ 5460: /***/ (module) => {
      module.exports = require('next-i18next/serverSideTranslations');

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
    __webpack_exec__(5075),
  );
  module.exports = __webpack_exports__;
})();
