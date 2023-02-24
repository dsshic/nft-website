(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [687],
  {
    1088: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/mint",
        function () {
          return r(8533);
        },
      ]);
    },
    8533: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(5893),
        o = r(7294),
        i = r(3751);
      t.default = function () {
        var e = new Date(Date.UTC(2022, 12, 42, 14)),
          t = (0, i.useTimer)({ expiryTimestamp: e, onExpire: function () {} }),
          r = t.seconds,
          u = t.minutes,
          a = t.hours,
          s = t.days;
        return (
          (0, o.useEffect)(function () {}, []),
          console.log(s, "days"),
          (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("section", {
              className: "relative pb-10 pt-20 md:pt-32 h-1527",
              style: { height: "100vh" },
              children: [
                (0, n.jsx)("picture", {
                  className:
                    "pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full",
                  children: (0, n.jsx)("img", {
                    src: "/images/sg_background.png",
                    alt: "gradient",
                    className: "h-full w-full",
                  }),
                }),
                (0, n.jsx)("picture", {
                  className:
                    "pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block",
                  style: { height: "100vh" },
                  children: (0, n.jsx)("img", {
                    src: "/images/sg_background.png",
                    alt: "gradient dark",
                    className: "h-full w-full",
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "clock-container",
                  children: (0, n.jsxs)("div", {
                    className: "clock",
                    children: [
                      (0, n.jsxs)("p", {
                        className: "clock-hour",
                        children: [s, " ", (0, n.jsx)("br", {}), "days"],
                      }),
                      (0, n.jsxs)("p", {
                        className: "clock-hour",
                        children: [a, " ", (0, n.jsx)("br", {}), " hours"],
                      }),
                      (0, n.jsxs)("p", {
                        className: "clock-hour",
                        children: [u, " ", (0, n.jsx)("br", {}), " minutes"],
                      }),
                      (0, n.jsxs)("p", {
                        className: "clock-hour",
                        children: [r, " ", (0, n.jsx)("br", {}), " seconds"],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    3751: function (e, t, r) {
      var n;
      "undefined" != typeof self && self,
        (e.exports =
          ((n = r(7294)),
          (function (e) {
            var t = {};
            function r(n) {
              if (t[n]) return t[n].exports;
              var o = (t[n] = { i: n, l: !1, exports: {} });
              return (
                e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
              );
            }
            return (
              (r.m = e),
              (r.c = t),
              (r.d = function (e, t, n) {
                r.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: n });
              }),
              (r.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var n = Object.create(null);
                if (
                  (r.r(n),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var o in e)
                    r.d(
                      n,
                      o,
                      function (t) {
                        return e[t];
                      }.bind(null, o)
                    );
                return n;
              }),
              (r.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return r.d(t, "a", t), t;
              }),
              (r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (r.p = ""),
              r((r.s = 3))
            );
          })([
            function (e, t) {
              e.exports = n;
            },
            function (e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.Validate = t.Time = void 0);
              var n = i(r(5)),
                o = i(r(6));
              function i(e) {
                return e && e.__esModule ? e : { default: e };
              }
              (t.Time = n.default), (t.Validate = o.default);
            },
            function (e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.useInterval = void 0);
              var n = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(r(7));
              t.useInterval = n.default;
            },
            function (e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.useTime = t.useStopwatch = t.useTimer = void 0);
              var n =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n]);
                  }
                  return e;
                };
              t.default = function (e) {
                if (
                  ((0, o.useEffect)(function () {
                    console.warn(
                      "react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead"
                    );
                  }, []),
                  e.expiryTimestamp)
                ) {
                  var t = (0, i.default)(e);
                  return n({}, t, {
                    startTimer: t.start,
                    stopTimer: t.pause,
                    resetTimer: function () {},
                  });
                }
                var r = (0, u.default)(e);
                return n({}, r, {
                  startTimer: r.start,
                  stopTimer: r.pause,
                  resetTimer: r.reset,
                });
              };
              var o = r(0),
                i = s(r(4)),
                u = s(r(8)),
                a = s(r(9));
              function s(e) {
                return e && e.__esModule ? e : { default: e };
              }
              (t.useTimer = i.default),
                (t.useStopwatch = u.default),
                (t.useTime = a.default);
            },
            function (e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    }
                    return e;
                  },
                o = function (e, t) {
                  if (Array.isArray(e)) return e;
                  if (Symbol.iterator in Object(e))
                    return (function (e, t) {
                      var r = [],
                        n = !0,
                        o = !1,
                        i = void 0;
                      try {
                        for (
                          var u, a = e[Symbol.iterator]();
                          !(n = (u = a.next()).done) &&
                          (r.push(u.value), !t || r.length !== t);
                          n = !0
                        );
                      } catch (e) {
                        (o = !0), (i = e);
                      } finally {
                        try {
                          !n && a.return && a.return();
                        } finally {
                          if (o) throw i;
                        }
                      }
                      return r;
                    })(e, t);
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance"
                  );
                };
              t.default = function (e) {
                var t = e.expiryTimestamp,
                  r = e.onExpire,
                  l = e.autoStart,
                  f = void 0 === l || l,
                  d = (0, i.useState)(t),
                  m = o(d, 2),
                  v = m[0],
                  p = m[1],
                  y = (0, i.useState)(u.Time.getSecondsFromExpiry(v)),
                  h = o(y, 2),
                  g = h[0],
                  T = h[1],
                  b = (0, i.useState)(f),
                  x = o(b, 2),
                  S = x[0],
                  w = x[1],
                  j = (0, i.useState)(f),
                  _ = o(j, 2),
                  O = _[0],
                  k = _[1],
                  E = (0, i.useState)(c(v)),
                  M = o(E, 2),
                  P = M[0],
                  F = M[1];
                function N(e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  F(c(e)), k(t), w(t), p(e), T(u.Time.getSecondsFromExpiry(e));
                }
                function I() {
                  var e = new Date();
                  e.setMilliseconds(e.getMilliseconds() + 1e3 * g), N(e);
                }
                return (
                  (0, a.useInterval)(
                    function () {
                      P !== s && F(s);
                      var e = u.Time.getSecondsFromExpiry(v);
                      T(e),
                        e <= 0 &&
                          (u.Validate.onExpire(r) && r(), w(!1), F(null));
                    },
                    S ? P : null
                  ),
                  n({}, u.Time.getTimeFromSeconds(g), {
                    start: function () {
                      O ? (T(u.Time.getSecondsFromExpiry(v)), w(!0)) : I();
                    },
                    pause: function () {
                      w(!1);
                    },
                    resume: I,
                    restart: N,
                    isRunning: S,
                  })
                );
              };
              var i = r(0),
                u = r(1),
                a = r(2),
                s = 1e3;
              function c(e) {
                if (!u.Validate.expiryTimestamp(e)) return null;
                var t = u.Time.getSecondsFromExpiry(e),
                  r = Math.floor(1e3 * (t - Math.floor(t)));
                return r > 0 ? r : s;
              }
            },
            function (e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = (function () {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var n = t[r];
                      (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                    }
                  }
                  return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                  };
                })(),
                o = (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                  }
                  return (
                    n(e, null, [
                      {
                        key: "getTimeFromSeconds",
                        value: function (e) {
                          var t = Math.ceil(e),
                            r = Math.floor(t / 86400),
                            n = Math.floor((t % 86400) / 3600),
                            o = Math.floor((t % 3600) / 60);
                          return {
                            seconds: Math.floor(t % 60),
                            minutes: o,
                            hours: n,
                            days: r,
                          };
                        },
                      },
                      {
                        key: "getSecondsFromExpiry",
                        value: function (e, t) {
                          var r = e - new Date().getTime();
                          if (r > 0) {
                            var n = r / 1e3;
                            return t ? Math.round(n) : n;
                          }
                          return 0;
                        },
                      },
                      {
                        key: "getSecondsFromPrevTime",
                        value: function (e, t) {
                          var r = new Date().getTime() - e;
                          if (r > 0) {
                            var n = r / 1e3;
                            return t ? Math.round(n) : n;
                          }
                          return 0;
                        },
                      },
                      {
                        key: "getSecondsFromTimeNow",
                        value: function () {
                          var e = new Date();
                          return e.getTime() / 1e3 - 60 * e.getTimezoneOffset();
                        },
                      },
                      {
                        key: "getFormattedTimeFromSeconds",
                        value: function (t, r) {
                          var n = e.getTimeFromSeconds(t),
                            o = n.seconds,
                            i = n.minutes,
                            u = n.hours,
                            a = "",
                            s = u;
                          return (
                            "12-hour" === r &&
                              ((a = u >= 12 ? "pm" : "am"), (s = u % 12)),
                            { seconds: o, minutes: i, hours: s, ampm: a }
                          );
                        },
                      },
                    ]),
                    e
                  );
                })();
              t.default = o;
            },
            function (e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = (function () {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var n = t[r];
                      (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                    }
                  }
                  return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                  };
                })(),
                o = (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                  }
                  return (
                    n(e, null, [
                      {
                        key: "expiryTimestamp",
                        value: function (e) {
                          var t = new Date(e).getTime() > 0;
                          return (
                            t ||
                              console.warn(
                                "react-timer-hook: { useTimer } Invalid expiryTimestamp settings",
                                e
                              ),
                            t
                          );
                        },
                      },
                      {
                        key: "onExpire",
                        value: function (e) {
                          var t = e && "function" == typeof e;
                          return (
                            e &&
                              !t &&
                              console.warn(
                                "react-timer-hook: { useTimer } Invalid onExpire settings function",
                                e
                              ),
                            t
                          );
                        },
                      },
                    ]),
                    e
                  );
                })();
              t.default = o;
            },
            function (e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function (e, t) {
                  var r = (0, n.useRef)();
                  (0, n.useEffect)(function () {
                    r.current = e;
                  }),
                    (0, n.useEffect)(
                      function () {
                        if (!t) return function () {};
                        var e = setInterval(function () {
                          r.current && r.current();
                        }, t);
                        return function () {
                          return clearInterval(e);
                        };
                      },
                      [t]
                    );
                });
              var n = r(0);
            },
            function (e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    }
                    return e;
                  },
                o = function (e, t) {
                  if (Array.isArray(e)) return e;
                  if (Symbol.iterator in Object(e))
                    return (function (e, t) {
                      var r = [],
                        n = !0,
                        o = !1,
                        i = void 0;
                      try {
                        for (
                          var u, a = e[Symbol.iterator]();
                          !(n = (u = a.next()).done) &&
                          (r.push(u.value), !t || r.length !== t);
                          n = !0
                        );
                      } catch (e) {
                        (o = !0), (i = e);
                      } finally {
                        try {
                          !n && a.return && a.return();
                        } finally {
                          if (o) throw i;
                        }
                      }
                      return r;
                    })(e, t);
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance"
                  );
                };
              t.default = function (e) {
                var t = e.autoStart,
                  r = e.offsetTimestamp,
                  s = (0, i.useState)(u.Time.getSecondsFromExpiry(r, !0) || 0),
                  c = o(s, 2),
                  l = c[0],
                  f = c[1],
                  d = (0, i.useState)(new Date()),
                  m = o(d, 2),
                  v = m[0],
                  p = m[1],
                  y = (0, i.useState)(
                    l + u.Time.getSecondsFromPrevTime(v || 0, !0)
                  ),
                  h = o(y, 2),
                  g = h[0],
                  T = h[1],
                  b = (0, i.useState)(t),
                  x = o(b, 2),
                  S = x[0],
                  w = x[1];
                return (
                  (0, a.useInterval)(
                    function () {
                      T(l + u.Time.getSecondsFromPrevTime(v, !0));
                    },
                    S ? 1e3 : null
                  ),
                  n({}, u.Time.getTimeFromSeconds(g), {
                    start: function () {
                      var e = new Date();
                      p(e), w(!0), T(l + u.Time.getSecondsFromPrevTime(e, !0));
                    },
                    pause: function () {
                      f(g), w(!1);
                    },
                    reset: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        r = u.Time.getSecondsFromExpiry(e, !0) || 0,
                        n = new Date();
                      p(n),
                        f(r),
                        w(t),
                        T(r + u.Time.getSecondsFromPrevTime(n, !0));
                    },
                    isRunning: S,
                  })
                );
              };
              var i = r(0),
                u = r(1),
                a = r(2);
            },
            function (e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    }
                    return e;
                  },
                o = function (e, t) {
                  if (Array.isArray(e)) return e;
                  if (Symbol.iterator in Object(e))
                    return (function (e, t) {
                      var r = [],
                        n = !0,
                        o = !1,
                        i = void 0;
                      try {
                        for (
                          var u, a = e[Symbol.iterator]();
                          !(n = (u = a.next()).done) &&
                          (r.push(u.value), !t || r.length !== t);
                          n = !0
                        );
                      } catch (e) {
                        (o = !0), (i = e);
                      } finally {
                        try {
                          !n && a.return && a.return();
                        } finally {
                          if (o) throw i;
                        }
                      }
                      return r;
                    })(e, t);
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance"
                  );
                };
              t.default = function (e) {
                var t = e.format,
                  r = (0, i.useState)(u.Time.getSecondsFromTimeNow()),
                  s = o(r, 2),
                  c = s[0],
                  l = s[1];
                return (
                  (0, a.useInterval)(function () {
                    l(u.Time.getSecondsFromTimeNow());
                  }, 1e3),
                  n({}, u.Time.getFormattedTimeFromSeconds(c, t))
                );
              };
              var i = r(0),
                u = r(1),
                a = r(2);
            },
          ])));
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 1088), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
