!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 2));
})([
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = {
      dataAttr: "data-ccursor",
      noPadding: "noPadding",
      noParallax: "noParallax",
      lift: "lift",
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(5);
    Object.defineProperty(e, "addCursor", {
      enumerable: !0,
      get: function () {
        return n.default;
      },
    });
    var i = r(6);
    Object.defineProperty(e, "setStyles", {
      enumerable: !0,
      get: function () {
        return i.default;
      },
    });
    var s = r(7);
    Object.defineProperty(e, "getMoveIndex", {
      enumerable: !0,
      get: function () {
        return s.default;
      },
    });
    var a = r(8);
    Object.defineProperty(e, "isElHasProperty", {
      enumerable: !0,
      get: function () {
        return a.default;
      },
    });
    var o = r(9);
    Object.defineProperty(e, "getStyleProp", {
      enumerable: !0,
      get: function () {
        return o.default;
      },
    });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(3), r(4).default();
    var n = document.getElementById("darkmode-button"),
      i = document.getElementById("moon-icon"),
      s = "Dark Mode",
      a = "Light Mode";
    n.addEventListener("click", function (t) {
      n.getElementsByTagName("span")[0].textContent === s
        ? (n.getElementsByTagName("span")[0].textContent = a)
        : (n.getElementsByTagName("span")[0].textContent = s),
        document.body.classList.toggle("darkmode"),
        i.classList.toggle("moon-icon_active");
    });
  },
  function (t, e, r) {},
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      i = r(10),
      s = r(0);
    e.default = function (t) {
      void 0 === t && (t = {}),
        (t = {
          radius: t.radius || 20,
          transitionSpeed: t.transitionSpeed || 0.2,
          parallaxIndex: t.parallaxIndex || 10,
          hoverPadding: t.hoverPadding || 6,
        }),
        n.setStyles();
      var e = n.addCursor(t);
      window.onload = function () {
        var r = document.querySelectorAll("[" + s.default.dataAttr + "]");
        i.default(e, t, r);
      };
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = function (t) {
      if (t) {
        var e = document.createElement("div");
        return (
          e.setAttribute(
            "style",
            "transform: translate(-200px, -200px); height: " +
              t.radius +
              "px; width: " +
              t.radius +
              "px;"
          ),
          e.setAttribute("class", "c-cursor"),
          document.body.prepend(e),
          e
        );
      }
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = function () {
      var t = document.createElement("style");
      (t.type = "text/css"),
        (t.innerText =
          "\n:root {\n  --main-cursor-clr: rgb(0, 0, 0, 0.2);\n  --main-cursor-hover-clr: rgb(0, 0, 0, 0.07);\n  --ghost-shadow: 0 7px 15px rgba(0, 0, 0, 0.14); }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n.c-cursor {\n  position: fixed;\n  z-index: 9999;\n  pointer-events: none;\n  border-radius: 200px;\n  background-color: var(--main-cursor-clr);\n  transition: background-color 0.2s ease-in-out;\n}\n\n.c-cursor_active {\n  background-color: var(--main-cursor-hover-clr);\n}\n\n.c-cursor-lift_active {\n  background-color: rgba(0,0,0,0);\n}\n"),
        document.head.appendChild(t);
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = function (t, e, r, n) {
      return (t - e - r / 2) / n;
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0);
    e.default = function (t, e) {
      return !!t.getAttribute(n.default.dataAttr).includes(e);
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = function (t) {
      return getComputedStyle(document.documentElement).getPropertyValue(t);
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(11),
      i = r(1),
      s = r(0);
    e.default = function (t, e, r) {
      var a = { cursor: e.parallaxIndex, target: 1.5 * e.parallaxIndex },
        o = !1,
        u = null,
        l = function (r) {
          (o = !1),
            t.classList.remove("c-cursor_active"),
            t.classList.remove("c-cursor-lift_active"),
            n.TweenLite.to(t, e.transitionSpeed, {
              x: r.clientX - e.radius / 2,
              y: r.clientY - e.radius / 2,
              width: e.radius,
              height: e.radius,
              borderRadius: "100px",
              scale: 1,
              backgroundImage: "none",
              filter: "blur(0px)",
            }),
            n.TweenLite.to(u, e.transitionSpeed, {
              x: 0,
              y: 0,
              scale: 1,
              boxShadow: "0 7px 15px rgba(0,0,0,0.0)",
            });
        };
      document.addEventListener("mousewheel", function (t) {
        l(t);
      }),
        document.addEventListener("mousemove", function (r) {
          !(function (r) {
            if (o) {
              var l = Number(
                window.getComputedStyle(u).borderRadius.slice(0, -2)
              );
              i.isElHasProperty(u, s.default.lift)
                ? (n.TweenLite.to(u, e.transitionSpeed, {
                    x: i.getMoveIndex(
                      r.clientX,
                      u.getBoundingClientRect().left,
                      u.clientWidth,
                      a.target
                    ),
                    y: i.getMoveIndex(
                      r.clientY,
                      u.getBoundingClientRect().top,
                      u.clientHeight,
                      a.target
                    ),
                    scale: 1.1,
                    boxShadow: i.getStyleProp("--ghost-shadow"),
                  }),
                  n.TweenLite.to(t, e.transitionSpeed, {
                    filter: "blur(8px)",
                    x:
                      u.getBoundingClientRect().left +
                      (r.clientX -
                        u.getBoundingClientRect().left -
                        u.clientWidth / 2) /
                        a.cursor,
                    y:
                      u.getBoundingClientRect().top +
                      (r.clientY -
                        u.getBoundingClientRect().top -
                        u.clientHeight / 2) /
                        a.cursor,
                    backgroundImage:
                      "radial-gradient(circle at " +
                      (r.clientX - u.getBoundingClientRect().left) +
                      "px " +
                      (r.clientY - u.getBoundingClientRect().top) +
                      "px, rgba(255,255,255,0.4), rgba(255,255,255,0))",
                  }))
                : (n.TweenLite.to(t, e.transitionSpeed, {
                    x:
                      u.getBoundingClientRect().left -
                      (i.isElHasProperty(u, s.default.noPadding)
                        ? null
                        : e.hoverPadding) +
                      (i.isElHasProperty(u, s.default.noParallax)
                        ? 0
                        : (r.clientX -
                            u.getBoundingClientRect().left -
                            u.clientWidth / 2) /
                          a.cursor),
                    y:
                      u.getBoundingClientRect().top -
                      (i.isElHasProperty(u, s.default.noPadding)
                        ? null
                        : e.hoverPadding) +
                      (i.isElHasProperty(u, s.default.noParallax)
                        ? 0
                        : (r.clientY -
                            u.getBoundingClientRect().top -
                            u.clientHeight / 2) /
                          a.cursor),
                    borderRadius:
                      l * (i.isElHasProperty(u, s.default.noPadding) ? 1 : 1.5),
                    width:
                      u.clientWidth +
                      (i.isElHasProperty(u, s.default.noPadding)
                        ? null
                        : 2 * e.hoverPadding),
                    height:
                      u.clientHeight +
                      (i.isElHasProperty(u, s.default.noPadding)
                        ? null
                        : 2 * e.hoverPadding),
                  }),
                  i.isElHasProperty(u, s.default.noParallax) ||
                    n.TweenLite.to(u, e.transitionSpeed, {
                      x: -i.getMoveIndex(
                        r.clientX,
                        u.getBoundingClientRect().left,
                        u.clientWidth,
                        a.target
                      ),
                      y: -i.getMoveIndex(
                        r.clientY,
                        u.getBoundingClientRect().top,
                        u.clientHeight,
                        a.target
                      ),
                    }));
            } else n.TweenLite.to(t, e.transitionSpeed, { x: r.clientX - e.radius / 2, y: r.clientY - e.radius / 2 });
          })(r);
        }),
        r.forEach(function (r) {
          r.addEventListener("mouseenter", function (r) {
            !(function (r) {
              (o = !0), (u = r.target);
              var a = Number(
                window.getComputedStyle(u).borderRadius.slice(0, -2)
              );
              i.isElHasProperty(u, s.default.lift)
                ? (t.classList.add("c-cursor-lift_active"),
                  n.TweenLite.to(t, e.transitionSpeed, {
                    borderRadius: a,
                    width: u.clientWidth,
                    height: u.clientHeight,
                    scale: 1.1,
                  }))
                : t.classList.add("c-cursor_active");
            })(r);
          });
        }),
        r.forEach(function (t) {
          t.addEventListener("mouseleave", function (t) {
            l(t);
          });
        });
    };
  },
  function (t, e, r) {
    "use strict";
    function n(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function i(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    /*!
     * GSAP 3.4.2
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ r.r(e),
      r.d(e, "gsap", function () {
        return Xn;
      }),
      r.d(e, "default", function () {
        return Xn;
      }),
      r.d(e, "CSSPlugin", function () {
        return Yn;
      }),
      r.d(e, "TweenMax", function () {
        return Nn;
      }),
      r.d(e, "TweenLite", function () {
        return Ve;
      }),
      r.d(e, "TimelineMax", function () {
        return Le;
      }),
      r.d(e, "TimelineLite", function () {
        return Le;
      }),
      r.d(e, "Power0", function () {
        return yr;
      }),
      r.d(e, "Power1", function () {
        return xr;
      }),
      r.d(e, "Power2", function () {
        return br;
      }),
      r.d(e, "Power3", function () {
        return wr;
      }),
      r.d(e, "Power4", function () {
        return Tr;
      }),
      r.d(e, "Linear", function () {
        return Pr;
      }),
      r.d(e, "Quad", function () {
        return Mr;
      }),
      r.d(e, "Cubic", function () {
        return Or;
      }),
      r.d(e, "Quart", function () {
        return Cr;
      }),
      r.d(e, "Quint", function () {
        return kr;
      }),
      r.d(e, "Strong", function () {
        return Sr;
      }),
      r.d(e, "Elastic", function () {
        return Ar;
      }),
      r.d(e, "Back", function () {
        return Er;
      }),
      r.d(e, "SteppedEase", function () {
        return Dr;
      }),
      r.d(e, "Bounce", function () {
        return Rr;
      }),
      r.d(e, "Sine", function () {
        return zr;
      }),
      r.d(e, "Expo", function () {
        return Br;
      }),
      r.d(e, "Circ", function () {
        return Fr;
      });
    var s,
      a,
      o,
      u,
      l,
      h,
      f,
      c,
      d,
      p,
      _,
      g,
      m,
      v,
      y,
      x,
      b,
      w,
      T,
      P,
      M,
      O,
      C,
      k,
      S,
      A = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      E = { duration: 0.5, overwrite: !1, delay: 0 },
      D = 2 * Math.PI,
      R = D / 4,
      z = 0,
      B = Math.sqrt,
      F = Math.cos,
      L = Math.sin,
      I = function (t) {
        return "string" == typeof t;
      },
      j = function (t) {
        return "function" == typeof t;
      },
      Y = function (t) {
        return "number" == typeof t;
      },
      X = function (t) {
        return void 0 === t;
      },
      N = function (t) {
        return "object" == typeof t;
      },
      U = function (t) {
        return !1 !== t;
      },
      H = function () {
        return "undefined" != typeof window;
      },
      q = function (t) {
        return j(t) || I(t);
      },
      V = Array.isArray,
      W = /(?:-?\.?\d|\.)+/gi,
      Q = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      G = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Z = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      $ = /\(([^()]+)\)/i,
      J = /[+-]=-?[\.\d]+/,
      K = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      tt = {},
      et = {},
      rt = function (t) {
        return (et = kt(t, tt)) && hr;
      },
      nt = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      it = function (t, e) {
        return !e && console.warn(t);
      },
      st = function (t, e) {
        return (t && (tt[t] = e) && et && (et[t] = e)) || tt;
      },
      at = function () {
        return 0;
      },
      ot = {},
      ut = [],
      lt = {},
      ht = {},
      ft = {},
      ct = 30,
      dt = [],
      pt = "",
      _t = function (t) {
        var e,
          r,
          n = t[0];
        if ((N(n) || j(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
          for (r = dt.length; r-- && !dt[r].targetTest(n); );
          e = dt[r];
        }
        for (r = t.length; r--; )
          (t[r] && (t[r]._gsap || (t[r]._gsap = new Be(t[r], e)))) ||
            t.splice(r, 1);
        return t;
      },
      gt = function (t) {
        return t._gsap || _t(ee(t))[0]._gsap;
      },
      mt = function (t, e) {
        var r = t[e];
        return j(r) ? t[e]() : (X(r) && t.getAttribute(e)) || r;
      },
      vt = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      yt = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      xt = function (t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
        return n < r;
      },
      bt = function (t, e, r) {
        var n,
          i = Y(t[1]),
          s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
          a = t[s];
        if ((i && (a.duration = t[1]), (a.parent = r), e)) {
          for (n = a; r && !("immediateRender" in n); )
            (n = r.vars.defaults || {}), (r = U(r.vars.inherit) && r.parent);
          (a.immediateRender = U(n.immediateRender)),
            e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
        }
        return a;
      },
      wt = function () {
        var t,
          e,
          r = ut.length,
          n = ut.slice(0);
        for (lt = {}, ut.length = 0, t = 0; t < r; t++)
          (e = n[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      Tt = function (t, e, r, n) {
        ut.length && wt(), t.render(e, r, n), ut.length && wt();
      },
      Pt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(K).length < 2 ? e : t;
      },
      Mt = function (t) {
        return t;
      },
      Ot = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      Ct = function (t, e) {
        for (var r in e)
          r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
      },
      kt = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      St = function t(e, r) {
        for (var n in r) e[n] = N(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n];
        return e;
      },
      At = function (t, e) {
        var r,
          n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n;
      },
      Et = function (t) {
        var e = t.parent || s,
          r = t.keyframes ? Ct : Ot;
        if (U(t.inherit))
          for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
        return t;
      },
      Dt = function (t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
          s = e._next;
        i ? (i._next = s) : t[r] === e && (t[r] = s),
          s ? (s._prev = i) : t[n] === e && (t[n] = i),
          (e._next = e._prev = e.parent = null);
      },
      Rt = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
          (t._act = 0);
      },
      zt = function (t) {
        for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
        return t;
      },
      Bt = function (t) {
        for (var e = t.parent; e && e.parent; )
          (e._dirty = 1), e.totalDuration(), (e = e.parent);
        return t;
      },
      Ft = function (t) {
        return t._repeat ? Lt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      Lt = function (t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
      },
      It = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      jt = function (t) {
        return (t._end = yt(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
        ));
      },
      Yt = function (t, e) {
        var r = t._dp;
        return (
          r &&
            r.smoothChildTiming &&
            t._ts &&
            ((t._start = yt(
              t._dp._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
            )),
            jt(t),
            r._dirty || zt(r)),
          t
        );
      },
      Xt = function (t, e) {
        var r;
        if (
          ((e._time || (e._initted && !e._dur)) &&
            ((r = It(t.rawTime(), e)),
            (!e._dur || Zt(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
              e.render(r, !0)),
          zt(t)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (r = t; r._dp; )
              r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
          t._zTime = -1e-8;
        }
      },
      Nt = function (t, e, r, n) {
        return (
          e.parent && Rt(e),
          (e._start = yt(r + e._delay)),
          (e._end = yt(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
          )),
          (function (t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var s,
              a = t[n];
            if (i) for (s = e[i]; a && a[i] > s; ) a = a._prev;
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[r]), (t[r] = e)),
              e._next ? (e._next._prev = e) : (t[n] = e),
              (e._prev = a),
              (e.parent = e._dp = t);
          })(t, e, "_first", "_last", t._sort ? "_start" : 0),
          (t._recent = e),
          n || Xt(t, e),
          t
        );
      },
      Ut = function (t, e) {
        return (
          (tt.ScrollTrigger || nt("scrollTrigger", e)) &&
          tt.ScrollTrigger.create(e, t)
        );
      },
      Ht = function (t, e, r, n) {
        return (
          Ne(t, e),
          t._initted
            ? !r &&
              t._pt &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              h !== we.frame
              ? (ut.push(t), (t._lazy = [e, n]), 1)
              : void 0
            : 1
        );
      },
      qt = function (t, e, r) {
        var n = t._repeat,
          i = yt(e) || 0;
        return (
          (t._dur = i),
          (t._tDur = n ? (n < 0 ? 1e10 : yt(i * (n + 1) + t._rDelay * n)) : i),
          t._time > i &&
            ((t._time = i), (t._tTime = Math.min(t._tTime, t._tDur))),
          !r && zt(t.parent),
          t.parent && jt(t),
          t
        );
      },
      Vt = function (t) {
        return t instanceof Le ? zt(t) : qt(t, t._dur);
      },
      Wt = { _start: 0, endTime: at },
      Qt = function t(e, r) {
        var n,
          i,
          s = e.labels,
          a = e._recent || Wt,
          o = e.duration() >= 1e8 ? a.endTime(!1) : e._dur;
        return I(r) && (isNaN(r) || r in s)
          ? "<" === (n = r.charAt(0)) || ">" === n
            ? ("<" === n ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0)
            : (n = r.indexOf("=")) < 0
            ? (r in s || (s[r] = o), s[r])
            : ((i = +(r.charAt(n - 1) + r.substr(n + 1))),
              n > 1 ? t(e, r.substr(0, n - 1)) + i : o + i)
          : null == r
          ? o
          : +r;
      },
      Gt = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      Zt = function (t, e, r) {
        return r < t ? t : r > e ? e : r;
      },
      $t = function (t) {
        return (t + "").substr((parseFloat(t) + "").length);
      },
      Jt = [].slice,
      Kt = function (t, e) {
        return (
          t &&
          N(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && N(t[0]))) &&
          !t.nodeType &&
          t !== a
        );
      },
      te = function (t, e, r) {
        return (
          void 0 === r && (r = []),
          t.forEach(function (t) {
            var n;
            return (I(t) && !e) || Kt(t, 1)
              ? (n = r).push.apply(n, ee(t))
              : r.push(t);
          }) || r
        );
      },
      ee = function (t, e) {
        return !I(t) || e || (!o && Te())
          ? V(t)
            ? te(t, e)
            : Kt(t)
            ? Jt.call(t, 0)
            : t
            ? [t]
            : []
          : Jt.call(u.querySelectorAll(t), 0);
      },
      re = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      ne = function (t) {
        if (j(t)) return t;
        var e = N(t) ? t : { each: t },
          r = Ae(e.ease),
          n = e.from || 0,
          i = parseFloat(e.base) || 0,
          s = {},
          a = n > 0 && n < 1,
          o = isNaN(n) || a,
          u = e.axis,
          l = n,
          h = n;
        return (
          I(n)
            ? (l = h = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
            : !a && o && ((l = n[0]), (h = n[1])),
          function (t, a, f) {
            var c,
              d,
              p,
              _,
              g,
              m,
              v,
              y,
              x,
              b = (f || e).length,
              w = s[b];
            if (!w) {
              if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                for (
                  v = -1e8;
                  v < (v = f[x++].getBoundingClientRect().left) && x < b;

                );
                x--;
              }
              for (
                w = s[b] = [],
                  c = o ? Math.min(x, b) * l - 0.5 : n % x,
                  d = o ? (b * h) / x - 0.5 : (n / x) | 0,
                  v = 0,
                  y = 1e8,
                  m = 0;
                m < b;
                m++
              )
                (p = (m % x) - c),
                  (_ = d - ((m / x) | 0)),
                  (w[m] = g =
                    u ? Math.abs("y" === u ? _ : p) : B(p * p + _ * _)),
                  g > v && (v = g),
                  g < y && (y = g);
              "random" === n && re(w),
                (w.max = v - y),
                (w.min = y),
                (w.v = b =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (x > b
                        ? b - 1
                        : u
                        ? "y" === u
                          ? b / x
                          : x
                        : Math.max(x, b / x)) ||
                    0) * ("edges" === n ? -1 : 1)),
                (w.b = b < 0 ? i - b : i),
                (w.u = $t(e.amount || e.each) || 0),
                (r = r && b < 0 ? ke(r) : r);
            }
            return (
              (b = (w[t] - w.min) / w.max || 0),
              yt(w.b + (r ? r(b) : b) * w.v) + w.u
            );
          }
        );
      },
      ie = function (t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (r) {
          return (
            Math.floor(Math.round(parseFloat(r) / t) * t * e) / e +
            (Y(r) ? 0 : $t(r))
          );
        };
      },
      se = function (t, e) {
        var r,
          n,
          i = V(t);
        return (
          !i &&
            N(t) &&
            ((r = i = t.radius || 1e8),
            t.values
              ? ((t = ee(t.values)), (n = !Y(t[0])) && (r *= r))
              : (t = ie(t.increment))),
          Gt(
            e,
            i
              ? j(t)
                ? function (e) {
                    return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                  }
                : function (e) {
                    for (
                      var i,
                        s,
                        a = parseFloat(n ? e.x : e),
                        o = parseFloat(n ? e.y : 0),
                        u = 1e8,
                        l = 0,
                        h = t.length;
                      h--;

                    )
                      (i = n
                        ? (i = t[h].x - a) * i + (s = t[h].y - o) * s
                        : Math.abs(t[h] - a)) < u && ((u = i), (l = h));
                    return (
                      (l = !r || u <= r ? t[l] : e),
                      n || l === e || Y(e) ? l : l + $t(e)
                    );
                  }
              : ie(t)
          )
        );
      },
      ae = function (t, e, r, n) {
        return Gt(V(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
          return V(t)
            ? t[~~(Math.random() * t.length)]
            : (r = r || 1e-5) &&
                (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                Math.floor(
                  Math.round((t + Math.random() * (e - t)) / r) * r * n
                ) / n;
        });
      },
      oe = function (t, e, r) {
        return Gt(r, function (r) {
          return t[~~e(r)];
        });
      },
      ue = function (t) {
        for (var e, r, n, i, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
          (n = t.indexOf(")", e)),
            (i = "[" === t.charAt(e + 7)),
            (r = t.substr(e + 7, n - e - 7).match(i ? K : W)),
            (a += t.substr(s, e - s) + ae(i ? r : +r[0], +r[1], +r[2] || 1e-5)),
            (s = n + 1);
        return a + t.substr(s, t.length - s);
      },
      le = function (t, e, r, n, i) {
        var s = e - t,
          a = n - r;
        return Gt(i, function (e) {
          return r + (((e - t) / s) * a || 0);
        });
      },
      he = function (t, e, r) {
        var n,
          i,
          s,
          a = t.labels,
          o = 1e8;
        for (n in a)
          (i = a[n] - e) < 0 == !!r &&
            i &&
            o > (i = Math.abs(i)) &&
            ((s = n), (o = i));
        return s;
      },
      fe = function (t, e, r) {
        var n,
          i,
          s = t.vars,
          a = s[e];
        if (a)
          return (
            (n = s[e + "Params"]),
            (i = s.callbackScope || t),
            r && ut.length && wt(),
            n ? a.apply(i, n) : a.call(i)
          );
      },
      ce = function (t) {
        return Rt(t), t.progress() < 1 && fe(t, "onInterrupt"), t;
      },
      de = function (t) {
        var e = (t = (!t.name && t.default) || t).name,
          r = j(t),
          n =
            e && !r && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          i = {
            init: at,
            render: er,
            add: Ye,
            kill: nr,
            modifier: rr,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: $e,
            aliases: {},
            register: 0,
          };
        if ((Te(), t !== n)) {
          if (ht[e]) return;
          Ot(n, Ot(At(t, i), s)),
            kt(n.prototype, kt(i, At(t, s))),
            (ht[(n.prop = e)] = n),
            t.targetTest && (dt.push(n), (ot[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        st(e, n), t.register && t.register(hr, n, ar);
      },
      pe = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      _e = function (t, e, r) {
        return (
          (255 *
            (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) +
            0.5) |
          0
        );
      },
      ge = function (t, e, r) {
        var n,
          i,
          s,
          a,
          o,
          u,
          l,
          h,
          f,
          c,
          d = t ? (Y(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : pe.black;
        if (!d) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), pe[t]))
            d = pe[t];
          else if ("#" === t.charAt(0))
            4 === t.length &&
              ((n = t.charAt(1)),
              (i = t.charAt(2)),
              (s = t.charAt(3)),
              (t = "#" + n + n + i + i + s + s)),
              (d = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & 255,
                255 & t,
              ]);
          else if ("hsl" === t.substr(0, 3))
            if (((d = c = t.match(W)), e)) {
              if (~t.indexOf("="))
                return (d = t.match(Q)), r && d.length < 4 && (d[3] = 1), d;
            } else
              (a = (+d[0] % 360) / 360),
                (o = +d[1] / 100),
                (n =
                  2 * (u = +d[2] / 100) -
                  (i = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
                d.length > 3 && (d[3] *= 1),
                (d[0] = _e(a + 1 / 3, n, i)),
                (d[1] = _e(a, n, i)),
                (d[2] = _e(a - 1 / 3, n, i));
          else d = t.match(W) || pe.transparent;
          d = d.map(Number);
        }
        return (
          e &&
            !c &&
            ((n = d[0] / 255),
            (i = d[1] / 255),
            (s = d[2] / 255),
            (u = ((l = Math.max(n, i, s)) + (h = Math.min(n, i, s))) / 2),
            l === h
              ? (a = o = 0)
              : ((f = l - h),
                (o = u > 0.5 ? f / (2 - l - h) : f / (l + h)),
                (a =
                  l === n
                    ? (i - s) / f + (i < s ? 6 : 0)
                    : l === i
                    ? (s - n) / f + 2
                    : (n - i) / f + 4),
                (a *= 60)),
            (d[0] = ~~(a + 0.5)),
            (d[1] = ~~(100 * o + 0.5)),
            (d[2] = ~~(100 * u + 0.5))),
          r && d.length < 4 && (d[3] = 1),
          d
        );
      },
      me = function (t) {
        var e = [],
          r = [],
          n = -1;
        return (
          t.split(ye).forEach(function (t) {
            var i = t.match(G) || [];
            e.push.apply(e, i), r.push((n += i.length + 1));
          }),
          (e.c = r),
          e
        );
      },
      ve = function (t, e, r) {
        var n,
          i,
          s,
          a,
          o = "",
          u = (t + o).match(ye),
          l = e ? "hsla(" : "rgba(",
          h = 0;
        if (!u) return t;
        if (
          ((u = u.map(function (t) {
            return (
              (t = ge(t, e, 1)) &&
              l +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          r && ((s = me(t)), (n = r.c).join(o) !== s.c.join(o)))
        )
          for (a = (i = t.replace(ye, "1").split(G)).length - 1; h < a; h++)
            o +=
              i[h] +
              (~n.indexOf(h)
                ? u.shift() || l + "0,0,0,0)"
                : (s.length ? s : u.length ? u : r).shift());
        if (!i)
          for (a = (i = t.split(ye)).length - 1; h < a; h++) o += i[h] + u[h];
        return o + i[a];
      },
      ye = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in pe) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      xe = /hsl[a]?\(/,
      be = function (t) {
        var e,
          r = t.join(" ");
        if (((ye.lastIndex = 0), ye.test(r)))
          return (
            (e = xe.test(r)),
            (t[1] = ve(t[1], e)),
            (t[0] = ve(t[0], e, me(t[1]))),
            !0
          );
      },
      we =
        ((m = Date.now),
        (v = 500),
        (y = 33),
        (x = m()),
        (b = x),
        (T = w = 1 / 240),
        (M = function t(e) {
          var r,
            n,
            i = m() - b,
            s = !0 === e;
          i > v && (x += i - y),
            (b += i),
            (g.time = (b - x) / 1e3),
            ((r = g.time - T) > 0 || s) &&
              (g.frame++, (T += r + (r >= w ? 0.004 : w - r)), (n = 1)),
            s || (d = p(t)),
            n &&
              P.forEach(function (t) {
                return t(g.time, i, g.frame, e);
              });
        }),
        (g = {
          time: 0,
          frame: 0,
          tick: function () {
            M(!0);
          },
          wake: function () {
            l &&
              (!o &&
                H() &&
                ((a = o = window),
                (u = a.document || {}),
                (tt.gsap = hr),
                (a.gsapVersions || (a.gsapVersions = [])).push(hr.version),
                rt(et || a.GreenSockGlobals || (!a.gsap && a) || {}),
                (_ = a.requestAnimationFrame)),
              d && g.sleep(),
              (p =
                _ ||
                function (t) {
                  return setTimeout(t, (1e3 * (T - g.time) + 1) | 0);
                }),
              (c = 1),
              M(2));
          },
          sleep: function () {
            (_ ? a.cancelAnimationFrame : clearTimeout)(d), (c = 0), (p = at);
          },
          lagSmoothing: function (t, e) {
            (v = t || 1e8), (y = Math.min(e, v, 0));
          },
          fps: function (t) {
            (w = 1 / (t || 240)), (T = g.time + w);
          },
          add: function (t) {
            P.indexOf(t) < 0 && P.push(t), Te();
          },
          remove: function (t) {
            var e;
            ~(e = P.indexOf(t)) && P.splice(e, 1);
          },
          _listeners: (P = []),
        })),
      Te = function () {
        return !c && we.wake();
      },
      Pe = {},
      Me = /^[\d.\-M][\d.\-,\s]/,
      Oe = /["']/g,
      Ce = function (t) {
        for (
          var e,
            r,
            n,
            i = {},
            s = t.substr(1, t.length - 3).split(":"),
            a = s[0],
            o = 1,
            u = s.length;
          o < u;
          o++
        )
          (r = s[o]),
            (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
            (n = r.substr(0, e)),
            (i[a] = isNaN(n) ? n.replace(Oe, "").trim() : +n),
            (a = r.substr(e + 1).trim());
        return i;
      },
      ke = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      Se = function t(e, r) {
        for (var n, i = e._first; i; )
          i instanceof Le
            ? t(i, r)
            : !i.vars.yoyoEase ||
              (i._yoyo && i._repeat) ||
              i._yoyo === r ||
              (i.timeline
                ? t(i.timeline, r)
                : ((n = i._ease),
                  (i._ease = i._yEase),
                  (i._yEase = n),
                  (i._yoyo = r))),
            (i = i._next);
      },
      Ae = function (t, e) {
        return (
          (t &&
            (j(t)
              ? t
              : Pe[t] ||
                (function (t) {
                  var e = (t + "").split("("),
                    r = Pe[e[0]];
                  return r && e.length > 1 && r.config
                    ? r.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [Ce(e[1])]
                          : $.exec(t)[1].split(",").map(Pt)
                      )
                    : Pe._CE && Me.test(t)
                    ? Pe._CE("", t)
                    : r;
                })(t))) ||
          e
        );
      },
      Ee = function (t, e, r, n) {
        void 0 === r &&
          (r = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === n &&
            (n = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          s = { easeIn: e, easeOut: r, easeInOut: n };
        return (
          vt(t, function (t) {
            for (var e in ((Pe[t] = tt[t] = s),
            (Pe[(i = t.toLowerCase())] = r),
            s))
              Pe[
                i +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = Pe[t + "." + e] = s[e];
          }),
          s
        );
      },
      De = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      Re = function t(e, r, n) {
        var i = r >= 1 ? r : 1,
          s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
          a = (s / D) * (Math.asin(1 / i) || 0),
          o = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * L((t - a) * s) + 1;
          },
          u =
            "out" === e
              ? o
              : "in" === e
              ? function (t) {
                  return 1 - o(1 - t);
                }
              : De(o);
        return (
          (s = D / s),
          (u.config = function (r, n) {
            return t(e, r, n);
          }),
          u
        );
      },
      ze = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function (t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
          },
          i =
            "out" === e
              ? n
              : "in" === e
              ? function (t) {
                  return 1 - n(1 - t);
                }
              : De(n);
        return (
          (i.config = function (r) {
            return t(e, r);
          }),
          i
        );
      };
    vt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var r = e < 5 ? e + 1 : e;
      Ee(
        t + ",Power" + (r - 1),
        e
          ? function (t) {
              return Math.pow(t, r);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, r);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, r) / 2
            : 1 - Math.pow(2 * (1 - t), r) / 2;
        }
      );
    }),
      (Pe.Linear.easeNone = Pe.none = Pe.Linear.easeIn),
      Ee("Elastic", Re("in"), Re("out"), Re()),
      (O = 7.5625),
      (k = 1 / (C = 2.75)),
      Ee(
        "Bounce",
        function (t) {
          return 1 - S(1 - t);
        },
        (S = function (t) {
          return t < k
            ? O * t * t
            : t < 0.7272727272727273
            ? O * Math.pow(t - 1.5 / C, 2) + 0.75
            : t < 0.9090909090909092
            ? O * (t -= 2.25 / C) * t + 0.9375
            : O * Math.pow(t - 2.625 / C, 2) + 0.984375;
        })
      ),
      Ee("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      Ee("Circ", function (t) {
        return -(B(1 - t * t) - 1);
      }),
      Ee("Sine", function (t) {
        return 1 === t ? 1 : 1 - F(t * R);
      }),
      Ee("Back", ze("in"), ze("out"), ze()),
      (Pe.SteppedEase =
        Pe.steps =
        tt.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
              return function (t) {
                return (((n * Zt(0, 1 - 1e-8, t)) | 0) + i) * r;
              };
            },
          }),
      (E.ease = Pe["quad.out"]),
      vt(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (pt += t + "," + t + "Params,");
        }
      );
    var Be = function (t, e) {
        (this.id = z++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : mt),
          (this.set = e ? e.getSetter : $e);
      },
      Fe = (function () {
        function t(t, e) {
          var r = t.parent || s;
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            qt(this, +t.duration, 1),
            (this.data = t.data),
            c || we.wake(),
            r && Nt(r, this, e || 0 === e ? e : r._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0);
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            if (!arguments.length) return this._tDur;
            this._dirty = 0;
            var e = this._time / this._dur || 0;
            return (
              qt(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ),
              this._tTime ? Yt(this, e * t + Ft(this)) : this
            );
          }),
          (e.totalTime = function (t, e) {
            if ((Te(), !arguments.length)) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (Yt(this, t); r.parent; )
                r.parent._time !==
                  r._start +
                    (r._ts >= 0
                      ? r._tTime / r._ts
                      : (r.totalDuration() - r._tTime) / -r._ts) &&
                  r.totalTime(r._tTime, !0),
                  (r = r.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                Nt(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!t && !this._initted)) &&
                (this._ts || (this._pTime = t), Tt(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + Ft(this)) % this._dur ||
                    (t ? this._dur : 0),
                  e
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    Ft(this),
                  e
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * r, e)
              : this._repeat
              ? Lt(this._tTime, r) + 1
              : 1;
          }),
          (e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e =
              this.parent && this._ts
                ? It(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              Bt(this.totalTime(Zt(-this._delay, this._tDur, e), !0))
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (Te(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          (this._tTime -= 1e-8) &&
                          1e-8 !== Math.abs(this._zTime)
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && Nt(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (U(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? It(e.rawTime(t), this)
                : this._tTime
              : this._tTime;
          }),
          (e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
              (r = e._start + r / (e._ts || 1)), (e = e._dp);
            return r;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), Vt(this))
              : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            return arguments.length
              ? ((this._rDelay = t), Vt(this))
              : this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(Qt(this, t), U(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, U(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              r = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= r &&
                t < this.endTime(!0) - 1e-8
              )
            );
          }),
          (e.eventCallback = function (t, e, r) {
            var n = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((n[t] = e),
                    r && (n[t + "Params"] = r),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete n[t],
                this)
              : n[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (r) {
              var n = j(t) ? t : Mt,
                i = function () {
                  var t = e.then;
                  (e.then = null),
                    j(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    r(n),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? i()
                : (e._prom = i);
            });
          }),
          (e.kill = function () {
            ce(this);
          }),
          t
        );
      })();
    Ot(Fe.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Le = (function (t) {
      function e(e, r) {
        var i;
        return (
          void 0 === e && (e = {}),
          ((i = t.call(this, e, r) || this).labels = {}),
          (i.smoothChildTiming = !!e.smoothChildTiming),
          (i.autoRemoveChildren = !!e.autoRemoveChildren),
          (i._sort = U(e.sortChildren)),
          i.parent && Xt(i.parent, n(i)),
          e.scrollTrigger && Ut(n(i), e.scrollTrigger),
          i
        );
      }
      i(e, t);
      var r = e.prototype;
      return (
        (r.to = function (t, e, r) {
          return (
            new Ve(
              t,
              bt(arguments, 0, this),
              Qt(this, Y(e) ? arguments[3] : r)
            ),
            this
          );
        }),
        (r.from = function (t, e, r) {
          return (
            new Ve(
              t,
              bt(arguments, 1, this),
              Qt(this, Y(e) ? arguments[3] : r)
            ),
            this
          );
        }),
        (r.fromTo = function (t, e, r, n) {
          return (
            new Ve(
              t,
              bt(arguments, 2, this),
              Qt(this, Y(e) ? arguments[4] : n)
            ),
            this
          );
        }),
        (r.set = function (t, e, r) {
          return (
            (e.duration = 0),
            (e.parent = this),
            Et(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new Ve(t, e, Qt(this, r), 1),
            this
          );
        }),
        (r.call = function (t, e, r) {
          return Nt(this, Ve.delayedCall(0, t, e), Qt(this, r));
        }),
        (r.staggerTo = function (t, e, r, n, i, s, a) {
          return (
            (r.duration = e),
            (r.stagger = r.stagger || n),
            (r.onComplete = s),
            (r.onCompleteParams = a),
            (r.parent = this),
            new Ve(t, r, Qt(this, i)),
            this
          );
        }),
        (r.staggerFrom = function (t, e, r, n, i, s, a) {
          return (
            (r.runBackwards = 1),
            (Et(r).immediateRender = U(r.immediateRender)),
            this.staggerTo(t, e, r, n, i, s, a)
          );
        }),
        (r.staggerFromTo = function (t, e, r, n, i, s, a, o) {
          return (
            (n.startAt = r),
            (Et(n).immediateRender = U(n.immediateRender)),
            this.staggerTo(t, e, n, i, s, a, o)
          );
        }),
        (r.render = function (t, e, r) {
          var n,
            i,
            a,
            o,
            u,
            l,
            h,
            f,
            c,
            d,
            p,
            _,
            g = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = this !== s && t > m - 1e-8 && t >= 0 ? m : t < 1e-8 ? 0 : t,
            x = this._zTime < 0 != t < 0 && (this._initted || !v);
          if (y !== this._tTime || r || x) {
            if (
              (g !== this._time &&
                v &&
                ((y += this._time - g), (t += this._time - g)),
              (n = y),
              (c = this._start),
              (l = !(f = this._ts)),
              x && (v || (g = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat &&
                ((p = this._yoyo),
                (u = v + this._rDelay),
                ((n = yt(y % u)) > v || m === y) && (n = v),
                (o = ~~(y / u)) && o === y / u && ((n = v), o--),
                (d = Lt(this._tTime, u)),
                !g && this._tTime && d !== o && (d = o),
                p && 1 & o && ((n = v - n), (_ = 1)),
                o !== d && !this._lock))
            ) {
              var b = p && 1 & d,
                w = b === (p && 1 & o);
              if (
                (o < d && (b = !b),
                (g = b ? 0 : v),
                (this._lock = 1),
                (this.render(g || (_ ? 0 : yt(o * u)), e, !v)._lock = 0),
                !e && this.parent && fe(this, "onRepeat"),
                this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
                g !== this._time || l !== !this._ts)
              )
                return this;
              if (
                (w &&
                  ((this._lock = 2),
                  (g = b ? v + 1e-4 : -1e-4),
                  this.render(g, !0),
                  this.vars.repeatRefresh && !_ && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              Se(this, _);
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (h = (function (t, e, r) {
                  var n;
                  if (r > e)
                    for (n = t._first; n && n._start <= r; ) {
                      if (!n._dur && "isPause" === n.data && n._start > e)
                        return n;
                      n = n._next;
                    }
                  else
                    for (n = t._last; n && n._start >= r; ) {
                      if (!n._dur && "isPause" === n.data && n._start < e)
                        return n;
                      n = n._prev;
                    }
                })(this, yt(g), yt(n))) &&
                (y -= n - (n = h._start)),
              (this._tTime = y),
              (this._time = n),
              (this._act = !f),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t)),
              g || !n || e || fe(this, "onStart"),
              n >= g && t >= 0)
            )
              for (i = this._first; i; ) {
                if (
                  ((a = i._next), (i._act || n >= i._start) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (n - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (n - i._start) * i._ts,
                      e,
                      r
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), a && (y += this._zTime = -1e-8);
                    break;
                  }
                }
                i = a;
              }
            else {
              i = this._last;
              for (var T = t < 0 ? t : n; i; ) {
                if (
                  ((a = i._prev), (i._act || T <= i._end) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (T - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (T - i._start) * i._ts,
                      e,
                      r
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), a && (y += this._zTime = T ? -1e-8 : 1e-8);
                    break;
                  }
                }
                i = a;
              }
            }
            if (
              h &&
              !e &&
              (this.pause(),
              (h.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1),
              this._ts)
            )
              return (this._start = c), jt(this), this.render(t, e, r);
            this._onUpdate && !e && fe(this, "onUpdate", !0),
              ((y === m && m >= this.totalDuration()) || (!y && g)) &&
                ((c !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !v) &&
                    ((y === m && this._ts > 0) || (!y && this._ts < 0)) &&
                    Rt(this, 1),
                  e ||
                    (t < 0 && !g) ||
                    (!y && !g) ||
                    (fe(this, y === m ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(y < m && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (r.add = function (t, e) {
          var r = this;
          if ((Y(e) || (e = Qt(this, e)), !(t instanceof Fe))) {
            if (V(t))
              return (
                t.forEach(function (t) {
                  return r.add(t, e);
                }),
                zt(this)
              );
            if (I(t)) return this.addLabel(t, e);
            if (!j(t)) return this;
            t = Ve.delayedCall(0, t);
          }
          return this !== t ? Nt(this, t, e) : this;
        }),
        (r.getChildren = function (t, e, r, n) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === n && (n = -1e8);
          for (var i = [], s = this._first; s; )
            s._start >= n &&
              (s instanceof Ve
                ? e && i.push(s)
                : (r && i.push(s),
                  t && i.push.apply(i, s.getChildren(!0, e, r)))),
              (s = s._next);
          return i;
        }),
        (r.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
            if (e[r].vars.id === t) return e[r];
        }),
        (r.remove = function (t) {
          return I(t)
            ? this.removeLabel(t)
            : j(t)
            ? this.killTweensOf(t)
            : (Dt(this, t),
              t === this._recent && (this._recent = this._last),
              zt(this));
        }),
        (r.totalTime = function (e, r) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = yt(
                  we.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                )),
              t.prototype.totalTime.call(this, e, r),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (r.addLabel = function (t, e) {
          return (this.labels[t] = Qt(this, e)), this;
        }),
        (r.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (r.addPause = function (t, e, r) {
          var n = Ve.delayedCall(0, e || at, r);
          return (
            (n.data = "isPause"), (this._hasPause = 1), Nt(this, n, Qt(this, t))
          );
        }),
        (r.removePause = function (t) {
          var e = this._first;
          for (t = Qt(this, t); e; )
            e._start === t && "isPause" === e.data && Rt(e), (e = e._next);
        }),
        (r.killTweensOf = function (t, e, r) {
          for (var n = this.getTweensOf(t, r), i = n.length; i--; )
            Ie !== n[i] && n[i].kill(t, e);
          return this;
        }),
        (r.getTweensOf = function (t, e) {
          for (var r, n = [], i = ee(t), s = this._first, a = Y(e); s; )
            s instanceof Ve
              ? xt(s._targets, i) &&
                (a
                  ? (!Ie || (s._initted && s._ts)) &&
                    s.globalTime(0) <= e &&
                    s.globalTime(s.totalDuration()) > e
                  : !e || s.isActive()) &&
                n.push(s)
              : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
              (s = s._next);
          return n;
        }),
        (r.tweenTo = function (t, e) {
          e = e || {};
          var r = this,
            n = Qt(r, t),
            i = e,
            s = i.startAt,
            a = i.onStart,
            o = i.onStartParams,
            u = Ve.to(
              r,
              Ot(e, {
                ease: "none",
                lazy: !1,
                time: n,
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (s && "time" in s ? s.time : r._time)) / r.timeScale()
                  ) ||
                  1e-8,
                onStart: function () {
                  r.pause();
                  var t = e.duration || Math.abs((n - r._time) / r.timeScale());
                  u._dur !== t && qt(u, t).render(u._time, !0, !0),
                    a && a.apply(u, o || []);
                },
              })
            );
          return u;
        }),
        (r.tweenFromTo = function (t, e, r) {
          return this.tweenTo(e, Ot({ startAt: { time: Qt(this, t) } }, r));
        }),
        (r.recent = function () {
          return this._recent;
        }),
        (r.nextLabel = function (t) {
          return void 0 === t && (t = this._time), he(this, Qt(this, t));
        }),
        (r.previousLabel = function (t) {
          return void 0 === t && (t = this._time), he(this, Qt(this, t), 1);
        }),
        (r.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (r.shiftChildren = function (t, e, r) {
          void 0 === r && (r = 0);
          for (var n, i = this._first, s = this.labels; i; )
            i._start >= r && (i._start += t), (i = i._next);
          if (e) for (n in s) s[n] >= r && (s[n] += t);
          return zt(this);
        }),
        (r.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (r.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r; )
            (e = r._next), this.remove(r), (r = e);
          return (
            (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            zt(this)
          );
        }),
        (r.totalDuration = function (t) {
          var e,
            r,
            n,
            i,
            a = 0,
            o = this,
            u = o._last,
            l = 1e8;
          if (arguments.length)
            return o.timeScale(
              (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                (o.reversed() ? -t : t)
            );
          if (o._dirty) {
            for (i = o.parent; u; )
              (e = u._prev),
                u._dirty && u.totalDuration(),
                (n = u._start) > l && o._sort && u._ts && !o._lock
                  ? ((o._lock = 1), (Nt(o, u, n - u._delay, 1)._lock = 0))
                  : (l = n),
                n < 0 &&
                  u._ts &&
                  ((a -= n),
                  ((!i && !o._dp) || (i && i.smoothChildTiming)) &&
                    ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)),
                  o.shiftChildren(-n, !1, -Infinity),
                  (l = 0)),
                (r = jt(u)) > a && u._ts && (a = r),
                (u = e);
            qt(o, o === s && o._time > a ? o._time : a, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((s._ts && (Tt(s, It(t, s)), (h = we.frame)), we.frame >= ct)) {
            ct += A.autoSleep || 120;
            var e = s._first;
            if ((!e || !e._ts) && A.autoSleep && we._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || we.sleep();
            }
          }
        }),
        e
      );
    })(Fe);
    Ot(Le.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Ie,
      je = function (t, e, r, n, i, s, a) {
        var o,
          u,
          l,
          h,
          f,
          c,
          d,
          p,
          _ = new ar(this._pt, t, e, 0, 1, tr, null, i),
          g = 0,
          m = 0;
        for (
          _.b = r,
            _.e = n,
            r += "",
            (d = ~(n += "").indexOf("random(")) && (n = ue(n)),
            s && (s((p = [r, n]), t, e), (r = p[0]), (n = p[1])),
            u = r.match(Z) || [];
          (o = Z.exec(n));

        )
          (h = o[0]),
            (f = n.substring(g, o.index)),
            l ? (l = (l + 1) % 5) : "rgba(" === f.substr(-5) && (l = 1),
            h !== u[m++] &&
              ((c = parseFloat(u[m - 1]) || 0),
              (_._pt = {
                _next: _._pt,
                p: f || 1 === m ? f : ",",
                s: c,
                c:
                  "=" === h.charAt(1)
                    ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1)
                    : parseFloat(h) - c,
                m: l && l < 4 ? Math.round : 0,
              }),
              (g = Z.lastIndex));
        return (
          (_.c = g < n.length ? n.substring(g, n.length) : ""),
          (_.fp = a),
          (J.test(n) || d) && (_.e = 0),
          (this._pt = _),
          _
        );
      },
      Ye = function (t, e, r, n, i, s, a, o, u) {
        j(n) && (n = n(i || 0, t, s));
        var l,
          h = t[e],
          f =
            "get" !== r
              ? r
              : j(h)
              ? u
                ? t[
                    e.indexOf("set") || !j(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](u)
                : t[e]()
              : h,
          c = j(h) ? (u ? Ge : Qe) : We;
        if (
          (I(n) &&
            (~n.indexOf("random(") && (n = ue(n)),
            "=" === n.charAt(1) &&
              (n =
                parseFloat(f) +
                parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) +
                ($t(f) || 0))),
          f !== n)
        )
          return isNaN(f * n)
            ? (!h && !(e in t) && nt(e, n),
              je.call(this, t, e, f, n, c, o || A.stringFilter, u))
            : ((l = new ar(
                this._pt,
                t,
                e,
                +f || 0,
                n - (f || 0),
                "boolean" == typeof h ? Ke : Je,
                0,
                c
              )),
              u && (l.fp = u),
              a && l.modifier(a, this, t),
              (this._pt = l));
      },
      Xe = function (t, e, r, n, i, s) {
        var a, o, u, l;
        if (
          ht[t] &&
          !1 !==
            (a = new ht[t]()).init(
              i,
              a.rawVars
                ? e[t]
                : (function (t, e, r, n, i) {
                    if (
                      (j(t) && (t = Ue(t, i, e, r, n)),
                      !N(t) || (t.style && t.nodeType) || V(t))
                    )
                      return I(t) ? Ue(t, i, e, r, n) : t;
                    var s,
                      a = {};
                    for (s in t) a[s] = Ue(t[s], i, e, r, n);
                    return a;
                  })(e[t], n, i, s, r),
              r,
              n,
              s
            ) &&
          ((r._pt = o = new ar(r._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
          r !== f)
        )
          for (
            u = r._ptLookup[r._targets.indexOf(i)], l = a._props.length;
            l--;

          )
            u[a._props[l]] = o;
        return a;
      },
      Ne = function t(e, r) {
        var n,
          i,
          a,
          o,
          u,
          l,
          h,
          f,
          c,
          d,
          p,
          _,
          g,
          m = e.vars,
          v = m.ease,
          y = m.startAt,
          x = m.immediateRender,
          b = m.lazy,
          w = m.onUpdate,
          T = m.onUpdateParams,
          P = m.callbackScope,
          M = m.runBackwards,
          O = m.yoyoEase,
          C = m.keyframes,
          k = m.autoRevert,
          S = e._dur,
          A = e._startAt,
          D = e._targets,
          R = e.parent,
          z = R && "nested" === R.data ? R.parent._targets : D,
          B = "auto" === e._overwrite,
          F = e.timeline;
        if (
          (F && (!C || !v) && (v = "none"),
          (e._ease = Ae(v, E.ease)),
          (e._yEase = O ? ke(Ae(!0 === O ? v : O, E.ease)) : 0),
          O &&
            e._yoyo &&
            !e._repeat &&
            ((O = e._yEase), (e._yEase = e._ease), (e._ease = O)),
          !F)
        ) {
          if (
            ((_ = (f = D[0] ? gt(D[0]).harness : 0) && m[f.prop]),
            (n = At(m, ot)),
            A && A.render(-1, !0).kill(),
            y)
          ) {
            if (
              (Rt(
                (e._startAt = Ve.set(
                  D,
                  Ot(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: R,
                      immediateRender: !0,
                      lazy: U(b),
                      startAt: null,
                      delay: 0,
                      onUpdate: w,
                      onUpdateParams: T,
                      callbackScope: P,
                      stagger: 0,
                    },
                    y
                  )
                ))
              ),
              x)
            )
              if (r > 0) !k && (e._startAt = 0);
              else if (S && !(r < 0 && A)) return void (e._zTime = r);
          } else if (M && S)
            if (A) !k && (e._startAt = 0);
            else if (
              (r && (x = !1),
              (a = Ot(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: x && U(b),
                  immediateRender: x,
                  stagger: 0,
                  parent: R,
                },
                n
              )),
              _ && (a[f.prop] = _),
              Rt((e._startAt = Ve.set(D, a))),
              x)
            ) {
              if (!r) return;
            } else t(e._startAt, 1e-8);
          for (
            e._pt = 0, b = (S && U(b)) || (b && !S), i = 0;
            i < D.length;
            i++
          ) {
            if (
              ((h = (u = D[i])._gsap || _t(D)[i]._gsap),
              (e._ptLookup[i] = d = {}),
              lt[h.id] && wt(),
              (p = z === D ? i : z.indexOf(u)),
              f &&
                !1 !== (c = new f()).init(u, _ || n, e, p, z) &&
                ((e._pt = o =
                  new ar(e._pt, u, c.name, 0, 1, c.render, c, 0, c.priority)),
                c._props.forEach(function (t) {
                  d[t] = o;
                }),
                c.priority && (l = 1)),
              !f || _)
            )
              for (a in n)
                ht[a] && (c = Xe(a, n, e, p, u, z))
                  ? c.priority && (l = 1)
                  : (d[a] = o =
                      Ye.call(e, u, a, "get", n[a], p, z, 0, m.stringFilter));
            e._op && e._op[i] && e.kill(u, e._op[i]),
              B &&
                e._pt &&
                ((Ie = e),
                s.killTweensOf(u, d, e.globalTime(0)),
                (g = !e.parent),
                (Ie = 0)),
              e._pt && b && (lt[h.id] = 1);
          }
          l && sr(e), e._onInit && e._onInit(e);
        }
        (e._from = !F && !!m.runBackwards),
          (e._onUpdate = w),
          (e._initted = (!e._op || e._pt) && !g);
      },
      Ue = function (t, e, r, n, i) {
        return j(t)
          ? t.call(e, r, n, i)
          : I(t) && ~t.indexOf("random(")
          ? ue(t)
          : t;
      },
      He = pt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      qe = (He + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      Ve = (function (t) {
        function e(e, r, i, a) {
          var o;
          "number" == typeof r && ((i.duration = r), (r = i), (i = null));
          var u,
            l,
            h,
            f,
            c,
            d,
            p,
            _,
            g = (o = t.call(this, a ? r : Et(r), i) || this).vars,
            m = g.duration,
            v = g.delay,
            y = g.immediateRender,
            x = g.stagger,
            b = g.overwrite,
            w = g.keyframes,
            T = g.defaults,
            P = g.scrollTrigger,
            M = g.yoyoEase,
            O = o.parent,
            C = (V(e) ? Y(e[0]) : "length" in r) ? [e] : ee(e);
          if (
            ((o._targets = C.length
              ? _t(C)
              : it(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !A.nullTargetWarn
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = b),
            w || x || q(m) || q(v))
          ) {
            if (
              ((r = o.vars),
              (u = o.timeline =
                new Le({ data: "nested", defaults: T || {} })).kill(),
              (u.parent = n(o)),
              w)
            )
              Ot(u.vars.defaults, { ease: "none" }),
                w.forEach(function (t) {
                  return u.to(C, t, ">");
                });
            else {
              if (((f = C.length), (p = x ? ne(x) : at), N(x)))
                for (c in x) ~He.indexOf(c) && (_ || (_ = {}), (_[c] = x[c]));
              for (l = 0; l < f; l++) {
                for (c in ((h = {}), r)) qe.indexOf(c) < 0 && (h[c] = r[c]);
                (h.stagger = 0),
                  M && (h.yoyoEase = M),
                  _ && kt(h, _),
                  (d = C[l]),
                  (h.duration = +Ue(m, n(o), l, d, C)),
                  (h.delay = (+Ue(v, n(o), l, d, C) || 0) - o._delay),
                  !x &&
                    1 === f &&
                    h.delay &&
                    ((o._delay = v = h.delay), (o._start += v), (h.delay = 0)),
                  u.to(d, h, p(l, d, C));
              }
              u.duration() ? (m = v = 0) : (o.timeline = 0);
            }
            m || o.duration((m = u.duration()));
          } else o.timeline = 0;
          return (
            !0 === b && ((Ie = n(o)), s.killTweensOf(C), (Ie = 0)),
            O && Xt(O, n(o)),
            (y ||
              (!m &&
                !w &&
                o._start === yt(O._time) &&
                U(y) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(n(o)) &&
                "nested" !== O.data)) &&
              ((o._tTime = -1e-8), o.render(Math.max(0, -v))),
            P && Ut(n(o), P),
            o
          );
        }
        i(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              a,
              o,
              u,
              l,
              h,
              f,
              c = this._time,
              d = this._tDur,
              p = this._dur,
              _ = t > d - 1e-8 && t >= 0 ? d : t < 1e-8 ? 0 : t;
            if (p) {
              if (
                _ !== this._tTime ||
                !t ||
                r ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((n = _), (h = this.timeline), this._repeat)) {
                  if (
                    ((a = p + this._rDelay),
                    ((n = yt(_ % a)) > p || d === _) && (n = p),
                    (s = ~~(_ / a)) && s === _ / a && ((n = p), s--),
                    (u = this._yoyo && 1 & s) &&
                      ((f = this._yEase), (n = p - n)),
                    (o = Lt(this._tTime, a)),
                    n === c && !r && this._initted)
                  )
                    return this;
                  s !== o &&
                    (h && this._yEase && Se(h, u),
                    !this.vars.repeatRefresh ||
                      u ||
                      this._lock ||
                      ((this._lock = r = 1),
                      (this.render(yt(a * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Ht(this, t < 0 ? t : n, r, e))
                    return (this._tTime = 0), this;
                  if (p !== this._dur) return this.render(t, e, r);
                }
                for (
                  this._tTime = _,
                    this._time = n,
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    this.ratio = l = (f || this._ease)(n / p),
                    this._from && (this.ratio = l = 1 - l),
                    n && !c && !e && fe(this, "onStart"),
                    i = this._pt;
                  i;

                )
                  i.r(l, i.d), (i = i._next);
                (h &&
                  h.render(t < 0 ? t : !n && u ? -1e-8 : h._dur * l, e, r)) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    fe(this, "onUpdate")),
                  this._repeat &&
                    s !== o &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    fe(this, "onRepeat"),
                  (_ !== this._tDur && _) ||
                    this._tTime !== _ ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (t || !p) &&
                      ((_ === this._tDur && this._ts > 0) ||
                        (!_ && this._ts < 0)) &&
                      Rt(this, 1),
                    e ||
                      (t < 0 && !c) ||
                      (!_ && !c) ||
                      (fe(
                        this,
                        _ === d ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(_ < d && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, r, n) {
                var i,
                  s,
                  a = t.ratio,
                  o =
                    e < 0 ||
                    (!e && a && !t._start && t._zTime > 1e-8 && !t._dp._lock) ||
                    t._ts < 0 ||
                    t._dp._ts < 0
                      ? 0
                      : 1,
                  u = t._rDelay,
                  l = 0;
                if (
                  (u &&
                    t._repeat &&
                    ((l = Zt(0, t._tDur, e)),
                    Lt(l, u) !== (s = Lt(t._tTime, u)) &&
                      ((a = 1 - o),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  t._initted || !Ht(t, e, n, r))
                )
                  if (o !== a || n || 1e-8 === t._zTime || (!e && t._zTime)) {
                    for (
                      s = t._zTime,
                        t._zTime = e || (r ? 1e-8 : 0),
                        r || (r = e && !s),
                        t.ratio = o,
                        t._from && (o = 1 - o),
                        t._time = 0,
                        t._tTime = l,
                        r || fe(t, "onStart"),
                        i = t._pt;
                      i;

                    )
                      i.r(o, i.d), (i = i._next);
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                      t._onUpdate && !r && fe(t, "onUpdate"),
                      l && t._repeat && !r && t.parent && fe(t, "onRepeat"),
                      (e >= t._tDur || e < 0) &&
                        t.ratio === o &&
                        (o && Rt(t, 1),
                        r ||
                          (fe(t, o ? "onComplete" : "onReverseComplete", !0),
                          t._prom && t._prom()));
                  } else t._zTime || (t._zTime = e);
              })(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._act =
                this._lazy =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (r.kill = function (t, e) {
            if (
              (void 0 === e && (e = "all"),
              !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
            )
              return ce(this);
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Ie && !0 !== Ie.vars.overwrite)
                  ._first || ce(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  qt(this, (this._dur * this.timeline._tDur) / r),
                this
              );
            }
            var n,
              i,
              s,
              a,
              o,
              u,
              l,
              h = this._targets,
              f = t ? ee(t) : h,
              c = this._ptLookup,
              d = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var r = t.length, n = r === e.length;
                  n && r-- && t[r] === e[r];

                );
                return r < 0;
              })(h, f)
            )
              return "all" === e && (this._pt = 0), ce(this);
            for (
              n = this._op = this._op || [],
                "all" !== e &&
                  (I(e) &&
                    ((o = {}),
                    vt(e, function (t) {
                      return (o[t] = 1);
                    }),
                    (e = o)),
                  (e = (function (t, e) {
                    var r,
                      n,
                      i,
                      s,
                      a = t[0] ? gt(t[0]).harness : 0,
                      o = a && a.aliases;
                    if (!o) return e;
                    for (n in ((r = kt({}, e)), o))
                      if ((n in r))
                        for (i = (s = o[n].split(",")).length; i--; )
                          r[s[i]] = r[n];
                    return r;
                  })(h, e))),
                l = h.length;
              l--;

            )
              if (~f.indexOf(h[l]))
                for (o in ((i = c[l]),
                "all" === e
                  ? ((n[l] = e), (a = i), (s = {}))
                  : ((s = n[l] = n[l] || {}), (a = e)),
                a))
                  (u = i && i[o]) &&
                    (("kill" in u.d && !0 !== u.d.kill(o)) ||
                      Dt(this, u, "_pt"),
                    delete i[o]),
                    "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && d && ce(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, r) {
            return new e(t, bt(arguments, 1));
          }),
          (e.delayedCall = function (t, r, n, i) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, r, n) {
            return new e(t, bt(arguments, 2));
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return s.killTweensOf(t, e, r);
          }),
          e
        );
      })(Fe);
    Ot(Ve.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      vt("staggerTo,staggerFrom,staggerFromTo", function (t) {
        Ve[t] = function () {
          var e = new Le(),
            r = Jt.call(arguments, 0);
          return (
            r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
          );
        };
      });
    var We = function (t, e, r) {
        return (t[e] = r);
      },
      Qe = function (t, e, r) {
        return t[e](r);
      },
      Ge = function (t, e, r, n) {
        return t[e](n.fp, r);
      },
      Ze = function (t, e, r) {
        return t.setAttribute(e, r);
      },
      $e = function (t, e) {
        return j(t[e]) ? Qe : X(t[e]) && t.setAttribute ? Ze : We;
      },
      Je = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
      },
      Ke = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      tr = function (t, e) {
        var r = e._pt,
          n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
          for (; r; )
            (n =
              r.p +
              (r.m
                ? r.m(r.s + r.c * t)
                : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
              n),
              (r = r._next);
          n += e.c;
        }
        e.set(e.t, e.p, n, e);
      },
      er = function (t, e) {
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      },
      rr = function (t, e, r, n) {
        for (var i, s = this._pt; s; )
          (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
      },
      nr = function (t) {
        for (var e, r, n = this._pt; n; )
          (r = n._next),
            (n.p === t && !n.op) || n.op === t
              ? Dt(this, n, "_pt")
              : n.dep || (e = 1),
            (n = r);
        return !e;
      },
      ir = function (t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
      },
      sr = function (t) {
        for (var e, r, n, i, s = t._pt; s; ) {
          for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
          (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
            (s._next = r) ? (r._prev = s) : (i = s),
            (s = e);
        }
        t._pt = n;
      },
      ar = (function () {
        function t(t, e, r, n, i, s, a, o, u) {
          (this.t = e),
            (this.s = n),
            (this.c = i),
            (this.p = r),
            (this.r = s || Je),
            (this.d = a || this),
            (this.set = o || We),
            (this.pr = u || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, r) {
            (this.mSet = this.mSet || this.set),
              (this.set = ir),
              (this.m = t),
              (this.mt = r),
              (this.tween = e);
          }),
          t
        );
      })();
    vt(
      pt +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (ot[t] = 1);
      }
    ),
      (tt.TweenMax = tt.TweenLite = Ve),
      (tt.TimelineLite = tt.TimelineMax = Le),
      (s = new Le({
        sortChildren: !1,
        defaults: E,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (A.stringFilter = be);
    var or = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        e.forEach(function (t) {
          return de(t);
        });
      },
      timeline: function (t) {
        return new Le(t);
      },
      getTweensOf: function (t, e) {
        return s.getTweensOf(t, e);
      },
      getProperty: function (t, e, r, n) {
        I(t) && (t = ee(t)[0]);
        var i = gt(t || {}).get,
          s = r ? Mt : Pt;
        return (
          "native" === r && (r = ""),
          t
            ? e
              ? s(((ht[e] && ht[e].get) || i)(t, e, r, n))
              : function (e, r, n) {
                  return s(((ht[e] && ht[e].get) || i)(t, e, r, n));
                }
            : t
        );
      },
      quickSetter: function (t, e, r) {
        if ((t = ee(t)).length > 1) {
          var n = t.map(function (t) {
              return hr.quickSetter(t, e, r);
            }),
            i = n.length;
          return function (t) {
            for (var e = i; e--; ) n[e](t);
          };
        }
        t = t[0] || {};
        var s = ht[e],
          a = gt(t),
          o = (a.harness && (a.harness.aliases || {})[e]) || e,
          u = s
            ? function (e) {
                var n = new s();
                (f._pt = 0),
                  n.init(t, r ? e + r : e, f, 0, [t]),
                  n.render(1, n),
                  f._pt && er(1, f);
              }
            : a.set(t, o);
        return s
          ? u
          : function (e) {
              return u(t, o, r ? e + r : e, a, 1);
            };
      },
      isTweening: function (t) {
        return s.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ae(t.ease, E.ease)), St(E, t || {});
      },
      config: function (t) {
        return St(A, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          r = t.effect,
          n = t.plugins,
          i = t.defaults,
          s = t.extendTimeline;
        (n || "").split(",").forEach(function (t) {
          return (
            t &&
            !ht[t] &&
            !tt[t] &&
            it(e + " effect requires " + t + " plugin.")
          );
        }),
          (ft[e] = function (t, e, n) {
            return r(ee(t), Ot(e || {}, i), n);
          }),
          s &&
            (Le.prototype[e] = function (t, r, n) {
              return this.add(ft[e](t, N(r) ? r : (n = r) && {}, this), n);
            });
      },
      registerEase: function (t, e) {
        Pe[t] = Ae(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Ae(t, e) : Pe;
      },
      getById: function (t) {
        return s.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var r,
          n,
          i = new Le(t);
        for (
          i.smoothChildTiming = U(t.smoothChildTiming),
            s.remove(i),
            i._dp = 0,
            i._time = i._tTime = s._time,
            r = s._first;
          r;

        )
          (n = r._next),
            (!e &&
              !r._dur &&
              r instanceof Ve &&
              r.vars.onComplete === r._targets[0]) ||
              Nt(i, r, r._start - r._delay),
            (r = n);
        return Nt(s, i, 0), i;
      },
      utils: {
        wrap: function t(e, r, n) {
          var i = r - e;
          return V(e)
            ? oe(e, t(0, e.length), r)
            : Gt(n, function (t) {
                return ((i + ((t - e) % i)) % i) + e;
              });
        },
        wrapYoyo: function t(e, r, n) {
          var i = r - e,
            s = 2 * i;
          return V(e)
            ? oe(e, t(0, e.length - 1), r)
            : Gt(n, function (t) {
                return e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t);
              });
        },
        distribute: ne,
        random: ae,
        snap: se,
        normalize: function (t, e, r) {
          return le(t, e, 0, 1, r);
        },
        getUnit: $t,
        clamp: function (t, e, r) {
          return Gt(r, function (r) {
            return Zt(t, e, r);
          });
        },
        splitColor: ge,
        toArray: ee,
        mapRange: le,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (r) {
            return t(parseFloat(r)) + (e || $t(r));
          };
        },
        interpolate: function t(e, r, n, i) {
          var s = isNaN(e + r)
            ? 0
            : function (t) {
                return (1 - t) * e + t * r;
              };
          if (!s) {
            var a,
              o,
              u,
              l,
              h,
              f = I(e),
              c = {};
            if ((!0 === n && (i = 1) && (n = null), f))
              (e = { p: e }), (r = { p: r });
            else if (V(e) && !V(r)) {
              for (u = [], l = e.length, h = l - 2, o = 1; o < l; o++)
                u.push(t(e[o - 1], e[o]));
              l--,
                (s = function (t) {
                  t *= l;
                  var e = Math.min(h, ~~t);
                  return u[e](t - e);
                }),
                (n = r);
            } else i || (e = kt(V(e) ? [] : {}, e));
            if (!u) {
              for (a in r) Ye.call(c, e, a, "get", r[a]);
              s = function (t) {
                return er(t, c) || (f ? e.p : e);
              };
            }
          }
          return Gt(n, s);
        },
        shuffle: re,
      },
      install: rt,
      effects: ft,
      ticker: we,
      updateRoot: Le.updateRoot,
      plugins: ht,
      globalTimeline: s,
      core: {
        PropTween: ar,
        globals: st,
        Tween: Ve,
        Timeline: Le,
        Animation: Fe,
        getCache: gt,
        _removeLinkedListItem: Dt,
      },
    };
    vt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (or[t] = Ve[t]);
    }),
      we.add(Le.updateRoot),
      (f = or.to({}, { duration: 0 }));
    var ur = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
          r = r._next;
        return r;
      },
      lr = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, r, n) {
            n._onInit = function (t) {
              var n, i;
              if (
                (I(r) &&
                  ((n = {}),
                  vt(r, function (t) {
                    return (n[t] = 1);
                  }),
                  (r = n)),
                e)
              ) {
                for (i in ((n = {}), r)) n[i] = e(r[i]);
                r = n;
              }
              !(function (t, e) {
                var r,
                  n,
                  i,
                  s = t._targets;
                for (r in e)
                  for (n = s.length; n--; )
                    (i = t._ptLookup[n][r]) &&
                      (i = i.d) &&
                      (i._pt && (i = ur(i, r)),
                      i && i.modifier && i.modifier(e[r], t, s[n], r));
              })(t, r);
            };
          },
        };
      },
      hr =
        or.registerPlugin(
          {
            name: "attr",
            init: function (t, e, r, n, i) {
              var s, a;
              for (s in e)
                (a = this.add(
                  t,
                  "setAttribute",
                  (t.getAttribute(s) || 0) + "",
                  e[s],
                  n,
                  i,
                  0,
                  0,
                  s
                )) && (a.op = s),
                  this._props.push(s);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
            },
          },
          lr("roundProps", ie),
          lr("modifiers"),
          lr("snap", se)
        ) || or;
    (Ve.version = Le.version = hr.version = "3.4.2"), (l = 1), H() && Te();
    var fr,
      cr,
      dr,
      pr,
      _r,
      gr,
      mr,
      vr,
      yr = Pe.Power0,
      xr = Pe.Power1,
      br = Pe.Power2,
      wr = Pe.Power3,
      Tr = Pe.Power4,
      Pr = Pe.Linear,
      Mr = Pe.Quad,
      Or = Pe.Cubic,
      Cr = Pe.Quart,
      kr = Pe.Quint,
      Sr = Pe.Strong,
      Ar = Pe.Elastic,
      Er = Pe.Back,
      Dr = Pe.SteppedEase,
      Rr = Pe.Bounce,
      zr = Pe.Sine,
      Br = Pe.Expo,
      Fr = Pe.Circ,
      Lr = {},
      Ir = 180 / Math.PI,
      jr = Math.PI / 180,
      Yr = Math.atan2,
      Xr = /([A-Z])/g,
      Nr = /(?:left|right|width|margin|padding|x)/i,
      Ur = /[\s,\(]\S/,
      Hr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      qr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      Vr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      Wr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e
        );
      },
      Qr = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      Gr = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      Zr = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      $r = function (t, e, r) {
        return (t.style[e] = r);
      },
      Jr = function (t, e, r) {
        return t.style.setProperty(e, r);
      },
      Kr = function (t, e, r) {
        return (t._gsap[e] = r);
      },
      tn = function (t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
      },
      en = function (t, e, r, n, i) {
        var s = t._gsap;
        (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
      },
      rn = function (t, e, r, n, i) {
        var s = t._gsap;
        (s[e] = r), s.renderTransform(i, s);
      },
      nn = "transform",
      sn = nn + "Origin",
      an = function (t, e) {
        var r = cr.createElementNS
          ? cr.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t
            )
          : cr.createElement(t);
        return r.style ? r : cr.createElement(t);
      },
      on = function t(e, r, n) {
        var i = getComputedStyle(e);
        return (
          i[r] ||
          i.getPropertyValue(r.replace(Xr, "-$1").toLowerCase()) ||
          i.getPropertyValue(r) ||
          (!n && t(e, ln(r) || r, 1)) ||
          ""
        );
      },
      un = "O,Moz,ms,Ms,Webkit".split(","),
      ln = function (t, e, r) {
        var n = (e || _r).style,
          i = 5;
        if (t in n && !r) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          i-- && !(un[i] + t in n);

        );
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? un[i] : "") + t;
      },
      hn = function () {
        "undefined" != typeof window &&
          window.document &&
          ((fr = window),
          (cr = fr.document),
          (dr = cr.documentElement),
          (_r = an("div") || { style: {} }),
          (gr = an("div")),
          (nn = ln(nn)),
          (sn = nn + "Origin"),
          (_r.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (vr = !!ln("perspective")),
          (pr = 1));
      },
      fn = function t(e) {
        var r,
          n = an(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          i = this.parentNode,
          s = this.nextSibling,
          a = this.style.cssText;
        if (
          (dr.appendChild(n),
          n.appendChild(this),
          (this.style.display = "block"),
          e)
        )
          try {
            (r = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (r = this._gsapBBox());
        return (
          i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
          dr.removeChild(n),
          (this.style.cssText = a),
          r
        );
      },
      cn = function (t, e) {
        for (var r = e.length; r--; )
          if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      },
      dn = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (r) {
          e = fn.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === fn ||
            (e = fn.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +cn(t, ["x", "cx", "x1"]) || 0,
                y: +cn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      pn = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !dn(t));
      },
      _n = function (t, e) {
        if (e) {
          var r = t.style;
          e in Lr && e !== sn && (e = nn),
            r.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                r.removeProperty(e.replace(Xr, "-$1").toLowerCase()))
              : r.removeAttribute(e);
        }
      },
      gn = function (t, e, r, n, i, s) {
        var a = new ar(t._pt, e, r, 0, 1, s ? Zr : Gr);
        return (t._pt = a), (a.b = n), (a.e = i), t._props.push(r), a;
      },
      mn = { deg: 1, rad: 1, turn: 1 },
      vn = function t(e, r, n, i) {
        var s,
          a,
          o,
          u,
          l = parseFloat(n) || 0,
          h = (n + "").trim().substr((l + "").length) || "px",
          f = _r.style,
          c = Nr.test(r),
          d = "svg" === e.tagName.toLowerCase(),
          p = (d ? "client" : "offset") + (c ? "Width" : "Height"),
          _ = "px" === i,
          g = "%" === i;
        return i === h || !l || mn[i] || mn[h]
          ? l
          : ("px" !== h && !_ && (l = t(e, r, n, "px")),
            (u = e.getCTM && pn(e)),
            g && (Lr[r] || ~r.indexOf("adius"))
              ? yt((l / (u ? e.getBBox()[c ? "width" : "height"] : e[p])) * 100)
              : ((f[c ? "width" : "height"] = 100 + (_ ? h : i)),
                (a =
                  ~r.indexOf("adius") || ("em" === i && e.appendChild && !d)
                    ? e
                    : e.parentNode),
                u && (a = (e.ownerSVGElement || {}).parentNode),
                (a && a !== cr && a.appendChild) || (a = cr.body),
                (o = a._gsap) && g && o.width && c && o.time === we.time
                  ? yt((l / o.width) * 100)
                  : ((g || "%" === h) && (f.position = on(e, "position")),
                    a === e && (f.position = "static"),
                    a.appendChild(_r),
                    (s = _r[p]),
                    a.removeChild(_r),
                    (f.position = "absolute"),
                    c && g && (((o = gt(a)).time = we.time), (o.width = a[p])),
                    yt(_ ? (s * l) / 100 : s && l ? (100 / s) * l : 0))));
      },
      yn = function (t, e, r, n) {
        var i;
        return (
          pr || hn(),
          e in Hr &&
            "transform" !== e &&
            ~(e = Hr[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          Lr[e] && "transform" !== e
            ? ((i = An(t, n)),
              (i =
                "transformOrigin" !== e
                  ? i[e]
                  : En(on(t, sn)) + " " + i.zOrigin + "px"))
            : (!(i = t.style[e]) ||
                "auto" === i ||
                n ||
                ~(i + "").indexOf("calc(")) &&
              (i =
                (Tn[e] && Tn[e](t, e, r)) ||
                on(t, e) ||
                mt(t, e) ||
                ("opacity" === e ? 1 : 0)),
          r && !~(i + "").indexOf(" ") ? vn(t, e, i, r) + r : i
        );
      },
      xn = function (t, e, r, n) {
        if (!r || "none" === r) {
          var i = ln(e, t, 1),
            s = i && on(t, i, 1);
          s && s !== r
            ? ((e = i), (r = s))
            : "borderColor" === e && (r = on(t, "borderTopColor"));
        }
        var a,
          o,
          u,
          l,
          h,
          f,
          c,
          d,
          p,
          _,
          g,
          m,
          v = new ar(this._pt, t.style, e, 0, 1, tr),
          y = 0,
          x = 0;
        if (
          ((v.b = r),
          (v.e = n),
          (r += ""),
          "auto" === (n += "") &&
            ((t.style[e] = n), (n = on(t, e) || n), (t.style[e] = r)),
          be((a = [r, n])),
          (n = a[1]),
          (u = (r = a[0]).match(G) || []),
          (n.match(G) || []).length)
        ) {
          for (; (o = G.exec(n)); )
            (c = o[0]),
              (p = n.substring(y, o.index)),
              h
                ? (h = (h + 1) % 5)
                : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                  (h = 1),
              c !== (f = u[x++] || "") &&
                ((l = parseFloat(f) || 0),
                (g = f.substr((l + "").length)),
                (m = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0) &&
                  (c = c.substr(2)),
                (d = parseFloat(c)),
                (_ = c.substr((d + "").length)),
                (y = G.lastIndex - _.length),
                _ ||
                  ((_ = _ || A.units[e] || g),
                  y === n.length && ((n += _), (v.e += _))),
                g !== _ && (l = vn(t, e, f, _) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: p || 1 === x ? p : ",",
                  s: l,
                  c: m ? m * d : d - l,
                  m: h && h < 4 ? Math.round : 0,
                }));
          v.c = y < n.length ? n.substring(y, n.length) : "";
        } else v.r = "display" === e && "none" === n ? Zr : Gr;
        return J.test(n) && (v.e = 0), (this._pt = v), v;
      },
      bn = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      wn = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var r,
            n,
            i,
            s = e.t,
            a = s.style,
            o = e.u,
            u = s._gsap;
          if ("all" === o || !0 === o) (a.cssText = ""), (n = 1);
          else
            for (i = (o = o.split(",")).length; --i > -1; )
              (r = o[i]),
                Lr[r] && ((n = 1), (r = "transformOrigin" === r ? sn : nn)),
                _n(s, r);
          n &&
            (_n(s, nn),
            u &&
              (u.svg && s.removeAttribute("transform"),
              An(s, 1),
              (u.uncache = 1)));
        }
      },
      Tn = {
        clearProps: function (t, e, r, n, i) {
          if ("isFromStart" !== i.data) {
            var s = (t._pt = new ar(t._pt, e, r, 0, 0, wn));
            return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1;
          }
        },
      },
      Pn = [1, 0, 0, 1, 0, 0],
      Mn = {},
      On = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      Cn = function (t) {
        var e = on(t, nn);
        return On(e) ? Pn : e.substr(7).match(Q).map(yt);
      },
      kn = function (t, e) {
        var r,
          n,
          i,
          s,
          a = t._gsap || gt(t),
          o = t.style,
          u = Cn(t);
        return a.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (u = [
              (i = t.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(",")
            ? Pn
            : u
          : (u !== Pn ||
              t.offsetParent ||
              t === dr ||
              a.svg ||
              ((i = o.display),
              (o.display = "block"),
              ((r = t.parentNode) && t.offsetParent) ||
                ((s = 1), (n = t.nextSibling), dr.appendChild(t)),
              (u = Cn(t)),
              i ? (o.display = i) : _n(t, "display"),
              s &&
                (n
                  ? r.insertBefore(t, n)
                  : r
                  ? r.appendChild(t)
                  : dr.removeChild(t))),
            e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
      },
      Sn = function (t, e, r, n, i, s) {
        var a,
          o,
          u,
          l = t._gsap,
          h = i || kn(t, !0),
          f = l.xOrigin || 0,
          c = l.yOrigin || 0,
          d = l.xOffset || 0,
          p = l.yOffset || 0,
          _ = h[0],
          g = h[1],
          m = h[2],
          v = h[3],
          y = h[4],
          x = h[5],
          b = e.split(" "),
          w = parseFloat(b[0]) || 0,
          T = parseFloat(b[1]) || 0;
        r
          ? h !== Pn &&
            (o = _ * v - g * m) &&
            ((u = w * (-g / o) + T * (_ / o) - (_ * x - g * y) / o),
            (w = w * (v / o) + T * (-m / o) + (m * x - v * y) / o),
            (T = u))
          : ((w =
              (a = dn(t)).x + (~b[0].indexOf("%") ? (w / 100) * a.width : w)),
            (T =
              a.y + (~(b[1] || b[0]).indexOf("%") ? (T / 100) * a.height : T))),
          n || (!1 !== n && l.smooth)
            ? ((y = w - f),
              (x = T - c),
              (l.xOffset = d + (y * _ + x * m) - y),
              (l.yOffset = p + (y * g + x * v) - x))
            : (l.xOffset = l.yOffset = 0),
          (l.xOrigin = w),
          (l.yOrigin = T),
          (l.smooth = !!n),
          (l.origin = e),
          (l.originIsAbsolute = !!r),
          (t.style[sn] = "0px 0px"),
          s &&
            (gn(s, l, "xOrigin", f, w),
            gn(s, l, "yOrigin", c, T),
            gn(s, l, "xOffset", d, l.xOffset),
            gn(s, l, "yOffset", p, l.yOffset)),
          t.setAttribute("data-svg-origin", w + " " + T);
      },
      An = function (t, e) {
        var r = t._gsap || new Be(t);
        if ("x" in r && !e && !r.uncache) return r;
        var n,
          i,
          s,
          a,
          o,
          u,
          l,
          h,
          f,
          c,
          d,
          p,
          _,
          g,
          m,
          v,
          y,
          x,
          b,
          w,
          T,
          P,
          M,
          O,
          C,
          k,
          S,
          E,
          D,
          R,
          z,
          B,
          F = t.style,
          L = r.scaleX < 0,
          I = on(t, sn) || "0";
        return (
          (n = i = s = u = l = h = f = c = d = 0),
          (a = o = 1),
          (r.svg = !(!t.getCTM || !pn(t))),
          (g = kn(t, r.svg)),
          r.svg &&
            ((O = !r.uncache && t.getAttribute("data-svg-origin")),
            Sn(t, O || I, !!O || r.originIsAbsolute, !1 !== r.smooth, g)),
          (p = r.xOrigin || 0),
          (_ = r.yOrigin || 0),
          g !== Pn &&
            ((x = g[0]),
            (b = g[1]),
            (w = g[2]),
            (T = g[3]),
            (n = P = g[4]),
            (i = M = g[5]),
            6 === g.length
              ? ((a = Math.sqrt(x * x + b * b)),
                (o = Math.sqrt(T * T + w * w)),
                (u = x || b ? Yr(b, x) * Ir : 0),
                (f = w || T ? Yr(w, T) * Ir + u : 0) && (o *= Math.cos(f * jr)),
                r.svg &&
                  ((n -= p - (p * x + _ * w)), (i -= _ - (p * b + _ * T))))
              : ((B = g[6]),
                (R = g[7]),
                (S = g[8]),
                (E = g[9]),
                (D = g[10]),
                (z = g[11]),
                (n = g[12]),
                (i = g[13]),
                (s = g[14]),
                (l = (m = Yr(B, D)) * Ir),
                m &&
                  ((O = P * (v = Math.cos(-m)) + S * (y = Math.sin(-m))),
                  (C = M * v + E * y),
                  (k = B * v + D * y),
                  (S = P * -y + S * v),
                  (E = M * -y + E * v),
                  (D = B * -y + D * v),
                  (z = R * -y + z * v),
                  (P = O),
                  (M = C),
                  (B = k)),
                (h = (m = Yr(-w, D)) * Ir),
                m &&
                  ((v = Math.cos(-m)),
                  (z = T * (y = Math.sin(-m)) + z * v),
                  (x = O = x * v - S * y),
                  (b = C = b * v - E * y),
                  (w = k = w * v - D * y)),
                (u = (m = Yr(b, x)) * Ir),
                m &&
                  ((O = x * (v = Math.cos(m)) + b * (y = Math.sin(m))),
                  (C = P * v + M * y),
                  (b = b * v - x * y),
                  (M = M * v - P * y),
                  (x = O),
                  (P = C)),
                l &&
                  Math.abs(l) + Math.abs(u) > 359.9 &&
                  ((l = u = 0), (h = 180 - h)),
                (a = yt(Math.sqrt(x * x + b * b + w * w))),
                (o = yt(Math.sqrt(M * M + B * B))),
                (m = Yr(P, M)),
                (f = Math.abs(m) > 2e-4 ? m * Ir : 0),
                (d = z ? 1 / (z < 0 ? -z : z) : 0)),
            r.svg &&
              ((O = t.getAttribute("transform")),
              (r.forceCSS = t.setAttribute("transform", "") || !On(on(t, nn))),
              O && t.setAttribute("transform", O))),
          Math.abs(f) > 90 &&
            Math.abs(f) < 270 &&
            (L
              ? ((a *= -1),
                (f += u <= 0 ? 180 : -180),
                (u += u <= 0 ? 180 : -180))
              : ((o *= -1), (f += f <= 0 ? 180 : -180))),
          (r.x =
            ((r.xPercent =
              n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
              ? 0
              : n) + "px"),
          (r.y =
            ((r.yPercent =
              i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)
              ? 0
              : i) + "px"),
          (r.z = s + "px"),
          (r.scaleX = yt(a)),
          (r.scaleY = yt(o)),
          (r.rotation = yt(u) + "deg"),
          (r.rotationX = yt(l) + "deg"),
          (r.rotationY = yt(h) + "deg"),
          (r.skewX = f + "deg"),
          (r.skewY = c + "deg"),
          (r.transformPerspective = d + "px"),
          (r.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (F[sn] = En(I)),
          (r.xOffset = r.yOffset = 0),
          (r.force3D = A.force3D),
          (r.renderTransform = r.svg ? Bn : vr ? zn : Rn),
          (r.uncache = 0),
          r
        );
      },
      En = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      Dn = function (t, e, r) {
        var n = $t(e);
        return yt(parseFloat(e) + parseFloat(vn(t, "x", r + "px", n))) + n;
      },
      Rn = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          zn(t, e);
      },
      zn = function (t, e) {
        var r = e || this,
          n = r.xPercent,
          i = r.yPercent,
          s = r.x,
          a = r.y,
          o = r.z,
          u = r.rotation,
          l = r.rotationY,
          h = r.rotationX,
          f = r.skewX,
          c = r.skewY,
          d = r.scaleX,
          p = r.scaleY,
          _ = r.transformPerspective,
          g = r.force3D,
          m = r.target,
          v = r.zOrigin,
          y = "",
          x = ("auto" === g && t && 1 !== t) || !0 === g;
        if (v && ("0deg" !== h || "0deg" !== l)) {
          var b,
            w = parseFloat(l) * jr,
            T = Math.sin(w),
            P = Math.cos(w);
          (w = parseFloat(h) * jr),
            (b = Math.cos(w)),
            (s = Dn(m, s, T * b * -v)),
            (a = Dn(m, a, -Math.sin(w) * -v)),
            (o = Dn(m, o, P * b * -v + v));
        }
        "0px" !== _ && (y += "perspective(" + _ + ") "),
          (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
          (x || "0px" !== s || "0px" !== a || "0px" !== o) &&
            (y +=
              "0px" !== o || x
                ? "translate3d(" + s + ", " + a + ", " + o + ") "
                : "translate(" + s + ", " + a + ") "),
          "0deg" !== u && (y += "rotate(" + u + ") "),
          "0deg" !== l && (y += "rotateY(" + l + ") "),
          "0deg" !== h && (y += "rotateX(" + h + ") "),
          ("0deg" === f && "0deg" === c) ||
            (y += "skew(" + f + ", " + c + ") "),
          (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + ") "),
          (m.style[nn] = y || "translate(0, 0)");
      },
      Bn = function (t, e) {
        var r,
          n,
          i,
          s,
          a,
          o = e || this,
          u = o.xPercent,
          l = o.yPercent,
          h = o.x,
          f = o.y,
          c = o.rotation,
          d = o.skewX,
          p = o.skewY,
          _ = o.scaleX,
          g = o.scaleY,
          m = o.target,
          v = o.xOrigin,
          y = o.yOrigin,
          x = o.xOffset,
          b = o.yOffset,
          w = o.forceCSS,
          T = parseFloat(h),
          P = parseFloat(f);
        (c = parseFloat(c)),
          (d = parseFloat(d)),
          (p = parseFloat(p)) && ((d += p = parseFloat(p)), (c += p)),
          c || d
            ? ((c *= jr),
              (d *= jr),
              (r = Math.cos(c) * _),
              (n = Math.sin(c) * _),
              (i = Math.sin(c - d) * -g),
              (s = Math.cos(c - d) * g),
              d &&
                ((p *= jr),
                (a = Math.tan(d - p)),
                (i *= a = Math.sqrt(1 + a * a)),
                (s *= a),
                p &&
                  ((a = Math.tan(p)),
                  (r *= a = Math.sqrt(1 + a * a)),
                  (n *= a))),
              (r = yt(r)),
              (n = yt(n)),
              (i = yt(i)),
              (s = yt(s)))
            : ((r = _), (s = g), (n = i = 0)),
          ((T && !~(h + "").indexOf("px")) ||
            (P && !~(f + "").indexOf("px"))) &&
            ((T = vn(m, "x", h, "px")), (P = vn(m, "y", f, "px"))),
          (v || y || x || b) &&
            ((T = yt(T + v - (v * r + y * i) + x)),
            (P = yt(P + y - (v * n + y * s) + b))),
          (u || l) &&
            ((a = m.getBBox()),
            (T = yt(T + (u / 100) * a.width)),
            (P = yt(P + (l / 100) * a.height))),
          (a =
            "matrix(" +
            r +
            "," +
            n +
            "," +
            i +
            "," +
            s +
            "," +
            T +
            "," +
            P +
            ")"),
          m.setAttribute("transform", a),
          w && (m.style[nn] = a);
      },
      Fn = function (t, e, r, n, i, s) {
        var a,
          o,
          u = I(i),
          l = parseFloat(i) * (u && ~i.indexOf("rad") ? Ir : 1),
          h = s ? l * s : l - n,
          f = n + h + "deg";
        return (
          u &&
            ("short" === (a = i.split("_")[1]) &&
              (h %= 360) !== h % 180 &&
              (h += h < 0 ? 360 : -360),
            "cw" === a && h < 0
              ? (h = ((h + 36e9) % 360) - 360 * ~~(h / 360))
              : "ccw" === a &&
                h > 0 &&
                (h = ((h - 36e9) % 360) - 360 * ~~(h / 360))),
          (t._pt = o = new ar(t._pt, e, r, n, h, Vr)),
          (o.e = f),
          (o.u = "deg"),
          t._props.push(r),
          o
        );
      },
      Ln = function (t, e, r) {
        var n,
          i,
          s,
          a,
          o,
          u,
          l,
          h = gr.style,
          f = r._gsap;
        for (i in ((h.cssText =
          getComputedStyle(r).cssText + ";position:absolute;display:block;"),
        (h[nn] = e),
        cr.body.appendChild(gr),
        (n = An(gr, 1)),
        Lr))
          (s = f[i]) !== (a = n[i]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
            ((o = $t(s) !== (l = $t(a)) ? vn(r, i, s, l) : parseFloat(s)),
            (u = parseFloat(a)),
            (t._pt = new ar(t._pt, f, i, o, u - o, qr)),
            (t._pt.u = l || 0),
            t._props.push(i));
        cr.body.removeChild(gr);
      };
    /*!
     * CSSPlugin 3.4.2
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ vt("padding,margin,Width,Radius", function (t, e) {
      var r = "Top",
        n = "Right",
        i = "Bottom",
        s = "Left",
        a = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (
          r
        ) {
          return e < 2 ? t + r : "border" + r + t;
        });
      Tn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
        var s, o;
        if (arguments.length < 4)
          return (
            (s = a.map(function (e) {
              return yn(t, e, r);
            })),
            5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
          );
        (s = (n + "").split(" ")),
          (o = {}),
          a.forEach(function (t, e) {
            return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
          }),
          t.init(e, o, i);
      };
    });
    var In,
      jn,
      Yn = {
        name: "css",
        register: hn,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var s,
            a,
            o,
            u,
            l,
            h,
            f,
            c,
            d,
            p,
            _,
            g,
            m,
            v,
            y,
            x,
            b,
            w,
            T,
            P = this._props,
            M = t.style;
          for (f in (pr || hn(), e))
            if (
              "autoRound" !== f &&
              ((a = e[f]), !ht[f] || !Xe(f, e, r, n, t, i))
            )
              if (
                ((l = typeof a),
                (h = Tn[f]),
                "function" === l && (l = typeof (a = a.call(r, n, t, i))),
                "string" === l && ~a.indexOf("random(") && (a = ue(a)),
                h)
              )
                h(this, t, f, a, r) && (y = 1);
              else if ("--" === f.substr(0, 2))
                this.add(
                  M,
                  "setProperty",
                  getComputedStyle(t).getPropertyValue(f) + "",
                  a + "",
                  n,
                  i,
                  0,
                  0,
                  f
                );
              else {
                if (
                  ((s = yn(t, f)),
                  (u = parseFloat(s)),
                  (p =
                    "string" === l && "=" === a.charAt(1)
                      ? +(a.charAt(0) + "1")
                      : 0) && (a = a.substr(2)),
                  (o = parseFloat(a)),
                  f in Hr &&
                    ("autoAlpha" === f &&
                      (1 === u &&
                        "hidden" === yn(t, "visibility") &&
                        o &&
                        (u = 0),
                      gn(
                        this,
                        M,
                        "visibility",
                        u ? "inherit" : "hidden",
                        o ? "inherit" : "hidden",
                        !o
                      )),
                    "scale" !== f &&
                      "transform" !== f &&
                      ~(f = Hr[f]).indexOf(",") &&
                      (f = f.split(",")[0])),
                  (_ = f in Lr))
                )
                  if (
                    (g ||
                      ((m = t._gsap).renderTransform || An(t),
                      (v = !1 !== e.smoothOrigin && m.smooth),
                      ((g = this._pt =
                        new ar(
                          this._pt,
                          M,
                          nn,
                          0,
                          1,
                          m.renderTransform,
                          m,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === f)
                  )
                    (this._pt = new ar(
                      this._pt,
                      m,
                      "scaleY",
                      m.scaleY,
                      p ? p * o : o - m.scaleY
                    )),
                      P.push("scaleY", f),
                      (f += "X");
                  else {
                    if ("transformOrigin" === f) {
                      (b = void 0),
                        (w = void 0),
                        (T = void 0),
                        (b = (x = a).split(" ")),
                        (w = b[0]),
                        (T = b[1] || "50%"),
                        ("top" !== w &&
                          "bottom" !== w &&
                          "left" !== T &&
                          "right" !== T) ||
                          ((x = w), (w = T), (T = x)),
                        (b[0] = bn[w] || w),
                        (b[1] = bn[T] || T),
                        (a = b.join(" ")),
                        m.svg
                          ? Sn(t, a, 0, v, 0, this)
                          : ((d = parseFloat(a.split(" ")[2]) || 0) !==
                              m.zOrigin && gn(this, m, "zOrigin", m.zOrigin, d),
                            gn(this, M, f, En(s), En(a)));
                      continue;
                    }
                    if ("svgOrigin" === f) {
                      Sn(t, a, 1, v, 0, this);
                      continue;
                    }
                    if (f in Mn) {
                      Fn(this, m, f, u, a, p);
                      continue;
                    }
                    if ("smoothOrigin" === f) {
                      gn(this, m, "smooth", m.smooth, a);
                      continue;
                    }
                    if ("force3D" === f) {
                      m[f] = a;
                      continue;
                    }
                    if ("transform" === f) {
                      Ln(this, a, t);
                      continue;
                    }
                  }
                else f in M || (f = ln(f) || f);
                if (
                  _ ||
                  ((o || 0 === o) && (u || 0 === u) && !Ur.test(a) && f in M)
                )
                  o || (o = 0),
                    (c = (s + "").substr((u + "").length)) !==
                      (d =
                        (a + "").substr((o + "").length) ||
                        (f in A.units ? A.units[f] : c)) &&
                      (u = vn(t, f, s, d)),
                    (this._pt = new ar(
                      this._pt,
                      _ ? m : M,
                      f,
                      u,
                      p ? p * o : o - u,
                      "px" !== d || !1 === e.autoRound || _ ? qr : Qr
                    )),
                    (this._pt.u = d || 0),
                    c !== d && ((this._pt.b = s), (this._pt.r = Wr));
                else if (f in M) xn.call(this, t, f, s, a);
                else {
                  if (!(f in t)) {
                    nt(f, a);
                    continue;
                  }
                  this.add(t, f, t[f], a, n, i);
                }
                P.push(f);
              }
          y && sr(this);
        },
        get: yn,
        aliases: Hr,
        getSetter: function (t, e, r) {
          var n = Hr[e];
          return (
            n && n.indexOf(",") < 0 && (e = n),
            e in Lr && e !== sn && (t._gsap.x || yn(t, "x"))
              ? r && mr === r
                ? "scale" === e
                  ? tn
                  : Kr
                : (mr = r || {}) && ("scale" === e ? en : rn)
              : t.style && !X(t.style[e])
              ? $r
              : ~e.indexOf("-")
              ? Jr
              : $e(t, e)
          );
        },
        core: { _removeProperty: _n, _getMatrix: kn },
      };
    (hr.utils.checkPrefix = ln),
      (jn = vt(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (In = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          Lr[t] = 1;
        }
      )),
      vt(In, function (t) {
        (A.units[t] = "deg"), (Mn[t] = 1);
      }),
      (Hr[jn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + In),
      vt(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          Hr[e[1]] = jn[e[0]];
        }
      ),
      vt(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          A.units[t] = "px";
        }
      ),
      hr.registerPlugin(Yn);
    var Xn = hr.registerPlugin(Yn) || hr,
      Nn = Xn.core.Tween;
  },
]);
