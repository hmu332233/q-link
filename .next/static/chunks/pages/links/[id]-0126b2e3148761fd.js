(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [927],
  {
    7329: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/links/[id]',
        function () {
          return r(735);
        },
      ]);
    },
    1197: function (e, n, r) {
      'use strict';
      var t = r(5893),
        a = (r(7294), r(273));
      n.Z = function (e) {
        var n = e.label,
          r = e.feedback,
          c = e.name,
          i = e.placeholder,
          o = e.type,
          l = void 0 === o ? 'text' : o,
          u = e.required;
        return (0, t.jsx)(a.Z, {
          label: n,
          feedback: r,
          children: (0, t.jsx)('input', {
            className: 'input input-bordered w-full',
            type: l,
            name: c,
            placeholder: i,
            required: u,
          }),
        });
      };
    },
    273: function (e, n, r) {
      'use strict';
      var t = r(5893);
      r(7294);
      n.Z = function (e) {
        var n = e.children,
          r = e.label,
          a = e.feedback;
        return (0, t.jsxs)('div', {
          className: 'form-control',
          children: [
            r &&
              (0, t.jsx)('label', {
                className: 'label',
                children: (0, t.jsx)('span', {
                  className: 'label-text text-lg font-semibold',
                  children: r,
                }),
              }),
            n,
            a &&
              (0, t.jsx)('label', {
                className: 'label',
                children: (0, t.jsx)('span', {
                  className: 'label-text-alt',
                  children: a,
                }),
              }),
          ],
        });
      };
    },
    6402: function (e, n, r) {
      'use strict';
      var t = r(5893),
        a = (r(7294), r(4816)),
        c = r(2355),
        i = r(3483),
        o = r(9623);
      function l(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
        return t;
      }
      function u(e, n, r) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = r),
          e
        );
      }
      function s(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              }),
            )),
            t.forEach(function (n) {
              u(e, n, r[n]);
            });
        }
        return e;
      }
      function f(e, n) {
        if (null == e) return {};
        var r,
          t,
          a = (function (e, n) {
            if (null == e) return {};
            var r,
              t,
              a = {},
              c = Object.keys(e);
            for (t = 0; t < c.length; t++)
              (r = c[t]), n.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (t = 0; t < c.length; t++)
            (r = c[t]),
              n.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      function d(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var t,
                a,
                c = [],
                i = !0,
                o = !1;
              try {
                for (
                  r = r.call(e);
                  !(i = (t = r.next()).done) &&
                  (c.push(t.value), !n || c.length !== n);
                  i = !0
                );
              } catch (l) {
                (o = !0), (a = l);
              } finally {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (o) throw a;
                }
              }
              return c;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ('string' === typeof e) return l(e, n);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(r);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return l(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      n.Z = function (e) {
        var n = e.contents;
        return (0, t.jsx)('article', {
          className: 'prose w-full max-w-lg',
          children: (0, t.jsx)(a.D, {
            remarkPlugins: [c.Z],
            components: {
              code: function (e) {
                e.node;
                var n = e.inline,
                  r = e.className,
                  a = e.children,
                  c = f(e, ['node', 'inline', 'className', 'children']);
                if (n)
                  return (0, t.jsx)(
                    'code',
                    s({ className: r }, c, { children: a }),
                  );
                var l = d(/language-(\w+)/.exec(r || '') || [], 2)[1];
                return (0, t.jsx)(
                  i.Z,
                  s({ style: o.Z, language: l || 'text', PreTag: 'div' }, c, {
                    children: String(a).replace(/\n$/, ''),
                  }),
                );
              },
            },
            children: n,
          }),
        });
      };
    },
    4140: function (e, n, r) {
      'use strict';
      r.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = r(5893),
        a = r(7294),
        c = r(1664),
        i = r(1538),
        o = r(1197),
        l = r(6402);
      var u = function (e) {
          var n = e.isCorrect,
            r = (0, i.$G)('links').t;
          return (0, t.jsx)('span', {
            className: 'countdown whitespace-pre',
            children: r(n ? 'feedback.correct' : 'feedback.fail'),
          });
        },
        s = r(9306);
      var f = function (e) {
        var n = e.url,
          r = e.contents,
          f = e.correct,
          d = (0, i.$G)().t,
          m = (0, a.useState)(!1),
          b = m[0],
          h = m[1],
          p = (0, a.useState)(!1),
          v = p[0],
          x = p[1];
        return (
          (0, a.useEffect)(
            function () {
              if (b) {
                var e = setTimeout(function () {
                  location.href = n;
                }, 4500);
                return function () {
                  return clearTimeout(e);
                };
              }
            },
            [b, n],
          ),
          (0, t.jsxs)('div', {
            className: 'flex flex-col items-center gap-y-4',
            children: [
              (0, t.jsx)(l.Z, { contents: r }),
              (0, t.jsx)('form', {
                className: 'w-full max-w-lg',
                id: 'answer',
                onSubmit: function (e) {
                  e.preventDefault();
                  var n = new FormData(e.currentTarget),
                    r = Object.fromEntries(n).answer;
                  h(f === r), x(!0);
                },
                children: (0, t.jsx)(o.Z, {
                  name: 'answer',
                  placeholder: d('common:contents.answerPlaceholder'),
                  feedback: v ? (0, t.jsx)(u, { isCorrect: b }) : void 0,
                }),
              }),
              (0, t.jsx)('button', {
                className: 'btn btn-wide',
                type: 'submit',
                form: 'answer',
                children: d('common:submit'),
              }),
              (0, t.jsx)(s.Z, { outline: !0 }),
              (0, t.jsx)(c.default, {
                href: '/links/new',
                children: (0, t.jsx)('a', {
                  className: 'link',
                  children: d('common:contents.createLink'),
                }),
              }),
            ],
          })
        );
      };
    },
    9306: function (e, n, r) {
      'use strict';
      var t = r(4051),
        a = r.n(t),
        c = r(5893),
        i = r(1538),
        o = r(4184),
        l = r.n(o);
      function u(e, n, r, t, a, c, i) {
        try {
          var o = e[c](i),
            l = o.value;
        } catch (u) {
          return void r(u);
        }
        o.done ? n(l) : Promise.resolve(l).then(t, a);
      }
      n.Z = function (e) {
        var n = e.outline,
          r = (0, i.$G)().t,
          t = (function () {
            var e,
              n =
                ((e = a().mark(function e() {
                  var n, t;
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = 'undefined' !== typeof navigator.share),
                            (t = location.href),
                            !n)
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 5),
                            navigator.share({ title: 'Q.Link', url: t })
                          );
                        case 5:
                          e.next = 10;
                          break;
                        case 7:
                          return (e.next = 9), navigator.clipboard.writeText(t);
                        case 9:
                          alert(r('common:copied'));
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })),
                function () {
                  var n = this,
                    r = arguments;
                  return new Promise(function (t, a) {
                    var c = e.apply(n, r);
                    function i(e) {
                      u(c, t, a, i, o, 'next', e);
                    }
                    function o(e) {
                      u(c, t, a, i, o, 'throw', e);
                    }
                    i(void 0);
                  });
                });
            return function () {
              return n.apply(this, arguments);
            };
          })();
        return (0, c.jsx)('button', {
          className: l()('btn btn-wide', n && 'btn-outline'),
          onClick: t,
          children: r('common:share'),
        });
      };
    },
    735: function (e, n, r) {
      'use strict';
      r.r(n),
        r.d(n, {
          __N_SSP: function () {
            return i;
          },
        });
      var t = r(5893),
        a = r(9008),
        c = r(4140);
      var i = !0;
      n.default = function (e) {
        var n = e.id,
          r = e.url,
          i = e.contents,
          o = e.correct;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(a.default, {
              children: (0, t.jsxs)('title', { children: ['Q.Link - ', n] }),
            }),
            (0, t.jsx)(c.Z, { url: r, contents: i, correct: o }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [576, 774, 888, 179], function () {
      return (n = 7329), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
