'use strict';
(exports.id = 222),
  (exports.ids = [222]),
  (exports.modules = {
    6249: (e, t) => {
      Object.defineProperty(t, 'l', {
        enumerable: !0,
        get: function () {
          return function hoist(e, t) {
            return t in e
              ? e[t]
              : 'then' in e && 'function' == typeof e.then
              ? e.then((e) => hoist(e, t))
              : 'function' == typeof e && 'default' === t
              ? e
              : void 0;
          };
        },
      });
    },
    7153: (e, t) => {
      var n;
      Object.defineProperty(t, 'x', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
        (function (e) {
          (e.PAGES = 'PAGES'),
            (e.PAGES_API = 'PAGES_API'),
            (e.APP_PAGE = 'APP_PAGE'),
            (e.APP_ROUTE = 'APP_ROUTE');
        })(n || (n = {}));
    },
    1802: (e, t, n) => {
      e.exports = n(145);
    },
  });
