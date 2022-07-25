'use strict';
(() => {
  var exports = {};
  exports.id = 598;
  exports.ids = [598];
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

    /***/ 645: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__,
        ) => {
          try {
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
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_1__,
              );
            /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(1377);
            /* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_i18next__WEBPACK_IMPORTED_MODULE_2__,
              );
            /* harmony import */ var components_DefaultInput__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(1197);
            /* harmony import */ var components_MarkdownView__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(6402);
            /* harmony import */ var components_FormGroup__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(273);
            /* harmony import */ var _LoadableButton__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(108);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                components_MarkdownView__WEBPACK_IMPORTED_MODULE_4__,
              ]);
            components_MarkdownView__WEBPACK_IMPORTED_MODULE_4__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            function Step1Body({ onNextClick }) {
              const { t } = (0,
              next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
              const handleSubmit = (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const { url } = Object.fromEntries(formData);
                onNextClick({
                  url: url,
                });
              };
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'form',
                      {
                        className: 'w-full max-w-lg',
                        id: 'step1',
                        onSubmit: handleSubmit,
                        children:
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            components_DefaultInput__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                            {
                              label: 'Link',
                              feedback: /*#__PURE__*/ (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                next_i18next__WEBPACK_IMPORTED_MODULE_2__.Trans,
                                {
                                  i18nKey: 'links:stepBody.step1.feedback1',
                                  children: [
                                    '정답을 맞혔을 때 이동할 링크를 입력해 주세요.',
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'br',
                                      {},
                                    ),
                                    '이동할 링크가 없다면',
                                    ' ',
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'a',
                                      {
                                        className: 'link',
                                        href: 'https://celebration.minung.dev',
                                        target: '_blank',
                                        rel: 'noreferrer',
                                        children: 'celebration.minung.dev',
                                      },
                                    ),
                                    '를 활용해보세요.',
                                  ],
                                },
                              ),
                              name: 'url',
                              type: 'url',
                              placeholder: 'https://aaaa.com/bbbb',
                              required: true,
                            },
                          ),
                      },
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'button',
                      {
                        className: 'btn btn-wide',
                        type: 'submit',
                        form: 'step1',
                        children: t('common:next'),
                      },
                    ),
                  ],
                },
              );
            }
            function Step2Body({ onNextClick }) {
              const { t } = (0,
              next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
              const { 0: isLoading, 1: setIsLoading } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
              const { 0: value1, 1: setValue } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(
                t('links:stepBody.step2.example'),
              );
              const handleQuizChange = (e) => {
                const {
                  currentTarget: { value },
                } = e;
                setValue(value);
              };
              const handleSubmit = (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const { correct, contents } = Object.fromEntries(formData);
                onNextClick({
                  correct: correct,
                  contents: contents,
                });
                setIsLoading(true);
              };
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'form',
                      {
                        className: 'w-full max-w-lg',
                        id: 'step2',
                        onSubmit: handleSubmit,
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            components_DefaultInput__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                            {
                              label: 'Correct',
                              feedback: t('links:stepBody.step2.feedback1'),
                              name: 'correct',
                              placeholder: '',
                              required: true,
                            },
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            components_FormGroup__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                            {
                              label: 'Quiz Contents',
                              feedback: t('links:stepBody.step2.feedback2'),
                              children:
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                  'textarea',
                                  {
                                    className:
                                      'textarea w-full h-48 textarea-bordered',
                                    name: 'contents',
                                    placeholder: '',
                                    value: value1,
                                    onChange: handleQuizChange,
                                    required: true,
                                  },
                                ),
                            },
                          ),
                        ],
                      },
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      components_MarkdownView__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
                      {
                        contents: value1,
                      },
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _LoadableButton__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                      {
                        className: 'btn-wide',
                        type: 'submit',
                        form: 'step2',
                        children: t('common:next'),
                      },
                    ),
                  ],
                },
              );
            }
            const StepBody = {
              Step1: Step1Body,
              Step2: Step2Body,
            };
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              StepBody;

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        },
      );

      /***/
    },

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

    /***/ 4141: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__,
        ) => {
          try {
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
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(6689);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_1__,
              );
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(1853);
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_router__WEBPACK_IMPORTED_MODULE_2__,
              );
            /* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(5460);
            /* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__,
              );
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(2167);
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default =
              /*#__PURE__*/ __webpack_require__.n(
                axios__WEBPACK_IMPORTED_MODULE_4__,
              );
            /* harmony import */ var components_Steps__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(1810);
            /* harmony import */ var components_StepBody__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(645);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                components_StepBody__WEBPACK_IMPORTED_MODULE_6__,
              ]);
            components_StepBody__WEBPACK_IMPORTED_MODULE_6__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            const LAST_STEP = 3;
            function LinkNew() {
              const router = (0,
              next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
              const { 0: step, 1: setStep } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
              const { 0: quizLink, 1: setQuizLink } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
              const handleNextClick = async (data) => {
                const nextStep = step + 1;
                const newQuizLink = {
                  ...quizLink,
                  ...data,
                };
                if (nextStep === LAST_STEP) {
                  try {
                    const {
                      data: { data: insertedId },
                    } = await axios__WEBPACK_IMPORTED_MODULE_4___default().post(
                      '/api/links',
                      newQuizLink,
                    );
                    router.push(
                      {
                        pathname: '/links/complete',
                        query: {
                          link: `${location.origin}/links/${insertedId}`,
                        },
                      },
                      '/link/complete',
                    );
                  } catch (err) {
                    // TOOD: 에러 처리
                    console.error(err);
                  }
                  return;
                }
                setStep(nextStep);
                setQuizLink(newQuizLink);
              };
              const StepBodyComponent =
                components_StepBody__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */
                  .Z[`Step${step}`];
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'flex flex-col items-center gap-y-4',
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    components_Steps__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                    {
                      step: step,
                    },
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    StepBodyComponent,
                    {
                      onNextClick: handleNextClick,
                    },
                  ),
                ],
              });
            }
            const getServerSideProps = async ({ locale = 'ko' }) => {
              return {
                props: {
                  ...(await (0,
                  next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__.serverSideTranslations)(
                    locale,
                    ['common', 'links'],
                  )),
                },
              };
            };
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              LinkNew;

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        },
      );

      /***/
    },

    /***/ 2167: /***/ (module) => {
      module.exports = require('axios');

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

    /***/ 1853: /***/ (module) => {
      module.exports = require('next/router');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require('react');

      /***/
    },

    /***/ 727: /***/ (module) => {
      module.exports = require('react-syntax-highlighter');

      /***/
    },

    /***/ 2381: /***/ (module) => {
      module.exports = require('react-syntax-highlighter/dist/cjs/styles/prism/tomorrow');

      /***/
    },

    /***/ 997: /***/ (module) => {
      module.exports = require('react/jsx-runtime');

      /***/
    },

    /***/ 3135: /***/ (module) => {
      module.exports = import('react-markdown');

      /***/
    },

    /***/ 6809: /***/ (module) => {
      module.exports = import('remark-gfm');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [385], () =>
    __webpack_exec__(4141),
  );
  module.exports = __webpack_exports__;
})();
