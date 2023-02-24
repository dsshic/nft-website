(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (n, r, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(4369);
        },
      ]);
    },
    4369: function (n, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          default: function () {
            return s;
          },
        });
      var o = e(5893),
        t = e(7294),
        u = e(9351),
        c = e(1055);
      function s() {
        var n = (0, t.useContext)(u.Z).scrollRef;
        return (
          (0, t.useEffect)(function () {
            window.scrollTo(0, n.current.scrollPos);
            var r = function () {
              n.current.scrollPos = window.scrollY;
            };
            return (
              window.addEventListener("scroll", r),
              function () {
                window.removeEventListener("scroll", r);
              }
            );
          }),
          (0, o.jsx)("div", { children: (0, o.jsx)(c.default, {}) })
        );
      }
    },
  },
  function (n) {
    n.O(0, [757, 488, 55, 774, 888, 179], function () {
      return (r = 5557), n((n.s = r));
      var r;
    });
    var r = n.O();
    _N_E = r;
  },
]);
