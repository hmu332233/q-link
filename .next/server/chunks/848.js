(exports.id = 848),
  (exports.ids = [848]),
  (exports.modules = {
    3848: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => u });
      var a = n(997),
        o = n(6689);
      n(6764);
      var r = n(1163),
        s = n(1377);
      let pageview = (e) => {
          window.gtag('config', process.env.GA_ID, { page_path: e });
        },
        u = (0, s.appWithTranslation)(function ({
          Component: e,
          pageProps: t,
        }) {
          let n = (0, r.useRouter)();
          return (
            (0, o.useEffect)(() => {
              let handleRouteChange = (e) => {
                pageview(e);
              };
              return (
                n.events.on('routeChangeComplete', handleRouteChange),
                () => {
                  n.events.off('routeChangeComplete', handleRouteChange);
                }
              );
            }, [n.events]),
            a.jsx(e, { ...t })
          );
        });
    },
    6764: () => {},
  });
