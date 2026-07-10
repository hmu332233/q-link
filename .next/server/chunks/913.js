(exports.id = 913),
  (exports.ids = [913]),
  (exports.modules = {
    1731: (e, t, a) => {
      'use strict';
      a.d(t, { L: () => pageview });
      let pageview = (e) => {
        window.gtag('config', process.env.GA_ID, { page_path: e });
      };
    },
    5913: (e, t, a) => {
      'use strict';
      a.a(e, async (e, n) => {
        try {
          a.r(t), a.d(t, { default: () => g });
          var s = a(997),
            r = a(6689);
          a(6764);
          var o = a(1163),
            u = a(1377),
            i = a(4520),
            l = a(1731),
            h = e([i]);
          i = (h.then ? (await h)() : h)[0];
          let g = (0, u.appWithTranslation)(function ({
            Component: e,
            pageProps: t,
          }) {
            let a = (0, o.useRouter)();
            return (
              (0, r.useEffect)(() => {
                let handleRouteChange = (e) => {
                  l.L(e);
                };
                return (
                  a.events.on('routeChangeComplete', handleRouteChange),
                  () => {
                    a.events.off('routeChangeComplete', handleRouteChange);
                  }
                );
              }, [a.events]),
              (0, s.jsxs)(s.Fragment, {
                children: [s.jsx(e, { ...t }), s.jsx(i.Analytics, {})],
              })
            );
          });
          n();
        } catch (e) {
          n(e);
        }
      });
    },
    6764: () => {},
  });
