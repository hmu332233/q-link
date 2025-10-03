'use strict';
(() => {
  var e = {};
  (e.id = 116),
    (e.ids = [116]),
    (e.modules = {
      145: (e) => {
        e.exports = require('next/dist/compiled/next-server/pages-api.runtime.prod.js');
      },
      5616: (e) => {
        e.exports = import('next-connect');
      },
      6470: (e, t, a) => {
        a.a(e, async (e, n) => {
          try {
            a.r(t),
              a.d(t, {
                config: () => l,
                default: () => d,
                routeModule: () => u,
              });
            var s = a(1802),
              o = a(7153),
              r = a(6249),
              c = a(6300),
              i = e([c]);
            c = (i.then ? (await i)() : i)[0];
            let d = (0, r.l)(c, 'default'),
              l = (0, r.l)(c, 'config'),
              u = new s.PagesAPIRouteModule({
                definition: {
                  kind: o.x.PAGES_API,
                  page: '/api/links',
                  pathname: '/api/links',
                  bundlePath: '',
                  filename: '',
                },
                userland: c,
              });
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      6300: (e, t, a) => {
        a.a(e, async (e, n) => {
          try {
            a.r(t), a.d(t, { default: () => i });
            var s = a(5616),
              o = a(5483),
              r = e([s]);
            s = (r.then ? (await r)() : r)[0];
            let c = (0, s.default)({
              onError: (e, t, a, n) => {
                console.error(e.stack), a.status(500).end('Error!');
              },
              onNoMatch: (e, t) => {
                t.status(404).end('Not found');
              },
            });
            c.get(o.B).post(o.t);
            let i = c;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      5483: (e, t, a) => {
        let n;
        a.d(t, { B: () => handleGet, t: () => handlePost });
        let s = require('mongodb'),
          o = process.env.DB_URL;
        n = new s.MongoClient(o, {}).connect();
        let r = s.ObjectId,
          handleGet = async (e, t) => {
            let { id: a } = e.query,
              s = await n,
              o = await s
                .db()
                .collection('links')
                .findOne({ _id: new r(a) }, { projection: { _id: 0 } });
            return o
              ? t.status(200).json({ success: !0, data: o })
              : t.status(404).json({ success: !1 });
          },
          handlePost = async (e, t) => {
            let { url: a, contents: s, correct: o } = e.body,
              r = await n,
              { insertedId: c } = await r
                .db()
                .collection('links')
                .insertOne({
                  url: a,
                  contents: s,
                  correct: o,
                  createdAt: Date.now(),
                });
            return c
              ? t.status(200).json({ success: !0, data: c })
              : t.status(404).json({ success: !1 });
          };
      },
    });
  var t = require('../../webpack-api-runtime.js');
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    a = t.X(0, [222], () => __webpack_exec__(6470));
  module.exports = a;
})();
