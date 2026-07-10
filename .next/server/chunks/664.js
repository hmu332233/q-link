(exports.id = 664),
  (exports.ids = [664]),
  (exports.modules = {
    7498: (e, t) => {
      'use strict';
      var r;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return n;
          },
          ACTION_NAVIGATE: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return l;
          },
          ACTION_SERVER_PATCH: function () {
            return u;
          },
          ACTION_PREFETCH: function () {
            return a;
          },
          ACTION_FAST_REFRESH: function () {
            return f;
          },
          ACTION_SERVER_ACTION: function () {
            return i;
          },
        });
      let n = 'refresh',
        o = 'navigate',
        l = 'restore',
        u = 'server-patch',
        a = 'prefetch',
        f = 'fast-refresh',
        i = 'server-action';
      (function (e) {
        (e.AUTO = 'auto'), (e.FULL = 'full'), (e.TEMPORARY = 'temporary');
      })(r || (r = {})),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    30: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        });
      let n = r(2866);
      function getDomainLocale(e, t, o, l) {
        {
          let u = r(3530).normalizeLocalePath,
            a = r(6728).detectDomainLocale,
            f = t || u(e, o).detectedLocale,
            i = a(l, void 0, f);
          if (i) {
            let t = 'http' + (i.http ? '' : 's') + '://',
              r = f === i.defaultLocale ? '' : '/' + f;
            return (
              '' + t + i.domain + (0, n.normalizePathTrailingSlash)('' + r + e)
            );
          }
          return !1;
        }
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5170: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let n = r(167),
        o = n._(r(6689)),
        l = r(4450),
        u = r(2227),
        a = r(4364),
        f = r(109),
        i = r(3607),
        c = r(5469),
        s = r(7443),
        d = r(920),
        p = r(30),
        v = r(7192),
        b = r(7498);
      function formatStringOrUrl(e) {
        return 'string' == typeof e ? e : (0, a.formatUrl)(e);
      }
      let y = o.default.forwardRef(function (e, t) {
          let r, n;
          let {
            href: a,
            as: y,
            children: _,
            prefetch: g = null,
            passHref: m,
            replace: O,
            shallow: h,
            scroll: P,
            locale: j,
            onClick: E,
            onMouseEnter: C,
            onTouchStart: M,
            legacyBehavior: T = !1,
            ...L
          } = e;
          (r = _),
            T &&
              ('string' == typeof r || 'number' == typeof r) &&
              (r = o.default.createElement('a', null, r));
          let R = o.default.useContext(c.RouterContext),
            A = o.default.useContext(s.AppRouterContext),
            I = null != R ? R : A,
            x = !R,
            S = !1 !== g,
            N = null === g ? b.PrefetchKind.AUTO : b.PrefetchKind.FULL,
            { href: U, as: k } = o.default.useMemo(() => {
              if (!R) {
                let e = formatStringOrUrl(a);
                return { href: e, as: y ? formatStringOrUrl(y) : e };
              }
              let [e, t] = (0, l.resolveHref)(R, a, !0);
              return { href: e, as: y ? (0, l.resolveHref)(R, y) : t || e };
            }, [R, a, y]),
            z = o.default.useRef(U),
            D = o.default.useRef(k);
          T && (n = o.default.Children.only(r));
          let K = T ? n && 'object' == typeof n && n.ref : t,
            [F, H, w] = (0, d.useIntersection)({ rootMargin: '200px' }),
            V = o.default.useCallback(
              (e) => {
                (D.current !== k || z.current !== U) &&
                  (w(), (D.current = k), (z.current = U)),
                  F(e),
                  K &&
                    ('function' == typeof K
                      ? K(e)
                      : 'object' == typeof K && (K.current = e));
              },
              [k, K, U, w, F],
            );
          o.default.useEffect(() => {}, [
            k,
            U,
            H,
            j,
            S,
            null == R ? void 0 : R.locale,
            I,
            x,
            N,
          ]);
          let q = {
            ref: V,
            onClick(e) {
              T || 'function' != typeof E || E(e),
                T &&
                  n.props &&
                  'function' == typeof n.props.onClick &&
                  n.props.onClick(e),
                I &&
                  !e.defaultPrevented &&
                  (function (e, t, r, n, l, a, f, i, c, s) {
                    let { nodeName: d } = e.currentTarget,
                      p = 'A' === d.toUpperCase();
                    if (
                      p &&
                      ((function (e) {
                        let t = e.currentTarget,
                          r = t.getAttribute('target');
                        return (
                          (r && '_self' !== r) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!c && !(0, u.isLocalURL)(r)))
                    )
                      return;
                    e.preventDefault();
                    let navigate = () => {
                      let e = null == f || f;
                      'beforePopState' in t
                        ? t[l ? 'replace' : 'push'](r, n, {
                            shallow: a,
                            locale: i,
                            scroll: e,
                          })
                        : t[l ? 'replace' : 'push'](n || r, {
                            forceOptimisticNavigation: !s,
                            scroll: e,
                          });
                    };
                    c ? o.default.startTransition(navigate) : navigate();
                  })(e, I, U, k, O, h, P, j, x, S);
            },
            onMouseEnter(e) {
              T || 'function' != typeof C || C(e),
                T &&
                  n.props &&
                  'function' == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(e);
            },
            onTouchStart(e) {
              T || 'function' != typeof M || M(e),
                T &&
                  n.props &&
                  'function' == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(e);
            },
          };
          if ((0, f.isAbsoluteUrl)(k)) q.href = k;
          else if (!T || m || ('a' === n.type && !('href' in n.props))) {
            let e = void 0 !== j ? j : null == R ? void 0 : R.locale,
              t =
                (null == R ? void 0 : R.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  k,
                  e,
                  null == R ? void 0 : R.locales,
                  null == R ? void 0 : R.domainLocales,
                );
            q.href =
              t ||
              (0, v.addBasePath)(
                (0, i.addLocale)(k, e, null == R ? void 0 : R.defaultLocale),
              );
          }
          return T
            ? o.default.cloneElement(n, q)
            : o.default.createElement('a', { ...L, ...q }, r);
        }),
        _ = y;
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3530: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'normalizeLocalePath', {
          enumerable: !0,
          get: function () {
            return normalizeLocalePath;
          },
        });
      let normalizeLocalePath = (e, t) => r(1774).normalizeLocalePath(e, t);
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    920: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        });
      let n = r(6689),
        o = r(3436),
        l = 'function' == typeof IntersectionObserver,
        u = new Map(),
        a = [];
      function useIntersection(e) {
        let { rootRef: t, rootMargin: r, disabled: f } = e,
          i = f || !l,
          [c, s] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        (0, n.useEffect)(() => {
          if (l) {
            if (i || c) return;
            let e = d.current;
            if (e && e.tagName) {
              let n = (function (e, t, r) {
                let {
                  id: n,
                  observer: o,
                  elements: l,
                } = (function (e) {
                  let t;
                  let r = { root: e.root || null, margin: e.rootMargin || '' },
                    n = a.find(
                      (e) => e.root === r.root && e.margin === r.margin,
                    );
                  if (n && (t = u.get(n))) return t;
                  let o = new Map(),
                    l = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = o.get(e.target),
                          r = e.isIntersecting || e.intersectionRatio > 0;
                        t && r && t(r);
                      });
                    }, e);
                  return (
                    (t = { id: r, observer: l, elements: o }),
                    a.push(r),
                    u.set(r, t),
                    t
                  );
                })(r);
                return (
                  l.set(e, t),
                  o.observe(e),
                  function () {
                    if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                      o.disconnect(), u.delete(n);
                      let e = a.findIndex(
                        (e) => e.root === n.root && e.margin === n.margin,
                      );
                      e > -1 && a.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && s(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: r,
              });
              return n;
            }
          } else if (!c) {
            let e = (0, o.requestIdleCallback)(() => s(!0));
            return () => (0, o.cancelIdleCallback)(e);
          }
        }, [i, r, t, c, d.current]);
        let v = (0, n.useCallback)(() => {
          s(!1);
        }, []);
        return [p, c, v];
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7443: (e, t, r) => {
      'use strict';
      e.exports = r(7093).vendored.contexts.AppRouterContext;
    },
    1664: (e, t, r) => {
      e.exports = r(5170);
    },
  });
