(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [488],
  {
    7313: function () {},
    1669: function () {},
    1082: function () {},
    3372: function () {},
    8364: function () {},
    8130: function (e, t, n) {
      "use strict";
      var r = n(7294),
        i = n(5697);
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
      }
      function l(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && d(e, t);
      }
      function c(e) {
        return (
          (c = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          c(e)
        );
      }
      function d(e, t) {
        return (
          (d =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          d(e, t)
        );
      }
      function u(e, t) {
        return !t || ("object" !== typeof t && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = c(e);
          if (t) {
            var i = c(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return u(this, n);
        };
      }
      function p(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return h(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return h(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function m(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          n = String(e);
        if (0 === t) return n;
        var r = n.match(/(.*?)([0-9]+)(.*)/),
          i = r ? r[1] : "",
          s = r ? r[3] : "",
          o = r ? r[2] : n,
          a =
            o.length >= t
              ? o
              : (
                  p(Array(t))
                    .map(function () {
                      return "0";
                    })
                    .join("") + o
                ).slice(-1 * t);
        return "".concat(i).concat(a).concat(s);
      }
      var g = { daysInHours: !1, zeroPadTime: 2 };
      function v(e, t) {
        var n = e.days,
          r = e.hours,
          i = e.minutes,
          s = e.seconds,
          o = Object.assign(Object.assign({}, g), t),
          a = o.daysInHours,
          l = o.zeroPadTime,
          c = o.zeroPadDays,
          d = void 0 === c ? l : c,
          u = Math.min(2, l),
          f = a ? m(r + 24 * n, l) : m(r, u);
        return {
          days: a ? "" : m(n, d),
          hours: f,
          minutes: m(i, u),
          seconds: m(s, u),
        };
      }
      var b = (function (e) {
        l(n, e);
        var t = f(n);
        function n() {
          var e;
          return (
            s(this, n),
            ((e = t.apply(this, arguments)).state = {
              count: e.props.count || 3,
            }),
            (e.startCountdown = function () {
              e.interval = window.setInterval(function () {
                0 === e.state.count - 1
                  ? (e.stopCountdown(),
                    e.props.onComplete && e.props.onComplete())
                  : e.setState(function (e) {
                      return { count: e.count - 1 };
                    });
              }, 1e3);
            }),
            (e.stopCountdown = function () {
              clearInterval(e.interval);
            }),
            (e.addTime = function (t) {
              e.stopCountdown(),
                e.setState(function (e) {
                  return { count: e.count + t };
                }, e.startCountdown);
            }),
            e
          );
        }
        return (
          a(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.startCountdown();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearInterval(this.interval);
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.children
                  ? (0, r.cloneElement)(this.props.children, {
                      count: this.state.count,
                    })
                  : null;
              },
            },
          ]),
          n
        );
      })(r.Component);
      b.propTypes = {
        count: i.number,
        children: i.element,
        onComplete: i.func,
      };
      var y = (function (e) {
        l(n, e);
        var t = f(n);
        function n(e) {
          var i;
          if (
            (s(this, n),
            ((i = t.call(this, e)).mounted = !1),
            (i.initialTimestamp = i.calcOffsetStartTimestamp()),
            (i.offsetStartTimestamp = i.props.autoStart
              ? 0
              : i.initialTimestamp),
            (i.offsetTime = 0),
            (i.legacyMode = !1),
            (i.legacyCountdownRef = (0, r.createRef)()),
            (i.tick = function () {
              var e = i.calcTimeDelta(),
                t = e.completed && !i.props.overtime ? void 0 : i.props.onTick;
              i.setTimeDeltaState(e, void 0, t);
            }),
            (i.start = function () {
              if (!i.isStarted()) {
                var e = i.offsetStartTimestamp;
                (i.offsetStartTimestamp = 0),
                  (i.offsetTime += e ? i.calcOffsetStartTimestamp() - e : 0);
                var t = i.calcTimeDelta();
                i.setTimeDeltaState(t, "STARTED", i.props.onStart),
                  i.props.controlled ||
                    (t.completed && !i.props.overtime) ||
                    (i.clearTimer(),
                    (i.interval = window.setInterval(
                      i.tick,
                      i.props.intervalDelay
                    )));
              }
            }),
            (i.pause = function () {
              i.isPaused() ||
                (i.clearTimer(),
                (i.offsetStartTimestamp = i.calcOffsetStartTimestamp()),
                i.setTimeDeltaState(
                  i.state.timeDelta,
                  "PAUSED",
                  i.props.onPause
                ));
            }),
            (i.stop = function () {
              i.isStopped() ||
                (i.clearTimer(),
                (i.offsetStartTimestamp = i.calcOffsetStartTimestamp()),
                (i.offsetTime = i.offsetStartTimestamp - i.initialTimestamp),
                i.setTimeDeltaState(
                  i.calcTimeDelta(),
                  "STOPPED",
                  i.props.onStop
                ));
            }),
            (i.isStarted = function () {
              return i.isStatus("STARTED");
            }),
            (i.isPaused = function () {
              return i.isStatus("PAUSED");
            }),
            (i.isStopped = function () {
              return i.isStatus("STOPPED");
            }),
            (i.isCompleted = function () {
              return i.isStatus("COMPLETED");
            }),
            (i.handleOnComplete = function (e) {
              i.props.onComplete && i.props.onComplete(e);
            }),
            e.date)
          ) {
            var o = i.calcTimeDelta();
            i.state = {
              timeDelta: o,
              status: o.completed ? "COMPLETED" : "STOPPED",
            };
          } else i.legacyMode = !0;
          return i;
        }
        return (
          a(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.legacyMode ||
                  ((this.mounted = !0),
                  this.props.onMount &&
                    this.props.onMount(this.calcTimeDelta()),
                  this.props.autoStart && this.start());
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.legacyMode ||
                  (this.props.date !== e.date &&
                    ((this.initialTimestamp = this.calcOffsetStartTimestamp()),
                    (this.offsetStartTimestamp = this.initialTimestamp),
                    (this.offsetTime = 0),
                    this.setTimeDeltaState(this.calcTimeDelta())));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.legacyMode || ((this.mounted = !1), this.clearTimer());
              },
            },
            {
              key: "calcTimeDelta",
              value: function () {
                var e = this.props,
                  t = e.date,
                  n = e.now,
                  r = e.precision,
                  i = e.controlled,
                  s = e.overtime;
                return (function (e) {
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = n.now,
                    i = void 0 === r ? Date.now : r,
                    s = n.precision,
                    o = void 0 === s ? 0 : s,
                    a = n.controlled,
                    l = n.offsetTime,
                    c = void 0 === l ? 0 : l,
                    d = n.overtime;
                  (t =
                    "string" === typeof e
                      ? new Date(e).getTime()
                      : e instanceof Date
                      ? e.getTime()
                      : e),
                    a || (t += c);
                  var u = a ? t : t - i(),
                    f = Math.min(20, Math.max(0, o)),
                    p = Math.round(
                      1e3 *
                        parseFloat(((d ? u : Math.max(0, u)) / 1e3).toFixed(f))
                    ),
                    h = Math.abs(p) / 1e3;
                  return {
                    total: p,
                    days: Math.floor(h / 86400),
                    hours: Math.floor((h / 3600) % 24),
                    minutes: Math.floor((h / 60) % 60),
                    seconds: Math.floor(h % 60),
                    milliseconds: Number(((h % 1) * 1e3).toFixed()),
                    completed: p <= 0,
                  };
                })(t, {
                  now: n,
                  precision: r,
                  controlled: i,
                  offsetTime: this.offsetTime,
                  overtime: s,
                });
              },
            },
            {
              key: "calcOffsetStartTimestamp",
              value: function () {
                return Date.now();
              },
            },
            {
              key: "addTime",
              value: function (e) {
                this.legacyCountdownRef.current.addTime(e);
              },
            },
            {
              key: "clearTimer",
              value: function () {
                window.clearInterval(this.interval);
              },
            },
            {
              key: "isStatus",
              value: function (e) {
                return this.state.status === e;
              },
            },
            {
              key: "setTimeDeltaState",
              value: function (e, t, n) {
                var r = this;
                if (this.mounted) {
                  var i;
                  !this.state.timeDelta.completed &&
                    e.completed &&
                    (this.props.overtime || this.clearTimer(),
                    (i = this.handleOnComplete));
                  return this.setState(
                    function (n) {
                      var i = t || n.status;
                      return (
                        e.completed && !r.props.overtime
                          ? (i = "COMPLETED")
                          : t || "COMPLETED" !== i || (i = "STOPPED"),
                        { timeDelta: e, status: i }
                      );
                    },
                    function () {
                      n && n(r.state.timeDelta), i && i(r.state.timeDelta);
                    }
                  );
                }
              },
            },
            {
              key: "getApi",
              value: function () {
                return (this.api = this.api || {
                  start: this.start,
                  pause: this.pause,
                  stop: this.stop,
                  isStarted: this.isStarted,
                  isPaused: this.isPaused,
                  isStopped: this.isStopped,
                  isCompleted: this.isCompleted,
                });
              },
            },
            {
              key: "getRenderProps",
              value: function () {
                var e = this.props,
                  t = e.daysInHours,
                  n = e.zeroPadTime,
                  r = e.zeroPadDays,
                  i = this.state.timeDelta;
                return Object.assign(Object.assign({}, i), {
                  api: this.getApi(),
                  props: this.props,
                  formatted: v(i, {
                    daysInHours: t,
                    zeroPadTime: n,
                    zeroPadDays: r,
                  }),
                });
              },
            },
            {
              key: "render",
              value: function () {
                if (this.legacyMode) {
                  var e = this.props,
                    t = e.count,
                    n = e.children,
                    i = e.onComplete;
                  return (0, r.createElement)(
                    b,
                    { ref: this.legacyCountdownRef, count: t, onComplete: i },
                    n
                  );
                }
                var s = this.props,
                  o = s.className,
                  a = s.overtime,
                  l = s.children,
                  c = s.renderer,
                  d = this.getRenderProps();
                if (c) return c(d);
                if (l && this.state.timeDelta.completed && !a)
                  return (0, r.cloneElement)(l, { countdown: d });
                var u = d.formatted,
                  f = u.days,
                  p = u.hours,
                  h = u.minutes,
                  m = u.seconds;
                return (0, r.createElement)(
                  "span",
                  { className: o },
                  d.total < 0 ? "-" : "",
                  f,
                  f ? ":" : "",
                  p,
                  ":",
                  h,
                  ":",
                  m
                );
              },
            },
          ]),
          n
        );
      })(r.Component);
      (y.defaultProps = Object.assign(Object.assign({}, g), {
        controlled: !1,
        intervalDelay: 1e3,
        precision: 0,
        autoStart: !0,
      })),
        (y.propTypes = {
          date: (0, i.oneOfType)([(0, i.instanceOf)(Date), i.string, i.number]),
          daysInHours: i.bool,
          zeroPadTime: i.number,
          zeroPadDays: i.number,
          controlled: i.bool,
          intervalDelay: i.number,
          precision: i.number,
          autoStart: i.bool,
          overtime: i.bool,
          className: i.string,
          children: i.element,
          renderer: i.func,
          now: i.func,
          onMount: i.func,
          onStart: i.func,
          onPause: i.func,
          onStop: i.func,
          onTick: i.func,
          onComplete: i.func,
        });
    },
    6929: function (e, t, n) {
      "use strict";
      var r = n(7294);
      function i(e) {
        return function (t) {
          return !!t.type && t.type.tabsRole === e;
        };
      }
      var s = i("Tab"),
        o = i("TabList"),
        a = i("TabPanel");
      function l(e, t) {
        return r.Children.map(e, function (e) {
          return null === e
            ? null
            : (function (e) {
                return s(e) || o(e) || a(e);
              })(e)
            ? t(e)
            : e.props &&
              e.props.children &&
              "object" === typeof e.props.children
            ? (0, r.cloneElement)(
                e,
                Object.assign({}, e.props, { children: l(e.props.children, t) })
              )
            : e;
        });
      }
      function c(e, t) {
        return r.Children.forEach(e, function (e) {
          null !== e &&
            (s(e) || a(e)
              ? t(e)
              : e.props &&
                e.props.children &&
                "object" === typeof e.props.children &&
                (o(e) && t(e), c(e.props.children, t)));
        });
      }
      function d(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = d(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      var u = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = d(e)) && (r && (r += " "), (r += t));
        return r;
      };
      function f(e) {
        var t = 0;
        return (
          c(e, function (e) {
            s(e) && t++;
          }),
          t
        );
      }
      var p,
        h = [
          "children",
          "className",
          "disabledTabClassName",
          "domRef",
          "focus",
          "forceRenderTabPanel",
          "onSelect",
          "selectedIndex",
          "selectedTabClassName",
          "selectedTabPanelClassName",
          "environment",
          "disableUpDownKeys",
        ];
      function m(e) {
        return e && "getAttribute" in e;
      }
      function g(e) {
        return m(e) && e.getAttribute("data-rttab");
      }
      function v(e) {
        return m(e) && "true" === e.getAttribute("aria-disabled");
      }
      var b = function (e) {
        var t = (0, r.useRef)([]),
          n = (0, r.useRef)([]),
          i = (0, r.useRef)();
        function c(t, n) {
          t < 0 || t >= b() || (0, e.onSelect)(t, e.selectedIndex, n);
        }
        function d(e) {
          for (var t = b(), n = e + 1; n < t; n++) if (!v(y(n))) return n;
          for (var r = 0; r < e; r++) if (!v(y(r))) return r;
          return e;
        }
        function m(e) {
          for (var t = e; t--; ) if (!v(y(t))) return t;
          for (t = b(); t-- > e; ) if (!v(y(t))) return t;
          return e;
        }
        function b() {
          return f(e.children);
        }
        function y(e) {
          return t.current["tabs-" + e];
        }
        function w(e) {
          var t = e.target;
          do {
            if (x(t)) {
              if (v(t)) return;
              return void c(
                [].slice.call(t.parentNode.children).filter(g).indexOf(t),
                e
              );
            }
          } while (null != (t = t.parentNode));
        }
        function x(e) {
          if (!g(e)) return !1;
          var t = e.parentElement;
          do {
            if (t === i.current) return !0;
            if (t.getAttribute("data-rttabs")) break;
            t = t.parentElement;
          } while (t);
          return !1;
        }
        e.children;
        var T = e.className,
          S = (e.disabledTabClassName, e.domRef),
          C =
            (e.focus,
            e.forceRenderTabPanel,
            e.onSelect,
            e.selectedIndex,
            e.selectedTabClassName,
            e.selectedTabPanelClassName,
            e.environment,
            e.disableUpDownKeys,
            (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                s = Object.keys(e);
              for (r = 0; r < s.length; r++)
                (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i;
            })(e, h));
        return r.createElement(
          "div",
          Object.assign({}, C, {
            className: u(T),
            onClick: w,
            onKeyDown: function (t) {
              var n = e.direction,
                r = e.disableUpDownKeys;
              if (x(t.target)) {
                var i = e.selectedIndex,
                  s = !1,
                  o = !1;
                ("Space" !== t.code &&
                  32 !== t.keyCode &&
                  "Enter" !== t.code &&
                  13 !== t.keyCode) ||
                  ((s = !0), (o = !1), w(t)),
                  "ArrowLeft" !== t.code &&
                  37 !== t.keyCode &&
                  (r || (38 !== t.keyCode && "ArrowUp" !== t.code))
                    ? "ArrowRight" !== t.code &&
                      39 !== t.keyCode &&
                      (r || (40 !== t.keyCode && "ArrowDown" !== t.code))
                      ? 35 === t.keyCode || "End" === t.code
                        ? ((i = (function () {
                            for (var e = b(); e--; ) if (!v(y(e))) return e;
                            return null;
                          })()),
                          (s = !0),
                          (o = !0))
                        : (36 !== t.keyCode && "Home" !== t.code) ||
                          ((i = (function () {
                            for (var e = b(), t = 0; t < e; t++)
                              if (!v(y(t))) return t;
                            return null;
                          })()),
                          (s = !0),
                          (o = !0))
                      : ((i = "rtl" === n ? m(i) : d(i)), (s = !0), (o = !0))
                    : ((i = "rtl" === n ? d(i) : m(i)), (s = !0), (o = !0)),
                  s && t.preventDefault(),
                  o && c(i, t);
              }
            },
            ref: function (e) {
              (i.current = e), S && S(e);
            },
            "data-rttabs": !0,
          }),
          (function () {
            var i = 0,
              c = e.children,
              d = e.disabledTabClassName,
              u = e.focus,
              f = e.forceRenderTabPanel,
              h = e.selectedIndex,
              m = e.selectedTabClassName,
              g = e.selectedTabPanelClassName,
              v = e.environment;
            n.current = n.current || [];
            for (var w = n.current.length - b(), x = (0, r.useId)(); w++ < 0; )
              n.current.push("" + x + n.current.length);
            return l(c, function (e) {
              var c = e;
              if (o(e)) {
                var b = 0,
                  w = !1;
                null == p &&
                  (function (e) {
                    var t =
                      e || ("undefined" !== typeof window ? window : void 0);
                    try {
                      p = !(
                        "undefined" === typeof t ||
                        !t.document ||
                        !t.document.activeElement
                      );
                    } catch (n) {
                      p = !1;
                    }
                  })(v);
                var x = v || ("undefined" !== typeof window ? window : void 0);
                p &&
                  x &&
                  (w = r.Children.toArray(e.props.children)
                    .filter(s)
                    .some(function (e, t) {
                      return x.document.activeElement === y(t);
                    })),
                  (c = (0, r.cloneElement)(e, {
                    children: l(e.props.children, function (e) {
                      var i = "tabs-" + b,
                        s = h === b,
                        o = {
                          tabRef: function (e) {
                            t.current[i] = e;
                          },
                          id: n.current[b],
                          selected: s,
                          focus: s && (u || w),
                        };
                      return (
                        m && (o.selectedClassName = m),
                        d && (o.disabledClassName = d),
                        b++,
                        (0, r.cloneElement)(e, o)
                      );
                    }),
                  }));
              } else if (a(e)) {
                var T = { id: n.current[i], selected: h === i };
                f && (T.forceRender = f),
                  g && (T.selectedClassName = g),
                  i++,
                  (c = (0, r.cloneElement)(e, T));
              }
              return c;
            });
          })()
        );
      };
      (b.defaultProps = { className: "react-tabs", focus: !1 }),
        (b.propTypes = {});
      var y = b,
        w = function (e) {
          var t = e.children,
            n = e.defaultFocus,
            i = e.defaultIndex,
            s = e.focusTabOnClick,
            o = e.onSelect,
            a = (0, r.useState)(n),
            l = a[0],
            c = a[1],
            d = (0, r.useState)(
              (function (e) {
                return null === e.selectedIndex ? 1 : 0;
              })(e)
            ),
            u = d[0],
            p = (0, r.useState)(1 === u ? i || 0 : null),
            h = p[0],
            m = p[1];
          if (
            ((0, r.useEffect)(function () {
              c(!1);
            }, []),
            1 === u)
          ) {
            var g = f(t);
            (0, r.useEffect)(
              function () {
                if (null != h) {
                  var e = Math.max(0, g - 1);
                  m(Math.min(h, e));
                }
              },
              [g]
            );
          }
          var v = Object.assign({}, e);
          return (
            (v.focus = l),
            (v.onSelect = function (e, t, n) {
              ("function" === typeof o && !1 === o(e, t, n)) ||
                (s && c(!0), 1 === u && m(e));
            }),
            null != h && (v.selectedIndex = h),
            delete v.defaultFocus,
            delete v.defaultIndex,
            delete v.focusTabOnClick,
            r.createElement(y, v, t)
          );
        };
      (w.propTypes = {}),
        (w.defaultProps = {
          defaultFocus: !1,
          focusTabOnClick: !0,
          forceRenderTabPanel: !1,
          selectedIndex: null,
          defaultIndex: null,
          environment: null,
          disableUpDownKeys: !1,
        }),
        (w.tabsRole = "Tabs");
      var x = ["children", "className"];
      var T = function (e) {
        var t = e.children,
          n = e.className,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, x);
        return r.createElement(
          "ul",
          Object.assign({}, i, { className: u(n), role: "tablist" }),
          t
        );
      };
      (T.tabsRole = "TabList"),
        (T.propTypes = {}),
        (T.defaultProps = { className: "react-tabs__tab-list" });
      var S = [
        "children",
        "className",
        "disabled",
        "disabledClassName",
        "focus",
        "id",
        "selected",
        "selectedClassName",
        "tabIndex",
        "tabRef",
      ];
      var C = "react-tabs__tab",
        E = {
          className: C,
          disabledClassName: C + "--disabled",
          focus: !1,
          id: null,
          selected: !1,
          selectedClassName: C + "--selected",
        },
        M = function (e) {
          var t,
            n = (0, r.useRef)(),
            i = e.children,
            s = e.className,
            o = e.disabled,
            a = e.disabledClassName,
            l = e.focus,
            c = e.id,
            d = e.selected,
            f = e.selectedClassName,
            p = e.tabIndex,
            h = e.tabRef,
            m = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                s = Object.keys(e);
              for (r = 0; r < s.length; r++)
                (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i;
            })(e, S);
          return (
            (0, r.useEffect)(
              function () {
                d && l && n.current.focus();
              },
              [d, l]
            ),
            r.createElement(
              "li",
              Object.assign({}, m, {
                className: u(s, ((t = {}), (t[f] = d), (t[a] = o), t)),
                ref: function (e) {
                  (n.current = e), h && h(e);
                },
                role: "tab",
                id: "tab" + c,
                "aria-selected": d ? "true" : "false",
                "aria-disabled": o ? "true" : "false",
                "aria-controls": "panel" + c,
                tabIndex: p || (d ? "0" : null),
                "data-rttab": !0,
              }),
              i
            )
          );
        };
      (M.propTypes = {}), (M.tabsRole = "Tab"), (M.defaultProps = E);
      var P = [
        "children",
        "className",
        "forceRender",
        "id",
        "selected",
        "selectedClassName",
      ];
      var O = "react-tabs__tab-panel",
        k = {
          className: O,
          forceRender: !1,
          selectedClassName: "react-tabs__tab-panel--selected",
        },
        _ = function (e) {
          var t,
            n = e.children,
            i = e.className,
            s = e.forceRender,
            o = e.id,
            a = e.selected,
            l = e.selectedClassName,
            c = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                s = Object.keys(e);
              for (r = 0; r < s.length; r++)
                (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i;
            })(e, P);
          return r.createElement(
            "div",
            Object.assign({}, c, {
              className: u(i, ((t = {}), (t[l] = a), t)),
              role: "tabpanel",
              id: "panel" + o,
              "aria-labelledby": "tab" + o,
            }),
            s || a ? n : null
          );
        };
      (_.tabsRole = "TabPanel"), (_.propTypes = {}), (_.defaultProps = k);
    },
    9217: function (e, t, n) {
      "use strict";
      var r = n(6775);
      r.kL.register(...r.zX);
    },
    2454: function (e, t, n) {
      "use strict";
      function r() {}
      n.d(t, {
        $: function () {
          return gt;
        },
        A: function () {
          return B;
        },
        B: function () {
          return c;
        },
        C: function () {
          return p;
        },
        D: function () {
          return At;
        },
        E: function () {
          return J;
        },
        F: function () {
          return Y;
        },
        G: function () {
          return dt;
        },
        H: function () {
          return I;
        },
        I: function () {
          return ee;
        },
        J: function () {
          return ft;
        },
        K: function () {
          return _t;
        },
        L: function () {
          return vt;
        },
        M: function () {
          return xt;
        },
        N: function () {
          return bt;
        },
        O: function () {
          return Lt;
        },
        P: function () {
          return k;
        },
        Q: function () {
          return h;
        },
        R: function () {
          return pe;
        },
        S: function () {
          return he;
        },
        T: function () {
          return _;
        },
        U: function () {
          return st;
        },
        V: function () {
          return y;
        },
        W: function () {
          return C;
        },
        X: function () {
          return cn;
        },
        Y: function () {
          return ie;
        },
        Z: function () {
          return re;
        },
        _: function () {
          return ce;
        },
        a: function () {
          return Dt;
        },
        a0: function () {
          return q;
        },
        a1: function () {
          return un;
        },
        a2: function () {
          return rn;
        },
        a3: function () {
          return hn;
        },
        a4: function () {
          return ue;
        },
        a5: function () {
          return pn;
        },
        a6: function () {
          return nn;
        },
        a7: function () {
          return ot;
        },
        a8: function () {
          return M;
        },
        a9: function () {
          return $t;
        },
        aA: function () {
          return wn;
        },
        aB: function () {
          return xn;
        },
        aC: function () {
          return me;
        },
        aD: function () {
          return Tn;
        },
        aE: function () {
          return mt;
        },
        aF: function () {
          return r;
        },
        aG: function () {
          return U;
        },
        aH: function () {
          return W;
        },
        aI: function () {
          return R;
        },
        aJ: function () {
          return H;
        },
        aK: function () {
          return F;
        },
        aL: function () {
          return X;
        },
        aM: function () {
          return ut;
        },
        aN: function () {
          return se;
        },
        aO: function () {
          return ne;
        },
        aa: function () {
          return Nt;
        },
        ab: function () {
          return jt;
        },
        ac: function () {
          return w;
        },
        ad: function () {
          return i;
        },
        ae: function () {
          return fe;
        },
        af: function () {
          return fn;
        },
        ag: function () {
          return pt;
        },
        ah: function () {
          return P;
        },
        ai: function () {
          return m;
        },
        aj: function () {
          return O;
        },
        ak: function () {
          return te;
        },
        al: function () {
          return Pt;
        },
        am: function () {
          return tn;
        },
        an: function () {
          return Pn;
        },
        ao: function () {
          return Mn;
        },
        ap: function () {
          return gn;
        },
        aq: function () {
          return vn;
        },
        ar: function () {
          return mn;
        },
        as: function () {
          return yt;
        },
        at: function () {
          return wt;
        },
        au: function () {
          return ht;
        },
        av: function () {
          return St;
        },
        aw: function () {
          return Ot;
        },
        ax: function () {
          return kt;
        },
        ay: function () {
          return En;
        },
        az: function () {
          return Z;
        },
        b: function () {
          return o;
        },
        c: function () {
          return rt;
        },
        d: function () {
          return ct;
        },
        e: function () {
          return xe;
        },
        f: function () {
          return S;
        },
        g: function () {
          return l;
        },
        h: function () {
          return It;
        },
        i: function () {
          return a;
        },
        j: function () {
          return E;
        },
        k: function () {
          return s;
        },
        l: function () {
          return ae;
        },
        m: function () {
          return u;
        },
        n: function () {
          return f;
        },
        o: function () {
          return yn;
        },
        p: function () {
          return Q;
        },
        q: function () {
          return ge;
        },
        r: function () {
          return de;
        },
        s: function () {
          return z;
        },
        t: function () {
          return V;
        },
        u: function () {
          return le;
        },
        v: function () {
          return d;
        },
        w: function () {
          return ve;
        },
        x: function () {
          return G;
        },
        y: function () {
          return qt;
        },
        z: function () {
          return j;
        },
      });
      const i = (function () {
        let e = 0;
        return function () {
          return e++;
        };
      })();
      function s(e) {
        return null === e || "undefined" === typeof e;
      }
      function o(e) {
        if (Array.isArray && Array.isArray(e)) return !0;
        const t = Object.prototype.toString.call(e);
        return "[object" === t.slice(0, 7) && "Array]" === t.slice(-6);
      }
      function a(e) {
        return (
          null !== e && "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      const l = (e) =>
        ("number" === typeof e || e instanceof Number) && isFinite(+e);
      function c(e, t) {
        return l(e) ? e : t;
      }
      function d(e, t) {
        return "undefined" === typeof e ? t : e;
      }
      const u = (e, t) =>
          "string" === typeof e && e.endsWith("%")
            ? parseFloat(e) / 100
            : e / t,
        f = (e, t) =>
          "string" === typeof e && e.endsWith("%")
            ? (parseFloat(e) / 100) * t
            : +e;
      function p(e, t, n) {
        if (e && "function" === typeof e.call) return e.apply(n, t);
      }
      function h(e, t, n, r) {
        let i, s, l;
        if (o(e))
          if (((s = e.length), r))
            for (i = s - 1; i >= 0; i--) t.call(n, e[i], i);
          else for (i = 0; i < s; i++) t.call(n, e[i], i);
        else if (a(e))
          for (l = Object.keys(e), s = l.length, i = 0; i < s; i++)
            t.call(n, e[l[i]], l[i]);
      }
      function m(e, t) {
        let n, r, i, s;
        if (!e || !t || e.length !== t.length) return !1;
        for (n = 0, r = e.length; n < r; ++n)
          if (
            ((i = e[n]),
            (s = t[n]),
            i.datasetIndex !== s.datasetIndex || i.index !== s.index)
          )
            return !1;
        return !0;
      }
      function g(e) {
        if (o(e)) return e.map(g);
        if (a(e)) {
          const t = Object.create(null),
            n = Object.keys(e),
            r = n.length;
          let i = 0;
          for (; i < r; ++i) t[n[i]] = g(e[n[i]]);
          return t;
        }
        return e;
      }
      function v(e) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(e);
      }
      function b(e, t, n, r) {
        if (!v(e)) return;
        const i = t[e],
          s = n[e];
        a(i) && a(s) ? y(i, s, r) : (t[e] = g(s));
      }
      function y(e, t, n) {
        const r = o(t) ? t : [t],
          i = r.length;
        if (!a(e)) return e;
        const s = (n = n || {}).merger || b;
        for (let o = 0; o < i; ++o) {
          if (!a((t = r[o]))) continue;
          const i = Object.keys(t);
          for (let r = 0, o = i.length; r < o; ++r) s(i[r], e, t, n);
        }
        return e;
      }
      function w(e, t) {
        return y(e, t, { merger: x });
      }
      function x(e, t, n) {
        if (!v(e)) return;
        const r = t[e],
          i = n[e];
        a(r) && a(i)
          ? w(r, i)
          : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = g(i));
      }
      const T = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
      function S(e, t) {
        const n =
          T[t] ||
          (T[t] = (function (e) {
            const t = (function (e) {
              const t = e.split("."),
                n = [];
              let r = "";
              for (const i of t)
                (r += i),
                  r.endsWith("\\")
                    ? (r = r.slice(0, -1) + ".")
                    : (n.push(r), (r = ""));
              return n;
            })(e);
            return (e) => {
              for (const n of t) {
                if ("" === n) break;
                e = e && e[n];
              }
              return e;
            };
          })(t));
        return n(e);
      }
      function C(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      const E = (e) => "undefined" !== typeof e,
        M = (e) => "function" === typeof e,
        P = (e, t) => {
          if (e.size !== t.size) return !1;
          for (const n of e) if (!t.has(n)) return !1;
          return !0;
        };
      function O(e) {
        return (
          "mouseup" === e.type || "click" === e.type || "contextmenu" === e.type
        );
      }
      const k = Math.PI,
        _ = 2 * k,
        L = _ + k,
        D = Number.POSITIVE_INFINITY,
        A = k / 180,
        I = k / 2,
        N = k / 4,
        $ = (2 * k) / 3,
        j = Math.log10,
        z = Math.sign;
      function R(e) {
        const t = Math.round(e);
        e = F(e, t, e / 1e3) ? t : e;
        const n = Math.pow(10, Math.floor(j(e))),
          r = e / n;
        return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
      }
      function B(e) {
        const t = [],
          n = Math.sqrt(e);
        let r;
        for (r = 1; r < n; r++) e % r === 0 && (t.push(r), t.push(e / r));
        return n === (0 | n) && t.push(n), t.sort((e, t) => e - t).pop(), t;
      }
      function G(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }
      function F(e, t, n) {
        return Math.abs(e - t) < n;
      }
      function H(e, t) {
        const n = Math.round(e);
        return n - t <= e && n + t >= e;
      }
      function W(e, t, n) {
        let r, i, s;
        for (r = 0, i = e.length; r < i; r++)
          (s = e[r][n]),
            isNaN(s) ||
              ((t.min = Math.min(t.min, s)), (t.max = Math.max(t.max, s)));
      }
      function V(e) {
        return e * (k / 180);
      }
      function Y(e) {
        return e * (180 / k);
      }
      function X(e) {
        if (!l(e)) return;
        let t = 1,
          n = 0;
        for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
        return n;
      }
      function q(e, t) {
        const n = t.x - e.x,
          r = t.y - e.y,
          i = Math.sqrt(n * n + r * r);
        let s = Math.atan2(r, n);
        return s < -0.5 * k && (s += _), { angle: s, distance: i };
      }
      function U(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function K(e, t) {
        return ((e - t + L) % _) - k;
      }
      function Z(e) {
        return ((e % _) + _) % _;
      }
      function Q(e, t, n, r) {
        const i = Z(e),
          s = Z(t),
          o = Z(n),
          a = Z(s - i),
          l = Z(o - i),
          c = Z(i - s),
          d = Z(i - o);
        return i === s || i === o || (r && s === o) || (a > l && c < d);
      }
      function J(e, t, n) {
        return Math.max(t, Math.min(n, e));
      }
      function ee(e) {
        return J(e, -32768, 32767);
      }
      function te(e, t, n, r = 1e-6) {
        return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r;
      }
      function ne(e, t, n) {
        n = n || ((n) => e[n] < t);
        let r,
          i = e.length - 1,
          s = 0;
        for (; i - s > 1; ) (r = (s + i) >> 1), n(r) ? (s = r) : (i = r);
        return { lo: s, hi: i };
      }
      const re = (e, t, n, r) =>
          ne(e, n, r ? (r) => e[r][t] <= n : (r) => e[r][t] < n),
        ie = (e, t, n) => ne(e, n, (r) => e[r][t] >= n);
      function se(e, t, n) {
        let r = 0,
          i = e.length;
        for (; r < i && e[r] < t; ) r++;
        for (; i > r && e[i - 1] > n; ) i--;
        return r > 0 || i < e.length ? e.slice(r, i) : e;
      }
      const oe = ["push", "pop", "shift", "splice", "unshift"];
      function ae(e, t) {
        e._chartjs
          ? e._chartjs.listeners.push(t)
          : (Object.defineProperty(e, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [t] },
            }),
            oe.forEach((t) => {
              const n = "_onData" + C(t),
                r = e[t];
              Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value(...t) {
                  const i = r.apply(this, t);
                  return (
                    e._chartjs.listeners.forEach((e) => {
                      "function" === typeof e[n] && e[n](...t);
                    }),
                    i
                  );
                },
              });
            }));
      }
      function le(e, t) {
        const n = e._chartjs;
        if (!n) return;
        const r = n.listeners,
          i = r.indexOf(t);
        -1 !== i && r.splice(i, 1),
          r.length > 0 ||
            (oe.forEach((t) => {
              delete e[t];
            }),
            delete e._chartjs);
      }
      function ce(e) {
        const t = new Set();
        let n, r;
        for (n = 0, r = e.length; n < r; ++n) t.add(e[n]);
        return t.size === r ? e : Array.from(t);
      }
      const de =
        "undefined" === typeof window
          ? function (e) {
              return e();
            }
          : window.requestAnimationFrame;
      function ue(e, t, n) {
        const r = n || ((e) => Array.prototype.slice.call(e));
        let i = !1,
          s = [];
        return function (...n) {
          (s = r(n)),
            i ||
              ((i = !0),
              de.call(window, () => {
                (i = !1), e.apply(t, s);
              }));
        };
      }
      function fe(e, t) {
        let n;
        return function (...r) {
          return (
            t ? (clearTimeout(n), (n = setTimeout(e, t, r))) : e.apply(this, r),
            t
          );
        };
      }
      const pe = (e) =>
          "start" === e ? "left" : "end" === e ? "right" : "center",
        he = (e, t, n) => ("start" === e ? t : "end" === e ? n : (t + n) / 2),
        me = (e, t, n, r) =>
          e === (r ? "left" : "right") ? n : "center" === e ? (t + n) / 2 : t;
      function ge(e, t, n) {
        const r = t.length;
        let i = 0,
          s = r;
        if (e._sorted) {
          const { iScale: o, _parsed: a } = e,
            l = o.axis,
            {
              min: c,
              max: d,
              minDefined: u,
              maxDefined: f,
            } = o.getUserBounds();
          u &&
            (i = J(
              Math.min(
                re(a, o.axis, c).lo,
                n ? r : re(t, l, o.getPixelForValue(c)).lo
              ),
              0,
              r - 1
            )),
            (s = f
              ? J(
                  Math.max(
                    re(a, o.axis, d, !0).hi + 1,
                    n ? 0 : re(t, l, o.getPixelForValue(d), !0).hi + 1
                  ),
                  i,
                  r
                ) - i
              : r - i);
        }
        return { start: i, count: s };
      }
      function ve(e) {
        const { xScale: t, yScale: n, _scaleRanges: r } = e,
          i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
        if (!r) return (e._scaleRanges = i), !0;
        const s =
          r.xmin !== t.min ||
          r.xmax !== t.max ||
          r.ymin !== n.min ||
          r.ymax !== n.max;
        return Object.assign(r, i), s;
      }
      const be = (e) => 0 === e || 1 === e,
        ye = (e, t, n) =>
          -Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * _) / n),
        we = (e, t, n) =>
          Math.pow(2, -10 * e) * Math.sin(((e - t) * _) / n) + 1,
        xe = {
          linear: (e) => e,
          easeInQuad: (e) => e * e,
          easeOutQuad: (e) => -e * (e - 2),
          easeInOutQuad: (e) =>
            (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
          easeInCubic: (e) => e * e * e,
          easeOutCubic: (e) => (e -= 1) * e * e + 1,
          easeInOutCubic: (e) =>
            (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
          easeInQuart: (e) => e * e * e * e,
          easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
          easeInOutQuart: (e) =>
            (e /= 0.5) < 1
              ? 0.5 * e * e * e * e
              : -0.5 * ((e -= 2) * e * e * e - 2),
          easeInQuint: (e) => e * e * e * e * e,
          easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
          easeInOutQuint: (e) =>
            (e /= 0.5) < 1
              ? 0.5 * e * e * e * e * e
              : 0.5 * ((e -= 2) * e * e * e * e + 2),
          easeInSine: (e) => 1 - Math.cos(e * I),
          easeOutSine: (e) => Math.sin(e * I),
          easeInOutSine: (e) => -0.5 * (Math.cos(k * e) - 1),
          easeInExpo: (e) => (0 === e ? 0 : Math.pow(2, 10 * (e - 1))),
          easeOutExpo: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
          easeInOutExpo: (e) =>
            be(e)
              ? e
              : e < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * e - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * e - 1))),
          easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
          easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
          easeInOutCirc: (e) =>
            (e /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - e * e) - 1)
              : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
          easeInElastic: (e) => (be(e) ? e : ye(e, 0.075, 0.3)),
          easeOutElastic: (e) => (be(e) ? e : we(e, 0.075, 0.3)),
          easeInOutElastic(e) {
            const t = 0.1125;
            return be(e)
              ? e
              : e < 0.5
              ? 0.5 * ye(2 * e, t, 0.45)
              : 0.5 + 0.5 * we(2 * e - 1, t, 0.45);
          },
          easeInBack(e) {
            const t = 1.70158;
            return e * e * ((t + 1) * e - t);
          },
          easeOutBack(e) {
            const t = 1.70158;
            return (e -= 1) * e * ((t + 1) * e + t) + 1;
          },
          easeInOutBack(e) {
            let t = 1.70158;
            return (e /= 0.5) < 1
              ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
              : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
          },
          easeInBounce: (e) => 1 - xe.easeOutBounce(1 - e),
          easeOutBounce(e) {
            const t = 7.5625,
              n = 2.75;
            return e < 1 / n
              ? t * e * e
              : e < 2 / n
              ? t * (e -= 1.5 / n) * e + 0.75
              : e < 2.5 / n
              ? t * (e -= 2.25 / n) * e + 0.9375
              : t * (e -= 2.625 / n) * e + 0.984375;
          },
          easeInOutBounce: (e) =>
            e < 0.5
              ? 0.5 * xe.easeInBounce(2 * e)
              : 0.5 * xe.easeOutBounce(2 * e - 1) + 0.5,
        };
      function Te(e) {
        return (e + 0.5) | 0;
      }
      const Se = (e, t, n) => Math.max(Math.min(e, n), t);
      function Ce(e) {
        return Se(Te(2.55 * e), 0, 255);
      }
      function Ee(e) {
        return Se(Te(255 * e), 0, 255);
      }
      function Me(e) {
        return Se(Te(e / 2.55) / 100, 0, 1);
      }
      function Pe(e) {
        return Se(Te(100 * e), 0, 100);
      }
      const Oe = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        ke = [..."0123456789ABCDEF"],
        _e = (e) => ke[15 & e],
        Le = (e) => ke[(240 & e) >> 4] + ke[15 & e],
        De = (e) => (240 & e) >> 4 === (15 & e);
      function Ae(e) {
        var t = ((e) => De(e.r) && De(e.g) && De(e.b) && De(e.a))(e) ? _e : Le;
        return e
          ? "#" +
              t(e.r) +
              t(e.g) +
              t(e.b) +
              ((e, t) => (e < 255 ? t(e) : ""))(e.a, t)
          : void 0;
      }
      const Ie =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function Ne(e, t, n) {
        const r = t * Math.min(n, 1 - n),
          i = (t, i = (t + e / 30) % 12) =>
            n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
        return [i(0), i(8), i(4)];
      }
      function $e(e, t, n) {
        const r = (r, i = (r + e / 60) % 6) =>
          n - n * t * Math.max(Math.min(i, 4 - i, 1), 0);
        return [r(5), r(3), r(1)];
      }
      function je(e, t, n) {
        const r = Ne(e, 1, 0.5);
        let i;
        for (
          t + n > 1 && ((i = 1 / (t + n)), (t *= i), (n *= i)), i = 0;
          i < 3;
          i++
        )
          (r[i] *= 1 - t - n), (r[i] += t);
        return r;
      }
      function ze(e) {
        const t = e.r / 255,
          n = e.g / 255,
          r = e.b / 255,
          i = Math.max(t, n, r),
          s = Math.min(t, n, r),
          o = (i + s) / 2;
        let a, l, c;
        return (
          i !== s &&
            ((c = i - s),
            (l = o > 0.5 ? c / (2 - i - s) : c / (i + s)),
            (a = (function (e, t, n, r, i) {
              return e === i
                ? (t - n) / r + (t < n ? 6 : 0)
                : t === i
                ? (n - e) / r + 2
                : (e - t) / r + 4;
            })(t, n, r, c, i)),
            (a = 60 * a + 0.5)),
          [0 | a, l || 0, o]
        );
      }
      function Re(e, t, n, r) {
        return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(Ee);
      }
      function Be(e, t, n) {
        return Re(Ne, e, t, n);
      }
      function Ge(e) {
        return ((e % 360) + 360) % 360;
      }
      function Fe(e) {
        const t = Ie.exec(e);
        let n,
          r = 255;
        if (!t) return;
        t[5] !== n && (r = t[6] ? Ce(+t[5]) : Ee(+t[5]));
        const i = Ge(+t[2]),
          s = +t[3] / 100,
          o = +t[4] / 100;
        return (
          (n =
            "hwb" === t[1]
              ? (function (e, t, n) {
                  return Re(je, e, t, n);
                })(i, s, o)
              : "hsv" === t[1]
              ? (function (e, t, n) {
                  return Re($e, e, t, n);
                })(i, s, o)
              : Be(i, s, o)),
          { r: n[0], g: n[1], b: n[2], a: r }
        );
      }
      const He = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        We = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      let Ve;
      function Ye(e) {
        Ve ||
          ((Ve = (function () {
            const e = {},
              t = Object.keys(We),
              n = Object.keys(He);
            let r, i, s, o, a;
            for (r = 0; r < t.length; r++) {
              for (o = a = t[r], i = 0; i < n.length; i++)
                (s = n[i]), (a = a.replace(s, He[s]));
              (s = parseInt(We[o], 16)),
                (e[a] = [(s >> 16) & 255, (s >> 8) & 255, 255 & s]);
            }
            return e;
          })()),
          (Ve.transparent = [0, 0, 0, 0]));
        const t = Ve[e.toLowerCase()];
        return (
          t && { r: t[0], g: t[1], b: t[2], a: 4 === t.length ? t[3] : 255 }
        );
      }
      const Xe =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      const qe = (e) =>
          e <= 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055,
        Ue = (e) =>
          e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
      function Ke(e, t, n) {
        if (e) {
          let r = ze(e);
          (r[t] = Math.max(0, Math.min(r[t] + r[t] * n, 0 === t ? 360 : 1))),
            (r = Be(r)),
            (e.r = r[0]),
            (e.g = r[1]),
            (e.b = r[2]);
        }
      }
      function Ze(e, t) {
        return e ? Object.assign(t || {}, e) : e;
      }
      function Qe(e) {
        var t = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(e)
            ? e.length >= 3 &&
              ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
              e.length > 3 && (t.a = Ee(e[3])))
            : ((t = Ze(e, { r: 0, g: 0, b: 0, a: 1 })).a = Ee(t.a)),
          t
        );
      }
      function Je(e) {
        return "r" === e.charAt(0)
          ? (function (e) {
              const t = Xe.exec(e);
              let n,
                r,
                i,
                s = 255;
              if (t) {
                if (t[7] !== n) {
                  const e = +t[7];
                  s = t[8] ? Ce(e) : Se(255 * e, 0, 255);
                }
                return (
                  (n = +t[1]),
                  (r = +t[3]),
                  (i = +t[5]),
                  (n = 255 & (t[2] ? Ce(n) : Se(n, 0, 255))),
                  (r = 255 & (t[4] ? Ce(r) : Se(r, 0, 255))),
                  (i = 255 & (t[6] ? Ce(i) : Se(i, 0, 255))),
                  { r: n, g: r, b: i, a: s }
                );
              }
            })(e)
          : Fe(e);
      }
      class et {
        constructor(e) {
          if (e instanceof et) return e;
          const t = typeof e;
          let n;
          "object" === t
            ? (n = Qe(e))
            : "string" === t &&
              (n =
                (function (e) {
                  var t,
                    n = e.length;
                  return (
                    "#" === e[0] &&
                      (4 === n || 5 === n
                        ? (t = {
                            r: 255 & (17 * Oe[e[1]]),
                            g: 255 & (17 * Oe[e[2]]),
                            b: 255 & (17 * Oe[e[3]]),
                            a: 5 === n ? 17 * Oe[e[4]] : 255,
                          })
                        : (7 !== n && 9 !== n) ||
                          (t = {
                            r: (Oe[e[1]] << 4) | Oe[e[2]],
                            g: (Oe[e[3]] << 4) | Oe[e[4]],
                            b: (Oe[e[5]] << 4) | Oe[e[6]],
                            a: 9 === n ? (Oe[e[7]] << 4) | Oe[e[8]] : 255,
                          })),
                    t
                  );
                })(e) ||
                Ye(e) ||
                Je(e)),
            (this._rgb = n),
            (this._valid = !!n);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var e = Ze(this._rgb);
          return e && (e.a = Me(e.a)), e;
        }
        set rgb(e) {
          this._rgb = Qe(e);
        }
        rgbString() {
          return this._valid
            ? (e = this._rgb) &&
                (e.a < 255
                  ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Me(e.a)})`
                  : `rgb(${e.r}, ${e.g}, ${e.b})`)
            : void 0;
          var e;
        }
        hexString() {
          return this._valid ? Ae(this._rgb) : void 0;
        }
        hslString() {
          return this._valid
            ? (function (e) {
                if (!e) return;
                const t = ze(e),
                  n = t[0],
                  r = Pe(t[1]),
                  i = Pe(t[2]);
                return e.a < 255
                  ? `hsla(${n}, ${r}%, ${i}%, ${Me(e.a)})`
                  : `hsl(${n}, ${r}%, ${i}%)`;
              })(this._rgb)
            : void 0;
        }
        mix(e, t) {
          if (e) {
            const n = this.rgb,
              r = e.rgb;
            let i;
            const s = t === i ? 0.5 : t,
              o = 2 * s - 1,
              a = n.a - r.a,
              l = ((o * a === -1 ? o : (o + a) / (1 + o * a)) + 1) / 2;
            (i = 1 - l),
              (n.r = 255 & (l * n.r + i * r.r + 0.5)),
              (n.g = 255 & (l * n.g + i * r.g + 0.5)),
              (n.b = 255 & (l * n.b + i * r.b + 0.5)),
              (n.a = s * n.a + (1 - s) * r.a),
              (this.rgb = n);
          }
          return this;
        }
        interpolate(e, t) {
          return (
            e &&
              (this._rgb = (function (e, t, n) {
                const r = Ue(Me(e.r)),
                  i = Ue(Me(e.g)),
                  s = Ue(Me(e.b));
                return {
                  r: Ee(qe(r + n * (Ue(Me(t.r)) - r))),
                  g: Ee(qe(i + n * (Ue(Me(t.g)) - i))),
                  b: Ee(qe(s + n * (Ue(Me(t.b)) - s))),
                  a: e.a + n * (t.a - e.a),
                };
              })(this._rgb, e._rgb, t)),
            this
          );
        }
        clone() {
          return new et(this.rgb);
        }
        alpha(e) {
          return (this._rgb.a = Ee(e)), this;
        }
        clearer(e) {
          return (this._rgb.a *= 1 - e), this;
        }
        greyscale() {
          const e = this._rgb,
            t = Te(0.3 * e.r + 0.59 * e.g + 0.11 * e.b);
          return (e.r = e.g = e.b = t), this;
        }
        opaquer(e) {
          return (this._rgb.a *= 1 + e), this;
        }
        negate() {
          const e = this._rgb;
          return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
        }
        lighten(e) {
          return Ke(this._rgb, 2, e), this;
        }
        darken(e) {
          return Ke(this._rgb, 2, -e), this;
        }
        saturate(e) {
          return Ke(this._rgb, 1, e), this;
        }
        desaturate(e) {
          return Ke(this._rgb, 1, -e), this;
        }
        rotate(e) {
          return (
            (function (e, t) {
              var n = ze(e);
              (n[0] = Ge(n[0] + t)),
                (n = Be(n)),
                (e.r = n[0]),
                (e.g = n[1]),
                (e.b = n[2]);
            })(this._rgb, e),
            this
          );
        }
      }
      function tt(e) {
        return new et(e);
      }
      function nt(e) {
        if (e && "object" === typeof e) {
          const t = e.toString();
          return (
            "[object CanvasPattern]" === t || "[object CanvasGradient]" === t
          );
        }
        return !1;
      }
      function rt(e) {
        return nt(e) ? e : tt(e);
      }
      function it(e) {
        return nt(e) ? e : tt(e).saturate(0.5).darken(0.1).hexString();
      }
      const st = Object.create(null),
        ot = Object.create(null);
      function at(e, t) {
        if (!t) return e;
        const n = t.split(".");
        for (let r = 0, i = n.length; r < i; ++r) {
          const t = n[r];
          e = e[t] || (e[t] = Object.create(null));
        }
        return e;
      }
      function lt(e, t, n) {
        return "string" === typeof t ? y(at(e, t), n) : y(at(e, ""), t);
      }
      var ct = new (class {
        constructor(e) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (e) =>
              e.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (e, t) => it(t.backgroundColor)),
            (this.hoverBorderColor = (e, t) => it(t.borderColor)),
            (this.hoverColor = (e, t) => it(t.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(e);
        }
        set(e, t) {
          return lt(this, e, t);
        }
        get(e) {
          return at(this, e);
        }
        describe(e, t) {
          return lt(ot, e, t);
        }
        override(e, t) {
          return lt(st, e, t);
        }
        route(e, t, n, r) {
          const i = at(this, e),
            s = at(this, n),
            o = "_" + t;
          Object.defineProperties(i, {
            [o]: { value: i[t], writable: !0 },
            [t]: {
              enumerable: !0,
              get() {
                const e = this[o],
                  t = s[r];
                return a(e) ? Object.assign({}, t, e) : d(e, t);
              },
              set(e) {
                this[o] = e;
              },
            },
          });
        }
      })({
        _scriptable: (e) => !e.startsWith("on"),
        _indexable: (e) => "events" !== e,
        hover: { _fallback: "interaction" },
        interaction: { _scriptable: !1, _indexable: !1 },
      });
      function dt(e, t, n, r, i) {
        let s = t[i];
        return (
          s || ((s = t[i] = e.measureText(i).width), n.push(i)),
          s > r && (r = s),
          r
        );
      }
      function ut(e, t, n, r) {
        let i = ((r = r || {}).data = r.data || {}),
          s = (r.garbageCollect = r.garbageCollect || []);
        r.font !== t &&
          ((i = r.data = {}), (s = r.garbageCollect = []), (r.font = t)),
          e.save(),
          (e.font = t);
        let a = 0;
        const l = n.length;
        let c, d, u, f, p;
        for (c = 0; c < l; c++)
          if (((f = n[c]), void 0 !== f && null !== f && !0 !== o(f)))
            a = dt(e, i, s, a, f);
          else if (o(f))
            for (d = 0, u = f.length; d < u; d++)
              (p = f[d]),
                void 0 === p || null === p || o(p) || (a = dt(e, i, s, a, p));
        e.restore();
        const h = s.length / 2;
        if (h > n.length) {
          for (c = 0; c < h; c++) delete i[s[c]];
          s.splice(0, h);
        }
        return a;
      }
      function ft(e, t, n) {
        const r = e.currentDevicePixelRatio,
          i = 0 !== n ? Math.max(n / 2, 0.5) : 0;
        return Math.round((t - i) * r) / r + i;
      }
      function pt(e, t) {
        (t = t || e.getContext("2d")).save(),
          t.resetTransform(),
          t.clearRect(0, 0, e.width, e.height),
          t.restore();
      }
      function ht(e, t, n, r) {
        mt(e, t, n, r, null);
      }
      function mt(e, t, n, r, i) {
        let s, o, a, l, c, d;
        const u = t.pointStyle,
          f = t.rotation,
          p = t.radius;
        let h = (f || 0) * A;
        if (
          u &&
          "object" === typeof u &&
          ((s = u.toString()),
          "[object HTMLImageElement]" === s ||
            "[object HTMLCanvasElement]" === s)
        )
          return (
            e.save(),
            e.translate(n, r),
            e.rotate(h),
            e.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height),
            void e.restore()
          );
        if (!(isNaN(p) || p <= 0)) {
          switch ((e.beginPath(), u)) {
            default:
              i ? e.ellipse(n, r, i / 2, p, 0, 0, _) : e.arc(n, r, p, 0, _),
                e.closePath();
              break;
            case "triangle":
              e.moveTo(n + Math.sin(h) * p, r - Math.cos(h) * p),
                (h += $),
                e.lineTo(n + Math.sin(h) * p, r - Math.cos(h) * p),
                (h += $),
                e.lineTo(n + Math.sin(h) * p, r - Math.cos(h) * p),
                e.closePath();
              break;
            case "rectRounded":
              (c = 0.516 * p),
                (l = p - c),
                (o = Math.cos(h + N) * l),
                (a = Math.sin(h + N) * l),
                e.arc(n - o, r - a, c, h - k, h - I),
                e.arc(n + a, r - o, c, h - I, h),
                e.arc(n + o, r + a, c, h, h + I),
                e.arc(n - a, r + o, c, h + I, h + k),
                e.closePath();
              break;
            case "rect":
              if (!f) {
                (l = Math.SQRT1_2 * p),
                  (d = i ? i / 2 : l),
                  e.rect(n - d, r - l, 2 * d, 2 * l);
                break;
              }
              h += N;
            case "rectRot":
              (o = Math.cos(h) * p),
                (a = Math.sin(h) * p),
                e.moveTo(n - o, r - a),
                e.lineTo(n + a, r - o),
                e.lineTo(n + o, r + a),
                e.lineTo(n - a, r + o),
                e.closePath();
              break;
            case "crossRot":
              h += N;
            case "cross":
              (o = Math.cos(h) * p),
                (a = Math.sin(h) * p),
                e.moveTo(n - o, r - a),
                e.lineTo(n + o, r + a),
                e.moveTo(n + a, r - o),
                e.lineTo(n - a, r + o);
              break;
            case "star":
              (o = Math.cos(h) * p),
                (a = Math.sin(h) * p),
                e.moveTo(n - o, r - a),
                e.lineTo(n + o, r + a),
                e.moveTo(n + a, r - o),
                e.lineTo(n - a, r + o),
                (h += N),
                (o = Math.cos(h) * p),
                (a = Math.sin(h) * p),
                e.moveTo(n - o, r - a),
                e.lineTo(n + o, r + a),
                e.moveTo(n + a, r - o),
                e.lineTo(n - a, r + o);
              break;
            case "line":
              (o = i ? i / 2 : Math.cos(h) * p),
                (a = Math.sin(h) * p),
                e.moveTo(n - o, r - a),
                e.lineTo(n + o, r + a);
              break;
            case "dash":
              e.moveTo(n, r),
                e.lineTo(n + Math.cos(h) * p, r + Math.sin(h) * p);
          }
          e.fill(), t.borderWidth > 0 && e.stroke();
        }
      }
      function gt(e, t, n) {
        return (
          (n = n || 0.5),
          !t ||
            (e &&
              e.x > t.left - n &&
              e.x < t.right + n &&
              e.y > t.top - n &&
              e.y < t.bottom + n)
        );
      }
      function vt(e, t) {
        e.save(),
          e.beginPath(),
          e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
          e.clip();
      }
      function bt(e) {
        e.restore();
      }
      function yt(e, t, n, r, i) {
        if (!t) return e.lineTo(n.x, n.y);
        if ("middle" === i) {
          const r = (t.x + n.x) / 2;
          e.lineTo(r, t.y), e.lineTo(r, n.y);
        } else
          ("after" === i) !== !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
        e.lineTo(n.x, n.y);
      }
      function wt(e, t, n, r) {
        if (!t) return e.lineTo(n.x, n.y);
        e.bezierCurveTo(
          r ? t.cp1x : t.cp2x,
          r ? t.cp1y : t.cp2y,
          r ? n.cp2x : n.cp1x,
          r ? n.cp2y : n.cp1y,
          n.x,
          n.y
        );
      }
      function xt(e, t, n, r, i, a = {}) {
        const l = o(t) ? t : [t],
          c = a.strokeWidth > 0 && "" !== a.strokeColor;
        let d, u;
        for (
          e.save(),
            e.font = i.string,
            (function (e, t) {
              t.translation && e.translate(t.translation[0], t.translation[1]);
              s(t.rotation) || e.rotate(t.rotation);
              t.color && (e.fillStyle = t.color);
              t.textAlign && (e.textAlign = t.textAlign);
              t.textBaseline && (e.textBaseline = t.textBaseline);
            })(e, a),
            d = 0;
          d < l.length;
          ++d
        )
          (u = l[d]),
            c &&
              (a.strokeColor && (e.strokeStyle = a.strokeColor),
              s(a.strokeWidth) || (e.lineWidth = a.strokeWidth),
              e.strokeText(u, n, r, a.maxWidth)),
            e.fillText(u, n, r, a.maxWidth),
            Tt(e, n, r, u, a),
            (r += i.lineHeight);
        e.restore();
      }
      function Tt(e, t, n, r, i) {
        if (i.strikethrough || i.underline) {
          const s = e.measureText(r),
            o = t - s.actualBoundingBoxLeft,
            a = t + s.actualBoundingBoxRight,
            l = n - s.actualBoundingBoxAscent,
            c = n + s.actualBoundingBoxDescent,
            d = i.strikethrough ? (l + c) / 2 : c;
          (e.strokeStyle = e.fillStyle),
            e.beginPath(),
            (e.lineWidth = i.decorationWidth || 2),
            e.moveTo(o, d),
            e.lineTo(a, d),
            e.stroke();
        }
      }
      function St(e, t) {
        const { x: n, y: r, w: i, h: s, radius: o } = t;
        e.arc(n + o.topLeft, r + o.topLeft, o.topLeft, -I, k, !0),
          e.lineTo(n, r + s - o.bottomLeft),
          e.arc(n + o.bottomLeft, r + s - o.bottomLeft, o.bottomLeft, k, I, !0),
          e.lineTo(n + i - o.bottomRight, r + s),
          e.arc(
            n + i - o.bottomRight,
            r + s - o.bottomRight,
            o.bottomRight,
            I,
            0,
            !0
          ),
          e.lineTo(n + i, r + o.topRight),
          e.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -I, !0),
          e.lineTo(n + o.topLeft, r);
      }
      const Ct = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        Et = new RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
        );
      function Mt(e, t) {
        const n = ("" + e).match(Ct);
        if (!n || "normal" === n[1]) return 1.2 * t;
        switch (((e = +n[2]), n[3])) {
          case "px":
            return e;
          case "%":
            e /= 100;
        }
        return t * e;
      }
      function Pt(e, t) {
        const n = {},
          r = a(t),
          i = r ? Object.keys(t) : t,
          s = a(e) ? (r ? (n) => d(e[n], e[t[n]]) : (t) => e[t]) : () => e;
        for (const o of i) n[o] = +s(o) || 0;
        return n;
      }
      function Ot(e) {
        return Pt(e, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function kt(e) {
        return Pt(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function _t(e) {
        const t = Ot(e);
        return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
      }
      function Lt(e, t) {
        (e = e || {}), (t = t || ct.font);
        let n = d(e.size, t.size);
        "string" === typeof n && (n = parseInt(n, 10));
        let r = d(e.style, t.style);
        r &&
          !("" + r).match(Et) &&
          (console.warn('Invalid font style specified: "' + r + '"'), (r = ""));
        const i = {
          family: d(e.family, t.family),
          lineHeight: Mt(d(e.lineHeight, t.lineHeight), n),
          size: n,
          style: r,
          weight: d(e.weight, t.weight),
          string: "",
        };
        return (
          (i.string = (function (e) {
            return !e || s(e.size) || s(e.family)
              ? null
              : (e.style ? e.style + " " : "") +
                  (e.weight ? e.weight + " " : "") +
                  e.size +
                  "px " +
                  e.family;
          })(i)),
          i
        );
      }
      function Dt(e, t, n, r) {
        let i,
          s,
          a,
          l = !0;
        for (i = 0, s = e.length; i < s; ++i)
          if (
            ((a = e[i]),
            void 0 !== a &&
              (void 0 !== t &&
                "function" === typeof a &&
                ((a = a(t)), (l = !1)),
              void 0 !== n && o(a) && ((a = a[n % a.length]), (l = !1)),
              void 0 !== a))
          )
            return r && !l && (r.cacheable = !1), a;
      }
      function At(e, t, n) {
        const { min: r, max: i } = e,
          s = f(t, (i - r) / 2),
          o = (e, t) => (n && 0 === e ? 0 : e + t);
        return { min: o(r, -Math.abs(s)), max: o(i, s) };
      }
      function It(e, t) {
        return Object.assign(Object.create(e), t);
      }
      function Nt(e, t = [""], n = e, r, i = () => e[0]) {
        E(r) || (r = Yt("_fallback", e));
        const s = {
          [Symbol.toStringTag]: "Object",
          _cacheable: !0,
          _scopes: e,
          _rootScopes: n,
          _fallback: r,
          _getTarget: i,
          override: (i) => Nt([i, ...e], t, n, r),
        };
        return new Proxy(s, {
          deleteProperty: (t, n) => (
            delete t[n], delete t._keys, delete e[0][n], !0
          ),
          get: (n, r) =>
            Bt(n, r, () =>
              (function (e, t, n, r) {
                let i;
                for (const s of t)
                  if (((i = Yt(zt(s, e), n)), E(i)))
                    return Rt(e, i) ? Wt(n, r, e, i) : i;
              })(r, t, e, n)
            ),
          getOwnPropertyDescriptor: (e, t) =>
            Reflect.getOwnPropertyDescriptor(e._scopes[0], t),
          getPrototypeOf: () => Reflect.getPrototypeOf(e[0]),
          has: (e, t) => Xt(e).includes(t),
          ownKeys: (e) => Xt(e),
          set(e, t, n) {
            const r = e._storage || (e._storage = i());
            return (e[t] = r[t] = n), delete e._keys, !0;
          },
        });
      }
      function $t(e, t, n, r) {
        const i = {
          _cacheable: !1,
          _proxy: e,
          _context: t,
          _subProxy: n,
          _stack: new Set(),
          _descriptors: jt(e, r),
          setContext: (t) => $t(e, t, n, r),
          override: (i) => $t(e.override(i), t, n, r),
        };
        return new Proxy(i, {
          deleteProperty: (t, n) => (delete t[n], delete e[n], !0),
          get: (e, t, n) =>
            Bt(e, t, () =>
              (function (e, t, n) {
                const {
                  _proxy: r,
                  _context: i,
                  _subProxy: s,
                  _descriptors: l,
                } = e;
                let c = r[t];
                M(c) &&
                  l.isScriptable(t) &&
                  (c = (function (e, t, n, r) {
                    const {
                      _proxy: i,
                      _context: s,
                      _subProxy: o,
                      _stack: a,
                    } = n;
                    if (a.has(e))
                      throw new Error(
                        "Recursion detected: " +
                          Array.from(a).join("->") +
                          "->" +
                          e
                      );
                    a.add(e),
                      (t = t(s, o || r)),
                      a.delete(e),
                      Rt(e, t) && (t = Wt(i._scopes, i, e, t));
                    return t;
                  })(t, c, e, n));
                o(c) &&
                  c.length &&
                  (c = (function (e, t, n, r) {
                    const {
                      _proxy: i,
                      _context: s,
                      _subProxy: o,
                      _descriptors: l,
                    } = n;
                    if (E(s.index) && r(e)) t = t[s.index % t.length];
                    else if (a(t[0])) {
                      const n = t,
                        r = i._scopes.filter((e) => e !== n);
                      t = [];
                      for (const a of n) {
                        const n = Wt(r, i, e, a);
                        t.push($t(n, s, o && o[e], l));
                      }
                    }
                    return t;
                  })(t, c, e, l.isIndexable));
                Rt(t, c) && (c = $t(c, i, s && s[t], l));
                return c;
              })(e, t, n)
            ),
          getOwnPropertyDescriptor: (t, n) =>
            t._descriptors.allKeys
              ? Reflect.has(e, n)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(e, n),
          getPrototypeOf: () => Reflect.getPrototypeOf(e),
          has: (t, n) => Reflect.has(e, n),
          ownKeys: () => Reflect.ownKeys(e),
          set: (t, n, r) => ((e[n] = r), delete t[n], !0),
        });
      }
      function jt(e, t = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: n = t.scriptable,
          _indexable: r = t.indexable,
          _allKeys: i = t.allKeys,
        } = e;
        return {
          allKeys: i,
          scriptable: n,
          indexable: r,
          isScriptable: M(n) ? n : () => n,
          isIndexable: M(r) ? r : () => r,
        };
      }
      const zt = (e, t) => (e ? e + C(t) : t),
        Rt = (e, t) =>
          a(t) &&
          "adapters" !== e &&
          (null === Object.getPrototypeOf(t) || t.constructor === Object);
      function Bt(e, t, n) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
        const r = n();
        return (e[t] = r), r;
      }
      function Gt(e, t, n) {
        return M(e) ? e(t, n) : e;
      }
      const Ft = (e, t) =>
        !0 === e ? t : "string" === typeof e ? S(t, e) : void 0;
      function Ht(e, t, n, r, i) {
        for (const s of t) {
          const t = Ft(n, s);
          if (t) {
            e.add(t);
            const s = Gt(t._fallback, n, i);
            if (E(s) && s !== n && s !== r) return s;
          } else if (!1 === t && E(r) && n !== r) return null;
        }
        return !1;
      }
      function Wt(e, t, n, r) {
        const i = t._rootScopes,
          s = Gt(t._fallback, n, r),
          l = [...e, ...i],
          c = new Set();
        c.add(r);
        let d = Vt(c, l, n, s || n, r);
        return (
          null !== d &&
          (!E(s) || s === n || ((d = Vt(c, l, s, d, r)), null !== d)) &&
          Nt(Array.from(c), [""], i, s, () =>
            (function (e, t, n) {
              const r = e._getTarget();
              t in r || (r[t] = {});
              const i = r[t];
              if (o(i) && a(n)) return n;
              return i;
            })(t, n, r)
          )
        );
      }
      function Vt(e, t, n, r, i) {
        for (; n; ) n = Ht(e, t, n, r, i);
        return n;
      }
      function Yt(e, t) {
        for (const n of t) {
          if (!n) continue;
          const t = n[e];
          if (E(t)) return t;
        }
      }
      function Xt(e) {
        let t = e._keys;
        return (
          t ||
            (t = e._keys =
              (function (e) {
                const t = new Set();
                for (const n of e)
                  for (const e of Object.keys(n).filter(
                    (e) => !e.startsWith("_")
                  ))
                    t.add(e);
                return Array.from(t);
              })(e._scopes)),
          t
        );
      }
      function qt(e, t, n, r) {
        const { iScale: i } = e,
          { key: s = "r" } = this._parsing,
          o = new Array(r);
        let a, l, c, d;
        for (a = 0, l = r; a < l; ++a)
          (c = a + n), (d = t[c]), (o[a] = { r: i.parse(S(d, s), c) });
        return o;
      }
      const Ut = Number.EPSILON || 1e-14,
        Kt = (e, t) => t < e.length && !e[t].skip && e[t],
        Zt = (e) => ("x" === e ? "y" : "x");
      function Qt(e, t, n, r) {
        const i = e.skip ? t : e,
          s = t,
          o = n.skip ? t : n,
          a = U(s, i),
          l = U(o, s);
        let c = a / (a + l),
          d = l / (a + l);
        (c = isNaN(c) ? 0 : c), (d = isNaN(d) ? 0 : d);
        const u = r * c,
          f = r * d;
        return {
          previous: { x: s.x - u * (o.x - i.x), y: s.y - u * (o.y - i.y) },
          next: { x: s.x + f * (o.x - i.x), y: s.y + f * (o.y - i.y) },
        };
      }
      function Jt(e, t = "x") {
        const n = Zt(t),
          r = e.length,
          i = Array(r).fill(0),
          s = Array(r);
        let o,
          a,
          l,
          c = Kt(e, 0);
        for (o = 0; o < r; ++o)
          if (((a = l), (l = c), (c = Kt(e, o + 1)), l)) {
            if (c) {
              const e = c[t] - l[t];
              i[o] = 0 !== e ? (c[n] - l[n]) / e : 0;
            }
            s[o] = a
              ? c
                ? z(i[o - 1]) !== z(i[o])
                  ? 0
                  : (i[o - 1] + i[o]) / 2
                : i[o - 1]
              : i[o];
          }
        !(function (e, t, n) {
          const r = e.length;
          let i,
            s,
            o,
            a,
            l,
            c = Kt(e, 0);
          for (let d = 0; d < r - 1; ++d)
            (l = c),
              (c = Kt(e, d + 1)),
              l &&
                c &&
                (F(t[d], 0, Ut)
                  ? (n[d] = n[d + 1] = 0)
                  : ((i = n[d] / t[d]),
                    (s = n[d + 1] / t[d]),
                    (a = Math.pow(i, 2) + Math.pow(s, 2)),
                    a <= 9 ||
                      ((o = 3 / Math.sqrt(a)),
                      (n[d] = i * o * t[d]),
                      (n[d + 1] = s * o * t[d]))));
        })(e, i, s),
          (function (e, t, n = "x") {
            const r = Zt(n),
              i = e.length;
            let s,
              o,
              a,
              l = Kt(e, 0);
            for (let c = 0; c < i; ++c) {
              if (((o = a), (a = l), (l = Kt(e, c + 1)), !a)) continue;
              const i = a[n],
                d = a[r];
              o &&
                ((s = (i - o[n]) / 3),
                (a[`cp1${n}`] = i - s),
                (a[`cp1${r}`] = d - s * t[c])),
                l &&
                  ((s = (l[n] - i) / 3),
                  (a[`cp2${n}`] = i + s),
                  (a[`cp2${r}`] = d + s * t[c]));
            }
          })(e, s, t);
      }
      function en(e, t, n) {
        return Math.max(Math.min(e, n), t);
      }
      function tn(e, t, n, r, i) {
        let s, o, a, l;
        if (
          (t.spanGaps && (e = e.filter((e) => !e.skip)),
          "monotone" === t.cubicInterpolationMode)
        )
          Jt(e, i);
        else {
          let n = r ? e[e.length - 1] : e[0];
          for (s = 0, o = e.length; s < o; ++s)
            (a = e[s]),
              (l = Qt(
                n,
                a,
                e[Math.min(s + 1, o - (r ? 0 : 1)) % o],
                t.tension
              )),
              (a.cp1x = l.previous.x),
              (a.cp1y = l.previous.y),
              (a.cp2x = l.next.x),
              (a.cp2y = l.next.y),
              (n = a);
        }
        t.capBezierPoints &&
          (function (e, t) {
            let n,
              r,
              i,
              s,
              o,
              a = gt(e[0], t);
            for (n = 0, r = e.length; n < r; ++n)
              (o = s),
                (s = a),
                (a = n < r - 1 && gt(e[n + 1], t)),
                s &&
                  ((i = e[n]),
                  o &&
                    ((i.cp1x = en(i.cp1x, t.left, t.right)),
                    (i.cp1y = en(i.cp1y, t.top, t.bottom))),
                  a &&
                    ((i.cp2x = en(i.cp2x, t.left, t.right)),
                    (i.cp2y = en(i.cp2y, t.top, t.bottom))));
          })(e, n);
      }
      function nn() {
        return "undefined" !== typeof window && "undefined" !== typeof document;
      }
      function rn(e) {
        let t = e.parentNode;
        return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t;
      }
      function sn(e, t, n) {
        let r;
        return (
          "string" === typeof e
            ? ((r = parseInt(e, 10)),
              -1 !== e.indexOf("%") && (r = (r / 100) * t.parentNode[n]))
            : (r = e),
          r
        );
      }
      const on = (e) => window.getComputedStyle(e, null);
      const an = ["top", "right", "bottom", "left"];
      function ln(e, t, n) {
        const r = {};
        n = n ? "-" + n : "";
        for (let i = 0; i < 4; i++) {
          const s = an[i];
          r[s] = parseFloat(e[t + "-" + s + n]) || 0;
        }
        return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
      }
      function cn(e, t) {
        if ("native" in e) return e;
        const { canvas: n, currentDevicePixelRatio: r } = t,
          i = on(n),
          s = "border-box" === i.boxSizing,
          o = ln(i, "padding"),
          a = ln(i, "border", "width"),
          {
            x: l,
            y: c,
            box: d,
          } = (function (e, t) {
            const n = e.touches,
              r = n && n.length ? n[0] : e,
              { offsetX: i, offsetY: s } = r;
            let o,
              a,
              l = !1;
            if (
              ((e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot))(
                i,
                s,
                e.target
              )
            )
              (o = i), (a = s);
            else {
              const e = t.getBoundingClientRect();
              (o = r.clientX - e.left), (a = r.clientY - e.top), (l = !0);
            }
            return { x: o, y: a, box: l };
          })(e, n),
          u = o.left + (d && a.left),
          f = o.top + (d && a.top);
        let { width: p, height: h } = t;
        return (
          s && ((p -= o.width + a.width), (h -= o.height + a.height)),
          {
            x: Math.round((((l - u) / p) * n.width) / r),
            y: Math.round((((c - f) / h) * n.height) / r),
          }
        );
      }
      const dn = (e) => Math.round(10 * e) / 10;
      function un(e, t, n, r) {
        const i = on(e),
          s = ln(i, "margin"),
          o = sn(i.maxWidth, e, "clientWidth") || D,
          a = sn(i.maxHeight, e, "clientHeight") || D,
          l = (function (e, t, n) {
            let r, i;
            if (void 0 === t || void 0 === n) {
              const s = rn(e);
              if (s) {
                const e = s.getBoundingClientRect(),
                  o = on(s),
                  a = ln(o, "border", "width"),
                  l = ln(o, "padding");
                (t = e.width - l.width - a.width),
                  (n = e.height - l.height - a.height),
                  (r = sn(o.maxWidth, s, "clientWidth")),
                  (i = sn(o.maxHeight, s, "clientHeight"));
              } else (t = e.clientWidth), (n = e.clientHeight);
            }
            return { width: t, height: n, maxWidth: r || D, maxHeight: i || D };
          })(e, t, n);
        let { width: c, height: d } = l;
        if ("content-box" === i.boxSizing) {
          const e = ln(i, "border", "width"),
            t = ln(i, "padding");
          (c -= t.width + e.width), (d -= t.height + e.height);
        }
        return (
          (c = Math.max(0, c - s.width)),
          (d = Math.max(0, r ? Math.floor(c / r) : d - s.height)),
          (c = dn(Math.min(c, o, l.maxWidth))),
          (d = dn(Math.min(d, a, l.maxHeight))),
          c && !d && (d = dn(c / 2)),
          { width: c, height: d }
        );
      }
      function fn(e, t, n) {
        const r = t || 1,
          i = Math.floor(e.height * r),
          s = Math.floor(e.width * r);
        (e.height = i / r), (e.width = s / r);
        const o = e.canvas;
        return (
          o.style &&
            (n || (!o.style.height && !o.style.width)) &&
            ((o.style.height = `${e.height}px`),
            (o.style.width = `${e.width}px`)),
          (e.currentDevicePixelRatio !== r ||
            o.height !== i ||
            o.width !== s) &&
            ((e.currentDevicePixelRatio = r),
            (o.height = i),
            (o.width = s),
            e.ctx.setTransform(r, 0, 0, r, 0, 0),
            !0)
        );
      }
      const pn = (function () {
        let e = !1;
        try {
          const t = {
            get passive() {
              return (e = !0), !1;
            },
          };
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (t) {}
        return e;
      })();
      function hn(e, t) {
        const n = (function (e, t) {
            return on(e).getPropertyValue(t);
          })(e, t),
          r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? +r[1] : void 0;
      }
      function mn(e, t, n, r) {
        return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
      }
      function gn(e, t, n, r) {
        return {
          x: e.x + n * (t.x - e.x),
          y:
            "middle" === r
              ? n < 0.5
                ? e.y
                : t.y
              : "after" === r
              ? n < 1
                ? e.y
                : t.y
              : n > 0
              ? t.y
              : e.y,
        };
      }
      function vn(e, t, n, r) {
        const i = { x: e.cp2x, y: e.cp2y },
          s = { x: t.cp1x, y: t.cp1y },
          o = mn(e, i, n),
          a = mn(i, s, n),
          l = mn(s, t, n),
          c = mn(o, a, n),
          d = mn(a, l, n);
        return mn(c, d, n);
      }
      const bn = new Map();
      function yn(e, t, n) {
        return (function (e, t) {
          t = t || {};
          const n = e + JSON.stringify(t);
          let r = bn.get(n);
          return r || ((r = new Intl.NumberFormat(e, t)), bn.set(n, r)), r;
        })(t, n).format(e);
      }
      function wn(e, t, n) {
        return e
          ? (function (e, t) {
              return {
                x: (n) => e + e + t - n,
                setWidth(e) {
                  t = e;
                },
                textAlign: (e) =>
                  "center" === e ? e : "right" === e ? "left" : "right",
                xPlus: (e, t) => e - t,
                leftForLtr: (e, t) => e - t,
              };
            })(t, n)
          : {
              x: (e) => e,
              setWidth(e) {},
              textAlign: (e) => e,
              xPlus: (e, t) => e + t,
              leftForLtr: (e, t) => e,
            };
      }
      function xn(e, t) {
        let n, r;
        ("ltr" !== t && "rtl" !== t) ||
          ((n = e.canvas.style),
          (r = [
            n.getPropertyValue("direction"),
            n.getPropertyPriority("direction"),
          ]),
          n.setProperty("direction", t, "important"),
          (e.prevTextDirection = r));
      }
      function Tn(e, t) {
        void 0 !== t &&
          (delete e.prevTextDirection,
          e.canvas.style.setProperty("direction", t[0], t[1]));
      }
      function Sn(e) {
        return "angle" === e
          ? { between: Q, compare: K, normalize: Z }
          : { between: te, compare: (e, t) => e - t, normalize: (e) => e };
      }
      function Cn({ start: e, end: t, count: n, loop: r, style: i }) {
        return {
          start: e % n,
          end: t % n,
          loop: r && (t - e + 1) % n === 0,
          style: i,
        };
      }
      function En(e, t, n) {
        if (!n) return [e];
        const { property: r, start: i, end: s } = n,
          o = t.length,
          { compare: a, between: l, normalize: c } = Sn(r),
          {
            start: d,
            end: u,
            loop: f,
            style: p,
          } = (function (e, t, n) {
            const { property: r, start: i, end: s } = n,
              { between: o, normalize: a } = Sn(r),
              l = t.length;
            let c,
              d,
              { start: u, end: f, loop: p } = e;
            if (p) {
              for (
                u += l, f += l, c = 0, d = l;
                c < d && o(a(t[u % l][r]), i, s);
                ++c
              )
                u--, f--;
              (u %= l), (f %= l);
            }
            return (
              f < u && (f += l), { start: u, end: f, loop: p, style: e.style }
            );
          })(e, t, n),
          h = [];
        let m,
          g,
          v,
          b = !1,
          y = null;
        const w = () => b || (l(i, v, m) && 0 !== a(i, v)),
          x = () => !b || 0 === a(s, m) || l(s, v, m);
        for (let T = d, S = d; T <= u; ++T)
          (g = t[T % o]),
            g.skip ||
              ((m = c(g[r])),
              m !== v &&
                ((b = l(m, i, s)),
                null === y && w() && (y = 0 === a(m, i) ? T : S),
                null !== y &&
                  x() &&
                  (h.push(
                    Cn({ start: y, end: T, loop: f, count: o, style: p })
                  ),
                  (y = null)),
                (S = T),
                (v = m)));
        return (
          null !== y &&
            h.push(Cn({ start: y, end: u, loop: f, count: o, style: p })),
          h
        );
      }
      function Mn(e, t) {
        const n = [],
          r = e.segments;
        for (let i = 0; i < r.length; i++) {
          const s = En(r[i], e.points, t);
          s.length && n.push(...s);
        }
        return n;
      }
      function Pn(e, t) {
        const n = e.points,
          r = e.options.spanGaps,
          i = n.length;
        if (!i) return [];
        const s = !!e._loop,
          { start: o, end: a } = (function (e, t, n, r) {
            let i = 0,
              s = t - 1;
            if (n && !r) for (; i < t && !e[i].skip; ) i++;
            for (; i < t && e[i].skip; ) i++;
            for (i %= t, n && (s += i); s > i && e[s % t].skip; ) s--;
            return (s %= t), { start: i, end: s };
          })(n, i, s, r);
        if (!0 === r) return On(e, [{ start: o, end: a, loop: s }], n, t);
        return On(
          e,
          (function (e, t, n, r) {
            const i = e.length,
              s = [];
            let o,
              a = t,
              l = e[t];
            for (o = t + 1; o <= n; ++o) {
              const n = e[o % i];
              n.skip || n.stop
                ? l.skip ||
                  ((r = !1),
                  s.push({ start: t % i, end: (o - 1) % i, loop: r }),
                  (t = a = n.stop ? o : null))
                : ((a = o), l.skip && (t = o)),
                (l = n);
            }
            return (
              null !== a && s.push({ start: t % i, end: a % i, loop: r }), s
            );
          })(n, o, a < o ? a + i : a, !!e._fullLoop && 0 === o && a === i - 1),
          n,
          t
        );
      }
      function On(e, t, n, r) {
        return r && r.setContext && n
          ? (function (e, t, n, r) {
              const i = e._chart.getContext(),
                s = kn(e.options),
                {
                  _datasetIndex: o,
                  options: { spanGaps: a },
                } = e,
                l = n.length,
                c = [];
              let d = s,
                u = t[0].start,
                f = u;
              function p(e, t, r, i) {
                const s = a ? -1 : 1;
                if (e !== t) {
                  for (e += l; n[e % l].skip; ) e -= s;
                  for (; n[t % l].skip; ) t += s;
                  e % l !== t % l &&
                    (c.push({ start: e % l, end: t % l, loop: r, style: i }),
                    (d = i),
                    (u = t % l));
                }
              }
              for (const h of t) {
                u = a ? u : h.start;
                let e,
                  t = n[u % l];
                for (f = u + 1; f <= h.end; f++) {
                  const s = n[f % l];
                  (e = kn(
                    r.setContext(
                      It(i, {
                        type: "segment",
                        p0: t,
                        p1: s,
                        p0DataIndex: (f - 1) % l,
                        p1DataIndex: f % l,
                        datasetIndex: o,
                      })
                    )
                  )),
                    _n(e, d) && p(u, f - 1, h.loop, d),
                    (t = s),
                    (d = e);
                }
                u < f - 1 && p(u, f - 1, h.loop, d);
              }
              return c;
            })(e, t, n, r)
          : t;
      }
      function kn(e) {
        return {
          backgroundColor: e.backgroundColor,
          borderCapStyle: e.borderCapStyle,
          borderDash: e.borderDash,
          borderDashOffset: e.borderDashOffset,
          borderJoinStyle: e.borderJoinStyle,
          borderWidth: e.borderWidth,
          borderColor: e.borderColor,
        };
      }
      function _n(e, t) {
        return t && JSON.stringify(e) !== JSON.stringify(t);
      }
    },
    8494: function (e, t, n) {
      "use strict";
      var r = n(7294),
        i = n(965);
      function s(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function o(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => n.indexOf(e) < 0)
          .forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : s(t[n]) && s(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : o(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function a(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function l(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function c(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function d(e) {
        void 0 === e && (e = "");
        const t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          n = [];
        return (
          t.forEach((e) => {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      const u = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopedSlidesLimit",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function f(e, t) {
        let n = t.slidesPerView;
        if (t.breakpoints) {
          const e = i.ZP.prototype.getBreakpoint(t.breakpoints),
            r = e in t.breakpoints ? t.breakpoints[e] : void 0;
          r && r.slidesPerView && (n = r.slidesPerView);
        }
        let r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
        return (
          (r += t.loopAdditionalSlides),
          r > e.length && t.loopedSlidesLimit && (r = e.length),
          r
        );
      }
      function p(e) {
        const t = [];
        return (
          r.Children.toArray(e).forEach((e) => {
            e.type && "SwiperSlide" === e.type.displayName
              ? t.push(e)
              : e.props &&
                e.props.children &&
                p(e.props.children).forEach((e) => t.push(e));
          }),
          t
        );
      }
      function h(e) {
        const t = [],
          n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          r.Children.toArray(e).forEach((e) => {
            if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
            else if (e.props && e.props.slot && n[e.props.slot])
              n[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              const r = p(e.props.children);
              r.length > 0
                ? r.forEach((e) => t.push(e))
                : n["container-end"].push(e);
            } else n["container-end"].push(e);
          }),
          { slides: t, slots: n }
        );
      }
      function m(e) {
        let {
          swiper: t,
          slides: n,
          passedParams: r,
          changedParams: i,
          nextEl: a,
          prevEl: l,
          scrollbarEl: c,
          paginationEl: d,
        } = e;
        const u = i.filter((e) => "children" !== e && "direction" !== e),
          {
            params: f,
            pagination: p,
            navigation: h,
            scrollbar: m,
            virtual: g,
            thumbs: v,
          } = t;
        let b, y, w, x, T;
        i.includes("thumbs") &&
          r.thumbs &&
          r.thumbs.swiper &&
          f.thumbs &&
          !f.thumbs.swiper &&
          (b = !0),
          i.includes("controller") &&
            r.controller &&
            r.controller.control &&
            f.controller &&
            !f.controller.control &&
            (y = !0),
          i.includes("pagination") &&
            r.pagination &&
            (r.pagination.el || d) &&
            (f.pagination || !1 === f.pagination) &&
            p &&
            !p.el &&
            (w = !0),
          i.includes("scrollbar") &&
            r.scrollbar &&
            (r.scrollbar.el || c) &&
            (f.scrollbar || !1 === f.scrollbar) &&
            m &&
            !m.el &&
            (x = !0),
          i.includes("navigation") &&
            r.navigation &&
            (r.navigation.prevEl || l) &&
            (r.navigation.nextEl || a) &&
            (f.navigation || !1 === f.navigation) &&
            h &&
            !h.prevEl &&
            !h.nextEl &&
            (T = !0);
        if (
          (u.forEach((e) => {
            if (s(f[e]) && s(r[e])) o(f[e], r[e]);
            else {
              const i = r[e];
              (!0 !== i && !1 !== i) ||
              ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
                ? (f[e] = r[e])
                : !1 === i &&
                  t[(n = e)] &&
                  (t[n].destroy(),
                  "navigation" === n
                    ? ((f[n].prevEl = void 0),
                      (f[n].nextEl = void 0),
                      (t[n].prevEl = void 0),
                      (t[n].nextEl = void 0))
                    : ((f[n].el = void 0), (t[n].el = void 0)));
            }
            var n;
          }),
          u.includes("controller") &&
            !y &&
            t.controller &&
            t.controller.control &&
            f.controller &&
            f.controller.control &&
            (t.controller.control = f.controller.control),
          i.includes("children") && n && g && f.virtual.enabled
            ? ((g.slides = n), g.update(!0))
            : i.includes("children") &&
              t.lazy &&
              t.params.lazy.enabled &&
              t.lazy.load(),
          b)
        ) {
          v.init() && v.update(!0);
        }
        y && (t.controller.control = f.controller.control),
          w && (d && (f.pagination.el = d), p.init(), p.render(), p.update()),
          x &&
            (c && (f.scrollbar.el = c),
            m.init(),
            m.updateSize(),
            m.setTranslate()),
          T &&
            (a && (f.navigation.nextEl = a),
            l && (f.navigation.prevEl = l),
            h.init(),
            h.update()),
          i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
          i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
          i.includes("direction") && t.changeDirection(r.direction, !1),
          t.update();
      }
      function g(e, t) {
        return "undefined" === typeof window
          ? (0, r.useEffect)(e, t)
          : (0, r.useLayoutEffect)(e, t);
      }
      const v = (0, r.createContext)(null),
        b = (0, r.createContext)(null);
      function y() {
        return (
          (y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          y.apply(this, arguments)
        );
      }
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          w.apply(this, arguments)
        );
      }
      (0, r.forwardRef)(function (e, t) {
        let {
            className: n,
            tag: p = "div",
            wrapperTag: v = "div",
            children: w,
            onSwiper: x,
            ...T
          } = void 0 === e ? {} : e,
          S = !1;
        const [C, E] = (0, r.useState)("swiper"),
          [M, P] = (0, r.useState)(null),
          [O, k] = (0, r.useState)(!1),
          _ = (0, r.useRef)(!1),
          L = (0, r.useRef)(null),
          D = (0, r.useRef)(null),
          A = (0, r.useRef)(null),
          I = (0, r.useRef)(null),
          N = (0, r.useRef)(null),
          $ = (0, r.useRef)(null),
          j = (0, r.useRef)(null),
          z = (0, r.useRef)(null),
          {
            params: R,
            passedParams: B,
            rest: G,
            events: F,
          } = (function (e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const n = { on: {} },
              r = {},
              a = {};
            o(n, i.ZP.defaults),
              o(n, i.ZP.extendedDefaults),
              (n._emitClasses = !0),
              (n.init = !1);
            const l = {},
              c = u.map((e) => e.replace(/_/, "")),
              d = Object.assign({}, e);
            return (
              Object.keys(d).forEach((i) => {
                "undefined" !== typeof e[i] &&
                  (c.indexOf(i) >= 0
                    ? s(e[i])
                      ? ((n[i] = {}), (a[i] = {}), o(n[i], e[i]), o(a[i], e[i]))
                      : ((n[i] = e[i]), (a[i] = e[i]))
                    : 0 === i.search(/on[A-Z]/) && "function" === typeof e[i]
                    ? t
                      ? (r[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i])
                      : (n.on[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i])
                    : (l[i] = e[i]));
              }),
              ["navigation", "pagination", "scrollbar"].forEach((e) => {
                !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
              }),
              { params: n, passedParams: a, rest: l, events: r }
            );
          })(T),
          { slides: H, slots: W } = h(w),
          V = () => {
            k(!O);
          };
        Object.assign(R.on, {
          _containerClasses(e, t) {
            E(t);
          },
        });
        const Y = () => {
          if (
            (Object.assign(R.on, F),
            (S = !0),
            (D.current = new i.ZP(R)),
            (D.current.loopCreate = () => {}),
            (D.current.loopDestroy = () => {}),
            R.loop && (D.current.loopedSlides = f(H, R)),
            D.current.virtual && D.current.params.virtual.enabled)
          ) {
            D.current.virtual.slides = H;
            const e = {
              cache: !1,
              slides: H,
              renderExternal: P,
              renderExternalUpdate: !1,
            };
            o(D.current.params.virtual, e),
              o(D.current.originalParams.virtual, e);
          }
        };
        L.current || Y(), D.current && D.current.on("_beforeBreakpoint", V);
        return (
          (0, r.useEffect)(() => () => {
            D.current && D.current.off("_beforeBreakpoint", V);
          }),
          (0, r.useEffect)(() => {
            !_.current &&
              D.current &&
              (D.current.emitSlidesClasses(), (_.current = !0));
          }),
          g(() => {
            if ((t && (t.current = L.current), L.current))
              return (
                D.current.destroyed && Y(),
                (function (e, t) {
                  let {
                    el: n,
                    nextEl: r,
                    prevEl: i,
                    paginationEl: s,
                    scrollbarEl: o,
                    swiper: d,
                  } = e;
                  a(t) &&
                    r &&
                    i &&
                    ((d.params.navigation.nextEl = r),
                    (d.originalParams.navigation.nextEl = r),
                    (d.params.navigation.prevEl = i),
                    (d.originalParams.navigation.prevEl = i)),
                    l(t) &&
                      s &&
                      ((d.params.pagination.el = s),
                      (d.originalParams.pagination.el = s)),
                    c(t) &&
                      o &&
                      ((d.params.scrollbar.el = o),
                      (d.originalParams.scrollbar.el = o)),
                    d.init(n);
                })(
                  {
                    el: L.current,
                    nextEl: N.current,
                    prevEl: $.current,
                    paginationEl: j.current,
                    scrollbarEl: z.current,
                    swiper: D.current,
                  },
                  R
                ),
                x && x(D.current),
                () => {
                  D.current &&
                    !D.current.destroyed &&
                    D.current.destroy(!0, !1);
                }
              );
          }, []),
          g(() => {
            !S &&
              F &&
              D.current &&
              Object.keys(F).forEach((e) => {
                D.current.on(e, F[e]);
              });
            const e = (function (e, t, n, r, i) {
              const o = [];
              if (!t) return o;
              const a = (e) => {
                o.indexOf(e) < 0 && o.push(e);
              };
              if (n && r) {
                const e = r.map(i),
                  t = n.map(i);
                e.join("") !== t.join("") && a("children"),
                  r.length !== n.length && a("children");
              }
              return (
                u
                  .filter((e) => "_" === e[0])
                  .map((e) => e.replace(/_/, ""))
                  .forEach((n) => {
                    if (n in e && n in t)
                      if (s(e[n]) && s(t[n])) {
                        const r = Object.keys(e[n]),
                          i = Object.keys(t[n]);
                        r.length !== i.length
                          ? a(n)
                          : (r.forEach((r) => {
                              e[n][r] !== t[n][r] && a(n);
                            }),
                            i.forEach((r) => {
                              e[n][r] !== t[n][r] && a(n);
                            }));
                      } else e[n] !== t[n] && a(n);
                  }),
                o
              );
            })(B, A.current, H, I.current, (e) => e.key);
            return (
              (A.current = B),
              (I.current = H),
              e.length &&
                D.current &&
                !D.current.destroyed &&
                m({
                  swiper: D.current,
                  slides: H,
                  passedParams: B,
                  changedParams: e,
                  nextEl: N.current,
                  prevEl: $.current,
                  scrollbarEl: z.current,
                  paginationEl: j.current,
                }),
              () => {
                F &&
                  D.current &&
                  Object.keys(F).forEach((e) => {
                    D.current.off(e, F[e]);
                  });
              }
            );
          }),
          g(() => {
            var e;
            !(e = D.current) ||
              e.destroyed ||
              !e.params.virtual ||
              (e.params.virtual && !e.params.virtual.enabled) ||
              (e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.lazy && e.params.lazy.enabled && e.lazy.load(),
              e.parallax &&
                e.params.parallax &&
                e.params.parallax.enabled &&
                e.parallax.setTranslate());
          }, [M]),
          r.createElement(
            p,
            y({ ref: L, className: d(`${C}${n ? ` ${n}` : ""}`) }, G),
            r.createElement(
              b.Provider,
              { value: D.current },
              W["container-start"],
              r.createElement(
                v,
                { className: "swiper-wrapper" },
                W["wrapper-start"],
                R.virtual
                  ? (function (e, t, n) {
                      if (!n) return null;
                      const i = e.isHorizontal()
                        ? {
                            [e.rtlTranslate
                              ? "right"
                              : "left"]: `${n.offset}px`,
                          }
                        : { top: `${n.offset}px` };
                      return t
                        .filter((e, t) => t >= n.from && t <= n.to)
                        .map((t) => r.cloneElement(t, { swiper: e, style: i }));
                    })(D.current, H, M)
                  : !R.loop || (D.current && D.current.destroyed)
                  ? H.map((e) => r.cloneElement(e, { swiper: D.current }))
                  : (function (e, t, n) {
                      const i = t.map((t, n) =>
                        r.cloneElement(t, {
                          swiper: e,
                          "data-swiper-slide-index": n,
                        })
                      );
                      function s(e, t, i) {
                        return r.cloneElement(e, {
                          key: `${e.key}-duplicate-${t}-${i}`,
                          className: `${e.props.className || ""} ${
                            n.slideDuplicateClass
                          }`,
                        });
                      }
                      if (n.loopFillGroupWithBlank) {
                        const e =
                          n.slidesPerGroup - (i.length % n.slidesPerGroup);
                        if (e !== n.slidesPerGroup)
                          for (let t = 0; t < e; t += 1) {
                            const e = r.createElement("div", {
                              className: `${n.slideClass} ${n.slideBlankClass}`,
                            });
                            i.push(e);
                          }
                      }
                      "auto" !== n.slidesPerView ||
                        n.loopedSlides ||
                        (n.loopedSlides = i.length);
                      const o = f(i, n),
                        a = [],
                        l = [];
                      for (let r = 0; r < o; r += 1) {
                        const e = r - Math.floor(r / i.length) * i.length;
                        l.push(s(i[e], r, "append")),
                          a.unshift(s(i[i.length - e - 1], r, "prepend"));
                      }
                      return e && (e.loopedSlides = o), [...a, ...i, ...l];
                    })(D.current, H, R),
                W["wrapper-end"]
              ),
              a(R) &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("div", {
                    ref: $,
                    className: "swiper-button-prev",
                  }),
                  r.createElement("div", {
                    ref: N,
                    className: "swiper-button-next",
                  })
                ),
              c(R) &&
                r.createElement("div", {
                  ref: z,
                  className: "swiper-scrollbar",
                }),
              l(R) &&
                r.createElement("div", {
                  ref: j,
                  className: "swiper-pagination",
                }),
              W["container-end"]
            )
          )
        );
      }).displayName = "Swiper";
      (0, r.forwardRef)(function (e, t) {
        let {
          tag: n = "div",
          children: i,
          className: s = "",
          swiper: o,
          zoom: a,
          virtualIndex: l,
          ...c
        } = void 0 === e ? {} : e;
        const u = (0, r.useRef)(null),
          [f, p] = (0, r.useState)("swiper-slide");
        function h(e, t, n) {
          t === u.current && p(n);
        }
        g(() => {
          if ((t && (t.current = u.current), u.current && o)) {
            if (!o.destroyed)
              return (
                o.on("_slideClass", h),
                () => {
                  o && o.off("_slideClass", h);
                }
              );
            "swiper-slide" !== f && p("swiper-slide");
          }
        }),
          g(() => {
            o && u.current && !o.destroyed && p(o.getSlideClasses(u.current));
          }, [o]);
        const m = {
            isActive:
              f.indexOf("swiper-slide-active") >= 0 ||
              f.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: f.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              f.indexOf("swiper-slide-prev") >= 0 ||
              f.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              f.indexOf("swiper-slide-next") >= 0 ||
              f.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          b = () => ("function" === typeof i ? i(m) : i);
        return r.createElement(
          n,
          w(
            {
              ref: u,
              className: d(`${f}${s ? ` ${s}` : ""}`),
              "data-swiper-slide-index": l,
            },
            c
          ),
          r.createElement(
            v.Provider,
            { value: m },
            a
              ? r.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof a ? a : void 0,
                  },
                  b()
                )
              : b()
          )
        );
      }).displayName = "SwiperSlide";
    },
    965: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function i(e = {}, t = {}) {
        Object.keys(t).forEach((n) => {
          "undefined" === typeof e[n]
            ? (e[n] = t[n])
            : r(t[n]) &&
              r(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              i(e[n], t[n]);
        });
      }
      n.d(t, {
        ZP: function () {
          return te;
        },
      });
      const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function o() {
        const e = "undefined" !== typeof document ? document : {};
        return i(e, s), e;
      }
      const a = {
        document: s,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        const e = "undefined" !== typeof window ? window : {};
        return i(e, a), e;
      }
      class c extends Array {
        constructor(e) {
          "number" === typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function d(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...d(e)) : t.push(e);
          }),
          t
        );
      }
      function u(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function f(e, t) {
        const n = l(),
          r = o();
        let i = [];
        if (!t && e instanceof c) return e;
        if (!e) return new c(i);
        if ("string" === typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"),
              0 === n.indexOf("<tr") && (e = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
              0 === n.indexOf("<tbody") && (e = "table"),
              0 === n.indexOf("<option") && (e = "select");
            const t = r.createElement(e);
            t.innerHTML = n;
            for (let n = 0; n < t.childNodes.length; n += 1)
              i.push(t.childNodes[n]);
          } else
            i = (function (e, t) {
              if ("string" !== typeof e) return [e];
              const n = [],
                r = t.querySelectorAll(e);
              for (let i = 0; i < r.length; i += 1) n.push(r[i]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) i.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof c) return e;
          i = e;
        }
        return new c(
          (function (e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(i)
        );
      }
      f.fn = c.prototype;
      const p = "resize scroll".split(" ");
      function h(e) {
        return function (...t) {
          if ("undefined" === typeof t[0]) {
            for (let t = 0; t < this.length; t += 1)
              p.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : f(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      h("click"),
        h("blur"),
        h("focus"),
        h("focusin"),
        h("focusout"),
        h("keyup"),
        h("keydown"),
        h("keypress"),
        h("submit"),
        h("change"),
        h("mousedown"),
        h("mousemove"),
        h("mouseup"),
        h("mouseenter"),
        h("mouseleave"),
        h("mouseout"),
        h("mouseover"),
        h("touchstart"),
        h("touchend"),
        h("touchmove"),
        h("resize"),
        h("scroll");
      const m = {
        addClass: function (...e) {
          const t = d(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = d(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = d(e.map((e) => e.split(" ")));
          return (
            u(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = d(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e)
                (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, n, r, i] = e;
          function s(e) {
            const t = e.target;
            if (!t) return;
            const i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), f(t).is(n))) r.apply(t, i);
            else {
              const e = f(t).parents();
              for (let t = 0; t < e.length; t += 1)
                f(e[t]).is(n) && r.apply(e[t], i);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
          }
          "function" === typeof e[1] && (([t, r, i] = e), (n = void 0)),
            i || (i = !1);
          const a = t.split(" ");
          let l;
          for (let c = 0; c < this.length; c += 1) {
            const e = this[c];
            if (n)
              for (l = 0; l < a.length; l += 1) {
                const t = a[l];
                e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                  e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                  e.dom7LiveListeners[t].push({
                    listener: r,
                    proxyListener: s,
                  }),
                  e.addEventListener(t, s, i);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const t = a[l];
                e.dom7Listeners || (e.dom7Listeners = {}),
                  e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                  e.dom7Listeners[t].push({ listener: r, proxyListener: o }),
                  e.addEventListener(t, o, i);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, n, r, i] = e;
          "function" === typeof e[1] && (([t, r, i] = e), (n = void 0)),
            i || (i = !1);
          const s = t.split(" ");
          for (let o = 0; o < s.length; o += 1) {
            const e = s[o];
            for (let t = 0; t < this.length; t += 1) {
              const s = this[t];
              let o;
              if (
                (!n && s.dom7Listeners
                  ? (o = s.dom7Listeners[e])
                  : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[e]),
                o && o.length)
              )
                for (let t = o.length - 1; t >= 0; t -= 1) {
                  const n = o[t];
                  (r && n.listener === r) ||
                  (r &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === r)
                    ? (s.removeEventListener(e, n.proxyListener, i),
                      o.splice(t, 1))
                    : r ||
                      (s.removeEventListener(e, n.proxyListener, i),
                      o.splice(t, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = l(),
            n = e[0].split(" "),
            r = e[1];
          for (let i = 0; i < n.length; i += 1) {
            const s = n[i];
            for (let n = 0; n < this.length; n += 1) {
              const i = this[n];
              if (t.CustomEvent) {
                const n = new t.CustomEvent(s, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0,
                });
                (i.dom7EventData = e.filter((e, t) => t > 0)),
                  i.dispatchEvent(n),
                  (i.dom7EventData = []),
                  delete i.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function n(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = l();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = l(),
              t = o(),
              n = this[0],
              r = n.getBoundingClientRect(),
              i = t.body,
              s = n.clientTop || i.clientTop || 0,
              a = n.clientLeft || i.clientLeft || 0,
              c = n === e ? e.scrollY : n.scrollTop,
              d = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + c - s, left: r.left + d - a };
          }
          return null;
        },
        css: function (e, t) {
          const n = l();
          let r;
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (r = 0; r < this.length; r += 1)
                for (const t in e) this[r].style[t] = e[t];
              return this;
            }
            if (this[0])
              return n.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, n) => {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = l(),
            n = o(),
            r = this[0];
          let i, s;
          if (!r || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (r.matches) return r.matches(e);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
            if (r.msMatchesSelector) return r.msMatchesSelector(e);
            for (i = f(e), s = 0; s < i.length; s += 1)
              if (i[s] === r) return !0;
            return !1;
          }
          if (e === n) return r === n;
          if (e === t) return r === t;
          if (e.nodeType || e instanceof c) {
            for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
              if (i[s] === r) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          const t = this.length;
          if (e > t - 1) return f([]);
          if (e < 0) {
            const n = t + e;
            return f(n < 0 ? [] : [this[n]]);
          }
          return f([this[e]]);
        },
        append: function (...e) {
          let t;
          const n = o();
          for (let r = 0; r < e.length; r += 1) {
            t = e[r];
            for (let e = 0; e < this.length; e += 1)
              if ("string" === typeof t) {
                const r = n.createElement("div");
                for (r.innerHTML = t; r.firstChild; )
                  this[e].appendChild(r.firstChild);
              } else if (t instanceof c)
                for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = o();
          let n, r;
          for (n = 0; n < this.length; n += 1)
            if ("string" === typeof e) {
              const i = t.createElement("div");
              for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
                this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
            } else if (e instanceof c)
              for (r = 0; r < e.length; r += 1)
                this[n].insertBefore(e[r], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                f(this[0].nextElementSibling).is(e)
                ? f([this[0].nextElementSibling])
                : f([])
              : this[0].nextElementSibling
              ? f([this[0].nextElementSibling])
              : f([])
            : f([]);
        },
        nextAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return f([]);
          for (; n.nextElementSibling; ) {
            const r = n.nextElementSibling;
            e ? f(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return f(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && f(t.previousElementSibling).is(e)
                ? f([t.previousElementSibling])
                : f([])
              : t.previousElementSibling
              ? f([t.previousElementSibling])
              : f([]);
          }
          return f([]);
        },
        prevAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return f([]);
          for (; n.previousElementSibling; ) {
            const r = n.previousElementSibling;
            e ? f(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return f(t);
        },
        parent: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? f(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return f(t);
        },
        parents: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let r = this[n].parentNode;
            for (; r; )
              e ? f(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          }
          return f(t);
        },
        closest: function (e) {
          let t = this;
          return "undefined" === typeof e
            ? f([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n].querySelectorAll(e);
            for (let e = 0; e < r.length; e += 1) t.push(r[e]);
          }
          return f(t);
        },
        children: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n].children;
            for (let n = 0; n < r.length; n += 1)
              (e && !f(r[n]).is(e)) || t.push(r[n]);
          }
          return f(t);
        },
        filter: function (e) {
          return f(u(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(m).forEach((e) => {
        Object.defineProperty(f.fn, e, { value: m[e], writable: !0 });
      });
      var g = f;
      function v(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function b() {
        return Date.now();
      }
      function y(e, t) {
        void 0 === t && (t = "x");
        const n = l();
        let r, i, s;
        const o = (function (e) {
          const t = l();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((i = o.transform || o.webkitTransform),
              i.split(",").length > 6 &&
                (i = i
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (s = new n.WebKitCSSMatrix("none" === i ? "" : i)))
            : ((s =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (r = s.toString().split(","))),
          "x" === t &&
            (i = n.WebKitCSSMatrix
              ? s.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          "y" === t &&
            (i = n.WebKitCSSMatrix
              ? s.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          i || 0
        );
      }
      function w(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function x(e) {
        return "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function T() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (void 0 !== r && null !== r && !x(r)) {
            const n = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, i = n.length; t < i; t += 1) {
              const i = n[t],
                s = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== s &&
                s.enumerable &&
                (w(e[i]) && w(r[i])
                  ? r[i].__swiper__
                    ? (e[i] = r[i])
                    : T(e[i], r[i])
                  : !w(e[i]) && w(r[i])
                  ? ((e[i] = {}),
                    r[i].__swiper__ ? (e[i] = r[i]) : T(e[i], r[i]))
                  : (e[i] = r[i]));
            }
          }
        }
        return e;
      }
      function S(e, t, n) {
        e.style.setProperty(t, n);
      }
      function C(e) {
        let { swiper: t, targetPosition: n, side: r } = e;
        const i = l(),
          s = -t.translate;
        let o,
          a = null;
        const c = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(t.cssModeFrameID);
        const d = n > s ? "next" : "prev",
          u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
          f = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / c, 1), 0),
              l = 0.5 - Math.cos(e * Math.PI) / 2;
            let d = s + l * (n - s);
            if ((u(d, n) && (d = n), t.wrapperEl.scrollTo({ [r]: d }), u(d, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [r]: d });
                }),
                void i.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = i.requestAnimationFrame(f);
          };
        f();
      }
      let E, M, P;
      function O() {
        return (
          E ||
            (E = (function () {
              const e = l(),
                t = o();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const n = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (n) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          E
        );
      }
      function k(e) {
        return (
          void 0 === e && (e = {}),
          M ||
            (M = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = O(),
                r = l(),
                i = r.navigator.platform,
                s = t || r.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = r.screen.width,
                c = r.screen.height,
                d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = s.match(/(iPad).*OS\s([\d_]+)/);
              const f = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
              let m = "MacIntel" === i;
              return (
                !u &&
                  m &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${c}`) >= 0 &&
                  ((u = s.match(/(Version)\/([\d.]+)/)),
                  u || (u = [0, 1, "13_0_0"]),
                  (m = !1)),
                d && !h && ((o.os = "android"), (o.android = !0)),
                (u || p || f) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          M
        );
      }
      function _() {
        return (
          P ||
            (P = (function () {
              const e = l();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          P
        );
      }
      var L = {
        on(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          const i = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][i](t);
            }),
            r
          );
        },
        once(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
              s[o] = arguments[o];
            t.apply(r, s);
          }
          return (i.__emitterProxy = t), r.on(e, i, n);
        },
        onAny(e, t) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          const r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((r, i) => {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(i, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, n, r;
          for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
            s[o] = arguments[o];
          "string" === typeof s[0] || Array.isArray(s[0])
            ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
            : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
            n.unshift(r);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(r, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(r, n);
                  });
            }),
            e
          );
        },
      };
      var D = {
        updateSize: function () {
          const e = this;
          let t, n;
          const r = e.$el;
          (t =
            "undefined" !== typeof e.params.width && null !== e.params.width
              ? e.params.width
              : r[0].clientWidth),
            (n =
              "undefined" !== typeof e.params.height && null !== e.params.height
                ? e.params.height
                : r[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (n =
                n -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          const r = e.params,
            { $wrapperEl: i, size: s, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && r.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = i.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let f = [];
          const p = [],
            h = [];
          let m = r.slidesOffsetBefore;
          "function" === typeof m && (m = r.slidesOffsetBefore.call(e));
          let g = r.slidesOffsetAfter;
          "function" === typeof g && (g = r.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = r.spaceBetween,
            w = -m,
            x = 0,
            T = 0;
          if ("undefined" === typeof s) return;
          "string" === typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * s),
            (e.virtualSize = -y),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            r.centeredSlides &&
              r.cssMode &&
              (S(e.wrapperEl, "--swiper-centered-offset-before", ""),
              S(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const C = r.grid && r.grid.rows > 1 && e.grid;
          let E;
          C && e.grid.initSlides(u);
          const M =
            "auto" === r.slidesPerView &&
            r.breakpoints &&
            Object.keys(r.breakpoints).filter(
              (e) => "undefined" !== typeof r.breakpoints[e].slidesPerView
            ).length > 0;
          for (let S = 0; S < u; S += 1) {
            E = 0;
            const i = d.eq(S);
            if (
              (C && e.grid.updateSlide(S, i, u, t), "none" !== i.css("display"))
            ) {
              if ("auto" === r.slidesPerView) {
                M && (d[S].style[t("width")] = "");
                const s = getComputedStyle(i[0]),
                  o = i[0].style.transform,
                  a = i[0].style.webkitTransform;
                if (
                  (o && (i[0].style.transform = "none"),
                  a && (i[0].style.webkitTransform = "none"),
                  r.roundLengths)
                )
                  E = e.isHorizontal() ? i.outerWidth(!0) : i.outerHeight(!0);
                else {
                  const e = n(s, "width"),
                    t = n(s, "padding-left"),
                    r = n(s, "padding-right"),
                    o = n(s, "margin-left"),
                    a = n(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) E = e + o + a;
                  else {
                    const { clientWidth: n, offsetWidth: s } = i[0];
                    E = e + t + r + o + a + (s - n);
                  }
                }
                o && (i[0].style.transform = o),
                  a && (i[0].style.webkitTransform = a),
                  r.roundLengths && (E = Math.floor(E));
              } else
                (E = (s - (r.slidesPerView - 1) * y) / r.slidesPerView),
                  r.roundLengths && (E = Math.floor(E)),
                  d[S] && (d[S].style[t("width")] = `${E}px`);
              d[S] && (d[S].swiperSlideSize = E),
                h.push(E),
                r.centeredSlides
                  ? ((w = w + E / 2 + x / 2 + y),
                    0 === x && 0 !== S && (w = w - s / 2 - y),
                    0 === S && (w = w - s / 2 - y),
                    Math.abs(w) < 0.001 && (w = 0),
                    r.roundLengths && (w = Math.floor(w)),
                    T % r.slidesPerGroup === 0 && f.push(w),
                    p.push(w))
                  : (r.roundLengths && (w = Math.floor(w)),
                    (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                      e.params.slidesPerGroup ===
                      0 && f.push(w),
                    p.push(w),
                    (w = w + E + y)),
                (e.virtualSize += E + y),
                (x = E),
                (T += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + g),
            o &&
              a &&
              ("slide" === r.effect || "coverflow" === r.effect) &&
              i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
            r.setWrapperSize &&
              i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
            C && e.grid.updateWrapperSize(E, f, t),
            !r.centeredSlides)
          ) {
            const t = [];
            for (let n = 0; n < f.length; n += 1) {
              let i = f[n];
              r.roundLengths && (i = Math.floor(i)),
                f[n] <= e.virtualSize - s && t.push(i);
            }
            (f = t),
              Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
                f.push(e.virtualSize - s);
          }
          if ((0 === f.length && (f = [0]), 0 !== r.spaceBetween)) {
            const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !r.cssMode || t !== d.length - 1).css({
              [n]: `${y}px`,
            });
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t) => {
              e += t + (r.spaceBetween ? r.spaceBetween : 0);
            }),
              (e -= r.spaceBetween);
            const t = e - s;
            f = f.map((e) => (e < 0 ? -m : e > t ? t + g : e));
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            if (
              (h.forEach((t) => {
                e += t + (r.spaceBetween ? r.spaceBetween : 0);
              }),
              (e -= r.spaceBetween),
              e < s)
            ) {
              const t = (s - e) / 2;
              f.forEach((e, n) => {
                f[n] = e - t;
              }),
                p.forEach((e, n) => {
                  p[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: f,
              slidesGrid: p,
              slidesSizesGrid: h,
            }),
            r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
          ) {
            S(e.wrapperEl, "--swiper-centered-offset-before", -f[0] + "px"),
              S(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - h[h.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            f.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            p.length !== b && e.emit("slidesGridLengthChange"),
            r.watchSlidesProgress && e.updateSlidesOffset(),
            !l && !r.cssMode && ("slide" === r.effect || "fade" === r.effect))
          ) {
            const t = `${r.containerModifierClass}backface-hidden`,
              n = e.$el.hasClass(t);
            u <= r.maxBackfaceHiddenSlides
              ? n || e.$el.addClass(t)
              : n && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            r = t.virtual && t.params.virtual.enabled;
          let i,
            s = 0;
          "number" === typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            r
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || g([])).each((e) => {
                n.push(e);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !r) break;
                n.push(o(e));
              }
          else n.push(o(t.activeIndex));
          for (i = 0; i < n.length; i += 1)
            if ("undefined" !== typeof n[i]) {
              const e = n[i].offsetHeight;
              s = e > s ? e : s;
            }
          (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let n = 0; n < t.length; n += 1)
            t[n].swiperSlideOffset = e.isHorizontal()
              ? t[n].offsetLeft
              : t[n].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: r, rtlTranslate: i, snapGrid: s } = t;
          if (0 === r.length) return;
          "undefined" === typeof r[0].swiperSlideOffset &&
            t.updateSlidesOffset();
          let o = -e;
          i && (o = e),
            r.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let a = 0; a < r.length; a += 1) {
            const e = r[a];
            let l = e.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
            const c =
                (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (e.swiperSlideSize + n.spaceBetween),
              d =
                (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (e.swiperSlideSize + n.spaceBetween),
              u = -(o - l),
              f = u + t.slidesSizesGrid[a];
            ((u >= 0 && u < t.size - 1) ||
              (f > 1 && f <= t.size) ||
              (u <= 0 && f >= t.size)) &&
              (t.visibleSlides.push(e),
              t.visibleSlidesIndexes.push(a),
              r.eq(a).addClass(n.slideVisibleClass)),
              (e.progress = i ? -c : c),
              (e.originalProgress = i ? -d : d);
          }
          t.visibleSlides = g(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if ("undefined" === typeof e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: s, isEnd: o } = t;
          const a = s,
            l = o;
          0 === r
            ? ((i = 0), (s = !0), (o = !0))
            : ((i = (e - t.minTranslate()) / r), (s = i <= 0), (o = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: s, isEnd: o }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !s) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: n,
              $wrapperEl: r,
              activeIndex: i,
              realIndex: s,
            } = e,
            o = e.virtual && n.virtual.enabled;
          let a;
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${i}"]`
                )
              : t.eq(i)),
            a.addClass(n.slideActiveClass),
            n.loop &&
              (a.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : r
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(n.slideNextClass));
          let c = a
            .prevAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: r,
              snapGrid: i,
              params: s,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if ("undefined" === typeof d) {
            for (let e = 0; e < r.length; e += 1)
              "undefined" !== typeof r[e + 1]
                ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2
                  ? (d = e)
                  : n >= r[e] && n < r[e + 1] && (d = e + 1)
                : n >= r[e] && (d = e);
            s.normalizeSlideIndex &&
              (d < 0 || "undefined" === typeof d) &&
              (d = 0);
          }
          if (i.indexOf(n) >= 0) c = i.indexOf(n);
          else {
            const e = Math.min(s.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / s.slidesPerGroup);
          }
          if ((c >= i.length && (c = i.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            r = g(e).closest(`.${n.slideClass}`)[0];
          let i,
            s = !1;
          if (r)
            for (let o = 0; o < t.slides.length; o += 1)
              if (t.slides[o] === r) {
                (s = !0), (i = o);
                break;
              }
          if (!r || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = r),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  g(r).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = i),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      var A = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: r,
            $wrapperEl: i,
          } = this;
          if (t.virtualTranslate) return n ? -r : r;
          if (t.cssMode) return r;
          let s = y(i[0], e);
          return n && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            {
              rtlTranslate: r,
              params: i,
              $wrapperEl: s,
              wrapperEl: o,
              progress: a,
            } = n;
          let l,
            c = 0,
            d = 0;
          n.isHorizontal() ? (c = r ? -e : e) : (d = e),
            i.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            i.cssMode
              ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -c : -d)
              : i.virtualTranslate ||
                s.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? c : d);
          const u = n.maxTranslate() - n.minTranslate();
          (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
            l !== a && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          const s = this,
            { params: o, wrapperEl: a } = s;
          if (s.animating && o.preventInteractionOnTransition) return !1;
          const l = s.minTranslate(),
            c = s.maxTranslate();
          let d;
          if (
            ((d = r && e > l ? l : r && e < c ? c : e),
            s.updateProgress(d),
            o.cssMode)
          ) {
            const e = s.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!s.support.smoothScroll)
                return (
                  C({
                    swiper: s,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (s.setTransition(0),
                s.setTranslate(d),
                n &&
                  (s.emit("beforeTransitionStart", t, i),
                  s.emit("transitionEnd")))
              : (s.setTransition(t),
                s.setTranslate(d),
                n &&
                  (s.emit("beforeTransitionStart", t, i),
                  s.emit("transitionStart")),
                s.animating ||
                  ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                    (s.onTranslateToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        (s.onTranslateToWrapperTransitionEnd = null),
                        delete s.onTranslateToWrapperTransitionEnd,
                        n && s.emit("transitionEnd"));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function I(e) {
        let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
        const { activeIndex: s, previousIndex: o } = t;
        let a = r;
        if (
          (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
          t.emit(`transition${i}`),
          n && s !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`),
            "next" === a
              ? t.emit(`slideNextTransition${i}`)
              : t.emit(`slidePrevTransition${i}`);
        }
      }
      var N = {
        slideTo: function (e, t, n, r, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" !== typeof e && "string" !== typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" === typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const s = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: f,
            wrapperEl: p,
            enabled: h,
          } = s;
          if (
            (s.animating && a.preventInteractionOnTransition) ||
            (!h && !r && !i)
          )
            return !1;
          const m = Math.min(s.params.slidesPerGroupSkip, o);
          let g = m + Math.floor((o - m) / s.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              n &&
              s.emit("beforeSlideChangeStart");
          const v = -l[g];
          if ((s.updateProgress(v), a.normalizeSlideIndex))
            for (let y = 0; y < c.length; y += 1) {
              const e = -Math.floor(100 * v),
                t = Math.floor(100 * c[y]),
                n = Math.floor(100 * c[y + 1]);
              "undefined" !== typeof c[y + 1]
                ? e >= t && e < n - (n - t) / 2
                  ? (o = y)
                  : e >= t && e < n && (o = y + 1)
                : e >= t && (o = y);
            }
          if (s.initialized && o !== u) {
            if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              v > s.translate &&
              v > s.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            ((b = o > u ? "next" : o < u ? "prev" : "reset"),
            (f && -v === s.translate) || (!f && v === s.translate))
          )
            return (
              s.updateActiveIndex(o),
              a.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== a.effect && s.setTranslate(v),
              "reset" !== b && (s.transitionStart(n, b), s.transitionEnd(n, b)),
              !1
            );
          if (a.cssMode) {
            const e = s.isHorizontal(),
              n = f ? v : -v;
            if (0 === t) {
              const t = s.virtual && s.params.virtual.enabled;
              t &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                (p[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (s.wrapperEl.style.scrollSnapType = ""),
                      (s._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!s.support.smoothScroll)
                return (
                  C({ swiper: s, targetPosition: n, side: e ? "left" : "top" }),
                  !0
                );
              p.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            s.setTransition(t),
            s.setTranslate(v),
            s.updateActiveIndex(o),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, r),
            s.transitionStart(n, b),
            0 === t
              ? s.transitionEnd(n, b)
              : s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(n, b));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" === typeof e)
          ) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const i = this;
          let s = e;
          return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const r = this,
            { animating: i, enabled: s, params: o } = r;
          if (!s) return r;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (i && o.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return o.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const r = this,
            {
              params: i,
              animating: s,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = r;
          if (!c) return r;
          if (i.loop) {
            if (s && i.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? r.translate : -r.translate),
            f = o.map((e) => d(e));
          let p = o[f.indexOf(u) - 1];
          if ("undefined" === typeof p && i.cssMode) {
            let e;
            o.forEach((t, n) => {
              u >= t && (e = n);
            }),
              "undefined" !== typeof e && (p = o[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          if (
            ("undefined" !== typeof p &&
              ((h = a.indexOf(p)),
              h < 0 && (h = r.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            i.rewind && r.isBeginning)
          ) {
            const i =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(i, e, t, n);
          }
          return r.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          const i = this;
          let s = i.activeIndex;
          const o = Math.min(i.params.slidesPerGroupSkip, s),
            a = o + Math.floor((s - o) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[a]) {
            const e = i.snapGrid[a];
            l - e > (i.snapGrid[a + 1] - e) * r &&
              (s += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[a - 1];
            l - e <= (i.snapGrid[a] - e) * r && (s -= i.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, i.slidesGrid.length - 1)),
            i.slideTo(s, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e,
            r =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let i,
            s = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              g(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - r / 2 ||
                  s > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (s = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    v(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - r
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  v(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      };
      var $ = {
        loopCreate: function () {
          const e = this,
            t = o(),
            { params: n, $wrapperEl: r } = e,
            i = r.children().length > 0 ? g(r.children()[0].parentNode) : r;
          i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
          let s = i.children(`.${n.slideClass}`);
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
            if (e !== n.slidesPerGroup) {
              for (let r = 0; r < e; r += 1) {
                const e = g(t.createElement("div")).addClass(
                  `${n.slideClass} ${n.slideBlankClass}`
                );
                i.append(e);
              }
              s = i.children(`.${n.slideClass}`);
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > s.length &&
              e.params.loopedSlidesLimit &&
              (e.loopedSlides = s.length);
          const a = [],
            l = [];
          s.each((e, t) => {
            g(e).attr("data-swiper-slide-index", t);
          });
          for (let o = 0; o < e.loopedSlides; o += 1) {
            const e = o - Math.floor(o / s.length) * s.length;
            l.push(s.eq(e)[0]), a.unshift(s.eq(s.length - e - 1)[0]);
          }
          for (let o = 0; o < l.length; o += 1)
            i.append(g(l[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (let o = a.length - 1; o >= 0; o -= 1)
            i.prepend(g(a[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: r,
            allowSlidePrev: i,
            allowSlideNext: s,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < r) {
            (l = n.length - 3 * r + t), (l += r);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= n.length - r) {
            (l = -n.length + t + r), (l += r);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: n } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      };
      function j(e) {
        const t = this,
          n = o(),
          r = l(),
          i = t.touchEventsData,
          { params: s, touches: a, enabled: c } = t;
        if (!c) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let d = e;
        d.originalEvent && (d = d.originalEvent);
        let u = g(d.target);
        if ("wrapper" === s.touchEventsTarget && !u.closest(t.wrapperEl).length)
          return;
        if (
          ((i.isTouchEvent = "touchstart" === d.type),
          !i.isTouchEvent && "which" in d && 3 === d.which)
        )
          return;
        if (!i.isTouchEvent && "button" in d && d.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        !!s.noSwipingClass &&
          "" !== s.noSwipingClass &&
          d.target &&
          d.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (u = g(e.path[0]));
        const f = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          p = !(!d.target || !d.target.shadowRoot);
        if (
          s.noSwiping &&
          (p
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    if (!n || n === o() || n === l()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const r = n.closest(e);
                    return r || n.getRootNode
                      ? r || t(n.getRootNode().host)
                      : null;
                  })(t)
                );
              })(f, u[0])
            : u.closest(f)[0])
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !u.closest(s.swipeHandler)[0]) return;
        (a.currentX =
          "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
          (a.currentY =
            "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
        const h = a.currentX,
          m = a.currentY,
          v = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          y = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (v && (h <= y || h >= r.innerWidth - y)) {
          if ("prevent" !== v) return;
          e.preventDefault();
        }
        if (
          (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (a.startX = h),
          (a.startY = m),
          (i.touchStartTime = b()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (i.allowThresholdMove = !1),
          "touchstart" !== d.type)
        ) {
          let e = !0;
          u.is(i.focusableElements) &&
            ((e = !1), "SELECT" === u[0].nodeName && (i.isTouched = !1)),
            n.activeElement &&
              g(n.activeElement).is(i.focusableElements) &&
              n.activeElement !== u[0] &&
              n.activeElement.blur();
          const r = e && t.allowTouchMove && s.touchStartPreventDefault;
          (!s.touchStartForcePreventDefault && !r) ||
            u[0].isContentEditable ||
            d.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !s.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", d);
      }
      function z(e) {
        const t = o(),
          n = this,
          r = n.touchEventsData,
          { params: i, touches: s, rtlTranslate: a, enabled: l } = n;
        if (!l) return;
        let c = e;
        if ((c.originalEvent && (c = c.originalEvent), !r.isTouched))
          return void (
            r.startMoving &&
            r.isScrolling &&
            n.emit("touchMoveOpposite", c)
          );
        if (r.isTouchEvent && "touchmove" !== c.type) return;
        const d =
            "touchmove" === c.type &&
            c.targetTouches &&
            (c.targetTouches[0] || c.changedTouches[0]),
          u = "touchmove" === c.type ? d.pageX : c.pageX,
          f = "touchmove" === c.type ? d.pageY : c.pageY;
        if (c.preventedByNestedSwiper)
          return (s.startX = u), void (s.startY = f);
        if (!n.allowTouchMove)
          return (
            g(c.target).is(r.focusableElements) || (n.allowClick = !1),
            void (
              r.isTouched &&
              (Object.assign(s, {
                startX: u,
                startY: f,
                currentX: u,
                currentY: f,
              }),
              (r.touchStartTime = b()))
            )
          );
        if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (n.isVertical()) {
            if (
              (f < s.startY && n.translate <= n.maxTranslate()) ||
              (f > s.startY && n.translate >= n.minTranslate())
            )
              return (r.isTouched = !1), void (r.isMoved = !1);
          } else if (
            (u < s.startX && n.translate <= n.maxTranslate()) ||
            (u > s.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          r.isTouchEvent &&
          t.activeElement &&
          c.target === t.activeElement &&
          g(c.target).is(r.focusableElements)
        )
          return (r.isMoved = !0), void (n.allowClick = !1);
        if (
          (r.allowTouchCallbacks && n.emit("touchMove", c),
          c.targetTouches && c.targetTouches.length > 1)
        )
          return;
        (s.currentX = u), (s.currentY = f);
        const p = s.currentX - s.startX,
          h = s.currentY - s.startY;
        if (
          n.params.threshold &&
          Math.sqrt(p ** 2 + h ** 2) < n.params.threshold
        )
          return;
        if ("undefined" === typeof r.isScrolling) {
          let e;
          (n.isHorizontal() && s.currentY === s.startY) ||
          (n.isVertical() && s.currentX === s.startX)
            ? (r.isScrolling = !1)
            : p * p + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
              (r.isScrolling = n.isHorizontal()
                ? e > i.touchAngle
                : 90 - e > i.touchAngle));
        }
        if (
          (r.isScrolling && n.emit("touchMoveOpposite", c),
          "undefined" === typeof r.startMoving &&
            ((s.currentX === s.startX && s.currentY === s.startY) ||
              (r.startMoving = !0)),
          r.isScrolling)
        )
          return void (r.isTouched = !1);
        if (!r.startMoving) return;
        (n.allowClick = !1),
          !i.cssMode && c.cancelable && c.preventDefault(),
          i.touchMoveStopPropagation && !i.nested && c.stopPropagation(),
          r.isMoved ||
            (i.loop && !i.cssMode && n.loopFix(),
            (r.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating &&
              n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (r.allowMomentumBounce = !1),
            !i.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", c)),
          n.emit("sliderMove", c),
          (r.isMoved = !0);
        let m = n.isHorizontal() ? p : h;
        (s.diff = m),
          (m *= i.touchRatio),
          a && (m = -m),
          (n.swipeDirection = m > 0 ? "prev" : "next"),
          (r.currentTranslate = m + r.startTranslate);
        let v = !0,
          y = i.resistanceRatio;
        if (
          (i.touchReleaseOnEdges && (y = 0),
          m > 0 && r.currentTranslate > n.minTranslate()
            ? ((v = !1),
              i.resistance &&
                (r.currentTranslate =
                  n.minTranslate() -
                  1 +
                  (-n.minTranslate() + r.startTranslate + m) ** y))
            : m < 0 &&
              r.currentTranslate < n.maxTranslate() &&
              ((v = !1),
              i.resistance &&
                (r.currentTranslate =
                  n.maxTranslate() +
                  1 -
                  (n.maxTranslate() - r.startTranslate - m) ** y)),
          v && (c.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          i.threshold > 0)
        ) {
          if (!(Math.abs(m) > i.threshold || r.allowThresholdMove))
            return void (r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove)
            return (
              (r.allowThresholdMove = !0),
              (s.startX = s.currentX),
              (s.startY = s.currentY),
              (r.currentTranslate = r.startTranslate),
              void (s.diff = n.isHorizontal()
                ? s.currentX - s.startX
                : s.currentY - s.startY)
            );
        }
        i.followFinger &&
          !i.cssMode &&
          (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
            i.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          n.params.freeMode &&
            i.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(r.currentTranslate),
          n.setTranslate(r.currentTranslate));
      }
      function R(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: r,
            touches: i,
            rtlTranslate: s,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", l),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && r.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        r.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = b(),
          d = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((n.lastClickTime = b()),
          v(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === i.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let u;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (u = r.followFinger
            ? s
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          r.cssMode)
        )
          return;
        if (t.params.freeMode && r.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let f = 0,
          p = t.slidesSizesGrid[0];
        for (
          let v = 0;
          v < o.length;
          v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
        ) {
          const e = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
          "undefined" !== typeof o[v + e]
            ? u >= o[v] && u < o[v + e] && ((f = v), (p = o[v + e] - o[v]))
            : u >= o[v] && ((f = v), (p = o[o.length - 1] - o[o.length - 2]));
        }
        let h = null,
          m = null;
        r.rewind &&
          (t.isBeginning
            ? (m =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (h = 0));
        const g = (u - o[f]) / p,
          y = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (d > r.longSwipesMs) {
          if (!r.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (g >= r.longSwipesRatio
              ? t.slideTo(r.rewind && t.isEnd ? h : f + y)
              : t.slideTo(f)),
            "prev" === t.swipeDirection &&
              (g > 1 - r.longSwipesRatio
                ? t.slideTo(f + y)
                : null !== m && g < 0 && Math.abs(g) > r.longSwipesRatio
                ? t.slideTo(m)
                : t.slideTo(f));
        } else {
          if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(f + y)
              : t.slideTo(f)
            : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : f + y),
              "prev" === t.swipeDirection && t.slideTo(null !== m ? m : f));
        }
      }
      function B() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = i),
          (e.allowSlideNext = r),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function G(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function F() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
        if (!r) return;
        let i;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        (i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
          i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let H = !1;
      function W() {}
      const V = (e, t) => {
        const n = o(),
          {
            params: r,
            touchEvents: i,
            el: s,
            wrapperEl: a,
            device: l,
            support: c,
          } = e,
          d = !!r.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          f = t;
        if (c.touch) {
          const t = !(
            "touchstart" !== i.start ||
            !c.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          s[u](i.start, e.onTouchStart, t),
            s[u](
              i.move,
              e.onTouchMove,
              c.passiveListener ? { passive: !1, capture: d } : d
            ),
            s[u](i.end, e.onTouchEnd, t),
            i.cancel && s[u](i.cancel, e.onTouchEnd, t);
        } else
          s[u](i.start, e.onTouchStart, !1),
            n[u](i.move, e.onTouchMove, d),
            n[u](i.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          s[u]("click", e.onClick, !0),
          r.cssMode && a[u]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[f](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                B,
                !0
              )
            : e[f]("observerUpdate", B, !0);
      };
      var Y = {
        attachEvents: function () {
          const e = this,
            t = o(),
            { params: n, support: r } = e;
          (e.onTouchStart = j.bind(e)),
            (e.onTouchMove = z.bind(e)),
            (e.onTouchEnd = R.bind(e)),
            n.cssMode && (e.onScroll = F.bind(e)),
            (e.onClick = G.bind(e)),
            r.touch && !H && (t.addEventListener("touchstart", W), (H = !0)),
            V(e, "on");
        },
        detachEvents: function () {
          V(this, "off");
        },
      };
      const X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var q = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: n,
              loopedSlides: r = 0,
              params: i,
              $el: s,
            } = e,
            o = i.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = X(e, i),
            d = X(e, l),
            u = i.enabled;
          c && !d
            ? (s.removeClass(
                `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (s.addClass(`${i.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === i.grid.fill)) &&
                s.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const n = i[t] && i[t].enabled,
                r = l[t] && l[t].enabled;
              n && !r && e[t].disable(), !n && r && e[t].enable();
            });
          const f = l.direction && l.direction !== i.direction,
            p = i.loop && (l.slidesPerView !== i.slidesPerView || f);
          f && n && e.changeDirection(), T(e.params, l);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !h ? e.disable() : !u && h && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            p &&
              n &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - r + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
            return;
          let r = !1;
          const i = l(),
            s = "window" === t ? i.innerHeight : n.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" === typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: s * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let a = 0; a < o.length; a += 1) {
            const { point: e, value: s } = o[a];
            "window" === t
              ? i.matchMedia(`(min-width: ${s}px)`).matches && (r = e)
              : s <= n.clientWidth && (r = e);
          }
          return r || "max";
        },
      };
      var U = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: n,
              rtl: r,
              $el: i,
              device: s,
              support: o,
            } = e,
            a = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" === typeof e
                    ? Object.keys(e).forEach((r) => {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      var K = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function Z(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const r = Object.keys(n)[0],
            i = n[r];
          "object" === typeof i && null !== i
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in i
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" !== typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  T(t, n))
                : T(t, n))
            : T(t, n);
        };
      }
      const Q = {
          eventsEmitter: L,
          update: D,
          translate: A,
          transition: {
            setTransition: function (e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: r } = n;
              r.cssMode ||
                (r.autoHeight && n.updateAutoHeight(),
                I({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: r } = n;
              (n.animating = !1),
                r.cssMode ||
                  (n.setTransition(0),
                  I({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: N,
          loop: $,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: Y,
          breakpoints: q,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: r } = n;
              if (r) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                e.isLocked = e.size > n;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: U,
          images: {
            loadImage: function (e, t, n, r, i, s) {
              const o = l();
              let a;
              function c() {
                s && s();
              }
              g(e).parent("picture")[0] || (e.complete && i)
                ? c()
                : t
                ? ((a = new o.Image()),
                  (a.onload = c),
                  (a.onerror = c),
                  r && (a.sizes = r),
                  n && (a.srcset = n),
                  t && (a.src = t))
                : c();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                "undefined" !== typeof e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const r = e.imagesToLoad[n];
                e.loadImage(
                  r,
                  r.currentSrc || r.getAttribute("src"),
                  r.srcset || r.getAttribute("srcset"),
                  r.sizes || r.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        J = {};
      class ee {
        constructor() {
          let e, t;
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          if (
            (1 === r.length &&
            r[0].constructor &&
            "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
              ? (t = r[0])
              : ([e, t] = r),
            t || (t = {}),
            (t = T({}, t)),
            e && !t.el && (t.el = e),
            t.el && g(t.el).length > 1)
          ) {
            const e = [];
            return (
              g(t.el).each((n) => {
                const r = T({}, t, { el: n });
                e.push(new ee(r));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = O()),
            (s.device = k({ userAgent: t.userAgent })),
            (s.browser = _()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              s.modules.push(...t.modules);
          const o = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: Z(t, o),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const a = T({}, K, o);
          return (
            (s.params = T({}, a, J, t)),
            (s.originalParams = T({}, s.params)),
            (s.passedParams = T({}, t)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = g),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: e,
              classNames: [],
              slides: g(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: b(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = n.minTranslate(),
            i = (n.maxTranslate() - r) * e + r;
          n.translateTo(i, "undefined" === typeof t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n) => {
            const r = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: r,
            slidesGrid: i,
            slidesSizesGrid: s,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e,
              t = r[a].swiperSlideSize;
            for (let n = a + 1; n < r.length; n += 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let c = a + 1; c < r.length; c += 1) {
              (t ? i[c] + s[c] - i[a] < o : i[c] - i[a] < o) && (l += 1);
            }
          else
            for (let c = a - 1; c >= 0; c -= 1) {
              i[a] - i[c] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let i;
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (r(), e.params.autoHeight && e.updateAutoHeight())
              : ((i =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                i || r()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            r = n.params.direction;
          return (
            e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${r}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = g(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const r = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let i = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = g(e.shadowRoot.querySelector(r()));
              return (t.children = (e) => n.children(e)), t;
            }
            return n.children ? n.children(r()) : g(n).children(r());
          })();
          if (0 === i.length && t.params.createElements) {
            const e = o().createElement("div");
            (i = g(e)),
              (e.className = t.params.wrapperClass),
              n.append(e),
              n.children(`.${t.params.slideClass}`).each((e) => {
                i.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: n,
              el: e,
              $wrapperEl: i,
              wrapperEl: i[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
              wrongRTL: "-webkit-box" === i.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: r, $el: i, $wrapperEl: s, slides: o } = n;
          return (
            "undefined" === typeof n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              r.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                i.removeAttr("style"),
                s.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        r.slideVisibleClass,
                        r.slideActiveClass,
                        r.slideNextClass,
                        r.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (n) {}
                    try {
                      delete t[e];
                    } catch (n) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          T(J, e);
        }
        static get extendedDefaults() {
          return J;
        }
        static get defaults() {
          return K;
        }
        static installModule(e) {
          ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
          const t = ee.prototype.__modules__;
          "function" === typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => ee.installModule(e)), ee)
            : (ee.installModule(e), ee);
        }
      }
      Object.keys(Q).forEach((e) => {
        Object.keys(Q[e]).forEach((t) => {
          ee.prototype[t] = Q[e][t];
        });
      }),
        ee.use([
          function (e) {
            let { swiper: t, on: n, emit: r } = e;
            const i = l();
            let s = null,
              o = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              c = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && "undefined" !== typeof i.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((s = new ResizeObserver((e) => {
                    o = i.requestAnimationFrame(() => {
                      const { width: n, height: r } = t;
                      let i = n,
                        s = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: n,
                          contentRect: r,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((i = r ? r.width : (n[0] || n).inlineSize),
                          (s = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (i === n && s === r) || a();
                    });
                  })),
                  s.observe(t.el))
                : (i.addEventListener("resize", a),
                  i.addEventListener("orientationchange", c));
            }),
              n("destroy", () => {
                o && i.cancelAnimationFrame(o),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                  i.removeEventListener("resize", a),
                  i.removeEventListener("orientationchange", c);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: r, emit: i } = e;
            const s = [],
              o = l(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function () {
                      i("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                n.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  s.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      var te = ee;
    },
  },
]);
