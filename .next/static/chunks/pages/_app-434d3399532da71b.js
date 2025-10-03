(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8679: function (e, t, r) {
      'use strict';
      var o = r(59864),
        i = {
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
        s = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        c = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {};
      function getStatics(e) {
        return o.isMemo(e) ? c : u[e.$$typeof] || i;
      }
      (u[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (u[o.Memo] = c);
      var l = Object.defineProperty,
        p = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function hoistNonReactStatics(e, t, r) {
        if ('string' != typeof t) {
          if (h) {
            var o = g(t);
            o && o !== h && hoistNonReactStatics(e, o, r);
          }
          var i = p(t);
          f && (i = i.concat(f(t)));
          for (
            var c = getStatics(e), u = getStatics(t), y = 0;
            y < i.length;
            ++y
          ) {
            var v = i[y];
            if (!s[v] && !(r && r[v]) && !(u && u[v]) && !(c && c[v])) {
              var m = d(t, v);
              try {
                l(e, v, m);
              } catch (e) {}
            }
          }
        }
        return e;
      };
    },
    50069: function (e, t, r) {
      'use strict';
      r.d(t, {
        cC: function () {
          return Trans;
        },
        Jc: function () {
          return appWithTranslation;
        },
        $G: function () {
          return useTranslation;
        },
      });
      var o,
        i = r(91),
        s = r(71002),
        c = r(4942),
        u = r(67294),
        l = r(71739),
        p = r.n(l),
        f = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
      function n(e) {
        var t = {
            type: 'tag',
            name: '',
            voidElement: !1,
            attrs: {},
            children: [],
          },
          r = e.match(/<\/?([^\s]+?)[/\s>]/);
        if (
          r &&
          ((t.name = r[1]),
          (p()[r[1]] || '/' === e.charAt(e.length - 2)) && (t.voidElement = !0),
          t.name.startsWith('!--'))
        ) {
          var o = e.indexOf('-->');
          return { type: 'comment', comment: -1 !== o ? e.slice(4, o) : '' };
        }
        for (var i = new RegExp(f), s = null; null !== (s = i.exec(e)); )
          if (s[0].trim()) {
            if (s[1]) {
              var c = s[1].trim(),
                u = [c, ''];
              c.indexOf('=') > -1 && (u = c.split('=')),
                (t.attrs[u[0]] = u[1]),
                i.lastIndex--;
            } else
              s[2] &&
                (t.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
          }
        return t;
      }
      var d = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        g = /^\s*$/,
        h = Object.create(null),
        y = {
          parse: function (e, t) {
            t || (t = {}), t.components || (t.components = h);
            var r,
              o = [],
              i = [],
              s = -1,
              c = !1;
            if (0 !== e.indexOf('<')) {
              var u = e.indexOf('<');
              o.push({
                type: 'text',
                content: -1 === u ? e : e.substring(0, u),
              });
            }
            return (
              e.replace(d, function (u, l) {
                if (c) {
                  if (u !== '</' + r.name + '>') return;
                  c = !1;
                }
                var p,
                  f = '/' !== u.charAt(1),
                  d = u.startsWith('<!--'),
                  h = l + u.length,
                  y = e.charAt(h);
                if (d) {
                  var v = n(u);
                  return s < 0 ? o.push(v) : (p = i[s]).children.push(v), o;
                }
                if (
                  (f &&
                    (s++,
                    'tag' === (r = n(u)).type &&
                      t.components[r.name] &&
                      ((r.type = 'component'), (c = !0)),
                    r.voidElement ||
                      c ||
                      !y ||
                      '<' === y ||
                      r.children.push({
                        type: 'text',
                        content: e.slice(h, e.indexOf('<', h)),
                      }),
                    0 === s && o.push(r),
                    (p = i[s - 1]) && p.children.push(r),
                    (i[s] = r)),
                  (!f || r.voidElement) &&
                    (s > -1 &&
                      (r.voidElement || r.name === u.slice(2, -1)) &&
                      (r = -1 == --s ? o : i[s]),
                    !c && '<' !== y && y))
                ) {
                  p = -1 === s ? o : i[s].children;
                  var m = e.indexOf('<', h),
                    b = e.slice(h, -1 === m ? void 0 : m);
                  g.test(b) && (b = ' '),
                    ((m > -1 && s + p.length >= 0) || ' ' !== b) &&
                      p.push({ type: 'text', content: b });
                }
              }),
              o
            );
          },
          stringify: function (e) {
            return e.reduce(function (e, t) {
              return (
                e +
                (function a(e, t) {
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
                                for (var r in e) t.push(r + '="' + e[r] + '"');
                                return t.length ? ' ' + t.join(' ') : '';
                              })(t.attrs)
                            : '') +
                          (t.voidElement ? '/>' : '>')),
                        t.voidElement
                          ? e
                          : e + t.children.reduce(a, '') + '</' + t.name + '>'
                      );
                    case 'comment':
                      return e + '<!--' + t.comment + '-->';
                  }
                })('', t)
              );
            }, '');
          },
        };
      function _classCallCheck(e, t) {
        if (!(e instanceof t))
          throw TypeError('Cannot call a class as a function');
      }
      var v = r(83997);
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, (0, v.Z)(o.key), o);
        }
      }
      function _createClass(e, t, r) {
        return (
          t && _defineProperties(e.prototype, t),
          r && _defineProperties(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      var m =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
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
          '&nbsp;': ' ',
          '&#160;': ' ',
          '&copy;': '\xa9',
          '&#169;': '\xa9',
          '&reg;': '\xae',
          '&#174;': '\xae',
          '&hellip;': '…',
          '&#8230;': '…',
          '&#x2F;': '/',
          '&#47;': '/',
        },
        unescapeHtmlEntity = function (e) {
          return b[e];
        },
        O = {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: '',
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
          useSuspense: !0,
          unescape: function (e) {
            return e.replace(m, unescapeHtmlEntity);
          },
        },
        S = (0, u.createContext)(),
        j = (function () {
          function ReportNamespaces() {
            _classCallCheck(this, ReportNamespaces), (this.usedNamespaces = {});
          }
          return (
            _createClass(ReportNamespaces, [
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
            ]),
            ReportNamespaces
          );
        })();
      function warn() {
        if (console && console.warn) {
          for (var e, t = arguments.length, r = Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          'string' == typeof r[0] && (r[0] = 'react-i18next:: '.concat(r[0])),
            (e = console).warn.apply(e, r);
        }
      }
      var k = {};
      function warnOnce() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        ('string' == typeof t[0] && k[t[0]]) ||
          ('string' == typeof t[0] && (k[t[0]] = new Date()),
          warn.apply(void 0, t));
      }
      function loadNamespaces(e, t, r) {
        e.loadNamespaces(t, function () {
          e.isInitialized
            ? r()
            : e.on('initialized', function initialized() {
                setTimeout(function () {
                  e.off('initialized', initialized);
                }, 0),
                  r();
              });
        });
      }
      var w = ['format'],
        x = [
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
      function Trans_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function Trans_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Trans_ownKeys(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Trans_ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function hasChildren(e, t) {
        if (!e) return !1;
        var r = e.props ? e.props.children : e.children;
        return t ? r.length > 0 : !!r;
      }
      function getChildren(e) {
        return e ? (e.props ? e.props.children : e.children) : [];
      }
      function getAsArray(e) {
        return Array.isArray(e) ? e : [e];
      }
      function Trans(e) {
        var t = e.children,
          r = e.count,
          c = e.parent,
          l = e.i18nKey,
          p = e.context,
          f = e.tOptions,
          d = void 0 === f ? {} : f,
          g = e.values,
          h = e.defaults,
          v = e.components,
          m = e.ns,
          b = e.i18n,
          j = e.t,
          k = e.shouldUnescape,
          P = (0, i.Z)(e, x),
          _ = (0, u.useContext)(S) || {},
          C = _.i18n,
          T = _.defaultNS,
          L = b || C || o;
        if (!L)
          return (
            warnOnce(
              'You will need to pass in an i18next instance by using i18nextReactModule',
            ),
            t
          );
        var N =
          j ||
          L.t.bind(L) ||
          function (e) {
            return e;
          };
        p && (d.context = p);
        var R = Trans_objectSpread(
            Trans_objectSpread({}, O),
            L.options && L.options.react,
          ),
          E = m || N.ns || T || (L.options && L.options.defaultNS);
        E = 'string' == typeof E ? [E] : E || ['translation'];
        var $ =
            h ||
            (function nodesToString(e, t) {
              if (!e) return '';
              var r = '',
                o = getAsArray(e),
                c =
                  t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor
                    ? t.transKeepBasicHtmlNodesFor
                    : [];
              return (
                o.forEach(function (e, o) {
                  if ('string' == typeof e) r += ''.concat(e);
                  else if ((0, u.isValidElement)(e)) {
                    var l = Object.keys(e.props).length,
                      p = c.indexOf(e.type) > -1,
                      f = e.props.children;
                    if (!f && p && 0 === l) r += '<'.concat(e.type, '/>');
                    else if (f || (p && 0 === l)) {
                      if (e.props.i18nIsDynamicList)
                        r += '<'.concat(o, '></').concat(o, '>');
                      else if (p && 1 === l && 'string' == typeof f)
                        r += '<'
                          .concat(e.type, '>')
                          .concat(f, '</')
                          .concat(e.type, '>');
                      else {
                        var d = nodesToString(f, t);
                        r += '<'.concat(o, '>').concat(d, '</').concat(o, '>');
                      }
                    } else r += '<'.concat(o, '></').concat(o, '>');
                  } else if (null === e)
                    warn(
                      'Trans: the passed in value is invalid - seems you passed in a null child.',
                    );
                  else if ('object' === (0, s.Z)(e)) {
                    var g = e.format,
                      h = Object.keys((0, i.Z)(e, w));
                    if (1 === h.length) {
                      var y = g ? ''.concat(h[0], ', ').concat(g) : h[0];
                      r += '{{'.concat(y, '}}');
                    } else
                      warn(
                        'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
                        e,
                      );
                  } else
                    warn(
                      'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
                      e,
                    );
                }),
                r
              );
            })(t, R) ||
            R.transEmptyNodeValue ||
            l,
          I = R.hashTransKey,
          D = l || (I ? I($) : $),
          F = g
            ? d.interpolation
            : {
                interpolation: Trans_objectSpread(
                  Trans_objectSpread({}, d.interpolation),
                  {},
                  { prefix: '#$?', suffix: '?$#' },
                ),
              },
          K = Trans_objectSpread(
            Trans_objectSpread(
              Trans_objectSpread(
                Trans_objectSpread({}, d),
                {},
                { count: r },
                g,
              ),
              F,
            ),
            {},
            { defaultValue: $, ns: E },
          ),
          Z = (function (e, t, r, o, i, c) {
            if ('' === t) return [];
            var l = o.transKeepBasicHtmlNodesFor || [],
              p = t && new RegExp(l.join('|')).test(t);
            if (!e && !p) return [t];
            var f = {};
            !(function getData(e) {
              getAsArray(e).forEach(function (e) {
                'string' == typeof e ||
                  (hasChildren(e)
                    ? getData(getChildren(e))
                    : 'object' !== (0, s.Z)(e) ||
                      (0, u.isValidElement)(e) ||
                      Object.assign(f, e));
              });
            })(e);
            var d = y.parse('<0>'.concat(t, '</0>')),
              g = Trans_objectSpread(Trans_objectSpread({}, f), i);
            function renderInner(e, t, r) {
              var o = getChildren(e),
                i = mapAST(o, t.children, r);
              return '[object Array]' === Object.prototype.toString.call(o) &&
                o.every(function (e) {
                  return (0, u.isValidElement)(e);
                }) &&
                0 === i.length
                ? o
                : i;
            }
            function pushTranslatedJSX(e, t, r, o, i) {
              e.dummy && (e.children = t),
                r.push(
                  (0, u.cloneElement)(
                    e,
                    Trans_objectSpread(
                      Trans_objectSpread({}, e.props),
                      {},
                      { key: o },
                    ),
                    i ? void 0 : t,
                  ),
                );
            }
            function mapAST(t, i, f) {
              var d = getAsArray(t);
              return getAsArray(i).reduce(function (t, i, h) {
                var y =
                  i.children &&
                  i.children[0] &&
                  i.children[0].content &&
                  r.services.interpolator.interpolate(
                    i.children[0].content,
                    g,
                    r.language,
                  );
                if ('tag' === i.type) {
                  var v,
                    m,
                    b,
                    O = d[parseInt(i.name, 10)];
                  !O && 1 === f.length && f[0][i.name] && (O = f[0][i.name]),
                    O || (O = {});
                  var S =
                      0 !== Object.keys(i.attrs).length
                        ? ((v = { props: i.attrs }),
                          ((b = Trans_objectSpread({}, (m = O))).props =
                            Object.assign(v.props, m.props)),
                          b)
                        : O,
                    j = (0, u.isValidElement)(S),
                    k = j && hasChildren(i, !0) && !i.voidElement,
                    w = p && 'object' === (0, s.Z)(S) && S.dummy && !j,
                    x =
                      'object' === (0, s.Z)(e) &&
                      null !== e &&
                      Object.hasOwnProperty.call(e, i.name);
                  if ('string' == typeof S) {
                    var P = r.services.interpolator.interpolate(
                      S,
                      g,
                      r.language,
                    );
                    t.push(P);
                  } else if (hasChildren(S) || k) {
                    var _ = renderInner(S, i, f);
                    pushTranslatedJSX(S, _, t, h);
                  } else if (w) {
                    var C = mapAST(d, i.children, f);
                    t.push(
                      (0, u.cloneElement)(
                        S,
                        Trans_objectSpread(
                          Trans_objectSpread({}, S.props),
                          {},
                          { key: h },
                        ),
                        C,
                      ),
                    );
                  } else if (Number.isNaN(parseFloat(i.name))) {
                    if (x) {
                      var T = renderInner(S, i, f);
                      pushTranslatedJSX(S, T, t, h, i.voidElement);
                    } else if (
                      o.transSupportBasicHtmlNodes &&
                      l.indexOf(i.name) > -1
                    ) {
                      if (i.voidElement)
                        t.push(
                          (0, u.createElement)(i.name, {
                            key: ''.concat(i.name, '-').concat(h),
                          }),
                        );
                      else {
                        var L = mapAST(d, i.children, f);
                        t.push(
                          (0, u.createElement)(
                            i.name,
                            { key: ''.concat(i.name, '-').concat(h) },
                            L,
                          ),
                        );
                      }
                    } else if (i.voidElement) t.push('<'.concat(i.name, ' />'));
                    else {
                      var N = mapAST(d, i.children, f);
                      t.push(
                        '<'
                          .concat(i.name, '>')
                          .concat(N, '</')
                          .concat(i.name, '>'),
                      );
                    }
                  } else if ('object' !== (0, s.Z)(S) || j)
                    1 === i.children.length && y
                      ? t.push(
                          (0, u.cloneElement)(
                            S,
                            Trans_objectSpread(
                              Trans_objectSpread({}, S.props),
                              {},
                              { key: h },
                            ),
                            y,
                          ),
                        )
                      : t.push(
                          (0, u.cloneElement)(
                            S,
                            Trans_objectSpread(
                              Trans_objectSpread({}, S.props),
                              {},
                              { key: h },
                            ),
                          ),
                        );
                  else {
                    var R = i.children[0] ? y : null;
                    R && t.push(R);
                  }
                } else if ('text' === i.type) {
                  var E = o.transWrapTextNodes,
                    $ = c
                      ? o.unescape(
                          r.services.interpolator.interpolate(
                            i.content,
                            g,
                            r.language,
                          ),
                        )
                      : r.services.interpolator.interpolate(
                          i.content,
                          g,
                          r.language,
                        );
                  E
                    ? t.push(
                        (0, u.createElement)(
                          E,
                          { key: ''.concat(i.name, '-').concat(h) },
                          $,
                        ),
                      )
                    : t.push($);
                }
                return t;
              }, []);
            }
            return getChildren(
              mapAST(
                [{ dummy: !0, children: e || [] }],
                d,
                getAsArray(e || []),
              )[0],
            );
          })(v || t, D ? N(D, K) : $, L, R, K, k),
          V = void 0 !== c ? c : R.defaultTransParent;
        return V ? (0, u.createElement)(V, P, Z) : Z;
      }
      function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e;
      }
      var P = r(40181);
      function _nonIterableRest() {
        throw TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function _slicedToArray(e, t) {
        return (
          _arrayWithHoles(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var o,
                i,
                s,
                c,
                u = [],
                l = !0,
                p = !1;
              try {
                if (((s = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = s.call(r)).done) &&
                    (u.push(o.value), u.length !== t);
                    l = !0
                  );
              } catch (e) {
                (p = !0), (i = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (p) throw i;
                }
              }
              return u;
            }
          })(e, t) ||
          (0, P.Z)(e, t) ||
          _nonIterableRest()
        );
      }
      function useTranslation_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function useTranslation_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? useTranslation_ownKeys(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : useTranslation_ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var usePrevious = function (e, t) {
        var r = (0, u.useRef)();
        return (
          (0, u.useEffect)(
            function () {
              r.current = t ? r.current : e;
            },
            [e, t],
          ),
          r.current
        );
      };
      function useTranslation(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = t.i18n,
          i = (0, u.useContext)(S) || {},
          s = i.i18n,
          c = i.defaultNS,
          l = r || s || o;
        if ((l && !l.reportNamespaces && (l.reportNamespaces = new j()), !l)) {
          warnOnce(
            'You will need to pass in an i18next instance by using initReactI18next',
          );
          var notReadyT = function (e) {
              return Array.isArray(e) ? e[e.length - 1] : e;
            },
            p = [notReadyT, {}, !1];
          return (p.t = notReadyT), (p.i18n = {}), (p.ready = !1), p;
        }
        l.options.react &&
          void 0 !== l.options.react.wait &&
          warnOnce(
            'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
          );
        var f = useTranslation_objectSpread(
            useTranslation_objectSpread(
              useTranslation_objectSpread({}, O),
              l.options.react,
            ),
            t,
          ),
          d = f.useSuspense,
          g = f.keyPrefix,
          h = e || c || (l.options && l.options.defaultNS);
        (h = 'string' == typeof h ? [h] : h || ['translation']),
          l.reportNamespaces.addUsedNamespaces &&
            l.reportNamespaces.addUsedNamespaces(h);
        var y =
          (l.isInitialized || l.initializedStoreOnce) &&
          h.every(function (e) {
            return (function (e, t) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return t.languages && t.languages.length
                ? void 0 !== t.options.ignoreJSONStructure
                  ? t.hasLoadedNamespace(e, {
                      precheck: function (t, o) {
                        if (
                          r.bindI18n &&
                          r.bindI18n.indexOf('languageChanging') > -1 &&
                          t.services.backendConnector.backend &&
                          t.isLanguageChangingTo &&
                          !o(t.isLanguageChangingTo, e)
                        )
                          return !1;
                      },
                    })
                  : (function (e, t) {
                      var r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        o = t.languages[0],
                        i = !!t.options && t.options.fallbackLng,
                        s = t.languages[t.languages.length - 1];
                      if ('cimode' === o.toLowerCase()) return !0;
                      var loadNotPending = function (e, r) {
                        var o =
                          t.services.backendConnector.state[
                            ''.concat(e, '|').concat(r)
                          ];
                        return -1 === o || 2 === o;
                      };
                      return (
                        (!(
                          r.bindI18n &&
                          r.bindI18n.indexOf('languageChanging') > -1
                        ) ||
                          !t.services.backendConnector.backend ||
                          !t.isLanguageChangingTo ||
                          !!loadNotPending(t.isLanguageChangingTo, e)) &&
                        !!(
                          t.hasResourceBundle(o, e) ||
                          !t.services.backendConnector.backend ||
                          (t.options.resources &&
                            !t.options.partialBundledLanguages) ||
                          (loadNotPending(o, e) && (!i || loadNotPending(s, e)))
                        )
                      );
                    })(e, t, r)
                : (warnOnce(
                    'i18n.languages were undefined or empty',
                    t.languages,
                  ),
                  !0);
            })(e, l, f);
          });
        function getT() {
          return l.getFixedT(null, 'fallback' === f.nsMode ? h : h[0], g);
        }
        var v = _slicedToArray((0, u.useState)(getT), 2),
          m = v[0],
          b = v[1],
          k = h.join(),
          w = usePrevious(k),
          x = (0, u.useRef)(!0);
        (0, u.useEffect)(
          function () {
            var e = f.bindI18n,
              t = f.bindI18nStore;
            function boundReset() {
              x.current && b(getT);
            }
            return (
              (x.current = !0),
              y ||
                d ||
                loadNamespaces(l, h, function () {
                  x.current && b(getT);
                }),
              y && w && w !== k && x.current && b(getT),
              e && l && l.on(e, boundReset),
              t && l && l.store.on(t, boundReset),
              function () {
                (x.current = !1),
                  e &&
                    l &&
                    e.split(' ').forEach(function (e) {
                      return l.off(e, boundReset);
                    }),
                  t &&
                    l &&
                    t.split(' ').forEach(function (e) {
                      return l.store.off(e, boundReset);
                    });
              }
            );
          },
          [l, k],
        );
        var P = (0, u.useRef)(!0);
        (0, u.useEffect)(
          function () {
            x.current && !P.current && b(getT), (P.current = !1);
          },
          [l, g],
        );
        var _ = [m, l, y];
        if (((_.t = m), (_.i18n = l), (_.ready = y), y || (!y && !d))) return _;
        throw new Promise(function (e) {
          loadNamespaces(l, h, function () {
            e();
          });
        });
      }
      var _ = r(87462),
        C = r(8679),
        T = r.n(C);
      function I18nextProvider(e) {
        var t = e.i18n,
          r = e.defaultNS,
          o = e.children,
          i = (0, u.useMemo)(
            function () {
              return { i18n: t, defaultNS: r };
            },
            [t, r],
          );
        return (0, u.createElement)(S.Provider, { value: i }, o);
      }
      var L = r(74902),
        N = {
          defaultNS: 'common',
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: 'en', locales: ['en'] },
          get initImmediate() {
            return 'undefined' != typeof window;
          },
          interpolation: { escapeValue: !1 },
          load: 'currentOnly',
          localeExtension: 'json',
          localePath: './public/locales',
          localeStructure: '{{lng}}/{{ns}}',
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          use: [],
        },
        R = ['i18n'],
        E = ['i18n'];
      function createConfig_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function createConfig_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? createConfig_ownKeys(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : createConfig_ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var $ = ['backend', 'detection'],
        createConfig = function (e) {
          if ('string' != typeof (null == e ? void 0 : e.lng))
            throw Error('config.lng was not passed into createConfig');
          var t,
            r = e.i18n,
            o = (0, i.Z)(e, R),
            c = N.i18n,
            u = createConfig_objectSpread(
              createConfig_objectSpread(
                createConfig_objectSpread(
                  createConfig_objectSpread({}, (0, i.Z)(N, E)),
                  o,
                ),
                c,
              ),
              r,
            ),
            l = u.defaultNS,
            p = u.lng,
            f = u.localeExtension,
            d = u.localePath,
            g = u.localeStructure,
            h = u.nonExplicitSupportedLngs,
            y = u.locales.filter(function (e) {
              return 'default' !== e;
            });
          if ('cimode' === p) return u;
          if (
            void 0 === u.fallbackLng &&
            ((u.fallbackLng = u.defaultLocale), 'default' === u.fallbackLng)
          ) {
            var v = _slicedToArray(y, 1);
            u.fallbackLng = v[0];
          }
          var m = u.fallbackLng;
          if (h) {
            var createFallbackObject = function (e, t) {
              var r = _slicedToArray(t.split('-'), 1)[0];
              return (e[t] = [r]), e;
            };
            if ('string' == typeof m)
              u.fallbackLng = u.locales
                .filter(function (e) {
                  return e.includes('-');
                })
                .reduce(createFallbackObject, { default: [m] });
            else if (Array.isArray(m))
              u.fallbackLng = u.locales
                .filter(function (e) {
                  return e.includes('-');
                })
                .reduce(createFallbackObject, { default: m });
            else if ('object' === (0, s.Z)(m))
              u.fallbackLng = Object.entries(u.fallbackLng).reduce(function (
                e,
                t,
              ) {
                var r,
                  o = _slicedToArray(t, 2),
                  i = o[0],
                  s = o[1];
                return (
                  (e[i] = i.includes('-')
                    ? ((r = [i.split('-')[0]].concat((0, L.Z)(s))),
                      Array.from(new Set(r)))
                    : s),
                  e
                );
              },
              m);
            else if ('function' == typeof m)
              throw Error(
                'If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng',
              );
          }
          return (
            (null == e
              ? void 0
              : null === (t = e.use) || void 0 === t
              ? void 0
              : t.some(function (e) {
                  return 'backend' === e.type;
                })) ||
              ('string' == typeof d
                ? (u.backend = {
                    addPath: ''.concat(d, '/').concat(g, '.missing.').concat(f),
                    loadPath: ''.concat(d, '/').concat(g, '.').concat(f),
                  })
                : 'function' != typeof d ||
                  (u.backend = {
                    addPath: function (e, t) {
                      return d(e, t, !0);
                    },
                    loadPath: function (e, t) {
                      return d(e, t, !1);
                    },
                  })),
            'string' == typeof u.ns || Array.isArray(u.ns) || (u.ns = [l]),
            $.forEach(function (t) {
              e[t] &&
                (u[t] = createConfig_objectSpread(
                  createConfig_objectSpread({}, u[t]),
                  e[t],
                ));
            }),
            u
          );
        };
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function _inherits(e, t) {
        if ('function' != typeof t && null !== t)
          throw TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && _setPrototypeOf(e, t);
      }
      function _possibleConstructorReturn(e, t) {
        if (t && ('object' == (0, s.Z)(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw TypeError(
            'Derived constructors may only return object or undefined',
          );
        return _assertThisInitialized(e);
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var I = r(59199);
      function i18next_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function i18next_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i18next_ownKeys(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i18next_ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var D = {
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
        F = new ((function () {
          function Logger(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            _classCallCheck(this, Logger), this.init(e, t);
          }
          return (
            _createClass(Logger, [
              {
                key: 'init',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || D),
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
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return this.forward(t, 'log', '', !0);
                },
              },
              {
                key: 'warn',
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return this.forward(t, 'warn', '', !0);
                },
              },
              {
                key: 'error',
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return this.forward(t, 'error', '');
                },
              },
              {
                key: 'deprecate',
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
                },
              },
              {
                key: 'forward',
                value: function (e, t, r, o) {
                  return o && !this.debug
                    ? null
                    : ('string' == typeof e[0] &&
                        (e[0] = ''
                          .concat(r)
                          .concat(this.prefix, ' ')
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: 'create',
                value: function (e) {
                  return new Logger(
                    this.logger,
                    i18next_objectSpread(
                      i18next_objectSpread(
                        {},
                        { prefix: ''.concat(this.prefix, ':').concat(e, ':') },
                      ),
                      this.options,
                    ),
                  );
                },
              },
              {
                key: 'clone',
                value: function (e) {
                  return (
                    ((e = e || this.options).prefix = e.prefix || this.prefix),
                    new Logger(this.logger, e)
                  );
                },
              },
            ]),
            Logger
          );
        })())(),
        K = (function () {
          function EventEmitter() {
            _classCallCheck(this, EventEmitter), (this.observers = {});
          }
          return (
            _createClass(EventEmitter, [
              {
                key: 'on',
                value: function (e, t) {
                  var r = this;
                  return (
                    e.split(' ').forEach(function (e) {
                      (r.observers[e] = r.observers[e] || []),
                        r.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: 'off',
                value: function (e, t) {
                  if (this.observers[e]) {
                    if (!t) {
                      delete this.observers[e];
                      return;
                    }
                    this.observers[e] = this.observers[e].filter(function (e) {
                      return e !== t;
                    });
                  }
                },
              },
              {
                key: 'emit',
                value: function (e) {
                  for (
                    var t = arguments.length,
                      r = Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  this.observers[e] &&
                    [].concat(this.observers[e]).forEach(function (e) {
                      e.apply(void 0, r);
                    }),
                    this.observers['*'] &&
                      [].concat(this.observers['*']).forEach(function (t) {
                        t.apply(t, [e].concat(r));
                      });
                },
              },
            ]),
            EventEmitter
          );
        })();
      function defer() {
        var e,
          t,
          r = new Promise(function (r, o) {
            (e = r), (t = o);
          });
        return (r.resolve = e), (r.reject = t), r;
      }
      function makeString(e) {
        return null == e ? '' : '' + e;
      }
      function getLastOfPath(e, t, r) {
        function cleanKey(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e;
        }
        function canNotTraverseDeeper() {
          return !e || 'string' == typeof e;
        }
        for (
          var o = 'string' != typeof t ? [].concat(t) : t.split('.');
          o.length > 1;

        ) {
          if (canNotTraverseDeeper()) return {};
          var i = cleanKey(o.shift());
          !e[i] && r && (e[i] = new r()),
            (e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {});
        }
        return canNotTraverseDeeper() ? {} : { obj: e, k: cleanKey(o.shift()) };
      }
      function setPath(e, t, r) {
        var o = getLastOfPath(e, t, Object);
        o.obj[o.k] = r;
      }
      function getPath(e, t) {
        var r = getLastOfPath(e, t),
          o = r.obj,
          i = r.k;
        if (o) return o[i];
      }
      function getPathWithDefaults(e, t, r) {
        var o = getPath(e, r);
        return void 0 !== o ? o : getPath(t, r);
      }
      function regexEscape(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      var Z = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      };
      function i18next_escape(e) {
        return 'string' == typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return Z[e];
            })
          : e;
      }
      var V =
          'undefined' != typeof window &&
          window.navigator &&
          void 0 === window.navigator.userAgentData &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf('MSIE') > -1,
        U = [' ', ',', '?', '!', ';'];
      function ownKeys$1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread$1(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys$1(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys$1(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var M = (function (e) {
          _inherits(ResourceStore, e);
          var t,
            r =
              ((t = (function () {
                if (
                  'undefined' == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ('function' == typeof Proxy) return !0;
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
              })()),
              function () {
                var e,
                  r = _getPrototypeOf(ResourceStore);
                if (t) {
                  var o = _getPrototypeOf(this).constructor;
                  e = Reflect.construct(r, arguments, o);
                } else e = r.apply(this, arguments);
                return _possibleConstructorReturn(this, e);
              });
          function ResourceStore(e) {
            var t,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' };
            return (
              _classCallCheck(this, ResourceStore),
              (t = r.call(this)),
              V && K.call(_assertThisInitialized(t)),
              (t.data = e || {}),
              (t.options = o),
              void 0 === t.options.keySeparator &&
                (t.options.keySeparator = '.'),
              void 0 === t.options.ignoreJSONStructure &&
                (t.options.ignoreJSONStructure = !0),
              t
            );
          }
          return (
            _createClass(ResourceStore, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
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
                value: function (e, t, r) {
                  var o =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    i =
                      void 0 !== o.keySeparator
                        ? o.keySeparator
                        : this.options.keySeparator,
                    s =
                      void 0 !== o.ignoreJSONStructure
                        ? o.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    c = [e, t];
                  r && 'string' != typeof r && (c = c.concat(r)),
                    r &&
                      'string' == typeof r &&
                      (c = c.concat(i ? r.split(i) : r)),
                    e.indexOf('.') > -1 && (c = e.split('.'));
                  var u = getPath(this.data, c);
                  return u || !s || 'string' != typeof r
                    ? u
                    : (function deepFind(e, t) {
                        var r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : '.';
                        if (e) {
                          if (e[t]) return e[t];
                          for (
                            var o = t.split(r), i = e, s = 0;
                            s < o.length;
                            ++s
                          ) {
                            if (
                              !i ||
                              ('string' == typeof i[o[s]] && s + 1 < o.length)
                            )
                              return;
                            if (void 0 === i[o[s]]) {
                              for (
                                var c = 2,
                                  u = o.slice(s, s + c).join(r),
                                  l = i[u];
                                void 0 === l && o.length > s + c;

                              )
                                c++, (l = i[(u = o.slice(s, s + c).join(r))]);
                              if (void 0 === l) return;
                              if (null === l) return null;
                              if (t.endsWith(u)) {
                                if ('string' == typeof l) return l;
                                if (u && 'string' == typeof l[u]) return l[u];
                              }
                              var p = o.slice(s + c).join(r);
                              if (p) return deepFind(l, p, r);
                              return;
                            }
                            i = i[o[s]];
                          }
                          return i;
                        }
                      })(this.data && this.data[e] && this.data[e][t], r, i);
                },
              },
              {
                key: 'addResource',
                value: function (e, t, r, o) {
                  var i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    s = this.options.keySeparator;
                  void 0 === s && (s = '.');
                  var c = [e, t];
                  r && (c = c.concat(s ? r.split(s) : r)),
                    e.indexOf('.') > -1 &&
                      ((c = e.split('.')), (o = t), (t = c[1])),
                    this.addNamespaces(t),
                    setPath(this.data, c, o),
                    i.silent || this.emit('added', e, t, r, o);
                },
              },
              {
                key: 'addResources',
                value: function (e, t, r) {
                  var o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var i in r)
                    ('string' == typeof r[i] ||
                      '[object Array]' ===
                        Object.prototype.toString.apply(r[i])) &&
                      this.addResource(e, t, i, r[i], { silent: !0 });
                  o.silent || this.emit('added', e, t, r);
                },
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, r, o, i) {
                  var s =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    c = [e, t];
                  e.indexOf('.') > -1 &&
                    ((c = e.split('.')), (o = r), (r = t), (t = c[1])),
                    this.addNamespaces(t);
                  var u = getPath(this.data, c) || {};
                  o
                    ? (function deepExtend(e, t, r) {
                        for (var o in t)
                          '__proto__' !== o &&
                            'constructor' !== o &&
                            (o in e
                              ? 'string' == typeof e[o] ||
                                e[o] instanceof String ||
                                'string' == typeof t[o] ||
                                t[o] instanceof String
                                ? r && (e[o] = t[o])
                                : deepExtend(e[o], t[o], r)
                              : (e[o] = t[o]));
                        return e;
                      })(u, r, i)
                    : (u = _objectSpread$1(_objectSpread$1({}, u), r)),
                    setPath(this.data, c, u),
                    s.silent || this.emit('added', e, t, r);
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
                  return (t || (t = this.options.defaultNS),
                  'v1' === this.options.compatibilityAPI)
                    ? _objectSpread$1(
                        _objectSpread$1({}, {}),
                        this.getResource(e, t),
                      )
                    : this.getResource(e, t);
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
            ResourceStore
          );
        })(K),
        B = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, r, o, i) {
            var s = this;
            return (
              e.forEach(function (e) {
                s.processors[e] && (t = s.processors[e].process(t, r, o, i));
              }),
              t
            );
          },
        };
      function ownKeys$2(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread$2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys$2(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys$2(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var H = {},
        W = (function (e) {
          _inherits(Translator, e);
          var t,
            r =
              ((t = (function () {
                if (
                  'undefined' == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ('function' == typeof Proxy) return !0;
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
              })()),
              function () {
                var e,
                  r = _getPrototypeOf(Translator);
                if (t) {
                  var o = _getPrototypeOf(this).constructor;
                  e = Reflect.construct(r, arguments, o);
                } else e = r.apply(this, arguments);
                return _possibleConstructorReturn(this, e);
              });
          function Translator(e) {
            var t,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              _classCallCheck(this, Translator),
              (t = r.call(this)),
              V && K.call(_assertThisInitialized(t)),
              !(function (e, t, r) {
                e.forEach(function (e) {
                  t[e] && (r[e] = t[e]);
                });
              })(
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
                _assertThisInitialized(t),
              ),
              (t.options = o),
              void 0 === t.options.keySeparator &&
                (t.options.keySeparator = '.'),
              (t.logger = F.create('translator')),
              t
            );
          }
          return (
            _createClass(
              Translator,
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
                    if (null == e) return !1;
                    var r = this.resolve(e, t);
                    return r && void 0 !== r.res;
                  },
                },
                {
                  key: 'extractFromKey',
                  value: function (e, t) {
                    var r =
                      void 0 !== t.nsSeparator
                        ? t.nsSeparator
                        : this.options.nsSeparator;
                    void 0 === r && (r = ':');
                    var o =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      i = t.ns || this.options.defaultNS || [],
                      s = r && e.indexOf(r) > -1,
                      c =
                        !this.options.userDefinedKeySeparator &&
                        !t.keySeparator &&
                        !this.options.userDefinedNsSeparator &&
                        !t.nsSeparator &&
                        !(function (e, t, r) {
                          (t = t || ''), (r = r || '');
                          var o = U.filter(function (e) {
                            return 0 > t.indexOf(e) && 0 > r.indexOf(e);
                          });
                          if (0 === o.length) return !0;
                          var i = new RegExp(
                              '('.concat(
                                o
                                  .map(function (e) {
                                    return '?' === e ? '\\?' : e;
                                  })
                                  .join('|'),
                                ')',
                              ),
                            ),
                            s = !i.test(e);
                          if (!s) {
                            var c = e.indexOf(r);
                            c > 0 && !i.test(e.substring(0, c)) && (s = !0);
                          }
                          return s;
                        })(e, r, o);
                    if (s && !c) {
                      var u = e.match(this.interpolator.nestingRegexp);
                      if (u && u.length > 0) return { key: e, namespaces: i };
                      var l = e.split(r);
                      (r !== o ||
                        (r === o && this.options.ns.indexOf(l[0]) > -1)) &&
                        (i = l.shift()),
                        (e = l.join(o));
                    }
                    return (
                      'string' == typeof i && (i = [i]),
                      { key: e, namespaces: i }
                    );
                  },
                },
                {
                  key: 'translate',
                  value: function (e, t, r) {
                    var o = this;
                    if (
                      ('object' !== (0, s.Z)(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t =
                          this.options.overloadTranslationOptionHandler(
                            arguments,
                          )),
                      t || (t = {}),
                      null == e)
                    )
                      return '';
                    Array.isArray(e) || (e = [String(e)]);
                    var i =
                        void 0 !== t.returnDetails
                          ? t.returnDetails
                          : this.options.returnDetails,
                      c =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      u = this.extractFromKey(e[e.length - 1], t),
                      l = u.key,
                      p = u.namespaces,
                      f = p[p.length - 1],
                      d = t.lng || this.language,
                      g =
                        t.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode;
                    if (d && 'cimode' === d.toLowerCase()) {
                      if (g) {
                        var h = t.nsSeparator || this.options.nsSeparator;
                        return i
                          ? ((y.res = ''.concat(f).concat(h).concat(l)), y)
                          : ''.concat(f).concat(h).concat(l);
                      }
                      return i ? ((y.res = l), y) : l;
                    }
                    var y = this.resolve(e, t),
                      v = y && y.res,
                      m = (y && y.usedKey) || l,
                      b = (y && y.exactUsedKey) || l,
                      O = Object.prototype.toString.apply(v),
                      S =
                        void 0 !== t.joinArrays
                          ? t.joinArrays
                          : this.options.joinArrays,
                      j = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      k =
                        'string' != typeof v &&
                        'boolean' != typeof v &&
                        'number' != typeof v;
                    if (
                      j &&
                      v &&
                      k &&
                      0 >
                        [
                          '[object Number]',
                          '[object Function]',
                          '[object RegExp]',
                        ].indexOf(O) &&
                      !('string' == typeof S && '[object Array]' === O)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler ||
                          this.logger.warn(
                            'accessing an object - but returnObjects options is not enabled!',
                          );
                        var w = this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(
                              m,
                              v,
                              _objectSpread$2(
                                _objectSpread$2({}, t),
                                {},
                                { ns: p },
                              ),
                            )
                          : "key '"
                              .concat(l, ' (')
                              .concat(
                                this.language,
                                ")' returned an object instead of string.",
                              );
                        return i ? ((y.res = w), y) : w;
                      }
                      if (c) {
                        var x = '[object Array]' === O,
                          P = x ? [] : {},
                          _ = x ? b : m;
                        for (var C in v)
                          if (Object.prototype.hasOwnProperty.call(v, C)) {
                            var T = ''.concat(_).concat(c).concat(C);
                            (P[C] = this.translate(
                              T,
                              _objectSpread$2(_objectSpread$2({}, t), {
                                joinArrays: !1,
                                ns: p,
                              }),
                            )),
                              P[C] === T && (P[C] = v[C]);
                          }
                        v = P;
                      }
                    } else if (
                      j &&
                      'string' == typeof S &&
                      '[object Array]' === O
                    )
                      (v = v.join(S)) &&
                        (v = this.extendTranslation(v, e, t, r));
                    else {
                      var L = !1,
                        N = !1,
                        R = void 0 !== t.count && 'string' != typeof t.count,
                        E = Translator.hasDefaultValue(t),
                        $ = R
                          ? this.pluralResolver.getSuffix(d, t.count, t)
                          : '',
                        I = t['defaultValue'.concat($)] || t.defaultValue;
                      !this.isValidLookup(v) && E && ((L = !0), (v = I)),
                        this.isValidLookup(v) || ((N = !0), (v = l));
                      var D =
                          (t.missingKeyNoValueFallbackToKey ||
                            this.options.missingKeyNoValueFallbackToKey) &&
                          N
                            ? void 0
                            : v,
                        F = E && I !== v && this.options.updateMissing;
                      if (N || L || F) {
                        if (
                          (this.logger.log(
                            F ? 'updateKey' : 'missingKey',
                            d,
                            f,
                            l,
                            F ? I : v,
                          ),
                          c)
                        ) {
                          var K = this.resolve(
                            l,
                            _objectSpread$2(
                              _objectSpread$2({}, t),
                              {},
                              { keySeparator: !1 },
                            ),
                          );
                          K &&
                            K.res &&
                            this.logger.warn(
                              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                            );
                        }
                        var Z = [],
                          V = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language,
                          );
                        if (
                          'fallback' === this.options.saveMissingTo &&
                          V &&
                          V[0]
                        )
                          for (var U = 0; U < V.length; U++) Z.push(V[U]);
                        else
                          'all' === this.options.saveMissingTo
                            ? (Z = this.languageUtils.toResolveHierarchy(
                                t.lng || this.language,
                              ))
                            : Z.push(t.lng || this.language);
                        var send = function (e, r, i) {
                          var s = E && i !== v ? i : D;
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(e, f, r, s, F, t)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(e, f, r, s, F, t),
                            o.emit('missingKey', e, f, r, v);
                        };
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && R
                            ? Z.forEach(function (e) {
                                o.pluralResolver
                                  .getSuffixes(e, t)
                                  .forEach(function (r) {
                                    send(
                                      [e],
                                      l + r,
                                      t['defaultValue'.concat(r)] || I,
                                    );
                                  });
                              })
                            : send(Z, l, I));
                      }
                      (v = this.extendTranslation(v, e, t, y, r)),
                        N &&
                          v === l &&
                          this.options.appendNamespaceToMissingKey &&
                          (v = ''.concat(f, ':').concat(l)),
                        (N || L) &&
                          this.options.parseMissingKeyHandler &&
                          (v =
                            'v1' !== this.options.compatibilityAPI
                              ? this.options.parseMissingKeyHandler(
                                  this.options.appendNamespaceToMissingKey
                                    ? ''.concat(f, ':').concat(l)
                                    : l,
                                  L ? v : void 0,
                                )
                              : this.options.parseMissingKeyHandler(v));
                    }
                    return i ? ((y.res = v), y) : v;
                  },
                },
                {
                  key: 'extendTranslation',
                  value: function (e, t, r, o, i) {
                    var s = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        _objectSpread$2(
                          _objectSpread$2(
                            {},
                            this.options.interpolation.defaultVariables,
                          ),
                          r,
                        ),
                        o.usedLng,
                        o.usedNS,
                        o.usedKey,
                        { resolved: o },
                      );
                    else if (!r.skipInterpolation) {
                      r.interpolation &&
                        this.interpolator.init(
                          _objectSpread$2(_objectSpread$2({}, r), {
                            interpolation: _objectSpread$2(
                              _objectSpread$2({}, this.options.interpolation),
                              r.interpolation,
                            ),
                          }),
                        );
                      var c,
                        u =
                          'string' == typeof e &&
                          (r &&
                          r.interpolation &&
                          void 0 !== r.interpolation.skipOnVariables
                            ? r.interpolation.skipOnVariables
                            : this.options.interpolation.skipOnVariables);
                      if (u) {
                        var l = e.match(this.interpolator.nestingRegexp);
                        c = l && l.length;
                      }
                      var p =
                        r.replace && 'string' != typeof r.replace
                          ? r.replace
                          : r;
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (p = _objectSpread$2(
                            _objectSpread$2(
                              {},
                              this.options.interpolation.defaultVariables,
                            ),
                            p,
                          )),
                        (e = this.interpolator.interpolate(
                          e,
                          p,
                          r.lng || this.language,
                          r,
                        )),
                        u)
                      ) {
                        var f = e.match(this.interpolator.nestingRegexp);
                        c < (f && f.length) && (r.nest = !1);
                      }
                      !1 !== r.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (
                              var e = arguments.length, o = Array(e), c = 0;
                              c < e;
                              c++
                            )
                              o[c] = arguments[c];
                            return i && i[0] === o[0] && !r.context
                              ? (s.logger.warn(
                                  'It seems you are nesting recursively key: '
                                    .concat(o[0], ' in key: ')
                                    .concat(t[0]),
                                ),
                                null)
                              : s.translate.apply(s, o.concat([t]));
                          },
                          r,
                        )),
                        r.interpolation && this.interpolator.reset();
                    }
                    var d = r.postProcess || this.options.postProcess,
                      g = 'string' == typeof d ? [d] : d;
                    return (
                      null != e &&
                        g &&
                        g.length &&
                        !1 !== r.applyPostProcessor &&
                        (e = B.handle(
                          g,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? _objectSpread$2({ i18nResolved: o }, r)
                            : r,
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
                      r,
                      o,
                      i,
                      s,
                      c = this,
                      u =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      'string' == typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!c.isValidLookup(t)) {
                          var l = c.extractFromKey(e, u),
                            p = l.key;
                          r = p;
                          var f = l.namespaces;
                          c.options.fallbackNS &&
                            (f = f.concat(c.options.fallbackNS));
                          var d =
                              void 0 !== u.count && 'string' != typeof u.count,
                            g =
                              d &&
                              !u.ordinal &&
                              0 === u.count &&
                              c.pluralResolver.shouldUseIntlApi(),
                            h =
                              void 0 !== u.context &&
                              ('string' == typeof u.context ||
                                'number' == typeof u.context) &&
                              '' !== u.context,
                            y = u.lngs
                              ? u.lngs
                              : c.languageUtils.toResolveHierarchy(
                                  u.lng || c.language,
                                  u.fallbackLng,
                                );
                          f.forEach(function (e) {
                            c.isValidLookup(t) ||
                              ((s = e),
                              !H[''.concat(y[0], '-').concat(e)] &&
                                c.utils &&
                                c.utils.hasLoadedNamespace &&
                                !c.utils.hasLoadedNamespace(s) &&
                                ((H[''.concat(y[0], '-').concat(e)] = !0),
                                c.logger.warn(
                                  'key "'
                                    .concat(r, '" for languages "')
                                    .concat(
                                      y.join(', '),
                                      '" won\'t get resolved as namespace "',
                                    )
                                    .concat(s, '" was not yet loaded'),
                                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                                )),
                              y.forEach(function (r) {
                                if (!c.isValidLookup(t)) {
                                  i = r;
                                  var s,
                                    l = [p];
                                  if (
                                    c.i18nFormat &&
                                    c.i18nFormat.addLookupKeys
                                  )
                                    c.i18nFormat.addLookupKeys(l, p, r, e, u);
                                  else {
                                    d &&
                                      (f = c.pluralResolver.getSuffix(
                                        r,
                                        u.count,
                                        u,
                                      ));
                                    var f,
                                      y = ''.concat(
                                        c.options.pluralSeparator,
                                        'zero',
                                      );
                                    if (
                                      (d && (l.push(p + f), g && l.push(p + y)),
                                      h)
                                    ) {
                                      var v = ''
                                        .concat(p)
                                        .concat(c.options.contextSeparator)
                                        .concat(u.context);
                                      l.push(v),
                                        d &&
                                          (l.push(v + f), g && l.push(v + y));
                                    }
                                  }
                                  for (; (s = l.pop()); )
                                    c.isValidLookup(t) ||
                                      ((o = s),
                                      (t = c.getResource(r, e, s, u)));
                                }
                              }));
                          });
                        }
                      }),
                      {
                        res: t,
                        usedKey: r,
                        exactUsedKey: o,
                        usedLng: i,
                        usedNS: s,
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
                  value: function (e, t, r) {
                    var o =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, r, o)
                      : this.resourceStore.getResource(e, t, r, o);
                  },
                },
              ],
              [
                {
                  key: 'hasDefaultValue',
                  value: function (e) {
                    var t = 'defaultValue';
                    for (var r in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, r) &&
                        t === r.substring(0, t.length) &&
                        void 0 !== e[r]
                      )
                        return !0;
                    return !1;
                  },
                },
              ],
            ),
            Translator
          );
        })(K);
      function capitalize(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var J = (function () {
          function LanguageUtil(e) {
            _classCallCheck(this, LanguageUtil),
              (this.options = e),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = F.create('languageUtils'));
          }
          return (
            _createClass(LanguageUtil, [
              {
                key: 'getScriptPartFromCode',
                value: function (e) {
                  if (!e || 0 > e.indexOf('-')) return null;
                  var t = e.split('-');
                  return 2 === t.length
                    ? null
                    : (t.pop(), 'x' === t[t.length - 1].toLowerCase())
                    ? null
                    : this.formatLanguageCode(t.join('-'));
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (e) {
                  if (!e || 0 > e.indexOf('-')) return e;
                  var t = e.split('-');
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: 'formatLanguageCode',
                value: function (e) {
                  if ('string' == typeof e && e.indexOf('-') > -1) {
                    var t = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab',
                      ],
                      r = e.split('-');
                    return (
                      this.options.lowerCaseLng
                        ? (r = r.map(function (e) {
                            return e.toLowerCase();
                          }))
                        : 2 === r.length
                        ? ((r[0] = r[0].toLowerCase()),
                          (r[1] = r[1].toUpperCase()),
                          t.indexOf(r[1].toLowerCase()) > -1 &&
                            (r[1] = capitalize(r[1].toLowerCase())))
                        : 3 === r.length &&
                          ((r[0] = r[0].toLowerCase()),
                          2 === r[1].length && (r[1] = r[1].toUpperCase()),
                          'sgn' !== r[0] &&
                            2 === r[2].length &&
                            (r[2] = r[2].toUpperCase()),
                          t.indexOf(r[1].toLowerCase()) > -1 &&
                            (r[1] = capitalize(r[1].toLowerCase())),
                          t.indexOf(r[2].toLowerCase()) > -1 &&
                            (r[2] = capitalize(r[2].toLowerCase()))),
                      r.join('-')
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
                    r = this;
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var o = r.formatLanguageCode(e);
                          (!r.options.supportedLngs || r.isSupportedCode(o)) &&
                            (t = o);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var o = r.getLanguagePartFromCode(e);
                            if (r.isSupportedCode(o)) return (t = o);
                            t = r.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(o)) return e;
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
                    ('function' == typeof e && (e = e(t)),
                    'string' == typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var r = e[t];
                  return (
                    r || (r = e[this.getScriptPartFromCode(t)]),
                    r || (r = e[this.formatLanguageCode(t)]),
                    r || (r = e[this.getLanguagePartFromCode(t)]),
                    r || (r = e.default),
                    r || []
                  );
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function (e, t) {
                  var r = this,
                    o = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e,
                    ),
                    i = [],
                    addCode = function (e) {
                      e &&
                        (r.isSupportedCode(e)
                          ? i.push(e)
                          : r.logger.warn(
                              'rejecting language code not found in supportedLngs: '.concat(
                                e,
                              ),
                            ));
                    };
                  return (
                    'string' == typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load &&
                          addCode(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          addCode(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load &&
                          addCode(this.getLanguagePartFromCode(e)))
                      : 'string' == typeof e &&
                        addCode(this.formatLanguageCode(e)),
                    o.forEach(function (e) {
                      0 > i.indexOf(e) && addCode(r.formatLanguageCode(e));
                    }),
                    i
                  );
                },
              },
            ]),
            LanguageUtil
          );
        })(),
        q = [
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
        Y = {
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
        G = ['v1', 'v2', 'v3'],
        X = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
        Q = (function () {
          function PluralResolver(e) {
            var t,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            _classCallCheck(this, PluralResolver),
              (this.languageUtils = e),
              (this.options = r),
              (this.logger = F.create('pluralResolver')),
              (this.options.compatibilityJSON &&
                'v4' !== this.options.compatibilityJSON) ||
                ('undefined' != typeof Intl && Intl.PluralRules) ||
                ((this.options.compatibilityJSON = 'v3'),
                this.logger.error(
                  'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
                )),
              (this.rules =
                ((t = {}),
                q.forEach(function (e) {
                  e.lngs.forEach(function (r) {
                    t[r] = { numbers: e.nr, plurals: Y[e.fc] };
                  });
                }),
                t));
          }
          return (
            _createClass(PluralResolver, [
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
                    } catch (e) {
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
                    r = this.getRule(e, t);
                  return this.shouldUseIntlApi()
                    ? r && r.resolvedOptions().pluralCategories.length > 1
                    : r && r.numbers.length > 1;
                },
              },
              {
                key: 'getPluralFormsOfKey',
                value: function (e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return this.getSuffixes(e, r).map(function (e) {
                    return ''.concat(t).concat(e);
                  });
                },
              },
              {
                key: 'getSuffixes',
                value: function (e) {
                  var t = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    o = this.getRule(e, r);
                  return o
                    ? this.shouldUseIntlApi()
                      ? o
                          .resolvedOptions()
                          .pluralCategories.sort(function (e, t) {
                            return X[e] - X[t];
                          })
                          .map(function (e) {
                            return ''.concat(t.options.prepend).concat(e);
                          })
                      : o.numbers.map(function (o) {
                          return t.getSuffix(e, o, r);
                        })
                    : [];
                },
              },
              {
                key: 'getSuffix',
                value: function (e, t) {
                  var r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    o = this.getRule(e, r);
                  return o
                    ? this.shouldUseIntlApi()
                      ? ''.concat(this.options.prepend).concat(o.select(t))
                      : this.getSuffixRetroCompatible(o, t)
                    : (this.logger.warn('no plural rule found for: '.concat(e)),
                      '');
                },
              },
              {
                key: 'getSuffixRetroCompatible',
                value: function (e, t) {
                  var r = this,
                    o = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                    i = e.numbers[o];
                  this.options.simplifyPluralSuffix &&
                    2 === e.numbers.length &&
                    1 === e.numbers[0] &&
                    (2 === i ? (i = 'plural') : 1 === i && (i = ''));
                  var returnSuffix = function () {
                    return r.options.prepend && i.toString()
                      ? r.options.prepend + i.toString()
                      : i.toString();
                  };
                  return 'v1' === this.options.compatibilityJSON
                    ? 1 === i
                      ? ''
                      : 'number' == typeof i
                      ? '_plural_'.concat(i.toString())
                      : returnSuffix()
                    : 'v2' === this.options.compatibilityJSON ||
                      (this.options.simplifyPluralSuffix &&
                        2 === e.numbers.length &&
                        1 === e.numbers[0])
                    ? returnSuffix()
                    : this.options.prepend && o.toString()
                    ? this.options.prepend + o.toString()
                    : o.toString();
                },
              },
              {
                key: 'shouldUseIntlApi',
                value: function () {
                  return !G.includes(this.options.compatibilityJSON);
                },
              },
            ]),
            PluralResolver
          );
        })();
      function ownKeys$3(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread$3(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys$3(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys$3(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var ee = (function () {
        function Interpolator() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          _classCallCheck(this, Interpolator),
            (this.logger = F.create('interpolator')),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) ||
              function (e) {
                return e;
              }),
            this.init(e);
        }
        return (
          _createClass(Interpolator, [
            {
              key: 'init',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                e.interpolation || (e.interpolation = { escapeValue: !0 });
                var t = e.interpolation;
                (this.escape = void 0 !== t.escape ? t.escape : i18next_escape),
                  (this.escapeValue =
                    void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix
                    ? regexEscape(t.prefix)
                    : t.prefixEscaped || '{{'),
                  (this.suffix = t.suffix
                    ? regexEscape(t.suffix)
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
                    ? regexEscape(t.nestingPrefix)
                    : t.nestingPrefixEscaped || regexEscape('$t(')),
                  (this.nestingSuffix = t.nestingSuffix
                    ? regexEscape(t.nestingSuffix)
                    : t.nestingSuffixEscaped || regexEscape(')')),
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
                this.regexp = RegExp(e, 'g');
                var t = ''
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, '(.+?)')
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix);
                this.regexpUnescape = RegExp(t, 'g');
                var r = ''
                  .concat(this.nestingPrefix, '(.+?)')
                  .concat(this.nestingSuffix);
                this.nestingRegexp = RegExp(r, 'g');
              },
            },
            {
              key: 'interpolate',
              value: function (e, t, r, o) {
                var i,
                  s,
                  c,
                  u = this,
                  l =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {};
                function regexSafe(e) {
                  return e.replace(/\$/g, '$$$$');
                }
                var handleFormat = function (e) {
                  if (0 > e.indexOf(u.formatSeparator)) {
                    var i = getPathWithDefaults(t, l, e);
                    return u.alwaysFormat
                      ? u.format(
                          i,
                          void 0,
                          r,
                          _objectSpread$3(
                            _objectSpread$3(_objectSpread$3({}, o), t),
                            {},
                            { interpolationkey: e },
                          ),
                        )
                      : i;
                  }
                  var s = e.split(u.formatSeparator),
                    c = s.shift().trim(),
                    p = s.join(u.formatSeparator).trim();
                  return u.format(
                    getPathWithDefaults(t, l, c),
                    p,
                    r,
                    _objectSpread$3(
                      _objectSpread$3(_objectSpread$3({}, o), t),
                      {},
                      { interpolationkey: c },
                    ),
                  );
                };
                this.resetRegExp();
                var p =
                    (o && o.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  f =
                    o &&
                    o.interpolation &&
                    void 0 !== o.interpolation.skipOnVariables
                      ? o.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables;
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return regexSafe(e);
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return u.escapeValue
                          ? regexSafe(u.escape(e))
                          : regexSafe(e);
                      },
                    },
                  ].forEach(function (t) {
                    for (c = 0; (i = t.regex.exec(e)); ) {
                      var r = i[1].trim();
                      if (void 0 === (s = handleFormat(r))) {
                        if ('function' == typeof p) {
                          var l = p(e, i, o);
                          s = 'string' == typeof l ? l : '';
                        } else if (o && o.hasOwnProperty(r)) s = '';
                        else if (f) {
                          s = i[0];
                          continue;
                        } else
                          u.logger.warn(
                            'missed to pass in variable '
                              .concat(r, ' for interpolating ')
                              .concat(e),
                          ),
                            (s = '');
                      } else
                        'string' == typeof s ||
                          u.useRawValueToEscape ||
                          (s = makeString(s));
                      var d = t.safeValue(s);
                      if (
                        ((e = e.replace(i[0], d)),
                        f
                          ? ((t.regex.lastIndex += s.length),
                            (t.regex.lastIndex -= i[0].length))
                          : (t.regex.lastIndex = 0),
                        ++c >= u.maxReplaces)
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
                var r,
                  o,
                  i = this,
                  s =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  c = _objectSpread$3({}, s);
                function handleHasOptions(e, t) {
                  var r = this.nestingOptionsSeparator;
                  if (0 > e.indexOf(r)) return e;
                  var o = e.split(new RegExp(''.concat(r, '[ ]*{'))),
                    i = '{'.concat(o[1]);
                  e = o[0];
                  var s = (i = this.interpolate(i, c)).match(/'/g),
                    u = i.match(/"/g);
                  ((s && s.length % 2 == 0 && !u) || u.length % 2 != 0) &&
                    (i = i.replace(/'/g, '"'));
                  try {
                    (c = JSON.parse(i)),
                      t && (c = _objectSpread$3(_objectSpread$3({}, t), c));
                  } catch (t) {
                    return (
                      this.logger.warn(
                        'failed parsing options string in nesting for key '.concat(
                          e,
                        ),
                        t,
                      ),
                      ''.concat(e).concat(r).concat(i)
                    );
                  }
                  return delete c.defaultValue, e;
                }
                for (
                  c.applyPostProcessor = !1, delete c.defaultValue;
                  (r = this.nestingRegexp.exec(e));

                ) {
                  var u = [],
                    l = !1;
                  if (
                    -1 !== r[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(r[1])
                  ) {
                    var p = r[1].split(this.formatSeparator).map(function (e) {
                      return e.trim();
                    });
                    (r[1] = p.shift()), (u = p), (l = !0);
                  }
                  if (
                    (o = t(handleHasOptions.call(this, r[1].trim(), c), c)) &&
                    r[0] === e &&
                    'string' != typeof o
                  )
                    return o;
                  'string' != typeof o && (o = makeString(o)),
                    o ||
                      (this.logger.warn(
                        'missed to resolve '
                          .concat(r[1], ' for nesting ')
                          .concat(e),
                      ),
                      (o = '')),
                    l &&
                      (o = u.reduce(function (e, t) {
                        return i.format(
                          e,
                          t,
                          s.lng,
                          _objectSpread$3(
                            _objectSpread$3({}, s),
                            {},
                            { interpolationkey: r[1].trim() },
                          ),
                        );
                      }, o.trim())),
                    (e = e.replace(r[0], o)),
                    (this.regexp.lastIndex = 0);
                }
                return e;
              },
            },
          ]),
          Interpolator
        );
      })();
      function ownKeys$4(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread$4(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys$4(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys$4(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function createCachedFormatter(e) {
        var t = {};
        return function (r, o, i) {
          var s = o + JSON.stringify(i),
            c = t[s];
          return c || ((c = e(o, i)), (t[s] = c)), c(r);
        };
      }
      var et = (function () {
        function Formatter() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          _classCallCheck(this, Formatter),
            (this.logger = F.create('formatter')),
            (this.options = e),
            (this.formats = {
              number: createCachedFormatter(function (e, t) {
                var r = new Intl.NumberFormat(e, t);
                return function (e) {
                  return r.format(e);
                };
              }),
              currency: createCachedFormatter(function (e, t) {
                var r = new Intl.NumberFormat(
                  e,
                  _objectSpread$4(
                    _objectSpread$4({}, t),
                    {},
                    { style: 'currency' },
                  ),
                );
                return function (e) {
                  return r.format(e);
                };
              }),
              datetime: createCachedFormatter(function (e, t) {
                var r = new Intl.DateTimeFormat(e, _objectSpread$4({}, t));
                return function (e) {
                  return r.format(e);
                };
              }),
              relativetime: createCachedFormatter(function (e, t) {
                var r = new Intl.RelativeTimeFormat(e, _objectSpread$4({}, t));
                return function (e) {
                  return r.format(e, t.range || 'day');
                };
              }),
              list: createCachedFormatter(function (e, t) {
                var r = new Intl.ListFormat(e, _objectSpread$4({}, t));
                return function (e) {
                  return r.format(e);
                };
              }),
            }),
            this.init(e);
        }
        return (
          _createClass(Formatter, [
            {
              key: 'init',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  r = t.interpolation;
                this.formatSeparator = r.formatSeparator
                  ? r.formatSeparator
                  : r.formatSeparator || ',';
              },
            },
            {
              key: 'add',
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = t;
              },
            },
            {
              key: 'addCached',
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = createCachedFormatter(t);
              },
            },
            {
              key: 'format',
              value: function (e, t, r, o) {
                var i = this;
                return t.split(this.formatSeparator).reduce(function (e, t) {
                  var s = (function (e) {
                      var t = e.toLowerCase().trim(),
                        r = {};
                      if (e.indexOf('(') > -1) {
                        var o = e.split('(');
                        t = o[0].toLowerCase().trim();
                        var i = o[1].substring(0, o[1].length - 1);
                        'currency' === t && 0 > i.indexOf(':')
                          ? r.currency || (r.currency = i.trim())
                          : 'relativetime' === t && 0 > i.indexOf(':')
                          ? r.range || (r.range = i.trim())
                          : i.split(';').forEach(function (e) {
                              if (e) {
                                var t,
                                  o =
                                    _arrayWithHoles((t = e.split(':'))) ||
                                    (0, I.Z)(t) ||
                                    (0, P.Z)(t) ||
                                    _nonIterableRest(),
                                  i = o[0],
                                  s = o
                                    .slice(1)
                                    .join(':')
                                    .trim()
                                    .replace(/^'+|'+$/g, '');
                                r[i.trim()] || (r[i.trim()] = s),
                                  'false' === s && (r[i.trim()] = !1),
                                  'true' === s && (r[i.trim()] = !0),
                                  isNaN(s) || (r[i.trim()] = parseInt(s, 10));
                              }
                            });
                      }
                      return { formatName: t, formatOptions: r };
                    })(t),
                    c = s.formatName,
                    u = s.formatOptions;
                  if (i.formats[c]) {
                    var l = e;
                    try {
                      var p =
                          (o &&
                            o.formatParams &&
                            o.formatParams[o.interpolationkey]) ||
                          {},
                        f = p.locale || p.lng || o.locale || o.lng || r;
                      l = i.formats[c](
                        e,
                        f,
                        _objectSpread$4(
                          _objectSpread$4(_objectSpread$4({}, u), o),
                          p,
                        ),
                      );
                    } catch (e) {
                      i.logger.warn(e);
                    }
                    return l;
                  }
                  return (
                    i.logger.warn(
                      'there was no format function for '.concat(c),
                    ),
                    e
                  );
                }, e);
              },
            },
          ]),
          Formatter
        );
      })();
      function ownKeys$5(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread$5(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys$5(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys$5(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var en = (function (e) {
        _inherits(Connector, e);
        var t,
          r =
            ((t = (function () {
              if (
                'undefined' == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ('function' == typeof Proxy) return !0;
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
            })()),
            function () {
              var e,
                r = _getPrototypeOf(Connector);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return _possibleConstructorReturn(this, e);
            });
        function Connector(e, t, o) {
          var i,
            s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            _classCallCheck(this, Connector),
            (i = r.call(this)),
            V && K.call(_assertThisInitialized(i)),
            (i.backend = e),
            (i.store = t),
            (i.services = o),
            (i.languageUtils = o.languageUtils),
            (i.options = s),
            (i.logger = F.create('backendConnector')),
            (i.waitingReads = []),
            (i.maxParallelReads = s.maxParallelReads || 10),
            (i.readingCalls = 0),
            (i.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
            (i.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
            (i.state = {}),
            (i.queue = []),
            i.backend && i.backend.init && i.backend.init(o, s.backend, s),
            i
          );
        }
        return (
          _createClass(Connector, [
            {
              key: 'queueLoad',
              value: function (e, t, r, o) {
                var i = this,
                  s = {},
                  c = {},
                  u = {},
                  l = {};
                return (
                  e.forEach(function (e) {
                    var o = !0;
                    t.forEach(function (t) {
                      var u = ''.concat(e, '|').concat(t);
                      !r.reload && i.store.hasResourceBundle(e, t)
                        ? (i.state[u] = 2)
                        : i.state[u] < 0 ||
                          (1 === i.state[u]
                            ? void 0 === c[u] && (c[u] = !0)
                            : ((i.state[u] = 1),
                              (o = !1),
                              void 0 === c[u] && (c[u] = !0),
                              void 0 === s[u] && (s[u] = !0),
                              void 0 === l[t] && (l[t] = !0)));
                    }),
                      o || (u[e] = !0);
                  }),
                  (Object.keys(s).length || Object.keys(c).length) &&
                    this.queue.push({
                      pending: c,
                      pendingCount: Object.keys(c).length,
                      loaded: {},
                      errors: [],
                      callback: o,
                    }),
                  {
                    toLoad: Object.keys(s),
                    pending: Object.keys(c),
                    toLoadLanguages: Object.keys(u),
                    toLoadNamespaces: Object.keys(l),
                  }
                );
              },
            },
            {
              key: 'loaded',
              value: function (e, t, r) {
                var o = e.split('|'),
                  i = o[0],
                  s = o[1];
                t && this.emit('failedLoading', i, s, t),
                  r && this.store.addResourceBundle(i, s, r),
                  (this.state[e] = t ? -1 : 2);
                var c = {};
                this.queue.forEach(function (r) {
                  var o, u, l, p;
                  ((l = (u = getLastOfPath(r.loaded, [i], Object)).obj)[
                    (p = u.k)
                  ] = l[p] || []),
                    o && (l[p] = l[p].concat(s)),
                    o || l[p].push(s),
                    void 0 !== r.pending[e] &&
                      (delete r.pending[e], r.pendingCount--),
                    t && r.errors.push(t),
                    0 !== r.pendingCount ||
                      r.done ||
                      (Object.keys(r.loaded).forEach(function (e) {
                        c[e] || (c[e] = {});
                        var t = r.loaded[e];
                        t.length &&
                          t.forEach(function (t) {
                            void 0 === c[e][t] && (c[e][t] = !0);
                          });
                      }),
                      (r.done = !0),
                      r.errors.length ? r.callback(r.errors) : r.callback());
                }),
                  this.emit('loaded', c),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: 'read',
              value: function (e, t, r) {
                var o = this,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  s =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : this.retryTimeout,
                  c = arguments.length > 5 ? arguments[5] : void 0;
                if (!e.length) return c(null, {});
                if (this.readingCalls >= this.maxParallelReads) {
                  this.waitingReads.push({
                    lng: e,
                    ns: t,
                    fcName: r,
                    tried: i,
                    wait: s,
                    callback: c,
                  });
                  return;
                }
                return (
                  this.readingCalls++,
                  this.backend[r](e, t, function (u, l) {
                    if ((o.readingCalls--, o.waitingReads.length > 0)) {
                      var p = o.waitingReads.shift();
                      o.read(
                        p.lng,
                        p.ns,
                        p.fcName,
                        p.tried,
                        p.wait,
                        p.callback,
                      );
                    }
                    if (u && l && i < o.maxRetries) {
                      setTimeout(function () {
                        o.read.call(o, e, t, r, i + 1, 2 * s, c);
                      }, s);
                      return;
                    }
                    c(u, l);
                  })
                );
              },
            },
            {
              key: 'prepareLoading',
              value: function (e, t) {
                var r = this,
                  o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.',
                    ),
                    i && i()
                  );
                'string' == typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' == typeof t && (t = [t]);
                var s = this.queueLoad(e, t, o, i);
                if (!s.toLoad.length) return s.pending.length || i(), null;
                s.toLoad.forEach(function (e) {
                  r.loadOne(e);
                });
              },
            },
            {
              key: 'load',
              value: function (e, t, r) {
                this.prepareLoading(e, t, {}, r);
              },
            },
            {
              key: 'reload',
              value: function (e, t, r) {
                this.prepareLoading(e, t, { reload: !0 }, r);
              },
            },
            {
              key: 'loadOne',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  o = e.split('|'),
                  i = o[0],
                  s = o[1];
                this.read(i, s, 'read', void 0, void 0, function (o, c) {
                  o &&
                    t.logger.warn(
                      ''
                        .concat(r, 'loading namespace ')
                        .concat(s, ' for language ')
                        .concat(i, ' failed'),
                      o,
                    ),
                    !o &&
                      c &&
                      t.logger.log(
                        ''
                          .concat(r, 'loaded namespace ')
                          .concat(s, ' for language ')
                          .concat(i),
                        c,
                      ),
                    t.loaded(e, o, c);
                });
              },
            },
            {
              key: 'saveMissing',
              value: function (e, t, r, o, i) {
                var s =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {};
                if (
                  this.services.utils &&
                  this.services.utils.hasLoadedNamespace &&
                  !this.services.utils.hasLoadedNamespace(t)
                ) {
                  this.logger.warn(
                    'did not save key "'
                      .concat(r, '" as the namespace "')
                      .concat(t, '" was not yet loaded'),
                    'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                  );
                  return;
                }
                null != r &&
                  '' !== r &&
                  (this.backend &&
                    this.backend.create &&
                    this.backend.create(
                      e,
                      t,
                      r,
                      o,
                      null,
                      _objectSpread$5(
                        _objectSpread$5({}, s),
                        {},
                        { isUpdate: i },
                      ),
                    ),
                  e && e[0] && this.store.addResource(e[0], t, r, o));
              },
            },
          ]),
          Connector
        );
      })(K);
      function transformOptions(e) {
        return (
          'string' == typeof e.ns && (e.ns = [e.ns]),
          'string' == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          'string' == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf('cimode') &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        );
      }
      function ownKeys$6(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread$6(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys$6(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys$6(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function noop() {}
      var er = (function (e) {
        _inherits(I18n, e);
        var t,
          r =
            ((t = (function () {
              if (
                'undefined' == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ('function' == typeof Proxy) return !0;
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
            })()),
            function () {
              var e,
                r = _getPrototypeOf(I18n);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return _possibleConstructorReturn(this, e);
            });
        function I18n() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (_classCallCheck(this, I18n),
            (e = r.call(this)),
            V && K.call(_assertThisInitialized(e)),
            (e.options = transformOptions(t)),
            (e.services = {}),
            (e.logger = F),
            (e.modules = { external: [] }),
            !(function (e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(
                function (t) {
                  'function' == typeof e[t] && (e[t] = e[t].bind(e));
                },
              );
            })(_assertThisInitialized(e)),
            o && !e.isInitialized && !t.isClone)
          ) {
            if (!e.options.initImmediate)
              return (
                e.init(t, o),
                _possibleConstructorReturn(e, _assertThisInitialized(e))
              );
            setTimeout(function () {
              e.init(t, o);
            }, 0);
          }
          return e;
        }
        return (
          _createClass(I18n, [
            {
              key: 'init',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r = arguments.length > 1 ? arguments[1] : void 0;
                'function' == typeof t && ((r = t), (t = {})),
                  !t.defaultNS &&
                    !1 !== t.defaultNS &&
                    t.ns &&
                    ('string' == typeof t.ns
                      ? (t.defaultNS = t.ns)
                      : 0 > t.ns.indexOf('translation') &&
                        (t.defaultNS = t.ns[0]));
                var o = {
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
                      ('object' === (0, s.Z)(e[1]) && (t = e[1]),
                      'string' == typeof e[1] && (t.defaultValue = e[1]),
                      'string' == typeof e[2] && (t.tDescription = e[2]),
                      'object' === (0, s.Z)(e[2]) ||
                        'object' === (0, s.Z)(e[3]))
                    ) {
                      var r = e[3] || e[2];
                      Object.keys(r).forEach(function (e) {
                        t[e] = r[e];
                      });
                    }
                    return t;
                  },
                  interpolation: {
                    escapeValue: !0,
                    format: function (e, t, r, o) {
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
                function createClassOnDemand(e) {
                  return e ? ('function' == typeof e ? new e() : e) : null;
                }
                if (
                  ((this.options = _objectSpread$6(
                    _objectSpread$6(_objectSpread$6({}, o), this.options),
                    transformOptions(t),
                  )),
                  'v1' !== this.options.compatibilityAPI &&
                    (this.options.interpolation = _objectSpread$6(
                      _objectSpread$6({}, o.interpolation),
                      this.options.interpolation,
                    )),
                  void 0 !== t.keySeparator &&
                    (this.options.userDefinedKeySeparator = t.keySeparator),
                  void 0 !== t.nsSeparator &&
                    (this.options.userDefinedNsSeparator = t.nsSeparator),
                  !this.options.isClone)
                ) {
                  this.modules.logger
                    ? F.init(
                        createClassOnDemand(this.modules.logger),
                        this.options,
                      )
                    : F.init(null, this.options),
                    this.modules.formatter
                      ? (i = this.modules.formatter)
                      : 'undefined' != typeof Intl && (i = et);
                  var i,
                    c = new J(this.options);
                  this.store = new M(this.options.resources, this.options);
                  var u = this.services;
                  (u.logger = F),
                    (u.resourceStore = this.store),
                    (u.languageUtils = c),
                    (u.pluralResolver = new Q(c, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    i &&
                      (!this.options.interpolation.format ||
                        this.options.interpolation.format ===
                          o.interpolation.format) &&
                      ((u.formatter = createClassOnDemand(i)),
                      u.formatter.init(u, this.options),
                      (this.options.interpolation.format =
                        u.formatter.format.bind(u.formatter))),
                    (u.interpolator = new ee(this.options)),
                    (u.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (u.backendConnector = new en(
                      createClassOnDemand(this.modules.backend),
                      u.resourceStore,
                      u,
                      this.options,
                    )),
                    u.backendConnector.on('*', function (t) {
                      for (
                        var r = arguments.length,
                          o = Array(r > 1 ? r - 1 : 0),
                          i = 1;
                        i < r;
                        i++
                      )
                        o[i - 1] = arguments[i];
                      e.emit.apply(e, [t].concat(o));
                    }),
                    this.modules.languageDetector &&
                      ((u.languageDetector = createClassOnDemand(
                        this.modules.languageDetector,
                      )),
                      u.languageDetector.init(
                        u,
                        this.options.detection,
                        this.options,
                      )),
                    this.modules.i18nFormat &&
                      ((u.i18nFormat = createClassOnDemand(
                        this.modules.i18nFormat,
                      )),
                      u.i18nFormat.init && u.i18nFormat.init(this)),
                    (this.translator = new W(this.services, this.options)),
                    this.translator.on('*', function (t) {
                      for (
                        var r = arguments.length,
                          o = Array(r > 1 ? r - 1 : 0),
                          i = 1;
                        i < r;
                        i++
                      )
                        o[i - 1] = arguments[i];
                      e.emit.apply(e, [t].concat(o));
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e);
                    });
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  r || (r = noop),
                  this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng)
                ) {
                  var l = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng,
                  );
                  l.length > 0 && 'dev' !== l[0] && (this.options.lng = l[0]);
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    'init: no languageDetector is used and no lng is defined',
                  ),
                  [
                    'getResource',
                    'hasResourceBundle',
                    'getResourceBundle',
                    'getDataByLanguage',
                  ].forEach(function (t) {
                    e[t] = function () {
                      var r;
                      return (r = e.store)[t].apply(r, arguments);
                    };
                  }),
                  [
                    'addResource',
                    'addResources',
                    'addResourceBundle',
                    'removeResourceBundle',
                  ].forEach(function (t) {
                    e[t] = function () {
                      var r;
                      return (r = e.store)[t].apply(r, arguments), e;
                    };
                  });
                var p = defer(),
                  load = function () {
                    var finish = function (t, o) {
                      e.isInitialized &&
                        !e.initializedStoreOnce &&
                        e.logger.warn(
                          'init: i18next is already initialized. You should call init just once!',
                        ),
                        (e.isInitialized = !0),
                        e.options.isClone ||
                          e.logger.log('initialized', e.options),
                        e.emit('initialized', e.options),
                        p.resolve(o),
                        r(t, o);
                    };
                    if (
                      e.languages &&
                      'v1' !== e.options.compatibilityAPI &&
                      !e.isInitialized
                    )
                      return finish(null, e.t.bind(e));
                    e.changeLanguage(e.options.lng, finish);
                  };
                return (
                  this.options.resources || !this.options.initImmediate
                    ? load()
                    : setTimeout(load, 0),
                  p
                );
              },
            },
            {
              key: 'loadResources',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : noop,
                  o = r,
                  i = 'string' == typeof e ? e : this.language;
                if (
                  ('function' == typeof e && (o = e),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (i && 'cimode' === i.toLowerCase()) return o();
                  var s = [],
                    append = function (e) {
                      e &&
                        t.services.languageUtils
                          .toResolveHierarchy(e)
                          .forEach(function (e) {
                            0 > s.indexOf(e) && s.push(e);
                          });
                    };
                  i
                    ? append(i)
                    : this.services.languageUtils
                        .getFallbackCodes(this.options.fallbackLng)
                        .forEach(function (e) {
                          return append(e);
                        }),
                    this.options.preload &&
                      this.options.preload.forEach(function (e) {
                        return append(e);
                      }),
                    this.services.backendConnector.load(
                      s,
                      this.options.ns,
                      function (e) {
                        e ||
                          t.resolvedLanguage ||
                          !t.language ||
                          t.setResolvedLanguage(t.language),
                          o(e);
                      },
                    );
                } else o(null);
              },
            },
            {
              key: 'reloadResources',
              value: function (e, t, r) {
                var o = defer();
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  r || (r = noop),
                  this.services.backendConnector.reload(e, t, function (e) {
                    o.resolve(), r(e);
                  }),
                  o
                );
              },
            },
            {
              key: 'use',
              value: function (e) {
                if (!e)
                  throw Error(
                    'You are passing an undefined module! Please check the object you are passing to i18next.use()',
                  );
                if (!e.type)
                  throw Error(
                    'You are passing a wrong module! Please check the object you are passing to i18next.use()',
                  );
                return (
                  'backend' === e.type && (this.modules.backend = e),
                  ('logger' === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  'languageDetector' === e.type &&
                    (this.modules.languageDetector = e),
                  'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                  'postProcessor' === e.type && B.addPostProcessor(e),
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
                    var r = this.languages[t];
                    if (
                      !(['cimode', 'dev'].indexOf(r) > -1) &&
                      this.store.hasLanguageSomeTranslations(r)
                    ) {
                      this.resolvedLanguage = r;
                      break;
                    }
                  }
              },
            },
            {
              key: 'changeLanguage',
              value: function (e, t) {
                var r = this;
                this.isLanguageChangingTo = e;
                var o = defer();
                this.emit('languageChanging', e);
                var setLngProps = function (e) {
                    (r.language = e),
                      (r.languages =
                        r.services.languageUtils.toResolveHierarchy(e)),
                      (r.resolvedLanguage = void 0),
                      r.setResolvedLanguage(e);
                  },
                  done = function (e, i) {
                    i
                      ? (setLngProps(i),
                        r.translator.changeLanguage(i),
                        (r.isLanguageChangingTo = void 0),
                        r.emit('languageChanged', i),
                        r.logger.log('languageChanged', i))
                      : (r.isLanguageChangingTo = void 0),
                      o.resolve(function () {
                        return r.t.apply(r, arguments);
                      }),
                      t &&
                        t(e, function () {
                          return r.t.apply(r, arguments);
                        });
                  },
                  setLng = function (t) {
                    e || t || !r.services.languageDetector || (t = []);
                    var o =
                      'string' == typeof t
                        ? t
                        : r.services.languageUtils.getBestMatchFromCodes(t);
                    o &&
                      (r.language || setLngProps(o),
                      r.translator.language || r.translator.changeLanguage(o),
                      r.services.languageDetector &&
                        r.services.languageDetector.cacheUserLanguage(o)),
                      r.loadResources(o, function (e) {
                        done(e, o);
                      });
                  };
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? this.services.languageDetector.detect(setLng)
                      : setLng(e)
                    : setLng(this.services.languageDetector.detect()),
                  o
                );
              },
            },
            {
              key: 'getFixedT',
              value: function (e, t, r) {
                var o = this,
                  fixedT = function fixedT(e, t) {
                    if ('object' !== (0, s.Z)(t)) {
                      for (
                        var i,
                          c = arguments.length,
                          u = Array(c > 2 ? c - 2 : 0),
                          l = 2;
                        l < c;
                        l++
                      )
                        u[l - 2] = arguments[l];
                      i = o.options.overloadTranslationOptionHandler(
                        [e, t].concat(u),
                      );
                    } else i = _objectSpread$6({}, t);
                    (i.lng = i.lng || fixedT.lng),
                      (i.lngs = i.lngs || fixedT.lngs),
                      (i.ns = i.ns || fixedT.ns),
                      (i.keyPrefix = i.keyPrefix || r || fixedT.keyPrefix);
                    var p = o.options.keySeparator || '.',
                      f = i.keyPrefix
                        ? ''.concat(i.keyPrefix).concat(p).concat(e)
                        : e;
                    return o.t(f, i);
                  };
                return (
                  'string' == typeof e ? (fixedT.lng = e) : (fixedT.lngs = e),
                  (fixedT.ns = t),
                  (fixedT.keyPrefix = r),
                  fixedT
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
                  r =
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
                var o = this.resolvedLanguage || this.languages[0],
                  i = !!this.options && this.options.fallbackLng,
                  s = this.languages[this.languages.length - 1];
                if ('cimode' === o.toLowerCase()) return !0;
                var loadNotPending = function (e, r) {
                  var o =
                    t.services.backendConnector.state[
                      ''.concat(e, '|').concat(r)
                    ];
                  return -1 === o || 2 === o;
                };
                if (r.precheck) {
                  var c = r.precheck(this, loadNotPending);
                  if (void 0 !== c) return c;
                }
                return !!(
                  this.hasResourceBundle(o, e) ||
                  !this.services.backendConnector.backend ||
                  (this.options.resources &&
                    !this.options.partialBundledLanguages) ||
                  (loadNotPending(o, e) && (!i || loadNotPending(s, e)))
                );
              },
            },
            {
              key: 'loadNamespaces',
              value: function (e, t) {
                var r = this,
                  o = defer();
                return this.options.ns
                  ? ('string' == typeof e && (e = [e]),
                    e.forEach(function (e) {
                      0 > r.options.ns.indexOf(e) && r.options.ns.push(e);
                    }),
                    this.loadResources(function (e) {
                      o.resolve(), t && t(e);
                    }),
                    o)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'loadLanguages',
              value: function (e, t) {
                var r = defer();
                'string' == typeof e && (e = [e]);
                var o = this.options.preload || [],
                  i = e.filter(function (e) {
                    return 0 > o.indexOf(e);
                  });
                return i.length
                  ? ((this.options.preload = o.concat(i)),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e);
                    }),
                    r)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: 'dir',
              value: function (e) {
                return (e ||
                  (e =
                    this.resolvedLanguage ||
                    (this.languages && this.languages.length > 0
                      ? this.languages[0]
                      : this.language)),
                e)
                  ? [
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
                    : 'ltr'
                  : 'rtl';
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
                      : noop,
                  o = _objectSpread$6(
                    _objectSpread$6(_objectSpread$6({}, this.options), t),
                    { isClone: !0 },
                  ),
                  i = new I18n(o);
                return (
                  (void 0 !== t.debug || void 0 !== t.prefix) &&
                    (i.logger = i.logger.clone(t)),
                  ['store', 'services', 'language'].forEach(function (t) {
                    i[t] = e[t];
                  }),
                  (i.services = _objectSpread$6({}, this.services)),
                  (i.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  (i.translator = new W(i.services, i.options)),
                  i.translator.on('*', function (e) {
                    for (
                      var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        o = 1;
                      o < t;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    i.emit.apply(i, [e].concat(r));
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
          I18n
        );
      })(K);
      (0, c.Z)(er, 'createInstance', function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return new er(e, t);
      });
      var eo = er.createInstance();
      (eo.createInstance = er.createInstance),
        eo.createInstance,
        eo.init,
        eo.loadResources,
        eo.reloadResources,
        eo.use,
        eo.changeLanguage,
        eo.getFixedT,
        eo.t,
        eo.exists,
        eo.setDefaultNamespace,
        eo.hasLoadedNamespace,
        eo.loadNamespaces,
        eo.loadLanguages;
      var browser = function (e) {
          void 0 === e.ns && (e.ns = []);
          var t,
            r,
            o = eo.createInstance(e);
          return (
            o.isInitialized
              ? (t = Promise.resolve(eo.t))
              : (null == e ||
                  null === (r = e.use) ||
                  void 0 === r ||
                  r.forEach(function (e) {
                    return o.use(e);
                  }),
                'function' == typeof e.onPreInitI18next &&
                  e.onPreInitI18next(o),
                (t = o.init(e))),
            { i18n: o, initPromise: t }
          );
        },
        ea = u.createElement;
      function appWithTranslation_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function appWithTranslation_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? appWithTranslation_ownKeys(Object(r), !0).forEach(function (t) {
                (0, c.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : appWithTranslation_ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var appWithTranslation = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return T()(function (r) {
          var o,
            i,
            s = r.pageProps._nextI18Next,
            c =
              null !== (o = null == s ? void 0 : s.initialLocale) &&
              void 0 !== o
                ? o
                : null == r
                ? void 0
                : null === (i = r.router) || void 0 === i
                ? void 0
                : i.locale,
            l = null == s ? void 0 : s.ns,
            p = (0, u.useMemo)(
              function () {
                if (!s && !t) return null;
                var e,
                  r,
                  o,
                  i = null != t ? t : null == s ? void 0 : s.userConfig;
                if (!i && null === t)
                  throw Error(
                    'appWithTranslation was called without a next-i18next config',
                  );
                if (
                  (null !== t && (i = t),
                  !(null !== (e = i) && void 0 !== e && e.i18n))
                )
                  throw Error(
                    'appWithTranslation was called without config.i18n',
                  );
                if (
                  !(
                    null !== (r = i) &&
                    void 0 !== r &&
                    null !== (o = r.i18n) &&
                    void 0 !== o &&
                    o.defaultLocale
                  )
                )
                  throw Error(
                    'config.i18n does not include a defaultLocale property',
                  );
                var u = (s || {}).initialI18nStore,
                  p = null != t && t.resources ? t.resources : u;
                return (
                  c || (c = i.i18n.defaultLocale),
                  browser(
                    appWithTranslation_objectSpread(
                      appWithTranslation_objectSpread(
                        {},
                        createConfig(
                          appWithTranslation_objectSpread(
                            appWithTranslation_objectSpread({}, i),
                            {},
                            { lng: c },
                          ),
                        ),
                      ),
                      {},
                      { lng: c, ns: l, resources: p },
                    ),
                  ).i18n
                );
              },
              [s, c, t, l],
            );
          return null !== p
            ? ea(I18nextProvider, { i18n: p }, ea(e, r))
            : ea(e, (0, _.Z)({ key: c }, r));
        }, e);
      };
    },
    83454: function (e, t, r) {
      'use strict';
      var o, i;
      e.exports =
        (null == (o = r.g.process) ? void 0 : o.env) &&
        'object' == typeof (null == (i = r.g.process) ? void 0 : i.env)
          ? r.g.process
          : r(77663);
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(73848);
        },
      ]);
    },
    73848: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return l;
          },
        });
      var o = r(85893),
        i = r(67294);
      r(70415);
      var s = r(11163),
        c = r(50069),
        u = r(83454);
      let pageview = (e) => {
        window.gtag('config', u.env.GA_ID, { page_path: e });
      };
      var l = (0, c.Jc)(function (e) {
        let { Component: t, pageProps: r } = e,
          c = (0, s.useRouter)();
        return (
          (0, i.useEffect)(() => {
            let handleRouteChange = (e) => {
              pageview(e);
            };
            return (
              c.events.on('routeChangeComplete', handleRouteChange),
              () => {
                c.events.off('routeChangeComplete', handleRouteChange);
              }
            );
          }, [c.events]),
          (0, o.jsx)(t, { ...r })
        );
      });
    },
    70415: function () {},
    77663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                o,
                i = (e.exports = {});
              function defaultSetTimout() {
                throw Error('setTimeout has not been defined');
              }
              function defaultClearTimeout() {
                throw Error('clearTimeout has not been defined');
              }
              function runTimeout(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === defaultSetTimout || !t) && setTimeout)
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
                  t =
                    'function' == typeof setTimeout
                      ? setTimeout
                      : defaultSetTimout;
                } catch (e) {
                  t = defaultSetTimout;
                }
                try {
                  r =
                    'function' == typeof clearTimeout
                      ? clearTimeout
                      : defaultClearTimeout;
                } catch (e) {
                  r = defaultClearTimeout;
                }
              })();
              var s = [],
                c = !1,
                u = -1;
              function cleanUpNextTick() {
                c &&
                  o &&
                  ((c = !1),
                  o.length ? (s = o.concat(s)) : (u = -1),
                  s.length && drainQueue());
              }
              function drainQueue() {
                if (!c) {
                  var e = runTimeout(cleanUpNextTick);
                  c = !0;
                  for (var t = s.length; t; ) {
                    for (o = s, s = []; ++u < t; ) o && o[u].run();
                    (u = -1), (t = s.length);
                  }
                  (o = null),
                    (c = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === defaultClearTimeout || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function Item(e, t) {
                (this.fun = e), (this.array = t);
              }
              function noop() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                s.push(new Item(e, t)),
                  1 !== s.length || c || runTimeout(drainQueue);
              }),
                (Item.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = 'browser'),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ''),
                (i.versions = {}),
                (i.on = noop),
                (i.addListener = noop),
                (i.once = noop),
                (i.off = noop),
                (i.removeListener = noop),
                (i.removeAllListeners = noop),
                (i.emit = noop),
                (i.prependListener = noop),
                (i.prependOnceListener = noop),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw Error('process.binding is not supported');
                }),
                (i.cwd = function () {
                  return '/';
                }),
                (i.chdir = function (e) {
                  throw Error('process.chdir is not supported');
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function __nccwpck_require__(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var i = (r[e] = { exports: {} }),
            s = !0;
          try {
            t[e](i, i.exports, __nccwpck_require__), (s = !1);
          } finally {
            s && delete r[e];
          }
          return i.exports;
        }
        __nccwpck_require__.ab = '//';
        var o = __nccwpck_require__(229);
        e.exports = o;
      })();
    },
    11163: function (e, t, r) {
      e.exports = r(59974);
    },
    69921: function (e, t) {
      'use strict';
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = 'function' == typeof Symbol && Symbol.for,
        o = r ? Symbol.for('react.element') : 60103,
        i = r ? Symbol.for('react.portal') : 60106,
        s = r ? Symbol.for('react.fragment') : 60107,
        c = r ? Symbol.for('react.strict_mode') : 60108,
        u = r ? Symbol.for('react.profiler') : 60114,
        l = r ? Symbol.for('react.provider') : 60109,
        p = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        d = r ? Symbol.for('react.concurrent_mode') : 60111,
        g = r ? Symbol.for('react.forward_ref') : 60112,
        h = r ? Symbol.for('react.suspense') : 60113,
        y = r ? Symbol.for('react.suspense_list') : 60120,
        v = r ? Symbol.for('react.memo') : 60115,
        m = r ? Symbol.for('react.lazy') : 60116,
        b = r ? Symbol.for('react.block') : 60121,
        O = r ? Symbol.for('react.fundamental') : 60117,
        S = r ? Symbol.for('react.responder') : 60118,
        j = r ? Symbol.for('react.scope') : 60119;
      function z(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch ((e = e.type)) {
                case f:
                case d:
                case s:
                case u:
                case c:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case p:
                    case g:
                    case m:
                    case v:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function A(e) {
        return z(e) === d;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = p),
        (t.ContextProvider = l),
        (t.Element = o),
        (t.ForwardRef = g),
        (t.Fragment = s),
        (t.Lazy = m),
        (t.Memo = v),
        (t.Portal = i),
        (t.Profiler = u),
        (t.StrictMode = c),
        (t.Suspense = h),
        (t.isAsyncMode = function (e) {
          return A(e) || z(e) === f;
        }),
        (t.isConcurrentMode = A),
        (t.isContextConsumer = function (e) {
          return z(e) === p;
        }),
        (t.isContextProvider = function (e) {
          return z(e) === l;
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === o;
        }),
        (t.isForwardRef = function (e) {
          return z(e) === g;
        }),
        (t.isFragment = function (e) {
          return z(e) === s;
        }),
        (t.isLazy = function (e) {
          return z(e) === m;
        }),
        (t.isMemo = function (e) {
          return z(e) === v;
        }),
        (t.isPortal = function (e) {
          return z(e) === i;
        }),
        (t.isProfiler = function (e) {
          return z(e) === u;
        }),
        (t.isStrictMode = function (e) {
          return z(e) === c;
        }),
        (t.isSuspense = function (e) {
          return z(e) === h;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === s ||
            e === d ||
            e === u ||
            e === c ||
            e === h ||
            e === y ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === v ||
                e.$$typeof === l ||
                e.$$typeof === p ||
                e.$$typeof === g ||
                e.$$typeof === O ||
                e.$$typeof === S ||
                e.$$typeof === j ||
                e.$$typeof === b))
          );
        }),
        (t.typeOf = z);
    },
    59864: function (e, t, r) {
      'use strict';
      e.exports = r(69921);
    },
    71739: function (e) {
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
    30907: function (e, t, r) {
      'use strict';
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
        return o;
      }
      r.d(t, {
        Z: function () {
          return _arrayLikeToArray;
        },
      });
    },
    4942: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return _defineProperty;
        },
      });
      var o = r(83997);
      function _defineProperty(e, t, r) {
        return (
          (t = (0, o.Z)(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
    },
    87462: function (e, t, r) {
      'use strict';
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r)
                  ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      r.d(t, {
        Z: function () {
          return _extends;
        },
      });
    },
    59199: function (e, t, r) {
      'use strict';
      function _iterableToArray(e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      r.d(t, {
        Z: function () {
          return _iterableToArray;
        },
      });
    },
    91: function (e, t, r) {
      'use strict';
      function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var r,
          o,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var o in e)
              if ({}.hasOwnProperty.call(e, o)) {
                if (-1 !== t.indexOf(o)) continue;
                r[o] = e[o];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (r = s[o]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      r.d(t, {
        Z: function () {
          return _objectWithoutProperties;
        },
      });
    },
    74902: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return _toConsumableArray;
        },
      });
      var o = r(30907),
        i = r(59199),
        s = r(40181);
      function _toConsumableArray(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, o.Z)(e);
          })(e) ||
          (0, i.Z)(e) ||
          (0, s.Z)(e) ||
          (function () {
            throw TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
    },
    83997: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return toPropertyKey;
        },
      });
      var o = r(71002);
      function toPropertyKey(e) {
        var t = (function (e, t) {
          if ('object' != (0, o.Z)(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || 'default');
            if ('object' != (0, o.Z)(i)) return i;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' == (0, o.Z)(t) ? t : t + '';
      }
    },
    71002: function (e, t, r) {
      'use strict';
      function _typeof(e) {
        return (_typeof =
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
              })(e);
      }
      r.d(t, {
        Z: function () {
          return _typeof;
        },
      });
    },
    40181: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return _unsupportedIterableToArray;
        },
      });
      var o = r(30907);
      function _unsupportedIterableToArray(e, t) {
        if (e) {
          if ('string' == typeof e) return (0, o.Z)(e, t);
          var r = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? (0, o.Z)(e, t)
              : void 0
          );
        }
      }
    },
  },
  function (e) {
    var __webpack_exec__ = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return __webpack_exec__(6840), __webpack_exec__(59974);
    }),
      (_N_E = e.O());
  },
]);
