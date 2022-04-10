"use strict";
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 4385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function FeedbackMessage({ isCorrect  }) {
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isCorrect) return;
        setCount((v)=>v - 1
        );
        const intervalId = setInterval(()=>{
            setCount((v)=>v - 1
            );
        }, 1000);
        return ()=>clearInterval(intervalId)
        ;
    }, [
        isCorrect
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "countdown whitespace-pre",
        children: isCorrect ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "정답입니다! ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        '--value': count
                    }
                }),
                "초 뒤에 링크로 이동합니다"
            ]
        }) : '오답입니다.'
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedbackMessage);


/***/ }),

/***/ 2890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var components_DefaultInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1197);
/* harmony import */ var components_MarkdownView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6402);
/* harmony import */ var components_FeedbackMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4385);
/* harmony import */ var components_ShareButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9306);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_MarkdownView__WEBPACK_IMPORTED_MODULE_4__]);
components_MarkdownView__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function QLinkContents({ url , contents , correct  }) {
    const { 0: isCorrect , 1: setIsCorrect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showFeedback , 1: setShowFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { answer  } = Object.fromEntries(formData);
        setIsCorrect(correct === answer);
        setShowFeedback(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isCorrect) return;
        const timeoutId = setTimeout(()=>{
            location.href = url;
        }, 4500);
        return ()=>clearTimeout(timeoutId)
        ;
    }, [
        isCorrect,
        url
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center gap-y-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MarkdownView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                contents: contents
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                className: "w-full max-w-lg",
                id: "answer",
                onSubmit: handleSubmit,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_DefaultInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    name: "answer",
                    placeholder: "정답을 입력해주세요.",
                    feedback: showFeedback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_FeedbackMessage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        isCorrect: isCorrect
                    }) : undefined
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn btn-wide",
                type: "submit",
                form: "answer",
                children: "확인"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ShareButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/links/new",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "link",
                    children: "링크 직접 만들어보기"
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QLinkContents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ShareButton({}) {
    const handleClick = async ()=>{
        const isAvailable = typeof navigator.share !== 'undefined';
        const url = location.href;
        if (isAvailable) {
            await navigator.share({
                title: 'Q.Link',
                url
            });
        } else {
            // share api 지원하지 않을시 clipboard 복사로 대체
            await navigator.clipboard.writeText(url);
            alert('링크가 복사되었습니다!');
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "btn btn-outline btn-wide",
        onClick: handleClick,
        children: "공유"
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButton);


/***/ })

};
;