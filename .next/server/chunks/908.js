'use strict';
(exports.id = 908),
  (exports.ids = [908]),
  (exports.modules = {
    6908: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return Error;
          },
        });
      let r = n(167),
        l = r._(n(6689)),
        o = r._(n(9201)),
        a = {
          400: 'Bad Request',
          404: 'This page could not be found',
          405: 'Method Not Allowed',
          500: 'Internal Server Error',
        };
      function _getInitialProps(e) {
        let { res: t, err: n } = e,
          r = t && t.statusCode ? t.statusCode : n ? n.statusCode : 404;
        return { statusCode: r };
      }
      let d = {
        error: {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        desc: { lineHeight: '48px' },
        h1: {
          display: 'inline-block',
          margin: '0 20px 0 0',
          paddingRight: 23,
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: 'top',
        },
        h2: { fontSize: 14, fontWeight: 400, lineHeight: '28px' },
        wrap: { display: 'inline-block' },
      };
      let Error = class Error extends l.default.Component {
        render() {
          let { statusCode: e, withDarkMode: t = !0 } = this.props,
            n = this.props.title || a[e] || 'An unexpected error has occurred';
          return l.default.createElement(
            'div',
            { style: d.error },
            l.default.createElement(
              o.default,
              null,
              l.default.createElement(
                'title',
                null,
                e
                  ? e + ': ' + n
                  : 'Application error: a client-side exception has occurred',
              ),
            ),
            l.default.createElement(
              'div',
              { style: d.desc },
              l.default.createElement('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}' +
                    (t
                      ? '@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}'
                      : ''),
                },
              }),
              e
                ? l.default.createElement(
                    'h1',
                    { className: 'next-error-h1', style: d.h1 },
                    e,
                  )
                : null,
              l.default.createElement(
                'div',
                { style: d.wrap },
                l.default.createElement(
                  'h2',
                  { style: d.h2 },
                  this.props.title || e
                    ? n
                    : l.default.createElement(
                        l.default.Fragment,
                        null,
                        'Application error: a client-side exception has occurred (see the browser console for more information)',
                      ),
                  '.',
                ),
              ),
            ),
          );
        }
      };
      (Error.displayName = 'ErrorPage'),
        (Error.getInitialProps = _getInitialProps),
        (Error.origGetInitialProps = _getInitialProps),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7543: (e, t) => {
      function isInAmpMode(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isInAmpMode', {
          enumerable: !0,
          get: function () {
            return isInAmpMode;
          },
        });
    },
    9201: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return defaultHead;
          },
          default: function () {
            return _default;
          },
        });
      let r = n(167),
        l = n(8760),
        o = l._(n(6689)),
        a = r._(n(8955)),
        d = n(8039),
        i = n(1988),
        u = n(7543);
      function defaultHead(e) {
        void 0 === e && (e = !1);
        let t = [o.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              o.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              }),
            ),
          t
        );
      }
      function onlyReactElement(e, t) {
        return 'string' == typeof t || 'number' == typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  'string' == typeof t || 'number' == typeof t
                    ? e
                    : e.concat(t),
                [],
              ),
            )
          : e.concat(t);
      }
      n(1905);
      let s = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function reduceComponents(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(onlyReactElement, [])
          .reverse()
          .concat(defaultHead(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (l) => {
                let o = !0,
                  a = !1;
                if (
                  l.key &&
                  'number' != typeof l.key &&
                  l.key.indexOf('$') > 0
                ) {
                  a = !0;
                  let t = l.key.slice(l.key.indexOf('$') + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (l.type) {
                  case 'title':
                  case 'base':
                    t.has(l.type) ? (o = !1) : t.add(l.type);
                    break;
                  case 'meta':
                    for (let e = 0, t = s.length; e < t; e++) {
                      let t = s[e];
                      if (l.props.hasOwnProperty(t)) {
                        if ('charSet' === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = l.props[t],
                            n = r[t] || new Set();
                          ('name' !== t || !a) && n.has(e)
                            ? (o = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })(),
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              'link' === e.type &&
              e.props.href &&
              [
                'https://fonts.googleapis.com/css',
                'https://use.typekit.net/',
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t['data-href'] = t.href),
                (t.href = void 0),
                (t['data-optimized-fonts'] = !0),
                o.default.cloneElement(e, t)
              );
            }
            return o.default.cloneElement(e, { key: r });
          });
      }
      let _default = function (e) {
        let { children: t } = e,
          n = (0, o.useContext)(d.AmpStateContext),
          r = (0, o.useContext)(i.HeadManagerContext);
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: reduceComponents,
            headManager: r,
            inAmpMode: (0, u.isInAmpMode)(n),
          },
          t,
        );
      };
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8955: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return SideEffect;
          },
        });
      let r = n(6689),
        useClientOnlyLayoutEffect = () => {},
        useClientOnlyEffect = () => {};
      function SideEffect(e) {
        var t;
        let { headManager: n, reduceComponentsToState: l } = e;
        function emitChange() {
          if (n && n.mountedInstances) {
            let t = r.Children.toArray(
              Array.from(n.mountedInstances).filter(Boolean),
            );
            n.updateHead(l(t, e));
          }
        }
        return (
          null == n || null == (t = n.mountedInstances) || t.add(e.children),
          emitChange(),
          useClientOnlyLayoutEffect(() => {
            var t;
            return (
              null == n ||
                null == (t = n.mountedInstances) ||
                t.add(e.children),
              () => {
                var t;
                null == n ||
                  null == (t = n.mountedInstances) ||
                  t.delete(e.children);
              }
            );
          }),
          useClientOnlyLayoutEffect(
            () => (
              n && (n._pendingUpdate = emitChange),
              () => {
                n && (n._pendingUpdate = emitChange);
              }
            ),
          ),
          useClientOnlyEffect(
            () => (
              n &&
                n._pendingUpdate &&
                (n._pendingUpdate(), (n._pendingUpdate = null)),
              () => {
                n &&
                  n._pendingUpdate &&
                  (n._pendingUpdate(), (n._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    1905: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'warnOnce', {
          enumerable: !0,
          get: function () {
            return warnOnce;
          },
        });
      let warnOnce = (e) => {};
    },
    8039: (e, t, n) => {
      e.exports = n(7093).vendored.contexts.AmpContext;
    },
  });
