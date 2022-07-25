(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    4184: function (e, t) {
      var n;
      !(function () {
        'use strict';
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var i = typeof n;
              if ('string' === i || 'number' === i) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var a = o.apply(null, n);
                  a && e.push(a);
                }
              } else if ('object' === i)
                if (n.toString === Object.prototype.toString)
                  for (var s in n) r.call(n, s) && n[s] && e.push(s);
                else e.push(n.toString());
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    8679: function (e, t, n) {
      'use strict';
      var r = n(9864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' !== typeof n) {
          if (d) {
            var o = g(n);
            o && o !== d && e(t, o, r);
          }
          var a = l(n);
          f && (a = a.concat(f(n)));
          for (var s = c(t), h = c(n), v = 0; v < a.length; ++v) {
            var y = a[v];
            if (!i[y] && (!r || !r[y]) && (!h || !h[y]) && (!s || !s[y])) {
              var m = p(n, y);
              try {
                u(t, y, m);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    1538: function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function o(e) {
        return (
          (o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          o(e)
        );
      }
      function i(e, t, n) {
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
      n.d(t, {
        cC: function () {
          return K;
        },
        Jc: function () {
          return Nt;
        },
        $G: function () {
          return W;
        },
      });
      var a = n(7294),
        s = n(1739),
        c = n.n(s),
        u = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
      function l(e) {
        var t = {
            type: 'tag',
            name: '',
            voidElement: !1,
            attrs: {},
            children: [],
          },
          n = e.match(/<\/?([^\s]+?)[/\s>]/);
        if (
          n &&
          ((t.name = n[1]),
          (c()[n[1]] || '/' === e.charAt(e.length - 2)) && (t.voidElement = !0),
          t.name.startsWith('!--'))
        ) {
          var r = e.indexOf('--\x3e');
          return { type: 'comment', comment: -1 !== r ? e.slice(4, r) : '' };
        }
        for (var o = new RegExp(u), i = null; null !== (i = o.exec(e)); )
          if (i[0].trim())
            if (i[1]) {
              var a = i[1].trim(),
                s = [a, ''];
              a.indexOf('=') > -1 && (s = a.split('=')),
                (t.attrs[s[0]] = s[1]),
                o.lastIndex--;
            } else
              i[2] &&
                (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
        return t;
      }
      var f = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        p = /^\s*$/,
        g = Object.create(null);
      function d(e, t) {
        switch (t.type) {
          case 'text':
            return e + t.content;
          case 'tag':
            return (
              (e +=
                '<' +
                t.name +
                (t.attrs
                  ? (function (e) {
                      var t = [];
                      for (var n in e) t.push(n + '="' + e[n] + '"');
                      return t.length ? ' ' + t.join(' ') : '';
                    })(t.attrs)
                  : '') +
                (t.voidElement ? '/>' : '>')),
              t.voidElement
                ? e
                : e + t.children.reduce(d, '') + '</' + t.name + '>'
            );
          case 'comment':
            return e + '\x3c!--' + t.comment + '--\x3e';
        }
      }
      var h = {
          parse: function (e, t) {
            t || (t = {}), t.components || (t.components = g);
            var n,
              r = [],
              o = [],
              i = -1,
              a = !1;
            if (0 !== e.indexOf('<')) {
              var s = e.indexOf('<');
              r.push({
                type: 'text',
                content: -1 === s ? e : e.substring(0, s),
              });
            }
            return (
              e.replace(f, function (s, c) {
                if (a) {
                  if (s !== '</' + n.name + '>') return;
                  a = !1;
                }
                var u,
                  f = '/' !== s.charAt(1),
                  g = s.startsWith('\x3c!--'),
                  d = c + s.length,
                  h = e.charAt(d);
                if (g) {
                  var v = l(s);
                  return i < 0
                    ? (r.push(v), r)
                    : ((u = o[i]).children.push(v), r);
                }
                if (
                  (f &&
                    (i++,
                    'tag' === (n = l(s)).type &&
                      t.components[n.name] &&
                      ((n.type = 'component'), (a = !0)),
                    n.voidElement ||
                      a ||
                      !h ||
                      '<' === h ||
                      n.children.push({
                        type: 'text',
                        content: e.slice(d, e.indexOf('<', d)),
                      }),
                    0 === i && r.push(n),
                    (u = o[i - 1]) && u.children.push(n),
                    (o[i] = n)),
                  (!f || n.voidElement) &&
                    (i > -1 &&
                      (n.voidElement || n.name === s.slice(2, -1)) &&
                      (i--, (n = -1 === i ? r : o[i])),
                    !a && '<' !== h && h))
                ) {
                  u = -1 === i ? r : o[i].children;
                  var y = e.indexOf('<', d),
                    m = e.slice(d, -1 === y ? void 0 : y);
                  p.test(m) && (m = ' '),
                    ((y > -1 && i + u.length >= 0) || ' ' !== m) &&
                      u.push({ type: 'text', content: m });
                }
              }),
              r
            );
          },
          stringify: function (e) {
            return e.reduce(function (e, t) {
              return e + d('', t);
            }, '');
          },
        },
        v = h,
        y = ''.replace,
        m = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
        b = {
          '&amp;': '&',
          '&#38;': '&',
          '&lt;': '<',
          '&#60;': '<',
          '&gt;': '>',
          '&#62;': '>',
          '&apos;': "'",
          '&#39;': "'",
          '&quot;': '"',
          '&#34;': '"',
        };
      function O(e) {
        return b[e];
      }
      function w(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var x,
        k = {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: '',
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
          useSuspense: !0,
        },
        j = a.createContext();
      function S() {
        return k;
      }
      var P = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.usedNamespaces = {});
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'addUsedNamespaces',
              value: function (e) {
                var t = this;
                e.forEach(function (e) {
                  t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
                });
              },
            },
            {
              key: 'getUsedNamespaces',
              value: function () {
                return Object.keys(this.usedNamespaces);
              },
            },
          ]) && w(t.prototype, n),
          r && w(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e
        );
      })();
      function L() {
        return x;
      }
      function N() {
        if (console && console.warn) {
          for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          'string' === typeof n[0] && (n[0] = 'react-i18next:: '.concat(n[0])),
            (e = console).warn.apply(e, n);
        }
      }
      var E = {};
      function C() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ('string' === typeof t[0] && E[t[0]]) ||
          ('string' === typeof t[0] && (E[t[0]] = new Date()),
          N.apply(void 0, t));
      }
      function R(e, t, n) {
        e.loadNamespaces(t, function () {
          if (e.isInitialized) n();
          else {
            e.on('initialized', function t() {
              setTimeout(function () {
                e.off('initialized', t);
              }, 0),
                n();
            });
          }
        });
      }
      function I(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = t.languages[0],
          o = !!t.options && t.options.fallbackLng,
          i = t.languages[t.languages.length - 1];
        if ('cimode' === r.toLowerCase()) return !0;
        var a = function (e, n) {
          var r =
            t.services.backendConnector.state[''.concat(e, '|').concat(n)];
          return -1 === r || 2 === r;
        };
        return (
          !(
            n.bindI18n &&
            n.bindI18n.indexOf('languageChanging') > -1 &&
            t.services.backendConnector.backend &&
            t.isLanguageChangingTo &&
            !a(t.isLanguageChangingTo, e)
          ) &&
          (!!t.hasResourceBundle(r, e) ||
            !(
              t.services.backendConnector.backend &&
              (!t.options.resources || t.options.partialBundledLanguages)
            ) ||
            !(!a(r, e) || (o && !a(i, e))))
        );
      }
      function D(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!t.languages || !t.languages.length)
          return C('i18n.languages were undefined or empty', t.languages), !0;
        var r = void 0 !== t.options.ignoreJSONStructure;
        return r
          ? t.hasLoadedNamespace(e, {
              precheck: function (t, r) {
                if (
                  n.bindI18n &&
                  n.bindI18n.indexOf('languageChanging') > -1 &&
                  t.services.backendConnector.backend &&
                  t.isLanguageChangingTo &&
                  !r(t.isLanguageChangingTo, e)
                )
                  return !1;
              },
            })
          : I(e, t, n);
      }
      var T = ['format'],
        A = [
          'children',
          'count',
          'parent',
          'i18nKey',
          'context',
          'tOptions',
          'values',
          'defaults',
          'components',
          'ns',
          'i18n',
          't',
          'shouldUnescape',
        ];
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function V(e, t) {
        if (!e) return !1;
        var n = e.props ? e.props.children : e.children;
        return t ? n.length > 0 : !!n;
      }
      function U(e) {
        return e
          ? e && e.children
            ? e.children
            : e.props && e.props.children
          : [];
      }
      function $(e) {
        return Array.isArray(e) ? e : [e];
      }
      function _(e, t) {
        if (!e) return '';
        var n = '',
          i = $(e),
          s =
            t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor
              ? t.transKeepBasicHtmlNodesFor
              : [];
        return (
          i.forEach(function (e, i) {
            if ('string' === typeof e) n += ''.concat(e);
            else if (a.isValidElement(e)) {
              var c = Object.keys(e.props).length,
                u = s.indexOf(e.type) > -1,
                l = e.props.children;
              if (!l && u && 0 === c) n += '<'.concat(e.type, '/>');
              else if (l || (u && 0 === c))
                if (e.props.i18nIsDynamicList)
                  n += '<'.concat(i, '></').concat(i, '>');
                else if (u && 1 === c && 'string' === typeof l)
                  n += '<'
                    .concat(e.type, '>')
                    .concat(l, '</')
                    .concat(e.type, '>');
                else {
                  var f = _(l, t);
                  n += '<'.concat(i, '>').concat(f, '</').concat(i, '>');
                }
              else n += '<'.concat(i, '></').concat(i, '>');
            } else if (null === e)
              N(
                'Trans: the passed in value is invalid - seems you passed in a null child.',
              );
            else if ('object' === o(e)) {
              var p = e.format,
                g = r(e, T),
                d = Object.keys(g);
              if (1 === d.length) {
                var h = p ? ''.concat(d[0], ', ').concat(p) : d[0];
                n += '{{'.concat(h, '}}');
              } else
                N(
                  'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
                  e,
                );
            } else
              N(
                'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
                e,
              );
          }),
          n
        );
      }
      function B(e, t, n, r, i, s) {
        if ('' === t) return [];
        var c = r.transKeepBasicHtmlNodesFor || [],
          u = t && new RegExp(c.join('|')).test(t);
        if (!e && !u) return [t];
        var l = {};
        !(function e(t) {
          $(t).forEach(function (t) {
            'string' !== typeof t &&
              (V(t)
                ? e(U(t))
                : 'object' !== o(t) ||
                  a.isValidElement(t) ||
                  Object.assign(l, t));
          });
        })(e);
        var f = v.parse('<0>'.concat(t, '</0>')),
          p = M(M({}, l), i);
        function g(e, t, n) {
          var r = U(e),
            o = h(r, t.children, n);
          return (function (e) {
            return (
              '[object Array]' === Object.prototype.toString.call(e) &&
              e.every(function (e) {
                return a.isValidElement(e);
              })
            );
          })(r) && 0 === o.length
            ? r
            : o;
        }
        function d(e, t, n, r, o) {
          e.dummy && (e.children = t),
            n.push(
              a.cloneElement(
                e,
                M(M({}, e.props), {}, { key: r }),
                o ? void 0 : t,
              ),
            );
        }
        function h(t, i, l) {
          var f = $(t);
          return $(i).reduce(function (t, i, v) {
            var b,
              w =
                i.children &&
                i.children[0] &&
                i.children[0].content &&
                n.services.interpolator.interpolate(
                  i.children[0].content,
                  p,
                  n.language,
                );
            if ('tag' === i.type) {
              var x = f[parseInt(i.name, 10)];
              !x && 1 === l.length && l[0][i.name] && (x = l[0][i.name]),
                x || (x = {});
              var k =
                  0 !== Object.keys(i.attrs).length
                    ? (function (e, t) {
                        var n = M({}, t);
                        return (n.props = Object.assign(e.props, t.props)), n;
                      })({ props: i.attrs }, x)
                    : x,
                j = a.isValidElement(k),
                S = j && V(i, !0) && !i.voidElement,
                P = u && 'object' === o(k) && k.dummy && !j,
                L =
                  'object' === o(e) &&
                  null !== e &&
                  Object.hasOwnProperty.call(e, i.name);
              if ('string' === typeof k) {
                var N = n.services.interpolator.interpolate(k, p, n.language);
                t.push(N);
              } else if (V(k) || S) {
                d(k, g(k, i, l), t, v);
              } else if (P) {
                var E = h(f, i.children, l);
                t.push(a.cloneElement(k, M(M({}, k.props), {}, { key: v }), E));
              } else if (Number.isNaN(parseFloat(i.name))) {
                if (L) d(k, g(k, i, l), t, v, i.voidElement);
                else if (r.transSupportBasicHtmlNodes && c.indexOf(i.name) > -1)
                  if (i.voidElement)
                    t.push(
                      a.createElement(i.name, {
                        key: ''.concat(i.name, '-').concat(v),
                      }),
                    );
                  else {
                    var C = h(f, i.children, l);
                    t.push(
                      a.createElement(
                        i.name,
                        { key: ''.concat(i.name, '-').concat(v) },
                        C,
                      ),
                    );
                  }
                else if (i.voidElement) t.push('<'.concat(i.name, ' />'));
                else {
                  var R = h(f, i.children, l);
                  t.push(
                    '<'.concat(i.name, '>').concat(R, '</').concat(i.name, '>'),
                  );
                }
              } else if ('object' !== o(k) || j)
                1 === i.children.length && w
                  ? t.push(
                      a.cloneElement(k, M(M({}, k.props), {}, { key: v }), w),
                    )
                  : t.push(
                      a.cloneElement(k, M(M({}, k.props), {}, { key: v })),
                    );
              else {
                var I = i.children[0] ? w : null;
                I && t.push(I);
              }
            } else if ('text' === i.type) {
              var D = r.transWrapTextNodes,
                T = s
                  ? ((b = n.services.interpolator.interpolate(
                      i.content,
                      p,
                      n.language,
                    )),
                    y.call(b, m, O))
                  : n.services.interpolator.interpolate(
                      i.content,
                      p,
                      n.language,
                    );
              D
                ? t.push(
                    a.createElement(
                      D,
                      { key: ''.concat(i.name, '-').concat(v) },
                      T,
                    ),
                  )
                : t.push(T);
            }
            return t;
          }, []);
        }
        return U(h([{ dummy: !0, children: e || [] }], f, $(e || []))[0]);
      }
      function K(e) {
        var t = e.children,
          n = e.count,
          o = e.parent,
          i = e.i18nKey,
          s = e.context,
          c = e.tOptions,
          u = void 0 === c ? {} : c,
          l = e.values,
          f = e.defaults,
          p = e.components,
          g = e.ns,
          d = e.i18n,
          h = e.t,
          v = e.shouldUnescape,
          y = r(e, A),
          m = (0, a.useContext)(j) || {},
          b = m.i18n,
          O = m.defaultNS,
          w = d || b || L();
        if (!w)
          return (
            C(
              'You will need to pass in an i18next instance by using i18nextReactModule',
            ),
            t
          );
        var x =
          h ||
          w.t.bind(w) ||
          function (e) {
            return e;
          };
        s && (u.context = s);
        var k = M(M({}, S()), w.options && w.options.react),
          P = g || x.ns || O || (w.options && w.options.defaultNS);
        P = 'string' === typeof P ? [P] : P || ['translation'];
        var N = f || _(t, k) || k.transEmptyNodeValue || i,
          E = k.hashTransKey,
          R = i || (E ? E(N) : N),
          I = l
            ? u.interpolation
            : {
                interpolation: M(
                  M({}, u.interpolation),
                  {},
                  { prefix: '#$?', suffix: '?$#' },
                ),
              },
          D = M(
            M(M(M({}, u), {}, { count: n }, l), I),
            {},
            { defaultValue: N, ns: P },
          ),
          T = B(p || t, R ? x(R, D) : N, w, k, D, v),
          F = void 0 !== o ? o : k.defaultTransParent;
        return F ? a.createElement(F, y, T) : T;
      }
      function H(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function z(e, t) {
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
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' === typeof e) return H(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? H(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function J(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function W(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.i18n,
          r = (0, a.useContext)(j) || {},
          o = r.i18n,
          i = r.defaultNS,
          s = n || o || L();
        if ((s && !s.reportNamespaces && (s.reportNamespaces = new P()), !s)) {
          C(
            'You will need to pass in an i18next instance by using initReactI18next',
          );
          var c = function (e) {
              return Array.isArray(e) ? e[e.length - 1] : e;
            },
            u = [c, {}, !1];
          return (u.t = c), (u.i18n = {}), (u.ready = !1), u;
        }
        s.options.react &&
          void 0 !== s.options.react.wait &&
          C(
            'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
          );
        var l = q(q(q({}, S()), s.options.react), t),
          f = l.useSuspense,
          p = l.keyPrefix,
          g = e || i || (s.options && s.options.defaultNS);
        (g = 'string' === typeof g ? [g] : g || ['translation']),
          s.reportNamespaces.addUsedNamespaces &&
            s.reportNamespaces.addUsedNamespaces(g);
        var d =
          (s.isInitialized || s.initializedStoreOnce) &&
          g.every(function (e) {
            return D(e, s, l);
          });
        function h() {
          return s.getFixedT(null, 'fallback' === l.nsMode ? g : g[0], p);
        }
        var v = (0, a.useState)(h),
          y = z(v, 2),
          m = y[0],
          b = y[1],
          O = (0, a.useRef)(!0);
        (0, a.useEffect)(
          function () {
            var e = l.bindI18n,
              t = l.bindI18nStore;
            function n() {
              O.current && b(h);
            }
            return (
              (O.current = !0),
              d ||
                f ||
                R(s, g, function () {
                  O.current && b(h);
                }),
              e && s && s.on(e, n),
              t && s && s.store.on(t, n),
              function () {
                (O.current = !1),
                  e &&
                    s &&
                    e.split(' ').forEach(function (e) {
                      return s.off(e, n);
                    }),
                  t &&
                    s &&
                    t.split(' ').forEach(function (e) {
                      return s.store.off(e, n);
                    });
              }
            );
          },
          [s, g.join()],
        );
        var w = (0, a.useRef)(!0);
        (0, a.useEffect)(
          function () {
            O.current && !w.current && b(h), (w.current = !1);
          },
          [s],
        );
        var x = [m, s, d];
        if (((x.t = m), (x.i18n = s), (x.ready = d), d)) return x;
        if (!d && !f) return x;
        throw new Promise(function (e) {
          R(s, g, function () {
            e();
          });
        });
      }
      function Y() {
        return (
          (Y =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Y.apply(this, arguments)
        );
      }
      function G(e, t, n) {
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
      var Q = n(8679),
        Z = n.n(Q);
      function X(e) {
        var t = e.i18n,
          n = e.defaultNS,
          r = e.children,
          o = (0, a.useMemo)(
            function () {
              return { i18n: t, defaultNS: n };
            },
            [t, n],
          );
        return (0, a.createElement)(j.Provider, { value: o }, r);
      }
      function ee(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var te = {
          defaultNS: 'common',
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: 'en', locales: ['en'] },
          get initImmediate() {
            return 'undefined' !== typeof window;
          },
          interpolation: { escapeValue: !1 },
          load: 'currentOnly',
          localeExtension: 'json',
          localePath: './public/locales',
          localeStructure: '{{lng}}/{{ns}}',
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          strictMode: !0,
          use: [],
        },
        ne = ['i18n'],
        re = ['i18n'];
      function oe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? oe(Object(n), !0).forEach(function (t) {
                G(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : oe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var ae = ['backend', 'detection'],
        se = function (e) {
          var t;
          if ('string' !== typeof (null === e || void 0 === e ? void 0 : e.lng))
            throw new Error('config.lng was not passed into createConfig');
          var n = e.i18n,
            r = ee(e, ne),
            o = te.i18n,
            i = ie(ie(ie(ie({}, ee(te, re)), r), o), n),
            a = i.defaultNS,
            s = i.lng,
            c = (i.locales, i.localeExtension),
            u = i.localePath,
            l = i.localeStructure;
          return (
            'cimode' === s ||
              ('undefined' === typeof i.fallbackLng &&
                (i.fallbackLng = i.defaultLocale),
              (null === e ||
              void 0 === e ||
              null === (t = e.use) ||
              void 0 === t
                ? void 0
                : t.some(function (e) {
                    return 'backend' === e.type;
                  })) ||
                ('string' === typeof u
                  ? (i.backend = {
                      addPath: ''
                        .concat(u, '/')
                        .concat(l, '.missing.')
                        .concat(c),
                      loadPath: ''.concat(u, '/').concat(l, '.').concat(c),
                    })
                  : 'function' === typeof u &&
                    (i.backend = {
                      addPath: function (e, t) {
                        return u(e, t, !0);
                      },
                      loadPath: function (e, t) {
                        return u(e, t, !1);
                      },
                    })),
              'string' === typeof i.ns || Array.isArray(i.ns) || (i.ns = [a]),
              ae.forEach(function (t) {
                e[t] && (i[t] = ie(ie({}, i[t]), e[t]));
              })),
            i
          );
        };
      function ce(e) {
        return (
          (ce =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          ce(e)
        );
      }
      function ue(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function le(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function fe(e, t, n) {
        return (
          t && le(e.prototype, t),
          n && le(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function pe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function ge(e, t) {
        return (
          (ge =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          ge(e, t)
        );
      }
      function de(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && ge(e, t);
      }
      function he(e, t) {
        if (t && ('object' === ce(t) || 'function' === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return pe(e);
      }
      function ve(e) {
        return (
          (ve = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ve(e)
        );
      }
      function ye(e, t, n) {
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
      function me(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function be(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ('string' === typeof e) return me(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? me(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function Oe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Oe(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Oe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var xe = {
          type: 'logger',
          log: function (e) {
            this.output('log', e);
          },
          warn: function (e) {
            this.output('warn', e);
          },
          error: function (e) {
            this.output('error', e);
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t);
          },
        },
        ke = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            ue(this, e), this.init(t, n);
          }
          return (
            fe(e, [
              {
                key: 'init',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || xe),
                    (this.options = t),
                    (this.debug = t.debug);
                },
              },
              {
                key: 'setDebug',
                value: function (e) {
                  this.debug = e;
                },
              },
              {
                key: 'log',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'log', '', !0);
                },
              },
              {
                key: 'warn',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'warn', '', !0);
                },
              },
              {
                key: 'error',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'error', '');
                },
              },
              {
                key: 'deprecate',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
                },
              },
              {
                key: 'forward',
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ('string' === typeof e[0] &&
                        (e[0] = ''
                          .concat(n)
                          .concat(this.prefix, ' ')
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(
                    this.logger,
                    we(
                      we(
                        {},
                        { prefix: ''.concat(this.prefix, ':').concat(t, ':') },
                      ),
                      this.options,
                    ),
                  );
                },
              },
            ]),
            e
          );
        })(),
        je = new ke(),
        Se = (function () {
          function e() {
            ue(this, e), (this.observers = {});
          }
          return (
            fe(e, [
              {
                key: 'on',
                value: function (e, t) {
                  var n = this;
                  return (
                    e.split(' ').forEach(function (e) {
                      (n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: 'off',
                value: function (e, t) {
                  this.observers[e] &&
                    (t
                      ? (this.observers[e] = this.observers[e].filter(function (
                          e,
                        ) {
                          return e !== t;
                        }))
                      : delete this.observers[e]);
                },
              },
              {
                key: 'emit',
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  if (this.observers[e]) {
                    var o = [].concat(this.observers[e]);
                    o.forEach(function (e) {
                      e.apply(void 0, n);
                    });
                  }
                  if (this.observers['*']) {
                    var i = [].concat(this.observers['*']);
                    i.forEach(function (t) {
                      t.apply(t, [e].concat(n));
                    });
                  }
                },
              },
            ]),
            e
          );
        })();
      function Pe() {
        var e,
          t,
          n = new Promise(function (n, r) {
            (e = n), (t = r);
          });
        return (n.resolve = e), (n.reject = t), n;
      }
      function Le(e) {
        return null == e ? '' : '' + e;
      }
      function Ne(e, t, n) {
        e.forEach(function (e) {
          t[e] && (n[e] = t[e]);
        });
      }
      function Ee(e, t, n) {
        function r(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e;
        }
        function o() {
          return !e || 'string' === typeof e;
        }
        for (
          var i = 'string' !== typeof t ? [].concat(t) : t.split('.');
          i.length > 1;

        ) {
          if (o()) return {};
          var a = r(i.shift());
          !e[a] && n && (e[a] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
        }
        return o() ? {} : { obj: e, k: r(i.shift()) };
      }
      function Ce(e, t, n) {
        var r = Ee(e, t, Object);
        r.obj[r.k] = n;
      }
      function Re(e, t) {
        var n = Ee(e, t),
          r = n.obj,
          o = n.k;
        if (r) return r[o];
      }
      function Ie(e, t, n) {
        var r = Re(e, n);
        return void 0 !== r ? r : Re(t, n);
      }
      function De(e, t, n) {
        for (var r in t)
          '__proto__' !== r &&
            'constructor' !== r &&
            (r in e
              ? 'string' === typeof e[r] ||
                e[r] instanceof String ||
                'string' === typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : De(e[r], t[r], n)
              : (e[r] = t[r]));
        return e;
      }
      function Te(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      var Ae = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      };
      function Fe(e) {
        return 'string' === typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return Ae[e];
            })
          : e;
      }
      var Me =
          'undefined' !== typeof window &&
          window.navigator &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf('MSIE') > -1,
        Ve = [' ', ',', '?', '!', ';'];
      function Ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ue(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ue(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function _e(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ve(e);
          if (t) {
            var o = ve(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return he(this, n);
        };
      }
      function Be(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.';
        if (e) {
          if (e[t]) return e[t];
          for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
            if (!o) return;
            if ('string' === typeof o[r[i]] && i + 1 < r.length) return;
            if (void 0 === o[r[i]]) {
              for (
                var a = 2, s = r.slice(i, i + a).join(n), c = o[s];
                void 0 === c && r.length > i + a;

              )
                a++, (c = o[(s = r.slice(i, i + a).join(n))]);
              if (void 0 === c) return;
              if (t.endsWith(s)) {
                if ('string' === typeof c) return c;
                if (s && 'string' === typeof c[s]) return c[s];
              }
              var u = r.slice(i + a).join(n);
              return u ? Be(c, u, n) : void 0;
            }
            o = o[r[i]];
          }
          return o;
        }
      }
      var Ke = (function (e) {
          de(n, e);
          var t = _e(n);
          function n(e) {
            var r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' };
            return (
              ue(this, n),
              (r = t.call(this)),
              Me && Se.call(pe(r)),
              (r.data = e || {}),
              (r.options = o),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = '.'),
              void 0 === r.options.ignoreJSONStructure &&
                (r.options.ignoreJSONStructure = !0),
              r
            );
          }
          return (
            fe(n, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                },
              },
              {
                key: 'removeNamespaces',
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: 'getResource',
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o =
                      void 0 !== r.keySeparator
                        ? r.keySeparator
                        : this.options.keySeparator,
                    i =
                      void 0 !== r.ignoreJSONStructure
                        ? r.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    a = [e, t];
                  n && 'string' !== typeof n && (a = a.concat(n)),
                    n &&
                      'string' === typeof n &&
                      (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf('.') > -1 && (a = e.split('.'));
                  var s = Re(this.data, a);
                  return s || !i || 'string' !== typeof n
                    ? s
                    : Be(this.data && this.data[e] && this.data[e][t], n, o);
                },
              },
              {
                key: 'addResource',
                value: function (e, t, n, r) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    i = this.options.keySeparator;
                  void 0 === i && (i = '.');
                  var a = [e, t];
                  n && (a = a.concat(i ? n.split(i) : n)),
                    e.indexOf('.') > -1 &&
                      ((r = t), (t = (a = e.split('.'))[1])),
                    this.addNamespaces(t),
                    Ce(this.data, a, r),
                    o.silent || this.emit('added', e, t, n, r);
                },
              },
              {
                key: 'addResources',
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var o in n)
                    ('string' !== typeof n[o] &&
                      '[object Array]' !==
                        Object.prototype.toString.apply(n[o])) ||
                      this.addResource(e, t, o, n[o], { silent: !0 });
                  r.silent || this.emit('added', e, t, n);
                },
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, n, r, o) {
                  var i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    a = [e, t];
                  e.indexOf('.') > -1 &&
                    ((r = n), (n = t), (t = (a = e.split('.'))[1])),
                    this.addNamespaces(t);
                  var s = Re(this.data, a) || {};
                  r ? De(s, n, o) : (s = $e($e({}, s), n)),
                    Ce(this.data, a, s),
                    i.silent || this.emit('added', e, t, n);
                },
              },
              {
                key: 'removeResourceBundle',
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t);
                },
              },
              {
                key: 'hasResourceBundle',
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: 'getResourceBundle',
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    'v1' === this.options.compatibilityAPI
                      ? $e($e({}, {}), this.getResource(e, t))
                      : this.getResource(e, t)
                  );
                },
              },
              {
                key: 'getDataByLanguage',
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: 'hasLanguageSomeTranslations',
                value: function (e) {
                  var t = this.getDataByLanguage(e);
                  return !!((t && Object.keys(t)) || []).find(function (e) {
                    return t[e] && Object.keys(t[e]).length > 0;
                  });
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.data;
                },
              },
            ]),
            n
          );
        })(Se),
        He = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, n, r, o) {
            var i = this;
            return (
              e.forEach(function (e) {
                i.processors[e] && (t = i.processors[e].process(t, n, r, o));
              }),
              t
            );
          },
        };
      function ze(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ze(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ze(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function qe(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ve(e);
          if (t) {
            var o = ve(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return he(this, n);
        };
      }
      var We = {},
        Ye = (function (e) {
          de(n, e);
          var t = qe(n);
          function n(e) {
            var r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              ue(this, n),
              (r = t.call(this)),
              Me && Se.call(pe(r)),
              Ne(
                [
                  'resourceStore',
                  'languageUtils',
                  'pluralResolver',
                  'interpolator',
                  'backendConnector',
                  'i18nFormat',
                  'utils',
                ],
                e,
                pe(r),
              ),
              (r.options = o),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = '.'),
              (r.logger = je.create('translator')),
              r
            );
          }
          return (
            fe(
              n,
              [
                {
                  key: 'changeLanguage',
                  value: function (e) {
                    e && (this.language = e);
                  },
                },
                {
                  key: 'exists',
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} };
                    if (void 0 === e || null === e) return !1;
                    var n = this.resolve(e, t);
                    return n && void 0 !== n.res;
                  },
                },
                {
                  key: 'extractFromKey',
                  value: function (e, t) {
                    var n =
                      void 0 !== t.nsSeparator
                        ? t.nsSeparator
                        : this.options.nsSeparator;
                    void 0 === n && (n = ':');
                    var r =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      o = t.ns || this.options.defaultNS || [],
                      i = n && e.indexOf(n) > -1,
                      a =
                        !this.options.userDefinedKeySeparator &&
                        !t.keySeparator &&
                        !this.options.userDefinedNsSeparator &&
                        !t.nsSeparator &&
                        !(function (e, t, n) {
                          (t = t || ''), (n = n || '');
                          var r = Ve.filter(function (e) {
                            return t.indexOf(e) < 0 && n.indexOf(e) < 0;
                          });
                          if (0 === r.length) return !0;
                          var o = new RegExp(
                              '('.concat(
                                r
                                  .map(function (e) {
                                    return '?' === e ? '\\?' : e;
                                  })
                                  .join('|'),
                                ')',
                              ),
                            ),
                            i = !o.test(e);
                          if (!i) {
                            var a = e.indexOf(n);
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0);
                          }
                          return i;
                        })(e, n, r);
                    if (i && !a) {
                      var s = e.match(this.interpolator.nestingRegexp);
                      if (s && s.length > 0) return { key: e, namespaces: o };
                      var c = e.split(n);
                      (n !== r ||
                        (n === r && this.options.ns.indexOf(c[0]) > -1)) &&
                        (o = c.shift()),
                        (e = c.join(r));
                    }
                    return (
                      'string' === typeof o && (o = [o]),
                      { key: e, namespaces: o }
                    );
                  },
                },
                {
                  key: 'translate',
                  value: function (e, t, r) {
                    var o = this;
                    if (
                      ('object' !== ce(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t =
                          this.options.overloadTranslationOptionHandler(
                            arguments,
                          )),
                      t || (t = {}),
                      void 0 === e || null === e)
                    )
                      return '';
                    Array.isArray(e) || (e = [String(e)]);
                    var i =
                        void 0 !== t.returnDetails
                          ? t.returnDetails
                          : this.options.returnDetails,
                      a =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      s = this.extractFromKey(e[e.length - 1], t),
                      c = s.key,
                      u = s.namespaces,
                      l = u[u.length - 1],
                      f = t.lng || this.language,
                      p =
                        t.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode;
                    if (f && 'cimode' === f.toLowerCase()) {
                      if (p) {
                        var g = t.nsSeparator || this.options.nsSeparator;
                        return i
                          ? ((d.res = ''.concat(l).concat(g).concat(c)), d)
                          : ''.concat(l).concat(g).concat(c);
                      }
                      return i ? ((d.res = c), d) : c;
                    }
                    var d = this.resolve(e, t),
                      h = d && d.res,
                      v = (d && d.usedKey) || c,
                      y = (d && d.exactUsedKey) || c,
                      m = Object.prototype.toString.apply(h),
                      b = [
                        '[object Number]',
                        '[object Function]',
                        '[object RegExp]',
                      ],
                      O =
                        void 0 !== t.joinArrays
                          ? t.joinArrays
                          : this.options.joinArrays,
                      w = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      x =
                        'string' !== typeof h &&
                        'boolean' !== typeof h &&
                        'number' !== typeof h;
                    if (
                      w &&
                      h &&
                      x &&
                      b.indexOf(m) < 0 &&
                      ('string' !== typeof O || '[object Array]' !== m)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler ||
                          this.logger.warn(
                            'accessing an object - but returnObjects options is not enabled!',
                          );
                        var k = this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(
                              v,
                              h,
                              Je(Je({}, t), {}, { ns: u }),
                            )
                          : "key '"
                              .concat(c, ' (')
                              .concat(
                                this.language,
                                ")' returned an object instead of string.",
                              );
                        return i ? ((d.res = k), d) : k;
                      }
                      if (a) {
                        var j = '[object Array]' === m,
                          S = j ? [] : {},
                          P = j ? y : v;
                        for (var L in h)
                          if (Object.prototype.hasOwnProperty.call(h, L)) {
                            var N = ''.concat(P).concat(a).concat(L);
                            (S[L] = this.translate(
                              N,
                              Je(Je({}, t), { joinArrays: !1, ns: u }),
                            )),
                              S[L] === N && (S[L] = h[L]);
                          }
                        h = S;
                      }
                    } else if (
                      w &&
                      'string' === typeof O &&
                      '[object Array]' === m
                    )
                      (h = h.join(O)) &&
                        (h = this.extendTranslation(h, e, t, r));
                    else {
                      var E = !1,
                        C = !1,
                        R = void 0 !== t.count && 'string' !== typeof t.count,
                        I = n.hasDefaultValue(t),
                        D = R
                          ? this.pluralResolver.getSuffix(f, t.count, t)
                          : '',
                        T = t['defaultValue'.concat(D)] || t.defaultValue;
                      !this.isValidLookup(h) && I && ((E = !0), (h = T)),
                        this.isValidLookup(h) || ((C = !0), (h = c));
                      var A =
                          t.missingKeyNoValueFallbackToKey ||
                          this.options.missingKeyNoValueFallbackToKey,
                        F = A && C ? void 0 : h,
                        M = I && T !== h && this.options.updateMissing;
                      if (C || E || M) {
                        if (
                          (this.logger.log(
                            M ? 'updateKey' : 'missingKey',
                            f,
                            l,
                            c,
                            M ? T : h,
                          ),
                          a)
                        ) {
                          var V = this.resolve(
                            c,
                            Je(Je({}, t), {}, { keySeparator: !1 }),
                          );
                          V &&
                            V.res &&
                            this.logger.warn(
                              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                            );
                        }
                        var U = [],
                          $ = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language,
                          );
                        if (
                          'fallback' === this.options.saveMissingTo &&
                          $ &&
                          $[0]
                        )
                          for (var _ = 0; _ < $.length; _++) U.push($[_]);
                        else
                          'all' === this.options.saveMissingTo
                            ? (U = this.languageUtils.toResolveHierarchy(
                                t.lng || this.language,
                              ))
                            : U.push(t.lng || this.language);
                        var B = function (e, n, r) {
                          var i = I && r !== h ? r : F;
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(e, l, n, i, M, t)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(e, l, n, i, M, t),
                            o.emit('missingKey', e, l, n, h);
                        };
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && R
                            ? U.forEach(function (e) {
                                o.pluralResolver
                                  .getSuffixes(e, t)
                                  .forEach(function (n) {
                                    B(
                                      [e],
                                      c + n,
                                      t['defaultValue'.concat(n)] || T,
                                    );
                                  });
                              })
                            : B(U, c, T));
                      }
                      (h = this.extendTranslation(h, e, t, d, r)),
                        C &&
                          h === c &&
                          this.options.appendNamespaceToMissingKey &&
                          (h = ''.concat(l, ':').concat(c)),
                        (C || E) &&
                          this.options.parseMissingKeyHandler &&
                          (h =
                            'v1' !== this.options.compatibilityAPI
                              ? this.options.parseMissingKeyHandler(
                                  c,
                                  E ? h : void 0,
                                )
                              : this.options.parseMissingKeyHandler(h));
                    }
                    return i ? ((d.res = h), d) : h;
                  },
                },
                {
                  key: 'extendTranslation',
                  value: function (e, t, n, r, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        Je(
                          Je({}, this.options.interpolation.defaultVariables),
                          n,
                        ),
                        r.usedLng,
                        r.usedNS,
                        r.usedKey,
                        { resolved: r },
                      );
                    else if (!n.skipInterpolation) {
                      n.interpolation &&
                        this.interpolator.init(
                          Je(Je({}, n), {
                            interpolation: Je(
                              Je({}, this.options.interpolation),
                              n.interpolation,
                            ),
                          }),
                        );
                      var a,
                        s =
                          'string' === typeof e &&
                          (n &&
                          n.interpolation &&
                          void 0 !== n.interpolation.skipOnVariables
                            ? n.interpolation.skipOnVariables
                            : this.options.interpolation.skipOnVariables);
                      if (s) {
                        var c = e.match(this.interpolator.nestingRegexp);
                        a = c && c.length;
                      }
                      var u =
                        n.replace && 'string' !== typeof n.replace
                          ? n.replace
                          : n;
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (u = Je(
                            Je({}, this.options.interpolation.defaultVariables),
                            u,
                          )),
                        (e = this.interpolator.interpolate(
                          e,
                          u,
                          n.lng || this.language,
                          n,
                        )),
                        s)
                      ) {
                        var l = e.match(this.interpolator.nestingRegexp);
                        a < (l && l.length) && (n.nest = !1);
                      }
                      !1 !== n.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (
                              var e = arguments.length, r = new Array(e), a = 0;
                              a < e;
                              a++
                            )
                              r[a] = arguments[a];
                            return o && o[0] === r[0] && !n.context
                              ? (i.logger.warn(
                                  'It seems you are nesting recursively key: '
                                    .concat(r[0], ' in key: ')
                                    .concat(t[0]),
                                ),
                                null)
                              : i.translate.apply(i, r.concat([t]));
                          },
                          n,
                        )),
                        n.interpolation && this.interpolator.reset();
                    }
                    var f = n.postProcess || this.options.postProcess,
                      p = 'string' === typeof f ? [f] : f;
                    return (
                      void 0 !== e &&
                        null !== e &&
                        p &&
                        p.length &&
                        !1 !== n.applyPostProcessor &&
                        (e = He.handle(
                          p,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? Je({ i18nResolved: r }, n)
                            : n,
                          this,
                        )),
                      e
                    );
                  },
                },
                {
                  key: 'resolve',
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a = this,
                      s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      'string' === typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!a.isValidLookup(t)) {
                          var c = a.extractFromKey(e, s),
                            u = c.key;
                          n = u;
                          var l = c.namespaces;
                          a.options.fallbackNS &&
                            (l = l.concat(a.options.fallbackNS));
                          var f =
                              void 0 !== s.count && 'string' !== typeof s.count,
                            p =
                              f &&
                              !s.ordinal &&
                              0 === s.count &&
                              a.pluralResolver.shouldUseIntlApi(),
                            g =
                              void 0 !== s.context &&
                              ('string' === typeof s.context ||
                                'number' === typeof s.context) &&
                              '' !== s.context,
                            d = s.lngs
                              ? s.lngs
                              : a.languageUtils.toResolveHierarchy(
                                  s.lng || a.language,
                                  s.fallbackLng,
                                );
                          l.forEach(function (e) {
                            a.isValidLookup(t) ||
                              ((i = e),
                              !We[''.concat(d[0], '-').concat(e)] &&
                                a.utils &&
                                a.utils.hasLoadedNamespace &&
                                !a.utils.hasLoadedNamespace(i) &&
                                ((We[''.concat(d[0], '-').concat(e)] = !0),
                                a.logger.warn(
                                  'key "'
                                    .concat(n, '" for languages "')
                                    .concat(
                                      d.join(', '),
                                      '" won\'t get resolved as namespace "',
                                    )
                                    .concat(i, '" was not yet loaded'),
                                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                                )),
                              d.forEach(function (n) {
                                if (!a.isValidLookup(t)) {
                                  o = n;
                                  var i,
                                    c = [u];
                                  if (
                                    a.i18nFormat &&
                                    a.i18nFormat.addLookupKeys
                                  )
                                    a.i18nFormat.addLookupKeys(c, u, n, e, s);
                                  else {
                                    var l;
                                    f &&
                                      (l = a.pluralResolver.getSuffix(
                                        n,
                                        s.count,
                                        s,
                                      ));
                                    var d = '_zero';
                                    if (
                                      (f && (c.push(u + l), p && c.push(u + d)),
                                      g)
                                    ) {
                                      var h = ''
                                        .concat(u)
                                        .concat(a.options.contextSeparator)
                                        .concat(s.context);
                                      c.push(h),
                                        f &&
                                          (c.push(h + l), p && c.push(h + d));
                                    }
                                  }
                                  for (; (i = c.pop()); )
                                    a.isValidLookup(t) ||
                                      ((r = i),
                                      (t = a.getResource(n, e, i, s)));
                                }
                              }));
                          });
                        }
                      }),
                      {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: i,
                      }
                    );
                  },
                },
                {
                  key: 'isValidLookup',
                  value: function (e) {
                    return (
                      void 0 !== e &&
                      !(!this.options.returnNull && null === e) &&
                      !(!this.options.returnEmptyString && '' === e)
                    );
                  },
                },
                {
                  key: 'getResource',
                  value: function (e, t, n) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, n, r)
                      : this.resourceStore.getResource(e, t, n, r);
                  },
                },
              ],
              [
                {
                  key: 'hasDefaultValue',
                  value: function (e) {
                    var t = 'defaultValue';
                    for (var n in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, n) &&
                        t === n.substring(0, t.length) &&
                        void 0 !== e[n]
                      )
                        return !0;
                    return !1;
                  },
                },
              ],
            ),
            n
          );
        })(Se);
      function Ge(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var Qe = (function () {
          function e(t) {
            ue(this, e),
              (this.options = t),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = je.create('languageUtils'));
          }
          return (
            fe(e, [
              {
                key: 'getScriptPartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return null;
                  var t = e.split('-');
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      'x' === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join('-')));
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return e;
                  var t = e.split('-');
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: 'formatLanguageCode',
                value: function (e) {
                  if ('string' === typeof e && e.indexOf('-') > -1) {
                    var t = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab',
                      ],
                      n = e.split('-');
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase();
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = Ge(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          'sgn' !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = Ge(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = Ge(n[2].toLowerCase()))),
                      n.join('-')
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                },
              },
              {
                key: 'isSupportedCode',
                value: function (e) {
                  return (
                    ('languageOnly' === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  );
                },
              },
              {
                key: 'getBestMatchFromCodes',
                value: function (e) {
                  var t,
                    n = this;
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e);
                          (n.options.supportedLngs && !n.isSupportedCode(r)) ||
                            (t = r);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r)) return (t = r);
                            t = n.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(r)) return e;
                            });
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng,
                        )[0]),
                      t)
                    : null;
                },
              },
              {
                key: 'getFallbackCodes',
                value: function (e, t) {
                  if (!e) return [];
                  if (
                    ('function' === typeof e && (e = e(t)),
                    'string' === typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var n = e[t];
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  );
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e,
                    ),
                    o = [],
                    i = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? o.push(e)
                          : n.logger.warn(
                              'rejecting language code not found in supportedLngs: '.concat(
                                e,
                              ),
                            ));
                    };
                  return (
                    'string' === typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load &&
                          i(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          i(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load &&
                          i(this.getLanguagePartFromCode(e)))
                      : 'string' === typeof e && i(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      o.indexOf(e) < 0 && i(n.formatLanguageCode(e));
                    }),
                    o
                  );
                },
              },
            ]),
            e
          );
        })(),
        Ze = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'tl',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kk',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'ht',
              'id',
              'ja',
              'jbo',
              'ka',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        Xe = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5,
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3,
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3,
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0,
            );
          },
          22: function (e) {
            return Number(
              1 == e
                ? 0
                : 2 == e
                ? 1
                : (e < 0 || e > 10) && e % 10 == 0
                ? 2
                : 3,
            );
          },
        },
        et = ['v1', 'v2', 'v3'],
        tt = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      function nt() {
        var e = {};
        return (
          Ze.forEach(function (t) {
            t.lngs.forEach(function (n) {
              e[n] = { numbers: t.nr, plurals: Xe[t.fc] };
            });
          }),
          e
        );
      }
      var rt = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          ue(this, e),
            (this.languageUtils = t),
            (this.options = n),
            (this.logger = je.create('pluralResolver')),
            (this.options.compatibilityJSON &&
              'v4' !== this.options.compatibilityJSON) ||
              ('undefined' !== typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = 'v3'),
              this.logger.error(
                'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
              )),
            (this.rules = nt());
        }
        return (
          fe(e, [
            {
              key: 'addRule',
              value: function (e, t) {
                this.rules[e] = t;
              },
            },
            {
              key: 'getRule',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (this.shouldUseIntlApi())
                  try {
                    return new Intl.PluralRules(e, {
                      type: t.ordinal ? 'ordinal' : 'cardinal',
                    });
                  } catch (n) {
                    return;
                  }
                return (
                  this.rules[e] ||
                  this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                );
              },
            },
            {
              key: 'needsPlural',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.getRule(e, t);
                return this.shouldUseIntlApi()
                  ? n && n.resolvedOptions().pluralCategories.length > 1
                  : n && n.numbers.length > 1;
              },
            },
            {
              key: 'getPluralFormsOfKey',
              value: function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return this.getSuffixes(e, n).map(function (e) {
                  return ''.concat(t).concat(e);
                });
              },
            },
            {
              key: 'getSuffixes',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this.getRule(e, n);
                return r
                  ? this.shouldUseIntlApi()
                    ? r
                        .resolvedOptions()
                        .pluralCategories.sort(function (e, t) {
                          return tt[e] - tt[t];
                        })
                        .map(function (e) {
                          return ''.concat(t.options.prepend).concat(e);
                        })
                    : r.numbers.map(function (r) {
                        return t.getSuffix(e, r, n);
                      })
                  : [];
              },
            },
            {
              key: 'getSuffix',
              value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = this.getRule(e, n);
                return r
                  ? this.shouldUseIntlApi()
                    ? ''.concat(this.options.prepend).concat(r.select(t))
                    : this.getSuffixRetroCompatible(r, t)
                  : (this.logger.warn('no plural rule found for: '.concat(e)),
                    '');
              },
            },
            {
              key: 'getSuffixRetroCompatible',
              value: function (e, t) {
                var n = this,
                  r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                  o = e.numbers[r];
                this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0] &&
                  (2 === o ? (o = 'plural') : 1 === o && (o = ''));
                var i = function () {
                  return n.options.prepend && o.toString()
                    ? n.options.prepend + o.toString()
                    : o.toString();
                };
                return 'v1' === this.options.compatibilityJSON
                  ? 1 === o
                    ? ''
                    : 'number' === typeof o
                    ? '_plural_'.concat(o.toString())
                    : i()
                  : 'v2' === this.options.compatibilityJSON ||
                    (this.options.simplifyPluralSuffix &&
                      2 === e.numbers.length &&
                      1 === e.numbers[0])
                  ? i()
                  : this.options.prepend && r.toString()
                  ? this.options.prepend + r.toString()
                  : r.toString();
              },
            },
            {
              key: 'shouldUseIntlApi',
              value: function () {
                return !et.includes(this.options.compatibilityJSON);
              },
            },
          ]),
          e
        );
      })();
      function ot(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function it(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ot(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ot(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var at = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          ue(this, e),
            (this.logger = je.create('interpolator')),
            (this.options = t),
            (this.format =
              (t.interpolation && t.interpolation.format) ||
              function (e) {
                return e;
              }),
            this.init(t);
        }
        return (
          fe(e, [
            {
              key: 'init',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                e.interpolation || (e.interpolation = { escapeValue: !0 });
                var t = e.interpolation;
                (this.escape = void 0 !== t.escape ? t.escape : Fe),
                  (this.escapeValue =
                    void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix
                    ? Te(t.prefix)
                    : t.prefixEscaped || '{{'),
                  (this.suffix = t.suffix
                    ? Te(t.suffix)
                    : t.suffixEscaped || '}}'),
                  (this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ','),
                  (this.unescapePrefix = t.unescapeSuffix
                    ? ''
                    : t.unescapePrefix || '-'),
                  (this.unescapeSuffix = this.unescapePrefix
                    ? ''
                    : t.unescapeSuffix || ''),
                  (this.nestingPrefix = t.nestingPrefix
                    ? Te(t.nestingPrefix)
                    : t.nestingPrefixEscaped || Te('$t(')),
                  (this.nestingSuffix = t.nestingSuffix
                    ? Te(t.nestingSuffix)
                    : t.nestingSuffixEscaped || Te(')')),
                  (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                    ? t.nestingOptionsSeparator
                    : t.nestingOptionsSeparator || ','),
                  (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                  (this.alwaysFormat =
                    void 0 !== t.alwaysFormat && t.alwaysFormat),
                  this.resetRegExp();
              },
            },
            {
              key: 'reset',
              value: function () {
                this.options && this.init(this.options);
              },
            },
            {
              key: 'resetRegExp',
              value: function () {
                var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
                this.regexp = new RegExp(e, 'g');
                var t = ''
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, '(.+?)')
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix);
                this.regexpUnescape = new RegExp(t, 'g');
                var n = ''
                  .concat(this.nestingPrefix, '(.+?)')
                  .concat(this.nestingSuffix);
                this.nestingRegexp = new RegExp(n, 'g');
              },
            },
            {
              key: 'interpolate',
              value: function (e, t, n, r) {
                var o,
                  i,
                  a,
                  s = this,
                  c =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {};
                function u(e) {
                  return e.replace(/\$/g, '$$$$');
                }
                var l = function (e) {
                  if (e.indexOf(s.formatSeparator) < 0) {
                    var o = Ie(t, c, e);
                    return s.alwaysFormat
                      ? s.format(
                          o,
                          void 0,
                          n,
                          it(it(it({}, r), t), {}, { interpolationkey: e }),
                        )
                      : o;
                  }
                  var i = e.split(s.formatSeparator),
                    a = i.shift().trim(),
                    u = i.join(s.formatSeparator).trim();
                  return s.format(
                    Ie(t, c, a),
                    u,
                    n,
                    it(it(it({}, r), t), {}, { interpolationkey: a }),
                  );
                };
                this.resetRegExp();
                var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  p =
                    r &&
                    r.interpolation &&
                    void 0 !== r.interpolation.skipOnVariables
                      ? r.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables;
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return u(e);
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return s.escapeValue ? u(s.escape(e)) : u(e);
                      },
                    },
                  ].forEach(function (t) {
                    for (a = 0; (o = t.regex.exec(e)); ) {
                      var n = o[1].trim();
                      if (void 0 === (i = l(n)))
                        if ('function' === typeof f) {
                          var c = f(e, o, r);
                          i = 'string' === typeof c ? c : '';
                        } else if (r && r.hasOwnProperty(n)) i = '';
                        else {
                          if (p) {
                            i = o[0];
                            continue;
                          }
                          s.logger.warn(
                            'missed to pass in variable '
                              .concat(n, ' for interpolating ')
                              .concat(e),
                          ),
                            (i = '');
                        }
                      else
                        'string' === typeof i ||
                          s.useRawValueToEscape ||
                          (i = Le(i));
                      var u = t.safeValue(i);
                      if (
                        ((e = e.replace(o[0], u)),
                        p
                          ? ((t.regex.lastIndex += u.length),
                            (t.regex.lastIndex -= o[0].length))
                          : (t.regex.lastIndex = 0),
                        ++a >= s.maxReplaces)
                      )
                        break;
                    }
                  }),
                  e
                );
              },
            },
            {
              key: 'nest',
              value: function (e, t) {
                var n,
                  r,
                  o = this,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  a = it({}, i);
                function s(e, t) {
                  var n = this.nestingOptionsSeparator;
                  if (e.indexOf(n) < 0) return e;
                  var r = e.split(new RegExp(''.concat(n, '[ ]*{'))),
                    o = '{'.concat(r[1]);
                  (e = r[0]),
                    (o = (o = this.interpolate(o, a)).replace(/'/g, '"'));
                  try {
                    (a = JSON.parse(o)), t && (a = it(it({}, t), a));
                  } catch (i) {
                    return (
                      this.logger.warn(
                        'failed parsing options string in nesting for key '.concat(
                          e,
                        ),
                        i,
                      ),
                      ''.concat(e).concat(n).concat(o)
                    );
                  }
                  return delete a.defaultValue, e;
                }
                for (
                  a.applyPostProcessor = !1, delete a.defaultValue;
                  (n = this.nestingRegexp.exec(e));

                ) {
                  var c = [],
                    u = !1;
                  if (
                    -1 !== n[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(n[1])
                  ) {
                    var l = n[1].split(this.formatSeparator).map(function (e) {
                      return e.trim();
                    });
                    (n[1] = l.shift()), (c = l), (u = !0);
                  }
                  if (
                    (r = t(s.call(this, n[1].trim(), a), a)) &&
                    n[0] === e &&
                    'string' !== typeof r
                  )
                    return r;
                  'string' !== typeof r && (r = Le(r)),
                    r ||
                      (this.logger.warn(
                        'missed to resolve '
                          .concat(n[1], ' for nesting ')
                          .concat(e),
                      ),
                      (r = '')),
                    u &&
                      (r = c.reduce(function (e, t) {
                        return o.format(
                          e,
                          t,
                          i.lng,
                          it(it({}, i), {}, { interpolationkey: n[1].trim() }),
                        );
                      }, r.trim())),
                    (e = e.replace(n[0], r)),
                    (this.regexp.lastIndex = 0);
                }
                return e;
              },
            },
          ]),
          e
        );
      })();
      function st(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? st(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : st(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var ut = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          ue(this, e),
            (this.logger = je.create('formatter')),
            (this.options = t),
            (this.formats = {
              number: function (e, t, n) {
                return new Intl.NumberFormat(t, n).format(e);
              },
              currency: function (e, t, n) {
                return new Intl.NumberFormat(
                  t,
                  ct(ct({}, n), {}, { style: 'currency' }),
                ).format(e);
              },
              datetime: function (e, t, n) {
                return new Intl.DateTimeFormat(t, ct({}, n)).format(e);
              },
              relativetime: function (e, t, n) {
                return new Intl.RelativeTimeFormat(t, ct({}, n)).format(
                  e,
                  n.range || 'day',
                );
              },
              list: function (e, t, n) {
                return new Intl.ListFormat(t, ct({}, n)).format(e);
              },
            }),
            this.init(t);
        }
        return (
          fe(e, [
            {
              key: 'init',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  n = t.interpolation;
                this.formatSeparator = n.formatSeparator
                  ? n.formatSeparator
                  : n.formatSeparator || ',';
              },
            },
            {
              key: 'add',
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = t;
              },
            },
            {
              key: 'format',
              value: function (e, t, n, r) {
                var o = this;
                return t.split(this.formatSeparator).reduce(function (e, t) {
                  var i = (function (e) {
                      var t = e.toLowerCase().trim(),
                        n = {};
                      if (e.indexOf('(') > -1) {
                        var r = e.split('(');
                        t = r[0].toLowerCase().trim();
                        var o = r[1].substring(0, r[1].length - 1);
                        'currency' === t && o.indexOf(':') < 0
                          ? n.currency || (n.currency = o.trim())
                          : 'relativetime' === t && o.indexOf(':') < 0
                          ? n.range || (n.range = o.trim())
                          : o.split(';').forEach(function (e) {
                              if (e) {
                                var t = be(e.split(':')),
                                  r = t[0],
                                  o = t.slice(1).join(':');
                                n[r.trim()] || (n[r.trim()] = o.trim()),
                                  'false' === o.trim() && (n[r.trim()] = !1),
                                  'true' === o.trim() && (n[r.trim()] = !0),
                                  isNaN(o.trim()) ||
                                    (n[r.trim()] = parseInt(o.trim(), 10));
                              }
                            });
                      }
                      return { formatName: t, formatOptions: n };
                    })(t),
                    a = i.formatName,
                    s = i.formatOptions;
                  if (o.formats[a]) {
                    var c = e;
                    try {
                      var u =
                          (r &&
                            r.formatParams &&
                            r.formatParams[r.interpolationkey]) ||
                          {},
                        l = u.locale || u.lng || r.locale || r.lng || n;
                      c = o.formats[a](e, l, ct(ct(ct({}, s), r), u));
                    } catch (f) {
                      o.logger.warn(f);
                    }
                    return c;
                  }
                  return (
                    o.logger.warn(
                      'there was no format function for '.concat(a),
                    ),
                    e
                  );
                }, e);
              },
            },
          ]),
          e
        );
      })();
      function lt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? lt(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : lt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function pt(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ve(e);
          if (t) {
            var o = ve(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return he(this, n);
        };
      }
      var gt = (function (e) {
        de(n, e);
        var t = pt(n);
        function n(e, r, o) {
          var i,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            ue(this, n),
            (i = t.call(this)),
            Me && Se.call(pe(i)),
            (i.backend = e),
            (i.store = r),
            (i.services = o),
            (i.languageUtils = o.languageUtils),
            (i.options = a),
            (i.logger = je.create('backendConnector')),
            (i.waitingReads = []),
            (i.maxParallelReads = a.maxParallelReads || 10),
            (i.readingCalls = 0),
            (i.state = {}),
            (i.queue = []),
            i.backend && i.backend.init && i.backend.init(o, a.backend, a),
            i
          );
        }
        return (
          fe(n, [
            {
              key: 'queueLoad',
              value: function (e, t, n, r) {
                var o = this,
                  i = {},
                  a = {},
                  s = {},
                  c = {};
                return (
                  e.forEach(function (e) {
                    var r = !0;
                    t.forEach(function (t) {
                      var s = ''.concat(e, '|').concat(t);
                      !n.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? void 0 === a[s] && (a[s] = !0)
                            : ((o.state[s] = 1),
                              (r = !1),
                              void 0 === a[s] && (a[s] = !0),
                              void 0 === i[s] && (i[s] = !0),
                              void 0 === c[t] && (c[t] = !0)));
                    }),
                      r || (s[e] = !0);
                  }),
                  (Object.keys(i).length || Object.keys(a).length) &&
                    this.queue.push({
                      pending: a,
                      pendingCount: Object.keys(a).length,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                  {
                    toLoad: Object.keys(i),
                    pending: Object.keys(a),
                    toLoadLanguages: Object.keys(s),
                    toLoadNamespaces: Object.keys(c),
                  }
                );
              },
            },
            {
              key: 'loaded',
              value: function (e, t, n) {
                var r = e.split('|'),
                  o = r[0],
                  i = r[1];
                t && this.emit('failedLoading', o, i, t),
                  n && this.store.addResourceBundle(o, i, n),
                  (this.state[e] = t ? -1 : 2);
                var a = {};
                this.queue.forEach(function (n) {
                  !(function (e, t, n, r) {
                    var o = Ee(e, t, Object),
                      i = o.obj,
                      a = o.k;
                    (i[a] = i[a] || []),
                      r && (i[a] = i[a].concat(n)),
                      r || i[a].push(n);
                  })(n.loaded, [o], i),
                    (function (e, t) {
                      delete e.pending[t], e.pendingCount--;
                    })(n, e),
                    t && n.errors.push(t),
                    0 !== n.pendingCount ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        a[e] || (a[e] = {});
                        var t = Object.keys(a[e]);
                        t.length &&
                          t.forEach(function (n) {
                            void 0 !== t[n] && (a[e][n] = !0);
                          });
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                  this.emit('loaded', a),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: 'read',
              value: function (e, t, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 350,
                  a = arguments.length > 5 ? arguments[5] : void 0;
                return e.length
                  ? this.readingCalls >= this.maxParallelReads
                    ? void this.waitingReads.push({
                        lng: e,
                        ns: t,
                        fcName: n,
                        tried: o,
                        wait: i,
                        callback: a,
                      })
                    : (this.readingCalls++,
                      this.backend[n](e, t, function (s, c) {
                        if (s && c && o < 5)
                          setTimeout(function () {
                            r.read.call(r, e, t, n, o + 1, 2 * i, a);
                          }, i);
                        else {
                          if ((r.readingCalls--, r.waitingReads.length > 0)) {
                            var u = r.waitingReads.shift();
                            r.read(
                              u.lng,
                              u.ns,
                              u.fcName,
                              u.tried,
                              u.wait,
                              u.callback,
                            );
                          }
                          a(s, c);
                        }
                      }))
                  : a(null, {});
              },
            },
            {
              key: 'prepareLoading',
              value: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.',
                    ),
                    o && o()
                  );
                'string' === typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' === typeof t && (t = [t]);
                var i = this.queueLoad(e, t, r, o);
                if (!i.toLoad.length) return i.pending.length || o(), null;
                i.toLoad.forEach(function (e) {
                  n.loadOne(e);
                });
              },
            },
            {
              key: 'load',
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n);
              },
            },
            {
              key: 'reload',
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n);
              },
            },
            {
              key: 'loadOne',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  r = e.split('|'),
                  o = r[0],
                  i = r[1];
                this.read(o, i, 'read', void 0, void 0, function (r, a) {
                  r &&
                    t.logger.warn(
                      ''
                        .concat(n, 'loading namespace ')
                        .concat(i, ' for language ')
                        .concat(o, ' failed'),
                      r,
                    ),
                    !r &&
                      a &&
                      t.logger.log(
                        ''
                          .concat(n, 'loaded namespace ')
                          .concat(i, ' for language ')
                          .concat(o),
                        a,
                      ),
                    t.loaded(e, r, a);
                });
              },
            },
            {
              key: 'saveMissing',
              value: function (e, t, n, r, o) {
                var i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {};
                this.services.utils &&
                this.services.utils.hasLoadedNamespace &&
                !this.services.utils.hasLoadedNamespace(t)
                  ? this.logger.warn(
                      'did not save key "'
                        .concat(n, '" as the namespace "')
                        .concat(t, '" was not yet loaded'),
                      'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                    )
                  : void 0 !== n &&
                    null !== n &&
                    '' !== n &&
                    (this.backend &&
                      this.backend.create &&
                      this.backend.create(
                        e,
                        t,
                        n,
                        r,
                        null,
                        ft(ft({}, i), {}, { isUpdate: o }),
                      ),
                    e && e[0] && this.store.addResource(e[0], t, n, r));
              },
            },
          ]),
          n
        );
      })(Se);
      function dt() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ['translation'],
          defaultNS: ['translation'],
          fallbackLng: ['dev'],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: 'all',
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: '.',
          nsSeparator: ':',
          pluralSeparator: '_',
          contextSeparator: '_',
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: 'fallback',
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {};
            if (
              ('object' === ce(e[1]) && (t = e[1]),
              'string' === typeof e[1] && (t.defaultValue = e[1]),
              'string' === typeof e[2] && (t.tDescription = e[2]),
              'object' === ce(e[2]) || 'object' === ce(e[3]))
            ) {
              var n = e[3] || e[2];
              Object.keys(n).forEach(function (e) {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, n, r) {
              return e;
            },
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function ht(e) {
        return (
          'string' === typeof e.ns && (e.ns = [e.ns]),
          'string' === typeof e.fallbackLng &&
            (e.fallbackLng = [e.fallbackLng]),
          'string' === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            e.supportedLngs.indexOf('cimode') < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        );
      }
      function vt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function yt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? vt(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : vt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function mt(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ve(e);
          if (t) {
            var o = ve(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return he(this, n);
        };
      }
      function bt() {}
      function Ot(e) {
        Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function (
          t,
        ) {
          'function' === typeof e[t] && (e[t] = e[t].bind(e));
        });
      }
      var wt = (function (e) {
        de(n, e);
        var t = mt(n);
        function n() {
          var e,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (ue(this, n),
            (e = t.call(this)),
            Me && Se.call(pe(e)),
            (e.options = ht(r)),
            (e.services = {}),
            (e.logger = je),
            (e.modules = { external: [] }),
            Ot(pe(e)),
            o && !e.isInitialized && !r.isClone)
          ) {
            if (!e.options.initImmediate) return e.init(r, o), he(e, pe(e));
            setTimeout(function () {
              e.init(r, o);
            }, 0);
          }
          return e;
        }
        return (
          fe(n, [
            {
              key: 'init',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = arguments.length > 1 ? arguments[1] : void 0;
                'function' === typeof t && ((n = t), (t = {})),
                  !t.defaultNS &&
                    t.ns &&
                    ('string' === typeof t.ns
                      ? (t.defaultNS = t.ns)
                      : t.ns.indexOf('translation') < 0 &&
                        (t.defaultNS = t.ns[0]));
                var r = dt();
                function o(e) {
                  return e ? ('function' === typeof e ? new e() : e) : null;
                }
                if (
                  ((this.options = yt(yt(yt({}, r), this.options), ht(t))),
                  'v1' !== this.options.compatibilityAPI &&
                    (this.options.interpolation = yt(
                      yt({}, r.interpolation),
                      this.options.interpolation,
                    )),
                  void 0 !== t.keySeparator &&
                    (this.options.userDefinedKeySeparator = t.keySeparator),
                  void 0 !== t.nsSeparator &&
                    (this.options.userDefinedNsSeparator = t.nsSeparator),
                  !this.options.isClone)
                ) {
                  var i;
                  this.modules.logger
                    ? je.init(o(this.modules.logger), this.options)
                    : je.init(null, this.options),
                    this.modules.formatter
                      ? (i = this.modules.formatter)
                      : 'undefined' !== typeof Intl && (i = ut);
                  var a = new Qe(this.options);
                  this.store = new Ke(this.options.resources, this.options);
                  var s = this.services;
                  (s.logger = je),
                    (s.resourceStore = this.store),
                    (s.languageUtils = a),
                    (s.pluralResolver = new rt(a, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    !i ||
                      (this.options.interpolation.format &&
                        this.options.interpolation.format !==
                          r.interpolation.format) ||
                      ((s.formatter = o(i)),
                      s.formatter.init(s, this.options),
                      (this.options.interpolation.format =
                        s.formatter.format.bind(s.formatter))),
                    (s.interpolator = new at(this.options)),
                    (s.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (s.backendConnector = new gt(
                      o(this.modules.backend),
                      s.resourceStore,
                      s,
                      this.options,
                    )),
                    s.backendConnector.on('*', function (t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.languageDetector &&
                      ((s.languageDetector = o(this.modules.languageDetector)),
                      s.languageDetector.init(
                        s,
                        this.options.detection,
                        this.options,
                      )),
                    this.modules.i18nFormat &&
                      ((s.i18nFormat = o(this.modules.i18nFormat)),
                      s.i18nFormat.init && s.i18nFormat.init(this)),
                    (this.translator = new Ye(this.services, this.options)),
                    this.translator.on('*', function (t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e);
                    });
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  n || (n = bt),
                  this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng)
                ) {
                  var c = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng,
                  );
                  c.length > 0 && 'dev' !== c[0] && (this.options.lng = c[0]);
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    'init: no languageDetector is used and no lng is defined',
                  );
                var u = [
                  'getResource',
                  'hasResourceBundle',
                  'getResourceBundle',
                  'getDataByLanguage',
                ];
                u.forEach(function (t) {
                  e[t] = function () {
                    var n;
                    return (n = e.store)[t].apply(n, arguments);
                  };
                });
                var l = [
                  'addResource',
                  'addResources',
                  'addResourceBundle',
                  'removeResourceBundle',
                ];
                l.forEach(function (t) {
                  e[t] = function () {
                    var n;
                    return (n = e.store)[t].apply(n, arguments), e;
                  };
                });
                var f = Pe(),
                  p = function () {
                    var t = function (t, r) {
                      e.isInitialized &&
                        !e.initializedStoreOnce &&
                        e.logger.warn(
                          'init: i18next is already initialized. You should call init just once!',
                        ),
                        (e.isInitialized = !0),
                        e.options.isClone ||
                          e.logger.log('initialized', e.options),
                        e.emit('initialized', e.options),
                        f.resolve(r),
                        n(t, r);
                    };
                    if (
                      e.languages &&
                      'v1' !== e.options.compatibilityAPI &&
                      !e.isInitialized
                    )
                      return t(null, e.t.bind(e));
                    e.changeLanguage(e.options.lng, t);
                  };
                return (
                  this.options.resources || !this.options.initImmediate
                    ? p()
                    : setTimeout(p, 0),
                  f
                );
              },
            },
            {
              key: 'loadResources',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : bt,
                  r = n,
                  o = 'string' === typeof e ? e : this.language;
                if (
                  ('function' === typeof e && (r = e),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (o && 'cimode' === o.toLowerCase()) return r();
                  var i = [],
                    a = function (e) {
                      e &&
                        t.services.languageUtils
                          .toResolveHierarchy(e)
                          .forEach(function (e) {
                            i.indexOf(e) < 0 && i.push(e);
                          });
                    };
                  if (o) a(o);
                  else {
                    var s = this.services.languageUtils.getFallbackCodes(
                      this.options.fallbackLng,
                    );
                    s.forEach(function (e) {
                      return a(e);
                    });
                  }
                  this.options.preload &&
                    this.options.preload.forEach(function (e) {
                      return a(e);
                    }),
                    this.services.backendConnector.load(
                      i,
                      this.options.ns,
                      function (e) {
                        e ||
                          t.resolvedLanguage ||
                          !t.language ||
                          t.setResolvedLanguage(t.language),
                          r(e);
                      },
                    );
                } else r(null);
              },
            },
            {
              key: 'reloadResources',
              value: function (e, t, n) {
                var r = Pe();
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  n || (n = bt),
                  this.services.backendConnector.reload(e, t, function (e) {
                    r.resolve(), n(e);
                  }),
                  r
                );
              },
            },
            {
              key: 'use',
              value: function (e) {
                if (!e)
                  throw new Error(
                    'You are passing an undefined module! Please check the object you are passing to i18next.use()',
                  );
                if (!e.type)
                  throw new Error(
                    'You are passing a wrong module! Please check the object you are passing to i18next.use()',
                  );
                return (
                  'backend' === e.type && (this.modules.backend = e),
                  ('logger' === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  'languageDetector' === e.type &&
                    (this.modules.languageDetector = e),
                  'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                  'postProcessor' === e.type && He.addPostProcessor(e),
                  'formatter' === e.type && (this.modules.formatter = e),
                  '3rdParty' === e.type && this.modules.external.push(e),
                  this
                );
              },
            },
            {
              key: 'setResolvedLanguage',
              value: function (e) {
                if (e && this.languages && !(['cimode', 'dev'].indexOf(e) > -1))
                  for (var t = 0; t < this.languages.length; t++) {
                    var n = this.languages[t];
                    if (
                      !(['cimode', 'dev'].indexOf(n) > -1) &&
                      this.store.hasLanguageSomeTranslations(n)
                    ) {
                      this.resolvedLanguage = n;
                      break;
                    }
                  }
              },
            },
            {
              key: 'changeLanguage',
              value: function (e, t) {
                var n = this;
                this.isLanguageChangingTo = e;
                var r = Pe();
                this.emit('languageChanging', e);
                var o = function (e) {
                    (n.language = e),
                      (n.languages =
                        n.services.languageUtils.toResolveHierarchy(e)),
                      (n.resolvedLanguage = void 0),
                      n.setResolvedLanguage(e);
                  },
                  i = function (i) {
                    e || i || !n.services.languageDetector || (i = []);
                    var a =
                      'string' === typeof i
                        ? i
                        : n.services.languageUtils.getBestMatchFromCodes(i);
                    a &&
                      (n.language || o(a),
                      n.translator.language || n.translator.changeLanguage(a),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage(a)),
                      n.loadResources(a, function (e) {
                        !(function (e, i) {
                          i
                            ? (o(i),
                              n.translator.changeLanguage(i),
                              (n.isLanguageChangingTo = void 0),
                              n.emit('languageChanged', i),
                              n.logger.log('languageChanged', i))
                            : (n.isLanguageChangingTo = void 0),
                            r.resolve(function () {
                              return n.t.apply(n, arguments);
                            }),
                            t &&
                              t(e, function () {
                                return n.t.apply(n, arguments);
                              });
                        })(e, a);
                      });
                  };
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? this.services.languageDetector.detect(i)
                      : i(e)
                    : i(this.services.languageDetector.detect()),
                  r
                );
              },
            },
            {
              key: 'getFixedT',
              value: function (e, t, n) {
                var r = this,
                  o = function e(t, o) {
                    var i;
                    if ('object' !== ce(o)) {
                      for (
                        var a = arguments.length,
                          s = new Array(a > 2 ? a - 2 : 0),
                          c = 2;
                        c < a;
                        c++
                      )
                        s[c - 2] = arguments[c];
                      i = r.options.overloadTranslationOptionHandler(
                        [t, o].concat(s),
                      );
                    } else i = yt({}, o);
                    (i.lng = i.lng || e.lng),
                      (i.lngs = i.lngs || e.lngs),
                      (i.ns = i.ns || e.ns);
                    var u = r.options.keySeparator || '.',
                      l = n ? ''.concat(n).concat(u).concat(t) : t;
                    return r.t(l, i);
                  };
                return (
                  'string' === typeof e ? (o.lng = e) : (o.lngs = e),
                  (o.ns = t),
                  (o.keyPrefix = n),
                  o
                );
              },
            },
            {
              key: 't',
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).translate.apply(e, arguments)
                );
              },
            },
            {
              key: 'exists',
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).exists.apply(e, arguments)
                );
              },
            },
            {
              key: 'setDefaultNamespace',
              value: function (e) {
                this.options.defaultNS = e;
              },
            },
            {
              key: 'hasLoadedNamespace',
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18next was not initialized',
                      this.languages,
                    ),
                    !1
                  );
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18n.languages were undefined or empty',
                      this.languages,
                    ),
                    !1
                  );
                var r = this.resolvedLanguage || this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  i = this.languages[this.languages.length - 1];
                if ('cimode' === r.toLowerCase()) return !0;
                var a = function (e, n) {
                  var r =
                    t.services.backendConnector.state[
                      ''.concat(e, '|').concat(n)
                    ];
                  return -1 === r || 2 === r;
                };
                if (n.precheck) {
                  var s = n.precheck(this, a);
                  if (void 0 !== s) return s;
                }
                return (
                  !!this.hasResourceBundle(r, e) ||
                  !(
                    this.services.backendConnector.backend &&
                    (!this.options.resources ||
                      this.options.partialBundledLanguages)
                  ) ||
                  !(!a(r, e) || (o && !a(i, e)))
                );
              },
            },
            {
              key: 'loadNamespaces',
              value: function (e, t) {
                var n = this,
                  r = Pe();
                return this.options.ns
                  ? ('string' === typeof e && (e = [e]),
                    e.forEach(function (e) {
                      n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                    }),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e);
                    }),
                    r)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'loadLanguages',
              value: function (e, t) {
                var n = Pe();
                'string' === typeof e && (e = [e]);
                var r = this.options.preload || [],
                  o = e.filter(function (e) {
                    return r.indexOf(e) < 0;
                  });
                return o.length
                  ? ((this.options.preload = r.concat(o)),
                    this.loadResources(function (e) {
                      n.resolve(), t && t(e);
                    }),
                    n)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'dir',
              value: function (e) {
                if (
                  (e ||
                    (e =
                      this.resolvedLanguage ||
                      (this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language)),
                  !e)
                )
                  return 'rtl';
                return [
                  'ar',
                  'shu',
                  'sqr',
                  'ssh',
                  'xaa',
                  'yhd',
                  'yud',
                  'aao',
                  'abh',
                  'abv',
                  'acm',
                  'acq',
                  'acw',
                  'acx',
                  'acy',
                  'adf',
                  'ads',
                  'aeb',
                  'aec',
                  'afb',
                  'ajp',
                  'apc',
                  'apd',
                  'arb',
                  'arq',
                  'ars',
                  'ary',
                  'arz',
                  'auz',
                  'avl',
                  'ayh',
                  'ayl',
                  'ayn',
                  'ayp',
                  'bbz',
                  'pga',
                  'he',
                  'iw',
                  'ps',
                  'pbt',
                  'pbu',
                  'pst',
                  'prp',
                  'prd',
                  'ug',
                  'ur',
                  'ydd',
                  'yds',
                  'yih',
                  'ji',
                  'yi',
                  'hbo',
                  'men',
                  'xmn',
                  'fa',
                  'jpr',
                  'peo',
                  'pes',
                  'prs',
                  'dv',
                  'sam',
                  'ckb',
                ].indexOf(
                  this.services.languageUtils.getLanguagePartFromCode(e),
                ) > -1 || e.toLowerCase().indexOf('-arab') > 1
                  ? 'rtl'
                  : 'ltr';
              },
            },
            {
              key: 'cloneInstance',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : bt,
                  o = yt(yt(yt({}, this.options), t), { isClone: !0 }),
                  i = new n(o),
                  a = ['store', 'services', 'language'];
                return (
                  a.forEach(function (t) {
                    i[t] = e[t];
                  }),
                  (i.services = yt({}, this.services)),
                  (i.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  (i.translator = new Ye(i.services, i.options)),
                  i.translator.on('*', function (e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    i.emit.apply(i, [e].concat(n));
                  }),
                  i.init(o, r),
                  (i.translator.options = i.options),
                  (i.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  i
                );
              },
            },
            {
              key: 'toJSON',
              value: function () {
                return {
                  options: this.options,
                  store: this.store,
                  language: this.language,
                  languages: this.languages,
                  resolvedLanguage: this.resolvedLanguage,
                };
              },
            },
          ]),
          n
        );
      })(Se);
      ye(wt, 'createInstance', function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return new wt(e, t);
      });
      var xt = wt.createInstance();
      xt.createInstance = wt.createInstance;
      xt.createInstance,
        xt.init,
        xt.loadResources,
        xt.reloadResources,
        xt.use,
        xt.changeLanguage,
        xt.getFixedT,
        xt.t,
        xt.exists,
        xt.setDefaultNamespace,
        xt.hasLoadedNamespace,
        xt.loadNamespaces,
        xt.loadLanguages;
      var kt = xt,
        jt = function (e) {
          var t,
            n,
            r = kt.createInstance(e);
          r.isInitialized
            ? (t = Promise.resolve(kt.t))
            : (null === e ||
                void 0 === e ||
                null === (n = e.use) ||
                void 0 === n ||
                n.forEach(function (e) {
                  return r.use(e);
                }),
              (t = r.init(e)));
          return { i18n: r, initPromise: t };
        },
        St = a.createElement;
      function Pt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pt(Object(n), !0).forEach(function (t) {
                G(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var Nt = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = function (n) {
            var r,
              o,
              i = n.pageProps._nextI18Next,
              s =
                null !==
                  (r = null === i || void 0 === i ? void 0 : i.initialLocale) &&
                void 0 !== r
                  ? r
                  : null === n ||
                    void 0 === n ||
                    null === (o = n.router) ||
                    void 0 === o
                  ? void 0
                  : o.locale,
              c = (0, a.useMemo)(
                function () {
                  var e, n, r;
                  if (!i && !t) return null;
                  var o =
                    null !== t && void 0 !== t
                      ? t
                      : null === i || void 0 === i
                      ? void 0
                      : i.userConfig;
                  if (!o && null === t)
                    throw new Error(
                      'appWithTranslation was called without a next-i18next config',
                    );
                  if (
                    (null !== t && (o = t),
                    null === (e = o) || void 0 === e || !e.i18n)
                  )
                    throw new Error(
                      'appWithTranslation was called without config.i18n',
                    );
                  if (
                    null === (n = o) ||
                    void 0 === n ||
                    null === (r = n.i18n) ||
                    void 0 === r ||
                    !r.defaultLocale
                  )
                    throw new Error(
                      'config.i18n does not include a defaultLocale property',
                    );
                  var a = (i || {}).initialI18nStore,
                    c =
                      null !== t && void 0 !== t && t.resources
                        ? t.resources
                        : a;
                  s || (s = o.i18n.defaultLocale);
                  var u = jt(
                    Lt(
                      Lt({}, se(Lt(Lt({}, o), {}, { lng: s }))),
                      {},
                      { lng: s, resources: c },
                    ),
                  ).i18n;
                  return u, u;
                },
                [i, s, t],
              );
            return null !== c
              ? St(X, { i18n: c }, St(e, Y({ key: s }, n)))
              : St(e, Y({ key: s }, n));
          };
        return Z()(n, e);
      };
    },
    3454: function (e, t, n) {
      'use strict';
      var r, o;
      e.exports =
        (null === (r = n.g.process) || void 0 === r ? void 0 : r.env) &&
        'object' ===
          typeof (null === (o = n.g.process) || void 0 === o ? void 0 : o.env)
          ? n.g.process
          : n(7663);
    },
    6363: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(7211);
        },
      ]);
    },
    5479: function (e, t, n) {
      'use strict';
      var r = n(5893),
        o = (n(7294), n(1664)),
        i = n(1163),
        a = n(4184),
        s = n.n(a),
        c = [
          { locale: 'en', text: 'English' },
          { locale: 'ko', text: '\ud55c\uad6d\uc5b4' },
          { locale: 'ms', text: 'Bahasa Melayu' },
          { locale: 'tr', text: 'T\xfcrk\xe7e' },
        ];
      t.Z = function (e) {
        var t = e.className,
          n = (0, i.useRouter)();
        return (0, r.jsxs)('div', {
          className: s()(t, 'dropdown dropdown-end'),
          children: [
            (0, r.jsx)('label', {
              tabIndex: 0,
              className: 'btn btn-ghost m-1',
              children: 'Language',
            }),
            (0, r.jsx)('ul', {
              tabIndex: 0,
              className:
                'dropdown-content menu bg-base-100 w-56 rounded-box shadow',
              children: c.map(function (e) {
                return (0,
                r.jsx)('li', { children: (0, r.jsx)(o.default, { href: n.asPath, locale: e.locale, children: (0, r.jsx)('a', { className: s()(n.locale === e.locale && 'active'), children: e.text }) }) }, e.locale);
              }),
            }),
          ],
        });
      };
    },
    8418: function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
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
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(n);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return r(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      t.default = void 0;
      var i,
        a = (i = n(7294)) && i.__esModule ? i : { default: i },
        s = n(6273),
        c = n(387),
        u = n(7190);
      var l = {};
      function f(e, t, n, r) {
        if (e && s.isLocalURL(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0;
          });
          var o =
            r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale;
          l[t + '%' + n + (o ? '%' + o : '')] = !0;
        }
      }
      var p = function (e) {
        var t,
          n = !1 !== e.prefetch,
          r = c.useRouter(),
          i = a.default.useMemo(
            function () {
              var t = o(s.resolveHref(r, e.href, !0), 2),
                n = t[0],
                i = t[1];
              return { href: n, as: e.as ? s.resolveHref(r, e.as) : i || n };
            },
            [r, e.href, e.as],
          ),
          p = i.href,
          g = i.as,
          d = e.children,
          h = e.replace,
          v = e.shallow,
          y = e.scroll,
          m = e.locale;
        'string' === typeof d && (d = a.default.createElement('a', null, d));
        var b =
            (t = a.default.Children.only(d)) && 'object' === typeof t && t.ref,
          O = o(u.useIntersection({ rootMargin: '200px' }), 2),
          w = O[0],
          x = O[1],
          k = a.default.useCallback(
            function (e) {
              w(e),
                b &&
                  ('function' === typeof b
                    ? b(e)
                    : 'object' === typeof b && (b.current = e));
            },
            [b, w],
          );
        a.default.useEffect(
          function () {
            var e = x && n && s.isLocalURL(p),
              t = 'undefined' !== typeof m ? m : r && r.locale,
              o = l[p + '%' + g + (t ? '%' + t : '')];
            e && !o && f(r, p, g, { locale: t });
          },
          [g, p, x, m, n, r],
        );
        var j = {
          ref: k,
          onClick: function (e) {
            t.props &&
              'function' === typeof t.props.onClick &&
              t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, i, a, c) {
                  ('A' !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      s.isLocalURL(n))) &&
                    (e.preventDefault(),
                    t[o ? 'replace' : 'push'](n, r, {
                      shallow: i,
                      locale: c,
                      scroll: a,
                    }));
                })(e, r, p, g, h, v, y, m);
          },
          onMouseEnter: function (e) {
            t.props &&
              'function' === typeof t.props.onMouseEnter &&
              t.props.onMouseEnter(e),
              s.isLocalURL(p) && f(r, p, g, { priority: !0 });
          },
        };
        if (e.passHref || ('a' === t.type && !('href' in t.props))) {
          var S = 'undefined' !== typeof m ? m : r && r.locale,
            P =
              r &&
              r.isLocaleDomain &&
              s.getDomainLocale(g, S, r && r.locales, r && r.domainLocales);
          j.href = P || s.addBasePath(s.addLocale(g, S, r && r.defaultLocale));
        }
        return a.default.cloneElement(t, j);
      };
      t.default = p;
    },
    7190: function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
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
                o,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  a = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (s) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(n);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return r(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            r = e.disabled || !s,
            l = i.useRef(),
            f = o(i.useState(!1), 2),
            p = f[0],
            g = f[1],
            d = o(i.useState(t ? t.current : null), 2),
            h = d[0],
            v = d[1],
            y = i.useCallback(
              function (e) {
                l.current && (l.current(), (l.current = void 0)),
                  r ||
                    p ||
                    (e &&
                      e.tagName &&
                      (l.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t,
                              n = {
                                root: e.root || null,
                                margin: e.rootMargin || '',
                              },
                              r = u.find(function (e) {
                                return (
                                  e.root === n.root && e.margin === n.margin
                                );
                              });
                            r ? (t = c.get(r)) : ((t = c.get(n)), u.push(n));
                            if (t) return t;
                            var o = new Map(),
                              i = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = o.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              c.set(
                                n,
                                (t = { id: n, observer: i, elements: o }),
                              ),
                              t
                            );
                          })(n),
                          o = r.id,
                          i = r.observer,
                          a = r.elements;
                        return (
                          a.set(e, t),
                          i.observe(e),
                          function () {
                            if ((a.delete(e), i.unobserve(e), 0 === a.size)) {
                              i.disconnect(), c.delete(o);
                              var t = u.findIndex(function (e) {
                                return (
                                  e.root === o.root && e.margin === o.margin
                                );
                              });
                              t > -1 && u.splice(t, 1);
                            }
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && g(e);
                        },
                        { root: h, rootMargin: n },
                      )));
              },
              [r, h, n, p],
            );
          return (
            i.useEffect(
              function () {
                if (!s && !p) {
                  var e = a.requestIdleCallback(function () {
                    return g(!0);
                  });
                  return function () {
                    return a.cancelIdleCallback(e);
                  };
                }
              },
              [p],
            ),
            i.useEffect(
              function () {
                t && v(t.current);
              },
              [t],
            ),
            [y, p]
          );
        });
      var i = n(7294),
        a = n(9311),
        s = 'undefined' !== typeof IntersectionObserver;
      var c = new Map(),
        u = [];
    },
    7211: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var r = n(5893),
        o = n(7294),
        i = (n(906), n(1163)),
        a = n(1538),
        s = n(9008);
      var c = function (e) {
          e =
            null !== e
              ? e
              : (function (e) {
                  throw e;
                })(new TypeError('Cannot destructure undefined'));
          var t = (0, a.$G)().t;
          return (0, r.jsxs)(s.default, {
            children: [
              (0, r.jsx)('title', { children: 'Q.Link' }),
              (0, r.jsx)('meta', {
                name: 'description',
                content: t('common:seo.description'),
              }),
              (0, r.jsx)('meta', {
                name: 'keywords',
                content: t('common:seo.keywords'),
              }),
              (0, r.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, r.jsx)('meta', { property: 'og:title', content: 'Q.Link' }),
              (0, r.jsx)('meta', {
                property: 'og:description',
                content: t('common:seo.description'),
              }),
              (0, r.jsx)('meta', {
                property: 'og:url',
                content: 'https://q-link.minung.dev',
              }),
            ],
          });
        },
        u = n(1664),
        l = n(5479);
      var f = function (e) {
        return (
          (e =
            null !== e
              ? e
              : (function (e) {
                  throw e;
                })(new TypeError('Cannot destructure undefined'))),
          (0, r.jsxs)('header', {
            className: 'p-4 flex items-center relative',
            children: [
              (0, r.jsx)('h1', {
                className:
                  'text-4xl font-bold text-center text-base-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                children: (0, r.jsx)(u.default, {
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
              (0, r.jsx)(l.Z, { className: 'ml-auto' }),
            ],
          })
        );
      };
      var p = function () {
        return (0, r.jsx)('footer', {
          className: 'mt-16 border-t',
          children: (0, r.jsxs)('div', {
            className: 'container flex py-4 text-sm',
            children: [
              (0, r.jsxs)('div', {
                className: '',
                children: [
                  '\xa9 2022',
                  ' ',
                  (0, r.jsx)('a', {
                    className: 'link link-hover',
                    href: 'https://github.com/hmu332233',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: 'Minung Han',
                  }),
                ],
              }),
              (0, r.jsx)('div', {
                className: 'ml-auto',
                children: (0, r.jsx)('a', {
                  href: 'https://github.com/hmu332233/q-link',
                  target: '_blank',
                  rel: 'noreferrer',
                  children: (0, r.jsx)('svg', {
                    className: 'fill-current',
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '24',
                    height: '24',
                    viewBox: '0 0 24 24',
                    children: (0, r.jsx)('path', {
                      d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
      var g = function (e) {
          var t = e.children,
            n = e.hideHeader;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(c, {}),
              (0, r.jsxs)('div', {
                className: 'flex flex-col min-h-screen',
                children: [
                  n || (0, r.jsx)(f, {}),
                  (0, r.jsx)('main', {
                    className: 'container grow',
                    children: t,
                  }),
                  (0, r.jsx)(p, {}),
                ],
              }),
            ],
          });
        },
        d = n(3454);
      function h(e, t, n) {
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
      function v(e) {
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
              h(e, t, n[t]);
            });
        }
        return e;
      }
      var y = (0, a.Jc)(function (e) {
        var t = e.Component,
          n = e.pageProps,
          a = (0, i.useRouter)();
        (0, o.useEffect)(
          function () {
            var e = function (e) {
              !(function (e) {
                window.gtag('config', d.env.GA_ID, { page_path: e });
              })(e);
            };
            return (
              a.events.on('routeChangeComplete', e),
              function () {
                a.events.off('routeChangeComplete', e);
              }
            );
          },
          [a.events],
        );
        var s = '/' === a.pathname;
        return (0,
        r.jsx)(g, { hideHeader: s, children: (0, r.jsx)(t, v({}, n)) });
      });
    },
    906: function () {},
    7663: function (e) {
      !(function () {
        var t = {
            162: function (e) {
              var t,
                n,
                r = (e.exports = {});
              function o() {
                throw new Error('setTimeout has not been defined');
              }
              function i() {
                throw new Error('clearTimeout has not been defined');
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = 'function' === typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  t = o;
                }
                try {
                  n = 'function' === typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  n = i;
                }
              })();
              var s,
                c = [],
                u = !1,
                l = -1;
              function f() {
                u &&
                  s &&
                  ((u = !1),
                  s.length ? (c = s.concat(c)) : (l = -1),
                  c.length && p());
              }
              function p() {
                if (!u) {
                  var e = a(f);
                  u = !0;
                  for (var t = c.length; t; ) {
                    for (s = c, c = []; ++l < t; ) s && s[l].run();
                    (l = -1), (t = c.length);
                  }
                  (s = null),
                    (u = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === i || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function g(e, t) {
                (this.fun = e), (this.array = t);
              }
              function d() {}
              (r.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                c.push(new g(e, t)), 1 !== c.length || u || a(p);
              }),
                (g.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = 'browser'),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ''),
                (r.versions = {}),
                (r.on = d),
                (r.addListener = d),
                (r.once = d),
                (r.off = d),
                (r.removeListener = d),
                (r.removeAllListeners = d),
                (r.emit = d),
                (r.prependListener = d),
                (r.prependOnceListener = d),
                (r.listeners = function (e) {
                  return [];
                }),
                (r.binding = function (e) {
                  throw new Error('process.binding is not supported');
                }),
                (r.cwd = function () {
                  return '/';
                }),
                (r.chdir = function (e) {
                  throw new Error('process.chdir is not supported');
                }),
                (r.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var i = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](i, i.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return i.exports;
        }
        r.ab = '//';
        var o = r(162);
        e.exports = o;
      })();
    },
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
    1664: function (e, t, n) {
      e.exports = n(8418);
    },
    1163: function (e, t, n) {
      e.exports = n(387);
    },
    9921: function (e, t) {
      'use strict';
      var n = 'function' === typeof Symbol && Symbol.for,
        r = n ? Symbol.for('react.element') : 60103,
        o = n ? Symbol.for('react.portal') : 60106,
        i = n ? Symbol.for('react.fragment') : 60107,
        a = n ? Symbol.for('react.strict_mode') : 60108,
        s = n ? Symbol.for('react.profiler') : 60114,
        c = n ? Symbol.for('react.provider') : 60109,
        u = n ? Symbol.for('react.context') : 60110,
        l = n ? Symbol.for('react.async_mode') : 60111,
        f = n ? Symbol.for('react.concurrent_mode') : 60111,
        p = n ? Symbol.for('react.forward_ref') : 60112,
        g = n ? Symbol.for('react.suspense') : 60113,
        d = n ? Symbol.for('react.suspense_list') : 60120,
        h = n ? Symbol.for('react.memo') : 60115,
        v = n ? Symbol.for('react.lazy') : 60116,
        y = n ? Symbol.for('react.block') : 60121,
        m = n ? Symbol.for('react.fundamental') : 60117,
        b = n ? Symbol.for('react.responder') : 60118,
        O = n ? Symbol.for('react.scope') : 60119;
      function w(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case l:
                case f:
                case i:
                case s:
                case a:
                case g:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case p:
                    case v:
                    case h:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function x(e) {
        return w(e) === f;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = r),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = v),
        (t.Memo = h),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = g),
        (t.isAsyncMode = function (e) {
          return x(e) || w(e) === l;
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return w(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === c;
        }),
        (t.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === p;
        }),
        (t.isFragment = function (e) {
          return w(e) === i;
        }),
        (t.isLazy = function (e) {
          return w(e) === v;
        }),
        (t.isMemo = function (e) {
          return w(e) === h;
        }),
        (t.isPortal = function (e) {
          return w(e) === o;
        }),
        (t.isProfiler = function (e) {
          return w(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === a;
        }),
        (t.isSuspense = function (e) {
          return w(e) === g;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === g ||
            e === d ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === h ||
                e.$$typeof === c ||
                e.$$typeof === u ||
                e.$$typeof === p ||
                e.$$typeof === m ||
                e.$$typeof === b ||
                e.$$typeof === O ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = w);
    },
    9864: function (e, t, n) {
      'use strict';
      e.exports = n(9921);
    },
    1739: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6363), t(387);
    });
    var n = e.O();
    _N_E = n;
  },
]);
