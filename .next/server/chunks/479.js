'use strict';
exports.id = 479;
exports.ids = [479];
exports.modules = {
  /***/ 5479: /***/ (
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
    /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(1664);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(1853);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_3__,
      );
    /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(9003);
    /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        classnames__WEBPACK_IMPORTED_MODULE_4__,
      );

    const ITEMS = [
      {
        locale: 'en',
        text: 'English',
      },
      {
        locale: 'ko',
        text: '한국어',
      },
      {
        locale: 'ms',
        text: 'Bahasa Melayu',
      },
      {
        locale: 'tr',
        text: 'T\xfcrk\xe7e',
      },
    ];
    function LanguageSelector({ className }) {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(
          className,
          'dropdown dropdown-end',
        ),
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'label',
            {
              tabIndex: 0,
              className: 'btn btn-ghost m-1',
              children: 'Language',
            },
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'ul',
            {
              tabIndex: 0,
              className:
                'dropdown-content menu bg-base-100 w-56 rounded-box shadow',
              children: ITEMS.map((item) =>
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'li',
                  {
                    children:
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        next_link__WEBPACK_IMPORTED_MODULE_2__['default'],
                        {
                          href: router.asPath,
                          locale: item.locale,
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'a',
                              {
                                className:
                                  classnames__WEBPACK_IMPORTED_MODULE_4___default()(
                                    router.locale === item.locale && 'active',
                                  ),
                                children: item.text,
                              },
                            ),
                        },
                      ),
                  },
                  item.locale,
                ),
              ),
            },
          ),
        ],
      });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      LanguageSelector;

    /***/
  },
};
