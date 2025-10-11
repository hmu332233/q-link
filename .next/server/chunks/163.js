(exports.id = 163),
  (exports.ids = [163]),
  (exports.modules = {
    4878: (e, t) => {
      'use strict';
      function getDeploymentIdQueryOrEmptyString() {
        return '';
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getDeploymentIdQueryOrEmptyString', {
          enumerable: !0,
          get: function () {
            return getDeploymentIdQueryOrEmptyString;
          },
        });
    },
    7192: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'addBasePath', {
          enumerable: !0,
          get: function () {
            return addBasePath;
          },
        });
      let a = r(6063),
        n = r(2866);
      function addBasePath(e, t) {
        return (0, n.normalizePathTrailingSlash)((0, a.addPathPrefix)(e, ''));
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3607: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'addLocale', {
          enumerable: !0,
          get: function () {
            return addLocale;
          },
        });
      let a = r(2866),
        addLocale = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          return (0, a.normalizePathTrailingSlash)(r(7699).addLocale(e, ...n));
        };
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4702: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          RSC: function () {
            return r;
          },
          ACTION: function () {
            return a;
          },
          NEXT_ROUTER_STATE_TREE: function () {
            return n;
          },
          NEXT_ROUTER_PREFETCH: function () {
            return o;
          },
          NEXT_URL: function () {
            return i;
          },
          RSC_CONTENT_TYPE_HEADER: function () {
            return l;
          },
          RSC_VARY_HEADER: function () {
            return s;
          },
          FLIGHT_PARAMETERS: function () {
            return u;
          },
          NEXT_RSC_UNION_QUERY: function () {
            return c;
          },
        });
      let r = 'RSC',
        a = 'Next-Action',
        n = 'Next-Router-State-Tree',
        o = 'Next-Router-Prefetch',
        i = 'Next-Url',
        l = 'text/x-component',
        s = r + ', ' + n + ', ' + o + ', ' + i,
        u = [[r], [n], [o]],
        c = '_rsc';
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6728: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'detectDomainLocale', {
          enumerable: !0,
          get: function () {
            return detectDomainLocale;
          },
        });
      let detectDomainLocale = function () {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return r(6707).D(...t);
      };
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6864: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'hasBasePath', {
          enumerable: !0,
          get: function () {
            return hasBasePath;
          },
        });
      let a = r(387);
      function hasBasePath(e) {
        return (0, a.pathHasPrefix)(e, '');
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6623: (e, t) => {
      'use strict';
      let r;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DOMAttributeNames: function () {
            return a;
          },
          isEqualNode: function () {
            return isEqualNode;
          },
          default: function () {
            return initHeadManager;
          },
        });
      let a = {
        acceptCharset: 'accept-charset',
        className: 'class',
        htmlFor: 'for',
        httpEquiv: 'http-equiv',
        noModule: 'noModule',
      };
      function reactElementToDOM(e) {
        let { type: t, props: r } = e,
          n = document.createElement(t);
        for (let e in r) {
          if (
            !r.hasOwnProperty(e) ||
            'children' === e ||
            'dangerouslySetInnerHTML' === e ||
            void 0 === r[e]
          )
            continue;
          let o = a[e] || e.toLowerCase();
          'script' === t && ('async' === o || 'defer' === o || 'noModule' === o)
            ? (n[o] = !!r[e])
            : n.setAttribute(o, r[e]);
        }
        let { children: o, dangerouslySetInnerHTML: i } = r;
        return (
          i
            ? (n.innerHTML = i.__html || '')
            : o &&
              (n.textContent =
                'string' == typeof o ? o : Array.isArray(o) ? o.join('') : ''),
          n
        );
      }
      function isEqualNode(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let r = t.getAttribute('nonce');
          if (r && !e.getAttribute('nonce')) {
            let a = t.cloneNode(!0);
            return (
              a.setAttribute('nonce', ''),
              (a.nonce = r),
              r === e.nonce && e.isEqualNode(a)
            );
          }
        }
        return e.isEqualNode(t);
      }
      function initHeadManager() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ('link' === e.type && e.props['data-optimized-fonts']) {
                if (
                  document.querySelector(
                    'style[data-href="' + e.props['data-href'] + '"]',
                  )
                )
                  return;
                (e.props.href = e.props['data-href']),
                  (e.props['data-href'] = void 0);
              }
              let r = t[e.type] || [];
              r.push(e), (t[e.type] = r);
            });
            let a = t.title ? t.title[0] : null,
              n = '';
            if (a) {
              let { children: e } = a.props;
              n = 'string' == typeof e ? e : Array.isArray(e) ? e.join('') : '';
            }
            n !== document.title && (document.title = n),
              ['meta', 'base', 'link', 'style', 'script'].forEach((e) => {
                r(e, t[e] || []);
              });
          },
        };
      }
      (r = (e, t) => {
        let r = document.getElementsByTagName('head')[0],
          a = r.querySelector('meta[name=next-head-count]'),
          n = Number(a.content),
          o = [];
        for (
          let t = 0, r = a.previousElementSibling;
          t < n;
          t++, r = (null == r ? void 0 : r.previousElementSibling) || null
        ) {
          var i;
          (null == r
            ? void 0
            : null == (i = r.tagName)
            ? void 0
            : i.toLowerCase()) === e && o.push(r);
        }
        let l = t.map(reactElementToDOM).filter((e) => {
          for (let t = 0, r = o.length; t < r; t++) {
            let r = o[t];
            if (isEqualNode(r, e)) return o.splice(t, 1), !1;
          }
          return !0;
        });
        o.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          l.forEach((e) => r.insertBefore(e, a)),
          (a.content = (n - o.length + l.length).toString());
      }),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    2866: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'normalizePathTrailingSlash', {
          enumerable: !0,
          get: function () {
            return normalizePathTrailingSlash;
          },
        });
      let a = r(7425),
        n = r(1156),
        normalizePathTrailingSlash = (e) => {
          if (!e.startsWith('/')) return e;
          let { pathname: t, query: r, hash: o } = (0, n.parsePath)(e);
          return '' + (0, a.removeTrailingSlash)(t) + r + o;
        };
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8961: (e, t, r) => {
      'use strict';
      function removeBasePath(e) {
        return e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'removeBasePath', {
          enumerable: !0,
          get: function () {
            return removeBasePath;
          },
        }),
        r(6864),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5637: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'removeLocale', {
          enumerable: !0,
          get: function () {
            return removeLocale;
          },
        });
      let a = r(1156);
      function removeLocale(e, t) {
        {
          let { pathname: r } = (0, a.parsePath)(e),
            n = r.toLowerCase(),
            o = null == t ? void 0 : t.toLowerCase();
          return t && (n.startsWith('/' + o + '/') || n === '/' + o)
            ? (r.length === t.length + 1 ? '/' : '') + e.slice(t.length + 1)
            : e;
        }
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3436: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          requestIdleCallback: function () {
            return r;
          },
          cancelIdleCallback: function () {
            return a;
          },
        });
      let r =
          ('undefined' != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        a =
          ('undefined' != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4450: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'resolveHref', {
          enumerable: !0,
          get: function () {
            return resolveHref;
          },
        });
      let a = r(5980),
        n = r(4364),
        o = r(6455),
        i = r(109),
        l = r(2866),
        s = r(2227),
        u = r(8410),
        c = r(2969);
      function resolveHref(e, t, r) {
        let d;
        let f = 'string' == typeof t ? t : (0, n.formatWithValidation)(t),
          h = f.match(/^[a-zA-Z]{1,}:\/\//),
          p = h ? f.slice(h[0].length) : f,
          m = p.split('?');
        if ((m[0] || '').match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let t = (0, i.normalizeRepeatedSlashes)(p);
          f = (h ? h[0] : '') + t;
        }
        if (!(0, s.isLocalURL)(f)) return r ? [f] : f;
        try {
          d = new URL(f.startsWith('#') ? e.asPath : e.pathname, 'http://n');
        } catch (e) {
          d = new URL('/', 'http://n');
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, l.normalizePathTrailingSlash)(e.pathname);
          let t = '';
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, a.searchParamsToUrlQuery)(e.searchParams),
              { result: i, params: l } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                r,
              );
            i &&
              (t = (0, n.formatWithValidation)({
                pathname: i,
                hash: e.hash,
                query: (0, o.omit)(r, l),
              }));
          }
          let i =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [i, t || i] : i;
        } catch (e) {
          return r ? [f] : f;
        }
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    769: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          markAssetError: function () {
            return markAssetError;
          },
          isAssetError: function () {
            return isAssetError;
          },
          getClientBuildManifest: function () {
            return getClientBuildManifest;
          },
          createRouteLoader: function () {
            return createRouteLoader;
          },
        }),
        r(167),
        r(8356);
      let a = r(6912),
        n = r(3436),
        o = r(4878);
      function withFuture(e, t, r) {
        let a,
          n = t.get(e);
        if (n) return 'future' in n ? n.future : Promise.resolve(n);
        let o = new Promise((e) => {
          a = e;
        });
        return (
          t.set(e, (n = { resolve: a, future: o })),
          r
            ? r()
                .then((e) => (a(e), e))
                .catch((r) => {
                  throw (t.delete(e), r);
                })
            : o
        );
      }
      let i = Symbol('ASSET_LOAD_ERROR');
      function markAssetError(e) {
        return Object.defineProperty(e, i, {});
      }
      function isAssetError(e) {
        return e && i in e;
      }
      let l = (function (e) {
          try {
            return (
              (e = document.createElement('link')),
              (!!window.MSInputMethodContext && !!document.documentMode) ||
                e.relList.supports('prefetch')
            );
          } catch (e) {
            return !1;
          }
        })(),
        getAssetQueryString = () => (0, o.getDeploymentIdQueryOrEmptyString)();
      function resolvePromiseWithTimeout(e, t, r) {
        return new Promise((a, o) => {
          let i = !1;
          e
            .then((e) => {
              (i = !0), a(e);
            })
            .catch(o),
            (0, n.requestIdleCallback)(() =>
              setTimeout(() => {
                i || o(r);
              }, t),
            );
        });
      }
      function getClientBuildManifest() {
        if (self.__BUILD_MANIFEST)
          return Promise.resolve(self.__BUILD_MANIFEST);
        let e = new Promise((e) => {
          let t = self.__BUILD_MANIFEST_CB;
          self.__BUILD_MANIFEST_CB = () => {
            e(self.__BUILD_MANIFEST), t && t();
          };
        });
        return resolvePromiseWithTimeout(
          e,
          3800,
          markAssetError(Error('Failed to load client build manifest')),
        );
      }
      function getFilesForRoute(e, t) {
        return getClientBuildManifest().then((r) => {
          if (!(t in r))
            throw markAssetError(Error('Failed to lookup route: ' + t));
          let n = r[t].map((t) => e + '/_next/' + encodeURI(t));
          return {
            scripts: n
              .filter((e) => e.endsWith('.js'))
              .map(
                (e) =>
                  (0, a.__unsafeCreateTrustedScriptURL)(e) +
                  getAssetQueryString(),
              ),
            css: n
              .filter((e) => e.endsWith('.css'))
              .map((e) => e + getAssetQueryString()),
          };
        });
      }
      function createRouteLoader(e) {
        let t = new Map(),
          r = new Map(),
          a = new Map(),
          o = new Map();
        function maybeExecuteScript(e) {
          {
            var t;
            let a = r.get(e.toString());
            return (
              a ||
              (document.querySelector('script[src^="' + e + '"]')
                ? Promise.resolve()
                : (r.set(
                    e.toString(),
                    (a = new Promise((r, a) => {
                      ((t = document.createElement('script')).onload = r),
                        (t.onerror = () =>
                          a(
                            markAssetError(
                              Error('Failed to load script: ' + e),
                            ),
                          )),
                        (t.crossOrigin = void 0),
                        (t.src = e),
                        document.body.appendChild(t);
                    })),
                  ),
                  a))
            );
          }
        }
        function fetchStyleSheet(e) {
          let t = a.get(e);
          return (
            t ||
              a.set(
                e,
                (t = fetch(e)
                  .then((t) => {
                    if (!t.ok) throw Error('Failed to load stylesheet: ' + e);
                    return t.text().then((t) => ({ href: e, content: t }));
                  })
                  .catch((e) => {
                    throw markAssetError(e);
                  })),
              ),
            t
          );
        }
        return {
          whenEntrypoint: (e) => withFuture(e, t),
          onEntrypoint(e, r) {
            (r
              ? Promise.resolve()
                  .then(() => r())
                  .then(
                    (e) => ({ component: (e && e.default) || e, exports: e }),
                    (e) => ({ error: e }),
                  )
              : Promise.resolve(void 0)
            ).then((r) => {
              let a = t.get(e);
              a && 'resolve' in a
                ? r && (t.set(e, r), a.resolve(r))
                : (r ? t.set(e, r) : t.delete(e), o.delete(e));
            });
          },
          loadRoute(r, a) {
            return withFuture(r, o, () => {
              let n;
              return resolvePromiseWithTimeout(
                getFilesForRoute(e, r)
                  .then((e) => {
                    let { scripts: a, css: n } = e;
                    return Promise.all([
                      t.has(r) ? [] : Promise.all(a.map(maybeExecuteScript)),
                      Promise.all(n.map(fetchStyleSheet)),
                    ]);
                  })
                  .then((e) =>
                    this.whenEntrypoint(r).then((t) => ({
                      entrypoint: t,
                      styles: e[1],
                    })),
                  ),
                3800,
                markAssetError(Error('Route did not complete loading: ' + r)),
              )
                .then((e) => {
                  let { entrypoint: t, styles: r } = e,
                    a = Object.assign({ styles: r }, t);
                  return 'error' in t ? t : a;
                })
                .catch((e) => {
                  if (a) throw e;
                  return { error: e };
                })
                .finally(() => (null == n ? void 0 : n()));
            });
          },
          prefetch(t) {
            let r;
            return (r = navigator.connection) &&
              (r.saveData || /2g/.test(r.effectiveType))
              ? Promise.resolve()
              : getFilesForRoute(e, t)
                  .then((e) =>
                    Promise.all(
                      l
                        ? e.scripts.map((e) => {
                            var t, r, a;
                            return (
                              (t = e.toString()),
                              (r = 'script'),
                              new Promise((e, n) => {
                                let o =
                                  '\n      link[rel="prefetch"][href^="' +
                                  t +
                                  '"],\n      link[rel="preload"][href^="' +
                                  t +
                                  '"],\n      script[src^="' +
                                  t +
                                  '"]';
                                if (document.querySelector(o)) return e();
                                (a = document.createElement('link')),
                                  r && (a.as = r),
                                  (a.rel = 'prefetch'),
                                  (a.crossOrigin = void 0),
                                  (a.onload = e),
                                  (a.onerror = () =>
                                    n(
                                      markAssetError(
                                        Error('Failed to prefetch: ' + t),
                                      ),
                                    )),
                                  (a.href = t),
                                  document.head.appendChild(a);
                              })
                            );
                          })
                        : [],
                    ),
                  )
                  .then(() => {
                    (0, n.requestIdleCallback)(() =>
                      this.loadRoute(t, !0).catch(() => {}),
                    );
                  })
                  .catch(() => {});
          },
        };
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9974: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          Router: function () {
            return o.default;
          },
          default: function () {
            return f;
          },
          withRouter: function () {
            return s.default;
          },
          useRouter: function () {
            return useRouter;
          },
          createRouter: function () {
            return createRouter;
          },
          makePublicRouterInstance: function () {
            return makePublicRouterInstance;
          },
        });
      let a = r(167),
        n = a._(r(6689)),
        o = a._(r(2997)),
        i = r(5469),
        l = a._(r(676)),
        s = a._(r(3591)),
        u = {
          router: null,
          readyCallbacks: [],
          ready(e) {
            if (this.router) return e();
          },
        },
        c = [
          'pathname',
          'route',
          'query',
          'asPath',
          'components',
          'isFallback',
          'basePath',
          'locale',
          'locales',
          'defaultLocale',
          'isReady',
          'isPreview',
          'isLocaleDomain',
          'domainLocales',
        ],
        d = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState'];
      function getRouter() {
        if (!u.router)
          throw Error(
            'No router instance found.\nYou should only use "next/router" on the client side of your app.\n',
          );
        return u.router;
      }
      Object.defineProperty(u, 'events', { get: () => o.default.events }),
        c.forEach((e) => {
          Object.defineProperty(u, e, {
            get() {
              let t = getRouter();
              return t[e];
            },
          });
        }),
        d.forEach((e) => {
          u[e] = function () {
            for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)
              r[a] = arguments[a];
            let n = getRouter();
            return n[e](...r);
          };
        }),
        [
          'routeChangeStart',
          'beforeHistoryChange',
          'routeChangeComplete',
          'routeChangeError',
          'hashChangeStart',
          'hashChangeComplete',
        ].forEach((e) => {
          u.ready(() => {
            o.default.events.on(e, function () {
              for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)
                r[a] = arguments[a];
              let n = 'on' + e.charAt(0).toUpperCase() + e.substring(1);
              if (u[n])
                try {
                  u[n](...r);
                } catch (e) {
                  console.error('Error when running the Router event: ' + n),
                    console.error(
                      (0, l.default)(e) ? e.message + '\n' + e.stack : e + '',
                    );
                }
            });
          });
        });
      let f = u;
      function useRouter() {
        let e = n.default.useContext(i.RouterContext);
        if (!e)
          throw Error(
            'NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted',
          );
        return e;
      }
      function createRouter() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (
          (u.router = new o.default(...t)),
          u.readyCallbacks.forEach((e) => e()),
          (u.readyCallbacks = []),
          u.router
        );
      }
      function makePublicRouterInstance(e) {
        let t = {};
        for (let r of c) {
          if ('object' == typeof e[r]) {
            t[r] = Object.assign(Array.isArray(e[r]) ? [] : {}, e[r]);
            continue;
          }
          t[r] = e[r];
        }
        return (
          (t.events = o.default.events),
          d.forEach((r) => {
            t[r] = function () {
              for (var t = arguments.length, a = Array(t), n = 0; n < t; n++)
                a[n] = arguments[n];
              return e[r](...a);
            };
          }),
          t
        );
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5354: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          handleClientScriptLoad: function () {
            return handleClientScriptLoad;
          },
          initScriptLoader: function () {
            return initScriptLoader;
          },
          default: function () {
            return h;
          },
        });
      let a = r(167),
        n = r(8760),
        o = a._(r(6405)),
        i = n._(r(6689)),
        l = r(1988),
        s = r(6623),
        u = r(3436),
        c = new Map(),
        d = new Set(),
        f = [
          'onLoad',
          'onReady',
          'dangerouslySetInnerHTML',
          'children',
          'onError',
          'strategy',
          'stylesheets',
        ],
        insertStylesheets = (e) => {
          if (o.default.preinit) {
            e.forEach((e) => {
              o.default.preinit(e, { as: 'style' });
            });
            return;
          }
        },
        loadScript = (e) => {
          let {
              src: t,
              id: r,
              onLoad: a = () => {},
              onReady: n = null,
              dangerouslySetInnerHTML: o,
              children: i = '',
              strategy: l = 'afterInteractive',
              onError: u,
              stylesheets: h,
            } = e,
            p = r || t;
          if (p && d.has(p)) return;
          if (c.has(t)) {
            d.add(p), c.get(t).then(a, u);
            return;
          }
          let afterLoad = () => {
              n && n(), d.add(p);
            },
            m = document.createElement('script'),
            g = new Promise((e, t) => {
              m.addEventListener('load', function (t) {
                e(), a && a.call(this, t), afterLoad();
              }),
                m.addEventListener('error', function (e) {
                  t(e);
                });
            }).catch(function (e) {
              u && u(e);
            });
          for (let [r, a] of (o
            ? ((m.innerHTML = o.__html || ''), afterLoad())
            : i
            ? ((m.textContent =
                'string' == typeof i ? i : Array.isArray(i) ? i.join('') : ''),
              afterLoad())
            : t && ((m.src = t), c.set(t, g)),
          Object.entries(e))) {
            if (void 0 === a || f.includes(r)) continue;
            let e = s.DOMAttributeNames[r] || r.toLowerCase();
            m.setAttribute(e, a);
          }
          'worker' === l && m.setAttribute('type', 'text/partytown'),
            m.setAttribute('data-nscript', l),
            h && insertStylesheets(h),
            document.body.appendChild(m);
        };
      function handleClientScriptLoad(e) {
        let { strategy: t = 'afterInteractive' } = e;
        'lazyOnload' === t
          ? window.addEventListener('load', () => {
              (0, u.requestIdleCallback)(() => loadScript(e));
            })
          : loadScript(e);
      }
      function initScriptLoader(e) {
        e.forEach(handleClientScriptLoad),
          (function () {
            let e = [
              ...document.querySelectorAll(
                '[data-nscript="beforeInteractive"]',
              ),
              ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
            ];
            e.forEach((e) => {
              let t = e.id || e.getAttribute('src');
              d.add(t);
            });
          })();
      }
      function Script(e) {
        let {
            id: t,
            src: r = '',
            onLoad: a = () => {},
            onReady: n = null,
            strategy: s = 'afterInteractive',
            onError: c,
            stylesheets: f,
            ...h
          } = e,
          {
            updateScripts: p,
            scripts: m,
            getIsSsr: g,
            appDir: y,
            nonce: _,
          } = (0, i.useContext)(l.HeadManagerContext),
          v = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          let e = t || r;
          v.current || (n && e && d.has(e) && n(), (v.current = !0));
        }, [n, t, r]);
        let P = (0, i.useRef)(!1);
        if (
          ((0, i.useEffect)(() => {
            !P.current &&
              ('afterInteractive' === s
                ? loadScript(e)
                : 'lazyOnload' === s &&
                  ('complete' === document.readyState
                    ? (0, u.requestIdleCallback)(() => loadScript(e))
                    : window.addEventListener('load', () => {
                        (0, u.requestIdleCallback)(() => loadScript(e));
                      })),
              (P.current = !0));
          }, [e, s]),
          ('beforeInteractive' === s || 'worker' === s) &&
            (p
              ? ((m[s] = (m[s] || []).concat([
                  { id: t, src: r, onLoad: a, onReady: n, onError: c, ...h },
                ])),
                p(m))
              : g && g()
              ? d.add(t || r)
              : g && !g() && loadScript(e)),
          y)
        ) {
          if (
            (f &&
              f.forEach((e) => {
                o.default.preinit(e, { as: 'style' });
              }),
            'beforeInteractive' === s)
          )
            return r
              ? (o.default.preload(
                  r,
                  h.integrity
                    ? { as: 'script', integrity: h.integrity }
                    : { as: 'script' },
                ),
                i.default.createElement('script', {
                  nonce: _,
                  dangerouslySetInnerHTML: {
                    __html:
                      '(self.__next_s=self.__next_s||[]).push(' +
                      JSON.stringify([r]) +
                      ')',
                  },
                }))
              : (h.dangerouslySetInnerHTML &&
                  ((h.children = h.dangerouslySetInnerHTML.__html),
                  delete h.dangerouslySetInnerHTML),
                i.default.createElement('script', {
                  nonce: _,
                  dangerouslySetInnerHTML: {
                    __html:
                      '(self.__next_s=self.__next_s||[]).push(' +
                      JSON.stringify([0, { ...h }]) +
                      ')',
                  },
                }));
          'afterInteractive' === s &&
            r &&
            o.default.preload(
              r,
              h.integrity
                ? { as: 'script', integrity: h.integrity }
                : { as: 'script' },
            );
        }
        return null;
      }
      Object.defineProperty(Script, '__nextScript', { value: !0 });
      let h = Script;
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6912: (e, t) => {
      'use strict';
      let r;
      function __unsafeCreateTrustedScriptURL(e) {
        return (null == r ? void 0 : r.createScriptURL(e)) || e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, '__unsafeCreateTrustedScriptURL', {
          enumerable: !0,
          get: function () {
            return __unsafeCreateTrustedScriptURL;
          },
        }),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3591: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return withRouter;
          },
        });
      let a = r(167),
        n = a._(r(6689)),
        o = r(9974);
      function withRouter(e) {
        function WithRouterWrapper(t) {
          return n.default.createElement(e, {
            router: (0, o.useRouter)(),
            ...t,
          });
        }
        return (
          (WithRouterWrapper.getInitialProps = e.getInitialProps),
          (WithRouterWrapper.origGetInitialProps = e.origGetInitialProps),
          WithRouterWrapper
        );
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    684: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'BloomFilter', {
          enumerable: !0,
          get: function () {
            return BloomFilter;
          },
        });
      let BloomFilter = class BloomFilter {
        static from(e, t) {
          void 0 === t && (t = 0.01);
          let r = new BloomFilter(e.length, t);
          for (let t of e) r.add(t);
          return r;
        }
        export() {
          let e = {
            numItems: this.numItems,
            errorRate: this.errorRate,
            numBits: this.numBits,
            numHashes: this.numHashes,
            bitArray: this.bitArray,
          };
          if (this.errorRate < 0.01) {
            let t = JSON.stringify(e),
              a = r(1662).sync(t);
            a > 1024 &&
              console.warn(
                'Creating filter with error rate less than 1% (0.01) can increase the size dramatically proceed with caution. Received error rate ' +
                  this.errorRate +
                  ' resulted in size ' +
                  t.length +
                  ' bytes, ' +
                  a +
                  ' bytes (gzip)',
              );
          }
          return e;
        }
        import(e) {
          (this.numItems = e.numItems),
            (this.errorRate = e.errorRate),
            (this.numBits = e.numBits),
            (this.numHashes = e.numHashes),
            (this.bitArray = e.bitArray);
        }
        add(e) {
          let t = this.getHashValues(e);
          t.forEach((e) => {
            this.bitArray[e] = 1;
          });
        }
        contains(e) {
          let t = this.getHashValues(e);
          return t.every((e) => this.bitArray[e]);
        }
        getHashValues(e) {
          let t = [];
          for (let r = 1; r <= this.numHashes; r++) {
            let a =
              (function (e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                  let a = e.charCodeAt(r);
                  (t = Math.imul(t ^ a, 1540483477)),
                    (t ^= t >>> 13),
                    (t = Math.imul(t, 1540483477));
                }
                return t >>> 0;
              })('' + e + r) % this.numBits;
            t.push(a);
          }
          return t;
        }
        constructor(e, t) {
          (this.numItems = e),
            (this.errorRate = t),
            (this.numBits = Math.ceil(
              -(e * Math.log(t)) / (Math.log(2) * Math.log(2)),
            )),
            (this.numHashes = Math.ceil((this.numBits / e) * Math.log(2))),
            (this.bitArray = Array(this.numBits).fill(0));
        }
      };
    },
    6614: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'escapeStringRegexp', {
          enumerable: !0,
          get: function () {
            return escapeStringRegexp;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        a = /[|\\{}()[\]^$+*?.-]/g;
      function escapeStringRegexp(e) {
        return r.test(e) ? e.replace(a, '\\$&') : e;
      }
    },
    6707: (e, t) => {
      'use strict';
      function detectDomainLocale(e, t, r) {
        if (e)
          for (let o of (r && (r = r.toLowerCase()), e)) {
            var a, n;
            let e =
              null == (a = o.domain) ? void 0 : a.split(':')[0].toLowerCase();
            if (
              t === e ||
              r === o.defaultLocale.toLowerCase() ||
              (null == (n = o.locales)
                ? void 0
                : n.some((e) => e.toLowerCase() === r))
            )
              return o;
          }
      }
      Object.defineProperty(t, 'D', {
        enumerable: !0,
        get: function () {
          return detectDomainLocale;
        },
      });
    },
    1774: (e, t) => {
      'use strict';
      function normalizeLocalePath(e, t) {
        let r;
        let a = e.split('/');
        return (
          (t || []).some(
            (t) =>
              !!a[1] &&
              a[1].toLowerCase() === t.toLowerCase() &&
              ((r = t), a.splice(1, 1), (e = a.join('/') || '/'), !0),
          ),
          { pathname: e, detectedLocale: r }
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'normalizeLocalePath', {
          enumerable: !0,
          get: function () {
            return normalizeLocalePath;
          },
        });
    },
    6860: (e, t) => {
      'use strict';
      function mitt() {
        let e = Object.create(null);
        return {
          on(t, r) {
            (e[t] || (e[t] = [])).push(r);
          },
          off(t, r) {
            e[t] && e[t].splice(e[t].indexOf(r) >>> 0, 1);
          },
          emit(t) {
            for (
              var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              a[n - 1] = arguments[n];
            (e[t] || []).slice().map((e) => {
              e(...a);
            });
          },
        };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return mitt;
          },
        });
    },
    2997: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return Router;
          },
          matchesMiddleware: function () {
            return matchesMiddleware;
          },
          createKey: function () {
            return createKey;
          },
        });
      let a = r(167),
        n = r(8760),
        o = r(7425),
        i = r(769),
        l = r(5354),
        s = n._(r(676)),
        u = r(3035),
        c = r(1774),
        d = a._(r(6860)),
        f = r(109),
        h = r(9203),
        p = r(1748);
      r(4958);
      let m = r(2142),
        g = r(2839),
        y = r(4364),
        _ = r(6728),
        v = r(1156),
        P = r(3607),
        b = r(5637),
        R = r(8961),
        S = r(7192),
        w = r(6864),
        x = r(4450),
        E = r(9423),
        O = r(7007),
        j = r(7841),
        A = r(7763),
        C = r(2227);
      r(5119);
      let L = r(6455),
        M = r(2969),
        T = r(3937);
      function buildCancellationError() {
        return Object.assign(Error('Route Cancelled'), { cancelled: !0 });
      }
      async function matchesMiddleware(e) {
        let t = await Promise.resolve(e.router.pageLoader.getMiddleware());
        if (!t) return !1;
        let { pathname: r } = (0, v.parsePath)(e.asPath),
          a = (0, w.hasBasePath)(r) ? (0, R.removeBasePath)(r) : r,
          n = (0, S.addBasePath)((0, P.addLocale)(a, e.locale));
        return t.some((e) => new RegExp(e.regexp).test(n));
      }
      function stripOrigin(e) {
        let t = (0, f.getLocationOrigin)();
        return e.startsWith(t) ? e.substring(t.length) : e;
      }
      function prepareUrlAs(e, t, r) {
        let [a, n] = (0, x.resolveHref)(e, t, !0),
          o = (0, f.getLocationOrigin)(),
          i = a.startsWith(o),
          l = n && n.startsWith(o);
        (a = stripOrigin(a)), (n = n ? stripOrigin(n) : n);
        let s = i ? a : (0, S.addBasePath)(a),
          u = r ? stripOrigin((0, x.resolveHref)(e, r)) : n || a;
        return { url: s, as: l ? u : (0, S.addBasePath)(u) };
      }
      function resolveDynamicRoute(e, t) {
        let r = (0, o.removeTrailingSlash)((0, u.denormalizePagePath)(e));
        return '/404' === r || '/_error' === r
          ? e
          : (t.includes(r) ||
              t.some((t) => {
                if (
                  (0, h.isDynamicRoute)(t) &&
                  (0, g.getRouteRegex)(t).re.test(r)
                )
                  return (e = t), !0;
              }),
            (0, o.removeTrailingSlash)(e));
      }
      async function withMiddlewareEffects(e) {
        let t = await matchesMiddleware(e);
        if (!t || !e.fetchData) return null;
        try {
          let t = await e.fetchData(),
            r = await (function (e, t, r) {
              let a = {
                  basePath: r.router.basePath,
                  i18n: { locales: r.router.locales },
                  trailingSlash: !1,
                },
                n = t.headers.get('x-nextjs-rewrite'),
                l = n || t.headers.get('x-nextjs-matched-path'),
                s = t.headers.get('x-matched-path');
              if (
                (!s ||
                  l ||
                  s.includes('__next_data_catchall') ||
                  s.includes('/_error') ||
                  s.includes('/404') ||
                  (l = s),
                l)
              ) {
                if (l.startsWith('/')) {
                  let t = (0, p.parseRelativeUrl)(l),
                    s = (0, O.getNextPathnameInfo)(t.pathname, {
                      nextConfig: a,
                      parseData: !0,
                    }),
                    u = (0, o.removeTrailingSlash)(s.pathname);
                  return Promise.all([
                    r.router.pageLoader.getPageList(),
                    (0, i.getClientBuildManifest)(),
                  ]).then((o) => {
                    let [i, { __rewrites: l }] = o,
                      d = (0, P.addLocale)(s.pathname, s.locale);
                    if (
                      (0, h.isDynamicRoute)(d) ||
                      (!n &&
                        i.includes(
                          (0, c.normalizeLocalePath)(
                            (0, R.removeBasePath)(d),
                            r.router.locales,
                          ).pathname,
                        ))
                    ) {
                      let r = (0, O.getNextPathnameInfo)(
                        (0, p.parseRelativeUrl)(e).pathname,
                        { nextConfig: a, parseData: !0 },
                      );
                      (d = (0, S.addBasePath)(r.pathname)), (t.pathname = d);
                    }
                    if (!i.includes(u)) {
                      let e = resolveDynamicRoute(u, i);
                      e !== u && (u = e);
                    }
                    let f = i.includes(u)
                      ? u
                      : resolveDynamicRoute(
                          (0, c.normalizeLocalePath)(
                            (0, R.removeBasePath)(t.pathname),
                            r.router.locales,
                          ).pathname,
                          i,
                        );
                    if ((0, h.isDynamicRoute)(f)) {
                      let e = (0, m.getRouteMatcher)((0, g.getRouteRegex)(f))(
                        d,
                      );
                      Object.assign(t.query, e || {});
                    }
                    return { type: 'rewrite', parsedAs: t, resolvedHref: f };
                  });
                }
                let t = (0, v.parsePath)(e),
                  s = (0, j.formatNextPathnameInfo)({
                    ...(0, O.getNextPathnameInfo)(t.pathname, {
                      nextConfig: a,
                      parseData: !0,
                    }),
                    defaultLocale: r.router.defaultLocale,
                    buildId: '',
                  });
                return Promise.resolve({
                  type: 'redirect-external',
                  destination: '' + s + t.query + t.hash,
                });
              }
              let u = t.headers.get('x-nextjs-redirect');
              if (u) {
                if (u.startsWith('/')) {
                  let e = (0, v.parsePath)(u),
                    t = (0, j.formatNextPathnameInfo)({
                      ...(0, O.getNextPathnameInfo)(e.pathname, {
                        nextConfig: a,
                        parseData: !0,
                      }),
                      defaultLocale: r.router.defaultLocale,
                      buildId: '',
                    });
                  return Promise.resolve({
                    type: 'redirect-internal',
                    newAs: '' + t + e.query + e.hash,
                    newUrl: '' + t + e.query + e.hash,
                  });
                }
                return Promise.resolve({
                  type: 'redirect-external',
                  destination: u,
                });
              }
              return Promise.resolve({ type: 'next' });
            })(t.dataHref, t.response, e);
          return {
            dataHref: t.dataHref,
            json: t.json,
            response: t.response,
            text: t.text,
            cacheKey: t.cacheKey,
            effect: r,
          };
        } catch (e) {
          return null;
        }
      }
      let N = Symbol('SSG_DATA_NOT_FOUND');
      function tryToParseAsJSON(e) {
        try {
          return JSON.parse(e);
        } catch (e) {
          return null;
        }
      }
      function fetchNextData(e) {
        var t;
        let {
            dataHref: r,
            inflightCache: a,
            isPrefetch: n,
            hasMiddleware: o,
            isServerRender: l,
            parseJSON: s,
            persistCache: u,
            isBackground: c,
            unstable_skipClientCache: d,
          } = e,
          { href: f } = new URL(r, window.location.href),
          getData = (e) =>
            (function fetchRetry(e, t, r) {
              return fetch(e, {
                credentials: 'same-origin',
                method: r.method || 'GET',
                headers: Object.assign({}, r.headers, { 'x-nextjs-data': '1' }),
              }).then((a) =>
                !a.ok && t > 1 && a.status >= 500 ? fetchRetry(e, t - 1, r) : a,
              );
            })(r, l ? 3 : 1, {
              headers: Object.assign(
                {},
                n ? { purpose: 'prefetch' } : {},
                n && o ? { 'x-middleware-prefetch': '1' } : {},
              ),
              method: null != (t = null == e ? void 0 : e.method) ? t : 'GET',
            })
              .then((t) =>
                t.ok && (null == e ? void 0 : e.method) === 'HEAD'
                  ? {
                      dataHref: r,
                      response: t,
                      text: '',
                      json: {},
                      cacheKey: f,
                    }
                  : t.text().then((e) => {
                      if (!t.ok) {
                        if (o && [301, 302, 307, 308].includes(t.status))
                          return {
                            dataHref: r,
                            response: t,
                            text: e,
                            json: {},
                            cacheKey: f,
                          };
                        if (404 === t.status) {
                          var a;
                          if (
                            null == (a = tryToParseAsJSON(e))
                              ? void 0
                              : a.notFound
                          )
                            return {
                              dataHref: r,
                              json: { notFound: N },
                              response: t,
                              text: e,
                              cacheKey: f,
                            };
                        }
                        let n = Error('Failed to load static props');
                        throw (l || (0, i.markAssetError)(n), n);
                      }
                      return {
                        dataHref: r,
                        json: s ? tryToParseAsJSON(e) : null,
                        response: t,
                        text: e,
                        cacheKey: f,
                      };
                    }),
              )
              .then(
                (e) => (
                  (u &&
                    'no-cache' !==
                      e.response.headers.get('x-middleware-cache')) ||
                    delete a[f],
                  e
                ),
              )
              .catch((e) => {
                throw (
                  (d || delete a[f],
                  ('Failed to fetch' === e.message ||
                    'NetworkError when attempting to fetch resource.' ===
                      e.message ||
                    'Load failed' === e.message) &&
                    (0, i.markAssetError)(e),
                  e)
                );
              });
        return d && u
          ? getData({}).then((e) => ((a[f] = Promise.resolve(e)), e))
          : void 0 !== a[f]
          ? a[f]
          : (a[f] = getData(c ? { method: 'HEAD' } : {}));
      }
      function createKey() {
        return Math.random().toString(36).slice(2, 10);
      }
      function handleHardNavigation(e) {
        let { url: t, router: r } = e;
        if (t === (0, S.addBasePath)((0, P.addLocale)(r.asPath, r.locale)))
          throw Error(
            'Invariant: attempted to hard navigate to the same URL ' +
              t +
              ' ' +
              location.href,
          );
        window.location.href = t;
      }
      let getCancelledHandler = (e) => {
        let { route: t, router: r } = e,
          a = !1,
          n = (r.clc = () => {
            a = !0;
          });
        return () => {
          if (a) {
            let e = Error('Abort fetching component for route: "' + t + '"');
            throw ((e.cancelled = !0), e);
          }
          n === r.clc && (r.clc = null);
        };
      };
      let Router = class Router {
        reload() {
          window.location.reload();
        }
        back() {
          window.history.back();
        }
        forward() {
          window.history.forward();
        }
        push(e, t, r) {
          return (
            void 0 === r && (r = {}),
            ({ url: e, as: t } = prepareUrlAs(this, e, t)),
            this.change('pushState', e, t, r)
          );
        }
        replace(e, t, r) {
          return (
            void 0 === r && (r = {}),
            ({ url: e, as: t } = prepareUrlAs(this, e, t)),
            this.change('replaceState', e, t, r)
          );
        }
        async _bfl(e, t, r, a) {
          {
            let s = !1,
              u = !1;
            for (let c of [e, t])
              if (c) {
                let t = (0, o.removeTrailingSlash)(
                    new URL(c, 'http://n').pathname,
                  ),
                  d = (0, S.addBasePath)((0, P.addLocale)(t, r || this.locale));
                if (
                  t !==
                  (0, o.removeTrailingSlash)(
                    new URL(this.asPath, 'http://n').pathname,
                  )
                ) {
                  var n, i, l;
                  for (let e of ((s =
                    s ||
                    !!(null == (n = this._bfl_s) ? void 0 : n.contains(t)) ||
                    !!(null == (i = this._bfl_s) ? void 0 : i.contains(d))),
                  [t, d])) {
                    let t = e.split('/');
                    for (let e = 0; !u && e < t.length + 1; e++) {
                      let r = t.slice(0, e).join('/');
                      if (
                        r &&
                        (null == (l = this._bfl_d) ? void 0 : l.contains(r))
                      ) {
                        u = !0;
                        break;
                      }
                    }
                  }
                  if (s || u) {
                    if (a) return !0;
                    return (
                      handleHardNavigation({
                        url: (0, S.addBasePath)(
                          (0, P.addLocale)(
                            e,
                            r || this.locale,
                            this.defaultLocale,
                          ),
                        ),
                        router: this,
                      }),
                      new Promise(() => {})
                    );
                  }
                }
              }
          }
          return !1;
        }
        async change(e, t, r, a, n) {
          var u, d, x, E, O, j, T, I, k, D;
          let U, H;
          if (!(0, C.isLocalURL)(t))
            return handleHardNavigation({ url: t, router: this }), !1;
          let B = 1 === a._h;
          B || a.shallow || (await this._bfl(r, void 0, a.locale));
          let F =
              B ||
              a._shouldResolveHref ||
              (0, v.parsePath)(t).pathname === (0, v.parsePath)(r).pathname,
            W = { ...this.state },
            q = !0 !== this.isReady;
          this.isReady = !0;
          let z = this.isSsr;
          if ((B || (this.isSsr = !1), B && this.clc)) return !1;
          let Q = W.locale;
          {
            (W.locale =
              !1 === a.locale ? this.defaultLocale : a.locale || W.locale),
              void 0 === a.locale && (a.locale = W.locale);
            let e = (0, p.parseRelativeUrl)(
                (0, w.hasBasePath)(r) ? (0, R.removeBasePath)(r) : r,
              ),
              n = (0, c.normalizeLocalePath)(e.pathname, this.locales);
            n.detectedLocale &&
              ((W.locale = n.detectedLocale),
              (e.pathname = (0, S.addBasePath)(e.pathname)),
              (r = (0, y.formatWithValidation)(e)),
              (t = (0, S.addBasePath)(
                (0, c.normalizeLocalePath)(
                  (0, w.hasBasePath)(t) ? (0, R.removeBasePath)(t) : t,
                  this.locales,
                ).pathname,
              )));
            let o = !1;
            (null == (d = this.locales) ? void 0 : d.includes(W.locale)) ||
              ((e.pathname = (0, P.addLocale)(e.pathname, W.locale)),
              handleHardNavigation({
                url: (0, y.formatWithValidation)(e),
                router: this,
              }),
              (o = !0));
            let i = (0, _.detectDomainLocale)(
              this.domainLocales,
              void 0,
              W.locale,
            );
            if (
              !o &&
              i &&
              this.isLocaleDomain &&
              self.location.hostname !== i.domain
            ) {
              let e = (0, R.removeBasePath)(r);
              handleHardNavigation({
                url:
                  'http' +
                  (i.http ? '' : 's') +
                  '://' +
                  i.domain +
                  (0, S.addBasePath)(
                    (W.locale === i.defaultLocale ? '' : '/' + W.locale) +
                      ('/' === e ? '' : e) || '/',
                  ),
                router: this,
              }),
                (o = !0);
            }
            if (o) return new Promise(() => {});
          }
          f.ST && performance.mark('routeChange');
          let { shallow: $ = !1, scroll: G = !0 } = a,
            V = { shallow: $ };
          this._inFlightRoute &&
            this.clc &&
            (z ||
              Router.events.emit(
                'routeChangeError',
                buildCancellationError(),
                this._inFlightRoute,
                V,
              ),
            this.clc(),
            (this.clc = null)),
            (r = (0, S.addBasePath)(
              (0, P.addLocale)(
                (0, w.hasBasePath)(r) ? (0, R.removeBasePath)(r) : r,
                a.locale,
                this.defaultLocale,
              ),
            ));
          let K = (0, b.removeLocale)(
            (0, w.hasBasePath)(r) ? (0, R.removeBasePath)(r) : r,
            W.locale,
          );
          this._inFlightRoute = r;
          let X = Q !== W.locale;
          if (!B && this.onlyAHashChange(K) && !X) {
            (W.asPath = K),
              Router.events.emit('hashChangeStart', r, V),
              this.changeState(e, t, r, { ...a, scroll: !1 }),
              G && this.scrollToHash(K);
            try {
              await this.set(W, this.components[W.route], null);
            } catch (e) {
              throw (
                ((0, s.default)(e) &&
                  e.cancelled &&
                  Router.events.emit('routeChangeError', e, K, V),
                e)
              );
            }
            return Router.events.emit('hashChangeComplete', r, V), !0;
          }
          let J = (0, p.parseRelativeUrl)(t),
            { pathname: Y, query: Z } = J;
          if (null == (u = this.components[Y]) ? void 0 : u.__appRouter)
            return (
              handleHardNavigation({ url: r, router: this }),
              new Promise(() => {})
            );
          try {
            [U, { __rewrites: H }] = await Promise.all([
              this.pageLoader.getPageList(),
              (0, i.getClientBuildManifest)(),
              this.pageLoader.getMiddleware(),
            ]);
          } catch (e) {
            return handleHardNavigation({ url: r, router: this }), !1;
          }
          this.urlIsNew(K) || X || (e = 'replaceState');
          let ee = r;
          Y = Y ? (0, o.removeTrailingSlash)((0, R.removeBasePath)(Y)) : Y;
          let et = (0, o.removeTrailingSlash)(Y),
            er = r.startsWith('/') && (0, p.parseRelativeUrl)(r).pathname,
            ea = !!(
              er &&
              et !== er &&
              (!(0, h.isDynamicRoute)(et) ||
                !(0, m.getRouteMatcher)((0, g.getRouteRegex)(et))(er))
            ),
            en =
              !a.shallow &&
              (await matchesMiddleware({
                asPath: r,
                locale: W.locale,
                router: this,
              }));
          if (
            (B && en && (F = !1),
            F &&
              '/_error' !== Y &&
              ((a._shouldResolveHref = !0),
              (J.pathname = resolveDynamicRoute(Y, U)),
              J.pathname === Y ||
                ((Y = J.pathname),
                (J.pathname = (0, S.addBasePath)(Y)),
                en || (t = (0, y.formatWithValidation)(J)))),
            !(0, C.isLocalURL)(r))
          )
            return handleHardNavigation({ url: r, router: this }), !1;
          (ee = (0, b.removeLocale)((0, R.removeBasePath)(ee), W.locale)),
            (et = (0, o.removeTrailingSlash)(Y));
          let eo = !1;
          if ((0, h.isDynamicRoute)(et)) {
            let e = (0, p.parseRelativeUrl)(ee),
              a = e.pathname,
              n = (0, g.getRouteRegex)(et);
            eo = (0, m.getRouteMatcher)(n)(a);
            let o = et === a,
              i = o ? (0, M.interpolateAs)(et, a, Z) : {};
            if (eo && (!o || i.result))
              o
                ? (r = (0, y.formatWithValidation)(
                    Object.assign({}, e, {
                      pathname: i.result,
                      query: (0, L.omit)(Z, i.params),
                    }),
                  ))
                : Object.assign(Z, eo);
            else {
              let e = Object.keys(n.groups).filter(
                (e) => !Z[e] && !n.groups[e].optional,
              );
              if (e.length > 0 && !en)
                throw Error(
                  (o
                    ? 'The provided `href` (' +
                      t +
                      ') value is missing query values (' +
                      e.join(', ') +
                      ') to be interpolated properly. '
                    : 'The provided `as` value (' +
                      a +
                      ') is incompatible with the `href` value (' +
                      et +
                      '). ') +
                    'Read more: https://nextjs.org/docs/messages/' +
                    (o ? 'href-interpolation-failed' : 'incompatible-href-as'),
                );
            }
          }
          B || Router.events.emit('routeChangeStart', r, V);
          let ei = '/404' === this.pathname || '/_error' === this.pathname;
          try {
            let o = await this.getRouteInfo({
              route: et,
              pathname: Y,
              query: Z,
              as: r,
              resolvedAs: ee,
              routeProps: V,
              locale: W.locale,
              isPreview: W.isPreview,
              hasMiddleware: en,
              unstable_skipClientCache: a.unstable_skipClientCache,
              isQueryUpdating: B && !this.isFallback,
              isMiddlewareRewrite: ea,
            });
            if (
              (B ||
                a.shallow ||
                (await this._bfl(
                  r,
                  'resolvedAs' in o ? o.resolvedAs : void 0,
                  W.locale,
                )),
              'route' in o && en)
            ) {
              (et = Y = o.route || et),
                V.shallow || (Z = Object.assign({}, o.query || {}, Z));
              let e = (0, w.hasBasePath)(J.pathname)
                ? (0, R.removeBasePath)(J.pathname)
                : J.pathname;
              if (
                (eo &&
                  Y !== e &&
                  Object.keys(eo).forEach((e) => {
                    eo && Z[e] === eo[e] && delete Z[e];
                  }),
                (0, h.isDynamicRoute)(Y))
              ) {
                let e =
                    !V.shallow && o.resolvedAs
                      ? o.resolvedAs
                      : (0, S.addBasePath)(
                          (0, P.addLocale)(
                            new URL(r, location.href).pathname,
                            W.locale,
                          ),
                          !0,
                        ),
                  t = e;
                (0, w.hasBasePath)(t) && (t = (0, R.removeBasePath)(t));
                {
                  let e = (0, c.normalizeLocalePath)(t, this.locales);
                  (W.locale = e.detectedLocale || W.locale), (t = e.pathname);
                }
                let a = (0, g.getRouteRegex)(Y),
                  n = (0, m.getRouteMatcher)(a)(
                    new URL(t, location.href).pathname,
                  );
                n && Object.assign(Z, n);
              }
            }
            if ('type' in o) {
              if ('redirect-internal' === o.type)
                return this.change(e, o.newUrl, o.newAs, a);
              return (
                handleHardNavigation({ url: o.destination, router: this }),
                new Promise(() => {})
              );
            }
            let i = o.Component;
            if (i && i.unstable_scriptLoader) {
              let e = [].concat(i.unstable_scriptLoader());
              e.forEach((e) => {
                (0, l.handleClientScriptLoad)(e.props);
              });
            }
            if ((o.__N_SSG || o.__N_SSP) && o.props) {
              if (o.props.pageProps && o.props.pageProps.__N_REDIRECT) {
                a.locale = !1;
                let t = o.props.pageProps.__N_REDIRECT;
                if (
                  t.startsWith('/') &&
                  !1 !== o.props.pageProps.__N_REDIRECT_BASE_PATH
                ) {
                  let r = (0, p.parseRelativeUrl)(t);
                  r.pathname = resolveDynamicRoute(r.pathname, U);
                  let { url: n, as: o } = prepareUrlAs(this, t, t);
                  return this.change(e, n, o, a);
                }
                return (
                  handleHardNavigation({ url: t, router: this }),
                  new Promise(() => {})
                );
              }
              if (
                ((W.isPreview = !!o.props.__N_PREVIEW), o.props.notFound === N)
              ) {
                let e;
                try {
                  await this.fetchComponent('/404'), (e = '/404');
                } catch (t) {
                  e = '/_error';
                }
                if (
                  ((o = await this.getRouteInfo({
                    route: e,
                    pathname: e,
                    query: Z,
                    as: r,
                    resolvedAs: ee,
                    routeProps: { shallow: !1 },
                    locale: W.locale,
                    isPreview: W.isPreview,
                    isNotFound: !0,
                  })),
                  'type' in o)
                )
                  throw Error('Unexpected middleware effect on /404');
              }
            }
            B &&
              '/_error' === this.pathname &&
              (null == (E = self.__NEXT_DATA__.props)
                ? void 0
                : null == (x = E.pageProps)
                ? void 0
                : x.statusCode) === 500 &&
              (null == (O = o.props) ? void 0 : O.pageProps) &&
              (o.props.pageProps.statusCode = 500);
            let u = a.shallow && W.route === (null != (j = o.route) ? j : et),
              d = null != (T = a.scroll) ? T : !B && !u,
              f = null != n ? n : d ? { x: 0, y: 0 } : null,
              y = {
                ...W,
                route: et,
                pathname: Y,
                query: Z,
                asPath: K,
                isFallback: !1,
              };
            if (B && ei) {
              if (
                ((o = await this.getRouteInfo({
                  route: this.pathname,
                  pathname: this.pathname,
                  query: Z,
                  as: r,
                  resolvedAs: ee,
                  routeProps: { shallow: !1 },
                  locale: W.locale,
                  isPreview: W.isPreview,
                  isQueryUpdating: B && !this.isFallback,
                })),
                'type' in o)
              )
                throw Error('Unexpected middleware effect on ' + this.pathname);
              '/_error' === this.pathname &&
                (null == (k = self.__NEXT_DATA__.props)
                  ? void 0
                  : null == (I = k.pageProps)
                  ? void 0
                  : I.statusCode) === 500 &&
                (null == (D = o.props) ? void 0 : D.pageProps) &&
                (o.props.pageProps.statusCode = 500);
              try {
                await this.set(y, o, f);
              } catch (e) {
                throw (
                  ((0, s.default)(e) &&
                    e.cancelled &&
                    Router.events.emit('routeChangeError', e, K, V),
                  e)
                );
              }
              return !0;
            }
            Router.events.emit('beforeHistoryChange', r, V),
              this.changeState(e, t, r, a);
            let _ =
              B && !f && !q && !X && (0, A.compareRouterStates)(y, this.state);
            if (!_) {
              try {
                await this.set(y, o, f);
              } catch (e) {
                if (e.cancelled) o.error = o.error || e;
                else throw e;
              }
              if (o.error)
                throw (
                  (B || Router.events.emit('routeChangeError', o.error, K, V),
                  o.error)
                );
              W.locale && (document.documentElement.lang = W.locale),
                B || Router.events.emit('routeChangeComplete', r, V),
                d && /#.+$/.test(r) && this.scrollToHash(r);
            }
            return !0;
          } catch (e) {
            if ((0, s.default)(e) && e.cancelled) return !1;
            throw e;
          }
        }
        changeState(e, t, r, a) {
          void 0 === a && (a = {}),
            ('pushState' !== e || (0, f.getURL)() !== r) &&
              ((this._shallow = a.shallow),
              window.history[e](
                {
                  url: t,
                  as: r,
                  options: a,
                  __N: !0,
                  key: (this._key =
                    'pushState' !== e ? this._key : createKey()),
                },
                '',
                r,
              ));
        }
        async handleRouteInfoError(e, t, r, a, n, o) {
          if ((console.error(e), e.cancelled)) throw e;
          if ((0, i.isAssetError)(e) || o)
            throw (
              (Router.events.emit('routeChangeError', e, a, n),
              handleHardNavigation({ url: a, router: this }),
              buildCancellationError())
            );
          try {
            let a;
            let { page: n, styleSheets: o } = await this.fetchComponent(
                '/_error',
              ),
              i = { props: a, Component: n, styleSheets: o, err: e, error: e };
            if (!i.props)
              try {
                i.props = await this.getInitialProps(n, {
                  err: e,
                  pathname: t,
                  query: r,
                });
              } catch (e) {
                console.error('Error in error page `getInitialProps`: ', e),
                  (i.props = {});
              }
            return i;
          } catch (e) {
            return this.handleRouteInfoError(
              (0, s.default)(e) ? e : Error(e + ''),
              t,
              r,
              a,
              n,
              !0,
            );
          }
        }
        async getRouteInfo(e) {
          let {
              route: t,
              pathname: r,
              query: a,
              as: n,
              resolvedAs: i,
              routeProps: l,
              locale: u,
              hasMiddleware: d,
              isPreview: f,
              unstable_skipClientCache: h,
              isQueryUpdating: p,
              isMiddlewareRewrite: m,
              isNotFound: g,
            } = e,
            _ = t;
          try {
            var v, P, b, S;
            let e = getCancelledHandler({ route: _, router: this }),
              t = this.components[_];
            if (l.shallow && t && this.route === _) return t;
            d && (t = void 0);
            let s = !t || 'initial' in t ? void 0 : t,
              w = {
                dataHref: this.pageLoader.getDataHref({
                  href: (0, y.formatWithValidation)({ pathname: r, query: a }),
                  skipInterpolation: !0,
                  asPath: g ? '/404' : i,
                  locale: u,
                }),
                hasMiddleware: !0,
                isServerRender: this.isSsr,
                parseJSON: !0,
                inflightCache: p ? this.sbc : this.sdc,
                persistCache: !f,
                isPrefetch: !1,
                unstable_skipClientCache: h,
                isBackground: p,
              },
              x =
                p && !m
                  ? null
                  : await withMiddlewareEffects({
                      fetchData: () => fetchNextData(w),
                      asPath: g ? '/404' : i,
                      locale: u,
                      router: this,
                    }).catch((e) => {
                      if (p) return null;
                      throw e;
                    });
            if (
              (x && ('/_error' === r || '/404' === r) && (x.effect = void 0),
              p &&
                (x
                  ? (x.json = self.__NEXT_DATA__.props)
                  : (x = { json: self.__NEXT_DATA__.props })),
              e(),
              (null == x
                ? void 0
                : null == (v = x.effect)
                ? void 0
                : v.type) === 'redirect-internal' ||
                (null == x
                  ? void 0
                  : null == (P = x.effect)
                  ? void 0
                  : P.type) === 'redirect-external')
            )
              return x.effect;
            if (
              (null == x
                ? void 0
                : null == (b = x.effect)
                ? void 0
                : b.type) === 'rewrite'
            ) {
              let e = (0, o.removeTrailingSlash)(x.effect.resolvedHref),
                n = await this.pageLoader.getPageList();
              if (
                (!p || n.includes(e)) &&
                ((_ = e),
                (r = x.effect.resolvedHref),
                (a = { ...a, ...x.effect.parsedAs.query }),
                (i = (0, R.removeBasePath)(
                  (0, c.normalizeLocalePath)(
                    x.effect.parsedAs.pathname,
                    this.locales,
                  ).pathname,
                )),
                (t = this.components[_]),
                l.shallow && t && this.route === _ && !d)
              )
                return { ...t, route: _ };
            }
            if ((0, E.isAPIRoute)(_))
              return (
                handleHardNavigation({ url: n, router: this }),
                new Promise(() => {})
              );
            let O =
                s ||
                (await this.fetchComponent(_).then((e) => ({
                  Component: e.page,
                  styleSheets: e.styleSheets,
                  __N_SSG: e.mod.__N_SSG,
                  __N_SSP: e.mod.__N_SSP,
                }))),
              j =
                null == x
                  ? void 0
                  : null == (S = x.response)
                  ? void 0
                  : S.headers.get('x-middleware-skip'),
              A = O.__N_SSG || O.__N_SSP;
            j &&
              (null == x ? void 0 : x.dataHref) &&
              delete this.sdc[x.dataHref];
            let { props: C, cacheKey: L } = await this._getData(async () => {
              if (A) {
                if ((null == x ? void 0 : x.json) && !j)
                  return { cacheKey: x.cacheKey, props: x.json };
                let e = (null == x ? void 0 : x.dataHref)
                    ? x.dataHref
                    : this.pageLoader.getDataHref({
                        href: (0, y.formatWithValidation)({
                          pathname: r,
                          query: a,
                        }),
                        asPath: i,
                        locale: u,
                      }),
                  t = await fetchNextData({
                    dataHref: e,
                    isServerRender: this.isSsr,
                    parseJSON: !0,
                    inflightCache: j ? {} : this.sdc,
                    persistCache: !f,
                    isPrefetch: !1,
                    unstable_skipClientCache: h,
                  });
                return { cacheKey: t.cacheKey, props: t.json || {} };
              }
              return {
                headers: {},
                props: await this.getInitialProps(O.Component, {
                  pathname: r,
                  query: a,
                  asPath: n,
                  locale: u,
                  locales: this.locales,
                  defaultLocale: this.defaultLocale,
                }),
              };
            });
            return (
              O.__N_SSP && w.dataHref && L && delete this.sdc[L],
              this.isPreview ||
                !O.__N_SSG ||
                p ||
                fetchNextData(
                  Object.assign({}, w, {
                    isBackground: !0,
                    persistCache: !1,
                    inflightCache: this.sbc,
                  }),
                ).catch(() => {}),
              (C.pageProps = Object.assign({}, C.pageProps)),
              (O.props = C),
              (O.route = _),
              (O.query = a),
              (O.resolvedAs = i),
              (this.components[_] = O),
              O
            );
          } catch (e) {
            return this.handleRouteInfoError(
              (0, s.getProperError)(e),
              r,
              a,
              n,
              l,
            );
          }
        }
        set(e, t, r) {
          return (
            (this.state = e), this.sub(t, this.components['/_app'].Component, r)
          );
        }
        beforePopState(e) {
          this._bps = e;
        }
        onlyAHashChange(e) {
          if (!this.asPath) return !1;
          let [t, r] = this.asPath.split('#'),
            [a, n] = e.split('#');
          return (!!n && t === a && r === n) || (t === a && r !== n);
        }
        scrollToHash(e) {
          let [, t = ''] = e.split('#');
          (0, T.handleSmoothScroll)(
            () => {
              if ('' === t || 'top' === t) {
                window.scrollTo(0, 0);
                return;
              }
              let e = decodeURIComponent(t),
                r = document.getElementById(e);
              if (r) {
                r.scrollIntoView();
                return;
              }
              let a = document.getElementsByName(e)[0];
              a && a.scrollIntoView();
            },
            { onlyHashChange: this.onlyAHashChange(e) },
          );
        }
        urlIsNew(e) {
          return this.asPath !== e;
        }
        async prefetch(e, t, r) {
          void 0 === t && (t = e), void 0 === r && (r = {});
          let a = (0, p.parseRelativeUrl)(e),
            n = a.pathname,
            { pathname: i, query: l } = a,
            s = i;
          if (!1 === r.locale) {
            (i = (0, c.normalizeLocalePath)(i, this.locales).pathname),
              (a.pathname = i),
              (e = (0, y.formatWithValidation)(a));
            let n = (0, p.parseRelativeUrl)(t),
              o = (0, c.normalizeLocalePath)(n.pathname, this.locales);
            (n.pathname = o.pathname),
              (r.locale = o.detectedLocale || this.defaultLocale),
              (t = (0, y.formatWithValidation)(n));
          }
          let u = await this.pageLoader.getPageList(),
            d = t,
            f = void 0 !== r.locale ? r.locale || void 0 : this.locale,
            _ = await matchesMiddleware({ asPath: t, locale: f, router: this });
          (a.pathname = resolveDynamicRoute(a.pathname, u)),
            (0, h.isDynamicRoute)(a.pathname) &&
              ((i = a.pathname),
              (a.pathname = i),
              Object.assign(
                l,
                (0, m.getRouteMatcher)((0, g.getRouteRegex)(a.pathname))(
                  (0, v.parsePath)(t).pathname,
                ) || {},
              ),
              _ || (e = (0, y.formatWithValidation)(a)));
          let P = await withMiddlewareEffects({
            fetchData: () =>
              fetchNextData({
                dataHref: this.pageLoader.getDataHref({
                  href: (0, y.formatWithValidation)({ pathname: s, query: l }),
                  skipInterpolation: !0,
                  asPath: d,
                  locale: f,
                }),
                hasMiddleware: !0,
                isServerRender: this.isSsr,
                parseJSON: !0,
                inflightCache: this.sdc,
                persistCache: !this.isPreview,
                isPrefetch: !0,
              }),
            asPath: t,
            locale: f,
            router: this,
          });
          if (
            ((null == P ? void 0 : P.effect.type) === 'rewrite' &&
              ((a.pathname = P.effect.resolvedHref),
              (i = P.effect.resolvedHref),
              (l = { ...l, ...P.effect.parsedAs.query }),
              (d = P.effect.parsedAs.pathname),
              (e = (0, y.formatWithValidation)(a))),
            (null == P ? void 0 : P.effect.type) === 'redirect-external')
          )
            return;
          let b = (0, o.removeTrailingSlash)(i);
          (await this._bfl(t, d, r.locale, !0)) &&
            (this.components[n] = { __appRouter: !0 }),
            await Promise.all([
              this.pageLoader._isSsg(b).then(
                (t) =>
                  !!t &&
                  fetchNextData({
                    dataHref: (null == P ? void 0 : P.json)
                      ? null == P
                        ? void 0
                        : P.dataHref
                      : this.pageLoader.getDataHref({
                          href: e,
                          asPath: d,
                          locale: f,
                        }),
                    isServerRender: !1,
                    parseJSON: !0,
                    inflightCache: this.sdc,
                    persistCache: !this.isPreview,
                    isPrefetch: !0,
                    unstable_skipClientCache:
                      r.unstable_skipClientCache || (r.priority && !0),
                  })
                    .then(() => !1)
                    .catch(() => !1),
              ),
              this.pageLoader[r.priority ? 'loadPage' : 'prefetch'](b),
            ]);
        }
        async fetchComponent(e) {
          let t = getCancelledHandler({ route: e, router: this });
          try {
            let r = await this.pageLoader.loadPage(e);
            return t(), r;
          } catch (e) {
            throw (t(), e);
          }
        }
        _getData(e) {
          let t = !1,
            cancel = () => {
              t = !0;
            };
          return (
            (this.clc = cancel),
            e().then((e) => {
              if ((cancel === this.clc && (this.clc = null), t)) {
                let e = Error('Loading initial props cancelled');
                throw ((e.cancelled = !0), e);
              }
              return e;
            })
          );
        }
        _getFlightData(e) {
          return fetchNextData({
            dataHref: e,
            isServerRender: !0,
            parseJSON: !1,
            inflightCache: this.sdc,
            persistCache: !1,
            isPrefetch: !1,
          }).then((e) => {
            let { text: t } = e;
            return { data: t };
          });
        }
        getInitialProps(e, t) {
          let { Component: r } = this.components['/_app'],
            a = this._wrapApp(r);
          return (
            (t.AppTree = a),
            (0, f.loadGetInitialProps)(r, {
              AppTree: a,
              Component: e,
              router: this,
              ctx: t,
            })
          );
        }
        get route() {
          return this.state.route;
        }
        get pathname() {
          return this.state.pathname;
        }
        get query() {
          return this.state.query;
        }
        get asPath() {
          return this.state.asPath;
        }
        get locale() {
          return this.state.locale;
        }
        get isFallback() {
          return this.state.isFallback;
        }
        get isPreview() {
          return this.state.isPreview;
        }
        constructor(
          e,
          t,
          a,
          {
            initialProps: n,
            pageLoader: i,
            App: l,
            wrapApp: s,
            Component: u,
            err: c,
            subscription: d,
            isFallback: m,
            locale: g,
            locales: v,
            defaultLocale: P,
            domainLocales: b,
            isPreview: R,
          },
        ) {
          (this.sdc = {}),
            (this.sbc = {}),
            (this.isFirstPopStateEvent = !0),
            (this._key = createKey()),
            (this.onPopState = (e) => {
              let t;
              let { isFirstPopStateEvent: r } = this;
              this.isFirstPopStateEvent = !1;
              let a = e.state;
              if (!a) {
                let { pathname: e, query: t } = this;
                this.changeState(
                  'replaceState',
                  (0, y.formatWithValidation)({
                    pathname: (0, S.addBasePath)(e),
                    query: t,
                  }),
                  (0, f.getURL)(),
                );
                return;
              }
              if (a.__NA) {
                window.location.reload();
                return;
              }
              if (
                !a.__N ||
                (r && this.locale === a.options.locale && a.as === this.asPath)
              )
                return;
              let { url: n, as: o, options: i, key: l } = a;
              this._key = l;
              let { pathname: s } = (0, p.parseRelativeUrl)(n);
              (!this.isSsr ||
                o !== (0, S.addBasePath)(this.asPath) ||
                s !== (0, S.addBasePath)(this.pathname)) &&
                (!this._bps || this._bps(a)) &&
                this.change(
                  'replaceState',
                  n,
                  o,
                  Object.assign({}, i, {
                    shallow: i.shallow && this._shallow,
                    locale: i.locale || this.defaultLocale,
                    _h: 0,
                  }),
                  t,
                );
            });
          let w = (0, o.removeTrailingSlash)(e);
          (this.components = {}),
            '/_error' !== e &&
              (this.components[w] = {
                Component: u,
                initial: !0,
                props: n,
                err: c,
                __N_SSG: n && n.__N_SSG,
                __N_SSP: n && n.__N_SSP,
              }),
            (this.components['/_app'] = { Component: l, styleSheets: [] });
          {
            let { BloomFilter: e } = r(684),
              t = {
                numItems: 0,
                errorRate: 0.01,
                numBits: 0,
                numHashes: null,
                bitArray: [],
              },
              a = {
                numItems: 0,
                errorRate: 0.01,
                numBits: 0,
                numHashes: null,
                bitArray: [],
              };
            (null == t ? void 0 : t.numHashes) &&
              ((this._bfl_s = new e(t.numItems, t.errorRate)),
              this._bfl_s.import(t)),
              (null == a ? void 0 : a.numHashes) &&
                ((this._bfl_d = new e(a.numItems, a.errorRate)),
                this._bfl_d.import(a));
          }
          (this.events = Router.events), (this.pageLoader = i);
          let x = (0, h.isDynamicRoute)(e) && self.__NEXT_DATA__.autoExport;
          (this.basePath = ''),
            (this.sub = d),
            (this.clc = null),
            (this._wrapApp = s),
            (this.isSsr = !0),
            (this.isLocaleDomain = !1),
            (this.isReady = !!(
              self.__NEXT_DATA__.gssp ||
              self.__NEXT_DATA__.gip ||
              self.__NEXT_DATA__.isExperimentalCompile ||
              (self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp) ||
              (!x && !self.location.search)
            )),
            (this.locales = v),
            (this.defaultLocale = P),
            (this.domainLocales = b),
            (this.isLocaleDomain = !!(0, _.detectDomainLocale)(
              b,
              self.location.hostname,
            )),
            (this.state = {
              route: w,
              pathname: e,
              query: t,
              asPath: x ? e : a,
              isPreview: !!R,
              locale: g,
              isFallback: m,
            }),
            (this._initialMatchesMiddlewarePromise = Promise.resolve(!1));
        }
      };
      Router.events = (0, d.default)();
    },
    7699: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'addLocale', {
          enumerable: !0,
          get: function () {
            return addLocale;
          },
        });
      let a = r(6063),
        n = r(387);
      function addLocale(e, t, r, o) {
        if (!t || t === r) return e;
        let i = e.toLowerCase();
        return !o &&
          ((0, n.pathHasPrefix)(i, '/api') ||
            (0, n.pathHasPrefix)(i, '/' + t.toLowerCase()))
          ? e
          : (0, a.addPathPrefix)(e, '/' + t);
      }
    },
    6063: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'addPathPrefix', {
          enumerable: !0,
          get: function () {
            return addPathPrefix;
          },
        });
      let a = r(1156);
      function addPathPrefix(e, t) {
        if (!e.startsWith('/') || !t) return e;
        let { pathname: r, query: n, hash: o } = (0, a.parsePath)(e);
        return '' + t + r + n + o;
      }
    },
    4233: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'addPathSuffix', {
          enumerable: !0,
          get: function () {
            return addPathSuffix;
          },
        });
      let a = r(1156);
      function addPathSuffix(e, t) {
        if (!e.startsWith('/') || !t) return e;
        let { pathname: r, query: n, hash: o } = (0, a.parsePath)(e);
        return '' + r + t + n + o;
      }
    },
    3090: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          normalizeAppPath: function () {
            return normalizeAppPath;
          },
          normalizeRscPath: function () {
            return normalizeRscPath;
          },
        });
      let a = r(504),
        n = r(6163);
      function normalizeAppPath(e) {
        return (0, a.ensureLeadingSlash)(
          e
            .split('/')
            .reduce(
              (e, t, r, a) =>
                !t ||
                (0, n.isGroupSegment)(t) ||
                '@' === t[0] ||
                (('page' === t || 'route' === t) && r === a.length - 1)
                  ? e
                  : e + '/' + t,
              '',
            ),
        );
      }
      function normalizeRscPath(e, t) {
        return t ? e.replace(/\.rsc($|\?)/, '$1') : e;
      }
    },
    7763: (e, t) => {
      'use strict';
      function compareRouterStates(e, t) {
        let r = Object.keys(e);
        if (r.length !== Object.keys(t).length) return !1;
        for (let a = r.length; a--; ) {
          let n = r[a];
          if ('query' === n) {
            let r = Object.keys(e.query);
            if (r.length !== Object.keys(t.query).length) return !1;
            for (let a = r.length; a--; ) {
              let n = r[a];
              if (!t.query.hasOwnProperty(n) || e.query[n] !== t.query[n])
                return !1;
            }
          } else if (!t.hasOwnProperty(n) || e[n] !== t[n]) return !1;
        }
        return !0;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'compareRouterStates', {
          enumerable: !0,
          get: function () {
            return compareRouterStates;
          },
        });
    },
    7841: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'formatNextPathnameInfo', {
          enumerable: !0,
          get: function () {
            return formatNextPathnameInfo;
          },
        });
      let a = r(7425),
        n = r(6063),
        o = r(4233),
        i = r(7699);
      function formatNextPathnameInfo(e) {
        let t = (0, i.addLocale)(
          e.pathname,
          e.locale,
          e.buildId ? void 0 : e.defaultLocale,
          e.ignorePrefix,
        );
        return (
          (e.buildId || !e.trailingSlash) &&
            (t = (0, a.removeTrailingSlash)(t)),
          e.buildId &&
            (t = (0, o.addPathSuffix)(
              (0, n.addPathPrefix)(t, '/_next/data/' + e.buildId),
              '/' === e.pathname ? 'index.json' : '.json',
            )),
          (t = (0, n.addPathPrefix)(t, e.basePath)),
          !e.buildId && e.trailingSlash
            ? t.endsWith('/')
              ? t
              : (0, o.addPathSuffix)(t, '/')
            : (0, a.removeTrailingSlash)(t)
        );
      }
    },
    4364: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return formatUrl;
          },
          urlObjectKeys: function () {
            return i;
          },
          formatWithValidation: function () {
            return formatWithValidation;
          },
        });
      let a = r(8760),
        n = a._(r(5980)),
        o = /https?|ftp|gopher|file/;
      function formatUrl(e) {
        let { auth: t, hostname: r } = e,
          a = e.protocol || '',
          i = e.pathname || '',
          l = e.hash || '',
          s = e.query || '',
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
          e.host
            ? (u = t + e.host)
            : r &&
              ((u = t + (~r.indexOf(':') ? '[' + r + ']' : r)),
              e.port && (u += ':' + e.port)),
          s &&
            'object' == typeof s &&
            (s = String(n.urlQueryToSearchParams(s)));
        let c = e.search || (s && '?' + s) || '';
        return (
          a && !a.endsWith(':') && (a += ':'),
          e.slashes || ((!a || o.test(a)) && !1 !== u)
            ? ((u = '//' + (u || '')), i && '/' !== i[0] && (i = '/' + i))
            : u || (u = ''),
          l && '#' !== l[0] && (l = '#' + l),
          c && '?' !== c[0] && (c = '?' + c),
          '' +
            a +
            u +
            (i = i.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace('#', '%23')) +
            l
        );
      }
      let i = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ];
      function formatWithValidation(e) {
        return formatUrl(e);
      }
    },
    8356: (e, t) => {
      'use strict';
      function getAssetPathFromRoute(e, t) {
        void 0 === t && (t = '');
        let r =
          '/' === e
            ? '/index'
            : /^\/index(\/|$)/.test(e)
            ? '/index' + e
            : '' + e;
        return r + t;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return getAssetPathFromRoute;
          },
        });
    },
    7007: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getNextPathnameInfo', {
          enumerable: !0,
          get: function () {
            return getNextPathnameInfo;
          },
        });
      let a = r(1774),
        n = r(2531),
        o = r(387);
      function getNextPathnameInfo(e, t) {
        var r, i;
        let {
            basePath: l,
            i18n: s,
            trailingSlash: u,
          } = null != (r = t.nextConfig) ? r : {},
          c = { pathname: e, trailingSlash: '/' !== e ? e.endsWith('/') : u };
        l &&
          (0, o.pathHasPrefix)(c.pathname, l) &&
          ((c.pathname = (0, n.removePathPrefix)(c.pathname, l)),
          (c.basePath = l));
        let d = c.pathname;
        if (
          c.pathname.startsWith('/_next/data/') &&
          c.pathname.endsWith('.json')
        ) {
          let e = c.pathname
              .replace(/^\/_next\/data\//, '')
              .replace(/\.json$/, '')
              .split('/'),
            r = e[0];
          (c.buildId = r),
            (d = 'index' !== e[1] ? '/' + e.slice(1).join('/') : '/'),
            !0 === t.parseData && (c.pathname = d);
        }
        if (s) {
          let e = t.i18nProvider
            ? t.i18nProvider.analyze(c.pathname)
            : (0, a.normalizeLocalePath)(c.pathname, s.locales);
          (c.locale = e.detectedLocale),
            (c.pathname = null != (i = e.pathname) ? i : c.pathname),
            !e.detectedLocale &&
              c.buildId &&
              (e = t.i18nProvider
                ? t.i18nProvider.analyze(d)
                : (0, a.normalizeLocalePath)(d, s.locales)).detectedLocale &&
              (c.locale = e.detectedLocale);
        }
        return c;
      }
    },
    3937: (e, t) => {
      'use strict';
      function handleSmoothScroll(e, t) {
        if ((void 0 === t && (t = {}), t.onlyHashChange)) {
          e();
          return;
        }
        let r = document.documentElement,
          a = r.style.scrollBehavior;
        (r.style.scrollBehavior = 'auto'),
          t.dontForceLayout || r.getClientRects(),
          e(),
          (r.style.scrollBehavior = a);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'handleSmoothScroll', {
          enumerable: !0,
          get: function () {
            return handleSmoothScroll;
          },
        });
    },
    2969: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'interpolateAs', {
          enumerable: !0,
          get: function () {
            return interpolateAs;
          },
        });
      let a = r(2142),
        n = r(2839);
      function interpolateAs(e, t, r) {
        let o = '',
          i = (0, n.getRouteRegex)(e),
          l = i.groups,
          s = (t !== e ? (0, a.getRouteMatcher)(i)(t) : '') || r;
        o = e;
        let u = Object.keys(l);
        return (
          u.every((e) => {
            let t = s[e] || '',
              { repeat: r, optional: a } = l[e],
              n = '[' + (r ? '...' : '') + e + ']';
            return (
              a && (n = (t ? '' : '/') + '[' + n + ']'),
              r && !Array.isArray(t) && (t = [t]),
              (a || e in s) &&
                (o =
                  o.replace(
                    n,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join('/')
                      : encodeURIComponent(t),
                  ) || '/')
            );
          }) || (o = ''),
          { params: u, result: o }
        );
      }
    },
    5119: (e, t) => {
      'use strict';
      function isBot(e) {
        return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(
          e,
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isBot', {
          enumerable: !0,
          get: function () {
            return isBot;
          },
        });
    },
    2227: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isLocalURL', {
          enumerable: !0,
          get: function () {
            return isLocalURL;
          },
        });
      let a = r(109),
        n = r(6864);
      function isLocalURL(e) {
        if (!(0, a.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, a.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, n.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    6455: (e, t) => {
      'use strict';
      function omit(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((a) => {
            t.includes(a) || (r[a] = e[a]);
          }),
          r
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'omit', {
          enumerable: !0,
          get: function () {
            return omit;
          },
        });
    },
    1156: (e, t) => {
      'use strict';
      function parsePath(e) {
        let t = e.indexOf('#'),
          r = e.indexOf('?'),
          a = r > -1 && (t < 0 || r < t);
        return a || t > -1
          ? {
              pathname: e.substring(0, a ? r : t),
              query: a ? e.substring(r, t > -1 ? t : void 0) : '',
              hash: t > -1 ? e.slice(t) : '',
            }
          : { pathname: e, query: '', hash: '' };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'parsePath', {
          enumerable: !0,
          get: function () {
            return parsePath;
          },
        });
    },
    1748: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'parseRelativeUrl', {
          enumerable: !0,
          get: function () {
            return parseRelativeUrl;
          },
        }),
        r(109);
      let a = r(5980);
      function parseRelativeUrl(e, t) {
        let r = new URL('http://n'),
          n = t ? new URL(t, r) : e.startsWith('.') ? new URL('http://n') : r,
          {
            pathname: o,
            searchParams: i,
            search: l,
            hash: s,
            href: u,
            origin: c,
          } = new URL(e, n);
        if (c !== r.origin)
          throw Error('invariant: invalid relative URL, router received ' + e);
        return {
          pathname: o,
          query: (0, a.searchParamsToUrlQuery)(i),
          search: l,
          hash: s,
          href: u.slice(r.origin.length),
        };
      }
    },
    9081: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'parseUrl', {
          enumerable: !0,
          get: function () {
            return parseUrl;
          },
        });
      let a = r(5980),
        n = r(1748);
      function parseUrl(e) {
        if (e.startsWith('/')) return (0, n.parseRelativeUrl)(e);
        let t = new URL(e);
        return {
          hash: t.hash,
          hostname: t.hostname,
          href: t.href,
          pathname: t.pathname,
          port: t.port,
          protocol: t.protocol,
          query: (0, a.searchParamsToUrlQuery)(t.searchParams),
          search: t.search,
        };
      }
    },
    387: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'pathHasPrefix', {
          enumerable: !0,
          get: function () {
            return pathHasPrefix;
          },
        });
      let a = r(1156);
      function pathHasPrefix(e, t) {
        if ('string' != typeof e) return !1;
        let { pathname: r } = (0, a.parsePath)(e);
        return r === t || r.startsWith(t + '/');
      }
    },
    6616: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getPathMatch', {
          enumerable: !0,
          get: function () {
            return getPathMatch;
          },
        });
      let a = r(4329);
      function getPathMatch(e, t) {
        let r = [],
          n = (0, a.pathToRegexp)(e, r, {
            delimiter: '/',
            sensitive:
              'boolean' == typeof (null == t ? void 0 : t.sensitive) &&
              t.sensitive,
            strict: null == t ? void 0 : t.strict,
          }),
          o = (0, a.regexpToFunction)(
            (null == t ? void 0 : t.regexModifier)
              ? new RegExp(t.regexModifier(n.source), n.flags)
              : n,
            r,
          );
        return (e, a) => {
          if ('string' != typeof e) return !1;
          let n = o(e);
          if (!n) return !1;
          if (null == t ? void 0 : t.removeUnnamedParams)
            for (let e of r)
              'number' == typeof e.name && delete n.params[e.name];
          return { ...a, ...n.params };
        };
      }
    },
    4293: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          matchHas: function () {
            return matchHas;
          },
          compileNonPath: function () {
            return compileNonPath;
          },
          prepareDestination: function () {
            return prepareDestination;
          },
        });
      let a = r(4329),
        n = r(6614),
        o = r(9081),
        i = r(2407),
        l = r(4702),
        s = r(1730);
      function unescapeSegments(e) {
        return e.replace(/__ESC_COLON_/gi, ':');
      }
      function matchHas(e, t, r, a) {
        void 0 === r && (r = []), void 0 === a && (a = []);
        let n = {},
          hasMatch = (r) => {
            let a;
            let o = r.key;
            switch (r.type) {
              case 'header':
                (o = o.toLowerCase()), (a = e.headers[o]);
                break;
              case 'cookie':
                if ('cookies' in e) a = e.cookies[r.key];
                else {
                  let t = (0, s.getCookieParser)(e.headers)();
                  a = t[r.key];
                }
                break;
              case 'query':
                a = t[o];
                break;
              case 'host': {
                let { host: t } = (null == e ? void 0 : e.headers) || {},
                  r = null == t ? void 0 : t.split(':')[0].toLowerCase();
                a = r;
              }
            }
            if (!r.value && a)
              return (
                (n[
                  (function (e) {
                    let t = '';
                    for (let r = 0; r < e.length; r++) {
                      let a = e.charCodeAt(r);
                      ((a > 64 && a < 91) || (a > 96 && a < 123)) &&
                        (t += e[r]);
                    }
                    return t;
                  })(o)
                ] = a),
                !0
              );
            if (a) {
              let e = RegExp('^' + r.value + '$'),
                t = Array.isArray(a) ? a.slice(-1)[0].match(e) : a.match(e);
              if (t)
                return (
                  Array.isArray(t) &&
                    (t.groups
                      ? Object.keys(t.groups).forEach((e) => {
                          n[e] = t.groups[e];
                        })
                      : 'host' === r.type && t[0] && (n.host = t[0])),
                  !0
                );
            }
            return !1;
          },
          o = r.every((e) => hasMatch(e)) && !a.some((e) => hasMatch(e));
        return !!o && n;
      }
      function compileNonPath(e, t) {
        if (!e.includes(':')) return e;
        for (let r of Object.keys(t))
          e.includes(':' + r) &&
            (e = e
              .replace(
                RegExp(':' + r + '\\*', 'g'),
                ':' + r + '--ESCAPED_PARAM_ASTERISKS',
              )
              .replace(
                RegExp(':' + r + '\\?', 'g'),
                ':' + r + '--ESCAPED_PARAM_QUESTION',
              )
              .replace(
                RegExp(':' + r + '\\+', 'g'),
                ':' + r + '--ESCAPED_PARAM_PLUS',
              )
              .replace(
                RegExp(':' + r + '(?!\\w)', 'g'),
                '--ESCAPED_PARAM_COLON' + r,
              ));
        return (
          (e = e
            .replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1')
            .replace(/--ESCAPED_PARAM_PLUS/g, '+')
            .replace(/--ESCAPED_PARAM_COLON/g, ':')
            .replace(/--ESCAPED_PARAM_QUESTION/g, '?')
            .replace(/--ESCAPED_PARAM_ASTERISKS/g, '*')),
          (0, a.compile)('/' + e, { validate: !1 })(t).slice(1)
        );
      }
      function prepareDestination(e) {
        let t;
        let r = Object.assign({}, e.query);
        delete r.__nextLocale,
          delete r.__nextDefaultLocale,
          delete r.__nextDataReq,
          delete r.__nextInferredLocaleFromDefault,
          delete r[l.NEXT_RSC_UNION_QUERY];
        let s = e.destination;
        for (let t of Object.keys({ ...e.params, ...r }))
          s = s.replace(
            RegExp(':' + (0, n.escapeStringRegexp)(t), 'g'),
            '__ESC_COLON_' + t,
          );
        let u = (0, o.parseUrl)(s),
          c = u.query,
          d = unescapeSegments('' + u.pathname + (u.hash || '')),
          f = unescapeSegments(u.hostname || ''),
          h = [],
          p = [];
        (0, a.pathToRegexp)(d, h), (0, a.pathToRegexp)(f, p);
        let m = [];
        h.forEach((e) => m.push(e.name)), p.forEach((e) => m.push(e.name));
        let g = (0, a.compile)(d, { validate: !1 }),
          y = (0, a.compile)(f, { validate: !1 });
        for (let [t, r] of Object.entries(c))
          Array.isArray(r)
            ? (c[t] = r.map((t) =>
                compileNonPath(unescapeSegments(t), e.params),
              ))
            : 'string' == typeof r &&
              (c[t] = compileNonPath(unescapeSegments(r), e.params));
        let _ = Object.keys(e.params).filter((e) => 'nextInternalLocale' !== e);
        if (e.appendParamsToQuery && !_.some((e) => m.includes(e)))
          for (let t of _) t in c || (c[t] = e.params[t]);
        if ((0, i.isInterceptionRouteAppPath)(d))
          for (let t of d.split('/')) {
            let r = i.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e));
            if (r) {
              e.params['0'] = r;
              break;
            }
          }
        try {
          t = g(e.params);
          let [r, a] = t.split('#');
          (u.hostname = y(e.params)),
            (u.pathname = r),
            (u.hash = (a ? '#' : '') + (a || '')),
            delete u.search;
        } catch (e) {
          if (e.message.match(/Expected .*? to not repeat, but got an array/))
            throw Error(
              'To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match',
            );
          throw e;
        }
        return (
          (u.query = { ...r, ...u.query }),
          { newUrl: t, destQuery: c, parsedDestination: u }
        );
      }
    },
    5980: (e, t) => {
      'use strict';
      function searchParamsToUrlQuery(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
              ? t[r].push(e)
              : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function stringifyUrlQueryParam(e) {
        return 'string' != typeof e &&
          ('number' != typeof e || isNaN(e)) &&
          'boolean' != typeof e
          ? ''
          : String(e);
      }
      function urlQueryToSearchParams(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, a] = e;
            Array.isArray(a)
              ? a.forEach((e) => t.append(r, stringifyUrlQueryParam(e)))
              : t.set(r, stringifyUrlQueryParam(a));
          }),
          t
        );
      }
      function assign(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1;
          a < t;
          a++
        )
          r[a - 1] = arguments[a];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          searchParamsToUrlQuery: function () {
            return searchParamsToUrlQuery;
          },
          urlQueryToSearchParams: function () {
            return urlQueryToSearchParams;
          },
          assign: function () {
            return assign;
          },
        });
    },
    2531: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'removePathPrefix', {
          enumerable: !0,
          get: function () {
            return removePathPrefix;
          },
        });
      let a = r(387);
      function removePathPrefix(e, t) {
        if (!(0, a.pathHasPrefix)(e, t)) return e;
        let r = e.slice(t.length);
        return r.startsWith('/') ? r : '/' + r;
      }
    },
    7425: (e, t) => {
      'use strict';
      function removeTrailingSlash(e) {
        return e.replace(/\/$/, '') || '/';
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'removeTrailingSlash', {
          enumerable: !0,
          get: function () {
            return removeTrailingSlash;
          },
        });
    },
    4958: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return resolveRewrites;
          },
        });
      let a = r(6616),
        n = r(4293),
        o = r(7425),
        i = r(1774),
        l = r(8961),
        s = r(1748);
      function resolveRewrites(e, t, r, u, c, d) {
        let f,
          h = !1,
          p = !1,
          m = (0, s.parseRelativeUrl)(e),
          g = (0, o.removeTrailingSlash)(
            (0, i.normalizeLocalePath)((0, l.removeBasePath)(m.pathname), d)
              .pathname,
          ),
          handleRewrite = (r) => {
            let s = (0, a.getPathMatch)(r.source + '', {
                removeUnnamedParams: !0,
                strict: !0,
              }),
              y = s(m.pathname);
            if ((r.has || r.missing) && y) {
              let e = (0, n.matchHas)(
                {
                  headers: {
                    host: document.location.hostname,
                    'user-agent': navigator.userAgent,
                  },
                  cookies: document.cookie.split('; ').reduce((e, t) => {
                    let [r, ...a] = t.split('=');
                    return (e[r] = a.join('=')), e;
                  }, {}),
                },
                m.query,
                r.has,
                r.missing,
              );
              e ? Object.assign(y, e) : (y = !1);
            }
            if (y) {
              if (!r.destination) return (p = !0), !0;
              let a = (0, n.prepareDestination)({
                appendParamsToQuery: !0,
                destination: r.destination,
                params: y,
                query: u,
              });
              if (
                ((m = a.parsedDestination),
                (e = a.newUrl),
                Object.assign(u, a.parsedDestination.query),
                (g = (0, o.removeTrailingSlash)(
                  (0, i.normalizeLocalePath)((0, l.removeBasePath)(e), d)
                    .pathname,
                )),
                t.includes(g))
              )
                return (h = !0), (f = g), !0;
              if ((f = c(g)) !== e && t.includes(f)) return (h = !0), !0;
            }
          },
          y = !1;
        for (let e = 0; e < r.beforeFiles.length; e++)
          handleRewrite(r.beforeFiles[e]);
        if (!(h = t.includes(g))) {
          if (!y) {
            for (let e = 0; e < r.afterFiles.length; e++)
              if (handleRewrite(r.afterFiles[e])) {
                y = !0;
                break;
              }
          }
          if ((y || ((f = c(g)), (y = h = t.includes(f))), !y)) {
            for (let e = 0; e < r.fallback.length; e++)
              if (handleRewrite(r.fallback[e])) {
                y = !0;
                break;
              }
          }
        }
        return {
          asPath: e,
          parsedAs: m,
          matchedPage: h,
          resolvedHref: f,
          externalDest: p,
        };
      }
    },
    2142: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getRouteMatcher', {
          enumerable: !0,
          get: function () {
            return getRouteMatcher;
          },
        });
      let a = r(109);
      function getRouteMatcher(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let n = t.exec(e);
          if (!n) return !1;
          let decode = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new a.DecodeError('failed to decode param');
              }
            },
            o = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                a = n[t.pos];
              void 0 !== a &&
                (o[e] = ~a.indexOf('/')
                  ? a.split('/').map((e) => decode(e))
                  : t.repeat
                  ? [decode(a)]
                  : decode(a));
            }),
            o
          );
        };
      }
    },
    2839: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getRouteRegex: function () {
            return getRouteRegex;
          },
          getNamedRouteRegex: function () {
            return getNamedRouteRegex;
          },
          getNamedMiddlewareRegex: function () {
            return getNamedMiddlewareRegex;
          },
        });
      let a = r(2407),
        n = r(6614),
        o = r(7425);
      function parseParameter(e) {
        let t = e.startsWith('[') && e.endsWith(']');
        t && (e = e.slice(1, -1));
        let r = e.startsWith('...');
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function getParametrizedRoute(e) {
        let t = (0, o.removeTrailingSlash)(e).slice(1).split('/'),
          r = {},
          i = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = a.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && o) {
                let { key: e, optional: a, repeat: l } = parseParameter(o[1]);
                return (
                  (r[e] = { pos: i++, repeat: l, optional: a }),
                  '/' + (0, n.escapeStringRegexp)(t) + '([^/]+?)'
                );
              }
              if (!o) return '/' + (0, n.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: a } = parseParameter(o[1]);
                return (
                  (r[e] = { pos: i++, repeat: t, optional: a }),
                  t ? (a ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)'
                );
              }
            })
            .join(''),
          groups: r,
        };
      }
      function getRouteRegex(e) {
        let { parameterizedRoute: t, groups: r } = getParametrizedRoute(e);
        return { re: RegExp('^' + t + '(?:/)?$'), groups: r };
      }
      function getSafeKeyFromSegment(e) {
        let { getSafeRouteKey: t, segment: r, routeKeys: a, keyPrefix: n } = e,
          { key: o, optional: i, repeat: l } = parseParameter(r),
          s = o.replace(/\W/g, '');
        n && (s = '' + n + s);
        let u = !1;
        return (
          (0 === s.length || s.length > 30) && (u = !0),
          isNaN(parseInt(s.slice(0, 1))) || (u = !0),
          u && (s = t()),
          n ? (a[s] = '' + n + o) : (a[s] = '' + o),
          l
            ? i
              ? '(?:/(?<' + s + '>.+?))?'
              : '/(?<' + s + '>.+?)'
            : '/(?<' + s + '>[^/]+?)'
        );
      }
      function getNamedParametrizedRoute(e, t) {
        let r;
        let i = (0, o.removeTrailingSlash)(e).slice(1).split('/'),
          l =
            ((r = 0),
            () => {
              let e = '',
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          s = {};
        return {
          namedParameterizedRoute: i
            .map((e) => {
              let r = a.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              return r && o
                ? getSafeKeyFromSegment({
                    getSafeRouteKey: l,
                    segment: o[1],
                    routeKeys: s,
                    keyPrefix: t ? 'nxtI' : void 0,
                  })
                : o
                ? getSafeKeyFromSegment({
                    getSafeRouteKey: l,
                    segment: o[1],
                    routeKeys: s,
                    keyPrefix: t ? 'nxtP' : void 0,
                  })
                : '/' + (0, n.escapeStringRegexp)(e);
            })
            .join(''),
          routeKeys: s,
        };
      }
      function getNamedRouteRegex(e, t) {
        let r = getNamedParametrizedRoute(e, t);
        return {
          ...getRouteRegex(e),
          namedRegex: '^' + r.namedParameterizedRoute + '(?:/)?$',
          routeKeys: r.routeKeys,
        };
      }
      function getNamedMiddlewareRegex(e, t) {
        let { parameterizedRoute: r } = getParametrizedRoute(e),
          { catchAll: a = !0 } = t;
        if ('/' === r) return { namedRegex: '^/' + (a ? '.*' : '') + '$' };
        let { namedParameterizedRoute: n } = getNamedParametrizedRoute(e, !1);
        return { namedRegex: '^' + n + (a ? '(?:(/.*)?)' : '') + '$' };
      }
    },
    6163: (e, t) => {
      'use strict';
      function isGroupSegment(e) {
        return '(' === e[0] && e.endsWith(')');
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isGroupSegment', {
          enumerable: !0,
          get: function () {
            return isGroupSegment;
          },
        });
    },
    738: (e) => {
      (() => {
        'use strict';
        'undefined' != typeof __nccwpck_require__ &&
          (__nccwpck_require__.ab = __dirname + '/');
        var t = {};
        (() => {
          /*!
           * cookie
           * Copyright(c) 2012-2014 Roman Shtylman
           * Copyright(c) 2015 Douglas Christopher Wilson
           * MIT Licensed
           */ (t.parse = function (t, r) {
            if ('string' != typeof t)
              throw TypeError('argument str must be a string');
            for (
              var n = {}, o = t.split(a), i = (r || {}).decode || e, l = 0;
              l < o.length;
              l++
            ) {
              var s = o[l],
                u = s.indexOf('=');
              if (!(u < 0)) {
                var c = s.substr(0, u).trim(),
                  d = s.substr(++u, s.length).trim();
                '"' == d[0] && (d = d.slice(1, -1)),
                  void 0 == n[c] &&
                    (n[c] = (function (e, t) {
                      try {
                        return t(e);
                      } catch (t) {
                        return e;
                      }
                    })(d, i));
              }
            }
            return n;
          }),
            (t.serialize = function (e, t, a) {
              var o = a || {},
                i = o.encode || r;
              if ('function' != typeof i)
                throw TypeError('option encode is invalid');
              if (!n.test(e)) throw TypeError('argument name is invalid');
              var l = i(t);
              if (l && !n.test(l)) throw TypeError('argument val is invalid');
              var s = e + '=' + l;
              if (null != o.maxAge) {
                var u = o.maxAge - 0;
                if (isNaN(u) || !isFinite(u))
                  throw TypeError('option maxAge is invalid');
                s += '; Max-Age=' + Math.floor(u);
              }
              if (o.domain) {
                if (!n.test(o.domain))
                  throw TypeError('option domain is invalid');
                s += '; Domain=' + o.domain;
              }
              if (o.path) {
                if (!n.test(o.path)) throw TypeError('option path is invalid');
                s += '; Path=' + o.path;
              }
              if (o.expires) {
                if ('function' != typeof o.expires.toUTCString)
                  throw TypeError('option expires is invalid');
                s += '; Expires=' + o.expires.toUTCString();
              }
              if (
                (o.httpOnly && (s += '; HttpOnly'),
                o.secure && (s += '; Secure'),
                o.sameSite)
              )
                switch (
                  'string' == typeof o.sameSite
                    ? o.sameSite.toLowerCase()
                    : o.sameSite
                ) {
                  case !0:
                  case 'strict':
                    s += '; SameSite=Strict';
                    break;
                  case 'lax':
                    s += '; SameSite=Lax';
                    break;
                  case 'none':
                    s += '; SameSite=None';
                    break;
                  default:
                    throw TypeError('option sameSite is invalid');
                }
              return s;
            });
          var e = decodeURIComponent,
            r = encodeURIComponent,
            a = /; */,
            n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        })(),
          (e.exports = t);
      })();
    },
    1662: (e, t, r) => {
      (() => {
        var t = {
            154: (e, t, r) => {
              var a = r(781),
                n = ['write', 'end', 'destroy'],
                o = ['resume', 'pause'],
                i = ['data', 'close'],
                l = Array.prototype.slice;
              function forEach(e, t) {
                if (e.forEach) return e.forEach(t);
                for (var r = 0; r < e.length; r++) t(e[r], r);
              }
              e.exports = function (e, t) {
                var r = new a(),
                  s = !1;
                return (
                  forEach(n, function (t) {
                    r[t] = function () {
                      return e[t].apply(e, arguments);
                    };
                  }),
                  forEach(o, function (e) {
                    r[e] = function () {
                      r.emit(e);
                      var a = t[e];
                      if (a) return a.apply(t, arguments);
                      t.emit(e);
                    };
                  }),
                  forEach(i, function (e) {
                    t.on(e, function () {
                      var t = l.call(arguments);
                      t.unshift(e), r.emit.apply(r, t);
                    });
                  }),
                  t.on('end', function () {
                    if (!s) {
                      s = !0;
                      var e = l.call(arguments);
                      e.unshift('end'), r.emit.apply(r, e);
                    }
                  }),
                  e.on('drain', function () {
                    r.emit('drain');
                  }),
                  e.on('error', reemit),
                  t.on('error', reemit),
                  (r.writable = e.writable),
                  (r.readable = t.readable),
                  r
                );
                function reemit(e) {
                  r.emit('error', e);
                }
              };
            },
            349: (e, t, r) => {
              'use strict';
              let a = r(147),
                n = r(781),
                o = r(796),
                i = r(154),
                l = r(530),
                getOptions = (e) => Object.assign({ level: 9 }, e);
              (e.exports = (e, t) =>
                e
                  ? l(o.gzip)(e, getOptions(t))
                      .then((e) => e.length)
                      .catch((e) => 0)
                  : Promise.resolve(0)),
                (e.exports.sync = (e, t) =>
                  o.gzipSync(e, getOptions(t)).length),
                (e.exports.stream = (e) => {
                  let t = new n.PassThrough(),
                    r = new n.PassThrough(),
                    a = i(t, r),
                    l = 0,
                    s = o
                      .createGzip(getOptions(e))
                      .on('data', (e) => {
                        l += e.length;
                      })
                      .on('error', () => {
                        a.gzipSize = 0;
                      })
                      .on('end', () => {
                        (a.gzipSize = l), a.emit('gzip-size', l), r.end();
                      });
                  return t.pipe(s), t.pipe(r, { end: !1 }), a;
                }),
                (e.exports.file = (t, r) =>
                  new Promise((n, o) => {
                    let i = a.createReadStream(t);
                    i.on('error', o);
                    let l = i.pipe(e.exports.stream(r));
                    l.on('error', o), l.on('gzip-size', n);
                  })),
                (e.exports.fileSync = (t, r) =>
                  e.exports.sync(a.readFileSync(t), r));
            },
            530: (e) => {
              'use strict';
              let processFn = (e, t) =>
                function (...r) {
                  let a = t.promiseModule;
                  return new a((a, n) => {
                    t.multiArgs
                      ? r.push((...e) => {
                          t.errorFirst
                            ? e[0]
                              ? n(e)
                              : (e.shift(), a(e))
                            : a(e);
                        })
                      : t.errorFirst
                      ? r.push((e, t) => {
                          e ? n(e) : a(t);
                        })
                      : r.push(a),
                      e.apply(this, r);
                  });
                };
              e.exports = (e, t) => {
                let r;
                t = Object.assign(
                  {
                    exclude: [/.+(Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise,
                  },
                  t,
                );
                let a = typeof e;
                if (!(null !== e && ('object' === a || 'function' === a)))
                  throw TypeError(
                    `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
                      null === e ? 'null' : a
                    }\``,
                  );
                let filter = (e) => {
                  let match = (t) =>
                    'string' == typeof t ? e === t : t.test(e);
                  return t.include
                    ? t.include.some(match)
                    : !t.exclude.some(match);
                };
                for (let n in ((r =
                  'function' === a
                    ? function (...r) {
                        return t.excludeMain
                          ? e(...r)
                          : processFn(e, t).apply(this, r);
                      }
                    : Object.create(Object.getPrototypeOf(e))),
                e)) {
                  let a = e[n];
                  r[n] =
                    'function' == typeof a && filter(n) ? processFn(a, t) : a;
                }
                return r;
              };
            },
            147: (e) => {
              'use strict';
              e.exports = r(7147);
            },
            781: (e) => {
              'use strict';
              e.exports = r(2781);
            },
            796: (e) => {
              'use strict';
              e.exports = r(9796);
            },
          },
          a = {};
        function __nccwpck_require__(e) {
          var r = a[e];
          if (void 0 !== r) return r.exports;
          var n = (a[e] = { exports: {} }),
            o = !0;
          try {
            t[e](n, n.exports, __nccwpck_require__), (o = !1);
          } finally {
            o && delete a[e];
          }
          return n.exports;
        }
        __nccwpck_require__.ab = __dirname + '/';
        var n = __nccwpck_require__(349);
        e.exports = n;
      })();
    },
    4329: (e, t) => {
      'use strict';
      function parse(e, t) {
        void 0 === t && (t = {});
        for (
          var r = (function (e) {
              for (var t = [], r = 0; r < e.length; ) {
                var a = e[r];
                if ('*' === a || '+' === a || '?' === a) {
                  t.push({ type: 'MODIFIER', index: r, value: e[r++] });
                  continue;
                }
                if ('\\' === a) {
                  t.push({ type: 'ESCAPED_CHAR', index: r++, value: e[r++] });
                  continue;
                }
                if ('{' === a) {
                  t.push({ type: 'OPEN', index: r, value: e[r++] });
                  continue;
                }
                if ('}' === a) {
                  t.push({ type: 'CLOSE', index: r, value: e[r++] });
                  continue;
                }
                if (':' === a) {
                  for (var n = '', o = r + 1; o < e.length; ) {
                    var i = e.charCodeAt(o);
                    if (
                      (i >= 48 && i <= 57) ||
                      (i >= 65 && i <= 90) ||
                      (i >= 97 && i <= 122) ||
                      95 === i
                    ) {
                      n += e[o++];
                      continue;
                    }
                    break;
                  }
                  if (!n) throw TypeError('Missing parameter name at ' + r);
                  t.push({ type: 'NAME', index: r, value: n }), (r = o);
                  continue;
                }
                if ('(' === a) {
                  var l = 1,
                    s = '',
                    o = r + 1;
                  if ('?' === e[o])
                    throw TypeError('Pattern cannot start with "?" at ' + o);
                  for (; o < e.length; ) {
                    if ('\\' === e[o]) {
                      s += e[o++] + e[o++];
                      continue;
                    }
                    if (')' === e[o]) {
                      if (0 == --l) {
                        o++;
                        break;
                      }
                    } else if ('(' === e[o] && (l++, '?' !== e[o + 1]))
                      throw TypeError(
                        'Capturing groups are not allowed at ' + o,
                      );
                    s += e[o++];
                  }
                  if (l) throw TypeError('Unbalanced pattern at ' + r);
                  if (!s) throw TypeError('Missing pattern at ' + r);
                  t.push({ type: 'PATTERN', index: r, value: s }), (r = o);
                  continue;
                }
                t.push({ type: 'CHAR', index: r, value: e[r++] });
              }
              return t.push({ type: 'END', index: r, value: '' }), t;
            })(e),
            a = t.prefixes,
            n = void 0 === a ? './' : a,
            o = '[^' + escapeString(t.delimiter || '/#?') + ']+?',
            i = [],
            l = 0,
            s = 0,
            u = '',
            tryConsume = function (e) {
              if (s < r.length && r[s].type === e) return r[s++].value;
            },
            mustConsume = function (e) {
              var t = tryConsume(e);
              if (void 0 !== t) return t;
              var a = r[s];
              throw TypeError(
                'Unexpected ' + a.type + ' at ' + a.index + ', expected ' + e,
              );
            },
            consumeText = function () {
              for (
                var e, t = '';
                (e = tryConsume('CHAR') || tryConsume('ESCAPED_CHAR'));

              )
                t += e;
              return t;
            };
          s < r.length;

        ) {
          var c = tryConsume('CHAR'),
            d = tryConsume('NAME'),
            f = tryConsume('PATTERN');
          if (d || f) {
            var h = c || '';
            -1 === n.indexOf(h) && ((u += h), (h = '')),
              u && (i.push(u), (u = '')),
              i.push({
                name: d || l++,
                prefix: h,
                suffix: '',
                pattern: f || o,
                modifier: tryConsume('MODIFIER') || '',
              });
            continue;
          }
          var p = c || tryConsume('ESCAPED_CHAR');
          if (p) {
            u += p;
            continue;
          }
          if ((u && (i.push(u), (u = '')), tryConsume('OPEN'))) {
            var h = consumeText(),
              m = tryConsume('NAME') || '',
              g = tryConsume('PATTERN') || '',
              y = consumeText();
            mustConsume('CLOSE'),
              i.push({
                name: m || (g ? l++ : ''),
                pattern: m && !g ? o : g,
                prefix: h,
                suffix: y,
                modifier: tryConsume('MODIFIER') || '',
              });
            continue;
          }
          mustConsume('END');
        }
        return i;
      }
      function tokensToFunction(e, t) {
        void 0 === t && (t = {});
        var r = flags(t),
          a = t.encode,
          n =
            void 0 === a
              ? function (e) {
                  return e;
                }
              : a,
          o = t.validate,
          i = void 0 === o || o,
          l = e.map(function (e) {
            if ('object' == typeof e)
              return RegExp('^(?:' + e.pattern + ')$', r);
          });
        return function (t) {
          for (var r = '', a = 0; a < e.length; a++) {
            var o = e[a];
            if ('string' == typeof o) {
              r += o;
              continue;
            }
            var s = t ? t[o.name] : void 0,
              u = '?' === o.modifier || '*' === o.modifier,
              c = '*' === o.modifier || '+' === o.modifier;
            if (Array.isArray(s)) {
              if (!c)
                throw TypeError(
                  'Expected "' + o.name + '" to not repeat, but got an array',
                );
              if (0 === s.length) {
                if (u) continue;
                throw TypeError('Expected "' + o.name + '" to not be empty');
              }
              for (var d = 0; d < s.length; d++) {
                var f = n(s[d], o);
                if (i && !l[a].test(f))
                  throw TypeError(
                    'Expected all "' +
                      o.name +
                      '" to match "' +
                      o.pattern +
                      '", but got "' +
                      f +
                      '"',
                  );
                r += o.prefix + f + o.suffix;
              }
              continue;
            }
            if ('string' == typeof s || 'number' == typeof s) {
              var f = n(String(s), o);
              if (i && !l[a].test(f))
                throw TypeError(
                  'Expected "' +
                    o.name +
                    '" to match "' +
                    o.pattern +
                    '", but got "' +
                    f +
                    '"',
                );
              r += o.prefix + f + o.suffix;
              continue;
            }
            if (!u) {
              var h = c ? 'an array' : 'a string';
              throw TypeError('Expected "' + o.name + '" to be ' + h);
            }
          }
          return r;
        };
      }
      function regexpToFunction(e, t, r) {
        void 0 === r && (r = {});
        var a = r.decode,
          n =
            void 0 === a
              ? function (e) {
                  return e;
                }
              : a;
        return function (r) {
          var a = e.exec(r);
          if (!a) return !1;
          for (
            var o = a[0], i = a.index, l = Object.create(null), s = 1;
            s < a.length;
            s++
          )
            !(function (e) {
              if (void 0 !== a[e]) {
                var r = t[e - 1];
                '*' === r.modifier || '+' === r.modifier
                  ? (l[r.name] = a[e]
                      .split(r.prefix + r.suffix)
                      .map(function (e) {
                        return n(e, r);
                      }))
                  : (l[r.name] = n(a[e], r));
              }
            })(s);
          return { path: o, index: i, params: l };
        };
      }
      function escapeString(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function flags(e) {
        return e && e.sensitive ? '' : 'i';
      }
      function tokensToRegexp(e, t, r) {
        void 0 === r && (r = {});
        for (
          var a = r.strict,
            n = void 0 !== a && a,
            o = r.start,
            i = r.end,
            l = r.encode,
            s =
              void 0 === l
                ? function (e) {
                    return e;
                  }
                : l,
            u = '[' + escapeString(r.endsWith || '') + ']|$',
            c = '[' + escapeString(r.delimiter || '/#?') + ']',
            d = void 0 === o || o ? '^' : '',
            f = 0;
          f < e.length;
          f++
        ) {
          var h = e[f];
          if ('string' == typeof h) d += escapeString(s(h));
          else {
            var p = escapeString(s(h.prefix)),
              m = escapeString(s(h.suffix));
            if (h.pattern) {
              if ((t && t.push(h), p || m)) {
                if ('+' === h.modifier || '*' === h.modifier) {
                  var g = '*' === h.modifier ? '?' : '';
                  d +=
                    '(?:' +
                    p +
                    '((?:' +
                    h.pattern +
                    ')(?:' +
                    m +
                    p +
                    '(?:' +
                    h.pattern +
                    '))*)' +
                    m +
                    ')' +
                    g;
                } else
                  d += '(?:' + p + '(' + h.pattern + ')' + m + ')' + h.modifier;
              } else d += '(' + h.pattern + ')' + h.modifier;
            } else d += '(?:' + p + m + ')' + h.modifier;
          }
        }
        if (void 0 === i || i)
          n || (d += c + '?'), (d += r.endsWith ? '(?=' + u + ')' : '$');
        else {
          var y = e[e.length - 1],
            _ =
              'string' == typeof y
                ? c.indexOf(y[y.length - 1]) > -1
                : void 0 === y;
          n || (d += '(?:' + c + '(?=' + u + '))?'),
            _ || (d += '(?=' + c + '|' + u + ')');
        }
        return new RegExp(d, flags(r));
      }
      function pathToRegexp(e, t, r) {
        return e instanceof RegExp
          ? (function (e, t) {
              if (!t) return e;
              var r = e.source.match(/\((?!\?)/g);
              if (r)
                for (var a = 0; a < r.length; a++)
                  t.push({
                    name: a,
                    prefix: '',
                    suffix: '',
                    modifier: '',
                    pattern: '',
                  });
              return e;
            })(e, t)
          : Array.isArray(e)
          ? RegExp(
              '(?:' +
                e
                  .map(function (e) {
                    return pathToRegexp(e, t, r).source;
                  })
                  .join('|') +
                ')',
              flags(r),
            )
          : tokensToRegexp(parse(e, r), t, r);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.parse = parse),
        (t.compile = function (e, t) {
          return tokensToFunction(parse(e, t), t);
        }),
        (t.tokensToFunction = tokensToFunction),
        (t.match = function (e, t) {
          var r = [];
          return regexpToFunction(pathToRegexp(e, r, t), r, t);
        }),
        (t.regexpToFunction = regexpToFunction),
        (t.tokensToRegexp = tokensToRegexp),
        (t.pathToRegexp = pathToRegexp);
    },
    9423: (e, t) => {
      'use strict';
      function isAPIRoute(e) {
        return '/api' === e || !!(null == e ? void 0 : e.startsWith('/api/'));
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isAPIRoute', {
          enumerable: !0,
          get: function () {
            return isAPIRoute;
          },
        });
    },
    1730: (e, t, r) => {
      'use strict';
      function getCookieParser(e) {
        return function () {
          let { cookie: t } = e;
          if (!t) return {};
          let { parse: a } = r(738);
          return a(Array.isArray(t) ? t.join('; ') : t);
        };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getCookieParser', {
          enumerable: !0,
          get: function () {
            return getCookieParser;
          },
        });
    },
    2407: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          INTERCEPTION_ROUTE_MARKERS: function () {
            return n;
          },
          isInterceptionRouteAppPath: function () {
            return isInterceptionRouteAppPath;
          },
          extractInterceptionRouteInformation: function () {
            return extractInterceptionRouteInformation;
          },
        });
      let a = r(3090),
        n = ['(..)(..)', '(.)', '(..)', '(...)'];
      function isInterceptionRouteAppPath(e) {
        return (
          void 0 !== e.split('/').find((e) => n.find((t) => e.startsWith(t)))
        );
      }
      function extractInterceptionRouteInformation(e) {
        let t, r, o;
        for (let a of e.split('/'))
          if ((r = n.find((e) => a.startsWith(e)))) {
            [t, o] = e.split(r, 2);
            break;
          }
        if (!t || !r || !o)
          throw Error(
            `Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`,
          );
        switch (((t = (0, a.normalizeAppPath)(t)), r)) {
          case '(.)':
            o = '/' === t ? `/${o}` : t + '/' + o;
            break;
          case '(..)':
            if ('/' === t)
              throw Error(
                `Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`,
              );
            o = t.split('/').slice(0, -1).concat(o).join('/');
            break;
          case '(...)':
            o = '/' + o;
            break;
          case '(..)(..)':
            let i = t.split('/');
            if (i.length <= 2)
              throw Error(
                `Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`,
              );
            o = i.slice(0, -2).concat(o).join('/');
            break;
          default:
            throw Error('Invariant: unexpected marker');
        }
        return { interceptingRoute: t, interceptedRoute: o };
      }
    },
    1988: (e, t, r) => {
      'use strict';
      e.exports = r(7093).vendored.contexts.HeadManagerContext;
    },
    5469: (e, t, r) => {
      'use strict';
      e.exports = r(7093).vendored.contexts.RouterContext;
    },
    1163: (e, t, r) => {
      e.exports = r(9974);
    },
    8760: (e, t) => {
      'use strict';
      function _getRequireWildcardCache(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (_getRequireWildcardCache = function (e) {
          return e ? r : t;
        })(e);
      }
      t._ = t._interop_require_wildcard = function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' != typeof e && 'function' != typeof e))
          return { default: e };
        var r = _getRequireWildcardCache(t);
        if (r && r.has(e)) return r.get(e);
        var a = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(a, o, i)
              : (a[o] = e[o]);
          }
        return (a.default = e), r && r.set(e, a), a;
      };
    },
  });
