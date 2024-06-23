import { jsx as V, jsxs as Se, Fragment as yr } from "react/jsx-runtime";
import * as j from "react";
import Le, { useRef as ge, useContext as De, useLayoutEffect as Xr, useMemo as $e, useDebugValue as jt, createElement as qr, createContext as gr, useState as me, useCallback as ve, useEffect as fe, forwardRef as Jr } from "react";
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ke = {}, Kr = {
  get exports() {
    return Ke;
  },
  set exports(e) {
    Ke = e;
  }
}, ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function Qr() {
  if (Ft)
    return ne;
  Ft = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function S(h) {
    if (typeof h == "object" && h !== null) {
      var _ = h.$$typeof;
      switch (_) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case n:
            case c:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case i:
                case l:
                case p:
                case m:
                case s:
                  return h;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  return ne.ContextConsumer = i, ne.ContextProvider = s, ne.Element = e, ne.ForwardRef = l, ne.Fragment = t, ne.Lazy = p, ne.Memo = m, ne.Portal = r, ne.Profiler = o, ne.StrictMode = n, ne.Suspense = c, ne.SuspenseList = u, ne.isAsyncMode = function() {
    return !1;
  }, ne.isConcurrentMode = function() {
    return !1;
  }, ne.isContextConsumer = function(h) {
    return S(h) === i;
  }, ne.isContextProvider = function(h) {
    return S(h) === s;
  }, ne.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ne.isForwardRef = function(h) {
    return S(h) === l;
  }, ne.isFragment = function(h) {
    return S(h) === t;
  }, ne.isLazy = function(h) {
    return S(h) === p;
  }, ne.isMemo = function(h) {
    return S(h) === m;
  }, ne.isPortal = function(h) {
    return S(h) === r;
  }, ne.isProfiler = function(h) {
    return S(h) === o;
  }, ne.isStrictMode = function(h) {
    return S(h) === n;
  }, ne.isSuspense = function(h) {
    return S(h) === c;
  }, ne.isSuspenseList = function(h) {
    return S(h) === u;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === n || h === c || h === u || h === y || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === m || h.$$typeof === s || h.$$typeof === i || h.$$typeof === l || h.$$typeof === w || h.getModuleId !== void 0);
  }, ne.typeOf = S, ne;
}
var oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function en() {
  return Bt || (Bt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), w = !1, S = !1, h = !1, _ = !1, z = !1, L;
    L = Symbol.for("react.module.reference");
    function I(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === t || A === o || z || A === n || A === c || A === u || _ || A === y || w || S || h || typeof A == "object" && A !== null && (A.$$typeof === p || A.$$typeof === m || A.$$typeof === s || A.$$typeof === i || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === L || A.getModuleId !== void 0));
    }
    function f(A) {
      if (typeof A == "object" && A !== null) {
        var Q = A.$$typeof;
        switch (Q) {
          case e:
            var ce = A.type;
            switch (ce) {
              case t:
              case o:
              case n:
              case c:
              case u:
                return ce;
              default:
                var re = ce && ce.$$typeof;
                switch (re) {
                  case a:
                  case i:
                  case l:
                  case p:
                  case m:
                  case s:
                    return re;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var $ = i, M = s, Z = e, Y = l, D = t, ee = p, G = m, R = r, b = o, v = n, O = c, x = u, N = !1, H = !1;
    function X(A) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(A) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function E(A) {
      return f(A) === i;
    }
    function k(A) {
      return f(A) === s;
    }
    function P(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function T(A) {
      return f(A) === l;
    }
    function d(A) {
      return f(A) === t;
    }
    function B(A) {
      return f(A) === p;
    }
    function C(A) {
      return f(A) === m;
    }
    function q(A) {
      return f(A) === r;
    }
    function U(A) {
      return f(A) === o;
    }
    function K(A) {
      return f(A) === n;
    }
    function g(A) {
      return f(A) === c;
    }
    function ae(A) {
      return f(A) === u;
    }
    oe.ContextConsumer = $, oe.ContextProvider = M, oe.Element = Z, oe.ForwardRef = Y, oe.Fragment = D, oe.Lazy = ee, oe.Memo = G, oe.Portal = R, oe.Profiler = b, oe.StrictMode = v, oe.Suspense = O, oe.SuspenseList = x, oe.isAsyncMode = X, oe.isConcurrentMode = te, oe.isContextConsumer = E, oe.isContextProvider = k, oe.isElement = P, oe.isForwardRef = T, oe.isFragment = d, oe.isLazy = B, oe.isMemo = C, oe.isPortal = q, oe.isProfiler = U, oe.isStrictMode = K, oe.isSuspense = g, oe.isSuspenseList = ae, oe.isValidElementType = I, oe.typeOf = f;
  }()), oe;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Qr() : e.exports = en();
})(Kr);
function tn(e) {
  function r(E, k, P, T, d) {
    for (var B = 0, C = 0, q = 0, U = 0, K, g, ae = 0, A = 0, Q, ce = Q = K = 0, re = 0, de = 0, Ge = 0, he = 0, et = P.length, Ue = et - 1, be, J = "", le = "", ht = "", ft = "", Pe; re < et; ) {
      if (g = P.charCodeAt(re), re === Ue && C + U + q + B !== 0 && (C !== 0 && (g = C === 47 ? 10 : 47), U = q = B = 0, et++, Ue++), C + U + q + B === 0) {
        if (re === Ue && (0 < de && (J = J.replace(p, "")), 0 < J.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += P.charAt(re);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (J = J.trim(), K = J.charCodeAt(0), Q = 1, he = ++re; re < et; ) {
              switch (g = P.charCodeAt(re)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (g = P.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ce = re + 1; ce < Ue; ++ce)
                          switch (P.charCodeAt(ce)) {
                            case 47:
                              if (g === 42 && P.charCodeAt(ce - 1) === 42 && re + 2 !== ce) {
                                re = ce + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                re = ce + 1;
                                break e;
                              }
                          }
                        re = ce;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; re++ < Ue && P.charCodeAt(re) !== g; )
                    ;
              }
              if (Q === 0)
                break;
              re++;
            }
            switch (Q = P.substring(he, re), K === 0 && (K = (J = J.replace(m, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < de && (J = J.replace(p, "")), g = J.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    de = k;
                    break;
                  default:
                    de = O;
                }
                if (Q = r(k, de, Q, g, d + 1), he = Q.length, 0 < N && (de = t(O, J, Ge), Pe = a(3, Q, de, k, R, G, he, g, d, T), J = de.join(""), Pe !== void 0 && (he = (Q = Pe.trim()).length) === 0 && (g = 0, Q = "")), 0 < he)
                  switch (g) {
                    case 115:
                      J = J.replace($, i);
                    case 100:
                    case 109:
                    case 45:
                      Q = J + "{" + Q + "}";
                      break;
                    case 107:
                      J = J.replace(z, "$1 $2"), Q = J + "{" + Q + "}", Q = v === 1 || v === 2 && s("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                      break;
                    default:
                      Q = J + Q, T === 112 && (Q = (le += Q, ""));
                  }
                else
                  Q = "";
                break;
              default:
                Q = r(k, t(k, J, Ge), Q, T, d + 1);
            }
            ht += Q, Q = Ge = de = ce = K = 0, J = "", g = P.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (J = (0 < de ? J.replace(p, "") : J).trim(), 1 < (he = J.length))
              switch (ce === 0 && (K = J.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (he = (J = J.replace(" ", ":")).length), 0 < N && (Pe = a(1, J, k, E, R, G, le.length, T, d, T)) !== void 0 && (he = (J = Pe.trim()).length) === 0 && (J = "\0\0"), K = J.charCodeAt(0), g = J.charCodeAt(1), K) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    ft += J + P.charAt(re);
                    break;
                  }
                default:
                  J.charCodeAt(he - 1) !== 58 && (le += o(J, K, g, J.charCodeAt(2)));
              }
            Ge = de = ce = K = 0, J = "", g = P.charCodeAt(++re);
        }
      }
      switch (g) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + K === 0 && T !== 107 && 0 < J.length && (de = 1, J += "\0"), 0 < N * X && a(0, J, k, E, R, G, le.length, T, d, T), G = 1, R++;
          break;
        case 59:
        case 125:
          if (C + U + q + B === 0) {
            G++;
            break;
          }
        default:
          switch (G++, be = P.charAt(re), g) {
            case 9:
            case 32:
              if (U + B + C === 0)
                switch (ae) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    be = "";
                    break;
                  default:
                    g !== 32 && (be = " ");
                }
              break;
            case 0:
              be = "\\0";
              break;
            case 12:
              be = "\\f";
              break;
            case 11:
              be = "\\v";
              break;
            case 38:
              U + C + B === 0 && (de = Ge = 1, be = "\f" + be);
              break;
            case 108:
              if (U + C + B + b === 0 && 0 < ce)
                switch (re - ce) {
                  case 2:
                    ae === 112 && P.charCodeAt(re - 3) === 58 && (b = ae);
                  case 8:
                    A === 111 && (b = A);
                }
              break;
            case 58:
              U + C + B === 0 && (ce = re);
              break;
            case 44:
              C + q + U + B === 0 && (de = 1, be += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (U = U === g ? 0 : U === 0 ? g : U);
              break;
            case 91:
              U + C + q === 0 && B++;
              break;
            case 93:
              U + C + q === 0 && B--;
              break;
            case 41:
              U + C + B === 0 && q--;
              break;
            case 40:
              if (U + C + B === 0) {
                if (K === 0)
                  switch (2 * ae + 3 * A) {
                    case 533:
                      break;
                    default:
                      K = 1;
                  }
                q++;
              }
              break;
            case 64:
              C + q + U + B + ce + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < U + B + q))
                switch (C) {
                  case 0:
                    switch (2 * g + 3 * P.charCodeAt(re + 1)) {
                      case 235:
                        C = 47;
                        break;
                      case 220:
                        he = re, C = 42;
                    }
                    break;
                  case 42:
                    g === 47 && ae === 42 && he + 2 !== re && (P.charCodeAt(he + 2) === 33 && (le += P.substring(he, re + 1)), be = "", C = 0);
                }
          }
          C === 0 && (J += be);
      }
      A = ae, ae = g, re++;
    }
    if (he = le.length, 0 < he) {
      if (de = k, 0 < N && (Pe = a(2, le, de, E, R, G, he, T, d, T), Pe !== void 0 && (le = Pe).length === 0))
        return ft + le + ht;
      if (le = de.join(",") + "{" + le + "}", v * b !== 0) {
        switch (v !== 2 || s(le, 2) || (b = 0), b) {
          case 111:
            le = le.replace(I, ":-moz-$1") + le;
            break;
          case 112:
            le = le.replace(L, "::-webkit-input-$1") + le.replace(L, "::-moz-$1") + le.replace(L, ":-ms-input-$1") + le;
        }
        b = 0;
      }
    }
    return ft + le + ht;
  }
  function t(E, k, P) {
    var T = k.trim().split(h);
    k = T;
    var d = T.length, B = E.length;
    switch (B) {
      case 0:
      case 1:
        var C = 0;
        for (E = B === 0 ? "" : E[0] + " "; C < d; ++C)
          k[C] = n(E, k[C], P).trim();
        break;
      default:
        var q = C = 0;
        for (k = []; C < d; ++C)
          for (var U = 0; U < B; ++U)
            k[q++] = n(E[U] + " ", T[C], P).trim();
    }
    return k;
  }
  function n(E, k, P) {
    var T = k.charCodeAt(0);
    switch (33 > T && (T = (k = k.trim()).charCodeAt(0)), T) {
      case 38:
        return k.replace(_, "$1" + E.trim());
      case 58:
        return E.trim() + k.replace(_, "$1" + E.trim());
      default:
        if (0 < 1 * P && 0 < k.indexOf("\f"))
          return k.replace(_, (E.charCodeAt(0) === 58 ? "" : "$1") + E.trim());
    }
    return E + k;
  }
  function o(E, k, P, T) {
    var d = E + ";", B = 2 * k + 3 * P + 4 * T;
    if (B === 944) {
      E = d.indexOf(":", 9) + 1;
      var C = d.substring(E, d.length - 1).trim();
      return C = d.substring(0, E).trim() + C + ";", v === 1 || v === 2 && s(C, 1) ? "-webkit-" + C + C : C;
    }
    if (v === 0 || v === 2 && !s(d, 1))
      return d;
    switch (B) {
      case 1015:
        return d.charCodeAt(10) === 97 ? "-webkit-" + d + d : d;
      case 951:
        return d.charCodeAt(3) === 116 ? "-webkit-" + d + d : d;
      case 963:
        return d.charCodeAt(5) === 110 ? "-webkit-" + d + d : d;
      case 1009:
        if (d.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + d + d;
      case 978:
        return "-webkit-" + d + "-moz-" + d + d;
      case 1019:
      case 983:
        return "-webkit-" + d + "-moz-" + d + "-ms-" + d + d;
      case 883:
        if (d.charCodeAt(8) === 45)
          return "-webkit-" + d + d;
        if (0 < d.indexOf("image-set(", 11))
          return d.replace(ee, "$1-webkit-$2") + d;
        break;
      case 932:
        if (d.charCodeAt(4) === 45)
          switch (d.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + d.replace("-grow", "") + "-webkit-" + d + "-ms-" + d.replace("grow", "positive") + d;
            case 115:
              return "-webkit-" + d + "-ms-" + d.replace("shrink", "negative") + d;
            case 98:
              return "-webkit-" + d + "-ms-" + d.replace("basis", "preferred-size") + d;
          }
        return "-webkit-" + d + "-ms-" + d + d;
      case 964:
        return "-webkit-" + d + "-ms-flex-" + d + d;
      case 1023:
        if (d.charCodeAt(8) !== 99)
          break;
        return C = d.substring(d.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + d + "-ms-flex-pack" + C + d;
      case 1005:
        return w.test(d) ? d.replace(y, ":-webkit-") + d.replace(y, ":-moz-") + d : d;
      case 1e3:
        switch (C = d.substring(13).trim(), k = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(k)) {
          case 226:
            C = d.replace(f, "tb");
            break;
          case 232:
            C = d.replace(f, "tb-rl");
            break;
          case 220:
            C = d.replace(f, "lr");
            break;
          default:
            return d;
        }
        return "-webkit-" + d + "-ms-" + C + d;
      case 1017:
        if (d.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (k = (d = E).length - 10, C = (d.charCodeAt(k) === 33 ? d.substring(0, k) : d).substring(E.indexOf(":", 7) + 1).trim(), B = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8))
              break;
          case 115:
            d = d.replace(C, "-webkit-" + C) + ";" + d;
            break;
          case 207:
          case 102:
            d = d.replace(C, "-webkit-" + (102 < B ? "inline-" : "") + "box") + ";" + d.replace(C, "-webkit-" + C) + ";" + d.replace(C, "-ms-" + C + "box") + ";" + d;
        }
        return d + ";";
      case 938:
        if (d.charCodeAt(5) === 45)
          switch (d.charCodeAt(6)) {
            case 105:
              return C = d.replace("-items", ""), "-webkit-" + d + "-webkit-box-" + C + "-ms-flex-" + C + d;
            case 115:
              return "-webkit-" + d + "-ms-flex-item-" + d.replace(Z, "") + d;
            default:
              return "-webkit-" + d + "-ms-flex-line-pack" + d.replace("align-content", "").replace(Z, "") + d;
          }
        break;
      case 973:
      case 989:
        if (d.charCodeAt(3) !== 45 || d.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (D.test(E) === !0)
          return (C = E.substring(E.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(E.replace("stretch", "fill-available"), k, P, T).replace(":fill-available", ":stretch") : d.replace(C, "-webkit-" + C) + d.replace(C, "-moz-" + C.replace("fill-", "")) + d;
        break;
      case 962:
        if (d = "-webkit-" + d + (d.charCodeAt(5) === 102 ? "-ms-" + d : "") + d, P + T === 211 && d.charCodeAt(13) === 105 && 0 < d.indexOf("transform", 10))
          return d.substring(0, d.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + d;
    }
    return d;
  }
  function s(E, k) {
    var P = E.indexOf(k === 1 ? ":" : "{"), T = E.substring(0, k !== 3 ? P : 10);
    return P = E.substring(P + 1, E.length - 1), H(k !== 2 ? T : T.replace(Y, "$1"), P, k);
  }
  function i(E, k) {
    var P = o(k, k.charCodeAt(0), k.charCodeAt(1), k.charCodeAt(2));
    return P !== k + ";" ? P.replace(M, " or ($1)").substring(4) : "(" + k + ")";
  }
  function a(E, k, P, T, d, B, C, q, U, K) {
    for (var g = 0, ae = k, A; g < N; ++g)
      switch (A = x[g].call(u, E, ae, P, T, d, B, C, q, U, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ae = A;
      }
    if (ae !== k)
      return ae;
  }
  function l(E) {
    switch (E) {
      case void 0:
      case null:
        N = x.length = 0;
        break;
      default:
        if (typeof E == "function")
          x[N++] = E;
        else if (typeof E == "object")
          for (var k = 0, P = E.length; k < P; ++k)
            l(E[k]);
        else
          X = !!E | 0;
    }
    return l;
  }
  function c(E) {
    return E = E.prefix, E !== void 0 && (H = null, E ? typeof E != "function" ? v = 1 : (v = 2, H = E) : v = 0), c;
  }
  function u(E, k) {
    var P = E;
    if (33 > P.charCodeAt(0) && (P = P.trim()), te = P, P = [te], 0 < N) {
      var T = a(-1, k, P, P, R, G, 0, 0, 0, 0);
      T !== void 0 && typeof T == "string" && (k = T);
    }
    var d = r(O, P, k, 0, 0);
    return 0 < N && (T = a(-2, d, P, P, R, G, d.length, 0, 0, 0), T !== void 0 && (d = T)), te = "", b = 0, G = R = 1, d;
  }
  var m = /^\0+/g, p = /[\0\r\f]/g, y = /: */g, w = /zoo|gra/, S = /([,: ])(transform)/g, h = /,\r+?/g, _ = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, L = /::(place)/g, I = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, $ = /\(\s*(.*)\s*\)/g, M = /([\s\S]*?);/g, Z = /-self|flex-/g, Y = /[^]*?(:[rp][el]a[\w-]+)[^]*/, D = /stretch|:\s*\w+\-(?:conte|avail)/, ee = /([^-])(image-set\()/, G = 1, R = 1, b = 0, v = 1, O = [], x = [], N = 0, H = null, X = 0, te = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
var rn = {
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
function nn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var on = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vt = /* @__PURE__ */ nn(
  function(e) {
    return on.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), gt = {}, sn = {
  get exports() {
    return gt;
  },
  set exports(e) {
    gt = e;
  }
}, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function an() {
  if (Gt)
    return se;
  Gt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function L(f) {
    if (typeof f == "object" && f !== null) {
      var $ = f.$$typeof;
      switch ($) {
        case r:
          switch (f = f.type, f) {
            case l:
            case c:
            case n:
            case s:
            case o:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case u:
                case w:
                case y:
                case i:
                  return f;
                default:
                  return $;
              }
          }
        case t:
          return $;
      }
    }
  }
  function I(f) {
    return L(f) === c;
  }
  return se.AsyncMode = l, se.ConcurrentMode = c, se.ContextConsumer = a, se.ContextProvider = i, se.Element = r, se.ForwardRef = u, se.Fragment = n, se.Lazy = w, se.Memo = y, se.Portal = t, se.Profiler = s, se.StrictMode = o, se.Suspense = m, se.isAsyncMode = function(f) {
    return I(f) || L(f) === l;
  }, se.isConcurrentMode = I, se.isContextConsumer = function(f) {
    return L(f) === a;
  }, se.isContextProvider = function(f) {
    return L(f) === i;
  }, se.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, se.isForwardRef = function(f) {
    return L(f) === u;
  }, se.isFragment = function(f) {
    return L(f) === n;
  }, se.isLazy = function(f) {
    return L(f) === w;
  }, se.isMemo = function(f) {
    return L(f) === y;
  }, se.isPortal = function(f) {
    return L(f) === t;
  }, se.isProfiler = function(f) {
    return L(f) === s;
  }, se.isStrictMode = function(f) {
    return L(f) === o;
  }, se.isSuspense = function(f) {
    return L(f) === m;
  }, se.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === c || f === s || f === o || f === m || f === p || typeof f == "object" && f !== null && (f.$$typeof === w || f.$$typeof === y || f.$$typeof === i || f.$$typeof === a || f.$$typeof === u || f.$$typeof === h || f.$$typeof === _ || f.$$typeof === z || f.$$typeof === S);
  }, se.typeOf = L, se;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function cn() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function L(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === c || g === s || g === o || g === m || g === p || typeof g == "object" && g !== null && (g.$$typeof === w || g.$$typeof === y || g.$$typeof === i || g.$$typeof === a || g.$$typeof === u || g.$$typeof === h || g.$$typeof === _ || g.$$typeof === z || g.$$typeof === S);
    }
    function I(g) {
      if (typeof g == "object" && g !== null) {
        var ae = g.$$typeof;
        switch (ae) {
          case r:
            var A = g.type;
            switch (A) {
              case l:
              case c:
              case n:
              case s:
              case o:
              case m:
                return A;
              default:
                var Q = A && A.$$typeof;
                switch (Q) {
                  case a:
                  case u:
                  case w:
                  case y:
                  case i:
                    return Q;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var f = l, $ = c, M = a, Z = i, Y = r, D = u, ee = n, G = w, R = y, b = t, v = s, O = o, x = m, N = !1;
    function H(g) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(g) || I(g) === l;
    }
    function X(g) {
      return I(g) === c;
    }
    function te(g) {
      return I(g) === a;
    }
    function E(g) {
      return I(g) === i;
    }
    function k(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function P(g) {
      return I(g) === u;
    }
    function T(g) {
      return I(g) === n;
    }
    function d(g) {
      return I(g) === w;
    }
    function B(g) {
      return I(g) === y;
    }
    function C(g) {
      return I(g) === t;
    }
    function q(g) {
      return I(g) === s;
    }
    function U(g) {
      return I(g) === o;
    }
    function K(g) {
      return I(g) === m;
    }
    ie.AsyncMode = f, ie.ConcurrentMode = $, ie.ContextConsumer = M, ie.ContextProvider = Z, ie.Element = Y, ie.ForwardRef = D, ie.Fragment = ee, ie.Lazy = G, ie.Memo = R, ie.Portal = b, ie.Profiler = v, ie.StrictMode = O, ie.Suspense = x, ie.isAsyncMode = H, ie.isConcurrentMode = X, ie.isContextConsumer = te, ie.isContextProvider = E, ie.isElement = k, ie.isForwardRef = P, ie.isFragment = T, ie.isLazy = d, ie.isMemo = B, ie.isPortal = C, ie.isProfiler = q, ie.isStrictMode = U, ie.isSuspense = K, ie.isValidElementType = L, ie.typeOf = I;
  }()), ie;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = an() : e.exports = cn();
})(sn);
var Nt = gt, ln = {
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
}, un = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, dn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Lt = {};
Lt[Nt.ForwardRef] = dn;
Lt[Nt.Memo] = wr;
function Xt(e) {
  return Nt.isMemo(e) ? wr : Lt[e.$$typeof] || ln;
}
var hn = Object.defineProperty, fn = Object.getOwnPropertyNames, qt = Object.getOwnPropertySymbols, pn = Object.getOwnPropertyDescriptor, mn = Object.getPrototypeOf, Jt = Object.prototype;
function br(e, r, t) {
  if (typeof r != "string") {
    if (Jt) {
      var n = mn(r);
      n && n !== Jt && br(e, n, t);
    }
    var o = fn(r);
    qt && (o = o.concat(qt(r)));
    for (var s = Xt(e), i = Xt(r), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!un[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var c = pn(r, l);
        try {
          hn(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var vn = br;
function xe() {
  return (xe = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Kt = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, wt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ke.typeOf(e);
}, it = Object.freeze([]), Re = Object.freeze({});
function We(e) {
  return typeof e == "function";
}
function bt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zt(e) {
  return e && typeof e.styledComponentId == "string";
}
var ze = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Yt = typeof window < "u" && "HTMLElement" in window, yn = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), gn = {}, wn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function bn() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function ke(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(bn.apply(void 0, [wn[e]].concat(t)).trim());
}
var xn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++)
      n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && ke(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var a = s; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = 0, u = n.length; c < u; c++)
      this.tag.insertRule(l, n[c]) && (this.groupSizes[t]++, l++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, a = s; a < i; a++)
      n += this.tag.getRule(a) + `/*!sc*/
`;
    return n;
  }, e;
}(), ot = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), qe = 1, tt = function(e) {
  if (ot.has(e))
    return ot.get(e);
  for (; at.has(qe); )
    qe++;
  var r = qe++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && ke(16, "" + r), ot.set(e, r), at.set(r, e), r;
}, Cn = function(e) {
  return at.get(e);
}, Sn = function(e, r) {
  r >= qe && (qe = r + 1), ot.set(e, r), at.set(r, e);
}, $n = "style[" + ze + '][data-styled-version="5.3.8"]', En = new RegExp("^" + ze + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), kn = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, Mn = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var a = i.match(En);
      if (a) {
        var l = 0 | parseInt(a[1], 10), c = a[2];
        l !== 0 && (Sn(c, l), kn(e, c, a[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, _n = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, xr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(a) {
    for (var l = a.childNodes, c = l.length; c >= 0; c--) {
      var u = l[c];
      if (u && u.nodeType === 1 && u.hasAttribute(ze))
        return u;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ze, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = _n();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, Pn = function() {
  function e(t) {
    var n = this.element = xr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, a = s.length; i < a; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      ke(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Tn = function() {
  function e(t) {
    var n = this.element = xr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Rn = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Qt = Yt, An = { isServer: !Yt, useCSSOMInjection: !yn }, ct = function() {
  function e(t, n, o) {
    t === void 0 && (t = Re), n === void 0 && (n = {}), this.options = xe({}, An, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Yt && Qt && (Qt = !1, function(s) {
      for (var i = document.querySelectorAll($n), a = 0, l = i.length; a < l; a++) {
        var c = i[a];
        c && c.getAttribute(ze) !== "active" && (Mn(s, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(t) {
    return tt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(xe({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new Rn(i) : s ? new Pn(i) : new Tn(i), new xn(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (tt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(tt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(tt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var a = Cn(i);
        if (a !== void 0) {
          var l = t.names.get(a), c = n.getGroup(i);
          if (l && c && l.size) {
            var u = ze + ".g" + i + '[id="' + a + '"]', m = "";
            l !== void 0 && l.forEach(function(p) {
              p.length > 0 && (m += p + ",");
            }), s += "" + c + u + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), On = /(a)(d)/gi, er = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function xt(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = er(r % 52) + t;
  return (er(r % 52) + t).replace(On, "$1-$2");
}
var Ie = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Cr = function(e) {
  return Ie(5381, e);
};
function Sr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (We(t) && !Zt(t))
      return !1;
  }
  return !0;
}
var Dn = Cr("5.3.8"), In = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Sr(r), this.componentId = t, this.baseHash = Ie(Dn, t), this.baseStyle = n, ct.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Ze(this.rules, r, t, n).join(""), a = xt(Ie(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, a)) {
          var l = n(i, "." + a, void 0, o);
          t.insertRules(o, a, l);
        }
        s.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, u = Ie(this.baseHash, n.hash), m = "", p = 0; p < c; p++) {
        var y = this.rules[p];
        if (typeof y == "string")
          m += y, process.env.NODE_ENV !== "production" && (u = Ie(u, y + p));
        else if (y) {
          var w = Ze(y, r, t, n), S = Array.isArray(w) ? w.join("") : w;
          u = Ie(u, S + p), m += S;
        }
      }
      if (m) {
        var h = xt(u >>> 0);
        if (!t.hasNameForId(o, h)) {
          var _ = n(m, "." + h, void 0, o);
          t.insertRules(o, h, _);
        }
        s.push(h);
      }
    }
    return s.join(" ");
  }, e;
}(), Nn = /^\s*\/\/.*$/gm, Ln = [":", "[", ".", "#"];
function Zn(e) {
  var r, t, n, o, s = e === void 0 ? Re : e, i = s.options, a = i === void 0 ? Re : i, l = s.plugins, c = l === void 0 ? it : l, u = new tn(a), m = [], p = function(S) {
    function h(_) {
      if (_)
        try {
          S(_ + "}");
        } catch {
        }
    }
    return function(_, z, L, I, f, $, M, Z, Y, D) {
      switch (_) {
        case 1:
          if (Y === 0 && z.charCodeAt(0) === 64)
            return S(z + ";"), "";
          break;
        case 2:
          if (Z === 0)
            return z + "/*|*/";
          break;
        case 3:
          switch (Z) {
            case 102:
            case 112:
              return S(L[0] + z), "";
            default:
              return z + (D === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(h);
      }
    };
  }(function(S) {
    m.push(S);
  }), y = function(S, h, _) {
    return h === 0 && Ln.indexOf(_[t.length]) !== -1 || _.match(o) ? S : "." + r;
  };
  function w(S, h, _, z) {
    z === void 0 && (z = "&");
    var L = S.replace(Nn, ""), I = h && _ ? _ + " " + h + " { " + L + " }" : L;
    return r = z, t = h, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), u(_ || !h ? "" : h, I);
  }
  return u.use([].concat(c, [function(S, h, _) {
    S === 2 && _.length && _[0].lastIndexOf(t) > 0 && (_[0] = _[0].replace(n, y));
  }, p, function(S) {
    if (S === -2) {
      var h = m;
      return m = [], h;
    }
  }])), w.hash = c.length ? c.reduce(function(S, h) {
    return h.name || ke(15), Ie(S, h.name);
  }, 5381).toString() : "", w;
}
var $r = Le.createContext();
$r.Consumer;
var Er = Le.createContext(), Yn = (Er.Consumer, new ct()), Ct = Zn();
function kr() {
  return De($r) || Yn;
}
function Mr() {
  return De(Er) || Ct;
}
var _r = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Ct);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return ke(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Ct), this.name + r.hash;
  }, e;
}(), Wn = /([A-Z])/, zn = /([A-Z])/g, Hn = /^ms-/, jn = function(e) {
  return "-" + e.toLowerCase();
};
function tr(e) {
  return Wn.test(e) ? e.replace(zn, jn).replace(Hn, "-ms-") : e;
}
var rr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ze(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, a = e.length; i < a; i += 1)
      (o = Ze(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (rr(e))
    return "";
  if (Zt(e))
    return "." + e.styledComponentId;
  if (We(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && Ke.isElement(l) && console.warn(bt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ze(l, r, t, n);
  }
  var c;
  return e instanceof _r ? t ? (e.inject(t, n), e.getName(n)) : e : wt(e) ? function u(m, p) {
    var y, w, S = [];
    for (var h in m)
      m.hasOwnProperty(h) && !rr(m[h]) && (Array.isArray(m[h]) && m[h].isCss || We(m[h]) ? S.push(tr(h) + ":", m[h], ";") : wt(m[h]) ? S.push.apply(S, u(m[h], h)) : S.push(tr(h) + ": " + (y = h, (w = m[h]) == null || typeof w == "boolean" || w === "" ? "" : typeof w != "number" || w === 0 || y in rn ? String(w).trim() : w + "px") + ";"));
    return p ? [p + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var nr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Wt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return We(e) || wt(e) ? nr(Ze(Kt(it, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : nr(Ze(Kt(e, t)));
}
var or = /invalid hook call/i, rt = /* @__PURE__ */ new Set(), Pr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (or.test(s))
          o = !1, rt.delete(t);
        else {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            a[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(a));
        }
      }, ge(), o && !rt.has(t) && (console.warn(t), rt.add(t));
    } catch (s) {
      or.test(s.message) && rt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Tr = function(e, r, t) {
  return t === void 0 && (t = Re), e.theme !== t.theme && e.theme || r || t.theme;
}, Fn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Bn = /(^-|-$)/g;
function pt(e) {
  return e.replace(Fn, "-").replace(Bn, "");
}
var zt = function(e) {
  return xt(Cr(e) >>> 0);
};
function nt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var St = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Vn = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Gn(e, r, t) {
  var n = e[t];
  St(r) && St(n) ? Rr(n, r) : e[t] = r;
}
function Rr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (St(i))
      for (var a in i)
        Vn(a) && Gn(e, i[a], a);
  }
  return e;
}
var He = Le.createContext();
He.Consumer;
function Un(e) {
  var r = De(He), t = $e(function() {
    return function(n, o) {
      if (!n)
        return ke(14);
      if (We(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : ke(7);
      }
      return Array.isArray(n) || typeof n != "object" ? ke(8) : o ? xe({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? Le.createElement(He.Provider, { value: t }, e.children) : null;
}
var mt = {};
function Ar(e, r, t) {
  var n = Zt(e), o = !nt(e), s = r.attrs, i = s === void 0 ? it : s, a = r.componentId, l = a === void 0 ? function(z, L) {
    var I = typeof z != "string" ? "sc" : pt(z);
    mt[I] = (mt[I] || 0) + 1;
    var f = I + "-" + zt("5.3.8" + I + mt[I]);
    return L ? L + "-" + f : f;
  }(r.displayName, r.parentComponentId) : a, c = r.displayName, u = c === void 0 ? function(z) {
    return nt(z) ? "styled." + z : "Styled(" + bt(z) + ")";
  }(e) : c, m = r.displayName && r.componentId ? pt(r.displayName) + "-" + r.componentId : r.componentId || l, p = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, y = r.shouldForwardProp;
  n && e.shouldForwardProp && (y = r.shouldForwardProp ? function(z, L, I) {
    return e.shouldForwardProp(z, L, I) && r.shouldForwardProp(z, L, I);
  } : e.shouldForwardProp);
  var w, S = new In(t, m, n ? e.componentStyle : void 0), h = S.isStatic && i.length === 0, _ = function(z, L) {
    return function(I, f, $, M) {
      var Z = I.attrs, Y = I.componentStyle, D = I.defaultProps, ee = I.foldedComponentIds, G = I.shouldForwardProp, R = I.styledComponentId, b = I.target;
      process.env.NODE_ENV !== "production" && jt(R);
      var v = function(T, d, B) {
        T === void 0 && (T = Re);
        var C = xe({}, d, { theme: T }), q = {};
        return B.forEach(function(U) {
          var K, g, ae, A = U;
          for (K in We(A) && (A = A(C)), A)
            C[K] = q[K] = K === "className" ? (g = q[K], ae = A[K], g && ae ? g + " " + ae : g || ae) : A[K];
        }), [C, q];
      }(Tr(f, De(He), D) || Re, f, Z), O = v[0], x = v[1], N = function(T, d, B, C) {
        var q = kr(), U = Mr(), K = d ? T.generateAndInjectStyles(Re, q, U) : T.generateAndInjectStyles(B, q, U);
        return process.env.NODE_ENV !== "production" && jt(K), process.env.NODE_ENV !== "production" && !d && C && C(K), K;
      }(Y, M, O, process.env.NODE_ENV !== "production" ? I.warnTooManyClasses : void 0), H = $, X = x.$as || f.$as || x.as || f.as || b, te = nt(X), E = x !== f ? xe({}, f, {}, x) : f, k = {};
      for (var P in E)
        P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? k.as = E[P] : (G ? G(P, Vt, X) : !te || Vt(P)) && (k[P] = E[P]));
      return f.style && x.style !== f.style && (k.style = xe({}, f.style, {}, x.style)), k.className = Array.prototype.concat(ee, R, N !== R ? N : null, f.className, x.className).filter(Boolean).join(" "), k.ref = H, qr(X, k);
    }(w, z, L, h);
  };
  return _.displayName = u, (w = Le.forwardRef(_)).attrs = p, w.componentStyle = S, w.displayName = u, w.shouldForwardProp = y, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : it, w.styledComponentId = m, w.target = n ? e.target : e, w.withComponent = function(z) {
    var L = r.componentId, I = function($, M) {
      if ($ == null)
        return {};
      var Z, Y, D = {}, ee = Object.keys($);
      for (Y = 0; Y < ee.length; Y++)
        Z = ee[Y], M.indexOf(Z) >= 0 || (D[Z] = $[Z]);
      return D;
    }(r, ["componentId"]), f = L && L + "-" + (nt(z) ? z : pt(bt(z)));
    return Ar(z, xe({}, I, { attrs: p, componentId: f }), t);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = n ? Rr({}, e.defaultProps, z) : z;
  } }), process.env.NODE_ENV !== "production" && (Pr(u, m), w.warnTooManyClasses = function(z, L) {
    var I = {}, f = !1;
    return function($) {
      if (!f && (I[$] = !0, Object.keys(I).length >= 200)) {
        var M = L ? ' with the id of "' + L + '"' : "";
        console.warn("Over 200 classes were generated for component " + z + M + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, I = {};
      }
    };
  }(u, m)), w.toString = function() {
    return "." + w.styledComponentId;
  }, o && vn(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var $t = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Re), !Ke.isValidElementType(n))
      return ke(1, String(n));
    var s = function() {
      return t(n, o, Wt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, xe({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, xe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Ar, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  $t[e] = $t(e);
});
var Xn = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Sr(t), ct.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(Ze(this.rules, n, o, s).join(""), ""), a = this.componentId + t;
    o.insertRules(a, a, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && ct.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function qn(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Wt.apply(void 0, [e].concat(t)), s = "sc-global-" + zt(JSON.stringify(o)), i = new Xn(o, s);
  function a(c) {
    var u = kr(), m = Mr(), p = De(He), y = ge(u.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Le.Children.count(c.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(w) {
      return typeof w == "string" && w.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), u.server && l(y, c, u, p, m), Xr(function() {
      if (!u.server)
        return l(y, c, u, p, m), function() {
          return i.removeStyles(y, u);
        };
    }, [y, c, u, p, m]), null;
  }
  function l(c, u, m, p, y) {
    if (i.isStatic)
      i.renderStyles(c, gn, m, y);
    else {
      var w = xe({}, u, { theme: Tr(u, p, a.defaultProps) });
      i.renderStyles(c, w, m, y);
    }
  }
  return process.env.NODE_ENV !== "production" && Pr(s), Le.memo(a);
}
function Jn(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Wt.apply(void 0, [e].concat(t)).join(""), s = zt(o);
  return new _r(s, o);
}
var Kn = function() {
  return De(He);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const W = $t, Xe = "reactSchedulerOutsideWrapper", Qn = qn`

  #${Xe} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Xe} *,
 #${Xe} *:before,
 #${Xe} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, ue = {
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
}, Fe = `
margin: 0;
padding: 0;
`, Or = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
W.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const pe = 50, _e = 24, Be = 16, Ne = 40, je = Ne + Be + _e, Me = 84, we = 56, Ae = 196, Ee = 12, sr = 52, ir = ue.colors.blue100, Oe = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, Ce = 3, eo = 1.6, to = 4.5, Et = 12, ro = "reactSchedulerCanvasHeaderWrapper", Dr = "reactSchedulerCanvasWrapper", Ht = Xe, no = 4, oo = 48, Te = 5, so = 40, io = 8, Ir = _e / 2 + 2, Nr = Be / 2 + _e + 1, ar = 2, cr = 4, Ye = 60, ao = "rgb(114,141,226)";
var lt = {}, co = {
  get exports() {
    return lt;
  },
  set exports(e) {
    lt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", a = "minute", l = "hour", c = "day", u = "week", m = "month", p = "quarter", y = "year", w = "date", S = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, z = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var b = ["th", "st", "nd", "rd"], v = R % 100;
      return "[" + R + (b[(v - 20) % 10] || b[v] || b[0]) + "]";
    } }, L = function(R, b, v) {
      var O = String(R);
      return !O || O.length >= b ? R : "" + Array(b + 1 - O.length).join(v) + R;
    }, I = { s: L, z: function(R) {
      var b = -R.utcOffset(), v = Math.abs(b), O = Math.floor(v / 60), x = v % 60;
      return (b <= 0 ? "+" : "-") + L(O, 2, "0") + ":" + L(x, 2, "0");
    }, m: function R(b, v) {
      if (b.date() < v.date())
        return -R(v, b);
      var O = 12 * (v.year() - b.year()) + (v.month() - b.month()), x = b.clone().add(O, m), N = v - x < 0, H = b.clone().add(O + (N ? -1 : 1), m);
      return +(-(O + (v - x) / (N ? x - H : H - x)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: m, y, w: u, d: c, D: w, h: l, m: a, s: i, ms: s, Q: p }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, f = "en", $ = {};
    $[f] = z;
    var M = function(R) {
      return R instanceof ee;
    }, Z = function R(b, v, O) {
      var x;
      if (!b)
        return f;
      if (typeof b == "string") {
        var N = b.toLowerCase();
        $[N] && (x = N), v && ($[N] = v, x = N);
        var H = b.split("-");
        if (!x && H.length > 1)
          return R(H[0]);
      } else {
        var X = b.name;
        $[X] = b, x = X;
      }
      return !O && x && (f = x), x || !O && f;
    }, Y = function(R, b) {
      if (M(R))
        return R.clone();
      var v = typeof b == "object" ? b : {};
      return v.date = R, v.args = arguments, new ee(v);
    }, D = I;
    D.l = Z, D.i = M, D.w = function(R, b) {
      return Y(R, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var ee = function() {
      function R(v) {
        this.$L = Z(v.locale, null, !0), this.parse(v);
      }
      var b = R.prototype;
      return b.parse = function(v) {
        this.$d = function(O) {
          var x = O.date, N = O.utc;
          if (x === null)
            return new Date(NaN);
          if (D.u(x))
            return new Date();
          if (x instanceof Date)
            return new Date(x);
          if (typeof x == "string" && !/Z$/i.test(x)) {
            var H = x.match(h);
            if (H) {
              var X = H[2] - 1 || 0, te = (H[7] || "0").substring(0, 3);
              return N ? new Date(Date.UTC(H[1], X, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, te)) : new Date(H[1], X, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, te);
            }
          }
          return new Date(x);
        }(v), this.$x = v.x || {}, this.init();
      }, b.init = function() {
        var v = this.$d;
        this.$y = v.getFullYear(), this.$M = v.getMonth(), this.$D = v.getDate(), this.$W = v.getDay(), this.$H = v.getHours(), this.$m = v.getMinutes(), this.$s = v.getSeconds(), this.$ms = v.getMilliseconds();
      }, b.$utils = function() {
        return D;
      }, b.isValid = function() {
        return this.$d.toString() !== S;
      }, b.isSame = function(v, O) {
        var x = Y(v);
        return this.startOf(O) <= x && x <= this.endOf(O);
      }, b.isAfter = function(v, O) {
        return Y(v) < this.startOf(O);
      }, b.isBefore = function(v, O) {
        return this.endOf(O) < Y(v);
      }, b.$g = function(v, O, x) {
        return D.u(v) ? this[O] : this.set(x, v);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(v, O) {
        var x = this, N = !!D.u(O) || O, H = D.p(v), X = function(C, q) {
          var U = D.w(x.$u ? Date.UTC(x.$y, q, C) : new Date(x.$y, q, C), x);
          return N ? U : U.endOf(c);
        }, te = function(C, q) {
          return D.w(x.toDate()[C].apply(x.toDate("s"), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), x);
        }, E = this.$W, k = this.$M, P = this.$D, T = "set" + (this.$u ? "UTC" : "");
        switch (H) {
          case y:
            return N ? X(1, 0) : X(31, 11);
          case m:
            return N ? X(1, k) : X(0, k + 1);
          case u:
            var d = this.$locale().weekStart || 0, B = (E < d ? E + 7 : E) - d;
            return X(N ? P - B : P + (6 - B), k);
          case c:
          case w:
            return te(T + "Hours", 0);
          case l:
            return te(T + "Minutes", 1);
          case a:
            return te(T + "Seconds", 2);
          case i:
            return te(T + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(v) {
        return this.startOf(v, !1);
      }, b.$set = function(v, O) {
        var x, N = D.p(v), H = "set" + (this.$u ? "UTC" : ""), X = (x = {}, x[c] = H + "Date", x[w] = H + "Date", x[m] = H + "Month", x[y] = H + "FullYear", x[l] = H + "Hours", x[a] = H + "Minutes", x[i] = H + "Seconds", x[s] = H + "Milliseconds", x)[N], te = N === c ? this.$D + (O - this.$W) : O;
        if (N === m || N === y) {
          var E = this.clone().set(w, 1);
          E.$d[X](te), E.init(), this.$d = E.set(w, Math.min(this.$D, E.daysInMonth())).$d;
        } else
          X && this.$d[X](te);
        return this.init(), this;
      }, b.set = function(v, O) {
        return this.clone().$set(v, O);
      }, b.get = function(v) {
        return this[D.p(v)]();
      }, b.add = function(v, O) {
        var x, N = this;
        v = Number(v);
        var H = D.p(O), X = function(k) {
          var P = Y(N);
          return D.w(P.date(P.date() + Math.round(k * v)), N);
        };
        if (H === m)
          return this.set(m, this.$M + v);
        if (H === y)
          return this.set(y, this.$y + v);
        if (H === c)
          return X(1);
        if (H === u)
          return X(7);
        var te = (x = {}, x[a] = n, x[l] = o, x[i] = t, x)[H] || 1, E = this.$d.getTime() + v * te;
        return D.w(E, this);
      }, b.subtract = function(v, O) {
        return this.add(-1 * v, O);
      }, b.format = function(v) {
        var O = this, x = this.$locale();
        if (!this.isValid())
          return x.invalidDate || S;
        var N = v || "YYYY-MM-DDTHH:mm:ssZ", H = D.z(this), X = this.$H, te = this.$m, E = this.$M, k = x.weekdays, P = x.months, T = function(q, U, K, g) {
          return q && (q[U] || q(O, N)) || K[U].slice(0, g);
        }, d = function(q) {
          return D.s(X % 12 || 12, q, "0");
        }, B = x.meridiem || function(q, U, K) {
          var g = q < 12 ? "AM" : "PM";
          return K ? g.toLowerCase() : g;
        }, C = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: E + 1, MM: D.s(E + 1, 2, "0"), MMM: T(x.monthsShort, E, P, 3), MMMM: T(P, E), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: T(x.weekdaysMin, this.$W, k, 2), ddd: T(x.weekdaysShort, this.$W, k, 3), dddd: k[this.$W], H: String(X), HH: D.s(X, 2, "0"), h: d(1), hh: d(2), a: B(X, te, !0), A: B(X, te, !1), m: String(te), mm: D.s(te, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: H };
        return N.replace(_, function(q, U) {
          return U || C[q] || H.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(v, O, x) {
        var N, H = D.p(O), X = Y(v), te = (X.utcOffset() - this.utcOffset()) * n, E = this - X, k = D.m(this, X);
        return k = (N = {}, N[y] = k / 12, N[m] = k, N[p] = k / 3, N[u] = (E - te) / 6048e5, N[c] = (E - te) / 864e5, N[l] = E / o, N[a] = E / n, N[i] = E / t, N)[H] || E, x ? k : D.a(k);
      }, b.daysInMonth = function() {
        return this.endOf(m).$D;
      }, b.$locale = function() {
        return $[this.$L];
      }, b.locale = function(v, O) {
        if (!v)
          return this.$L;
        var x = this.clone(), N = Z(v, O, !0);
        return N && (x.$L = N), x;
      }, b.clone = function() {
        return D.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), G = ee.prototype;
    return Y.prototype = G, [["$ms", s], ["$s", i], ["$m", a], ["$H", l], ["$W", c], ["$M", m], ["$y", y], ["$D", w]].forEach(function(R) {
      G[R[1]] = function(b) {
        return this.$g(b, R[0], R[1]);
      };
    }), Y.extend = function(R, b) {
      return R.$i || (R(b, ee, Y), R.$i = !0), Y;
    }, Y.locale = Z, Y.isDayjs = M, Y.unix = function(R) {
      return Y(1e3 * R);
    }, Y.en = $[f], Y.Ls = $, Y.p = {}, Y;
  });
})(co);
const F = lt, lr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Lr = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, Zr = (e, r) => F(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), Yr = (e) => ({
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Lr(e),
  isCurrentDay: e.isSame(F(), "day"),
  year: parseInt(e.format("YYYY"))
}), Wr = (e, r, t, n, o, s) => {
  e.strokeStyle = ue.colors.grey400, s ? e.fillStyle = ue.colors.blue200 : o ? e.fillStyle = "transparent" : e.fillStyle = ue.colors.blue100, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, we), e.strokeRect(r + 0.5, t + 0.5, n, we);
}, lo = (e, r, t, n) => {
  for (let o = 0; o < r; o++)
    for (let s = 0; s <= t; s++) {
      const i = F(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        s,
        "days"
      ), a = i.isSame(F(), "day");
      Wr(e, s * pe, o * we, pe, Lr(i), a);
    }
}, uo = (e, r, t) => {
  e.setLineDash([5, 5]), e.strokeStyle = ue.colors.grey400, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, ho = (e, r, t, n) => {
  let o = 0, s = -(n.dayOfMonth - 1) * Ee;
  for (let i = 0; i <= t; i++) {
    const l = F(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      i,
      "weeks"
    ).isSame(F(), "week");
    for (let c = 0; c < r; c++)
      Wr(e, o, c * we, Me, !0, l);
    o += Me;
  }
  for (let i = 0; i < t; i++) {
    const a = Zr(n, i) * Ee;
    uo(e, s, r * we), s += a;
  }
}, fo = (e, r, t, n, o) => {
  e.clearRect(0, 0, e.canvas.width, e.canvas.height), document.getElementById(Dr) && (r === 1 ? lo(e, t, n, o) : ho(e, t, n, o));
};
var kt = {}, po = {
  get exports() {
    return kt;
  },
  set exports(e) {
    kt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var a = s.prototype;
      a.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var u = i(this).startOf(n).add(1, n).date(c), m = i(this).endOf(t);
          if (u.isBefore(m))
            return 1;
        }
        var p = i(this).startOf(n).date(c).startOf(t).subtract(1, "millisecond"), y = this.diff(p, t, !0);
        return y < 0 ? i(this).startOf("week").week() : Math.ceil(y);
      }, a.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(po);
const mo = kt;
var Mt = {}, vo = {
  get exports() {
    return Mt;
  },
  set exports(e) {
    Mt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(vo);
const yo = Mt;
var _t = {}, go = {
  get exports() {
    return _t;
  },
  set exports(e) {
    _t = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t = "day";
    return function(n, o, s) {
      var i = function(c) {
        return c.add(4 - c.isoWeekday(), t);
      }, a = o.prototype;
      a.isoWeekYear = function() {
        return i(this).year();
      }, a.isoWeek = function(c) {
        if (!this.$utils().u(c))
          return this.add(7 * (c - this.isoWeek()), t);
        var u, m, p, y, w = i(this), S = (u = this.isoWeekYear(), m = this.$u, p = (m ? s.utc : s)().year(u).startOf("year"), y = 4 - p.isoWeekday(), p.isoWeekday() > 4 && (y += 7), p.add(y, t));
        return w.diff(S, "week") + 1;
      }, a.isoWeekday = function(c) {
        return this.$utils().u(c) ? this.day() || 7 : this.day(this.day() % 7 ? c : c - 7);
      };
      var l = a.startOf;
      a.startOf = function(c, u) {
        var m = this.$utils(), p = !!m.u(u) || u;
        return m.p(c) === "isoweek" ? p ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(c, u);
      };
    };
  });
})(go);
const wo = _t;
var Pt = {}, bo = {
  get exports() {
    return Pt;
  },
  set exports(e) {
    Pt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, a, l) {
        var c = o(s), u = o(i), m = (l = l || "()")[0] === "(", p = l[1] === ")";
        return (m ? this.isAfter(c, a) : !this.isBefore(c, a)) && (p ? this.isBefore(u, a) : !this.isAfter(u, a)) || (m ? this.isBefore(c, a) : !this.isAfter(c, a)) && (p ? this.isAfter(u, a) : !this.isBefore(u, a));
      };
    };
  });
})(bo);
const xo = Pt;
var Tt = {}, Co = {
  get exports() {
    return Tt;
  },
  set exports(e) {
    Tt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, a = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, u = 2592e6, m = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, p = { years: c, months: u, days: a, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, y = function(f) {
      return f instanceof I;
    }, w = function(f, $, M) {
      return new I(f, M, $.$l);
    }, S = function(f) {
      return n.p(f) + "s";
    }, h = function(f) {
      return f < 0;
    }, _ = function(f) {
      return h(f) ? Math.ceil(f) : Math.floor(f);
    }, z = function(f) {
      return Math.abs(f);
    }, L = function(f, $) {
      return f ? h(f) ? { negative: !0, format: "" + z(f) + $ } : { negative: !1, format: "" + f + $ } : { negative: !1, format: "" };
    }, I = function() {
      function f(M, Z, Y) {
        var D = this;
        if (this.$d = {}, this.$l = Y, M === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), Z)
          return w(M * p[S(Z)], this);
        if (typeof M == "number")
          return this.$ms = M, this.parseFromMilliseconds(), this;
        if (typeof M == "object")
          return Object.keys(M).forEach(function(R) {
            D.$d[S(R)] = M[R];
          }), this.calMilliseconds(), this;
        if (typeof M == "string") {
          var ee = M.match(m);
          if (ee) {
            var G = ee.slice(2).map(function(R) {
              return R != null ? Number(R) : 0;
            });
            return this.$d.years = G[0], this.$d.months = G[1], this.$d.weeks = G[2], this.$d.days = G[3], this.$d.hours = G[4], this.$d.minutes = G[5], this.$d.seconds = G[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var $ = f.prototype;
      return $.calMilliseconds = function() {
        var M = this;
        this.$ms = Object.keys(this.$d).reduce(function(Z, Y) {
          return Z + (M.$d[Y] || 0) * p[Y];
        }, 0);
      }, $.parseFromMilliseconds = function() {
        var M = this.$ms;
        this.$d.years = _(M / c), M %= c, this.$d.months = _(M / u), M %= u, this.$d.days = _(M / a), M %= a, this.$d.hours = _(M / i), M %= i, this.$d.minutes = _(M / s), M %= s, this.$d.seconds = _(M / o), M %= o, this.$d.milliseconds = M;
      }, $.toISOString = function() {
        var M = L(this.$d.years, "Y"), Z = L(this.$d.months, "M"), Y = +this.$d.days || 0;
        this.$d.weeks && (Y += 7 * this.$d.weeks);
        var D = L(Y, "D"), ee = L(this.$d.hours, "H"), G = L(this.$d.minutes, "M"), R = this.$d.seconds || 0;
        this.$d.milliseconds && (R += this.$d.milliseconds / 1e3);
        var b = L(R, "S"), v = M.negative || Z.negative || D.negative || ee.negative || G.negative || b.negative, O = ee.format || G.format || b.format ? "T" : "", x = (v ? "-" : "") + "P" + M.format + Z.format + D.format + O + ee.format + G.format + b.format;
        return x === "P" || x === "-P" ? "P0D" : x;
      }, $.toJSON = function() {
        return this.toISOString();
      }, $.format = function(M) {
        var Z = M || "YYYY-MM-DDTHH:mm:ss", Y = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return Z.replace(l, function(D, ee) {
          return ee || String(Y[D]);
        });
      }, $.as = function(M) {
        return this.$ms / p[S(M)];
      }, $.get = function(M) {
        var Z = this.$ms, Y = S(M);
        return Y === "milliseconds" ? Z %= 1e3 : Z = Y === "weeks" ? _(Z / p[Y]) : this.$d[Y], Z === 0 ? 0 : Z;
      }, $.add = function(M, Z, Y) {
        var D;
        return D = Z ? M * p[S(Z)] : y(M) ? M.$ms : w(M, this).$ms, w(this.$ms + D * (Y ? -1 : 1), this);
      }, $.subtract = function(M, Z) {
        return this.add(M, Z, !0);
      }, $.locale = function(M) {
        var Z = this.clone();
        return Z.$l = M, Z;
      }, $.clone = function() {
        return w(this.$ms, this);
      }, $.humanize = function(M) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!M);
      }, $.milliseconds = function() {
        return this.get("milliseconds");
      }, $.asMilliseconds = function() {
        return this.as("milliseconds");
      }, $.seconds = function() {
        return this.get("seconds");
      }, $.asSeconds = function() {
        return this.as("seconds");
      }, $.minutes = function() {
        return this.get("minutes");
      }, $.asMinutes = function() {
        return this.as("minutes");
      }, $.hours = function() {
        return this.get("hours");
      }, $.asHours = function() {
        return this.as("hours");
      }, $.days = function() {
        return this.get("days");
      }, $.asDays = function() {
        return this.as("days");
      }, $.weeks = function() {
        return this.get("weeks");
      }, $.asWeeks = function() {
        return this.as("weeks");
      }, $.months = function() {
        return this.get("months");
      }, $.asMonths = function() {
        return this.as("months");
      }, $.years = function() {
        return this.get("years");
      }, $.asYears = function() {
        return this.as("years");
      }, f;
    }();
    return function(f, $, M) {
      t = M, n = M().$utils(), M.duration = function(D, ee) {
        var G = M.locale();
        return w(D, { $l: G }, ee);
      }, M.isDuration = y;
      var Z = $.prototype.add, Y = $.prototype.subtract;
      $.prototype.add = function(D, ee) {
        return y(D) && (D = D.asMilliseconds()), Z.bind(this)(D, ee);
      }, $.prototype.subtract = function(D, ee) {
        return y(D) && (D = D.asMilliseconds()), Y.bind(this)(D, ee);
      };
    };
  });
})(Co);
const So = Tt;
var $o = "Expected a function", ur = 0 / 0, Eo = "[object Symbol]", ko = /^\s+|\s+$/g, Mo = /^[-+]0x[0-9a-f]+$/i, _o = /^0b[01]+$/i, Po = /^0o[0-7]+$/i, To = parseInt, Ro = typeof ye == "object" && ye && ye.Object === Object && ye, Ao = typeof self == "object" && self && self.Object === Object && self, Oo = Ro || Ao || Function("return this")(), Do = Object.prototype, Io = Do.toString, No = Math.max, Lo = Math.min, vt = function() {
  return Oo.Date.now();
};
function Zo(e, r, t) {
  var n, o, s, i, a, l, c = 0, u = !1, m = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError($o);
  r = dr(r) || 0, Rt(t) && (u = !!t.leading, m = "maxWait" in t, s = m ? No(dr(t.maxWait) || 0, r) : s, p = "trailing" in t ? !!t.trailing : p);
  function y($) {
    var M = n, Z = o;
    return n = o = void 0, c = $, i = e.apply(Z, M), i;
  }
  function w($) {
    return c = $, a = setTimeout(_, r), u ? y($) : i;
  }
  function S($) {
    var M = $ - l, Z = $ - c, Y = r - M;
    return m ? Lo(Y, s - Z) : Y;
  }
  function h($) {
    var M = $ - l, Z = $ - c;
    return l === void 0 || M >= r || M < 0 || m && Z >= s;
  }
  function _() {
    var $ = vt();
    if (h($))
      return z($);
    a = setTimeout(_, S($));
  }
  function z($) {
    return a = void 0, p && n ? y($) : (n = o = void 0, i);
  }
  function L() {
    a !== void 0 && clearTimeout(a), c = 0, n = l = o = a = void 0;
  }
  function I() {
    return a === void 0 ? i : z(vt());
  }
  function f() {
    var $ = vt(), M = h($);
    if (n = arguments, o = this, l = $, M) {
      if (a === void 0)
        return w(l);
      if (m)
        return a = setTimeout(_, r), y(l);
    }
    return a === void 0 && (a = setTimeout(_, r)), i;
  }
  return f.cancel = L, f.flush = I, f;
}
function Rt(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Yo(e) {
  return !!e && typeof e == "object";
}
function Wo(e) {
  return typeof e == "symbol" || Yo(e) && Io.call(e) == Eo;
}
function dr(e) {
  if (typeof e == "number")
    return e;
  if (Wo(e))
    return ur;
  if (Rt(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Rt(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ko, "");
  var t = _o.test(e);
  return t || Po.test(e) ? To(e.slice(2), t ? 2 : 8) : Mo.test(e) ? ur : +e;
}
var At = Zo;
const st = [0, 1], zo = (e) => st.includes(e), ut = (e, r) => {
  const t = r === 0 ? Math.ceil(window.innerWidth / Me) * 3 : Math.ceil(window.innerWidth / pe) * 3, n = r === 0 ? e.subtract(t / 3 + 3, "weeks").set("day", 1) : e.subtract(t / 3 + 3, "days"), o = r === 0 ? n.add(t, "weeks") : n.add(t, "days");
  return {
    startDate: n,
    endDate: o
  };
}, Ho = (e, r) => {
  const t = ut(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, yt = (e) => e === 0 ? Math.ceil(window.innerWidth / Me) * Ce : Math.ceil(window.innerWidth / pe) * Ce, zr = gr({
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
  date: F(),
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
F.extend(mo);
F.extend(yo);
F.extend(wo);
F.extend(xo);
F.extend(So);
const jo = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = F(),
  onRangeChange: s,
  onFilterData: i,
  onClearFilterData: a
}) => {
  const { zoom: l, maxRecordsPerPage: c = 50 } = n, [u, m] = me(l), [p, y] = me(F()), [w, S] = me(!1), [h, _] = me(yt(u)), z = st[u] !== st[st.length - 1], L = u !== 0, I = $e(() => Ho(p, u), [p, u]), f = ut(p, u).startDate, $ = F(f).dayOfYear(), M = Yr(f), Z = ge(null), [Y, D] = me([{ x: 0, y: 0 }]), ee = 2, G = ve(
    (T, d = "smooth") => {
      var B, C, q, U;
      switch (T) {
        case "back":
          return (B = Z.current) == null ? void 0 : B.scrollTo({
            behavior: d,
            left: u === 0 ? Me * Ce : pe * Ce
          });
        case "forward":
          return (C = Z.current) == null ? void 0 : C.scrollTo({
            behavior: d,
            left: u === 0 ? window.innerWidth + (h / Ce - Ce + ee) * Me : window.innerWidth + (h / Ce - Ce + ee) * pe
          });
        case "middle":
          return (q = Z.current) == null ? void 0 : q.scrollTo({
            behavior: d,
            left: window.innerWidth
          });
        default:
          return (U = Z.current) == null ? void 0 : U.scrollTo({
            behavior: d,
            left: window.innerWidth
          });
      }
    },
    [h, u]
  ), R = (T) => {
    D(T);
  }, b = ve(
    (T) => {
      At(() => {
        switch (T) {
          case "back":
            y((B) => B.subtract(cr, "weeks"));
            break;
          case "forward":
            y((B) => B.add(cr, "weeks"));
            break;
          case "middle":
            y(F());
            break;
        }
        s == null || s(I);
      }, 300)();
    },
    [s, I]
  );
  fe(() => {
    Z.current = document.getElementById(Ht);
  }, []), fe(() => {
    const T = () => _(yt(u));
    return window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, [u]), fe(() => {
    s == null || s(I);
  }, [s, I]), fe(() => {
    S(!1);
  }, [o]), fe(() => {
    w || (G("middle", "auto"), S(!0), y(o));
  }, [o, w, G]);
  const v = () => {
    t || (y((T) => T.add(ar, "weeks")), s == null || s(I));
  }, O = ve(() => {
    t || (b("forward"), G("forward"));
  }, [t, b, G]), x = () => {
    t || (y((T) => T.subtract(ar, "weeks")), s == null || s(I));
  }, N = ve(() => {
    !w || t || (b("back"), G("back"));
  }, [w, t, b, G]), H = ve(() => {
    t || (b("middle"), G("middle"));
  }, [t, b, G]), X = () => E(u + 1), te = () => E(u - 1), E = (T) => {
    zo(T) && (m(T), _(yt(T)), s == null || s(I));
  }, k = () => i == null ? void 0 : i(), { Provider: P } = zr;
  return /* @__PURE__ */ V(
    P,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: v,
        handleScrollNext: O,
        handleGoPrev: x,
        handleScrollPrev: N,
        handleGoToday: H,
        zoomIn: X,
        zoomOut: te,
        zoom: u,
        isNextZoom: z,
        isPrevZoom: L,
        date: p,
        isLoading: t,
        cols: h,
        startDate: M,
        dayOfYear: $,
        handleFilterData: k,
        tilesCoords: Y,
        updateTilesCoords: R,
        recordsThreshold: c,
        onClearFilterData: a
      },
      children: r
    }
  );
}, Qe = () => De(zr), Hr = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Fo = W.div`
  height: calc(100vh - headerHeight);
`, Bo = W.div`
  position: relative;
`, Vo = W.canvas``;
W.canvas``;
const hr = W.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Go = Jr(function({ zoom: r, rows: t, data: n, onTileClick: o }, s) {
  const { handleScrollNext: i, handleScrollPrev: a, date: l, isLoading: c, cols: u, startDate: m } = Qe(), p = ge(null), y = ge(null), w = ge(null), S = ve(
    (h) => {
      const _ = window.innerWidth * Ce, z = t * we + 1;
      Hr(h, _, z), fo(h, r, t, u, m);
    },
    [u, m, t, r]
  );
  return fe(() => {
    if (!p.current)
      return;
    const h = p.current.getContext("2d");
    if (!h)
      return;
    const _ = () => S(h);
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, [S]), fe(() => {
    const h = p.current;
    if (!h)
      return;
    h.style.letterSpacing = "1px";
    const _ = h.getContext("2d");
    _ && S(_);
  }, [l, t, r, S]), fe(() => {
    if (!y.current)
      return;
    const h = new IntersectionObserver(
      (_) => _[0].isIntersecting ? i() : null
    );
    return h.observe(y.current), () => h.disconnect();
  }, [i]), fe(() => {
    if (!w.current)
      return;
    const h = new IntersectionObserver(
      (_) => _[0].isIntersecting ? a() : null,
      { rootMargin: `0px 0px 0px -${Ae}px` }
    );
    return h.observe(w.current), () => h.disconnect();
  }, [a]), /* @__PURE__ */ V(Fo, { id: Dr, children: /* @__PURE__ */ Se(Bo, { ref: s, children: [
    /* @__PURE__ */ V(hr, { position: "left", ref: w }),
    /* @__PURE__ */ V(vr, { isLoading: c, position: "left" }),
    /* @__PURE__ */ V(Vo, { ref: p }),
    /* @__PURE__ */ V(gi, { data: n, zoom: r, onTileClick: o }),
    /* @__PURE__ */ V(hr, { ref: y, position: "right" }),
    /* @__PURE__ */ V(vr, { isLoading: c, position: "right" })
  ] }) });
}), jr = (e) => {
  const r = F.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, Fr = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / Ye);
    t += o.hours + s, n += r % Ye, n >= Ye && (t++, n -= Ye);
  }), { hours: t, minutes: n };
}, Br = (e, r) => {
  const t = r === 0 ? so : io, n = () => {
    let s = t - e.hours - 1, i = Ye - e.minutes;
    return i === Ye && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, Uo = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((c) => {
    const u = F(c.startDate).isoWeek(), m = F(c.startDate).isoWeekday(), p = F(c.endDate).isoWeek(), y = F(c.endDate).isoWeekday(), { hours: w, minutes: S } = jr(c.occupancy);
    if (n === u) {
      const h = (Te + 1 - m) * w, _ = (Te + 1 - m) * S;
      return { hours: Math.max(0, h), minutes: _ };
    } else if (n === p) {
      const h = y > Te ? Te * w : y * w, _ = y > Te ? Te * S : y * S;
      return { hours: h, minutes: _ };
    } else if (F(r).isBetween(c.startDate, c.endDate))
      return { hours: Te * w, minutes: Te * S };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Fr(o), { free: a, overtime: l } = Br({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: a,
    overtime: l
  };
}, Xo = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((u) => {
    const { hours: m, minutes: p } = jr(u.occupancy);
    return o <= (n ? 7 : 5) ? { hours: m, minutes: p } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: a } = Fr(s), { free: l, overtime: c } = Br({ hours: i, minutes: a }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, a) },
    free: l,
    overtime: c
  };
}, qo = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 0 ? F(i.startDate).isBetween(
    F(t),
    F(t).add(6, "days"),
    "day",
    "[]"
  ) || F(t).isBetween(F(i.startDate), F(i.endDate), "day", "[]") : F(t).isBetween(i.startDate, i.endDate, "day", "[]"));
  return n === 0 ? Uo(s, t, n) : Xo(s, t, n, o);
}, Jo = (e, r, t, n, o, s = !1) => {
  const i = o === 0 ? Me : pe, a = Math.ceil(r.x / i), l = F(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
    a - 1,
    o === 0 ? "weeks" : "days"
  ), c = Math.ceil(r.y / we), u = t.findIndex((w, S, h) => h.slice(0, S + 1).reduce((z, L) => z + L, 0) >= c), m = a * i, p = (c - 1) * we + we, y = qo(
    n[u],
    u,
    l,
    o,
    s
  );
  return { coords: { x: m, y: p }, resourceIndex: u, disposition: y };
}, Ko = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], a = 0;
  return r.length > n ? (r.forEach((l, c) => {
    const u = { id: e[c].id, label: e[c].label, data: l };
    a >= n && (o.push(i), s += i.length, i = [], a = 0), a++, i.push(u);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((l, c) => {
    const u = {
      id: e[c + s].id,
      label: e[c + s].label,
      data: l
    };
    i.push(u), c === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((l, c) => {
    const u = { id: e[c].id, label: e[c].label, data: l };
    i.push(u);
  }), o.push(i), o);
}, Qo = (e, r) => {
  const t = [];
  for (const n of e) {
    let o = !1;
    if (t.length)
      for (const s of t) {
        let i = !1;
        for (let a = 0; a < s.length; a++) {
          if (F(n.startDate).isBetween(s[a].startDate, s[a].endDate, null, "[]") || F(n.endDate).isBetween(s[a].startDate, s[a].endDate, null, "[]")) {
            i = !0;
            break;
          }
          if (F(n.startDate).isBefore(r.startDate, "day") && F(n.endDate).isAfter(r.endDate, "day")) {
            i = !0;
            break;
          }
        }
        if (!i) {
          s.push(n), o = !0;
          break;
        }
      }
    o || t.push([n]);
  }
  return t;
}, es = (e, r) => {
  const t = [[], []], [n, o] = e.reduce((s, i) => {
    const a = Qo(i.data, r);
    return s[0].push(a), s[1].push(Math.max(a.length, 1)), s;
  }, t);
  return { projectsPerPerson: n, rowsPerPerson: o };
}, ts = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, rs = (e, r) => {
  const { recordsThreshold: t } = Qe(), [n, o] = me(0), [s, i] = me(0), a = ge(null);
  fe(() => {
    a.current = document.getElementById(Ht);
  }, []);
  const { projectsPerPerson: l, rowsPerPerson: c } = $e(
    () => es(e, r),
    [e, r]
  ), u = $e(
    () => Ko(e, l, c, t),
    [e, l, t, c]
  ), m = ve(() => {
    u[s].length && a.current && (a.current.scroll({ top: 0 }), o((_) => _ + u[Math.max(s, 0)].length), i((_) => Math.min(_ + 1, u.length - 1)), window.scroll({ top: 0 }));
  }, [s, u]), p = ve(() => {
    u[s].length && (o((_) => Math.max(_ - u[s - 1].length, 0)), i((_) => Math.max(_ - 1, 0)));
  }, [s, u]), y = ve(() => {
    o(0), i(0);
  }, []), w = n + u[s].length, S = $e(
    () => c.slice(n, w),
    [w, c, n]
  ), h = $e(
    () => l.slice(n, w),
    [w, l, n]
  );
  return {
    page: u[s],
    currentPageNum: s,
    pagesAmount: u.length,
    projectsPerPerson: h,
    rowsPerItem: S,
    totalRowsPerPage: ts(u[s]),
    next: m,
    previous: p,
    reset: y
  };
};
var Ot = {}, ns = {
  get exports() {
    return Ot;
  },
  set exports(e) {
    Ot = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(ns);
const os = Ot;
var Dt = {}, ss = {
  get exports() {
    return Dt;
  },
  set exports(e) {
    Dt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(lt);
  })(ye, function(t) {
    function n(p) {
      return p && typeof p == "object" && "default" in p ? p : { default: p };
    }
    var o = n(t);
    function s(p) {
      return p % 10 < 5 && p % 10 > 1 && ~~(p / 10) % 10 != 1;
    }
    function i(p, y, w) {
      var S = p + " ";
      switch (w) {
        case "m":
          return y ? "minuta" : "minutę";
        case "mm":
          return S + (s(p) ? "minuty" : "minut");
        case "h":
          return y ? "godzina" : "godzinę";
        case "hh":
          return S + (s(p) ? "godziny" : "godzin");
        case "MM":
          return S + (s(p) ? "miesiące" : "miesięcy");
        case "yy":
          return S + (s(p) ? "lata" : "lat");
      }
    }
    var a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), c = /D MMMM/, u = function(p, y) {
      return c.test(y) ? a[p.month()] : l[p.month()];
    };
    u.s = l, u.f = a;
    var m = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: u, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(p) {
      return p + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(m, null, !0), m;
  });
})(ss);
const is = Dt, as = {
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
}, cs = {
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
}, Je = [
  {
    id: "en",
    name: "ENGLISH",
    lang: as,
    translateCode: "en-GB"
  },
  {
    id: "pl",
    name: "POLISH",
    lang: cs,
    translateCode: "pl-PL"
  }
], Vr = gr({
  locales: Je,
  currentLocale: Je[0],
  setCurrentLocale: () => {
  }
}), ls = ({ children: e, lang: r }) => {
  const [t, n] = me("en"), o = ve(() => {
    const c = Je.find((u) => u.id === t);
    return (c == null ? void 0 : c.id) === "en" ? F.locale({ ...os }) : F.locale({ ...is }), c || Je[0];
  }, [t]), [s, i] = me(o()), a = (c) => {
    localStorage.setItem("locale", c.translateCode), i(c);
  };
  fe(() => {
    const c = localStorage.getItem("locale"), u = r ?? c ?? "en";
    localStorage.setItem("locale", u), n(u), i(o());
  }, [o, r]);
  const { Provider: l } = Vr;
  return /* @__PURE__ */ V(l, { value: { currentLocale: s, locales: Je, setCurrentLocale: a }, children: e });
}, dt = () => De(Vr).currentLocale.lang, us = (e) => /* @__PURE__ */ j.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ j.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ j.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ j.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ j.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ j.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ j.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ j.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ j.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ j.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ds = W.div`
  position: absolute;
  height: 440px;
  width: 514px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`, hs = W.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
`, fs = () => {
  const { feelingEmpty: e } = dt();
  return /* @__PURE__ */ Se(ds, { children: [
    /* @__PURE__ */ V(us, {}),
    /* @__PURE__ */ V(hs, { children: e })
  ] });
}, ps = W.div`
  position: relative;
  display: flex;
`, ms = W.div`
  position: relative;
  margin-left: ${Ae};
  display: flex;
  flex-direction: column;
  contain: paint;
`, fr = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, vs = ({ data: e, onTileClick: r, onItemClick: t, topBarWidth: n }) => {
  const [o, s] = me(fr), [i, a] = me(e), [l, c] = me(!1), [u, m] = me(""), {
    zoom: p,
    startDate: y,
    date: w,
    config: { includeTakenHoursOnWeekendsInDayView: S }
  } = Qe(), h = ge(null), _ = $e(() => ut(w, p), [w, p]), {
    page: z,
    projectsPerPerson: L,
    totalRowsPerPage: I,
    rowsPerItem: f,
    currentPageNum: $,
    pagesAmount: M,
    next: Z,
    previous: Y,
    reset: D
  } = rs(i, _), ee = ge(
    At(
      (v, O, x, N, H) => {
        if (!h.current)
          return;
        const { left: X, top: te } = h.current.getBoundingClientRect(), E = { x: v.clientX - X, y: v.clientY - te }, {
          coords: { x: k, y: P },
          resourceIndex: T,
          disposition: d
        } = Jo(
          O,
          E,
          x,
          N,
          H,
          S
        );
        s({ coords: { x: k, y: P }, resourceIndex: T, disposition: d }), c(!0);
      },
      300
    )
  ), G = ge(
    At((v, O) => {
      D(), a(
        v.filter(
          (x) => x.label.title.toLowerCase().includes(O.toLowerCase())
        )
      );
    }, 500)
  ), R = (v) => {
    const O = v.target.value;
    m(O), G.current.cancel(), G.current(e, O);
  }, b = ve(() => {
    ee.current.cancel(), c(!1), s(fr);
  }, []);
  return fe(() => {
    const v = (x) => ee.current(x, y, f, L, p), O = h.current;
    if (O)
      return O.addEventListener("mousemove", v), O.addEventListener("mouseleave", b), () => {
        O.removeEventListener("mousemove", v), O.removeEventListener("mouseleave", b);
      };
  }, [ee, b, L, f, y, p]), fe(() => {
    u || a(e);
  }, [e, u]), /* @__PURE__ */ Se(ps, { children: [
    /* @__PURE__ */ V(
      Bs,
      {
        data: z,
        pageNum: $,
        pagesAmount: M,
        rows: f,
        onLoadNext: Z,
        onLoadPrevious: Y,
        searchInputValue: u,
        onSearchInputChange: R,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ Se(ms, { children: [
      /* @__PURE__ */ V(ai, { zoom: p, topBarWidth: n }),
      e.length ? /* @__PURE__ */ V(
        Go,
        {
          data: z,
          zoom: p,
          rows: I,
          ref: h,
          onTileClick: r
        }
      ) : /* @__PURE__ */ V(fs, {})
    ] })
  ] });
}, Gr = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`;
W.div`
  width: calc(${({ width: e }) => e}px - ${Ae}px);
  position: sticky;
  top: 0;
  left: ${Ae}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`;
W.div`
  display: flex;
  gap: 1.875rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
W.button`
  ${Gr};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  :not(:disabled) {
    cursor: pointer;
  }
`;
W.button`
  ${Gr};
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
W.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
`;
W.div`
  display: flex;
`;
const ys = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), gs = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), ws = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), bs = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), xs = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Cs = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Ss = (e) => /* @__PURE__ */ j.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), $s = (e) => /* @__PURE__ */ j.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Es = (e) => /* @__PURE__ */ j.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z", fill: "#0A11EB" })), ks = (e) => /* @__PURE__ */ j.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z", fill: "#0A11EB" })), Ms = (e) => /* @__PURE__ */ j.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), _s = (e) => /* @__PURE__ */ j.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ j.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z", fill: "white" })), Ps = {
  add: ys,
  subtract: gs,
  filter: ws,
  arrowLeft: bs,
  arrowRight: xs,
  defaultAvatar: Cs,
  calendarWarning: Ss,
  calendarFree: $s,
  arrowDown: ks,
  arrowUp: Es,
  search: Ms,
  close: _s
}, pr = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = Kn(), i = Ps[e];
  return i ? /* @__PURE__ */ V(
    i,
    {
      style: { transition: ".5s ease" },
      fill: n ?? s.blue400,
      width: r,
      height: t,
      className: o
    }
  ) : null;
};
W.button`
  outline: none;
  background: ${({ theme: e, variant: r }) => r === "filled" ? e.colors.blue400 : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid
    ${({ theme: e, disabled: r }) => r ? e.colors.grey600 : e.colors.blue400};
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: pointer;
  color: ${({ theme: e, variant: r }) => r === "filled" ? e.colors.white : e.colors.blue400};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
`;
const Ts = W.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: white;
`, Rs = W.div`
  position: relative;
`, xi = ({
  data: e,
  config: r,
  startDate: t,
  onRangeChange: n,
  onTileClick: o,
  onFilterData: s,
  onClearFilterData: i,
  onItemClick: a,
  isLoading: l
}) => {
  var w;
  const c = $e(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      ...r
    }),
    [r]
  ), u = ge(null), [m, p] = me((w = u.current) == null ? void 0 : w.clientWidth), y = $e(() => F(t), [t]);
  return fe(() => {
    const S = () => {
      u.current && p(u.current.clientWidth);
    };
    return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, []), u.current, /* @__PURE__ */ Se(yr, { children: [
    /* @__PURE__ */ V(Qn, {}),
    /* @__PURE__ */ V(Un, { theme: ue, children: /* @__PURE__ */ V(ls, { lang: c.lang, children: /* @__PURE__ */ V(
      jo,
      {
        data: e,
        isLoading: !!l,
        config: c,
        onRangeChange: n,
        defaultStartDate: y,
        onFilterData: s,
        onClearFilterData: i,
        children: /* @__PURE__ */ V(
          Ts,
          {
            showScroll: !!e.length,
            id: Ht,
            ref: u,
            children: /* @__PURE__ */ V(Rs, { children: /* @__PURE__ */ V(
              vs,
              {
                data: e,
                onTileClick: o,
                topBarWidth: m ?? 0,
                onItemClick: a
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, As = W.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.grey400}` : "none"};
`, Os = W.button`
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
`, Ds = W.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Is = W.p`
  ${Fe}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Ns = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: a } = dt(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${a} ${o}/${s}`;
  return /* @__PURE__ */ V(As, { intent: e, children: /* @__PURE__ */ Se(Os, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ V(Ds, { children: t }),
    /* @__PURE__ */ V(Is, { children: l })
  ] }) });
}, Ls = W.div`
  min-width: ${Ae + "px"};
  max-width: ${Ae + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.white};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Zs = W.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ae}px;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`, Ys = W.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.grey600};
  }
`, Ws = W.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.blue100};
  border: 1px solid
    ${({ theme: e, isFocused: r }) => r ? e.colors.blue400 : e.colors.grey400};
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
`, zs = W.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${we}px;
  height: calc(${we}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.grey400};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.blue200};
  }
`, Hs = W.div`
  display: flex;
  align-items: center;
`;
W.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
W.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const js = W.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, mr = W.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e }) => e ? ue.colors.black : ue.colors.grey600};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, Fs = ({ id: e, item: r, rows: t, onItemClick: n }) => /* @__PURE__ */ V(
  zs,
  {
    title: r.title + " | " + r.subtitle,
    clickable: typeof n == "function",
    rows: t,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ V(Hs, { children: /* @__PURE__ */ Se(js, { children: [
      /* @__PURE__ */ V(mr, { isMain: !0, children: r.title }),
      r.subtitle && /* @__PURE__ */ V(mr, { children: r.subtitle })
    ] }) })
  }
), Bs = ({
  data: e,
  rows: r,
  onLoadNext: t,
  onLoadPrevious: n,
  pageNum: o,
  pagesAmount: s,
  searchInputValue: i,
  onSearchInputChange: a,
  onItemClick: l
}) => {
  const [c, u] = me(!1), { search: m } = dt(), p = () => u((y) => !y);
  return /* @__PURE__ */ Se(Ls, { children: [
    /* @__PURE__ */ V(Zs, { children: /* @__PURE__ */ Se(Ws, { isFocused: c, children: [
      /* @__PURE__ */ V(
        Ys,
        {
          placeholder: m,
          value: i,
          onChange: a,
          onFocus: p,
          onBlur: p
        }
      ),
      /* @__PURE__ */ V(pr, { iconName: "search" })
    ] }) }),
    e.map((y, w) => /* @__PURE__ */ V(
      Fs,
      {
        id: y.id,
        item: y.label,
        rows: r[w],
        onItemClick: l
      },
      y.id
    )),
    /* @__PURE__ */ V(
      Ns,
      {
        intent: "next",
        isVisible: o !== s - 1,
        onClick: t,
        icon: /* @__PURE__ */ V(pr, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: o,
        pagesAmount: s
      }
    )
  ] });
}, Vs = W.div`
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
`, Gs = Jn`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Us = W.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Gs} 1s infinite;
`, Xs = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ V(Vs, { position: r, children: /* @__PURE__ */ V(Us, {}) }) : null, vr = Xs, qs = ue.colors.white, Ve = (e) => {
  const {
    ctx: r,
    x: t,
    y: n,
    width: o,
    height: s,
    textYPos: i,
    label: a,
    font: l,
    isBottomRow: c,
    fillStyle: u,
    topText: m,
    bottomText: p
  } = e;
  if (r.beginPath(), r.strokeStyle = ue.colors.grey400, r.setLineDash([]), a && l && i) {
    r.fillStyle = qs, r.fillRect(t, n, o, s), r.strokeRect(t + 0.5, n + 0.5, o, s), r.font = l;
    const y = t + o / 2 - r.measureText(a).width / 2;
    r.textBaseline = "middle", r.fillStyle = ue.colors.grey600, r.fillText(a, y, i);
  }
  if (c && u && m && p) {
    r.fillStyle = u, r.fillRect(t, n, o, s), r.strokeRect(t + 0.5, n + 0.5, o, s), r.font = m.font;
    const y = t + o / 2 - r.measureText(m.label).width / 2;
    r.fillStyle = m.color, r.fillText(m.label, y, m.y), r.font = p.font;
    const w = t + o / 2 - r.measureText(p.label).width / 2;
    r.fillStyle = p.color, r.fillText(p.label, w, p.y);
  }
}, Ur = (e) => {
  const { isCurrent: r, isBusinessDay: t, variant: n } = e;
  return n === "yearView" ? r ? ue.colors.blue300 : ir : r ? ue.colors.blue300 : t ? ir : ue.colors.blue200;
}, It = (e) => {
  const { isCurrent: r, isBusinessDay: t, variant: n } = e;
  return r ? n === "bottomRow" ? ue.colors.grey600 : ue.colors.blue400 : t ? n === "bottomRow" ? ue.colors.grey600 : ue.colors.black : ue.colors.grey600;
}, Js = (e, r, t) => {
  const n = je - Ne / eo, o = je - Ne / to, s = _e + Be;
  let i = 0;
  for (let a = 0; a < r; a++) {
    const l = Yr(
      F(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    );
    Ve({
      ctx: e,
      x: i,
      y: s,
      width: pe,
      height: Ne,
      isBottomRow: !0,
      fillStyle: Ur({ isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay }),
      topText: {
        y: n,
        label: l.dayName.toUpperCase(),
        font: Oe.bottomRow.name,
        color: It({ isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay })
      },
      bottomText: {
        y: o,
        label: `${l.dayOfMonth}`,
        font: Oe.bottomRow.number,
        color: It({
          isCurrent: l.isCurrentDay,
          isBusinessDay: l.isBusinessDay,
          variant: "bottomRow"
        })
      }
    }), i += pe;
  }
}, Ks = (e, r, t) => {
  let n = -(t.dayOfMonth - 1) * Ee;
  const o = _e;
  let i = t.month;
  for (let a = 0; a < r; a++) {
    i >= Et && (i = 0);
    const l = Zr(t, a) * Ee;
    Ve({
      ctx: e,
      x: n,
      y: o,
      width: l,
      height: Be,
      textYPos: Nr,
      label: F().month(i).format("MMMM").toUpperCase(),
      font: Oe.bottomRow.number
    }), n += l, i++;
  }
}, Qs = (e, r) => {
  let n = 0, o = 0, s = 0, i = F(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  n = -r.dayOfMonth * pe + pe;
  for (let a = 0; a < Et; a++)
    i > Et - 1 && (i = 0, s++), o = F(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(a, "months").daysInMonth() * pe, Ve({
      ctx: e,
      x: n,
      y: 0,
      width: o,
      height: _e,
      textYPos: Ir,
      label: F(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("MMMM").toUpperCase() + ` ${F(`${r.year + s}-${r.month + 1}-${r.dayOfMonth}`).month(i).format("YYYY")}`,
      font: Oe.topRow
    }), n += o, i++;
}, ei = (e, r, t) => {
  const n = 7 * pe, o = _e, s = e.canvas.width / n + n, i = r.weekOfYear;
  let a = 0;
  for (let l = 0; l < s; l++) {
    const c = F(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (i + l) % sr;
    u <= 0 && (u += sr), c !== 1 && l === 0 && (a = -c * pe + pe), Ve({
      ctx: e,
      x: a,
      y: o,
      width: n,
      height: Be,
      textYPos: Nr,
      label: `${t.toUpperCase()} ${u}`,
      font: Oe.middleRow
    }), a += n;
  }
}, ti = (e, r, t, n) => {
  const o = je - Ne / 1.6, s = je - Ne / 4.5, i = _e + Be;
  let a = 0;
  for (let l = 0; l < r; l++) {
    const c = F(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      l,
      "weeks"
    ), u = c.isSame(F(), "week");
    Ve({
      ctx: e,
      x: a,
      y: i,
      width: Me,
      height: Ne,
      isBottomRow: !0,
      fillStyle: Ur({ isCurrent: u, variant: "yearView" }),
      topText: {
        y: o,
        label: c.isoWeek().toString(),
        font: Oe.bottomRow.name,
        color: It({ isCurrent: u })
      },
      bottomText: {
        y: s,
        label: n.toUpperCase(),
        font: Oe.middleRow,
        color: ue.colors.grey600
      }
    }), a += Me;
  }
}, ri = (e, r, t) => {
  const o = r.year, s = e.canvas.width * 2;
  let i = 0, a = 0, l = (lr(o) - t + 1) * Ee, c = 0;
  for (; i + c <= s; )
    a > 0 && (l = lr(o + a) * Ee), c + l > s && a > 0 && (l = Math.ceil((s - c) / Ee) * Ee), Ve({
      ctx: e,
      x: i,
      y: 0,
      width: l,
      height: _e,
      textYPos: Ir,
      label: (o + a).toString(),
      font: Oe.topRow
    }), i += l, c += l, a++;
}, ni = (e, r, t, n, o, s) => {
  r === 0 ? (ri(e, n, s), Ks(e, t, n), ti(e, t, n, o)) : (Qs(e, n), ei(e, n, o), Js(e, t, n));
}, oi = W.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, si = W.div`
  height: ${je}px;
  display: block;
`, ii = W.canvas``, ai = ({ zoom: e, topBarWidth: r }) => {
  const { week: t } = dt(), { date: n, cols: o, dayOfYear: s, startDate: i } = Qe(), a = ge(null), l = ve(
    (c) => {
      const u = window.innerWidth * Ce, m = je + 1;
      Hr(c, u, m), ni(c, e, o, i, t, s);
    },
    [o, s, i, t, e]
  );
  return fe(() => {
    if (!a.current)
      return;
    const c = a.current.getContext("2d");
    if (!c)
      return;
    const u = () => l(c);
    return window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, [l]), fe(() => {
    const c = a.current;
    if (!c)
      return;
    c.style.letterSpacing = "1px";
    const u = c.getContext("2d");
    u && l(u);
  }, [n, e, l]), /* @__PURE__ */ V(oi, { children: /* @__PURE__ */ V(si, { id: ro, children: /* @__PURE__ */ V(ii, { ref: a }) }) });
}, ci = (e, r, t) => {
  const n = t === 0 ? Ee : pe, o = () => {
    const s = (e.startDate.diff(r.startDate, "day") + 1) * n;
    return Math.max(0, s);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    const s = e.endDate.diff(e.startDate, "day") * n + n;
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    const s = e.endDate.diff(r.startDate, "day") * n + n;
    return { x: o(), width: s };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    const s = r.endDate.diff(e.startDate, "day") * n + n;
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    const s = r.endDate.diff(r.startDate, "day") * n + n;
    return { x: o(), width: s };
  }
  return { x: o(), width: 0 };
}, li = (e, r, t, n, o, s) => {
  const i = e * we + no, a = F(n).hour(0).minute(0), l = F(o).hour(23).minute(59);
  return {
    ...ci(
      { startDate: a, endDate: l },
      { startDate: r, endDate: t },
      s
    ),
    y: i
  };
}, ui = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, di = W.button`
  ${Fe}
  height: ${oo}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: white;
  width: 100%;
  cursor: pointer;
`, hi = W.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, fi = W.p`
  ${Fe}
  ${Or}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
`, pi = W.p`
  ${Fe}
  ${Or}
`, mi = W.div`
  position: sticky;
  left: ${Ae + 16}px;
  overflow: hidden;
`, vi = ({ row: e, data: r, zoom: t, onTileClick: n }) => {
  const { date: o } = Qe(), s = ut(o, t), { y: i, x: a, width: l } = li(
    e,
    s.startDate,
    s.endDate,
    r.startDate,
    r.endDate,
    t
  );
  return /* @__PURE__ */ V(
    di,
    {
      style: {
        left: `${a}px`,
        top: `${i}px`,
        backgroundColor: `${r.bgColor ?? ao}`,
        width: `${l}px`,
        color: ui(r.bgColor ?? "")
      },
      onClick: () => n == null ? void 0 : n(r),
      children: /* @__PURE__ */ V(hi, { children: /* @__PURE__ */ Se(mi, { children: [
        /* @__PURE__ */ V(fi, { bold: !0, children: r.title }),
        /* @__PURE__ */ V(pi, { children: r.description })
      ] }) })
    }
  );
}, yi = ({ data: e, zoom: r, onTileClick: t }) => {
  const n = ve(() => {
    let o = 0;
    return e.map((s, i) => (i > 0 && (o += Math.max(e[i - 1].data.length, 1)), s.data.map(
      (a, l) => a.map((c) => /* @__PURE__ */ V(
        vi,
        {
          row: l + o,
          data: c,
          zoom: r,
          onTileClick: t
        },
        c.id
      ))
    ))).flat(2);
  }, [e, t, r]);
  return /* @__PURE__ */ V(yr, { children: n() });
}, gi = yi;
W.div`
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
W.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
W.label`
  font-size: 14px;
`;
W.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
W.input`
  height: 18px;
  width: 18px;
`;
W.button`
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
W.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
W.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.blue900};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`;
W.div`
  width: 100%;
`;
W.div`
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
W.div``;
W.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`;
W.div`
  ${Fe}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.white};
  line-height: 12px;
  letter-spacing: 0.5px;
`;
W.p`
  ${Fe}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.white};
`;
W.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.red400};
`;
export {
  xi as Scheduler
};
