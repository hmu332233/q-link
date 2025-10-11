'use strict';
(exports.id = 207),
  (exports.ids = [207]),
  (exports.modules = {
    1207: (e, t, s) => {
      s.r(t), s.d(t, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
      var a = s(997),
        r = s(6859);
      let __WEBPACK_DEFAULT_EXPORT__ = function () {
        return (0, a.jsxs)(r.Html, {
          'data-theme': 'bumblebee',
          children: [
            (0, a.jsxs)(r.Head, {
              children: [
                a.jsx('script', {
                  async: !0,
                  src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`,
                }),
                a.jsx('script', {
                  dangerouslySetInnerHTML: {
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_ID}');
            `,
                  },
                }),
                a.jsx('link', {
                  rel: 'stylesheet',
                  as: 'style',
                  crossOrigin: '',
                  href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
                }),
                a.jsx('meta', {
                  name: 'viewport',
                  content:
                    'width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;',
                }),
              ],
            }),
            (0, a.jsxs)('body', {
              children: [a.jsx(r.Main, {}), a.jsx(r.NextScript, {})],
            }),
          ],
        });
      };
    },
  });
