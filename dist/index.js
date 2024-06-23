import { jsx as le, jsxs as zt, Fragment as Yt } from "react/jsx-runtime";
import xe, { useRef as be, useContext as Oe, useLayoutEffect as sr, useDebugValue as mt, createElement as ar, createContext as Lt, forwardRef as cr, useCallback as jt, useEffect as Ae, useMemo as yt, useState as lr } from "react";
var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Te = {}, ur = {
  get exports() {
    return Te;
  },
  set exports(e) {
    Te = e;
  }
}, ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function dr() {
  if (gt)
    return ee;
  gt = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), $;
  $ = Symbol.for("react.module.reference");
  function C(u) {
    if (typeof u == "object" && u !== null) {
      var R = u.$$typeof;
      switch (R) {
        case e:
          switch (u = u.type, u) {
            case t:
            case o:
            case r:
            case d:
            case p:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case l:
                case s:
                case f:
                case y:
                case g:
                case i:
                  return u;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  return ee.ContextConsumer = s, ee.ContextProvider = i, ee.Element = e, ee.ForwardRef = f, ee.Fragment = t, ee.Lazy = y, ee.Memo = g, ee.Portal = n, ee.Profiler = o, ee.StrictMode = r, ee.Suspense = d, ee.SuspenseList = p, ee.isAsyncMode = function() {
    return !1;
  }, ee.isConcurrentMode = function() {
    return !1;
  }, ee.isContextConsumer = function(u) {
    return C(u) === s;
  }, ee.isContextProvider = function(u) {
    return C(u) === i;
  }, ee.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, ee.isForwardRef = function(u) {
    return C(u) === f;
  }, ee.isFragment = function(u) {
    return C(u) === t;
  }, ee.isLazy = function(u) {
    return C(u) === y;
  }, ee.isMemo = function(u) {
    return C(u) === g;
  }, ee.isPortal = function(u) {
    return C(u) === n;
  }, ee.isProfiler = function(u) {
    return C(u) === o;
  }, ee.isStrictMode = function(u) {
    return C(u) === r;
  }, ee.isSuspense = function(u) {
    return C(u) === d;
  }, ee.isSuspenseList = function(u) {
    return C(u) === p;
  }, ee.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === t || u === o || u === r || u === d || u === p || u === _ || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === g || u.$$typeof === i || u.$$typeof === s || u.$$typeof === f || u.$$typeof === $ || u.getModuleId !== void 0);
  }, ee.typeOf = C, ee;
}
var te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function fr() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), $ = !1, C = !1, u = !1, R = !1, F = !1, z;
    z = Symbol.for("react.module.reference");
    function Y(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === t || A === o || F || A === r || A === d || A === p || R || A === _ || $ || C || u || typeof A == "object" && A !== null && (A.$$typeof === y || A.$$typeof === g || A.$$typeof === i || A.$$typeof === s || A.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === z || A.getModuleId !== void 0));
    }
    function c(A) {
      if (typeof A == "object" && A !== null) {
        var Z = A.$$typeof;
        switch (Z) {
          case e:
            var ie = A.type;
            switch (ie) {
              case t:
              case o:
              case r:
              case d:
              case p:
                return ie;
              default:
                var J = ie && ie.$$typeof;
                switch (J) {
                  case l:
                  case s:
                  case f:
                  case y:
                  case g:
                  case i:
                    return J;
                  default:
                    return Z;
                }
            }
          case n:
            return Z;
        }
      }
    }
    var T = s, k = i, W = e, L = f, P = t, K = y, q = g, M = n, S = o, m = r, I = d, w = p, O = !1, j = !1;
    function G(A) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(A) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function x(A) {
      return c(A) === s;
    }
    function b(A) {
      return c(A) === i;
    }
    function E(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function N(A) {
      return c(A) === f;
    }
    function a(A) {
      return c(A) === t;
    }
    function U(A) {
      return c(A) === y;
    }
    function v(A) {
      return c(A) === g;
    }
    function B(A) {
      return c(A) === n;
    }
    function V(A) {
      return c(A) === o;
    }
    function X(A) {
      return c(A) === r;
    }
    function h(A) {
      return c(A) === d;
    }
    function oe(A) {
      return c(A) === p;
    }
    te.ContextConsumer = T, te.ContextProvider = k, te.Element = W, te.ForwardRef = L, te.Fragment = P, te.Lazy = K, te.Memo = q, te.Portal = M, te.Profiler = S, te.StrictMode = m, te.Suspense = I, te.SuspenseList = w, te.isAsyncMode = G, te.isConcurrentMode = Q, te.isContextConsumer = x, te.isContextProvider = b, te.isElement = E, te.isForwardRef = N, te.isFragment = a, te.isLazy = U, te.isMemo = v, te.isPortal = B, te.isProfiler = V, te.isStrictMode = X, te.isSuspense = h, te.isSuspenseList = oe, te.isValidElementType = Y, te.typeOf = c;
  }()), te;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = dr() : e.exports = fr();
})(ur);
function hr(e) {
  function n(x, b, E, N, a) {
    for (var U = 0, v = 0, B = 0, V = 0, X, h, oe = 0, A = 0, Z, ie = Z = X = 0, J = 0, ae = 0, Ce = 0, ce = 0, Re = E.length, ke = Re - 1, fe, H = "", se = "", Ve = "", Be = "", me; J < Re; ) {
      if (h = E.charCodeAt(J), J === ke && v + V + B + U !== 0 && (v !== 0 && (h = v === 47 ? 10 : 47), V = B = U = 0, Re++, ke++), v + V + B + U === 0) {
        if (J === ke && (0 < ae && (H = H.replace(y, "")), 0 < H.trim().length)) {
          switch (h) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              H += E.charAt(J);
          }
          h = 59;
        }
        switch (h) {
          case 123:
            for (H = H.trim(), X = H.charCodeAt(0), Z = 1, ce = ++J; J < Re; ) {
              switch (h = E.charCodeAt(J)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (h = E.charCodeAt(J + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ie = J + 1; ie < ke; ++ie)
                          switch (E.charCodeAt(ie)) {
                            case 47:
                              if (h === 42 && E.charCodeAt(ie - 1) === 42 && J + 2 !== ie) {
                                J = ie + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (h === 47) {
                                J = ie + 1;
                                break e;
                              }
                          }
                        J = ie;
                      }
                  }
                  break;
                case 91:
                  h++;
                case 40:
                  h++;
                case 34:
                case 39:
                  for (; J++ < ke && E.charCodeAt(J) !== h; )
                    ;
              }
              if (Z === 0)
                break;
              J++;
            }
            switch (Z = E.substring(ce, J), X === 0 && (X = (H = H.replace(g, "").trim()).charCodeAt(0)), X) {
              case 64:
                switch (0 < ae && (H = H.replace(y, "")), h = H.charCodeAt(1), h) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ae = b;
                    break;
                  default:
                    ae = I;
                }
                if (Z = n(b, ae, Z, h, a + 1), ce = Z.length, 0 < O && (ae = t(I, H, Ce), me = l(3, Z, ae, b, M, q, ce, h, a, N), H = ae.join(""), me !== void 0 && (ce = (Z = me.trim()).length) === 0 && (h = 0, Z = "")), 0 < ce)
                  switch (h) {
                    case 115:
                      H = H.replace(T, s);
                    case 100:
                    case 109:
                    case 45:
                      Z = H + "{" + Z + "}";
                      break;
                    case 107:
                      H = H.replace(F, "$1 $2"), Z = H + "{" + Z + "}", Z = m === 1 || m === 2 && i("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                      break;
                    default:
                      Z = H + Z, N === 112 && (Z = (se += Z, ""));
                  }
                else
                  Z = "";
                break;
              default:
                Z = n(b, t(b, H, Ce), Z, N, a + 1);
            }
            Ve += Z, Z = Ce = ae = ie = X = 0, H = "", h = E.charCodeAt(++J);
            break;
          case 125:
          case 59:
            if (H = (0 < ae ? H.replace(y, "") : H).trim(), 1 < (ce = H.length))
              switch (ie === 0 && (X = H.charCodeAt(0), X === 45 || 96 < X && 123 > X) && (ce = (H = H.replace(" ", ":")).length), 0 < O && (me = l(1, H, b, x, M, q, se.length, N, a, N)) !== void 0 && (ce = (H = me.trim()).length) === 0 && (H = "\0\0"), X = H.charCodeAt(0), h = H.charCodeAt(1), X) {
                case 0:
                  break;
                case 64:
                  if (h === 105 || h === 99) {
                    Be += H + E.charAt(J);
                    break;
                  }
                default:
                  H.charCodeAt(ce - 1) !== 58 && (se += o(H, X, h, H.charCodeAt(2)));
              }
            Ce = ae = ie = X = 0, H = "", h = E.charCodeAt(++J);
        }
      }
      switch (h) {
        case 13:
        case 10:
          v === 47 ? v = 0 : 1 + X === 0 && N !== 107 && 0 < H.length && (ae = 1, H += "\0"), 0 < O * G && l(0, H, b, x, M, q, se.length, N, a, N), q = 1, M++;
          break;
        case 59:
        case 125:
          if (v + V + B + U === 0) {
            q++;
            break;
          }
        default:
          switch (q++, fe = E.charAt(J), h) {
            case 9:
            case 32:
              if (V + U + v === 0)
                switch (oe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    fe = "";
                    break;
                  default:
                    h !== 32 && (fe = " ");
                }
              break;
            case 0:
              fe = "\\0";
              break;
            case 12:
              fe = "\\f";
              break;
            case 11:
              fe = "\\v";
              break;
            case 38:
              V + v + U === 0 && (ae = Ce = 1, fe = "\f" + fe);
              break;
            case 108:
              if (V + v + U + S === 0 && 0 < ie)
                switch (J - ie) {
                  case 2:
                    oe === 112 && E.charCodeAt(J - 3) === 58 && (S = oe);
                  case 8:
                    A === 111 && (S = A);
                }
              break;
            case 58:
              V + v + U === 0 && (ie = J);
              break;
            case 44:
              v + B + V + U === 0 && (ae = 1, fe += "\r");
              break;
            case 34:
            case 39:
              v === 0 && (V = V === h ? 0 : V === 0 ? h : V);
              break;
            case 91:
              V + v + B === 0 && U++;
              break;
            case 93:
              V + v + B === 0 && U--;
              break;
            case 41:
              V + v + U === 0 && B--;
              break;
            case 40:
              if (V + v + U === 0) {
                if (X === 0)
                  switch (2 * oe + 3 * A) {
                    case 533:
                      break;
                    default:
                      X = 1;
                  }
                B++;
              }
              break;
            case 64:
              v + B + V + U + ie + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + U + B))
                switch (v) {
                  case 0:
                    switch (2 * h + 3 * E.charCodeAt(J + 1)) {
                      case 235:
                        v = 47;
                        break;
                      case 220:
                        ce = J, v = 42;
                    }
                    break;
                  case 42:
                    h === 47 && oe === 42 && ce + 2 !== J && (E.charCodeAt(ce + 2) === 33 && (se += E.substring(ce, J + 1)), fe = "", v = 0);
                }
          }
          v === 0 && (H += fe);
      }
      A = oe, oe = h, J++;
    }
    if (ce = se.length, 0 < ce) {
      if (ae = b, 0 < O && (me = l(2, se, ae, x, M, q, ce, N, a, N), me !== void 0 && (se = me).length === 0))
        return Be + se + Ve;
      if (se = ae.join(",") + "{" + se + "}", m * S !== 0) {
        switch (m !== 2 || i(se, 2) || (S = 0), S) {
          case 111:
            se = se.replace(Y, ":-moz-$1") + se;
            break;
          case 112:
            se = se.replace(z, "::-webkit-input-$1") + se.replace(z, "::-moz-$1") + se.replace(z, ":-ms-input-$1") + se;
        }
        S = 0;
      }
    }
    return Be + se + Ve;
  }
  function t(x, b, E) {
    var N = b.trim().split(u);
    b = N;
    var a = N.length, U = x.length;
    switch (U) {
      case 0:
      case 1:
        var v = 0;
        for (x = U === 0 ? "" : x[0] + " "; v < a; ++v)
          b[v] = r(x, b[v], E).trim();
        break;
      default:
        var B = v = 0;
        for (b = []; v < a; ++v)
          for (var V = 0; V < U; ++V)
            b[B++] = r(x[V] + " ", N[v], E).trim();
    }
    return b;
  }
  function r(x, b, E) {
    var N = b.charCodeAt(0);
    switch (33 > N && (N = (b = b.trim()).charCodeAt(0)), N) {
      case 38:
        return b.replace(R, "$1" + x.trim());
      case 58:
        return x.trim() + b.replace(R, "$1" + x.trim());
      default:
        if (0 < 1 * E && 0 < b.indexOf("\f"))
          return b.replace(R, (x.charCodeAt(0) === 58 ? "" : "$1") + x.trim());
    }
    return x + b;
  }
  function o(x, b, E, N) {
    var a = x + ";", U = 2 * b + 3 * E + 4 * N;
    if (U === 944) {
      x = a.indexOf(":", 9) + 1;
      var v = a.substring(x, a.length - 1).trim();
      return v = a.substring(0, x).trim() + v + ";", m === 1 || m === 2 && i(v, 1) ? "-webkit-" + v + v : v;
    }
    if (m === 0 || m === 2 && !i(a, 1))
      return a;
    switch (U) {
      case 1015:
        return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (a.charCodeAt(8) === 45)
          return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(K, "$1-webkit-$2") + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45)
          switch (a.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
            case 115:
              return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
            case 98:
              return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
          }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99)
          break;
        return v = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + v + "-webkit-" + a + "-ms-flex-pack" + v + a;
      case 1005:
        return $.test(a) ? a.replace(_, ":-webkit-") + a.replace(_, ":-moz-") + a : a;
      case 1e3:
        switch (v = a.substring(13).trim(), b = v.indexOf("-") + 1, v.charCodeAt(0) + v.charCodeAt(b)) {
          case 226:
            v = a.replace(c, "tb");
            break;
          case 232:
            v = a.replace(c, "tb-rl");
            break;
          case 220:
            v = a.replace(c, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + v + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (b = (a = x).length - 10, v = (a.charCodeAt(b) === 33 ? a.substring(0, b) : a).substring(x.indexOf(":", 7) + 1).trim(), U = v.charCodeAt(0) + (v.charCodeAt(7) | 0)) {
          case 203:
            if (111 > v.charCodeAt(8))
              break;
          case 115:
            a = a.replace(v, "-webkit-" + v) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(v, "-webkit-" + (102 < U ? "inline-" : "") + "box") + ";" + a.replace(v, "-webkit-" + v) + ";" + a.replace(v, "-ms-" + v + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (a.charCodeAt(5) === 45)
          switch (a.charCodeAt(6)) {
            case 105:
              return v = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + v + "-ms-flex-" + v + a;
            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(W, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(W, "") + a;
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (P.test(x) === !0)
          return (v = x.substring(x.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(x.replace("stretch", "fill-available"), b, E, N).replace(":fill-available", ":stretch") : a.replace(v, "-webkit-" + v) + a.replace(v, "-moz-" + v.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, E + N === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + a;
    }
    return a;
  }
  function i(x, b) {
    var E = x.indexOf(b === 1 ? ":" : "{"), N = x.substring(0, b !== 3 ? E : 10);
    return E = x.substring(E + 1, x.length - 1), j(b !== 2 ? N : N.replace(L, "$1"), E, b);
  }
  function s(x, b) {
    var E = o(b, b.charCodeAt(0), b.charCodeAt(1), b.charCodeAt(2));
    return E !== b + ";" ? E.replace(k, " or ($1)").substring(4) : "(" + b + ")";
  }
  function l(x, b, E, N, a, U, v, B, V, X) {
    for (var h = 0, oe = b, A; h < O; ++h)
      switch (A = w[h].call(p, x, oe, E, N, a, U, v, B, V, X)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = A;
      }
    if (oe !== b)
      return oe;
  }
  function f(x) {
    switch (x) {
      case void 0:
      case null:
        O = w.length = 0;
        break;
      default:
        if (typeof x == "function")
          w[O++] = x;
        else if (typeof x == "object")
          for (var b = 0, E = x.length; b < E; ++b)
            f(x[b]);
        else
          G = !!x | 0;
    }
    return f;
  }
  function d(x) {
    return x = x.prefix, x !== void 0 && (j = null, x ? typeof x != "function" ? m = 1 : (m = 2, j = x) : m = 0), d;
  }
  function p(x, b) {
    var E = x;
    if (33 > E.charCodeAt(0) && (E = E.trim()), Q = E, E = [Q], 0 < O) {
      var N = l(-1, b, E, E, M, q, 0, 0, 0, 0);
      N !== void 0 && typeof N == "string" && (b = N);
    }
    var a = n(I, E, b, 0, 0);
    return 0 < O && (N = l(-2, a, E, E, M, q, a.length, 0, 0, 0), N !== void 0 && (a = N)), Q = "", S = 0, q = M = 1, a;
  }
  var g = /^\0+/g, y = /[\0\r\f]/g, _ = /: */g, $ = /zoo|gra/, C = /([,: ])(transform)/g, u = /,\r+?/g, R = /([\t\r\n ])*\f?&/g, F = /@(k\w+)\s*(\S*)\s*/, z = /::(place)/g, Y = /:(read-only)/g, c = /[svh]\w+-[tblr]{2}/, T = /\(\s*(.*)\s*\)/g, k = /([\s\S]*?);/g, W = /-self|flex-/g, L = /[^]*?(:[rp][el]a[\w-]+)[^]*/, P = /stretch|:\s*\w+\-(?:conte|avail)/, K = /([^-])(image-set\()/, q = 1, M = 1, S = 0, m = 1, I = [], w = [], O = 0, j = null, G = 0, Q = "";
  return p.use = f, p.set = d, e !== void 0 && d(e), p;
}
var pr = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function mr(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var yr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wt = /* @__PURE__ */ mr(
  function(e) {
    return yr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Xe = {}, gr = {
  get exports() {
    return Xe;
  },
  set exports(e) {
    Xe = e;
  }
}, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function vr() {
  if (bt)
    return re;
  bt = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, u = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function z(c) {
    if (typeof c == "object" && c !== null) {
      var T = c.$$typeof;
      switch (T) {
        case n:
          switch (c = c.type, c) {
            case f:
            case d:
            case r:
            case i:
            case o:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case l:
                case p:
                case $:
                case _:
                case s:
                  return c;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  function Y(c) {
    return z(c) === d;
  }
  return re.AsyncMode = f, re.ConcurrentMode = d, re.ContextConsumer = l, re.ContextProvider = s, re.Element = n, re.ForwardRef = p, re.Fragment = r, re.Lazy = $, re.Memo = _, re.Portal = t, re.Profiler = i, re.StrictMode = o, re.Suspense = g, re.isAsyncMode = function(c) {
    return Y(c) || z(c) === f;
  }, re.isConcurrentMode = Y, re.isContextConsumer = function(c) {
    return z(c) === l;
  }, re.isContextProvider = function(c) {
    return z(c) === s;
  }, re.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === n;
  }, re.isForwardRef = function(c) {
    return z(c) === p;
  }, re.isFragment = function(c) {
    return z(c) === r;
  }, re.isLazy = function(c) {
    return z(c) === $;
  }, re.isMemo = function(c) {
    return z(c) === _;
  }, re.isPortal = function(c) {
    return z(c) === t;
  }, re.isProfiler = function(c) {
    return z(c) === i;
  }, re.isStrictMode = function(c) {
    return z(c) === o;
  }, re.isSuspense = function(c) {
    return z(c) === g;
  }, re.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === d || c === i || c === o || c === g || c === y || typeof c == "object" && c !== null && (c.$$typeof === $ || c.$$typeof === _ || c.$$typeof === s || c.$$typeof === l || c.$$typeof === p || c.$$typeof === u || c.$$typeof === R || c.$$typeof === F || c.$$typeof === C);
  }, re.typeOf = z, re;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function wr() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, u = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function z(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === r || h === d || h === i || h === o || h === g || h === y || typeof h == "object" && h !== null && (h.$$typeof === $ || h.$$typeof === _ || h.$$typeof === s || h.$$typeof === l || h.$$typeof === p || h.$$typeof === u || h.$$typeof === R || h.$$typeof === F || h.$$typeof === C);
    }
    function Y(h) {
      if (typeof h == "object" && h !== null) {
        var oe = h.$$typeof;
        switch (oe) {
          case n:
            var A = h.type;
            switch (A) {
              case f:
              case d:
              case r:
              case i:
              case o:
              case g:
                return A;
              default:
                var Z = A && A.$$typeof;
                switch (Z) {
                  case l:
                  case p:
                  case $:
                  case _:
                  case s:
                    return Z;
                  default:
                    return oe;
                }
            }
          case t:
            return oe;
        }
      }
    }
    var c = f, T = d, k = l, W = s, L = n, P = p, K = r, q = $, M = _, S = t, m = i, I = o, w = g, O = !1;
    function j(h) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(h) || Y(h) === f;
    }
    function G(h) {
      return Y(h) === d;
    }
    function Q(h) {
      return Y(h) === l;
    }
    function x(h) {
      return Y(h) === s;
    }
    function b(h) {
      return typeof h == "object" && h !== null && h.$$typeof === n;
    }
    function E(h) {
      return Y(h) === p;
    }
    function N(h) {
      return Y(h) === r;
    }
    function a(h) {
      return Y(h) === $;
    }
    function U(h) {
      return Y(h) === _;
    }
    function v(h) {
      return Y(h) === t;
    }
    function B(h) {
      return Y(h) === i;
    }
    function V(h) {
      return Y(h) === o;
    }
    function X(h) {
      return Y(h) === g;
    }
    ne.AsyncMode = c, ne.ConcurrentMode = T, ne.ContextConsumer = k, ne.ContextProvider = W, ne.Element = L, ne.ForwardRef = P, ne.Fragment = K, ne.Lazy = q, ne.Memo = M, ne.Portal = S, ne.Profiler = m, ne.StrictMode = I, ne.Suspense = w, ne.isAsyncMode = j, ne.isConcurrentMode = G, ne.isContextConsumer = Q, ne.isContextProvider = x, ne.isElement = b, ne.isForwardRef = E, ne.isFragment = N, ne.isLazy = a, ne.isMemo = U, ne.isPortal = v, ne.isProfiler = B, ne.isStrictMode = V, ne.isSuspense = X, ne.isValidElementType = z, ne.typeOf = Y;
  }()), ne;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = vr() : e.exports = wr();
})(gr);
var ct = Xe, br = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Sr = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, xr = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ft = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, lt = {};
lt[ct.ForwardRef] = xr;
lt[ct.Memo] = Ft;
function xt(e) {
  return ct.isMemo(e) ? Ft : lt[e.$$typeof] || br;
}
var $r = Object.defineProperty, _r = Object.getOwnPropertyNames, $t = Object.getOwnPropertySymbols, Er = Object.getOwnPropertyDescriptor, Cr = Object.getPrototypeOf, _t = Object.prototype;
function Wt(e, n, t) {
  if (typeof n != "string") {
    if (_t) {
      var r = Cr(n);
      r && r !== _t && Wt(e, r, t);
    }
    var o = _r(n);
    $t && (o = o.concat($t(n)));
    for (var i = xt(e), s = xt(n), l = 0; l < o.length; ++l) {
      var f = o[l];
      if (!Sr[f] && !(t && t[f]) && !(s && s[f]) && !(i && i[f])) {
        var d = Er(n, f);
        try {
          $r(e, f, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var kr = Wt;
function he() {
  return (he = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Et = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Ze = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Te.typeOf(e);
}, Le = Object.freeze([]), ye = Object.freeze({});
function Pe(e) {
  return typeof e == "function";
}
function qe(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ut(e) {
  return e && typeof e.styledComponentId == "string";
}
var $e = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", dt = typeof window < "u" && "HTMLElement" in window, Ar = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Mr = {}, Tr = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Pr() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function _e(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Pr.apply(void 0, [Tr[e]].concat(t)).trim());
}
var Or = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, n.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, s = i; t >= s; )
        (s <<= 1) < 0 && _e(16, "" + t);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var l = i; l < s; l++)
        this.groupSizes[l] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), d = 0, p = r.length; d < p; d++)
      this.tag.insertRule(f, r[d]) && (this.groupSizes[t]++, f++);
  }, n.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r;
      this.groupSizes[t] = 0;
      for (var s = o; s < i; s++)
        this.tag.deleteRule(o);
    }
  }, n.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], i = this.indexOfGroup(t), s = i + o, l = i; l < s; l++)
      r += this.tag.getRule(l) + `/*!sc*/
`;
    return r;
  }, e;
}(), Ye = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Map(), Me = 1, De = function(e) {
  if (Ye.has(e))
    return Ye.get(e);
  for (; je.has(Me); )
    Me++;
  var n = Me++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && _e(16, "" + n), Ye.set(e, n), je.set(n, e), n;
}, Rr = function(e) {
  return je.get(e);
}, Dr = function(e, n) {
  n >= Me && (Me = n + 1), Ye.set(e, n), je.set(n, e);
}, Nr = "style[" + $e + '][data-styled-version="5.3.8"]', Ir = new RegExp("^" + $e + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), zr = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(n, r);
}, Yr = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = t.length; o < i; o++) {
    var s = t[o].trim();
    if (s) {
      var l = s.match(Ir);
      if (l) {
        var f = 0 | parseInt(l[1], 10), d = l[2];
        f !== 0 && (Dr(d, f), zr(e, d, l[3]), e.getTag().insertRules(f, r)), r.length = 0;
      } else
        r.push(s);
    }
  }
}, Lr = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ht = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(l) {
    for (var f = l.childNodes, d = f.length; d >= 0; d--) {
      var p = f[d];
      if (p && p.nodeType === 1 && p.hasAttribute($e))
        return p;
    }
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute($e, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var s = Lr();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, jr = function() {
  function e(t) {
    var r = this.element = Ht(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, s = 0, l = i.length; s < l; s++) {
        var f = i[s];
        if (f.ownerNode === o)
          return f;
      }
      _e(17);
    }(r), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, n.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), Fr = function() {
  function e(t) {
    var r = this.element = Ht(t);
    this.nodes = r.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r), i = this.nodes[t];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Wr = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, n.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Ct = dt, Hr = { isServer: !dt, useCSSOMInjection: !Ar }, Fe = function() {
  function e(t, r, o) {
    t === void 0 && (t = ye), r === void 0 && (r = {}), this.options = he({}, Hr, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && dt && Ct && (Ct = !1, function(i) {
      for (var s = document.querySelectorAll(Nr), l = 0, f = s.length; l < f; l++) {
        var d = s[l];
        d && d.getAttribute($e) !== "active" && (Yr(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(t) {
    return De(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(he({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, s = r.target, t = o ? new Wr(s) : i ? new jr(s) : new Fr(s), new Or(t)));
    var t, r, o, i, s;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (De(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(De(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(De(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, i = "", s = 0; s < o; s++) {
        var l = Rr(s);
        if (l !== void 0) {
          var f = t.names.get(l), d = r.getGroup(s);
          if (f && d && f.size) {
            var p = $e + ".g" + s + '[id="' + l + '"]', g = "";
            f !== void 0 && f.forEach(function(y) {
              y.length > 0 && (g += y + ",");
            }), i += "" + d + p + '{content:"' + g + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Vr = /(a)(d)/gi, kt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Je(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = kt(n % 52) + t;
  return (kt(n % 52) + t).replace(Vr, "$1-$2");
}
var ve = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Vt = function(e) {
  return ve(5381, e);
};
function Bt(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Pe(t) && !ut(t))
      return !1;
  }
  return !0;
}
var Br = Vt("5.3.8"), Gr = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Bt(n), this.componentId = t, this.baseHash = ve(Br, t), this.baseStyle = r, Fe.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = we(this.rules, n, t, r).join(""), l = Je(ve(this.baseHash, s) >>> 0);
        if (!t.hasNameForId(o, l)) {
          var f = r(s, "." + l, void 0, o);
          t.insertRules(o, l, f);
        }
        i.push(l), this.staticRulesId = l;
      }
    else {
      for (var d = this.rules.length, p = ve(this.baseHash, r.hash), g = "", y = 0; y < d; y++) {
        var _ = this.rules[y];
        if (typeof _ == "string")
          g += _, process.env.NODE_ENV !== "production" && (p = ve(p, _ + y));
        else if (_) {
          var $ = we(_, n, t, r), C = Array.isArray($) ? $.join("") : $;
          p = ve(p, C + y), g += C;
        }
      }
      if (g) {
        var u = Je(p >>> 0);
        if (!t.hasNameForId(o, u)) {
          var R = r(g, "." + u, void 0, o);
          t.insertRules(o, u, R);
        }
        i.push(u);
      }
    }
    return i.join(" ");
  }, e;
}(), Ur = /^\s*\/\/.*$/gm, Xr = [":", "[", ".", "#"];
function Zr(e) {
  var n, t, r, o, i = e === void 0 ? ye : e, s = i.options, l = s === void 0 ? ye : s, f = i.plugins, d = f === void 0 ? Le : f, p = new hr(l), g = [], y = function(C) {
    function u(R) {
      if (R)
        try {
          C(R + "}");
        } catch {
        }
    }
    return function(R, F, z, Y, c, T, k, W, L, P) {
      switch (R) {
        case 1:
          if (L === 0 && F.charCodeAt(0) === 64)
            return C(F + ";"), "";
          break;
        case 2:
          if (W === 0)
            return F + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return C(z[0] + F), "";
            default:
              return F + (P === 0 ? "/*|*/" : "");
          }
        case -2:
          F.split("/*|*/}").forEach(u);
      }
    };
  }(function(C) {
    g.push(C);
  }), _ = function(C, u, R) {
    return u === 0 && Xr.indexOf(R[t.length]) !== -1 || R.match(o) ? C : "." + n;
  };
  function $(C, u, R, F) {
    F === void 0 && (F = "&");
    var z = C.replace(Ur, ""), Y = u && R ? R + " " + u + " { " + z + " }" : z;
    return n = F, t = u, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), p(R || !u ? "" : u, Y);
  }
  return p.use([].concat(d, [function(C, u, R) {
    C === 2 && R.length && R[0].lastIndexOf(t) > 0 && (R[0] = R[0].replace(r, _));
  }, y, function(C) {
    if (C === -2) {
      var u = g;
      return g = [], u;
    }
  }])), $.hash = d.length ? d.reduce(function(C, u) {
    return u.name || _e(15), ve(C, u.name);
  }, 5381).toString() : "", $;
}
var Gt = xe.createContext();
Gt.Consumer;
var Ut = xe.createContext(), qr = (Ut.Consumer, new Fe()), Ke = Zr();
function Xt() {
  return Oe(Gt) || qr;
}
function Zt() {
  return Oe(Ut) || Ke;
}
var qt = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ke);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.toString = function() {
      return _e(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Ke), this.name + n.hash;
  }, e;
}(), Jr = /([A-Z])/, Kr = /([A-Z])/g, Qr = /^ms-/, en = function(e) {
  return "-" + e.toLowerCase();
};
function At(e) {
  return Jr.test(e) ? e.replace(Kr, en).replace(Qr, "-ms-") : e;
}
var Mt = function(e) {
  return e == null || e === !1 || e === "";
};
function we(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, l = e.length; s < l; s += 1)
      (o = we(e[s], n, t, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Mt(e))
    return "";
  if (ut(e))
    return "." + e.styledComponentId;
  if (Pe(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !n)
      return e;
    var f = e(n);
    return process.env.NODE_ENV !== "production" && Te.isElement(f) && console.warn(qe(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), we(f, n, t, r);
  }
  var d;
  return e instanceof qt ? t ? (e.inject(t, r), e.getName(r)) : e : Ze(e) ? function p(g, y) {
    var _, $, C = [];
    for (var u in g)
      g.hasOwnProperty(u) && !Mt(g[u]) && (Array.isArray(g[u]) && g[u].isCss || Pe(g[u]) ? C.push(At(u) + ":", g[u], ";") : Ze(g[u]) ? C.push.apply(C, p(g[u], u)) : C.push(At(u) + ": " + (_ = u, ($ = g[u]) == null || typeof $ == "boolean" || $ === "" ? "" : typeof $ != "number" || $ === 0 || _ in pr ? String($).trim() : $ + "px") + ";"));
    return y ? [y + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var Tt = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ft(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return Pe(e) || Ze(e) ? Tt(we(Et(Le, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Tt(we(Et(e, t)));
}
var Pt = /invalid hook call/i, Ne = /* @__PURE__ */ new Set(), Jt = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (Pt.test(i))
          o = !1, Ne.delete(t);
        else {
          for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++)
            l[f - 1] = arguments[f];
          r.apply(void 0, [i].concat(l));
        }
      }, be(), o && !Ne.has(t) && (console.warn(t), Ne.add(t));
    } catch (i) {
      Pt.test(i.message) && Ne.delete(t);
    } finally {
      console.error = r;
    }
  }
}, Kt = function(e, n, t) {
  return t === void 0 && (t = ye), e.theme !== t.theme && e.theme || n || t.theme;
}, tn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, rn = /(^-|-$)/g;
function Ge(e) {
  return e.replace(tn, "-").replace(rn, "");
}
var ht = function(e) {
  return Je(Vt(e) >>> 0);
};
function Ie(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Qe = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, nn = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function on(e, n, t) {
  var r = e[t];
  Qe(n) && Qe(r) ? Qt(r, n) : e[t] = n;
}
function Qt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, i = t; o < i.length; o++) {
    var s = i[o];
    if (Qe(s))
      for (var l in s)
        nn(l) && on(e, s[l], l);
  }
  return e;
}
var pt = xe.createContext();
pt.Consumer;
var Ue = {};
function er(e, n, t) {
  var r = ut(e), o = !Ie(e), i = n.attrs, s = i === void 0 ? Le : i, l = n.componentId, f = l === void 0 ? function(F, z) {
    var Y = typeof F != "string" ? "sc" : Ge(F);
    Ue[Y] = (Ue[Y] || 0) + 1;
    var c = Y + "-" + ht("5.3.8" + Y + Ue[Y]);
    return z ? z + "-" + c : c;
  }(n.displayName, n.parentComponentId) : l, d = n.displayName, p = d === void 0 ? function(F) {
    return Ie(F) ? "styled." + F : "Styled(" + qe(F) + ")";
  }(e) : d, g = n.displayName && n.componentId ? Ge(n.displayName) + "-" + n.componentId : n.componentId || f, y = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, _ = n.shouldForwardProp;
  r && e.shouldForwardProp && (_ = n.shouldForwardProp ? function(F, z, Y) {
    return e.shouldForwardProp(F, z, Y) && n.shouldForwardProp(F, z, Y);
  } : e.shouldForwardProp);
  var $, C = new Gr(t, g, r ? e.componentStyle : void 0), u = C.isStatic && s.length === 0, R = function(F, z) {
    return function(Y, c, T, k) {
      var W = Y.attrs, L = Y.componentStyle, P = Y.defaultProps, K = Y.foldedComponentIds, q = Y.shouldForwardProp, M = Y.styledComponentId, S = Y.target;
      process.env.NODE_ENV !== "production" && mt(M);
      var m = function(N, a, U) {
        N === void 0 && (N = ye);
        var v = he({}, a, { theme: N }), B = {};
        return U.forEach(function(V) {
          var X, h, oe, A = V;
          for (X in Pe(A) && (A = A(v)), A)
            v[X] = B[X] = X === "className" ? (h = B[X], oe = A[X], h && oe ? h + " " + oe : h || oe) : A[X];
        }), [v, B];
      }(Kt(c, Oe(pt), P) || ye, c, W), I = m[0], w = m[1], O = function(N, a, U, v) {
        var B = Xt(), V = Zt(), X = a ? N.generateAndInjectStyles(ye, B, V) : N.generateAndInjectStyles(U, B, V);
        return process.env.NODE_ENV !== "production" && mt(X), process.env.NODE_ENV !== "production" && !a && v && v(X), X;
      }(L, k, I, process.env.NODE_ENV !== "production" ? Y.warnTooManyClasses : void 0), j = T, G = w.$as || c.$as || w.as || c.as || S, Q = Ie(G), x = w !== c ? he({}, c, {}, w) : c, b = {};
      for (var E in x)
        E[0] !== "$" && E !== "as" && (E === "forwardedAs" ? b.as = x[E] : (q ? q(E, wt, G) : !Q || wt(E)) && (b[E] = x[E]));
      return c.style && w.style !== c.style && (b.style = he({}, c.style, {}, w.style)), b.className = Array.prototype.concat(K, M, O !== M ? O : null, c.className, w.className).filter(Boolean).join(" "), b.ref = j, ar(G, b);
    }($, F, z, u);
  };
  return R.displayName = p, ($ = xe.forwardRef(R)).attrs = y, $.componentStyle = C, $.displayName = p, $.shouldForwardProp = _, $.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Le, $.styledComponentId = g, $.target = r ? e.target : e, $.withComponent = function(F) {
    var z = n.componentId, Y = function(T, k) {
      if (T == null)
        return {};
      var W, L, P = {}, K = Object.keys(T);
      for (L = 0; L < K.length; L++)
        W = K[L], k.indexOf(W) >= 0 || (P[W] = T[W]);
      return P;
    }(n, ["componentId"]), c = z && z + "-" + (Ie(F) ? F : Ge(qe(F)));
    return er(F, he({}, Y, { attrs: y, componentId: c }), t);
  }, Object.defineProperty($, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(F) {
    this._foldedDefaultProps = r ? Qt({}, e.defaultProps, F) : F;
  } }), process.env.NODE_ENV !== "production" && (Jt(p, g), $.warnTooManyClasses = function(F, z) {
    var Y = {}, c = !1;
    return function(T) {
      if (!c && (Y[T] = !0, Object.keys(Y).length >= 200)) {
        var k = z ? ' with the id of "' + z + '"' : "";
        console.warn("Over 200 classes were generated for component " + F + k + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), c = !0, Y = {};
      }
    };
  }(p, g)), $.toString = function() {
    return "." + $.styledComponentId;
  }, o && kr($, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), $;
}
var et = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = ye), !Te.isValidElementType(r))
      return _e(1, String(r));
    var i = function() {
      return t(r, o, ft.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return n(t, r, he({}, o, {}, s));
    }, i.attrs = function(s) {
      return n(t, r, he({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, i;
  }(er, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  et[e] = et(e);
});
var sn = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Bt(t), Fe.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, i) {
    var s = i(we(this.rules, r, o, i).join(""), ""), l = this.componentId + t;
    o.insertRules(l, l, s);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, i) {
    t > 2 && Fe.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, i);
  }, e;
}();
function an(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = ft.apply(void 0, [e].concat(t)), i = "sc-global-" + ht(JSON.stringify(o)), s = new sn(o, i);
  function l(d) {
    var p = Xt(), g = Zt(), y = Oe(pt), _ = be(p.allocateGSInstance(i)).current;
    return process.env.NODE_ENV !== "production" && xe.Children.count(d.children) && console.warn("The global style component " + i + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function($) {
      return typeof $ == "string" && $.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), p.server && f(_, d, p, y, g), sr(function() {
      if (!p.server)
        return f(_, d, p, y, g), function() {
          return s.removeStyles(_, p);
        };
    }, [_, d, p, y, g]), null;
  }
  function f(d, p, g, y, _) {
    if (s.isStatic)
      s.renderStyles(d, Mr, g, _);
    else {
      var $ = he({}, p, { theme: Kt(p, y, l.defaultProps) });
      s.renderStyles(d, $, g, _);
    }
  }
  return process.env.NODE_ENV !== "production" && Jt(i), xe.memo(l);
}
function cn(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = ft.apply(void 0, [e].concat(t)).join(""), i = ht(o);
  return new qt(i, o);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const D = et, ze = "reactSchedulerOutsideWrapper";
an`

  #${ze} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${ze} *,
 #${ze} *:before,
 #${ze} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`;
const Se = {
  navHeight: "44px",
  colors: {
    black: "#1C222F",
    grey400: "#D2D2D2",
    grey600: "#777777",
    blue900: "#40c057",
    blue100: "#ddf3de",
    blue300: "#bbe7bd",
    blue400: "#0B6726",
    blue200: "#ccedce",
    red400: "#EF4444",
    white: "#FFFFFF"
  }
}, Ee = `
margin: 0;
padding: 0;
`, tr = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
D.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const We = 50, ln = 24, un = 16, dn = 40, fn = dn + un + ln, tt = 84, pe = 56, ge = 196, rt = 12, hn = 3, rr = "reactSchedulerCanvasWrapper", pn = 4, mn = 48, yn = "rgb(114,141,226)";
var He = {}, gn = {
  get exports() {
    return He;
  },
  set exports(e) {
    He = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(de, function() {
    var t = 1e3, r = 6e4, o = 36e5, i = "millisecond", s = "second", l = "minute", f = "hour", d = "day", p = "week", g = "month", y = "quarter", _ = "year", $ = "date", C = "Invalid Date", u = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, R = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, F = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(M) {
      var S = ["th", "st", "nd", "rd"], m = M % 100;
      return "[" + M + (S[(m - 20) % 10] || S[m] || S[0]) + "]";
    } }, z = function(M, S, m) {
      var I = String(M);
      return !I || I.length >= S ? M : "" + Array(S + 1 - I.length).join(m) + M;
    }, Y = { s: z, z: function(M) {
      var S = -M.utcOffset(), m = Math.abs(S), I = Math.floor(m / 60), w = m % 60;
      return (S <= 0 ? "+" : "-") + z(I, 2, "0") + ":" + z(w, 2, "0");
    }, m: function M(S, m) {
      if (S.date() < m.date())
        return -M(m, S);
      var I = 12 * (m.year() - S.year()) + (m.month() - S.month()), w = S.clone().add(I, g), O = m - w < 0, j = S.clone().add(I + (O ? -1 : 1), g);
      return +(-(I + (m - w) / (O ? w - j : j - w)) || 0);
    }, a: function(M) {
      return M < 0 ? Math.ceil(M) || 0 : Math.floor(M);
    }, p: function(M) {
      return { M: g, y: _, w: p, d, D: $, h: f, m: l, s, ms: i, Q: y }[M] || String(M || "").toLowerCase().replace(/s$/, "");
    }, u: function(M) {
      return M === void 0;
    } }, c = "en", T = {};
    T[c] = F;
    var k = function(M) {
      return M instanceof K;
    }, W = function M(S, m, I) {
      var w;
      if (!S)
        return c;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        T[O] && (w = O), m && (T[O] = m, w = O);
        var j = S.split("-");
        if (!w && j.length > 1)
          return M(j[0]);
      } else {
        var G = S.name;
        T[G] = S, w = G;
      }
      return !I && w && (c = w), w || !I && c;
    }, L = function(M, S) {
      if (k(M))
        return M.clone();
      var m = typeof S == "object" ? S : {};
      return m.date = M, m.args = arguments, new K(m);
    }, P = Y;
    P.l = W, P.i = k, P.w = function(M, S) {
      return L(M, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var K = function() {
      function M(m) {
        this.$L = W(m.locale, null, !0), this.parse(m);
      }
      var S = M.prototype;
      return S.parse = function(m) {
        this.$d = function(I) {
          var w = I.date, O = I.utc;
          if (w === null)
            return new Date(NaN);
          if (P.u(w))
            return new Date();
          if (w instanceof Date)
            return new Date(w);
          if (typeof w == "string" && !/Z$/i.test(w)) {
            var j = w.match(u);
            if (j) {
              var G = j[2] - 1 || 0, Q = (j[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(j[1], G, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, Q)) : new Date(j[1], G, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, Q);
            }
          }
          return new Date(w);
        }(m), this.$x = m.x || {}, this.init();
      }, S.init = function() {
        var m = this.$d;
        this.$y = m.getFullYear(), this.$M = m.getMonth(), this.$D = m.getDate(), this.$W = m.getDay(), this.$H = m.getHours(), this.$m = m.getMinutes(), this.$s = m.getSeconds(), this.$ms = m.getMilliseconds();
      }, S.$utils = function() {
        return P;
      }, S.isValid = function() {
        return this.$d.toString() !== C;
      }, S.isSame = function(m, I) {
        var w = L(m);
        return this.startOf(I) <= w && w <= this.endOf(I);
      }, S.isAfter = function(m, I) {
        return L(m) < this.startOf(I);
      }, S.isBefore = function(m, I) {
        return this.endOf(I) < L(m);
      }, S.$g = function(m, I, w) {
        return P.u(m) ? this[I] : this.set(w, m);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function(m, I) {
        var w = this, O = !!P.u(I) || I, j = P.p(m), G = function(v, B) {
          var V = P.w(w.$u ? Date.UTC(w.$y, B, v) : new Date(w.$y, B, v), w);
          return O ? V : V.endOf(d);
        }, Q = function(v, B) {
          return P.w(w.toDate()[v].apply(w.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(B)), w);
        }, x = this.$W, b = this.$M, E = this.$D, N = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case _:
            return O ? G(1, 0) : G(31, 11);
          case g:
            return O ? G(1, b) : G(0, b + 1);
          case p:
            var a = this.$locale().weekStart || 0, U = (x < a ? x + 7 : x) - a;
            return G(O ? E - U : E + (6 - U), b);
          case d:
          case $:
            return Q(N + "Hours", 0);
          case f:
            return Q(N + "Minutes", 1);
          case l:
            return Q(N + "Seconds", 2);
          case s:
            return Q(N + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function(m) {
        return this.startOf(m, !1);
      }, S.$set = function(m, I) {
        var w, O = P.p(m), j = "set" + (this.$u ? "UTC" : ""), G = (w = {}, w[d] = j + "Date", w[$] = j + "Date", w[g] = j + "Month", w[_] = j + "FullYear", w[f] = j + "Hours", w[l] = j + "Minutes", w[s] = j + "Seconds", w[i] = j + "Milliseconds", w)[O], Q = O === d ? this.$D + (I - this.$W) : I;
        if (O === g || O === _) {
          var x = this.clone().set($, 1);
          x.$d[G](Q), x.init(), this.$d = x.set($, Math.min(this.$D, x.daysInMonth())).$d;
        } else
          G && this.$d[G](Q);
        return this.init(), this;
      }, S.set = function(m, I) {
        return this.clone().$set(m, I);
      }, S.get = function(m) {
        return this[P.p(m)]();
      }, S.add = function(m, I) {
        var w, O = this;
        m = Number(m);
        var j = P.p(I), G = function(b) {
          var E = L(O);
          return P.w(E.date(E.date() + Math.round(b * m)), O);
        };
        if (j === g)
          return this.set(g, this.$M + m);
        if (j === _)
          return this.set(_, this.$y + m);
        if (j === d)
          return G(1);
        if (j === p)
          return G(7);
        var Q = (w = {}, w[l] = r, w[f] = o, w[s] = t, w)[j] || 1, x = this.$d.getTime() + m * Q;
        return P.w(x, this);
      }, S.subtract = function(m, I) {
        return this.add(-1 * m, I);
      }, S.format = function(m) {
        var I = this, w = this.$locale();
        if (!this.isValid())
          return w.invalidDate || C;
        var O = m || "YYYY-MM-DDTHH:mm:ssZ", j = P.z(this), G = this.$H, Q = this.$m, x = this.$M, b = w.weekdays, E = w.months, N = function(B, V, X, h) {
          return B && (B[V] || B(I, O)) || X[V].slice(0, h);
        }, a = function(B) {
          return P.s(G % 12 || 12, B, "0");
        }, U = w.meridiem || function(B, V, X) {
          var h = B < 12 ? "AM" : "PM";
          return X ? h.toLowerCase() : h;
        }, v = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: x + 1, MM: P.s(x + 1, 2, "0"), MMM: N(w.monthsShort, x, E, 3), MMMM: N(E, x), D: this.$D, DD: P.s(this.$D, 2, "0"), d: String(this.$W), dd: N(w.weekdaysMin, this.$W, b, 2), ddd: N(w.weekdaysShort, this.$W, b, 3), dddd: b[this.$W], H: String(G), HH: P.s(G, 2, "0"), h: a(1), hh: a(2), a: U(G, Q, !0), A: U(G, Q, !1), m: String(Q), mm: P.s(Q, 2, "0"), s: String(this.$s), ss: P.s(this.$s, 2, "0"), SSS: P.s(this.$ms, 3, "0"), Z: j };
        return O.replace(R, function(B, V) {
          return V || v[B] || j.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function(m, I, w) {
        var O, j = P.p(I), G = L(m), Q = (G.utcOffset() - this.utcOffset()) * r, x = this - G, b = P.m(this, G);
        return b = (O = {}, O[_] = b / 12, O[g] = b, O[y] = b / 3, O[p] = (x - Q) / 6048e5, O[d] = (x - Q) / 864e5, O[f] = x / o, O[l] = x / r, O[s] = x / t, O)[j] || x, w ? b : P.a(b);
      }, S.daysInMonth = function() {
        return this.endOf(g).$D;
      }, S.$locale = function() {
        return T[this.$L];
      }, S.locale = function(m, I) {
        if (!m)
          return this.$L;
        var w = this.clone(), O = W(m, I, !0);
        return O && (w.$L = O), w;
      }, S.clone = function() {
        return P.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, M;
    }(), q = K.prototype;
    return L.prototype = q, [["$ms", i], ["$s", s], ["$m", l], ["$H", f], ["$W", d], ["$M", g], ["$y", _], ["$D", $]].forEach(function(M) {
      q[M[1]] = function(S) {
        return this.$g(S, M[0], M[1]);
      };
    }), L.extend = function(M, S) {
      return M.$i || (M(S, K, L), M.$i = !0), L;
    }, L.locale = W, L.isDayjs = k, L.unix = function(M) {
      return L(1e3 * M);
    }, L.en = T[c], L.Ls = T, L.p = {}, L;
  });
})(gn);
const ue = He, vn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, wn = (e, n) => ue(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), nr = (e, n, t, r, o, i) => {
  e.strokeStyle = Se.colors.grey400, i ? e.fillStyle = Se.colors.blue200 : o ? e.fillStyle = "transparent" : e.fillStyle = Se.colors.blue100, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, pe), e.strokeRect(n + 0.5, t + 0.5, r, pe);
}, bn = (e, n, t, r) => {
  for (let o = 0; o < n; o++)
    for (let i = 0; i <= t; i++) {
      const s = ue(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        i,
        "days"
      ), l = s.isSame(ue(), "day");
      nr(e, i * We, o * pe, We, vn(s), l);
    }
}, Sn = (e, n, t) => {
  e.setLineDash([5, 5]), e.strokeStyle = Se.colors.grey400, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, xn = (e, n, t, r) => {
  let o = 0, i = -(r.dayOfMonth - 1) * rt;
  for (let s = 0; s <= t; s++) {
    const f = ue(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      s,
      "weeks"
    ).isSame(ue(), "week");
    for (let d = 0; d < n; d++)
      nr(e, o, d * pe, tt, !0, f);
    o += tt;
  }
  for (let s = 0; s < t; s++) {
    const l = wn(r, s) * rt;
    Sn(e, i, n * pe), i += l;
  }
}, $n = (e, n, t, r, o) => {
  e.clearRect(0, 0, e.canvas.width, e.canvas.height), document.getElementById(rr) && (n === 1 ? bn(e, t, r, o) : xn(e, t, r, o));
};
var nt = {}, _n = {
  get exports() {
    return nt;
  },
  set exports(e) {
    nt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(de, function() {
    var t = "week", r = "year";
    return function(o, i, s) {
      var l = i.prototype;
      l.week = function(f) {
        if (f === void 0 && (f = null), f !== null)
          return this.add(7 * (f - this.week()), "day");
        var d = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var p = s(this).startOf(r).add(1, r).date(d), g = s(this).endOf(t);
          if (p.isBefore(g))
            return 1;
        }
        var y = s(this).startOf(r).date(d).startOf(t).subtract(1, "millisecond"), _ = this.diff(y, t, !0);
        return _ < 0 ? s(this).startOf("week").week() : Math.ceil(_);
      }, l.weeks = function(f) {
        return f === void 0 && (f = null), this.week(f);
      };
    };
  });
})(_n);
const En = nt;
var ot = {}, Cn = {
  get exports() {
    return ot;
  },
  set exports(e) {
    ot = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(de, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(i) {
        var s = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return i == null ? s : this.add(i - s, "day");
      };
    };
  });
})(Cn);
const kn = ot;
var it = {}, An = {
  get exports() {
    return it;
  },
  set exports(e) {
    it = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(de, function() {
    var t = "day";
    return function(r, o, i) {
      var s = function(d) {
        return d.add(4 - d.isoWeekday(), t);
      }, l = o.prototype;
      l.isoWeekYear = function() {
        return s(this).year();
      }, l.isoWeek = function(d) {
        if (!this.$utils().u(d))
          return this.add(7 * (d - this.isoWeek()), t);
        var p, g, y, _, $ = s(this), C = (p = this.isoWeekYear(), g = this.$u, y = (g ? i.utc : i)().year(p).startOf("year"), _ = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (_ += 7), y.add(_, t));
        return $.diff(C, "week") + 1;
      }, l.isoWeekday = function(d) {
        return this.$utils().u(d) ? this.day() || 7 : this.day(this.day() % 7 ? d : d - 7);
      };
      var f = l.startOf;
      l.startOf = function(d, p) {
        var g = this.$utils(), y = !!g.u(p) || p;
        return g.p(d) === "isoweek" ? y ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : f.bind(this)(d, p);
      };
    };
  });
})(An);
const Mn = it;
var st = {}, Tn = {
  get exports() {
    return st;
  },
  set exports(e) {
    st = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(de, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(i, s, l, f) {
        var d = o(i), p = o(s), g = (f = f || "()")[0] === "(", y = f[1] === ")";
        return (g ? this.isAfter(d, l) : !this.isBefore(d, l)) && (y ? this.isBefore(p, l) : !this.isAfter(p, l)) || (g ? this.isBefore(d, l) : !this.isAfter(d, l)) && (y ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Tn);
const Pn = st;
var at = {}, On = {
  get exports() {
    return at;
  },
  set exports(e) {
    at = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(de, function() {
    var t, r, o = 1e3, i = 6e4, s = 36e5, l = 864e5, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, d = 31536e6, p = 2592e6, g = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: d, months: p, days: l, hours: s, minutes: i, seconds: o, milliseconds: 1, weeks: 6048e5 }, _ = function(c) {
      return c instanceof Y;
    }, $ = function(c, T, k) {
      return new Y(c, k, T.$l);
    }, C = function(c) {
      return r.p(c) + "s";
    }, u = function(c) {
      return c < 0;
    }, R = function(c) {
      return u(c) ? Math.ceil(c) : Math.floor(c);
    }, F = function(c) {
      return Math.abs(c);
    }, z = function(c, T) {
      return c ? u(c) ? { negative: !0, format: "" + F(c) + T } : { negative: !1, format: "" + c + T } : { negative: !1, format: "" };
    }, Y = function() {
      function c(k, W, L) {
        var P = this;
        if (this.$d = {}, this.$l = L, k === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), W)
          return $(k * y[C(W)], this);
        if (typeof k == "number")
          return this.$ms = k, this.parseFromMilliseconds(), this;
        if (typeof k == "object")
          return Object.keys(k).forEach(function(M) {
            P.$d[C(M)] = k[M];
          }), this.calMilliseconds(), this;
        if (typeof k == "string") {
          var K = k.match(g);
          if (K) {
            var q = K.slice(2).map(function(M) {
              return M != null ? Number(M) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var T = c.prototype;
      return T.calMilliseconds = function() {
        var k = this;
        this.$ms = Object.keys(this.$d).reduce(function(W, L) {
          return W + (k.$d[L] || 0) * y[L];
        }, 0);
      }, T.parseFromMilliseconds = function() {
        var k = this.$ms;
        this.$d.years = R(k / d), k %= d, this.$d.months = R(k / p), k %= p, this.$d.days = R(k / l), k %= l, this.$d.hours = R(k / s), k %= s, this.$d.minutes = R(k / i), k %= i, this.$d.seconds = R(k / o), k %= o, this.$d.milliseconds = k;
      }, T.toISOString = function() {
        var k = z(this.$d.years, "Y"), W = z(this.$d.months, "M"), L = +this.$d.days || 0;
        this.$d.weeks && (L += 7 * this.$d.weeks);
        var P = z(L, "D"), K = z(this.$d.hours, "H"), q = z(this.$d.minutes, "M"), M = this.$d.seconds || 0;
        this.$d.milliseconds && (M += this.$d.milliseconds / 1e3);
        var S = z(M, "S"), m = k.negative || W.negative || P.negative || K.negative || q.negative || S.negative, I = K.format || q.format || S.format ? "T" : "", w = (m ? "-" : "") + "P" + k.format + W.format + P.format + I + K.format + q.format + S.format;
        return w === "P" || w === "-P" ? "P0D" : w;
      }, T.toJSON = function() {
        return this.toISOString();
      }, T.format = function(k) {
        var W = k || "YYYY-MM-DDTHH:mm:ss", L = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return W.replace(f, function(P, K) {
          return K || String(L[P]);
        });
      }, T.as = function(k) {
        return this.$ms / y[C(k)];
      }, T.get = function(k) {
        var W = this.$ms, L = C(k);
        return L === "milliseconds" ? W %= 1e3 : W = L === "weeks" ? R(W / y[L]) : this.$d[L], W === 0 ? 0 : W;
      }, T.add = function(k, W, L) {
        var P;
        return P = W ? k * y[C(W)] : _(k) ? k.$ms : $(k, this).$ms, $(this.$ms + P * (L ? -1 : 1), this);
      }, T.subtract = function(k, W) {
        return this.add(k, W, !0);
      }, T.locale = function(k) {
        var W = this.clone();
        return W.$l = k, W;
      }, T.clone = function() {
        return $(this.$ms, this);
      }, T.humanize = function(k) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!k);
      }, T.milliseconds = function() {
        return this.get("milliseconds");
      }, T.asMilliseconds = function() {
        return this.as("milliseconds");
      }, T.seconds = function() {
        return this.get("seconds");
      }, T.asSeconds = function() {
        return this.as("seconds");
      }, T.minutes = function() {
        return this.get("minutes");
      }, T.asMinutes = function() {
        return this.as("minutes");
      }, T.hours = function() {
        return this.get("hours");
      }, T.asHours = function() {
        return this.as("hours");
      }, T.days = function() {
        return this.get("days");
      }, T.asDays = function() {
        return this.as("days");
      }, T.weeks = function() {
        return this.get("weeks");
      }, T.asWeeks = function() {
        return this.as("weeks");
      }, T.months = function() {
        return this.get("months");
      }, T.asMonths = function() {
        return this.as("months");
      }, T.years = function() {
        return this.get("years");
      }, T.asYears = function() {
        return this.as("years");
      }, c;
    }();
    return function(c, T, k) {
      t = k, r = k().$utils(), k.duration = function(P, K) {
        var q = k.locale();
        return $(P, { $l: q }, K);
      }, k.isDuration = _;
      var W = T.prototype.add, L = T.prototype.subtract;
      T.prototype.add = function(P, K) {
        return _(P) && (P = P.asMilliseconds()), W.bind(this)(P, K);
      }, T.prototype.subtract = function(P, K) {
        return _(P) && (P = P.asMilliseconds()), L.bind(this)(P, K);
      };
    };
  });
})(On);
const Rn = at;
var Dn = typeof de == "object" && de && de.Object === Object && de, Nn = typeof self == "object" && self && self.Object === Object && self;
Dn || Nn || Function("return this")();
const In = (e, n) => {
  const t = n === 0 ? Math.ceil(window.innerWidth / tt) * 3 : Math.ceil(window.innerWidth / We) * 3, r = n === 0 ? e.subtract(t / 3 + 3, "weeks").set("day", 1) : e.subtract(t / 3 + 3, "days"), o = n === 0 ? r.add(t, "weeks") : r.add(t, "days");
  return {
    startDate: r,
    endDate: o
  };
}, zn = Lt({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: ue(),
  isLoading: !1,
  cols: 0,
  startDate: {
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
ue.extend(En);
ue.extend(kn);
ue.extend(Mn);
ue.extend(Pn);
ue.extend(Rn);
const or = () => Oe(zn), Yn = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Ln = D.div`
  height: calc(100vh - headerHeight);
`, jn = D.div`
  position: relative;
`, Fn = D.canvas``;
D.canvas``;
const Ot = D.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`;
cr(function({ zoom: n, rows: t, data: r, onTileClick: o }, i) {
  const { handleScrollNext: s, handleScrollPrev: l, date: f, isLoading: d, cols: p, startDate: g } = or(), y = be(null), _ = be(null), $ = be(null), C = jt(
    (u) => {
      const R = window.innerWidth * hn, F = t * pe + 1;
      Yn(u, R, F), $n(u, n, t, p, g);
    },
    [p, g, t, n]
  );
  return Ae(() => {
    if (!y.current)
      return;
    const u = y.current.getContext("2d");
    if (!u)
      return;
    const R = () => C(u);
    return window.addEventListener("resize", R), () => window.removeEventListener("resize", R);
  }, [C]), Ae(() => {
    const u = y.current;
    if (!u)
      return;
    u.style.letterSpacing = "1px";
    const R = u.getContext("2d");
    R && C(R);
  }, [f, t, n, C]), Ae(() => {
    if (!_.current)
      return;
    const u = new IntersectionObserver(
      (R) => R[0].isIntersecting ? s() : null
    );
    return u.observe(_.current), () => u.disconnect();
  }, [s]), Ae(() => {
    if (!$.current)
      return;
    const u = new IntersectionObserver(
      (R) => R[0].isIntersecting ? l() : null,
      { rootMargin: `0px 0px 0px -${ge}px` }
    );
    return u.observe($.current), () => u.disconnect();
  }, [l]), /* @__PURE__ */ le(Ln, { id: rr, children: /* @__PURE__ */ zt(jn, { ref: i, children: [
    /* @__PURE__ */ le(Ot, { position: "left", ref: $ }),
    /* @__PURE__ */ le(It, { isLoading: d, position: "left" }),
    /* @__PURE__ */ le(Fn, { ref: y }),
    /* @__PURE__ */ le(so, { data: r, zoom: n, onTileClick: o }),
    /* @__PURE__ */ le(Ot, { ref: _, position: "right" }),
    /* @__PURE__ */ le(It, { isLoading: d, position: "right" })
  ] }) });
});
var Rt = {}, Wn = {
  get exports() {
    return Rt;
  },
  set exports(e) {
    Rt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(de, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(Wn);
var Dt = {}, Hn = {
  get exports() {
    return Dt;
  },
  set exports(e) {
    Dt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(He);
  })(de, function(t) {
    function r(y) {
      return y && typeof y == "object" && "default" in y ? y : { default: y };
    }
    var o = r(t);
    function i(y) {
      return y % 10 < 5 && y % 10 > 1 && ~~(y / 10) % 10 != 1;
    }
    function s(y, _, $) {
      var C = y + " ";
      switch ($) {
        case "m":
          return _ ? "minuta" : "minutę";
        case "mm":
          return C + (i(y) ? "minuty" : "minut");
        case "h":
          return _ ? "godzina" : "godzinę";
        case "hh":
          return C + (i(y) ? "godziny" : "godzin");
        case "MM":
          return C + (i(y) ? "miesiące" : "miesięcy");
        case "yy":
          return C + (i(y) ? "lata" : "lat");
      }
    }
    var l = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), f = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), d = /D MMMM/, p = function(y, _) {
      return d.test(_) ? l[y.month()] : f[y.month()];
    };
    p.s = f, p.f = l;
    var g = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: p, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(y) {
      return y + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: s, mm: s, h: s, hh: s, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: s, y: "rok", yy: s }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(g, null, !0), g;
  });
})(Hn);
const Vn = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, Bn = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, Nt = [
  {
    id: "en",
    name: "ENGLISH",
    lang: Vn,
    translateCode: "en-GB"
  },
  {
    id: "pl",
    name: "POLISH",
    lang: Bn,
    translateCode: "pl-PL"
  }
];
Lt({
  locales: Nt,
  currentLocale: Nt[0],
  setCurrentLocale: () => {
  }
});
D.div`
  position: absolute;
  height: 440px;
  width: 514px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
D.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
`;
D.div`
  position: relative;
  display: flex;
`;
D.div`
  position: relative;
  margin-left: ${ge};
  display: flex;
  flex-direction: column;
  contain: paint;
`;
const ir = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`;
D.div`
  width: calc(${({ width: e }) => e}px - ${ge}px);
  position: sticky;
  top: 0;
  left: ${ge}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`;
D.div`
  display: flex;
  gap: 1.875rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
D.button`
  ${ir};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  :not(:disabled) {
    cursor: pointer;
  }
`;
D.button`
  ${ir};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: e }) => e.colors.blue900};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`;
D.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
`;
D.div`
  display: flex;
`;
D.button`
  outline: none;
  background: ${({ theme: e, variant: n }) => n === "filled" ? e.colors.blue400 : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid
    ${({ theme: e, disabled: n }) => n ? e.colors.grey600 : e.colors.blue400};
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: pointer;
  color: ${({ theme: e, variant: n }) => n === "filled" ? e.colors.white : e.colors.blue400};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
`;
const lo = ({
  data: e,
  config: n,
  startDate: t,
  onRangeChange: r,
  onTileClick: o,
  onFilterData: i,
  onClearFilterData: s,
  onItemClick: l,
  isLoading: f
}) => {
  var y;
  yt(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      ...n
    }),
    [n]
  );
  const d = be(null), [p, g] = lr((y = d.current) == null ? void 0 : y.clientWidth);
  return yt(() => ue(t), [t]), Ae(() => {
    const _ = () => {
      d.current && g(d.current.clientWidth);
    };
    return _(), window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, []), d.current, /* @__PURE__ */ le(Yt, {});
};
D.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.grey400}` : "none"};
`;
D.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme: e }) => e.colors.white};
  border: 1px solid ${({ theme: e }) => e.colors.blue400};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.blue400};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.blue200};
  }
`;
D.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
D.p`
  ${Ee}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`;
D.div`
  min-width: ${ge + "px"};
  max-width: ${ge + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.white};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`;
D.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${ge}px;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`;
D.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.grey600};
  }
`;
D.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.blue100};
  border: 1px solid
    ${({ theme: e, isFocused: n }) => n ? e.colors.blue400 : e.colors.grey400};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`;
D.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${pe}px;
  height: calc(${pe}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.grey400};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.blue200};
  }
`;
D.div`
  display: flex;
  align-items: center;
`;
D.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
D.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
D.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`;
D.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e }) => e ? Se.colors.black : Se.colors.grey600};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;
const Gn = D.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.blue200};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, Un = cn`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Xn = D.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Un} 1s infinite;
`, Zn = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ le(Gn, { position: n, children: /* @__PURE__ */ le(Xn, {}) }) : null, It = Zn;
D.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;
D.div`
  height: ${fn}px;
  display: block;
`;
D.canvas``;
const qn = (e, n, t) => {
  const r = t === 0 ? rt : We, o = () => {
    const i = (e.startDate.diff(n.startDate, "day") + 1) * r;
    return Math.max(0, i);
  };
  if (e.startDate.isAfter(n.startDate) && e.endDate.isBefore(n.endDate)) {
    const i = e.endDate.diff(e.startDate, "day") * r + r;
    return { x: o(), width: i };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isBefore(n.endDate)) {
    const i = e.endDate.diff(n.startDate, "day") * r + r;
    return { x: o(), width: i };
  }
  if (e.startDate.isAfter(n.startDate) && e.endDate.isAfter(n.endDate)) {
    const i = n.endDate.diff(e.startDate, "day") * r + r;
    return { x: o(), width: i };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isAfter(n.endDate)) {
    const i = n.endDate.diff(n.startDate, "day") * r + r;
    return { x: o(), width: i };
  }
  return { x: o(), width: 0 };
}, Jn = (e, n, t, r, o, i) => {
  const s = e * pe + pn, l = ue(r).hour(0).minute(0), f = ue(o).hour(23).minute(59);
  return {
    ...qn(
      { startDate: l, endDate: f },
      { startDate: n, endDate: t },
      i
    ),
    y: s
  };
}, Kn = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, Qn = D.button`
  ${Ee}
  height: ${mn}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: white;
  width: 100%;
  cursor: pointer;
`, eo = D.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, to = D.p`
  ${Ee}
  ${tr}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
`, ro = D.p`
  ${Ee}
  ${tr}
`, no = D.div`
  position: sticky;
  left: ${ge + 16}px;
  overflow: hidden;
`, oo = ({ row: e, data: n, zoom: t, onTileClick: r }) => {
  const { date: o } = or(), i = In(o, t), { y: s, x: l, width: f } = Jn(
    e,
    i.startDate,
    i.endDate,
    n.startDate,
    n.endDate,
    t
  );
  return /* @__PURE__ */ le(
    Qn,
    {
      style: {
        left: `${l}px`,
        top: `${s}px`,
        backgroundColor: `${n.bgColor ?? yn}`,
        width: `${f}px`,
        color: Kn(n.bgColor ?? "")
      },
      onClick: () => r == null ? void 0 : r(n),
      children: /* @__PURE__ */ le(eo, { children: /* @__PURE__ */ zt(no, { children: [
        /* @__PURE__ */ le(to, { bold: !0, children: n.title }),
        /* @__PURE__ */ le(ro, { children: n.description })
      ] }) })
    }
  );
}, io = ({ data: e, zoom: n, onTileClick: t }) => {
  const r = jt(() => {
    let o = 0;
    return e.map((i, s) => (s > 0 && (o += Math.max(e[s - 1].data.length, 1)), i.data.map(
      (l, f) => l.map((d) => /* @__PURE__ */ le(
        oo,
        {
          row: f + o,
          data: d,
          zoom: n,
          onTileClick: t
        },
        d.id
      ))
    ))).flat(2);
  }, [e, t, n]);
  return /* @__PURE__ */ le(Yt, { children: r() });
}, so = io;
D.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
D.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
D.label`
  font-size: 14px;
`;
D.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
D.input`
  height: 18px;
  width: 18px;
`;
D.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
D.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
D.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.blue900};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`;
D.div`
  width: 100%;
`;
D.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.blue900};
`;
D.div``;
D.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`;
D.div`
  ${Ee}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.white};
  line-height: 12px;
  letter-spacing: 0.5px;
`;
D.p`
  ${Ee}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.white};
`;
D.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.red400};
`;
export {
  lo as Scheduler
};
