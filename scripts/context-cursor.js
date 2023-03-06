var Li = Object.defineProperty;
var Bi = (o, t, e) => t in o ? Li(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var zt = (o, t, e) => (Bi(o, typeof t != "symbol" ? t + "" : t, e), e);
const Ii = (o) => {
  const t = document.createElement("div");
  return t.setAttribute(
    "style",
    `transform: translate(-200px, -200px); height: ${o.radius}px; width: ${o.radius}px;`
  ), t.setAttribute("class", "c-cursor"), document.body.prepend(t), t;
}, Ni = `
:root {
  --main-cursor-clr: rgb(0, 0, 0, 0.2);
  --main-cursor-hover-clr: rgb(0, 0, 0, 0.07);
  --ghost-shadow: 0 7px 15px rgba(0, 0, 0, 0.14); }

body {
  margin: 0;
  padding: 0; }

.c-cursor {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  border-radius: 200px;
  background-color: var(--main-cursor-clr);
  transition: background-color 0.2s ease-in-out;
}

.c-cursor_active {
  background-color: var(--main-cursor-hover-clr);
}

.c-cursor-lift_active {
  background-color: rgba(0,0,0,0);
}
`, Vi = () => {
  var o = document.createElement("style");
  o.type = "text/css", o.innerText = Ni, document.head.appendChild(o);
}, ye = (o, t, e, r) => (o - t - e / 2) / r, nt = {
  dataAttr: "data-ccursor",
  noPadding: "noPadding",
  noParallax: "noParallax",
  lift: "lift"
}, _t = (o, t) => {
  var e;
  return !!((e = o.getAttribute(nt.dataAttr)) != null && e.includes(t));
}, Yi = (o) => getComputedStyle(document.documentElement).getPropertyValue(o);
function yt(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function Ir(o, t) {
  o.prototype = Object.create(t.prototype), o.prototype.constructor = o, o.__proto__ = t;
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var et = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Zt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, nr, G, V, ot = 1e8, D = 1 / ot, Xe = Math.PI * 2, Ui = Xe / 4, Xi = 0, Nr = Math.sqrt, qi = Math.cos, Wi = Math.sin, X = function(t) {
  return typeof t == "string";
}, z = function(t) {
  return typeof t == "function";
}, Tt = function(t) {
  return typeof t == "number";
}, sr = function(t) {
  return typeof t > "u";
}, pt = function(t) {
  return typeof t == "object";
}, Q = function(t) {
  return t !== !1;
}, Vr = function() {
  return typeof window < "u";
}, xe = function(t) {
  return z(t) || X(t);
}, Yr = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, H = Array.isArray, qe = /(?:-?\.?\d|\.)+/gi, Ur = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Gt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Fe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Xr = /[+-]=-?[.\d]+/, qr = /[^,'"\[\]\s]+/gi, Gi = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, A, at, We, ar, rt = {}, we = {}, Wr, Gr = function(t) {
  return (we = Xt(t, rt)) && it;
}, or = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Se = function(t, e) {
  return !e && console.warn(t);
}, Hr = function(t, e) {
  return t && (rt[t] = e) && we && (we[t] = e) || rt;
}, le = function() {
  return 0;
}, Hi = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ve = {
  suppressEvents: !0,
  kill: !1
}, $i = {
  suppressEvents: !0
}, ur = {}, Ct = [], Ge = {}, $r, J = {}, ze = {}, Tr = 30, Te = [], hr = "", fr = function(t) {
  var e = t[0], r, i;
  if (pt(e) || z(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = Te.length; i-- && !Te[i].targetTest(e); )
      ;
    r = Te[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new gi(t[i], r))) || t.splice(i, 1);
  return t;
}, Vt = function(t) {
  return t._gsap || fr(ut(t))[0]._gsap;
}, Kr = function(t, e, r) {
  return (r = t[e]) && z(r) ? t[e]() : sr(r) && t.getAttribute && t.getAttribute(e) || r;
}, Z = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, L = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, q = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, $t = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, Ki = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Pe = function() {
  var t = Ct.length, e = Ct.slice(0), r, i;
  for (Ge = {}, Ct.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Qr = function(t, e, r, i) {
  Ct.length && !G && Pe(), t.render(e, r, i || G && e < 0 && (t._initted || t._startAt)), Ct.length && !G && Pe();
}, Zr = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(qr).length < 2 ? e : X(t) ? t.trim() : t;
}, jr = function(t) {
  return t;
}, ft = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, Qi = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, Xt = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, br = function o(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = pt(e[r]) ? o(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Ce = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, ue = function(t) {
  var e = t.parent || A, r = t.keyframes ? Qi(H(t.keyframes)) : ft;
  if (Q(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Zi = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, Jr = function(t, e, r, i, n) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var s = t[i], a;
  if (n)
    for (a = e[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
}, Re = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
}, kt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
}, Yt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, ji = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, He = function(t, e, r, i) {
  return t._startAt && (G ? t._startAt.revert(ve) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, Ji = function o(t) {
  return !t || t._ts && o(t.parent);
}, wr = function(t) {
  return t._repeat ? jt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, jt = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, Oe = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Ae = function(t) {
  return t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0));
}, Ee = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = q(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ae(t), r._dirty || Yt(r, t)), t;
}, ti = function(t, e) {
  var r;
  if ((e._time || e._initted && !e._dur) && (r = Oe(t.rawTime(), e), (!e._dur || me(0, e.totalDuration(), r) - e._tTime > D) && e.render(r, !0)), Yt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -D;
  }
}, ct = function(t, e, r, i) {
  return e.parent && kt(e), e._start = q((Tt(r) ? r : r || t !== A ? st(t, r, e) : t._time) + e._delay), e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Jr(t, e, "_first", "_last", t._sort ? "_start" : 0), $e(e) || (t._recent = e), i || ti(t, e), t._ts < 0 && Ee(t, t._tTime), t;
}, ei = function(t, e) {
  return (rt.ScrollTrigger || or("scrollTrigger", e)) && rt.ScrollTrigger.create(e, t);
}, ri = function(t, e, r, i, n) {
  if (_r(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !G && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && $r !== tt.frame)
    return Ct.push(t), t._lazy = [n, i], 1;
}, tn = function o(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e));
}, $e = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, en = function(t, e, r, i) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && tn(t) && !(!t._initted && $e(t)) || (t._ts < 0 || t._dp._ts < 0) && !$e(t)) ? 0 : 1, a = t._rDelay, u = 0, h, f, _;
  if (a && t._repeat && (u = me(0, t._tDur, e), f = jt(u, a), t._yoyo && f & 1 && (s = 1 - s), f !== jt(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || G || i || t._zTime === D || !e && t._zTime) {
    if (!t._initted && ri(t, e, i, r, u))
      return;
    for (_ = t._zTime, t._zTime = e || (r ? D : 0), r || (r = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, h = t._pt; h; )
      h.r(s, h.d), h = h._next;
    e < 0 && He(t, e, r, !0), t._onUpdate && !r && ht(t, "onUpdate"), u && t._repeat && !r && t.parent && ht(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && kt(t, 1), !r && !G && (ht(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, rn = function(t, e, r) {
  var i;
  if (r > e)
    for (i = t._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, Jt = function(t, e, r, i) {
  var n = t._repeat, s = q(e) || 0, a = t._tTime / t._tDur;
  return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && Ee(t, t._tTime = t._tDur * a), t.parent && Ae(t), r || Yt(t.parent, t), t;
}, Sr = function(t) {
  return t instanceof K ? Yt(t) : Jt(t, t._dur);
}, nn = {
  _start: 0,
  endTime: le,
  totalDuration: le
}, st = function o(t, e, r) {
  var i = t.labels, n = t._recent || nn, s = t.duration() >= ot ? n.endTime(!1) : t._dur, a, u, h;
  return X(e) && (isNaN(e) || e in i) ? (u = e.charAt(0), h = e.substr(-1) === "%", a = e.indexOf("="), u === "<" || u === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (h ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = s), i[e]) : (u = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), h && r && (u = u / 100 * (H(r) ? r[0] : r).totalDuration()), a > 1 ? o(t, e.substr(0, a - 1), r) + u : s + u)) : e == null ? s : +e;
}, he = function(t, e, r) {
  var i = Tt(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, u;
  if (i && (s.duration = e[1]), s.parent = r, t) {
    for (a = s, u = r; u && !("immediateRender" in a); )
      a = u.vars.defaults || {}, u = Q(u.vars.inherit) && u.parent;
    s.immediateRender = Q(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new U(e[0], s, e[n + 1]);
}, Dt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, me = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, W = function(t, e) {
  return !X(t) || !(e = Gi.exec(t)) ? "" : e[1];
}, sn = function(t, e, r) {
  return Dt(r, function(i) {
    return me(t, e, i);
  });
}, Ke = [].slice, ii = function(t, e) {
  return t && pt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && pt(t[0])) && !t.nodeType && t !== at;
}, an = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return X(i) && !e || ii(i, 1) ? (n = r).push.apply(n, ut(i)) : r.push(i);
  }) || r;
}, ut = function(t, e, r) {
  return V && !e && V.selector ? V.selector(t) : X(t) && !r && (We || !te()) ? Ke.call((e || ar).querySelectorAll(t), 0) : H(t) ? an(t, r) : ii(t) ? Ke.call(t, 0) : t ? [t] : [];
}, Qe = function(t) {
  return t = ut(t)[0] || Se("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return ut(e, r.querySelectorAll ? r : r === t ? Se("Invalid scope") || ar.createElement("div") : t);
  };
}, ni = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, si = function(t) {
  if (z(t))
    return t;
  var e = pt(t) ? t : {
    each: t
  }, r = Ut(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, s = {}, a = i > 0 && i < 1, u = isNaN(i) || a, h = e.axis, f = i, _ = i;
  return X(i) ? f = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && u && (f = i[0], _ = i[1]), function(c, d, p) {
    var l = (p || e).length, g = s[l], m, y, v, T, x, P, S, w, b;
    if (!g) {
      if (b = e.grid === "auto" ? 0 : (e.grid || [1, ot])[1], !b) {
        for (S = -ot; S < (S = p[b++].getBoundingClientRect().left) && b < l; )
          ;
        b--;
      }
      for (g = s[l] = [], m = u ? Math.min(b, l) * f - 0.5 : i % b, y = b === ot ? 0 : u ? l * _ / b - 0.5 : i / b | 0, S = 0, w = ot, P = 0; P < l; P++)
        v = P % b - m, T = y - (P / b | 0), g[P] = x = h ? Math.abs(h === "y" ? T : v) : Nr(v * v + T * T), x > S && (S = x), x < w && (w = x);
      i === "random" && ni(g), g.max = S - w, g.min = w, g.v = l = (parseFloat(e.amount) || parseFloat(e.each) * (b > l ? l - 1 : h ? h === "y" ? l / b : b : Math.max(b, l / b)) || 0) * (i === "edges" ? -1 : 1), g.b = l < 0 ? n - l : n, g.u = W(e.amount || e.each) || 0, r = r && l < 0 ? ci(r) : r;
    }
    return l = (g[c] - g.min) / g.max || 0, q(g.b + (r ? r(l) : l) * g.v) + g.u;
  };
}, Ze = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = q(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (Tt(r) ? 0 : W(r));
  };
}, ai = function(t, e) {
  var r = H(t), i, n;
  return !r && pt(t) && (i = r = t.radius || ot, t.values ? (t = ut(t.values), (n = !Tt(t[0])) && (i *= i)) : t = Ze(t.increment)), Dt(e, r ? z(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), h = ot, f = 0, _ = t.length, c, d; _--; )
      n ? (c = t[_].x - a, d = t[_].y - u, c = c * c + d * d) : c = Math.abs(t[_] - a), c < h && (h = c, f = _);
    return f = !i || h <= i ? t[f] : s, n || f === s || Tt(s) ? f : f + W(s);
  } : Ze(t));
}, oi = function(t, e, r, i) {
  return Dt(H(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return H(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, on = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, un = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || W(r));
  };
}, hn = function(t, e, r) {
  return hi(t, e, 0, 1, r);
}, ui = function(t, e, r) {
  return Dt(r, function(i) {
    return t[~~e(i)];
  });
}, fn = function o(t, e, r) {
  var i = e - t;
  return H(t) ? ui(t, o(0, t.length), e) : Dt(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, ln = function o(t, e, r) {
  var i = e - t, n = i * 2;
  return H(t) ? ui(t, o(0, t.length - 1), e) : Dt(r, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > i ? n - s : s);
  });
}, _e = function(t) {
  for (var e = 0, r = "", i, n, s, a; ~(i = t.indexOf("random(", e)); )
    s = t.indexOf(")", i), a = t.charAt(i + 7) === "[", n = t.substr(i + 7, s - i - 7).match(a ? qr : qe), r += t.substr(e, i - e) + oi(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return r + t.substr(e, t.length - e);
}, hi = function(t, e, r, i, n) {
  var s = e - t, a = i - r;
  return Dt(n, function(u) {
    return r + ((u - t) / s * a || 0);
  });
}, _n = function o(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = X(t), a = {}, u, h, f, _, c;
    if (r === !0 && (i = 1) && (r = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (H(t) && !H(e)) {
      for (f = [], _ = t.length, c = _ - 2, h = 1; h < _; h++)
        f.push(o(t[h - 1], t[h]));
      _--, n = function(p) {
        p *= _;
        var l = Math.min(c, ~~p);
        return f[l](p - l);
      }, r = e;
    } else
      i || (t = Xt(H(t) ? [] : {}, t));
    if (!f) {
      for (u in e)
        lr.call(a, t, u, "get", e[u]);
      n = function(p) {
        return pr(p, a) || (s ? t.p : t);
      };
    }
  }
  return Dt(r, n);
}, Pr = function(t, e, r) {
  var i = t.labels, n = ot, s, a, u;
  for (s in i)
    a = i[s] - e, a < 0 == !!r && a && n > (a = Math.abs(a)) && (u = s, n = a);
  return u;
}, ht = function(t, e, r) {
  var i = t.vars, n = i[e], s = V, a = t._ctx, u, h, f;
  if (n)
    return u = i[e + "Params"], h = i.callbackScope || t, r && Ct.length && Pe(), a && (V = a), f = u ? n.apply(h, u) : n.call(h), V = s, f;
}, ae = function(t) {
  return kt(t), t.scrollTrigger && t.scrollTrigger.kill(!!G), t.progress() < 1 && ht(t, "onInterrupt"), t;
}, Ht, cn = function(t) {
  t = !t.name && t.default || t;
  var e = t.name, r = z(t), i = e && !r && t.init ? function() {
    this._props = [];
  } : t, n = {
    init: le,
    render: pr,
    add: lr,
    kill: Mn,
    modifier: kn,
    rawVars: 0
  }, s = {
    targetTest: 0,
    get: 0,
    getSetter: dr,
    aliases: {},
    register: 0
  };
  if (te(), t !== i) {
    if (J[e])
      return;
    ft(i, ft(Ce(t, n), s)), Xt(i.prototype, Xt(n, Ce(t, s))), J[i.prop = e] = i, t.targetTest && (Te.push(i), ur[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
  }
  Hr(e, i), t.register && t.register(it, i, j);
}, M = 255, oe = {
  aqua: [0, M, M],
  lime: [0, M, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, M],
  navy: [0, 0, 128],
  white: [M, M, M],
  olive: [128, 128, 0],
  yellow: [M, M, 0],
  orange: [M, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [M, 0, 0],
  pink: [M, 192, 203],
  cyan: [0, M, M],
  transparent: [M, M, M, 0]
}, Le = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * M + 0.5 | 0;
}, fi = function(t, e, r) {
  var i = t ? Tt(t) ? [t >> 16, t >> 8 & M, t & M] : 0 : oe.black, n, s, a, u, h, f, _, c, d, p;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), oe[t])
      i = oe[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & M, i & M, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & M, t & M];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = p = t.match(qe), !e)
        u = +i[0] % 360 / 360, h = +i[1] / 100, f = +i[2] / 100, s = f <= 0.5 ? f * (h + 1) : f + h - f * h, n = f * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = Le(u + 1 / 3, n, s), i[1] = Le(u, n, s), i[2] = Le(u - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return i = t.match(Ur), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(qe) || oe.transparent;
    i = i.map(Number);
  }
  return e && !p && (n = i[0] / M, s = i[1] / M, a = i[2] / M, _ = Math.max(n, s, a), c = Math.min(n, s, a), f = (_ + c) / 2, _ === c ? u = h = 0 : (d = _ - c, h = f > 0.5 ? d / (2 - _ - c) : d / (_ + c), u = _ === n ? (s - a) / d + (s < a ? 6 : 0) : _ === s ? (a - n) / d + 2 : (n - s) / d + 4, u *= 60), i[0] = ~~(u + 0.5), i[1] = ~~(h * 100 + 0.5), i[2] = ~~(f * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, li = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Ot).forEach(function(n) {
    var s = n.match(Gt) || [];
    e.push.apply(e, s), r.push(i += s.length + 1);
  }), e.c = r, e;
}, Cr = function(t, e, r) {
  var i = "", n = (t + i).match(Ot), s = e ? "hsla(" : "rgba(", a = 0, u, h, f, _;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = fi(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), r && (f = li(t), u = r.c, u.join(i) !== f.c.join(i)))
    for (h = t.replace(Ot, "1").split(Gt), _ = h.length - 1; a < _; a++)
      i += h[a] + (~u.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : r).shift());
  if (!h)
    for (h = t.split(Ot), _ = h.length - 1; a < _; a++)
      i += h[a] + n[a];
  return i + h[_];
}, Ot = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in oe)
    o += "|" + t + "\\b";
  return new RegExp(o + ")", "gi");
}(), dn = /hsl[a]?\(/, _i = function(t) {
  var e = t.join(" "), r;
  if (Ot.lastIndex = 0, Ot.test(e))
    return r = dn.test(e), t[1] = Cr(t[1], r), t[0] = Cr(t[0], r, li(t[1])), !0;
}, ce, tt = function() {
  var o = Date.now, t = 500, e = 33, r = o(), i = r, n = 1e3 / 240, s = n, a = [], u, h, f, _, c, d, p = function l(g) {
    var m = o() - i, y = g === !0, v, T, x, P;
    if (m > t && (r += m - e), i += m, x = i - r, v = x - s, (v > 0 || y) && (P = ++_.frame, c = x - _.time * 1e3, _.time = x = x / 1e3, s += v + (v >= n ? 4 : n - v), T = 1), y || (u = h(l)), T)
      for (d = 0; d < a.length; d++)
        a[d](x, c, P, g);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(g) {
      return c / (1e3 / (g || 60));
    },
    wake: function() {
      Wr && (!We && Vr() && (at = We = window, ar = at.document || {}, rt.gsap = it, (at.gsapVersions || (at.gsapVersions = [])).push(it.version), Gr(we || at.GreenSockGlobals || !at.gsap && at || {}), f = at.requestAnimationFrame), u && _.sleep(), h = f || function(g) {
        return setTimeout(g, s - _.time * 1e3 + 1 | 0);
      }, ce = 1, p(2));
    },
    sleep: function() {
      (f ? at.cancelAnimationFrame : clearTimeout)(u), ce = 0, h = le;
    },
    lagSmoothing: function(g, m) {
      t = g || 1 / 0, e = Math.min(m || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), s = _.time * 1e3 + n;
    },
    add: function(g, m, y) {
      var v = m ? function(T, x, P, S) {
        g(T, x, P, S), _.remove(v);
      } : g;
      return _.remove(g), a[y ? "unshift" : "push"](v), te(), v;
    },
    remove: function(g, m) {
      ~(m = a.indexOf(g)) && a.splice(m, 1) && d >= m && d--;
    },
    _listeners: a
  }, _;
}(), te = function() {
  return !ce && tt.wake();
}, C = {}, pn = /^[\d.\-M][\d.\-,\s]/, gn = /["']/g, mn = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, s = r.length, a, u, h; n < s; n++)
    u = r[n], a = n !== s - 1 ? u.lastIndexOf(",") : u.length, h = u.substr(0, a), e[i] = isNaN(h) ? h.replace(gn, "").trim() : +h, i = u.substr(a + 1).trim();
  return e;
}, yn = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, xn = function(t) {
  var e = (t + "").split("("), r = C[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [mn(e[1])] : yn(t).split(",").map(Zr)) : C._CE && pn.test(t) ? C._CE("", t) : r;
}, ci = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, di = function o(t, e) {
  for (var r = t._first, i; r; )
    r instanceof K ? o(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? o(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next;
}, Ut = function(t, e) {
  return t && (z(t) ? t : C[t] || xn(t)) || e;
}, qt = function(t, e, r, i) {
  r === void 0 && (r = function(u) {
    return 1 - e(1 - u);
  }), i === void 0 && (i = function(u) {
    return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: r,
    easeInOut: i
  }, s;
  return Z(t, function(a) {
    C[a] = rt[a] = n, C[s = a.toLowerCase()] = r;
    for (var u in n)
      C[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = C[a + "." + u] = n[u];
  }), n;
}, pi = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Be = function o(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Xe * (Math.asin(1 / i) || 0), a = function(f) {
    return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Wi((f - s) * n) + 1;
  }, u = t === "out" ? a : t === "in" ? function(h) {
    return 1 - a(1 - h);
  } : pi(a);
  return n = Xe / n, u.config = function(h, f) {
    return o(t, h, f);
  }, u;
}, Ie = function o(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : pi(r);
  return i.config = function(n) {
    return o(t, n);
  }, i;
};
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, t) {
  var e = t < 5 ? t + 1 : t;
  qt(o + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
C.Linear.easeNone = C.none = C.Linear.easeIn;
qt("Elastic", Be("in"), Be("out"), Be());
(function(o, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, n = function(a) {
    return a < e ? o * a * a : a < r ? o * Math.pow(a - 1.5 / t, 2) + 0.75 : a < i ? o * (a -= 2.25 / t) * a + 0.9375 : o * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  qt("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
qt("Expo", function(o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
qt("Circ", function(o) {
  return -(Nr(1 - o * o) - 1);
});
qt("Sine", function(o) {
  return o === 1 ? 1 : -qi(o * Ui) + 1;
});
qt("Back", Ie("in"), Ie("out"), Ie());
C.SteppedEase = C.steps = rt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - D;
    return function(a) {
      return ((i * me(0, s, a) | 0) + n) * r;
    };
  }
};
Zt.ease = C["quad.out"];
Z("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return hr += o + "," + o + "Params,";
});
var gi = function(t, e) {
  this.id = Xi++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Kr, this.set = e ? e.getSetter : dr;
}, ee = /* @__PURE__ */ function() {
  function o(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Jt(this, +e.duration, 1, 1), this.data = e.data, V && (this._ctx = V, V.data.push(this)), ce || tt.wake();
  }
  var t = o.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Jt(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (te(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Ee(this, r), !n._dp || n.parent || ti(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && ct(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === D || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Qr(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + wr(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + wr(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? jt(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -D ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? Oe(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -D ? 0 : this._rts, this.totalTime(me(-this._delay, this._tDur, i), !0), Ae(this), ji(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (te(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && ct(i, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (Q(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Oe(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = $i);
    var i = G;
    return G = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), G = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (i._ts || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Sr(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, Sr(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(st(this, r), Q(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, Q(i));
  }, t.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -D : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -D, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - D);
  }, t.eventCallback = function(r, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r];
  }, t.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var s = z(r) ? r : jr, a = function() {
        var h = i.then;
        i.then = null, z(s) && (s = s(i)) && (s.then || s === i) && (i.then = h), n(s), i.then = h;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, t.kill = function() {
    ae(this);
  }, o;
}();
ft(ee.prototype, {
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
  _zTime: -D,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var K = /* @__PURE__ */ function(o) {
  Ir(t, o);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = o.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = Q(r.sortChildren), A && ct(r.parent || A, yt(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && ei(yt(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, s) {
    return he(0, arguments, this), this;
  }, e.from = function(i, n, s) {
    return he(1, arguments, this), this;
  }, e.fromTo = function(i, n, s, a) {
    return he(2, arguments, this), this;
  }, e.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, ue(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new U(i, n, st(this, s), 1), this;
  }, e.call = function(i, n, s) {
    return ct(this, U.delayedCall(0, i, n), s);
  }, e.staggerTo = function(i, n, s, a, u, h, f) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = h, s.onCompleteParams = f, s.parent = this, new U(i, s, st(this, u)), this;
  }, e.staggerFrom = function(i, n, s, a, u, h, f) {
    return s.runBackwards = 1, ue(s).immediateRender = Q(s.immediateRender), this.staggerTo(i, n, s, a, u, h, f);
  }, e.staggerFromTo = function(i, n, s, a, u, h, f, _) {
    return a.startAt = s, ue(a).immediateRender = Q(a.immediateRender), this.staggerTo(i, n, a, u, h, f, _);
  }, e.render = function(i, n, s) {
    var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, h = this._dur, f = i <= 0 ? 0 : q(i), _ = this._zTime < 0 != i < 0 && (this._initted || !h), c, d, p, l, g, m, y, v, T, x, P, S;
    if (this !== A && f > u && i >= 0 && (f = u), f !== this._tTime || s || _) {
      if (a !== this._time && h && (f += this._time - a, i += this._time - a), c = f, T = this._start, v = this._ts, m = !v, _ && (h || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (P = this._yoyo, g = h + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(g * 100 + i, n, s);
        if (c = q(f % g), f === u ? (l = this._repeat, c = h) : (l = ~~(f / g), l && l === f / g && (c = h, l--), c > h && (c = h)), x = jt(this._tTime, g), !a && this._tTime && x !== l && (x = l), P && l & 1 && (c = h - c, S = 1), l !== x && !this._lock) {
          var w = P && x & 1, b = w === (P && l & 1);
          if (l < x && (w = !w), a = w ? 0 : h, this._lock = 1, this.render(a || (S ? 0 : q(l * g)), n, !h)._lock = 0, this._tTime = f, !n && this.parent && ht(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (h = this._dur, u = this._tDur, b && (this._lock = 2, a = w ? h : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          di(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = rn(this, q(a), q(c)), y && (f -= c - (c = y._start))), this._tTime = f, this._time = c, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && c && !n && (ht(this, "onStart"), this._tTime !== f))
        return this;
      if (c >= a && i >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || c >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, n, s);
            if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !m) {
              y = 0, p && (f += this._zTime = -D);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var O = i < 0 ? i : c; d; ) {
          if (p = d._prev, (d._act || O <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, n, s);
            if (d.render(d._ts > 0 ? (O - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (O - d._start) * d._ts, n, s || G && (d._initted || d._startAt)), c !== this._time || !this._ts && !m) {
              y = 0, p && (f += this._zTime = O ? -D : D);
              break;
            }
          }
          d = p;
        }
      }
      if (y && !n && (this.pause(), y.render(c >= a ? 0 : -D)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = T, Ae(this), this.render(i, n, s);
      this._onUpdate && !n && ht(this, "onUpdate", !0), (f === u && this._tTime >= this.totalDuration() || !f && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !h) && (f === u && this._ts > 0 || !f && this._ts < 0) && kt(this, 1), !n && !(i < 0 && !a) && (f || a || !u) && (ht(this, f === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, n) {
    var s = this;
    if (Tt(n) || (n = st(this, n, i)), !(i instanceof ee)) {
      if (H(i))
        return i.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (X(i))
        return this.addLabel(i, n);
      if (z(i))
        i = U.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? ct(this, i, n) : this;
  }, e.getChildren = function(i, n, s, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -ot);
    for (var u = [], h = this._first; h; )
      h._start >= a && (h instanceof U ? n && u.push(h) : (s && u.push(h), i && u.push.apply(u, h.getChildren(!0, n, s)))), h = h._next;
    return u;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, e.remove = function(i) {
    return X(i) ? this.removeLabel(i) : z(i) ? this.killTweensOf(i) : (Re(this, i), i === this._recent && (this._recent = this._last), Yt(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = q(tt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = st(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, s) {
    var a = U.delayedCall(0, n || le, s);
    return a.data = "isPause", this._hasPause = 1, ct(this, a, st(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = st(this, i); n; )
      n._start === i && n.data === "isPause" && kt(n), n = n._next;
  }, e.killTweensOf = function(i, n, s) {
    for (var a = this.getTweensOf(i, s), u = a.length; u--; )
      wt !== a[u] && a[u].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var s = [], a = ut(i), u = this._first, h = Tt(n), f; u; )
      u instanceof U ? Ki(u._targets, a) && (h ? (!wt || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (f = u.getTweensOf(a, n)).length && s.push.apply(s, f), u = u._next;
    return s;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var s = this, a = st(s, i), u = n, h = u.startAt, f = u.onStart, _ = u.onStartParams, c = u.immediateRender, d, p = U.to(s, ft({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (h && "time" in h ? h.time : s._time)) / s.timeScale()) || D,
      onStart: function() {
        if (s.pause(), !d) {
          var g = n.duration || Math.abs((a - (h && "time" in h ? h.time : s._time)) / s.timeScale());
          p._dur !== g && Jt(p, g, 0, 1).render(p._time, !0, !0), d = 1;
        }
        f && f.apply(p, _ || []);
      }
    }, n));
    return c ? p.render(0) : p;
  }, e.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, ft({
      startAt: {
        time: st(this, i)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Pr(this, st(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Pr(this, st(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + D);
  }, e.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, u = this.labels, h; a; )
      a._start >= s && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (h in u)
        u[h] >= s && (u[h] += i);
    return Yt(this);
  }, e.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return o.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Yt(this);
  }, e.totalDuration = function(i) {
    var n = 0, s = this, a = s._last, u = ot, h, f, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (_ = s.parent; a; )
        h = a._prev, a._dirty && a.totalDuration(), f = a._start, f > u && s._sort && a._ts && !s._lock ? (s._lock = 1, ct(s, a, f - a._delay, 1)._lock = 0) : u = f, f < 0 && a._ts && (n -= f, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += f / s._ts, s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), u = 0), a._end > n && a._ts && (n = a._end), a = h;
      Jt(s, s === A && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(i) {
    if (A._ts && (Qr(A, Oe(i, A)), $r = tt.frame), tt.frame >= Tr) {
      Tr += et.autoSleep || 120;
      var n = A._first;
      if ((!n || !n._ts) && et.autoSleep && tt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || tt.sleep();
      }
    }
  }, t;
}(ee);
ft(K.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var vn = function(t, e, r, i, n, s, a) {
  var u = new j(this._pt, t, e, 0, 1, bi, null, n), h = 0, f = 0, _, c, d, p, l, g, m, y;
  for (u.b = r, u.e = i, r += "", i += "", (m = ~i.indexOf("random(")) && (i = _e(i)), s && (y = [r, i], s(y, t, e), r = y[0], i = y[1]), c = r.match(Fe) || []; _ = Fe.exec(i); )
    p = _[0], l = i.substring(h, _.index), d ? d = (d + 1) % 5 : l.substr(-5) === "rgba(" && (d = 1), p !== c[f++] && (g = parseFloat(c[f - 1]) || 0, u._pt = {
      _next: u._pt,
      p: l || f === 1 ? l : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: p.charAt(1) === "=" ? $t(g, p) - g : parseFloat(p) - g,
      m: d && d < 4 ? Math.round : 0
    }, h = Fe.lastIndex);
  return u.c = h < i.length ? i.substring(h, i.length) : "", u.fp = a, (Xr.test(i) || m) && (u.e = 0), this._pt = u, u;
}, lr = function(t, e, r, i, n, s, a, u, h, f) {
  z(i) && (i = i(n || 0, t, s));
  var _ = t[e], c = r !== "get" ? r : z(_) ? h ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : _, d = z(_) ? h ? Pn : vi : cr, p;
  if (X(i) && (~i.indexOf("random(") && (i = _e(i)), i.charAt(1) === "=" && (p = $t(c, i) + (W(c) || 0), (p || p === 0) && (i = p))), !f || c !== i || je)
    return !isNaN(c * i) && i !== "" ? (p = new j(this._pt, t, e, +c || 0, i - (c || 0), typeof _ == "boolean" ? On : Ti, 0, d), h && (p.fp = h), a && p.modifier(a, this, t), this._pt = p) : (!_ && !(e in t) && or(e, i), vn.call(this, t, e, c, i, d, u || et.stringFilter, h));
}, Tn = function(t, e, r, i, n) {
  if (z(t) && (t = fe(t, n, e, r, i)), !pt(t) || t.style && t.nodeType || H(t) || Yr(t))
    return X(t) ? fe(t, n, e, r, i) : t;
  var s = {}, a;
  for (a in t)
    s[a] = fe(t[a], n, e, r, i);
  return s;
}, mi = function(t, e, r, i, n, s) {
  var a, u, h, f;
  if (J[t] && (a = new J[t]()).init(n, a.rawVars ? e[t] : Tn(e[t], i, n, s, r), r, i, s) !== !1 && (r._pt = u = new j(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== Ht))
    for (h = r._ptLookup[r._targets.indexOf(n)], f = a._props.length; f--; )
      h[a._props[f]] = u;
  return a;
}, wt, je, _r = function o(t, e, r) {
  var i = t.vars, n = i.ease, s = i.startAt, a = i.immediateRender, u = i.lazy, h = i.onUpdate, f = i.onUpdateParams, _ = i.callbackScope, c = i.runBackwards, d = i.yoyoEase, p = i.keyframes, l = i.autoRevert, g = t._dur, m = t._startAt, y = t._targets, v = t.parent, T = v && v.data === "nested" ? v.vars.targets : y, x = t._overwrite === "auto" && !nr, P = t.timeline, S, w, b, O, k, F, B, I, R, Y, N, $, Rt;
  if (P && (!p || !n) && (n = "none"), t._ease = Ut(n, Zt.ease), t._yEase = d ? ci(Ut(d === !0 ? n : d, Zt.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !P && !!i.runBackwards, !P || p && !i.stagger) {
    if (I = y[0] ? Vt(y[0]).harness : 0, $ = I && i[I.prop], S = Ce(i, ur), m && (m._zTime < 0 && m.progress(1), e < 0 && c && a && !l ? m.render(-1, !0) : m.revert(c && g ? ve : Hi), m._lazy = 0), s) {
      if (kt(t._startAt = U.set(y, ft({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !m && Q(u),
        startAt: null,
        delay: 0,
        onUpdate: h,
        onUpdateParams: f,
        callbackScope: _,
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G || !a && !l) && t._startAt.revert(ve), a && g && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (c && g && !m) {
      if (e && (a = !1), b = ft({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !m && Q(u),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
      }, S), $ && (b[I.prop] = $), kt(t._startAt = U.set(y, b)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G ? t._startAt.revert(ve) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        o(t._startAt, D, D);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, u = g && Q(u) || u && !g, w = 0; w < y.length; w++) {
      if (k = y[w], B = k._gsap || fr(y)[w]._gsap, t._ptLookup[w] = Y = {}, Ge[B.id] && Ct.length && Pe(), N = T === y ? w : T.indexOf(k), I && (R = new I()).init(k, $ || S, t, N, T) !== !1 && (t._pt = O = new j(t._pt, k, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(At) {
        Y[At] = O;
      }), R.priority && (F = 1)), !I || $)
        for (b in S)
          J[b] && (R = mi(b, S, t, N, k, T)) ? R.priority && (F = 1) : Y[b] = O = lr.call(t, k, b, "get", S[b], N, T, 0, i.stringFilter);
      t._op && t._op[w] && t.kill(k, t._op[w]), x && t._pt && (wt = t, A.killTweensOf(k, Y, t.globalTime(e)), Rt = !t.parent, wt = 0), t._pt && u && (Ge[B.id] = 1);
    }
    F && wi(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = h, t._initted = (!t._op || t._pt) && !Rt, p && e <= 0 && P.render(ot, !0, !0);
}, bn = function(t, e, r, i, n, s, a) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, f, _, c;
  if (!u)
    for (u = t._ptCache[e] = [], _ = t._ptLookup, c = t._targets.length; c--; ) {
      if (h = _[c][e], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== e && h.fp !== e; )
          h = h._next;
      if (!h)
        return je = 1, t.vars[e] = "+=0", _r(t, a), je = 0, 1;
      u.push(h);
    }
  for (c = u.length; c--; )
    f = u[c], h = f._pt || f, h.s = (i || i === 0) && !n ? i : h.s + (i || 0) + s * h.c, h.c = r - h.s, f.e && (f.e = L(r) + W(f.e)), f.b && (f.b = h.s + W(f.b));
}, wn = function(t, e) {
  var r = t[0] ? Vt(t[0]).harness : 0, i = r && r.aliases, n, s, a, u;
  if (!i)
    return e;
  n = Xt({}, e);
  for (s in i)
    if (s in n)
      for (u = i[s].split(","), a = u.length; a--; )
        n[u[a]] = n[s];
  return n;
}, Sn = function(t, e, r, i) {
  var n = e.ease || i || "power1.inOut", s, a;
  if (H(e))
    a = r[t] || (r[t] = []), e.forEach(function(u, h) {
      return a.push({
        t: h / (e.length - 1) * 100,
        v: u,
        e: n
      });
    });
  else
    for (s in e)
      a = r[s] || (r[s] = []), s === "ease" || a.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, fe = function(t, e, r, i, n) {
  return z(t) ? t.call(e, r, i, n) : X(t) && ~t.indexOf("random(") ? _e(t) : t;
}, yi = hr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", xi = {};
Z(yi + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return xi[o] = 1;
});
var U = /* @__PURE__ */ function(o) {
  Ir(t, o);
  function t(r, i, n, s) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = o.call(this, s ? i : ue(i)) || this;
    var u = a.vars, h = u.duration, f = u.delay, _ = u.immediateRender, c = u.stagger, d = u.overwrite, p = u.keyframes, l = u.defaults, g = u.scrollTrigger, m = u.yoyoEase, y = i.parent || A, v = (H(r) || Yr(r) ? Tt(r[0]) : "length" in i) ? [r] : ut(r), T, x, P, S, w, b, O, k;
    if (a._targets = v.length ? fr(v) : Se("GSAP target " + r + " not found. https://greensock.com", !et.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || c || xe(h) || xe(f)) {
      if (i = a.vars, T = a.timeline = new K({
        data: "nested",
        defaults: l || {},
        targets: y && y.data === "nested" ? y.vars.targets : v
      }), T.kill(), T.parent = T._dp = yt(a), T._start = 0, c || xe(h) || xe(f)) {
        if (S = v.length, O = c && si(c), pt(c))
          for (w in c)
            ~yi.indexOf(w) && (k || (k = {}), k[w] = c[w]);
        for (x = 0; x < S; x++)
          P = Ce(i, xi), P.stagger = 0, m && (P.yoyoEase = m), k && Xt(P, k), b = v[x], P.duration = +fe(h, yt(a), x, b, v), P.delay = (+fe(f, yt(a), x, b, v) || 0) - a._delay, !c && S === 1 && P.delay && (a._delay = f = P.delay, a._start += f, P.delay = 0), T.to(b, P, O ? O(x, b, v) : 0), T._ease = C.none;
        T.duration() ? h = f = 0 : a.timeline = 0;
      } else if (p) {
        ue(ft(T.vars.defaults, {
          ease: "none"
        })), T._ease = Ut(p.ease || i.ease || "none");
        var F = 0, B, I, R;
        if (H(p))
          p.forEach(function(Y) {
            return T.to(v, Y, ">");
          }), T.duration();
        else {
          P = {};
          for (w in p)
            w === "ease" || w === "easeEach" || Sn(w, p[w], P, p.easeEach);
          for (w in P)
            for (B = P[w].sort(function(Y, N) {
              return Y.t - N.t;
            }), F = 0, x = 0; x < B.length; x++)
              I = B[x], R = {
                ease: I.e,
                duration: (I.t - (x ? B[x - 1].t : 0)) / 100 * h
              }, R[w] = I.v, T.to(v, R, F), F += R.duration;
          T.duration() < h && T.to({}, {
            duration: h - T.duration()
          });
        }
      }
      h || a.duration(h = T.duration());
    } else
      a.timeline = 0;
    return d === !0 && !nr && (wt = yt(a), A.killTweensOf(v), wt = 0), ct(y, yt(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (_ || !h && !p && a._start === q(y._time) && Q(_) && Ji(yt(a)) && y.data !== "nested") && (a._tTime = -D, a.render(Math.max(0, -f) || 0)), g && ei(yt(a), g), a;
  }
  var e = t.prototype;
  return e.render = function(i, n, s) {
    var a = this._time, u = this._tDur, h = this._dur, f = i < 0, _ = i > u - D && !f ? u : i < D ? 0 : i, c, d, p, l, g, m, y, v, T;
    if (!h)
      en(this, i, n, s);
    else if (_ !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
      if (c = _, v = this.timeline, this._repeat) {
        if (l = h + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(l * 100 + i, n, s);
        if (c = q(_ % l), _ === u ? (p = this._repeat, c = h) : (p = ~~(_ / l), p && p === _ / l && (c = h, p--), c > h && (c = h)), m = this._yoyo && p & 1, m && (T = this._yEase, c = h - c), g = jt(this._tTime, l), c === a && !s && this._initted)
          return this._tTime = _, this;
        p !== g && (v && this._yEase && di(v, m), this.vars.repeatRefresh && !m && !this._lock && (this._lock = s = 1, this.render(q(l * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ri(this, f ? i : c, s, n, _))
          return this._tTime = 0, this;
        if (a !== this._time)
          return this;
        if (h !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (T || this._ease)(c / h), this._from && (this.ratio = y = 1 - y), c && !a && !n && (ht(this, "onStart"), this._tTime !== _))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      v && v.render(i < 0 ? i : !c && m ? -D : v._dur * v._ease(c / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (f && He(this, i, n, s), ht(this, "onUpdate")), this._repeat && p !== g && this.vars.onRepeat && !n && this.parent && ht(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (f && !this._onUpdate && He(this, i, !0, !0), (i || !h) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && kt(this, 1), !n && !(f && !a) && (_ || a || m) && (ht(this, _ === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), o.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, s, a) {
    ce || tt.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || _r(this, u), h = this._ease(u / this._dur), bn(this, i, n, s, a, h, u) ? this.resetTo(i, n, s, a) : (Ee(this, 0), this.parent || Jr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ae(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, wt && wt.vars.overwrite !== !0)._first || ae(this), this.parent && s !== this.timeline.totalDuration() && Jt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, u = i ? ut(i) : a, h = this._ptLookup, f = this._pt, _, c, d, p, l, g, m;
    if ((!n || n === "all") && Zi(a, u))
      return n === "all" && (this._pt = 0), ae(this);
    for (_ = this._op = this._op || [], n !== "all" && (X(n) && (l = {}, Z(n, function(y) {
      return l[y] = 1;
    }), n = l), n = wn(a, n)), m = a.length; m--; )
      if (~u.indexOf(a[m])) {
        c = h[m], n === "all" ? (_[m] = n, p = c, d = {}) : (d = _[m] = _[m] || {}, p = n);
        for (l in p)
          g = c && c[l], g && ((!("kill" in g.d) || g.d.kill(l) === !0) && Re(this, g, "_pt"), delete c[l]), d !== "all" && (d[l] = 1);
      }
    return this._initted && !this._pt && f && ae(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return he(1, arguments);
  }, t.delayedCall = function(i, n, s, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    });
  }, t.fromTo = function(i, n, s) {
    return he(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, s) {
    return A.killTweensOf(i, n, s);
  }, t;
}(ee);
ft(U.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Z("staggerTo,staggerFrom,staggerFromTo", function(o) {
  U[o] = function() {
    var t = new K(), e = Ke.call(arguments, 0);
    return e.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, e);
  };
});
var cr = function(t, e, r) {
  return t[e] = r;
}, vi = function(t, e, r) {
  return t[e](r);
}, Pn = function(t, e, r, i) {
  return t[e](i.fp, r);
}, Cn = function(t, e, r) {
  return t.setAttribute(e, r);
}, dr = function(t, e) {
  return z(t[e]) ? vi : sr(t[e]) && t.setAttribute ? Cn : cr;
}, Ti = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, On = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, bi = function(t, e) {
  var r = e._pt, i = "";
  if (!t && e.b)
    i = e.b;
  else if (t === 1 && e.e)
    i = e.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, pr = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, kn = function(t, e, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(t, e, r), n = s;
}, Mn = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? Re(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, Dn = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, wi = function(t) {
  for (var e = t._pt, r, i, n, s; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : s) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : s = e, e = r;
  }
  t._pt = n;
}, j = /* @__PURE__ */ function() {
  function o(e, r, i, n, s, a, u, h, f) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = a || Ti, this.d = u || this, this.set = h || cr, this.pr = f || 0, this._next = e, e && (e._prev = this);
  }
  var t = o.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = Dn, this.m = r, this.mt = n, this.tween = i;
  }, o;
}();
Z(hr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return ur[o] = 1;
});
rt.TweenMax = rt.TweenLite = U;
rt.TimelineLite = rt.TimelineMax = K;
A = new K({
  sortChildren: !1,
  defaults: Zt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
et.stringFilter = _i;
var re = [], be = {}, Rn = [], Or = 0, Ne = function(t) {
  return (be[t] || Rn).map(function(e) {
    return e();
  });
}, Je = function() {
  var t = Date.now(), e = [];
  t - Or > 2 && (Ne("matchMediaInit"), re.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, a, u, h;
    for (a in i)
      s = at.matchMedia(i[a]).matches, s && (u = 1), s !== n[a] && (n[a] = s, h = 1);
    h && (r.revert(), u && e.push(r));
  }), Ne("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r);
  }), Or = t, Ne("matchMedia"));
}, Si = /* @__PURE__ */ function() {
  function o(e, r) {
    this.selector = r && Qe(r), this.data = [], this._r = [], this.isReverted = !1, e && this.add(e);
  }
  var t = o.prototype;
  return t.add = function(r, i, n) {
    z(r) && (n = i, i = r, r = z);
    var s = this, a = function() {
      var h = V, f = s.selector, _;
      return h && h !== s && h.data.push(s), n && (s.selector = Qe(n)), V = s, _ = i.apply(s, arguments), z(_) && s._r.push(_), V = h, s.selector = f, s.isReverted = !1, _;
    };
    return s.last = a, r === z ? a(s) : r ? s[r] = a : a;
  }, t.ignore = function(r) {
    var i = V;
    V = null, r(this), V = i;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof o ? r.push.apply(r, i.getTweens()) : i instanceof U && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(r, i) {
    var n = this;
    if (r) {
      var s = this.getTweens();
      this.data.forEach(function(u) {
        u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(h) {
          return s.splice(s.indexOf(h), 1);
        }));
      }), s.map(function(u) {
        return {
          g: u.globalTime(0),
          t: u
        };
      }).sort(function(u, h) {
        return h.g - u.g || -1;
      }).forEach(function(u) {
        return u.t.revert(r);
      }), this.data.forEach(function(u) {
        return !(u instanceof ee) && u.revert && u.revert(r);
      }), this._r.forEach(function(u) {
        return u(r, n);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(u) {
        return u.kill && u.kill();
      });
    if (this.clear(), i) {
      var a = re.indexOf(this);
      ~a && re.splice(a, 1);
    }
  }, t.revert = function(r) {
    this.kill(r || {});
  }, o;
}(), An = /* @__PURE__ */ function() {
  function o(e) {
    this.contexts = [], this.scope = e;
  }
  var t = o.prototype;
  return t.add = function(r, i, n) {
    pt(r) || (r = {
      matches: r
    });
    var s = new Si(0, n || this.scope), a = s.conditions = {}, u, h, f;
    this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (h in r)
      h === "all" ? f = 1 : (u = at.matchMedia(r[h]), u && (re.indexOf(s) < 0 && re.push(s), (a[h] = u.matches) && (f = 1), u.addListener ? u.addListener(Je) : u.addEventListener("change", Je)));
    return f && i(s), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, o;
}(), ke = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return cn(i);
    });
  },
  timeline: function(t) {
    return new K(t);
  },
  getTweensOf: function(t, e) {
    return A.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    X(t) && (t = ut(t)[0]);
    var n = Vt(t || {}).get, s = r ? jr : Zr;
    return r === "native" && (r = ""), t && (e ? s((J[e] && J[e].get || n)(t, e, r, i)) : function(a, u, h) {
      return s((J[a] && J[a].get || n)(t, a, u, h));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = ut(t), t.length > 1) {
      var i = t.map(function(f) {
        return it.quickSetter(f, e, r);
      }), n = i.length;
      return function(f) {
        for (var _ = n; _--; )
          i[_](f);
      };
    }
    t = t[0] || {};
    var s = J[e], a = Vt(t), u = a.harness && (a.harness.aliases || {})[e] || e, h = s ? function(f) {
      var _ = new s();
      Ht._pt = 0, _.init(t, r ? f + r : f, Ht, 0, [t]), _.render(1, _), Ht._pt && pr(1, Ht);
    } : a.set(t, u);
    return s ? h : function(f) {
      return h(t, u, r ? f + r : f, a, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, n = it.to(t, Xt((i = {}, i[e] = "+=0.1", i.paused = !0, i), r || {})), s = function(u, h, f) {
      return n.resetTo(e, u, h, f);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return A.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Ut(t.ease, Zt.ease)), br(Zt, t || {});
  },
  config: function(t) {
    return br(et, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, s = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !J[a] && !rt[a] && Se(e + " effect requires " + a + " plugin.");
    }), ze[e] = function(a, u, h) {
      return r(ut(a), ft(u || {}, n), h);
    }, s && (K.prototype[e] = function(a, u, h) {
      return this.add(ze[e](a, pt(u) ? u : (h = u) && {}, this), h);
    });
  },
  registerEase: function(t, e) {
    C[t] = Ut(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Ut(t, e) : C;
  },
  getById: function(t) {
    return A.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new K(t), i, n;
    for (r.smoothChildTiming = Q(t.smoothChildTiming), A.remove(r), r._dp = 0, r._time = r._tTime = A._time, i = A._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof U && i.vars.onComplete === i._targets[0])) && ct(r, i, i._start - i._delay), i = n;
    return ct(A, r, 0), r;
  },
  context: function(t, e) {
    return t ? new Si(t, e) : V;
  },
  matchMedia: function(t) {
    return new An(t);
  },
  matchMediaRefresh: function() {
    return re.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || Je();
  },
  addEventListener: function(t, e) {
    var r = be[t] || (be[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = be[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: fn,
    wrapYoyo: ln,
    distribute: si,
    random: oi,
    snap: ai,
    normalize: hn,
    getUnit: W,
    clamp: sn,
    splitColor: fi,
    toArray: ut,
    selector: Qe,
    mapRange: hi,
    pipe: on,
    unitize: un,
    interpolate: _n,
    shuffle: ni
  },
  install: Gr,
  effects: ze,
  ticker: tt,
  updateRoot: K.updateRoot,
  plugins: J,
  globalTimeline: A,
  core: {
    PropTween: j,
    globals: Hr,
    Tween: U,
    Timeline: K,
    Animation: ee,
    getCache: Vt,
    _removeLinkedListItem: Re,
    reverting: function() {
      return G;
    },
    context: function(t) {
      return t && V && (V.data.push(t), t._ctx = V), V;
    },
    suppressOverwrites: function(t) {
      return nr = t;
    }
  }
};
Z("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return ke[o] = U[o];
});
tt.add(K.updateRoot);
Ht = ke.to({}, {
  duration: 0
});
var En = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, Fn = function(t, e) {
  var r = t._targets, i, n, s;
  for (i in e)
    for (n = r.length; n--; )
      s = t._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = En(s, i)), s && s.modifier && s.modifier(e[i], t, r[n], i));
}, Ve = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(a) {
        var u, h;
        if (X(n) && (u = {}, Z(n, function(f) {
          return u[f] = 1;
        }), n = u), e) {
          u = {};
          for (h in n)
            u[h] = e(n[h]);
          n = u;
        }
        Fn(a, n);
      };
    }
  };
}, it = ke.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, n) {
    var s, a, u;
    this.tween = r;
    for (s in e)
      u = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (u || 0) + "", e[s], i, n, 0, 0, s), a.op = s, a.b = u, this._props.push(s);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      G ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, Ve("roundProps", Ze), Ve("modifiers"), Ve("snap", ai)) || ke;
U.version = K.version = it.version = "3.11.4";
Wr = 1;
Vr() && te();
C.Power0;
C.Power1;
C.Power2;
C.Power3;
C.Power4;
C.Linear;
C.Quad;
C.Cubic;
C.Quart;
C.Quint;
C.Strong;
C.Elastic;
C.Back;
C.SteppedEase;
C.Bounce;
C.Sine;
C.Expo;
C.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var kr, St, Kt, gr, Nt, Mr, mr, zn = function() {
  return typeof window < "u";
}, bt = {}, It = 180 / Math.PI, Qt = Math.PI / 180, Wt = Math.atan2, Dr = 1e8, yr = /([A-Z])/g, Ln = /(left|right|width|margin|padding|x)/i, Bn = /[\s,\(]\S/, vt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, tr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, In = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Nn = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Vn = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, Pi = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Ci = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Yn = function(t, e, r) {
  return t.style[e] = r;
}, Un = function(t, e, r) {
  return t.style.setProperty(e, r);
}, Xn = function(t, e, r) {
  return t._gsap[e] = r;
}, qn = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, Wn = function(t, e, r, i, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, Gn = function(t, e, r, i, n) {
  var s = t._gsap;
  s[e] = r, s.renderTransform(n, s);
}, E = "transform", lt = E + "Origin", Hn = function(t, e) {
  var r = this, i = this.target, n = i.style;
  if (t in bt) {
    if (this.tfm = this.tfm || {}, t !== "transform" && (t = vt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(s) {
      return r.tfm[s] = xt(i, s);
    }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : xt(i, t)), this.props.indexOf(E) >= 0)
      return;
    i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(lt, e, "")), t = E;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Oi = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, $n = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].replace(yr, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = mr(), n && !n.isStart && !r[E] && (Oi(r), i.uncache = 1);
  }
}, ki = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: $n,
    save: Hn
  };
  return e && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, Mi, er = function(t, e) {
  var r = St.createElementNS ? St.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : St.createElement(t);
  return r.style ? r : St.createElement(t);
}, dt = function o(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(yr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && o(t, ie(e) || e, 1) || "";
}, Rr = "O,Moz,ms,Ms,Webkit".split(","), ie = function(t, e, r) {
  var i = e || Nt, n = i.style, s = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Rr[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Rr[s] : "") + t;
}, rr = function() {
  zn() && window.document && (kr = window, St = kr.document, Kt = St.documentElement, Nt = er("div") || {
    style: {}
  }, er("div"), E = ie(E), lt = E + "Origin", Nt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Mi = !!ie("perspective"), mr = it.core.reverting, gr = 1);
}, Ye = function o(t) {
  var e = er("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, n = this.style.cssText, s;
  if (Kt.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = o;
    } catch {
    }
  else
    this._gsapBBox && (s = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Kt.removeChild(e), this.style.cssText = n, s;
}, Ar = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, Di = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = Ye.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === Ye || (e = Ye.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +Ar(t, ["x", "cx", "x1"]) || 0,
    y: +Ar(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Ri = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Di(t));
}, de = function(t, e) {
  if (e) {
    var r = t.style;
    e in bt && e !== lt && (e = E), r.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(e.replace(yr, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Pt = function(t, e, r, i, n, s) {
  var a = new j(t._pt, e, r, 0, 1, s ? Ci : Pi);
  return t._pt = a, a.b = i, a.e = n, t._props.push(r), a;
}, Er = {
  deg: 1,
  rad: 1,
  turn: 1
}, Kn = {
  grid: 1,
  flex: 1
}, Mt = function o(t, e, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", a = Nt.style, u = Ln.test(e), h = t.tagName.toLowerCase() === "svg", f = (h ? "client" : "offset") + (u ? "Width" : "Height"), _ = 100, c = i === "px", d = i === "%", p, l, g, m;
  return i === s || !n || Er[i] || Er[s] ? n : (s !== "px" && !c && (n = o(t, e, r, "px")), m = t.getCTM && Ri(t), (d || s === "%") && (bt[e] || ~e.indexOf("adius")) ? (p = m ? t.getBBox()[u ? "width" : "height"] : t[f], L(d ? n / p * _ : n / 100 * p)) : (a[u ? "width" : "height"] = _ + (c ? s : i), l = ~e.indexOf("adius") || i === "em" && t.appendChild && !h ? t : t.parentNode, m && (l = (t.ownerSVGElement || {}).parentNode), (!l || l === St || !l.appendChild) && (l = St.body), g = l._gsap, g && d && g.width && u && g.time === tt.time && !g.uncache ? L(n / g.width * _) : ((d || s === "%") && !Kn[dt(l, "display")] && (a.position = dt(t, "position")), l === t && (a.position = "static"), l.appendChild(Nt), p = Nt[f], l.removeChild(Nt), a.position = "absolute", u && d && (g = Vt(l), g.time = tt.time, g.width = l[f]), L(c ? p * n / _ : p && n ? _ / p * n : 0))));
}, xt = function(t, e, r, i) {
  var n;
  return gr || rr(), e in vt && e !== "transform" && (e = vt[e], ~e.indexOf(",") && (e = e.split(",")[0])), bt[e] && e !== "transform" ? (n = ge(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : De(dt(t, lt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Me[e] && Me[e](t, e, r) || dt(t, e) || Kr(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Mt(t, e, n, r) + r : n;
}, Qn = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = ie(e, t, 1), s = n && dt(t, n, 1);
    s && s !== r ? (e = n, r = s) : e === "borderColor" && (r = dt(t, "borderTopColor"));
  }
  var a = new j(this._pt, t.style, e, 0, 1, bi), u = 0, h = 0, f, _, c, d, p, l, g, m, y, v, T, x;
  if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (t.style[e] = i, i = dt(t, e) || i, t.style[e] = r), f = [r, i], _i(f), r = f[0], i = f[1], c = r.match(Gt) || [], x = i.match(Gt) || [], x.length) {
    for (; _ = Gt.exec(i); )
      g = _[0], y = i.substring(u, _.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), g !== (l = c[h++] || "") && (d = parseFloat(l) || 0, T = l.substr((d + "").length), g.charAt(1) === "=" && (g = $t(d, g) + T), m = parseFloat(g), v = g.substr((m + "").length), u = Gt.lastIndex - v.length, v || (v = v || et.units[e] || T, u === i.length && (i += v, a.e += v)), T !== v && (d = Mt(t, e, l, v) || 0), a._pt = {
        _next: a._pt,
        p: y || h === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: m - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = u < i.length ? i.substring(u, i.length) : "";
  } else
    a.r = e === "display" && i === "none" ? Ci : Pi;
  return Xr.test(i) && (a.e = 0), this._pt = a, a;
}, Fr = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Zn = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = Fr[r] || r, e[1] = Fr[i] || i, e.join(" ");
}, jn = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, s = r._gsap, a, u, h;
    if (n === "all" || n === !0)
      i.cssText = "", u = 1;
    else
      for (n = n.split(","), h = n.length; --h > -1; )
        a = n[h], bt[a] && (u = 1, a = a === "transformOrigin" ? lt : E), de(r, a);
    u && (de(r, E), s && (s.svg && r.removeAttribute("transform"), ge(r, 1), s.uncache = 1, Oi(i)));
  }
}, Me = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new j(t._pt, e, r, 0, 0, jn);
      return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, pe = [1, 0, 0, 1, 0, 0], Ai = {}, Ei = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, zr = function(t) {
  var e = dt(t, E);
  return Ei(e) ? pe : e.substr(7).match(Ur).map(L);
}, xr = function(t, e) {
  var r = t._gsap || Vt(t), i = t.style, n = zr(t), s, a, u, h;
  return r.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? pe : n) : (n === pe && !t.offsetParent && t !== Kt && !r.svg && (u = i.display, i.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (h = 1, a = t.nextElementSibling, Kt.appendChild(t)), n = zr(t), u ? i.display = u : de(t, "display"), h && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Kt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, ir = function(t, e, r, i, n, s) {
  var a = t._gsap, u = n || xr(t, !0), h = a.xOrigin || 0, f = a.yOrigin || 0, _ = a.xOffset || 0, c = a.yOffset || 0, d = u[0], p = u[1], l = u[2], g = u[3], m = u[4], y = u[5], v = e.split(" "), T = parseFloat(v[0]) || 0, x = parseFloat(v[1]) || 0, P, S, w, b;
  r ? u !== pe && (S = d * g - p * l) && (w = T * (g / S) + x * (-l / S) + (l * y - g * m) / S, b = T * (-p / S) + x * (d / S) - (d * y - p * m) / S, T = w, x = b) : (P = Di(t), T = P.x + (~v[0].indexOf("%") ? T / 100 * P.width : T), x = P.y + (~(v[1] || v[0]).indexOf("%") ? x / 100 * P.height : x)), i || i !== !1 && a.smooth ? (m = T - h, y = x - f, a.xOffset = _ + (m * d + y * l) - m, a.yOffset = c + (m * p + y * g) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = x, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[lt] = "0px 0px", s && (Pt(s, a, "xOrigin", h, T), Pt(s, a, "yOrigin", f, x), Pt(s, a, "xOffset", _, a.xOffset), Pt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + x);
}, ge = function(t, e) {
  var r = t._gsap || new gi(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, s = "px", a = "deg", u = getComputedStyle(t), h = dt(t, lt) || "0", f, _, c, d, p, l, g, m, y, v, T, x, P, S, w, b, O, k, F, B, I, R, Y, N, $, Rt, At, ne, Et, vr, gt, Ft;
  return f = _ = c = l = g = m = y = v = T = 0, d = p = 1, r.svg = !!(t.getCTM && Ri(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[E] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[E] !== "none" ? u[E] : "")), i.scale = i.rotate = i.translate = "none"), S = xr(t, r.svg), r.svg && (r.uncache ? ($ = t.getBBox(), h = r.xOrigin - $.x + "px " + (r.yOrigin - $.y) + "px", N = "") : N = !e && t.getAttribute("data-svg-origin"), ir(t, N || h, !!N || r.originIsAbsolute, r.smooth !== !1, S)), x = r.xOrigin || 0, P = r.yOrigin || 0, S !== pe && (k = S[0], F = S[1], B = S[2], I = S[3], f = R = S[4], _ = Y = S[5], S.length === 6 ? (d = Math.sqrt(k * k + F * F), p = Math.sqrt(I * I + B * B), l = k || F ? Wt(F, k) * It : 0, y = B || I ? Wt(B, I) * It + l : 0, y && (p *= Math.abs(Math.cos(y * Qt))), r.svg && (f -= x - (x * k + P * B), _ -= P - (x * F + P * I))) : (Ft = S[6], vr = S[7], At = S[8], ne = S[9], Et = S[10], gt = S[11], f = S[12], _ = S[13], c = S[14], w = Wt(Ft, Et), g = w * It, w && (b = Math.cos(-w), O = Math.sin(-w), N = R * b + At * O, $ = Y * b + ne * O, Rt = Ft * b + Et * O, At = R * -O + At * b, ne = Y * -O + ne * b, Et = Ft * -O + Et * b, gt = vr * -O + gt * b, R = N, Y = $, Ft = Rt), w = Wt(-B, Et), m = w * It, w && (b = Math.cos(-w), O = Math.sin(-w), N = k * b - At * O, $ = F * b - ne * O, Rt = B * b - Et * O, gt = I * O + gt * b, k = N, F = $, B = Rt), w = Wt(F, k), l = w * It, w && (b = Math.cos(w), O = Math.sin(w), N = k * b + F * O, $ = R * b + Y * O, F = F * b - k * O, Y = Y * b - R * O, k = N, R = $), g && Math.abs(g) + Math.abs(l) > 359.9 && (g = l = 0, m = 180 - m), d = L(Math.sqrt(k * k + F * F + B * B)), p = L(Math.sqrt(Y * Y + Ft * Ft)), w = Wt(R, Y), y = Math.abs(w) > 2e-4 ? w * It : 0, T = gt ? 1 / (gt < 0 ? -gt : gt) : 0), r.svg && (N = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Ei(dt(t, E)), N && t.setAttribute("transform", N))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || r.uncache, r.x = f - ((r.xPercent = f && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + s, r.y = _ - ((r.yPercent = _ && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + s, r.z = c + s, r.scaleX = L(d), r.scaleY = L(p), r.rotation = L(l) + a, r.rotationX = L(g) + a, r.rotationY = L(m) + a, r.skewX = y + a, r.skewY = v + a, r.transformPerspective = T + s, (r.zOrigin = parseFloat(h.split(" ")[2]) || 0) && (i[lt] = De(h)), r.xOffset = r.yOffset = 0, r.force3D = et.force3D, r.renderTransform = r.svg ? ts : Mi ? Fi : Jn, r.uncache = 0, r;
}, De = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ue = function(t, e, r) {
  var i = W(e);
  return L(parseFloat(e) + parseFloat(Mt(t, "x", r + "px", i))) + i;
}, Jn = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Fi(t, e);
}, Lt = "0deg", se = "0px", Bt = ") ", Fi = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, u = r.z, h = r.rotation, f = r.rotationY, _ = r.rotationX, c = r.skewX, d = r.skewY, p = r.scaleX, l = r.scaleY, g = r.transformPerspective, m = r.force3D, y = r.target, v = r.zOrigin, T = "", x = m === "auto" && t && t !== 1 || m === !0;
  if (v && (_ !== Lt || f !== Lt)) {
    var P = parseFloat(f) * Qt, S = Math.sin(P), w = Math.cos(P), b;
    P = parseFloat(_) * Qt, b = Math.cos(P), s = Ue(y, s, S * b * -v), a = Ue(y, a, -Math.sin(P) * -v), u = Ue(y, u, w * b * -v + v);
  }
  g !== se && (T += "perspective(" + g + Bt), (i || n) && (T += "translate(" + i + "%, " + n + "%) "), (x || s !== se || a !== se || u !== se) && (T += u !== se || x ? "translate3d(" + s + ", " + a + ", " + u + ") " : "translate(" + s + ", " + a + Bt), h !== Lt && (T += "rotate(" + h + Bt), f !== Lt && (T += "rotateY(" + f + Bt), _ !== Lt && (T += "rotateX(" + _ + Bt), (c !== Lt || d !== Lt) && (T += "skew(" + c + ", " + d + Bt), (p !== 1 || l !== 1) && (T += "scale(" + p + ", " + l + Bt), y.style[E] = T || "translate(0, 0)";
}, ts = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, u = r.rotation, h = r.skewX, f = r.skewY, _ = r.scaleX, c = r.scaleY, d = r.target, p = r.xOrigin, l = r.yOrigin, g = r.xOffset, m = r.yOffset, y = r.forceCSS, v = parseFloat(s), T = parseFloat(a), x, P, S, w, b;
  u = parseFloat(u), h = parseFloat(h), f = parseFloat(f), f && (f = parseFloat(f), h += f, u += f), u || h ? (u *= Qt, h *= Qt, x = Math.cos(u) * _, P = Math.sin(u) * _, S = Math.sin(u - h) * -c, w = Math.cos(u - h) * c, h && (f *= Qt, b = Math.tan(h - f), b = Math.sqrt(1 + b * b), S *= b, w *= b, f && (b = Math.tan(f), b = Math.sqrt(1 + b * b), x *= b, P *= b)), x = L(x), P = L(P), S = L(S), w = L(w)) : (x = _, w = c, P = S = 0), (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = Mt(d, "x", s, "px"), T = Mt(d, "y", a, "px")), (p || l || g || m) && (v = L(v + p - (p * x + l * S) + g), T = L(T + l - (p * P + l * w) + m)), (i || n) && (b = d.getBBox(), v = L(v + i / 100 * b.width), T = L(T + n / 100 * b.height)), b = "matrix(" + x + "," + P + "," + S + "," + w + "," + v + "," + T + ")", d.setAttribute("transform", b), y && (d.style[E] = b);
}, es = function(t, e, r, i, n) {
  var s = 360, a = X(n), u = parseFloat(n) * (a && ~n.indexOf("rad") ? It : 1), h = u - i, f = i + h + "deg", _, c;
  return a && (_ = n.split("_")[1], _ === "short" && (h %= s, h !== h % (s / 2) && (h += h < 0 ? s : -s)), _ === "cw" && h < 0 ? h = (h + s * Dr) % s - ~~(h / s) * s : _ === "ccw" && h > 0 && (h = (h - s * Dr) % s - ~~(h / s) * s)), t._pt = c = new j(t._pt, e, r, i, h, In), c.e = f, c.u = "deg", t._props.push(r), c;
}, Lr = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, rs = function(t, e, r) {
  var i = Lr({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, u, h, f, _, c, d, p;
  i.svg ? (h = r.getAttribute("transform"), r.setAttribute("transform", ""), s[E] = e, a = ge(r, 1), de(r, E), r.setAttribute("transform", h)) : (h = getComputedStyle(r)[E], s[E] = e, a = ge(r, 1), s[E] = h);
  for (u in bt)
    h = i[u], f = a[u], h !== f && n.indexOf(u) < 0 && (d = W(h), p = W(f), _ = d !== p ? Mt(r, u, h, p) : parseFloat(h), c = parseFloat(f), t._pt = new j(t._pt, a, u, _, c - _, tr), t._pt.u = p || 0, t._props.push(u));
  Lr(a, i);
};
Z("padding,margin,Width,Radius", function(o, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", s = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(a) {
    return t < 2 ? o + a : "border" + a + o;
  });
  Me[t > 1 ? "border" + o : o] = function(a, u, h, f, _) {
    var c, d;
    if (arguments.length < 4)
      return c = s.map(function(p) {
        return xt(a, p, h);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (f + "").split(" "), d = {}, s.forEach(function(p, l) {
      return d[p] = c[l] = c[l] || c[(l - 1) / 2 | 0];
    }), a.init(u, d, _);
  };
});
var zi = {
  name: "css",
  register: rr,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var s = this._props, a = t.style, u = r.vars.startAt, h, f, _, c, d, p, l, g, m, y, v, T, x, P, S, w;
    gr || rr(), this.styles = this.styles || ki(t), w = this.styles.props, this.tween = r;
    for (l in e)
      if (l !== "autoRound" && (f = e[l], !(J[l] && mi(l, e, r, i, t, n)))) {
        if (d = typeof f, p = Me[l], d === "function" && (f = f.call(r, i, t, n), d = typeof f), d === "string" && ~f.indexOf("random(") && (f = _e(f)), p)
          p(this, t, l, f, r) && (S = 1);
        else if (l.substr(0, 2) === "--")
          h = (getComputedStyle(t).getPropertyValue(l) + "").trim(), f += "", Ot.lastIndex = 0, Ot.test(h) || (g = W(h), m = W(f)), m ? g !== m && (h = Mt(t, l, h, m) + m) : g && (f += g), this.add(a, "setProperty", h, f, i, n, 0, 0, l), s.push(l), w.push(l, 0, a[l]);
        else if (d !== "undefined") {
          if (u && l in u ? (h = typeof u[l] == "function" ? u[l].call(r, i, t, n) : u[l], X(h) && ~h.indexOf("random(") && (h = _e(h)), W(h + "") || (h += et.units[l] || W(xt(t, l)) || ""), (h + "").charAt(1) === "=" && (h = xt(t, l))) : h = xt(t, l), c = parseFloat(h), y = d === "string" && f.charAt(1) === "=" && f.substr(0, 2), y && (f = f.substr(2)), _ = parseFloat(f), l in vt && (l === "autoAlpha" && (c === 1 && xt(t, "visibility") === "hidden" && _ && (c = 0), w.push("visibility", 0, a.visibility), Pt(this, a, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), l !== "scale" && l !== "transform" && (l = vt[l], ~l.indexOf(",") && (l = l.split(",")[0]))), v = l in bt, v) {
            if (this.styles.save(l), T || (x = t._gsap, x.renderTransform && !e.parseTransform || ge(t, e.parseTransform), P = e.smoothOrigin !== !1 && x.smooth, T = this._pt = new j(this._pt, a, E, 0, 1, x.renderTransform, x, 0, -1), T.dep = 1), l === "scale")
              this._pt = new j(this._pt, x, "scaleY", x.scaleY, (y ? $t(x.scaleY, y + _) : _) - x.scaleY || 0, tr), this._pt.u = 0, s.push("scaleY", l), l += "X";
            else if (l === "transformOrigin") {
              w.push(lt, 0, a[lt]), f = Zn(f), x.svg ? ir(t, f, 0, P, 0, this) : (m = parseFloat(f.split(" ")[2]) || 0, m !== x.zOrigin && Pt(this, x, "zOrigin", x.zOrigin, m), Pt(this, a, l, De(h), De(f)));
              continue;
            } else if (l === "svgOrigin") {
              ir(t, f, 1, P, 0, this);
              continue;
            } else if (l in Ai) {
              es(this, x, l, c, y ? $t(c, y + f) : f);
              continue;
            } else if (l === "smoothOrigin") {
              Pt(this, x, "smooth", x.smooth, f);
              continue;
            } else if (l === "force3D") {
              x[l] = f;
              continue;
            } else if (l === "transform") {
              rs(this, f, t);
              continue;
            }
          } else
            l in a || (l = ie(l) || l);
          if (v || (_ || _ === 0) && (c || c === 0) && !Bn.test(f) && l in a)
            g = (h + "").substr((c + "").length), _ || (_ = 0), m = W(f) || (l in et.units ? et.units[l] : g), g !== m && (c = Mt(t, l, h, m)), this._pt = new j(this._pt, v ? x : a, l, c, (y ? $t(c, y + _) : _) - c, !v && (m === "px" || l === "zIndex") && e.autoRound !== !1 ? Vn : tr), this._pt.u = m || 0, g !== m && m !== "%" && (this._pt.b = h, this._pt.r = Nn);
          else if (l in a)
            Qn.call(this, t, l, h, y ? y + f : f);
          else if (l in t)
            this.add(t, l, h || t[l], y ? y + f : f, i, n);
          else if (l !== "parseTransform") {
            or(l, f);
            continue;
          }
          v || (l in a ? w.push(l, 0, a[l]) : w.push(l, 1, h || t[l])), s.push(l);
        }
      }
    S && wi(this);
  },
  render: function(t, e) {
    if (e.tween._time || !mr())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: xt,
  aliases: vt,
  getSetter: function(t, e, r) {
    var i = vt[e];
    return i && i.indexOf(",") < 0 && (e = i), e in bt && e !== lt && (t._gsap.x || xt(t, "x")) ? r && Mr === r ? e === "scale" ? qn : Xn : (Mr = r || {}) && (e === "scale" ? Wn : Gn) : t.style && !sr(t.style[e]) ? Yn : ~e.indexOf("-") ? Un : dr(t, e);
  },
  core: {
    _removeProperty: de,
    _getMatrix: xr
  }
};
it.utils.checkPrefix = ie;
it.core.getStyleSaver = ki;
(function(o, t, e, r) {
  var i = Z(o + "," + t + "," + e, function(n) {
    bt[n] = 1;
  });
  Z(t, function(n) {
    et.units[n] = "deg", Ai[n] = 1;
  }), vt[i[13]] = o + "," + t, Z(r, function(n) {
    var s = n.split(":");
    vt[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  et.units[o] = "px";
});
it.registerPlugin(zi);
var mt = it.registerPlugin(zi) || it;
mt.core.Tween;
class is {
  constructor(t, e, r) {
    zt(this, "cursor");
    zt(this, "props");
    zt(this, "interactElements");
    zt(this, "parallaxSpeed");
    zt(this, "isHovered", !1);
    zt(this, "cursorTarget");
    this.cursor = t, this.props = e, this.interactElements = r, this.parallaxSpeed = {
      cursor: this.props.parallaxIndex,
      target: e.parallaxIndex * 1.5
    }, document.addEventListener("wheel", (i) => {
      this.handleMouseOut(i);
    }), document.addEventListener("mousemove", (i) => {
      this.moveCursor(i);
    });
  }
  addInteractElement(t) {
    t.addEventListener("mouseenter", (e) => {
      this.handleMouseOver(e);
    }), t.addEventListener("mouseleave", (e) => {
      this.handleMouseOut(e);
    });
  }
  moveCursor(t) {
    if (!this.isHovered)
      mt.to(this.cursor, {
        x: t.clientX - this.props.radius / 2,
        y: t.clientY - this.props.radius / 2,
        duration: this.props.transitionSpeed
      });
    else if (this.cursorTarget) {
      const e = Number(
        window.getComputedStyle(this.cursorTarget).borderRadius.slice(0, -2)
      );
      _t(this.cursorTarget, nt.lift) ? (mt.to(this.cursorTarget, {
        x: ye(
          t.clientX,
          this.cursorTarget.getBoundingClientRect().left,
          this.cursorTarget.clientWidth,
          this.parallaxSpeed.target
        ),
        y: ye(
          t.clientY,
          this.cursorTarget.getBoundingClientRect().top,
          this.cursorTarget.clientHeight,
          this.parallaxSpeed.target
        ),
        scale: 1.1,
        boxShadow: Yi("--ghost-shadow"),
        duration: this.props.transitionSpeed
      }), mt.to(this.cursor, {
        filter: "blur(8px)",
        x: this.cursorTarget.getBoundingClientRect().left + (t.clientX - this.cursorTarget.getBoundingClientRect().left - this.cursorTarget.clientWidth / 2) / this.parallaxSpeed.cursor,
        y: this.cursorTarget.getBoundingClientRect().top + (t.clientY - this.cursorTarget.getBoundingClientRect().top - this.cursorTarget.clientHeight / 2) / this.parallaxSpeed.cursor,
        backgroundImage: `radial-gradient(circle at ${t.clientX - this.cursorTarget.getBoundingClientRect().left}px ${t.clientY - this.cursorTarget.getBoundingClientRect().top}px, rgba(255,255,255,0.4), rgba(255,255,255,0))`,
        duration: this.props.transitionSpeed
      })) : (mt.to(this.cursor, {
        x: this.cursorTarget.getBoundingClientRect().left - (_t(this.cursorTarget, nt.noPadding) ? 0 : this.props.hoverPadding) + (_t(this.cursorTarget, nt.noParallax) ? 0 : (t.clientX - this.cursorTarget.getBoundingClientRect().left - this.cursorTarget.clientWidth / 2) / this.parallaxSpeed.cursor),
        y: this.cursorTarget.getBoundingClientRect().top - (_t(this.cursorTarget, nt.noPadding) ? 0 : this.props.hoverPadding) + (_t(this.cursorTarget, nt.noParallax) ? 0 : (t.clientY - this.cursorTarget.getBoundingClientRect().top - this.cursorTarget.clientHeight / 2) / this.parallaxSpeed.cursor),
        borderRadius: e * (_t(this.cursorTarget, nt.noPadding) ? 1 : 1.5),
        width: this.cursorTarget.clientWidth + (_t(this.cursorTarget, nt.noPadding) ? 0 : this.props.hoverPadding * 2),
        height: this.cursorTarget.clientHeight + (_t(this.cursorTarget, nt.noPadding) ? 0 : this.props.hoverPadding * 2),
        duration: this.props.transitionSpeed
      }), _t(this.cursorTarget, nt.noParallax) || mt.to(this.cursorTarget, {
        x: -ye(
          t.clientX,
          this.cursorTarget.getBoundingClientRect().left,
          this.cursorTarget.clientWidth,
          this.parallaxSpeed.target
        ),
        y: -ye(
          t.clientY,
          this.cursorTarget.getBoundingClientRect().top,
          this.cursorTarget.clientHeight,
          this.parallaxSpeed.target
        ),
        duration: this.props.transitionSpeed
      }));
    }
  }
  handleMouseOver(t) {
    this.isHovered = !0, this.cursorTarget = t.target;
    const e = Number(
      window.getComputedStyle(this.cursorTarget).borderRadius.slice(0, -2)
    );
    _t(this.cursorTarget, nt.lift) ? (this.cursor.classList.add("c-cursor-lift_active"), mt.to(this.cursor, {
      borderRadius: e,
      width: this.cursorTarget.clientWidth,
      height: this.cursorTarget.clientHeight,
      scale: 1.1,
      duration: this.props.transitionSpeed
    })) : this.cursor.classList.add("c-cursor_active");
  }
  handleMouseOut(t) {
    this.isHovered = !1, this.cursor.classList.remove("c-cursor_active"), this.cursor.classList.remove("c-cursor-lift_active"), mt.to(this.cursor, {
      x: t.clientX - this.props.radius / 2,
      y: t.clientY - this.props.radius / 2,
      width: this.props.radius,
      height: this.props.radius,
      borderRadius: "100px",
      scale: 1,
      backgroundImage: "none",
      filter: "blur(0px)",
      duration: this.props.transitionSpeed
    }), this.cursorTarget && mt.to(this.cursorTarget, {
      x: 0,
      y: 0,
      scale: 1,
      boxShadow: "0 7px 15px rgba(0,0,0,0.0)",
      duration: this.props.transitionSpeed
    });
  }
}
var Br;
const ns = (o) => {
  const t = {
    radius: (o == null ? void 0 : o.radius) || 20,
    transitionSpeed: (o == null ? void 0 : o.transitionSpeed) || 0.2,
    parallaxIndex: (o == null ? void 0 : o.parallaxIndex) || 10,
    hoverPadding: (o == null ? void 0 : o.hoverPadding) || 6
  };
  Vi();
  const e = Ii(t);
  window.onload = () => {
    let r = document.querySelectorAll(
      `[${nt.dataAttr}]`
    );
    Br = new is(e, t, r), console.log(Br.cursor);
  };
}, ss = () => {
  const o = document.createElement("div");
  o.setAttribute("class", "b-cursor"), document.body.prepend(o), document.addEventListener("mousemove", function(t) {
    o.style.transform = `translate3d(calc(${t.clientX}px - 50%), calc(${t.clientY}px - 50%), 0)`;
  });
};
ss();
ns();
