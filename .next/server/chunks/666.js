'use strict';
(exports.id = 666),
  (exports.ids = [666]),
  (exports.modules = {
    1372: (e, t, n) => {
      n.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var a = n(997),
        r = n(1377);
      let __WEBPACK_DEFAULT_EXPORT__ = function ({ isCorrect: e }) {
        let { t } = (0, r.useTranslation)('links');
        return a.jsx('span', {
          className: 'countdown whitespace-pre',
          children: t(e ? 'feedback.correct' : 'feedback.fail'),
        });
      };
    },
    3666: (e, t, n) => {
      n.a(e, async (e, a) => {
        try {
          n.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
          var r = n(997),
            s = n(6689),
            i = n(1664),
            o = n.n(i),
            c = n(1377),
            l = n(5589),
            _ = n(9231),
            u = n(1372),
            d = n(4141),
            m = e([_]);
          _ = (m.then ? (await m)() : m)[0];
          let __WEBPACK_DEFAULT_EXPORT__ = function ({
            url: e,
            contents: t,
            correct: n,
          }) {
            let { t: a } = (0, c.useTranslation)(),
              [i, m] = (0, s.useState)(!1),
              [f, E] = (0, s.useState)(!1);
            return (
              (0, s.useEffect)(() => {
                if (!i) return;
                let t = setTimeout(() => {
                  location.href = e;
                }, 4500);
                return () => clearTimeout(t);
              }, [i, e]),
              (0, r.jsxs)('div', {
                className: 'flex flex-col items-center gap-y-4',
                children: [
                  r.jsx(_.Z, { contents: t }),
                  r.jsx('form', {
                    className: 'w-full',
                    id: 'answer',
                    onSubmit: (e) => {
                      e.preventDefault();
                      let t = new FormData(e.currentTarget),
                        { answer: a } = Object.fromEntries(t);
                      m(n === a), E(!0);
                    },
                    children: r.jsx(l.Z, {
                      name: 'answer',
                      placeholder: a('common:contents.answerPlaceholder'),
                      feedback: f ? r.jsx(u.Z, { isCorrect: i }) : void 0,
                    }),
                  }),
                  r.jsx('button', {
                    className: 'btn btn-wide',
                    type: 'submit',
                    form: 'answer',
                    children: a('common:submit'),
                  }),
                  r.jsx(d.Z, { outline: !0 }),
                  r.jsx(o(), {
                    href: '/links/new',
                    className: 'link',
                    children: a('common:contents.createLink'),
                  }),
                ],
              })
            );
          };
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    4141: (e, t, n) => {
      n.d(t, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var a = n(997),
        r = n(1377),
        s = n(9003),
        i = n.n(s);
      let __WEBPACK_DEFAULT_EXPORT__ = function ({ outline: e, url: t }) {
        let { t: n } = (0, r.useTranslation)(),
          handleClick = async () => {
            t ??= location.href;
            let e = void 0 !== navigator.share;
            e
              ? await navigator.share({ title: 'Q.Link', url: t })
              : (await navigator.clipboard.writeText(t),
                alert(n('common:copied')));
          };
        return a.jsx('button', {
          className: i()('btn btn-wide', e && 'btn-outline'),
          onClick: handleClick,
          children: n('common:share'),
        });
      };
    },
  });
