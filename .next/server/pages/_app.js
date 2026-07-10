'use strict';
(() => {
  var e = {};
  (e.id = 888),
    (e.ids = [888]),
    (e.modules = {
      1377: (e) => {
        e.exports = require('next-i18next');
      },
      2785: (e) => {
        e.exports = require('next/dist/compiled/next-server/pages.runtime.prod.js');
      },
      6689: (e) => {
        e.exports = require('react');
      },
      6405: (e) => {
        e.exports = require('react-dom');
      },
      997: (e) => {
        e.exports = require('react/jsx-runtime');
      },
      4520: (e) => {
        e.exports = import('@vercel/analytics/next');
      },
      7147: (e) => {
        e.exports = require('fs');
      },
      2781: (e) => {
        e.exports = require('stream');
      },
      9796: (e) => {
        e.exports = require('zlib');
      },
    });
  var r = require('../webpack-runtime.js');
  r.C(e);
  var __webpack_exec__ = (e) => r((r.s = e)),
    t = r.X(0, [761, 163, 913], () => __webpack_exec__(5913));
  module.exports = t;
})();
