'use strict';
exports.id = 306;
exports.ids = [306];
exports.modules = {
  /***/ 9306: /***/ (
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

    function ShareButton({ outline }) {
      const { t } = (0,
      next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
      const handleClick = async () => {
        const isAvailable = typeof navigator.share !== 'undefined';
        const url = location.href;
        if (isAvailable) {
          await navigator.share({
            title: 'Q.Link',
            url,
          });
        } else {
          // share api 지원하지 않을시 clipboard 복사로 대체
          await navigator.clipboard.writeText(url);
          alert(t('common:copied'));
        }
      };
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        'button',
        {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
            'btn btn-wide',
            outline && 'btn-outline',
          ),
          onClick: handleClick,
          children: t('common:share'),
        },
      );
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ShareButton;

    /***/
  },
};
