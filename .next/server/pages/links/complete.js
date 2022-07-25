'use strict';
(() => {
  var exports = {};
  exports.id = 553;
  exports.ids = [553];
  exports.modules = {
    /***/ 1810: /***/ (
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
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(1377);
      /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_i18next__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(9003);
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );

      const STEP_ITEMS = [
        {
          id: 'link',
          textId: 'steps.one',
        },
        {
          id: 'quiz',
          textId: 'steps.two',
        },
        {
          id: 'complete',
          textId: 'steps.three',
        },
      ];
      function Steps({ step }) {
        const { t } = (0,
        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('links');
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          'ul',
          {
            className: 'steps w-96',
            children: STEP_ITEMS.map((item, index) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'li',
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                    'step',
                    step > index && 'step-primary',
                  ),
                  children: t(item.textId),
                },
                item.id,
              ),
            ),
          },
        );
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Steps;

      /***/
    },

    /***/ 9231: /***/ (
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
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(1853);
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(1664);
      /* harmony import */ var components_Steps__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(1810);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(6689);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */ var components_ShareButton__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(9306);

      function LinkComplete() {
        const { t } = (0,
        next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
        const { 0: copied, 1: setCopied } = (0,
        react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
        const router = (0,
        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
        const {
          query: { link = '' },
        } = router;
        const handleCopyClick = async () => {
          await navigator.clipboard.writeText(link);
          setCopied(true);
        };
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: 'flex flex-col items-center gap-y-4',
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              components_Steps__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
              {
                step: 3,
              },
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              next_link__WEBPACK_IMPORTED_MODULE_4__['default'],
              {
                href: link,
                passHref: true,
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'a',
                    {
                      className: 'link link-accent',
                      children: link,
                    },
                  ),
              },
            ),
            /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'indicator',
              children: [
                copied &&
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'span',
                    {
                      className: 'indicator-item',
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'span',
                          {
                            className:
                              'badge badge-secondary animate-head-shake',
                            children: t('copied'),
                          },
                        ),
                    },
                  ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  components_ShareButton__WEBPACK_IMPORTED_MODULE_7__ /* ["default"] */.Z,
                  {},
                ),
              ],
            }),
          ],
        });
      }
      const getServerSideProps = async ({ locale = 'ko' }) => {
        return {
          props: {
            ...(await (0,
            next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(
              locale,
              ['common'],
            )),
          },
        };
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        LinkComplete;

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
  var __webpack_require__ = require('../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [730, 664, 306], () =>
    __webpack_exec__(9231),
  );
  module.exports = __webpack_exports__;
})();
