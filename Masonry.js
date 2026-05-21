/*! For license information please see masonry_default.min.js.LICENSE.txt */ ! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.masonry_default = t() : e.masonry_default = t()
}(self, () => (() => {
    var e, t, n, r, a = {
            961: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (e) {
                        console.error(e)
                    }
                }(), e.exports = n(6221)
            },
            1247: (e, t, n) => {
                "use strict";
                var r = n(9982),
                    a = n(6540),
                    o = n(961);

                function i(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                    }
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }

                function l(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function s(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            !!(4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function u(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
                    }
                    return null
                }

                function c(e) {
                    if (s(e) !== e) throw Error(i(188))
                }

                function d(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e;
                    for (e = e.child; null !== e;) {
                        if (null !== (t = d(e))) return t;
                        e = e.sibling
                    }
                    return null
                }
                var f = Object.assign,
                    p = Symbol.for("react.element"),
                    h = Symbol.for("react.transitional.element"),
                    m = Symbol.for("react.portal"),
                    g = Symbol.for("react.fragment"),
                    v = Symbol.for("react.strict_mode"),
                    y = Symbol.for("react.profiler"),
                    b = Symbol.for("react.provider"),
                    w = Symbol.for("react.consumer"),
                    _ = Symbol.for("react.context"),
                    x = Symbol.for("react.forward_ref"),
                    k = Symbol.for("react.suspense"),
                    S = Symbol.for("react.suspense_list"),
                    z = Symbol.for("react.memo"),
                    E = Symbol.for("react.lazy");
                Symbol.for("react.scope");
                var C = Symbol.for("react.activity");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
                var N = Symbol.for("react.memo_cache_sentinel");
                Symbol.for("react.view_transition");
                var P = Symbol.iterator;

                function O(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof(e = P && e[P] || e["@@iterator"]) ? e : null
                }
                var j = Symbol.for("react.client.reference");

                function L(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.$$typeof === j ? null : e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case g:
                            return "Fragment";
                        case y:
                            return "Profiler";
                        case v:
                            return "StrictMode";
                        case k:
                            return "Suspense";
                        case S:
                            return "SuspenseList";
                        case C:
                            return "Activity"
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case m:
                            return "Portal";
                        case _:
                            return (e.displayName || "Context") + ".Provider";
                        case w:
                            return (e._context.displayName || "Context") + ".Consumer";
                        case x:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case z:
                            return null !== (t = e.displayName || null) ? t : L(e.type) || "Memo";
                        case E:
                            t = e._payload, e = e._init;
                            try {
                                return L(e(t))
                            } catch (e) {}
                    }
                    return null
                }
                var T = Array.isArray,
                    R = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    M = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    A = {
                        pending: !1,
                        data: null,
                        method: null,
                        action: null
                    },
                    $ = [],
                    I = -1;

                function D(e) {
                    return {
                        current: e
                    }
                }

                function F(e) {
                    0 > I || (e.current = $[I], $[I] = null, I--)
                }

                function U(e, t) {
                    I++, $[I] = e.current, e.current = t
                }
                var V = D(null),
                    Z = D(null),
                    B = D(null),
                    H = D(null);

                function W(e, t) {
                    switch (U(B, t), U(Z, e), U(V, null), t.nodeType) {
                        case 9:
                        case 11:
                            e = (e = t.documentElement) && (e = e.namespaceURI) ? ad(e) : 0;
                            break;
                        default:
                            if (e = t.tagName, t = t.namespaceURI) e = od(t = ad(t), e);
                            else switch (e) {
                                case "svg":
                                    e = 1;
                                    break;
                                case "math":
                                    e = 2;
                                    break;
                                default:
                                    e = 0
                            }
                    }
                    F(V), U(V, e)
                }

                function q() {
                    F(V), F(Z), F(B)
                }

                function G(e) {
                    null !== e.memoizedState && U(H, e);
                    var t = V.current,
                        n = od(t, e.type);
                    t !== n && (U(Z, e), U(V, n))
                }

                function K(e) {
                    Z.current === e && (F(V), F(Z)), H.current === e && (F(H), Gd._currentValue = A)
                }
                var Q = Object.prototype.hasOwnProperty,
                    Y = r.unstable_scheduleCallback,
                    J = r.unstable_cancelCallback,
                    X = r.unstable_shouldYield,
                    ee = r.unstable_requestPaint,
                    te = r.unstable_now,
                    ne = r.unstable_getCurrentPriorityLevel,
                    re = r.unstable_ImmediatePriority,
                    ae = r.unstable_UserBlockingPriority,
                    oe = r.unstable_NormalPriority,
                    ie = r.unstable_LowPriority,
                    le = r.unstable_IdlePriority,
                    se = r.log,
                    ue = r.unstable_setDisableYieldValue,
                    ce = null,
                    de = null;

                function fe(e) {
                    if ("function" == typeof se && ue(e), de && "function" == typeof de.setStrictMode) try {
                        de.setStrictMode(ce, e)
                    } catch (e) {}
                }
                var pe = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 == (e >>>= 0) ? 32 : 31 - (he(e) / me | 0) | 0
                    },
                    he = Math.log,
                    me = Math.LN2,
                    ge = 256,
                    ve = 4194304;

                function ye(e) {
                    var t = 42 & e;
                    if (0 !== t) return t;
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                            return 64;
                        case 128:
                            return 128;
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194048 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            return 62914560 & e;
                        case 67108864:
                            return 67108864;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 0;
                        default:
                            return e
                    }
                }

                function be(e, t, n) {
                    var r = e.pendingLanes;
                    if (0 === r) return 0;
                    var a = 0,
                        o = e.suspendedLanes,
                        i = e.pingedLanes;
                    e = e.warmLanes;
                    var l = 134217727 & r;
                    return 0 !== l ? 0 !== (r = l & ~o) ? a = ye(r) : 0 !== (i &= l) ? a = ye(i) : n || 0 !== (n = l & ~e) && (a = ye(n)) : 0 !== (l = r & ~o) ? a = ye(l) : 0 !== i ? a = ye(i) : n || 0 !== (n = r & ~e) && (a = ye(n)), 0 === a ? 0 : 0 !== t && t !== a && 0 === (t & o) && ((o = a & -a) >= (n = t & -t) || 32 === o && 4194048 & n) ? t : a
                }

                function we(e, t) {
                    return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
                }

                function _e(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                        case 8:
                        case 64:
                            return t + 250;
                        case 16:
                        case 32:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function xe() {
                    var e = ge;
                    return !(4194048 & (ge <<= 1)) && (ge = 256), e
                }

                function ke() {
                    var e = ve;
                    return !(62914560 & (ve <<= 1)) && (ve = 4194304), e
                }

                function Se(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function ze(e, t) {
                    e.pendingLanes |= t, 268435456 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
                }

                function Ee(e, t, n) {
                    e.pendingLanes |= t, e.suspendedLanes &= ~t;
                    var r = 31 - pe(t);
                    e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 4194090 & n
                }

                function Ce(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - pe(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }

                function Ne(e) {
                    switch (e) {
                        case 2:
                            e = 1;
                            break;
                        case 8:
                            e = 4;
                            break;
                        case 32:
                            e = 16;
                            break;
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            e = 128;
                            break;
                        case 268435456:
                            e = 134217728;
                            break;
                        default:
                            e = 0
                    }
                    return e
                }

                function Pe(e) {
                    return 2 < (e &= -e) ? 8 < e ? 134217727 & e ? 32 : 268435456 : 8 : 2
                }

                function Oe() {
                    var e = M.p;
                    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : cf(e.type)
                }
                var je = Math.random().toString(36).slice(2),
                    Le = "__reactFiber$" + je,
                    Te = "__reactProps$" + je,
                    Re = "__reactContainer$" + je,
                    Me = "__reactEvents$" + je,
                    Ae = "__reactListeners$" + je,
                    $e = "__reactHandles$" + je,
                    Ie = "__reactResources$" + je,
                    De = "__reactMarker$" + je;

                function Fe(e) {
                    delete e[Le], delete e[Te], delete e[Me], delete e[Ae], delete e[$e]
                }

                function Ue(e) {
                    var t = e[Le];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[Re] || n[Le]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = bd(e); null !== e;) {
                                    if (n = e[Le]) return n;
                                    e = bd(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function Ve(e) {
                    if (e = e[Le] || e[Re]) {
                        var t = e.tag;
                        if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e
                    }
                    return null
                }

                function Ze(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
                    throw Error(i(33))
                }

                function Be(e) {
                    var t = e[Ie];
                    return t || (t = e[Ie] = {
                        hoistableStyles: new Map,
                        hoistableScripts: new Map
                    }), t
                }

                function He(e) {
                    e[De] = !0
                }
                var We = new Set,
                    qe = {};

                function Ge(e, t) {
                    Ke(e, t), Ke(e + "Capture", t)
                }

                function Ke(e, t) {
                    for (qe[e] = t, e = 0; e < t.length; e++) We.add(t[e])
                }
                var Qe, Ye, Je = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
                    Xe = {},
                    et = {};

                function tt(e, t, n) {
                    if (a = t, Q.call(et, a) || !Q.call(Xe, a) && (Je.test(a) ? et[a] = !0 : (Xe[a] = !0, 0)))
                        if (null === n) e.removeAttribute(t);
                        else {
                            switch (typeof n) {
                                case "undefined":
                                case "function":
                                case "symbol":
                                    return void e.removeAttribute(t);
                                case "boolean":
                                    var r = t.toLowerCase().slice(0, 5);
                                    if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t)
                            }
                            e.setAttribute(t, "" + n)
                        } var a
                }

                function nt(e, t, n) {
                    if (null === n) e.removeAttribute(t);
                    else {
                        switch (typeof n) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(t)
                        }
                        e.setAttribute(t, "" + n)
                    }
                }

                function rt(e, t, n, r) {
                    if (null === r) e.removeAttribute(n);
                    else {
                        switch (typeof r) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(n)
                        }
                        e.setAttributeNS(t, n, "" + r)
                    }
                }

                function at(e) {
                    if (void 0 === Qe) try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        Qe = t && t[1] || "", Ye = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
                    }
                    return "\n" + Qe + e + Ye
                }
                var ot = !1;

                function it(e, t) {
                    if (!e || ot) return "";
                    ot = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        var r = {
                            DetermineComponentFrameRoot: function() {
                                try {
                                    if (t) {
                                        var n = function() {
                                            throw Error()
                                        };
                                        if (Object.defineProperty(n.prototype, "props", {
                                                set: function() {
                                                    throw Error()
                                                }
                                            }), "object" == typeof Reflect && Reflect.construct) {
                                            try {
                                                Reflect.construct(n, [])
                                            } catch (e) {
                                                var r = e
                                            }
                                            Reflect.construct(e, [], n)
                                        } else {
                                            try {
                                                n.call()
                                            } catch (e) {
                                                r = e
                                            }
                                            e.call(n.prototype)
                                        }
                                    } else {
                                        try {
                                            throw Error()
                                        } catch (e) {
                                            r = e
                                        }(n = e()) && "function" == typeof n.catch && n.catch(function() {})
                                    }
                                } catch (e) {
                                    if (e && r && "string" == typeof e.stack) return [e.stack, r.stack]
                                }
                                return [null, null]
                            }
                        };
                        r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                        var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                        a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                            value: "DetermineComponentFrameRoot"
                        });
                        var o = r.DetermineComponentFrameRoot(),
                            i = o[0],
                            l = o[1];
                        if (i && l) {
                            var s = i.split("\n"),
                                u = l.split("\n");
                            for (a = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot");) r++;
                            for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                            if (r === s.length || a === u.length)
                                for (r = s.length - 1, a = u.length - 1; 1 <= r && 0 <= a && s[r] !== u[a];) a--;
                            for (; 1 <= r && 0 <= a; r--, a--)
                                if (s[r] !== u[a]) {
                                    if (1 !== r || 1 !== a)
                                        do {
                                            if (r--, 0 > --a || s[r] !== u[a]) {
                                                var c = "\n" + s[r].replace(" at new ", " at ");
                                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                            }
                                        } while (1 <= r && 0 <= a);
                                    break
                                }
                        }
                    } finally {
                        ot = !1, Error.prepareStackTrace = n
                    }
                    return (n = e ? e.displayName || e.name : "") ? at(n) : ""
                }

                function lt(e) {
                    switch (e.tag) {
                        case 26:
                        case 27:
                        case 5:
                            return at(e.type);
                        case 16:
                            return at("Lazy");
                        case 13:
                            return at("Suspense");
                        case 19:
                            return at("SuspenseList");
                        case 0:
                        case 15:
                            return it(e.type, !1);
                        case 11:
                            return it(e.type.render, !1);
                        case 1:
                            return it(e.type, !0);
                        case 31:
                            return at("Activity");
                        default:
                            return ""
                    }
                }

                function st(e) {
                    try {
                        var t = "";
                        do {
                            t += lt(e), e = e.return
                        } while (e);
                        return t
                    } catch (e) {
                        return "\nError generating stack: " + e.message + "\n" + e.stack
                    }
                }

                function ut(e) {
                    switch (typeof e) {
                        case "bigint":
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function ct(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function dt(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = ct(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                            var a = n.get,
                                o = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, o.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function ft(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = ct(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function pt(e) {
                    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }
                var ht = /[\n"\\]/g;

                function mt(e) {
                    return e.replace(ht, function(e) {
                        return "\\" + e.charCodeAt(0).toString(16) + " "
                    })
                }

                function gt(e, t, n, r, a, o, i, l) {
                    e.name = "", null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i ? e.type = i : e.removeAttribute("type"), null != t ? "number" === i ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + ut(t)) : e.value !== "" + ut(t) && (e.value = "" + ut(t)) : "submit" !== i && "reset" !== i || e.removeAttribute("value"), null != t ? yt(e, i, ut(t)) : null != n ? yt(e, i, ut(n)) : null != r && e.removeAttribute("value"), null == a && null != o && (e.defaultChecked = !!o), null != a && (e.checked = a && "function" != typeof a && "symbol" != typeof a), null != l && "function" != typeof l && "symbol" != typeof l && "boolean" != typeof l ? e.name = "" + ut(l) : e.removeAttribute("name")
                }

                function vt(e, t, n, r, a, o, i, l) {
                    if (null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.type = o), null != t || null != n) {
                        if (("submit" === o || "reset" === o) && null == t) return;
                        n = null != n ? "" + ut(n) : "", t = null != t ? "" + ut(t) : n, l || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    r = "function" != typeof(r = null != r ? r : a) && "symbol" != typeof r && !!r, e.checked = l ? e.checked : !!r, e.defaultChecked = !!r, null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i && (e.name = i)
                }

                function yt(e, t, n) {
                    "number" === t && pt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
                }

                function bt(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + ut(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function wt(e, t, n) {
                    null == t || ((t = "" + ut(t)) !== e.value && (e.value = t), null != n) ? e.defaultValue = null != n ? "" + ut(n) : "" : e.defaultValue !== t && (e.defaultValue = t)
                }

                function _t(e, t, n, r) {
                    if (null == t) {
                        if (null != r) {
                            if (null != n) throw Error(i(92));
                            if (T(r)) {
                                if (1 < r.length) throw Error(i(93));
                                r = r[0]
                            }
                            n = r
                        }
                        null == n && (n = ""), t = n
                    }
                    n = ut(t), e.defaultValue = n, (r = e.textContent) === n && "" !== r && null !== r && (e.value = r)
                }

                function xt(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var kt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

                function St(e, t, n) {
                    var r = 0 === t.indexOf("--");
                    null == n || "boolean" == typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" != typeof n || 0 === n || kt.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
                }

                function zt(e, t, n) {
                    if (null != t && "object" != typeof t) throw Error(i(62));
                    if (e = e.style, null != n) {
                        for (var r in n) !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
                        for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && St(e, a, r)
                    } else
                        for (var o in t) t.hasOwnProperty(o) && St(e, o, t[o])
                }

                function Et(e) {
                    if (-1 === e.indexOf("-")) return !1;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var Ct = new Map([
                        ["acceptCharset", "accept-charset"],
                        ["htmlFor", "for"],
                        ["httpEquiv", "http-equiv"],
                        ["crossOrigin", "crossorigin"],
                        ["accentHeight", "accent-height"],
                        ["alignmentBaseline", "alignment-baseline"],
                        ["arabicForm", "arabic-form"],
                        ["baselineShift", "baseline-shift"],
                        ["capHeight", "cap-height"],
                        ["clipPath", "clip-path"],
                        ["clipRule", "clip-rule"],
                        ["colorInterpolation", "color-interpolation"],
                        ["colorInterpolationFilters", "color-interpolation-filters"],
                        ["colorProfile", "color-profile"],
                        ["colorRendering", "color-rendering"],
                        ["dominantBaseline", "dominant-baseline"],
                        ["enableBackground", "enable-background"],
                        ["fillOpacity", "fill-opacity"],
                        ["fillRule", "fill-rule"],
                        ["floodColor", "flood-color"],
                        ["floodOpacity", "flood-opacity"],
                        ["fontFamily", "font-family"],
                        ["fontSize", "font-size"],
                        ["fontSizeAdjust", "font-size-adjust"],
                        ["fontStretch", "font-stretch"],
                        ["fontStyle", "font-style"],
                        ["fontVariant", "font-variant"],
                        ["fontWeight", "font-weight"],
                        ["glyphName", "glyph-name"],
                        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
                        ["glyphOrientationVertical", "glyph-orientation-vertical"],
                        ["horizAdvX", "horiz-adv-x"],
                        ["horizOriginX", "horiz-origin-x"],
                        ["imageRendering", "image-rendering"],
                        ["letterSpacing", "letter-spacing"],
                        ["lightingColor", "lighting-color"],
                        ["markerEnd", "marker-end"],
                        ["markerMid", "marker-mid"],
                        ["markerStart", "marker-start"],
                        ["overlinePosition", "overline-position"],
                        ["overlineThickness", "overline-thickness"],
                        ["paintOrder", "paint-order"],
                        ["panose-1", "panose-1"],
                        ["pointerEvents", "pointer-events"],
                        ["renderingIntent", "rendering-intent"],
                        ["shapeRendering", "shape-rendering"],
                        ["stopColor", "stop-color"],
                        ["stopOpacity", "stop-opacity"],
                        ["strikethroughPosition", "strikethrough-position"],
                        ["strikethroughThickness", "strikethrough-thickness"],
                        ["strokeDasharray", "stroke-dasharray"],
                        ["strokeDashoffset", "stroke-dashoffset"],
                        ["strokeLinecap", "stroke-linecap"],
                        ["strokeLinejoin", "stroke-linejoin"],
                        ["strokeMiterlimit", "stroke-miterlimit"],
                        ["strokeOpacity", "stroke-opacity"],
                        ["strokeWidth", "stroke-width"],
                        ["textAnchor", "text-anchor"],
                        ["textDecoration", "text-decoration"],
                        ["textRendering", "text-rendering"],
                        ["transformOrigin", "transform-origin"],
                        ["underlinePosition", "underline-position"],
                        ["underlineThickness", "underline-thickness"],
                        ["unicodeBidi", "unicode-bidi"],
                        ["unicodeRange", "unicode-range"],
                        ["unitsPerEm", "units-per-em"],
                        ["vAlphabetic", "v-alphabetic"],
                        ["vHanging", "v-hanging"],
                        ["vIdeographic", "v-ideographic"],
                        ["vMathematical", "v-mathematical"],
                        ["vectorEffect", "vector-effect"],
                        ["vertAdvY", "vert-adv-y"],
                        ["vertOriginX", "vert-origin-x"],
                        ["vertOriginY", "vert-origin-y"],
                        ["wordSpacing", "word-spacing"],
                        ["writingMode", "writing-mode"],
                        ["xmlnsXlink", "xmlns:xlink"],
                        ["xHeight", "x-height"]
                    ]),
                    Nt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

                function Pt(e) {
                    return Nt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
                }
                var Ot = null;

                function jt(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Lt = null,
                    Tt = null;

                function Rt(e) {
                    var t = Ve(e);
                    if (t && (e = t.stateNode)) {
                        var n = e[Te] || null;
                        e: switch (e = t.stateNode, t.type) {
                            case "input":
                                if (gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                                    for (n = e; n.parentNode;) n = n.parentNode;
                                    for (n = n.querySelectorAll('input[name="' + mt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                                        var r = n[t];
                                        if (r !== e && r.form === e.form) {
                                            var a = r[Te] || null;
                                            if (!a) throw Error(i(90));
                                            gt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                                        }
                                    }
                                    for (t = 0; t < n.length; t++)(r = n[t]).form === e.form && ft(r)
                                }
                                break e;
                            case "textarea":
                                wt(e, n.value, n.defaultValue);
                                break e;
                            case "select":
                                null != (t = n.value) && bt(e, !!n.multiple, t, !1)
                        }
                    }
                }
                var Mt = !1;

                function At(e, t, n) {
                    if (Mt) return e(t, n);
                    Mt = !0;
                    try {
                        return e(t)
                    } finally {
                        if (Mt = !1, (null !== Lt || null !== Tt) && (Uu(), Lt && (t = Lt, e = Tt, Tt = Lt = null, Rt(t), e)))
                            for (t = 0; t < e.length; t++) Rt(e[t])
                    }
                }

                function $t(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = n[Te] || null;
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var It = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                    Dt = !1;
                if (It) try {
                    var Ft = {};
                    Object.defineProperty(Ft, "passive", {
                        get: function() {
                            Dt = !0
                        }
                    }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft)
                } catch (e) {
                    Dt = !1
                }
                var Ut = null,
                    Vt = null,
                    Zt = null;

                function Bt() {
                    if (Zt) return Zt;
                    var e, t, n = Vt,
                        r = n.length,
                        a = "value" in Ut ? Ut.value : Ut.textContent,
                        o = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var i = r - e;
                    for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
                    return Zt = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function Ht(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function Wt() {
                    return !0
                }

                function qt() {
                    return !1
                }

                function Gt(e) {
                    function t(t, n, r, a, o) {
                        for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Wt : qt, this.isPropagationStopped = qt, this
                    }
                    return f(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Wt)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Wt)
                        },
                        persist: function() {},
                        isPersistent: Wt
                    }), t
                }
                var Kt, Qt, Yt, Jt = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    Xt = Gt(Jt),
                    en = f({}, Jt, {
                        view: 0,
                        detail: 0
                    }),
                    tn = Gt(en),
                    nn = f({}, en, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: hn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== Yt && (Yt && "mousemove" === e.type ? (Kt = e.screenX - Yt.screenX, Qt = e.screenY - Yt.screenY) : Qt = Kt = 0, Yt = e), Kt)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : Qt
                        }
                    }),
                    rn = Gt(nn),
                    an = Gt(f({}, nn, {
                        dataTransfer: 0
                    })),
                    on = Gt(f({}, en, {
                        relatedTarget: 0
                    })),
                    ln = Gt(f({}, Jt, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    sn = Gt(f({}, Jt, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    })),
                    un = Gt(f({}, Jt, {
                        data: 0
                    })),
                    cn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    dn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    fn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function pn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = fn[e]) && !!t[e]
                }

                function hn() {
                    return pn
                }
                var mn = Gt(f({}, en, {
                        key: function(e) {
                            if (e.key) {
                                var t = cn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = Ht(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? dn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: hn,
                        charCode: function(e) {
                            return "keypress" === e.type ? Ht(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? Ht(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    })),
                    gn = Gt(f({}, nn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    vn = Gt(f({}, en, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: hn
                    })),
                    yn = Gt(f({}, Jt, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    bn = Gt(f({}, nn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    })),
                    wn = Gt(f({}, Jt, {
                        newState: 0,
                        oldState: 0
                    })),
                    _n = [9, 13, 27, 32],
                    xn = It && "CompositionEvent" in window,
                    kn = null;
                It && "documentMode" in document && (kn = document.documentMode);
                var Sn = It && "TextEvent" in window && !kn,
                    zn = It && (!xn || kn && 8 < kn && 11 >= kn),
                    En = String.fromCharCode(32),
                    Cn = !1;

                function Nn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== _n.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Pn(e) {
                    return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var On = !1,
                    jn = {
                        color: !0,
                        date: !0,
                        datetime: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        password: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0
                    };

                function Ln(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!jn[e.type] : "textarea" === t
                }

                function Tn(e, t, n, r) {
                    Lt ? Tt ? Tt.push(r) : Tt = [r] : Lt = r, 0 < (t = Bc(t, "onChange")).length && (n = new Xt("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Rn = null,
                    Mn = null;

                function An(e) {
                    Ac(e, 0)
                }

                function $n(e) {
                    if (ft(Ze(e))) return e
                }

                function In(e, t) {
                    if ("change" === e) return t
                }
                var Dn = !1;
                if (It) {
                    var Fn;
                    if (It) {
                        var Un = "oninput" in document;
                        if (!Un) {
                            var Vn = document.createElement("div");
                            Vn.setAttribute("oninput", "return;"), Un = "function" == typeof Vn.oninput
                        }
                        Fn = Un
                    } else Fn = !1;
                    Dn = Fn && (!document.documentMode || 9 < document.documentMode)
                }

                function Zn() {
                    Rn && (Rn.detachEvent("onpropertychange", Bn), Mn = Rn = null)
                }

                function Bn(e) {
                    if ("value" === e.propertyName && $n(Mn)) {
                        var t = [];
                        Tn(t, Mn, e, jt(e)), At(An, t)
                    }
                }

                function Hn(e, t, n) {
                    "focusin" === e ? (Zn(), Mn = n, (Rn = t).attachEvent("onpropertychange", Bn)) : "focusout" === e && Zn()
                }

                function Wn(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return $n(Mn)
                }

                function qn(e, t) {
                    if ("click" === e) return $n(t)
                }

                function Gn(e, t) {
                    if ("input" === e || "change" === e) return $n(t)
                }
                var Kn = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                };

                function Qn(e, t) {
                    if (Kn(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!Q.call(t, a) || !Kn(e[a], t[a])) return !1
                    }
                    return !0
                }

                function Yn(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function Jn(e, t) {
                    var n, r = Yn(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = Yn(r)
                    }
                }

                function Xn(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Xn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function er(e) {
                    for (var t = pt((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" == typeof t.contentWindow.location.href
                        } catch (e) {
                            n = !1
                        }
                        if (!n) break;
                        t = pt((e = t.contentWindow).document)
                    }
                    return t
                }

                function tr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }
                var nr = It && "documentMode" in document && 11 >= document.documentMode,
                    rr = null,
                    ar = null,
                    or = null,
                    ir = !1;

                function lr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    ir || null == rr || rr !== pt(r) || (r = "selectionStart" in (r = rr) && tr(r) ? {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, or && Qn(or, r) || (or = r, 0 < (r = Bc(ar, "onSelect")).length && (t = new Xt("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = rr)))
                }

                function sr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var ur = {
                        animationend: sr("Animation", "AnimationEnd"),
                        animationiteration: sr("Animation", "AnimationIteration"),
                        animationstart: sr("Animation", "AnimationStart"),
                        transitionrun: sr("Transition", "TransitionRun"),
                        transitionstart: sr("Transition", "TransitionStart"),
                        transitioncancel: sr("Transition", "TransitionCancel"),
                        transitionend: sr("Transition", "TransitionEnd")
                    },
                    cr = {},
                    dr = {};

                function fr(e) {
                    if (cr[e]) return cr[e];
                    if (!ur[e]) return e;
                    var t, n = ur[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in dr) return cr[e] = n[t];
                    return e
                }
                It && (dr = document.createElement("div").style, "AnimationEvent" in window || (delete ur.animationend.animation, delete ur.animationiteration.animation, delete ur.animationstart.animation), "TransitionEvent" in window || delete ur.transitionend.transition);
                var pr = fr("animationend"),
                    hr = fr("animationiteration"),
                    mr = fr("animationstart"),
                    gr = fr("transitionrun"),
                    vr = fr("transitionstart"),
                    yr = fr("transitioncancel"),
                    br = fr("transitionend"),
                    wr = new Map,
                    _r = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function xr(e, t) {
                    wr.set(e, t), Ge(t, [e])
                }
                _r.push("scrollEnd");
                var kr = new WeakMap;

                function Sr(e, t) {
                    if ("object" == typeof e && null !== e) {
                        var n = kr.get(e);
                        return void 0 !== n ? n : (t = {
                            value: e,
                            source: t,
                            stack: st(t)
                        }, kr.set(e, t), t)
                    }
                    return {
                        value: e,
                        source: t,
                        stack: st(t)
                    }
                }
                var zr = [],
                    Er = 0,
                    Cr = 0;

                function Nr() {
                    for (var e = Er, t = Cr = Er = 0; t < e;) {
                        var n = zr[t];
                        zr[t++] = null;
                        var r = zr[t];
                        zr[t++] = null;
                        var a = zr[t];
                        zr[t++] = null;
                        var o = zr[t];
                        if (zr[t++] = null, null !== r && null !== a) {
                            var i = r.pending;
                            null === i ? a.next = a : (a.next = i.next, i.next = a), r.pending = a
                        }
                        0 !== o && Lr(n, a, o)
                    }
                }

                function Pr(e, t, n, r) {
                    zr[Er++] = e, zr[Er++] = t, zr[Er++] = n, zr[Er++] = r, Cr |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
                }

                function Or(e, t, n, r) {
                    return Pr(e, t, n, r), Tr(e)
                }

                function jr(e, t) {
                    return Pr(e, null, null, t), Tr(e)
                }

                function Lr(e, t, n) {
                    e.lanes |= n;
                    var r = e.alternate;
                    null !== r && (r.lanes |= n);
                    for (var a = !1, o = e.return; null !== o;) o.childLanes |= n, null !== (r = o.alternate) && (r.childLanes |= n), 22 === o.tag && (null === (e = o.stateNode) || 1 & e._visibility || (a = !0)), e = o, o = o.return;
                    return 3 === e.tag ? (o = e.stateNode, a && null !== t && (a = 31 - pe(n), null === (r = (e = o.hiddenUpdates)[a]) ? e[a] = [t] : r.push(t), t.lane = 536870912 | n), o) : null
                }

                function Tr(e) {
                    if (50 < Lu) throw Lu = 0, Tu = null, Error(i(185));
                    for (var t = e.return; null !== t;) t = (e = t).return;
                    return 3 === e.tag ? e.stateNode : null
                }
                var Rr = {};

                function Mr(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Ar(e, t, n, r) {
                    return new Mr(e, t, n, r)
                }

                function $r(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Ir(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Ar(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 65011712 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
                }

                function Dr(e, t) {
                    e.flags &= 65011714;
                    var n = e.alternate;
                    return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }), e
                }

                function Fr(e, t, n, r, a, o) {
                    var l = 0;
                    if (r = e, "function" == typeof e) $r(e) && (l = 1);
                    else if ("string" == typeof e) l = function(e, t, n) {
                        if (1 === n || null != t.itemProp) return !1;
                        switch (e) {
                            case "meta":
                            case "title":
                                return !0;
                            case "style":
                                if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href) break;
                                return !0;
                            case "link":
                                if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError) break;
                                return "stylesheet" !== t.rel || (e = t.disabled, "string" == typeof t.precedence && null == e);
                            case "script":
                                if (t.async && "function" != typeof t.async && "symbol" != typeof t.async && !t.onLoad && !t.onError && t.src && "string" == typeof t.src) return !0
                        }
                        return !1
                    }(e, n, V.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
                    else e: switch (e) {
                        case C:
                            return (e = Ar(31, n, t, a)).elementType = C, e.lanes = o, e;
                        case g:
                            return Ur(n.children, a, o, t);
                        case v:
                            l = 8, a |= 24;
                            break;
                        case y:
                            return (e = Ar(12, n, t, 2 | a)).elementType = y, e.lanes = o, e;
                        case k:
                            return (e = Ar(13, n, t, a)).elementType = k, e.lanes = o, e;
                        case S:
                            return (e = Ar(19, n, t, a)).elementType = S, e.lanes = o, e;
                        default:
                            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                                case b:
                                case _:
                                    l = 10;
                                    break e;
                                case w:
                                    l = 9;
                                    break e;
                                case x:
                                    l = 11;
                                    break e;
                                case z:
                                    l = 14;
                                    break e;
                                case E:
                                    l = 16, r = null;
                                    break e
                            }
                            l = 29, n = Error(i(130, null === e ? "null" : typeof e, "")), r = null
                    }
                    return (t = Ar(l, n, t, a)).elementType = e, t.type = r, t.lanes = o, t
                }

                function Ur(e, t, n, r) {
                    return (e = Ar(7, e, r, t)).lanes = n, e
                }

                function Vr(e, t, n) {
                    return (e = Ar(6, e, null, t)).lanes = n, e
                }

                function Zr(e, t, n) {
                    return (t = Ar(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }
                var Br = [],
                    Hr = 0,
                    Wr = null,
                    qr = 0,
                    Gr = [],
                    Kr = 0,
                    Qr = null,
                    Yr = 1,
                    Jr = "";

                function Xr(e, t) {
                    Br[Hr++] = qr, Br[Hr++] = Wr, Wr = e, qr = t
                }

                function ea(e, t, n) {
                    Gr[Kr++] = Yr, Gr[Kr++] = Jr, Gr[Kr++] = Qr, Qr = e;
                    var r = Yr;
                    e = Jr;
                    var a = 32 - pe(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var o = 32 - pe(t) + a;
                    if (30 < o) {
                        var i = a - a % 5;
                        o = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Yr = 1 << 32 - pe(t) + a | n << a | r, Jr = o + e
                    } else Yr = 1 << o | n << a | r, Jr = e
                }

                function ta(e) {
                    null !== e.return && (Xr(e, 1), ea(e, 1, 0))
                }

                function na(e) {
                    for (; e === Wr;) Wr = Br[--Hr], Br[Hr] = null, qr = Br[--Hr], Br[Hr] = null;
                    for (; e === Qr;) Qr = Gr[--Kr], Gr[Kr] = null, Jr = Gr[--Kr], Gr[Kr] = null, Yr = Gr[--Kr], Gr[Kr] = null
                }
                var ra = null,
                    aa = null,
                    oa = !1,
                    ia = null,
                    la = !1,
                    sa = Error(i(519));

                function ua(e) {
                    throw ma(Sr(Error(i(418, "")), e)), sa
                }

                function ca(e) {
                    var t = e.stateNode,
                        n = e.type,
                        r = e.memoizedProps;
                    switch (t[Le] = e, t[Te] = r, n) {
                        case "dialog":
                            $c("cancel", t), $c("close", t);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            $c("load", t);
                            break;
                        case "video":
                        case "audio":
                            for (n = 0; n < Rc.length; n++) $c(Rc[n], t);
                            break;
                        case "source":
                            $c("error", t);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            $c("error", t), $c("load", t);
                            break;
                        case "details":
                            $c("toggle", t);
                            break;
                        case "input":
                            $c("invalid", t), vt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), dt(t);
                            break;
                        case "select":
                            $c("invalid", t);
                            break;
                        case "textarea":
                            $c("invalid", t), _t(t, r.value, r.defaultValue, r.children), dt(t)
                    }
                    "string" != typeof(n = r.children) && "number" != typeof n && "bigint" != typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Qc(t.textContent, n) ? (null != r.popover && ($c("beforetoggle", t), $c("toggle", t)), null != r.onScroll && $c("scroll", t), null != r.onScrollEnd && $c("scrollend", t), null != r.onClick && (t.onclick = Yc), t = !0) : t = !1, t || ua(e)
                }

                function da(e) {
                    for (ra = e.return; ra;) switch (ra.tag) {
                        case 5:
                        case 13:
                            return void(la = !1);
                        case 27:
                        case 3:
                            return void(la = !0);
                        default:
                            ra = ra.return
                    }
                }

                function fa(e) {
                    if (e !== ra) return !1;
                    if (!oa) return da(e), oa = !0, !1;
                    var t, n = e.tag;
                    if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !("form" !== (t = e.type) && "button" !== t) || id(e.type, e.memoizedProps)), t = !t), t && aa && ua(e), da(e), 13 === n) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, n = 0; e;) {
                                if (8 === e.nodeType)
                                    if ("/$" === (t = e.data)) {
                                        if (0 === n) {
                                            aa = vd(e.nextSibling);
                                            break e
                                        }
                                        n--
                                    } else "$" !== t && "$!" !== t && "$?" !== t || n++;
                                e = e.nextSibling
                            }
                            aa = null
                        }
                    } else 27 === n ? (n = aa, pd(e.type) ? (e = yd, yd = null, aa = e) : aa = n) : aa = ra ? vd(e.stateNode.nextSibling) : null;
                    return !0
                }

                function pa() {
                    aa = ra = null, oa = !1
                }

                function ha() {
                    var e = ia;
                    return null !== e && (null === bu ? bu = e : bu.push.apply(bu, e), ia = null), e
                }

                function ma(e) {
                    null === ia ? ia = [e] : ia.push(e)
                }
                var ga = D(null),
                    va = null,
                    ya = null;

                function ba(e, t, n) {
                    U(ga, t._currentValue), t._currentValue = n
                }

                function wa(e) {
                    e._currentValue = ga.current, F(ga)
                }

                function _a(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function xa(e, t, n, r) {
                    var a = e.child;
                    for (null !== a && (a.return = e); null !== a;) {
                        var o = a.dependencies;
                        if (null !== o) {
                            var l = a.child;
                            o = o.firstContext;
                            e: for (; null !== o;) {
                                var s = o;
                                o = a;
                                for (var u = 0; u < t.length; u++)
                                    if (s.context === t[u]) {
                                        o.lanes |= n, null !== (s = o.alternate) && (s.lanes |= n), _a(o.return, n, e), r || (l = null);
                                        break e
                                    } o = s.next
                            }
                        } else if (18 === a.tag) {
                            if (null === (l = a.return)) throw Error(i(341));
                            l.lanes |= n, null !== (o = l.alternate) && (o.lanes |= n), _a(l, n, e), l = null
                        } else l = a.child;
                        if (null !== l) l.return = a;
                        else
                            for (l = a; null !== l;) {
                                if (l === e) {
                                    l = null;
                                    break
                                }
                                if (null !== (a = l.sibling)) {
                                    a.return = l.return, l = a;
                                    break
                                }
                                l = l.return
                            }
                        a = l
                    }
                }

                function ka(e, t, n, r) {
                    e = null;
                    for (var a = t, o = !1; null !== a;) {
                        if (!o)
                            if (524288 & a.flags) o = !0;
                            else if (262144 & a.flags) break;
                        if (10 === a.tag) {
                            var l = a.alternate;
                            if (null === l) throw Error(i(387));
                            if (null !== (l = l.memoizedProps)) {
                                var s = a.type;
                                Kn(a.pendingProps.value, l.value) || (null !== e ? e.push(s) : e = [s])
                            }
                        } else if (a === H.current) {
                            if (null === (l = a.alternate)) throw Error(i(387));
                            l.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(Gd) : e = [Gd])
                        }
                        a = a.return
                    }
                    null !== e && xa(t, e, n, r), t.flags |= 262144
                }

                function Sa(e) {
                    for (e = e.firstContext; null !== e;) {
                        if (!Kn(e.context._currentValue, e.memoizedValue)) return !0;
                        e = e.next
                    }
                    return !1
                }

                function za(e) {
                    va = e, ya = null, null !== (e = e.dependencies) && (e.firstContext = null)
                }

                function Ea(e) {
                    return Na(va, e)
                }

                function Ca(e, t) {
                    return null === va && za(e), Na(e, t)
                }

                function Na(e, t) {
                    var n = t._currentValue;
                    if (t = {
                            context: t,
                            memoizedValue: n,
                            next: null
                        }, null === ya) {
                        if (null === e) throw Error(i(308));
                        ya = t, e.dependencies = {
                            lanes: 0,
                            firstContext: t
                        }, e.flags |= 524288
                    } else ya = ya.next = t;
                    return n
                }
                var Pa = "undefined" != typeof AbortController ? AbortController : function() {
                        var e = [],
                            t = this.signal = {
                                aborted: !1,
                                addEventListener: function(t, n) {
                                    e.push(n)
                                }
                            };
                        this.abort = function() {
                            t.aborted = !0, e.forEach(function(e) {
                                return e()
                            })
                        }
                    },
                    Oa = r.unstable_scheduleCallback,
                    ja = r.unstable_NormalPriority,
                    La = {
                        $$typeof: _,
                        Consumer: null,
                        Provider: null,
                        _currentValue: null,
                        _currentValue2: null,
                        _threadCount: 0
                    };

                function Ta() {
                    return {
                        controller: new Pa,
                        data: new Map,
                        refCount: 0
                    }
                }

                function Ra(e) {
                    e.refCount--, 0 === e.refCount && Oa(ja, function() {
                        e.controller.abort()
                    })
                }
                var Ma = null,
                    Aa = 0,
                    $a = 0,
                    Ia = null;

                function Da() {
                    if (0 === --Aa && null !== Ma) {
                        null !== Ia && (Ia.status = "fulfilled");
                        var e = Ma;
                        Ma = null, $a = 0, Ia = null;
                        for (var t = 0; t < e.length; t++)(0, e[t])()
                    }
                }
                var Fa = R.S;
                R.S = function(e, t) {
                    "object" == typeof t && null !== t && "function" == typeof t.then && function(e, t) {
                        if (null === Ma) {
                            var n = Ma = [];
                            Aa = 0, $a = Pc(), Ia = {
                                status: "pending",
                                value: void 0,
                                then: function(e) {
                                    n.push(e)
                                }
                            }
                        }
                        Aa++, t.then(Da, Da)
                    }(0, t), null !== Fa && Fa(e, t)
                };
                var Ua = D(null);

                function Va() {
                    var e = Ua.current;
                    return null !== e ? e : ru.pooledCache
                }

                function Za(e, t) {
                    U(Ua, null === t ? Ua.current : t.pool)
                }

                function Ba() {
                    var e = Va();
                    return null === e ? null : {
                        parent: La._currentValue,
                        pool: e
                    }
                }
                var Ha = Error(i(460)),
                    Wa = Error(i(474)),
                    qa = Error(i(542)),
                    Ga = {
                        then: function() {}
                    };

                function Ka(e) {
                    return "fulfilled" === (e = e.status) || "rejected" === e
                }

                function Qa() {}

                function Ya(e, t, n) {
                    switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Qa, Qa), t = n), t.status) {
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw eo(e = t.reason), e;
                        default:
                            if ("string" == typeof t.status) t.then(Qa, Qa);
                            else {
                                if (null !== (e = ru) && 100 < e.shellSuspendCounter) throw Error(i(482));
                                (e = t).status = "pending", e.then(function(e) {
                                    if ("pending" === t.status) {
                                        var n = t;
                                        n.status = "fulfilled", n.value = e
                                    }
                                }, function(e) {
                                    if ("pending" === t.status) {
                                        var n = t;
                                        n.status = "rejected", n.reason = e
                                    }
                                })
                            }
                            switch (t.status) {
                                case "fulfilled":
                                    return t.value;
                                case "rejected":
                                    throw eo(e = t.reason), e
                            }
                            throw Ja = t, Ha
                    }
                }
                var Ja = null;

                function Xa() {
                    if (null === Ja) throw Error(i(459));
                    var e = Ja;
                    return Ja = null, e
                }

                function eo(e) {
                    if (e === Ha || e === qa) throw Error(i(483))
                }
                var to = !1;

                function no(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            lanes: 0,
                            hiddenCallbacks: null
                        },
                        callbacks: null
                    }
                }

                function ro(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        callbacks: null
                    })
                }

                function ao(e) {
                    return {
                        lane: e,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function oo(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 2 & nu) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = Tr(e), Lr(e, null, n), t
                    }
                    return Pr(e, r, t, n), Tr(e)
                }

                function io(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 4194048 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, Ce(e, n)
                    }
                }

                function lo(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var i = {
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: null,
                                    next: null
                                };
                                null === o ? a = o = i : o = o.next = i, n = n.next
                            } while (null !== n);
                            null === o ? a = o = t : o = o.next = t
                        } else a = o = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: o,
                            shared: r.shared,
                            callbacks: r.callbacks
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }
                var so = !1;

                function uo() {
                    if (so && null !== Ia) throw Ia
                }

                function co(e, t, n, r) {
                    so = !1;
                    var a = e.updateQueue;
                    to = !1;
                    var o = a.firstBaseUpdate,
                        i = a.lastBaseUpdate,
                        l = a.shared.pending;
                    if (null !== l) {
                        a.shared.pending = null;
                        var s = l,
                            u = s.next;
                        s.next = null, null === i ? o = u : i.next = u, i = s;
                        var c = e.alternate;
                        null !== c && (l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s)
                    }
                    if (null !== o) {
                        var d = a.baseState;
                        for (i = 0, c = u = s = null, l = o;;) {
                            var p = -536870913 & l.lane,
                                h = p !== l.lane;
                            if (h ? (ou & p) === p : (r & p) === p) {
                                0 !== p && p === $a && (so = !0), null !== c && (c = c.next = {
                                    lane: 0,
                                    tag: l.tag,
                                    payload: l.payload,
                                    callback: null,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        g = l;p = t;
                                    var v = n;
                                    switch (g.tag) {
                                        case 1:
                                            if ("function" == typeof(m = g.payload)) {
                                                d = m.call(v, d, p);
                                                break e
                                            }
                                            d = m;
                                            break e;
                                        case 3:
                                            m.flags = -65537 & m.flags | 128;
                                        case 0:
                                            if (null == (p = "function" == typeof(m = g.payload) ? m.call(v, d, p) : m)) break e;
                                            d = f({}, d, p);
                                            break e;
                                        case 2:
                                            to = !0
                                    }
                                }
                                null !== (p = l.callback) && (e.flags |= 64, h && (e.flags |= 8192), null === (h = a.callbacks) ? a.callbacks = [p] : h.push(p))
                            } else h = {
                                lane: p,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            }, null === c ? (u = c = h, s = d) : c = c.next = h, i |= p;
                            if (null === (l = l.next)) {
                                if (null === (l = a.shared.pending)) break;
                                l = (h = l).next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null
                            }
                        }
                        null === c && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null === o && (a.shared.lanes = 0), pu |= i, e.lanes = i, e.memoizedState = d
                    }
                }

                function fo(e, t) {
                    if ("function" != typeof e) throw Error(i(191, e));
                    e.call(t)
                }

                function po(e, t) {
                    var n = e.callbacks;
                    if (null !== n)
                        for (e.callbacks = null, e = 0; e < n.length; e++) fo(n[e], t)
                }
                var ho = D(null),
                    mo = D(0);

                function go(e, t) {
                    U(mo, e = du), U(ho, t), du = e | t.baseLanes
                }

                function vo() {
                    U(mo, du), U(ho, ho.current)
                }

                function yo() {
                    du = mo.current, F(ho), F(mo)
                }
                var bo = 0,
                    wo = null,
                    _o = null,
                    xo = null,
                    ko = !1,
                    So = !1,
                    zo = !1,
                    Eo = 0,
                    Co = 0,
                    No = null,
                    Po = 0;

                function Oo() {
                    throw Error(i(321))
                }

                function jo(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!Kn(e[n], t[n])) return !1;
                    return !0
                }

                function Lo(e, t, n, r, a, o) {
                    return bo = o, wo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = null === e || null === e.memoizedState ? Wi : qi, zo = !1, o = n(r, a), zo = !1, So && (o = Ro(t, n, r, a)), To(e), o
                }

                function To(e) {
                    R.H = Hi;
                    var t = null !== _o && null !== _o.next;
                    if (bo = 0, xo = _o = wo = null, ko = !1, Co = 0, No = null, t) throw Error(i(300));
                    null === e || Cl || null !== (e = e.dependencies) && Sa(e) && (Cl = !0)
                }

                function Ro(e, t, n, r) {
                    wo = e;
                    var a = 0;
                    do {
                        if (So && (No = null), Co = 0, So = !1, 25 <= a) throw Error(i(301));
                        if (a += 1, xo = _o = null, null != e.updateQueue) {
                            var o = e.updateQueue;
                            o.lastEffect = null, o.events = null, o.stores = null, null != o.memoCache && (o.memoCache.index = 0)
                        }
                        R.H = Gi, o = t(n, r)
                    } while (So);
                    return o
                }

                function Mo() {
                    var e = R.H,
                        t = e.useState()[0];
                    return t = "function" == typeof t.then ? Uo(t) : t, e = e.useState()[0], (null !== _o ? _o.memoizedState : null) !== e && (wo.flags |= 1024), t
                }

                function Ao() {
                    var e = 0 !== Eo;
                    return Eo = 0, e
                }

                function $o(e, t, n) {
                    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
                }

                function Io(e) {
                    if (ko) {
                        for (e = e.memoizedState; null !== e;) {
                            var t = e.queue;
                            null !== t && (t.pending = null), e = e.next
                        }
                        ko = !1
                    }
                    bo = 0, xo = _o = wo = null, So = !1, Co = Eo = 0, No = null
                }

                function Do() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === xo ? wo.memoizedState = xo = e : xo = xo.next = e, xo
                }

                function Fo() {
                    if (null === _o) {
                        var e = wo.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = _o.next;
                    var t = null === xo ? wo.memoizedState : xo.next;
                    if (null !== t) xo = t, _o = e;
                    else {
                        if (null === e) {
                            if (null === wo.alternate) throw Error(i(467));
                            throw Error(i(310))
                        }
                        e = {
                            memoizedState: (_o = e).memoizedState,
                            baseState: _o.baseState,
                            baseQueue: _o.baseQueue,
                            queue: _o.queue,
                            next: null
                        }, null === xo ? wo.memoizedState = xo = e : xo = xo.next = e
                    }
                    return xo
                }

                function Uo(e) {
                    var t = Co;
                    return Co += 1, null === No && (No = []), e = Ya(No, e, t), t = wo, null === (null === xo ? t.memoizedState : xo.next) && (t = t.alternate, R.H = null === t || null === t.memoizedState ? Wi : qi), e
                }

                function Vo(e) {
                    if (null !== e && "object" == typeof e) {
                        if ("function" == typeof e.then) return Uo(e);
                        if (e.$$typeof === _) return Ea(e)
                    }
                    throw Error(i(438, String(e)))
                }

                function Zo(e) {
                    var t = null,
                        n = wo.updateQueue;
                    if (null !== n && (t = n.memoCache), null == t) {
                        var r = wo.alternate;
                        null !== r && null !== (r = r.updateQueue) && null != (r = r.memoCache) && (t = {
                            data: r.data.map(function(e) {
                                return e.slice()
                            }),
                            index: 0
                        })
                    }
                    if (null == t && (t = {
                            data: [],
                            index: 0
                        }), null === n && (n = {
                            lastEffect: null,
                            events: null,
                            stores: null,
                            memoCache: null
                        }, wo.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
                        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = N;
                    return t.index++, n
                }

                function Bo(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function Ho(e) {
                    return Wo(Fo(), _o, e)
                }

                function Wo(e, t, n) {
                    var r = e.queue;
                    if (null === r) throw Error(i(311));
                    r.lastRenderedReducer = n;
                    var a = e.baseQueue,
                        o = r.pending;
                    if (null !== o) {
                        if (null !== a) {
                            var l = a.next;
                            a.next = o.next, o.next = l
                        }
                        t.baseQueue = a = o, r.pending = null
                    }
                    if (o = e.baseState, null === a) e.memoizedState = o;
                    else {
                        var s = l = null,
                            u = null,
                            c = t = a.next,
                            d = !1;
                        do {
                            var f = -536870913 & c.lane;
                            if (f !== c.lane ? (ou & f) === f : (bo & f) === f) {
                                var p = c.revertLane;
                                if (0 === p) null !== u && (u = u.next = {
                                    lane: 0,
                                    revertLane: 0,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                }), f === $a && (d = !0);
                                else {
                                    if ((bo & p) === p) {
                                        c = c.next, p === $a && (d = !0);
                                        continue
                                    }
                                    f = {
                                        lane: 0,
                                        revertLane: c.revertLane,
                                        action: c.action,
                                        hasEagerState: c.hasEagerState,
                                        eagerState: c.eagerState,
                                        next: null
                                    }, null === u ? (s = u = f, l = o) : u = u.next = f, wo.lanes |= p, pu |= p
                                }
                                f = c.action, zo && n(o, f), o = c.hasEagerState ? c.eagerState : n(o, f)
                            } else p = {
                                lane: f,
                                revertLane: c.revertLane,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }, null === u ? (s = u = p, l = o) : u = u.next = p, wo.lanes |= f, pu |= f;
                            c = c.next
                        } while (null !== c && c !== t);
                        if (null === u ? l = o : u.next = s, !Kn(o, e.memoizedState) && (Cl = !0, d && null !== (n = Ia))) throw n;
                        e.memoizedState = o, e.baseState = l, e.baseQueue = u, r.lastRenderedState = o
                    }
                    return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]
                }

                function qo(e) {
                    var t = Fo(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        o = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var l = a = a.next;
                        do {
                            o = e(o, l.action), l = l.next
                        } while (l !== a);
                        Kn(o, t.memoizedState) || (Cl = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                    }
                    return [o, r]
                }

                function Go(e, t, n) {
                    var r = wo,
                        a = Fo(),
                        o = oa;
                    if (o) {
                        if (void 0 === n) throw Error(i(407));
                        n = n()
                    } else n = t();
                    var l = !Kn((_o || a).memoizedState, n);
                    if (l && (a.memoizedState = n, Cl = !0), a = a.queue, vi(2048, 8, Yo.bind(null, r, a, e), [e]), a.getSnapshot !== t || l || null !== xo && 1 & xo.memoizedState.tag) {
                        if (r.flags |= 2048, hi(9, {
                                destroy: void 0,
                                resource: void 0
                            }, Qo.bind(null, r, a, n, t), null), null === ru) throw Error(i(349));
                        o || 124 & bo || Ko(r, t, n)
                    }
                    return n
                }

                function Ko(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = wo.updateQueue) ? (t = {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }, wo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Qo(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Jo(t) && Xo(e)
                }

                function Yo(e, t, n) {
                    return n(function() {
                        Jo(t) && Xo(e)
                    })
                }

                function Jo(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !Kn(e, n)
                    } catch (e) {
                        return !0
                    }
                }

                function Xo(e) {
                    var t = jr(e, 2);
                    null !== t && Au(t, 0, 2)
                }

                function ei(e) {
                    var t = Do();
                    if ("function" == typeof e) {
                        var n = e;
                        if (e = n(), zo) {
                            fe(!0);
                            try {
                                n()
                            } finally {
                                fe(!1)
                            }
                        }
                    }
                    return t.memoizedState = t.baseState = e, t.queue = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: Bo,
                        lastRenderedState: e
                    }, t
                }

                function ti(e, t, n, r) {
                    return e.baseState = n, Wo(e, _o, "function" == typeof r ? r : Bo)
                }

                function ni(e, t, n, r, a) {
                    if (Vi(e)) throw Error(i(485));
                    if (null !== (e = t.action)) {
                        var o = {
                            payload: a,
                            action: e,
                            next: null,
                            isTransition: !0,
                            status: "pending",
                            value: null,
                            reason: null,
                            listeners: [],
                            then: function(e) {
                                o.listeners.push(e)
                            }
                        };
                        null !== R.T ? n(!0) : o.isTransition = !1, r(o), null === (n = t.pending) ? (o.next = t.pending = o, ri(t, o)) : (o.next = n.next, t.pending = n.next = o)
                    }
                }

                function ri(e, t) {
                    var n = t.action,
                        r = t.payload,
                        a = e.state;
                    if (t.isTransition) {
                        var o = R.T,
                            i = {};
                        R.T = i;
                        try {
                            var l = n(a, r),
                                s = R.S;
                            null !== s && s(i, l), ai(e, t, l)
                        } catch (n) {
                            ii(e, t, n)
                        } finally {
                            R.T = o
                        }
                    } else try {
                        ai(e, t, o = n(a, r))
                    } catch (n) {
                        ii(e, t, n)
                    }
                }

                function ai(e, t, n) {
                    null !== n && "object" == typeof n && "function" == typeof n.then ? n.then(function(n) {
                        oi(e, t, n)
                    }, function(n) {
                        return ii(e, t, n)
                    }) : oi(e, t, n)
                }

                function oi(e, t, n) {
                    t.status = "fulfilled", t.value = n, li(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, ri(e, n)))
                }

                function ii(e, t, n) {
                    var r = e.pending;
                    if (e.pending = null, null !== r) {
                        r = r.next;
                        do {
                            t.status = "rejected", t.reason = n, li(t), t = t.next
                        } while (t !== r)
                    }
                    e.action = null
                }

                function li(e) {
                    e = e.listeners;
                    for (var t = 0; t < e.length; t++)(0, e[t])()
                }

                function si(e, t) {
                    return t
                }

                function ui(e, t) {
                    if (oa) {
                        var n = ru.formState;
                        if (null !== n) {
                            e: {
                                var r = wo;
                                if (oa) {
                                    if (aa) {
                                        t: {
                                            for (var a = aa, o = la; 8 !== a.nodeType;) {
                                                if (!o) {
                                                    a = null;
                                                    break t
                                                }
                                                if (null === (a = vd(a.nextSibling))) {
                                                    a = null;
                                                    break t
                                                }
                                            }
                                            a = "F!" === (o = a.data) || "F" === o ? a : null
                                        }
                                        if (a) {
                                            aa = vd(a.nextSibling), r = "F!" === a.data;
                                            break e
                                        }
                                    }
                                    ua(r)
                                }
                                r = !1
                            }
                            r && (t = n[0])
                        }
                    }
                    return (n = Do()).memoizedState = n.baseState = t, r = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: si,
                        lastRenderedState: t
                    }, n.queue = r, n = Di.bind(null, wo, r), r.dispatch = n, r = ei(!1), o = Ui.bind(null, wo, !1, r.queue), a = {
                        state: t,
                        dispatch: null,
                        action: e,
                        pending: null
                    }, (r = Do()).queue = a, n = ni.bind(null, wo, a, o, n), a.dispatch = n, r.memoizedState = e, [t, n, !1]
                }

                function ci(e) {
                    return di(Fo(), _o, e)
                }

                function di(e, t, n) {
                    if (t = Wo(e, t, si)[0], e = Ho(Bo)[0], "object" == typeof t && null !== t && "function" == typeof t.then) try {
                        var r = Uo(t)
                    } catch (e) {
                        if (e === Ha) throw qa;
                        throw e
                    } else r = t;
                    var a = (t = Fo()).queue,
                        o = a.dispatch;
                    return n !== t.memoizedState && (wo.flags |= 2048, hi(9, {
                        destroy: void 0,
                        resource: void 0
                    }, fi.bind(null, a, n), null)), [r, o, e]
                }

                function fi(e, t) {
                    e.action = t
                }

                function pi(e) {
                    var t = Fo(),
                        n = _o;
                    if (null !== n) return di(t, n, e);
                    Fo(), t = t.memoizedState;
                    var r = (n = Fo()).queue.dispatch;
                    return n.memoizedState = e, [t, r, !1]
                }

                function hi(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: n,
                        deps: r,
                        inst: t,
                        next: null
                    }, null === (t = wo.updateQueue) && (t = {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }, wo.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function mi() {
                    return Fo().memoizedState
                }

                function gi(e, t, n, r) {
                    var a = Do();
                    r = void 0 === r ? null : r, wo.flags |= e, a.memoizedState = hi(1 | t, {
                        destroy: void 0,
                        resource: void 0
                    }, n, r)
                }

                function vi(e, t, n, r) {
                    var a = Fo();
                    r = void 0 === r ? null : r;
                    var o = a.memoizedState.inst;
                    null !== _o && null !== r && jo(r, _o.memoizedState.deps) ? a.memoizedState = hi(t, o, n, r) : (wo.flags |= e, a.memoizedState = hi(1 | t, o, n, r))
                }

                function yi(e, t) {
                    gi(8390656, 8, e, t)
                }

                function bi(e, t) {
                    vi(2048, 8, e, t)
                }

                function wi(e, t) {
                    return vi(4, 2, e, t)
                }

                function _i(e, t) {
                    return vi(4, 4, e, t)
                }

                function xi(e, t) {
                    if ("function" == typeof t) {
                        e = e();
                        var n = t(e);
                        return function() {
                            "function" == typeof n ? n() : t(null)
                        }
                    }
                    if (null != t) return e = e(), t.current = e,
                        function() {
                            t.current = null
                        }
                }

                function ki(e, t, n) {
                    n = null != n ? n.concat([e]) : null, vi(4, 4, xi.bind(null, t, e), n)
                }

                function Si() {}

                function zi(e, t) {
                    var n = Fo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== t && jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Ei(e, t) {
                    var n = Fo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    if (null !== t && jo(t, r[1])) return r[0];
                    if (r = e(), zo) {
                        fe(!0);
                        try {
                            e()
                        } finally {
                            fe(!1)
                        }
                    }
                    return n.memoizedState = [r, t], r
                }

                function Ci(e, t, n) {
                    return void 0 === n || 1073741824 & bo ? e.memoizedState = t : (e.memoizedState = n, e = Mu(), wo.lanes |= e, pu |= e, n)
                }

                function Ni(e, t, n, r) {
                    return Kn(n, t) ? n : null !== ho.current ? (e = Ci(e, n, r), Kn(e, t) || (Cl = !0), e) : 42 & bo ? (e = Mu(), wo.lanes |= e, pu |= e, t) : (Cl = !0, e.memoizedState = n)
                }

                function Pi(e, t, n, r, a) {
                    var o = M.p;
                    M.p = 0 !== o && 8 > o ? o : 8;
                    var i, l, s, u = R.T,
                        c = {};
                    R.T = c, Ui(e, !1, t, n);
                    try {
                        var d = a(),
                            f = R.S;
                        null !== f && f(c, d), null !== d && "object" == typeof d && "function" == typeof d.then ? Fi(e, t, (i = r, l = [], s = {
                            status: "pending",
                            value: null,
                            reason: null,
                            then: function(e) {
                                l.push(e)
                            }
                        }, d.then(function() {
                            s.status = "fulfilled", s.value = i;
                            for (var e = 0; e < l.length; e++)(0, l[e])(i)
                        }, function(e) {
                            for (s.status = "rejected", s.reason = e, e = 0; e < l.length; e++)(0, l[e])(void 0)
                        }), s), Ru()) : Fi(e, t, r, Ru())
                    } catch (n) {
                        Fi(e, t, {
                            then: function() {},
                            status: "rejected",
                            reason: n
                        }, Ru())
                    } finally {
                        M.p = o, R.T = u
                    }
                }

                function Oi() {}

                function ji(e, t, n, r) {
                    if (5 !== e.tag) throw Error(i(476));
                    var a = Li(e).queue;
                    Pi(e, a, t, A, null === n ? Oi : function() {
                        return Ti(e), n(r)
                    })
                }

                function Li(e) {
                    var t = e.memoizedState;
                    if (null !== t) return t;
                    var n = {};
                    return (t = {
                        memoizedState: A,
                        baseState: A,
                        baseQueue: null,
                        queue: {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: Bo,
                            lastRenderedState: A
                        },
                        next: null
                    }).next = {
                        memoizedState: n,
                        baseState: n,
                        baseQueue: null,
                        queue: {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: Bo,
                            lastRenderedState: n
                        },
                        next: null
                    }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
                }

                function Ti(e) {
                    Fi(e, Li(e).next.queue, {}, Ru())
                }

                function Ri() {
                    return Ea(Gd)
                }

                function Mi() {
                    return Fo().memoizedState
                }

                function Ai() {
                    return Fo().memoizedState
                }

                function $i(e) {
                    for (var t = e.return; null !== t;) {
                        switch (t.tag) {
                            case 24:
                            case 3:
                                var n = Ru(),
                                    r = oo(t, e = ao(n), n);
                                return null !== r && (Au(r, 0, n), io(r, t, n)), t = {
                                    cache: Ta()
                                }, void(e.payload = t)
                        }
                        t = t.return
                    }
                }

                function Ii(e, t, n) {
                    var r = Ru();
                    n = {
                        lane: r,
                        revertLane: 0,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, Vi(e) ? Zi(t, n) : null !== (n = Or(e, t, n, r)) && (Au(n, 0, r), Bi(n, t, r))
                }

                function Di(e, t, n) {
                    Fi(e, t, n, Ru())
                }

                function Fi(e, t, n, r) {
                    var a = {
                        lane: r,
                        revertLane: 0,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    };
                    if (Vi(e)) Zi(t, a);
                    else {
                        var o = e.alternate;
                        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
                            var i = t.lastRenderedState,
                                l = o(i, n);
                            if (a.hasEagerState = !0, a.eagerState = l, Kn(l, i)) return Pr(e, t, a, 0), null === ru && Nr(), !1
                        } catch (e) {}
                        if (null !== (n = Or(e, t, a, r))) return Au(n, 0, r), Bi(n, t, r), !0
                    }
                    return !1
                }

                function Ui(e, t, n, r) {
                    if (r = {
                            lane: 2,
                            revertLane: Pc(),
                            action: r,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, Vi(e)) {
                        if (t) throw Error(i(479))
                    } else null !== (t = Or(e, n, r, 2)) && Au(t, 0, 2)
                }

                function Vi(e) {
                    var t = e.alternate;
                    return e === wo || null !== t && t === wo
                }

                function Zi(e, t) {
                    So = ko = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function Bi(e, t, n) {
                    if (4194048 & n) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, Ce(e, n)
                    }
                }
                var Hi = {
                        readContext: Ea,
                        use: Vo,
                        useCallback: Oo,
                        useContext: Oo,
                        useEffect: Oo,
                        useImperativeHandle: Oo,
                        useLayoutEffect: Oo,
                        useInsertionEffect: Oo,
                        useMemo: Oo,
                        useReducer: Oo,
                        useRef: Oo,
                        useState: Oo,
                        useDebugValue: Oo,
                        useDeferredValue: Oo,
                        useTransition: Oo,
                        useSyncExternalStore: Oo,
                        useId: Oo,
                        useHostTransitionStatus: Oo,
                        useFormState: Oo,
                        useActionState: Oo,
                        useOptimistic: Oo,
                        useMemoCache: Oo,
                        useCacheRefresh: Oo
                    },
                    Wi = {
                        readContext: Ea,
                        use: Vo,
                        useCallback: function(e, t) {
                            return Do().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Ea,
                        useEffect: yi,
                        useImperativeHandle: function(e, t, n) {
                            n = null != n ? n.concat([e]) : null, gi(4194308, 4, xi.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return gi(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            gi(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = Do();
                            t = void 0 === t ? null : t;
                            var r = e();
                            if (zo) {
                                fe(!0);
                                try {
                                    e()
                                } finally {
                                    fe(!1)
                                }
                            }
                            return n.memoizedState = [r, t], r
                        },
                        useReducer: function(e, t, n) {
                            var r = Do();
                            if (void 0 !== n) {
                                var a = n(t);
                                if (zo) {
                                    fe(!0);
                                    try {
                                        n(t)
                                    } finally {
                                        fe(!1)
                                    }
                                }
                            } else a = t;
                            return r.memoizedState = r.baseState = a, e = {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: a
                            }, r.queue = e, e = e.dispatch = Ii.bind(null, wo, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, Do().memoizedState = e
                        },
                        useState: function(e) {
                            var t = (e = ei(e)).queue,
                                n = Di.bind(null, wo, t);
                            return t.dispatch = n, [e.memoizedState, n]
                        },
                        useDebugValue: Si,
                        useDeferredValue: function(e, t) {
                            return Ci(Do(), e, t)
                        },
                        useTransition: function() {
                            var e = ei(!1);
                            return e = Pi.bind(null, wo, e.queue, !0, !1), Do().memoizedState = e, [!1, e]
                        },
                        useSyncExternalStore: function(e, t, n) {
                            var r = wo,
                                a = Do();
                            if (oa) {
                                if (void 0 === n) throw Error(i(407));
                                n = n()
                            } else {
                                if (n = t(), null === ru) throw Error(i(349));
                                124 & ou || Ko(r, t, n)
                            }
                            a.memoizedState = n;
                            var o = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = o, yi(Yo.bind(null, r, o, e), [e]), r.flags |= 2048, hi(9, {
                                destroy: void 0,
                                resource: void 0
                            }, Qo.bind(null, r, o, n, t), null), n
                        },
                        useId: function() {
                            var e = Do(),
                                t = ru.identifierPrefix;
                            if (oa) {
                                var n = Jr;
                                t = "Â«" + t + "R" + (n = (Yr & ~(1 << 32 - pe(Yr) - 1)).toString(32) + n), 0 < (n = Eo++) && (t += "H" + n.toString(32)), t += "Â»"
                            } else t = "Â«" + t + "r" + (n = Po++).toString(32) + "Â»";
                            return e.memoizedState = t
                        },
                        useHostTransitionStatus: Ri,
                        useFormState: ui,
                        useActionState: ui,
                        useOptimistic: function(e) {
                            var t = Do();
                            t.memoizedState = t.baseState = e;
                            var n = {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: null,
                                lastRenderedState: null
                            };
                            return t.queue = n, t = Ui.bind(null, wo, !0, n), n.dispatch = t, [e, t]
                        },
                        useMemoCache: Zo,
                        useCacheRefresh: function() {
                            return Do().memoizedState = $i.bind(null, wo)
                        }
                    },
                    qi = {
                        readContext: Ea,
                        use: Vo,
                        useCallback: zi,
                        useContext: Ea,
                        useEffect: bi,
                        useImperativeHandle: ki,
                        useInsertionEffect: wi,
                        useLayoutEffect: _i,
                        useMemo: Ei,
                        useReducer: Ho,
                        useRef: mi,
                        useState: function() {
                            return Ho(Bo)
                        },
                        useDebugValue: Si,
                        useDeferredValue: function(e, t) {
                            return Ni(Fo(), _o.memoizedState, e, t)
                        },
                        useTransition: function() {
                            var e = Ho(Bo)[0],
                                t = Fo().memoizedState;
                            return ["boolean" == typeof e ? e : Uo(e), t]
                        },
                        useSyncExternalStore: Go,
                        useId: Mi,
                        useHostTransitionStatus: Ri,
                        useFormState: ci,
                        useActionState: ci,
                        useOptimistic: function(e, t) {
                            return ti(Fo(), 0, e, t)
                        },
                        useMemoCache: Zo,
                        useCacheRefresh: Ai
                    },
                    Gi = {
                        readContext: Ea,
                        use: Vo,
                        useCallback: zi,
                        useContext: Ea,
                        useEffect: bi,
                        useImperativeHandle: ki,
                        useInsertionEffect: wi,
                        useLayoutEffect: _i,
                        useMemo: Ei,
                        useReducer: qo,
                        useRef: mi,
                        useState: function() {
                            return qo(Bo)
                        },
                        useDebugValue: Si,
                        useDeferredValue: function(e, t) {
                            var n = Fo();
                            return null === _o ? Ci(n, e, t) : Ni(n, _o.memoizedState, e, t)
                        },
                        useTransition: function() {
                            var e = qo(Bo)[0],
                                t = Fo().memoizedState;
                            return ["boolean" == typeof e ? e : Uo(e), t]
                        },
                        useSyncExternalStore: Go,
                        useId: Mi,
                        useHostTransitionStatus: Ri,
                        useFormState: pi,
                        useActionState: pi,
                        useOptimistic: function(e, t) {
                            var n = Fo();
                            return null !== _o ? ti(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch])
                        },
                        useMemoCache: Zo,
                        useCacheRefresh: Ai
                    },
                    Ki = null,
                    Qi = 0;

                function Yi(e) {
                    var t = Qi;
                    return Qi += 1, null === Ki && (Ki = []), Ya(Ki, e, t)
                }

                function Ji(e, t) {
                    t = t.props.ref, e.ref = void 0 !== t ? t : null
                }

                function Xi(e, t) {
                    if (t.$$typeof === p) throw Error(i(525));
                    throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function el(e) {
                    return (0, e._init)(e._payload)
                }

                function tl(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e) {
                        for (var t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                        return t
                    }

                    function a(e, t) {
                        return (e = Ir(e, t)).index = 0, e.sibling = null, e
                    }

                    function o(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 67108866, n) : r : (t.flags |= 67108866, n) : (t.flags |= 1048576, n)
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags |= 67108866), t
                    }

                    function s(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Vr(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        var o = n.type;
                        return o === g ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === E && el(o) === t.type) ? (Ji(t = a(t, n.props), n), t.return = e, t) : (Ji(t = Fr(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Zr(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, r, o) {
                        return null === t || 7 !== t.tag ? ((t = Ur(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t) return (t = Vr("" + t, e.mode, n)).return = e, t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case h:
                                    return Ji(n = Fr(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                                case m:
                                    return (t = Zr(t, e.mode, n)).return = e, t;
                                case E:
                                    return f(e, t = (0, t._init)(t._payload), n)
                            }
                            if (T(t) || O(t)) return (t = Ur(t, e.mode, n, null)).return = e, t;
                            if ("function" == typeof t.then) return f(e, Yi(t), n);
                            if (t.$$typeof === _) return f(e, Ca(e, t), n);
                            Xi(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n) return null !== a ? null : s(e, t, "" + n, r);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case h:
                                    return n.key === a ? u(e, t, n, r) : null;
                                case m:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case E:
                                    return p(e, t, n = (a = n._init)(n._payload), r)
                            }
                            if (T(n) || O(n)) return null !== a ? null : d(e, t, n, r, null);
                            if ("function" == typeof n.then) return p(e, t, Yi(n), r);
                            if (n.$$typeof === _) return p(e, t, Ca(e, n), r);
                            Xi(e, n)
                        }
                        return null
                    }

                    function v(e, t, n, r, a) {
                        if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r) return s(t, e = e.get(n) || null, "" + r, a);
                        if ("object" == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case h:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case m:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case E:
                                    return v(e, t, n, r = (0, r._init)(r._payload), a)
                            }
                            if (T(r) || O(r)) return d(t, e = e.get(n) || null, r, a, null);
                            if ("function" == typeof r.then) return v(e, t, n, Yi(r), a);
                            if (r.$$typeof === _) return v(e, t, n, Ca(t, r), a);
                            Xi(t, r)
                        }
                        return null
                    }

                    function y(s, u, c, d) {
                        if ("object" == typeof c && null !== c && c.type === g && null === c.key && (c = c.props.children), "object" == typeof c && null !== c) {
                            switch (c.$$typeof) {
                                case h:
                                    e: {
                                        for (var b = c.key; null !== u;) {
                                            if (u.key === b) {
                                                if ((b = c.type) === g) {
                                                    if (7 === u.tag) {
                                                        n(s, u.sibling), (d = a(u, c.props.children)).return = s, s = d;
                                                        break e
                                                    }
                                                } else if (u.elementType === b || "object" == typeof b && null !== b && b.$$typeof === E && el(b) === u.type) {
                                                    n(s, u.sibling), Ji(d = a(u, c.props), c), d.return = s, s = d;
                                                    break e
                                                }
                                                n(s, u);
                                                break
                                            }
                                            t(s, u), u = u.sibling
                                        }
                                        c.type === g ? ((d = Ur(c.props.children, s.mode, d, c.key)).return = s, s = d) : (Ji(d = Fr(c.type, c.key, c.props, null, s.mode, d), c), d.return = s, s = d)
                                    }
                                    return l(s);
                                case m:
                                    e: {
                                        for (b = c.key; null !== u;) {
                                            if (u.key === b) {
                                                if (4 === u.tag && u.stateNode.containerInfo === c.containerInfo && u.stateNode.implementation === c.implementation) {
                                                    n(s, u.sibling), (d = a(u, c.children || [])).return = s, s = d;
                                                    break e
                                                }
                                                n(s, u);
                                                break
                                            }
                                            t(s, u), u = u.sibling
                                        }(d = Zr(c, s.mode, d)).return = s,
                                        s = d
                                    }
                                    return l(s);
                                case E:
                                    return y(s, u, c = (b = c._init)(c._payload), d)
                            }
                            if (T(c)) return function(a, i, l, s) {
                                for (var u = null, c = null, d = i, h = i = 0, m = null; null !== d && h < l.length; h++) {
                                    d.index > h ? (m = d, d = null) : m = d.sibling;
                                    var g = p(a, d, l[h], s);
                                    if (null === g) {
                                        null === d && (d = m);
                                        break
                                    }
                                    e && d && null === g.alternate && t(a, d), i = o(g, i, h), null === c ? u = g : c.sibling = g, c = g, d = m
                                }
                                if (h === l.length) return n(a, d), oa && Xr(a, h), u;
                                if (null === d) {
                                    for (; h < l.length; h++) null !== (d = f(a, l[h], s)) && (i = o(d, i, h), null === c ? u = d : c.sibling = d, c = d);
                                    return oa && Xr(a, h), u
                                }
                                for (d = r(d); h < l.length; h++) null !== (m = v(d, a, h, l[h], s)) && (e && null !== m.alternate && d.delete(null === m.key ? h : m.key), i = o(m, i, h), null === c ? u = m : c.sibling = m, c = m);
                                return e && d.forEach(function(e) {
                                    return t(a, e)
                                }), oa && Xr(a, h), u
                            }(s, u, c, d);
                            if (O(c)) {
                                if ("function" != typeof(b = O(c))) throw Error(i(150));
                                return function(a, l, s, u) {
                                    if (null == s) throw Error(i(151));
                                    for (var c = null, d = null, h = l, m = l = 0, g = null, y = s.next(); null !== h && !y.done; m++, y = s.next()) {
                                        h.index > m ? (g = h, h = null) : g = h.sibling;
                                        var b = p(a, h, y.value, u);
                                        if (null === b) {
                                            null === h && (h = g);
                                            break
                                        }
                                        e && h && null === b.alternate && t(a, h), l = o(b, l, m), null === d ? c = b : d.sibling = b, d = b, h = g
                                    }
                                    if (y.done) return n(a, h), oa && Xr(a, m), c;
                                    if (null === h) {
                                        for (; !y.done; m++, y = s.next()) null !== (y = f(a, y.value, u)) && (l = o(y, l, m), null === d ? c = y : d.sibling = y, d = y);
                                        return oa && Xr(a, m), c
                                    }
                                    for (h = r(h); !y.done; m++, y = s.next()) null !== (y = v(h, a, m, y.value, u)) && (e && null !== y.alternate && h.delete(null === y.key ? m : y.key), l = o(y, l, m), null === d ? c = y : d.sibling = y, d = y);
                                    return e && h.forEach(function(e) {
                                        return t(a, e)
                                    }), oa && Xr(a, m), c
                                }(s, u, c = b.call(c), d)
                            }
                            if ("function" == typeof c.then) return y(s, u, Yi(c), d);
                            if (c.$$typeof === _) return y(s, u, Ca(s, c), d);
                            Xi(s, c)
                        }
                        return "string" == typeof c && "" !== c || "number" == typeof c || "bigint" == typeof c ? (c = "" + c, null !== u && 6 === u.tag ? (n(s, u.sibling), (d = a(u, c)).return = s, s = d) : (n(s, u), (d = Vr(c, s.mode, d)).return = s, s = d), l(s)) : n(s, u)
                    }
                    return function(e, t, n, r) {
                        try {
                            Qi = 0;
                            var a = y(e, t, n, r);
                            return Ki = null, a
                        } catch (t) {
                            if (t === Ha || t === qa) throw t;
                            var o = Ar(29, t, null, e.mode);
                            return o.lanes = r, o.return = e, o
                        }
                    }
                }
                var nl = tl(!0),
                    rl = tl(!1),
                    al = D(null),
                    ol = null;

                function il(e) {
                    var t = e.alternate;
                    U(cl, 1 & cl.current), U(al, e), null === ol && (null === t || null !== ho.current || null !== t.memoizedState) && (ol = e)
                }

                function ll(e) {
                    if (22 === e.tag) {
                        if (U(cl, cl.current), U(al, e), null === ol) {
                            var t = e.alternate;
                            null !== t && null !== t.memoizedState && (ol = e)
                        }
                    } else sl()
                }

                function sl() {
                    U(cl, cl.current), U(al, al.current)
                }

                function ul(e) {
                    F(al), ol === e && (ol = null), F(cl)
                }
                var cl = D(0);

                function dl(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || gd(n))) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (128 & t.flags) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }

                function fl(e, t, n, r) {
                    n = null == (n = n(r, t = e.memoizedState)) ? t : f({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var pl = {
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = Ru(),
                            a = ao(r);
                        a.payload = t, null != n && (a.callback = n), null !== (t = oo(e, a, r)) && (Au(t, 0, r), io(t, e, r))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = Ru(),
                            a = ao(r);
                        a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = oo(e, a, r)) && (Au(t, 0, r), io(t, e, r))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = Ru(),
                            r = ao(n);
                        r.tag = 2, null != t && (r.callback = t), null !== (t = oo(e, r, n)) && (Au(t, 0, n), io(t, e, n))
                    }
                };

                function hl(e, t, n, r, a, o, i) {
                    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !(t.prototype && t.prototype.isPureReactComponent && Qn(n, r) && Qn(a, o))
                }

                function ml(e, t, n, r) {
                    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pl.enqueueReplaceState(t, t.state, null)
                }

                function gl(e, t) {
                    var n = t;
                    if ("ref" in t)
                        for (var r in n = {}, t) "ref" !== r && (n[r] = t[r]);
                    if (e = e.defaultProps)
                        for (var a in n === t && (n = f({}, n)), e) void 0 === n[a] && (n[a] = e[a]);
                    return n
                }
                var vl = "function" == typeof reportError ? reportError : function(e) {
                    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                        var t = new window.ErrorEvent("error", {
                            bubbles: !0,
                            cancelable: !0,
                            message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                            error: e
                        });
                        if (!window.dispatchEvent(t)) return
                    } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e);
                    console.error(e)
                };

                function yl(e) {
                    vl(e)
                }

                function bl(e) {
                    console.error(e)
                }

                function wl(e) {
                    vl(e)
                }

                function _l(e, t) {
                    try {
                        (0, e.onUncaughtError)(t.value, {
                            componentStack: t.stack
                        })
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        })
                    }
                }

                function xl(e, t, n) {
                    try {
                        (0, e.onCaughtError)(n.value, {
                            componentStack: n.stack,
                            errorBoundary: 1 === t.tag ? t.stateNode : null
                        })
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        })
                    }
                }

                function kl(e, t, n) {
                    return (n = ao(n)).tag = 3, n.payload = {
                        element: null
                    }, n.callback = function() {
                        _l(e, t)
                    }, n
                }

                function Sl(e) {
                    return (e = ao(e)).tag = 3, e
                }

                function zl(e, t, n, r) {
                    var a = n.type.getDerivedStateFromError;
                    if ("function" == typeof a) {
                        var o = r.value;
                        e.payload = function() {
                            return a(o)
                        }, e.callback = function() {
                            xl(t, n, r)
                        }
                    }
                    var i = n.stateNode;
                    null !== i && "function" == typeof i.componentDidCatch && (e.callback = function() {
                        xl(t, n, r), "function" != typeof a && (null === Su ? Su = new Set([this]) : Su.add(this));
                        var e = r.stack;
                        this.componentDidCatch(r.value, {
                            componentStack: null !== e ? e : ""
                        })
                    })
                }
                var El = Error(i(461)),
                    Cl = !1;

                function Nl(e, t, n, r) {
                    t.child = null === e ? rl(t, null, n, r) : nl(t, e.child, n, r)
                }

                function Pl(e, t, n, r, a) {
                    n = n.render;
                    var o = t.ref;
                    if ("ref" in r) {
                        var i = {};
                        for (var l in r) "ref" !== l && (i[l] = r[l])
                    } else i = r;
                    return za(t), r = Lo(e, t, n, i, o, a), l = Ao(), null === e || Cl ? (oa && l && ta(t), t.flags |= 1, Nl(e, t, r, a), t.child) : ($o(e, t, a), Kl(e, t, a))
                }

                function Ol(e, t, n, r, a) {
                    if (null === e) {
                        var o = n.type;
                        return "function" != typeof o || $r(o) || void 0 !== o.defaultProps || null !== n.compare ? ((e = Fr(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, jl(e, t, o, r, a))
                    }
                    if (o = e.child, !Ql(e, a)) {
                        var i = o.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : Qn)(i, r) && e.ref === t.ref) return Kl(e, t, a)
                    }
                    return t.flags |= 1, (e = Ir(o, r)).ref = t.ref, e.return = t, t.child = e
                }

                function jl(e, t, n, r, a) {
                    if (null !== e) {
                        var o = e.memoizedProps;
                        if (Qn(o, r) && e.ref === t.ref) {
                            if (Cl = !1, t.pendingProps = r = o, !Ql(e, a)) return t.lanes = e.lanes, Kl(e, t, a);
                            131072 & e.flags && (Cl = !0)
                        }
                    }
                    return Ml(e, t, n, r, a)
                }

                function Ll(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        o = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode) {
                        if (128 & t.flags) {
                            if (r = null !== o ? o.baseLanes | n : n, null !== e) {
                                for (a = t.child = e.child, o = 0; null !== a;) o = o | a.lanes | a.childLanes, a = a.sibling;
                                t.childLanes = o & ~r
                            } else t.childLanes = 0, t.child = null;
                            return Tl(e, t, r, n)
                        }
                        if (!(536870912 & n)) return t.lanes = t.childLanes = 536870912, Tl(e, t, null !== o ? o.baseLanes | n : n, n);
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null
                        }, null !== e && Za(0, null !== o ? o.cachePool : null), null !== o ? go(t, o) : vo(), ll(t)
                    } else null !== o ? (Za(0, o.cachePool), go(t, o), sl(), t.memoizedState = null) : (null !== e && Za(0, null), vo(), sl());
                    return Nl(e, t, a, n), t.child
                }

                function Tl(e, t, n, r) {
                    var a = Va();
                    return a = null === a ? null : {
                        parent: La._currentValue,
                        pool: a
                    }, t.memoizedState = {
                        baseLanes: n,
                        cachePool: a
                    }, null !== e && Za(0, null), vo(), ll(t), null !== e && ka(e, t, r, !0), null
                }

                function Rl(e, t) {
                    var n = t.ref;
                    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
                    else {
                        if ("function" != typeof n && "object" != typeof n) throw Error(i(284));
                        null !== e && e.ref === n || (t.flags |= 4194816)
                    }
                }

                function Ml(e, t, n, r, a) {
                    return za(t), n = Lo(e, t, n, r, void 0, a), r = Ao(), null === e || Cl ? (oa && r && ta(t), t.flags |= 1, Nl(e, t, n, a), t.child) : ($o(e, t, a), Kl(e, t, a))
                }

                function Al(e, t, n, r, a, o) {
                    return za(t), t.updateQueue = null, n = Ro(t, r, n, a), To(e), r = Ao(), null === e || Cl ? (oa && r && ta(t), t.flags |= 1, Nl(e, t, n, o), t.child) : ($o(e, t, o), Kl(e, t, o))
                }

                function $l(e, t, n, r, a) {
                    if (za(t), null === t.stateNode) {
                        var o = Rr,
                            i = n.contextType;
                        "object" == typeof i && null !== i && (o = Ea(i)), o = new n(r, o), t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, o.updater = pl, t.stateNode = o, o._reactInternals = t, (o = t.stateNode).props = r, o.state = t.memoizedState, o.refs = {}, no(t), i = n.contextType, o.context = "object" == typeof i && null !== i ? Ea(i) : Rr, o.state = t.memoizedState, "function" == typeof(i = n.getDerivedStateFromProps) && (fl(t, n, i, r), o.state = t.memoizedState), "function" == typeof n.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (i = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), i !== o.state && pl.enqueueReplaceState(o, o.state, null), co(t, r, o, a), uo(), o.state = t.memoizedState), "function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !0
                    } else if (null === e) {
                        o = t.stateNode;
                        var l = t.memoizedProps,
                            s = gl(n, l);
                        o.props = s;
                        var u = o.context,
                            c = n.contextType;
                        i = Rr, "object" == typeof c && null !== c && (i = Ea(c));
                        var d = n.getDerivedStateFromProps;
                        c = "function" == typeof d || "function" == typeof o.getSnapshotBeforeUpdate, l = t.pendingProps !== l, c || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (l || u !== i) && ml(t, o, r, i), to = !1;
                        var f = t.memoizedState;
                        o.state = f, co(t, r, o, a), uo(), u = t.memoizedState, l || f !== u || to ? ("function" == typeof d && (fl(t, n, d, r), u = t.memoizedState), (s = to || hl(t, n, s, r, f, u, i)) ? (c || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = i, r = s) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        o = t.stateNode, ro(e, t), c = gl(n, i = t.memoizedProps), o.props = c, d = t.pendingProps, f = o.context, u = n.contextType, s = Rr, "object" == typeof u && null !== u && (s = Ea(u)), (u = "function" == typeof(l = n.getDerivedStateFromProps) || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== d || f !== s) && ml(t, o, r, s), to = !1, f = t.memoizedState, o.state = f, co(t, r, o, a), uo();
                        var p = t.memoizedState;
                        i !== d || f !== p || to || null !== e && null !== e.dependencies && Sa(e.dependencies) ? ("function" == typeof l && (fl(t, n, l, r), p = t.memoizedState), (c = to || hl(t, n, c, r, f, p, s) || null !== e && null !== e.dependencies && Sa(e.dependencies)) ? (u || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, p, s), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, p, s)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), o.props = r, o.state = p, o.context = s, r = c) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return o = r, Rl(e, t), r = !!(128 & t.flags), o || r ? (o = t.stateNode, n = r && "function" != typeof n.getDerivedStateFromError ? null : o.render(), t.flags |= 1, null !== e && r ? (t.child = nl(t, e.child, null, a), t.child = nl(t, null, n, a)) : Nl(e, t, n, a), t.memoizedState = o.state, e = t.child) : e = Kl(e, t, a), e
                }

                function Il(e, t, n, r) {
                    return pa(), t.flags |= 256, Nl(e, t, n, r), t.child
                }
                var Dl = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0,
                    hydrationErrors: null
                };

                function Fl(e) {
                    return {
                        baseLanes: e,
                        cachePool: Ba()
                    }
                }

                function Ul(e, t, n) {
                    return e = null !== e ? e.childLanes & ~n : 0, t && (e |= gu), e
                }

                function Vl(e, t, n) {
                    var r, a = t.pendingProps,
                        o = !1,
                        l = !!(128 & t.flags);
                    if ((r = l) || (r = (null === e || null !== e.memoizedState) && !!(2 & cl.current)), r && (o = !0, t.flags &= -129), r = !!(32 & t.flags), t.flags &= -33, null === e) {
                        if (oa) {
                            if (o ? il(t) : sl(), oa) {
                                var s, u = aa;
                                if (s = u) {
                                    e: {
                                        for (s = u, u = la; 8 !== s.nodeType;) {
                                            if (!u) {
                                                u = null;
                                                break e
                                            }
                                            if (null === (s = vd(s.nextSibling))) {
                                                u = null;
                                                break e
                                            }
                                        }
                                        u = s
                                    }
                                    null !== u ? (t.memoizedState = {
                                        dehydrated: u,
                                        treeContext: null !== Qr ? {
                                            id: Yr,
                                            overflow: Jr
                                        } : null,
                                        retryLane: 536870912,
                                        hydrationErrors: null
                                    }, (s = Ar(18, null, null, 0)).stateNode = u, s.return = t, t.child = s, ra = t, aa = null, s = !0) : s = !1
                                }
                                s || ua(t)
                            }
                            if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated)) return gd(u) ? t.lanes = 32 : t.lanes = 536870912, null;
                            ul(t)
                        }
                        return u = a.children, a = a.fallback, o ? (sl(), u = Bl({
                            mode: "hidden",
                            children: u
                        }, o = t.mode), a = Ur(a, o, n, null), u.return = t, a.return = t, u.sibling = a, t.child = u, (o = t.child).memoizedState = Fl(n), o.childLanes = Ul(e, r, n), t.memoizedState = Dl, a) : (il(t), Zl(t, u))
                    }
                    if (null !== (s = e.memoizedState) && null !== (u = s.dehydrated)) {
                        if (l) 256 & t.flags ? (il(t), t.flags &= -257, t = Hl(e, t, n)) : null !== t.memoizedState ? (sl(), t.child = e.child, t.flags |= 128, t = null) : (sl(), o = a.fallback, u = t.mode, a = Bl({
                            mode: "visible",
                            children: a.children
                        }, u), (o = Ur(o, u, n, null)).flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, nl(t, e.child, null, n), (a = t.child).memoizedState = Fl(n), a.childLanes = Ul(e, r, n), t.memoizedState = Dl, t = o);
                        else if (il(t), gd(u)) {
                            if (r = u.nextSibling && u.nextSibling.dataset) var c = r.dgst;
                            r = c, (a = Error(i(419))).stack = "", a.digest = r, ma({
                                value: a,
                                source: null,
                                stack: null
                            }), t = Hl(e, t, n)
                        } else if (Cl || ka(e, t, n, !1), r = 0 !== (n & e.childLanes), Cl || r) {
                            if (null !== (r = ru) && 0 !== (a = 0 !== ((a = 42 & (a = n & -n) ? 1 : Ne(a)) & (r.suspendedLanes | n)) ? 0 : a) && a !== s.retryLane) throw s.retryLane = a, jr(e, a), Au(r, 0, a), El;
                            "$?" === u.data || qu(), t = Hl(e, t, n)
                        } else "$?" === u.data ? (t.flags |= 192, t.child = e.child, t = null) : (e = s.treeContext, aa = vd(u.nextSibling), ra = t, oa = !0, ia = null, la = !1, null !== e && (Gr[Kr++] = Yr, Gr[Kr++] = Jr, Gr[Kr++] = Qr, Yr = e.id, Jr = e.overflow, Qr = t), (t = Zl(t, a.children)).flags |= 4096);
                        return t
                    }
                    return o ? (sl(), o = a.fallback, u = t.mode, c = (s = e.child).sibling, (a = Ir(s, {
                        mode: "hidden",
                        children: a.children
                    })).subtreeFlags = 65011712 & s.subtreeFlags, null !== c ? o = Ir(c, o) : (o = Ur(o, u, n, null)).flags |= 2, o.return = t, a.return = t, a.sibling = o, t.child = a, a = o, o = t.child, null === (u = e.child.memoizedState) ? u = Fl(n) : (null !== (s = u.cachePool) ? (c = La._currentValue, s = s.parent !== c ? {
                        parent: c,
                        pool: c
                    } : s) : s = Ba(), u = {
                        baseLanes: u.baseLanes | n,
                        cachePool: s
                    }), o.memoizedState = u, o.childLanes = Ul(e, r, n), t.memoizedState = Dl, a) : (il(t), e = (n = e.child).sibling, (n = Ir(n, {
                        mode: "visible",
                        children: a.children
                    })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n)
                }

                function Zl(e, t) {
                    return (t = Bl({
                        mode: "visible",
                        children: t
                    }, e.mode)).return = e, e.child = t
                }

                function Bl(e, t) {
                    return (e = Ar(22, e, null, t)).lanes = 0, e.stateNode = {
                        _visibility: 1,
                        _pendingMarkers: null,
                        _retryCache: null,
                        _transitions: null
                    }, e
                }

                function Hl(e, t, n) {
                    return nl(t, e.child, null, n), (e = Zl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function Wl(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), _a(e.return, t, n)
                }

                function ql(e, t, n, r, a) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a
                    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a)
                }

                function Gl(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        o = r.tail;
                    if (Nl(e, t, r.children, n), 2 & (r = cl.current)) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Wl(e, n, t);
                            else if (19 === e.tag) Wl(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    switch (U(cl, r), a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === dl(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ql(t, !1, a, n, o);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === dl(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            ql(t, !0, n, null, o);
                            break;
                        case "together":
                            ql(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Kl(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), pu |= t.lanes, 0 === (n & t.childLanes)) {
                        if (null === e) return null;
                        if (ka(e, t, n, !1), 0 === (n & t.childLanes)) return null
                    }
                    if (null !== e && t.child !== e.child) throw Error(i(153));
                    if (null !== t.child) {
                        for (n = Ir(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ir(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Ql(e, t) {
                    return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Sa(e))
                }

                function Yl(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps) Cl = !0;
                        else {
                            if (!(Ql(e, n) || 128 & t.flags)) return Cl = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            W(t, t.stateNode.containerInfo), ba(0, La, e.memoizedState.cache), pa();
                                            break;
                                        case 27:
                                        case 5:
                                            G(t);
                                            break;
                                        case 4:
                                            W(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            ba(0, t.type, t.memoizedProps.value);
                                            break;
                                        case 13:
                                            var r = t.memoizedState;
                                            if (null !== r) return null !== r.dehydrated ? (il(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Vl(e, t, n) : (il(t), null !== (e = Kl(e, t, n)) ? e.sibling : null);
                                            il(t);
                                            break;
                                        case 19:
                                            var a = !!(128 & e.flags);
                                            if ((r = 0 !== (n & t.childLanes)) || (ka(e, t, n, !1), r = 0 !== (n & t.childLanes)), a) {
                                                if (r) return Gl(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), U(cl, cl.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, Ll(e, t, n);
                                        case 24:
                                            ba(0, La, e.memoizedState.cache)
                                    }
                                    return Kl(e, t, n)
                                }(e, t, n);
                            Cl = !!(131072 & e.flags)
                        }
                    else Cl = !1, oa && 1048576 & t.flags && ea(t, qr, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 16:
                            e: {
                                e = t.pendingProps;
                                var r = t.elementType,
                                    a = r._init;
                                if (r = a(r._payload), t.type = r, "function" != typeof r) {
                                    if (null != r) {
                                        if ((a = r.$$typeof) === x) {
                                            t.tag = 11, t = Pl(null, t, r, e, n);
                                            break e
                                        }
                                        if (a === z) {
                                            t.tag = 14, t = Ol(null, t, r, e, n);
                                            break e
                                        }
                                    }
                                    throw t = L(r) || r, Error(i(306, t, ""))
                                }
                                $r(r) ? (e = gl(r, e), t.tag = 1, t = $l(null, t, r, e, n)) : (t.tag = 0, t = Ml(null, t, r, e, n))
                            }
                            return t;
                        case 0:
                            return Ml(e, t, t.type, t.pendingProps, n);
                        case 1:
                            return $l(e, t, r = t.type, a = gl(r, t.pendingProps), n);
                        case 3:
                            e: {
                                if (W(t, t.stateNode.containerInfo), null === e) throw Error(i(387));r = t.pendingProps;
                                var o = t.memoizedState;a = o.element,
                                ro(e, t),
                                co(t, r, null, n);
                                var l = t.memoizedState;
                                if (r = l.cache, ba(0, La, r), r !== o.cache && xa(t, [La], n, !0), uo(), r = l.element, o.isDehydrated) {
                                    if (o = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: l.cache
                                        }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                                        t = Il(e, t, r, n);
                                        break e
                                    }
                                    if (r !== a) {
                                        ma(a = Sr(Error(i(424)), t)), t = Il(e, t, r, n);
                                        break e
                                    }
                                    for (e = 9 === (e = t.stateNode.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, aa = vd(e.firstChild), ra = t, oa = !0, ia = null, la = !0, n = rl(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (pa(), r === a) {
                                        t = Kl(e, t, n);
                                        break e
                                    }
                                    Nl(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 26:
                            return Rl(e, t), null === e ? (n = Nd(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : oa || (n = t.type, e = t.pendingProps, (r = rd(B.current).createElement(n))[Le] = t, r[Te] = e, ed(r, n, e), He(r), t.stateNode = r) : t.memoizedState = Nd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                        case 27:
                            return G(t), null === e && oa && (r = t.stateNode = wd(t.type, t.pendingProps, B.current), ra = t, la = !0, a = aa, pd(t.type) ? (yd = a, aa = vd(r.firstChild)) : aa = a), Nl(e, t, t.pendingProps.children, n), Rl(e, t), null === e && (t.flags |= 4194304), t.child;
                        case 5:
                            return null === e && oa && ((a = r = aa) && (null !== (r = function(e, t, n, r) {
                                for (; 1 === e.nodeType;) {
                                    var a = n;
                                    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                        if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                                    } else if (r) {
                                        if (!e[De]) switch (t) {
                                            case "meta":
                                                if (!e.hasAttribute("itemprop")) break;
                                                return e;
                                            case "link":
                                                if ("stylesheet" === (o = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) break;
                                                if (o !== a.rel || e.getAttribute("href") !== (null == a.href || "" === a.href ? null : a.href) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) || e.getAttribute("title") !== (null == a.title ? null : a.title)) break;
                                                return e;
                                            case "style":
                                                if (e.hasAttribute("data-precedence")) break;
                                                return e;
                                            case "script":
                                                if (((o = e.getAttribute("src")) !== (null == a.src ? null : a.src) || e.getAttribute("type") !== (null == a.type ? null : a.type) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) && o && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                                return e;
                                            default:
                                                return e
                                        }
                                    } else {
                                        if ("input" !== t || "hidden" !== e.type) return e;
                                        var o = null == a.name ? null : "" + a.name;
                                        if ("hidden" === a.type && e.getAttribute("name") === o) return e
                                    }
                                    if (null === (e = vd(e.nextSibling))) break
                                }
                                return null
                            }(r, t.type, t.pendingProps, la)) ? (t.stateNode = r, ra = t, aa = vd(r.firstChild), la = !1, a = !0) : a = !1), a || ua(t)), G(t), a = t.type, o = t.pendingProps, l = null !== e ? e.memoizedProps : null, r = o.children, id(a, o) ? r = null : null !== l && id(a, l) && (t.flags |= 32), null !== t.memoizedState && (a = Lo(e, t, Mo, null, null, n), Gd._currentValue = a), Rl(e, t), Nl(e, t, r, n), t.child;
                        case 6:
                            return null === e && oa && ((e = n = aa) && (null !== (n = function(e, t, n) {
                                if ("" === t) return null;
                                for (; 3 !== e.nodeType;) {
                                    if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) return null;
                                    if (null === (e = vd(e.nextSibling))) return null
                                }
                                return e
                            }(n, t.pendingProps, la)) ? (t.stateNode = n, ra = t, aa = null, e = !0) : e = !1), e || ua(t)), null;
                        case 13:
                            return Vl(e, t, n);
                        case 4:
                            return W(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = nl(t, null, r, n) : Nl(e, t, r, n), t.child;
                        case 11:
                            return Pl(e, t, t.type, t.pendingProps, n);
                        case 7:
                            return Nl(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return Nl(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            return r = t.pendingProps, ba(0, t.type, r.value), Nl(e, t, r.children, n), t.child;
                        case 9:
                            return a = t.type._context, r = t.pendingProps.children, za(t), r = r(a = Ea(a)), t.flags |= 1, Nl(e, t, r, n), t.child;
                        case 14:
                            return Ol(e, t, t.type, t.pendingProps, n);
                        case 15:
                            return jl(e, t, t.type, t.pendingProps, n);
                        case 19:
                            return Gl(e, t, n);
                        case 31:
                            return r = t.pendingProps, n = t.mode, r = {
                                mode: r.mode,
                                children: r.children
                            }, null === e ? ((n = Bl(r, n)).ref = t.ref, t.child = n, n.return = t, t = n) : ((n = Ir(e.child, r)).ref = t.ref, t.child = n, n.return = t, t = n), t;
                        case 22:
                            return Ll(e, t, n);
                        case 24:
                            return za(t), r = Ea(La), null === e ? (null === (a = Va()) && (a = ru, o = Ta(), a.pooledCache = o, o.refCount++, null !== o && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
                                parent: r,
                                cache: a
                            }, no(t), ba(0, La, a)) : (0 !== (e.lanes & n) && (ro(e, t), co(t, null, null, n), uo()), a = e.memoizedState, o = t.memoizedState, a.parent !== r ? (a = {
                                parent: r,
                                cache: r
                            }, t.memoizedState = a, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), ba(0, La, r)) : (r = o.cache, ba(0, La, r), r !== a.cache && xa(t, [La], n, !0))), Nl(e, t, t.pendingProps.children, n), t.child;
                        case 29:
                            throw t.pendingProps
                    }
                    throw Error(i(156, t.tag))
                }

                function Jl(e) {
                    e.flags |= 4
                }

                function Xl(e, t) {
                    if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
                    else if (e.flags |= 16777216, !Ud(t)) {
                        if (null !== (t = al.current) && ((4194048 & ou) === ou ? null !== ol : (62914560 & ou) !== ou && !(536870912 & ou) || t !== ol)) throw Ja = Ga, Wa;
                        e.flags |= 8192
                    }
                }

                function es(e, t) {
                    null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? ke() : 536870912, e.lanes |= t, vu |= t)
                }

                function ts(e, t) {
                    if (!oa) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function ns(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 65011712 & a.subtreeFlags, r |= 65011712 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function rs(e, t, n) {
                    var r = t.pendingProps;
                    switch (na(t), t.tag) {
                        case 31:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                        case 1:
                            return ns(t), null;
                        case 3:
                            return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), wa(La), q(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (fa(t) ? Jl(t) : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, ha())), ns(t), null;
                        case 26:
                            return n = t.memoizedState, null === e ? (Jl(t), null !== n ? (ns(t), Xl(t, n)) : (ns(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Jl(t), ns(t), Xl(t, n)) : (ns(t), t.flags &= -16777217) : (e.memoizedProps !== r && Jl(t), ns(t), t.flags &= -16777217), null;
                        case 27:
                            K(t), n = B.current;
                            var a = t.type;
                            if (null !== e && null != t.stateNode) e.memoizedProps !== r && Jl(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return ns(t), null
                                }
                                e = V.current, fa(t) ? ca(t) : (e = wd(a, r, n), t.stateNode = e, Jl(t))
                            }
                            return ns(t), null;
                        case 5:
                            if (K(t), n = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && Jl(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return ns(t), null
                                }
                                if (e = V.current, fa(t)) ca(t);
                                else {
                                    switch (a = rd(B.current), e) {
                                        case 1:
                                            e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                            break;
                                        case 2:
                                            e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                            break;
                                        default:
                                            switch (n) {
                                                case "svg":
                                                    e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                                    break;
                                                case "math":
                                                    e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                                    break;
                                                case "script":
                                                    (e = a.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                                    break;
                                                case "select":
                                                    e = "string" == typeof r.is ? a.createElement("select", {
                                                        is: r.is
                                                    }) : a.createElement("select"), r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                                                    break;
                                                default:
                                                    e = "string" == typeof r.is ? a.createElement(n, {
                                                        is: r.is
                                                    }) : a.createElement(n)
                                            }
                                    }
                                    e[Le] = t, e[Te] = r;
                                    e: for (a = t.child; null !== a;) {
                                        if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                                        else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                                            a.child.return = a, a = a.child;
                                            continue
                                        }
                                        if (a === t) break e;
                                        for (; null === a.sibling;) {
                                            if (null === a.return || a.return === t) break e;
                                            a = a.return
                                        }
                                        a.sibling.return = a.return, a = a.sibling
                                    }
                                    t.stateNode = e;
                                    e: switch (ed(e, n, r), n) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            e = !!r.autoFocus;
                                            break e;
                                        case "img":
                                            e = !0;
                                            break e;
                                        default:
                                            e = !1
                                    }
                                    e && Jl(t)
                                }
                            }
                            return ns(t), t.flags &= -16777217, null;
                        case 6:
                            if (e && null != t.stateNode) e.memoizedProps !== r && Jl(t);
                            else {
                                if ("string" != typeof r && null === t.stateNode) throw Error(i(166));
                                if (e = B.current, fa(t)) {
                                    if (e = t.stateNode, n = t.memoizedProps, r = null, null !== (a = ra)) switch (a.tag) {
                                        case 27:
                                        case 5:
                                            r = a.memoizedProps
                                    }
                                    e[Le] = t, (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || Qc(e.nodeValue, n))) || ua(t)
                                } else(e = rd(e).createTextNode(r))[Le] = t, t.stateNode = e
                            }
                            return ns(t), null;
                        case 13:
                            if (r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (a = fa(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!a) throw Error(i(318));
                                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(i(317));
                                        a[Le] = t
                                    } else pa(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    ns(t), a = !1
                                } else a = ha(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a), a = !0;
                                if (!a) return 256 & t.flags ? (ul(t), t) : (ul(t), null)
                            }
                            if (ul(t), 128 & t.flags) return t.lanes = n, t;
                            if (n = null !== r, e = null !== e && null !== e.memoizedState, n) {
                                a = null, null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool);
                                var o = null;
                                null !== r.memoizedState && null !== r.memoizedState.cachePool && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)
                            }
                            return n !== e && n && (t.child.flags |= 8192), es(t, t.updateQueue), ns(t), null;
                        case 4:
                            return q(), null === e && Fc(t.stateNode.containerInfo), ns(t), null;
                        case 10:
                            return wa(t.type), ns(t), null;
                        case 19:
                            if (F(cl), null === (a = t.memoizedState)) return ns(t), null;
                            if (r = !!(128 & t.flags), null === (o = a.rendering))
                                if (r) ts(a, !1);
                                else {
                                    if (0 !== fu || null !== e && 128 & e.flags)
                                        for (e = t.child; null !== e;) {
                                            if (null !== (o = dl(e))) {
                                                for (t.flags |= 128, ts(a, !1), e = o.updateQueue, t.updateQueue = e, es(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) Dr(n, e), n = n.sibling;
                                                return U(cl, 1 & cl.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== a.tail && te() > xu && (t.flags |= 128, r = !0, ts(a, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = dl(o))) {
                                        if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, es(t, e), ts(a, !0), null === a.tail && "hidden" === a.tailMode && !o.alternate && !oa) return ns(t), null
                                    } else 2 * te() - a.renderingStartTime > xu && 536870912 !== n && (t.flags |= 128, r = !0, ts(a, !1), t.lanes = 4194304);
                                a.isBackwards ? (o.sibling = t.child, t.child = o) : (null !== (e = a.last) ? e.sibling = o : t.child = o, a.last = o)
                            }
                            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = te(), t.sibling = null, e = cl.current, U(cl, r ? 1 & e | 2 : 1 & e), t) : (ns(t), null);
                        case 22:
                        case 23:
                            return ul(t), yo(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? !!(536870912 & n) && !(128 & t.flags) && (ns(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ns(t), null !== (n = t.updateQueue) && es(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && F(Ua), null;
                        case 24:
                            return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), wa(La), ns(t), null;
                        case 25:
                        case 30:
                            return null
                    }
                    throw Error(i(156, t.tag))
                }

                function as(e, t) {
                    switch (na(t), t.tag) {
                        case 1:
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return wa(La), q(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 26:
                        case 27:
                        case 5:
                            return K(t), null;
                        case 13:
                            if (ul(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(i(340));
                                pa()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return F(cl), null;
                        case 4:
                            return q(), null;
                        case 10:
                            return wa(t.type), null;
                        case 22:
                        case 23:
                            return ul(t), yo(), null !== e && F(Ua), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 24:
                            return wa(La), null;
                        default:
                            return null
                    }
                }

                function os(e, t) {
                    switch (na(t), t.tag) {
                        case 3:
                            wa(La), q();
                            break;
                        case 26:
                        case 27:
                        case 5:
                            K(t);
                            break;
                        case 4:
                            q();
                            break;
                        case 13:
                            ul(t);
                            break;
                        case 19:
                            F(cl);
                            break;
                        case 10:
                            wa(t.type);
                            break;
                        case 22:
                        case 23:
                            ul(t), yo(), null !== e && F(Ua);
                            break;
                        case 24:
                            wa(La)
                    }
                }

                function is(e, t) {
                    try {
                        var n = t.updateQueue,
                            r = null !== n ? n.lastEffect : null;
                        if (null !== r) {
                            var a = r.next;
                            n = a;
                            do {
                                if ((n.tag & e) === e) {
                                    r = void 0;
                                    var o = n.create,
                                        i = n.inst;
                                    r = o(), i.destroy = r
                                }
                                n = n.next
                            } while (n !== a)
                        }
                    } catch (e) {
                        cc(t, t.return, e)
                    }
                }

                function ls(e, t, n) {
                    try {
                        var r = t.updateQueue,
                            a = null !== r ? r.lastEffect : null;
                        if (null !== a) {
                            var o = a.next;
                            r = o;
                            do {
                                if ((r.tag & e) === e) {
                                    var i = r.inst,
                                        l = i.destroy;
                                    if (void 0 !== l) {
                                        i.destroy = void 0, a = t;
                                        var s = n,
                                            u = l;
                                        try {
                                            u()
                                        } catch (e) {
                                            cc(a, s, e)
                                        }
                                    }
                                }
                                r = r.next
                            } while (r !== o)
                        }
                    } catch (e) {
                        cc(t, t.return, e)
                    }
                }

                function ss(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        var n = e.stateNode;
                        try {
                            po(t, n)
                        } catch (t) {
                            cc(e, e.return, t)
                        }
                    }
                }

                function us(e, t, n) {
                    n.props = gl(e.type, e.memoizedProps), n.state = e.memoizedState;
                    try {
                        n.componentWillUnmount()
                    } catch (n) {
                        cc(e, t, n)
                    }
                }

                function cs(e, t) {
                    try {
                        var n = e.ref;
                        if (null !== n) {
                            switch (e.tag) {
                                case 26:
                                case 27:
                                case 5:
                                    var r = e.stateNode;
                                    break;
                                default:
                                    r = e.stateNode
                            }
                            "function" == typeof n ? e.refCleanup = n(r) : n.current = r
                        }
                    } catch (n) {
                        cc(e, t, n)
                    }
                }

                function ds(e, t) {
                    var n = e.ref,
                        r = e.refCleanup;
                    if (null !== n)
                        if ("function" == typeof r) try {
                            r()
                        } catch (n) {
                            cc(e, t, n)
                        } finally {
                            e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
                        } else if ("function" == typeof n) try {
                            n(null)
                        } catch (n) {
                            cc(e, t, n)
                        } else n.current = null
                }

                function fs(e) {
                    var t = e.type,
                        n = e.memoizedProps,
                        r = e.stateNode;
                    try {
                        e: switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n.autoFocus && r.focus();
                                break e;
                            case "img":
                                n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
                        }
                    }
                    catch (t) {
                        cc(e, e.return, t)
                    }
                }

                function ps(e, t, n) {
                    try {
                        var r = e.stateNode;
                        ! function(e, t, n, r) {
                            switch (t) {
                                case "div":
                                case "span":
                                case "svg":
                                case "path":
                                case "a":
                                case "g":
                                case "p":
                                case "li":
                                    break;
                                case "input":
                                    var a = null,
                                        o = null,
                                        l = null,
                                        s = null,
                                        u = null,
                                        c = null,
                                        d = null;
                                    for (h in n) {
                                        var f = n[h];
                                        if (n.hasOwnProperty(h) && null != f) switch (h) {
                                            case "checked":
                                            case "value":
                                                break;
                                            case "defaultValue":
                                                u = f;
                                            default:
                                                r.hasOwnProperty(h) || Jc(e, t, h, null, r, f)
                                        }
                                    }
                                    for (var p in r) {
                                        var h = r[p];
                                        if (f = n[p], r.hasOwnProperty(p) && (null != h || null != f)) switch (p) {
                                            case "type":
                                                o = h;
                                                break;
                                            case "name":
                                                a = h;
                                                break;
                                            case "checked":
                                                c = h;
                                                break;
                                            case "defaultChecked":
                                                d = h;
                                                break;
                                            case "value":
                                                l = h;
                                                break;
                                            case "defaultValue":
                                                s = h;
                                                break;
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                if (null != h) throw Error(i(137, t));
                                                break;
                                            default:
                                                h !== f && Jc(e, t, p, h, r, f)
                                        }
                                    }
                                    return void gt(e, l, s, u, c, d, o, a);
                                case "select":
                                    for (o in h = l = s = p = null, n)
                                        if (u = n[o], n.hasOwnProperty(o) && null != u) switch (o) {
                                            case "value":
                                                break;
                                            case "multiple":
                                                h = u;
                                            default:
                                                r.hasOwnProperty(o) || Jc(e, t, o, null, r, u)
                                        }
                                    for (a in r)
                                        if (o = r[a], u = n[a], r.hasOwnProperty(a) && (null != o || null != u)) switch (a) {
                                            case "value":
                                                p = o;
                                                break;
                                            case "defaultValue":
                                                s = o;
                                                break;
                                            case "multiple":
                                                l = o;
                                            default:
                                                o !== u && Jc(e, t, a, o, r, u)
                                        }
                                    return t = s, n = l, r = h, void(null != p ? bt(e, !!n, p, !1) : !!r != !!n && (null != t ? bt(e, !!n, t, !0) : bt(e, !!n, n ? [] : "", !1)));
                                case "textarea":
                                    for (s in h = p = null, n)
                                        if (a = n[s], n.hasOwnProperty(s) && null != a && !r.hasOwnProperty(s)) switch (s) {
                                            case "value":
                                            case "children":
                                                break;
                                            default:
                                                Jc(e, t, s, null, r, a)
                                        }
                                    for (l in r)
                                        if (a = r[l], o = n[l], r.hasOwnProperty(l) && (null != a || null != o)) switch (l) {
                                            case "value":
                                                p = a;
                                                break;
                                            case "defaultValue":
                                                h = a;
                                                break;
                                            case "children":
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                if (null != a) throw Error(i(91));
                                                break;
                                            default:
                                                a !== o && Jc(e, t, l, a, r, o)
                                        }
                                    return void wt(e, p, h);
                                case "option":
                                    for (var m in n) p = n[m], n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m) && ("selected" === m ? e.selected = !1 : Jc(e, t, m, null, r, p));
                                    for (u in r) p = r[u], h = n[u], !r.hasOwnProperty(u) || p === h || null == p && null == h || ("selected" === u ? e.selected = p && "function" != typeof p && "symbol" != typeof p : Jc(e, t, u, p, r, h));
                                    return;
                                case "img":
                                case "link":
                                case "area":
                                case "base":
                                case "br":
                                case "col":
                                case "embed":
                                case "hr":
                                case "keygen":
                                case "meta":
                                case "param":
                                case "source":
                                case "track":
                                case "wbr":
                                case "menuitem":
                                    for (var g in n) p = n[g], n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && Jc(e, t, g, null, r, p);
                                    for (c in r)
                                        if (p = r[c], h = n[c], r.hasOwnProperty(c) && p !== h && (null != p || null != h)) switch (c) {
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                if (null != p) throw Error(i(137, t));
                                                break;
                                            default:
                                                Jc(e, t, c, p, r, h)
                                        }
                                    return;
                                default:
                                    if (Et(t)) {
                                        for (var v in n) p = n[v], n.hasOwnProperty(v) && void 0 !== p && !r.hasOwnProperty(v) && Xc(e, t, v, void 0, r, p);
                                        for (d in r) p = r[d], h = n[d], !r.hasOwnProperty(d) || p === h || void 0 === p && void 0 === h || Xc(e, t, d, p, r, h);
                                        return
                                    }
                            }
                            for (var y in n) p = n[y], n.hasOwnProperty(y) && null != p && !r.hasOwnProperty(y) && Jc(e, t, y, null, r, p);
                            for (f in r) p = r[f], h = n[f], !r.hasOwnProperty(f) || p === h || null == p && null == h || Jc(e, t, f, p, r, h)
                        }(r, e.type, n, t), r[Te] = t
                    } catch (t) {
                        cc(e, e.return, t)
                    }
                }

                function hs(e) {
                    return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && pd(e.type) || 4 === e.tag
                }

                function ms(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || hs(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (27 === e.tag && pd(e.type)) continue e;
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function gs(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t) : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Yc));
                    else if (4 !== r && (27 === r && pd(e.type) && (n = e.stateNode, t = null), null !== (e = e.child)))
                        for (gs(e, t, n), e = e.sibling; null !== e;) gs(e, t, n), e = e.sibling
                }

                function vs(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && (27 === r && pd(e.type) && (n = e.stateNode), null !== (e = e.child)))
                        for (vs(e, t, n), e = e.sibling; null !== e;) vs(e, t, n), e = e.sibling
                }

                function ys(e) {
                    var t = e.stateNode,
                        n = e.memoizedProps;
                    try {
                        for (var r = e.type, a = t.attributes; a.length;) t.removeAttributeNode(a[0]);
                        ed(t, r, n), t[Le] = e, t[Te] = n
                    } catch (t) {
                        cc(e, e.return, t)
                    }
                }
                var bs = !1,
                    ws = !1,
                    _s = !1,
                    xs = "function" == typeof WeakSet ? WeakSet : Set,
                    ks = null;

                function Ss(e, t, n) {
                    var r = n.flags;
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            $s(e, n), 4 & r && is(5, n);
                            break;
                        case 1:
                            if ($s(e, n), 4 & r)
                                if (e = n.stateNode, null === t) try {
                                    e.componentDidMount()
                                } catch (e) {
                                    cc(n, n.return, e)
                                } else {
                                    var a = gl(n.type, t.memoizedProps);
                                    t = t.memoizedState;
                                    try {
                                        e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                                    } catch (e) {
                                        cc(n, n.return, e)
                                    }
                                }
                            64 & r && ss(n), 512 & r && cs(n, n.return);
                            break;
                        case 3:
                            if ($s(e, n), 64 & r && null !== (e = n.updateQueue)) {
                                if (t = null, null !== n.child) switch (n.child.tag) {
                                    case 27:
                                    case 5:
                                    case 1:
                                        t = n.child.stateNode
                                }
                                try {
                                    po(e, t)
                                } catch (e) {
                                    cc(n, n.return, e)
                                }
                            }
                            break;
                        case 27:
                            null === t && 4 & r && ys(n);
                        case 26:
                        case 5:
                            $s(e, n), null === t && 4 & r && fs(n), 512 & r && cs(n, n.return);
                            break;
                        case 12:
                            $s(e, n);
                            break;
                        case 13:
                            $s(e, n), 4 & r && Os(e, n), 64 & r && null !== (e = n.memoizedState) && null !== (e = e.dehydrated) && function(e, t) {
                                var n = e.ownerDocument;
                                if ("$?" !== e.data || "complete" === n.readyState) t();
                                else {
                                    var r = function() {
                                        t(), n.removeEventListener("DOMContentLoaded", r)
                                    };
                                    n.addEventListener("DOMContentLoaded", r), e._reactRetry = r
                                }
                            }(e, n = hc.bind(null, n));
                            break;
                        case 22:
                            if (!(r = null !== n.memoizedState || bs)) {
                                t = null !== t && null !== t.memoizedState || ws, a = bs;
                                var o = ws;
                                bs = r, (ws = t) && !o ? Ds(e, n, !!(8772 & n.subtreeFlags)) : $s(e, n), bs = a, ws = o
                            }
                            break;
                        case 30:
                            break;
                        default:
                            $s(e, n)
                    }
                }

                function zs(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, zs(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && Fe(t), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }
                var Es = null,
                    Cs = !1;

                function Ns(e, t, n) {
                    for (n = n.child; null !== n;) Ps(e, t, n), n = n.sibling
                }

                function Ps(e, t, n) {
                    if (de && "function" == typeof de.onCommitFiberUnmount) try {
                        de.onCommitFiberUnmount(ce, n)
                    } catch (e) {}
                    switch (n.tag) {
                        case 26:
                            ws || ds(n, t), Ns(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                            break;
                        case 27:
                            ws || ds(n, t);
                            var r = Es,
                                a = Cs;
                            pd(n.type) && (Es = n.stateNode, Cs = !1), Ns(e, t, n), _d(n.stateNode), Es = r, Cs = a;
                            break;
                        case 5:
                            ws || ds(n, t);
                        case 6:
                            if (r = Es, a = Cs, Es = null, Ns(e, t, n), Cs = a, null !== (Es = r))
                                if (Cs) try {
                                    (9 === Es.nodeType ? Es.body : "HTML" === Es.nodeName ? Es.ownerDocument.body : Es).removeChild(n.stateNode)
                                } catch (e) {
                                    cc(n, t, e)
                                } else try {
                                    Es.removeChild(n.stateNode)
                                } catch (e) {
                                    cc(n, t, e)
                                }
                            break;
                        case 18:
                            null !== Es && (Cs ? (hd(9 === (e = Es).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), Nf(e)) : hd(Es, n.stateNode));
                            break;
                        case 4:
                            r = Es, a = Cs, Es = n.stateNode.containerInfo, Cs = !0, Ns(e, t, n), Es = r, Cs = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ws || ls(2, n, t), ws || ls(4, n, t), Ns(e, t, n);
                            break;
                        case 1:
                            ws || (ds(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount && us(n, t, r)), Ns(e, t, n);
                            break;
                        case 21:
                            Ns(e, t, n);
                            break;
                        case 22:
                            ws = (r = ws) || null !== n.memoizedState, Ns(e, t, n), ws = r;
                            break;
                        default:
                            Ns(e, t, n)
                    }
                }

                function Os(e, t) {
                    if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated)) try {
                        Nf(e)
                    } catch (e) {
                        cc(t, t.return, e)
                    }
                }

                function js(e, t) {
                    var n = function(e) {
                        switch (e.tag) {
                            case 13:
                            case 19:
                                var t = e.stateNode;
                                return null === t && (t = e.stateNode = new xs), t;
                            case 22:
                                return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new xs), t;
                            default:
                                throw Error(i(435, e.tag))
                        }
                    }(e);
                    t.forEach(function(t) {
                        var r = mc.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    })
                }

                function Ls(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                                o = e,
                                l = t,
                                s = l;
                            e: for (; null !== s;) {
                                switch (s.tag) {
                                    case 27:
                                        if (pd(s.type)) {
                                            Es = s.stateNode, Cs = !1;
                                            break e
                                        }
                                        break;
                                    case 5:
                                        Es = s.stateNode, Cs = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        Es = s.stateNode.containerInfo, Cs = !0;
                                        break e
                                }
                                s = s.return
                            }
                            if (null === Es) throw Error(i(160));
                            Ps(o, l, a), Es = null, Cs = !1, null !== (o = a.alternate) && (o.return = null), a.return = null
                        }
                    if (13878 & t.subtreeFlags)
                        for (t = t.child; null !== t;) Rs(t, e), t = t.sibling
                }
                var Ts = null;

                function Rs(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ls(t, e), Ms(e), 4 & r && (ls(3, e, e.return), is(3, e), ls(5, e, e.return));
                            break;
                        case 1:
                            Ls(t, e), Ms(e), 512 & r && (ws || null === n || ds(n, n.return)), 64 & r && bs && null !== (e = e.updateQueue) && null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? r : n.concat(r));
                            break;
                        case 26:
                            var a = Ts;
                            if (Ls(t, e), Ms(e), 512 & r && (ws || null === n || ds(n, n.return)), 4 & r) {
                                var o = null !== n ? n.memoizedState : null;
                                if (r = e.memoizedState, null === n)
                                    if (null === r)
                                        if (null === e.stateNode) {
                                            e: {
                                                r = e.type,
                                                n = e.memoizedProps,
                                                a = a.ownerDocument || a;t: switch (r) {
                                                    case "title":
                                                        (!(o = a.getElementsByTagName("title")[0]) || o[De] || o[Le] || "http://www.w3.org/2000/svg" === o.namespaceURI || o.hasAttribute("itemprop")) && (o = a.createElement(r), a.head.insertBefore(o, a.querySelector("head > title"))), ed(o, r, n), o[Le] = e, He(o), r = o;
                                                        break e;
                                                    case "link":
                                                        var l = Dd("link", "href", a).get(r + (n.href || ""));
                                                        if (l)
                                                            for (var s = 0; s < l.length; s++)
                                                                if ((o = l[s]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && o.getAttribute("rel") === (null == n.rel ? null : n.rel) && o.getAttribute("title") === (null == n.title ? null : n.title) && o.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                                    l.splice(s, 1);
                                                                    break t
                                                                } ed(o = a.createElement(r), r, n), a.head.appendChild(o);
                                                        break;
                                                    case "meta":
                                                        if (l = Dd("meta", "content", a).get(r + (n.content || "")))
                                                            for (s = 0; s < l.length; s++)
                                                                if ((o = l[s]).getAttribute("content") === (null == n.content ? null : "" + n.content) && o.getAttribute("name") === (null == n.name ? null : n.name) && o.getAttribute("property") === (null == n.property ? null : n.property) && o.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && o.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                                    l.splice(s, 1);
                                                                    break t
                                                                } ed(o = a.createElement(r), r, n), a.head.appendChild(o);
                                                        break;
                                                    default:
                                                        throw Error(i(468, r))
                                                }
                                                o[Le] = e,
                                                He(o),
                                                r = o
                                            }
                                            e.stateNode = r
                                        }
                                else Fd(a, e.type, e.stateNode);
                                else e.stateNode = Rd(a, r, e.memoizedProps);
                                else o !== r ? (null === o ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : o.count--, null === r ? Fd(a, e.type, e.stateNode) : Rd(a, r, e.memoizedProps)) : null === r && null !== e.stateNode && ps(e, e.memoizedProps, n.memoizedProps)
                            }
                            break;
                        case 27:
                            Ls(t, e), Ms(e), 512 & r && (ws || null === n || ds(n, n.return)), null !== n && 4 & r && ps(e, e.memoizedProps, n.memoizedProps);
                            break;
                        case 5:
                            if (Ls(t, e), Ms(e), 512 & r && (ws || null === n || ds(n, n.return)), 32 & e.flags) {
                                a = e.stateNode;
                                try {
                                    xt(a, "")
                                } catch (t) {
                                    cc(e, e.return, t)
                                }
                            }
                            4 & r && null != e.stateNode && ps(e, a = e.memoizedProps, null !== n ? n.memoizedProps : a), 1024 & r && (_s = !0);
                            break;
                        case 6:
                            if (Ls(t, e), Ms(e), 4 & r) {
                                if (null === e.stateNode) throw Error(i(162));
                                r = e.memoizedProps, n = e.stateNode;
                                try {
                                    n.nodeValue = r
                                } catch (t) {
                                    cc(e, e.return, t)
                                }
                            }
                            break;
                        case 3:
                            if (Id = null, a = Ts, Ts = Sd(t.containerInfo), Ls(t, e), Ts = a, Ms(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Nf(t.containerInfo)
                            } catch (t) {
                                cc(e, e.return, t)
                            }
                            _s && (_s = !1, As(e));
                            break;
                        case 4:
                            r = Ts, Ts = Sd(e.stateNode.containerInfo), Ls(t, e), Ms(e), Ts = r;
                            break;
                        case 12:
                        default:
                            Ls(t, e), Ms(e);
                            break;
                        case 13:
                            Ls(t, e), Ms(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== n && null !== n.memoizedState) && (_u = te()), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, js(e, r));
                            break;
                        case 22:
                            a = null !== e.memoizedState;
                            var u = null !== n && null !== n.memoizedState,
                                c = bs,
                                d = ws;
                            if (bs = c || a, ws = d || u, Ls(t, e), ws = d, bs = c, Ms(e), 8192 & r) e: for (t = e.stateNode, t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (null === n || u || bs || ws || Is(e)), n = null, t = e;;) {
                                if (5 === t.tag || 26 === t.tag) {
                                    if (null === n) {
                                        u = n = t;
                                        try {
                                            if (o = u.stateNode, a) "function" == typeof(l = o.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none";
                                            else {
                                                s = u.stateNode;
                                                var f = u.memoizedProps.style,
                                                    p = null != f && f.hasOwnProperty("display") ? f.display : null;
                                                s.style.display = null == p || "boolean" == typeof p ? "" : ("" + p).trim()
                                            }
                                        } catch (e) {
                                            cc(u, u.return, e)
                                        }
                                    }
                                } else if (6 === t.tag) {
                                    if (null === n) {
                                        u = t;
                                        try {
                                            u.stateNode.nodeValue = a ? "" : u.memoizedProps
                                        } catch (e) {
                                            cc(u, u.return, e)
                                        }
                                    }
                                } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                                    t.child.return = t, t = t.child;
                                    continue
                                }
                                if (t === e) break e;
                                for (; null === t.sibling;) {
                                    if (null === t.return || t.return === e) break e;
                                    n === t && (n = null), t = t.return
                                }
                                n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                            }
                            4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && (r.retryQueue = null, js(e, n));
                            break;
                        case 19:
                            Ls(t, e), Ms(e), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, js(e, r));
                        case 30:
                        case 21:
                    }
                }

                function Ms(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            for (var n, r = e.return; null !== r;) {
                                if (hs(r)) {
                                    n = r;
                                    break
                                }
                                r = r.return
                            }
                            if (null == n) throw Error(i(160));
                            switch (n.tag) {
                                case 27:
                                    var a = n.stateNode;
                                    vs(e, ms(e), a);
                                    break;
                                case 5:
                                    var o = n.stateNode;
                                    32 & n.flags && (xt(o, ""), n.flags &= -33), vs(e, ms(e), o);
                                    break;
                                case 3:
                                case 4:
                                    var l = n.stateNode.containerInfo;
                                    gs(e, ms(e), l);
                                    break;
                                default:
                                    throw Error(i(161))
                            }
                        } catch (t) {
                            cc(e, e.return, t)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function As(e) {
                    if (1024 & e.subtreeFlags)
                        for (e = e.child; null !== e;) {
                            var t = e;
                            As(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), e = e.sibling
                        }
                }

                function $s(e, t) {
                    if (8772 & t.subtreeFlags)
                        for (t = t.child; null !== t;) Ss(e, t.alternate, t), t = t.sibling
                }

                function Is(e) {
                    for (e = e.child; null !== e;) {
                        var t = e;
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                ls(4, t, t.return), Is(t);
                                break;
                            case 1:
                                ds(t, t.return);
                                var n = t.stateNode;
                                "function" == typeof n.componentWillUnmount && us(t, t.return, n), Is(t);
                                break;
                            case 27:
                                _d(t.stateNode);
                            case 26:
                            case 5:
                                ds(t, t.return), Is(t);
                                break;
                            case 22:
                                null === t.memoizedState && Is(t);
                                break;
                            default:
                                Is(t)
                        }
                        e = e.sibling
                    }
                }

                function Ds(e, t, n) {
                    for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t;) {
                        var r = t.alternate,
                            a = e,
                            o = t,
                            i = o.flags;
                        switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ds(a, o, n), is(4, o);
                                break;
                            case 1:
                                if (Ds(a, o, n), "function" == typeof(a = (r = o).stateNode).componentDidMount) try {
                                    a.componentDidMount()
                                } catch (e) {
                                    cc(r, r.return, e)
                                }
                                if (null !== (a = (r = o).updateQueue)) {
                                    var l = r.stateNode;
                                    try {
                                        var s = a.shared.hiddenCallbacks;
                                        if (null !== s)
                                            for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) fo(s[a], l)
                                    } catch (e) {
                                        cc(r, r.return, e)
                                    }
                                }
                                n && 64 & i && ss(o), cs(o, o.return);
                                break;
                            case 27:
                                ys(o);
                            case 26:
                            case 5:
                                Ds(a, o, n), n && null === r && 4 & i && fs(o), cs(o, o.return);
                                break;
                            case 12:
                                Ds(a, o, n);
                                break;
                            case 13:
                                Ds(a, o, n), n && 4 & i && Os(a, o);
                                break;
                            case 22:
                                null === o.memoizedState && Ds(a, o, n), cs(o, o.return);
                                break;
                            case 30:
                                break;
                            default:
                                Ds(a, o, n)
                        }
                        t = t.sibling
                    }
                }

                function Fs(e, t) {
                    var n = null;
                    null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Ra(n))
                }

                function Us(e, t) {
                    e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ra(e))
                }

                function Vs(e, t, n, r) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t;) Zs(e, t, n, r), t = t.sibling
                }

                function Zs(e, t, n, r) {
                    var a = t.flags;
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Vs(e, t, n, r), 2048 & a && is(9, t);
                            break;
                        case 1:
                        case 13:
                        default:
                            Vs(e, t, n, r);
                            break;
                        case 3:
                            Vs(e, t, n, r), 2048 & a && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ra(e)));
                            break;
                        case 12:
                            if (2048 & a) {
                                Vs(e, t, n, r), e = t.stateNode;
                                try {
                                    var o = t.memoizedProps,
                                        i = o.id,
                                        l = o.onPostCommit;
                                    "function" == typeof l && l(i, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                                } catch (e) {
                                    cc(t, t.return, e)
                                }
                            } else Vs(e, t, n, r);
                            break;
                        case 23:
                            break;
                        case 22:
                            o = t.stateNode, i = t.alternate, null !== t.memoizedState ? 2 & o._visibility ? Vs(e, t, n, r) : Hs(e, t) : 2 & o._visibility ? Vs(e, t, n, r) : (o._visibility |= 2, Bs(e, t, n, r, !!(10256 & t.subtreeFlags))), 2048 & a && Fs(i, t);
                            break;
                        case 24:
                            Vs(e, t, n, r), 2048 & a && Us(t.alternate, t)
                    }
                }

                function Bs(e, t, n, r, a) {
                    for (a = a && !!(10256 & t.subtreeFlags), t = t.child; null !== t;) {
                        var o = e,
                            i = t,
                            l = n,
                            s = r,
                            u = i.flags;
                        switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Bs(o, i, l, s, a), is(8, i);
                                break;
                            case 23:
                                break;
                            case 22:
                                var c = i.stateNode;
                                null !== i.memoizedState ? 2 & c._visibility ? Bs(o, i, l, s, a) : Hs(o, i) : (c._visibility |= 2, Bs(o, i, l, s, a)), a && 2048 & u && Fs(i.alternate, i);
                                break;
                            case 24:
                                Bs(o, i, l, s, a), a && 2048 & u && Us(i.alternate, i);
                                break;
                            default:
                                Bs(o, i, l, s, a)
                        }
                        t = t.sibling
                    }
                }

                function Hs(e, t) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t;) {
                            var n = e,
                                r = t,
                                a = r.flags;
                            switch (r.tag) {
                                case 22:
                                    Hs(n, r), 2048 & a && Fs(r.alternate, r);
                                    break;
                                case 24:
                                    Hs(n, r), 2048 & a && Us(r.alternate, r);
                                    break;
                                default:
                                    Hs(n, r)
                            }
                            t = t.sibling
                        }
                }
                var Ws = 8192;

                function qs(e) {
                    if (e.subtreeFlags & Ws)
                        for (e = e.child; null !== e;) Gs(e), e = e.sibling
                }

                function Gs(e) {
                    switch (e.tag) {
                        case 26:
                            qs(e), e.flags & Ws && null !== e.memoizedState && function(e, t, n) {
                                if (null === Vd) throw Error(i(475));
                                var r = Vd;
                                if (!("stylesheet" !== t.type || "string" == typeof n.media && !1 === matchMedia(n.media).matches || 4 & t.state.loading)) {
                                    if (null === t.instance) {
                                        var a = Pd(n.href),
                                            o = e.querySelector(Od(a));
                                        if (o) return null !== (e = o._p) && "object" == typeof e && "function" == typeof e.then && (r.count++, r = Bd.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = o, void He(o);
                                        o = e.ownerDocument || e, n = jd(n), (a = xd.get(a)) && Ad(n, a), He(o = o.createElement("link"));
                                        var l = o;
                                        l._p = new Promise(function(e, t) {
                                            l.onload = e, l.onerror = t
                                        }), ed(o, "link", n), t.instance = o
                                    }
                                    null === r.stylesheets && (r.stylesheets = new Map), r.stylesheets.set(t, e), (e = t.state.preload) && !(3 & t.state.loading) && (r.count++, t = Bd.bind(r), e.addEventListener("load", t), e.addEventListener("error", t))
                                }
                            }(Ts, e.memoizedState, e.memoizedProps);
                            break;
                        case 5:
                        default:
                            qs(e);
                            break;
                        case 3:
                        case 4:
                            var t = Ts;
                            Ts = Sd(e.stateNode.containerInfo), qs(e), Ts = t;
                            break;
                        case 22:
                            null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = Ws, Ws = 16777216, qs(e), Ws = t) : qs(e))
                    }
                }

                function Ks(e) {
                    var t = e.alternate;
                    if (null !== t && null !== (e = t.child)) {
                        t.child = null;
                        do {
                            t = e.sibling, e.sibling = null, e = t
                        } while (null !== e)
                    }
                }

                function Qs(e) {
                    var t = e.deletions;
                    if (16 & e.flags) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                ks = r, Xs(r, e)
                            }
                        Ks(e)
                    }
                    if (10256 & e.subtreeFlags)
                        for (e = e.child; null !== e;) Ys(e), e = e.sibling
                }

                function Ys(e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Qs(e), 2048 & e.flags && ls(9, e, e.return);
                            break;
                        case 3:
                        case 12:
                        default:
                            Qs(e);
                            break;
                        case 22:
                            var t = e.stateNode;
                            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, Js(e)) : Qs(e)
                    }
                }

                function Js(e) {
                    var t = e.deletions;
                    if (16 & e.flags) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                ks = r, Xs(r, e)
                            }
                        Ks(e)
                    }
                    for (e = e.child; null !== e;) {
                        switch ((t = e).tag) {
                            case 0:
                            case 11:
                            case 15:
                                ls(8, t, t.return), Js(t);
                                break;
                            case 22:
                                2 & (n = t.stateNode)._visibility && (n._visibility &= -3, Js(t));
                                break;
                            default:
                                Js(t)
                        }
                        e = e.sibling
                    }
                }

                function Xs(e, t) {
                    for (; null !== ks;) {
                        var n = ks;
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ls(8, n, t);
                                break;
                            case 23:
                            case 22:
                                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                                    var r = n.memoizedState.cachePool.pool;
                                    null != r && r.refCount++
                                }
                                break;
                            case 24:
                                Ra(n.memoizedState.cache)
                        }
                        if (null !== (r = n.child)) r.return = n, ks = r;
                        else e: for (n = e; null !== ks;) {
                            var a = (r = ks).sibling,
                                o = r.return;
                            if (zs(r), r === n) {
                                ks = null;
                                break e
                            }
                            if (null !== a) {
                                a.return = o, ks = a;
                                break e
                            }
                            ks = o
                        }
                    }
                }
                var eu = {
                        getCacheForType: function(e) {
                            var t = Ea(La),
                                n = t.data.get(e);
                            return void 0 === n && (n = e(), t.data.set(e, n)), n
                        }
                    },
                    tu = "function" == typeof WeakMap ? WeakMap : Map,
                    nu = 0,
                    ru = null,
                    au = null,
                    ou = 0,
                    iu = 0,
                    lu = null,
                    su = !1,
                    uu = !1,
                    cu = !1,
                    du = 0,
                    fu = 0,
                    pu = 0,
                    hu = 0,
                    mu = 0,
                    gu = 0,
                    vu = 0,
                    yu = null,
                    bu = null,
                    wu = !1,
                    _u = 0,
                    xu = 1 / 0,
                    ku = null,
                    Su = null,
                    zu = 0,
                    Eu = null,
                    Cu = null,
                    Nu = 0,
                    Pu = 0,
                    Ou = null,
                    ju = null,
                    Lu = 0,
                    Tu = null;

                function Ru() {
                    return 2 & nu && 0 !== ou ? ou & -ou : null !== R.T ? 0 !== $a ? $a : Pc() : Oe()
                }

                function Mu() {
                    0 === gu && (gu = 536870912 & ou && !oa ? 536870912 : xe());
                    var e = al.current;
                    return null !== e && (e.flags |= 32), gu
                }

                function Au(e, t, n) {
                    (e !== ru || 2 !== iu && 9 !== iu) && null === e.cancelPendingCommit || (Zu(e, 0), Fu(e, ou, gu, !1)), ze(e, n), 2 & nu && e === ru || (e === ru && (!(2 & nu) && (hu |= n), 4 === fu && Fu(e, ou, gu, !1)), xc(e))
                }

                function $u(e, t, n) {
                    if (6 & nu) throw Error(i(327));
                    for (var r = !n && !(124 & t) && 0 === (t & e.expiredLanes) || we(e, t), a = r ? function(e, t) {
                            var n = nu;
                            nu |= 2;
                            var r = Hu(),
                                a = Wu();
                            ru !== e || ou !== t ? (ku = null, xu = te() + 500, Zu(e, t)) : uu = we(e, t);
                            e: for (;;) try {
                                if (0 !== iu && null !== au) {
                                    t = au;
                                    var o = lu;
                                    t: switch (iu) {
                                        case 1:
                                            iu = 0, lu = null, Xu(e, t, o, 1);
                                            break;
                                        case 2:
                                        case 9:
                                            if (Ka(o)) {
                                                iu = 0, lu = null, Ju(t);
                                                break
                                            }
                                            t = function() {
                                                2 !== iu && 9 !== iu || ru !== e || (iu = 7), xc(e)
                                            }, o.then(t, t);
                                            break e;
                                        case 3:
                                            iu = 7;
                                            break e;
                                        case 4:
                                            iu = 5;
                                            break e;
                                        case 7:
                                            Ka(o) ? (iu = 0, lu = null, Ju(t)) : (iu = 0, lu = null, Xu(e, t, o, 7));
                                            break;
                                        case 5:
                                            var l = null;
                                            switch (au.tag) {
                                                case 26:
                                                    l = au.memoizedState;
                                                case 5:
                                                case 27:
                                                    var s = au;
                                                    if (!l || Ud(l)) {
                                                        iu = 0, lu = null;
                                                        var u = s.sibling;
                                                        if (null !== u) au = u;
                                                        else {
                                                            var c = s.return;
                                                            null !== c ? (au = c, ec(c)) : au = null
                                                        }
                                                        break t
                                                    }
                                            }
                                            iu = 0, lu = null, Xu(e, t, o, 5);
                                            break;
                                        case 6:
                                            iu = 0, lu = null, Xu(e, t, o, 6);
                                            break;
                                        case 8:
                                            Vu(), fu = 6;
                                            break e;
                                        default:
                                            throw Error(i(462))
                                    }
                                }
                                Qu();
                                break
                            } catch (t) {
                                Bu(e, t)
                            }
                            return ya = va = null, R.H = r, R.A = a, nu = n, null !== au ? 0 : (ru = null, ou = 0, Nr(), fu)
                        }(e, t) : Gu(e, t, !0), o = r;;) {
                        if (0 === a) {
                            uu && !r && Fu(e, t, 0, !1);
                            break
                        }
                        if (n = e.current.alternate, !o || Du(n)) {
                            if (2 === a) {
                                if (o = t, e.errorRecoveryDisabledLanes & o) var l = 0;
                                else l = 0 != (l = -536870913 & e.pendingLanes) ? l : 536870912 & l ? 536870912 : 0;
                                if (0 !== l) {
                                    t = l;
                                    e: {
                                        var s = e;a = yu;
                                        var u = s.current.memoizedState.isDehydrated;
                                        if (u && (Zu(s, l).flags |= 256), 2 !== (l = Gu(s, l, !1))) {
                                            if (cu && !u) {
                                                s.errorRecoveryDisabledLanes |= o, hu |= o, a = 4;
                                                break e
                                            }
                                            o = bu, bu = a, null !== o && (null === bu ? bu = o : bu.push.apply(bu, o))
                                        }
                                        a = l
                                    }
                                    if (o = !1, 2 !== a) continue
                                }
                            }
                            if (1 === a) {
                                Zu(e, 0), Fu(e, t, 0, !0);
                                break
                            }
                            e: {
                                switch (r = e, o = a) {
                                    case 0:
                                    case 1:
                                        throw Error(i(345));
                                    case 4:
                                        if ((4194048 & t) !== t) break;
                                    case 6:
                                        Fu(r, t, gu, !su);
                                        break e;
                                    case 2:
                                        bu = null;
                                        break;
                                    case 3:
                                    case 5:
                                        break;
                                    default:
                                        throw Error(i(329))
                                }
                                if ((62914560 & t) === t && 10 < (a = _u + 300 - te())) {
                                    if (Fu(r, t, gu, !su), 0 !== be(r, 0, !0)) break e;
                                    r.timeoutHandle = sd(Iu.bind(null, r, n, bu, ku, wu, t, gu, hu, vu, su, o, 2, -0, 0), a)
                                } else Iu(r, n, bu, ku, wu, t, gu, hu, vu, su, o, 0, -0, 0)
                            }
                            break
                        }
                        a = Gu(e, t, !1), o = !1
                    }
                    xc(e)
                }

                function Iu(e, t, n, r, a, o, l, s, u, c, d, f, p, h) {
                    if (e.timeoutHandle = -1, (8192 & (f = t.subtreeFlags) || !(16785408 & ~f)) && (Vd = {
                            stylesheets: null,
                            count: 0,
                            unsuspend: Zd
                        }, Gs(t), null !== (f = function() {
                            if (null === Vd) throw Error(i(475));
                            var e = Vd;
                            return e.stylesheets && 0 === e.count && Wd(e, e.stylesheets), 0 < e.count ? function(t) {
                                var n = setTimeout(function() {
                                    if (e.stylesheets && Wd(e, e.stylesheets), e.unsuspend) {
                                        var t = e.unsuspend;
                                        e.unsuspend = null, t()
                                    }
                                }, 6e4);
                                return e.unsuspend = t,
                                    function() {
                                        e.unsuspend = null, clearTimeout(n)
                                    }
                            } : null
                        }()))) return e.cancelPendingCommit = f(nc.bind(null, e, t, o, n, r, a, l, s, u, d, 1, p, h)), void Fu(e, o, l, !c);
                    nc(e, t, o, n, r, a, l, s, u)
                }

                function Du(e) {
                    for (var t = e;;) {
                        var n = t.tag;
                        if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r],
                                    o = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!Kn(o(), a)) return !1
                                } catch (e) {
                                    return !1
                                }
                            }
                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                        else {
                            if (t === e) break;
                            for (; null === t.sibling;) {
                                if (null === t.return || t.return === e) return !0;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return !0
                }

                function Fu(e, t, n, r) {
                    t &= ~mu, t &= ~hu, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
                    for (var a = t; 0 < a;) {
                        var o = 31 - pe(a),
                            i = 1 << o;
                        r[o] = -1, a &= ~i
                    }
                    0 !== n && Ee(e, n, t)
                }

                function Uu() {
                    return !!(6 & nu) || (kc(0, !1), !1)
                }

                function Vu() {
                    if (null !== au) {
                        if (0 === iu) var e = au.return;
                        else ya = va = null, Io(e = au), Ki = null, Qi = 0, e = au;
                        for (; null !== e;) os(e.alternate, e), e = e.return;
                        au = null
                    }
                }

                function Zu(e, t) {
                    var n = e.timeoutHandle; - 1 !== n && (e.timeoutHandle = -1, ud(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), Vu(), ru = e, au = n = Ir(e.current, null), ou = t, iu = 0, lu = null, su = !1, uu = we(e, t), cu = !1, vu = gu = mu = hu = pu = fu = 0, bu = yu = null, wu = !1, 8 & t && (t |= 32 & t);
                    var r = e.entangledLanes;
                    if (0 !== r)
                        for (e = e.entanglements, r &= t; 0 < r;) {
                            var a = 31 - pe(r),
                                o = 1 << a;
                            t |= e[a], r &= ~o
                        }
                    return du = t, Nr(), n
                }

                function Bu(e, t) {
                    wo = null, R.H = Hi, t === Ha || t === qa ? (t = Xa(), iu = 3) : t === Wa ? (t = Xa(), iu = 4) : iu = t === El ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1, lu = t, null === au && (fu = 1, _l(e, Sr(t, e.current)))
                }

                function Hu() {
                    var e = R.H;
                    return R.H = Hi, null === e ? Hi : e
                }

                function Wu() {
                    var e = R.A;
                    return R.A = eu, e
                }

                function qu() {
                    fu = 4, su || (4194048 & ou) !== ou && null !== al.current || (uu = !0), !(134217727 & pu) && !(134217727 & hu) || null === ru || Fu(ru, ou, gu, !1)
                }

                function Gu(e, t, n) {
                    var r = nu;
                    nu |= 2;
                    var a = Hu(),
                        o = Wu();
                    ru === e && ou === t || (ku = null, Zu(e, t)), t = !1;
                    var i = fu;
                    e: for (;;) try {
                        if (0 !== iu && null !== au) {
                            var l = au,
                                s = lu;
                            switch (iu) {
                                case 8:
                                    Vu(), i = 6;
                                    break e;
                                case 3:
                                case 2:
                                case 9:
                                case 6:
                                    null === al.current && (t = !0);
                                    var u = iu;
                                    if (iu = 0, lu = null, Xu(e, l, s, u), n && uu) {
                                        i = 0;
                                        break e
                                    }
                                    break;
                                default:
                                    u = iu, iu = 0, lu = null, Xu(e, l, s, u)
                            }
                        }
                        Ku(), i = fu;
                        break
                    } catch (t) {
                        Bu(e, t)
                    }
                    return t && e.shellSuspendCounter++, ya = va = null, nu = r, R.H = a, R.A = o, null === au && (ru = null, ou = 0, Nr()), i
                }

                function Ku() {
                    for (; null !== au;) Yu(au)
                }

                function Qu() {
                    for (; null !== au && !X();) Yu(au)
                }

                function Yu(e) {
                    var t = Yl(e.alternate, e, du);
                    e.memoizedProps = e.pendingProps, null === t ? ec(e) : au = t
                }

                function Ju(e) {
                    var t = e,
                        n = t.alternate;
                    switch (t.tag) {
                        case 15:
                        case 0:
                            t = Al(n, t, t.pendingProps, t.type, void 0, ou);
                            break;
                        case 11:
                            t = Al(n, t, t.pendingProps, t.type.render, t.ref, ou);
                            break;
                        case 5:
                            Io(t);
                        default:
                            os(n, t), t = Yl(n, t = au = Dr(t, du), du)
                    }
                    e.memoizedProps = e.pendingProps, null === t ? ec(e) : au = t
                }

                function Xu(e, t, n, r) {
                    ya = va = null, Io(t), Ki = null, Qi = 0;
                    var a = t.return;
                    try {
                        if (function(e, t, n, r, a) {
                                if (n.flags |= 32768, null !== r && "object" == typeof r && "function" == typeof r.then) {
                                    if (null !== (t = n.alternate) && ka(t, n, a, !0), null !== (n = al.current)) {
                                        switch (n.tag) {
                                            case 13:
                                                return null === ol ? qu() : null === n.alternate && 0 === fu && (fu = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ga ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), dc(e, r, a)), !1;
                                            case 22:
                                                return n.flags |= 65536, r === Ga ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                                    transitions: null,
                                                    markerInstances: null,
                                                    retryQueue: new Set([r])
                                                }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), dc(e, r, a)), !1
                                        }
                                        throw Error(i(435, n.tag))
                                    }
                                    return dc(e, r, a), qu(), !1
                                }
                                if (oa) return null !== (t = al.current) ? (!(65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== sa && ma(Sr(e = Error(i(422), {
                                    cause: r
                                }), n))) : (r !== sa && ma(Sr(t = Error(i(423), {
                                    cause: r
                                }), n)), (e = e.current.alternate).flags |= 65536, a &= -a, e.lanes |= a, r = Sr(r, n), lo(e, a = kl(e.stateNode, r, a)), 4 !== fu && (fu = 2)), !1;
                                var o = Error(i(520), {
                                    cause: r
                                });
                                if (o = Sr(o, n), null === yu ? yu = [o] : yu.push(o), 4 !== fu && (fu = 2), null === t) return !0;
                                r = Sr(r, n), n = t;
                                do {
                                    switch (n.tag) {
                                        case 3:
                                            return n.flags |= 65536, e = a & -a, n.lanes |= e, lo(n, e = kl(n.stateNode, r, e)), !1;
                                        case 1:
                                            if (t = n.type, o = n.stateNode, !(128 & n.flags || "function" != typeof t.getDerivedStateFromError && (null === o || "function" != typeof o.componentDidCatch || null !== Su && Su.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, zl(a = Sl(a), e, n, r), lo(n, a), !1
                                    }
                                    n = n.return
                                } while (null !== n);
                                return !1
                            }(e, a, t, n, ou)) return fu = 1, _l(e, Sr(n, e.current)), void(au = null)
                    } catch (t) {
                        if (null !== a) throw au = a, t;
                        return fu = 1, _l(e, Sr(n, e.current)), void(au = null)
                    }
                    32768 & t.flags ? (oa || 1 === r ? e = !0 : uu || 536870912 & ou ? e = !1 : (su = e = !0, (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = al.current) && 13 === r.tag && (r.flags |= 16384)), tc(t, e)) : ec(t)
                }

                function ec(e) {
                    var t = e;
                    do {
                        if (32768 & t.flags) return void tc(t, su);
                        e = t.return;
                        var n = rs(t.alternate, t, du);
                        if (null !== n) return void(au = n);
                        if (null !== (t = t.sibling)) return void(au = t);
                        au = t = e
                    } while (null !== t);
                    0 === fu && (fu = 5)
                }

                function tc(e, t) {
                    do {
                        var n = as(e.alternate, e);
                        if (null !== n) return n.flags &= 32767, void(au = n);
                        if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling)) return void(au = e);
                        au = e = n
                    } while (null !== e);
                    fu = 6, au = null
                }

                function nc(e, t, n, r, a, o, l, s, u) {
                    e.cancelPendingCommit = null;
                    do {
                        lc()
                    } while (0 !== zu);
                    if (6 & nu) throw Error(i(327));
                    if (null !== t) {
                        if (t === e.current) throw Error(i(177));
                        if (o = t.lanes | t.childLanes, function(e, t, n, r, a, o) {
                                var i = e.pendingLanes;
                                e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                                var l = e.entanglements,
                                    s = e.expirationTimes,
                                    u = e.hiddenUpdates;
                                for (n = i & ~n; 0 < n;) {
                                    var c = 31 - pe(n),
                                        d = 1 << c;
                                    l[c] = 0, s[c] = -1;
                                    var f = u[c];
                                    if (null !== f)
                                        for (u[c] = null, c = 0; c < f.length; c++) {
                                            var p = f[c];
                                            null !== p && (p.lane &= -536870913)
                                        }
                                    n &= ~d
                                }
                                0 !== r && Ee(e, r, 0), 0 !== o && 0 === a && 0 !== e.tag && (e.suspendedLanes |= o & ~(i & ~t))
                            }(e, n, o |= Cr, l, s, u), e === ru && (au = ru = null, ou = 0), Cu = t, Eu = e, Nu = n, Pu = o, Ou = a, ju = r, 10256 & t.subtreeFlags || 10256 & t.flags ? (e.callbackNode = null, e.callbackPriority = 0, Y(oe, function() {
                                return sc(), null
                            })) : (e.callbackNode = null, e.callbackPriority = 0), r = !!(13878 & t.flags), 13878 & t.subtreeFlags || r) {
                            r = R.T, R.T = null, a = M.p, M.p = 2, l = nu, nu |= 4;
                            try {
                                ! function(e, t) {
                                    if (e = e.containerInfo, td = nf, tr(e = er(e))) {
                                        if ("selectionStart" in e) var n = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                        else e: {
                                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                n = r.anchorNode;
                                                var a = r.anchorOffset,
                                                    o = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    n.nodeType, o.nodeType
                                                } catch (e) {
                                                    n = null;
                                                    break e
                                                }
                                                var l = 0,
                                                    s = -1,
                                                    u = -1,
                                                    c = 0,
                                                    d = 0,
                                                    f = e,
                                                    p = null;
                                                t: for (;;) {
                                                    for (var h; f !== n || 0 !== a && 3 !== f.nodeType || (s = l + a), f !== o || 0 !== r && 3 !== f.nodeType || (u = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
                                                    for (;;) {
                                                        if (f === e) break t;
                                                        if (p === n && ++c === a && (s = l), p === o && ++d === r && (u = l), null !== (h = f.nextSibling)) break;
                                                        p = (f = p).parentNode
                                                    }
                                                    f = h
                                                }
                                                n = -1 === s || -1 === u ? null : {
                                                    start: s,
                                                    end: u
                                                }
                                            } else n = null
                                        }
                                        n = n || {
                                            start: 0,
                                            end: 0
                                        }
                                    } else n = null;
                                    for (nd = {
                                            focusedElem: e,
                                            selectionRange: n
                                        }, nf = !1, ks = t; null !== ks;)
                                        if (e = (t = ks).child, 1024 & t.subtreeFlags && null !== e) e.return = t, ks = e;
                                        else
                                            for (; null !== ks;) {
                                                switch (o = (t = ks).alternate, e = t.flags, t.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 26:
                                                    case 27:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (1024 & e && null !== o) {
                                                            e = void 0, n = t, a = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
                                                            try {
                                                                var m = gl(n.type, a, (n.elementType, n.type));
                                                                e = r.getSnapshotBeforeUpdate(m, o), r.__reactInternalSnapshotBeforeUpdate = e
                                                            } catch (e) {
                                                                cc(n, n.return, e)
                                                            }
                                                        }
                                                        break;
                                                    case 3:
                                                        if (1024 & e)
                                                            if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) md(e);
                                                            else if (1 === n) switch (e.nodeName) {
                                                            case "HEAD":
                                                            case "HTML":
                                                            case "BODY":
                                                                md(e);
                                                                break;
                                                            default:
                                                                e.textContent = ""
                                                        }
                                                        break;
                                                    default:
                                                        if (1024 & e) throw Error(i(163))
                                                }
                                                if (null !== (e = t.sibling)) {
                                                    e.return = t.return, ks = e;
                                                    break
                                                }
                                                ks = t.return
                                            }
                                }(e, t)
                            } finally {
                                nu = l, M.p = a, R.T = r
                            }
                        }
                        zu = 1, rc(), ac(), oc()
                    }
                }

                function rc() {
                    if (1 === zu) {
                        zu = 0;
                        var e = Eu,
                            t = Cu,
                            n = !!(13878 & t.flags);
                        if (13878 & t.subtreeFlags || n) {
                            n = R.T, R.T = null;
                            var r = M.p;
                            M.p = 2;
                            var a = nu;
                            nu |= 4;
                            try {
                                Rs(t, e);
                                var o = nd,
                                    i = er(e.containerInfo),
                                    l = o.focusedElem,
                                    s = o.selectionRange;
                                if (i !== l && l && l.ownerDocument && Xn(l.ownerDocument.documentElement, l)) {
                                    if (null !== s && tr(l)) {
                                        var u = s.start,
                                            c = s.end;
                                        if (void 0 === c && (c = u), "selectionStart" in l) l.selectionStart = u, l.selectionEnd = Math.min(c, l.value.length);
                                        else {
                                            var d = l.ownerDocument || document,
                                                f = d && d.defaultView || window;
                                            if (f.getSelection) {
                                                var p = f.getSelection(),
                                                    h = l.textContent.length,
                                                    m = Math.min(s.start, h),
                                                    g = void 0 === s.end ? m : Math.min(s.end, h);
                                                !p.extend && m > g && (i = g, g = m, m = i);
                                                var v = Jn(l, m),
                                                    y = Jn(l, g);
                                                if (v && y && (1 !== p.rangeCount || p.anchorNode !== v.node || p.anchorOffset !== v.offset || p.focusNode !== y.node || p.focusOffset !== y.offset)) {
                                                    var b = d.createRange();
                                                    b.setStart(v.node, v.offset), p.removeAllRanges(), m > g ? (p.addRange(b), p.extend(y.node, y.offset)) : (b.setEnd(y.node, y.offset), p.addRange(b))
                                                }
                                            }
                                        }
                                    }
                                    for (d = [], p = l; p = p.parentNode;) 1 === p.nodeType && d.push({
                                        element: p,
                                        left: p.scrollLeft,
                                        top: p.scrollTop
                                    });
                                    for ("function" == typeof l.focus && l.focus(), l = 0; l < d.length; l++) {
                                        var w = d[l];
                                        w.element.scrollLeft = w.left, w.element.scrollTop = w.top
                                    }
                                }
                                nf = !!td, nd = td = null
                            } finally {
                                nu = a, M.p = r, R.T = n
                            }
                        }
                        e.current = t, zu = 2
                    }
                }

                function ac() {
                    if (2 === zu) {
                        zu = 0;
                        var e = Eu,
                            t = Cu,
                            n = !!(8772 & t.flags);
                        if (8772 & t.subtreeFlags || n) {
                            n = R.T, R.T = null;
                            var r = M.p;
                            M.p = 2;
                            var a = nu;
                            nu |= 4;
                            try {
                                Ss(e, t.alternate, t)
                            } finally {
                                nu = a, M.p = r, R.T = n
                            }
                        }
                        zu = 3
                    }
                }

                function oc() {
                    if (4 === zu || 3 === zu) {
                        zu = 0, ee();
                        var e = Eu,
                            t = Cu,
                            n = Nu,
                            r = ju;
                        10256 & t.subtreeFlags || 10256 & t.flags ? zu = 5 : (zu = 0, Cu = Eu = null, ic(e, e.pendingLanes));
                        var a = e.pendingLanes;
                        if (0 === a && (Su = null), Pe(n), t = t.stateNode, de && "function" == typeof de.onCommitFiberRoot) try {
                            de.onCommitFiberRoot(ce, t, void 0, !(128 & ~t.current.flags))
                        } catch (e) {}
                        if (null !== r) {
                            t = R.T, a = M.p, M.p = 2, R.T = null;
                            try {
                                for (var o = e.onRecoverableError, i = 0; i < r.length; i++) {
                                    var l = r[i];
                                    o(l.value, {
                                        componentStack: l.stack
                                    })
                                }
                            } finally {
                                R.T = t, M.p = a
                            }
                        }
                        3 & Nu && lc(), xc(e), a = e.pendingLanes, 4194090 & n && 42 & a ? e === Tu ? Lu++ : (Lu = 0, Tu = e) : Lu = 0, kc(0, !1)
                    }
                }

                function ic(e, t) {
                    0 === (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && (e.pooledCache = null, Ra(t))
                }

                function lc(e) {
                    return rc(), ac(), oc(), sc()
                }

                function sc() {
                    if (5 !== zu) return !1;
                    var e = Eu,
                        t = Pu;
                    Pu = 0;
                    var n = Pe(Nu),
                        r = R.T,
                        a = M.p;
                    try {
                        M.p = 32 > n ? 32 : n, R.T = null, n = Ou, Ou = null;
                        var o = Eu,
                            l = Nu;
                        if (zu = 0, Cu = Eu = null, Nu = 0, 6 & nu) throw Error(i(331));
                        var s = nu;
                        if (nu |= 4, Ys(o.current), Zs(o, o.current, l, n), nu = s, kc(0, !1), de && "function" == typeof de.onPostCommitFiberRoot) try {
                            de.onPostCommitFiberRoot(ce, o)
                        } catch (e) {}
                        return !0
                    } finally {
                        M.p = a, R.T = r, ic(e, t)
                    }
                }

                function uc(e, t, n) {
                    t = Sr(n, t), null !== (e = oo(e, t = kl(e.stateNode, t, 2), 2)) && (ze(e, 2), xc(e))
                }

                function cc(e, t, n) {
                    if (3 === e.tag) uc(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                uc(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Su || !Su.has(r))) {
                                    e = Sr(n, e), null !== (r = oo(t, n = Sl(2), 2)) && (zl(n, r, t, e), ze(r, 2), xc(r));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function dc(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new tu;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (cu = !0, a.add(n), e = fc.bind(null, e, t, n), t.then(e, e))
                }

                function fc(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ru === e && (ou & n) === n && (4 === fu || 3 === fu && (62914560 & ou) === ou && 300 > te() - _u ? !(2 & nu) && Zu(e, 0) : mu |= n, vu === ou && (vu = 0)), xc(e)
                }

                function pc(e, t) {
                    0 === t && (t = ke()), null !== (e = jr(e, t)) && (ze(e, t), xc(e))
                }

                function hc(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), pc(e, n)
                }

                function mc(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        case 22:
                            r = e.stateNode._retryCache;
                            break;
                        default:
                            throw Error(i(314))
                    }
                    null !== r && r.delete(t), pc(e, n)
                }
                var gc = null,
                    vc = null,
                    yc = !1,
                    bc = !1,
                    wc = !1,
                    _c = 0;

                function xc(e) {
                    e !== vc && null === e.next && (null === vc ? gc = vc = e : vc = vc.next = e), bc = !0, yc || (yc = !0, dd(function() {
                        6 & nu ? Y(re, Sc) : zc()
                    }))
                }

                function kc(e, t) {
                    if (!wc && bc) {
                        wc = !0;
                        do {
                            for (var n = !1, r = gc; null !== r;) {
                                if (!t)
                                    if (0 !== e) {
                                        var a = r.pendingLanes;
                                        if (0 === a) var o = 0;
                                        else {
                                            var i = r.suspendedLanes,
                                                l = r.pingedLanes;
                                            o = (1 << 31 - pe(42 | e) + 1) - 1, o = 201326741 & (o &= a & ~(i & ~l)) ? 201326741 & o | 1 : o ? 2 | o : 0
                                        }
                                        0 !== o && (n = !0, Nc(r, o))
                                    } else o = ou, !(3 & (o = be(r, r === ru ? o : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || we(r, o) || (n = !0, Nc(r, o));
                                r = r.next
                            }
                        } while (n);
                        wc = !1
                    }
                }

                function Sc() {
                    zc()
                }

                function zc() {
                    bc = yc = !1;
                    var e, t = 0;
                    0 !== _c && (((e = window.event) && "popstate" === e.type ? e !== ld && (ld = e, !0) : (ld = null, !1)) && (t = _c), _c = 0);
                    for (var n = te(), r = null, a = gc; null !== a;) {
                        var o = a.next,
                            i = Ec(a, n);
                        0 === i ? (a.next = null, null === r ? gc = o : r.next = o, null === o && (vc = r)) : (r = a, (0 !== t || 3 & i) && (bc = !0)), a = o
                    }
                    kc(t, !1)
                }

                function Ec(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = -62914561 & e.pendingLanes; 0 < o;) {
                        var i = 31 - pe(o),
                            l = 1 << i,
                            s = a[i]; - 1 === s ? 0 !== (l & n) && 0 === (l & r) || (a[i] = _e(l, t)) : s <= t && (e.expiredLanes |= l), o &= ~l
                    }
                    if (n = ou, n = be(e, e === (t = ru) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === iu || 9 === iu) || null !== e.cancelPendingCommit) return null !== r && null !== r && J(r), e.callbackNode = null, e.callbackPriority = 0;
                    if (!(3 & n) || we(e, n)) {
                        if ((t = n & -n) === e.callbackPriority) return t;
                        switch (null !== r && J(r), Pe(n)) {
                            case 2:
                            case 8:
                                n = ae;
                                break;
                            case 32:
                            default:
                                n = oe;
                                break;
                            case 268435456:
                                n = le
                        }
                        return r = Cc.bind(null, e), n = Y(n, r), e.callbackPriority = t, e.callbackNode = n, t
                    }
                    return null !== r && null !== r && J(r), e.callbackPriority = 2, e.callbackNode = null, 2
                }

                function Cc(e, t) {
                    if (0 !== zu && 5 !== zu) return e.callbackNode = null, e.callbackPriority = 0, null;
                    var n = e.callbackNode;
                    if (lc() && e.callbackNode !== n) return null;
                    var r = ou;
                    return 0 === (r = be(e, e === ru ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : ($u(e, r, t), Ec(e, te()), null != e.callbackNode && e.callbackNode === n ? Cc.bind(null, e) : null)
                }

                function Nc(e, t) {
                    if (lc()) return null;
                    $u(e, t, !0)
                }

                function Pc() {
                    return 0 === _c && (_c = xe()), _c
                }

                function Oc(e) {
                    return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : Pt("" + e)
                }

                function jc(e, t) {
                    var n = t.ownerDocument.createElement("input");
                    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
                }
                for (var Lc = 0; Lc < _r.length; Lc++) {
                    var Tc = _r[Lc];
                    xr(Tc.toLowerCase(), "on" + (Tc[0].toUpperCase() + Tc.slice(1)))
                }
                xr(pr, "onAnimationEnd"), xr(hr, "onAnimationIteration"), xr(mr, "onAnimationStart"), xr("dblclick", "onDoubleClick"), xr("focusin", "onFocus"), xr("focusout", "onBlur"), xr(gr, "onTransitionRun"), xr(vr, "onTransitionStart"), xr(yr, "onTransitionCancel"), xr(br, "onTransitionEnd"), Ke("onMouseEnter", ["mouseout", "mouseover"]), Ke("onMouseLeave", ["mouseout", "mouseover"]), Ke("onPointerEnter", ["pointerout", "pointerover"]), Ke("onPointerLeave", ["pointerout", "pointerover"]), Ge("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ge("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ge("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ge("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Rc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Mc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rc));

                function Ac(e, t) {
                    t = !!(4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var i = r.length - 1; 0 <= i; i--) {
                                    var l = r[i],
                                        s = l.instance,
                                        u = l.currentTarget;
                                    if (l = l.listener, s !== o && a.isPropagationStopped()) break e;
                                    o = l, a.currentTarget = u;
                                    try {
                                        o(a)
                                    } catch (e) {
                                        vl(e)
                                    }
                                    a.currentTarget = null, o = s
                                } else
                                    for (i = 0; i < r.length; i++) {
                                        if (s = (l = r[i]).instance, u = l.currentTarget, l = l.listener, s !== o && a.isPropagationStopped()) break e;
                                        o = l, a.currentTarget = u;
                                        try {
                                            o(a)
                                        } catch (e) {
                                            vl(e)
                                        }
                                        a.currentTarget = null, o = s
                                    }
                        }
                    }
                }

                function $c(e, t) {
                    var n = t[Me];
                    void 0 === n && (n = t[Me] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Uc(t, e, 2, !1), n.add(r))
                }

                function Ic(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Uc(n, e, r, t)
                }
                var Dc = "_reactListening" + Math.random().toString(36).slice(2);

                function Fc(e) {
                    if (!e[Dc]) {
                        e[Dc] = !0, We.forEach(function(t) {
                            "selectionchange" !== t && (Mc.has(t) || Ic(t, !1, e), Ic(t, !0, e))
                        });
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Dc] || (t[Dc] = !0, Ic("selectionchange", !1, t))
                    }
                }

                function Uc(e, t, n, r) {
                    switch (cf(t)) {
                        case 2:
                            var a = rf;
                            break;
                        case 8:
                            a = af;
                            break;
                        default:
                            a = of
                    }
                    n = a.bind(null, t, n, e), a = void 0, !Dt || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function Vc(e, t, n, r, a) {
                    var o = r;
                    if (!(1 & t || 2 & t || null === r)) e: for (;;) {
                        if (null === r) return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var l = r.stateNode.containerInfo;
                            if (l === a) break;
                            if (4 === i)
                                for (i = r.return; null !== i;) {
                                    var u = i.tag;
                                    if ((3 === u || 4 === u) && i.stateNode.containerInfo === a) return;
                                    i = i.return
                                }
                            for (; null !== l;) {
                                if (null === (i = Ue(l))) return;
                                if (5 === (u = i.tag) || 6 === u || 26 === u || 27 === u) {
                                    r = o = i;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                    At(function() {
                        var r = o,
                            a = jt(n),
                            i = [];
                        e: {
                            var l = wr.get(e);
                            if (void 0 !== l) {
                                var u = Xt,
                                    c = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === Ht(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        u = mn;
                                        break;
                                    case "focusin":
                                        c = "focus", u = on;
                                        break;
                                    case "focusout":
                                        c = "blur", u = on;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = on;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        u = rn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = an;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = vn;
                                        break;
                                    case pr:
                                    case hr:
                                    case mr:
                                        u = ln;
                                        break;
                                    case br:
                                        u = yn;
                                        break;
                                    case "scroll":
                                    case "scrollend":
                                        u = tn;
                                        break;
                                    case "wheel":
                                        u = bn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        u = sn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        u = gn;
                                        break;
                                    case "toggle":
                                    case "beforetoggle":
                                        u = wn
                                }
                                var d = !!(4 & t),
                                    f = !d && ("scroll" === e || "scrollend" === e),
                                    p = d ? null !== l ? l + "Capture" : null : l;
                                d = [];
                                for (var h, m = r; null !== m;) {
                                    var g = m;
                                    if (h = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === h || null === p || null != (g = $t(m, p)) && d.push(Zc(m, g, h)), f) break;
                                    m = m.return
                                }
                                0 < d.length && (l = new u(l, c, null, n, a), i.push({
                                    event: l,
                                    listeners: d
                                }))
                            }
                        }
                        if (!(7 & t)) {
                            if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === Ot || !(c = n.relatedTarget || n.fromElement) || !Ue(c) && !c[Re]) && (u || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (c = (c = n.relatedTarget || n.toElement) ? Ue(c) : null) && (f = s(c), d = c.tag, c !== f || 5 !== d && 27 !== d && 6 !== d) && (c = null)) : (u = null, c = r), u !== c)) {
                                if (d = rn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (d = gn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = null == u ? l : Ze(u), h = null == c ? l : Ze(c), (l = new d(g, m + "leave", u, n, a)).target = f, l.relatedTarget = h, g = null, Ue(a) === r && ((d = new d(p, m + "enter", c, n, a)).target = h, d.relatedTarget = f, g = d), f = g, u && c) e: {
                                    for (p = c, m = 0, h = d = u; h; h = Hc(h)) m++;
                                    for (h = 0, g = p; g; g = Hc(g)) h++;
                                    for (; 0 < m - h;) d = Hc(d),
                                    m--;
                                    for (; 0 < h - m;) p = Hc(p),
                                    h--;
                                    for (; m--;) {
                                        if (d === p || null !== p && d === p.alternate) break e;
                                        d = Hc(d), p = Hc(p)
                                    }
                                    d = null
                                }
                                else d = null;
                                null !== u && Wc(i, l, u, d, !1), null !== c && null !== f && Wc(i, f, c, d, !0)
                            }
                            if ("select" === (u = (l = r ? Ze(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var v = In;
                            else if (Ln(l))
                                if (Dn) v = Gn;
                                else {
                                    v = Wn;
                                    var y = Hn
                                }
                            else !(u = l.nodeName) || "input" !== u.toLowerCase() || "checkbox" !== l.type && "radio" !== l.type ? r && Et(r.elementType) && (v = In) : v = qn;
                            switch (v && (v = v(e, r)) ? Tn(i, v, n, a) : (y && y(e, l, r), "focusout" === e && r && "number" === l.type && null != r.memoizedProps.value && yt(l, "number", l.value)), y = r ? Ze(r) : window, e) {
                                case "focusin":
                                    (Ln(y) || "true" === y.contentEditable) && (rr = y, ar = r, or = null);
                                    break;
                                case "focusout":
                                    or = ar = rr = null;
                                    break;
                                case "mousedown":
                                    ir = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    ir = !1, lr(i, n, a);
                                    break;
                                case "selectionchange":
                                    if (nr) break;
                                case "keydown":
                                case "keyup":
                                    lr(i, n, a)
                            }
                            var b;
                            if (xn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var w = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        w = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        w = "onCompositionUpdate";
                                        break e
                                }
                                w = void 0
                            }
                            else On ? Nn(e, n) && (w = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (w = "onCompositionStart");
                            w && (zn && "ko" !== n.locale && (On || "onCompositionStart" !== w ? "onCompositionEnd" === w && On && (b = Bt()) : (Vt = "value" in (Ut = a) ? Ut.value : Ut.textContent, On = !0)), 0 < (y = Bc(r, w)).length && (w = new un(w, e, null, n, a), i.push({
                                    event: w,
                                    listeners: y
                                }), (b || null !== (b = Pn(n))) && (w.data = b))), (b = Sn ? function(e, t) {
                                    switch (e) {
                                        case "compositionend":
                                            return Pn(t);
                                        case "keypress":
                                            return 32 !== t.which ? null : (Cn = !0, En);
                                        case "textInput":
                                            return (e = t.data) === En && Cn ? null : e;
                                        default:
                                            return null
                                    }
                                }(e, n) : function(e, t) {
                                    if (On) return "compositionend" === e || !xn && Nn(e, t) ? (e = Bt(), Zt = Vt = Ut = null, On = !1, e) : null;
                                    switch (e) {
                                        case "paste":
                                        default:
                                            return null;
                                        case "keypress":
                                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                                if (t.char && 1 < t.char.length) return t.char;
                                                if (t.which) return String.fromCharCode(t.which)
                                            }
                                            return null;
                                        case "compositionend":
                                            return zn && "ko" !== t.locale ? null : t.data
                                    }
                                }(e, n)) && 0 < (w = Bc(r, "onBeforeInput")).length && (y = new un("onBeforeInput", "beforeinput", null, n, a), i.push({
                                    event: y,
                                    listeners: w
                                }), y.data = b),
                                function(e, t, n, r, a) {
                                    if ("submit" === t && n && n.stateNode === a) {
                                        var o = Oc((a[Te] || null).action),
                                            i = r.submitter;
                                        i && null !== (t = (t = i[Te] || null) ? Oc(t.formAction) : i.getAttribute("formAction")) && (o = t, i = null);
                                        var l = new Xt("action", "action", null, r, a);
                                        e.push({
                                            event: l,
                                            listeners: [{
                                                instance: null,
                                                listener: function() {
                                                    if (r.defaultPrevented) {
                                                        if (0 !== _c) {
                                                            var e = i ? jc(a, i) : new FormData(a);
                                                            ji(n, {
                                                                pending: !0,
                                                                data: e,
                                                                method: a.method,
                                                                action: o
                                                            }, null, e)
                                                        }
                                                    } else "function" == typeof o && (l.preventDefault(), e = i ? jc(a, i) : new FormData(a), ji(n, {
                                                        pending: !0,
                                                        data: e,
                                                        method: a.method,
                                                        action: o
                                                    }, o, e))
                                                },
                                                currentTarget: a
                                            }]
                                        })
                                    }
                                }(i, e, r, n, a)
                        }
                        Ac(i, t)
                    })
                }

                function Zc(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Bc(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            o = a.stateNode;
                        if (5 !== (a = a.tag) && 26 !== a && 27 !== a || null === o || (null != (a = $t(e, n)) && r.unshift(Zc(e, a, o)), null != (a = $t(e, t)) && r.push(Zc(e, a, o))), 3 === e.tag) return r;
                        e = e.return
                    }
                    return []
                }

                function Hc(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag && 27 !== e.tag);
                    return e || null
                }

                function Wc(e, t, n, r, a) {
                    for (var o = t._reactName, i = []; null !== n && n !== r;) {
                        var l = n,
                            s = l.alternate,
                            u = l.stateNode;
                        if (l = l.tag, null !== s && s === r) break;
                        5 !== l && 26 !== l && 27 !== l || null === u || (s = u, a ? null != (u = $t(n, o)) && i.unshift(Zc(n, u, s)) : a || null != (u = $t(n, o)) && i.push(Zc(n, u, s))), n = n.return
                    }
                    0 !== i.length && e.push({
                        event: t,
                        listeners: i
                    })
                }
                var qc = /\r\n?/g,
                    Gc = /\u0000|\uFFFD/g;

                function Kc(e) {
                    return ("string" == typeof e ? e : "" + e).replace(qc, "\n").replace(Gc, "")
                }

                function Qc(e, t) {
                    return t = Kc(t), Kc(e) === t
                }

                function Yc() {}

                function Jc(e, t, n, r, a, o) {
                    switch (n) {
                        case "children":
                            "string" == typeof r ? "body" === t || "textarea" === t && "" === r || xt(e, r) : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && xt(e, "" + r);
                            break;
                        case "className":
                            nt(e, "class", r);
                            break;
                        case "tabIndex":
                            nt(e, "tabindex", r);
                            break;
                        case "dir":
                        case "role":
                        case "viewBox":
                        case "width":
                        case "height":
                            nt(e, n, r);
                            break;
                        case "style":
                            zt(e, r, o);
                            break;
                        case "data":
                            if ("object" !== t) {
                                nt(e, "data", r);
                                break
                            }
                        case "src":
                        case "href":
                            if ("" === r && ("a" !== t || "href" !== n)) {
                                e.removeAttribute(n);
                                break
                            }
                            if (null == r || "function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) {
                                e.removeAttribute(n);
                                break
                            }
                            r = Pt("" + r), e.setAttribute(n, r);
                            break;
                        case "action":
                        case "formAction":
                            if ("function" == typeof r) {
                                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                                break
                            }
                            if ("function" == typeof o && ("formAction" === n ? ("input" !== t && Jc(e, t, "name", a.name, a, null), Jc(e, t, "formEncType", a.formEncType, a, null), Jc(e, t, "formMethod", a.formMethod, a, null), Jc(e, t, "formTarget", a.formTarget, a, null)) : (Jc(e, t, "encType", a.encType, a, null), Jc(e, t, "method", a.method, a, null), Jc(e, t, "target", a.target, a, null))), null == r || "symbol" == typeof r || "boolean" == typeof r) {
                                e.removeAttribute(n);
                                break
                            }
                            r = Pt("" + r), e.setAttribute(n, r);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Yc);
                            break;
                        case "onScroll":
                            null != r && $c("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && $c("scrollend", e);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" != typeof r || !("__html" in r)) throw Error(i(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(i(60));
                                    e.innerHTML = n
                                }
                            }
                            break;
                        case "multiple":
                            e.multiple = r && "function" != typeof r && "symbol" != typeof r;
                            break;
                        case "muted":
                            e.muted = r && "function" != typeof r && "symbol" != typeof r;
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "defaultValue":
                        case "defaultChecked":
                        case "innerHTML":
                        case "ref":
                        case "autoFocus":
                            break;
                        case "xlinkHref":
                            if (null == r || "function" == typeof r || "boolean" == typeof r || "symbol" == typeof r) {
                                e.removeAttribute("xlink:href");
                                break
                            }
                            n = Pt("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                            break;
                        case "contentEditable":
                        case "spellCheck":
                        case "draggable":
                        case "value":
                        case "autoReverse":
                        case "externalResourcesRequired":
                        case "focusable":
                        case "preserveAlpha":
                            null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                            break;
                        case "inert":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                            r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                            break;
                        case "capture":
                        case "download":
                            !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                            break;
                        case "cols":
                        case "rows":
                        case "size":
                        case "span":
                            null != r && "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                            break;
                        case "rowSpan":
                        case "start":
                            null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                            break;
                        case "popover":
                            $c("beforetoggle", e), $c("toggle", e), tt(e, "popover", r);
                            break;
                        case "xlinkActuate":
                            rt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                            break;
                        case "xlinkArcrole":
                            rt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                            break;
                        case "xlinkRole":
                            rt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                            break;
                        case "xlinkShow":
                            rt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                            break;
                        case "xlinkTitle":
                            rt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                            break;
                        case "xlinkType":
                            rt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                            break;
                        case "xmlBase":
                            rt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                            break;
                        case "xmlLang":
                            rt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                            break;
                        case "xmlSpace":
                            rt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                            break;
                        case "is":
                            tt(e, "is", r);
                            break;
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && tt(e, n = Ct.get(n) || n, r)
                    }
                }

                function Xc(e, t, n, r, a, o) {
                    switch (n) {
                        case "style":
                            zt(e, r, o);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" != typeof r || !("__html" in r)) throw Error(i(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(i(60));
                                    e.innerHTML = n
                                }
                            }
                            break;
                        case "children":
                            "string" == typeof r ? xt(e, r) : ("number" == typeof r || "bigint" == typeof r) && xt(e, "" + r);
                            break;
                        case "onScroll":
                            null != r && $c("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && $c("scrollend", e);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Yc);
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "innerHTML":
                        case "ref":
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            qe.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), "function" == typeof(o = null != (o = e[Te] || null) ? o[n] : null) && e.removeEventListener(t, o, a), "function" != typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : tt(e, n, r) : ("function" != typeof o && null !== o && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)))
                    }
                }

                function ed(e, t, n) {
                    switch (t) {
                        case "div":
                        case "span":
                        case "svg":
                        case "path":
                        case "a":
                        case "g":
                        case "p":
                        case "li":
                            break;
                        case "img":
                            $c("error", e), $c("load", e);
                            var r, a = !1,
                                o = !1;
                            for (r in n)
                                if (n.hasOwnProperty(r)) {
                                    var l = n[r];
                                    if (null != l) switch (r) {
                                        case "src":
                                            a = !0;
                                            break;
                                        case "srcSet":
                                            o = !0;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            throw Error(i(137, t));
                                        default:
                                            Jc(e, t, r, l, n, null)
                                    }
                                } return o && Jc(e, t, "srcSet", n.srcSet, n, null), void(a && Jc(e, t, "src", n.src, n, null));
                        case "input":
                            $c("invalid", e);
                            var s = r = l = o = null,
                                u = null,
                                c = null;
                            for (a in n)
                                if (n.hasOwnProperty(a)) {
                                    var d = n[a];
                                    if (null != d) switch (a) {
                                        case "name":
                                            o = d;
                                            break;
                                        case "type":
                                            l = d;
                                            break;
                                        case "checked":
                                            u = d;
                                            break;
                                        case "defaultChecked":
                                            c = d;
                                            break;
                                        case "value":
                                            r = d;
                                            break;
                                        case "defaultValue":
                                            s = d;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            if (null != d) throw Error(i(137, t));
                                            break;
                                        default:
                                            Jc(e, t, a, d, n, null)
                                    }
                                } return vt(e, r, s, u, c, l, o, !1), void dt(e);
                        case "select":
                            for (o in $c("invalid", e), a = l = r = null, n)
                                if (n.hasOwnProperty(o) && null != (s = n[o])) switch (o) {
                                    case "value":
                                        r = s;
                                        break;
                                    case "defaultValue":
                                        l = s;
                                        break;
                                    case "multiple":
                                        a = s;
                                    default:
                                        Jc(e, t, o, s, n, null)
                                }
                            return t = r, n = l, e.multiple = !!a, void(null != t ? bt(e, !!a, t, !1) : null != n && bt(e, !!a, n, !0));
                        case "textarea":
                            for (l in $c("invalid", e), r = o = a = null, n)
                                if (n.hasOwnProperty(l) && null != (s = n[l])) switch (l) {
                                    case "value":
                                        a = s;
                                        break;
                                    case "defaultValue":
                                        o = s;
                                        break;
                                    case "children":
                                        r = s;
                                        break;
                                    case "dangerouslySetInnerHTML":
                                        if (null != s) throw Error(i(91));
                                        break;
                                    default:
                                        Jc(e, t, l, s, n, null)
                                }
                            return _t(e, a, o, r), void dt(e);
                        case "option":
                            for (u in n) n.hasOwnProperty(u) && null != (a = n[u]) && ("selected" === u ? e.selected = a && "function" != typeof a && "symbol" != typeof a : Jc(e, t, u, a, n, null));
                            return;
                        case "dialog":
                            $c("beforetoggle", e), $c("toggle", e), $c("cancel", e), $c("close", e);
                            break;
                        case "iframe":
                        case "object":
                            $c("load", e);
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < Rc.length; a++) $c(Rc[a], e);
                            break;
                        case "image":
                            $c("error", e), $c("load", e);
                            break;
                        case "details":
                            $c("toggle", e);
                            break;
                        case "embed":
                        case "source":
                        case "link":
                            $c("error", e), $c("load", e);
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "hr":
                        case "keygen":
                        case "meta":
                        case "param":
                        case "track":
                        case "wbr":
                        case "menuitem":
                            for (c in n)
                                if (n.hasOwnProperty(c) && null != (a = n[c])) switch (c) {
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        throw Error(i(137, t));
                                    default:
                                        Jc(e, t, c, a, n, null)
                                }
                            return;
                        default:
                            if (Et(t)) {
                                for (d in n) n.hasOwnProperty(d) && void 0 !== (a = n[d]) && Xc(e, t, d, a, n, void 0);
                                return
                            }
                    }
                    for (s in n) n.hasOwnProperty(s) && null != (a = n[s]) && Jc(e, t, s, a, n, null)
                }
                var td = null,
                    nd = null;

                function rd(e) {
                    return 9 === e.nodeType ? e : e.ownerDocument
                }

                function ad(e) {
                    switch (e) {
                        case "http://www.w3.org/2000/svg":
                            return 1;
                        case "http://www.w3.org/1998/Math/MathML":
                            return 2;
                        default:
                            return 0
                    }
                }

                function od(e, t) {
                    if (0 === e) switch (t) {
                        case "svg":
                            return 1;
                        case "math":
                            return 2;
                        default:
                            return 0
                    }
                    return 1 === e && "foreignObject" === t ? 0 : e
                }

                function id(e, t) {
                    return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "bigint" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ld = null,
                    sd = "function" == typeof setTimeout ? setTimeout : void 0,
                    ud = "function" == typeof clearTimeout ? clearTimeout : void 0,
                    cd = "function" == typeof Promise ? Promise : void 0,
                    dd = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== cd ? function(e) {
                        return cd.resolve(null).then(e).catch(fd)
                    } : sd;

                function fd(e) {
                    setTimeout(function() {
                        throw e
                    })
                }

                function pd(e) {
                    return "head" === e
                }

                function hd(e, t) {
                    var n = t,
                        r = 0,
                        a = 0;
                    do {
                        var o = n.nextSibling;
                        if (e.removeChild(n), o && 8 === o.nodeType)
                            if ("/$" === (n = o.data)) {
                                if (0 < r && 8 > r) {
                                    n = r;
                                    var i = e.ownerDocument;
                                    if (1 & n && _d(i.documentElement), 2 & n && _d(i.body), 4 & n)
                                        for (_d(n = i.head), i = n.firstChild; i;) {
                                            var l = i.nextSibling,
                                                s = i.nodeName;
                                            i[De] || "SCRIPT" === s || "STYLE" === s || "LINK" === s && "stylesheet" === i.rel.toLowerCase() || n.removeChild(i), i = l
                                        }
                                }
                                if (0 === a) return e.removeChild(o), void Nf(t);
                                a--
                            } else "$" === n || "$?" === n || "$!" === n ? a++ : r = n.charCodeAt(0) - 48;
                        else r = 0;
                        n = o
                    } while (n);
                    Nf(t)
                }

                function md(e) {
                    var t = e.firstChild;
                    for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
                        var n = t;
                        switch (t = t.nextSibling, n.nodeName) {
                            case "HTML":
                            case "HEAD":
                            case "BODY":
                                md(n), Fe(n);
                                continue;
                            case "SCRIPT":
                            case "STYLE":
                                continue;
                            case "LINK":
                                if ("stylesheet" === n.rel.toLowerCase()) continue
                        }
                        e.removeChild(n)
                    }
                }

                function gd(e) {
                    return "$!" === e.data || "$?" === e.data && "complete" === e.ownerDocument.readyState
                }

                function vd(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }
                var yd = null;

                function bd(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }

                function wd(e, t, n) {
                    switch (t = rd(n), e) {
                        case "html":
                            if (!(e = t.documentElement)) throw Error(i(452));
                            return e;
                        case "head":
                            if (!(e = t.head)) throw Error(i(453));
                            return e;
                        case "body":
                            if (!(e = t.body)) throw Error(i(454));
                            return e;
                        default:
                            throw Error(i(451))
                    }
                }

                function _d(e) {
                    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
                    Fe(e)
                }
                var xd = new Map,
                    kd = new Set;

                function Sd(e) {
                    return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument
                }
                var zd = M.d;
                M.d = {
                    f: function() {
                        var e = zd.f(),
                            t = Uu();
                        return e || t
                    },
                    r: function(e) {
                        var t = Ve(e);
                        null !== t && 5 === t.tag && "form" === t.type ? Ti(t) : zd.r(e)
                    },
                    D: function(e) {
                        zd.D(e), Cd("dns-prefetch", e, null)
                    },
                    C: function(e, t) {
                        zd.C(e, t), Cd("preconnect", e, t)
                    },
                    L: function(e, t, n) {
                        zd.L(e, t, n);
                        var r = Ed;
                        if (r && e && t) {
                            var a = 'link[rel="preload"][as="' + mt(t) + '"]';
                            "image" === t && n && n.imageSrcSet ? (a += '[imagesrcset="' + mt(n.imageSrcSet) + '"]', "string" == typeof n.imageSizes && (a += '[imagesizes="' + mt(n.imageSizes) + '"]')) : a += '[href="' + mt(e) + '"]';
                            var o = a;
                            switch (t) {
                                case "style":
                                    o = Pd(e);
                                    break;
                                case "script":
                                    o = Ld(e)
                            }
                            xd.has(o) || (e = f({
                                rel: "preload",
                                href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                                as: t
                            }, n), xd.set(o, e), null !== r.querySelector(a) || "style" === t && r.querySelector(Od(o)) || "script" === t && r.querySelector(Td(o)) || (ed(t = r.createElement("link"), "link", e), He(t), r.head.appendChild(t)))
                        }
                    },
                    m: function(e, t) {
                        zd.m(e, t);
                        var n = Ed;
                        if (n && e) {
                            var r = t && "string" == typeof t.as ? t.as : "script",
                                a = 'link[rel="modulepreload"][as="' + mt(r) + '"][href="' + mt(e) + '"]',
                                o = a;
                            switch (r) {
                                case "audioworklet":
                                case "paintworklet":
                                case "serviceworker":
                                case "sharedworker":
                                case "worker":
                                case "script":
                                    o = Ld(e)
                            }
                            if (!xd.has(o) && (e = f({
                                    rel: "modulepreload",
                                    href: e
                                }, t), xd.set(o, e), null === n.querySelector(a))) {
                                switch (r) {
                                    case "audioworklet":
                                    case "paintworklet":
                                    case "serviceworker":
                                    case "sharedworker":
                                    case "worker":
                                    case "script":
                                        if (n.querySelector(Td(o))) return
                                }
                                ed(r = n.createElement("link"), "link", e), He(r), n.head.appendChild(r)
                            }
                        }
                    },
                    X: function(e, t) {
                        zd.X(e, t);
                        var n = Ed;
                        if (n && e) {
                            var r = Be(n).hoistableScripts,
                                a = Ld(e),
                                o = r.get(a);
                            o || ((o = n.querySelector(Td(a))) || (e = f({
                                src: e,
                                async: !0
                            }, t), (t = xd.get(a)) && $d(e, t), He(o = n.createElement("script")), ed(o, "link", e), n.head.appendChild(o)), o = {
                                type: "script",
                                instance: o,
                                count: 1,
                                state: null
                            }, r.set(a, o))
                        }
                    },
                    S: function(e, t, n) {
                        zd.S(e, t, n);
                        var r = Ed;
                        if (r && e) {
                            var a = Be(r).hoistableStyles,
                                o = Pd(e);
                            t = t || "default";
                            var i = a.get(o);
                            if (!i) {
                                var l = {
                                    loading: 0,
                                    preload: null
                                };
                                if (i = r.querySelector(Od(o))) l.loading = 5;
                                else {
                                    e = f({
                                        rel: "stylesheet",
                                        href: e,
                                        "data-precedence": t
                                    }, n), (n = xd.get(o)) && Ad(e, n);
                                    var s = i = r.createElement("link");
                                    He(s), ed(s, "link", e), s._p = new Promise(function(e, t) {
                                        s.onload = e, s.onerror = t
                                    }), s.addEventListener("load", function() {
                                        l.loading |= 1
                                    }), s.addEventListener("error", function() {
                                        l.loading |= 2
                                    }), l.loading |= 4, Md(i, t, r)
                                }
                                i = {
                                    type: "stylesheet",
                                    instance: i,
                                    count: 1,
                                    state: l
                                }, a.set(o, i)
                            }
                        }
                    },
                    M: function(e, t) {
                        zd.M(e, t);
                        var n = Ed;
                        if (n && e) {
                            var r = Be(n).hoistableScripts,
                                a = Ld(e),
                                o = r.get(a);
                            o || ((o = n.querySelector(Td(a))) || (e = f({
                                src: e,
                                async: !0,
                                type: "module"
                            }, t), (t = xd.get(a)) && $d(e, t), He(o = n.createElement("script")), ed(o, "link", e), n.head.appendChild(o)), o = {
                                type: "script",
                                instance: o,
                                count: 1,
                                state: null
                            }, r.set(a, o))
                        }
                    }
                };
                var Ed = "undefined" == typeof document ? null : document;

                function Cd(e, t, n) {
                    var r = Ed;
                    if (r && "string" == typeof t && t) {
                        var a = mt(t);
                        a = 'link[rel="' + e + '"][href="' + a + '"]', "string" == typeof n && (a += '[crossorigin="' + n + '"]'), kd.has(a) || (kd.add(a), e = {
                            rel: e,
                            crossOrigin: n,
                            href: t
                        }, null === r.querySelector(a) && (ed(t = r.createElement("link"), "link", e), He(t), r.head.appendChild(t)))
                    }
                }

                function Nd(e, t, n, r) {
                    var a, o, l, s, u = (u = B.current) ? Sd(u) : null;
                    if (!u) throw Error(i(446));
                    switch (e) {
                        case "meta":
                        case "title":
                            return null;
                        case "style":
                            return "string" == typeof n.precedence && "string" == typeof n.href ? (t = Pd(n.href), (r = (n = Be(u).hoistableStyles).get(t)) || (r = {
                                type: "style",
                                instance: null,
                                count: 0,
                                state: null
                            }, n.set(t, r)), r) : {
                                type: "void",
                                instance: null,
                                count: 0,
                                state: null
                            };
                        case "link":
                            if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                                e = Pd(n.href);
                                var c = Be(u).hoistableStyles,
                                    d = c.get(e);
                                if (d || (u = u.ownerDocument || u, d = {
                                        type: "stylesheet",
                                        instance: null,
                                        count: 0,
                                        state: {
                                            loading: 0,
                                            preload: null
                                        }
                                    }, c.set(e, d), (c = u.querySelector(Od(e))) && !c._p && (d.instance = c, d.state.loading = 5), xd.has(e) || (n = {
                                        rel: "preload",
                                        as: "style",
                                        href: n.href,
                                        crossOrigin: n.crossOrigin,
                                        integrity: n.integrity,
                                        media: n.media,
                                        hrefLang: n.hrefLang,
                                        referrerPolicy: n.referrerPolicy
                                    }, xd.set(e, n), c || (a = u, o = e, l = n, s = d.state, a.querySelector('link[rel="preload"][as="style"][' + o + "]") ? s.loading = 1 : (o = a.createElement("link"), s.preload = o, o.addEventListener("load", function() {
                                        return s.loading |= 1
                                    }), o.addEventListener("error", function() {
                                        return s.loading |= 2
                                    }), ed(o, "link", l), He(o), a.head.appendChild(o))))), t && null === r) throw Error(i(528, ""));
                                return d
                            }
                            if (t && null !== r) throw Error(i(529, ""));
                            return null;
                        case "script":
                            return t = n.async, "string" == typeof(n = n.src) && t && "function" != typeof t && "symbol" != typeof t ? (t = Ld(n), (r = (n = Be(u).hoistableScripts).get(t)) || (r = {
                                type: "script",
                                instance: null,
                                count: 0,
                                state: null
                            }, n.set(t, r)), r) : {
                                type: "void",
                                instance: null,
                                count: 0,
                                state: null
                            };
                        default:
                            throw Error(i(444, e))
                    }
                }

                function Pd(e) {
                    return 'href="' + mt(e) + '"'
                }

                function Od(e) {
                    return 'link[rel="stylesheet"][' + e + "]"
                }

                function jd(e) {
                    return f({}, e, {
                        "data-precedence": e.precedence,
                        precedence: null
                    })
                }

                function Ld(e) {
                    return '[src="' + mt(e) + '"]'
                }

                function Td(e) {
                    return "script[async]" + e
                }

                function Rd(e, t, n) {
                    if (t.count++, null === t.instance) switch (t.type) {
                        case "style":
                            var r = e.querySelector('style[data-href~="' + mt(n.href) + '"]');
                            if (r) return t.instance = r, He(r), r;
                            var a = f({}, n, {
                                "data-href": n.href,
                                "data-precedence": n.precedence,
                                href: null,
                                precedence: null
                            });
                            return He(r = (e.ownerDocument || e).createElement("style")), ed(r, "style", a), Md(r, n.precedence, e), t.instance = r;
                        case "stylesheet":
                            a = Pd(n.href);
                            var o = e.querySelector(Od(a));
                            if (o) return t.state.loading |= 4, t.instance = o, He(o), o;
                            r = jd(n), (a = xd.get(a)) && Ad(r, a), He(o = (e.ownerDocument || e).createElement("link"));
                            var l = o;
                            return l._p = new Promise(function(e, t) {
                                l.onload = e, l.onerror = t
                            }), ed(o, "link", r), t.state.loading |= 4, Md(o, n.precedence, e), t.instance = o;
                        case "script":
                            return o = Ld(n.src), (a = e.querySelector(Td(o))) ? (t.instance = a, He(a), a) : (r = n, (a = xd.get(o)) && $d(r = f({}, n), a), He(a = (e = e.ownerDocument || e).createElement("script")), ed(a, "link", r), e.head.appendChild(a), t.instance = a);
                        case "void":
                            return null;
                        default:
                            throw Error(i(443, t.type))
                    } else "stylesheet" === t.type && !(4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, Md(r, n.precedence, e));
                    return t.instance
                }

                function Md(e, t, n) {
                    for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, o = a, i = 0; i < r.length; i++) {
                        var l = r[i];
                        if (l.dataset.precedence === t) o = l;
                        else if (o !== a) break
                    }
                    o ? o.parentNode.insertBefore(e, o.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
                }

                function Ad(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
                }

                function $d(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
                }
                var Id = null;

                function Dd(e, t, n) {
                    if (null === Id) {
                        var r = new Map,
                            a = Id = new Map;
                        a.set(n, r)
                    } else(r = (a = Id).get(n)) || (r = new Map, a.set(n, r));
                    if (r.has(e)) return r;
                    for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
                        var o = n[a];
                        if (!(o[De] || o[Le] || "link" === e && "stylesheet" === o.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== o.namespaceURI) {
                            var i = o.getAttribute(t) || "";
                            i = e + i;
                            var l = r.get(i);
                            l ? l.push(o) : r.set(i, [o])
                        }
                    }
                    return r
                }

                function Fd(e, t, n) {
                    (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
                }

                function Ud(e) {
                    return !!("stylesheet" !== e.type || 3 & e.state.loading)
                }
                var Vd = null;

                function Zd() {}

                function Bd() {
                    if (this.count--, 0 === this.count)
                        if (this.stylesheets) Wd(this, this.stylesheets);
                        else if (this.unsuspend) {
                        var e = this.unsuspend;
                        this.unsuspend = null, e()
                    }
                }
                var Hd = null;

                function Wd(e, t) {
                    e.stylesheets = null, null !== e.unsuspend && (e.count++, Hd = new Map, t.forEach(qd, e), Hd = null, Bd.call(e))
                }

                function qd(e, t) {
                    if (!(4 & t.state.loading)) {
                        var n = Hd.get(e);
                        if (n) var r = n.get(null);
                        else {
                            n = new Map, Hd.set(e, n);
                            for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < a.length; o++) {
                                var i = a[o];
                                "LINK" !== i.nodeName && "not all" === i.getAttribute("media") || (n.set(i.dataset.precedence, i), r = i)
                            }
                            r && n.set(null, r)
                        }
                        i = (a = t.instance).getAttribute("data-precedence"), (o = n.get(i) || r) === r && n.set(null, a), n.set(i, a), this.count++, r = Bd.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), o ? o.parentNode.insertBefore(a, o.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4
                    }
                }
                var Gd = {
                    $$typeof: _,
                    Provider: null,
                    Consumer: null,
                    _currentValue: A,
                    _currentValue2: A,
                    _threadCount: 0
                };

                function Kd(e, t, n, r, a, o, i, l) {
                    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Se(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Se(0), this.hiddenUpdates = Se(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = o, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.incompleteTransitions = new Map
                }

                function Qd(e, t, n, r, a, o, i, l, s, u, c, d) {
                    return e = new Kd(e, t, n, i, l, s, u, d), t = 1, !0 === o && (t |= 24), o = Ar(3, null, null, t), e.current = o, o.stateNode = e, (t = Ta()).refCount++, e.pooledCache = t, t.refCount++, o.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: t
                    }, no(o), e
                }

                function Yd(e) {
                    return e ? e = Rr : Rr
                }

                function Jd(e, t, n, r, a, o) {
                    a = Yd(a), null === r.context ? r.context = a : r.pendingContext = a, (r = ao(t)).payload = {
                        element: n
                    }, null !== (o = void 0 === o ? null : o) && (r.callback = o), null !== (n = oo(e, r, t)) && (Au(n, 0, t), io(n, e, t))
                }

                function Xd(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function ef(e, t) {
                    Xd(e, t), (e = e.alternate) && Xd(e, t)
                }

                function tf(e) {
                    if (13 === e.tag) {
                        var t = jr(e, 67108864);
                        null !== t && Au(t, 0, 67108864), ef(e, 67108864)
                    }
                }
                var nf = !0;

                function rf(e, t, n, r) {
                    var a = R.T;
                    R.T = null;
                    var o = M.p;
                    try {
                        M.p = 2, of(e, t, n, r)
                    } finally {
                        M.p = o, R.T = a
                    }
                }

                function af(e, t, n, r) {
                    var a = R.T;
                    R.T = null;
                    var o = M.p;
                    try {
                        M.p = 8, of(e, t, n, r)
                    } finally {
                        M.p = o, R.T = a
                    }
                }

                function of(e, t, n, r) {
                    if (nf) {
                        var a = lf(r);
                        if (null === a) Vc(e, t, r, sf, n), bf(e, r);
                        else if (function(e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return ff = wf(ff, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return pf = wf(pf, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return hf = wf(hf, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var o = a.pointerId;
                                        return mf.set(o, wf(mf.get(o) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return o = a.pointerId, gf.set(o, wf(gf.get(o) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (bf(e, r), 4 & t && -1 < yf.indexOf(e)) {
                            for (; null !== a;) {
                                var o = Ve(a);
                                if (null !== o) switch (o.tag) {
                                    case 3:
                                        if ((o = o.stateNode).current.memoizedState.isDehydrated) {
                                            var i = ye(o.pendingLanes);
                                            if (0 !== i) {
                                                var l = o;
                                                for (l.pendingLanes |= 2, l.entangledLanes |= 2; i;) {
                                                    var s = 1 << 31 - pe(i);
                                                    l.entanglements[1] |= s, i &= ~s
                                                }
                                                xc(o), !(6 & nu) && (xu = te() + 500, kc(0, !1))
                                            }
                                        }
                                        break;
                                    case 13:
                                        null !== (l = jr(o, 2)) && Au(l, 0, 2), Uu(), ef(o, 2)
                                }
                                if (null === (o = lf(r)) && Vc(e, t, r, sf, n), o === a) break;
                                a = o
                            }
                            null !== a && r.stopPropagation()
                        } else Vc(e, t, r, null, n)
                    }
                }

                function lf(e) {
                    return uf(e = jt(e))
                }
                var sf = null;

                function uf(e) {
                    if (sf = null, null !== (e = Ue(e))) {
                        var t = s(e);
                        if (null === t) e = null;
                        else {
                            var n = t.tag;
                            if (13 === n) {
                                if (null !== (e = u(t))) return e;
                                e = null
                            } else if (3 === n) {
                                if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                                e = null
                            } else t !== e && (e = null)
                        }
                    }
                    return sf = e, null
                }

                function cf(e) {
                    switch (e) {
                        case "beforetoggle":
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "toggle":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 2;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 8;
                        case "message":
                            switch (ne()) {
                                case re:
                                    return 2;
                                case ae:
                                    return 8;
                                case oe:
                                case ie:
                                    return 32;
                                case le:
                                    return 268435456;
                                default:
                                    return 32
                            }
                        default:
                            return 32
                    }
                }
                var df = !1,
                    ff = null,
                    pf = null,
                    hf = null,
                    mf = new Map,
                    gf = new Map,
                    vf = [],
                    yf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

                function bf(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            ff = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            pf = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            hf = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            mf.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            gf.delete(t.pointerId)
                    }
                }

                function wf(e, t, n, r, a, o) {
                    return null === e || e.nativeEvent !== o ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: o,
                        targetContainers: [a]
                    }, null !== t && null !== (t = Ve(t)) && tf(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function _f(e) {
                    var t = Ue(e.target);
                    if (null !== t) {
                        var n = s(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = u(n))) return e.blockedOn = t, void
                                function(e) {
                                    var t = M.p;
                                    try {
                                        return M.p = e,
                                            function() {
                                                if (13 === n.tag) {
                                                    var e = Ru();
                                                    e = Ne(e);
                                                    var t = jr(n, e);
                                                    null !== t && Au(t, 0, e), ef(n, e)
                                                }
                                            }()
                                    } finally {
                                        M.p = t
                                    }
                                }(e.priority)
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function xf(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = lf(e.nativeEvent);
                        if (null !== n) return null !== (t = Ve(n)) && tf(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        Ot = r, n.target.dispatchEvent(r), Ot = null, t.shift()
                    }
                    return !0
                }

                function kf(e, t, n) {
                    xf(e) && n.delete(t)
                }

                function Sf() {
                    df = !1, null !== ff && xf(ff) && (ff = null), null !== pf && xf(pf) && (pf = null), null !== hf && xf(hf) && (hf = null), mf.forEach(kf), gf.forEach(kf)
                }

                function zf(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, df || (df = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Sf)))
                }
                var Ef = null;

                function Cf(e) {
                    Ef !== e && (Ef = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
                        Ef === e && (Ef = null);
                        for (var t = 0; t < e.length; t += 3) {
                            var n = e[t],
                                r = e[t + 1],
                                a = e[t + 2];
                            if ("function" != typeof r) {
                                if (null === uf(r || n)) continue;
                                break
                            }
                            var o = Ve(n);
                            null !== o && (e.splice(t, 3), t -= 3, ji(o, {
                                pending: !0,
                                data: a,
                                method: n.method,
                                action: r
                            }, r, a))
                        }
                    }))
                }

                function Nf(e) {
                    function t(t) {
                        return zf(t, e)
                    }
                    null !== ff && zf(ff, e), null !== pf && zf(pf, e), null !== hf && zf(hf, e), mf.forEach(t), gf.forEach(t);
                    for (var n = 0; n < vf.length; n++) {
                        var r = vf[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                    for (; 0 < vf.length && null === (n = vf[0]).blockedOn;) _f(n), null === n.blockedOn && vf.shift();
                    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
                        for (r = 0; r < n.length; r += 3) {
                            var a = n[r],
                                o = n[r + 1],
                                i = a[Te] || null;
                            if ("function" == typeof o) i || Cf(n);
                            else if (i) {
                                var l = null;
                                if (o && o.hasAttribute("formAction")) {
                                    if (a = o, i = o[Te] || null) l = i.formAction;
                                    else if (null !== uf(a)) continue
                                } else l = i.action;
                                "function" == typeof l ? n[r + 1] = l : (n.splice(r, 3), r -= 3), Cf(n)
                            }
                        }
                }

                function Pf(e) {
                    this._internalRoot = e
                }

                function Of(e) {
                    this._internalRoot = e
                }
                Of.prototype.render = Pf.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(i(409));
                    Jd(t.current, Ru(), e, t, null, null)
                }, Of.prototype.unmount = Pf.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        Jd(e.current, 2, null, e, null, null), Uu(), t[Re] = null
                    }
                }, Of.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = Oe();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < vf.length && 0 !== t && t < vf[n].priority; n++);
                        vf.splice(n, 0, e), 0 === n && _f(e)
                    }
                };
                var jf = a.version;
                if ("19.1.0" !== jf) throw Error(i(527, jf, "19.1.0"));
                M.findDOMNode = function(e) {
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(i(188));
                        throw e = Object.keys(e).join(","), Error(i(268, e))
                    }
                    return e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = s(e))) throw Error(i(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var o = a.alternate;
                            if (null === o) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === o.child) {
                                for (o = a.child; o;) {
                                    if (o === n) return c(a), e;
                                    if (o === r) return c(a), t;
                                    o = o.sibling
                                }
                                throw Error(i(188))
                            }
                            if (n.return !== r.return) n = a, r = o;
                            else {
                                for (var l = !1, u = a.child; u;) {
                                    if (u === n) {
                                        l = !0, n = a, r = o;
                                        break
                                    }
                                    if (u === r) {
                                        l = !0, r = a, n = o;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!l) {
                                    for (u = o.child; u;) {
                                        if (u === n) {
                                            l = !0, n = o, r = a;
                                            break
                                        }
                                        if (u === r) {
                                            l = !0, r = o, n = a;
                                            break
                                        }
                                        u = u.sibling
                                    }
                                    if (!l) throw Error(i(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(i(190))
                        }
                        if (3 !== n.tag) throw Error(i(188));
                        return n.stateNode.current === n ? e : t
                    }(t), null === (e = null !== e ? d(e) : null) ? null : e.stateNode
                };
                var Lf = {
                    bundleType: 0,
                    version: "19.1.0",
                    rendererPackageName: "react-dom",
                    currentDispatcherRef: R,
                    reconcilerVersion: "19.1.0"
                };
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var Tf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!Tf.isDisabled && Tf.supportsFiber) try {
                        ce = Tf.inject(Lf), de = Tf
                    } catch (e) {}
                }
                t.createRoot = function(e, t) {
                    if (!l(e)) throw Error(i(299));
                    var n = !1,
                        r = "",
                        a = yl,
                        o = bl,
                        s = wl;
                    return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onUncaughtError && (a = t.onUncaughtError), void 0 !== t.onCaughtError && (o = t.onCaughtError), void 0 !== t.onRecoverableError && (s = t.onRecoverableError), void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks), t = Qd(e, 1, !1, null, 0, n, r, a, o, s, 0, null), e[Re] = t.current, Fc(e), new Pf(t)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!l(e)) throw Error(i(299));
                    var r = !1,
                        a = "",
                        o = yl,
                        s = bl,
                        u = wl,
                        c = null;
                    return null != n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onUncaughtError && (o = n.onUncaughtError), void 0 !== n.onCaughtError && (s = n.onCaughtError), void 0 !== n.onRecoverableError && (u = n.onRecoverableError), void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks, void 0 !== n.formState && (c = n.formState)), (t = Qd(e, 1, !0, t, 0, r, a, o, s, u, 0, c)).context = Yd(null), n = t.current, (a = ao(r = Ne(r = Ru()))).callback = null, oo(n, a, r), n = r, t.current.lanes = n, ze(t, n), xc(t), e[Re] = t.current, Fc(e), new Of(t)
                }, t.version = "19.1.0"
            },
            1601: e => {
                "use strict";
                e.exports = function(e) {
                    return e[1]
                }
            },
            4477: (e, t) => {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(0 < o(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                            var l = 2 * (r + 1) - 1,
                                s = e[l],
                                u = l + 1,
                                c = e[u];
                            if (0 > o(s, n)) u < a && 0 > o(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l);
                            else {
                                if (!(u < a && 0 > o(c, n))) break e;
                                e[r] = c, e[u] = n, r = u
                            }
                        }
                    }
                    return t
                }

                function o(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if (t.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
                    var i = performance;
                    t.unstable_now = function() {
                        return i.now()
                    }
                } else {
                    var l = Date,
                        s = l.now();
                    t.unstable_now = function() {
                        return l.now() - s
                    }
                }
                var u = [],
                    c = [],
                    d = 1,
                    f = null,
                    p = 3,
                    h = !1,
                    m = !1,
                    g = !1,
                    v = !1,
                    y = "function" == typeof setTimeout ? setTimeout : null,
                    b = "function" == typeof clearTimeout ? clearTimeout : null,
                    w = "undefined" != typeof setImmediate ? setImmediate : null;

                function _(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) a(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(c), t.sortIndex = t.expirationTime, n(u, t)
                        }
                        t = r(c)
                    }
                }

                function x(e) {
                    if (g = !1, _(e), !m)
                        if (null !== r(u)) m = !0, S || (S = !0, k());
                        else {
                            var t = r(c);
                            null !== t && L(x, t.startTime - e)
                        }
                }
                var k, S = !1,
                    z = -1,
                    E = 5,
                    C = -1;

                function N() {
                    return !(!v && t.unstable_now() - C < E)
                }

                function P() {
                    if (v = !1, S) {
                        var e = t.unstable_now();
                        C = e;
                        var n = !0;
                        try {
                            e: {
                                m = !1,
                                g && (g = !1, b(z), z = -1),
                                h = !0;
                                var o = p;
                                try {
                                    t: {
                                        for (_(e), f = r(u); null !== f && !(f.expirationTime > e && N());) {
                                            var i = f.callback;
                                            if ("function" == typeof i) {
                                                f.callback = null, p = f.priorityLevel;
                                                var l = i(f.expirationTime <= e);
                                                if (e = t.unstable_now(), "function" == typeof l) {
                                                    f.callback = l, _(e), n = !0;
                                                    break t
                                                }
                                                f === r(u) && a(u), _(e)
                                            } else a(u);
                                            f = r(u)
                                        }
                                        if (null !== f) n = !0;
                                        else {
                                            var s = r(c);
                                            null !== s && L(x, s.startTime - e), n = !1
                                        }
                                    }
                                    break e
                                }
                                finally {
                                    f = null, p = o, h = !1
                                }
                                n = void 0
                            }
                        }
                        finally {
                            n ? k() : S = !1
                        }
                    }
                }
                if ("function" == typeof w) k = function() {
                    w(P)
                };
                else if ("undefined" != typeof MessageChannel) {
                    var O = new MessageChannel,
                        j = O.port2;
                    O.port1.onmessage = P, k = function() {
                        j.postMessage(null)
                    }
                } else k = function() {
                    y(P, 0)
                };

                function L(e, n) {
                    z = y(function() {
                        e(t.unstable_now())
                    }, n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return p
                }, t.unstable_next = function(e) {
                    switch (p) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = p
                    }
                    var n = p;
                    p = t;
                    try {
                        return e()
                    } finally {
                        p = n
                    }
                }, t.unstable_requestPaint = function() {
                    v = !0
                }, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = p;
                    p = e;
                    try {
                        return t()
                    } finally {
                        p = n
                    }
                }, t.unstable_scheduleCallback = function(e, a, o) {
                    var i = t.unstable_now();
                    switch (o = "object" == typeof o && null !== o && "number" == typeof(o = o.delay) && 0 < o ? i + o : i, e) {
                        case 1:
                            var l = -1;
                            break;
                        case 2:
                            l = 250;
                            break;
                        case 5:
                            l = 1073741823;
                            break;
                        case 4:
                            l = 1e4;
                            break;
                        default:
                            l = 5e3
                    }
                    return e = {
                        id: d++,
                        callback: a,
                        priorityLevel: e,
                        startTime: o,
                        expirationTime: l = o + l,
                        sortIndex: -1
                    }, o > i ? (e.sortIndex = o, n(c, e), null === r(u) && e === r(c) && (g ? (b(z), z = -1) : g = !0, L(x, o - i))) : (e.sortIndex = l, n(u, e), m || h || (m = !0, S || (S = !0, k()))), e
                }, t.unstable_shouldYield = N, t.unstable_wrapCallback = function(e) {
                    var t = p;
                    return function() {
                        var n = p;
                        p = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            p = n
                        }
                    }
                }
            },
            4848: (e, t, n) => {
                "use strict";
                e.exports = n(9698)
            },
            4915: e => {
                e.exports = {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                }
            },
            5338: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (e) {
                        console.error(e)
                    }
                }(), e.exports = n(1247)
            },
            6221: (e, t, n) => {
                "use strict";
                var r = n(6540);

                function a(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                    }
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }

                function o() {}
                var i = {
                        d: {
                            f: o,
                            r: function() {
                                throw Error(a(522))
                            },
                            D: o,
                            C: o,
                            L: o,
                            m: o,
                            X: o,
                            S: o,
                            M: o
                        },
                        p: 0,
                        findDOMNode: null
                    },
                    l = Symbol.for("react.portal"),
                    s = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

                function u(e, t) {
                    return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
                }
                t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(a(299));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: l,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.flushSync = function(e) {
                    var t = s.T,
                        n = i.p;
                    try {
                        if (s.T = null, i.p = 2, e) return e()
                    } finally {
                        s.T = t, i.p = n, i.d.f()
                    }
                }, t.preconnect = function(e, t) {
                    "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, i.d.C(e, t))
                }, t.prefetchDNS = function(e) {
                    "string" == typeof e && i.d.D(e)
                }, t.preinit = function(e, t) {
                    if ("string" == typeof e && t && "string" == typeof t.as) {
                        var n = t.as,
                            r = u(n, t.crossOrigin),
                            a = "string" == typeof t.integrity ? t.integrity : void 0,
                            o = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
                        "style" === n ? i.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                            crossOrigin: r,
                            integrity: a,
                            fetchPriority: o
                        }) : "script" === n && i.d.X(e, {
                            crossOrigin: r,
                            integrity: a,
                            fetchPriority: o,
                            nonce: "string" == typeof t.nonce ? t.nonce : void 0
                        })
                    }
                }, t.preinitModule = function(e, t) {
                    if ("string" == typeof e)
                        if ("object" == typeof t && null !== t) {
                            if (null == t.as || "script" === t.as) {
                                var n = u(t.as, t.crossOrigin);
                                i.d.M(e, {
                                    crossOrigin: n,
                                    integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                                    nonce: "string" == typeof t.nonce ? t.nonce : void 0
                                })
                            }
                        } else null == t && i.d.M(e)
                }, t.preload = function(e, t) {
                    if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
                        var n = t.as,
                            r = u(n, t.crossOrigin);
                        i.d.L(e, n, {
                            crossOrigin: r,
                            integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                            nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                            type: "string" == typeof t.type ? t.type : void 0,
                            fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
                            referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                            imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                            imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
                            media: "string" == typeof t.media ? t.media : void 0
                        })
                    }
                }, t.preloadModule = function(e, t) {
                    if ("string" == typeof e)
                        if (t) {
                            var n = u(t.as, t.crossOrigin);
                            i.d.m(e, {
                                as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                                crossOrigin: n,
                                integrity: "string" == typeof t.integrity ? t.integrity : void 0
                            })
                        } else i.d.m(e)
                }, t.requestFormReset = function(e) {
                    i.d.r(e)
                }, t.unstable_batchedUpdates = function(e, t) {
                    return e(t)
                }, t.useFormState = function(e, t, n) {
                    return s.H.useFormState(e, t, n)
                }, t.useFormStatus = function() {
                    return s.H.useHostTransitionStatus()
                }, t.version = "19.1.0"
            },
            6314: e => {
                "use strict";
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map(function(t) {
                            var n = "",
                                r = void 0 !== t[5];
                            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                        }).join("")
                    }, t.i = function(e, n, r, a, o) {
                        "string" == typeof e && (e = [
                            [null, e, void 0]
                        ]);
                        var i = {};
                        if (r)
                            for (var l = 0; l < this.length; l++) {
                                var s = this[l][0];
                                null != s && (i[s] = !0)
                            }
                        for (var u = 0; u < e.length; u++) {
                            var c = [].concat(e[u]);
                            r && i[c[0]] || (void 0 !== o && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = o), n && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = n) : c[2] = n), a && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = a) : c[4] = "".concat(a)), t.push(c))
                        }
                    }, t
                }
            },
            6509: (e, t, n) => {
                var r = n(8961);
                r && r.__esModule && (r = r.default), e.exports = "string" == typeof r ? r : r.toString()
            },
            6540: (e, t, n) => {
                "use strict";
                e.exports = n(9869)
            },
            8911: (e, t) => {
                "use strict";
                var n = Symbol.for("react.transitional.element"),
                    r = (Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.consumer"), Symbol.for("react.context"), Symbol.for("react.forward_ref")),
                    a = (Symbol.for("react.suspense"), Symbol.for("react.memo"), Symbol.for("react.lazy"), Symbol.iterator, {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    }),
                    o = Object.assign,
                    i = {};

                function l(e, t, n) {
                    this.props = e, this.context = t, this.refs = i, this.updater = n || a
                }

                function s() {}

                function u(e, t, n) {
                    this.props = e, this.context = t, this.refs = i, this.updater = n || a
                }
                l.prototype.isReactComponent = {}, l.prototype.setState = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, l.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, s.prototype = l.prototype;
                var c = u.prototype = new s;
                c.constructor = u, o(c, l.prototype), c.isPureReactComponent = !0;
                Array.isArray;
                var d = Object.prototype.hasOwnProperty;

                function f(e, t, r, a, o, i) {
                    return r = i.ref, {
                        $$typeof: n,
                        type: e,
                        key: t,
                        ref: void 0 !== r ? r : null,
                        props: i
                    }
                }
                "function" == typeof reportError && reportError;
                t.createElement = function(e, t, n) {
                    var r, a = {},
                        o = null;
                    if (null != t)
                        for (r in void 0 !== t.key && (o = "" + t.key), t) d.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
                    var i = arguments.length - 2;
                    if (1 === i) a.children = n;
                    else if (1 < i) {
                        for (var l = Array(i), s = 0; s < i; s++) l[s] = arguments[s + 2];
                        a.children = l
                    }
                    if (e && e.defaultProps)
                        for (r in i = e.defaultProps) void 0 === a[r] && (a[r] = i[r]);
                    return f(e, o, void 0, 0, 0, a)
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: r,
                        render: e
                    }
                }
            },
            8961: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    default: () => l
                });
                var r = n(1601),
                    a = n.n(r),
                    o = n(6314),
                    i = n.n(o)()(a());
                i.push([e.id, '*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font-family by default.\n2. Use the user\'s configured `mono` font-feature-settings by default.\n3. Use the user\'s configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type=\'button\']),\ninput:where([type=\'reset\']),\ninput:where([type=\'submit\']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden="until-found"])) {\n  display: none;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.-left-2 {\n  left: -0.5rem;\n}\n.-right-2 {\n  right: -0.5rem;\n}\n.-top-2 {\n  top: -0.5rem;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-3 {\n  bottom: 0.75rem;\n}\n.left-0 {\n  left: 0px;\n}\n.left-3 {\n  left: 0.75rem;\n}\n.right-0 {\n  right: 0px;\n}\n.right-3 {\n  right: 0.75rem;\n}\n.top-0 {\n  top: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-50 {\n  z-index: 50;\n}\n.m-0 {\n  margin: 0px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mb-0 {\n  margin-bottom: 0px;\n}\n.mb-0\\.5 {\n  margin-bottom: 0.125rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.mb-\\[2px\\] {\n  margin-bottom: 2px;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.mt-\\[2px\\] {\n  margin-top: 2px;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-48 {\n  height: 12rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-7 {\n  height: 1.75rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-\\[2\\.5rem\\] {\n  height: 2.5rem;\n}\n.min-h-0 {\n  min-height: 0px;\n}\n.min-h-\\[2\\.5rem\\] {\n  min-height: 2.5rem;\n}\n.min-h-\\[3rem\\] {\n  min-height: 3rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-7 {\n  width: 1.75rem;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-\\[2\\.5rem\\] {\n  width: 2.5rem;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-\\[2\\.5rem\\] {\n  min-width: 2.5rem;\n}\n.min-w-\\[200px\\] {\n  min-width: 200px;\n}\n.min-w-\\[320px\\] {\n  min-width: 320px;\n}\n.min-w-\\[3rem\\] {\n  min-width: 3rem;\n}\n.max-w-4xl {\n  max-width: 56rem;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.max-w-prose {\n  max-width: 65ch;\n}\n.max-w-xl {\n  max-width: 36rem;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.-translate-x-7 {\n  --tw-translate-x: -1.75rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[1px\\] {\n  --tw-translate-y: 1px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes pulse {\n\n  50% {\n    opacity: .5;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.resize {\n  resize: both;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-0 {\n  border-width: 0px;\n}\n.border-t-4 {\n  border-top-width: 4px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-emerald-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(16 185 129 / var(--tw-border-opacity, 1));\n}\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));\n}\n.border-gray-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));\n}\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.p-0 {\n  padding: 0px;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.px-12 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pt-6 {\n  padding-top: 1.5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.leading-5 {\n  line-height: 1.25rem;\n}\n.leading-6 {\n  line-height: 1.5rem;\n}\n.leading-7 {\n  line-height: 1.75rem;\n}\n.leading-8 {\n  line-height: 2rem;\n}\n.leading-none {\n  line-height: 1;\n}\n.text-\\[\\#F8AF0D\\] {\n  --tw-text-opacity: 1;\n  color: rgb(248 175 13 / var(--tw-text-opacity, 1));\n}\n.text-amber-500 {\n  --tw-text-opacity: 1;\n  color: rgb(245 158 11 / var(--tw-text-opacity, 1));\n}\n.text-amber-600 {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity, 1));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.text-gray-50 {\n  --tw-text-opacity: 1;\n  color: rgb(249 250 251 / var(--tw-text-opacity, 1));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.text-gray-950 {\n  --tw-text-opacity: 1;\n  color: rgb(3 7 18 / var(--tw-text-opacity, 1));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.no-underline {\n  text-decoration-line: none;\n}\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-none {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.outline-dashed {\n  outline-style: dashed;\n}\n.outline-0 {\n  outline-width: 0px;\n}\n.outline-gray-500 {\n  outline-color: #6b7280;\n}\n.ring-gray-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1));\n}\n.ring-gray-900 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity, 1));\n}\n.grayscale {\n  --tw-grayscale: grayscale(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n:host {\n    all: initial;\n    display: block;\n    box-sizing: border-box; /* reset useful defaults */\n    line-height: 1.5; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    -o-tab-size: 4;\n    tab-size: 4; /* 3 */\n    font-family: ui-sans-serif, system-ui, sans-serif,\n        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n        "Noto Color Emoji"; /* 4 */\n    font-feature-settings: normal; /* 5 */\n    font-variation-settings: normal; /* 6 */\n    -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.group:hover .group-hover\\:flex {\n  display: flex;\n}\n\n@media (min-width: 768px) {\n\n  .md\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:leading-6 {\n    line-height: 1.5rem;\n  }\n\n  .lg\\:leading-7 {\n    line-height: 1.75rem;\n  }\n}\n', ""]);
                const l = i
            },
            9698: (e, t) => {
                "use strict";
                var n = Symbol.for("react.transitional.element"),
                    r = Symbol.for("react.fragment");

                function a(e, t, r) {
                    var a = null;
                    if (void 0 !== r && (a = "" + r), void 0 !== t.key && (a = "" + t.key), "key" in t)
                        for (var o in r = {}, t) "key" !== o && (r[o] = t[o]);
                    else r = t;
                    return t = r.ref, {
                        $$typeof: n,
                        type: e,
                        key: a,
                        ref: void 0 !== t ? t : null,
                        props: r
                    }
                }
                t.Fragment = r, t.jsx = a, t.jsxs = a
            },
            9710: (e, t, n) => {
                "use strict";
                e.exports = n(8911)
            },
            9869: (e, t) => {
                "use strict";
                var n = Symbol.for("react.transitional.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    i = Symbol.for("react.profiler"),
                    l = Symbol.for("react.consumer"),
                    s = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    p = Symbol.iterator,
                    h = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    m = Object.assign,
                    g = {};

                function v(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || h
                }

                function y() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || h
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, v.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, y.prototype = v.prototype;
                var w = b.prototype = new y;
                w.constructor = b, m(w, v.prototype), w.isPureReactComponent = !0;
                var _ = Array.isArray,
                    x = {
                        H: null,
                        A: null,
                        T: null,
                        S: null,
                        V: null
                    },
                    k = Object.prototype.hasOwnProperty;

                function S(e, t, r, a, o, i) {
                    return r = i.ref, {
                        $$typeof: n,
                        type: e,
                        key: t,
                        ref: void 0 !== r ? r : null,
                        props: i
                    }
                }

                function z(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === n
                }
                var E = /\/+/g;

                function C(e, t) {
                    return "object" == typeof e && null !== e && null != e.key ? (n = "" + e.key, r = {
                        "=": "=0",
                        ":": "=2"
                    }, "$" + n.replace(/[=:]/g, function(e) {
                        return r[e]
                    })) : t.toString(36);
                    var n, r
                }

                function N() {}

                function P(e, t, a, o, i) {
                    var l = typeof e;
                    "undefined" !== l && "boolean" !== l || (e = null);
                    var s, u, c = !1;
                    if (null === e) c = !0;
                    else switch (l) {
                        case "bigint":
                        case "string":
                        case "number":
                            c = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    c = !0;
                                    break;
                                case f:
                                    return P((c = e._init)(e._payload), t, a, o, i)
                            }
                    }
                    if (c) return i = i(e), c = "" === o ? "." + C(e, 0) : o, _(i) ? (a = "", null != c && (a = c.replace(E, "$&/") + "/"), P(i, t, a, "", function(e) {
                        return e
                    })) : null != i && (z(i) && (s = i, u = a + (null == i.key || e && e.key === i.key ? "" : ("" + i.key).replace(E, "$&/") + "/") + c, i = S(s.type, u, void 0, 0, 0, s.props)), t.push(i)), 1;
                    c = 0;
                    var d, h = "" === o ? "." : o + ":";
                    if (_(e))
                        for (var m = 0; m < e.length; m++) c += P(o = e[m], t, a, l = h + C(o, m), i);
                    else if ("function" == typeof(m = null === (d = e) || "object" != typeof d ? null : "function" == typeof(d = p && d[p] || d["@@iterator"]) ? d : null))
                        for (e = m.call(e), m = 0; !(o = e.next()).done;) c += P(o = o.value, t, a, l = h + C(o, m++), i);
                    else if ("object" === l) {
                        if ("function" == typeof e.then) return P(function(e) {
                            switch (e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason;
                                default:
                                    switch ("string" == typeof e.status ? e.then(N, N) : (e.status = "pending", e.then(function(t) {
                                            "pending" === e.status && (e.status = "fulfilled", e.value = t)
                                        }, function(t) {
                                            "pending" === e.status && (e.status = "rejected", e.reason = t)
                                        })), e.status) {
                                        case "fulfilled":
                                            return e.value;
                                        case "rejected":
                                            throw e.reason
                                    }
                            }
                            throw e
                        }(e), t, a, o, i);
                        throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
                    }
                    return c
                }

                function O(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return P(e, r, "", "", function(e) {
                        return t.call(n, e, a++)
                    }), r
                }

                function j(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then(function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }, function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        }), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var L = "function" == typeof reportError ? reportError : function(e) {
                    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                        var t = new window.ErrorEvent("error", {
                            bubbles: !0,
                            cancelable: !0,
                            message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                            error: e
                        });
                        if (!window.dispatchEvent(t)) return
                    } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e);
                    console.error(e)
                };

                function T() {}
                t.Children = {
                    map: O,
                    forEach: function(e, t, n) {
                        O(e, function() {
                            t.apply(this, arguments)
                        }, n)
                    },
                    count: function(e) {
                        var t = 0;
                        return O(e, function() {
                            t++
                        }), t
                    },
                    toArray: function(e) {
                        return O(e, function(e) {
                            return e
                        }) || []
                    },
                    only: function(e) {
                        if (!z(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = v, t.Fragment = a, t.Profiler = i, t.PureComponent = b, t.StrictMode = o, t.Suspense = c, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x, t.__COMPILER_RUNTIME = {
                    __proto__: null,
                    c: function(e) {
                        return x.H.useMemoCache(e)
                    }
                }, t.cache = function(e) {
                    return function() {
                        return e.apply(null, arguments)
                    }
                }, t.cloneElement = function(e, t, n) {
                    if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
                    var r = m({}, e.props),
                        a = e.key;
                    if (null != t)
                        for (o in t.ref, void 0 !== t.key && (a = "" + t.key), t) !k.call(t, o) || "key" === o || "__self" === o || "__source" === o || "ref" === o && void 0 === t.ref || (r[o] = t[o]);
                    var o = arguments.length - 2;
                    if (1 === o) r.children = n;
                    else if (1 < o) {
                        for (var i = Array(o), l = 0; l < o; l++) i[l] = arguments[l + 2];
                        r.children = i
                    }
                    return S(e.type, a, void 0, 0, 0, r)
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: s,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = e, e.Consumer = {
                        $$typeof: l,
                        _context: e
                    }, e
                }, t.createElement = function(e, t, n) {
                    var r, a = {},
                        o = null;
                    if (null != t)
                        for (r in void 0 !== t.key && (o = "" + t.key), t) k.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
                    var i = arguments.length - 2;
                    if (1 === i) a.children = n;
                    else if (1 < i) {
                        for (var l = Array(i), s = 0; s < i; s++) l[s] = arguments[s + 2];
                        a.children = l
                    }
                    if (e && e.defaultProps)
                        for (r in i = e.defaultProps) void 0 === a[r] && (a[r] = i[r]);
                    return S(e, o, void 0, 0, 0, a)
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: u,
                        render: e
                    }
                }, t.isValidElement = z, t.lazy = function(e) {
                    return {
                        $$typeof: f,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: j
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: d,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = x.T,
                        n = {};
                    x.T = n;
                    try {
                        var r = e(),
                            a = x.S;
                        null !== a && a(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(T, L)
                    } catch (e) {
                        L(e)
                    } finally {
                        x.T = t
                    }
                }, t.unstable_useCacheRefresh = function() {
                    return x.H.useCacheRefresh()
                }, t.use = function(e) {
                    return x.H.use(e)
                }, t.useActionState = function(e, t, n) {
                    return x.H.useActionState(e, t, n)
                }, t.useCallback = function(e, t) {
                    return x.H.useCallback(e, t)
                }, t.useContext = function(e) {
                    return x.H.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e, t) {
                    return x.H.useDeferredValue(e, t)
                }, t.useEffect = function(e, t, n) {
                    var r = x.H;
                    if ("function" == typeof n) throw Error("useEffect CRUD overload is not enabled in this build of React.");
                    return r.useEffect(e, t)
                }, t.useId = function() {
                    return x.H.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return x.H.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return x.H.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return x.H.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return x.H.useMemo(e, t)
                }, t.useOptimistic = function(e, t) {
                    return x.H.useOptimistic(e, t)
                }, t.useReducer = function(e, t, n) {
                    return x.H.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return x.H.useRef(e)
                }, t.useState = function(e) {
                    return x.H.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return x.H.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return x.H.useTransition()
                }, t.version = "19.1.0"
            },
            9982: (e, t, n) => {
                "use strict";
                e.exports = n(4477)
            }
        },
        o = {};

    function i(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var n = o[e] = {
            id: e,
            exports: {}
        };
        return a[e](n, n.exports, i), n.exports
    }
    i.m = a, i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var a = Object.create(null);
        i.r(a);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & r && n;
            "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach(e => o[e] = () => n[e]);
        return o.default = () => n, i.d(a, o), a
    }, i.d = (e, t) => {
        for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((t, n) => (i.f[n](e, t), t), [])), i.u = e => e + ".min.js", i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, r = "widgets_v2:", i.l = (e, t, a, o) => {
        if (n[e]) n[e].push(t);
        else {
            var l, s;
            if (void 0 !== a)
                for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                    var d = u[c];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == r + a) {
                        l = d;
                        break
                    }
                }
            l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.setAttribute("data-webpack", r + a), l.src = e), n[e] = [t];
            var f = (t, r) => {
                    l.onerror = l.onload = null, clearTimeout(p);
                    var a = n[e];
                    if (delete n[e], l.parentNode && l.parentNode.removeChild(l), a && a.forEach(e => e(r)), t) return t(r)
                },
                p = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: l
                }), 12e4);
            l.onerror = f.bind(null, l.onerror), l.onload = f.bind(null, l.onload), s && document.head.appendChild(l)
        }
    }, i.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        i.g.importScripts && (e = i.g.location + "");
        var t = i.g.document;
        if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
                for (var r = n.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = n[r--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
    })(), (() => {
        var e = {
            674: 0
        };
        i.f.j = (t, n) => {
            var r = i.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else {
                    var a = new Promise((n, a) => r = e[t] = [n, a]);
                    n.push(r[2] = a);
                    var o = i.p + i.u(t),
                        l = new Error;
                    i.l(o, n => {
                        if (i.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var a = n && ("load" === n.type ? "missing" : n.type),
                                o = n && n.target && n.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", l.name = "ChunkLoadError", l.type = a, l.request = o, r[1](l)
                        }
                    }, "chunk-" + t, t)
                }
        };
        var t = (t, n) => {
                var r, a, [o, l, s] = n,
                    u = 0;
                if (o.some(t => 0 !== e[t])) {
                    for (r in l) i.o(l, r) && (i.m[r] = l[r]);
                    s && s(i)
                }
                for (t && t(n); u < o.length; u++) a = o[u], i.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            n = self.webpackChunkwidgets_v2 = self.webpackChunkwidgets_v2 || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var l = {};
    return (() => {
        "use strict";
        i.r(l), i.d(l, {
            default: () => Lo
        });
        var e = i(4848);

        function t(e, t, n) {
            function r(n, r) {
                var a;
                Object.defineProperty(n, "_zod", {
                    value: n._zod ?? {},
                    enumerable: !1
                }), (a = n._zod).traits ?? (a.traits = new Set), n._zod.traits.add(e), t(n, r);
                for (const e in i.prototype) e in n || Object.defineProperty(n, e, {
                    value: i.prototype[e].bind(n)
                });
                n._zod.constr = i, n._zod.def = r
            }
            const a = n?.Parent ?? Object;
            class o extends a {}

            function i(e) {
                var t;
                const a = n?.Parent ? new o : this;
                r(a, e), (t = a._zod).deferred ?? (t.deferred = []);
                for (const e of a._zod.deferred) e();
                return a
            }
            return Object.defineProperty(o, "name", {
                value: e
            }), Object.defineProperty(i, "init", {
                value: r
            }), Object.defineProperty(i, Symbol.hasInstance, {
                value: t => !!(n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e)
            }), Object.defineProperty(i, "name", {
                value: e
            }), i
        }
        Object.freeze({
            status: "aborted"
        }), Symbol("zod_brand");
        class n extends Error {
            constructor() {
                super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
            }
        }
        const r = {};

        function a(e) {
            return e && Object.assign(r, e), r
        }
        const o = /^[cC][^\s-]{8,}$/,
            s = /^[0-9a-z]+$/,
            u = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
            c = /^[0-9a-vA-V]{20}$/,
            d = /^[A-Za-z0-9]{27}$/,
            f = /^[a-zA-Z0-9_-]{21}$/,
            p = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
            h = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
            m = e => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
            g = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
            v = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
            y = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
            b = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
            w = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
            _ = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
            x = /^[A-Za-z0-9_-]*$/,
            k = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
            S = /^\+(?:[0-9]){6,14}[0-9]$/,
            z = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
            E = new RegExp(`^${z}$`);

        function C(e) {
            const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
            return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`
        }
        const N = /^\d+$/,
            P = /^-?\d+(?:\.\d+)?/i,
            O = /true|false/i,
            j = /^[^A-Z]*$/,
            L = /^[^a-z]*$/;

        function T(e, t) {
            return "bigint" == typeof t ? t.toString() : t
        }

        function R(e) {
            return {
                get value() {
                    {
                        const t = e();
                        return Object.defineProperty(this, "value", {
                            value: t
                        }), t
                    }
                }
            }
        }

        function M(e) {
            return null == e
        }

        function A(e) {
            const t = e.startsWith("^") ? 1 : 0,
                n = e.endsWith("$") ? e.length - 1 : e.length;
            return e.slice(t, n)
        }
        const $ = Symbol("evaluating");

        function I(e, t, n) {
            let r;
            Object.defineProperty(e, t, {
                get() {
                    if (r !== $) return void 0 === r && (r = $, r = n()), r
                },
                set(n) {
                    Object.defineProperty(e, t, {
                        value: n
                    })
                },
                configurable: !0
            })
        }

        function D(e, t, n) {
            Object.defineProperty(e, t, {
                value: n,
                writable: !0,
                enumerable: !0,
                configurable: !0
            })
        }

        function F(...e) {
            const t = {};
            for (const n of e) {
                const e = Object.getOwnPropertyDescriptors(n);
                Object.assign(t, e)
            }
            return Object.defineProperties({}, t)
        }

        function U(e) {
            return JSON.stringify(e)
        }
        const V = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};

        function Z(e) {
            return "object" == typeof e && null !== e && !Array.isArray(e)
        }
        const B = R(() => {
            if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
            try {
                return new Function(""), !0
            } catch (e) {
                return !1
            }
        });

        function H(e) {
            if (!1 === Z(e)) return !1;
            const t = e.constructor;
            if (void 0 === t) return !0;
            const n = t.prototype;
            return !1 !== Z(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
        }
        const W = new Set(["string", "number", "symbol"]);

        function q(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function G(e, t, n) {
            const r = new e._zod.constr(t ?? e._zod.def);
            return t && !n?.parent || (r._zod.parent = e), r
        }

        function K(e) {
            const t = e;
            if (!t) return {};
            if ("string" == typeof t) return {
                error: () => t
            };
            if (void 0 !== t?.message) {
                if (void 0 !== t?.error) throw new Error("Cannot specify both `message` and `error` params");
                t.error = t.message
            }
            return delete t.message, "string" == typeof t.error ? {
                ...t,
                error: () => t.error
            } : t
        }
        new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
        const Q = {
            safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
            int32: [-2147483648, 2147483647],
            uint32: [0, 4294967295],
            float32: [-34028234663852886e22, 34028234663852886e22],
            float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
        };

        function Y(e, t = 0) {
            for (let n = t; n < e.issues.length; n++)
                if (!0 !== e.issues[n]?.continue) return !0;
            return !1
        }

        function J(e, t) {
            return t.map(t => {
                var n;
                return (n = t).path ?? (n.path = []), t.path.unshift(e), t
            })
        }

        function X(e) {
            return "string" == typeof e ? e : e?.message
        }

        function ee(e, t, n) {
            const r = {
                ...e,
                path: e.path ?? []
            };
            if (!e.message) {
                const a = X(e.inst?._zod.def?.error?.(e)) ?? X(t?.error?.(e)) ?? X(n.customError?.(e)) ?? X(n.localeError?.(e)) ?? "Invalid input";
                r.message = a
            }
            return delete r.inst, delete r.continue, t?.reportInput || delete r.input, r
        }

        function te(e) {
            return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown"
        }

        function ne(...e) {
            const [t, n, r] = e;
            return "string" == typeof t ? {
                message: t,
                code: "custom",
                input: n,
                inst: r
            } : {
                ...t
            }
        }
        const re = t("$ZodCheck", (e, t) => {
                var n;
                e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = [])
            }),
            ae = {
                number: "number",
                bigint: "bigint",
                object: "date"
            },
            oe = t("$ZodCheckLessThan", (e, t) => {
                re.init(e, t);
                const n = ae[typeof t.value];
                e._zod.onattach.push(e => {
                    const n = e._zod.bag,
                        r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
                    t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value)
                }), e._zod.check = r => {
                    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
                        origin: n,
                        code: "too_big",
                        maximum: t.value,
                        input: r.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            ie = t("$ZodCheckGreaterThan", (e, t) => {
                re.init(e, t);
                const n = ae[typeof t.value];
                e._zod.onattach.push(e => {
                    const n = e._zod.bag,
                        r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
                    t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value)
                }), e._zod.check = r => {
                    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
                        origin: n,
                        code: "too_small",
                        minimum: t.value,
                        input: r.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            le = t("$ZodCheckMultipleOf", (e, t) => {
                re.init(e, t), e._zod.onattach.push(e => {
                    var n;
                    (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value)
                }), e._zod.check = n => {
                    if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
                    ("bigint" == typeof n.value ? n.value % t.value === BigInt(0) : 0 === function(e, t) {
                        const n = (e.toString().split(".")[1] || "").length,
                            r = t.toString();
                        let a = (r.split(".")[1] || "").length;
                        if (0 === a && /\d?e-\d?/.test(r)) {
                            const e = r.match(/\d?e-(\d?)/);
                            e?.[1] && (a = Number.parseInt(e[1]))
                        }
                        const o = n > a ? n : a;
                        return Number.parseInt(e.toFixed(o).replace(".", "")) % Number.parseInt(t.toFixed(o).replace(".", "")) / 10 ** o
                    }(n.value, t.value)) || n.issues.push({
                        origin: typeof n.value,
                        code: "not_multiple_of",
                        divisor: t.value,
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            se = t("$ZodCheckNumberFormat", (e, t) => {
                re.init(e, t), t.format = t.format || "float64";
                const n = t.format?.includes("int"),
                    r = n ? "int" : "number",
                    [a, o] = Q[t.format];
                e._zod.onattach.push(e => {
                    const r = e._zod.bag;
                    r.format = t.format, r.minimum = a, r.maximum = o, n && (r.pattern = N)
                }), e._zod.check = i => {
                    const l = i.value;
                    if (n) {
                        if (!Number.isInteger(l)) return void i.issues.push({
                            expected: r,
                            format: t.format,
                            code: "invalid_type",
                            continue: !1,
                            input: l,
                            inst: e
                        });
                        if (!Number.isSafeInteger(l)) return void(l > 0 ? i.issues.push({
                            input: l,
                            code: "too_big",
                            maximum: Number.MAX_SAFE_INTEGER,
                            note: "Integers must be within the safe integer range.",
                            inst: e,
                            origin: r,
                            continue: !t.abort
                        }) : i.issues.push({
                            input: l,
                            code: "too_small",
                            minimum: Number.MIN_SAFE_INTEGER,
                            note: "Integers must be within the safe integer range.",
                            inst: e,
                            origin: r,
                            continue: !t.abort
                        }))
                    }
                    l < a && i.issues.push({
                        origin: "number",
                        input: l,
                        code: "too_small",
                        minimum: a,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort
                    }), l > o && i.issues.push({
                        origin: "number",
                        input: l,
                        code: "too_big",
                        maximum: o,
                        inst: e
                    })
                }
            }),
            ue = t("$ZodCheckMaxLength", (e, t) => {
                var n;
                re.init(e, t), (n = e._zod.def).when ?? (n.when = e => {
                    const t = e.value;
                    return !M(t) && void 0 !== t.length
                }), e._zod.onattach.push(e => {
                    const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
                    t.maximum < n && (e._zod.bag.maximum = t.maximum)
                }), e._zod.check = n => {
                    const r = n.value;
                    if (r.length <= t.maximum) return;
                    const a = te(r);
                    n.issues.push({
                        origin: a,
                        code: "too_big",
                        maximum: t.maximum,
                        inclusive: !0,
                        input: r,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            ce = t("$ZodCheckMinLength", (e, t) => {
                var n;
                re.init(e, t), (n = e._zod.def).when ?? (n.when = e => {
                    const t = e.value;
                    return !M(t) && void 0 !== t.length
                }), e._zod.onattach.push(e => {
                    const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
                    t.minimum > n && (e._zod.bag.minimum = t.minimum)
                }), e._zod.check = n => {
                    const r = n.value;
                    if (r.length >= t.minimum) return;
                    const a = te(r);
                    n.issues.push({
                        origin: a,
                        code: "too_small",
                        minimum: t.minimum,
                        inclusive: !0,
                        input: r,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            de = t("$ZodCheckLengthEquals", (e, t) => {
                var n;
                re.init(e, t), (n = e._zod.def).when ?? (n.when = e => {
                    const t = e.value;
                    return !M(t) && void 0 !== t.length
                }), e._zod.onattach.push(e => {
                    const n = e._zod.bag;
                    n.minimum = t.length, n.maximum = t.length, n.length = t.length
                }), e._zod.check = n => {
                    const r = n.value,
                        a = r.length;
                    if (a === t.length) return;
                    const o = te(r),
                        i = a > t.length;
                    n.issues.push({
                        origin: o,
                        ...i ? {
                            code: "too_big",
                            maximum: t.length
                        } : {
                            code: "too_small",
                            minimum: t.length
                        },
                        inclusive: !0,
                        exact: !0,
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            fe = t("$ZodCheckStringFormat", (e, t) => {
                var n, r;
                re.init(e, t), e._zod.onattach.push(e => {
                    const n = e._zod.bag;
                    n.format = t.format, t.pattern && (n.patterns ?? (n.patterns = new Set), n.patterns.add(t.pattern))
                }), t.pattern ? (n = e._zod).check ?? (n.check = n => {
                    t.pattern.lastIndex = 0, t.pattern.test(n.value) || n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: t.format,
                        input: n.value,
                        ...t.pattern ? {
                            pattern: t.pattern.toString()
                        } : {},
                        inst: e,
                        continue: !t.abort
                    })
                }) : (r = e._zod).check ?? (r.check = () => {})
            }),
            pe = t("$ZodCheckRegex", (e, t) => {
                fe.init(e, t), e._zod.check = n => {
                    t.pattern.lastIndex = 0, t.pattern.test(n.value) || n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "regex",
                        input: n.value,
                        pattern: t.pattern.toString(),
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            he = t("$ZodCheckLowerCase", (e, t) => {
                t.pattern ?? (t.pattern = j), fe.init(e, t)
            }),
            me = t("$ZodCheckUpperCase", (e, t) => {
                t.pattern ?? (t.pattern = L), fe.init(e, t)
            }),
            ge = t("$ZodCheckIncludes", (e, t) => {
                re.init(e, t);
                const n = q(t.includes),
                    r = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
                t.pattern = r, e._zod.onattach.push(e => {
                    const t = e._zod.bag;
                    t.patterns ?? (t.patterns = new Set), t.patterns.add(r)
                }), e._zod.check = n => {
                    n.value.includes(t.includes, t.position) || n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "includes",
                        includes: t.includes,
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            ve = t("$ZodCheckStartsWith", (e, t) => {
                re.init(e, t);
                const n = new RegExp(`^${q(t.prefix)}.*`);
                t.pattern ?? (t.pattern = n), e._zod.onattach.push(e => {
                    const t = e._zod.bag;
                    t.patterns ?? (t.patterns = new Set), t.patterns.add(n)
                }), e._zod.check = n => {
                    n.value.startsWith(t.prefix) || n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "starts_with",
                        prefix: t.prefix,
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            ye = t("$ZodCheckEndsWith", (e, t) => {
                re.init(e, t);
                const n = new RegExp(`.*${q(t.suffix)}$`);
                t.pattern ?? (t.pattern = n), e._zod.onattach.push(e => {
                    const t = e._zod.bag;
                    t.patterns ?? (t.patterns = new Set), t.patterns.add(n)
                }), e._zod.check = n => {
                    n.value.endsWith(t.suffix) || n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "ends_with",
                        suffix: t.suffix,
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            be = t("$ZodCheckOverwrite", (e, t) => {
                re.init(e, t), e._zod.check = e => {
                    e.value = t.tx(e.value)
                }
            });
        class we {
            constructor(e = []) {
                this.content = [], this.indent = 0, this && (this.args = e)
            }
            indented(e) {
                this.indent += 1, e(this), this.indent -= 1
            }
            write(e) {
                if ("function" == typeof e) return e(this, {
                    execution: "sync"
                }), void e(this, {
                    execution: "async"
                });
                const t = e.split("\n").filter(e => e),
                    n = Math.min(...t.map(e => e.length - e.trimStart().length)),
                    r = t.map(e => e.slice(n)).map(e => " ".repeat(2 * this.indent) + e);
                for (const e of r) this.content.push(e)
            }
            compile() {
                const e = Function,
                    t = this?.args;
                return new e(...t, [...(this?.content ?? [""]).map(e => `  ${e}`)].join("\n"))
            }
        }
        const _e = (e, t) => {
                e.name = "$ZodError", Object.defineProperty(e, "_zod", {
                    value: e._zod,
                    enumerable: !1
                }), Object.defineProperty(e, "issues", {
                    value: t,
                    enumerable: !1
                }), e.message = JSON.stringify(t, T, 2), Object.defineProperty(e, "toString", {
                    value: () => e.message,
                    enumerable: !1
                })
            },
            xe = t("$ZodError", _e),
            ke = t("$ZodError", _e, {
                Parent: Error
            }),
            Se = e => (t, r, o, i) => {
                const l = o ? Object.assign(o, {
                        async: !1
                    }) : {
                        async: !1
                    },
                    s = t._zod.run({
                        value: r,
                        issues: []
                    }, l);
                if (s instanceof Promise) throw new n;
                if (s.issues.length) {
                    const t = new(i?.Err ?? e)(s.issues.map(e => ee(e, l, a())));
                    throw V(t, i?.callee), t
                }
                return s.value
            },
            ze = e => async (t, n, r, o) => {
                const i = r ? Object.assign(r, {
                    async: !0
                }) : {
                    async: !0
                };
                let l = t._zod.run({
                    value: n,
                    issues: []
                }, i);
                if (l instanceof Promise && (l = await l), l.issues.length) {
                    const t = new(o?.Err ?? e)(l.issues.map(e => ee(e, i, a())));
                    throw V(t, o?.callee), t
                }
                return l.value
            }, Ee = e => (t, r, o) => {
                const i = o ? {
                        ...o,
                        async: !1
                    } : {
                        async: !1
                    },
                    l = t._zod.run({
                        value: r,
                        issues: []
                    }, i);
                if (l instanceof Promise) throw new n;
                return l.issues.length ? {
                    success: !1,
                    error: new(e ?? xe)(l.issues.map(e => ee(e, i, a())))
                } : {
                    success: !0,
                    data: l.value
                }
            }, Ce = Ee(ke), Ne = e => async (t, n, r) => {
                const o = r ? Object.assign(r, {
                    async: !0
                }) : {
                    async: !0
                };
                let i = t._zod.run({
                    value: n,
                    issues: []
                }, o);
                return i instanceof Promise && (i = await i), i.issues.length ? {
                    success: !1,
                    error: new e(i.issues.map(e => ee(e, o, a())))
                } : {
                    success: !0,
                    data: i.value
                }
            }, Pe = Ne(ke), Oe = {
                major: 4,
                minor: 0,
                patch: 14
            }, je = t("$ZodType", (e, t) => {
                var r;
                e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Oe;
                const a = [...e._zod.def.checks ?? []];
                e._zod.traits.has("$ZodCheck") && a.unshift(e);
                for (const t of a)
                    for (const n of t._zod.onattach) n(e);
                if (0 === a.length)(r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
                    e._zod.run = e._zod.parse
                });
                else {
                    const t = (e, t, r) => {
                        let a, o = Y(e);
                        for (const i of t) {
                            if (i._zod.def.when) {
                                if (!i._zod.def.when(e)) continue
                            } else if (o) continue;
                            const t = e.issues.length,
                                l = i._zod.check(e);
                            if (l instanceof Promise && !1 === r?.async) throw new n;
                            if (a || l instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
                                await l, e.issues.length !== t && (o || (o = Y(e, t)))
                            });
                            else {
                                if (e.issues.length === t) continue;
                                o || (o = Y(e, t))
                            }
                        }
                        return a ? a.then(() => e) : e
                    };
                    e._zod.run = (r, o) => {
                        const i = e._zod.parse(r, o);
                        if (i instanceof Promise) {
                            if (!1 === o.async) throw new n;
                            return i.then(e => t(e, a, o))
                        }
                        return t(i, a, o)
                    }
                }
                e["~standard"] = {
                    validate: t => {
                        try {
                            const n = Ce(e, t);
                            return n.success ? {
                                value: n.data
                            } : {
                                issues: n.error?.issues
                            }
                        } catch (n) {
                            return Pe(e, t).then(e => e.success ? {
                                value: e.data
                            } : {
                                issues: e.error?.issues
                            })
                        }
                    },
                    vendor: "zod",
                    version: 1
                }
            }), Le = t("$ZodString", (e, t) => {
                var n;
                je.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? (n = e._zod.bag, new RegExp(`^${n?`[\\s\\S]{${n?.minimum??0},${n?.maximum??""}}`:"[\\s\\S]*"}$`)), e._zod.parse = (n, r) => {
                    if (t.coerce) try {
                        n.value = String(n.value)
                    } catch (r) {}
                    return "string" == typeof n.value || n.issues.push({
                        expected: "string",
                        code: "invalid_type",
                        input: n.value,
                        inst: e
                    }), n
                }
            }), Te = t("$ZodStringFormat", (e, t) => {
                fe.init(e, t), Le.init(e, t)
            }), Re = t("$ZodGUID", (e, t) => {
                t.pattern ?? (t.pattern = h), Te.init(e, t)
            }), Me = t("$ZodUUID", (e, t) => {
                if (t.version) {
                    const e = {
                        v1: 1,
                        v2: 2,
                        v3: 3,
                        v4: 4,
                        v5: 5,
                        v6: 6,
                        v7: 7,
                        v8: 8
                    } [t.version];
                    if (void 0 === e) throw new Error(`Invalid UUID version: "${t.version}"`);
                    t.pattern ?? (t.pattern = m(e))
                } else t.pattern ?? (t.pattern = m());
                Te.init(e, t)
            }), Ae = t("$ZodEmail", (e, t) => {
                t.pattern ?? (t.pattern = g), Te.init(e, t)
            }), $e = t("$ZodURL", (e, t) => {
                Te.init(e, t), e._zod.check = n => {
                    try {
                        const r = n.value.trim(),
                            a = new URL(r);
                        return t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(a.hostname) || n.issues.push({
                            code: "invalid_format",
                            format: "url",
                            note: "Invalid hostname",
                            pattern: k.source,
                            input: n.value,
                            inst: e,
                            continue: !t.abort
                        })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(a.protocol.endsWith(":") ? a.protocol.slice(0, -1) : a.protocol) || n.issues.push({
                            code: "invalid_format",
                            format: "url",
                            note: "Invalid protocol",
                            pattern: t.protocol.source,
                            input: n.value,
                            inst: e,
                            continue: !t.abort
                        })), void(t.normalize ? n.value = a.href : n.value = r)
                    } catch (r) {
                        n.issues.push({
                            code: "invalid_format",
                            format: "url",
                            input: n.value,
                            inst: e,
                            continue: !t.abort
                        })
                    }
                }
            }), Ie = t("$ZodEmoji", (e, t) => {
                t.pattern ?? (t.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Te.init(e, t)
            }), De = t("$ZodNanoID", (e, t) => {
                t.pattern ?? (t.pattern = f), Te.init(e, t)
            }), Fe = t("$ZodCUID", (e, t) => {
                t.pattern ?? (t.pattern = o), Te.init(e, t)
            }), Ue = t("$ZodCUID2", (e, t) => {
                t.pattern ?? (t.pattern = s), Te.init(e, t)
            }), Ve = t("$ZodULID", (e, t) => {
                t.pattern ?? (t.pattern = u), Te.init(e, t)
            }), Ze = t("$ZodXID", (e, t) => {
                t.pattern ?? (t.pattern = c), Te.init(e, t)
            }), Be = t("$ZodKSUID", (e, t) => {
                t.pattern ?? (t.pattern = d), Te.init(e, t)
            }), He = t("$ZodISODateTime", (e, t) => {
                t.pattern ?? (t.pattern = function(e) {
                    const t = C({
                            precision: e.precision
                        }),
                        n = ["Z"];
                    e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
                    const r = `${t}(?:${n.join("|")})`;
                    return new RegExp(`^${z}T(?:${r})$`)
                }(t)), Te.init(e, t)
            }), We = t("$ZodISODate", (e, t) => {
                t.pattern ?? (t.pattern = E), Te.init(e, t)
            }), qe = t("$ZodISOTime", (e, t) => {
                t.pattern ?? (t.pattern = new RegExp(`^${C(t)}$`)), Te.init(e, t)
            }), Ge = t("$ZodISODuration", (e, t) => {
                t.pattern ?? (t.pattern = p), Te.init(e, t)
            }), Ke = t("$ZodIPv4", (e, t) => {
                t.pattern ?? (t.pattern = v), Te.init(e, t), e._zod.onattach.push(e => {
                    e._zod.bag.format = "ipv4"
                })
            }), Qe = t("$ZodIPv6", (e, t) => {
                t.pattern ?? (t.pattern = y), Te.init(e, t), e._zod.onattach.push(e => {
                    e._zod.bag.format = "ipv6"
                }), e._zod.check = n => {
                    try {
                        new URL(`http://[${n.value}]`)
                    } catch {
                        n.issues.push({
                            code: "invalid_format",
                            format: "ipv6",
                            input: n.value,
                            inst: e,
                            continue: !t.abort
                        })
                    }
                }
            }), Ye = t("$ZodCIDRv4", (e, t) => {
                t.pattern ?? (t.pattern = b), Te.init(e, t)
            }), Je = t("$ZodCIDRv6", (e, t) => {
                t.pattern ?? (t.pattern = w), Te.init(e, t), e._zod.check = n => {
                    const [r, a] = n.value.split("/");
                    try {
                        if (!a) throw new Error;
                        const e = Number(a);
                        if (`${e}` !== a) throw new Error;
                        if (e < 0 || e > 128) throw new Error;
                        new URL(`http://[${r}]`)
                    } catch {
                        n.issues.push({
                            code: "invalid_format",
                            format: "cidrv6",
                            input: n.value,
                            inst: e,
                            continue: !t.abort
                        })
                    }
                }
            });

        function Xe(e) {
            if ("" === e) return !0;
            if (e.length % 4 != 0) return !1;
            try {
                return atob(e), !0
            } catch {
                return !1
            }
        }
        const et = t("$ZodBase64", (e, t) => {
                t.pattern ?? (t.pattern = _), Te.init(e, t), e._zod.onattach.push(e => {
                    e._zod.bag.contentEncoding = "base64"
                }), e._zod.check = n => {
                    Xe(n.value) || n.issues.push({
                        code: "invalid_format",
                        format: "base64",
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            tt = t("$ZodBase64URL", (e, t) => {
                t.pattern ?? (t.pattern = x), Te.init(e, t), e._zod.onattach.push(e => {
                    e._zod.bag.contentEncoding = "base64url"
                }), e._zod.check = n => {
                    (function(e) {
                        if (!x.test(e)) return !1;
                        const t = e.replace(/[-_]/g, e => "-" === e ? "+" : "/");
                        return Xe(t.padEnd(4 * Math.ceil(t.length / 4), "="))
                    })(n.value) || n.issues.push({
                        code: "invalid_format",
                        format: "base64url",
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            nt = t("$ZodE164", (e, t) => {
                t.pattern ?? (t.pattern = S), Te.init(e, t)
            }),
            rt = t("$ZodJWT", (e, t) => {
                Te.init(e, t), e._zod.check = n => {
                    (function(e, t = null) {
                        try {
                            const n = e.split(".");
                            if (3 !== n.length) return !1;
                            const [r] = n;
                            if (!r) return !1;
                            const a = JSON.parse(atob(r));
                            return !("typ" in a && "JWT" !== a?.typ || !a.alg || t && (!("alg" in a) || a.alg !== t))
                        } catch {
                            return !1
                        }
                    })(n.value, t.alg) || n.issues.push({
                        code: "invalid_format",
                        format: "jwt",
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            at = t("$ZodNumber", (e, t) => {
                je.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? P, e._zod.parse = (n, r) => {
                    if (t.coerce) try {
                        n.value = Number(n.value)
                    } catch (e) {}
                    const a = n.value;
                    if ("number" == typeof a && !Number.isNaN(a) && Number.isFinite(a)) return n;
                    const o = "number" == typeof a ? Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : "Infinity" : void 0;
                    return n.issues.push({
                        expected: "number",
                        code: "invalid_type",
                        input: a,
                        inst: e,
                        ...o ? {
                            received: o
                        } : {}
                    }), n
                }
            }),
            ot = t("$ZodNumber", (e, t) => {
                se.init(e, t), at.init(e, t)
            }),
            it = t("$ZodBoolean", (e, t) => {
                je.init(e, t), e._zod.pattern = O, e._zod.parse = (n, r) => {
                    if (t.coerce) try {
                        n.value = Boolean(n.value)
                    } catch (e) {}
                    const a = n.value;
                    return "boolean" == typeof a || n.issues.push({
                        expected: "boolean",
                        code: "invalid_type",
                        input: a,
                        inst: e
                    }), n
                }
            }),
            lt = t("$ZodUnknown", (e, t) => {
                je.init(e, t), e._zod.parse = e => e
            }),
            st = t("$ZodNever", (e, t) => {
                je.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
                    expected: "never",
                    code: "invalid_type",
                    input: t.value,
                    inst: e
                }), t)
            });

        function ut(e, t, n) {
            e.issues.length && t.issues.push(...J(n, e.issues)), t.value[n] = e.value
        }
        const ct = t("$ZodArray", (e, t) => {
            je.init(e, t), e._zod.parse = (n, r) => {
                const a = n.value;
                if (!Array.isArray(a)) return n.issues.push({
                    expected: "array",
                    code: "invalid_type",
                    input: a,
                    inst: e
                }), n;
                n.value = Array(a.length);
                const o = [];
                for (let e = 0; e < a.length; e++) {
                    const i = a[e],
                        l = t.element._zod.run({
                            value: i,
                            issues: []
                        }, r);
                    l instanceof Promise ? o.push(l.then(t => ut(t, n, e))) : ut(l, n, e)
                }
                return o.length ? Promise.all(o).then(() => n) : n
            }
        });

        function dt(e, t, n, r) {
            e.issues.length && t.issues.push(...J(n, e.issues)), void 0 === e.value ? n in r && (t.value[n] = void 0) : t.value[n] = e.value
        }
        const ft = t("$ZodObject", (e, t) => {
            je.init(e, t);
            const n = R(() => {
                const e = Object.keys(t.shape);
                for (const n of e)
                    if (!(t.shape[n] instanceof je)) throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
                const n = (r = t.shape, Object.keys(r).filter(e => "optional" === r[e]._zod.optin && "optional" === r[e]._zod.optout));
                var r;
                return {
                    shape: t.shape,
                    keys: e,
                    keySet: new Set(e),
                    numKeys: e.length,
                    optionalKeys: new Set(n)
                }
            });
            let a;
            I(e._zod, "propValues", () => {
                const e = t.shape,
                    n = {};
                for (const t in e) {
                    const r = e[t]._zod;
                    if (r.values) {
                        n[t] ?? (n[t] = new Set);
                        for (const e of r.values) n[t].add(e)
                    }
                }
                return n
            });
            const o = Z,
                i = !r.jitless,
                l = i && B.value,
                s = t.catchall;
            let u;
            e._zod.parse = (r, c) => {
                u ?? (u = n.value);
                const d = r.value;
                if (!o(d)) return r.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: d,
                    inst: e
                }), r;
                const f = [];
                if (i && l && !1 === c?.async && !0 !== c.jitless) a || (a = (e => {
                    const t = new we(["shape", "payload", "ctx"]),
                        r = n.value,
                        a = e => {
                            const t = U(e);
                            return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`
                        };
                    t.write("const input = payload.value;");
                    const o = Object.create(null);
                    let i = 0;
                    for (const e of r.keys) o[e] = "key_" + i++;
                    t.write("const newResult = {}");
                    for (const e of r.keys) {
                        const n = o[e],
                            r = U(e);
                        t.write(`const ${n} = ${a(e)};`), t.write(`\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n      `)
                    }
                    t.write("payload.value = newResult;"), t.write("return payload;");
                    const l = t.compile();
                    return (t, n) => l(e, t, n)
                })(t.shape)), r = a(r, c);
                else {
                    r.value = {};
                    const e = u.shape;
                    for (const t of u.keys) {
                        const n = e[t]._zod.run({
                            value: d[t],
                            issues: []
                        }, c);
                        n instanceof Promise ? f.push(n.then(e => dt(e, r, t, d))) : dt(n, r, t, d)
                    }
                }
                if (!s) return f.length ? Promise.all(f).then(() => r) : r;
                const p = [],
                    h = u.keySet,
                    m = s._zod,
                    g = m.def.type;
                for (const e of Object.keys(d)) {
                    if (h.has(e)) continue;
                    if ("never" === g) {
                        p.push(e);
                        continue
                    }
                    const t = m.run({
                        value: d[e],
                        issues: []
                    }, c);
                    t instanceof Promise ? f.push(t.then(t => dt(t, r, e, d))) : dt(t, r, e, d)
                }
                return p.length && r.issues.push({
                    code: "unrecognized_keys",
                    keys: p,
                    input: d,
                    inst: e
                }), f.length ? Promise.all(f).then(() => r) : r
            }
        });

        function pt(e, t, n, r) {
            for (const n of e)
                if (0 === n.issues.length) return t.value = n.value, t;
            const o = e.filter(e => !Y(e));
            return 1 === o.length ? (t.value = o[0].value, o[0]) : (t.issues.push({
                code: "invalid_union",
                input: t.value,
                inst: n,
                errors: e.map(e => e.issues.map(e => ee(e, r, a())))
            }), t)
        }
        const ht = t("$ZodUnion", (e, t) => {
                je.init(e, t), I(e._zod, "optin", () => t.options.some(e => "optional" === e._zod.optin) ? "optional" : void 0), I(e._zod, "optout", () => t.options.some(e => "optional" === e._zod.optout) ? "optional" : void 0), I(e._zod, "values", () => {
                    if (t.options.every(e => e._zod.values)) return new Set(t.options.flatMap(e => Array.from(e._zod.values)))
                }), I(e._zod, "pattern", () => {
                    if (t.options.every(e => e._zod.pattern)) {
                        const e = t.options.map(e => e._zod.pattern);
                        return new RegExp(`^(${e.map(e=>A(e.source)).join("|")})$`)
                    }
                });
                const n = 1 === t.options.length,
                    r = t.options[0]._zod.run;
                e._zod.parse = (a, o) => {
                    if (n) return r(a, o);
                    let i = !1;
                    const l = [];
                    for (const e of t.options) {
                        const t = e._zod.run({
                            value: a.value,
                            issues: []
                        }, o);
                        if (t instanceof Promise) l.push(t), i = !0;
                        else {
                            if (0 === t.issues.length) return t;
                            l.push(t)
                        }
                    }
                    return i ? Promise.all(l).then(t => pt(t, a, e, o)) : pt(l, a, e, o)
                }
            }),
            mt = t("$ZodDiscriminatedUnion", (e, t) => {
                ht.init(e, t);
                const n = e._zod.parse;
                I(e._zod, "propValues", () => {
                    const e = {};
                    for (const n of t.options) {
                        const r = n._zod.propValues;
                        if (!r || 0 === Object.keys(r).length) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
                        for (const [t, n] of Object.entries(r)) {
                            e[t] || (e[t] = new Set);
                            for (const r of n) e[t].add(r)
                        }
                    }
                    return e
                });
                const r = R(() => {
                    const e = t.options,
                        n = new Map;
                    for (const r of e) {
                        const e = r._zod.propValues?.[t.discriminator];
                        if (!e || 0 === e.size) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
                        for (const t of e) {
                            if (n.has(t)) throw new Error(`Duplicate discriminator value "${String(t)}"`);
                            n.set(t, r)
                        }
                    }
                    return n
                });
                e._zod.parse = (a, o) => {
                    const i = a.value;
                    if (!Z(i)) return a.issues.push({
                        code: "invalid_type",
                        expected: "object",
                        input: i,
                        inst: e
                    }), a;
                    const l = r.value.get(i?.[t.discriminator]);
                    return l ? l._zod.run(a, o) : t.unionFallback ? n(a, o) : (a.issues.push({
                        code: "invalid_union",
                        errors: [],
                        note: "No matching discriminator",
                        discriminator: t.discriminator,
                        input: i,
                        path: [t.discriminator],
                        inst: e
                    }), a)
                }
            }),
            gt = t("$ZodIntersection", (e, t) => {
                je.init(e, t), e._zod.parse = (e, n) => {
                    const r = e.value,
                        a = t.left._zod.run({
                            value: r,
                            issues: []
                        }, n),
                        o = t.right._zod.run({
                            value: r,
                            issues: []
                        }, n);
                    return a instanceof Promise || o instanceof Promise ? Promise.all([a, o]).then(([t, n]) => yt(e, t, n)) : yt(e, a, o)
                }
            });

        function vt(e, t) {
            if (e === t) return {
                valid: !0,
                data: e
            };
            if (e instanceof Date && t instanceof Date && +e === +t) return {
                valid: !0,
                data: e
            };
            if (H(e) && H(t)) {
                const n = Object.keys(t),
                    r = Object.keys(e).filter(e => -1 !== n.indexOf(e)),
                    a = {
                        ...e,
                        ...t
                    };
                for (const n of r) {
                    const r = vt(e[n], t[n]);
                    if (!r.valid) return {
                        valid: !1,
                        mergeErrorPath: [n, ...r.mergeErrorPath]
                    };
                    a[n] = r.data
                }
                return {
                    valid: !0,
                    data: a
                }
            }
            if (Array.isArray(e) && Array.isArray(t)) {
                if (e.length !== t.length) return {
                    valid: !1,
                    mergeErrorPath: []
                };
                const n = [];
                for (let r = 0; r < e.length; r++) {
                    const a = vt(e[r], t[r]);
                    if (!a.valid) return {
                        valid: !1,
                        mergeErrorPath: [r, ...a.mergeErrorPath]
                    };
                    n.push(a.data)
                }
                return {
                    valid: !0,
                    data: n
                }
            }
            return {
                valid: !1,
                mergeErrorPath: []
            }
        }

        function yt(e, t, n) {
            if (t.issues.length && e.issues.push(...t.issues), n.issues.length && e.issues.push(...n.issues), Y(e)) return e;
            const r = vt(t.value, n.value);
            if (!r.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
            return e.value = r.data, e
        }
        const bt = t("$ZodEnum", (e, t) => {
                je.init(e, t);
                const n = function(e) {
                        const t = Object.values(e).filter(e => "number" == typeof e);
                        return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t)
                    }(t.entries),
                    r = new Set(n);
                e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter(e=>W.has(typeof e)).map(e=>"string"==typeof e?q(e):e.toString()).join("|")})$`), e._zod.parse = (t, a) => {
                    const o = t.value;
                    return r.has(o) || t.issues.push({
                        code: "invalid_value",
                        values: n,
                        input: o,
                        inst: e
                    }), t
                }
            }),
            wt = t("$ZodLiteral", (e, t) => {
                if (je.init(e, t), 0 === t.values.length) throw new Error("Cannot create literal schema with no valid values");
                e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map(e=>"string"==typeof e?q(e):e?q(e.toString()):String(e)).join("|")})$`), e._zod.parse = (n, r) => {
                    const a = n.value;
                    return e._zod.values.has(a) || n.issues.push({
                        code: "invalid_value",
                        values: t.values,
                        input: a,
                        inst: e
                    }), n
                }
            }),
            _t = t("$ZodTransform", (e, t) => {
                je.init(e, t), e._zod.parse = (e, r) => {
                    const a = t.transform(e.value, e);
                    if (r.async) return (a instanceof Promise ? a : Promise.resolve(a)).then(t => (e.value = t, e));
                    if (a instanceof Promise) throw new n;
                    return e.value = a, e
                }
            });

        function xt(e, t) {
            return e.issues.length && void 0 === t ? {
                issues: [],
                value: void 0
            } : e
        }
        const kt = t("$ZodOptional", (e, t) => {
                je.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", I(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), I(e._zod, "pattern", () => {
                    const e = t.innerType._zod.pattern;
                    return e ? new RegExp(`^(${A(e.source)})?$`) : void 0
                }), e._zod.parse = (e, n) => {
                    if ("optional" === t.innerType._zod.optin) {
                        const r = t.innerType._zod.run(e, n);
                        return r instanceof Promise ? r.then(t => xt(t, e.value)) : xt(r, e.value)
                    }
                    return void 0 === e.value ? e : t.innerType._zod.run(e, n)
                }
            }),
            St = t("$ZodNullable", (e, t) => {
                je.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "pattern", () => {
                    const e = t.innerType._zod.pattern;
                    return e ? new RegExp(`^(${A(e.source)}|null)$`) : void 0
                }), I(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n)
            }),
            zt = t("$ZodDefault", (e, t) => {
                je.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
                    if (void 0 === e.value) return e.value = t.defaultValue, e;
                    const r = t.innerType._zod.run(e, n);
                    return r instanceof Promise ? r.then(e => Et(e, t)) : Et(r, t)
                }
            });

        function Et(e, t) {
            return void 0 === e.value && (e.value = t.defaultValue), e
        }
        const Ct = t("$ZodPrefault", (e, t) => {
                je.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n))
            }),
            Nt = t("$ZodNonOptional", (e, t) => {
                je.init(e, t), I(e._zod, "values", () => {
                    const e = t.innerType._zod.values;
                    return e ? new Set([...e].filter(e => void 0 !== e)) : void 0
                }), e._zod.parse = (n, r) => {
                    const a = t.innerType._zod.run(n, r);
                    return a instanceof Promise ? a.then(t => Pt(t, e)) : Pt(a, e)
                }
            });

        function Pt(e, t) {
            return e.issues.length || void 0 !== e.value || e.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: e.value,
                inst: t
            }), e
        }
        const Ot = t("$ZodCatch", (e, t) => {
                je.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
                    const r = t.innerType._zod.run(e, n);
                    return r instanceof Promise ? r.then(r => (e.value = r.value, r.issues.length && (e.value = t.catchValue({
                        ...e,
                        error: {
                            issues: r.issues.map(e => ee(e, n, a()))
                        },
                        input: e.value
                    }), e.issues = []), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
                        ...e,
                        error: {
                            issues: r.issues.map(e => ee(e, n, a()))
                        },
                        input: e.value
                    }), e.issues = []), e)
                }
            }),
            jt = t("$ZodPipe", (e, t) => {
                je.init(e, t), I(e._zod, "values", () => t.in._zod.values), I(e._zod, "optin", () => t.in._zod.optin), I(e._zod, "optout", () => t.out._zod.optout), I(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
                    const r = t.in._zod.run(e, n);
                    return r instanceof Promise ? r.then(e => Lt(e, t, n)) : Lt(r, t, n)
                }
            });

        function Lt(e, t, n) {
            return e.issues.length ? e : t.out._zod.run({
                value: e.value,
                issues: e.issues
            }, n)
        }
        const Tt = t("$ZodReadonly", (e, t) => {
            je.init(e, t), I(e._zod, "propValues", () => t.innerType._zod.propValues), I(e._zod, "values", () => t.innerType._zod.values), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (e, n) => {
                const r = t.innerType._zod.run(e, n);
                return r instanceof Promise ? r.then(Rt) : Rt(r)
            }
        });

        function Rt(e) {
            return e.value = Object.freeze(e.value), e
        }
        const Mt = t("$ZodCustom", (e, t) => {
            re.init(e, t), je.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = n => {
                const r = n.value,
                    a = t.fn(r);
                if (a instanceof Promise) return a.then(t => At(t, n, r, e));
                At(a, n, r, e)
            }
        });

        function At(e, t, n, r) {
            if (!e) {
                const e = {
                    code: "custom",
                    input: n,
                    inst: r,
                    path: [...r._zod.def.path ?? []],
                    continue: !r._zod.def.abort
                };
                r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(ne(e))
            }
        }
        Symbol("ZodOutput"), Symbol("ZodInput");
        class $t {
            constructor() {
                this._map = new Map, this._idmap = new Map
            }
            add(e, ...t) {
                const n = t[0];
                if (this._map.set(e, n), n && "object" == typeof n && "id" in n) {
                    if (this._idmap.has(n.id)) throw new Error(`ID ${n.id} already exists in the registry`);
                    this._idmap.set(n.id, e)
                }
                return this
            }
            clear() {
                return this._map = new Map, this._idmap = new Map, this
            }
            remove(e) {
                const t = this._map.get(e);
                return t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this
            }
            get(e) {
                const t = e._zod.parent;
                if (t) {
                    const n = {
                        ...this.get(t) ?? {}
                    };
                    delete n.id;
                    const r = {
                        ...n,
                        ...this._map.get(e)
                    };
                    return Object.keys(r).length ? r : void 0
                }
                return this._map.get(e)
            }
            has(e) {
                return this._map.has(e)
            }
        }

        function It() {
            return new $t
        }
        const Dt = It();

        function Ft(e, t) {
            return new e({
                type: "string",
                format: "guid",
                check: "string_format",
                abort: !1,
                ...K(t)
            })
        }

        function Ut(e, t) {
            return new oe({
                check: "less_than",
                ...K(t),
                value: e,
                inclusive: !1
            })
        }

        function Vt(e, t) {
            return new oe({
                check: "less_than",
                ...K(t),
                value: e,
                inclusive: !0
            })
        }

        function Zt(e, t) {
            return new ie({
                check: "greater_than",
                ...K(t),
                value: e,
                inclusive: !1
            })
        }

        function Bt(e, t) {
            return new ie({
                check: "greater_than",
                ...K(t),
                value: e,
                inclusive: !0
            })
        }

        function Ht(e, t) {
            return new le({
                check: "multiple_of",
                ...K(t),
                value: e
            })
        }

        function Wt(e, t) {
            return new ue({
                check: "max_length",
                ...K(t),
                maximum: e
            })
        }

        function qt(e, t) {
            return new ce({
                check: "min_length",
                ...K(t),
                minimum: e
            })
        }

        function Gt(e, t) {
            return new de({
                check: "length_equals",
                ...K(t),
                length: e
            })
        }

        function Kt(e) {
            return new be({
                check: "overwrite",
                tx: e
            })
        }
        const Qt = t("ZodISODateTime", (e, t) => {
            He.init(e, t), dn.init(e, t)
        });
        const Yt = t("ZodISODate", (e, t) => {
            We.init(e, t), dn.init(e, t)
        });
        const Jt = t("ZodISOTime", (e, t) => {
            qe.init(e, t), dn.init(e, t)
        });
        const Xt = t("ZodISODuration", (e, t) => {
            Ge.init(e, t), dn.init(e, t)
        });
        const en = (e, t) => {
                xe.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
                    format: {
                        value: t => function(e, t) {
                            const n = t || function(e) {
                                    return e.message
                                },
                                r = {
                                    _errors: []
                                },
                                a = e => {
                                    for (const t of e.issues)
                                        if ("invalid_union" === t.code && t.errors.length) t.errors.map(e => a({
                                            issues: e
                                        }));
                                        else if ("invalid_key" === t.code) a({
                                        issues: t.issues
                                    });
                                    else if ("invalid_element" === t.code) a({
                                        issues: t.issues
                                    });
                                    else if (0 === t.path.length) r._errors.push(n(t));
                                    else {
                                        let e = r,
                                            a = 0;
                                        for (; a < t.path.length;) {
                                            const r = t.path[a];
                                            a === t.path.length - 1 ? (e[r] = e[r] || {
                                                _errors: []
                                            }, e[r]._errors.push(n(t))) : e[r] = e[r] || {
                                                _errors: []
                                            }, e = e[r], a++
                                        }
                                    }
                                };
                            return a(e), r
                        }(e, t)
                    },
                    flatten: {
                        value: t => function(e, t = e => e.message) {
                            const n = {},
                                r = [];
                            for (const a of e.issues) a.path.length > 0 ? (n[a.path[0]] = n[a.path[0]] || [], n[a.path[0]].push(t(a))) : r.push(t(a));
                            return {
                                formErrors: r,
                                fieldErrors: n
                            }
                        }(e, t)
                    },
                    addIssue: {
                        value: t => {
                            e.issues.push(t), e.message = JSON.stringify(e.issues, T, 2)
                        }
                    },
                    addIssues: {
                        value: t => {
                            e.issues.push(...t), e.message = JSON.stringify(e.issues, T, 2)
                        }
                    },
                    isEmpty: {
                        get: () => 0 === e.issues.length
                    }
                })
            },
            tn = (t("ZodError", en), t("ZodError", en, {
                Parent: Error
            })),
            nn = Se(tn),
            rn = ze(tn),
            an = Ee(tn),
            on = Ne(tn),
            ln = t("ZodType", (e, t) => (je.init(e, t), e.def = t, Object.defineProperty(e, "_def", {
                value: t
            }), e.check = (...n) => e.clone({
                ...t,
                checks: [...t.checks ?? [], ...n.map(e => "function" == typeof e ? {
                    _zod: {
                        check: e,
                        def: {
                            check: "custom"
                        },
                        onattach: []
                    }
                } : e)]
            }), e.clone = (t, n) => G(e, t, n), e.brand = () => e, e.register = (t, n) => (t.add(e, n), e), e.parse = (t, n) => nn(e, t, n, {
                callee: e.parse
            }), e.safeParse = (t, n) => an(e, t, n), e.parseAsync = async (t, n) => rn(e, t, n, {
                callee: e.parseAsync
            }), e.safeParseAsync = async (t, n) => on(e, t, n), e.spa = e.safeParseAsync, e.refine = (t, n) => e.check(function(e, t = {}) {
                return function(e, t, n) {
                    return new e({
                        type: "custom",
                        check: "custom",
                        fn: t,
                        ...K(n)
                    })
                }(sr, e, t)
            }(t, n)), e.superRefine = t => e.check(function(e) {
                const t = function(e) {
                    const t = new re({
                        check: "custom",
                        ...K(void 0)
                    });
                    return t._zod.check = e, t
                }(n => (n.addIssue = e => {
                    if ("string" == typeof e) n.issues.push(ne(e, n.value, t._zod.def));
                    else {
                        const r = e;
                        r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = n.value), r.inst ?? (r.inst = t), r.continue ?? (r.continue = !t._zod.def.abort), n.issues.push(ne(r))
                    }
                }, e(n.value, n)));
                return t
            }(t)), e.overwrite = t => e.check(Kt(t)), e.optional = () => Jn(e), e.nullable = () => er(e), e.nullish = () => Jn(er(e)), e.nonoptional = t => function(e, t) {
                return new rr({
                    type: "nonoptional",
                    innerType: e,
                    ...K(t)
                })
            }(e, t), e.array = () => Un(e), e.or = t => function(e, t) {
                return new Zn({
                    type: "union",
                    options: e,
                    ...K(t)
                })
            }([e, t]), e.and = t => new Hn({
                type: "intersection",
                left: e,
                right: t
            }), e.transform = t => ir(e, new Qn({
                type: "transform",
                transform: t
            })), e.default = t => {
                return n = t, new tr({
                    type: "default",
                    innerType: e,
                    get defaultValue() {
                        return "function" == typeof n ? n() : n
                    }
                });
                var n
            }, e.prefault = t => {
                return n = t, new nr({
                    type: "prefault",
                    innerType: e,
                    get defaultValue() {
                        return "function" == typeof n ? n() : n
                    }
                });
                var n
            }, e.catch = t => {
                return new ar({
                    type: "catch",
                    innerType: e,
                    catchValue: "function" == typeof(n = t) ? n : () => n
                });
                var n
            }, e.pipe = t => ir(e, t), e.readonly = () => new lr({
                type: "readonly",
                innerType: e
            }), e.describe = t => {
                const n = e.clone();
                return Dt.add(n, {
                    description: t
                }), n
            }, Object.defineProperty(e, "description", {
                get: () => Dt.get(e)?.description,
                configurable: !0
            }), e.meta = (...t) => {
                if (0 === t.length) return Dt.get(e);
                const n = e.clone();
                return Dt.add(n, t[0]), n
            }, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)),
            sn = t("_ZodString", (e, t) => {
                Le.init(e, t), ln.init(e, t);
                const n = e._zod.bag;
                e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...t) => e.check(function(e, t) {
                    return new pe({
                        check: "string_format",
                        format: "regex",
                        ...K(t),
                        pattern: e
                    })
                }(...t)), e.includes = (...t) => e.check(function(e, t) {
                    return new ge({
                        check: "string_format",
                        format: "includes",
                        ...K(t),
                        includes: e
                    })
                }(...t)), e.startsWith = (...t) => e.check(function(e, t) {
                    return new ve({
                        check: "string_format",
                        format: "starts_with",
                        ...K(t),
                        prefix: e
                    })
                }(...t)), e.endsWith = (...t) => e.check(function(e, t) {
                    return new ye({
                        check: "string_format",
                        format: "ends_with",
                        ...K(t),
                        suffix: e
                    })
                }(...t)), e.min = (...t) => e.check(qt(...t)), e.max = (...t) => e.check(Wt(...t)), e.length = (...t) => e.check(Gt(...t)), e.nonempty = (...t) => e.check(qt(1, ...t)), e.lowercase = t => e.check(function(e) {
                    return new he({
                        check: "string_format",
                        format: "lowercase",
                        ...K(e)
                    })
                }(t)), e.uppercase = t => e.check(function(e) {
                    return new me({
                        check: "string_format",
                        format: "uppercase",
                        ...K(e)
                    })
                }(t)), e.trim = () => e.check(Kt(e => e.trim())), e.normalize = (...t) => e.check(function(e) {
                    return Kt(t => t.normalize(e))
                }(...t)), e.toLowerCase = () => e.check(Kt(e => e.toLowerCase())), e.toUpperCase = () => e.check(Kt(e => e.toUpperCase()))
            }),
            un = t("ZodString", (e, t) => {
                Le.init(e, t), sn.init(e, t), e.email = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "email",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(fn, t)), e.url = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "url",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(mn, t)), e.jwt = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "jwt",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(On, t)), e.emoji = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "emoji",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(gn, t)), e.guid = t => e.check(Ft(pn, t)), e.uuid = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(hn, t)), e.uuidv4 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        version: "v4",
                        ...K(t)
                    })
                }(hn, t)), e.uuidv6 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        version: "v6",
                        ...K(t)
                    })
                }(hn, t)), e.uuidv7 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "uuid",
                        check: "string_format",
                        abort: !1,
                        version: "v7",
                        ...K(t)
                    })
                }(hn, t)), e.nanoid = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "nanoid",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(vn, t)), e.guid = t => e.check(Ft(pn, t)), e.cuid = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "cuid",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(yn, t)), e.cuid2 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "cuid2",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(bn, t)), e.ulid = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "ulid",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(wn, t)), e.base64 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "base64",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(Cn, t)), e.base64url = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "base64url",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(Nn, t)), e.xid = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "xid",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(_n, t)), e.ksuid = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "ksuid",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(xn, t)), e.ipv4 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "ipv4",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(kn, t)), e.ipv6 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "ipv6",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(Sn, t)), e.cidrv4 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "cidrv4",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(zn, t)), e.cidrv6 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "cidrv6",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(En, t)), e.e164 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "e164",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(Pn, t)), e.datetime = t => e.check(function(e) {
                    return function(e, t) {
                        return new e({
                            type: "string",
                            format: "datetime",
                            check: "string_format",
                            offset: !1,
                            local: !1,
                            precision: null,
                            ...K(t)
                        })
                    }(Qt, e)
                }(t)), e.date = t => e.check(function(e) {
                    return function(e, t) {
                        return new e({
                            type: "string",
                            format: "date",
                            check: "string_format",
                            ...K(t)
                        })
                    }(Yt, e)
                }(t)), e.time = t => e.check(function(e) {
                    return function(e, t) {
                        return new e({
                            type: "string",
                            format: "time",
                            check: "string_format",
                            precision: null,
                            ...K(t)
                        })
                    }(Jt, e)
                }(t)), e.duration = t => e.check(function(e) {
                    return function(e, t) {
                        return new e({
                            type: "string",
                            format: "duration",
                            check: "string_format",
                            ...K(t)
                        })
                    }(Xt, e)
                }(t))
            });

        function cn(e) {
            return function(e, t) {
                return new e({
                    type: "string",
                    ...K(t)
                })
            }(un, e)
        }
        const dn = t("ZodStringFormat", (e, t) => {
                Te.init(e, t), sn.init(e, t)
            }),
            fn = t("ZodEmail", (e, t) => {
                Ae.init(e, t), dn.init(e, t)
            }),
            pn = t("ZodGUID", (e, t) => {
                Re.init(e, t), dn.init(e, t)
            }),
            hn = t("ZodUUID", (e, t) => {
                Me.init(e, t), dn.init(e, t)
            }),
            mn = t("ZodURL", (e, t) => {
                $e.init(e, t), dn.init(e, t)
            }),
            gn = t("ZodEmoji", (e, t) => {
                Ie.init(e, t), dn.init(e, t)
            }),
            vn = t("ZodNanoID", (e, t) => {
                De.init(e, t), dn.init(e, t)
            }),
            yn = t("ZodCUID", (e, t) => {
                Fe.init(e, t), dn.init(e, t)
            }),
            bn = t("ZodCUID2", (e, t) => {
                Ue.init(e, t), dn.init(e, t)
            }),
            wn = t("ZodULID", (e, t) => {
                Ve.init(e, t), dn.init(e, t)
            }),
            _n = t("ZodXID", (e, t) => {
                Ze.init(e, t), dn.init(e, t)
            }),
            xn = t("ZodKSUID", (e, t) => {
                Be.init(e, t), dn.init(e, t)
            }),
            kn = t("ZodIPv4", (e, t) => {
                Ke.init(e, t), dn.init(e, t)
            }),
            Sn = t("ZodIPv6", (e, t) => {
                Qe.init(e, t), dn.init(e, t)
            }),
            zn = t("ZodCIDRv4", (e, t) => {
                Ye.init(e, t), dn.init(e, t)
            }),
            En = t("ZodCIDRv6", (e, t) => {
                Je.init(e, t), dn.init(e, t)
            }),
            Cn = t("ZodBase64", (e, t) => {
                et.init(e, t), dn.init(e, t)
            }),
            Nn = t("ZodBase64URL", (e, t) => {
                tt.init(e, t), dn.init(e, t)
            }),
            Pn = t("ZodE164", (e, t) => {
                nt.init(e, t), dn.init(e, t)
            }),
            On = t("ZodJWT", (e, t) => {
                rt.init(e, t), dn.init(e, t)
            }),
            jn = t("ZodNumber", (e, t) => {
                at.init(e, t), ln.init(e, t), e.gt = (t, n) => e.check(Zt(t, n)), e.gte = (t, n) => e.check(Bt(t, n)), e.min = (t, n) => e.check(Bt(t, n)), e.lt = (t, n) => e.check(Ut(t, n)), e.lte = (t, n) => e.check(Vt(t, n)), e.max = (t, n) => e.check(Vt(t, n)), e.int = t => e.check(Rn(t)), e.safe = t => e.check(Rn(t)), e.positive = t => e.check(Zt(0, t)), e.nonnegative = t => e.check(Bt(0, t)), e.negative = t => e.check(Ut(0, t)), e.nonpositive = t => e.check(Vt(0, t)), e.multipleOf = (t, n) => e.check(Ht(t, n)), e.step = (t, n) => e.check(Ht(t, n)), e.finite = () => e;
                const n = e._zod.bag;
                e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null
            });

        function Ln(e) {
            return function(e, t) {
                return new e({
                    type: "number",
                    checks: [],
                    ...K(t)
                })
            }(jn, e)
        }
        const Tn = t("ZodNumberFormat", (e, t) => {
            ot.init(e, t), jn.init(e, t)
        });

        function Rn(e) {
            return function(e, t) {
                return new e({
                    type: "number",
                    check: "number_format",
                    abort: !1,
                    format: "safeint",
                    ...K(t)
                })
            }(Tn, e)
        }
        const Mn = t("ZodBoolean", (e, t) => {
            it.init(e, t), ln.init(e, t)
        });

        function An(e) {
            return function(e, t) {
                return new e({
                    type: "boolean",
                    ...K(t)
                })
            }(Mn, e)
        }
        const $n = t("ZodUnknown", (e, t) => {
            lt.init(e, t), ln.init(e, t)
        });

        function In() {
            return new $n({
                type: "unknown"
            })
        }
        const Dn = t("ZodNever", (e, t) => {
            st.init(e, t), ln.init(e, t)
        });
        const Fn = t("ZodArray", (e, t) => {
            ct.init(e, t), ln.init(e, t), e.element = t.element, e.min = (t, n) => e.check(qt(t, n)), e.nonempty = t => e.check(qt(1, t)), e.max = (t, n) => e.check(Wt(t, n)), e.length = (t, n) => e.check(Gt(t, n)), e.unwrap = () => e.element
        });

        function Un(e, t) {
            return function(e, t, n) {
                return new e({
                    type: "array",
                    element: t,
                    ...K(n)
                })
            }(Fn, e, t)
        }
        const Vn = t("ZodObject", (e, t) => {
                ft.init(e, t), ln.init(e, t), I(e, "shape", () => t.shape), e.keyof = () => qn(Object.keys(e._zod.def.shape)), e.catchall = t => e.clone({
                    ...e._zod.def,
                    catchall: t
                }), e.passthrough = () => e.clone({
                    ...e._zod.def,
                    catchall: In()
                }), e.loose = () => e.clone({
                    ...e._zod.def,
                    catchall: In()
                }), e.strict = () => {
                    return e.clone({
                        ...e._zod.def,
                        catchall: function(e, t) {
                            return new e({
                                type: "never",
                                ...K(t)
                            })
                        }(Dn, t)
                    });
                    var t
                }, e.strip = () => e.clone({
                    ...e._zod.def,
                    catchall: void 0
                }), e.extend = t => function(e, t) {
                    if (!H(t)) throw new Error("Invalid input to extend: expected a plain object");
                    const n = F(e._zod.def, {
                        get shape() {
                            const n = {
                                ...e._zod.def.shape,
                                ...t
                            };
                            return D(this, "shape", n), n
                        },
                        checks: []
                    });
                    return G(e, n)
                }(e, t), e.merge = t => function(e, t) {
                    const n = F(e._zod.def, {
                        get shape() {
                            const n = {
                                ...e._zod.def.shape,
                                ...t._zod.def.shape
                            };
                            return D(this, "shape", n), n
                        },
                        get catchall() {
                            return t._zod.def.catchall
                        },
                        checks: []
                    });
                    return G(e, n)
                }(e, t), e.pick = t => function(e, t) {
                    const n = e._zod.def;
                    return G(e, F(e._zod.def, {
                        get shape() {
                            const e = {};
                            for (const r in t) {
                                if (!(r in n.shape)) throw new Error(`Unrecognized key: "${r}"`);
                                t[r] && (e[r] = n.shape[r])
                            }
                            return D(this, "shape", e), e
                        },
                        checks: []
                    }))
                }(e, t), e.omit = t => function(e, t) {
                    const n = e._zod.def,
                        r = F(e._zod.def, {
                            get shape() {
                                const r = {
                                    ...e._zod.def.shape
                                };
                                for (const e in t) {
                                    if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
                                    t[e] && delete r[e]
                                }
                                return D(this, "shape", r), r
                            },
                            checks: []
                        });
                    return G(e, r)
                }(e, t), e.partial = (...t) => function(e, t, n) {
                    const r = F(t._zod.def, {
                        get shape() {
                            const r = t._zod.def.shape,
                                a = {
                                    ...r
                                };
                            if (n)
                                for (const t in n) {
                                    if (!(t in r)) throw new Error(`Unrecognized key: "${t}"`);
                                    n[t] && (a[t] = e ? new e({
                                        type: "optional",
                                        innerType: r[t]
                                    }) : r[t])
                                } else
                                    for (const t in r) a[t] = e ? new e({
                                        type: "optional",
                                        innerType: r[t]
                                    }) : r[t];
                            return D(this, "shape", a), a
                        },
                        checks: []
                    });
                    return G(t, r)
                }(Yn, e, t[0]), e.required = (...t) => function(e, t, n) {
                    const r = F(t._zod.def, {
                        get shape() {
                            const r = t._zod.def.shape,
                                a = {
                                    ...r
                                };
                            if (n)
                                for (const t in n) {
                                    if (!(t in a)) throw new Error(`Unrecognized key: "${t}"`);
                                    n[t] && (a[t] = new e({
                                        type: "nonoptional",
                                        innerType: r[t]
                                    }))
                                } else
                                    for (const t in r) a[t] = new e({
                                        type: "nonoptional",
                                        innerType: r[t]
                                    });
                            return D(this, "shape", a), a
                        },
                        checks: []
                    });
                    return G(t, r)
                }(rr, e, t[0])
            }),
            Zn = t("ZodUnion", (e, t) => {
                ht.init(e, t), ln.init(e, t), e.options = t.options
            });
        const Bn = t("ZodDiscriminatedUnion", (e, t) => {
                Zn.init(e, t), mt.init(e, t)
            }),
            Hn = t("ZodIntersection", (e, t) => {
                gt.init(e, t), ln.init(e, t)
            }),
            Wn = t("ZodEnum", (e, t) => {
                bt.init(e, t), ln.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
                const n = new Set(Object.keys(t.entries));
                e.extract = (e, r) => {
                    const a = {};
                    for (const r of e) {
                        if (!n.has(r)) throw new Error(`Key ${r} not found in enum`);
                        a[r] = t.entries[r]
                    }
                    return new Wn({
                        ...t,
                        checks: [],
                        ...K(r),
                        entries: a
                    })
                }, e.exclude = (e, r) => {
                    const a = {
                        ...t.entries
                    };
                    for (const t of e) {
                        if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
                        delete a[t]
                    }
                    return new Wn({
                        ...t,
                        checks: [],
                        ...K(r),
                        entries: a
                    })
                }
            });

        function qn(e, t) {
            const n = Array.isArray(e) ? Object.fromEntries(e.map(e => [e, e])) : e;
            return new Wn({
                type: "enum",
                entries: n,
                ...K(t)
            })
        }
        const Gn = t("ZodLiteral", (e, t) => {
            wt.init(e, t), ln.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
                get() {
                    if (t.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
                    return t.values[0]
                }
            })
        });

        function Kn(e, t) {
            return new Gn({
                type: "literal",
                values: Array.isArray(e) ? e : [e],
                ...K(t)
            })
        }
        const Qn = t("ZodTransform", (e, t) => {
            _t.init(e, t), ln.init(e, t), e._zod.parse = (n, r) => {
                n.addIssue = r => {
                    if ("string" == typeof r) n.issues.push(ne(r, n.value, t));
                    else {
                        const t = r;
                        t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(ne(t))
                    }
                };
                const a = t.transform(n.value, n);
                return a instanceof Promise ? a.then(e => (n.value = e, n)) : (n.value = a, n)
            }
        });
        const Yn = t("ZodOptional", (e, t) => {
            kt.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
        });

        function Jn(e) {
            return new Yn({
                type: "optional",
                innerType: e
            })
        }
        const Xn = t("ZodNullable", (e, t) => {
            St.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
        });

        function er(e) {
            return new Xn({
                type: "nullable",
                innerType: e
            })
        }
        const tr = t("ZodDefault", (e, t) => {
                zt.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap
            }),
            nr = t("ZodPrefault", (e, t) => {
                Ct.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
            }),
            rr = t("ZodNonOptional", (e, t) => {
                Nt.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
            }),
            ar = t("ZodCatch", (e, t) => {
                Ot.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap
            }),
            or = t("ZodPipe", (e, t) => {
                jt.init(e, t), ln.init(e, t), e.in = t.in, e.out = t.out
            });

        function ir(e, t) {
            return new or({
                type: "pipe",
                in: e,
                out: t
            })
        }
        const lr = t("ZodReadonly", (e, t) => {
                Tt.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
            }),
            sr = t("ZodCustom", (e, t) => {
                Mt.init(e, t), ln.init(e, t)
            });
        var ur = i(9710);
        const cr = e => {
                const t = (e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()))(e);
                return t.charAt(0).toUpperCase() + t.slice(1)
            },
            dr = (...e) => e.filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t).join(" ").trim(),
            fr = e => {
                for (const t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
            };
        var pr = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        const hr = (0, ur.forwardRef)(({
                color: e = "currentColor",
                size: t = 24,
                strokeWidth: n = 2,
                absoluteStrokeWidth: r,
                className: a = "",
                children: o,
                iconNode: i,
                ...l
            }, s) => (0, ur.createElement)("svg", {
                ref: s,
                ...pr,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? 24 * Number(n) / Number(t) : n,
                className: dr("lucide", a),
                ...!o && !fr(l) && {
                    "aria-hidden": "true"
                },
                ...l
            }, [...i.map(([e, t]) => (0, ur.createElement)(e, t)), ...Array.isArray(o) ? o : [o]])),
            mr = (e, t) => {
                const n = (0, ur.forwardRef)(({
                    className: n,
                    ...r
                }, a) => {
                    return (0, ur.createElement)(hr, {
                        ref: a,
                        iconNode: t,
                        className: dr(`lucide-${o=cr(e),o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, n),
                        ...r
                    });
                    var o
                });
                return n.displayName = cr(e), n
            },
            gr = mr("sun", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4",
                    key: "4exip2"
                }],
                ["path", {
                    d: "M12 2v2",
                    key: "tus03m"
                }],
                ["path", {
                    d: "M12 20v2",
                    key: "1lh1kg"
                }],
                ["path", {
                    d: "m4.93 4.93 1.41 1.41",
                    key: "149t6j"
                }],
                ["path", {
                    d: "m17.66 17.66 1.41 1.41",
                    key: "ptbguv"
                }],
                ["path", {
                    d: "M2 12h2",
                    key: "1t8f8n"
                }],
                ["path", {
                    d: "M20 12h2",
                    key: "1q8mjw"
                }],
                ["path", {
                    d: "m6.34 17.66-1.41 1.41",
                    key: "1m8zz5"
                }],
                ["path", {
                    d: "m19.07 4.93-1.41 1.41",
                    key: "1shlcs"
                }]
            ]),
            vr = mr("moon", [
                ["path", {
                    d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
                    key: "kfwtm"
                }]
            ]);
        var yr = qn(["carousel_default", "grid_default", "badge_default", "list_default", "masonry_default", "slider_default"]),
            br = kr(qn(["firstAndLastInitials", "firstNamesOnly", "fullNames"]), {
                section: "style",
                label: "Name Display",
                enumLabels: {
                    firstAndLastInitials: "First and Last Initials",
                    firstNamesOnly: "First Name",
                    fullNames: "Full Name"
                }
            }),
            wr = kr(qn(["light", "dark"]), {
                section: "style",
                label: "Color Scheme",
                enumLabels: {
                    light: "Light",
                    dark: "Dark"
                },
                enumIcons: {
                    light: gr,
                    dark: vr
                }
            }),
            _r = kr(qn(["none", "relative", "absolute"]), {
                section: "style",
                label: "Date Display",
                enumLabels: {
                    none: "None",
                    relative: "Relative",
                    absolute: "Absolute"
                },
                description: "The date format to display in each review snippet. Absolute displays the full date, relative displays the date in a relative format (e.g. '2 days ago')."
            }),
            xr = function(e) {
                const t = {
                    type: "object",
                    get shape() {
                        return D(this, "shape", {
                            ...e
                        }), this.shape
                    },
                    ...K(void 0)
                };
                return new Vn(t)
            }({
                layout: yr,
                language: kr(qn(["en", "pt-BR", "fr", "es", "it", "de", "ru", "pl", "cs", "da"]).prefault("en"), {
                    section: "settings",
                    label: "Language",
                    enumLabels: {
                        en: "English",
                        "pt-BR": "Portuguese (Brazil)",
                        fr: "French (FranÃ§ais)",
                        es: "Spanish (EspaÃ±ol)",
                        it: "Italian (Italiano)",
                        de: "German (Deutsch)",
                        ru: "Russian (Ð ÑƒÑÑÐºÐ¸Ð¹)",
                        pl: "Polish (Polski)",
                        cs: "Czech (ÄŒeÅ¡tina)",
                        da: "Danish (dansk)"
                    },
                    description: "The language to display the reviews in."
                }),
                name: cn().nullish(),
                schema: An(),
                schema_type: cn().nullish(),
                schema_sub_type: cn().nullish(),
                schema_sub_sub_type: cn().nullish(),
                custom_css: cn().prefault(""),
                allowed_domains: kr(Un(cn()).max(5), {
                    section: "settings",
                    label: "Allowed Domains",
                    description: "Your widget will only be displayed on these domains. Leave empty to allow any domain.",
                    emptyLabel: "No domains added. Your widget can be displayed on any domain.",
                    addLabel: "Add Domain",
                    addPlaceholder: "example.com",
                    checkPlan: function(e) {
                        return e.widgets.features.canRestrictDomains
                    }
                })
            });

        function kr(e, t) {
            return e.meta({
                ui: t
            })
        }
        var Sr = xr.extend({
                layout: Kn("masonry_default"),
                color_scheme: wr,
                name_display: br,
                title: kr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: kr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                max_characters: kr(Rn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "255"
                }),
                date_display: _r,
                max_columns: kr(Ln().min(1).max(6), {
                    section: "style",
                    label: "Max. Columns",
                    description: "The maximum number of columns to display in the grid",
                    numberMin: 1,
                    numberMax: 6,
                    numberPlaceholder: "4"
                }),
                summary: kr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: kr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: An()
            }),
            zr = function(e) {
                return "masonry_default" === e.config.layout
            },
            Er = i(5338),
            Cr = i(6540);
        const Nr = mr("arrow-down-left", [
                ["path", {
                    d: "M17 7 7 17",
                    key: "15tmo1"
                }],
                ["path", {
                    d: "M17 17H7V7",
                    key: "1org7z"
                }]
            ]),
            Pr = mr("arrow-down-right", [
                ["path", {
                    d: "m7 7 10 10",
                    key: "1fmybs"
                }],
                ["path", {
                    d: "M17 7v10H7",
                    key: "6fjiku"
                }]
            ]);
        var Or = xr.extend({
                layout: Kn("badge_default"),
                color_scheme: wr,
                floating: kr(An(), {
                    section: "style",
                    label: "Floating Badge",
                    description: "Float to the corner of the screen and not be affected by scrolling"
                }),
                float_position: kr(qn(["left", "right"]), {
                    section: "style",
                    label: "Floating Position",
                    enumLabels: {
                        left: "Left",
                        right: "Right"
                    },
                    enumIcons: {
                        left: Nr,
                        right: Pr
                    },
                    getDisabled: function(e) {
                        return !1 === e.floating
                    }
                }),
                dismissable: kr(An(), {
                    section: "style",
                    label: "Dismissable",
                    description: "If dimissable, the floating badge can be closed by clicking an 'X' icon.",
                    getDisabled: function(e) {
                        return !1 === e.floating
                    }
                }),
                show_badge_label: kr(An(), {
                    section: "style",
                    label: "Show Badge Label",
                    description: 'Show or hide the "Google Rating" label'
                })
            }),
            jr = xr.extend({
                layout: Kn("carousel_default"),
                color_scheme: wr,
                name_display: br,
                title: kr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: kr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                carousel_autoplay: kr(An(), {
                    section: "settings",
                    label: "Carousel Autoplay",
                    description: "Automatically cycle through reviews in the carousel."
                }),
                carousel_speed: kr(Rn().min(1e3).max(1e4), {
                    section: "settings",
                    label: "Carousel Speed (ms)",
                    numberMin: 1e3,
                    numberMax: 1e3,
                    numberPlaceholder: "3000",
                    description: "The speed at which the carousel will autoplay in milliseconds"
                }),
                max_characters: kr(Rn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "255"
                }),
                date_display: _r,
                summary: kr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: kr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: kr(An(), {
                    section: "style",
                    label: "Show Profile Pictures",
                    description: "Show or hide profile pictures in reviews. If hiding profile pictures, a letter with colored background will be used instead."
                })
            }),
            Lr = xr.extend({
                layout: Kn("grid_default"),
                color_scheme: wr,
                name_display: br,
                title: kr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: kr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                max_characters: kr(Rn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "255"
                }),
                date_display: _r,
                summary: kr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: kr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: kr(An(), {
                    section: "style",
                    label: "Show Profile Pictures",
                    description: "Show or hide profile pictures in reviews. If hiding profile pictures, a letter with colored background will be used instead."
                })
            }),
            Tr = xr.extend({
                layout: Kn("list_default"),
                color_scheme: wr,
                name_display: br,
                title: kr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: kr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                max_characters: kr(Rn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "255"
                }),
                date_display: _r,
                page_size: kr(Ln().min(1).max(50), {
                    section: "style",
                    label: "Page Size",
                    description: "Number of reviews per page",
                    numberMin: 1,
                    numberMax: 50,
                    numberPlaceholder: "5"
                }),
                summary: kr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: kr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: kr(An(), {
                    section: "style",
                    label: "Show Profile Pictures",
                    description: "Show or hide profile pictures in reviews. If hiding profile pictures, a letter with colored background will be used instead."
                })
            }),
            Rr = xr.extend({
                layout: Kn("slider_default"),
                color_scheme: wr,
                name_display: br,
                title: kr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: kr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                slider_autoplay: kr(An(), {
                    section: "settings",
                    label: "Slider Autoplay",
                    description: "Automatically cycle through reviews in the slider."
                }),
                slider_speed: kr(Rn().min(1e3).max(1e4), {
                    section: "settings",
                    label: "Slider Speed (ms)",
                    numberMin: 1e3,
                    numberMax: 1e4,
                    numberPlaceholder: "8000",
                    description: "The speed at which the slider will autoplay in milliseconds"
                }),
                max_characters: kr(Rn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "500"
                }),
                date_display: _r,
                summary: kr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: kr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: kr(An(), {
                    section: "style",
                    label: "Show Profile Pictures",
                    description: "Show or hide profile pictures in reviews. If hiding profile pictures, a letter with colored background will be used instead."
                })
            }),
            Mr = (function(e, t) {
                new Bn({
                    type: "union",
                    options: t,
                    discriminator: "layout",
                    ...K(void 0)
                })
            }(0, [jr, Lr, Or, Tr, Sr, Rr]), {
                carousel_default: {
                    name: "Carousel",
                    bundle: function() {
                        return i.e(104).then(i.t.bind(i, 8104, 23))
                    },
                    configSchema: jr,
                    defaultConfig: {
                        layout: "carousel_default",
                        language: "en",
                        name: null,
                        color_scheme: "light",
                        name_display: "firstAndLastInitials",
                        title: "What our customers are saying",
                        show_title: !0,
                        carousel_autoplay: !0,
                        carousel_speed: 5e3,
                        max_characters: 255,
                        date_display: "relative",
                        schema: !0,
                        schema_type: null,
                        schema_sub_type: null,
                        schema_sub_sub_type: null,
                        summary: !0,
                        summary_review_button: !0,
                        show_profile_pictures: !0,
                        custom_css: "",
                        allowed_domains: []
                    },
                    isWidgetData: function(e) {
                        return "carousel_default" === e.config.layout
                    }
                },
                grid_default: {
                    name: "Grid",
                    bundle: function() {
                        return i.e(514).then(i.t.bind(i, 8514, 23))
                    },
                    configSchema: Lr,
                    defaultConfig: {
                        layout: "grid_default",
                        language: "en",
                        name: null,
                        color_scheme: "light",
                        name_display: "firstAndLastInitials",
                        title: "What our customers are saying",
                        show_title: !0,
                        max_characters: 255,
                        date_display: "relative",
                        schema: !0,
                        schema_type: null,
                        schema_sub_type: null,
                        schema_sub_sub_type: null,
                        summary: !0,
                        summary_review_button: !0,
                        show_profile_pictures: !0,
                        custom_css: "",
                        allowed_domains: []
                    },
                    isWidgetData: function(e) {
                        return "grid_default" === e.config.layout
                    }
                },
                badge_default: {
                    name: "Badge",
                    bundle: function() {
                        return i.e(991).then(i.t.bind(i, 5991, 23))
                    },
                    configSchema: Or,
                    defaultConfig: {
                        layout: "badge_default",
                        language: "en",
                        name: null,
                        color_scheme: "light",
                        floating: !1,
                        float_position: "left",
                        dismissable: !0,
                        show_badge_label: !0,
                        schema: !0,
                        schema_type: null,
                        schema_sub_type: null,
                        schema_sub_sub_type: null,
                        custom_css: "",
                        allowed_domains: []
                    },
                    isWidgetData: function(e) {
                        return "badge_default" === e.config.layout
                    }
                },
                list_default: {
                    name: "List",
                    bundle: function() {
                        return i.e(522).then(i.t.bind(i, 5522, 23))
                    },
                    configSchema: Tr,
                    defaultConfig: {
                        layout: "list_default",
                        language: "en",
                        name: null,
                        color_scheme: "light",
                        name_display: "firstAndLastInitials",
                        title: "What our customers are saying",
                        show_title: !0,
                        max_characters: 255,
                        date_display: "relative",
                        page_size: 5,
                        schema: !0,
                        schema_type: null,
                        schema_sub_type: null,
                        schema_sub_sub_type: null,
                        summary: !0,
                        summary_review_button: !0,
                        show_profile_pictures: !0,
                        custom_css: "",
                        allowed_domains: []
                    },
                    isWidgetData: function(e) {
                        return "list_default" === e.config.layout
                    }
                },
                masonry_default: {
                    name: "Masonry",
                    bundle: function() {
                        return i.e(175).then(i.t.bind(i, 4175, 23))
                    },
                    configSchema: Sr,
                    defaultConfig: {
                        layout: "masonry_default",
                        language: "en",
                        name: null,
                        color_scheme: "light",
                        name_display: "firstAndLastInitials",
                        title: "What our customers are saying",
                        show_title: !0,
                        max_characters: 255,
                        date_display: "relative",
                        max_columns: 4,
                        schema: !0,
                        schema_type: null,
                        schema_sub_type: null,
                        schema_sub_sub_type: null,
                        summary: !0,
                        summary_review_button: !0,
                        show_profile_pictures: !0,
                        custom_css: "",
                        allowed_domains: []
                    },
                    isWidgetData: zr
                },
                slider_default: {
                    name: "Slider",
                    bundle: function() {
                        return i.e(715).then(i.t.bind(i, 3715, 23))
                    },
                    configSchema: Rr,
                    defaultConfig: {
                        layout: "slider_default",
                        language: "en",
                        name: null,
                        color_scheme: "light",
                        name_display: "firstAndLastInitials",
                        title: "What our customers are saying",
                        show_title: !0,
                        slider_autoplay: !0,
                        slider_speed: 8e3,
                        max_characters: 500,
                        date_display: "relative",
                        schema: !0,
                        schema_type: null,
                        schema_sub_type: null,
                        schema_sub_sub_type: null,
                        summary: !0,
                        summary_review_button: !0,
                        show_profile_pictures: !0,
                        custom_css: "",
                        allowed_domains: []
                    },
                    isWidgetData: function(e) {
                        return "slider_default" === e.config.layout
                    }
                }
            }),
            Ar = function() {
                return Ar = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, Ar.apply(this, arguments)
            },
            $r = function(e, t, n, r) {
                return new(n || (n = Promise))(function(a, o) {
                    function i(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(i, l)
                    }
                    s((r = r.apply(e, t || [])).next())
                })
            },
            Ir = function(e, t) {
                var n, r, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(l) {
                    return function(s) {
                        return function(l) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i && (i = 0, l[0] && (o = 0)), o;) try {
                                if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, r = l[1], l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < a[1]) {
                                            o.label = a[1], a = l;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2], o.ops.push(l);
                                            break
                                        }
                                        a[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                l = t.call(e, o)
                            } catch (e) {
                                l = [6, e], r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, s])
                    }
                }
            },
            Dr = function() {
                function e(e, t) {
                    this.isLoading = !0, this.isError = !1, this.renderWidget = e, this.layout = t
                }
                return e.prototype.reconcileWidgetConfig = function(e) {
                    if (!e || "object" != typeof e || !("layout" in e)) throw new Error("Invalid widget config schema");
                    var t = e.layout;
                    if (!t || "string" != typeof t) throw new Error("Invalid widget config layout, not a string or undefined");
                    var n = yr.safeParse(t);
                    if (!n.success) throw new Error("Invalid widget config layout");
                    var r = Mr[n.data],
                        a = r.configSchema,
                        o = r.defaultConfig,
                        i = a.partial().strip().safeParse(e);
                    return i.success ? Ar(Ar({}, o), i.data) : o
                }, e.prototype.getWidgetData = function(e) {
                    return $r(this, void 0, void 0, function() {
                        var t, n, r, a;
                        return Ir(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    t = "https://featurable.com/api", o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, 5, 6]), [4, fetch("".concat(t, "/v2/widgets/").concat(e), {
                                        method: "GET"
                                    })];
                                case 2:
                                    return [4, o.sent().json()];
                                case 3:
                                    if (!(n = o.sent()).success) throw new Error(n.error.message);
                                    return r = this.reconcileWidgetConfig(n.widget.config), [2, Ar(Ar({}, n.widget), {
                                        config: r
                                    })];
                                case 4:
                                    return a = o.sent(), console.log("Failed to fetch or reconcile widget", a), this.isError = !0, [3, 6];
                                case 5:
                                    return this.isLoading = !1, [7];
                                case 6:
                                    return [2, null]
                            }
                        })
                    })
                }, e.prototype.initializeFeaturableWidget = function(e) {
                    return $r(this, void 0, void 0, function() {
                        var t, n, r, a, o, i, l, s, u, c, d, f, p, h, m = this;
                        return Ir(this, function(g) {
                            switch (g.label) {
                                case 0:
                                    if (t = null, e instanceof Element) {
                                        if (!(t = e).id) throw new Error("Could not find review widget ID. Please ensure that the widget is properly installed.");
                                        n = t.id.replace("featurable-", "")
                                    } else if (Cr.isValidElement(e)) r = e.props, n = (null === (p = r.id) || void 0 === p ? void 0 : p.replace("featurable-", "")) || r["data-widget-id"], (t = document.createElement("div")).id = "featurable-".concat(n);
                                    else {
                                        if ("string" != typeof e) throw new Error("Invalid root element. Please provide a DOM Element, React element, or valid element ID.");
                                        if (!(t = document.getElementById(e)))
                                            for (a = document.getElementsByTagName("iframe"), o = 0; o < a.length; o++) try {
                                                if ((i = a[o].contentDocument || (null === (h = a[o].contentWindow) || void 0 === h ? void 0 : h.document)) && (t = i.getElementById(e))) break
                                            } catch (e) {
                                                console.log("Error accessing iframe:", e)
                                            }
                                        if (!t) throw new Error("Could not find element with ID: ".concat(e));
                                        n = e.replace("featurable-", "")
                                    }
                                    if (!n) throw new Error("Could not find review widget ID. Please ensure that the widget is properly installed.");
                                    return t.getAttribute("data-theme"), [4, this.getWidgetData(n)];
                                case 1:
                                    if ((null == (l = g.sent()) ? void 0 : l.config.layout) !== this.layout) return console.error("Invalid layout for ".concat(n, ", skipping...")), [2];
                                    if ((s = l.config.allowed_domains).length > 0 && void 0 !== typeof window && (u = window.location.hostname, !s.some(function(e) {
                                            return e.trim() === u.trim()
                                        }))) return console.log("Domain ".concat(u, " not allowed for ").concat(n, ", skipping...")), [2];
                                    if ((c = t.querySelector(".shadow-wrapper")) && t.removeChild(c), (c = document.createElement("div")).style.display = "block", c.className = "shadow-wrapper", t.appendChild(c), d = c.attachShadow({
                                            mode: "open"
                                        }), l) try {
                                        this.renderWidget(d, l, "default")
                                    } catch (e) {
                                        console.error("Failed to render widget", e)
                                    }
                                    return [4, (f = function() {
                                        return $r(m, void 0, void 0, function() {
                                            var e;
                                            return Ir(this, function(n) {
                                                if ((e = t.getAttribute("data-theme")) && ("light" === e || "dark" === e) && l) try {
                                                    this.renderWidget(d, Ar(Ar({}, l), {
                                                        config: Ar(Ar({}, l.config), {
                                                            color_scheme: e
                                                        })
                                                    }), "default")
                                                } catch (e) {
                                                    console.error("Failed to render widget", e)
                                                }
                                                return [2]
                                            })
                                        })
                                    })()];
                                case 2:
                                    return g.sent(), new MutationObserver(function(e) {
                                        e.forEach(function(e) {
                                            "attributes" === e.type && "data-theme" === e.attributeName && f()
                                        })
                                    }).observe(t, {
                                        attributes: !0
                                    }), [2, t]
                            }
                        })
                    })
                }, e.prototype.getHiddenParent = function(e) {
                    for (var t = e; t && t !== document.body;) {
                        if ("none" === window.getComputedStyle(t).display) return t;
                        t = t.parentElement
                    }
                    return null
                }, e.prototype.initialize = function() {
                    return $r(this, void 0, void 0, function() {
                        var e, t, n, r, a = this;
                        return Ir(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    0 === (e = document.querySelectorAll("div[data-featurable-async]")).length && console.error("No Featurable containers found. Aborting..."), t = function(t) {
                                        var r, o, i;
                                        return Ir(this, function(l) {
                                            switch (l.label) {
                                                case 0:
                                                    return r = e[t], (o = n.getHiddenParent(r)) ? (i = new MutationObserver(function() {
                                                        return $r(a, void 0, void 0, function() {
                                                            return Ir(this, function(e) {
                                                                switch (e.label) {
                                                                    case 0:
                                                                        return this.getHiddenParent(r) ? [3, 2] : [4, this.initializeFeaturableWidget(r)];
                                                                    case 1:
                                                                        e.sent(), i.disconnect(), e.label = 2;
                                                                    case 2:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }), i.observe(o, {
                                                        attributes: !0,
                                                        attributeFilter: ["style", "class"]
                                                    }), [3, 3]) : [3, 1];
                                                case 1:
                                                    return [4, n.initializeFeaturableWidget(r)];
                                                case 2:
                                                    l.sent(), l.label = 3;
                                                case 3:
                                                    return [2]
                                            }
                                        })
                                    }, n = this, r = 0, o.label = 1;
                                case 1:
                                    return r < e.length ? [5, t(r)] : [3, 4];
                                case 2:
                                    o.sent(), o.label = 3;
                                case 3:
                                    return r++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e
            }(),
            Fr = i(6509),
            Ur = i.n(Fr);

        function Vr(e) {
            var t, n, r = "";
            if ("string" == typeof e || "number" == typeof e) r += e;
            else if ("object" == typeof e)
                if (Array.isArray(e)) {
                    var a = e.length;
                    for (t = 0; t < a; t++) e[t] && (n = Vr(e[t])) && (r && (r += " "), r += n)
                } else
                    for (n in e) e[n] && (r && (r += " "), r += n);
            return r
        }
        const Zr = function() {
            for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (t = Vr(e)) && (r && (r += " "), r += t);
            return r
        };
        var Br = function(e) {
            switch (e) {
                case "a":
                    return "#660091";
                case "b":
                    return "#4B53B2";
                case "c":
                    return "#B1004A";
                case "d":
                    return "#972BB0";
                case "e":
                    return "#0F72C8";
                case "f":
                    return "#094389";
                case "g":
                    return "#118797";
                case "h":
                    return "#0F7868";
                case "i":
                    return "#073D30";
                case "j":
                    return "#57922C";
                case "k":
                    return "#E42567";
                case "l":
                    return "#364852";
                case "m":
                    return "#295817";
                case "n":
                    return "#795B50";
                case "o":
                    return "#4A322B";
                case "p":
                    return "#693EB4";
                case "q":
                    return "#3E1796";
                case "r":
                    return "#E95605";
                case "s":
                    return "#F03918";
                case "t":
                    return "#AE230D";
                case "u":
                case "v":
                    return "#647F8C";
                default:
                    return "#6b7280"
            }
        };

        function Hr() {
            return Hr = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Hr.apply(this, arguments)
        }

        function Wr(e, t) {
            return Wr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, Wr(e, t)
        }
        var qr = function(e) {
            var t, n;

            function r() {
                var t;
                return (t = e.call(this) || this).state = {
                    columns: [],
                    childRefs: [],
                    hasDistributed: !1
                }, t
            }
            n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, Wr(t, n);
            var a = r.prototype;
            return a.componentDidUpdate = function() {
                this.state.hasDistributed || this.props.sequential || this.distributeChildren()
            }, r.getDerivedStateFromProps = function(e, t) {
                var n = e.children,
                    a = e.columnsCount,
                    o = a !== t.columns.length;
                return t && n === t.children && !o ? null : Hr({}, r.getEqualCountColumns(n, a), {
                    children: n,
                    hasDistributed: !1
                })
            }, a.shouldComponentUpdate = function(e) {
                return e.children !== this.state.children || e.columnsCount !== this.props.columnsCount
            }, a.distributeChildren = function() {
                var e = this,
                    t = this.props,
                    n = t.children,
                    r = t.columnsCount,
                    a = Array(r).fill(0);
                if (this.state.childRefs.every(function(e) {
                        return e.current.getBoundingClientRect().height
                    })) {
                    var o = Array.from({
                            length: r
                        }, function() {
                            return []
                        }),
                        i = 0;
                    Cr.Children.forEach(n, function(t) {
                        if (t && Cr.isValidElement(t)) {
                            var n = e.state.childRefs[i].current.getBoundingClientRect().height,
                                r = a.indexOf(Math.min.apply(Math, a));
                            a[r] += n, o[r].push(t), i++
                        }
                    }), this.setState(function(e) {
                        return Hr({}, e, {
                            columns: o,
                            hasDistributed: !0
                        })
                    })
                }
            }, r.getEqualCountColumns = function(e, t) {
                var n = Array.from({
                        length: t
                    }, function() {
                        return []
                    }),
                    r = 0,
                    a = [];
                return Cr.Children.forEach(e, function(e) {
                    if (e && Cr.isValidElement(e)) {
                        var o = Cr.createRef();
                        a.push(o), n[r % t].push(Cr.createElement("div", {
                            style: {
                                display: "flex",
                                justifyContent: "stretch"
                            },
                            key: r,
                            ref: o
                        }, e)), r++
                    }
                }), {
                    columns: n,
                    childRefs: a
                }
            }, a.renderColumns = function() {
                var e = this.props,
                    t = e.gutter,
                    n = e.itemTag,
                    r = e.itemStyle;
                return this.state.columns.map(function(e, a) {
                    return Cr.createElement(n, {
                        key: a,
                        style: Hr({
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignContent: "stretch",
                            flex: 1,
                            width: 0,
                            gap: t
                        }, r)
                    }, e.map(function(e) {
                        return e
                    }))
                })
            }, a.render = function() {
                var e = this.props,
                    t = e.gutter,
                    n = e.className,
                    r = e.style,
                    a = e.containerTag;
                return Cr.createElement(a, {
                    style: Hr({
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignContent: "stretch",
                        boxSizing: "border-box",
                        width: "100%",
                        gap: t
                    }, r),
                    className: n
                }, this.renderColumns())
            }, r
        }(Cr.Component);
        qr.propTypes = {}, qr.defaultProps = {
            columnsCount: 3,
            gutter: "0",
            className: null,
            style: {},
            containerTag: "div",
            itemTag: "div",
            itemStyle: {},
            sequential: !1
        };
        const Gr = qr;
        var Kr = "undefined" != typeof window ? Cr.useLayoutEffect : Cr.useEffect;
        (function(e) {
            var t, n, r, a, o, i = e.columnsCountBreakPoints,
                l = void 0 === i ? {
                    350: 1,
                    750: 2,
                    900: 3
                } : i,
                s = e.gutterBreakPoints,
                u = void 0 === s ? {} : s,
                c = e.children,
                d = e.className,
                f = void 0 === d ? null : d,
                p = e.style,
                h = void 0 === p ? null : p,
                m = (t = function() {
                    var e = (0, Cr.useState)(!1),
                        t = e[0],
                        n = e[1];
                    return Kr(function() {
                        n(!0)
                    }, []), t
                }(), n = (0, Cr.useState)("undefined" != typeof window ? window.innerWidth : 0), r = n[0], a = n[1], o = (0, Cr.useCallback)(function() {
                    t && a(window.innerWidth)
                }, [t]), Kr(function() {
                    if (t) return window.addEventListener("resize", o), o(),
                        function() {
                            return window.removeEventListener("resize", o)
                        }
                }, [t, o]), r),
                g = (0, Cr.useCallback)(function(e, t) {
                    var n = Object.keys(e).sort(function(e, t) {
                            return e - t
                        }),
                        r = n.length > 0 ? e[n[0]] : t;
                    return n.forEach(function(t) {
                        t < m && (r = e[t])
                    }), r
                }, [m]),
                v = (0, Cr.useMemo)(function() {
                    return g(l, 1)
                }, [g, l]),
                y = (0, Cr.useMemo)(function() {
                    return g(u, "10px")
                }, [g, u]);
            return Cr.createElement("div", {
                className: f,
                style: h
            }, Cr.Children.map(c, function(e, t) {
                return Cr.cloneElement(e, {
                    key: t,
                    columnsCount: v,
                    gutter: y
                })
            }))
        }).propTypes = {};
        const Qr = Gr;
        var Yr = function(t) {
                var n = t.className,
                    r = t.ref;
                return (0, e.jsx)("svg", {
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: Zr(n || "h-6 w-6"),
                    children: (0, e.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
                        clipRule: "evenodd"
                    })
                })
            },
            Jr = function(t) {
                var n = t.className,
                    r = t.rating,
                    a = t.group,
                    o = (0, Cr.useMemo)(function() {
                        var e = r / 5 * 100,
                            t = e > 100 ? 100 : e < 0 ? 0 : e;
                        return 5 * Math.floor(t / 5)
                    }, [r]);
                return (0, e.jsxs)("div", {
                    className: Zr("relative text-xl leading-none p-0 m-0", n, "star-rating"),
                    "data-featurable-classname": ".star-rating",
                    "data-featurable-description": "Star rating container",
                    "data-featurable-group": a,
                    children: [(0, e.jsx)("div", {
                        className: Zr("flex items-center absolute left-0 top-0 overflow-hidden", "star-rating__fill"),
                        style: {
                            width: "".concat(o, "%")
                        },
                        "data-featurable-classname": ".star-rating__fill",
                        "data-featurable-description": "Star rating fill",
                        "data-featurable-group": a,
                        children: (0, e.jsxs)("span", {
                            style: {
                                color: "#F8AF0D"
                            },
                            className: Zr("flex items-center"),
                            children: [(0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            })]
                        })
                    }), (0, e.jsx)("div", {
                        className: Zr("flex items-center", "star-rating__empty"),
                        "data-featurable-classname": ".star-rating__empty",
                        "data-featurable-description": "Star rating empty",
                        "data-featurable-group": a,
                        children: (0, e.jsxs)("span", {
                            style: {
                                color: "#d1d5db"
                            },
                            className: Zr("flex items-center"),
                            children: [(0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Yr, {
                                className: "h-5 w-5"
                            })]
                        })
                    })]
                })
            };
        const Xr = e => "string" == typeof e,
            ea = () => {
                let e, t;
                const n = new Promise((n, r) => {
                    e = n, t = r
                });
                return n.resolve = e, n.reject = t, n
            },
            ta = e => null == e ? "" : "" + e,
            na = /###/g,
            ra = e => e && e.indexOf("###") > -1 ? e.replace(na, ".") : e,
            aa = e => !e || Xr(e),
            oa = (e, t, n) => {
                const r = Xr(t) ? t.split(".") : t;
                let a = 0;
                for (; a < r.length - 1;) {
                    if (aa(e)) return {};
                    const t = ra(r[a]);
                    !e[t] && n && (e[t] = new n), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++a
                }
                return aa(e) ? {} : {
                    obj: e,
                    k: ra(r[a])
                }
            },
            ia = (e, t, n) => {
                const {
                    obj: r,
                    k: a
                } = oa(e, t, Object);
                if (void 0 !== r || 1 === t.length) return void(r[a] = n);
                let o = t[t.length - 1],
                    i = t.slice(0, t.length - 1),
                    l = oa(e, i, Object);
                for (; void 0 === l.obj && i.length;) o = `${i[i.length-1]}.${o}`, i = i.slice(0, i.length - 1), l = oa(e, i, Object), l?.obj && void 0 !== l.obj[`${l.k}.${o}`] && (l.obj = void 0);
                l.obj[`${l.k}.${o}`] = n
            },
            la = (e, t) => {
                const {
                    obj: n,
                    k: r
                } = oa(e, t);
                if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r]
            },
            sa = (e, t, n) => {
                for (const r in t) "__proto__" !== r && "constructor" !== r && (r in e ? Xr(e[r]) || e[r] instanceof String || Xr(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : sa(e[r], t[r], n) : e[r] = t[r]);
                return e
            },
            ua = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        var ca = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        const da = e => Xr(e) ? e.replace(/[&<>"'\/]/g, e => ca[e]) : e,
            fa = [" ", ",", "?", "!", ";"],
            pa = new class {
                constructor(e) {
                    this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
                }
                getRegExp(e) {
                    const t = this.regExpMap.get(e);
                    if (void 0 !== t) return t;
                    const n = new RegExp(e);
                    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n
                }
            }(20),
            ha = (e, t, n = ".") => {
                if (!e) return;
                if (e[t]) {
                    if (!Object.prototype.hasOwnProperty.call(e, t)) return;
                    return e[t]
                }
                const r = t.split(n);
                let a = e;
                for (let e = 0; e < r.length;) {
                    if (!a || "object" != typeof a) return;
                    let t, o = "";
                    for (let i = e; i < r.length; ++i)
                        if (i !== e && (o += n), o += r[i], t = a[o], void 0 !== t) {
                            if (["string", "number", "boolean"].indexOf(typeof t) > -1 && i < r.length - 1) continue;
                            e += i - e + 1;
                            break
                        } a = t
                }
                return a
            },
            ma = e => e?.replace("_", "-"),
            ga = {
                type: "logger",
                log(e) {
                    this.output("log", e)
                },
                warn(e) {
                    this.output("warn", e)
                },
                error(e) {
                    this.output("error", e)
                },
                output(e, t) {
                    console?.[e]?.apply?.(console, t)
                }
            };
        class va {
            constructor(e, t = {}) {
                this.init(e, t)
            }
            init(e, t = {}) {
                this.prefix = t.prefix || "i18next:", this.logger = e || ga, this.options = t, this.debug = t.debug
            }
            log(...e) {
                return this.forward(e, "log", "", !0)
            }
            warn(...e) {
                return this.forward(e, "warn", "", !0)
            }
            error(...e) {
                return this.forward(e, "error", "")
            }
            deprecate(...e) {
                return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
            }
            forward(e, t, n, r) {
                return r && !this.debug ? null : (Xr(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e))
            }
            create(e) {
                return new va(this.logger, {
                    prefix: `${this.prefix}:${e}:`,
                    ...this.options
                })
            }
            clone(e) {
                return (e = e || this.options).prefix = e.prefix || this.prefix, new va(this.logger, e)
            }
        }
        var ya = new va;
        class ba {
            constructor() {
                this.observers = {}
            }
            on(e, t) {
                return e.split(" ").forEach(e => {
                    this.observers[e] || (this.observers[e] = new Map);
                    const n = this.observers[e].get(t) || 0;
                    this.observers[e].set(t, n + 1)
                }), this
            }
            off(e, t) {
                this.observers[e] && (t ? this.observers[e].delete(t) : delete this.observers[e])
            }
            emit(e, ...t) {
                this.observers[e] && Array.from(this.observers[e].entries()).forEach(([e, n]) => {
                    for (let r = 0; r < n; r++) e(...t)
                }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([n, r]) => {
                    for (let a = 0; a < r; a++) n.apply(n, [e, ...t])
                })
            }
        }
        class wa extends ba {
            constructor(e, t = {
                ns: ["translation"],
                defaultNS: "translation"
            }) {
                super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
            }
            addNamespaces(e) {
                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
            }
            removeNamespaces(e) {
                const t = this.options.ns.indexOf(e);
                t > -1 && this.options.ns.splice(t, 1)
            }
            getResource(e, t, n, r = {}) {
                const a = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                    o = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
                let i;
                e.indexOf(".") > -1 ? i = e.split(".") : (i = [e, t], n && (Array.isArray(n) ? i.push(...n) : Xr(n) && a ? i.push(...n.split(a)) : i.push(n)));
                const l = la(this.data, i);
                return !l && !t && !n && e.indexOf(".") > -1 && (e = i[0], t = i[1], n = i.slice(2).join(".")), !l && o && Xr(n) ? ha(this.data?.[e]?.[t], n, a) : l
            }
            addResource(e, t, n, r, a = {
                silent: !1
            }) {
                const o = void 0 !== a.keySeparator ? a.keySeparator : this.options.keySeparator;
                let i = [e, t];
                n && (i = i.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (i = e.split("."), r = t, t = i[1]), this.addNamespaces(t), ia(this.data, i, r), a.silent || this.emit("added", e, t, n, r)
            }
            addResources(e, t, n, r = {
                silent: !1
            }) {
                for (const r in n)(Xr(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], {
                    silent: !0
                });
                r.silent || this.emit("added", e, t, n)
            }
            addResourceBundle(e, t, n, r, a, o = {
                silent: !1,
                skipCopy: !1
            }) {
                let i = [e, t];
                e.indexOf(".") > -1 && (i = e.split("."), r = n, n = t, t = i[1]), this.addNamespaces(t);
                let l = la(this.data, i) || {};
                o.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? sa(l, n, a) : l = {
                    ...l,
                    ...n
                }, ia(this.data, i, l), o.silent || this.emit("added", e, t, n)
            }
            removeResourceBundle(e, t) {
                this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
            }
            hasResourceBundle(e, t) {
                return void 0 !== this.getResource(e, t)
            }
            getResourceBundle(e, t) {
                return t || (t = this.options.defaultNS), this.getResource(e, t)
            }
            getDataByLanguage(e) {
                return this.data[e]
            }
            hasLanguageSomeTranslations(e) {
                const t = this.getDataByLanguage(e);
                return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
            }
            toJSON() {
                return this.data
            }
        }
        var _a = {
            processors: {},
            addPostProcessor(e) {
                this.processors[e.name] = e
            },
            handle(e, t, n, r, a) {
                return e.forEach(e => {
                    t = this.processors[e]?.process(t, n, r, a) ?? t
                }), t
            }
        };
        const xa = {},
            ka = e => !Xr(e) && "boolean" != typeof e && "number" != typeof e;
        class Sa extends ba {
            constructor(e, t = {}) {
                var n, r;
                super(), n = e, r = this, ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"].forEach(e => {
                    n[e] && (r[e] = n[e])
                }), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = ya.create("translator")
            }
            changeLanguage(e) {
                e && (this.language = e)
            }
            exists(e, t = {
                interpolation: {}
            }) {
                const n = {
                    ...t
                };
                if (null == e) return !1;
                const r = this.resolve(e, n);
                return void 0 !== r?.res
            }
            extractFromKey(e, t) {
                let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                void 0 === n && (n = ":");
                const r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator;
                let a = t.ns || this.options.defaultNS || [];
                const o = n && e.indexOf(n) > -1,
                    i = !(this.options.userDefinedKeySeparator || t.keySeparator || this.options.userDefinedNsSeparator || t.nsSeparator || ((e, t, n) => {
                        t = t || "", n = n || "";
                        const r = fa.filter(e => t.indexOf(e) < 0 && n.indexOf(e) < 0);
                        if (0 === r.length) return !0;
                        const a = pa.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`);
                        let o = !a.test(e);
                        if (!o) {
                            const t = e.indexOf(n);
                            t > 0 && !a.test(e.substring(0, t)) && (o = !0)
                        }
                        return o
                    })(e, n, r));
                if (o && !i) {
                    const t = e.match(this.interpolator.nestingRegexp);
                    if (t && t.length > 0) return {
                        key: e,
                        namespaces: Xr(a) ? [a] : a
                    };
                    const o = e.split(n);
                    (n !== r || n === r && this.options.ns.indexOf(o[0]) > -1) && (a = o.shift()), e = o.join(r)
                }
                return {
                    key: e,
                    namespaces: Xr(a) ? [a] : a
                }
            }
            translate(e, t, n) {
                let r = "object" == typeof t ? {
                    ...t
                } : t;
                if ("object" != typeof r && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof options && (r = {
                        ...r
                    }), r || (r = {}), null == e) return "";
                Array.isArray(e) || (e = [String(e)]);
                const a = void 0 !== r.returnDetails ? r.returnDetails : this.options.returnDetails,
                    o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                    {
                        key: i,
                        namespaces: l
                    } = this.extractFromKey(e[e.length - 1], r),
                    s = l[l.length - 1];
                let u = void 0 !== r.nsSeparator ? r.nsSeparator : this.options.nsSeparator;
                void 0 === u && (u = ":");
                const c = r.lng || this.language,
                    d = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                if ("cimode" === c?.toLowerCase()) return d ? a ? {
                    res: `${s}${u}${i}`,
                    usedKey: i,
                    exactUsedKey: i,
                    usedLng: c,
                    usedNS: s,
                    usedParams: this.getUsedParamsDetails(r)
                } : `${s}${u}${i}` : a ? {
                    res: i,
                    usedKey: i,
                    exactUsedKey: i,
                    usedLng: c,
                    usedNS: s,
                    usedParams: this.getUsedParamsDetails(r)
                } : i;
                const f = this.resolve(e, r);
                let p = f?.res;
                const h = f?.usedKey || i,
                    m = f?.exactUsedKey || i,
                    g = void 0 !== r.joinArrays ? r.joinArrays : this.options.joinArrays,
                    v = !this.i18nFormat || this.i18nFormat.handleAsObject,
                    y = void 0 !== r.count && !Xr(r.count),
                    b = Sa.hasDefaultValue(r),
                    w = y ? this.pluralResolver.getSuffix(c, r.count, r) : "",
                    _ = r.ordinal && y ? this.pluralResolver.getSuffix(c, r.count, {
                        ordinal: !1
                    }) : "",
                    x = y && !r.ordinal && 0 === r.count,
                    k = x && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${w}`] || r[`defaultValue${_}`] || r.defaultValue;
                let S = p;
                v && !p && b && (S = k);
                const z = ka(S),
                    E = Object.prototype.toString.apply(S);
                if (!(v && S && z && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(E) < 0) || Xr(g) && Array.isArray(S))
                    if (v && Xr(g) && Array.isArray(p)) p = p.join(g), p && (p = this.extendTranslation(p, e, r, n));
                    else {
                        let t = !1,
                            a = !1;
                        !this.isValidLookup(p) && b && (t = !0, p = k), this.isValidLookup(p) || (a = !0, p = i);
                        const l = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && a ? void 0 : p,
                            d = b && k !== p && this.options.updateMissing;
                        if (a || t || d) {
                            if (this.logger.log(d ? "updateKey" : "missingKey", c, s, i, d ? k : p), o) {
                                const e = this.resolve(i, {
                                    ...r,
                                    keySeparator: !1
                                });
                                e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            let e = [];
                            const t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && t && t[0])
                                for (let n = 0; n < t.length; n++) e.push(t[n]);
                            else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(r.lng || this.language) : e.push(r.lng || this.language);
                            const n = (e, t, n) => {
                                const a = b && n !== p ? n : l;
                                this.options.missingKeyHandler ? this.options.missingKeyHandler(e, s, t, a, d, r) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(e, s, t, a, d, r), this.emit("missingKey", e, s, t, p)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && y ? e.forEach(e => {
                                const t = this.pluralResolver.getSuffixes(e, r);
                                x && r[`defaultValue${this.options.pluralSeparator}zero`] && t.indexOf(`${this.options.pluralSeparator}zero`) < 0 && t.push(`${this.options.pluralSeparator}zero`), t.forEach(t => {
                                    n([e], i + t, r[`defaultValue${t}`] || k)
                                })
                            }) : n(e, i, k))
                        }
                        p = this.extendTranslation(p, e, r, f, n), a && p === i && this.options.appendNamespaceToMissingKey && (p = `${s}${u}${i}`), (a || t) && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${s}${u}${i}` : i, t ? p : void 0, r))
                    }
                else {
                    if (!r.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                        const e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, S, {
                            ...r,
                            ns: l
                        }) : `key '${i} (${this.language})' returned an object instead of string.`;
                        return a ? (f.res = e, f.usedParams = this.getUsedParamsDetails(r), f) : e
                    }
                    if (o) {
                        const e = Array.isArray(S),
                            t = e ? [] : {},
                            n = e ? m : h;
                        for (const e in S)
                            if (Object.prototype.hasOwnProperty.call(S, e)) {
                                const a = `${n}${o}${e}`;
                                t[e] = b && !p ? this.translate(a, {
                                    ...r,
                                    defaultValue: ka(k) ? k[e] : void 0,
                                    joinArrays: !1,
                                    ns: l
                                }) : this.translate(a, {
                                    ...r,
                                    joinArrays: !1,
                                    ns: l
                                }), t[e] === a && (t[e] = S[e])
                            } p = t
                    }
                }
                return a ? (f.res = p, f.usedParams = this.getUsedParamsDetails(r), f) : p
            }
            extendTranslation(e, t, n, r, a) {
                if (this.i18nFormat?.parse) e = this.i18nFormat.parse(e, {
                    ...this.options.interpolation.defaultVariables,
                    ...n
                }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
                    resolved: r
                });
                else if (!n.skipInterpolation) {
                    n.interpolation && this.interpolator.init({
                        ...n,
                        interpolation: {
                            ...this.options.interpolation,
                            ...n.interpolation
                        }
                    });
                    const o = Xr(e) && (void 0 !== n?.interpolation?.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                    let i;
                    if (o) {
                        const t = e.match(this.interpolator.nestingRegexp);
                        i = t && t.length
                    }
                    let l = n.replace && !Xr(n.replace) ? n.replace : n;
                    if (this.options.interpolation.defaultVariables && (l = {
                            ...this.options.interpolation.defaultVariables,
                            ...l
                        }), e = this.interpolator.interpolate(e, l, n.lng || this.language || r.usedLng, n), o) {
                        const t = e.match(this.interpolator.nestingRegexp);
                        i < (t && t.length) && (n.nest = !1)
                    }!n.lng && r && r.res && (n.lng = this.language || r.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, (...e) => a?.[0] !== e[0] || n.context ? this.translate(...e, t) : (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null), n)), n.interpolation && this.interpolator.reset()
                }
                const o = n.postProcess || this.options.postProcess,
                    i = Xr(o) ? [o] : o;
                return null != e && i?.length && !1 !== n.applyPostProcessor && (e = _a.handle(i, e, t, this.options && this.options.postProcessPassResolved ? {
                    i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n)
                    },
                    ...n
                } : n, this)), e
            }
            resolve(e, t = {}) {
                let n, r, a, o, i;
                return Xr(e) && (e = [e]), e.forEach(e => {
                    if (this.isValidLookup(n)) return;
                    const l = this.extractFromKey(e, t),
                        s = l.key;
                    r = s;
                    let u = l.namespaces;
                    this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
                    const c = void 0 !== t.count && !Xr(t.count),
                        d = c && !t.ordinal && 0 === t.count,
                        f = void 0 !== t.context && (Xr(t.context) || "number" == typeof t.context) && "" !== t.context,
                        p = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
                    u.forEach(e => {
                        this.isValidLookup(n) || (i = e, xa[`${p[0]}-${e}`] || !this.utils?.hasLoadedNamespace || this.utils?.hasLoadedNamespace(i) || (xa[`${p[0]}-${e}`] = !0, this.logger.warn(`key "${r}" for languages "${p.join(", ")}" won't get resolved as namespace "${i}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), p.forEach(r => {
                            if (this.isValidLookup(n)) return;
                            o = r;
                            const i = [s];
                            if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(i, s, r, e, t);
                            else {
                                let e;
                                c && (e = this.pluralResolver.getSuffix(r, t.count, t));
                                const n = `${this.options.pluralSeparator}zero`,
                                    a = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                if (c && (i.push(s + e), t.ordinal && 0 === e.indexOf(a) && i.push(s + e.replace(a, this.options.pluralSeparator)), d && i.push(s + n)), f) {
                                    const r = `${s}${this.options.contextSeparator}${t.context}`;
                                    i.push(r), c && (i.push(r + e), t.ordinal && 0 === e.indexOf(a) && i.push(r + e.replace(a, this.options.pluralSeparator)), d && i.push(r + n))
                                }
                            }
                            let l;
                            for (; l = i.pop();) this.isValidLookup(n) || (a = l, n = this.getResource(r, e, l, t))
                        }))
                    })
                }), {
                    res: n,
                    usedKey: r,
                    exactUsedKey: a,
                    usedLng: o,
                    usedNS: i
                }
            }
            isValidLookup(e) {
                return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
            }
            getResource(e, t, n, r = {}) {
                return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
            }
            getUsedParamsDetails(e = {}) {
                const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
                    n = e.replace && !Xr(e.replace);
                let r = n ? e.replace : e;
                if (n && void 0 !== e.count && (r.count = e.count), this.options.interpolation.defaultVariables && (r = {
                        ...this.options.interpolation.defaultVariables,
                        ...r
                    }), !n) {
                    r = {
                        ...r
                    };
                    for (const e of t) delete r[e]
                }
                return r
            }
            static hasDefaultValue(e) {
                for (const t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t) && "defaultValue" === t.substring(0, 12) && void 0 !== e[t]) return !0;
                return !1
            }
        }
        class za {
            constructor(e) {
                this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ya.create("languageUtils")
            }
            getScriptPartFromCode(e) {
                if (!(e = ma(e)) || e.indexOf("-") < 0) return null;
                const t = e.split("-");
                return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
            }
            getLanguagePartFromCode(e) {
                if (!(e = ma(e)) || e.indexOf("-") < 0) return e;
                const t = e.split("-");
                return this.formatLanguageCode(t[0])
            }
            formatLanguageCode(e) {
                if (Xr(e) && e.indexOf("-") > -1) {
                    let t;
                    try {
                        t = Intl.getCanonicalLocales(e)[0]
                    } catch (e) {}
                    return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e)
                }
                return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
            }
            isSupportedCode(e) {
                return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
            }
            getBestMatchFromCodes(e) {
                if (!e) return null;
                let t;
                return e.forEach(e => {
                    if (t) return;
                    const n = this.formatLanguageCode(e);
                    this.options.supportedLngs && !this.isSupportedCode(n) || (t = n)
                }), !t && this.options.supportedLngs && e.forEach(e => {
                    if (t) return;
                    const n = this.getScriptPartFromCode(e);
                    if (this.isSupportedCode(n)) return t = n;
                    const r = this.getLanguagePartFromCode(e);
                    if (this.isSupportedCode(r)) return t = r;
                    t = this.options.supportedLngs.find(e => e === r ? e : e.indexOf("-") < 0 && r.indexOf("-") < 0 ? void 0 : e.indexOf("-") > 0 && r.indexOf("-") < 0 && e.substring(0, e.indexOf("-")) === r || 0 === e.indexOf(r) && r.length > 1 ? e : void 0)
                }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t
            }
            getFallbackCodes(e, t) {
                if (!e) return [];
                if ("function" == typeof e && (e = e(t)), Xr(e) && (e = [e]), Array.isArray(e)) return e;
                if (!t) return e.default || [];
                let n = e[t];
                return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
            }
            toResolveHierarchy(e, t) {
                const n = this.getFallbackCodes((!1 === t ? [] : t) || this.options.fallbackLng || [], e),
                    r = [],
                    a = e => {
                        e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                    };
                return Xr(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && a(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && a(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && a(this.getLanguagePartFromCode(e))) : Xr(e) && a(this.formatLanguageCode(e)), n.forEach(e => {
                    r.indexOf(e) < 0 && a(this.formatLanguageCode(e))
                }), r
            }
        }
        const Ea = {
                zero: 0,
                one: 1,
                two: 2,
                few: 3,
                many: 4,
                other: 5
            },
            Ca = {
                select: e => 1 === e ? "one" : "other",
                resolvedOptions: () => ({
                    pluralCategories: ["one", "other"]
                })
            };
        class Na {
            constructor(e, t = {}) {
                this.languageUtils = e, this.options = t, this.logger = ya.create("pluralResolver"), this.pluralRulesCache = {}
            }
            addRule(e, t) {
                this.rules[e] = t
            }
            clearCache() {
                this.pluralRulesCache = {}
            }
            getRule(e, t = {}) {
                const n = ma("dev" === e ? "en" : e),
                    r = t.ordinal ? "ordinal" : "cardinal",
                    a = JSON.stringify({
                        cleanedCode: n,
                        type: r
                    });
                if (a in this.pluralRulesCache) return this.pluralRulesCache[a];
                let o;
                try {
                    o = new Intl.PluralRules(n, {
                        type: r
                    })
                } catch (n) {
                    if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Ca;
                    if (!e.match(/-|_/)) return Ca;
                    const r = this.languageUtils.getLanguagePartFromCode(e);
                    o = this.getRule(r, t)
                }
                return this.pluralRulesCache[a] = o, o
            }
            needsPlural(e, t = {}) {
                let n = this.getRule(e, t);
                return n || (n = this.getRule("dev", t)), n?.resolvedOptions().pluralCategories.length > 1
            }
            getPluralFormsOfKey(e, t, n = {}) {
                return this.getSuffixes(e, n).map(e => `${t}${e}`)
            }
            getSuffixes(e, t = {}) {
                let n = this.getRule(e, t);
                return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((e, t) => Ea[e] - Ea[t]).map(e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`) : []
            }
            getSuffix(e, t, n = {}) {
                const r = this.getRule(e, n);
                return r ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n))
            }
        }
        const Pa = (e, t, n, r = ".", a = !0) => {
                let o = ((e, t, n) => {
                    const r = la(e, n);
                    return void 0 !== r ? r : la(t, n)
                })(e, t, n);
                return !o && a && Xr(n) && (o = ha(e, n, r), void 0 === o && (o = ha(t, n, r))), o
            },
            Oa = e => e.replace(/\$/g, "$$$$");
        class ja {
            constructor(e = {}) {
                this.logger = ya.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || (e => e), this.init(e)
            }
            init(e = {}) {
                e.interpolation || (e.interpolation = {
                    escapeValue: !0
                });
                const {
                    escape: t,
                    escapeValue: n,
                    useRawValueToEscape: r,
                    prefix: a,
                    prefixEscaped: o,
                    suffix: i,
                    suffixEscaped: l,
                    formatSeparator: s,
                    unescapeSuffix: u,
                    unescapePrefix: c,
                    nestingPrefix: d,
                    nestingPrefixEscaped: f,
                    nestingSuffix: p,
                    nestingSuffixEscaped: h,
                    nestingOptionsSeparator: m,
                    maxReplaces: g,
                    alwaysFormat: v
                } = e.interpolation;
                this.escape = void 0 !== t ? t : da, this.escapeValue = void 0 === n || n, this.useRawValueToEscape = void 0 !== r && r, this.prefix = a ? ua(a) : o || "{{", this.suffix = i ? ua(i) : l || "}}", this.formatSeparator = s || ",", this.unescapePrefix = u ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = d ? ua(d) : f || ua("$t("), this.nestingSuffix = p ? ua(p) : h || ua(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = g || 1e3, this.alwaysFormat = void 0 !== v && v, this.resetRegExp()
            }
            reset() {
                this.options && this.init(this.options)
            }
            resetRegExp() {
                const e = (e, t) => e?.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
                this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
            }
            interpolate(e, t, n, r) {
                let a, o, i;
                const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
                    s = e => {
                        if (e.indexOf(this.formatSeparator) < 0) {
                            const a = Pa(t, l, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                            return this.alwaysFormat ? this.format(a, void 0, n, {
                                ...r,
                                ...t,
                                interpolationkey: e
                            }) : a
                        }
                        const a = e.split(this.formatSeparator),
                            o = a.shift().trim(),
                            i = a.join(this.formatSeparator).trim();
                        return this.format(Pa(t, l, o, this.options.keySeparator, this.options.ignoreJSONStructure), i, n, {
                            ...r,
                            ...t,
                            interpolationkey: o
                        })
                    };
                this.resetRegExp();
                const u = r?.missingInterpolationHandler || this.options.missingInterpolationHandler,
                    c = void 0 !== r?.interpolation?.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                return [{
                    regex: this.regexpUnescape,
                    safeValue: e => Oa(e)
                }, {
                    regex: this.regexp,
                    safeValue: e => this.escapeValue ? Oa(this.escape(e)) : Oa(e)
                }].forEach(t => {
                    for (i = 0; a = t.regex.exec(e);) {
                        const n = a[1].trim();
                        if (o = s(n), void 0 === o)
                            if ("function" == typeof u) {
                                const t = u(e, a, r);
                                o = Xr(t) ? t : ""
                            } else if (r && Object.prototype.hasOwnProperty.call(r, n)) o = "";
                        else {
                            if (c) {
                                o = a[0];
                                continue
                            }
                            this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), o = ""
                        } else Xr(o) || this.useRawValueToEscape || (o = ta(o));
                        const l = t.safeValue(o);
                        if (e = e.replace(a[0], l), c ? (t.regex.lastIndex += o.length, t.regex.lastIndex -= a[0].length) : t.regex.lastIndex = 0, i++, i >= this.maxReplaces) break
                    }
                }), e
            }
            nest(e, t, n = {}) {
                let r, a, o;
                const i = (e, t) => {
                    const n = this.nestingOptionsSeparator;
                    if (e.indexOf(n) < 0) return e;
                    const r = e.split(new RegExp(`${n}[ ]*{`));
                    let a = `{${r[1]}`;
                    e = r[0], a = this.interpolate(a, o);
                    const i = a.match(/'/g),
                        l = a.match(/"/g);
                    ((i?.length ?? 0) % 2 == 0 && !l || l.length % 2 != 0) && (a = a.replace(/'/g, '"'));
                    try {
                        o = JSON.parse(a), t && (o = {
                            ...t,
                            ...o
                        })
                    } catch (t) {
                        return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${n}${a}`
                    }
                    return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, e
                };
                for (; r = this.nestingRegexp.exec(e);) {
                    let l = [];
                    o = {
                        ...n
                    }, o = o.replace && !Xr(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
                    const s = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
                    if (-1 !== s && (l = r[1].slice(s).split(this.formatSeparator).map(e => e.trim()).filter(Boolean), r[1] = r[1].slice(0, s)), a = t(i.call(this, r[1].trim(), o), o), a && r[0] === e && !Xr(a)) return a;
                    Xr(a) || (a = ta(a)), a || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), a = ""), l.length && (a = l.reduce((e, t) => this.format(e, t, n.lng, {
                        ...n,
                        interpolationkey: r[1].trim()
                    }), a.trim())), e = e.replace(r[0], a), this.regexp.lastIndex = 0
                }
                return e
            }
        }
        const La = e => {
                const t = {};
                return (n, r, a) => {
                    let o = a;
                    a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (o = {
                        ...o,
                        [a.interpolationkey]: void 0
                    });
                    const i = r + JSON.stringify(o);
                    let l = t[i];
                    return l || (l = e(ma(r), a), t[i] = l), l(n)
                }
            },
            Ta = e => (t, n, r) => e(ma(n), r)(t);
        class Ra {
            constructor(e = {}) {
                this.logger = ya.create("formatter"), this.options = e, this.init(e)
            }
            init(e, t = {
                interpolation: {}
            }) {
                this.formatSeparator = t.interpolation.formatSeparator || ",";
                const n = t.cacheInBuiltFormats ? La : Ta;
                this.formats = {
                    number: n((e, t) => {
                        const n = new Intl.NumberFormat(e, {
                            ...t
                        });
                        return e => n.format(e)
                    }),
                    currency: n((e, t) => {
                        const n = new Intl.NumberFormat(e, {
                            ...t,
                            style: "currency"
                        });
                        return e => n.format(e)
                    }),
                    datetime: n((e, t) => {
                        const n = new Intl.DateTimeFormat(e, {
                            ...t
                        });
                        return e => n.format(e)
                    }),
                    relativetime: n((e, t) => {
                        const n = new Intl.RelativeTimeFormat(e, {
                            ...t
                        });
                        return e => n.format(e, t.range || "day")
                    }),
                    list: n((e, t) => {
                        const n = new Intl.ListFormat(e, {
                            ...t
                        });
                        return e => n.format(e)
                    })
                }
            }
            add(e, t) {
                this.formats[e.toLowerCase().trim()] = t
            }
            addCached(e, t) {
                this.formats[e.toLowerCase().trim()] = La(t)
            }
            format(e, t, n, r = {}) {
                const a = t.split(this.formatSeparator);
                if (a.length > 1 && a[0].indexOf("(") > 1 && a[0].indexOf(")") < 0 && a.find(e => e.indexOf(")") > -1)) {
                    const e = a.findIndex(e => e.indexOf(")") > -1);
                    a[0] = [a[0], ...a.splice(1, e)].join(this.formatSeparator)
                }
                return a.reduce((e, t) => {
                    const {
                        formatName: a,
                        formatOptions: o
                    } = (e => {
                        let t = e.toLowerCase().trim();
                        const n = {};
                        if (e.indexOf("(") > -1) {
                            const r = e.split("(");
                            t = r[0].toLowerCase().trim();
                            const a = r[1].substring(0, r[1].length - 1);
                            "currency" === t && a.indexOf(":") < 0 ? n.currency || (n.currency = a.trim()) : "relativetime" === t && a.indexOf(":") < 0 ? n.range || (n.range = a.trim()) : a.split(";").forEach(e => {
                                if (e) {
                                    const [t, ...r] = e.split(":"), a = r.join(":").trim().replace(/^'+|'+$/g, ""), o = t.trim();
                                    n[o] || (n[o] = a), "false" === a && (n[o] = !1), "true" === a && (n[o] = !0), isNaN(a) || (n[o] = parseInt(a, 10))
                                }
                            })
                        }
                        return {
                            formatName: t,
                            formatOptions: n
                        }
                    })(t);
                    if (this.formats[a]) {
                        let t = e;
                        try {
                            const i = r?.formatParams?.[r.interpolationkey] || {},
                                l = i.locale || i.lng || r.locale || r.lng || n;
                            t = this.formats[a](e, l, {
                                ...o,
                                ...r,
                                ...i
                            })
                        } catch (e) {
                            this.logger.warn(e)
                        }
                        return t
                    }
                    return this.logger.warn(`there was no format function for ${a}`), e
                }, e)
            }
        }
        class Ma extends ba {
            constructor(e, t, n, r = {}) {
                super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = ya.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, r.backend, r)
            }
            queueLoad(e, t, n, r) {
                const a = {},
                    o = {},
                    i = {},
                    l = {};
                return e.forEach(e => {
                    let r = !0;
                    t.forEach(t => {
                        const i = `${e}|${t}`;
                        !n.reload && this.store.hasResourceBundle(e, t) ? this.state[i] = 2 : this.state[i] < 0 || (1 === this.state[i] ? void 0 === o[i] && (o[i] = !0) : (this.state[i] = 1, r = !1, void 0 === o[i] && (o[i] = !0), void 0 === a[i] && (a[i] = !0), void 0 === l[t] && (l[t] = !0)))
                    }), r || (i[e] = !0)
                }), (Object.keys(a).length || Object.keys(o).length) && this.queue.push({
                    pending: o,
                    pendingCount: Object.keys(o).length,
                    loaded: {},
                    errors: [],
                    callback: r
                }), {
                    toLoad: Object.keys(a),
                    pending: Object.keys(o),
                    toLoadLanguages: Object.keys(i),
                    toLoadNamespaces: Object.keys(l)
                }
            }
            loaded(e, t, n) {
                const r = e.split("|"),
                    a = r[0],
                    o = r[1];
                t && this.emit("failedLoading", a, o, t), !t && n && this.store.addResourceBundle(a, o, n, void 0, void 0, {
                    skipCopy: !0
                }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
                const i = {};
                this.queue.forEach(n => {
                    ((e, t, n) => {
                        const {
                            obj: r,
                            k: a
                        } = oa(e, t, Object);
                        r[a] = r[a] || [], r[a].push(n)
                    })(n.loaded, [a], o), ((e, t) => {
                        void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--)
                    })(n, e), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(e => {
                        i[e] || (i[e] = {});
                        const t = n.loaded[e];
                        t.length && t.forEach(t => {
                            void 0 === i[e][t] && (i[e][t] = !0)
                        })
                    }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                }), this.emit("loaded", i), this.queue = this.queue.filter(e => !e.done)
            }
            read(e, t, n, r = 0, a = this.retryTimeout, o) {
                if (!e.length) return o(null, {});
                if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
                    lng: e,
                    ns: t,
                    fcName: n,
                    tried: r,
                    wait: a,
                    callback: o
                });
                this.readingCalls++;
                const i = (i, l) => {
                        if (this.readingCalls--, this.waitingReads.length > 0) {
                            const e = this.waitingReads.shift();
                            this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                        }
                        i && l && r < this.maxRetries ? setTimeout(() => {
                            this.read.call(this, e, t, n, r + 1, 2 * a, o)
                        }, a) : o(i, l)
                    },
                    l = this.backend[n].bind(this.backend);
                if (2 !== l.length) return l(e, t, i);
                try {
                    const n = l(e, t);
                    n && "function" == typeof n.then ? n.then(e => i(null, e)).catch(i) : i(null, n)
                } catch (e) {
                    i(e)
                }
            }
            prepareLoading(e, t, n = {}, r) {
                if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
                Xr(e) && (e = this.languageUtils.toResolveHierarchy(e)), Xr(t) && (t = [t]);
                const a = this.queueLoad(e, t, n, r);
                if (!a.toLoad.length) return a.pending.length || r(), null;
                a.toLoad.forEach(e => {
                    this.loadOne(e)
                })
            }
            load(e, t, n) {
                this.prepareLoading(e, t, {}, n)
            }
            reload(e, t, n) {
                this.prepareLoading(e, t, {
                    reload: !0
                }, n)
            }
            loadOne(e, t = "") {
                const n = e.split("|"),
                    r = n[0],
                    a = n[1];
                this.read(r, a, "read", void 0, void 0, (n, o) => {
                    n && this.logger.warn(`${t}loading namespace ${a} for language ${r} failed`, n), !n && o && this.logger.log(`${t}loaded namespace ${a} for language ${r}`, o), this.loaded(e, n, o)
                })
            }
            saveMissing(e, t, n, r, a, o = {}, i = () => {}) {
                if (!this.services?.utils?.hasLoadedNamespace || this.services?.utils?.hasLoadedNamespace(t)) {
                    if (null != n && "" !== n) {
                        if (this.backend?.create) {
                            const l = {
                                    ...o,
                                    isUpdate: a
                                },
                                s = this.backend.create.bind(this.backend);
                            if (s.length < 6) try {
                                let a;
                                a = 5 === s.length ? s(e, t, n, r, l) : s(e, t, n, r), a && "function" == typeof a.then ? a.then(e => i(null, e)).catch(i) : i(null, a)
                            } catch (e) {
                                i(e)
                            } else s(e, t, n, r, i, l)
                        }
                        e && e[0] && this.store.addResource(e[0], t, n, r)
                    }
                } else this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")
            }
        }
        const Aa = () => ({
                debug: !1,
                initAsync: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !1,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: e => {
                    let t = {};
                    if ("object" == typeof e[1] && (t = e[1]), Xr(e[1]) && (t.defaultValue = e[1]), Xr(e[2]) && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                        const n = e[3] || e[2];
                        Object.keys(n).forEach(e => {
                            t[e] = n[e]
                        })
                    }
                    return t
                },
                interpolation: {
                    escapeValue: !0,
                    format: e => e,
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !0
                },
                cacheInBuiltFormats: !0
            }),
            $a = e => (Xr(e.ns) && (e.ns = [e.ns]), Xr(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), Xr(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), "boolean" == typeof e.initImmediate && (e.initAsync = e.initImmediate), e),
            Ia = () => {};
        class Da extends ba {
            constructor(e = {}, t) {
                var n;
                if (super(), this.options = $a(e), this.services = {}, this.logger = ya, this.modules = {
                        external: []
                    }, n = this, Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(e => {
                        "function" == typeof n[e] && (n[e] = n[e].bind(n))
                    }), t && !this.isInitialized && !e.isClone) {
                    if (!this.options.initAsync) return this.init(e, t), this;
                    setTimeout(() => {
                        this.init(e, t)
                    }, 0)
                }
            }
            init(e = {}, t) {
                this.isInitializing = !0, "function" == typeof e && (t = e, e = {}), null == e.defaultNS && e.ns && (Xr(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
                const n = Aa();
                this.options = {
                    ...n,
                    ...this.options,
                    ...$a(e)
                }, this.options.interpolation = {
                    ...n.interpolation,
                    ...this.options.interpolation
                }, void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator), void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator);
                const r = e => e ? "function" == typeof e ? new e : e : null;
                if (!this.options.isClone) {
                    let e;
                    this.modules.logger ? ya.init(r(this.modules.logger), this.options) : ya.init(null, this.options), e = this.modules.formatter ? this.modules.formatter : Ra;
                    const t = new za(this.options);
                    this.store = new wa(this.options.resources, this.options);
                    const a = this.services;
                    a.logger = ya, a.resourceStore = this.store, a.languageUtils = t, a.pluralResolver = new Na(t, {
                        prepend: this.options.pluralSeparator,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }), this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format && this.logger.warn("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), !e || this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format || (a.formatter = r(e), a.formatter.init && a.formatter.init(a, this.options), this.options.interpolation.format = a.formatter.format.bind(a.formatter)), a.interpolator = new ja(this.options), a.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    }, a.backendConnector = new Ma(r(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", (e, ...t) => {
                        this.emit(e, ...t)
                    }), this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector), a.languageDetector.init && a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new Sa(this.services, this.options), this.translator.on("*", (e, ...t) => {
                        this.emit(e, ...t)
                    }), this.modules.external.forEach(e => {
                        e.init && e.init(this)
                    })
                }
                if (this.format = this.options.interpolation.format, t || (t = Ia), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    const e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
                }
                this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
                    this[e] = (...t) => this.store[e](...t)
                }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
                    this[e] = (...t) => (this.store[e](...t), this)
                });
                const a = ea(),
                    o = () => {
                        const e = (e, n) => {
                            this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(n), t(e, n)
                        };
                        if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
                        this.changeLanguage(this.options.lng, e)
                    };
                return this.options.resources || !this.options.initAsync ? o() : setTimeout(o, 0), a
            }
            loadResources(e, t = Ia) {
                let n = t;
                const r = Xr(e) ? e : this.language;
                if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
                    if ("cimode" === r?.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return n();
                    const e = [],
                        t = t => {
                            t && "cimode" !== t && this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                                "cimode" !== t && e.indexOf(t) < 0 && e.push(t)
                            })
                        };
                    r ? t(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e)), this.options.preload?.forEach?.(e => t(e)), this.services.backendConnector.load(e, this.options.ns, e => {
                        e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), n(e)
                    })
                } else n(null)
            }
            reloadResources(e, t, n) {
                const r = ea();
                return "function" == typeof e && (n = e, e = void 0), "function" == typeof t && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = Ia), this.services.backendConnector.reload(e, t, e => {
                    r.resolve(), n(e)
                }), r
            }
            use(e) {
                if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && _a.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
            }
            setResolvedLanguage(e) {
                if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1)) {
                    for (let e = 0; e < this.languages.length; e++) {
                        const t = this.languages[e];
                        if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                            this.resolvedLanguage = t;
                            break
                        }
                    }!this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e))
                }
            }
            changeLanguage(e, t) {
                this.isLanguageChangingTo = e;
                const n = ea();
                this.emit("languageChanging", e);
                const r = e => {
                        this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                    },
                    a = (a, o) => {
                        o ? this.isLanguageChangingTo === e && (r(o), this.translator.changeLanguage(o), this.isLanguageChangingTo = void 0, this.emit("languageChanged", o), this.logger.log("languageChanged", o)) : this.isLanguageChangingTo = void 0, n.resolve((...e) => this.t(...e)), t && t(a, (...e) => this.t(...e))
                    },
                    o = t => {
                        e || t || !this.services.languageDetector || (t = []);
                        const n = Xr(t) ? t : t && t[0],
                            o = this.store.hasLanguageSomeTranslations(n) ? n : this.services.languageUtils.getBestMatchFromCodes(Xr(t) ? [t] : t);
                        o && (this.language || r(o), this.translator.language || this.translator.changeLanguage(o), this.services.languageDetector?.cacheUserLanguage?.(o)), this.loadResources(o, e => {
                            a(e, o)
                        })
                    };
                return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), n
            }
            getFixedT(e, t, n) {
                const r = (e, t, ...a) => {
                    let o;
                    o = "object" != typeof t ? this.options.overloadTranslationOptionHandler([e, t].concat(a)) : {
                        ...t
                    }, o.lng = o.lng || r.lng, o.lngs = o.lngs || r.lngs, o.ns = o.ns || r.ns, "" !== o.keyPrefix && (o.keyPrefix = o.keyPrefix || n || r.keyPrefix);
                    const i = this.options.keySeparator || ".";
                    let l;
                    return l = o.keyPrefix && Array.isArray(e) ? e.map(e => `${o.keyPrefix}${i}${e}`) : o.keyPrefix ? `${o.keyPrefix}${i}${e}` : e, this.t(l, o)
                };
                return Xr(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r
            }
            t(...e) {
                return this.translator?.translate(...e)
            }
            exists(...e) {
                return this.translator?.exists(...e)
            }
            setDefaultNamespace(e) {
                this.options.defaultNS = e
            }
            hasLoadedNamespace(e, t = {}) {
                if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                const n = t.lng || this.resolvedLanguage || this.languages[0],
                    r = !!this.options && this.options.fallbackLng,
                    a = this.languages[this.languages.length - 1];
                if ("cimode" === n.toLowerCase()) return !0;
                const o = (e, t) => {
                    const n = this.services.backendConnector.state[`${e}|${t}`];
                    return -1 === n || 0 === n || 2 === n
                };
                if (t.precheck) {
                    const e = t.precheck(this, o);
                    if (void 0 !== e) return e
                }
                return !(!this.hasResourceBundle(n, e) && this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages) && (!o(n, e) || r && !o(a, e)))
            }
            loadNamespaces(e, t) {
                const n = ea();
                return this.options.ns ? (Xr(e) && (e = [e]), e.forEach(e => {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }), this.loadResources(e => {
                    n.resolve(), t && t(e)
                }), n) : (t && t(), Promise.resolve())
            }
            loadLanguages(e, t) {
                const n = ea();
                Xr(e) && (e = [e]);
                const r = this.options.preload || [],
                    a = e.filter(e => r.indexOf(e) < 0 && this.services.languageUtils.isSupportedCode(e));
                return a.length ? (this.options.preload = r.concat(a), this.loadResources(e => {
                    n.resolve(), t && t(e)
                }), n) : (t && t(), Promise.resolve())
            }
            dir(e) {
                if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
                if (Intl.Locale) {
                    const t = new Intl.Locale(e);
                    if (t && t.getTextInfo) {
                        const e = t.getTextInfo();
                        if (e && e.direction) return e.direction
                    }
                }
                const t = this.services?.languageUtils || new za(Aa());
                return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
            }
            static createInstance(e = {}, t) {
                return new Da(e, t)
            }
            cloneInstance(e = {}, t = Ia) {
                const n = e.forkResourceStore;
                n && delete e.forkResourceStore;
                const r = {
                        ...this.options,
                        ...e,
                        isClone: !0
                    },
                    a = new Da(r);
                if (void 0 === e.debug && void 0 === e.prefix || (a.logger = a.logger.clone(e)), ["store", "services", "language"].forEach(e => {
                        a[e] = this[e]
                    }), a.services = {
                        ...this.services
                    }, a.services.utils = {
                        hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                    }, n) {
                    const e = Object.keys(this.store.data).reduce((e, t) => (e[t] = {
                        ...this.store.data[t]
                    }, e[t] = Object.keys(e[t]).reduce((n, r) => (n[r] = {
                        ...e[t][r]
                    }, n), e[t]), e), {});
                    a.store = new wa(e, r), a.services.resourceStore = a.store
                }
                return a.translator = new Sa(a.services, r), a.translator.on("*", (e, ...t) => {
                    a.emit(e, ...t)
                }), a.init(r, t), a.translator.options = r, a.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                }, a
            }
            toJSON() {
                return {
                    options: this.options,
                    store: this.store,
                    language: this.language,
                    languages: this.languages,
                    resolvedLanguage: this.resolvedLanguage
                }
            }
        }
        const Fa = Da.createInstance();
        Fa.createInstance = Da.createInstance, Fa.createInstance, Fa.dir, Fa.init, Fa.loadResources, Fa.reloadResources, Fa.use, Fa.changeLanguage, Fa.getFixedT, Fa.t, Fa.exists, Fa.setDefaultNamespace, Fa.hasLoadedNamespace, Fa.loadNamespaces, Fa.loadLanguages, i(4915), Object.create(null);
        const Ua = {},
            Va = (e, t, n, r) => {
                Wa(n) && Ua[n] || (Wa(n) && (Ua[n] = new Date), ((e, t, n, r) => {
                    const a = [n, {
                        code: t,
                        ...r || {}
                    }];
                    if (e?.services?.logger?.forward) return e.services.logger.forward(a, "warn", "react-i18next::", !0);
                    Wa(a[0]) && (a[0] = `react-i18next:: ${a[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...a) : console?.warn && console.warn(...a)
                })(e, t, n, r))
            },
            Za = (e, t) => () => {
                if (e.isInitialized) t();
                else {
                    const n = () => {
                        setTimeout(() => {
                            e.off("initialized", n)
                        }, 0), t()
                    };
                    e.on("initialized", n)
                }
            },
            Ba = (e, t, n) => {
                e.loadNamespaces(t, Za(e, n))
            },
            Ha = (e, t, n, r) => {
                if (Wa(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return Ba(e, n, r);
                n.forEach(t => {
                    e.options.ns.indexOf(t) < 0 && e.options.ns.push(t)
                }), e.loadLanguages(t, Za(e, r))
            },
            Wa = e => "string" == typeof e,
            qa = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
            Ga = {
                "&amp;": "&",
                "&#38;": "&",
                "&lt;": "<",
                "&#60;": "<",
                "&gt;": ">",
                "&#62;": ">",
                "&apos;": "'",
                "&#39;": "'",
                "&quot;": '"',
                "&#34;": '"',
                "&nbsp;": " ",
                "&#160;": " ",
                "&copy;": "Â©",
                "&#169;": "Â©",
                "&reg;": "Â®",
                "&#174;": "Â®",
                "&hellip;": "â€¦",
                "&#8230;": "â€¦",
                "&#x2F;": "/",
                "&#47;": "/"
            },
            Ka = e => Ga[e];
        let Qa, Ya = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: e => e.replace(qa, Ka)
        };
        const Ja = {
                type: "3rdParty",
                init(e) {
                    ((e = {}) => {
                        Ya = {
                            ...Ya,
                            ...e
                        }
                    })(e.options.react), (e => {
                        Qa = e
                    })(e)
                }
            },
            Xa = (0, Cr.createContext)();
        class eo {
            constructor() {
                this.usedNamespaces = {}
            }
            addUsedNamespaces(e) {
                e.forEach(e => {
                    this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
                })
            }
            getUsedNamespaces() {
                return Object.keys(this.usedNamespaces)
            }
        }
        const to = (e, t, n, r) => e.getFixedT(t, n, r),
            no = JSON.parse('{"badge":{"dismiss":"ZavÅ™Ã­t hodnocenÃ­ Google","google_rating":"HodnocenÃ­ Google","read_reviews":"PÅ™eÄtÄ›te si naÅ¡ich {{ totalReviewCount }} recenzÃ­"},"enable_js":"Pro zobrazenÃ­ recenzÃ­ prosÃ­m povolte JavaScript.","failed_to_load":"NepodaÅ™ilo se naÄÃ­st recenze.","failed_to_load2":"Zkontrolujte prosÃ­m konfiguraci widgetu a zkuste to znovu.","hello_world":"Ahoj svÄ›te!","load_more":"NaÄÃ­st dalÅ¡Ã­","loading_reviews":"NaÄÃ­tÃ¡nÃ­ recenzÃ­...","powered_by":"","review_card":{"days_ago--one":"pÅ™ed {{ count }} dnem","days_ago--few":"pÅ™ed {{ count }} dny","days_ago--other":"pÅ™ed {{ count }} dny","hours_ago--one":"pÅ™ed {{ count }} hodinou","hours_ago--few":"pÅ™ed {{ count }} hodinami","hours_ago--other":"pÅ™ed {{ count }} hodinami","just_now":"PrÃ¡vÄ› teÄ","minutes_ago--one":"pÅ™ed {{ count }} minutou","minutes_ago--few":"pÅ™ed {{ count }} minutami","minutes_ago--other":"pÅ™ed {{ count }} minutami","months_ago--one":"pÅ™ed {{ count }} mÄ›sÃ­cem","months_ago--few":"pÅ™ed {{ count }} mÄ›sÃ­ci","months_ago--other":"pÅ™ed {{ count }} mÄ›sÃ­ci","read_less":"Zobrazit mÃ©nÄ›","read_more":"Zobrazit vÃ­ce","years_ago--one":"pÅ™ed {{ count }} rokem","years_ago--few":"pÅ™ed {{ count }} lety","years_ago--other":"pÅ™ed {{ count }} lety"},"summary_bar":{"based_on":"Na zÃ¡kladÄ›","excellent":"VynikajÃ­cÃ­","fair":"UspokojivÃ©","good":"DobrÃ©","great":"SkvÄ›lÃ©","poor":"Å patnÃ©","rating":"HodnocenÃ­","reviews":"recenzÃ­","write_a_review":"Napsat recenzi"}}'),
            ro = JSON.parse('{"badge":{"dismiss":"Luk Google-bedÃ¸mmelsesbadge","google_rating":"Google-bedÃ¸mmelse","read_reviews":"LÃ¦s vores {{ totalReviewCount }} anmeldelser"},"enable_js":"AktivÃ©r JavaScript for at se anmeldelserne.","failed_to_load":"Kunne ikke indlÃ¦se anmeldelser.","failed_to_load2":"Tjek venligst din widget-konfiguration og prÃ¸v igen.","hello_world":"Hej verden!","load_more":"IndlÃ¦s mere","loading_reviews":"IndlÃ¦ser anmeldelser...","powered_by":"Drevet af","review_card":{"days_ago--one":"{{ count }} dag siden","days_ago--other":"{{ count }} dage siden","hours_ago--one":"{{ count }} time siden","hours_ago--other":"{{ count }} timer siden","just_now":"Lige nu","minutes_ago--one":"{{ count }} minut siden","minutes_ago--other":"{{ count }} minutter siden","months_ago--one":"{{ count }} mÃ¥ned siden","months_ago--other":"{{ count }} mÃ¥neder siden","read_less":"LÃ¦s mindre","read_more":"LÃ¦s mere","years_ago--one":"{{ count }} Ã¥r siden","years_ago--other":"{{ count }} Ã¥r siden"},"summary_bar":{"based_on":"Baseret pÃ¥","excellent":"Fremragende","fair":"Rimelig","good":"God","great":"Fantastisk","poor":"DÃ¥rlig","rating":"BedÃ¸mmelse","reviews":"anmeldelser","write_a_review":"Skriv en anmeldelse"}}'),
            ao = JSON.parse('{"badge":{"dismiss":"Google-Bewertungsabzeichen schlieÃŸen","google_rating":"Google-Bewertung","read_reviews":"Lesen Sie unsere {{ totalReviewCount }} Bewertungen"},"enable_js":"Bitte aktivieren Sie JavaScript, um die Bewertungen anzuzeigen.","failed_to_load":"Bewertungen konnten nicht geladen werden.","failed_to_load2":"Bitte Ã¼berprÃ¼fen Sie Ihre Widget-Konfiguration und versuchen Sie es erneut.","hello_world":"Hallo Welt!","load_more":"Mehr laden","loading_reviews":"Bewertungen werden geladen â€¦","powered_by":"Angetrieben von","review_card":{"days_ago":"Vor {{ count }} Tagen","hours_ago":"vor {{ count }} Stunden","just_now":"Soeben","minutes_ago":"vor {{ count }} Minuten","months_ago":"Vor {{ count }} Monaten","read_less":"Lese weniger","read_more":"Mehr anzeigen","years_ago":"Vor {{ count }} Jahren"},"summary_bar":{"based_on":"Bezogen auf","excellent":"Exzellent","fair":"Gerecht","good":"Gut","great":"GroÃŸartig","poor":"Arm","rating":"","reviews":"bewertungen","write_a_review":"Eine Rezension schreiben"}}'),
            oo = JSON.parse('{"badge":{"dismiss":"Dismiss Google rating badge","google_rating":"Google Rating","read_reviews":"Read our {{ totalReviewCount }} reviews"},"enable_js":"Please enable JavaScript to view the reviews.","failed_to_load":"Failed to load reviews.","failed_to_load2":"Please check your widget configuration and try again.","hello_world":"Hello, world!","load_more":"Load more","loading_reviews":"Loading reviews...","powered_by":"","review_card":{"days_ago--one":"{{ count }} day ago ","days_ago--other":"{{ count }} days ago ","hours_ago--one":"{{ count }} hour ago ","hours_ago--other":"{{ count }} hours ago ","just_now":"Just now","minutes_ago--one":"{{ count }} minute ago ","minutes_ago--other":"{{ count }} minutes ago ","months_ago--one":"{{ count }} month ago ","months_ago--other":"{{ count }} months ago ","read_less":"Read less","read_more":"Read more","years_ago--one":"{{ count }}  year ago ","years_ago--other":"{{ count }}  years ago "},"summary_bar":{"based_on":"Based on","excellent":"Excellent","fair":"Fair","good":"Good","great":"Great","poor":"Poor","rating":"Rating","reviews":"reviews","write_a_review":"Write a review"}}'),
            io = JSON.parse('{"badge":{"dismiss":"Descartar la insignia de calificaciÃ³n de Google","google_rating":"CalificaciÃ³n de Google","read_reviews":"Lea nuestras {{ totalReviewCount }} reseÃ±as"},"enable_js":"Habilite JavaScript para ver las reseÃ±as.","failed_to_load":"No se pudieron cargar las reseÃ±as.","failed_to_load2":"Verifique la configuraciÃ³n de su widget e intÃ©ntelo nuevamente.","hello_world":"Â¡Hola Mundo!","load_more":"Carga mÃ¡s","loading_reviews":"Cargando reseÃ±as...","powered_by":"","review_card":{"days_ago":"Hace {{ count }} dÃ­as","hours_ago":" Hace {{ count }} horas","just_now":"En este momento","minutes_ago":"Hace {{ count }} minutos","months_ago":"Hace {{ count }} meses","read_less":"Leer menos","read_more":"Leer mÃ¡s","years_ago":"Hace {{ count }} aÃ±os"},"summary_bar":{"based_on":"Residencia en","excellent":"Excelente","fair":"Medio","good":"Bueno","great":"Muy bueno","poor":"Malo","rating":"","reviews":"reseÃ±as","write_a_review":"Escribe una reseÃ±a"}}'),
            lo = JSON.parse('{"badge":{"dismiss":"Ignorer le badge d\'Ã©valuation Google","google_rating":"Note Google","read_reviews":"Lisez nos {{ totalReviewCount }} avis"},"enable_js":"Veuillez activer JavaScript pour afficher les avis.","failed_to_load":"Ã‰chec du chargement des avis.","failed_to_load2":"Veuillez vÃ©rifier la configuration de votre widget et rÃ©essayer.","hello_world":"Bonjour le monde!","load_more":"Charger plus","loading_reviews":"Chargement des avis...","powered_by":"PropulsÃ© par","review_card":{"days_ago":"il y a {{ count }} Â jours","hours_ago":" Il y a {{ count }} Â heures","just_now":"Tout Ã  l\' heure","minutes_ago":"Il y a {{ count }} minutes","months_ago":"Il y a {{ count }} mois","read_less":"Lire moins","read_more":"En savoir plus","years_ago":"Il y a {{ count }} ans"},"summary_bar":{"based_on":"BasÃ© sur","excellent":"Excellent","fair":"Moyenne","good":"Bien","great":"Super","poor":"Mauvais","rating":"","reviews":"avis","write_a_review":"Ã‰crire une critique"}}'),
            so = JSON.parse('{"badge":{"dismiss":"Ignora il badge di valutazione di Google","google_rating":"Valutazione di Google","read_reviews":"Leggi le nostre {{ totalReviewCount }} recensioni"},"enable_js":"Abilita JavaScript per visualizzare le recensioni.","failed_to_load":"Impossibile caricare le recensioni.","failed_to_load2":"Controlla la configurazione del widget e riprova.","hello_world":"Ciao mondo!","load_more":"Carica di piÃ¹","loading_reviews":"Caricamento recensioni...","powered_by":"Offerto da","review_card":{"days_ago":"{{ count }} giorni fa","hours_ago":"{{ count }} ore fa","just_now":"Proprio adesso","minutes_ago":"{{ count }} minuti fa","months_ago":"{{ count }} mesi fa","read_less":"Leggi di meno","read_more":"Per saperne di piÃ¹","years_ago":"{{ count }} anni fa "},"summary_bar":{"based_on":"Basato su","excellent":"Eccellente","fair":"Giusto","good":"Bene","great":"Grande","poor":"Povero","rating":"","reviews":"recensioni","write_a_review":"Scrivere una recensione"}}'),
            uo = JSON.parse('{"badge":{"dismiss":"OdrzuÄ‡ plakietkÄ™ oceny Google","google_rating":"Ocena Google","read_reviews":"Przeczytaj nasze {{ totalReviewCount }} recenzje"},"enable_js":"Aby zobaczyÄ‡ recenzje, wÅ‚Ä…cz JavaScript.","failed_to_load":"Nie udaÅ‚o siÄ™ zaÅ‚adowaÄ‡ recenzji.","failed_to_load2":"SprawdÅº konfiguracjÄ™ widÅ¼etu i sprÃ³buj ponownie.","hello_world":"Witaj Å›wiecie!","load_more":"ZaÅ‚aduj wiÄ™cej","loading_reviews":"Åadowanie recenzji...","powered_by":"ObsÅ‚ugiwane przez","review_card":{"days_ago":"{{ count }} dni temu","hours_ago":"{{ count }} godzin temu","just_now":"WÅ‚aÅ›nie","minutes_ago":"{{ count }} minut temu","months_ago":"{{ count }} miesiÄ™cy temu","read_less":"Mniej czytaÄ‡","read_more":"Czytaj wiÄ™cej","years_ago":"{{ count }} lat temu "},"summary_bar":{"based_on":"Oparte na","excellent":"DoskonaÅ‚y","fair":"Sprawiedliwy","good":"Dobry","great":"Åšwietnie","poor":"SÅ‚aby","rating":"","reviews":"opinie","write_a_review":"NapisaÄ‡ recenzjÄ™"}}'),
            co = JSON.parse('{"badge":{"dismiss":"Ignorar selo de avaliaÃ§Ã£o do Google","google_rating":"AvaliaÃ§Ã£o do Google","read_reviews":"{{ totalReviewCount }} avaliaÃ§Ãµes"},"enable_js":"Ative o JavaScript para visualizar os comentÃ¡rios.","failed_to_load":"Falha ao carregar avaliaÃ§Ãµes.","failed_to_load2":"Verifique a configuraÃ§Ã£o do seu widget e tente novamente.","hello_world":"OlÃ¡, mundo!","load_more":"Carregar mais","loading_reviews":"Carregando avaliaÃ§Ãµes...","powered_by":"Disponibilizado pelo","review_card":{"days_ago--one":"{{ count }} dia atrÃ¡s","days_ago--other":"{{ count }} dias atrÃ¡s","hours_ago--one":"{{ count }} hora atrÃ¡s","hours_ago--other":"{{ count }} horas atrÃ¡s","just_now":"Agora mesmo","minutes_ago--one":"{{ count }} minuto atrÃ¡s","minutes_ago--other":"{{ count }} minutos atrÃ¡s","months_ago--one":"{{ count }} mÃªs atrÃ¡s ","months_ago--other":"{{ count }} meses atrÃ¡s ","read_less":"Leia menos","read_more":"Leia mais","years_ago--one":"{{ count }} ano atrÃ¡s ","years_ago--other":"{{ count }} anos atrÃ¡s "},"summary_bar":{"based_on":"Com base em","excellent":"Excelente","fair":"MÃ©dia","good":"Bom","great":"Ã“timo","poor":"Fraco","rating":"","reviews":"avaliaÃ§Ãµes","write_a_review":"Escreva uma avaliaÃ§Ã£o"}}'),
            fo = JSON.parse('{"badge":{"dismiss":"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð·Ð½Ð°Ñ‡Ð¾Ðº Ñ€ÐµÐ¹Ñ‚Ð¸Ð½Ð³Ð° Google","google_rating":"Ð ÐµÐ¹Ñ‚Ð¸Ð½Ð³ Google","read_reviews":"ÐŸÑ€Ð¾Ñ‡Ñ‚Ð¸Ñ‚Ðµ Ð½Ð°ÑˆÐ¸ {{ totalReviewCount }} Ð¾Ð±Ð·Ð¾Ñ€Ñ‹"},"enable_js":"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²ÐºÐ»ÑŽÑ‡Ð¸Ñ‚Ðµ JavaScript, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ð¾Ñ‚Ð·Ñ‹Ð²Ñ‹.","failed_to_load":"ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð¾Ñ‚Ð·Ñ‹Ð²Ñ‹.","failed_to_load2":"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ ÐºÐ¾Ð½Ñ„Ð¸Ð³ÑƒÑ€Ð°Ñ†Ð¸ÑŽ Ð²Ð¸Ð´Ð¶ÐµÑ‚Ð° Ð¸ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.","hello_world":"ÐŸÑ€Ð¸Ð²ÐµÑ‚, Ð¼Ð¸Ñ€!","load_more":"Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸ Ð±Ð¾Ð»ÑŒÑˆÐµ","loading_reviews":"Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð¾Ñ‚Ð·Ñ‹Ð²Ð¾Ð²...","powered_by":"ÐŸÐ¸Ñ‚Ð°Ñ‚ÑŒÑÑ Ð¾Ñ‚","review_card":{"days_ago":"{{ count }} Ð´Ð½ÐµÐ¹ Ð½Ð°Ð·Ð°Ð´","hours_ago":"{{ count }} Â Ñ‡Ð°ÑÐ° Ð½Ð°Ð·Ð°Ð´","just_now":"ÐŸÑ€ÑÐ¼Ð¾ ÑÐµÐ¹Ñ‡Ð°Ñ","minutes_ago":"{{ count }} Ð¼Ð¸Ð½ÑƒÑ‚ Ð½Ð°Ð·Ð°Ð´","months_ago":"{{ count }} Ð¼ÐµÑÑÑ†ÐµÐ² Ð½Ð°Ð·Ð°Ð´","read_less":"Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð¼ÐµÐ½ÑŒÑˆÐµ","read_more":"Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð´Ð°Ð»ÐµÐµ","years_ago":"{{ count }} Ð»ÐµÑ‚ Ð½Ð°Ð·Ð°Ð´ "},"summary_bar":{"based_on":"ÐÐ° Ð¾ÑÐ½Ð¾Ð²Ðµ","excellent":"ÐžÑ‚Ð»Ð¸Ñ‡Ð½Ñ‹Ð¹","fair":"Ð¡Ð¿Ñ€Ð°Ð²ÐµÐ´Ð»Ð¸Ð²Ñ‹Ð¹","good":"Ð¥Ð¾Ñ€Ð¾ÑˆÐ¸Ð¹","great":"Ð‘Ð¾Ð»ÑŒÑˆÐ¾Ð¹","poor":"Ð‘ÐµÐ´Ð½Ñ‹Ð¹","rating":"","reviews":"ÐžÑ‚Ð·Ñ‹Ð²Ñ‹","write_a_review":"ÐÐ°Ð¿Ð¸ÑÐ°Ñ‚ÑŒ Ð¾Ð±Ð·Ð¾Ñ€"}}');
        var po = function(e) {
                return Fa.use(Ja).init({
                    resources: {
                        en: {
                            featurable: oo
                        },
                        "pt-BR": {
                            featurable: co
                        },
                        fr: {
                            featurable: lo
                        },
                        es: {
                            featurable: io
                        },
                        de: {
                            featurable: ao
                        },
                        pl: {
                            featurable: uo
                        },
                        ru: {
                            featurable: fo
                        },
                        it: {
                            featurable: so
                        },
                        cs: {
                            featurable: no
                        },
                        da: {
                            featurable: ro
                        }
                    },
                    interpolation: {
                        escapeValue: !1
                    },
                    pluralSeparator: "--"
                }), ((e, t = {}) => {
                    const {
                        i18n: n
                    } = t, {
                        i18n: r,
                        defaultNS: a
                    } = (0, Cr.useContext)(Xa) || {}, o = n || r || Qa;
                    if (o && !o.reportNamespaces && (o.reportNamespaces = new eo), !o) {
                        Va(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
                        const e = (e, t) => {
                                return Wa(t) ? t : "object" == typeof(n = t) && null !== n && Wa(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e;
                                var n
                            },
                            t = [e, {}, !1];
                        return t.t = e, t.i18n = {}, t.ready = !1, t
                    }
                    o.options.react?.wait && Va(o, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                    const i = {
                            ...Ya,
                            ...o.options.react,
                            ...t
                        },
                        {
                            useSuspense: l,
                            keyPrefix: s
                        } = i;
                    let u = e || a || o.options?.defaultNS;
                    u = Wa(u) ? [u] : u || ["translation"], o.reportNamespaces.addUsedNamespaces?.(u);
                    const c = (o.isInitialized || o.initializedStoreOnce) && u.every(e => ((e, t, n = {}) => t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
                            lng: n.lng,
                            precheck: (t, r) => {
                                if (n.bindI18n?.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1
                            }
                        }) : (Va(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
                            languages: t.languages
                        }), !0))(e, o, i)),
                        d = ((e, t, n, r) => (0, Cr.useCallback)(to(e, t, n, r), [e, t, n, r]))(o, t.lng || null, "fallback" === i.nsMode ? u : u[0], s),
                        f = () => d,
                        p = () => to(o, t.lng || null, "fallback" === i.nsMode ? u : u[0], s),
                        [h, m] = (0, Cr.useState)(f);
                    let g = u.join();
                    t.lng && (g = `${t.lng}${g}`);
                    const v = ((e, t) => {
                            const n = (0, Cr.useRef)();
                            return (0, Cr.useEffect)(() => {
                                n.current = e
                            }, [e, t]), n.current
                        })(g),
                        y = (0, Cr.useRef)(!0);
                    (0, Cr.useEffect)(() => {
                        const {
                            bindI18n: e,
                            bindI18nStore: n
                        } = i;
                        y.current = !0, c || l || (t.lng ? Ha(o, t.lng, u, () => {
                            y.current && m(p)
                        }) : Ba(o, u, () => {
                            y.current && m(p)
                        })), c && v && v !== g && y.current && m(p);
                        const r = () => {
                            y.current && m(p)
                        };
                        return e && o?.on(e, r), n && o?.store.on(n, r), () => {
                            y.current = !1, o && e?.split(" ").forEach(e => o.off(e, r)), n && o && n.split(" ").forEach(e => o.store.off(e, r))
                        }
                    }, [o, g]), (0, Cr.useEffect)(() => {
                        y.current && c && m(f)
                    }, [o, s, c]);
                    const b = [h, o, c];
                    if (b.t = h, b.i18n = o, b.ready = c, c) return b;
                    if (!c && !l) return b;
                    throw new Promise(e => {
                        t.lng ? Ha(o, t.lng, u, () => e()) : Ba(o, u, () => e())
                    })
                })("featurable", {
                    lng: e
                })
            },
            ho = function(t) {
                var n = t.size,
                    r = void 0 === n ? "md" : n,
                    a = t.iconOnly,
                    o = void 0 !== a && a,
                    i = t.color,
                    l = void 0 === i ? "black" : i;
                return (0, e.jsx)(Cr.Fragment, {
                    children: o ? (0, e.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 106.81 106.14",
                        className: Zr("xs" === r && "h-5", "sm" === r && "h-6", "md" === r && "h-7", "lg" === r && "h-8"),
                        children: (0, e.jsx)("g", {
                            children: (0, e.jsxs)("g", {
                                children: [(0, e.jsx)("path", {
                                    fill: "#1762e5",
                                    d: "M53.8,0C21.59,.02-3.81,28.37,1.62,60.05c2.03,11.82,4.28,22.72-1.05,34.08-1.64,3.49,.33,5.28,4.49,4.95,4.07-.33,8.13-.92,12.17-1.54,4.16-.64,7.84-.19,11.66,2.13,7.81,4.74,16.64,6.58,25.69,6.47,29.13-.34,52.43-24.45,52.22-53.74C106.61,23.43,82.88-.02,53.8,0Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M64.11,88.26l-14.25-11.33c-.95-.75-2.21-.99-3.37-.64l-17.41,5.31c-2.92,.89-5.6-1.95-4.53-4.81l6.37-17.05c.42-1.14,.26-2.41-.43-3.4l-10.43-14.91c-1.75-2.5,.13-5.93,3.18-5.79l18.18,.79c1.21,.05,2.37-.49,3.1-1.46l10.96-14.53c1.84-2.44,5.68-1.71,6.49,1.23l4.87,17.54c.32,1.17,1.2,2.1,2.35,2.5l17.21,5.93c2.89,1,3.38,4.87,.83,6.56l-15.18,10.05c-1.01,.67-1.63,1.79-1.65,3.01l-.32,18.2c-.05,3.05-3.59,4.72-5.98,2.82Z"
                                })]
                            })
                        })
                    }) : "black" === l ? (0, e.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 749.55 133.6",
                        className: Zr("xs" === r && "h-4", "sm" === r && "h-5", "md" === r && "h-7", "lg" === r && "h-8"),
                        children: (0, e.jsxs)("g", {
                            children: [(0, e.jsxs)("g", {
                                children: [(0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M140.82,104.78V15.31h59.8v14.41h-43.35v24.74h37.95v14.53h-37.95v35.79h-16.45Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M238.21,106.22c-6.72,0-12.63-1.52-17.71-4.56-5.08-3.04-9.03-7.16-11.83-12.37-2.8-5.2-4.2-10.97-4.2-17.29s1.44-12.39,4.32-17.47c2.88-5.08,6.76-9.11,11.65-12.07,4.88-2.96,10.41-4.44,16.57-4.44,5.12,0,9.63,.84,13.51,2.52,3.88,1.68,7.18,4,9.91,6.96,2.72,2.96,4.8,6.35,6.24,10.15,1.44,3.8,2.16,7.91,2.16,12.31,0,1.2-.06,2.38-.18,3.54-.12,1.16-.34,2.22-.66,3.18h-50.44v-12.13h41.55l-7.57,5.64c.8-3.68,.66-6.96-.42-9.85-1.08-2.88-2.84-5.16-5.28-6.84-2.44-1.68-5.39-2.52-8.83-2.52s-6.21,.84-8.77,2.52c-2.56,1.68-4.5,4.08-5.82,7.21-1.32,3.12-1.82,6.93-1.5,11.41-.32,4,.22,7.55,1.62,10.63,1.4,3.08,3.48,5.46,6.25,7.15s5.94,2.52,9.55,2.52,6.66-.76,9.19-2.28c2.52-1.52,4.5-3.56,5.95-6.12l12.73,6.24c-1.28,3.12-3.28,5.88-6,8.29-2.72,2.4-5.96,4.28-9.73,5.64-3.76,1.36-7.85,2.04-12.25,2.04Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M298.98,106.22c-4.56,0-8.55-.76-11.95-2.28-3.4-1.52-6.03-3.7-7.87-6.54-1.84-2.84-2.76-6.14-2.76-9.91s.82-6.82,2.46-9.67c1.64-2.84,4.14-5.22,7.51-7.14,3.36-1.92,7.6-3.28,12.73-4.08l21.26-3.48v12.01l-18.25,3.24c-3.12,.56-5.44,1.54-6.96,2.94-1.52,1.4-2.28,3.26-2.28,5.58s.86,4.02,2.58,5.34c1.72,1.32,3.86,1.98,6.42,1.98,3.28,0,6.18-.7,8.71-2.1,2.52-1.4,4.46-3.34,5.82-5.82,1.36-2.48,2.04-5.16,2.04-8.05v-16.93c0-2.8-1.08-5.14-3.24-7.03-2.16-1.88-5.04-2.82-8.65-2.82-3.36,0-6.35,.92-8.95,2.76-2.6,1.84-4.5,4.2-5.71,7.09l-12.85-6.24c1.28-3.44,3.3-6.43,6.06-8.95s6.02-4.5,9.79-5.94c3.76-1.44,7.85-2.16,12.25-2.16,5.36,0,10.09,.98,14.17,2.94,4.08,1.96,7.27,4.71,9.55,8.23,2.28,3.52,3.42,7.57,3.42,12.13v43.47h-14.89v-11.17l3.36-.12c-1.68,2.72-3.7,5.04-6.06,6.96-2.36,1.92-5,3.36-7.93,4.32-2.92,.96-6.19,1.44-9.79,1.44Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M376.07,105.5c-7.37,0-13.09-2.02-17.17-6.06s-6.12-9.75-6.12-17.11v-28.82h-11.17v-14.05h1.2c3.2,0,5.66-.84,7.39-2.52,1.72-1.68,2.58-4.12,2.58-7.33v-5.04h15.85v14.89h15.01v14.05h-15.01v27.98c0,2.16,.38,4,1.14,5.52,.76,1.52,1.96,2.68,3.6,3.48,1.64,.8,3.74,1.2,6.3,1.2,.56,0,1.22-.04,1.98-.12,.76-.08,1.5-.16,2.22-.24v13.45c-1.12,.16-2.4,.32-3.84,.48-1.44,.16-2.76,.24-3.96,.24Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M417.87,106.22c-5.12,0-9.53-1.12-13.21-3.36-3.68-2.24-6.53-5.36-8.53-9.37-2-4-3-8.69-3-14.05V39.45h15.85v38.67c0,2.72,.54,5.1,1.62,7.14,1.08,2.04,2.64,3.64,4.68,4.8,2.04,1.16,4.34,1.74,6.91,1.74s4.84-.58,6.84-1.74c2-1.16,3.56-2.78,4.68-4.86,1.12-2.08,1.68-4.56,1.68-7.45V39.45h15.73V104.78h-14.89v-12.85l1.2,2.28c-1.52,4-4,7.01-7.45,9.01-3.44,2-7.49,3-12.13,3Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M464.34,104.78V39.45h14.89v14.53l-1.2-2.16c1.52-4.88,3.9-8.29,7.15-10.21,3.24-1.92,7.15-2.88,11.71-2.88h3.84v14.05h-5.64c-4.48,0-8.09,1.36-10.81,4.08-2.72,2.72-4.08,6.57-4.08,11.53v36.39h-15.85Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M527.86,106.22c-4.56,0-8.55-.76-11.95-2.28-3.4-1.52-6.03-3.7-7.87-6.54-1.84-2.84-2.76-6.14-2.76-9.91s.82-6.82,2.46-9.67c1.64-2.84,4.14-5.22,7.51-7.14,3.36-1.92,7.6-3.28,12.73-4.08l21.26-3.48v12.01l-18.25,3.24c-3.12,.56-5.45,1.54-6.97,2.94-1.52,1.4-2.28,3.26-2.28,5.58s.86,4.02,2.58,5.34c1.72,1.32,3.86,1.98,6.42,1.98,3.28,0,6.18-.7,8.71-2.1,2.52-1.4,4.46-3.34,5.82-5.82,1.36-2.48,2.04-5.16,2.04-8.05v-16.93c0-2.8-1.08-5.14-3.24-7.03-2.16-1.88-5.04-2.82-8.65-2.82-3.36,0-6.35,.92-8.95,2.76-2.6,1.84-4.5,4.2-5.7,7.09l-12.85-6.24c1.28-3.44,3.3-6.43,6.06-8.95,2.76-2.52,6.02-4.5,9.79-5.94,3.76-1.44,7.85-2.16,12.25-2.16,5.36,0,10.09,.98,14.17,2.94,4.08,1.96,7.27,4.71,9.55,8.23,2.28,3.52,3.42,7.57,3.42,12.13v43.47h-14.89v-11.17l3.36-.12c-1.68,2.72-3.7,5.04-6.06,6.96-2.36,1.92-5,3.36-7.93,4.32-2.92,.96-6.18,1.44-9.79,1.44Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M612.04,106.22c-4.72,0-9.07-.92-13.03-2.76s-7.11-4.56-9.43-8.17l1.56-3.12v12.61h-14.89V13.87h15.85V52.42l-2.4-3.24c2.24-3.52,5.28-6.26,9.13-8.23,3.84-1.96,8.29-2.94,13.33-2.94,6.16,0,11.73,1.52,16.69,4.56,4.96,3.04,8.91,7.13,11.83,12.25,2.92,5.12,4.38,10.89,4.38,17.29s-1.44,12.09-4.32,17.29c-2.88,5.21-6.81,9.31-11.77,12.31-4.96,3-10.61,4.5-16.93,4.5Zm-1.8-14.41c3.6,0,6.79-.84,9.55-2.52,2.76-1.68,4.94-4,6.54-6.96,1.6-2.96,2.4-6.37,2.4-10.21s-.8-7.12-2.4-10.09c-1.6-2.96-3.78-5.28-6.54-6.96-2.76-1.68-5.94-2.52-9.55-2.52s-6.54,.84-9.31,2.52c-2.76,1.68-4.92,4-6.49,6.96-1.56,2.96-2.34,6.33-2.34,10.09s.78,7.25,2.34,10.21c1.56,2.96,3.72,5.28,6.49,6.96s5.86,2.52,9.31,2.52Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M655.64,104.78V13.87h15.85V104.78h-15.85Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#07101c",
                                    d: "M715.68,106.22c-6.73,0-12.63-1.52-17.71-4.56-5.09-3.04-9.03-7.16-11.83-12.37-2.8-5.2-4.2-10.97-4.2-17.29s1.44-12.39,4.32-17.47c2.88-5.08,6.76-9.11,11.65-12.07,4.88-2.96,10.41-4.44,16.57-4.44,5.12,0,9.63,.84,13.51,2.52,3.88,1.68,7.18,4,9.91,6.96,2.72,2.96,4.8,6.35,6.25,10.15s2.16,7.91,2.16,12.31c0,1.2-.06,2.38-.18,3.54-.12,1.16-.34,2.22-.66,3.18h-50.44v-12.13h41.55l-7.57,5.64c.8-3.68,.66-6.96-.42-9.85-1.08-2.88-2.84-5.16-5.28-6.84-2.44-1.68-5.38-2.52-8.83-2.52s-6.21,.84-8.77,2.52c-2.56,1.68-4.5,4.08-5.82,7.21s-1.82,6.93-1.5,11.41c-.32,4,.22,7.55,1.62,10.63,1.4,3.08,3.48,5.46,6.25,7.15,2.76,1.68,5.94,2.52,9.55,2.52s6.67-.76,9.19-2.28c2.52-1.52,4.5-3.56,5.94-6.12l12.73,6.24c-1.28,3.12-3.28,5.88-6,8.29-2.72,2.4-5.97,4.28-9.73,5.64-3.76,1.36-7.85,2.04-12.25,2.04Z"
                                })]
                            }), (0, e.jsxs)("g", {
                                children: [(0, e.jsx)("path", {
                                    fill: "#1762e5",
                                    d: "M53.8,6.98C21.59,7-3.81,35.35,1.62,67.02c2.03,11.82,4.28,22.72-1.05,34.08-1.64,3.49,.33,5.28,4.49,4.95,4.07-.33,8.13-.92,12.17-1.54,4.16-.64,7.84-.19,11.66,2.13,7.81,4.74,16.64,6.58,25.69,6.47,29.13-.34,52.43-24.45,52.22-53.74-.21-28.97-23.93-52.41-53.02-52.39Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M64.11,95.24l-14.25-11.33c-.95-.75-2.21-.99-3.37-.64l-17.41,5.31c-2.92,.89-5.6-1.95-4.53-4.81l6.37-17.05c.42-1.14,.26-2.41-.43-3.4l-10.43-14.91c-1.75-2.5,.13-5.93,3.18-5.79l18.18,.79c1.21,.05,2.37-.49,3.1-1.46l10.96-14.53c1.84-2.44,5.68-1.71,6.49,1.23l4.87,17.54c.32,1.17,1.2,2.1,2.35,2.5l17.21,5.93c2.89,1,3.38,4.87,.83,6.56l-15.18,10.05c-1.01,.67-1.63,1.79-1.65,3.01l-.32,18.2c-.05,3.05-3.59,4.72-5.98,2.82Z"
                                })]
                            })]
                        })
                    }) : (0, e.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 749.55 133.6",
                        className: Zr("xs" === r && "h-4", "sm" === r && "h-5", "md" === r && "h-7", "lg" === r && "h-8"),
                        children: (0, e.jsxs)("g", {
                            children: [(0, e.jsxs)("g", {
                                children: [(0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M140.82,104.78V15.31h59.8v14.41h-43.35v24.74h37.95v14.53h-37.95v35.79h-16.45Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M238.21,106.22c-6.72,0-12.63-1.52-17.71-4.56-5.08-3.04-9.03-7.16-11.83-12.37-2.8-5.2-4.2-10.97-4.2-17.29s1.44-12.39,4.32-17.47c2.88-5.08,6.76-9.11,11.65-12.07,4.88-2.96,10.41-4.44,16.57-4.44,5.12,0,9.63,.84,13.51,2.52,3.88,1.68,7.18,4,9.91,6.96,2.72,2.96,4.8,6.35,6.24,10.15,1.44,3.8,2.16,7.91,2.16,12.31,0,1.2-.06,2.38-.18,3.54-.12,1.16-.34,2.22-.66,3.18h-50.44v-12.13h41.55l-7.57,5.64c.8-3.68,.66-6.96-.42-9.85-1.08-2.88-2.84-5.16-5.28-6.84-2.44-1.68-5.39-2.52-8.83-2.52s-6.21,.84-8.77,2.52c-2.56,1.68-4.5,4.08-5.82,7.21-1.32,3.12-1.82,6.93-1.5,11.41-.32,4,.22,7.55,1.62,10.63,1.4,3.08,3.48,5.46,6.25,7.15s5.94,2.52,9.55,2.52,6.66-.76,9.19-2.28c2.52-1.52,4.5-3.56,5.95-6.12l12.73,6.24c-1.28,3.12-3.28,5.88-6,8.29-2.72,2.4-5.96,4.28-9.73,5.64-3.76,1.36-7.85,2.04-12.25,2.04Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M298.98,106.22c-4.56,0-8.55-.76-11.95-2.28-3.4-1.52-6.03-3.7-7.87-6.54-1.84-2.84-2.76-6.14-2.76-9.91s.82-6.82,2.46-9.67c1.64-2.84,4.14-5.22,7.51-7.14,3.36-1.92,7.6-3.28,12.73-4.08l21.26-3.48v12.01l-18.25,3.24c-3.12,.56-5.44,1.54-6.96,2.94-1.52,1.4-2.28,3.26-2.28,5.58s.86,4.02,2.58,5.34c1.72,1.32,3.86,1.98,6.42,1.98,3.28,0,6.18-.7,8.71-2.1,2.52-1.4,4.46-3.34,5.82-5.82,1.36-2.48,2.04-5.16,2.04-8.05v-16.93c0-2.8-1.08-5.14-3.24-7.03-2.16-1.88-5.04-2.82-8.65-2.82-3.36,0-6.35,.92-8.95,2.76-2.6,1.84-4.5,4.2-5.71,7.09l-12.85-6.24c1.28-3.44,3.3-6.43,6.06-8.95s6.02-4.5,9.79-5.94c3.76-1.44,7.85-2.16,12.25-2.16,5.36,0,10.09,.98,14.17,2.94,4.08,1.96,7.27,4.71,9.55,8.23,2.28,3.52,3.42,7.57,3.42,12.13v43.47h-14.89v-11.17l3.36-.12c-1.68,2.72-3.7,5.04-6.06,6.96-2.36,1.92-5,3.36-7.93,4.32-2.92,.96-6.19,1.44-9.79,1.44Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M376.07,105.5c-7.37,0-13.09-2.02-17.17-6.06s-6.12-9.75-6.12-17.11v-28.82h-11.17v-14.05h1.2c3.2,0,5.66-.84,7.39-2.52,1.72-1.68,2.58-4.12,2.58-7.33v-5.04h15.85v14.89h15.01v14.05h-15.01v27.98c0,2.16,.38,4,1.14,5.52,.76,1.52,1.96,2.68,3.6,3.48,1.64,.8,3.74,1.2,6.3,1.2,.56,0,1.22-.04,1.98-.12,.76-.08,1.5-.16,2.22-.24v13.45c-1.12,.16-2.4,.32-3.84,.48-1.44,.16-2.76,.24-3.96,.24Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M417.87,106.22c-5.12,0-9.53-1.12-13.21-3.36-3.68-2.24-6.53-5.36-8.53-9.37-2-4-3-8.69-3-14.05V39.45h15.85v38.67c0,2.72,.54,5.1,1.62,7.14,1.08,2.04,2.64,3.64,4.68,4.8,2.04,1.16,4.34,1.74,6.91,1.74s4.84-.58,6.84-1.74c2-1.16,3.56-2.78,4.68-4.86,1.12-2.08,1.68-4.56,1.68-7.45V39.45h15.73V104.78h-14.89v-12.85l1.2,2.28c-1.52,4-4,7.01-7.45,9.01-3.44,2-7.49,3-12.13,3Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M464.34,104.78V39.45h14.89v14.53l-1.2-2.16c1.52-4.88,3.9-8.29,7.15-10.21,3.24-1.92,7.15-2.88,11.71-2.88h3.84v14.05h-5.64c-4.48,0-8.09,1.36-10.81,4.08-2.72,2.72-4.08,6.57-4.08,11.53v36.39h-15.85Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M527.86,106.22c-4.56,0-8.55-.76-11.95-2.28-3.4-1.52-6.03-3.7-7.87-6.54-1.84-2.84-2.76-6.14-2.76-9.91s.82-6.82,2.46-9.67c1.64-2.84,4.14-5.22,7.51-7.14,3.36-1.92,7.6-3.28,12.73-4.08l21.26-3.48v12.01l-18.25,3.24c-3.12,.56-5.45,1.54-6.97,2.94-1.52,1.4-2.28,3.26-2.28,5.58s.86,4.02,2.58,5.34c1.72,1.32,3.86,1.98,6.42,1.98,3.28,0,6.18-.7,8.71-2.1,2.52-1.4,4.46-3.34,5.82-5.82,1.36-2.48,2.04-5.16,2.04-8.05v-16.93c0-2.8-1.08-5.14-3.24-7.03-2.16-1.88-5.04-2.82-8.65-2.82-3.36,0-6.35,.92-8.95,2.76-2.6,1.84-4.5,4.2-5.7,7.09l-12.85-6.24c1.28-3.44,3.3-6.43,6.06-8.95,2.76-2.52,6.02-4.5,9.79-5.94,3.76-1.44,7.85-2.16,12.25-2.16,5.36,0,10.09,.98,14.17,2.94,4.08,1.96,7.27,4.71,9.55,8.23,2.28,3.52,3.42,7.57,3.42,12.13v43.47h-14.89v-11.17l3.36-.12c-1.68,2.72-3.7,5.04-6.06,6.96-2.36,1.92-5,3.36-7.93,4.32-2.92,.96-6.18,1.44-9.79,1.44Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M612.04,106.22c-4.72,0-9.07-.92-13.03-2.76s-7.11-4.56-9.43-8.17l1.56-3.12v12.61h-14.89V13.87h15.85V52.42l-2.4-3.24c2.24-3.52,5.28-6.26,9.13-8.23,3.84-1.96,8.29-2.94,13.33-2.94,6.16,0,11.73,1.52,16.69,4.56,4.96,3.04,8.91,7.13,11.83,12.25,2.92,5.12,4.38,10.89,4.38,17.29s-1.44,12.09-4.32,17.29c-2.88,5.21-6.81,9.31-11.77,12.31-4.96,3-10.61,4.5-16.93,4.5Zm-1.8-14.41c3.6,0,6.79-.84,9.55-2.52,2.76-1.68,4.94-4,6.54-6.96,1.6-2.96,2.4-6.37,2.4-10.21s-.8-7.12-2.4-10.09c-1.6-2.96-3.78-5.28-6.54-6.96-2.76-1.68-5.94-2.52-9.55-2.52s-6.54,.84-9.31,2.52c-2.76,1.68-4.92,4-6.49,6.96-1.56,2.96-2.34,6.33-2.34,10.09s.78,7.25,2.34,10.21c1.56,2.96,3.72,5.28,6.49,6.96s5.86,2.52,9.31,2.52Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M655.64,104.78V13.87h15.85V104.78h-15.85Z"
                                }), (0, e.jsx)("path", {
                                    fill: "#ffffff",
                                    d: "M715.68,106.22c-6.73,0-12.63-1.52-17.71-4.56-5.09-3.04-9.03-7.16-11.83-12.37-2.8-5.2-4.2-10.97-4.2-17.29s1.44-12.39,4.32-17.47c2.88-5.08,6.76-9.11,11.65-12.07,4.88-2.96,10.41-4.44,16.57-4.44,5.12,0,9.63,.84,13.51,2.52,3.88,1.68,7.18,4,9.91,6.96,2.72,2.96,4.8,6.35,6.25,10.15s2.16,7.91,2.16,12.31c0,1.2-.06,2.38-.18,3.54-.12,1.16-.34,2.22-.66,3.18h-50.44v-12.13h41.55l-7.57,5.64c.8-3.68,.66-6.96-.42-9.85-1.08-2.88-2.84-5.16-5.28-6.84-2.44-1.68-5.38-2.52-8.83-2.52s-6.21,.84-8.77,2.52c-2.56,1.68-4.5,4.08-5.82,7.21s-1.82,6.93-1.5,11.41c-.32,4,.22,7.55,1.62,10.63,1.4,3.08,3.48,5.46,6.25,7.15,2.76,1.68,5.94,2.52,9.55,2.52s6.67-.76,9.19-2.28c2.52-1.52,4.5-3.56,5.94-6.12l12.73,6.24c-1.28,3.12-3.28,5.88-6,8.29-2.72,2.4-5.97,4.28-9.73,5.64-3.76,1.36-7.85,2.04-12.25,2.04Z"
                                })]
                            }), (0, e.jsx)("path", {
                                fill: "#1762e5",
                                d: "M53.8,6.98C21.59,7-3.81,35.35,1.62,67.02c2.03,11.82,4.28,22.72-1.05,34.08-1.64,3.49,.33,5.28,4.49,4.95,4.07-.33,8.13-.92,12.17-1.54,4.16-.64,7.84-.19,11.66,2.13,7.81,4.74,16.64,6.58,25.69,6.47,29.13-.34,52.43-24.45,52.22-53.74-.21-28.97-23.93-52.41-53.02-52.39Z"
                            }), (0, e.jsx)("path", {
                                fill: "#ffffff",
                                d: "M64.11,95.24l-14.25-11.33c-.95-.75-2.21-.99-3.37-.64l-17.41,5.31c-2.92,.89-5.6-1.95-4.53-4.81l6.37-17.05c.42-1.14,.26-2.41-.43-3.4l-10.43-14.91c-1.75-2.5,.13-5.93,3.18-5.79l18.18,.79c1.21,.05,2.37-.49,3.1-1.46l10.96-14.53c1.84-2.44,5.68-1.71,6.49,1.23l4.87,17.54c.32,1.17,1.2,2.1,2.35,2.5l17.21,5.93c2.89,1,3.38,4.87,.83,6.56l-15.18,10.05c-1.01,.67-1.63,1.79-1.65,3.01l-.32,18.2c-.05,3.05-3.59,4.72-5.98,2.82Z"
                            })]
                        })
                    })
                })
            },
            mo = function(t) {
                var n = t.inline,
                    r = t.theme,
                    a = void 0 === r ? "light" : r,
                    o = t.widgetId,
                    i = t.languageCode,
                    l = void 0 === i ? "en" : i,
                    s = t.previewMode,
                    u = t.previewModeBrandingAction,
                    c = t.size,
                    d = void 0 === c ? "md" : c,
                    f = po(l).t,
                    p = "".concat(o);
                return u && s ? (0, e.jsxs)("button", {
                    onClick: u,
                    className: Zr("no-underline border border-solid rounded-full  px-3 py-1 transition-all duration-200", n ? "flex items-center space-x-1" : "", "light" === a ? "text-gray-950 bg-white hover:bg-gray-100 border-gray-200" : "text-white bg-gray-900 hover:bg-gray-800 border-gray-700"),
                    children: [(0, e.jsx)("div", {
                        className: Zr("hidden text-sm -translate-x-7 absolute bg-white rounded-full shadow h-7 w-7 items-center justify-center border border-solid border-gray-200 hover:bg-gray-100", "edit-btn"),
                        children: "âœ•"
                    }), (0, e.jsx)(go, {
                        label: f(""),
                        theme: a,
                        size: d
                    })]
                }) : (0, e.jsx)("a", {
                    href: p,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    idName: Zr("no-underline border border-solid  rounded-full px-3 py-1 transition-all duration-200", n ? "flex items-center space-x-1" : "", "light" === a ? "text-gray-950 bg-white hover:bg-gray-100 border-gray-200" : "text-white bg-gray-900 hover:bg-gray-800 border-gray-700"),
                    children: (0, e.jsx)(go, {
                        label: f(""),
                        theme: 0,
                        size: 0
                    })
                })
            },
            go = function(t) {
                var n = t.label,
                    r = t.theme,
                    a = t.size,
                    o = void 0 === a ? "md" : a;
                return (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)("p", {
                        className: Zr("text-sm mb-0.5 no-underline", "sm" === o && "text-xs"),
                        children: (0, e.jsxs)("span", {
                            children: [n, " "]
                        })
                    }), (0, e.jsx)("div", {
                        className: Zr("translate-y-[1px]"),
                        children: (0, e.jsx)(ho, {
                            size: "xs",
                            color: "light" === r ? "black" : "white"
                        })
                    })]
                })
            },
            vo = function() {
                return vo = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, vo.apply(this, arguments)
            },
            yo = function(t) {
                var n = t.className,
                    r = t.fill,
                    a = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var a = 0;
                            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                        }
                        return n
                    }(t, ["className", "fill"]);
                return (0, e.jsxs)("svg", vo({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    className: Zr(n || "h-6 w-6")
                }, a, {
                    children: [(0, e.jsx)("path", {
                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                        fill: null != r ? r : "#4285F4"
                    }), (0, e.jsx)("path", {
                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                        fill: null != r ? r : "#34A853"
                    }), (0, e.jsx)("path", {
                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                        fill: null != r ? r : "#FBBC05"
                    }), (0, e.jsx)("path", {
                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                        fill: null != r ? r : "#EA4335"
                    }), (0, e.jsx)("path", {
                        d: "M1 1h22v22H1z",
                        fill: "none"
                    })]
                }))
            },
            bo = function() {
                return bo = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, bo.apply(this, arguments)
            },
            wo = function(t) {
                var n = t.className,
                    r = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var a = 0;
                            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                        }
                        return n
                    }(t, ["className"]);
                return (0, e.jsxs)("svg", bo({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 272 92",
                    className: Zr(n || "h-6")
                }, r, {
                    children: [(0, e.jsx)("path", {
                        fill: "#EA4335",
                        d: "M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    }), (0, e.jsx)("path", {
                        fill: "#FBBC05",
                        d: "M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    }), (0, e.jsx)("path", {
                        fill: "#4285F4",
                        d: "M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                    }), (0, e.jsx)("path", {
                        fill: "#34A853",
                        d: "M225 3v65h-9.5V3h9.5z"
                    }), (0, e.jsx)("path", {
                        fill: "#EA4335",
                        d: "M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                    }), (0, e.jsx)("path", {
                        fill: "#4285F4",
                        d: "M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                    })]
                }))
            },
            _o = function(t) {
                var n = t.className,
                    r = t.rating,
                    a = t.size,
                    o = void 0 === a ? "md" : a,
                    i = Yr;
                return (0, e.jsx)("div", {
                    className: Zr("flex items-center", "star-rating"),
                    "data-featurable-classname": ".star-rating",
                    "data-featurable-description": "Star rating container",
                    "data-featurable-group": "review card",
                    children: Array.from({
                        length: 5
                    }).map(function(t, a) {
                        return (0, e.jsx)(i, {
                            className: Zr("sm" === o && "h-4 w-4", "md" === o && "h-5 w-5", "lg" === o && "h-6 w-6", "xl" === o && "h-6 w-6", n, r >= a + 1 ? "text-[#F8AF0D]" : "text-gray-400", "star-rating__star", "sm" === o && "star-rating__star--sm", "md" === o && "star-rating__star--md", "lg" === o && "star-rating__star--lg", "xl" === o && "star-rating__star--xl", r >= a + 1 ? "star-rating__star--filled" : "star-rating__star--empty"),
                            "data-featurable-classname": ".star-rating__star|.star-rating__star--sm|.star-rating__star--md|.star-rating__star--lg|.star-rating__star--xl|.star-rating__star--filled|.star-rating__star--empty",
                            "data-featurable-description": "Star icon|Small star icon|Medium star icon|Large star icon|Extra large star icon|Filled star icon|Empty star icon"
                        }, a)
                    })
                })
            },
            xo = function() {
                var e = Cr.useState(function() {
                        return "undefined" != typeof window ? Math.max(window.innerWidth, 320) : 1024
                    }),
                    t = e[0],
                    n = e[1],
                    r = Cr.useRef(null);
                return (0, Cr.useEffect)(function() {
                    var e = new ResizeObserver(function(e) {
                        for (var t = 0, r = e; t < r.length; t++) {
                            var a = r[t].contentRect.width;
                            a > 0 && n(a)
                        }
                    });
                    if (r.current) {
                        e.observe(r.current);
                        var t = r.current.getBoundingClientRect();
                        t.width > 0 && n(t.width)
                    }
                    return function() {
                        e.disconnect()
                    }
                }, []), [t, r, t < 640 ? "xs" : t < 768 ? "sm" : t < 1024 ? "md" : t < 1280 ? "lg" : t < 1536 ? "xl" : "2xl"]
            },
            ko = function(e, t) {
                var n = e.split(" ");
                if (1 === n.length) return e;
                switch (t) {
                    case "firstNamesOnly":
                        return n[0];
                    case "fullNames":
                        return e;
                    default:
                        return "".concat(n[0], " ").concat(n[n.length - 1][0].toUpperCase(), ".")
                }
            },
            So = function(e, t) {
                var n = new Date,
                    r = Math.abs(n.getTime() - e.getTime()),
                    a = Math.floor(r / 6e4),
                    o = Math.floor(r / 36e5),
                    i = Math.floor(r / 864e5),
                    l = Math.floor(i / 30),
                    s = Math.floor(l / 12);
                return s > 0 ? t("review_card.years_ago", {
                    count: s
                }) : l > 0 ? t("review_card.months_ago", {
                    count: l
                }) : i > 0 ? t("review_card.days_ago", {
                    count: i
                }) : o > 0 ? t("review_card.hours_ago", {
                    count: o
                }) : a > 0 ? t("review_card.minutes_ago", {
                    count: a
                }) : t("review_card.just_now")
            },
            zo = function(e, t) {
                var n = encodeURIComponent(e),
                    r = encodeURIComponent(window.location.href);
                return "https://featurable.com/go/from-widget?url=".concat(n, "&widget=").concat(t, "&referrer=").concat(r)
            },
            Eo = function(t) {
                var n = t.widgetData,
                    r = n.uuid,
                    a = n.config,
                    o = n.reviews,
                    i = n.gbpLocationSummary,
                    l = n.showBranding,
                    s = (0, Cr.useState)(0),
                    u = s[0],
                    c = s[1],
                    d = xo(),
                    f = d[0],
                    p = d[1],
                    h = (0, Cr.useMemo)(function() {
                        return o
                    }, [o]),
                    m = (0, Cr.useMemo)(function() {
                        return f < 640 ? 5 : f < 768 ? 6 : f < 1024 ? 9 : 12
                    }, [f]),
                    g = (0, Cr.useMemo)(function() {
                        return h.slice(0, (u + 1) * m)
                    }, [h, u, m]),
                    v = (0, Cr.useMemo)(function() {
                        return h.length > (u + 1) * m
                    }, [h, u, m]);
                return (0, e.jsxs)("div", {
                    className: Zr("py-16", "widget"),
                    "data-featurable-classname": ".widget",
                    "data-featurable-description": "Main widget container",
                    "data-featurable-group": "masonry layout",
                    children: [(0, e.jsx)("style", {
                        children: a.custom_css.replace(/([^{}]+)(?=\s*\{)/g, " #featurable-".concat(r, " $1"))
                    }), a.title && a.show_title && (0, e.jsx)("h2", {
                        className: Zr("text-3xl md:text-4xl font-bold text-center mb-8", "light" === a.color_scheme && "text-black", "dark" === a.color_scheme && "text-white", "title"),
                        "data-featurable-classname": ".title",
                        "data-featurable-description": "Masonry title",
                        "data-featurable-group": "masonry layout",
                        children: a.title
                    }), (0, e.jsxs)("div", {
                        className: Zr("flex relative min-w-[320px] flex-col mx-auto", "parent", "container"),
                        "data-featurable-classname": ".container",
                        "data-featurable-description": "Main container for masonry widget",
                        "data-featurable-group": "masonry layout",
                        children: [a.summary && i && (0, e.jsx)("div", {
                            className: Zr("mb-2 max-w-7xl mx-auto w-full", "masonry__summary"),
                            "data-featurable-classname": ".masonry__summary",
                            "data-featurable-description": "Masonry summary bar container (if enabled)",
                            "data-featurable-group": "masonry layout",
                            children: (0, e.jsx)(Oo, {
                                uuid: r,
                                averageRating: i.rating,
                                totalReviewCount: i.reviewsCount,
                                profileUrl: i.writeAReviewUri,
                                config: a
                            })
                        }), (0, e.jsx)(Co, {
                            reviews: g,
                            config: a,
                            hasMore: v,
                            page: u,
                            setPage: c,
                            showBranding: l,
                            uuid: r,
                            containerRef: p,
                            getColumns: function() {
                                return f < 640 ? 1 : f < 768 ? a.max_columns < 2 ? a.max_columns : 2 : f < 1024 ? a.max_columns < 3 ? a.max_columns : 3 : a.max_columns
                            }
                        })]
                    })]
                })
            },
            Co = function(t) {
                var n = t.reviews,
                    r = t.config,
                    a = t.hasMore,
                    o = t.page,
                    i = t.setPage,
                    l = t.showBranding,
                    s = t.uuid,
                    u = t.containerRef,
                    c = t.getColumns,
                    d = po(r.language).t;
                return (0, e.jsxs)("div", {
                    className: Zr("max-w-7xl mx-auto relative w-full", "masonry"),
                    ref: u,
                    "data-featurable-classname": ".masonry",
                    "data-featurable-description": "Masonry grid container",
                    "data-featurable-group": "masonry layout",
                    children: [(0, e.jsx)(Qr, {
                        columnsCount: c(),
                        children: n.map(function(t) {
                            var n = t.text.length > 200 ? Math.round(t.text.length / 3) : 200;
                            return n > 300 && (n = 300), (0, e.jsx)("div", {
                                className: Zr("p-2 min-h-0 relative w-full", "masonry__review"),
                                "data-featurable-classname": ".masonry__review",
                                "data-featurable-description": "Masonry review card container",
                                "data-featurable-group": "masonry layout",
                                children: (0, e.jsx)(No, {
                                    review: t,
                                    config: r,
                                    maxCharacters: n
                                })
                            }, t.id)
                        })
                    }), (0, e.jsx)("div", {
                        className: Zr("pt-6 flex items-center justify-center", "masonry__more-container"),
                        "data-featurable-classname": ".masonry__more-container",
                        "data-featurable-description": "Masonry load more button container",
                        "data-featurable-group": "masonry layout",
                        children: a && (0, e.jsx)("button", {
                            onClick: function() {
                                return i(o + 1)
                            },
                            type: "button",
                            className: Zr("rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm border border-solid ", "light" === r.color_scheme ? "bg-white ring-gray-300 hover:bg-gray-50 text-gray-900 border-gray-200" : "bg-gray-900 ring-gray-900 text-white border-gray-800", "masonry__more", "light" === r.color_scheme ? "masonry__more--light" : "masonry__more--dark"),
                            "data-featurable-classname": ".masonry__more|.masonry__more--light|.masonry__more--dark",
                            "data-featurable-description": "Masonry load more button|Light theme load more button|Dark theme load more button",
                            "data-featurable-group": "masonry layout",
                            children: d("load_more")
                        })
                    }), l && (0, e.jsx)("0", {
                        className: "flex items-center justify-center mt-4",
                        children: (0, e.jsx)(mo, {
                            theme: r.color_scheme,
                            widgetId: 0,
                            inline: !0
                        })
                    })]
                })
            },
            No = function(t) {
                var n = t.review,
                    r = t.config,
                    a = t.maxCharacters,
                    o = t.size,
                    i = void 0 === o ? "md" : o,
                    l = po(r.language).t,
                    s = (0, Cr.useState)(!1),
                    u = s[0],
                    c = s[1],
                    d = (0, Cr.useMemo)(function() {
                        var e = n.text;
                        if ("en" !== r.language) {
                            if (n.originalText) return n.originalText;
                            if (e.includes("(Original)"))(t = e.split("(Original)")).length > 1 && (e = t[1].trim());
                            else if (e.includes("(Translated by Google)")) {
                                var t;
                                (t = e.split("(Translated by Google)")).length > 1 && (e = t[0].trim())
                            }
                        }
                        return e
                    }, [n.text, r.language]),
                    f = (0, Cr.useMemo)(function() {
                        return d.length > a
                    }, [d, a]),
                    p = (0, Cr.useMemo)(function() {
                        return u ? d : function(e, t) {
                            if (e.length <= t) return e;
                            var n = e.slice(0, t),
                                r = n.lastIndexOf(" ");
                            return -1 !== r && (n = n.slice(0, r)), (n = n.replace(/[^a-zA-Z0-9]+$/, "")).length < e.length && (n += "..."), n
                        }(d, a)
                    }, [u, d, a]);
                return (0, e.jsxs)("div", {
                    className: Zr("max-w-prose mx-auto w-full min-w-[200px] border border-solid shadow-md rounded-lg flex flex-col justify-between transition-all text-left", "sm" === i && "p-2", "md" === i && "p-3", "lg" === i && "p-4", "xl" === i && "p-3 px-5", "light" === r.color_scheme && "border-gray-200 bg-white", "dark" === r.color_scheme && "border-gray-700 bg-gray-900", "review", "sm" === i && "review--sm", "md" === i && "review--md", "lg" === i && "review--lg", "xl" === i && "review--xl", "light" === r.color_scheme && "review--light", "dark" === r.color_scheme && "review--dark"),
                    "data-featurable-classname": ".review|.review--sm|.review--md|.review--lg|.review--xl|.review--light|.review--dark",
                    "data-featurable-description": "Main review card container|Small review card|Medium review card|Large review card|Extra large review card|Light theme review card|Dark theme review card",
                    "data-featurable-group": "review card",
                    children: [(0, e.jsxs)("div", {
                        className: Zr("review__header"),
                        "data-featurable-classname": ".review__header",
                        "data-featurable-description": "Review card header",
                        "data-featurable-group": "review card",
                        children: [(0, e.jsx)(Po, {
                            review: n,
                            nameDisplay: r.name_display,
                            dateDisplay: r.date_display,
                            size: i,
                            colorScheme: r.color_scheme,
                            languageCode: r.language,
                            showProfilePictures: r.show_profile_pictures
                        }), (0, e.jsxs)("div", {
                            className: "mt-4",
                            children: [(0, e.jsx)("p", {
                                className: Zr("text-base", "light" === r.color_scheme && "text-gray-950", "dark" === r.color_scheme && "text-white", "sm" === i && "review__text--sm", "md" === i && "review__text--md", "lg" === i && "review__text--lg", "xl" === i && "review__text--xl", "light" === r.color_scheme && "review__text--light", "dark" === r.color_scheme && "review__text--dark"),
                                "data-review-comment": !0,
                                "data-review-id": n.id,
                                "data-featurable-classname": ".review__text--sm|.review__text--md|.review__text--lg|.review__text--xl|.review__text--light|.review__text--dark",
                                "data-featurable-description": "Review body text|Small review body text|Medium review body text|Large review body text|Extra large review body text|Light theme review body text|Dark theme review body text",
                                "data-featurable-group": "review card",
                                children: p
                            }), f && (0, e.jsx)("button", {
                                onClick: function(e) {
                                    e.preventDefault(), e.stopPropagation(), c(!u)
                                },
                                className: Zr("mt-1 inline-block hover:underline border-0 bg-transparent cursor-pointer", "sm" === i && "text-sm leading-5 lg:text-base lg:leading-6", "md" === i && "text-sm leading-5 lg:text-base lg:leading-6", "lg" === i && "text-base leading-6 lg:text-lg lg:leading-7", "xl" === i && "text-base leading-6 lg:text-lg lg:leading-7", "light" === r.color_scheme && "text-gray-500", "dark" === r.color_scheme && "text-gray-400", "review__read-more", "sm" === i && "review__read-more--sm", "md" === i && "review__read-more--md", "lg" === i && "review__read-more--lg", "xl" === i && "review__read-more--xl", "light" === r.color_scheme && "review__read-more--light", "dark" === r.color_scheme && "review__read-more--dark"),
                                "data-featurable-classname": ".review__read-more--sm|.review__read-more--md|.review__read-more--lg|.review__read-more--xl|.review__read-more--light|.review__read-more--dark",
                                "data-featurable-description": "Read more button|Small read more button|Medium read more button|Large read more button|Extra large read more button|Light theme read more button|Dark theme read more button",
                                "data-featurable-group": "review card",
                                children: l(u ? "review_card.read_less" : "review_card.read_more")
                            })]
                        })]
                    }), (0, e.jsxs)("div", {
                        className: Zr("flex items-center justify-between", "md" === i && "mt-4", "lg" === i && "mt-6", "xl" === i && "mt-8", "review__footer", "md" === i && "review__footer--md", "lg" === i && "review__footer--lg", "xl" === i && "review__footer--xl"),
                        "data-featurable-classname": ".review__footer|.review__footer--md|.review__footer--lg|.review__footer--xl",
                        "data-featurable-description": "Review card footer|Medium review card footer|Large review card footer|Extra large review card footer",
                        "data-featurable-group": "review card",
                        children: [n.rating && (0, e.jsx)(_o, {
                            rating: n.rating.value,
                            size: i
                        }), (0, e.jsx)(yo, {
                            className: Zr("h-8 w-8", ".review__google-icon"),
                            "data-featurable-classname": ".review__google-icon",
                            "data-featurable-description": "Google icon",
                            "data-featurable-group": "review card"
                        })]
                    })]
                })
            },
            Po = function(t) {
                var n, r, a, o, i, l = t.review,
                    s = t.nameDisplay,
                    u = t.dateDisplay,
                    c = t.size,
                    d = t.colorScheme,
                    f = void 0 === d ? "light" : d,
                    p = t.languageCode,
                    h = void 0 === p ? "en" : p,
                    m = t.showProfilePictures,
                    g = void 0 === m || m,
                    v = (0, Cr.useState)(!1),
                    y = v[0],
                    b = v[1],
                    w = po(h).t;
                return (0, e.jsxs)("div", {
                    className: Zr("flex items-center space-x-2", "review__reviewer"),
                    "data-featurable-classname": ".review__reviewer",
                    "data-featurable-description": "Main container for reviewer information",
                    "data-featurable-group": "review card",
                    children: [(0, e.jsxs)("div", {
                        className: Zr("rounded-full relative", "sm" === c && "h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]", "md" === c && "h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]", "lg" === c && "h-12 w-12 min-h-[3rem] min-w-[3rem]", "xl" === c && "h-12 w-12 min-h-[3rem] min-w-[3rem]", "review__reviewer-container", "sm" === c && "review__reviewer-container--sm", "md" === c && "review__reviewer-container--md", "lg" === c && "review__reviewer-container--lg", "xl" === c && "review__reviewer-container--xl"),
                        "data-featurable-classname": ".review__reviewer-container--sm|.review__reviewer-container--md|.review__reviewer-container--lg|.review__reviewer-container--xl",
                        "data-featurable-description": "Reviewer container|Small reviewer container|Medium reviewer container|Large reviewer container|Extra large reviewer container",
                        "data-featurable-group": "review card",
                        children: [(0, e.jsx)("img", {
                            src: null !== (r = null === (n = l.author) || void 0 === n ? void 0 : n.avatarUrl) && void 0 !== r ? r : "",
                            onError: function() {
                                b(!0)
                            },
                            className: Zr("rounded-full", "sm" === c && "h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]", "md" === c && "h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]", "lg" === c && "h-12 w-12 min-h-[3rem] min-w-[3rem]", "xl" === c && "h-12 w-12 min-h-[3rem] min-w-[3rem]", "review__reviewer-img", "sm" === c && "review__reviewer-img--sm", "md" === c && "review__reviewer-img--md", "lg" === c && "review__reviewer-img--lg", "xl" === c && "review__reviewer-img--xl"),
                            "data-featurable-classname": ".review__reviewer-img--sm|.review__reviewer-img--md|.review__reviewer-img--lg|.review__reviewer-img--xl",
                            "data-featurable-description": "Reviewer profile image|Small reviewer profile image|Medium reviewer profile image|Large reviewer profile image|Extra large reviewer profile image",
                            "data-featurable-group": "review card"
                        }), (y || !l.author || !l.author.avatarUrl || !g) && (0, e.jsx)("div", {
                            className: Zr("rounded-full flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 font-medium text-white", "sm" === c && "text-xl leading-7", "md" === c && "text-xl leading-7", "lg" === c && "text-2xl leading-8", "xl" === c && "text-2xl leading-8"),
                            style: {
                                backgroundColor: Br((null === (a = l.author) || void 0 === a ? void 0 : a.name) ? l.author.name[0].toLowerCase() : "a")
                            },
                            children: (null === (o = l.author) || void 0 === o ? void 0 : o.name) ? l.author.name[0].toUpperCase() : "A"
                        })]
                    }), (0, e.jsxs)("div", {
                        className: Zr("review__reviewer-info"),
                        "data-featurable-classname": ".review__reviewer-info",
                        "data-featurable-description": "Reviewer information container",
                        "data-featurable-group": "review card",
                        children: [(0, e.jsx)("p", {
                            className: Zr("font-bold", "sm" === c && "text-sm leading-5", "md" === c && "text-sm leading-5", "lg" === c && "text-base leading-6", "xl" === c && "text-base leading-6", "light" === f && "text-gray-950", "dark" === f && "text-white", "review__reviewer-name", "sm" === c && "review__reviewer-name--sm", "md" === c && "review__reviewer-name--md", "lg" === c && "review__reviewer-name--lg", "xl" === c && "review__reviewer-name--xl", "light" === f && "review__reviewer-name--light", "dark" === f && "review__reviewer-name--dark"),
                            "data-featurable-classname": ".review__reviewer-name--sm|.review__reviewer-name--md|.review__reviewer-name--lg|.review__reviewer-name--xl|.review__reviewer-name--light|.review__reviewer-name--dark",
                            "data-featurable-description": "Reviewer name|Small reviewer name|Medium reviewer name|Large reviewer name|Extra large reviewer name|Light theme reviewer name|Dark theme reviewer name",
                            "data-featurable-group": "review card",
                            children: (null === (i = l.author) || void 0 === i ? void 0 : i.name) ? ko(l.author.name, s) : "Anonymous"
                        }), "absolute" === u && (0, e.jsx)("p", {
                            className: Zr("sm" === c && "text-sm leading-5", "md" === c && "text-sm leading-5", "lg" === c && "mt-1 text-base leading-6", "xl" === c && "mt-1 text-base leading-6", "light" === f && "text-gray-500", "dark" === f && "text-gray-400", "sm" === c && "review__date--sm", "md" === c && "review__date--md", "lg" === c && "review__date--lg", "xl" === c && "review__date--xl", "light" === f && "review__date--light", "dark" === f && "review__date--dark"),
                            "data-featurable-classname": ".review__date--sm|.review__date--md|.review__date--lg|.review__date--xl|.review__date--light|.review__date--dark",
                            "data-featurable-description": "Reviewer date|Small reviewer date|Medium reviewer date|Large reviewer date|Extra large reviewer date|Light theme reviewer date|Dark theme reviewer date",
                            "data-featurable-group": "review card",
                            children: new Date(l.publishedAt).toLocaleDateString(h, {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                        }), "relative" === u && (0, e.jsx)("p", {
                            className: Zr("sm" === c && "text-sm leading-5", "md" === c && "text-sm leading-5", "lg" === c && "mt-1 text-base leading-6", "xl" === c && "mt-1 text-base leading-6", "light" === f && "text-gray-500", "dark" === f && "text-gray-400", "sm" === c && "review__date--sm", "md" === c && "review__date--md", "lg" === c && "review__date--lg", "xl" === c && "review__date--xl", "light" === f && "review__date--light", "dark" === f && "review__date--dark"),
                            "data-featurable-classname": ".review__date--sm|.review__date--md|.review__date--lg|.review__date--xl|.review__date--light|.review__date--dark",
                            "data-featurable-description": "Reviewer date|Small reviewer date|Medium reviewer date|Large reviewer date|Extra large reviewer date|Light theme reviewer date|Dark theme reviewer date",
                            "data-featurable-group": "review card",
                            children: So(new Date(l.publishedAt), w)
                        })]
                    })]
                })
            },
            Oo = function(t) {
                var n = t.config,
                    r = t.averageRating,
                    a = t.totalReviewCount,
                    o = t.profileUrl,
                    i = t.uuid,
                    l = po(n.language).t,
                    s = xo(),
                    u = s[0],
                    c = s[1],
                    d = l("summary_bar.excellent");
                r < 1 ? d = l("summary_bar.poor") : r < 2 ? d = l("summary_bar.fair") : r < 3 ? d = l("summary_bar.good") : r < 4 ? d = l("summary_bar.great") : r < 5 && (d = l("summary_bar.excellent"));
                var f = Math.max(u, 320),
                    p = function() {
                        return f < 560
                    },
                    h = function() {
                        return f < 768 && f >= 560
                    };
                return (0, e.jsx)("div", {
                    ref: c,
                    children: (0, e.jsxs)("div", {
                        className: Zr("border border-solid rounded-lg shadow flex relative min-w-[320px]", p() && "p-4 flex-col items-start space-y-3", h() && "py-3 px-4 flex-row items-center justify-between", !p() && !h() && "py-3 px-6 flex-row items-center justify-between", "light" === n.color_scheme ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700", "summary-bar", "light" === n.color_scheme ? "summary-bar--light" : "summary-bar--dark"),
                        "data-featurable-classname": ".summary-bar",
                        "data-featurable-description": "Summary bar container",
                        "data-featurable-group": "summary bar",
                        children: [(0, e.jsxs)("div", {
                            className: Zr("flex", p() ? "flex-col items-start space-y-3 w-full" : "items-center", "summary-bar__container"),
                            "data-featurable-classname": ".summary-bar__container",
                            "data-featurable-description": "Summary bar main container",
                            "data-featurable-group": "summary bar",
                            children: [(0, e.jsxs)("div", {
                                className: Zr("flex flex-col items-start ", "summary-bar__main"),
                                "data-featurable-classname": ".summary-bar__main",
                                "data-featurable-description": "Summary bar main inner container",
                                "data-featurable-group": "summary bar",
                                children: [(0, e.jsx)("div", {
                                    className: Zr("text-xl font-bold no-underline", "light" === n.color_scheme ? "text-gray-950" : "text-white", "summary-bar__label", "light" === n.color_scheme ? "summary-bar__label--light" : "summary-bar__label--dark"),
                                    "data-featurable-classname": ".summary-bar__label|.summary-bar__label--light|.summary-bar__label--dark",
                                    "data-featurable-description": "Summary bar label|Light summary bar label|Dark summary bar label",
                                    "data-featurable-group": "summary bar",
                                    children: d
                                }), (0, e.jsxs)("div", {
                                    className: Zr("flex items-center space-x-2", "summary-bar__rating-container"),
                                    "data-featurable-classname": ".summary-bar__rating-container",
                                    "data-featurable-description": "Summary bar rating container",
                                    "data-featurable-group": "summary bar",
                                    children: [(0, e.jsx)(Jr, {
                                        rating: r,
                                        className: "h-6"
                                    }), (0, e.jsx)("span", {
                                        className: Zr("mt-[2px] font-bold text-base no-underline", "light" === n.color_scheme ? "text-gray-950" : "text-white", "summary-bar__rating", "light" === n.color_scheme ? "summary-bar__rating--light" : "summary-bar__rating--dark"),
                                        "data-featurable-classname": ".summary-bar__rating|.summary-bar__rating--light|.summary-bar__rating--dark",
                                        "data-featurable-description": "Summary bar rating|Light theme summary bar rating|Dark theme summary bar rating",
                                        "data-featurable-group": "summary bar",
                                        children: r.toFixed(1)
                                    })]
                                })]
                            }), (0, e.jsxs)("div", {
                                className: Zr("flex items-start", p() ? "flex-col space-y-2 w-full" : "flex-col-reverse pl-4", "summary-bar__info"),
                                "data-featurable-classname": ".summary-bar__info",
                                "data-featurable-description": "Summary bar info container",
                                "data-featurable-group": "summary bar",
                                children: [(0, e.jsxs)("div", {
                                    className: Zr("text-xs no-underline border-0 outline-0 shadow-none font-normal", p() ? "mt-0" : "mt-1 whitespace-nowrap", "light" === n.color_scheme ? "text-gray-500" : "text-gray-400", "summary-bar__sublabel", "light" === n.color_scheme ? "summary-bar__sublabel--light" : "summary-bar__sublabel--dark"),
                                    "data-featurable-classname": ".summary-bar__sublabel|.summary-bar__sublabel--light|.summary-bar__sublabel--dark",
                                    "data-featurable-description": "Summary bar sublabel|Light theme summary bar sublabel|Dark theme summary bar sublabel",
                                    "data-featurable-group": "summary bar",
                                    children: [l("summary_bar.based_on"), " ", (0, e.jsxs)("a", {
                                        href: o ? zo(o, i) : void 0,
                                        target: "_blank",
                                        rel: "nofollow noopener noreferrer",
                                        className: Zr("font-bold underline", "summary-bar__profile-link"),
                                        "data-featurable-classname": ".summary-bar__profile-link",
                                        "data-featurable-description": "Summary bar profile link",
                                        "data-featurable-group": "summary bar",
                                        children: [a.toLocaleString(), " ", l("summary_bar.reviews")]
                                    })]
                                }), (0, e.jsxs)("div", {
                                    className: Zr("flex", p() ? "mt-0 flex-row items-center space-x-2" : "mt-1 flex-row items-center space-x-2", "summary-bar__logo-container"),
                                    "data-featurable-classname": ".summary-bar__logo-container",
                                    "data-featurable-description": "Summary bar logo container",
                                    "data-featurable-group": "summary bar",
                                    children: [(0, e.jsx)("div", {
                                        className: Zr("summary-bar__logo"),
                                        "data-featurable-classname": ".summary-bar__logo",
                                        "data-featurable-description": "Summary bar logo",
                                        "data-featurable-group": "summary bar",
                                        children: (0, e.jsx)(wo, {
                                            className: Zr("h-6", "summary-bar__logo-svg"),
                                            "data-featurable-classname": ".summary-bar__logo-svg",
                                            "data-featurable-description": "Summary bar logo svg",
                                            "data-featurable-group": "summary bar"
                                        })
                                    }), (0, e.jsx)("span", {
                                        className: Zr("text-base font-normal mb-[2px]", "light" === n.color_scheme ? "text-gray-950" : "text-white", "summary-bar__logo-label", "light" === n.color_scheme ? "summary-bar__logo-label--light" : "summary-bar__logo-label--dark"),
                                        "data-featurable-classname": ".summary-bar__logo-label|.summary-bar__logo-label--light|.summary-bar__logo-label--dark",
                                        "data-featurable-description": "Summary bar logo label|Light theme summary bar logo label|Dark theme summary bar logo label",
                                        "data-featurable-group": "summary bar",
                                        children: l("summary_bar.rating")
                                    })]
                                })]
                            })]
                        }), (0, e.jsx)("div", {
                            className: Zr(p() && "mt-0 flex items-center justify-start w-full", "summary-bar__btn-container"),
                            style: {
                                display: n.summary_review_button ? "flex" : "none"
                            },
                            "data-featurable-classname": ".summary-bar__btn-container",
                            "data-featurable-description": "Summary bar button container",
                            "data-featurable-group": "summary bar",
                            children: (0, e.jsx)("a", {
                                href: o ? zo(o, i) : void 0,
                                target: "_blank",
                                rel: "nofollow noopener noreferrer",
                                className: Zr("no-underline bg-blue-600 hover:bg-blue-700 transition-all text-white py-2 px-3 text-base rounded-md whitespace-nowrap", "summary-bar__btn"),
                                "data-featurable-classname": ".summary-bar__btn",
                                "data-featurable-description": "Summary bar button",
                                "data-featurable-group": "summary bar",
                                children: (0, e.jsx)("span", {
                                    children: l("summary_bar.write_a_review")
                                })
                            })
                        })]
                    })
                })
            },
            jo = function(t, n) {
                if (!zr(n)) throw new Error("Invalid config");
                var r = Er.createRoot(t),
                    a = Ur().toString();
                r.render((0, e.jsxs)("div", {
                    id: "featurable-".concat(n.uuid),
                    children: [(0, e.jsx)("style", {
                        children: a
                    }), (0, e.jsx)(Eo, {
                        widgetData: n
                    })]
                }))
            };
        new Dr(jo, "masonry_default").initialize();
        const Lo = jo
    })(), l
})());
