(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [553],
  {
    5252: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/links/complete',
        function () {
          return t(9231);
        },
      ]);
    },
    9306: function (n, e, t) {
      'use strict';
      var r = t(4051),
        i = t.n(r),
        a = t(5893),
        s = t(1538),
        c = t(4184),
        o = t.n(c);
      function u(n, e, t, r, i, a, s) {
        try {
          var c = n[a](s),
            o = c.value;
        } catch (u) {
          return void t(u);
        }
        c.done ? e(o) : Promise.resolve(o).then(r, i);
      }
      e.Z = function (n) {
        var e = n.outline,
          t = (0, s.$G)().t,
          r = (function () {
            var n,
              e =
                ((n = i().mark(function n() {
                  var e, r;
                  return i().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((e = 'undefined' !== typeof navigator.share),
                            (r = location.href),
                            !e)
                          ) {
                            n.next = 7;
                            break;
                          }
                          return (
                            (n.next = 5),
                            navigator.share({ title: 'Q.Link', url: r })
                          );
                        case 5:
                          n.next = 10;
                          break;
                        case 7:
                          return (n.next = 9), navigator.clipboard.writeText(r);
                        case 9:
                          alert(t('common:copied'));
                        case 10:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                })),
                function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (r, i) {
                    var a = n.apply(e, t);
                    function s(n) {
                      u(a, r, i, s, c, 'next', n);
                    }
                    function c(n) {
                      u(a, r, i, s, c, 'throw', n);
                    }
                    s(void 0);
                  });
                });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, a.jsx)('button', {
          className: o()('btn btn-wide', e && 'btn-outline'),
          onClick: r,
          children: t('common:share'),
        });
      };
    },
    1810: function (n, e, t) {
      'use strict';
      var r = t(5893),
        i = t(1538),
        a = t(4184),
        s = t.n(a),
        c = [
          { id: 'link', textId: 'steps.one' },
          { id: 'quiz', textId: 'steps.two' },
          { id: 'complete', textId: 'steps.three' },
        ];
      e.Z = function (n) {
        var e = n.step,
          t = (0, i.$G)('links').t;
        return (0, r.jsx)('ul', {
          className: 'steps w-96',
          children: c.map(function (n, i) {
            return (0,
            r.jsx)('li', { className: s()('step', e > i && 'step-primary'), children: t(n.textId) }, n.id);
          }),
        });
      };
    },
    9231: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          __N_SSP: function () {
            return p;
          },
        });
      var r = t(4051),
        i = t.n(r),
        a = t(5893),
        s = t(1538),
        c = t(1163),
        o = t(1664),
        u = t(1810),
        l = t(7294),
        d = t(9306);
      function f(n, e, t, r, i, a, s) {
        try {
          var c = n[a](s),
            o = c.value;
        } catch (u) {
          return void t(u);
        }
        c.done ? e(o) : Promise.resolve(o).then(r, i);
      }
      var p = !0;
      e.default = function () {
        var n = (0, s.$G)('common').t,
          e = (0, l.useState)(!1),
          t = e[0],
          r = e[1],
          p = (0, c.useRouter)().query.link,
          v = void 0 === p ? '' : p;
        return (
          (function () {
            var n,
              e =
                ((n = i().mark(function n() {
                  return i().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), navigator.clipboard.writeText(v);
                        case 2:
                          r(!0);
                        case 3:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                })),
                function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (r, i) {
                    var a = n.apply(e, t);
                    function s(n) {
                      f(a, r, i, s, c, 'next', n);
                    }
                    function c(n) {
                      f(a, r, i, s, c, 'throw', n);
                    }
                    s(void 0);
                  });
                });
          })(),
          (0, a.jsxs)('div', {
            className: 'flex flex-col items-center gap-y-4',
            children: [
              (0, a.jsx)(u.Z, { step: 3 }),
              (0, a.jsx)(o.default, {
                href: v,
                passHref: !0,
                children: (0, a.jsx)('a', {
                  className: 'link link-accent',
                  children: v,
                }),
              }),
              (0, a.jsxs)('div', {
                className: 'indicator',
                children: [
                  t &&
                    (0, a.jsx)('span', {
                      className: 'indicator-item',
                      children: (0, a.jsx)('span', {
                        className: 'badge badge-secondary animate-head-shake',
                        children: n('copied'),
                      }),
                    }),
                  (0, a.jsx)(d.Z, {}),
                ],
              }),
            ],
          })
        );
      };
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (e = 5252), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
