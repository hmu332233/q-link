'use strict';
(exports.id = 761),
  (exports.ids = [761]),
  (exports.modules = {
    5585: (e, t) => {
      function getObjectClassLabel(e) {
        return Object.prototype.toString.call(e);
      }
      function isPlainObject(e) {
        if ('[object Object]' !== getObjectClassLabel(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || t.hasOwnProperty('isPrototypeOf');
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getObjectClassLabel: function () {
            return getObjectClassLabel;
          },
          isPlainObject: function () {
            return isPlainObject;
          },
        });
    },
    3035: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'denormalizePagePath', {
          enumerable: !0,
          get: function () {
            return denormalizePagePath;
          },
        });
      let n = r(8410),
        o = r(9153);
      function denormalizePagePath(e) {
        let t = (0, o.normalizePathSep)(e);
        return t.startsWith('/index/') && !(0, n.isDynamicRoute)(t)
          ? t.slice(6)
          : '/index' !== t
          ? t
          : '/';
      }
    },
    504: (e, t) => {
      function ensureLeadingSlash(e) {
        return e.startsWith('/') ? e : '/' + e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ensureLeadingSlash', {
          enumerable: !0,
          get: function () {
            return ensureLeadingSlash;
          },
        });
    },
    9153: (e, t) => {
      function normalizePathSep(e) {
        return e.replace(/\\/g, '/');
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'normalizePathSep', {
          enumerable: !0,
          get: function () {
            return normalizePathSep;
          },
        });
    },
    8410: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let n = r(2677),
        o = r(9203);
    },
    9203: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isDynamicRoute', {
          enumerable: !0,
          get: function () {
            return isDynamicRoute;
          },
        });
      let r = /\/\[[^/]+?\](?=\/|$)/;
      function isDynamicRoute(e) {
        return r.test(e);
      }
    },
    2677: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getSortedRoutes', {
          enumerable: !0,
          get: function () {
            return getSortedRoutes;
          },
        });
      let UrlNode = class UrlNode {
        insert(e) {
          this._insert(e.split('/').filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = '/');
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf('[]'), 1),
            null !== this.restSlugName && t.splice(t.indexOf('[...]'), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf('[[...]]'), 1);
          let r = t
            .map((t) => this.children.get(t)._smoosh('' + e + t + '/'))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get('[]')
                  ._smoosh(e + '[' + this.slugName + ']/'),
              ),
            !this.placeholder)
          ) {
            let t = '/' === e ? '/' : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  '[[...' +
                  this.optionalRestSlugName +
                  ']]").',
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get('[...]')
                  ._smoosh(e + '[...' + this.restSlugName + ']/'),
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get('[[...]]')
                  ._smoosh(e + '[[...' + this.optionalRestSlugName + ']]/'),
              ),
            r
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error('Catch-all must be the last part of the URL.');
          let n = e[0];
          if (n.startsWith('[') && n.endsWith(']')) {
            let o = n.slice(1, -1),
              i = !1;
            if (
              (o.startsWith('[') &&
                o.endsWith(']') &&
                ((o = o.slice(1, -1)), (i = !0)),
              o.startsWith('...') && ((o = o.substring(3)), (r = !0)),
              o.startsWith('[') || o.endsWith(']'))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  o +
                  "').",
              );
            if (o.startsWith('.'))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  o +
                  "').",
              );
            function handleSlug(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "').",
                );
              t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path',
                  );
                if (e.replace(/\W/g, '') === n.replace(/\W/g, ''))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                t.push(r);
            }
            if (r) {
              if (i) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).',
                  );
                handleSlug(this.optionalRestSlugName, o),
                  (this.optionalRestSlugName = o),
                  (n = '[[...]]');
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").',
                  );
                handleSlug(this.restSlugName, o),
                  (this.restSlugName = o),
                  (n = '[...]');
              }
            } else {
              if (i)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").',
                );
              handleSlug(this.slugName, o), (this.slugName = o), (n = '[]');
            }
          }
          this.children.has(n) || this.children.set(n, new UrlNode()),
            this.children.get(n)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      };
      function getSortedRoutes(e) {
        let t = new UrlNode();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    109: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return execOnce;
          },
          isAbsoluteUrl: function () {
            return isAbsoluteUrl;
          },
          getLocationOrigin: function () {
            return getLocationOrigin;
          },
          getURL: function () {
            return getURL;
          },
          getDisplayName: function () {
            return getDisplayName;
          },
          isResSent: function () {
            return isResSent;
          },
          normalizeRepeatedSlashes: function () {
            return normalizeRepeatedSlashes;
          },
          loadGetInitialProps: function () {
            return loadGetInitialProps;
          },
          SP: function () {
            return o;
          },
          ST: function () {
            return i;
          },
          DecodeError: function () {
            return DecodeError;
          },
          NormalizeError: function () {
            return NormalizeError;
          },
          PageNotFoundError: function () {
            return PageNotFoundError;
          },
          MissingStaticPage: function () {
            return MissingStaticPage;
          },
          MiddlewareNotFoundError: function () {
            return MiddlewareNotFoundError;
          },
          stringifyError: function () {
            return stringifyError;
          },
        });
      let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
      function execOnce(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        isAbsoluteUrl = (e) => n.test(e);
      function getLocationOrigin() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + '//' + t + (r ? ':' + r : '');
      }
      function getURL() {
        let { href: e } = window.location,
          t = getLocationOrigin();
        return e.substring(t.length);
      }
      function getDisplayName(e) {
        return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
      }
      function isResSent(e) {
        return e.finished || e.headersSent;
      }
      function normalizeRepeatedSlashes(e) {
        let t = e.split('?'),
          r = t[0];
        return (
          r.replace(/\\/g, '/').replace(/\/\/+/g, '/') +
          (t[1] ? '?' + t.slice(1).join('?') : '')
        );
      }
      async function loadGetInitialProps(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await loadGetInitialProps(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && isResSent(r)) return n;
        if (!n) {
          let t =
            '"' +
            getDisplayName(e) +
            '.getInitialProps()" should resolve to an object. But found "' +
            n +
            '" instead.';
          throw Error(t);
        }
        return n;
      }
      let o = 'undefined' != typeof performance,
        i =
          o &&
          ['mark', 'measure', 'getEntriesByName'].every(
            (e) => 'function' == typeof performance[e],
          );
      let DecodeError = class DecodeError extends Error {};
      let NormalizeError = class NormalizeError extends Error {};
      let PageNotFoundError = class PageNotFoundError extends Error {
        constructor(e) {
          super(),
            (this.code = 'ENOENT'),
            (this.name = 'PageNotFoundError'),
            (this.message = 'Cannot find module for page: ' + e);
        }
      };
      let MissingStaticPage = class MissingStaticPage extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              'Failed to load static file for page: ' + e + ' ' + t);
        }
      };
      let MiddlewareNotFoundError = class MiddlewareNotFoundError extends Error {
        constructor() {
          super(),
            (this.code = 'ENOENT'),
            (this.message = 'Cannot find the middleware module');
        }
      };
      function stringifyError(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    676: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return isError;
          },
          getProperError: function () {
            return getProperError;
          },
        });
      let n = r(5585);
      function isError(e) {
        return (
          'object' == typeof e && null !== e && 'name' in e && 'message' in e
        );
      }
      function getProperError(e) {
        return isError(e)
          ? e
          : Error((0, n.isPlainObject)(e) ? JSON.stringify(e) : e + '');
      }
    },
    7093: (e, t, r) => {
      e.exports = r(2785);
    },
    167: (e, t) => {
      t._ = t._interop_require_default = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
  });
