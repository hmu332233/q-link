(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(5075);
        },
      ]);
    },
    108: function (e, n, t) {
      'use strict';
      var r = t(5893),
        l = t(7294),
        c = t(4184),
        s = t.n(c);
      function i(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function a(e, n) {
        if (null == e) return {};
        var t,
          r,
          l = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              l = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++)
              (t = c[r]), n.indexOf(t) >= 0 || (l[t] = e[t]);
            return l;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (t = c[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (l[t] = e[t]));
        }
        return l;
      }
      n.Z = function (e) {
        var n = e.className,
          t = e.children,
          c = e.onClick,
          o = a(e, ['className', 'children', 'onClick']),
          u = (0, l.useState)(!1),
          f = u[0],
          d = u[1];
        return (0, r.jsx)(
          'button',
          (function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                r = Object.keys(t);
              'function' === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  }),
                )),
                r.forEach(function (n) {
                  i(e, n, t[n]);
                });
            }
            return e;
          })(
            {
              className: s()('btn', f && 'loading', n),
              onClick: function (e) {
                d(!0), c && c(e);
              },
            },
            o,
            { children: f || t },
          ),
        );
      };
    },
    5075: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return a;
          },
        });
      var r = t(5893),
        l = t(1538),
        c = t(1664),
        s = t(108),
        i = t(5479);
      var a = !0;
      n.default = function () {
        var e = (0, l.$G)('main').t;
        return (0, r.jsx)('div', {
          className: 'flex flex-col items-center gap-y-8',
          children: (0, r.jsx)('div', {
            className: 'hero min-h-screen',
            children: (0, r.jsx)('div', {
              className: 'hero-content w-full text-center mb-24',
              children: (0, r.jsxs)('div', {
                className: 'w-full',
                children: [
                  (0, r.jsx)('h1', {
                    className: 'text-4xl font-bold text-base-content ',
                    children: (0, r.jsx)(c.default, {
                      href: '/',
                      children: (0, r.jsxs)('a', {
                        children: [
                          (0, r.jsx)('span', {
                            className: 'text-primary',
                            children: 'Q.',
                          }),
                          'Link',
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsx)('p', {
                    className: 'py-6 whitespace-pre-line',
                    children: e('description'),
                  }),
                  (0, r.jsxs)('div', {
                    className: 'flex w-full',
                    children: [
                      (0, r.jsx)(c.default, {
                        href: '/links/new',
                        children: (0, r.jsx)('a', {
                          className: 'btn btn-primary flex-1',
                          children: e('button.create'),
                        }),
                      }),
                      (0, r.jsx)(c.default, {
                        href: '/intro',
                        children: (0, r.jsx)('a', {
                          className: 'btn flex-1 ml-3',
                          children: e('button.what'),
                        }),
                      }),
                      (0, r.jsx)(c.default, {
                        href: e('demoUrl'),
                        passHref: !0,
                        children: (0, r.jsx)(s.Z, {
                          className: 'btn-outline flex-1 ml-3',
                          children: e('button.demo'),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)('div', {
                    className: 'flex justify-center w-full mt-4',
                    children: (0, r.jsx)(i.Z, {}),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (n = 5301), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
