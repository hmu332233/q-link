'use strict';
(exports.id = 135),
  (exports.ids = [135]),
  (exports.modules = {
    5589: (e, l, a) => {
      a.d(l, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var r = a(997);
      a(6689);
      var _ = a(3341);
      let __WEBPACK_DEFAULT_EXPORT__ = function ({
        label: e,
        feedback: l,
        name: a,
        placeholder: t,
        type: s = 'text',
        required: n,
      }) {
        return r.jsx(_.Z, {
          label: e,
          feedback: l,
          children: r.jsx('input', {
            className: 'input input-bordered w-full',
            type: s,
            name: a,
            placeholder: t,
            required: n,
          }),
        });
      };
    },
    3341: (e, l, a) => {
      a.d(l, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var r = a(997);
      a(6689);
      var _ = a(1823);
      let __WEBPACK_DEFAULT_EXPORT__ = function ({
        children: e,
        label: l,
        feedback: a,
      }) {
        return (0, r.jsxs)('div', {
          className: 'form-control',
          children: [
            l && r.jsx(_.Z, { children: l }),
            e,
            a &&
              r.jsx('label', {
                className: 'label',
                children: r.jsx('span', {
                  className: 'label-text-alt',
                  children: a,
                }),
              }),
          ],
        });
      };
    },
    1823: (e, l, a) => {
      a.d(l, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var r = a(997);
      a(6689);
      let __WEBPACK_DEFAULT_EXPORT__ = function ({ children: e }) {
        return r.jsx('label', {
          className: 'label',
          children: r.jsx('span', {
            className: 'label-text text-lg font-semibold',
            children: e,
          }),
        });
      };
    },
    9231: (e, l, a) => {
      a.a(e, async (e, r) => {
        try {
          a.d(l, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
          var _ = a(997);
          a(6689);
          var t = a(3135),
            s = a(6809),
            n = a(727),
            c = a(2381),
            i = a.n(c),
            d = e([t, s]);
          [t, s] = d.then ? (await d)() : d;
          let E = n.Prism,
            __WEBPACK_DEFAULT_EXPORT__ = function ({ contents: e }) {
              return _.jsx('article', {
                className: 'prose w-full',
                children: _.jsx(t.default, {
                  remarkPlugins: [s.default],
                  components: {
                    code({
                      node: e,
                      inline: l,
                      className: a,
                      children: r,
                      ...t
                    }) {
                      if (l)
                        return _.jsx('code', {
                          className: a,
                          ...t,
                          children: r,
                        });
                      let [, s] = /language-(\w+)/.exec(a || '') || [];
                      return _.jsx(E, {
                        style: i(),
                        language: s || 'text',
                        PreTag: 'div',
                        ...t,
                        children: String(r).replace(/\n$/, ''),
                      });
                    },
                  },
                  children: e,
                }),
              });
            };
          r();
        } catch (e) {
          r(e);
        }
      });
    },
  });
