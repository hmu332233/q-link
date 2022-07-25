(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [598],
  {
    505: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/links/new',
        function () {
          return n(8932);
        },
      ]);
    },
    1197: function (e, t, n) {
      'use strict';
      var r = n(5893),
        a = (n(7294), n(273));
      t.Z = function (e) {
        var t = e.label,
          n = e.feedback,
          c = e.name,
          l = e.placeholder,
          o = e.type,
          i = void 0 === o ? 'text' : o,
          s = e.required;
        return (0, r.jsx)(a.Z, {
          label: t,
          feedback: n,
          children: (0, r.jsx)('input', {
            className: 'input input-bordered w-full',
            type: i,
            name: c,
            placeholder: l,
            required: s,
          }),
        });
      };
    },
    273: function (e, t, n) {
      'use strict';
      var r = n(5893);
      n(7294);
      t.Z = function (e) {
        var t = e.children,
          n = e.label,
          a = e.feedback;
        return (0, r.jsxs)('div', {
          className: 'form-control',
          children: [
            n &&
              (0, r.jsx)('label', {
                className: 'label',
                children: (0, r.jsx)('span', {
                  className: 'label-text text-lg font-semibold',
                  children: n,
                }),
              }),
            t,
            a &&
              (0, r.jsx)('label', {
                className: 'label',
                children: (0, r.jsx)('span', {
                  className: 'label-text-alt',
                  children: a,
                }),
              }),
          ],
        });
      };
    },
    108: function (e, t, n) {
      'use strict';
      var r = n(5893),
        a = n(7294),
        c = n(4184),
        l = n.n(c);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++)
              (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      t.Z = function (e) {
        var t = e.className,
          n = e.children,
          c = e.onClick,
          s = i(e, ['className', 'children', 'onClick']),
          u = (0, a.useState)(!1),
          f = u[0],
          p = u[1];
        return (0, r.jsx)(
          'button',
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              'function' === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  }),
                )),
                r.forEach(function (t) {
                  o(e, t, n[t]);
                });
            }
            return e;
          })(
            {
              className: l()('btn', f && 'loading', t),
              onClick: function (e) {
                p(!0), c && c(e);
              },
            },
            s,
            { children: f || n },
          ),
        );
      };
    },
    6402: function (e, t, n) {
      'use strict';
      var r = n(5893),
        a = (n(7294), n(4816)),
        c = n(2355),
        l = n(3483),
        o = n(9623);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              s(e, t, n[t]);
            });
        }
        return e;
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++)
              (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function p(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                a,
                c = [],
                l = !0,
                o = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (c.push(r.value), !t || c.length !== t);
                  l = !0
                );
              } catch (i) {
                (o = !0), (a = i);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (o) throw a;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(n);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return i(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      t.Z = function (e) {
        var t = e.contents;
        return (0, r.jsx)('article', {
          className: 'prose w-full max-w-lg',
          children: (0, r.jsx)(a.D, {
            remarkPlugins: [c.Z],
            components: {
              code: function (e) {
                e.node;
                var t = e.inline,
                  n = e.className,
                  a = e.children,
                  c = f(e, ['node', 'inline', 'className', 'children']);
                if (t)
                  return (0, r.jsx)(
                    'code',
                    u({ className: n }, c, { children: a }),
                  );
                var i = p(/language-(\w+)/.exec(n || '') || [], 2)[1];
                return (0, r.jsx)(
                  l.Z,
                  u({ style: o.Z, language: i || 'text', PreTag: 'div' }, c, {
                    children: String(a).replace(/\n$/, ''),
                  }),
                );
              },
            },
            children: t,
          }),
        });
      };
    },
    1810: function (e, t, n) {
      'use strict';
      var r = n(5893),
        a = n(1538),
        c = n(4184),
        l = n.n(c),
        o = [
          { id: 'link', textId: 'steps.one' },
          { id: 'quiz', textId: 'steps.two' },
          { id: 'complete', textId: 'steps.three' },
        ];
      t.Z = function (e) {
        var t = e.step,
          n = (0, a.$G)('links').t;
        return (0, r.jsx)('ul', {
          className: 'steps w-96',
          children: o.map(function (e, a) {
            return (0,
            r.jsx)('li', { className: l()('step', t > a && 'step-primary'), children: n(e.textId) }, e.id);
          }),
        });
      };
    },
    8932: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return j;
          },
          default: function () {
            return g;
          },
        });
      var r = n(4051),
        a = n.n(r),
        c = n(5893),
        l = n(7294),
        o = n(1163),
        i = n(9669),
        s = n.n(i),
        u = n(1810),
        f = n(1538),
        p = n(1197),
        b = n(6402),
        d = n(273),
        m = n(108);
      var y = {
        Step1: function (e) {
          var t = e.onNextClick,
            n = (0, f.$G)().t;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)('form', {
                className: 'w-full max-w-lg',
                id: 'step1',
                onSubmit: function (e) {
                  e.preventDefault();
                  var n = new FormData(e.currentTarget),
                    r = Object.fromEntries(n).url;
                  t({ url: r });
                },
                children: (0, c.jsx)(p.Z, {
                  label: 'Link',
                  feedback: (0, c.jsxs)(f.cC, {
                    i18nKey: 'links:stepBody.step1.feedback1',
                    children: [
                      '\uc815\ub2f5\uc744 \ub9de\ud614\uc744 \ub54c \uc774\ub3d9\ud560 \ub9c1\ud06c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.',
                      (0, c.jsx)('br', {}),
                      '\uc774\ub3d9\ud560 \ub9c1\ud06c\uac00 \uc5c6\ub2e4\uba74',
                      ' ',
                      (0, c.jsx)('a', {
                        className: 'link',
                        href: 'https://celebration.minung.dev',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'celebration.minung.dev',
                      }),
                      '\ub97c \ud65c\uc6a9\ud574\ubcf4\uc138\uc694.',
                    ],
                  }),
                  name: 'url',
                  type: 'url',
                  placeholder: 'https://aaaa.com/bbbb',
                  required: !0,
                }),
              }),
              (0, c.jsx)('button', {
                className: 'btn btn-wide',
                type: 'submit',
                form: 'step1',
                children: n('common:next'),
              }),
            ],
          });
        },
        Step2: function (e) {
          var t = e.onNextClick,
            n = (0, f.$G)().t,
            r = (0, l.useState)(!1),
            a = (r[0], r[1]),
            o = (0, l.useState)(n('links:stepBody.step2.example')),
            i = o[0],
            s = o[1];
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsxs)('form', {
                className: 'w-full max-w-lg',
                id: 'step2',
                onSubmit: function (e) {
                  e.preventDefault();
                  var n = new FormData(e.currentTarget),
                    r = Object.fromEntries(n),
                    c = r.correct,
                    l = r.contents;
                  t({ correct: c, contents: l }), a(!0);
                },
                children: [
                  (0, c.jsx)(p.Z, {
                    label: 'Correct',
                    feedback: n('links:stepBody.step2.feedback1'),
                    name: 'correct',
                    placeholder: '',
                    required: !0,
                  }),
                  (0, c.jsx)(d.Z, {
                    label: 'Quiz Contents',
                    feedback: n('links:stepBody.step2.feedback2'),
                    children: (0, c.jsx)('textarea', {
                      className: 'textarea w-full h-48 textarea-bordered',
                      name: 'contents',
                      placeholder: '',
                      value: i,
                      onChange: function (e) {
                        var t = e.currentTarget.value;
                        s(t);
                      },
                      required: !0,
                    }),
                  }),
                ],
              }),
              (0, c.jsx)(b.Z, { contents: i }),
              (0, c.jsx)(m.Z, {
                className: 'btn-wide',
                type: 'submit',
                form: 'step2',
                children: n('common:next'),
              }),
            ],
          });
        },
      };
      function h(e, t, n, r, a, c, l) {
        try {
          var o = e[c](l),
            i = o.value;
        } catch (s) {
          return void n(s);
        }
        o.done ? t(i) : Promise.resolve(i).then(r, a);
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              v(e, t, n[t]);
            });
        }
        return e;
      }
      var j = !0,
        g = function () {
          var e = (0, o.useRouter)(),
            t = (0, l.useState)(1),
            n = t[0],
            r = t[1],
            i = (0, l.useState)({}),
            f = i[0],
            p = i[1],
            b = (function () {
              var t,
                c =
                  ((t = a().mark(function t(c) {
                    var l, o, i, u, b;
                    return a().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((l = n + 1), (o = x({}, f, c)), 3 !== l)) {
                                t.next = 16;
                                break;
                              }
                              return (
                                (t.prev = 3),
                                (t.next = 6),
                                s().post('/api/links', o)
                              );
                            case 6:
                              (i = t.sent),
                                (u = i.data),
                                (b = u.data),
                                e.push(
                                  {
                                    pathname: '/links/complete',
                                    query: {
                                      link: ''
                                        .concat(location.origin, '/links/')
                                        .concat(b),
                                    },
                                  },
                                  '/link/complete',
                                ),
                                (t.next = 15);
                              break;
                            case 12:
                              (t.prev = 12),
                                (t.t0 = t.catch(3)),
                                console.error(t.t0);
                            case 15:
                              return t.abrupt('return');
                            case 16:
                              r(l), p(o);
                            case 18:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[3, 12]],
                    );
                  })),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (r, a) {
                      var c = t.apply(e, n);
                      function l(e) {
                        h(c, r, a, l, o, 'next', e);
                      }
                      function o(e) {
                        h(c, r, a, l, o, 'throw', e);
                      }
                      l(void 0);
                    });
                  });
              return function (e) {
                return c.apply(this, arguments);
              };
            })(),
            d = y['Step'.concat(n)];
          return (0, c.jsxs)('div', {
            className: 'flex flex-col items-center gap-y-4',
            children: [
              (0, c.jsx)(u.Z, { step: n }),
              (0, c.jsx)(d, { onNextClick: b }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [576, 669, 774, 888, 179], function () {
      return (t = 505), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
