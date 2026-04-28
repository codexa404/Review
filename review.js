/*! For license information please see carousel_default.min.js.LICENSE.txt */ ! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.carousel_default = t() : e.carousel_default = t()
}(self, () => (() => {
    var e, t, n, r, a = {
            181: (e, t, n) => {
                var r = /^\s+|\s+$/g,
                    a = /^[-+]0x[0-9a-f]+$/i,
                    i = /^0b[01]+$/i,
                    o = /^0o[0-7]+$/i,
                    l = parseInt,
                    s = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                    u = "object" == typeof self && self && self.Object === Object && self,
                    c = s || u || Function("return this")(),
                    d = Object.prototype.toString,
                    f = Math.max,
                    p = Math.min,
                    h = function() {
                        return c.Date.now()
                    };

                function m(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function g(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                            return "symbol" == typeof e || function(e) {
                                return !!e && "object" == typeof e
                            }(e) && "[object Symbol]" == d.call(e)
                        }(e)) return NaN;
                    if (m(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = m(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(r, "");
                    var n = i.test(e);
                    return n || o.test(e) ? l(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
                }
                e.exports = function(e, t, n) {
                    var r, a, i, o, l, s, u = 0,
                        c = !1,
                        d = !1,
                        v = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");

                    function y(t) {
                        var n = r,
                            i = a;
                        return r = a = void 0, u = t, o = e.apply(i, n)
                    }

                    function b(e) {
                        var n = e - s;
                        return void 0 === s || n >= t || n < 0 || d && e - u >= i
                    }

                    function w() {
                        var e = h();
                        if (b(e)) return _(e);
                        l = setTimeout(w, function(e) {
                            var n = t - (e - s);
                            return d ? p(n, i - (e - u)) : n
                        }(e))
                    }

                    function _(e) {
                        return l = void 0, v && r ? y(e) : (r = a = void 0, o)
                    }

                    function k() {
                        var e = h(),
                            n = b(e);
                        if (r = arguments, a = this, s = e, n) {
                            if (void 0 === l) return function(e) {
                                return u = e, l = setTimeout(w, t), c ? y(e) : o
                            }(s);
                            if (d) return l = setTimeout(w, t), y(s)
                        }
                        return void 0 === l && (l = setTimeout(w, t)), o
                    }
                    return t = g(t) || 0, m(n) && (c = !!n.leading, i = (d = "maxWait" in n) ? f(g(n.maxWait) || 0, t) : i, v = "trailing" in n ? !!n.trailing : v), k.cancel = function() {
                        void 0 !== l && clearTimeout(l), u = 0, r = s = a = l = void 0
                    }, k.flush = function() {
                        return void 0 === l ? o : _(h())
                    }, k
                }
            },
            773: (e, t, n) => {
                "use strict";

                function r(e) {
                    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, r(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Dots = void 0;
                var a = l(n(6540)),
                    i = l(n(6942)),
                    o = n(9445);

                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function s(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function u(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, c(r.key), r)
                    }
                }

                function c(e) {
                    var t = function(e) {
                        if ("object" != r(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != r(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == r(t) ? t : String(t)
                }

                function d(e, t) {
                    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, d(e, t)
                }

                function f() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                    } catch (e) {}
                    return (f = function() {
                        return !!e
                    })()
                }

                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, p(e)
                }
                t.Dots = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && d(e, t)
                    }(g, e);
                    var t, n, l, h, m = (l = g, h = f(), function() {
                        var e, t = p(l);
                        if (h) {
                            var n = p(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else e = t.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === r(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(e)
                        }(this, e)
                    });

                    function g() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, g), m.apply(this, arguments)
                    }
                    return t = g, n = [{
                        key: "clickHandler",
                        value: function(e, t) {
                            t.preventDefault(), this.props.clickHandler(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            for (var e, t = this.props, n = t.onMouseEnter, r = t.onMouseOver, l = t.onMouseLeave, u = t.infinite, d = t.slidesToScroll, f = t.slidesToShow, p = t.slideCount, h = t.currentSlide, m = (e = {
                                    slideCount: p,
                                    slidesToScroll: d,
                                    slidesToShow: f,
                                    infinite: u
                                }).infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1, g = {
                                    onMouseEnter: n,
                                    onMouseOver: r,
                                    onMouseLeave: l
                                }, v = [], y = 0; y < m; y++) {
                                var b = (y + 1) * d - 1,
                                    w = u ? b : (0, o.clamp)(b, 0, p - 1),
                                    _ = w - (d - 1),
                                    k = u ? _ : (0, o.clamp)(_, 0, p - 1),
                                    x = (0, i.default)({
                                        "slick-active": u ? h >= k && h <= w : h === k
                                    }),
                                    S = {
                                        message: "dots",
                                        index: y,
                                        slidesToScroll: d,
                                        currentSlide: h
                                    },
                                    z = this.clickHandler.bind(this, S);
                                v = v.concat(a.default.createElement("li", {
                                    key: y,
                                    className: x
                                }, a.default.cloneElement(this.props.customPaging(y), {
                                    onClick: z
                                })))
                            }
                            return a.default.cloneElement(this.props.appendDots(v), function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                                        var r, a, i;
                                        r = e, a = t, i = n[t], (a = c(a)) in r ? Object.defineProperty(r, a, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : r[a] = i
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                className: this.props.dotsClass
                            }, g))
                        }
                    }], n && u(t.prototype, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), g
                }(a.default.PureComponent)
            },
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
            1040: (e, t, n) => {
                var r = n(8404),
                    a = n(2524).each;

                function i(e, t) {
                    this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
                    var n = this;
                    this.listener = function(e) {
                        n.mql = e.currentTarget || e, n.assess()
                    }, this.mql.addListener(this.listener)
                }
                i.prototype = {
                    constuctor: i,
                    addHandler: function(e) {
                        var t = new r(e);
                        this.handlers.push(t), this.matches() && t.on()
                    },
                    removeHandler: function(e) {
                        var t = this.handlers;
                        a(t, function(n, r) {
                            if (n.equals(e)) return n.destroy(), !t.splice(r, 1)
                        })
                    },
                    matches: function() {
                        return this.mql.matches || this.isUnconditional
                    },
                    clear: function() {
                        a(this.handlers, function(e) {
                            e.destroy()
                        }), this.mql.removeListener(this.listener), this.handlers.length = 0
                    },
                    assess: function() {
                        var e = this.matches() ? "on" : "off";
                        a(this.handlers, function(t) {
                            t[e]()
                        })
                    }
                }, e.exports = i
            },
            1098: (e, t, n) => {
                var r = n(1040),
                    a = n(2524),
                    i = a.each,
                    o = a.isFunction,
                    l = a.isArray;

                function s() {
                    if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
                }
                s.prototype = {
                    constructor: s,
                    register: function(e, t, n) {
                        var a = this.queries,
                            s = n && this.browserIsIncapable;
                        return a[e] || (a[e] = new r(e, s)), o(t) && (t = {
                            match: t
                        }), l(t) || (t = [t]), i(t, function(t) {
                            o(t) && (t = {
                                match: t
                            }), a[e].addHandler(t)
                        }), this
                    },
                    unregister: function(e, t) {
                        var n = this.queries[e];
                        return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
                    }
                }, e.exports = s
            },
            1247: (e, t, n) => {
                "use strict";
                var r = n(9982),
                    a = n(6540),
                    i = n(961);

                function o(e) {
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
                    if (s(e) !== e) throw Error(o(188))
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
                    k = Symbol.for("react.forward_ref"),
                    x = Symbol.for("react.suspense"),
                    S = Symbol.for("react.suspense_list"),
                    z = Symbol.for("react.memo"),
                    E = Symbol.for("react.lazy");
                Symbol.for("react.scope");
                var O = Symbol.for("react.activity");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
                var C = Symbol.for("react.memo_cache_sentinel");
                Symbol.for("react.view_transition");
                var P = Symbol.iterator;

                function j(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof(e = P && e[P] || e["@@iterator"]) ? e : null
                }
                var N = Symbol.for("react.client.reference");

                function L(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.$$typeof === N ? null : e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case g:
                            return "Fragment";
                        case y:
                            return "Profiler";
                        case v:
                            return "StrictMode";
                        case x:
                            return "Suspense";
                        case S:
                            return "SuspenseList";
                        case O:
                            return "Activity"
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case m:
                            return "Portal";
                        case _:
                            return (e.displayName || "Context") + ".Provider";
                        case w:
                            return (e._context.displayName || "Context") + ".Consumer";
                        case k:
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
                    M = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    R = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    A = {
                        pending: !1,
                        data: null,
                        method: null,
                        action: null
                    },
                    D = [],
                    I = -1;

                function $(e) {
                    return {
                        current: e
                    }
                }

                function F(e) {
                    0 > I || (e.current = D[I], D[I] = null, I--)
                }

                function U(e, t) {
                    I++, D[I] = e.current, e.current = t
                }
                var H = $(null),
                    V = $(null),
                    W = $(null),
                    B = $(null);

                function Z(e, t) {
                    switch (U(W, t), U(V, e), U(H, null), t.nodeType) {
                        case 9:
                        case 11:
                            e = (e = t.documentElement) && (e = e.namespaceURI) ? ad(e) : 0;
                            break;
                        default:
                            if (e = t.tagName, t = t.namespaceURI) e = id(t = ad(t), e);
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
                    F(H), U(H, e)
                }

                function q() {
                    F(H), F(V), F(W)
                }

                function G(e) {
                    null !== e.memoizedState && U(B, e);
                    var t = H.current,
                        n = id(t, e.type);
                    t !== n && (U(V, e), U(H, n))
                }

                function K(e) {
                    V.current === e && (F(H), F(V)), B.current === e && (F(B), Gd._currentValue = A)
                }
                var Q = Object.prototype.hasOwnProperty,
                    Y = r.unstable_scheduleCallback,
                    X = r.unstable_cancelCallback,
                    J = r.unstable_shouldYield,
                    ee = r.unstable_requestPaint,
                    te = r.unstable_now,
                    ne = r.unstable_getCurrentPriorityLevel,
                    re = r.unstable_ImmediatePriority,
                    ae = r.unstable_UserBlockingPriority,
                    ie = r.unstable_NormalPriority,
                    oe = r.unstable_LowPriority,
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
                        i = e.suspendedLanes,
                        o = e.pingedLanes;
                    e = e.warmLanes;
                    var l = 134217727 & r;
                    return 0 !== l ? 0 !== (r = l & ~i) ? a = ye(r) : 0 !== (o &= l) ? a = ye(o) : n || 0 !== (n = l & ~e) && (a = ye(n)) : 0 !== (l = r & ~i) ? a = ye(l) : 0 !== o ? a = ye(o) : n || 0 !== (n = r & ~e) && (a = ye(n)), 0 === a ? 0 : 0 !== t && t !== a && 0 === (t & i) && ((i = a & -a) >= (n = t & -t) || 32 === i && 4194048 & n) ? t : a
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

                function ke() {
                    var e = ge;
                    return !(4194048 & (ge <<= 1)) && (ge = 256), e
                }

                function xe() {
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

                function Oe(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - pe(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }

                function Ce(e) {
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

                function je() {
                    var e = R.p;
                    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : cf(e.type)
                }
                var Ne = Math.random().toString(36).slice(2),
                    Le = "__reactFiber$" + Ne,
                    Te = "__reactProps$" + Ne,
                    Me = "__reactContainer$" + Ne,
                    Re = "__reactEvents$" + Ne,
                    Ae = "__reactListeners$" + Ne,
                    De = "__reactHandles$" + Ne,
                    Ie = "__reactResources$" + Ne,
                    $e = "__reactMarker$" + Ne;

                function Fe(e) {
                    delete e[Le], delete e[Te], delete e[Re], delete e[Ae], delete e[De]
                }

                function Ue(e) {
                    var t = e[Le];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[Me] || n[Le]) {
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

                function He(e) {
                    if (e = e[Le] || e[Me]) {
                        var t = e.tag;
                        if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e
                    }
                    return null
                }

                function Ve(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
                    throw Error(o(33))
                }

                function We(e) {
                    var t = e[Ie];
                    return t || (t = e[Ie] = {
                        hoistableStyles: new Map,
                        hoistableScripts: new Map
                    }), t
                }

                function Be(e) {
                    e[$e] = !0
                }
                var Ze = new Set,
                    qe = {};

                function Ge(e, t) {
                    Ke(e, t), Ke(e + "Capture", t)
                }

                function Ke(e, t) {
                    for (qe[e] = t, e = 0; e < t.length; e++) Ze.add(t[e])
                }
                var Qe, Ye, Xe = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
                    Je = {},
                    et = {};

                function tt(e, t, n) {
                    if (a = t, Q.call(et, a) || !Q.call(Je, a) && (Xe.test(a) ? et[a] = !0 : (Je[a] = !0, 0)))
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
                var it = !1;

                function ot(e, t) {
                    if (!e || it) return "";
                    it = !0;
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
                        var i = r.DetermineComponentFrameRoot(),
                            o = i[0],
                            l = i[1];
                        if (o && l) {
                            var s = o.split("\n"),
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
                        it = !1, Error.prepareStackTrace = n
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
                            return ot(e.type, !1);
                        case 11:
                            return ot(e.type.render, !1);
                        case 1:
                            return ot(e.type, !0);
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
                                i = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, i.call(this, e)
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

                function gt(e, t, n, r, a, i, o, l) {
                    e.name = "", null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + ut(t)) : e.value !== "" + ut(t) && (e.value = "" + ut(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? yt(e, o, ut(t)) : null != n ? yt(e, o, ut(n)) : null != r && e.removeAttribute("value"), null == a && null != i && (e.defaultChecked = !!i), null != a && (e.checked = a && "function" != typeof a && "symbol" != typeof a), null != l && "function" != typeof l && "symbol" != typeof l && "boolean" != typeof l ? e.name = "" + ut(l) : e.removeAttribute("name")
                }

                function vt(e, t, n, r, a, i, o, l) {
                    if (null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i && (e.type = i), null != t || null != n) {
                        if (("submit" === i || "reset" === i) && null == t) return;
                        n = null != n ? "" + ut(n) : "", t = null != t ? "" + ut(t) : n, l || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    r = "function" != typeof(r = null != r ? r : a) && "symbol" != typeof r && !!r, e.checked = l ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.name = o)
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
                            if (null != n) throw Error(o(92));
                            if (T(r)) {
                                if (1 < r.length) throw Error(o(93));
                                r = r[0]
                            }
                            n = r
                        }
                        null == n && (n = ""), t = n
                    }
                    n = ut(t), e.defaultValue = n, (r = e.textContent) === n && "" !== r && null !== r && (e.value = r)
                }

                function kt(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var xt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

                function St(e, t, n) {
                    var r = 0 === t.indexOf("--");
                    null == n || "boolean" == typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" != typeof n || 0 === n || xt.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
                }

                function zt(e, t, n) {
                    if (null != t && "object" != typeof t) throw Error(o(62));
                    if (e = e.style, null != n) {
                        for (var r in n) !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
                        for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && St(e, a, r)
                    } else
                        for (var i in t) t.hasOwnProperty(i) && St(e, i, t[i])
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
                var Ot = new Map([
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
                    Ct = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

                function Pt(e) {
                    return Ct.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
                }
                var jt = null;

                function Nt(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Lt = null,
                    Tt = null;

                function Mt(e) {
                    var t = He(e);
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
                                            if (!a) throw Error(o(90));
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
                var Rt = !1;

                function At(e, t, n) {
                    if (Rt) return e(t, n);
                    Rt = !0;
                    try {
                        return e(t)
                    } finally {
                        if (Rt = !1, (null !== Lt || null !== Tt) && (Uu(), Lt && (t = Lt, e = Tt, Tt = Lt = null, Mt(t), e)))
                            for (t = 0; t < e.length; t++) Mt(e[t])
                    }
                }

                function Dt(e, t) {
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
                    if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
                    return n
                }
                var It = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                    $t = !1;
                if (It) try {
                    var Ft = {};
                    Object.defineProperty(Ft, "passive", {
                        get: function() {
                            $t = !0
                        }
                    }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft)
                } catch (e) {
                    $t = !1
                }
                var Ut = null,
                    Ht = null,
                    Vt = null;

                function Wt() {
                    if (Vt) return Vt;
                    var e, t, n = Ht,
                        r = n.length,
                        a = "value" in Ut ? Ut.value : Ut.textContent,
                        i = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var o = r - e;
                    for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
                    return Vt = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function Bt(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function Zt() {
                    return !0
                }

                function qt() {
                    return !1
                }

                function Gt(e) {
                    function t(t, n, r, a, i) {
                        for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Zt : qt, this.isPropagationStopped = qt, this
                    }
                    return f(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Zt)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Zt)
                        },
                        persist: function() {},
                        isPersistent: Zt
                    }), t
                }
                var Kt, Qt, Yt, Xt = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    Jt = Gt(Xt),
                    en = f({}, Xt, {
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
                    ln = Gt(f({}, Xt, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    sn = Gt(f({}, Xt, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    })),
                    un = Gt(f({}, Xt, {
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
                            return "keypress" === e.type ? 13 === (e = Bt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? dn[e.keyCode] || "Unidentified" : ""
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
                            return "keypress" === e.type ? Bt(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? Bt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
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
                    yn = Gt(f({}, Xt, {
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
                    wn = Gt(f({}, Xt, {
                        newState: 0,
                        oldState: 0
                    })),
                    _n = [9, 13, 27, 32],
                    kn = It && "CompositionEvent" in window,
                    xn = null;
                It && "documentMode" in document && (xn = document.documentMode);
                var Sn = It && "TextEvent" in window && !xn,
                    zn = It && (!kn || xn && 8 < xn && 11 >= xn),
                    En = String.fromCharCode(32),
                    On = !1;

                function Cn(e, t) {
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
                var jn = !1,
                    Nn = {
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
                    return "input" === t ? !!Nn[e.type] : "textarea" === t
                }

                function Tn(e, t, n, r) {
                    Lt ? Tt ? Tt.push(r) : Tt = [r] : Lt = r, 0 < (t = Wc(t, "onChange")).length && (n = new Jt("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Mn = null,
                    Rn = null;

                function An(e) {
                    Ac(e, 0)
                }

                function Dn(e) {
                    if (ft(Ve(e))) return e
                }

                function In(e, t) {
                    if ("change" === e) return t
                }
                var $n = !1;
                if (It) {
                    var Fn;
                    if (It) {
                        var Un = "oninput" in document;
                        if (!Un) {
                            var Hn = document.createElement("div");
                            Hn.setAttribute("oninput", "return;"), Un = "function" == typeof Hn.oninput
                        }
                        Fn = Un
                    } else Fn = !1;
                    $n = Fn && (!document.documentMode || 9 < document.documentMode)
                }

                function Vn() {
                    Mn && (Mn.detachEvent("onpropertychange", Wn), Rn = Mn = null)
                }

                function Wn(e) {
                    if ("value" === e.propertyName && Dn(Rn)) {
                        var t = [];
                        Tn(t, Rn, e, Nt(e)), At(An, t)
                    }
                }

                function Bn(e, t, n) {
                    "focusin" === e ? (Vn(), Rn = n, (Mn = t).attachEvent("onpropertychange", Wn)) : "focusout" === e && Vn()
                }

                function Zn(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Dn(Rn)
                }

                function qn(e, t) {
                    if ("click" === e) return Dn(t)
                }

                function Gn(e, t) {
                    if ("input" === e || "change" === e) return Dn(t)
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

                function Xn(e, t) {
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

                function Jn(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Jn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
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
                    ir = null,
                    or = !1;

                function lr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    or || null == rr || rr !== pt(r) || (r = "selectionStart" in (r = rr) && tr(r) ? {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, ir && Qn(ir, r) || (ir = r, 0 < (r = Wc(ar, "onSelect")).length && (t = new Jt("onSelect", "select", null, t, n), e.push({
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

                function kr(e, t) {
                    wr.set(e, t), Ge(t, [e])
                }
                _r.push("scrollEnd");
                var xr = new WeakMap;

                function Sr(e, t) {
                    if ("object" == typeof e && null !== e) {
                        var n = xr.get(e);
                        return void 0 !== n ? n : (t = {
                            value: e,
                            source: t,
                            stack: st(t)
                        }, xr.set(e, t), t)
                    }
                    return {
                        value: e,
                        source: t,
                        stack: st(t)
                    }
                }
                var zr = [],
                    Er = 0,
                    Or = 0;

                function Cr() {
                    for (var e = Er, t = Or = Er = 0; t < e;) {
                        var n = zr[t];
                        zr[t++] = null;
                        var r = zr[t];
                        zr[t++] = null;
                        var a = zr[t];
                        zr[t++] = null;
                        var i = zr[t];
                        if (zr[t++] = null, null !== r && null !== a) {
                            var o = r.pending;
                            null === o ? a.next = a : (a.next = o.next, o.next = a), r.pending = a
                        }
                        0 !== i && Lr(n, a, i)
                    }
                }

                function Pr(e, t, n, r) {
                    zr[Er++] = e, zr[Er++] = t, zr[Er++] = n, zr[Er++] = r, Or |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
                }

                function jr(e, t, n, r) {
                    return Pr(e, t, n, r), Tr(e)
                }

                function Nr(e, t) {
                    return Pr(e, null, null, t), Tr(e)
                }

                function Lr(e, t, n) {
                    e.lanes |= n;
                    var r = e.alternate;
                    null !== r && (r.lanes |= n);
                    for (var a = !1, i = e.return; null !== i;) i.childLanes |= n, null !== (r = i.alternate) && (r.childLanes |= n), 22 === i.tag && (null === (e = i.stateNode) || 1 & e._visibility || (a = !0)), e = i, i = i.return;
                    return 3 === e.tag ? (i = e.stateNode, a && null !== t && (a = 31 - pe(n), null === (r = (e = i.hiddenUpdates)[a]) ? e[a] = [t] : r.push(t), t.lane = 536870912 | n), i) : null
                }

                function Tr(e) {
                    if (50 < Lu) throw Lu = 0, Tu = null, Error(o(185));
                    for (var t = e.return; null !== t;) t = (e = t).return;
                    return 3 === e.tag ? e.stateNode : null
                }
                var Mr = {};

                function Rr(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Ar(e, t, n, r) {
                    return new Rr(e, t, n, r)
                }

                function Dr(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Ir(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Ar(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 65011712 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
                }

                function $r(e, t) {
                    e.flags &= 65011714;
                    var n = e.alternate;
                    return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }), e
                }

                function Fr(e, t, n, r, a, i) {
                    var l = 0;
                    if (r = e, "function" == typeof e) Dr(e) && (l = 1);
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
                    }(e, n, H.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
                    else e: switch (e) {
                        case O:
                            return (e = Ar(31, n, t, a)).elementType = O, e.lanes = i, e;
                        case g:
                            return Ur(n.children, a, i, t);
                        case v:
                            l = 8, a |= 24;
                            break;
                        case y:
                            return (e = Ar(12, n, t, 2 | a)).elementType = y, e.lanes = i, e;
                        case x:
                            return (e = Ar(13, n, t, a)).elementType = x, e.lanes = i, e;
                        case S:
                            return (e = Ar(19, n, t, a)).elementType = S, e.lanes = i, e;
                        default:
                            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                                case b:
                                case _:
                                    l = 10;
                                    break e;
                                case w:
                                    l = 9;
                                    break e;
                                case k:
                                    l = 11;
                                    break e;
                                case z:
                                    l = 14;
                                    break e;
                                case E:
                                    l = 16, r = null;
                                    break e
                            }
                            l = 29, n = Error(o(130, null === e ? "null" : typeof e, "")), r = null
                    }
                    return (t = Ar(l, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
                }

                function Ur(e, t, n, r) {
                    return (e = Ar(7, e, r, t)).lanes = n, e
                }

                function Hr(e, t, n) {
                    return (e = Ar(6, e, null, t)).lanes = n, e
                }

                function Vr(e, t, n) {
                    return (t = Ar(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }
                var Wr = [],
                    Br = 0,
                    Zr = null,
                    qr = 0,
                    Gr = [],
                    Kr = 0,
                    Qr = null,
                    Yr = 1,
                    Xr = "";

                function Jr(e, t) {
                    Wr[Br++] = qr, Wr[Br++] = Zr, Zr = e, qr = t
                }

                function ea(e, t, n) {
                    Gr[Kr++] = Yr, Gr[Kr++] = Xr, Gr[Kr++] = Qr, Qr = e;
                    var r = Yr;
                    e = Xr;
                    var a = 32 - pe(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var i = 32 - pe(t) + a;
                    if (30 < i) {
                        var o = a - a % 5;
                        i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Yr = 1 << 32 - pe(t) + a | n << a | r, Xr = i + e
                    } else Yr = 1 << i | n << a | r, Xr = e
                }

                function ta(e) {
                    null !== e.return && (Jr(e, 1), ea(e, 1, 0))
                }

                function na(e) {
                    for (; e === Zr;) Zr = Wr[--Br], Wr[Br] = null, qr = Wr[--Br], Wr[Br] = null;
                    for (; e === Qr;) Qr = Gr[--Kr], Gr[Kr] = null, Xr = Gr[--Kr], Gr[Kr] = null, Yr = Gr[--Kr], Gr[Kr] = null
                }
                var ra = null,
                    aa = null,
                    ia = !1,
                    oa = null,
                    la = !1,
                    sa = Error(o(519));

                function ua(e) {
                    throw ma(Sr(Error(o(418, "")), e)), sa
                }

                function ca(e) {
                    var t = e.stateNode,
                        n = e.type,
                        r = e.memoizedProps;
                    switch (t[Le] = e, t[Te] = r, n) {
                        case "dialog":
                            Dc("cancel", t), Dc("close", t);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Dc("load", t);
                            break;
                        case "video":
                        case "audio":
                            for (n = 0; n < Mc.length; n++) Dc(Mc[n], t);
                            break;
                        case "source":
                            Dc("error", t);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Dc("error", t), Dc("load", t);
                            break;
                        case "details":
                            Dc("toggle", t);
                            break;
                        case "input":
                            Dc("invalid", t), vt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), dt(t);
                            break;
                        case "select":
                            Dc("invalid", t);
                            break;
                        case "textarea":
                            Dc("invalid", t), _t(t, r.value, r.defaultValue, r.children), dt(t)
                    }
                    "string" != typeof(n = r.children) && "number" != typeof n && "bigint" != typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Qc(t.textContent, n) ? (null != r.popover && (Dc("beforetoggle", t), Dc("toggle", t)), null != r.onScroll && Dc("scroll", t), null != r.onScrollEnd && Dc("scrollend", t), null != r.onClick && (t.onclick = Yc), t = !0) : t = !1, t || ua(e)
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
                    if (!ia) return da(e), ia = !0, !1;
                    var t, n = e.tag;
                    if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !("form" !== (t = e.type) && "button" !== t) || od(e.type, e.memoizedProps)), t = !t), t && aa && ua(e), da(e), 13 === n) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
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
                    aa = ra = null, ia = !1
                }

                function ha() {
                    var e = oa;
                    return null !== e && (null === bu ? bu = e : bu.push.apply(bu, e), oa = null), e
                }

                function ma(e) {
                    null === oa ? oa = [e] : oa.push(e)
                }
                var ga = $(null),
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

                function ka(e, t, n, r) {
                    var a = e.child;
                    for (null !== a && (a.return = e); null !== a;) {
                        var i = a.dependencies;
                        if (null !== i) {
                            var l = a.child;
                            i = i.firstContext;
                            e: for (; null !== i;) {
                                var s = i;
                                i = a;
                                for (var u = 0; u < t.length; u++)
                                    if (s.context === t[u]) {
                                        i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), _a(i.return, n, e), r || (l = null);
                                        break e
                                    } i = s.next
                            }
                        } else if (18 === a.tag) {
                            if (null === (l = a.return)) throw Error(o(341));
                            l.lanes |= n, null !== (i = l.alternate) && (i.lanes |= n), _a(l, n, e), l = null
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

                function xa(e, t, n, r) {
                    e = null;
                    for (var a = t, i = !1; null !== a;) {
                        if (!i)
                            if (524288 & a.flags) i = !0;
                            else if (262144 & a.flags) break;
                        if (10 === a.tag) {
                            var l = a.alternate;
                            if (null === l) throw Error(o(387));
                            if (null !== (l = l.memoizedProps)) {
                                var s = a.type;
                                Kn(a.pendingProps.value, l.value) || (null !== e ? e.push(s) : e = [s])
                            }
                        } else if (a === B.current) {
                            if (null === (l = a.alternate)) throw Error(o(387));
                            l.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(Gd) : e = [Gd])
                        }
                        a = a.return
                    }
                    null !== e && ka(t, e, n, r), t.flags |= 262144
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
                    return Ca(va, e)
                }

                function Oa(e, t) {
                    return null === va && za(e), Ca(e, t)
                }

                function Ca(e, t) {
                    var n = t._currentValue;
                    if (t = {
                            context: t,
                            memoizedValue: n,
                            next: null
                        }, null === ya) {
                        if (null === e) throw Error(o(308));
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
                    ja = r.unstable_scheduleCallback,
                    Na = r.unstable_NormalPriority,
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

                function Ma(e) {
                    e.refCount--, 0 === e.refCount && ja(Na, function() {
                        e.controller.abort()
                    })
                }
                var Ra = null,
                    Aa = 0,
                    Da = 0,
                    Ia = null;

                function $a() {
                    if (0 === --Aa && null !== Ra) {
                        null !== Ia && (Ia.status = "fulfilled");
                        var e = Ra;
                        Ra = null, Da = 0, Ia = null;
                        for (var t = 0; t < e.length; t++)(0, e[t])()
                    }
                }
                var Fa = M.S;
                M.S = function(e, t) {
                    "object" == typeof t && null !== t && "function" == typeof t.then && function(e, t) {
                        if (null === Ra) {
                            var n = Ra = [];
                            Aa = 0, Da = Pc(), Ia = {
                                status: "pending",
                                value: void 0,
                                then: function(e) {
                                    n.push(e)
                                }
                            }
                        }
                        Aa++, t.then($a, $a)
                    }(0, t), null !== Fa && Fa(e, t)
                };
                var Ua = $(null);

                function Ha() {
                    var e = Ua.current;
                    return null !== e ? e : ru.pooledCache
                }

                function Va(e, t) {
                    U(Ua, null === t ? Ua.current : t.pool)
                }

                function Wa() {
                    var e = Ha();
                    return null === e ? null : {
                        parent: La._currentValue,
                        pool: e
                    }
                }
                var Ba = Error(o(460)),
                    Za = Error(o(474)),
                    qa = Error(o(542)),
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
                            throw ei(e = t.reason), e;
                        default:
                            if ("string" == typeof t.status) t.then(Qa, Qa);
                            else {
                                if (null !== (e = ru) && 100 < e.shellSuspendCounter) throw Error(o(482));
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
                                    throw ei(e = t.reason), e
                            }
                            throw Xa = t, Ba
                    }
                }
                var Xa = null;

                function Ja() {
                    if (null === Xa) throw Error(o(459));
                    var e = Xa;
                    return Xa = null, e
                }

                function ei(e) {
                    if (e === Ba || e === qa) throw Error(o(483))
                }
                var ti = !1;

                function ni(e) {
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

                function ri(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        callbacks: null
                    })
                }

                function ai(e) {
                    return {
                        lane: e,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function ii(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 2 & nu) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = Tr(e), Lr(e, null, n), t
                    }
                    return Pr(e, r, t, n), Tr(e)
                }

                function oi(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 4194048 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, Oe(e, n)
                    }
                }

                function li(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var o = {
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: null,
                                    next: null
                                };
                                null === i ? a = i = o : i = i.next = o, n = n.next
                            } while (null !== n);
                            null === i ? a = i = t : i = i.next = t
                        } else a = i = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            callbacks: r.callbacks
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }
                var si = !1;

                function ui() {
                    if (si && null !== Ia) throw Ia
                }

                function ci(e, t, n, r) {
                    si = !1;
                    var a = e.updateQueue;
                    ti = !1;
                    var i = a.firstBaseUpdate,
                        o = a.lastBaseUpdate,
                        l = a.shared.pending;
                    if (null !== l) {
                        a.shared.pending = null;
                        var s = l,
                            u = s.next;
                        s.next = null, null === o ? i = u : o.next = u, o = s;
                        var c = e.alternate;
                        null !== c && (l = (c = c.updateQueue).lastBaseUpdate) !== o && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s)
                    }
                    if (null !== i) {
                        var d = a.baseState;
                        for (o = 0, c = u = s = null, l = i;;) {
                            var p = -536870913 & l.lane,
                                h = p !== l.lane;
                            if (h ? (iu & p) === p : (r & p) === p) {
                                0 !== p && p === Da && (si = !0), null !== c && (c = c.next = {
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
                                            ti = !0
                                    }
                                }
                                null !== (p = l.callback) && (e.flags |= 64, h && (e.flags |= 8192), null === (h = a.callbacks) ? a.callbacks = [p] : h.push(p))
                            } else h = {
                                lane: p,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            }, null === c ? (u = c = h, s = d) : c = c.next = h, o |= p;
                            if (null === (l = l.next)) {
                                if (null === (l = a.shared.pending)) break;
                                l = (h = l).next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null
                            }
                        }
                        null === c && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null === i && (a.shared.lanes = 0), pu |= o, e.lanes = o, e.memoizedState = d
                    }
                }

                function di(e, t) {
                    if ("function" != typeof e) throw Error(o(191, e));
                    e.call(t)
                }

                function fi(e, t) {
                    var n = e.callbacks;
                    if (null !== n)
                        for (e.callbacks = null, e = 0; e < n.length; e++) di(n[e], t)
                }
                var pi = $(null),
                    hi = $(0);

                function mi(e, t) {
                    U(hi, e = du), U(pi, t), du = e | t.baseLanes
                }

                function gi() {
                    U(hi, du), U(pi, pi.current)
                }

                function vi() {
                    du = hi.current, F(pi), F(hi)
                }
                var yi = 0,
                    bi = null,
                    wi = null,
                    _i = null,
                    ki = !1,
                    xi = !1,
                    Si = !1,
                    zi = 0,
                    Ei = 0,
                    Oi = null,
                    Ci = 0;

                function Pi() {
                    throw Error(o(321))
                }

                function ji(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!Kn(e[n], t[n])) return !1;
                    return !0
                }

                function Ni(e, t, n, r, a, i) {
                    return yi = i, bi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = null === e || null === e.memoizedState ? Zo : qo, Si = !1, i = n(r, a), Si = !1, xi && (i = Ti(t, n, r, a)), Li(e), i
                }

                function Li(e) {
                    M.H = Bo;
                    var t = null !== wi && null !== wi.next;
                    if (yi = 0, _i = wi = bi = null, ki = !1, Ei = 0, Oi = null, t) throw Error(o(300));
                    null === e || Ol || null !== (e = e.dependencies) && Sa(e) && (Ol = !0)
                }

                function Ti(e, t, n, r) {
                    bi = e;
                    var a = 0;
                    do {
                        if (xi && (Oi = null), Ei = 0, xi = !1, 25 <= a) throw Error(o(301));
                        if (a += 1, _i = wi = null, null != e.updateQueue) {
                            var i = e.updateQueue;
                            i.lastEffect = null, i.events = null, i.stores = null, null != i.memoCache && (i.memoCache.index = 0)
                        }
                        M.H = Go, i = t(n, r)
                    } while (xi);
                    return i
                }

                function Mi() {
                    var e = M.H,
                        t = e.useState()[0];
                    return t = "function" == typeof t.then ? Fi(t) : t, e = e.useState()[0], (null !== wi ? wi.memoizedState : null) !== e && (bi.flags |= 1024), t
                }

                function Ri() {
                    var e = 0 !== zi;
                    return zi = 0, e
                }

                function Ai(e, t, n) {
                    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
                }

                function Di(e) {
                    if (ki) {
                        for (e = e.memoizedState; null !== e;) {
                            var t = e.queue;
                            null !== t && (t.pending = null), e = e.next
                        }
                        ki = !1
                    }
                    yi = 0, _i = wi = bi = null, xi = !1, Ei = zi = 0, Oi = null
                }

                function Ii() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === _i ? bi.memoizedState = _i = e : _i = _i.next = e, _i
                }

                function $i() {
                    if (null === wi) {
                        var e = bi.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = wi.next;
                    var t = null === _i ? bi.memoizedState : _i.next;
                    if (null !== t) _i = t, wi = e;
                    else {
                        if (null === e) {
                            if (null === bi.alternate) throw Error(o(467));
                            throw Error(o(310))
                        }
                        e = {
                            memoizedState: (wi = e).memoizedState,
                            baseState: wi.baseState,
                            baseQueue: wi.baseQueue,
                            queue: wi.queue,
                            next: null
                        }, null === _i ? bi.memoizedState = _i = e : _i = _i.next = e
                    }
                    return _i
                }

                function Fi(e) {
                    var t = Ei;
                    return Ei += 1, null === Oi && (Oi = []), e = Ya(Oi, e, t), t = bi, null === (null === _i ? t.memoizedState : _i.next) && (t = t.alternate, M.H = null === t || null === t.memoizedState ? Zo : qo), e
                }

                function Ui(e) {
                    if (null !== e && "object" == typeof e) {
                        if ("function" == typeof e.then) return Fi(e);
                        if (e.$$typeof === _) return Ea(e)
                    }
                    throw Error(o(438, String(e)))
                }

                function Hi(e) {
                    var t = null,
                        n = bi.updateQueue;
                    if (null !== n && (t = n.memoCache), null == t) {
                        var r = bi.alternate;
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
                        }, bi.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
                        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = C;
                    return t.index++, n
                }

                function Vi(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function Wi(e) {
                    return Bi($i(), wi, e)
                }

                function Bi(e, t, n) {
                    var r = e.queue;
                    if (null === r) throw Error(o(311));
                    r.lastRenderedReducer = n;
                    var a = e.baseQueue,
                        i = r.pending;
                    if (null !== i) {
                        if (null !== a) {
                            var l = a.next;
                            a.next = i.next, i.next = l
                        }
                        t.baseQueue = a = i, r.pending = null
                    }
                    if (i = e.baseState, null === a) e.memoizedState = i;
                    else {
                        var s = l = null,
                            u = null,
                            c = t = a.next,
                            d = !1;
                        do {
                            var f = -536870913 & c.lane;
                            if (f !== c.lane ? (iu & f) === f : (yi & f) === f) {
                                var p = c.revertLane;
                                if (0 === p) null !== u && (u = u.next = {
                                    lane: 0,
                                    revertLane: 0,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                }), f === Da && (d = !0);
                                else {
                                    if ((yi & p) === p) {
                                        c = c.next, p === Da && (d = !0);
                                        continue
                                    }
                                    f = {
                                        lane: 0,
                                        revertLane: c.revertLane,
                                        action: c.action,
                                        hasEagerState: c.hasEagerState,
                                        eagerState: c.eagerState,
                                        next: null
                                    }, null === u ? (s = u = f, l = i) : u = u.next = f, bi.lanes |= p, pu |= p
                                }
                                f = c.action, Si && n(i, f), i = c.hasEagerState ? c.eagerState : n(i, f)
                            } else p = {
                                lane: f,
                                revertLane: c.revertLane,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }, null === u ? (s = u = p, l = i) : u = u.next = p, bi.lanes |= f, pu |= f;
                            c = c.next
                        } while (null !== c && c !== t);
                        if (null === u ? l = i : u.next = s, !Kn(i, e.memoizedState) && (Ol = !0, d && null !== (n = Ia))) throw n;
                        e.memoizedState = i, e.baseState = l, e.baseQueue = u, r.lastRenderedState = i
                    }
                    return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]
                }

                function Zi(e) {
                    var t = $i(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        i = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var l = a = a.next;
                        do {
                            i = e(i, l.action), l = l.next
                        } while (l !== a);
                        Kn(i, t.memoizedState) || (Ol = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                    }
                    return [i, r]
                }

                function qi(e, t, n) {
                    var r = bi,
                        a = $i(),
                        i = ia;
                    if (i) {
                        if (void 0 === n) throw Error(o(407));
                        n = n()
                    } else n = t();
                    var l = !Kn((wi || a).memoizedState, n);
                    if (l && (a.memoizedState = n, Ol = !0), a = a.queue, vo(2048, 8, Qi.bind(null, r, a, e), [e]), a.getSnapshot !== t || l || null !== _i && 1 & _i.memoizedState.tag) {
                        if (r.flags |= 2048, ho(9, {
                                destroy: void 0,
                                resource: void 0
                            }, Ki.bind(null, r, a, n, t), null), null === ru) throw Error(o(349));
                        i || 124 & yi || Gi(r, t, n)
                    }
                    return n
                }

                function Gi(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = bi.updateQueue) ? (t = {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }, bi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Ki(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Yi(t) && Xi(e)
                }

                function Qi(e, t, n) {
                    return n(function() {
                        Yi(t) && Xi(e)
                    })
                }

                function Yi(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !Kn(e, n)
                    } catch (e) {
                        return !0
                    }
                }

                function Xi(e) {
                    var t = Nr(e, 2);
                    null !== t && Au(t, 0, 2)
                }

                function Ji(e) {
                    var t = Ii();
                    if ("function" == typeof e) {
                        var n = e;
                        if (e = n(), Si) {
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
                        lastRenderedReducer: Vi,
                        lastRenderedState: e
                    }, t
                }

                function eo(e, t, n, r) {
                    return e.baseState = n, Bi(e, wi, "function" == typeof r ? r : Vi)
                }

                function to(e, t, n, r, a) {
                    if (Ho(e)) throw Error(o(485));
                    if (null !== (e = t.action)) {
                        var i = {
                            payload: a,
                            action: e,
                            next: null,
                            isTransition: !0,
                            status: "pending",
                            value: null,
                            reason: null,
                            listeners: [],
                            then: function(e) {
                                i.listeners.push(e)
                            }
                        };
                        null !== M.T ? n(!0) : i.isTransition = !1, r(i), null === (n = t.pending) ? (i.next = t.pending = i, no(t, i)) : (i.next = n.next, t.pending = n.next = i)
                    }
                }

                function no(e, t) {
                    var n = t.action,
                        r = t.payload,
                        a = e.state;
                    if (t.isTransition) {
                        var i = M.T,
                            o = {};
                        M.T = o;
                        try {
                            var l = n(a, r),
                                s = M.S;
                            null !== s && s(o, l), ro(e, t, l)
                        } catch (n) {
                            io(e, t, n)
                        } finally {
                            M.T = i
                        }
                    } else try {
                        ro(e, t, i = n(a, r))
                    } catch (n) {
                        io(e, t, n)
                    }
                }

                function ro(e, t, n) {
                    null !== n && "object" == typeof n && "function" == typeof n.then ? n.then(function(n) {
                        ao(e, t, n)
                    }, function(n) {
                        return io(e, t, n)
                    }) : ao(e, t, n)
                }

                function ao(e, t, n) {
                    t.status = "fulfilled", t.value = n, oo(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, no(e, n)))
                }

                function io(e, t, n) {
                    var r = e.pending;
                    if (e.pending = null, null !== r) {
                        r = r.next;
                        do {
                            t.status = "rejected", t.reason = n, oo(t), t = t.next
                        } while (t !== r)
                    }
                    e.action = null
                }

                function oo(e) {
                    e = e.listeners;
                    for (var t = 0; t < e.length; t++)(0, e[t])()
                }

                function lo(e, t) {
                    return t
                }

                function so(e, t) {
                    if (ia) {
                        var n = ru.formState;
                        if (null !== n) {
                            e: {
                                var r = bi;
                                if (ia) {
                                    if (aa) {
                                        t: {
                                            for (var a = aa, i = la; 8 !== a.nodeType;) {
                                                if (!i) {
                                                    a = null;
                                                    break t
                                                }
                                                if (null === (a = vd(a.nextSibling))) {
                                                    a = null;
                                                    break t
                                                }
                                            }
                                            a = "F!" === (i = a.data) || "F" === i ? a : null
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
                    return (n = Ii()).memoizedState = n.baseState = t, r = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: lo,
                        lastRenderedState: t
                    }, n.queue = r, n = $o.bind(null, bi, r), r.dispatch = n, r = Ji(!1), i = Uo.bind(null, bi, !1, r.queue), a = {
                        state: t,
                        dispatch: null,
                        action: e,
                        pending: null
                    }, (r = Ii()).queue = a, n = to.bind(null, bi, a, i, n), a.dispatch = n, r.memoizedState = e, [t, n, !1]
                }

                function uo(e) {
                    return co($i(), wi, e)
                }

                function co(e, t, n) {
                    if (t = Bi(e, t, lo)[0], e = Wi(Vi)[0], "object" == typeof t && null !== t && "function" == typeof t.then) try {
                        var r = Fi(t)
                    } catch (e) {
                        if (e === Ba) throw qa;
                        throw e
                    } else r = t;
                    var a = (t = $i()).queue,
                        i = a.dispatch;
                    return n !== t.memoizedState && (bi.flags |= 2048, ho(9, {
                        destroy: void 0,
                        resource: void 0
                    }, fo.bind(null, a, n), null)), [r, i, e]
                }

                function fo(e, t) {
                    e.action = t
                }

                function po(e) {
                    var t = $i(),
                        n = wi;
                    if (null !== n) return co(t, n, e);
                    $i(), t = t.memoizedState;
                    var r = (n = $i()).queue.dispatch;
                    return n.memoizedState = e, [t, r, !1]
                }

                function ho(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: n,
                        deps: r,
                        inst: t,
                        next: null
                    }, null === (t = bi.updateQueue) && (t = {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }, bi.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function mo() {
                    return $i().memoizedState
                }

                function go(e, t, n, r) {
                    var a = Ii();
                    r = void 0 === r ? null : r, bi.flags |= e, a.memoizedState = ho(1 | t, {
                        destroy: void 0,
                        resource: void 0
                    }, n, r)
                }

                function vo(e, t, n, r) {
                    var a = $i();
                    r = void 0 === r ? null : r;
                    var i = a.memoizedState.inst;
                    null !== wi && null !== r && ji(r, wi.memoizedState.deps) ? a.memoizedState = ho(t, i, n, r) : (bi.flags |= e, a.memoizedState = ho(1 | t, i, n, r))
                }

                function yo(e, t) {
                    go(8390656, 8, e, t)
                }

                function bo(e, t) {
                    vo(2048, 8, e, t)
                }

                function wo(e, t) {
                    return vo(4, 2, e, t)
                }

                function _o(e, t) {
                    return vo(4, 4, e, t)
                }

                function ko(e, t) {
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

                function xo(e, t, n) {
                    n = null != n ? n.concat([e]) : null, vo(4, 4, ko.bind(null, t, e), n)
                }

                function So() {}

                function zo(e, t) {
                    var n = $i();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== t && ji(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Eo(e, t) {
                    var n = $i();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    if (null !== t && ji(t, r[1])) return r[0];
                    if (r = e(), Si) {
                        fe(!0);
                        try {
                            e()
                        } finally {
                            fe(!1)
                        }
                    }
                    return n.memoizedState = [r, t], r
                }

                function Oo(e, t, n) {
                    return void 0 === n || 1073741824 & yi ? e.memoizedState = t : (e.memoizedState = n, e = Ru(), bi.lanes |= e, pu |= e, n)
                }

                function Co(e, t, n, r) {
                    return Kn(n, t) ? n : null !== pi.current ? (e = Oo(e, n, r), Kn(e, t) || (Ol = !0), e) : 42 & yi ? (e = Ru(), bi.lanes |= e, pu |= e, t) : (Ol = !0, e.memoizedState = n)
                }

                function Po(e, t, n, r, a) {
                    var i = R.p;
                    R.p = 0 !== i && 8 > i ? i : 8;
                    var o, l, s, u = M.T,
                        c = {};
                    M.T = c, Uo(e, !1, t, n);
                    try {
                        var d = a(),
                            f = M.S;
                        null !== f && f(c, d), null !== d && "object" == typeof d && "function" == typeof d.then ? Fo(e, t, (o = r, l = [], s = {
                            status: "pending",
                            value: null,
                            reason: null,
                            then: function(e) {
                                l.push(e)
                            }
                        }, d.then(function() {
                            s.status = "fulfilled", s.value = o;
                            for (var e = 0; e < l.length; e++)(0, l[e])(o)
                        }, function(e) {
                            for (s.status = "rejected", s.reason = e, e = 0; e < l.length; e++)(0, l[e])(void 0)
                        }), s), Mu()) : Fo(e, t, r, Mu())
                    } catch (n) {
                        Fo(e, t, {
                            then: function() {},
                            status: "rejected",
                            reason: n
                        }, Mu())
                    } finally {
                        R.p = i, M.T = u
                    }
                }

                function jo() {}

                function No(e, t, n, r) {
                    if (5 !== e.tag) throw Error(o(476));
                    var a = Lo(e).queue;
                    Po(e, a, t, A, null === n ? jo : function() {
                        return To(e), n(r)
                    })
                }

                function Lo(e) {
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
                            lastRenderedReducer: Vi,
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
                            lastRenderedReducer: Vi,
                            lastRenderedState: n
                        },
                        next: null
                    }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
                }

                function To(e) {
                    Fo(e, Lo(e).next.queue, {}, Mu())
                }

                function Mo() {
                    return Ea(Gd)
                }

                function Ro() {
                    return $i().memoizedState
                }

                function Ao() {
                    return $i().memoizedState
                }

                function Do(e) {
                    for (var t = e.return; null !== t;) {
                        switch (t.tag) {
                            case 24:
                            case 3:
                                var n = Mu(),
                                    r = ii(t, e = ai(n), n);
                                return null !== r && (Au(r, 0, n), oi(r, t, n)), t = {
                                    cache: Ta()
                                }, void(e.payload = t)
                        }
                        t = t.return
                    }
                }

                function Io(e, t, n) {
                    var r = Mu();
                    n = {
                        lane: r,
                        revertLane: 0,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, Ho(e) ? Vo(t, n) : null !== (n = jr(e, t, n, r)) && (Au(n, 0, r), Wo(n, t, r))
                }

                function $o(e, t, n) {
                    Fo(e, t, n, Mu())
                }

                function Fo(e, t, n, r) {
                    var a = {
                        lane: r,
                        revertLane: 0,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    };
                    if (Ho(e)) Vo(t, a);
                    else {
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var o = t.lastRenderedState,
                                l = i(o, n);
                            if (a.hasEagerState = !0, a.eagerState = l, Kn(l, o)) return Pr(e, t, a, 0), null === ru && Cr(), !1
                        } catch (e) {}
                        if (null !== (n = jr(e, t, a, r))) return Au(n, 0, r), Wo(n, t, r), !0
                    }
                    return !1
                }

                function Uo(e, t, n, r) {
                    if (r = {
                            lane: 2,
                            revertLane: Pc(),
                            action: r,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, Ho(e)) {
                        if (t) throw Error(o(479))
                    } else null !== (t = jr(e, n, r, 2)) && Au(t, 0, 2)
                }

                function Ho(e) {
                    var t = e.alternate;
                    return e === bi || null !== t && t === bi
                }

                function Vo(e, t) {
                    xi = ki = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function Wo(e, t, n) {
                    if (4194048 & n) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, Oe(e, n)
                    }
                }
                var Bo = {
                        readContext: Ea,
                        use: Ui,
                        useCallback: Pi,
                        useContext: Pi,
                        useEffect: Pi,
                        useImperativeHandle: Pi,
                        useLayoutEffect: Pi,
                        useInsertionEffect: Pi,
                        useMemo: Pi,
                        useReducer: Pi,
                        useRef: Pi,
                        useState: Pi,
                        useDebugValue: Pi,
                        useDeferredValue: Pi,
                        useTransition: Pi,
                        useSyncExternalStore: Pi,
                        useId: Pi,
                        useHostTransitionStatus: Pi,
                        useFormState: Pi,
                        useActionState: Pi,
                        useOptimistic: Pi,
                        useMemoCache: Pi,
                        useCacheRefresh: Pi
                    },
                    Zo = {
                        readContext: Ea,
                        use: Ui,
                        useCallback: function(e, t) {
                            return Ii().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Ea,
                        useEffect: yo,
                        useImperativeHandle: function(e, t, n) {
                            n = null != n ? n.concat([e]) : null, go(4194308, 4, ko.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return go(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            go(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = Ii();
                            t = void 0 === t ? null : t;
                            var r = e();
                            if (Si) {
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
                            var r = Ii();
                            if (void 0 !== n) {
                                var a = n(t);
                                if (Si) {
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
                            }, r.queue = e, e = e.dispatch = Io.bind(null, bi, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, Ii().memoizedState = e
                        },
                        useState: function(e) {
                            var t = (e = Ji(e)).queue,
                                n = $o.bind(null, bi, t);
                            return t.dispatch = n, [e.memoizedState, n]
                        },
                        useDebugValue: So,
                        useDeferredValue: function(e, t) {
                            return Oo(Ii(), e, t)
                        },
                        useTransition: function() {
                            var e = Ji(!1);
                            return e = Po.bind(null, bi, e.queue, !0, !1), Ii().memoizedState = e, [!1, e]
                        },
                        useSyncExternalStore: function(e, t, n) {
                            var r = bi,
                                a = Ii();
                            if (ia) {
                                if (void 0 === n) throw Error(o(407));
                                n = n()
                            } else {
                                if (n = t(), null === ru) throw Error(o(349));
                                124 & iu || Gi(r, t, n)
                            }
                            a.memoizedState = n;
                            var i = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = i, yo(Qi.bind(null, r, i, e), [e]), r.flags |= 2048, ho(9, {
                                destroy: void 0,
                                resource: void 0
                            }, Ki.bind(null, r, i, n, t), null), n
                        },
                        useId: function() {
                            var e = Ii(),
                                t = ru.identifierPrefix;
                            if (ia) {
                                var n = Xr;
                                t = "Â«" + t + "R" + (n = (Yr & ~(1 << 32 - pe(Yr) - 1)).toString(32) + n), 0 < (n = zi++) && (t += "H" + n.toString(32)), t += "Â»"
                            } else t = "Â«" + t + "r" + (n = Ci++).toString(32) + "Â»";
                            return e.memoizedState = t
                        },
                        useHostTransitionStatus: Mo,
                        useFormState: so,
                        useActionState: so,
                        useOptimistic: function(e) {
                            var t = Ii();
                            t.memoizedState = t.baseState = e;
                            var n = {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: null,
                                lastRenderedState: null
                            };
                            return t.queue = n, t = Uo.bind(null, bi, !0, n), n.dispatch = t, [e, t]
                        },
                        useMemoCache: Hi,
                        useCacheRefresh: function() {
                            return Ii().memoizedState = Do.bind(null, bi)
                        }
                    },
                    qo = {
                        readContext: Ea,
                        use: Ui,
                        useCallback: zo,
                        useContext: Ea,
                        useEffect: bo,
                        useImperativeHandle: xo,
                        useInsertionEffect: wo,
                        useLayoutEffect: _o,
                        useMemo: Eo,
                        useReducer: Wi,
                        useRef: mo,
                        useState: function() {
                            return Wi(Vi)
                        },
                        useDebugValue: So,
                        useDeferredValue: function(e, t) {
                            return Co($i(), wi.memoizedState, e, t)
                        },
                        useTransition: function() {
                            var e = Wi(Vi)[0],
                                t = $i().memoizedState;
                            return ["boolean" == typeof e ? e : Fi(e), t]
                        },
                        useSyncExternalStore: qi,
                        useId: Ro,
                        useHostTransitionStatus: Mo,
                        useFormState: uo,
                        useActionState: uo,
                        useOptimistic: function(e, t) {
                            return eo($i(), 0, e, t)
                        },
                        useMemoCache: Hi,
                        useCacheRefresh: Ao
                    },
                    Go = {
                        readContext: Ea,
                        use: Ui,
                        useCallback: zo,
                        useContext: Ea,
                        useEffect: bo,
                        useImperativeHandle: xo,
                        useInsertionEffect: wo,
                        useLayoutEffect: _o,
                        useMemo: Eo,
                        useReducer: Zi,
                        useRef: mo,
                        useState: function() {
                            return Zi(Vi)
                        },
                        useDebugValue: So,
                        useDeferredValue: function(e, t) {
                            var n = $i();
                            return null === wi ? Oo(n, e, t) : Co(n, wi.memoizedState, e, t)
                        },
                        useTransition: function() {
                            var e = Zi(Vi)[0],
                                t = $i().memoizedState;
                            return ["boolean" == typeof e ? e : Fi(e), t]
                        },
                        useSyncExternalStore: qi,
                        useId: Ro,
                        useHostTransitionStatus: Mo,
                        useFormState: po,
                        useActionState: po,
                        useOptimistic: function(e, t) {
                            var n = $i();
                            return null !== wi ? eo(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch])
                        },
                        useMemoCache: Hi,
                        useCacheRefresh: Ao
                    },
                    Ko = null,
                    Qo = 0;

                function Yo(e) {
                    var t = Qo;
                    return Qo += 1, null === Ko && (Ko = []), Ya(Ko, e, t)
                }

                function Xo(e, t) {
                    t = t.props.ref, e.ref = void 0 !== t ? t : null
                }

                function Jo(e, t) {
                    if (t.$$typeof === p) throw Error(o(525));
                    throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
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

                    function i(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 67108866, n) : r : (t.flags |= 67108866, n) : (t.flags |= 1048576, n)
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags |= 67108866), t
                    }

                    function s(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Hr(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        var i = n.type;
                        return i === g ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" == typeof i && null !== i && i.$$typeof === E && el(i) === t.type) ? (Xo(t = a(t, n.props), n), t.return = e, t) : (Xo(t = Fr(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Vr(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? ((t = Ur(n, e.mode, r, i)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t) return (t = Hr("" + t, e.mode, n)).return = e, t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case h:
                                    return Xo(n = Fr(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                                case m:
                                    return (t = Vr(t, e.mode, n)).return = e, t;
                                case E:
                                    return f(e, t = (0, t._init)(t._payload), n)
                            }
                            if (T(t) || j(t)) return (t = Ur(t, e.mode, n, null)).return = e, t;
                            if ("function" == typeof t.then) return f(e, Yo(t), n);
                            if (t.$$typeof === _) return f(e, Oa(e, t), n);
                            Jo(e, t)
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
                            if (T(n) || j(n)) return null !== a ? null : d(e, t, n, r, null);
                            if ("function" == typeof n.then) return p(e, t, Yo(n), r);
                            if (n.$$typeof === _) return p(e, t, Oa(e, n), r);
                            Jo(e, n)
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
                            if (T(r) || j(r)) return d(t, e = e.get(n) || null, r, a, null);
                            if ("function" == typeof r.then) return v(e, t, n, Yo(r), a);
                            if (r.$$typeof === _) return v(e, t, n, Oa(t, r), a);
                            Jo(t, r)
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
                                                    n(s, u.sibling), Xo(d = a(u, c.props), c), d.return = s, s = d;
                                                    break e
                                                }
                                                n(s, u);
                                                break
                                            }
                                            t(s, u), u = u.sibling
                                        }
                                        c.type === g ? ((d = Ur(c.props.children, s.mode, d, c.key)).return = s, s = d) : (Xo(d = Fr(c.type, c.key, c.props, null, s.mode, d), c), d.return = s, s = d)
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
                                        }(d = Vr(c, s.mode, d)).return = s,
                                        s = d
                                    }
                                    return l(s);
                                case E:
                                    return y(s, u, c = (b = c._init)(c._payload), d)
                            }
                            if (T(c)) return function(a, o, l, s) {
                                for (var u = null, c = null, d = o, h = o = 0, m = null; null !== d && h < l.length; h++) {
                                    d.index > h ? (m = d, d = null) : m = d.sibling;
                                    var g = p(a, d, l[h], s);
                                    if (null === g) {
                                        null === d && (d = m);
                                        break
                                    }
                                    e && d && null === g.alternate && t(a, d), o = i(g, o, h), null === c ? u = g : c.sibling = g, c = g, d = m
                                }
                                if (h === l.length) return n(a, d), ia && Jr(a, h), u;
                                if (null === d) {
                                    for (; h < l.length; h++) null !== (d = f(a, l[h], s)) && (o = i(d, o, h), null === c ? u = d : c.sibling = d, c = d);
                                    return ia && Jr(a, h), u
                                }
                                for (d = r(d); h < l.length; h++) null !== (m = v(d, a, h, l[h], s)) && (e && null !== m.alternate && d.delete(null === m.key ? h : m.key), o = i(m, o, h), null === c ? u = m : c.sibling = m, c = m);
                                return e && d.forEach(function(e) {
                                    return t(a, e)
                                }), ia && Jr(a, h), u
                            }(s, u, c, d);
                            if (j(c)) {
                                if ("function" != typeof(b = j(c))) throw Error(o(150));
                                return function(a, l, s, u) {
                                    if (null == s) throw Error(o(151));
                                    for (var c = null, d = null, h = l, m = l = 0, g = null, y = s.next(); null !== h && !y.done; m++, y = s.next()) {
                                        h.index > m ? (g = h, h = null) : g = h.sibling;
                                        var b = p(a, h, y.value, u);
                                        if (null === b) {
                                            null === h && (h = g);
                                            break
                                        }
                                        e && h && null === b.alternate && t(a, h), l = i(b, l, m), null === d ? c = b : d.sibling = b, d = b, h = g
                                    }
                                    if (y.done) return n(a, h), ia && Jr(a, m), c;
                                    if (null === h) {
                                        for (; !y.done; m++, y = s.next()) null !== (y = f(a, y.value, u)) && (l = i(y, l, m), null === d ? c = y : d.sibling = y, d = y);
                                        return ia && Jr(a, m), c
                                    }
                                    for (h = r(h); !y.done; m++, y = s.next()) null !== (y = v(h, a, m, y.value, u)) && (e && null !== y.alternate && h.delete(null === y.key ? m : y.key), l = i(y, l, m), null === d ? c = y : d.sibling = y, d = y);
                                    return e && h.forEach(function(e) {
                                        return t(a, e)
                                    }), ia && Jr(a, m), c
                                }(s, u, c = b.call(c), d)
                            }
                            if ("function" == typeof c.then) return y(s, u, Yo(c), d);
                            if (c.$$typeof === _) return y(s, u, Oa(s, c), d);
                            Jo(s, c)
                        }
                        return "string" == typeof c && "" !== c || "number" == typeof c || "bigint" == typeof c ? (c = "" + c, null !== u && 6 === u.tag ? (n(s, u.sibling), (d = a(u, c)).return = s, s = d) : (n(s, u), (d = Hr(c, s.mode, d)).return = s, s = d), l(s)) : n(s, u)
                    }
                    return function(e, t, n, r) {
                        try {
                            Qo = 0;
                            var a = y(e, t, n, r);
                            return Ko = null, a
                        } catch (t) {
                            if (t === Ba || t === qa) throw t;
                            var i = Ar(29, t, null, e.mode);
                            return i.lanes = r, i.return = e, i
                        }
                    }
                }
                var nl = tl(!0),
                    rl = tl(!1),
                    al = $(null),
                    il = null;

                function ol(e) {
                    var t = e.alternate;
                    U(cl, 1 & cl.current), U(al, e), null === il && (null === t || null !== pi.current || null !== t.memoizedState) && (il = e)
                }

                function ll(e) {
                    if (22 === e.tag) {
                        if (U(cl, cl.current), U(al, e), null === il) {
                            var t = e.alternate;
                            null !== t && null !== t.memoizedState && (il = e)
                        }
                    } else sl()
                }

                function sl() {
                    U(cl, cl.current), U(al, al.current)
                }

                function ul(e) {
                    F(al), il === e && (il = null), F(cl)
                }
                var cl = $(0);

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
                        var r = Mu(),
                            a = ai(r);
                        a.payload = t, null != n && (a.callback = n), null !== (t = ii(e, a, r)) && (Au(t, 0, r), oi(t, e, r))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = Mu(),
                            a = ai(r);
                        a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = ii(e, a, r)) && (Au(t, 0, r), oi(t, e, r))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = Mu(),
                            r = ai(n);
                        r.tag = 2, null != t && (r.callback = t), null !== (t = ii(e, r, n)) && (Au(t, 0, n), oi(t, e, n))
                    }
                };

                function hl(e, t, n, r, a, i, o) {
                    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !(t.prototype && t.prototype.isPureReactComponent && Qn(n, r) && Qn(a, i))
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

                function kl(e, t, n) {
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

                function xl(e, t, n) {
                    return (n = ai(n)).tag = 3, n.payload = {
                        element: null
                    }, n.callback = function() {
                        _l(e, t)
                    }, n
                }

                function Sl(e) {
                    return (e = ai(e)).tag = 3, e
                }

                function zl(e, t, n, r) {
                    var a = n.type.getDerivedStateFromError;
                    if ("function" == typeof a) {
                        var i = r.value;
                        e.payload = function() {
                            return a(i)
                        }, e.callback = function() {
                            kl(t, n, r)
                        }
                    }
                    var o = n.stateNode;
                    null !== o && "function" == typeof o.componentDidCatch && (e.callback = function() {
                        kl(t, n, r), "function" != typeof a && (null === Su ? Su = new Set([this]) : Su.add(this));
                        var e = r.stack;
                        this.componentDidCatch(r.value, {
                            componentStack: null !== e ? e : ""
                        })
                    })
                }
                var El = Error(o(461)),
                    Ol = !1;

                function Cl(e, t, n, r) {
                    t.child = null === e ? rl(t, null, n, r) : nl(t, e.child, n, r)
                }

                function Pl(e, t, n, r, a) {
                    n = n.render;
                    var i = t.ref;
                    if ("ref" in r) {
                        var o = {};
                        for (var l in r) "ref" !== l && (o[l] = r[l])
                    } else o = r;
                    return za(t), r = Ni(e, t, n, o, i, a), l = Ri(), null === e || Ol ? (ia && l && ta(t), t.flags |= 1, Cl(e, t, r, a), t.child) : (Ai(e, t, a), Kl(e, t, a))
                }

                function jl(e, t, n, r, a) {
                    if (null === e) {
                        var i = n.type;
                        return "function" != typeof i || Dr(i) || void 0 !== i.defaultProps || null !== n.compare ? ((e = Fr(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Nl(e, t, i, r, a))
                    }
                    if (i = e.child, !Ql(e, a)) {
                        var o = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : Qn)(o, r) && e.ref === t.ref) return Kl(e, t, a)
                    }
                    return t.flags |= 1, (e = Ir(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Nl(e, t, n, r, a) {
                    if (null !== e) {
                        var i = e.memoizedProps;
                        if (Qn(i, r) && e.ref === t.ref) {
                            if (Ol = !1, t.pendingProps = r = i, !Ql(e, a)) return t.lanes = e.lanes, Kl(e, t, a);
                            131072 & e.flags && (Ol = !0)
                        }
                    }
                    return Rl(e, t, n, r, a)
                }

                function Ll(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode) {
                        if (128 & t.flags) {
                            if (r = null !== i ? i.baseLanes | n : n, null !== e) {
                                for (a = t.child = e.child, i = 0; null !== a;) i = i | a.lanes | a.childLanes, a = a.sibling;
                                t.childLanes = i & ~r
                            } else t.childLanes = 0, t.child = null;
                            return Tl(e, t, r, n)
                        }
                        if (!(536870912 & n)) return t.lanes = t.childLanes = 536870912, Tl(e, t, null !== i ? i.baseLanes | n : n, n);
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null
                        }, null !== e && Va(0, null !== i ? i.cachePool : null), null !== i ? mi(t, i) : gi(), ll(t)
                    } else null !== i ? (Va(0, i.cachePool), mi(t, i), sl(), t.memoizedState = null) : (null !== e && Va(0, null), gi(), sl());
                    return Cl(e, t, a, n), t.child
                }

                function Tl(e, t, n, r) {
                    var a = Ha();
                    return a = null === a ? null : {
                        parent: La._currentValue,
                        pool: a
                    }, t.memoizedState = {
                        baseLanes: n,
                        cachePool: a
                    }, null !== e && Va(0, null), gi(), ll(t), null !== e && xa(e, t, r, !0), null
                }

                function Ml(e, t) {
                    var n = t.ref;
                    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
                    else {
                        if ("function" != typeof n && "object" != typeof n) throw Error(o(284));
                        null !== e && e.ref === n || (t.flags |= 4194816)
                    }
                }

                function Rl(e, t, n, r, a) {
                    return za(t), n = Ni(e, t, n, r, void 0, a), r = Ri(), null === e || Ol ? (ia && r && ta(t), t.flags |= 1, Cl(e, t, n, a), t.child) : (Ai(e, t, a), Kl(e, t, a))
                }

                function Al(e, t, n, r, a, i) {
                    return za(t), t.updateQueue = null, n = Ti(t, r, n, a), Li(e), r = Ri(), null === e || Ol ? (ia && r && ta(t), t.flags |= 1, Cl(e, t, n, i), t.child) : (Ai(e, t, i), Kl(e, t, i))
                }

                function Dl(e, t, n, r, a) {
                    if (za(t), null === t.stateNode) {
                        var i = Mr,
                            o = n.contextType;
                        "object" == typeof o && null !== o && (i = Ea(o)), i = new n(r, i), t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, i.updater = pl, t.stateNode = i, i._reactInternals = t, (i = t.stateNode).props = r, i.state = t.memoizedState, i.refs = {}, ni(t), o = n.contextType, i.context = "object" == typeof o && null !== o ? Ea(o) : Mr, i.state = t.memoizedState, "function" == typeof(o = n.getDerivedStateFromProps) && (fl(t, n, o, r), i.state = t.memoizedState), "function" == typeof n.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (o = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), o !== i.state && pl.enqueueReplaceState(i, i.state, null), ci(t, r, i, a), ui(), i.state = t.memoizedState), "function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !0
                    } else if (null === e) {
                        i = t.stateNode;
                        var l = t.memoizedProps,
                            s = gl(n, l);
                        i.props = s;
                        var u = i.context,
                            c = n.contextType;
                        o = Mr, "object" == typeof c && null !== c && (o = Ea(c));
                        var d = n.getDerivedStateFromProps;
                        c = "function" == typeof d || "function" == typeof i.getSnapshotBeforeUpdate, l = t.pendingProps !== l, c || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l || u !== o) && ml(t, i, r, o), ti = !1;
                        var f = t.memoizedState;
                        i.state = f, ci(t, r, i, a), ui(), u = t.memoizedState, l || f !== u || ti ? ("function" == typeof d && (fl(t, n, d, r), u = t.memoizedState), (s = ti || hl(t, n, s, r, f, u, o)) ? (c || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = o, r = s) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        i = t.stateNode, ri(e, t), c = gl(n, o = t.memoizedProps), i.props = c, d = t.pendingProps, f = i.context, u = n.contextType, s = Mr, "object" == typeof u && null !== u && (s = Ea(u)), (u = "function" == typeof(l = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (o !== d || f !== s) && ml(t, i, r, s), ti = !1, f = t.memoizedState, i.state = f, ci(t, r, i, a), ui();
                        var p = t.memoizedState;
                        o !== d || f !== p || ti || null !== e && null !== e.dependencies && Sa(e.dependencies) ? ("function" == typeof l && (fl(t, n, l, r), p = t.memoizedState), (c = ti || hl(t, n, c, r, f, p, s) || null !== e && null !== e.dependencies && Sa(e.dependencies)) ? (u || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, p, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, p, s)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), i.props = r, i.state = p, i.context = s, r = c) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return i = r, Ml(e, t), r = !!(128 & t.flags), i || r ? (i = t.stateNode, n = r && "function" != typeof n.getDerivedStateFromError ? null : i.render(), t.flags |= 1, null !== e && r ? (t.child = nl(t, e.child, null, a), t.child = nl(t, null, n, a)) : Cl(e, t, n, a), t.memoizedState = i.state, e = t.child) : e = Kl(e, t, a), e
                }

                function Il(e, t, n, r) {
                    return pa(), t.flags |= 256, Cl(e, t, n, r), t.child
                }
                var $l = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0,
                    hydrationErrors: null
                };

                function Fl(e) {
                    return {
                        baseLanes: e,
                        cachePool: Wa()
                    }
                }

                function Ul(e, t, n) {
                    return e = null !== e ? e.childLanes & ~n : 0, t && (e |= gu), e
                }

                function Hl(e, t, n) {
                    var r, a = t.pendingProps,
                        i = !1,
                        l = !!(128 & t.flags);
                    if ((r = l) || (r = (null === e || null !== e.memoizedState) && !!(2 & cl.current)), r && (i = !0, t.flags &= -129), r = !!(32 & t.flags), t.flags &= -33, null === e) {
                        if (ia) {
                            if (i ? ol(t) : sl(), ia) {
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
                                            overflow: Xr
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
                        return u = a.children, a = a.fallback, i ? (sl(), u = Wl({
                            mode: "hidden",
                            children: u
                        }, i = t.mode), a = Ur(a, i, n, null), u.return = t, a.return = t, u.sibling = a, t.child = u, (i = t.child).memoizedState = Fl(n), i.childLanes = Ul(e, r, n), t.memoizedState = $l, a) : (ol(t), Vl(t, u))
                    }
                    if (null !== (s = e.memoizedState) && null !== (u = s.dehydrated)) {
                        if (l) 256 & t.flags ? (ol(t), t.flags &= -257, t = Bl(e, t, n)) : null !== t.memoizedState ? (sl(), t.child = e.child, t.flags |= 128, t = null) : (sl(), i = a.fallback, u = t.mode, a = Wl({
                            mode: "visible",
                            children: a.children
                        }, u), (i = Ur(i, u, n, null)).flags |= 2, a.return = t, i.return = t, a.sibling = i, t.child = a, nl(t, e.child, null, n), (a = t.child).memoizedState = Fl(n), a.childLanes = Ul(e, r, n), t.memoizedState = $l, t = i);
                        else if (ol(t), gd(u)) {
                            if (r = u.nextSibling && u.nextSibling.dataset) var c = r.dgst;
                            r = c, (a = Error(o(419))).stack = "", a.digest = r, ma({
                                value: a,
                                source: null,
                                stack: null
                            }), t = Bl(e, t, n)
                        } else if (Ol || xa(e, t, n, !1), r = 0 !== (n & e.childLanes), Ol || r) {
                            if (null !== (r = ru) && 0 !== (a = 0 !== ((a = 42 & (a = n & -n) ? 1 : Ce(a)) & (r.suspendedLanes | n)) ? 0 : a) && a !== s.retryLane) throw s.retryLane = a, Nr(e, a), Au(r, 0, a), El;
                            "$?" === u.data || qu(), t = Bl(e, t, n)
                        } else "$?" === u.data ? (t.flags |= 192, t.child = e.child, t = null) : (e = s.treeContext, aa = vd(u.nextSibling), ra = t, ia = !0, oa = null, la = !1, null !== e && (Gr[Kr++] = Yr, Gr[Kr++] = Xr, Gr[Kr++] = Qr, Yr = e.id, Xr = e.overflow, Qr = t), (t = Vl(t, a.children)).flags |= 4096);
                        return t
                    }
                    return i ? (sl(), i = a.fallback, u = t.mode, c = (s = e.child).sibling, (a = Ir(s, {
                        mode: "hidden",
                        children: a.children
                    })).subtreeFlags = 65011712 & s.subtreeFlags, null !== c ? i = Ir(c, i) : (i = Ur(i, u, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, null === (u = e.child.memoizedState) ? u = Fl(n) : (null !== (s = u.cachePool) ? (c = La._currentValue, s = s.parent !== c ? {
                        parent: c,
                        pool: c
                    } : s) : s = Wa(), u = {
                        baseLanes: u.baseLanes | n,
                        cachePool: s
                    }), i.memoizedState = u, i.childLanes = Ul(e, r, n), t.memoizedState = $l, a) : (ol(t), e = (n = e.child).sibling, (n = Ir(n, {
                        mode: "visible",
                        children: a.children
                    })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n)
                }

                function Vl(e, t) {
                    return (t = Wl({
                        mode: "visible",
                        children: t
                    }, e.mode)).return = e, e.child = t
                }

                function Wl(e, t) {
                    return (e = Ar(22, e, null, t)).lanes = 0, e.stateNode = {
                        _visibility: 1,
                        _pendingMarkers: null,
                        _retryCache: null,
                        _transitions: null
                    }, e
                }

                function Bl(e, t, n) {
                    return nl(t, e.child, null, n), (e = Vl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function Zl(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), _a(e.return, t, n)
                }

                function ql(e, t, n, r, a) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a)
                }

                function Gl(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        i = r.tail;
                    if (Cl(e, t, r.children, n), 2 & (r = cl.current)) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Zl(e, n, t);
                            else if (19 === e.tag) Zl(e, n, t);
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
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ql(t, !1, a, n, i);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === dl(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            ql(t, !0, n, null, i);
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
                        if (xa(e, t, n, !1), 0 === (n & t.childLanes)) return null
                    }
                    if (null !== e && t.child !== e.child) throw Error(o(153));
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
                        if (e.memoizedProps !== t.pendingProps) Ol = !0;
                        else {
                            if (!(Ql(e, n) || 128 & t.flags)) return Ol = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Z(t, t.stateNode.containerInfo), ba(0, La, e.memoizedState.cache), pa();
                                            break;
                                        case 27:
                                        case 5:
                                            G(t);
                                            break;
                                        case 4:
                                            Z(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            ba(0, t.type, t.memoizedProps.value);
                                            break;
                                        case 13:
                                            var r = t.memoizedState;
                                            if (null !== r) return null !== r.dehydrated ? (ol(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Hl(e, t, n) : (ol(t), null !== (e = Kl(e, t, n)) ? e.sibling : null);
                                            ol(t);
                                            break;
                                        case 19:
                                            var a = !!(128 & e.flags);
                                            if ((r = 0 !== (n & t.childLanes)) || (xa(e, t, n, !1), r = 0 !== (n & t.childLanes)), a) {
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
                            Ol = !!(131072 & e.flags)
                        }
                    else Ol = !1, ia && 1048576 & t.flags && ea(t, qr, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 16:
                            e: {
                                e = t.pendingProps;
                                var r = t.elementType,
                                    a = r._init;
                                if (r = a(r._payload), t.type = r, "function" != typeof r) {
                                    if (null != r) {
                                        if ((a = r.$$typeof) === k) {
                                            t.tag = 11, t = Pl(null, t, r, e, n);
                                            break e
                                        }
                                        if (a === z) {
                                            t.tag = 14, t = jl(null, t, r, e, n);
                                            break e
                                        }
                                    }
                                    throw t = L(r) || r, Error(o(306, t, ""))
                                }
                                Dr(r) ? (e = gl(r, e), t.tag = 1, t = Dl(null, t, r, e, n)) : (t.tag = 0, t = Rl(null, t, r, e, n))
                            }
                            return t;
                        case 0:
                            return Rl(e, t, t.type, t.pendingProps, n);
                        case 1:
                            return Dl(e, t, r = t.type, a = gl(r, t.pendingProps), n);
                        case 3:
                            e: {
                                if (Z(t, t.stateNode.containerInfo), null === e) throw Error(o(387));r = t.pendingProps;
                                var i = t.memoizedState;a = i.element,
                                ri(e, t),
                                ci(t, r, null, n);
                                var l = t.memoizedState;
                                if (r = l.cache, ba(0, La, r), r !== i.cache && ka(t, [La], n, !0), ui(), r = l.element, i.isDehydrated) {
                                    if (i = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: l.cache
                                        }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                        t = Il(e, t, r, n);
                                        break e
                                    }
                                    if (r !== a) {
                                        ma(a = Sr(Error(o(424)), t)), t = Il(e, t, r, n);
                                        break e
                                    }
                                    for (e = 9 === (e = t.stateNode.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, aa = vd(e.firstChild), ra = t, ia = !0, oa = null, la = !0, n = rl(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (pa(), r === a) {
                                        t = Kl(e, t, n);
                                        break e
                                    }
                                    Cl(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 26:
                            return Ml(e, t), null === e ? (n = Cd(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : ia || (n = t.type, e = t.pendingProps, (r = rd(W.current).createElement(n))[Le] = t, r[Te] = e, ed(r, n, e), Be(r), t.stateNode = r) : t.memoizedState = Cd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                        case 27:
                            return G(t), null === e && ia && (r = t.stateNode = wd(t.type, t.pendingProps, W.current), ra = t, la = !0, a = aa, pd(t.type) ? (yd = a, aa = vd(r.firstChild)) : aa = a), Cl(e, t, t.pendingProps.children, n), Ml(e, t), null === e && (t.flags |= 4194304), t.child;
                        case 5:
                            return null === e && ia && ((a = r = aa) && (null !== (r = function(e, t, n, r) {
                                for (; 1 === e.nodeType;) {
                                    var a = n;
                                    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                        if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                                    } else if (r) {
                                        if (!e[$e]) switch (t) {
                                            case "meta":
                                                if (!e.hasAttribute("itemprop")) break;
                                                return e;
                                            case "link":
                                                if ("stylesheet" === (i = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) break;
                                                if (i !== a.rel || e.getAttribute("href") !== (null == a.href || "" === a.href ? null : a.href) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) || e.getAttribute("title") !== (null == a.title ? null : a.title)) break;
                                                return e;
                                            case "style":
                                                if (e.hasAttribute("data-precedence")) break;
                                                return e;
                                            case "script":
                                                if (((i = e.getAttribute("src")) !== (null == a.src ? null : a.src) || e.getAttribute("type") !== (null == a.type ? null : a.type) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                                return e;
                                            default:
                                                return e
                                        }
                                    } else {
                                        if ("input" !== t || "hidden" !== e.type) return e;
                                        var i = null == a.name ? null : "" + a.name;
                                        if ("hidden" === a.type && e.getAttribute("name") === i) return e
                                    }
                                    if (null === (e = vd(e.nextSibling))) break
                                }
                                return null
                            }(r, t.type, t.pendingProps, la)) ? (t.stateNode = r, ra = t, aa = vd(r.firstChild), la = !1, a = !0) : a = !1), a || ua(t)), G(t), a = t.type, i = t.pendingProps, l = null !== e ? e.memoizedProps : null, r = i.children, od(a, i) ? r = null : null !== l && od(a, l) && (t.flags |= 32), null !== t.memoizedState && (a = Ni(e, t, Mi, null, null, n), Gd._currentValue = a), Ml(e, t), Cl(e, t, r, n), t.child;
                        case 6:
                            return null === e && ia && ((e = n = aa) && (null !== (n = function(e, t, n) {
                                if ("" === t) return null;
                                for (; 3 !== e.nodeType;) {
                                    if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) return null;
                                    if (null === (e = vd(e.nextSibling))) return null
                                }
                                return e
                            }(n, t.pendingProps, la)) ? (t.stateNode = n, ra = t, aa = null, e = !0) : e = !1), e || ua(t)), null;
                        case 13:
                            return Hl(e, t, n);
                        case 4:
                            return Z(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = nl(t, null, r, n) : Cl(e, t, r, n), t.child;
                        case 11:
                            return Pl(e, t, t.type, t.pendingProps, n);
                        case 7:
                            return Cl(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return Cl(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            return r = t.pendingProps, ba(0, t.type, r.value), Cl(e, t, r.children, n), t.child;
                        case 9:
                            return a = t.type._context, r = t.pendingProps.children, za(t), r = r(a = Ea(a)), t.flags |= 1, Cl(e, t, r, n), t.child;
                        case 14:
                            return jl(e, t, t.type, t.pendingProps, n);
                        case 15:
                            return Nl(e, t, t.type, t.pendingProps, n);
                        case 19:
                            return Gl(e, t, n);
                        case 31:
                            return r = t.pendingProps, n = t.mode, r = {
                                mode: r.mode,
                                children: r.children
                            }, null === e ? ((n = Wl(r, n)).ref = t.ref, t.child = n, n.return = t, t = n) : ((n = Ir(e.child, r)).ref = t.ref, t.child = n, n.return = t, t = n), t;
                        case 22:
                            return Ll(e, t, n);
                        case 24:
                            return za(t), r = Ea(La), null === e ? (null === (a = Ha()) && (a = ru, i = Ta(), a.pooledCache = i, i.refCount++, null !== i && (a.pooledCacheLanes |= n), a = i), t.memoizedState = {
                                parent: r,
                                cache: a
                            }, ni(t), ba(0, La, a)) : (0 !== (e.lanes & n) && (ri(e, t), ci(t, null, null, n), ui()), a = e.memoizedState, i = t.memoizedState, a.parent !== r ? (a = {
                                parent: r,
                                cache: r
                            }, t.memoizedState = a, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), ba(0, La, r)) : (r = i.cache, ba(0, La, r), r !== a.cache && ka(t, [La], n, !0))), Cl(e, t, t.pendingProps.children, n), t.child;
                        case 29:
                            throw t.pendingProps
                    }
                    throw Error(o(156, t.tag))
                }

                function Xl(e) {
                    e.flags |= 4
                }

                function Jl(e, t) {
                    if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
                    else if (e.flags |= 16777216, !Ud(t)) {
                        if (null !== (t = al.current) && ((4194048 & iu) === iu ? null !== il : (62914560 & iu) !== iu && !(536870912 & iu) || t !== il)) throw Xa = Ga, Za;
                        e.flags |= 8192
                    }
                }

                function es(e, t) {
                    null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? xe() : 536870912, e.lanes |= t, vu |= t)
                }

                function ts(e, t) {
                    if (!ia) switch (e.tailMode) {
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
                            return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), wa(La), q(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (fa(t) ? Xl(t) : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, ha())), ns(t), null;
                        case 26:
                            return n = t.memoizedState, null === e ? (Xl(t), null !== n ? (ns(t), Jl(t, n)) : (ns(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Xl(t), ns(t), Jl(t, n)) : (ns(t), t.flags &= -16777217) : (e.memoizedProps !== r && Xl(t), ns(t), t.flags &= -16777217), null;
                        case 27:
                            K(t), n = W.current;
                            var a = t.type;
                            if (null !== e && null != t.stateNode) e.memoizedProps !== r && Xl(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return ns(t), null
                                }
                                e = H.current, fa(t) ? ca(t) : (e = wd(a, r, n), t.stateNode = e, Xl(t))
                            }
                            return ns(t), null;
                        case 5:
                            if (K(t), n = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && Xl(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return ns(t), null
                                }
                                if (e = H.current, fa(t)) ca(t);
                                else {
                                    switch (a = rd(W.current), e) {
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
                                    e && Xl(t)
                                }
                            }
                            return ns(t), t.flags &= -16777217, null;
                        case 6:
                            if (e && null != t.stateNode) e.memoizedProps !== r && Xl(t);
                            else {
                                if ("string" != typeof r && null === t.stateNode) throw Error(o(166));
                                if (e = W.current, fa(t)) {
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
                                        if (!a) throw Error(o(318));
                                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(o(317));
                                        a[Le] = t
                                    } else pa(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    ns(t), a = !1
                                } else a = ha(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a), a = !0;
                                if (!a) return 256 & t.flags ? (ul(t), t) : (ul(t), null)
                            }
                            if (ul(t), 128 & t.flags) return t.lanes = n, t;
                            if (n = null !== r, e = null !== e && null !== e.memoizedState, n) {
                                a = null, null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool);
                                var i = null;
                                null !== r.memoizedState && null !== r.memoizedState.cachePool && (i = r.memoizedState.cachePool.pool), i !== a && (r.flags |= 2048)
                            }
                            return n !== e && n && (t.child.flags |= 8192), es(t, t.updateQueue), ns(t), null;
                        case 4:
                            return q(), null === e && Fc(t.stateNode.containerInfo), ns(t), null;
                        case 10:
                            return wa(t.type), ns(t), null;
                        case 19:
                            if (F(cl), null === (a = t.memoizedState)) return ns(t), null;
                            if (r = !!(128 & t.flags), null === (i = a.rendering))
                                if (r) ts(a, !1);
                                else {
                                    if (0 !== fu || null !== e && 128 & e.flags)
                                        for (e = t.child; null !== e;) {
                                            if (null !== (i = dl(e))) {
                                                for (t.flags |= 128, ts(a, !1), e = i.updateQueue, t.updateQueue = e, es(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) $r(n, e), n = n.sibling;
                                                return U(cl, 1 & cl.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== a.tail && te() > ku && (t.flags |= 128, r = !0, ts(a, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = dl(i))) {
                                        if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, es(t, e), ts(a, !0), null === a.tail && "hidden" === a.tailMode && !i.alternate && !ia) return ns(t), null
                                    } else 2 * te() - a.renderingStartTime > ku && 536870912 !== n && (t.flags |= 128, r = !0, ts(a, !1), t.lanes = 4194304);
                                a.isBackwards ? (i.sibling = t.child, t.child = i) : (null !== (e = a.last) ? e.sibling = i : t.child = i, a.last = i)
                            }
                            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = te(), t.sibling = null, e = cl.current, U(cl, r ? 1 & e | 2 : 1 & e), t) : (ns(t), null);
                        case 22:
                        case 23:
                            return ul(t), vi(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? !!(536870912 & n) && !(128 & t.flags) && (ns(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ns(t), null !== (n = t.updateQueue) && es(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && F(Ua), null;
                        case 24:
                            return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), wa(La), ns(t), null;
                        case 25:
                        case 30:
                            return null
                    }
                    throw Error(o(156, t.tag))
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
                                if (null === t.alternate) throw Error(o(340));
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
                            return ul(t), vi(), null !== e && F(Ua), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 24:
                            return wa(La), null;
                        default:
                            return null
                    }
                }

                function is(e, t) {
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
                            ul(t), vi(), null !== e && F(Ua);
                            break;
                        case 24:
                            wa(La)
                    }
                }

                function os(e, t) {
                    try {
                        var n = t.updateQueue,
                            r = null !== n ? n.lastEffect : null;
                        if (null !== r) {
                            var a = r.next;
                            n = a;
                            do {
                                if ((n.tag & e) === e) {
                                    r = void 0;
                                    var i = n.create,
                                        o = n.inst;
                                    r = i(), o.destroy = r
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
                            var i = a.next;
                            r = i;
                            do {
                                if ((r.tag & e) === e) {
                                    var o = r.inst,
                                        l = o.destroy;
                                    if (void 0 !== l) {
                                        o.destroy = void 0, a = t;
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
                            } while (r !== i)
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
                            fi(t, n)
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
                                        i = null,
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
                                                r.hasOwnProperty(h) || Xc(e, t, h, null, r, f)
                                        }
                                    }
                                    for (var p in r) {
                                        var h = r[p];
                                        if (f = n[p], r.hasOwnProperty(p) && (null != h || null != f)) switch (p) {
                                            case "type":
                                                i = h;
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
                                                if (null != h) throw Error(o(137, t));
                                                break;
                                            default:
                                                h !== f && Xc(e, t, p, h, r, f)
                                        }
                                    }
                                    return void gt(e, l, s, u, c, d, i, a);
                                case "select":
                                    for (i in h = l = s = p = null, n)
                                        if (u = n[i], n.hasOwnProperty(i) && null != u) switch (i) {
                                            case "value":
                                                break;
                                            case "multiple":
                                                h = u;
                                            default:
                                                r.hasOwnProperty(i) || Xc(e, t, i, null, r, u)
                                        }
                                    for (a in r)
                                        if (i = r[a], u = n[a], r.hasOwnProperty(a) && (null != i || null != u)) switch (a) {
                                            case "value":
                                                p = i;
                                                break;
                                            case "defaultValue":
                                                s = i;
                                                break;
                                            case "multiple":
                                                l = i;
                                            default:
                                                i !== u && Xc(e, t, a, i, r, u)
                                        }
                                    return t = s, n = l, r = h, void(null != p ? bt(e, !!n, p, !1) : !!r != !!n && (null != t ? bt(e, !!n, t, !0) : bt(e, !!n, n ? [] : "", !1)));
                                case "textarea":
                                    for (s in h = p = null, n)
                                        if (a = n[s], n.hasOwnProperty(s) && null != a && !r.hasOwnProperty(s)) switch (s) {
                                            case "value":
                                            case "children":
                                                break;
                                            default:
                                                Xc(e, t, s, null, r, a)
                                        }
                                    for (l in r)
                                        if (a = r[l], i = n[l], r.hasOwnProperty(l) && (null != a || null != i)) switch (l) {
                                            case "value":
                                                p = a;
                                                break;
                                            case "defaultValue":
                                                h = a;
                                                break;
                                            case "children":
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                if (null != a) throw Error(o(91));
                                                break;
                                            default:
                                                a !== i && Xc(e, t, l, a, r, i)
                                        }
                                    return void wt(e, p, h);
                                case "option":
                                    for (var m in n) p = n[m], n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m) && ("selected" === m ? e.selected = !1 : Xc(e, t, m, null, r, p));
                                    for (u in r) p = r[u], h = n[u], !r.hasOwnProperty(u) || p === h || null == p && null == h || ("selected" === u ? e.selected = p && "function" != typeof p && "symbol" != typeof p : Xc(e, t, u, p, r, h));
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
                                    for (var g in n) p = n[g], n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && Xc(e, t, g, null, r, p);
                                    for (c in r)
                                        if (p = r[c], h = n[c], r.hasOwnProperty(c) && p !== h && (null != p || null != h)) switch (c) {
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                if (null != p) throw Error(o(137, t));
                                                break;
                                            default:
                                                Xc(e, t, c, p, r, h)
                                        }
                                    return;
                                default:
                                    if (Et(t)) {
                                        for (var v in n) p = n[v], n.hasOwnProperty(v) && void 0 !== p && !r.hasOwnProperty(v) && Jc(e, t, v, void 0, r, p);
                                        for (d in r) p = r[d], h = n[d], !r.hasOwnProperty(d) || p === h || void 0 === p && void 0 === h || Jc(e, t, d, p, r, h);
                                        return
                                    }
                            }
                            for (var y in n) p = n[y], n.hasOwnProperty(y) && null != p && !r.hasOwnProperty(y) && Xc(e, t, y, null, r, p);
                            for (f in r) p = r[f], h = n[f], !r.hasOwnProperty(f) || p === h || null == p && null == h || Xc(e, t, f, p, r, h)
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
                    ks = "function" == typeof WeakSet ? WeakSet : Set,
                    xs = null;

                function Ss(e, t, n) {
                    var r = n.flags;
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ds(e, n), 4 & r && os(5, n);
                            break;
                        case 1:
                            if (Ds(e, n), 4 & r)
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
                            if (Ds(e, n), 64 & r && null !== (e = n.updateQueue)) {
                                if (t = null, null !== n.child) switch (n.child.tag) {
                                    case 27:
                                    case 5:
                                    case 1:
                                        t = n.child.stateNode
                                }
                                try {
                                    fi(e, t)
                                } catch (e) {
                                    cc(n, n.return, e)
                                }
                            }
                            break;
                        case 27:
                            null === t && 4 & r && ys(n);
                        case 26:
                        case 5:
                            Ds(e, n), null === t && 4 & r && fs(n), 512 & r && cs(n, n.return);
                            break;
                        case 12:
                            Ds(e, n);
                            break;
                        case 13:
                            Ds(e, n), 4 & r && js(e, n), 64 & r && null !== (e = n.memoizedState) && null !== (e = e.dehydrated) && function(e, t) {
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
                                var i = ws;
                                bs = r, (ws = t) && !i ? $s(e, n, !!(8772 & n.subtreeFlags)) : Ds(e, n), bs = a, ws = i
                            }
                            break;
                        case 30:
                            break;
                        default:
                            Ds(e, n)
                    }
                }

                function zs(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, zs(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && Fe(t), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }
                var Es = null,
                    Os = !1;

                function Cs(e, t, n) {
                    for (n = n.child; null !== n;) Ps(e, t, n), n = n.sibling
                }

                function Ps(e, t, n) {
                    if (de && "function" == typeof de.onCommitFiberUnmount) try {
                        de.onCommitFiberUnmount(ce, n)
                    } catch (e) {}
                    switch (n.tag) {
                        case 26:
                            ws || ds(n, t), Cs(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                            break;
                        case 27:
                            ws || ds(n, t);
                            var r = Es,
                                a = Os;
                            pd(n.type) && (Es = n.stateNode, Os = !1), Cs(e, t, n), _d(n.stateNode), Es = r, Os = a;
                            break;
                        case 5:
                            ws || ds(n, t);
                        case 6:
                            if (r = Es, a = Os, Es = null, Cs(e, t, n), Os = a, null !== (Es = r))
                                if (Os) try {
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
                            null !== Es && (Os ? (hd(9 === (e = Es).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), Cf(e)) : hd(Es, n.stateNode));
                            break;
                        case 4:
                            r = Es, a = Os, Es = n.stateNode.containerInfo, Os = !0, Cs(e, t, n), Es = r, Os = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ws || ls(2, n, t), ws || ls(4, n, t), Cs(e, t, n);
                            break;
                        case 1:
                            ws || (ds(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount && us(n, t, r)), Cs(e, t, n);
                            break;
                        case 21:
                            Cs(e, t, n);
                            break;
                        case 22:
                            ws = (r = ws) || null !== n.memoizedState, Cs(e, t, n), ws = r;
                            break;
                        default:
                            Cs(e, t, n)
                    }
                }

                function js(e, t) {
                    if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated)) try {
                        Cf(e)
                    } catch (e) {
                        cc(t, t.return, e)
                    }
                }

                function Ns(e, t) {
                    var n = function(e) {
                        switch (e.tag) {
                            case 13:
                            case 19:
                                var t = e.stateNode;
                                return null === t && (t = e.stateNode = new ks), t;
                            case 22:
                                return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new ks), t;
                            default:
                                throw Error(o(435, e.tag))
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
                                i = e,
                                l = t,
                                s = l;
                            e: for (; null !== s;) {
                                switch (s.tag) {
                                    case 27:
                                        if (pd(s.type)) {
                                            Es = s.stateNode, Os = !1;
                                            break e
                                        }
                                        break;
                                    case 5:
                                        Es = s.stateNode, Os = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        Es = s.stateNode.containerInfo, Os = !0;
                                        break e
                                }
                                s = s.return
                            }
                            if (null === Es) throw Error(o(160));
                            Ps(i, l, a), Es = null, Os = !1, null !== (i = a.alternate) && (i.return = null), a.return = null
                        }
                    if (13878 & t.subtreeFlags)
                        for (t = t.child; null !== t;) Ms(t, e), t = t.sibling
                }
                var Ts = null;

                function Ms(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ls(t, e), Rs(e), 4 & r && (ls(3, e, e.return), os(3, e), ls(5, e, e.return));
                            break;
                        case 1:
                            Ls(t, e), Rs(e), 512 & r && (ws || null === n || ds(n, n.return)), 64 & r && bs && null !== (e = e.updateQueue) && null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? r : n.concat(r));
                            break;
                        case 26:
                            var a = Ts;
                            if (Ls(t, e), Rs(e), 512 & r && (ws || null === n || ds(n, n.return)), 4 & r) {
                                var i = null !== n ? n.memoizedState : null;
                                if (r = e.memoizedState, null === n)
                                    if (null === r)
                                        if (null === e.stateNode) {
                                            e: {
                                                r = e.type,
                                                n = e.memoizedProps,
                                                a = a.ownerDocument || a;t: switch (r) {
                                                    case "title":
                                                        (!(i = a.getElementsByTagName("title")[0]) || i[$e] || i[Le] || "http://www.w3.org/2000/svg" === i.namespaceURI || i.hasAttribute("itemprop")) && (i = a.createElement(r), a.head.insertBefore(i, a.querySelector("head > title"))), ed(i, r, n), i[Le] = e, Be(i), r = i;
                                                        break e;
                                                    case "link":
                                                        var l = $d("link", "href", a).get(r + (n.href || ""));
                                                        if (l)
                                                            for (var s = 0; s < l.length; s++)
                                                                if ((i = l[s]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && i.getAttribute("rel") === (null == n.rel ? null : n.rel) && i.getAttribute("title") === (null == n.title ? null : n.title) && i.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                                    l.splice(s, 1);
                                                                    break t
                                                                } ed(i = a.createElement(r), r, n), a.head.appendChild(i);
                                                        break;
                                                    case "meta":
                                                        if (l = $d("meta", "content", a).get(r + (n.content || "")))
                                                            for (s = 0; s < l.length; s++)
                                                                if ((i = l[s]).getAttribute("content") === (null == n.content ? null : "" + n.content) && i.getAttribute("name") === (null == n.name ? null : n.name) && i.getAttribute("property") === (null == n.property ? null : n.property) && i.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && i.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                                    l.splice(s, 1);
                                                                    break t
                                                                } ed(i = a.createElement(r), r, n), a.head.appendChild(i);
                                                        break;
                                                    default:
                                                        throw Error(o(468, r))
                                                }
                                                i[Le] = e,
                                                Be(i),
                                                r = i
                                            }
                                            e.stateNode = r
                                        }
                                else Fd(a, e.type, e.stateNode);
                                else e.stateNode = Md(a, r, e.memoizedProps);
                                else i !== r ? (null === i ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : i.count--, null === r ? Fd(a, e.type, e.stateNode) : Md(a, r, e.memoizedProps)) : null === r && null !== e.stateNode && ps(e, e.memoizedProps, n.memoizedProps)
                            }
                            break;
                        case 27:
                            Ls(t, e), Rs(e), 512 & r && (ws || null === n || ds(n, n.return)), null !== n && 4 & r && ps(e, e.memoizedProps, n.memoizedProps);
                            break;
                        case 5:
                            if (Ls(t, e), Rs(e), 512 & r && (ws || null === n || ds(n, n.return)), 32 & e.flags) {
                                a = e.stateNode;
                                try {
                                    kt(a, "")
                                } catch (t) {
                                    cc(e, e.return, t)
                                }
                            }
                            4 & r && null != e.stateNode && ps(e, a = e.memoizedProps, null !== n ? n.memoizedProps : a), 1024 & r && (_s = !0);
                            break;
                        case 6:
                            if (Ls(t, e), Rs(e), 4 & r) {
                                if (null === e.stateNode) throw Error(o(162));
                                r = e.memoizedProps, n = e.stateNode;
                                try {
                                    n.nodeValue = r
                                } catch (t) {
                                    cc(e, e.return, t)
                                }
                            }
                            break;
                        case 3:
                            if (Id = null, a = Ts, Ts = Sd(t.containerInfo), Ls(t, e), Ts = a, Rs(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Cf(t.containerInfo)
                            } catch (t) {
                                cc(e, e.return, t)
                            }
                            _s && (_s = !1, As(e));
                            break;
                        case 4:
                            r = Ts, Ts = Sd(e.stateNode.containerInfo), Ls(t, e), Rs(e), Ts = r;
                            break;
                        case 12:
                        default:
                            Ls(t, e), Rs(e);
                            break;
                        case 13:
                            Ls(t, e), Rs(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== n && null !== n.memoizedState) && (_u = te()), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, Ns(e, r));
                            break;
                        case 22:
                            a = null !== e.memoizedState;
                            var u = null !== n && null !== n.memoizedState,
                                c = bs,
                                d = ws;
                            if (bs = c || a, ws = d || u, Ls(t, e), ws = d, bs = c, Rs(e), 8192 & r) e: for (t = e.stateNode, t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (null === n || u || bs || ws || Is(e)), n = null, t = e;;) {
                                if (5 === t.tag || 26 === t.tag) {
                                    if (null === n) {
                                        u = n = t;
                                        try {
                                            if (i = u.stateNode, a) "function" == typeof(l = i.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none";
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
                            4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && (r.retryQueue = null, Ns(e, n));
                            break;
                        case 19:
                            Ls(t, e), Rs(e), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, Ns(e, r));
                        case 30:
                        case 21:
                    }
                }

                function Rs(e) {
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
                            if (null == n) throw Error(o(160));
                            switch (n.tag) {
                                case 27:
                                    var a = n.stateNode;
                                    vs(e, ms(e), a);
                                    break;
                                case 5:
                                    var i = n.stateNode;
                                    32 & n.flags && (kt(i, ""), n.flags &= -33), vs(e, ms(e), i);
                                    break;
                                case 3:
                                case 4:
                                    var l = n.stateNode.containerInfo;
                                    gs(e, ms(e), l);
                                    break;
                                default:
                                    throw Error(o(161))
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

                function Ds(e, t) {
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

                function $s(e, t, n) {
                    for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t;) {
                        var r = t.alternate,
                            a = e,
                            i = t,
                            o = i.flags;
                        switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                $s(a, i, n), os(4, i);
                                break;
                            case 1:
                                if ($s(a, i, n), "function" == typeof(a = (r = i).stateNode).componentDidMount) try {
                                    a.componentDidMount()
                                } catch (e) {
                                    cc(r, r.return, e)
                                }
                                if (null !== (a = (r = i).updateQueue)) {
                                    var l = r.stateNode;
                                    try {
                                        var s = a.shared.hiddenCallbacks;
                                        if (null !== s)
                                            for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) di(s[a], l)
                                    } catch (e) {
                                        cc(r, r.return, e)
                                    }
                                }
                                n && 64 & o && ss(i), cs(i, i.return);
                                break;
                            case 27:
                                ys(i);
                            case 26:
                            case 5:
                                $s(a, i, n), n && null === r && 4 & o && fs(i), cs(i, i.return);
                                break;
                            case 12:
                                $s(a, i, n);
                                break;
                            case 13:
                                $s(a, i, n), n && 4 & o && js(a, i);
                                break;
                            case 22:
                                null === i.memoizedState && $s(a, i, n), cs(i, i.return);
                                break;
                            case 30:
                                break;
                            default:
                                $s(a, i, n)
                        }
                        t = t.sibling
                    }
                }

                function Fs(e, t) {
                    var n = null;
                    null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Ma(n))
                }

                function Us(e, t) {
                    e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ma(e))
                }

                function Hs(e, t, n, r) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t;) Vs(e, t, n, r), t = t.sibling
                }

                function Vs(e, t, n, r) {
                    var a = t.flags;
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Hs(e, t, n, r), 2048 & a && os(9, t);
                            break;
                        case 1:
                        case 13:
                        default:
                            Hs(e, t, n, r);
                            break;
                        case 3:
                            Hs(e, t, n, r), 2048 & a && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ma(e)));
                            break;
                        case 12:
                            if (2048 & a) {
                                Hs(e, t, n, r), e = t.stateNode;
                                try {
                                    var i = t.memoizedProps,
                                        o = i.id,
                                        l = i.onPostCommit;
                                    "function" == typeof l && l(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                                } catch (e) {
                                    cc(t, t.return, e)
                                }
                            } else Hs(e, t, n, r);
                            break;
                        case 23:
                            break;
                        case 22:
                            i = t.stateNode, o = t.alternate, null !== t.memoizedState ? 2 & i._visibility ? Hs(e, t, n, r) : Bs(e, t) : 2 & i._visibility ? Hs(e, t, n, r) : (i._visibility |= 2, Ws(e, t, n, r, !!(10256 & t.subtreeFlags))), 2048 & a && Fs(o, t);
                            break;
                        case 24:
                            Hs(e, t, n, r), 2048 & a && Us(t.alternate, t)
                    }
                }

                function Ws(e, t, n, r, a) {
                    for (a = a && !!(10256 & t.subtreeFlags), t = t.child; null !== t;) {
                        var i = e,
                            o = t,
                            l = n,
                            s = r,
                            u = o.flags;
                        switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ws(i, o, l, s, a), os(8, o);
                                break;
                            case 23:
                                break;
                            case 22:
                                var c = o.stateNode;
                                null !== o.memoizedState ? 2 & c._visibility ? Ws(i, o, l, s, a) : Bs(i, o) : (c._visibility |= 2, Ws(i, o, l, s, a)), a && 2048 & u && Fs(o.alternate, o);
                                break;
                            case 24:
                                Ws(i, o, l, s, a), a && 2048 & u && Us(o.alternate, o);
                                break;
                            default:
                                Ws(i, o, l, s, a)
                        }
                        t = t.sibling
                    }
                }

                function Bs(e, t) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t;) {
                            var n = e,
                                r = t,
                                a = r.flags;
                            switch (r.tag) {
                                case 22:
                                    Bs(n, r), 2048 & a && Fs(r.alternate, r);
                                    break;
                                case 24:
                                    Bs(n, r), 2048 & a && Us(r.alternate, r);
                                    break;
                                default:
                                    Bs(n, r)
                            }
                            t = t.sibling
                        }
                }
                var Zs = 8192;

                function qs(e) {
                    if (e.subtreeFlags & Zs)
                        for (e = e.child; null !== e;) Gs(e), e = e.sibling
                }

                function Gs(e) {
                    switch (e.tag) {
                        case 26:
                            qs(e), e.flags & Zs && null !== e.memoizedState && function(e, t, n) {
                                if (null === Hd) throw Error(o(475));
                                var r = Hd;
                                if (!("stylesheet" !== t.type || "string" == typeof n.media && !1 === matchMedia(n.media).matches || 4 & t.state.loading)) {
                                    if (null === t.instance) {
                                        var a = Pd(n.href),
                                            i = e.querySelector(jd(a));
                                        if (i) return null !== (e = i._p) && "object" == typeof e && "function" == typeof e.then && (r.count++, r = Wd.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = i, void Be(i);
                                        i = e.ownerDocument || e, n = Nd(n), (a = kd.get(a)) && Ad(n, a), Be(i = i.createElement("link"));
                                        var l = i;
                                        l._p = new Promise(function(e, t) {
                                            l.onload = e, l.onerror = t
                                        }), ed(i, "link", n), t.instance = i
                                    }
                                    null === r.stylesheets && (r.stylesheets = new Map), r.stylesheets.set(t, e), (e = t.state.preload) && !(3 & t.state.loading) && (r.count++, t = Wd.bind(r), e.addEventListener("load", t), e.addEventListener("error", t))
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
                            null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = Zs, Zs = 16777216, qs(e), Zs = t) : qs(e))
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
                                xs = r, Js(r, e)
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
                            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, Xs(e)) : Qs(e)
                    }
                }

                function Xs(e) {
                    var t = e.deletions;
                    if (16 & e.flags) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                xs = r, Js(r, e)
                            }
                        Ks(e)
                    }
                    for (e = e.child; null !== e;) {
                        switch ((t = e).tag) {
                            case 0:
                            case 11:
                            case 15:
                                ls(8, t, t.return), Xs(t);
                                break;
                            case 22:
                                2 & (n = t.stateNode)._visibility && (n._visibility &= -3, Xs(t));
                                break;
                            default:
                                Xs(t)
                        }
                        e = e.sibling
                    }
                }

                function Js(e, t) {
                    for (; null !== xs;) {
                        var n = xs;
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
                                Ma(n.memoizedState.cache)
                        }
                        if (null !== (r = n.child)) r.return = n, xs = r;
                        else e: for (n = e; null !== xs;) {
                            var a = (r = xs).sibling,
                                i = r.return;
                            if (zs(r), r === n) {
                                xs = null;
                                break e
                            }
                            if (null !== a) {
                                a.return = i, xs = a;
                                break e
                            }
                            xs = i
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
                    iu = 0,
                    ou = 0,
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
                    ku = 1 / 0,
                    xu = null,
                    Su = null,
                    zu = 0,
                    Eu = null,
                    Ou = null,
                    Cu = 0,
                    Pu = 0,
                    ju = null,
                    Nu = null,
                    Lu = 0,
                    Tu = null;

                function Mu() {
                    return 2 & nu && 0 !== iu ? iu & -iu : null !== M.T ? 0 !== Da ? Da : Pc() : je()
                }

                function Ru() {
                    0 === gu && (gu = 536870912 & iu && !ia ? 536870912 : ke());
                    var e = al.current;
                    return null !== e && (e.flags |= 32), gu
                }

                function Au(e, t, n) {
                    (e !== ru || 2 !== ou && 9 !== ou) && null === e.cancelPendingCommit || (Vu(e, 0), Fu(e, iu, gu, !1)), ze(e, n), 2 & nu && e === ru || (e === ru && (!(2 & nu) && (hu |= n), 4 === fu && Fu(e, iu, gu, !1)), kc(e))
                }

                function Du(e, t, n) {
                    if (6 & nu) throw Error(o(327));
                    for (var r = !n && !(124 & t) && 0 === (t & e.expiredLanes) || we(e, t), a = r ? function(e, t) {
                            var n = nu;
                            nu |= 2;
                            var r = Bu(),
                                a = Zu();
                            ru !== e || iu !== t ? (xu = null, ku = te() + 500, Vu(e, t)) : uu = we(e, t);
                            e: for (;;) try {
                                if (0 !== ou && null !== au) {
                                    t = au;
                                    var i = lu;
                                    t: switch (ou) {
                                        case 1:
                                            ou = 0, lu = null, Ju(e, t, i, 1);
                                            break;
                                        case 2:
                                        case 9:
                                            if (Ka(i)) {
                                                ou = 0, lu = null, Xu(t);
                                                break
                                            }
                                            t = function() {
                                                2 !== ou && 9 !== ou || ru !== e || (ou = 7), kc(e)
                                            }, i.then(t, t);
                                            break e;
                                        case 3:
                                            ou = 7;
                                            break e;
                                        case 4:
                                            ou = 5;
                                            break e;
                                        case 7:
                                            Ka(i) ? (ou = 0, lu = null, Xu(t)) : (ou = 0, lu = null, Ju(e, t, i, 7));
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
                                                        ou = 0, lu = null;
                                                        var u = s.sibling;
                                                        if (null !== u) au = u;
                                                        else {
                                                            var c = s.return;
                                                            null !== c ? (au = c, ec(c)) : au = null
                                                        }
                                                        break t
                                                    }
                                            }
                                            ou = 0, lu = null, Ju(e, t, i, 5);
                                            break;
                                        case 6:
                                            ou = 0, lu = null, Ju(e, t, i, 6);
                                            break;
                                        case 8:
                                            Hu(), fu = 6;
                                            break e;
                                        default:
                                            throw Error(o(462))
                                    }
                                }
                                Qu();
                                break
                            } catch (t) {
                                Wu(e, t)
                            }
                            return ya = va = null, M.H = r, M.A = a, nu = n, null !== au ? 0 : (ru = null, iu = 0, Cr(), fu)
                        }(e, t) : Gu(e, t, !0), i = r;;) {
                        if (0 === a) {
                            uu && !r && Fu(e, t, 0, !1);
                            break
                        }
                        if (n = e.current.alternate, !i || $u(n)) {
                            if (2 === a) {
                                if (i = t, e.errorRecoveryDisabledLanes & i) var l = 0;
                                else l = 0 != (l = -536870913 & e.pendingLanes) ? l : 536870912 & l ? 536870912 : 0;
                                if (0 !== l) {
                                    t = l;
                                    e: {
                                        var s = e;a = yu;
                                        var u = s.current.memoizedState.isDehydrated;
                                        if (u && (Vu(s, l).flags |= 256), 2 !== (l = Gu(s, l, !1))) {
                                            if (cu && !u) {
                                                s.errorRecoveryDisabledLanes |= i, hu |= i, a = 4;
                                                break e
                                            }
                                            i = bu, bu = a, null !== i && (null === bu ? bu = i : bu.push.apply(bu, i))
                                        }
                                        a = l
                                    }
                                    if (i = !1, 2 !== a) continue
                                }
                            }
                            if (1 === a) {
                                Vu(e, 0), Fu(e, t, 0, !0);
                                break
                            }
                            e: {
                                switch (r = e, i = a) {
                                    case 0:
                                    case 1:
                                        throw Error(o(345));
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
                                        throw Error(o(329))
                                }
                                if ((62914560 & t) === t && 10 < (a = _u + 300 - te())) {
                                    if (Fu(r, t, gu, !su), 0 !== be(r, 0, !0)) break e;
                                    r.timeoutHandle = sd(Iu.bind(null, r, n, bu, xu, wu, t, gu, hu, vu, su, i, 2, -0, 0), a)
                                } else Iu(r, n, bu, xu, wu, t, gu, hu, vu, su, i, 0, -0, 0)
                            }
                            break
                        }
                        a = Gu(e, t, !1), i = !1
                    }
                    kc(e)
                }

                function Iu(e, t, n, r, a, i, l, s, u, c, d, f, p, h) {
                    if (e.timeoutHandle = -1, (8192 & (f = t.subtreeFlags) || !(16785408 & ~f)) && (Hd = {
                            stylesheets: null,
                            count: 0,
                            unsuspend: Vd
                        }, Gs(t), null !== (f = function() {
                            if (null === Hd) throw Error(o(475));
                            var e = Hd;
                            return e.stylesheets && 0 === e.count && Zd(e, e.stylesheets), 0 < e.count ? function(t) {
                                var n = setTimeout(function() {
                                    if (e.stylesheets && Zd(e, e.stylesheets), e.unsuspend) {
                                        var t = e.unsuspend;
                                        e.unsuspend = null, t()
                                    }
                                }, 6e4);
                                return e.unsuspend = t,
                                    function() {
                                        e.unsuspend = null, clearTimeout(n)
                                    }
                            } : null
                        }()))) return e.cancelPendingCommit = f(nc.bind(null, e, t, i, n, r, a, l, s, u, d, 1, p, h)), void Fu(e, i, l, !c);
                    nc(e, t, i, n, r, a, l, s, u)
                }

                function $u(e) {
                    for (var t = e;;) {
                        var n = t.tag;
                        if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r],
                                    i = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!Kn(i(), a)) return !1
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
                        var i = 31 - pe(a),
                            o = 1 << i;
                        r[i] = -1, a &= ~o
                    }
                    0 !== n && Ee(e, n, t)
                }

                function Uu() {
                    return !!(6 & nu) || (xc(0, !1), !1)
                }

                function Hu() {
                    if (null !== au) {
                        if (0 === ou) var e = au.return;
                        else ya = va = null, Di(e = au), Ko = null, Qo = 0, e = au;
                        for (; null !== e;) is(e.alternate, e), e = e.return;
                        au = null
                    }
                }

                function Vu(e, t) {
                    var n = e.timeoutHandle; - 1 !== n && (e.timeoutHandle = -1, ud(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), Hu(), ru = e, au = n = Ir(e.current, null), iu = t, ou = 0, lu = null, su = !1, uu = we(e, t), cu = !1, vu = gu = mu = hu = pu = fu = 0, bu = yu = null, wu = !1, 8 & t && (t |= 32 & t);
                    var r = e.entangledLanes;
                    if (0 !== r)
                        for (e = e.entanglements, r &= t; 0 < r;) {
                            var a = 31 - pe(r),
                                i = 1 << a;
                            t |= e[a], r &= ~i
                        }
                    return du = t, Cr(), n
                }

                function Wu(e, t) {
                    bi = null, M.H = Bo, t === Ba || t === qa ? (t = Ja(), ou = 3) : t === Za ? (t = Ja(), ou = 4) : ou = t === El ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1, lu = t, null === au && (fu = 1, _l(e, Sr(t, e.current)))
                }

                function Bu() {
                    var e = M.H;
                    return M.H = Bo, null === e ? Bo : e
                }

                function Zu() {
                    var e = M.A;
                    return M.A = eu, e
                }

                function qu() {
                    fu = 4, su || (4194048 & iu) !== iu && null !== al.current || (uu = !0), !(134217727 & pu) && !(134217727 & hu) || null === ru || Fu(ru, iu, gu, !1)
                }

                function Gu(e, t, n) {
                    var r = nu;
                    nu |= 2;
                    var a = Bu(),
                        i = Zu();
                    ru === e && iu === t || (xu = null, Vu(e, t)), t = !1;
                    var o = fu;
                    e: for (;;) try {
                        if (0 !== ou && null !== au) {
                            var l = au,
                                s = lu;
                            switch (ou) {
                                case 8:
                                    Hu(), o = 6;
                                    break e;
                                case 3:
                                case 2:
                                case 9:
                                case 6:
                                    null === al.current && (t = !0);
                                    var u = ou;
                                    if (ou = 0, lu = null, Ju(e, l, s, u), n && uu) {
                                        o = 0;
                                        break e
                                    }
                                    break;
                                default:
                                    u = ou, ou = 0, lu = null, Ju(e, l, s, u)
                            }
                        }
                        Ku(), o = fu;
                        break
                    } catch (t) {
                        Wu(e, t)
                    }
                    return t && e.shellSuspendCounter++, ya = va = null, nu = r, M.H = a, M.A = i, null === au && (ru = null, iu = 0, Cr()), o
                }

                function Ku() {
                    for (; null !== au;) Yu(au)
                }

                function Qu() {
                    for (; null !== au && !J();) Yu(au)
                }

                function Yu(e) {
                    var t = Yl(e.alternate, e, du);
                    e.memoizedProps = e.pendingProps, null === t ? ec(e) : au = t
                }

                function Xu(e) {
                    var t = e,
                        n = t.alternate;
                    switch (t.tag) {
                        case 15:
                        case 0:
                            t = Al(n, t, t.pendingProps, t.type, void 0, iu);
                            break;
                        case 11:
                            t = Al(n, t, t.pendingProps, t.type.render, t.ref, iu);
                            break;
                        case 5:
                            Di(t);
                        default:
                            is(n, t), t = Yl(n, t = au = $r(t, du), du)
                    }
                    e.memoizedProps = e.pendingProps, null === t ? ec(e) : au = t
                }

                function Ju(e, t, n, r) {
                    ya = va = null, Di(t), Ko = null, Qo = 0;
                    var a = t.return;
                    try {
                        if (function(e, t, n, r, a) {
                                if (n.flags |= 32768, null !== r && "object" == typeof r && "function" == typeof r.then) {
                                    if (null !== (t = n.alternate) && xa(t, n, a, !0), null !== (n = al.current)) {
                                        switch (n.tag) {
                                            case 13:
                                                return null === il ? qu() : null === n.alternate && 0 === fu && (fu = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ga ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), dc(e, r, a)), !1;
                                            case 22:
                                                return n.flags |= 65536, r === Ga ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                                    transitions: null,
                                                    markerInstances: null,
                                                    retryQueue: new Set([r])
                                                }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), dc(e, r, a)), !1
                                        }
                                        throw Error(o(435, n.tag))
                                    }
                                    return dc(e, r, a), qu(), !1
                                }
                                if (ia) return null !== (t = al.current) ? (!(65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== sa && ma(Sr(e = Error(o(422), {
                                    cause: r
                                }), n))) : (r !== sa && ma(Sr(t = Error(o(423), {
                                    cause: r
                                }), n)), (e = e.current.alternate).flags |= 65536, a &= -a, e.lanes |= a, r = Sr(r, n), li(e, a = xl(e.stateNode, r, a)), 4 !== fu && (fu = 2)), !1;
                                var i = Error(o(520), {
                                    cause: r
                                });
                                if (i = Sr(i, n), null === yu ? yu = [i] : yu.push(i), 4 !== fu && (fu = 2), null === t) return !0;
                                r = Sr(r, n), n = t;
                                do {
                                    switch (n.tag) {
                                        case 3:
                                            return n.flags |= 65536, e = a & -a, n.lanes |= e, li(n, e = xl(n.stateNode, r, e)), !1;
                                        case 1:
                                            if (t = n.type, i = n.stateNode, !(128 & n.flags || "function" != typeof t.getDerivedStateFromError && (null === i || "function" != typeof i.componentDidCatch || null !== Su && Su.has(i)))) return n.flags |= 65536, a &= -a, n.lanes |= a, zl(a = Sl(a), e, n, r), li(n, a), !1
                                    }
                                    n = n.return
                                } while (null !== n);
                                return !1
                            }(e, a, t, n, iu)) return fu = 1, _l(e, Sr(n, e.current)), void(au = null)
                    } catch (t) {
                        if (null !== a) throw au = a, t;
                        return fu = 1, _l(e, Sr(n, e.current)), void(au = null)
                    }
                    32768 & t.flags ? (ia || 1 === r ? e = !0 : uu || 536870912 & iu ? e = !1 : (su = e = !0, (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = al.current) && 13 === r.tag && (r.flags |= 16384)), tc(t, e)) : ec(t)
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

                function nc(e, t, n, r, a, i, l, s, u) {
                    e.cancelPendingCommit = null;
                    do {
                        lc()
                    } while (0 !== zu);
                    if (6 & nu) throw Error(o(327));
                    if (null !== t) {
                        if (t === e.current) throw Error(o(177));
                        if (i = t.lanes | t.childLanes, function(e, t, n, r, a, i) {
                                var o = e.pendingLanes;
                                e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                                var l = e.entanglements,
                                    s = e.expirationTimes,
                                    u = e.hiddenUpdates;
                                for (n = o & ~n; 0 < n;) {
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
                                0 !== r && Ee(e, r, 0), 0 !== i && 0 === a && 0 !== e.tag && (e.suspendedLanes |= i & ~(o & ~t))
                            }(e, n, i |= Or, l, s, u), e === ru && (au = ru = null, iu = 0), Ou = t, Eu = e, Cu = n, Pu = i, ju = a, Nu = r, 10256 & t.subtreeFlags || 10256 & t.flags ? (e.callbackNode = null, e.callbackPriority = 0, Y(ie, function() {
                                return sc(), null
                            })) : (e.callbackNode = null, e.callbackPriority = 0), r = !!(13878 & t.flags), 13878 & t.subtreeFlags || r) {
                            r = M.T, M.T = null, a = R.p, R.p = 2, l = nu, nu |= 4;
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
                                                    i = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    n.nodeType, i.nodeType
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
                                                    for (var h; f !== n || 0 !== a && 3 !== f.nodeType || (s = l + a), f !== i || 0 !== r && 3 !== f.nodeType || (u = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
                                                    for (;;) {
                                                        if (f === e) break t;
                                                        if (p === n && ++c === a && (s = l), p === i && ++d === r && (u = l), null !== (h = f.nextSibling)) break;
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
                                        }, nf = !1, xs = t; null !== xs;)
                                        if (e = (t = xs).child, 1024 & t.subtreeFlags && null !== e) e.return = t, xs = e;
                                        else
                                            for (; null !== xs;) {
                                                switch (i = (t = xs).alternate, e = t.flags, t.tag) {
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
                                                        if (1024 & e && null !== i) {
                                                            e = void 0, n = t, a = i.memoizedProps, i = i.memoizedState, r = n.stateNode;
                                                            try {
                                                                var m = gl(n.type, a, (n.elementType, n.type));
                                                                e = r.getSnapshotBeforeUpdate(m, i), r.__reactInternalSnapshotBeforeUpdate = e
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
                                                        if (1024 & e) throw Error(o(163))
                                                }
                                                if (null !== (e = t.sibling)) {
                                                    e.return = t.return, xs = e;
                                                    break
                                                }
                                                xs = t.return
                                            }
                                }(e, t)
                            } finally {
                                nu = l, R.p = a, M.T = r
                            }
                        }
                        zu = 1, rc(), ac(), ic()
                    }
                }

                function rc() {
                    if (1 === zu) {
                        zu = 0;
                        var e = Eu,
                            t = Ou,
                            n = !!(13878 & t.flags);
                        if (13878 & t.subtreeFlags || n) {
                            n = M.T, M.T = null;
                            var r = R.p;
                            R.p = 2;
                            var a = nu;
                            nu |= 4;
                            try {
                                Ms(t, e);
                                var i = nd,
                                    o = er(e.containerInfo),
                                    l = i.focusedElem,
                                    s = i.selectionRange;
                                if (o !== l && l && l.ownerDocument && Jn(l.ownerDocument.documentElement, l)) {
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
                                                !p.extend && m > g && (o = g, g = m, m = o);
                                                var v = Xn(l, m),
                                                    y = Xn(l, g);
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
                                nu = a, R.p = r, M.T = n
                            }
                        }
                        e.current = t, zu = 2
                    }
                }

                function ac() {
                    if (2 === zu) {
                        zu = 0;
                        var e = Eu,
                            t = Ou,
                            n = !!(8772 & t.flags);
                        if (8772 & t.subtreeFlags || n) {
                            n = M.T, M.T = null;
                            var r = R.p;
                            R.p = 2;
                            var a = nu;
                            nu |= 4;
                            try {
                                Ss(e, t.alternate, t)
                            } finally {
                                nu = a, R.p = r, M.T = n
                            }
                        }
                        zu = 3
                    }
                }

                function ic() {
                    if (4 === zu || 3 === zu) {
                        zu = 0, ee();
                        var e = Eu,
                            t = Ou,
                            n = Cu,
                            r = Nu;
                        10256 & t.subtreeFlags || 10256 & t.flags ? zu = 5 : (zu = 0, Ou = Eu = null, oc(e, e.pendingLanes));
                        var a = e.pendingLanes;
                        if (0 === a && (Su = null), Pe(n), t = t.stateNode, de && "function" == typeof de.onCommitFiberRoot) try {
                            de.onCommitFiberRoot(ce, t, void 0, !(128 & ~t.current.flags))
                        } catch (e) {}
                        if (null !== r) {
                            t = M.T, a = R.p, R.p = 2, M.T = null;
                            try {
                                for (var i = e.onRecoverableError, o = 0; o < r.length; o++) {
                                    var l = r[o];
                                    i(l.value, {
                                        componentStack: l.stack
                                    })
                                }
                            } finally {
                                M.T = t, R.p = a
                            }
                        }
                        3 & Cu && lc(), kc(e), a = e.pendingLanes, 4194090 & n && 42 & a ? e === Tu ? Lu++ : (Lu = 0, Tu = e) : Lu = 0, xc(0, !1)
                    }
                }

                function oc(e, t) {
                    0 === (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && (e.pooledCache = null, Ma(t))
                }

                function lc(e) {
                    return rc(), ac(), ic(), sc()
                }

                function sc() {
                    if (5 !== zu) return !1;
                    var e = Eu,
                        t = Pu;
                    Pu = 0;
                    var n = Pe(Cu),
                        r = M.T,
                        a = R.p;
                    try {
                        R.p = 32 > n ? 32 : n, M.T = null, n = ju, ju = null;
                        var i = Eu,
                            l = Cu;
                        if (zu = 0, Ou = Eu = null, Cu = 0, 6 & nu) throw Error(o(331));
                        var s = nu;
                        if (nu |= 4, Ys(i.current), Vs(i, i.current, l, n), nu = s, xc(0, !1), de && "function" == typeof de.onPostCommitFiberRoot) try {
                            de.onPostCommitFiberRoot(ce, i)
                        } catch (e) {}
                        return !0
                    } finally {
                        R.p = a, M.T = r, oc(e, t)
                    }
                }

                function uc(e, t, n) {
                    t = Sr(n, t), null !== (e = ii(e, t = xl(e.stateNode, t, 2), 2)) && (ze(e, 2), kc(e))
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
                                    e = Sr(n, e), null !== (r = ii(t, n = Sl(2), 2)) && (zl(n, r, t, e), ze(r, 2), kc(r));
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
                    null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ru === e && (iu & n) === n && (4 === fu || 3 === fu && (62914560 & iu) === iu && 300 > te() - _u ? !(2 & nu) && Vu(e, 0) : mu |= n, vu === iu && (vu = 0)), kc(e)
                }

                function pc(e, t) {
                    0 === t && (t = xe()), null !== (e = Nr(e, t)) && (ze(e, t), kc(e))
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
                            throw Error(o(314))
                    }
                    null !== r && r.delete(t), pc(e, n)
                }
                var gc = null,
                    vc = null,
                    yc = !1,
                    bc = !1,
                    wc = !1,
                    _c = 0;

                function kc(e) {
                    e !== vc && null === e.next && (null === vc ? gc = vc = e : vc = vc.next = e), bc = !0, yc || (yc = !0, dd(function() {
                        6 & nu ? Y(re, Sc) : zc()
                    }))
                }

                function xc(e, t) {
                    if (!wc && bc) {
                        wc = !0;
                        do {
                            for (var n = !1, r = gc; null !== r;) {
                                if (!t)
                                    if (0 !== e) {
                                        var a = r.pendingLanes;
                                        if (0 === a) var i = 0;
                                        else {
                                            var o = r.suspendedLanes,
                                                l = r.pingedLanes;
                                            i = (1 << 31 - pe(42 | e) + 1) - 1, i = 201326741 & (i &= a & ~(o & ~l)) ? 201326741 & i | 1 : i ? 2 | i : 0
                                        }
                                        0 !== i && (n = !0, Cc(r, i))
                                    } else i = iu, !(3 & (i = be(r, r === ru ? i : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || we(r, i) || (n = !0, Cc(r, i));
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
                        var i = a.next,
                            o = Ec(a, n);
                        0 === o ? (a.next = null, null === r ? gc = i : r.next = i, null === i && (vc = r)) : (r = a, (0 !== t || 3 & o) && (bc = !0)), a = i
                    }
                    xc(t, !1)
                }

                function Ec(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = -62914561 & e.pendingLanes; 0 < i;) {
                        var o = 31 - pe(i),
                            l = 1 << o,
                            s = a[o]; - 1 === s ? 0 !== (l & n) && 0 === (l & r) || (a[o] = _e(l, t)) : s <= t && (e.expiredLanes |= l), i &= ~l
                    }
                    if (n = iu, n = be(e, e === (t = ru) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === ou || 9 === ou) || null !== e.cancelPendingCommit) return null !== r && null !== r && X(r), e.callbackNode = null, e.callbackPriority = 0;
                    if (!(3 & n) || we(e, n)) {
                        if ((t = n & -n) === e.callbackPriority) return t;
                        switch (null !== r && X(r), Pe(n)) {
                            case 2:
                            case 8:
                                n = ae;
                                break;
                            case 32:
                            default:
                                n = ie;
                                break;
                            case 268435456:
                                n = le
                        }
                        return r = Oc.bind(null, e), n = Y(n, r), e.callbackPriority = t, e.callbackNode = n, t
                    }
                    return null !== r && null !== r && X(r), e.callbackPriority = 2, e.callbackNode = null, 2
                }

                function Oc(e, t) {
                    if (0 !== zu && 5 !== zu) return e.callbackNode = null, e.callbackPriority = 0, null;
                    var n = e.callbackNode;
                    if (lc() && e.callbackNode !== n) return null;
                    var r = iu;
                    return 0 === (r = be(e, e === ru ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (Du(e, r, t), Ec(e, te()), null != e.callbackNode && e.callbackNode === n ? Oc.bind(null, e) : null)
                }

                function Cc(e, t) {
                    if (lc()) return null;
                    Du(e, t, !0)
                }

                function Pc() {
                    return 0 === _c && (_c = ke()), _c
                }

                function jc(e) {
                    return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : Pt("" + e)
                }

                function Nc(e, t) {
                    var n = t.ownerDocument.createElement("input");
                    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
                }
                for (var Lc = 0; Lc < _r.length; Lc++) {
                    var Tc = _r[Lc];
                    kr(Tc.toLowerCase(), "on" + (Tc[0].toUpperCase() + Tc.slice(1)))
                }
                kr(pr, "onAnimationEnd"), kr(hr, "onAnimationIteration"), kr(mr, "onAnimationStart"), kr("dblclick", "onDoubleClick"), kr("focusin", "onFocus"), kr("focusout", "onBlur"), kr(gr, "onTransitionRun"), kr(vr, "onTransitionStart"), kr(yr, "onTransitionCancel"), kr(br, "onTransitionEnd"), Ke("onMouseEnter", ["mouseout", "mouseover"]), Ke("onMouseLeave", ["mouseout", "mouseover"]), Ke("onPointerEnter", ["pointerout", "pointerover"]), Ke("onPointerLeave", ["pointerout", "pointerover"]), Ge("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ge("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ge("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ge("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Mc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Rc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mc));

                function Ac(e, t) {
                    t = !!(4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (t)
                                for (var o = r.length - 1; 0 <= o; o--) {
                                    var l = r[o],
                                        s = l.instance,
                                        u = l.currentTarget;
                                    if (l = l.listener, s !== i && a.isPropagationStopped()) break e;
                                    i = l, a.currentTarget = u;
                                    try {
                                        i(a)
                                    } catch (e) {
                                        vl(e)
                                    }
                                    a.currentTarget = null, i = s
                                } else
                                    for (o = 0; o < r.length; o++) {
                                        if (s = (l = r[o]).instance, u = l.currentTarget, l = l.listener, s !== i && a.isPropagationStopped()) break e;
                                        i = l, a.currentTarget = u;
                                        try {
                                            i(a)
                                        } catch (e) {
                                            vl(e)
                                        }
                                        a.currentTarget = null, i = s
                                    }
                        }
                    }
                }

                function Dc(e, t) {
                    var n = t[Re];
                    void 0 === n && (n = t[Re] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Uc(t, e, 2, !1), n.add(r))
                }

                function Ic(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Uc(n, e, r, t)
                }
                var $c = "_reactListening" + Math.random().toString(36).slice(2);

                function Fc(e) {
                    if (!e[$c]) {
                        e[$c] = !0, Ze.forEach(function(t) {
                            "selectionchange" !== t && (Rc.has(t) || Ic(t, !1, e), Ic(t, !0, e))
                        });
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[$c] || (t[$c] = !0, Ic("selectionchange", !1, t))
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
                    n = a.bind(null, t, n, e), a = void 0, !$t || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function Hc(e, t, n, r, a) {
                    var i = r;
                    if (!(1 & t || 2 & t || null === r)) e: for (;;) {
                        if (null === r) return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var l = r.stateNode.containerInfo;
                            if (l === a) break;
                            if (4 === o)
                                for (o = r.return; null !== o;) {
                                    var u = o.tag;
                                    if ((3 === u || 4 === u) && o.stateNode.containerInfo === a) return;
                                    o = o.return
                                }
                            for (; null !== l;) {
                                if (null === (o = Ue(l))) return;
                                if (5 === (u = o.tag) || 6 === u || 26 === u || 27 === u) {
                                    r = i = o;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                    At(function() {
                        var r = i,
                            a = Nt(n),
                            o = [];
                        e: {
                            var l = wr.get(e);
                            if (void 0 !== l) {
                                var u = Jt,
                                    c = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === Bt(n)) break e;
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
                                    if (h = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === h || null === p || null != (g = Dt(m, p)) && d.push(Vc(m, g, h)), f) break;
                                    m = m.return
                                }
                                0 < d.length && (l = new u(l, c, null, n, a), o.push({
                                    event: l,
                                    listeners: d
                                }))
                            }
                        }
                        if (!(7 & t)) {
                            if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === jt || !(c = n.relatedTarget || n.fromElement) || !Ue(c) && !c[Me]) && (u || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (c = (c = n.relatedTarget || n.toElement) ? Ue(c) : null) && (f = s(c), d = c.tag, c !== f || 5 !== d && 27 !== d && 6 !== d) && (c = null)) : (u = null, c = r), u !== c)) {
                                if (d = rn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (d = gn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = null == u ? l : Ve(u), h = null == c ? l : Ve(c), (l = new d(g, m + "leave", u, n, a)).target = f, l.relatedTarget = h, g = null, Ue(a) === r && ((d = new d(p, m + "enter", c, n, a)).target = h, d.relatedTarget = f, g = d), f = g, u && c) e: {
                                    for (p = c, m = 0, h = d = u; h; h = Bc(h)) m++;
                                    for (h = 0, g = p; g; g = Bc(g)) h++;
                                    for (; 0 < m - h;) d = Bc(d),
                                    m--;
                                    for (; 0 < h - m;) p = Bc(p),
                                    h--;
                                    for (; m--;) {
                                        if (d === p || null !== p && d === p.alternate) break e;
                                        d = Bc(d), p = Bc(p)
                                    }
                                    d = null
                                }
                                else d = null;
                                null !== u && Zc(o, l, u, d, !1), null !== c && null !== f && Zc(o, f, c, d, !0)
                            }
                            if ("select" === (u = (l = r ? Ve(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var v = In;
                            else if (Ln(l))
                                if ($n) v = Gn;
                                else {
                                    v = Zn;
                                    var y = Bn
                                }
                            else !(u = l.nodeName) || "input" !== u.toLowerCase() || "checkbox" !== l.type && "radio" !== l.type ? r && Et(r.elementType) && (v = In) : v = qn;
                            switch (v && (v = v(e, r)) ? Tn(o, v, n, a) : (y && y(e, l, r), "focusout" === e && r && "number" === l.type && null != r.memoizedProps.value && yt(l, "number", l.value)), y = r ? Ve(r) : window, e) {
                                case "focusin":
                                    (Ln(y) || "true" === y.contentEditable) && (rr = y, ar = r, ir = null);
                                    break;
                                case "focusout":
                                    ir = ar = rr = null;
                                    break;
                                case "mousedown":
                                    or = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    or = !1, lr(o, n, a);
                                    break;
                                case "selectionchange":
                                    if (nr) break;
                                case "keydown":
                                case "keyup":
                                    lr(o, n, a)
                            }
                            var b;
                            if (kn) e: {
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
                            else jn ? Cn(e, n) && (w = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (w = "onCompositionStart");
                            w && (zn && "ko" !== n.locale && (jn || "onCompositionStart" !== w ? "onCompositionEnd" === w && jn && (b = Wt()) : (Ht = "value" in (Ut = a) ? Ut.value : Ut.textContent, jn = !0)), 0 < (y = Wc(r, w)).length && (w = new un(w, e, null, n, a), o.push({
                                    event: w,
                                    listeners: y
                                }), (b || null !== (b = Pn(n))) && (w.data = b))), (b = Sn ? function(e, t) {
                                    switch (e) {
                                        case "compositionend":
                                            return Pn(t);
                                        case "keypress":
                                            return 32 !== t.which ? null : (On = !0, En);
                                        case "textInput":
                                            return (e = t.data) === En && On ? null : e;
                                        default:
                                            return null
                                    }
                                }(e, n) : function(e, t) {
                                    if (jn) return "compositionend" === e || !kn && Cn(e, t) ? (e = Wt(), Vt = Ht = Ut = null, jn = !1, e) : null;
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
                                }(e, n)) && 0 < (w = Wc(r, "onBeforeInput")).length && (y = new un("onBeforeInput", "beforeinput", null, n, a), o.push({
                                    event: y,
                                    listeners: w
                                }), y.data = b),
                                function(e, t, n, r, a) {
                                    if ("submit" === t && n && n.stateNode === a) {
                                        var i = jc((a[Te] || null).action),
                                            o = r.submitter;
                                        o && null !== (t = (t = o[Te] || null) ? jc(t.formAction) : o.getAttribute("formAction")) && (i = t, o = null);
                                        var l = new Jt("action", "action", null, r, a);
                                        e.push({
                                            event: l,
                                            listeners: [{
                                                instance: null,
                                                listener: function() {
                                                    if (r.defaultPrevented) {
                                                        if (0 !== _c) {
                                                            var e = o ? Nc(a, o) : new FormData(a);
                                                            No(n, {
                                                                pending: !0,
                                                                data: e,
                                                                method: a.method,
                                                                action: i
                                                            }, null, e)
                                                        }
                                                    } else "function" == typeof i && (l.preventDefault(), e = o ? Nc(a, o) : new FormData(a), No(n, {
                                                        pending: !0,
                                                        data: e,
                                                        method: a.method,
                                                        action: i
                                                    }, i, e))
                                                },
                                                currentTarget: a
                                            }]
                                        })
                                    }
                                }(o, e, r, n, a)
                        }
                        Ac(o, t)
                    })
                }

                function Vc(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Wc(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            i = a.stateNode;
                        if (5 !== (a = a.tag) && 26 !== a && 27 !== a || null === i || (null != (a = Dt(e, n)) && r.unshift(Vc(e, a, i)), null != (a = Dt(e, t)) && r.push(Vc(e, a, i))), 3 === e.tag) return r;
                        e = e.return
                    }
                    return []
                }

                function Bc(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag && 27 !== e.tag);
                    return e || null
                }

                function Zc(e, t, n, r, a) {
                    for (var i = t._reactName, o = []; null !== n && n !== r;) {
                        var l = n,
                            s = l.alternate,
                            u = l.stateNode;
                        if (l = l.tag, null !== s && s === r) break;
                        5 !== l && 26 !== l && 27 !== l || null === u || (s = u, a ? null != (u = Dt(n, i)) && o.unshift(Vc(n, u, s)) : a || null != (u = Dt(n, i)) && o.push(Vc(n, u, s))), n = n.return
                    }
                    0 !== o.length && e.push({
                        event: t,
                        listeners: o
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

                function Xc(e, t, n, r, a, i) {
                    switch (n) {
                        case "children":
                            "string" == typeof r ? "body" === t || "textarea" === t && "" === r || kt(e, r) : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && kt(e, "" + r);
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
                            zt(e, r, i);
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
                            if ("function" == typeof i && ("formAction" === n ? ("input" !== t && Xc(e, t, "name", a.name, a, null), Xc(e, t, "formEncType", a.formEncType, a, null), Xc(e, t, "formMethod", a.formMethod, a, null), Xc(e, t, "formTarget", a.formTarget, a, null)) : (Xc(e, t, "encType", a.encType, a, null), Xc(e, t, "method", a.method, a, null), Xc(e, t, "target", a.target, a, null))), null == r || "symbol" == typeof r || "boolean" == typeof r) {
                                e.removeAttribute(n);
                                break
                            }
                            r = Pt("" + r), e.setAttribute(n, r);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Yc);
                            break;
                        case "onScroll":
                            null != r && Dc("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && Dc("scrollend", e);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" != typeof r || !("__html" in r)) throw Error(o(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(o(60));
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
                            Dc("beforetoggle", e), Dc("toggle", e), tt(e, "popover", r);
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
                            (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && tt(e, n = Ot.get(n) || n, r)
                    }
                }

                function Jc(e, t, n, r, a, i) {
                    switch (n) {
                        case "style":
                            zt(e, r, i);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" != typeof r || !("__html" in r)) throw Error(o(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(o(60));
                                    e.innerHTML = n
                                }
                            }
                            break;
                        case "children":
                            "string" == typeof r ? kt(e, r) : ("number" == typeof r || "bigint" == typeof r) && kt(e, "" + r);
                            break;
                        case "onScroll":
                            null != r && Dc("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && Dc("scrollend", e);
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
                            qe.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), "function" == typeof(i = null != (i = e[Te] || null) ? i[n] : null) && e.removeEventListener(t, i, a), "function" != typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : tt(e, n, r) : ("function" != typeof i && null !== i && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)))
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
                            Dc("error", e), Dc("load", e);
                            var r, a = !1,
                                i = !1;
                            for (r in n)
                                if (n.hasOwnProperty(r)) {
                                    var l = n[r];
                                    if (null != l) switch (r) {
                                        case "src":
                                            a = !0;
                                            break;
                                        case "srcSet":
                                            i = !0;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            throw Error(o(137, t));
                                        default:
                                            Xc(e, t, r, l, n, null)
                                    }
                                } return i && Xc(e, t, "srcSet", n.srcSet, n, null), void(a && Xc(e, t, "src", n.src, n, null));
                        case "input":
                            Dc("invalid", e);
                            var s = r = l = i = null,
                                u = null,
                                c = null;
                            for (a in n)
                                if (n.hasOwnProperty(a)) {
                                    var d = n[a];
                                    if (null != d) switch (a) {
                                        case "name":
                                            i = d;
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
                                            if (null != d) throw Error(o(137, t));
                                            break;
                                        default:
                                            Xc(e, t, a, d, n, null)
                                    }
                                } return vt(e, r, s, u, c, l, i, !1), void dt(e);
                        case "select":
                            for (i in Dc("invalid", e), a = l = r = null, n)
                                if (n.hasOwnProperty(i) && null != (s = n[i])) switch (i) {
                                    case "value":
                                        r = s;
                                        break;
                                    case "defaultValue":
                                        l = s;
                                        break;
                                    case "multiple":
                                        a = s;
                                    default:
                                        Xc(e, t, i, s, n, null)
                                }
                            return t = r, n = l, e.multiple = !!a, void(null != t ? bt(e, !!a, t, !1) : null != n && bt(e, !!a, n, !0));
                        case "textarea":
                            for (l in Dc("invalid", e), r = i = a = null, n)
                                if (n.hasOwnProperty(l) && null != (s = n[l])) switch (l) {
                                    case "value":
                                        a = s;
                                        break;
                                    case "defaultValue":
                                        i = s;
                                        break;
                                    case "children":
                                        r = s;
                                        break;
                                    case "dangerouslySetInnerHTML":
                                        if (null != s) throw Error(o(91));
                                        break;
                                    default:
                                        Xc(e, t, l, s, n, null)
                                }
                            return _t(e, a, i, r), void dt(e);
                        case "option":
                            for (u in n) n.hasOwnProperty(u) && null != (a = n[u]) && ("selected" === u ? e.selected = a && "function" != typeof a && "symbol" != typeof a : Xc(e, t, u, a, n, null));
                            return;
                        case "dialog":
                            Dc("beforetoggle", e), Dc("toggle", e), Dc("cancel", e), Dc("close", e);
                            break;
                        case "iframe":
                        case "object":
                            Dc("load", e);
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < Mc.length; a++) Dc(Mc[a], e);
                            break;
                        case "image":
                            Dc("error", e), Dc("load", e);
                            break;
                        case "details":
                            Dc("toggle", e);
                            break;
                        case "embed":
                        case "source":
                        case "link":
                            Dc("error", e), Dc("load", e);
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
                                        throw Error(o(137, t));
                                    default:
                                        Xc(e, t, c, a, n, null)
                                }
                            return;
                        default:
                            if (Et(t)) {
                                for (d in n) n.hasOwnProperty(d) && void 0 !== (a = n[d]) && Jc(e, t, d, a, n, void 0);
                                return
                            }
                    }
                    for (s in n) n.hasOwnProperty(s) && null != (a = n[s]) && Xc(e, t, s, a, n, null)
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

                function id(e, t) {
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

                function od(e, t) {
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
                        var i = n.nextSibling;
                        if (e.removeChild(n), i && 8 === i.nodeType)
                            if ("/$" === (n = i.data)) {
                                if (0 < r && 8 > r) {
                                    n = r;
                                    var o = e.ownerDocument;
                                    if (1 & n && _d(o.documentElement), 2 & n && _d(o.body), 4 & n)
                                        for (_d(n = o.head), o = n.firstChild; o;) {
                                            var l = o.nextSibling,
                                                s = o.nodeName;
                                            o[$e] || "SCRIPT" === s || "STYLE" === s || "LINK" === s && "stylesheet" === o.rel.toLowerCase() || n.removeChild(o), o = l
                                        }
                                }
                                if (0 === a) return e.removeChild(i), void Cf(t);
                                a--
                            } else "$" === n || "$?" === n || "$!" === n ? a++ : r = n.charCodeAt(0) - 48;
                        else r = 0;
                        n = i
                    } while (n);
                    Cf(t)
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
                            if (!(e = t.documentElement)) throw Error(o(452));
                            return e;
                        case "head":
                            if (!(e = t.head)) throw Error(o(453));
                            return e;
                        case "body":
                            if (!(e = t.body)) throw Error(o(454));
                            return e;
                        default:
                            throw Error(o(451))
                    }
                }

                function _d(e) {
                    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
                    Fe(e)
                }
                var kd = new Map,
                    xd = new Set;

                function Sd(e) {
                    return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument
                }
                var zd = R.d;
                R.d = {
                    f: function() {
                        var e = zd.f(),
                            t = Uu();
                        return e || t
                    },
                    r: function(e) {
                        var t = He(e);
                        null !== t && 5 === t.tag && "form" === t.type ? To(t) : zd.r(e)
                    },
                    D: function(e) {
                        zd.D(e), Od("dns-prefetch", e, null)
                    },
                    C: function(e, t) {
                        zd.C(e, t), Od("preconnect", e, t)
                    },
                    L: function(e, t, n) {
                        zd.L(e, t, n);
                        var r = Ed;
                        if (r && e && t) {
                            var a = 'link[rel="preload"][as="' + mt(t) + '"]';
                            "image" === t && n && n.imageSrcSet ? (a += '[imagesrcset="' + mt(n.imageSrcSet) + '"]', "string" == typeof n.imageSizes && (a += '[imagesizes="' + mt(n.imageSizes) + '"]')) : a += '[href="' + mt(e) + '"]';
                            var i = a;
                            switch (t) {
                                case "style":
                                    i = Pd(e);
                                    break;
                                case "script":
                                    i = Ld(e)
                            }
                            kd.has(i) || (e = f({
                                rel: "preload",
                                href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                                as: t
                            }, n), kd.set(i, e), null !== r.querySelector(a) || "style" === t && r.querySelector(jd(i)) || "script" === t && r.querySelector(Td(i)) || (ed(t = r.createElement("link"), "link", e), Be(t), r.head.appendChild(t)))
                        }
                    },
                    m: function(e, t) {
                        zd.m(e, t);
                        var n = Ed;
                        if (n && e) {
                            var r = t && "string" == typeof t.as ? t.as : "script",
                                a = 'link[rel="modulepreload"][as="' + mt(r) + '"][href="' + mt(e) + '"]',
                                i = a;
                            switch (r) {
                                case "audioworklet":
                                case "paintworklet":
                                case "serviceworker":
                                case "sharedworker":
                                case "worker":
                                case "script":
                                    i = Ld(e)
                            }
                            if (!kd.has(i) && (e = f({
                                    rel: "modulepreload",
                                    href: e
                                }, t), kd.set(i, e), null === n.querySelector(a))) {
                                switch (r) {
                                    case "audioworklet":
                                    case "paintworklet":
                                    case "serviceworker":
                                    case "sharedworker":
                                    case "worker":
                                    case "script":
                                        if (n.querySelector(Td(i))) return
                                }
                                ed(r = n.createElement("link"), "link", e), Be(r), n.head.appendChild(r)
                            }
                        }
                    },
                    X: function(e, t) {
                        zd.X(e, t);
                        var n = Ed;
                        if (n && e) {
                            var r = We(n).hoistableScripts,
                                a = Ld(e),
                                i = r.get(a);
                            i || ((i = n.querySelector(Td(a))) || (e = f({
                                src: e,
                                async: !0
                            }, t), (t = kd.get(a)) && Dd(e, t), Be(i = n.createElement("script")), ed(i, "link", e), n.head.appendChild(i)), i = {
                                type: "script",
                                instance: i,
                                count: 1,
                                state: null
                            }, r.set(a, i))
                        }
                    },
                    S: function(e, t, n) {
                        zd.S(e, t, n);
                        var r = Ed;
                        if (r && e) {
                            var a = We(r).hoistableStyles,
                                i = Pd(e);
                            t = t || "default";
                            var o = a.get(i);
                            if (!o) {
                                var l = {
                                    loading: 0,
                                    preload: null
                                };
                                if (o = r.querySelector(jd(i))) l.loading = 5;
                                else {
                                    e = f({
                                        rel: "stylesheet",
                                        href: e,
                                        "data-precedence": t
                                    }, n), (n = kd.get(i)) && Ad(e, n);
                                    var s = o = r.createElement("link");
                                    Be(s), ed(s, "link", e), s._p = new Promise(function(e, t) {
                                        s.onload = e, s.onerror = t
                                    }), s.addEventListener("load", function() {
                                        l.loading |= 1
                                    }), s.addEventListener("error", function() {
                                        l.loading |= 2
                                    }), l.loading |= 4, Rd(o, t, r)
                                }
                                o = {
                                    type: "stylesheet",
                                    instance: o,
                                    count: 1,
                                    state: l
                                }, a.set(i, o)
                            }
                        }
                    },
                    M: function(e, t) {
                        zd.M(e, t);
                        var n = Ed;
                        if (n && e) {
                            var r = We(n).hoistableScripts,
                                a = Ld(e),
                                i = r.get(a);
                            i || ((i = n.querySelector(Td(a))) || (e = f({
                                src: e,
                                async: !0,
                                type: "module"
                            }, t), (t = kd.get(a)) && Dd(e, t), Be(i = n.createElement("script")), ed(i, "link", e), n.head.appendChild(i)), i = {
                                type: "script",
                                instance: i,
                                count: 1,
                                state: null
                            }, r.set(a, i))
                        }
                    }
                };
                var Ed = "undefined" == typeof document ? null : document;

                function Od(e, t, n) {
                    var r = Ed;
                    if (r && "string" == typeof t && t) {
                        var a = mt(t);
                        a = 'link[rel="' + e + '"][href="' + a + '"]', "string" == typeof n && (a += '[crossorigin="' + n + '"]'), xd.has(a) || (xd.add(a), e = {
                            rel: e,
                            crossOrigin: n,
                            href: t
                        }, null === r.querySelector(a) && (ed(t = r.createElement("link"), "link", e), Be(t), r.head.appendChild(t)))
                    }
                }

                function Cd(e, t, n, r) {
                    var a, i, l, s, u = (u = W.current) ? Sd(u) : null;
                    if (!u) throw Error(o(446));
                    switch (e) {
                        case "meta":
                        case "title":
                            return null;
                        case "style":
                            return "string" == typeof n.precedence && "string" == typeof n.href ? (t = Pd(n.href), (r = (n = We(u).hoistableStyles).get(t)) || (r = {
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
                                var c = We(u).hoistableStyles,
                                    d = c.get(e);
                                if (d || (u = u.ownerDocument || u, d = {
                                        type: "stylesheet",
                                        instance: null,
                                        count: 0,
                                        state: {
                                            loading: 0,
                                            preload: null
                                        }
                                    }, c.set(e, d), (c = u.querySelector(jd(e))) && !c._p && (d.instance = c, d.state.loading = 5), kd.has(e) || (n = {
                                        rel: "preload",
                                        as: "style",
                                        href: n.href,
                                        crossOrigin: n.crossOrigin,
                                        integrity: n.integrity,
                                        media: n.media,
                                        hrefLang: n.hrefLang,
                                        referrerPolicy: n.referrerPolicy
                                    }, kd.set(e, n), c || (a = u, i = e, l = n, s = d.state, a.querySelector('link[rel="preload"][as="style"][' + i + "]") ? s.loading = 1 : (i = a.createElement("link"), s.preload = i, i.addEventListener("load", function() {
                                        return s.loading |= 1
                                    }), i.addEventListener("error", function() {
                                        return s.loading |= 2
                                    }), ed(i, "link", l), Be(i), a.head.appendChild(i))))), t && null === r) throw Error(o(528, ""));
                                return d
                            }
                            if (t && null !== r) throw Error(o(529, ""));
                            return null;
                        case "script":
                            return t = n.async, "string" == typeof(n = n.src) && t && "function" != typeof t && "symbol" != typeof t ? (t = Ld(n), (r = (n = We(u).hoistableScripts).get(t)) || (r = {
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
                            throw Error(o(444, e))
                    }
                }

                function Pd(e) {
                    return 'href="' + mt(e) + '"'
                }

                function jd(e) {
                    return 'link[rel="stylesheet"][' + e + "]"
                }

                function Nd(e) {
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

                function Md(e, t, n) {
                    if (t.count++, null === t.instance) switch (t.type) {
                        case "style":
                            var r = e.querySelector('style[data-href~="' + mt(n.href) + '"]');
                            if (r) return t.instance = r, Be(r), r;
                            var a = f({}, n, {
                                "data-href": n.href,
                                "data-precedence": n.precedence,
                                href: null,
                                precedence: null
                            });
                            return Be(r = (e.ownerDocument || e).createElement("style")), ed(r, "style", a), Rd(r, n.precedence, e), t.instance = r;
                        case "stylesheet":
                            a = Pd(n.href);
                            var i = e.querySelector(jd(a));
                            if (i) return t.state.loading |= 4, t.instance = i, Be(i), i;
                            r = Nd(n), (a = kd.get(a)) && Ad(r, a), Be(i = (e.ownerDocument || e).createElement("link"));
                            var l = i;
                            return l._p = new Promise(function(e, t) {
                                l.onload = e, l.onerror = t
                            }), ed(i, "link", r), t.state.loading |= 4, Rd(i, n.precedence, e), t.instance = i;
                        case "script":
                            return i = Ld(n.src), (a = e.querySelector(Td(i))) ? (t.instance = a, Be(a), a) : (r = n, (a = kd.get(i)) && Dd(r = f({}, n), a), Be(a = (e = e.ownerDocument || e).createElement("script")), ed(a, "link", r), e.head.appendChild(a), t.instance = a);
                        case "void":
                            return null;
                        default:
                            throw Error(o(443, t.type))
                    } else "stylesheet" === t.type && !(4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, Rd(r, n.precedence, e));
                    return t.instance
                }

                function Rd(e, t, n) {
                    for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, i = a, o = 0; o < r.length; o++) {
                        var l = r[o];
                        if (l.dataset.precedence === t) i = l;
                        else if (i !== a) break
                    }
                    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
                }

                function Ad(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
                }

                function Dd(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
                }
                var Id = null;

                function $d(e, t, n) {
                    if (null === Id) {
                        var r = new Map,
                            a = Id = new Map;
                        a.set(n, r)
                    } else(r = (a = Id).get(n)) || (r = new Map, a.set(n, r));
                    if (r.has(e)) return r;
                    for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
                        var i = n[a];
                        if (!(i[$e] || i[Le] || "link" === e && "stylesheet" === i.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== i.namespaceURI) {
                            var o = i.getAttribute(t) || "";
                            o = e + o;
                            var l = r.get(o);
                            l ? l.push(i) : r.set(o, [i])
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
                var Hd = null;

                function Vd() {}

                function Wd() {
                    if (this.count--, 0 === this.count)
                        if (this.stylesheets) Zd(this, this.stylesheets);
                        else if (this.unsuspend) {
                        var e = this.unsuspend;
                        this.unsuspend = null, e()
                    }
                }
                var Bd = null;

                function Zd(e, t) {
                    e.stylesheets = null, null !== e.unsuspend && (e.count++, Bd = new Map, t.forEach(qd, e), Bd = null, Wd.call(e))
                }

                function qd(e, t) {
                    if (!(4 & t.state.loading)) {
                        var n = Bd.get(e);
                        if (n) var r = n.get(null);
                        else {
                            n = new Map, Bd.set(e, n);
                            for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
                                var o = a[i];
                                "LINK" !== o.nodeName && "not all" === o.getAttribute("media") || (n.set(o.dataset.precedence, o), r = o)
                            }
                            r && n.set(null, r)
                        }
                        o = (a = t.instance).getAttribute("data-precedence"), (i = n.get(o) || r) === r && n.set(null, a), n.set(o, a), this.count++, r = Wd.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4
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

                function Kd(e, t, n, r, a, i, o, l) {
                    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Se(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Se(0), this.hiddenUpdates = Se(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.incompleteTransitions = new Map
                }

                function Qd(e, t, n, r, a, i, o, l, s, u, c, d) {
                    return e = new Kd(e, t, n, o, l, s, u, d), t = 1, !0 === i && (t |= 24), i = Ar(3, null, null, t), e.current = i, i.stateNode = e, (t = Ta()).refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: t
                    }, ni(i), e
                }

                function Yd(e) {
                    return e ? e = Mr : Mr
                }

                function Xd(e, t, n, r, a, i) {
                    a = Yd(a), null === r.context ? r.context = a : r.pendingContext = a, (r = ai(t)).payload = {
                        element: n
                    }, null !== (i = void 0 === i ? null : i) && (r.callback = i), null !== (n = ii(e, r, t)) && (Au(n, 0, t), oi(n, e, t))
                }

                function Jd(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function ef(e, t) {
                    Jd(e, t), (e = e.alternate) && Jd(e, t)
                }

                function tf(e) {
                    if (13 === e.tag) {
                        var t = Nr(e, 67108864);
                        null !== t && Au(t, 0, 67108864), ef(e, 67108864)
                    }
                }
                var nf = !0;

                function rf(e, t, n, r) {
                    var a = M.T;
                    M.T = null;
                    var i = R.p;
                    try {
                        R.p = 2, of(e, t, n, r)
                    } finally {
                        R.p = i, M.T = a
                    }
                }

                function af(e, t, n, r) {
                    var a = M.T;
                    M.T = null;
                    var i = R.p;
                    try {
                        R.p = 8, of(e, t, n, r)
                    } finally {
                        R.p = i, M.T = a
                    }
                }

                function of(e, t, n, r) {
                    if (nf) {
                        var a = lf(r);
                        if (null === a) Hc(e, t, r, sf, n), bf(e, r);
                        else if (function(e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return ff = wf(ff, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return pf = wf(pf, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return hf = wf(hf, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var i = a.pointerId;
                                        return mf.set(i, wf(mf.get(i) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return i = a.pointerId, gf.set(i, wf(gf.get(i) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (bf(e, r), 4 & t && -1 < yf.indexOf(e)) {
                            for (; null !== a;) {
                                var i = He(a);
                                if (null !== i) switch (i.tag) {
                                    case 3:
                                        if ((i = i.stateNode).current.memoizedState.isDehydrated) {
                                            var o = ye(i.pendingLanes);
                                            if (0 !== o) {
                                                var l = i;
                                                for (l.pendingLanes |= 2, l.entangledLanes |= 2; o;) {
                                                    var s = 1 << 31 - pe(o);
                                                    l.entanglements[1] |= s, o &= ~s
                                                }
                                                kc(i), !(6 & nu) && (ku = te() + 500, xc(0, !1))
                                            }
                                        }
                                        break;
                                    case 13:
                                        null !== (l = Nr(i, 2)) && Au(l, 0, 2), Uu(), ef(i, 2)
                                }
                                if (null === (i = lf(r)) && Hc(e, t, r, sf, n), i === a) break;
                                a = i
                            }
                            null !== a && r.stopPropagation()
                        } else Hc(e, t, r, null, n)
                    }
                }

                function lf(e) {
                    return uf(e = Nt(e))
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
                                case ie:
                                case oe:
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

                function wf(e, t, n, r, a, i) {
                    return null === e || e.nativeEvent !== i ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: i,
                        targetContainers: [a]
                    }, null !== t && null !== (t = He(t)) && tf(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function _f(e) {
                    var t = Ue(e.target);
                    if (null !== t) {
                        var n = s(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = u(n))) return e.blockedOn = t, void
                                function(e) {
                                    var t = R.p;
                                    try {
                                        return R.p = e,
                                            function() {
                                                if (13 === n.tag) {
                                                    var e = Mu();
                                                    e = Ce(e);
                                                    var t = Nr(n, e);
                                                    null !== t && Au(t, 0, e), ef(n, e)
                                                }
                                            }()
                                    } finally {
                                        R.p = t
                                    }
                                }(e.priority)
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function kf(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = lf(e.nativeEvent);
                        if (null !== n) return null !== (t = He(n)) && tf(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        jt = r, n.target.dispatchEvent(r), jt = null, t.shift()
                    }
                    return !0
                }

                function xf(e, t, n) {
                    kf(e) && n.delete(t)
                }

                function Sf() {
                    df = !1, null !== ff && kf(ff) && (ff = null), null !== pf && kf(pf) && (pf = null), null !== hf && kf(hf) && (hf = null), mf.forEach(xf), gf.forEach(xf)
                }

                function zf(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, df || (df = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Sf)))
                }
                var Ef = null;

                function Of(e) {
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
                            var i = He(n);
                            null !== i && (e.splice(t, 3), t -= 3, No(i, {
                                pending: !0,
                                data: a,
                                method: n.method,
                                action: r
                            }, r, a))
                        }
                    }))
                }

                function Cf(e) {
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
                                i = n[r + 1],
                                o = a[Te] || null;
                            if ("function" == typeof i) o || Of(n);
                            else if (o) {
                                var l = null;
                                if (i && i.hasAttribute("formAction")) {
                                    if (a = i, o = i[Te] || null) l = o.formAction;
                                    else if (null !== uf(a)) continue
                                } else l = o.action;
                                "function" == typeof l ? n[r + 1] = l : (n.splice(r, 3), r -= 3), Of(n)
                            }
                        }
                }

                function Pf(e) {
                    this._internalRoot = e
                }

                function jf(e) {
                    this._internalRoot = e
                }
                jf.prototype.render = Pf.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(o(409));
                    Xd(t.current, Mu(), e, t, null, null)
                }, jf.prototype.unmount = Pf.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        Xd(e.current, 2, null, e, null, null), Uu(), t[Me] = null
                    }
                }, jf.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = je();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < vf.length && 0 !== t && t < vf[n].priority; n++);
                        vf.splice(n, 0, e), 0 === n && _f(e)
                    }
                };
                var Nf = a.version;
                if ("19.1.0" !== Nf) throw Error(o(527, Nf, "19.1.0"));
                R.findDOMNode = function(e) {
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(o(188));
                        throw e = Object.keys(e).join(","), Error(o(268, e))
                    }
                    return e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = s(e))) throw Error(o(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var i = a.alternate;
                            if (null === i) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === i.child) {
                                for (i = a.child; i;) {
                                    if (i === n) return c(a), e;
                                    if (i === r) return c(a), t;
                                    i = i.sibling
                                }
                                throw Error(o(188))
                            }
                            if (n.return !== r.return) n = a, r = i;
                            else {
                                for (var l = !1, u = a.child; u;) {
                                    if (u === n) {
                                        l = !0, n = a, r = i;
                                        break
                                    }
                                    if (u === r) {
                                        l = !0, r = a, n = i;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!l) {
                                    for (u = i.child; u;) {
                                        if (u === n) {
                                            l = !0, n = i, r = a;
                                            break
                                        }
                                        if (u === r) {
                                            l = !0, r = i, n = a;
                                            break
                                        }
                                        u = u.sibling
                                    }
                                    if (!l) throw Error(o(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(o(190))
                        }
                        if (3 !== n.tag) throw Error(o(188));
                        return n.stateNode.current === n ? e : t
                    }(t), null === (e = null !== e ? d(e) : null) ? null : e.stateNode
                };
                var Lf = {
                    bundleType: 0,
                    version: "19.1.0",
                    rendererPackageName: "react-dom",
                    currentDispatcherRef: M,
                    reconcilerVersion: "19.1.0"
                };
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var Tf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!Tf.isDisabled && Tf.supportsFiber) try {
                        ce = Tf.inject(Lf), de = Tf
                    } catch (e) {}
                }
                t.createRoot = function(e, t) {
                    if (!l(e)) throw Error(o(299));
                    var n = !1,
                        r = "",
                        a = yl,
                        i = bl,
                        s = wl;
                    return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onUncaughtError && (a = t.onUncaughtError), void 0 !== t.onCaughtError && (i = t.onCaughtError), void 0 !== t.onRecoverableError && (s = t.onRecoverableError), void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks), t = Qd(e, 1, !1, null, 0, n, r, a, i, s, 0, null), e[Me] = t.current, Fc(e), new Pf(t)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!l(e)) throw Error(o(299));
                    var r = !1,
                        a = "",
                        i = yl,
                        s = bl,
                        u = wl,
                        c = null;
                    return null != n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onUncaughtError && (i = n.onUncaughtError), void 0 !== n.onCaughtError && (s = n.onCaughtError), void 0 !== n.onRecoverableError && (u = n.onRecoverableError), void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks, void 0 !== n.formState && (c = n.formState)), (t = Qd(e, 1, !0, t, 0, r, a, i, s, u, 0, c)).context = Yd(null), n = t.current, (a = ai(r = Ce(r = Mu()))).callback = null, ii(n, a, r), n = r, t.current.lanes = n, ze(t, n), kc(t), e[Me] = t.current, Fc(e), new jf(t)
                }, t.version = "19.1.0"
            },
            1327: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var r, a = (r = n(6540)) && r.__esModule ? r : {
                        default: r
                    },
                    i = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        afterChange: null,
                        appendDots: function(e) {
                            return a.default.createElement("ul", {
                                style: {
                                    display: "block"
                                }
                            }, e)
                        },
                        arrows: !0,
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        beforeChange: null,
                        centerMode: !1,
                        centerPadding: "50px",
                        className: "",
                        cssEase: "ease",
                        customPaging: function(e) {
                            return a.default.createElement("button", null, e + 1)
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: null,
                        nextArrow: null,
                        onEdge: null,
                        onInit: null,
                        onLazyLoadError: null,
                        onReInit: null,
                        pauseOnDotsHover: !1,
                        pauseOnFocus: !1,
                        pauseOnHover: !0,
                        prevArrow: null,
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "div",
                        slidesPerRow: 1,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        speed: 500,
                        swipe: !0,
                        swipeEvent: null,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0,
                        asNavFor: null,
                        unslick: !1
                    };
                t.default = i
            },
            1441: (e, t, n) => {
                var r = n(8028),
                    a = function(e) {
                        var t = "",
                            n = Object.keys(e);
                        return n.forEach(function(a, i) {
                            var o = e[a];
                            (function(e) {
                                return /[height|width]$/.test(e)
                            })(a = r(a)) && "number" == typeof o && (o += "px"), t += !0 === o ? a : !1 === o ? "not " + a : "(" + a + ": " + o + ")", i < n.length - 1 && (t += " and ")
                        }), t
                    };
                e.exports = function(e) {
                    var t = "";
                    return "string" == typeof e ? e : e instanceof Array ? (e.forEach(function(n, r) {
                        t += a(n), r < e.length - 1 && (t += ", ")
                    }), t) : a(e)
                }
            },
            1557: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    default: () => l
                });
                var r = n(1601),
                    a = n.n(r),
                    i = n(6314),
                    o = n.n(i)()(a());
                o.push([e.id, "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n", ""]);
                const l = o
            },
            1601: e => {
                "use strict";
                e.exports = function(e) {
                    return e[1]
                }
            },
            1626: (e, t, n) => {
                "use strict";
                e.exports = n.p + "c94f7671dcc99dce43e2.ttf"
            },
            2386: (e, t, n) => {
                var r = n(1098);
                e.exports = new r
            },
            2524: e => {
                e.exports = {
                    isFunction: function(e) {
                        return "function" == typeof e
                    },
                    isArray: function(e) {
                        return "[object Array]" === Object.prototype.toString.apply(e)
                    },
                    each: function(e, t) {
                        for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++);
                    }
                }
            },
            3408: (e, t, n) => {
                "use strict";
                e.exports = n.p + "a4e97f5a2a64f0ab1323.eot"
            },
            3591: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    default: () => x
                });
                var r = function() {
                        if ("undefined" != typeof Map) return Map;

                        function e(e, t) {
                            var n = -1;
                            return e.some(function(e, r) {
                                return e[0] === t && (n = r, !0)
                            }), n
                        }
                        return function() {
                            function t() {
                                this.__entries__ = []
                            }
                            return Object.defineProperty(t.prototype, "size", {
                                get: function() {
                                    return this.__entries__.length
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.get = function(t) {
                                var n = e(this.__entries__, t),
                                    r = this.__entries__[n];
                                return r && r[1]
                            }, t.prototype.set = function(t, n) {
                                var r = e(this.__entries__, t);
                                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                            }, t.prototype.delete = function(t) {
                                var n = this.__entries__,
                                    r = e(n, t);
                                ~r && n.splice(r, 1)
                            }, t.prototype.has = function(t) {
                                return !!~e(this.__entries__, t)
                            }, t.prototype.clear = function() {
                                this.__entries__.splice(0)
                            }, t.prototype.forEach = function(e, t) {
                                void 0 === t && (t = null);
                                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                    var a = r[n];
                                    e.call(t, a[1], a[0])
                                }
                            }, t
                        }()
                    }(),
                    a = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                    i = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                    o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(e) {
                        return setTimeout(function() {
                            return e(Date.now())
                        }, 1e3 / 60)
                    },
                    l = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                    s = "undefined" != typeof MutationObserver,
                    u = function() {
                        function e() {
                            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e) {
                                var t = !1,
                                    n = !1,
                                    r = 0;

                                function a() {
                                    t && (t = !1, e()), n && l()
                                }

                                function i() {
                                    o(a)
                                }

                                function l() {
                                    var e = Date.now();
                                    if (t) {
                                        if (e - r < 2) return;
                                        n = !0
                                    } else t = !0, n = !1, setTimeout(i, 20);
                                    r = e
                                }
                                return l
                            }(this.refresh.bind(this))
                        }
                        return e.prototype.addObserver = function(e) {
                            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                        }, e.prototype.removeObserver = function(e) {
                            var t = this.observers_,
                                n = t.indexOf(e);
                            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                        }, e.prototype.refresh = function() {
                            this.updateObservers_() && this.refresh()
                        }, e.prototype.updateObservers_ = function() {
                            var e = this.observers_.filter(function(e) {
                                return e.gatherActive(), e.hasActive()
                            });
                            return e.forEach(function(e) {
                                return e.broadcastActive()
                            }), e.length > 0
                        }, e.prototype.connect_ = function() {
                            a && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), s ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                        }, e.prototype.disconnect_ = function() {
                            a && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                        }, e.prototype.onTransitionEnd_ = function(e) {
                            var t = e.propertyName,
                                n = void 0 === t ? "" : t;
                            l.some(function(e) {
                                return !!~n.indexOf(e)
                            }) && this.refresh()
                        }, e.getInstance = function() {
                            return this.instance_ || (this.instance_ = new e), this.instance_
                        }, e.instance_ = null, e
                    }(),
                    c = function(e, t) {
                        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                            var a = r[n];
                            Object.defineProperty(e, a, {
                                value: t[a],
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            })
                        }
                        return e
                    },
                    d = function(e) {
                        return e && e.ownerDocument && e.ownerDocument.defaultView || i
                    },
                    f = v(0, 0, 0, 0);

                function p(e) {
                    return parseFloat(e) || 0
                }

                function h(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    return t.reduce(function(t, n) {
                        return t + p(e["border-" + n + "-width"])
                    }, 0)
                }
                var m = "undefined" != typeof SVGGraphicsElement ? function(e) {
                    return e instanceof d(e).SVGGraphicsElement
                } : function(e) {
                    return e instanceof d(e).SVGElement && "function" == typeof e.getBBox
                };

                function g(e) {
                    return a ? m(e) ? function(e) {
                        var t = e.getBBox();
                        return v(0, 0, t.width, t.height)
                    }(e) : function(e) {
                        var t = e.clientWidth,
                            n = e.clientHeight;
                        if (!t && !n) return f;
                        var r = d(e).getComputedStyle(e),
                            a = function(e) {
                                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                                    var a = r[n],
                                        i = e["padding-" + a];
                                    t[a] = p(i)
                                }
                                return t
                            }(r),
                            i = a.left + a.right,
                            o = a.top + a.bottom,
                            l = p(r.width),
                            s = p(r.height);
                        if ("border-box" === r.boxSizing && (Math.round(l + i) !== t && (l -= h(r, "left", "right") + i), Math.round(s + o) !== n && (s -= h(r, "top", "bottom") + o)), ! function(e) {
                                return e === d(e).document.documentElement
                            }(e)) {
                            var u = Math.round(l + i) - t,
                                c = Math.round(s + o) - n;
                            1 !== Math.abs(u) && (l -= u), 1 !== Math.abs(c) && (s -= c)
                        }
                        return v(a.left, a.top, l, s)
                    }(e) : f
                }

                function v(e, t, n, r) {
                    return {
                        x: e,
                        y: t,
                        width: n,
                        height: r
                    }
                }
                var y = function() {
                        function e(e) {
                            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = v(0, 0, 0, 0), this.target = e
                        }
                        return e.prototype.isActive = function() {
                            var e = g(this.target);
                            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                        }, e.prototype.broadcastRect = function() {
                            var e = this.contentRect_;
                            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                        }, e
                    }(),
                    b = function(e, t) {
                        var n, r, a, i, o, l, s, u = (r = (n = t).x, a = n.y, i = n.width, o = n.height, l = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, s = Object.create(l.prototype), c(s, {
                            x: r,
                            y: a,
                            width: i,
                            height: o,
                            top: a,
                            right: r + i,
                            bottom: o + a,
                            left: r
                        }), s);
                        c(this, {
                            target: e,
                            contentRect: u
                        })
                    },
                    w = function() {
                        function e(e, t, n) {
                            if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                        }
                        return e.prototype.observe = function(e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh())
                            }
                        }, e.prototype.unobserve = function(e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                            }
                        }, e.prototype.disconnect = function() {
                            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                        }, e.prototype.gatherActive = function() {
                            var e = this;
                            this.clearActive(), this.observations_.forEach(function(t) {
                                t.isActive() && e.activeObservations_.push(t)
                            })
                        }, e.prototype.broadcastActive = function() {
                            if (this.hasActive()) {
                                var e = this.callbackCtx_,
                                    t = this.activeObservations_.map(function(e) {
                                        return new b(e.target, e.broadcastRect())
                                    });
                                this.callback_.call(e, t, e), this.clearActive()
                            }
                        }, e.prototype.clearActive = function() {
                            this.activeObservations_.splice(0)
                        }, e.prototype.hasActive = function() {
                            return this.activeObservations_.length > 0
                        }, e
                    }(),
                    _ = "undefined" != typeof WeakMap ? new WeakMap : new r,
                    k = function e(t) {
                        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var n = u.getInstance(),
                            r = new w(t, n, this);
                        _.set(this, r)
                    };
                ["observe", "unobserve", "disconnect"].forEach(function(e) {
                    k.prototype[e] = function() {
                        var t;
                        return (t = _.get(this))[e].apply(t, arguments)
                    }
                });
                const x = void 0 !== i.ResizeObserver ? i.ResizeObserver : k
            },
            3985: (e, t, n) => {
                var r = n(1557);
                r && r.__esModule && (r = r.default), e.exports = "string" == typeof r ? r : r.toString()
            },
            4417: e => {
                "use strict";
                e.exports = function(e, t) {
                    return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
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
                        if (!(0 < i(a, t))) break e;
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
                        e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                            var l = 2 * (r + 1) - 1,
                                s = e[l],
                                u = l + 1,
                                c = e[u];
                            if (0 > i(s, n)) u < a && 0 > i(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l);
                            else {
                                if (!(u < a && 0 > i(c, n))) break e;
                                e[r] = c, e[u] = n, r = u
                            }
                        }
                    }
                    return t
                }

                function i(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if (t.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
                    var o = performance;
                    t.unstable_now = function() {
                        return o.now()
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

                function k(e) {
                    if (g = !1, _(e), !m)
                        if (null !== r(u)) m = !0, S || (S = !0, x());
                        else {
                            var t = r(c);
                            null !== t && L(k, t.startTime - e)
                        }
                }
                var x, S = !1,
                    z = -1,
                    E = 5,
                    O = -1;

                function C() {
                    return !(!v && t.unstable_now() - O < E)
                }

                function P() {
                    if (v = !1, S) {
                        var e = t.unstable_now();
                        O = e;
                        var n = !0;
                        try {
                            e: {
                                m = !1,
                                g && (g = !1, b(z), z = -1),
                                h = !0;
                                var i = p;
                                try {
                                    t: {
                                        for (_(e), f = r(u); null !== f && !(f.expirationTime > e && C());) {
                                            var o = f.callback;
                                            if ("function" == typeof o) {
                                                f.callback = null, p = f.priorityLevel;
                                                var l = o(f.expirationTime <= e);
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
                                            null !== s && L(k, s.startTime - e), n = !1
                                        }
                                    }
                                    break e
                                }
                                finally {
                                    f = null, p = i, h = !1
                                }
                                n = void 0
                            }
                        }
                        finally {
                            n ? x() : S = !1
                        }
                    }
                }
                if ("function" == typeof w) x = function() {
                    w(P)
                };
                else if ("undefined" != typeof MessageChannel) {
                    var j = new MessageChannel,
                        N = j.port2;
                    j.port1.onmessage = P, x = function() {
                        N.postMessage(null)
                    }
                } else x = function() {
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
                }, t.unstable_scheduleCallback = function(e, a, i) {
                    var o = t.unstable_now();
                    switch (i = "object" == typeof i && null !== i && "number" == typeof(i = i.delay) && 0 < i ? o + i : o, e) {
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
                        startTime: i,
                        expirationTime: l = i + l,
                        sortIndex: -1
                    }, i > o ? (e.sortIndex = i, n(c, e), null === r(u) && e === r(c) && (g ? (b(z), z = -1) : g = !0, L(k, i - o))) : (e.sortIndex = l, n(u, e), m || h || (m = !0, S || (S = !0, x()))), e
                }, t.unstable_shouldYield = C, t.unstable_wrapCallback = function(e) {
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
            4589: (e, t, n) => {
                "use strict";
                t.A = void 0;
                var r, a = (r = n(8120)) && r.__esModule ? r : {
                    default: r
                };
                t.A = a.default
            },
            4775: (e, t, n) => {
                var r = n(6835);
                r && r.__esModule && (r = r.default), e.exports = "string" == typeof r ? r : r.toString()
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
            4999: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.InnerSlider = void 0;
                var r = f(n(6540)),
                    a = f(n(8841)),
                    i = f(n(181)),
                    o = f(n(6942)),
                    l = n(9445),
                    s = n(5942),
                    u = n(773),
                    c = n(9223),
                    d = f(n(3591));

                function f(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function p(e) {
                    return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, p(e)
                }

                function h() {
                    return h = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, h.apply(this, arguments)
                }

                function m(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function g(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? m(Object(n), !0).forEach(function(t) {
                            k(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function v(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, x(r.key), r)
                    }
                }

                function y(e, t) {
                    return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, y(e, t)
                }

                function b(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function w() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                    } catch (e) {}
                    return (w = function() {
                        return !!e
                    })()
                }

                function _(e) {
                    return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, _(e)
                }

                function k(e, t, n) {
                    return (t = x(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function x(e) {
                    var t = function(e) {
                        if ("object" != p(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != p(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == p(t) ? t : String(t)
                }
                t.InnerSlider = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && y(e, t)
                    }(S, e);
                    var t, n, f, m, x = (f = S, m = w(), function() {
                        var e, t = _(f);
                        if (m) {
                            var n = _(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else e = t.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === p(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return b(e)
                        }(this, e)
                    });

                    function S(e) {
                        var t;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, S), k(b(t = x.call(this, e)), "listRefHandler", function(e) {
                            return t.list = e
                        }), k(b(t), "trackRefHandler", function(e) {
                            return t.track = e
                        }), k(b(t), "adaptHeight", function() {
                            if (t.props.adaptiveHeight && t.list) {
                                var e = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
                                t.list.style.height = (0, l.getHeight)(e) + "px"
                            }
                        }), k(b(t), "componentDidMount", function() {
                            if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
                                var e = (0, l.getOnDemandLazySlides)(g(g({}, t.props), t.state));
                                e.length > 0 && (t.setState(function(t) {
                                    return {
                                        lazyLoadedList: t.lazyLoadedList.concat(e)
                                    }
                                }), t.props.onLazyLoad && t.props.onLazyLoad(e))
                            }
                            var n = g({
                                listRef: t.list,
                                trackRef: t.track
                            }, t.props);
                            t.updateState(n, !0, function() {
                                t.adaptHeight(), t.props.autoplay && t.autoPlay("update")
                            }), "progressive" === t.props.lazyLoad && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new d.default(function() {
                                t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(function() {
                                    return t.onWindowResized()
                                }, t.props.speed))) : t.onWindowResized()
                            }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(e) {
                                e.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, e.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null
                            }), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized)
                        }), k(b(t), "componentWillUnmount", function() {
                            t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(e) {
                                return clearTimeout(e)
                            }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect()
                        }), k(b(t), "componentDidUpdate", function(e) {
                            if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
                                var n = (0, l.getOnDemandLazySlides)(g(g({}, t.props), t.state));
                                n.length > 0 && (t.setState(function(e) {
                                    return {
                                        lazyLoadedList: e.lazyLoadedList.concat(n)
                                    }
                                }), t.props.onLazyLoad && t.props.onLazyLoad(n))
                            }
                            t.adaptHeight();
                            var a = g(g({
                                    listRef: t.list,
                                    trackRef: t.track
                                }, t.props), t.state),
                                i = t.didPropsChange(e);
                            i && t.updateState(a, i, function() {
                                t.state.currentSlide >= r.default.Children.count(t.props.children) && t.changeSlide({
                                    message: "index",
                                    index: r.default.Children.count(t.props.children) - t.props.slidesToShow,
                                    currentSlide: t.state.currentSlide
                                }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused")
                            })
                        }), k(b(t), "onWindowResized", function(e) {
                            t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, i.default)(function() {
                                return t.resizeWindow(e)
                            }, 50), t.debouncedResize()
                        }), k(b(t), "resizeWindow", function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            if (Boolean(t.track && t.track.node)) {
                                var n = g(g({
                                    listRef: t.list,
                                    trackRef: t.track
                                }, t.props), t.state);
                                t.updateState(n, e, function() {
                                    t.props.autoplay ? t.autoPlay("update") : t.pause("paused")
                                }), t.setState({
                                    animating: !1
                                }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback
                            }
                        }), k(b(t), "updateState", function(e, n, a) {
                            var i = (0, l.initializedState)(e);
                            e = g(g(g({}, e), i), {}, {
                                slideIndex: i.currentSlide
                            });
                            var o = (0, l.getTrackLeft)(e);
                            e = g(g({}, e), {}, {
                                left: o
                            });
                            var s = (0, l.getTrackCSS)(e);
                            (n || r.default.Children.count(t.props.children) !== r.default.Children.count(e.children)) && (i.trackStyle = s), t.setState(i, a)
                        }), k(b(t), "ssrInit", function() {
                            if (t.props.variableWidth) {
                                var e = 0,
                                    n = 0,
                                    a = [],
                                    i = (0, l.getPreClones)(g(g(g({}, t.props), t.state), {}, {
                                        slideCount: t.props.children.length
                                    })),
                                    o = (0, l.getPostClones)(g(g(g({}, t.props), t.state), {}, {
                                        slideCount: t.props.children.length
                                    }));
                                t.props.children.forEach(function(t) {
                                    a.push(t.props.style.width), e += t.props.style.width
                                });
                                for (var s = 0; s < i; s++) n += a[a.length - 1 - s], e += a[a.length - 1 - s];
                                for (var u = 0; u < o; u++) e += a[u];
                                for (var c = 0; c < t.state.currentSlide; c++) n += a[c];
                                var d = {
                                    width: e + "px",
                                    left: -n + "px"
                                };
                                if (t.props.centerMode) {
                                    var f = "".concat(a[t.state.currentSlide], "px");
                                    d.left = "calc(".concat(d.left, " + (100% - ").concat(f, ") / 2 ) ")
                                }
                                return {
                                    trackStyle: d
                                }
                            }
                            var p = r.default.Children.count(t.props.children),
                                h = g(g(g({}, t.props), t.state), {}, {
                                    slideCount: p
                                }),
                                m = (0, l.getPreClones)(h) + (0, l.getPostClones)(h) + p,
                                v = 100 / t.props.slidesToShow * m,
                                y = 100 / m,
                                b = -y * ((0, l.getPreClones)(h) + t.state.currentSlide) * v / 100;
                            return t.props.centerMode && (b += (100 - y * v / 100) / 2), {
                                slideWidth: y + "%",
                                trackStyle: {
                                    width: v + "%",
                                    left: b + "%"
                                }
                            }
                        }), k(b(t), "checkImagesLoad", function() {
                            var e = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [],
                                n = e.length,
                                r = 0;
                            Array.prototype.forEach.call(e, function(e) {
                                var a = function() {
                                    return ++r && r >= n && t.onWindowResized()
                                };
                                if (e.onclick) {
                                    var i = e.onclick;
                                    e.onclick = function(t) {
                                        i(t), e.parentNode.focus()
                                    }
                                } else e.onclick = function() {
                                    return e.parentNode.focus()
                                };
                                e.onload || (t.props.lazyLoad ? e.onload = function() {
                                    t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed))
                                } : (e.onload = a, e.onerror = function() {
                                    a(), t.props.onLazyLoadError && t.props.onLazyLoadError()
                                }))
                            })
                        }), k(b(t), "progressiveLazyLoad", function() {
                            for (var e = [], n = g(g({}, t.props), t.state), r = t.state.currentSlide; r < t.state.slideCount + (0, l.getPostClones)(n); r++)
                                if (t.state.lazyLoadedList.indexOf(r) < 0) {
                                    e.push(r);
                                    break
                                } for (var a = t.state.currentSlide - 1; a >= -(0, l.getPreClones)(n); a--)
                                if (t.state.lazyLoadedList.indexOf(a) < 0) {
                                    e.push(a);
                                    break
                                } e.length > 0 ? (t.setState(function(t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            }), t.props.onLazyLoad && t.props.onLazyLoad(e)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer)
                        }), k(b(t), "slideHandler", function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = t.props,
                                a = r.asNavFor,
                                i = r.beforeChange,
                                o = r.onLazyLoad,
                                s = r.speed,
                                u = r.afterChange,
                                c = t.state.currentSlide,
                                d = (0, l.slideHandler)(g(g(g({
                                    index: e
                                }, t.props), t.state), {}, {
                                    trackRef: t.track,
                                    useCSS: t.props.useCSS && !n
                                })),
                                f = d.state,
                                p = d.nextState;
                            if (f) {
                                i && i(c, f.currentSlide);
                                var h = f.lazyLoadedList.filter(function(e) {
                                    return t.state.lazyLoadedList.indexOf(e) < 0
                                });
                                o && h.length > 0 && o(h), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), u && u(c), delete t.animationEndCallback), t.setState(f, function() {
                                    a && t.asNavForIndex !== e && (t.asNavForIndex = e, a.innerSlider.slideHandler(e)), p && (t.animationEndCallback = setTimeout(function() {
                                        var e = p.animating,
                                            n = function(e, t) {
                                                if (null == e) return {};
                                                var n, r, a = function(e, t) {
                                                    if (null == e) return {};
                                                    var n, r, a = {},
                                                        i = Object.keys(e);
                                                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                                    return a
                                                }(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var i = Object.getOwnPropertySymbols(e);
                                                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                                                }
                                                return a
                                            }(p, ["animating"]);
                                        t.setState(n, function() {
                                            t.callbackTimers.push(setTimeout(function() {
                                                return t.setState({
                                                    animating: e
                                                })
                                            }, 10)), u && u(f.currentSlide), delete t.animationEndCallback
                                        })
                                    }, s))
                                })
                            }
                        }), k(b(t), "changeSlide", function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = g(g({}, t.props), t.state),
                                a = (0, l.changeSlide)(r, e);
                            if ((0 === a || a) && (!0 === n ? t.slideHandler(a, n) : t.slideHandler(a), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
                                var i = t.list.querySelectorAll(".slick-current");
                                i[0] && i[0].focus()
                            }
                        }), k(b(t), "clickHandler", function(e) {
                            !1 === t.clickable && (e.stopPropagation(), e.preventDefault()), t.clickable = !0
                        }), k(b(t), "keyHandler", function(e) {
                            var n = (0, l.keyHandler)(e, t.props.accessibility, t.props.rtl);
                            "" !== n && t.changeSlide({
                                message: n
                            })
                        }), k(b(t), "selectHandler", function(e) {
                            t.changeSlide(e)
                        }), k(b(t), "disableBodyScroll", function() {
                            window.ontouchmove = function(e) {
                                (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                            }
                        }), k(b(t), "enableBodyScroll", function() {
                            window.ontouchmove = null
                        }), k(b(t), "swipeStart", function(e) {
                            t.props.verticalSwiping && t.disableBodyScroll();
                            var n = (0, l.swipeStart)(e, t.props.swipe, t.props.draggable);
                            "" !== n && t.setState(n)
                        }), k(b(t), "swipeMove", function(e) {
                            var n = (0, l.swipeMove)(e, g(g(g({}, t.props), t.state), {}, {
                                trackRef: t.track,
                                listRef: t.list,
                                slideIndex: t.state.currentSlide
                            }));
                            n && (n.swiping && (t.clickable = !1), t.setState(n))
                        }), k(b(t), "swipeEnd", function(e) {
                            var n = (0, l.swipeEnd)(e, g(g(g({}, t.props), t.state), {}, {
                                trackRef: t.track,
                                listRef: t.list,
                                slideIndex: t.state.currentSlide
                            }));
                            if (n) {
                                var r = n.triggerSlideHandler;
                                delete n.triggerSlideHandler, t.setState(n), void 0 !== r && (t.slideHandler(r), t.props.verticalSwiping && t.enableBodyScroll())
                            }
                        }), k(b(t), "touchEnd", function(e) {
                            t.swipeEnd(e), t.clickable = !0
                        }), k(b(t), "slickPrev", function() {
                            t.callbackTimers.push(setTimeout(function() {
                                return t.changeSlide({
                                    message: "previous"
                                })
                            }, 0))
                        }), k(b(t), "slickNext", function() {
                            t.callbackTimers.push(setTimeout(function() {
                                return t.changeSlide({
                                    message: "next"
                                })
                            }, 0))
                        }), k(b(t), "slickGoTo", function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (e = Number(e), isNaN(e)) return "";
                            t.callbackTimers.push(setTimeout(function() {
                                return t.changeSlide({
                                    message: "index",
                                    index: e,
                                    currentSlide: t.state.currentSlide
                                }, n)
                            }, 0))
                        }), k(b(t), "play", function() {
                            var e;
                            if (t.props.rtl) e = t.state.currentSlide - t.props.slidesToScroll;
                            else {
                                if (!(0, l.canGoNext)(g(g({}, t.props), t.state))) return !1;
                                e = t.state.currentSlide + t.props.slidesToScroll
                            }
                            t.slideHandler(e)
                        }), k(b(t), "autoPlay", function(e) {
                            t.autoplayTimer && clearInterval(t.autoplayTimer);
                            var n = t.state.autoplaying;
                            if ("update" === e) {
                                if ("hovered" === n || "focused" === n || "paused" === n) return
                            } else if ("leave" === e) {
                                if ("paused" === n || "focused" === n) return
                            } else if ("blur" === e && ("paused" === n || "hovered" === n)) return;
                            t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
                                autoplaying: "playing"
                            })
                        }), k(b(t), "pause", function(e) {
                            t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
                            var n = t.state.autoplaying;
                            "paused" === e ? t.setState({
                                autoplaying: "paused"
                            }) : "focused" === e ? "hovered" !== n && "playing" !== n || t.setState({
                                autoplaying: "focused"
                            }) : "playing" === n && t.setState({
                                autoplaying: "hovered"
                            })
                        }), k(b(t), "onDotsOver", function() {
                            return t.props.autoplay && t.pause("hovered")
                        }), k(b(t), "onDotsLeave", function() {
                            return t.props.autoplay && "hovered" === t.state.autoplaying && t.autoPlay("leave")
                        }), k(b(t), "onTrackOver", function() {
                            return t.props.autoplay && t.pause("hovered")
                        }), k(b(t), "onTrackLeave", function() {
                            return t.props.autoplay && "hovered" === t.state.autoplaying && t.autoPlay("leave")
                        }), k(b(t), "onSlideFocus", function() {
                            return t.props.autoplay && t.pause("focused")
                        }), k(b(t), "onSlideBlur", function() {
                            return t.props.autoplay && "focused" === t.state.autoplaying && t.autoPlay("blur")
                        }), k(b(t), "render", function() {
                            var e, n, a, i = (0, o.default)("slick-slider", t.props.className, {
                                    "slick-vertical": t.props.vertical,
                                    "slick-initialized": !0
                                }),
                                d = g(g({}, t.props), t.state),
                                f = (0, l.extractObject)(d, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]),
                                p = t.props.pauseOnHover;
                            if (f = g(g({}, f), {}, {
                                    onMouseEnter: p ? t.onTrackOver : null,
                                    onMouseLeave: p ? t.onTrackLeave : null,
                                    onMouseOver: p ? t.onTrackOver : null,
                                    focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
                                }), !0 === t.props.dots && t.state.slideCount >= t.props.slidesToShow) {
                                var m = (0, l.extractObject)(d, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                                    v = t.props.pauseOnDotsHover;
                                m = g(g({}, m), {}, {
                                    clickHandler: t.changeSlide,
                                    onMouseEnter: v ? t.onDotsLeave : null,
                                    onMouseOver: v ? t.onDotsOver : null,
                                    onMouseLeave: v ? t.onDotsLeave : null
                                }), e = r.default.createElement(u.Dots, m)
                            }
                            var y = (0, l.extractObject)(d, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                            y.clickHandler = t.changeSlide, t.props.arrows && (n = r.default.createElement(c.PrevArrow, y), a = r.default.createElement(c.NextArrow, y));
                            var b = null;
                            t.props.vertical && (b = {
                                height: t.state.listHeight
                            });
                            var w = null;
                            !1 === t.props.vertical ? !0 === t.props.centerMode && (w = {
                                padding: "0px " + t.props.centerPadding
                            }) : !0 === t.props.centerMode && (w = {
                                padding: t.props.centerPadding + " 0px"
                            });
                            var _ = g(g({}, b), w),
                                k = t.props.touchMove,
                                x = {
                                    className: "slick-list",
                                    style: _,
                                    onClick: t.clickHandler,
                                    onMouseDown: k ? t.swipeStart : null,
                                    onMouseMove: t.state.dragging && k ? t.swipeMove : null,
                                    onMouseUp: k ? t.swipeEnd : null,
                                    onMouseLeave: t.state.dragging && k ? t.swipeEnd : null,
                                    onTouchStart: k ? t.swipeStart : null,
                                    onTouchMove: t.state.dragging && k ? t.swipeMove : null,
                                    onTouchEnd: k ? t.touchEnd : null,
                                    onTouchCancel: t.state.dragging && k ? t.swipeEnd : null,
                                    onKeyDown: t.props.accessibility ? t.keyHandler : null
                                },
                                S = {
                                    className: i,
                                    dir: "ltr",
                                    style: t.props.style
                                };
                            return t.props.unslick && (x = {
                                className: "slick-list"
                            }, S = {
                                className: i
                            }), r.default.createElement("div", S, t.props.unslick ? "" : n, r.default.createElement("div", h({
                                ref: t.listRefHandler
                            }, x), r.default.createElement(s.Track, h({
                                ref: t.trackRefHandler
                            }, f), t.props.children)), t.props.unslick ? "" : a, t.props.unslick ? "" : e)
                        }), t.list = null, t.track = null, t.state = g(g({}, a.default), {}, {
                            currentSlide: t.props.initialSlide,
                            targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
                            slideCount: r.default.Children.count(t.props.children)
                        }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
                        var n = t.ssrInit();
                        return t.state = g(g({}, t.state), n), t
                    }
                    return t = S, (n = [{
                        key: "didPropsChange",
                        value: function(e) {
                            for (var t = !1, n = 0, a = Object.keys(this.props); n < a.length; n++) {
                                var i = a[n];
                                if (!e.hasOwnProperty(i)) {
                                    t = !0;
                                    break
                                }
                                if ("object" !== p(e[i]) && "function" != typeof e[i] && !isNaN(e[i]) && e[i] !== this.props[i]) {
                                    t = !0;
                                    break
                                }
                            }
                            return t || r.default.Children.count(this.props.children) !== r.default.Children.count(e.children)
                        }
                    }]) && v(t.prototype, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), S
                }(r.default.Component)
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
            5942: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Track = void 0;
                var r = o(n(6540)),
                    a = o(n(6942)),
                    i = n(9445);

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function l(e) {
                    return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, l(e)
                }

                function s() {
                    return s = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, s.apply(this, arguments)
                }

                function u(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, v(r.key), r)
                    }
                }

                function c(e, t) {
                    return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, c(e, t)
                }

                function d(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function f() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                    } catch (e) {}
                    return (f = function() {
                        return !!e
                    })()
                }

                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, p(e)
                }

                function h(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function m(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? h(Object(n), !0).forEach(function(t) {
                            g(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function g(e, t, n) {
                    return (t = v(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function v(e) {
                    var t = function(e) {
                        if ("object" != l(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != l(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == l(t) ? t : String(t)
                }
                var y = function(e) {
                        var t, n, r, a, i;
                        return r = (i = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || i >= e.slideCount, e.centerMode ? (a = Math.floor(e.slidesToShow / 2), n = (i - e.currentSlide) % e.slideCount === 0, i > e.currentSlide - a - 1 && i <= e.currentSlide + a && (t = !0)) : t = e.currentSlide <= i && i < e.currentSlide + e.slidesToShow, {
                            "slick-slide": !0,
                            "slick-active": t,
                            "slick-center": n,
                            "slick-cloned": r,
                            "slick-current": i === (e.targetSlide < 0 ? e.targetSlide + e.slideCount : e.targetSlide >= e.slideCount ? e.targetSlide - e.slideCount : e.targetSlide)
                        }
                    },
                    b = function(e, t) {
                        return e.key || t
                    };
                t.Track = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && c(e, t)
                    }(w, e);
                    var t, n, o, h, v = (o = w, h = f(), function() {
                        var e, t = p(o);
                        if (h) {
                            var n = p(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else e = t.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === l(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return d(e)
                        }(this, e)
                    });

                    function w() {
                        var e;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, w);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return g(d(e = v.call.apply(v, [this].concat(n))), "node", null), g(d(e), "handleRef", function(t) {
                            e.node = t
                        }), e
                    }
                    return t = w, (n = [{
                        key: "render",
                        value: function() {
                            var e = function(e) {
                                    var t, n = [],
                                        o = [],
                                        l = [],
                                        s = r.default.Children.count(e.children),
                                        u = (0, i.lazyStartIndex)(e),
                                        c = (0, i.lazyEndIndex)(e);
                                    return r.default.Children.forEach(e.children, function(d, f) {
                                        var p, h = {
                                            message: "children",
                                            index: f,
                                            slidesToScroll: e.slidesToScroll,
                                            currentSlide: e.currentSlide
                                        };
                                        p = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(f) >= 0 ? d : r.default.createElement("div", null);
                                        var g = function(e) {
                                                var t = {};
                                                return void 0 !== e.variableWidth && !1 !== e.variableWidth || (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = e.currentSlide === e.index ? 1 : 0, t.zIndex = e.currentSlide === e.index ? 999 : 998, e.useCSS && (t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase)), t
                                            }(m(m({}, e), {}, {
                                                index: f
                                            })),
                                            v = p.props.className || "",
                                            w = y(m(m({}, e), {}, {
                                                index: f
                                            }));
                                        if (n.push(r.default.cloneElement(p, {
                                                key: "original" + b(p, f),
                                                "data-index": f,
                                                className: (0, a.default)(w, v),
                                                tabIndex: "-1",
                                                "aria-hidden": !w["slick-active"],
                                                style: m(m({
                                                    outline: "none"
                                                }, p.props.style || {}), g),
                                                onClick: function(t) {
                                                    p.props && p.props.onClick && p.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                                }
                                            })), e.infinite && !1 === e.fade) {
                                            var _ = s - f;
                                            _ <= (0, i.getPreClones)(e) && ((t = -_) >= u && (p = d), w = y(m(m({}, e), {}, {
                                                index: t
                                            })), o.push(r.default.cloneElement(p, {
                                                key: "precloned" + b(p, t),
                                                "data-index": t,
                                                tabIndex: "-1",
                                                className: (0, a.default)(w, v),
                                                "aria-hidden": !w["slick-active"],
                                                style: m(m({}, p.props.style || {}), g),
                                                onClick: function(t) {
                                                    p.props && p.props.onClick && p.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                                }
                                            }))), (t = s + f) < c && (p = d), w = y(m(m({}, e), {}, {
                                                index: t
                                            })), l.push(r.default.cloneElement(p, {
                                                key: "postcloned" + b(p, t),
                                                "data-index": t,
                                                tabIndex: "-1",
                                                className: (0, a.default)(w, v),
                                                "aria-hidden": !w["slick-active"],
                                                style: m(m({}, p.props.style || {}), g),
                                                onClick: function(t) {
                                                    p.props && p.props.onClick && p.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                                }
                                            }))
                                        }
                                    }), e.rtl ? o.concat(n, l).reverse() : o.concat(n, l)
                                }(this.props),
                                t = this.props,
                                n = {
                                    onMouseEnter: t.onMouseEnter,
                                    onMouseOver: t.onMouseOver,
                                    onMouseLeave: t.onMouseLeave
                                };
                            return r.default.createElement("div", s({
                                ref: this.handleRef,
                                className: "slick-track",
                                style: this.props.trackStyle
                            }, n), e)
                        }
                    }]) && u(t.prototype, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), w
                }(r.default.PureComponent)
            },
            5983: (e, t, n) => {
                "use strict";
                e.exports = n.p + "fb6f3c230cb846e25247.gif"
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

                function i() {}
                var o = {
                        d: {
                            f: i,
                            r: function() {
                                throw Error(a(522))
                            },
                            D: i,
                            C: i,
                            L: i,
                            m: i,
                            X: i,
                            S: i,
                            M: i
                        },
                        p: 0,
                        findDOMNode: null
                    },
                    l = Symbol.for("react.portal"),
                    s = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

                function u(e, t) {
                    return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
                }
                t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, t.createPortal = function(e, t) {
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
                        n = o.p;
                    try {
                        if (s.T = null, o.p = 2, e) return e()
                    } finally {
                        s.T = t, o.p = n, o.d.f()
                    }
                }, t.preconnect = function(e, t) {
                    "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, o.d.C(e, t))
                }, t.prefetchDNS = function(e) {
                    "string" == typeof e && o.d.D(e)
                }, t.preinit = function(e, t) {
                    if ("string" == typeof e && t && "string" == typeof t.as) {
                        var n = t.as,
                            r = u(n, t.crossOrigin),
                            a = "string" == typeof t.integrity ? t.integrity : void 0,
                            i = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
                        "style" === n ? o.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                            crossOrigin: r,
                            integrity: a,
                            fetchPriority: i
                        }) : "script" === n && o.d.X(e, {
                            crossOrigin: r,
                            integrity: a,
                            fetchPriority: i,
                            nonce: "string" == typeof t.nonce ? t.nonce : void 0
                        })
                    }
                }, t.preinitModule = function(e, t) {
                    if ("string" == typeof e)
                        if ("object" == typeof t && null !== t) {
                            if (null == t.as || "script" === t.as) {
                                var n = u(t.as, t.crossOrigin);
                                o.d.M(e, {
                                    crossOrigin: n,
                                    integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                                    nonce: "string" == typeof t.nonce ? t.nonce : void 0
                                })
                            }
                        } else null == t && o.d.M(e)
                }, t.preload = function(e, t) {
                    if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
                        var n = t.as,
                            r = u(n, t.crossOrigin);
                        o.d.L(e, n, {
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
                            o.d.m(e, {
                                as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                                crossOrigin: n,
                                integrity: "string" == typeof t.integrity ? t.integrity : void 0
                            })
                        } else o.d.m(e)
                }, t.requestFormReset = function(e) {
                    o.d.r(e)
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
                    }, t.i = function(e, n, r, a, i) {
                        "string" == typeof e && (e = [
                            [null, e, void 0]
                        ]);
                        var o = {};
                        if (r)
                            for (var l = 0; l < this.length; l++) {
                                var s = this[l][0];
                                null != s && (o[s] = !0)
                            }
                        for (var u = 0; u < e.length; u++) {
                            var c = [].concat(e[u]);
                            r && o[c[0]] || (void 0 !== i && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = i), n && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = n) : c[2] = n), a && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = a) : c[4] = "".concat(a)), t.push(c))
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
            6778: (e, t, n) => {
                "use strict";
                e.exports = n.p + "295183786cd8a1389865.woff"
            },
            6835: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    default: () => l
                });
                var r = n(1601),
                    a = n.n(r),
                    i = n(6314),
                    o = n.n(i)()(a());
                o.push([e.id, ".slick-slide {\n    height: auto;\n}", ""]);
                const l = o
            },
            6942: (e, t) => {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function a() {
                        for (var e = "", t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            n && (e = o(e, i(n)))
                        }
                        return e
                    }

                    function i(e) {
                        if ("string" == typeof e || "number" == typeof e) return e;
                        if ("object" != typeof e) return "";
                        if (Array.isArray(e)) return a.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                        var t = "";
                        for (var n in e) r.call(e, n) && e[n] && (t = o(t, n));
                        return t
                    }

                    function o(e, t) {
                        return t ? e ? e + " " + t : e + t : e
                    }
                    e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
                        return a
                    }.apply(t, [])) || (e.exports = n)
                }()
            },
            7717: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    default: () => _
                });
                var r = n(1601),
                    a = n.n(r),
                    i = n(6314),
                    o = n.n(i),
                    l = n(4417),
                    s = n.n(l),
                    u = new URL(n(5983), n.b),
                    c = new URL(n(3408), n.b),
                    d = new URL(n(6778), n.b),
                    f = new URL(n(1626), n.b),
                    p = new URL(n(9550), n.b),
                    h = o()(a()),
                    m = s()(u),
                    g = s()(c),
                    v = s()(c, {
                        hash: "?#iefix"
                    }),
                    y = s()(d),
                    b = s()(f),
                    w = s()(p, {
                        hash: "#slick"
                    });
                h.push([e.id, `@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url(${m}) center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url(${g});\n    src: url(${v}) format('embedded-opentype'), url(${y}) format('woff'), url(${b}) format('truetype'), url(${w}) format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: 'â†';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: 'â†’';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: 'â†’';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: 'â†';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: 'â€¢';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n`, ""]);
                const _ = h
            },
            8028: e => {
                e.exports = function(e) {
                    return e.replace(/[A-Z]/g, function(e) {
                        return "-" + e.toLowerCase()
                    }).toLowerCase()
                }
            },
            8120: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var r = s(n(6540)),
                    a = n(4999),
                    i = s(n(1441)),
                    o = s(n(1327)),
                    l = n(9445);

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function u(e) {
                    return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, u(e)
                }

                function c() {
                    return c = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, c.apply(this, arguments)
                }

                function d(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function f(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? d(Object(n), !0).forEach(function(t) {
                            y(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function p(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, b(r.key), r)
                    }
                }

                function h(e, t) {
                    return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, h(e, t)
                }

                function m(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function g() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                    } catch (e) {}
                    return (g = function() {
                        return !!e
                    })()
                }

                function v(e) {
                    return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, v(e)
                }

                function y(e, t, n) {
                    return (t = b(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function b(e) {
                    var t = function(e) {
                        if ("object" != u(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != u(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == u(t) ? t : String(t)
                }
                var w = (0, l.canUseDOM)() && n(2386);
                t.default = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && h(e, t)
                    }(_, e);
                    var t, n, s, d, b = (s = _, d = g(), function() {
                        var e, t = v(s);
                        if (d) {
                            var n = v(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else e = t.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === u(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return m(e)
                        }(this, e)
                    });

                    function _(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, _), y(m(t = b.call(this, e)), "innerSliderRefHandler", function(e) {
                            return t.innerSlider = e
                        }), y(m(t), "slickPrev", function() {
                            return t.innerSlider.slickPrev()
                        }), y(m(t), "slickNext", function() {
                            return t.innerSlider.slickNext()
                        }), y(m(t), "slickGoTo", function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return t.innerSlider.slickGoTo(e, n)
                        }), y(m(t), "slickPause", function() {
                            return t.innerSlider.pause("paused")
                        }), y(m(t), "slickPlay", function() {
                            return t.innerSlider.autoPlay("play")
                        }), t.state = {
                            breakpoint: null
                        }, t._responsiveMediaHandlers = [], t
                    }
                    return t = _, (n = [{
                        key: "media",
                        value: function(e, t) {
                            w.register(e, t), this._responsiveMediaHandlers.push({
                                query: e,
                                handler: t
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.responsive) {
                                var t = this.props.responsive.map(function(e) {
                                    return e.breakpoint
                                });
                                t.sort(function(e, t) {
                                    return e - t
                                }), t.forEach(function(n, r) {
                                    var a;
                                    a = 0 === r ? (0, i.default)({
                                        minWidth: 0,
                                        maxWidth: n
                                    }) : (0, i.default)({
                                        minWidth: t[r - 1] + 1,
                                        maxWidth: n
                                    }), (0, l.canUseDOM)() && e.media(a, function() {
                                        e.setState({
                                            breakpoint: n
                                        })
                                    })
                                });
                                var n = (0, i.default)({
                                    minWidth: t.slice(-1)[0]
                                });
                                (0, l.canUseDOM)() && this.media(n, function() {
                                    e.setState({
                                        breakpoint: null
                                    })
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._responsiveMediaHandlers.forEach(function(e) {
                                w.unregister(e.query, e.handler)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this;
                            (e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter(function(e) {
                                return e.breakpoint === n.state.breakpoint
                            }))[0].settings ? "unslick" : f(f(f({}, o.default), this.props), t[0].settings) : f(f({}, o.default), this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                            var i = r.default.Children.toArray(this.props.children);
                            i = i.filter(function(e) {
                                return "string" == typeof e ? !!e.trim() : !!e
                            }), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                            for (var s = [], u = null, d = 0; d < i.length; d += e.rows * e.slidesPerRow) {
                                for (var p = [], h = d; h < d + e.rows * e.slidesPerRow; h += e.slidesPerRow) {
                                    for (var m = [], g = h; g < h + e.slidesPerRow && (e.variableWidth && i[g].props.style && (u = i[g].props.style.width), !(g >= i.length)); g += 1) m.push(r.default.cloneElement(i[g], {
                                        key: 100 * d + 10 * h + g,
                                        tabIndex: -1,
                                        style: {
                                            width: "".concat(100 / e.slidesPerRow, "%"),
                                            display: "inline-block"
                                        }
                                    }));
                                    p.push(r.default.createElement("div", {
                                        key: 10 * d + h
                                    }, m))
                                }
                                e.variableWidth ? s.push(r.default.createElement("div", {
                                    key: d,
                                    style: {
                                        width: u
                                    }
                                }, p)) : s.push(r.default.createElement("div", {
                                    key: d
                                }, p))
                            }
                            if ("unslick" === e) {
                                var v = "regular slider " + (this.props.className || "");
                                return r.default.createElement("div", {
                                    className: v
                                }, i)
                            }
                            return s.length <= e.slidesToShow && !e.infinite && (e.unslick = !0), r.default.createElement(a.InnerSlider, c({
                                style: this.props.style,
                                ref: this.innerSliderRefHandler
                            }, (0, l.filterSettings)(e)), s)
                        }
                    }]) && p(t.prototype, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), _
                }(r.default.Component)
            },
            8404: e => {
                function t(e) {
                    this.options = e, !e.deferSetup && this.setup()
                }
                t.prototype = {
                    constructor: t,
                    setup: function() {
                        this.options.setup && this.options.setup(), this.initialised = !0
                    },
                    on: function() {
                        !this.initialised && this.setup(), this.options.match && this.options.match()
                    },
                    off: function() {
                        this.options.unmatch && this.options.unmatch()
                    },
                    destroy: function() {
                        this.options.destroy ? this.options.destroy() : this.off()
                    },
                    equals: function(e) {
                        return this.options === e || this.options.match === e
                    }
                }, e.exports = t
            },
            8841: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, t.default = {
                    animating: !1,
                    autoplaying: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    dragging: !1,
                    edgeDragged: !1,
                    initialized: !1,
                    lazyLoadedList: [],
                    listHeight: null,
                    listWidth: null,
                    scrolling: !1,
                    slideCount: null,
                    slideHeight: null,
                    slideWidth: null,
                    swipeLeft: null,
                    swiped: !1,
                    swiping: !1,
                    touchObject: {
                        startX: 0,
                        startY: 0,
                        curX: 0,
                        curY: 0
                    },
                    trackStyle: {},
                    trackWidth: 0,
                    targetSlide: 0
                }
            },
            8905: (e, t, n) => {
                var r = n(7717);
                r && r.__esModule && (r = r.default), e.exports = "string" == typeof r ? r : r.toString()
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
                    i = Object.assign,
                    o = {};

                function l(e, t, n) {
                    this.props = e, this.context = t, this.refs = o, this.updater = n || a
                }

                function s() {}

                function u(e, t, n) {
                    this.props = e, this.context = t, this.refs = o, this.updater = n || a
                }
                l.prototype.isReactComponent = {}, l.prototype.setState = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, l.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, s.prototype = l.prototype;
                var c = u.prototype = new s;
                c.constructor = u, i(c, l.prototype), c.isPureReactComponent = !0;
                Array.isArray;
                var d = Object.prototype.hasOwnProperty;

                function f(e, t, r, a, i, o) {
                    return r = o.ref, {
                        $$typeof: n,
                        type: e,
                        key: t,
                        ref: void 0 !== r ? r : null,
                        props: o
                    }
                }
                "function" == typeof reportError && reportError;
                t.createElement = function(e, t, n) {
                    var r, a = {},
                        i = null;
                    if (null != t)
                        for (r in void 0 !== t.key && (i = "" + t.key), t) d.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
                    var o = arguments.length - 2;
                    if (1 === o) a.children = n;
                    else if (1 < o) {
                        for (var l = Array(o), s = 0; s < o; s++) l[s] = arguments[s + 2];
                        a.children = l
                    }
                    if (e && e.defaultProps)
                        for (r in o = e.defaultProps) void 0 === a[r] && (a[r] = o[r]);
                    return f(e, i, void 0, 0, 0, a)
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
                    i = n(6314),
                    o = n.n(i)()(a());
                o.push([e.id, '*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font-family by default.\n2. Use the user\'s configured `mono` font-feature-settings by default.\n3. Use the user\'s configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type=\'button\']),\ninput:where([type=\'reset\']),\ninput:where([type=\'submit\']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden="until-found"])) {\n  display: none;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.-left-2 {\n  left: -0.5rem;\n}\n.-right-2 {\n  right: -0.5rem;\n}\n.-top-2 {\n  top: -0.5rem;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-3 {\n  bottom: 0.75rem;\n}\n.left-0 {\n  left: 0px;\n}\n.left-3 {\n  left: 0.75rem;\n}\n.right-0 {\n  right: 0px;\n}\n.right-3 {\n  right: 0.75rem;\n}\n.top-0 {\n  top: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-50 {\n  z-index: 50;\n}\n.m-0 {\n  margin: 0px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mb-0 {\n  margin-bottom: 0px;\n}\n.mb-0\\.5 {\n  margin-bottom: 0.125rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.mb-\\[2px\\] {\n  margin-bottom: 2px;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.mt-\\[2px\\] {\n  margin-top: 2px;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-48 {\n  height: 12rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-7 {\n  height: 1.75rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-\\[2\\.5rem\\] {\n  height: 2.5rem;\n}\n.min-h-0 {\n  min-height: 0px;\n}\n.min-h-\\[2\\.5rem\\] {\n  min-height: 2.5rem;\n}\n.min-h-\\[3rem\\] {\n  min-height: 3rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-7 {\n  width: 1.75rem;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-\\[2\\.5rem\\] {\n  width: 2.5rem;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-\\[2\\.5rem\\] {\n  min-width: 2.5rem;\n}\n.min-w-\\[200px\\] {\n  min-width: 200px;\n}\n.min-w-\\[320px\\] {\n  min-width: 320px;\n}\n.min-w-\\[3rem\\] {\n  min-width: 3rem;\n}\n.max-w-4xl {\n  max-width: 56rem;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.max-w-prose {\n  max-width: 65ch;\n}\n.max-w-xl {\n  max-width: 36rem;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.-translate-x-7 {\n  --tw-translate-x: -1.75rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[1px\\] {\n  --tw-translate-y: 1px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes pulse {\n\n  50% {\n    opacity: .5;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.resize {\n  resize: both;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-0 {\n  border-width: 0px;\n}\n.border-t-4 {\n  border-top-width: 4px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-emerald-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(16 185 129 / var(--tw-border-opacity, 1));\n}\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));\n}\n.border-gray-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));\n}\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.p-0 {\n  padding: 0px;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.px-12 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pt-6 {\n  padding-top: 1.5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.leading-5 {\n  line-height: 1.25rem;\n}\n.leading-6 {\n  line-height: 1.5rem;\n}\n.leading-7 {\n  line-height: 1.75rem;\n}\n.leading-8 {\n  line-height: 2rem;\n}\n.leading-none {\n  line-height: 1;\n}\n.text-\\[\\#F8AF0D\\] {\n  --tw-text-opacity: 1;\n  color: rgb(248 175 13 / var(--tw-text-opacity, 1));\n}\n.text-amber-500 {\n  --tw-text-opacity: 1;\n  color: rgb(245 158 11 / var(--tw-text-opacity, 1));\n}\n.text-amber-600 {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity, 1));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.text-gray-50 {\n  --tw-text-opacity: 1;\n  color: rgb(249 250 251 / var(--tw-text-opacity, 1));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.text-gray-950 {\n  --tw-text-opacity: 1;\n  color: rgb(3 7 18 / var(--tw-text-opacity, 1));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.no-underline {\n  text-decoration-line: none;\n}\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-none {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.outline-dashed {\n  outline-style: dashed;\n}\n.outline-0 {\n  outline-width: 0px;\n}\n.outline-gray-500 {\n  outline-color: #6b7280;\n}\n.ring-gray-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1));\n}\n.ring-gray-900 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity, 1));\n}\n.grayscale {\n  --tw-grayscale: grayscale(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n:host {\n    all: initial;\n    display: block;\n    box-sizing: border-box; /* reset useful defaults */\n    line-height: 1.5; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    -o-tab-size: 4;\n    tab-size: 4; /* 3 */\n    font-family: ui-sans-serif, system-ui, sans-serif,\n        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n        "Noto Color Emoji"; /* 4 */\n    font-feature-settings: normal; /* 5 */\n    font-variation-settings: normal; /* 6 */\n    -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.group:hover .group-hover\\:flex {\n  display: flex;\n}\n\n@media (min-width: 768px) {\n\n  .md\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:leading-6 {\n    line-height: 1.5rem;\n  }\n\n  .lg\\:leading-7 {\n    line-height: 1.75rem;\n  }\n}\n', ""]);
                const l = o
            },
            9223: (e, t, n) => {
                "use strict";

                function r(e) {
                    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, r(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.PrevArrow = t.NextArrow = void 0;
                var a = l(n(6540)),
                    i = l(n(6942)),
                    o = n(9445);

                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function s() {
                    return s = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, s.apply(this, arguments)
                }

                function u(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function c(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(n), !0).forEach(function(t) {
                            var r, a, i;
                            r = e, a = t, i = n[t], (a = h(a)) in r ? Object.defineProperty(r, a, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[a] = i
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function d(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function f(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, h(r.key), r)
                    }
                }

                function p(e, t, n) {
                    return t && f(e.prototype, t), n && f(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }

                function h(e) {
                    var t = function(e) {
                        if ("object" != r(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != r(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == r(t) ? t : String(t)
                }

                function m(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && g(e, t)
                }

                function g(e, t) {
                    return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, g(e, t)
                }

                function v(e) {
                    var t = y();
                    return function() {
                        var n, a = b(e);
                        if (t) {
                            var i = b(this).constructor;
                            n = Reflect.construct(a, arguments, i)
                        } else n = a.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === r(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(e)
                        }(this, n)
                    }
                }

                function y() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                    } catch (e) {}
                    return (y = function() {
                        return !!e
                    })()
                }

                function b(e) {
                    return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, b(e)
                }
                t.PrevArrow = function(e) {
                    m(n, e);
                    var t = v(n);

                    function n() {
                        return d(this, n), t.apply(this, arguments)
                    }
                    return p(n, [{
                        key: "clickHandler",
                        value: function(e, t) {
                            t && t.preventDefault(), this.props.clickHandler(e, t)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                    "slick-arrow": !0,
                                    "slick-prev": !0
                                },
                                t = this.clickHandler.bind(this, {
                                    message: "previous"
                                });
                            !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
                            var n = {
                                    key: "0",
                                    "data-role": "none",
                                    className: (0, i.default)(e),
                                    style: {
                                        display: "block"
                                    },
                                    onClick: t
                                },
                                r = {
                                    currentSlide: this.props.currentSlide,
                                    slideCount: this.props.slideCount
                                };
                            return this.props.prevArrow ? a.default.cloneElement(this.props.prevArrow, c(c({}, n), r)) : a.default.createElement("button", s({
                                key: "0",
                                type: "button"
                            }, n), " ", "Previous")
                        }
                    }]), n
                }(a.default.PureComponent), t.NextArrow = function(e) {
                    m(n, e);
                    var t = v(n);

                    function n() {
                        return d(this, n), t.apply(this, arguments)
                    }
                    return p(n, [{
                        key: "clickHandler",
                        value: function(e, t) {
                            t && t.preventDefault(), this.props.clickHandler(e, t)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                    "slick-arrow": !0,
                                    "slick-next": !0
                                },
                                t = this.clickHandler.bind(this, {
                                    message: "next"
                                });
                            (0, o.canGoNext)(this.props) || (e["slick-disabled"] = !0, t = null);
                            var n = {
                                    key: "1",
                                    "data-role": "none",
                                    className: (0, i.default)(e),
                                    style: {
                                        display: "block"
                                    },
                                    onClick: t
                                },
                                r = {
                                    currentSlide: this.props.currentSlide,
                                    slideCount: this.props.slideCount
                                };
                            return this.props.nextArrow ? a.default.cloneElement(this.props.nextArrow, c(c({}, n), r)) : a.default.createElement("button", s({
                                key: "1",
                                type: "button"
                            }, n), " ", "Next")
                        }
                    }]), n
                }(a.default.PureComponent)
            },
            9445: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.checkSpecKeys = t.checkNavigable = t.changeSlide = t.canUseDOM = t.canGoNext = void 0, t.clamp = u, t.extractObject = void 0, t.filterSettings = function(e) {
                    return T.reduce(function(t, n) {
                        return e.hasOwnProperty(n) && (t[n] = e[n]), t
                    }, {})
                }, t.validSettings = t.swipeStart = t.swipeMove = t.swipeEnd = t.slidesOnRight = t.slidesOnLeft = t.slideHandler = t.siblingDirection = t.safePreventDefault = t.lazyStartIndex = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.keyHandler = t.initializedState = t.getWidth = t.getTrackLeft = t.getTrackCSS = t.getTrackAnimateCSS = t.getTotalSlides = t.getSwipeDirection = t.getSlideCount = t.getRequiredLazySlides = t.getPreClones = t.getPostClones = t.getOnDemandLazySlides = t.getNavigableIndexes = t.getHeight = void 0;
                var r = i(n(6540)),
                    a = i(n(1327));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function o(e) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, o(e)
                }

                function l(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(n), !0).forEach(function(t) {
                            var r, a, i, l;
                            r = e, a = t, i = n[t], l = function(e) {
                                if ("object" != o(e) || !e) return e;
                                var t = e[Symbol.toPrimitive];
                                if (void 0 !== t) {
                                    var n = t.call(e, "string");
                                    if ("object" != o(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(a), (a = "symbol" == o(l) ? l : String(l)) in r ? Object.defineProperty(r, a, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[a] = i
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function u(e, t, n) {
                    return Math.max(t, Math.min(e, n))
                }
                var c = t.safePreventDefault = function(e) {
                        ["onTouchStart", "onTouchMove", "onWheel"].includes(e._reactName) || e.preventDefault()
                    },
                    d = t.getOnDemandLazySlides = function(e) {
                        for (var t = [], n = f(e), r = p(e), a = n; a < r; a++) e.lazyLoadedList.indexOf(a) < 0 && t.push(a);
                        return t
                    },
                    f = (t.getRequiredLazySlides = function(e) {
                        for (var t = [], n = f(e), r = p(e), a = n; a < r; a++) t.push(a);
                        return t
                    }, t.lazyStartIndex = function(e) {
                        return e.currentSlide - h(e)
                    }),
                    p = t.lazyEndIndex = function(e) {
                        return e.currentSlide + m(e)
                    },
                    h = t.lazySlidesOnLeft = function(e) {
                        return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0
                    },
                    m = t.lazySlidesOnRight = function(e) {
                        return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow
                    },
                    g = t.getWidth = function(e) {
                        return e && e.offsetWidth || 0
                    },
                    v = t.getHeight = function(e) {
                        return e && e.offsetHeight || 0
                    },
                    y = t.getSwipeDirection = function(e) {
                        var t, n, r, a, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return t = e.startX - e.curX, n = e.startY - e.curY, r = Math.atan2(n, t), (a = Math.round(180 * r / Math.PI)) < 0 && (a = 360 - Math.abs(a)), a <= 45 && a >= 0 || a <= 360 && a >= 315 ? "left" : a >= 135 && a <= 225 ? "right" : !0 === i ? a >= 35 && a <= 135 ? "up" : "down" : "vertical"
                    },
                    b = t.canGoNext = function(e) {
                        var t = !0;
                        return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1), t
                    },
                    w = (t.extractObject = function(e, t) {
                        var n = {};
                        return t.forEach(function(t) {
                            return n[t] = e[t]
                        }), n
                    }, t.initializedState = function(e) {
                        var t, n = r.default.Children.count(e.children),
                            a = e.listRef,
                            i = Math.ceil(g(a)),
                            o = e.trackRef && e.trackRef.node,
                            l = Math.ceil(g(o));
                        if (e.vertical) t = i;
                        else {
                            var u = e.centerMode && 2 * parseInt(e.centerPadding);
                            "string" == typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (u *= i / 100), t = Math.ceil((i - u) / e.slidesToShow)
                        }
                        var c = a && v(a.querySelector('[data-index="0"]')),
                            f = c * e.slidesToShow,
                            p = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
                        e.rtl && void 0 === e.currentSlide && (p = n - 1 - e.initialSlide);
                        var h = e.lazyLoadedList || [],
                            m = d(s(s({}, e), {}, {
                                currentSlide: p,
                                lazyLoadedList: h
                            })),
                            y = {
                                slideCount: n,
                                slideWidth: t,
                                listWidth: i,
                                trackWidth: l,
                                currentSlide: p,
                                slideHeight: c,
                                listHeight: f,
                                lazyLoadedList: h = h.concat(m)
                            };
                        return null === e.autoplaying && e.autoplay && (y.autoplaying = "playing"), y
                    }, t.slideHandler = function(e) {
                        var t = e.waitForAnimate,
                            n = e.animating,
                            r = e.fade,
                            a = e.infinite,
                            i = e.index,
                            o = e.slideCount,
                            l = e.lazyLoad,
                            c = e.currentSlide,
                            f = e.centerMode,
                            p = e.slidesToScroll,
                            h = e.slidesToShow,
                            m = e.useCSS,
                            g = e.lazyLoadedList;
                        if (t && n) return {};
                        var v, y, w, _ = i,
                            k = {},
                            x = {},
                            O = a ? i : u(i, 0, o - 1);
                        if (r) {
                            if (!a && (i < 0 || i >= o)) return {};
                            i < 0 ? _ = i + o : i >= o && (_ = i - o), l && g.indexOf(_) < 0 && (g = g.concat(_)), k = {
                                animating: !0,
                                currentSlide: _,
                                lazyLoadedList: g,
                                targetSlide: _
                            }, x = {
                                animating: !1,
                                targetSlide: _
                            }
                        } else v = _, _ < 0 ? (v = _ + o, a ? o % p !== 0 && (v = o - o % p) : v = 0) : !b(e) && _ > c ? _ = v = c : f && _ >= o ? (_ = a ? o : o - 1, v = a ? 0 : o - 1) : _ >= o && (v = _ - o, a ? o % p !== 0 && (v = 0) : v = o - h), !a && _ + h >= o && (v = o - h), y = E(s(s({}, e), {}, {
                            slideIndex: _
                        })), w = E(s(s({}, e), {}, {
                            slideIndex: v
                        })), a || (y === w && (_ = v), y = w), l && (g = g.concat(d(s(s({}, e), {}, {
                            currentSlide: _
                        })))), m ? (k = {
                            animating: !0,
                            currentSlide: v,
                            trackStyle: z(s(s({}, e), {}, {
                                left: y
                            })),
                            lazyLoadedList: g,
                            targetSlide: O
                        }, x = {
                            animating: !1,
                            currentSlide: v,
                            trackStyle: S(s(s({}, e), {}, {
                                left: w
                            })),
                            swipeLeft: null,
                            targetSlide: O
                        }) : k = {
                            currentSlide: v,
                            trackStyle: S(s(s({}, e), {}, {
                                left: w
                            })),
                            lazyLoadedList: g,
                            targetSlide: O
                        };
                        return {
                            state: k,
                            nextState: x
                        }
                    }, t.changeSlide = function(e, t) {
                        var n, r, a, i, o = e.slidesToScroll,
                            l = e.slidesToShow,
                            u = e.slideCount,
                            c = e.currentSlide,
                            d = e.targetSlide,
                            f = e.lazyLoad,
                            p = e.infinite;
                        if (n = u % o !== 0 ? 0 : (u - c) % o, "previous" === t.message) i = c - (a = 0 === n ? o : l - n), f && !p && (i = -1 === (r = c - a) ? u - 1 : r), p || (i = d - o);
                        else if ("next" === t.message) i = c + (a = 0 === n ? o : n), f && !p && (i = (c + o) % u + n), p || (i = d + o);
                        else if ("dots" === t.message) i = t.index * t.slidesToScroll;
                        else if ("children" === t.message) {
                            if (i = t.index, p) {
                                var h = j(s(s({}, e), {}, {
                                    targetSlide: i
                                }));
                                i > t.currentSlide && "left" === h ? i -= u : i < t.currentSlide && "right" === h && (i += u)
                            }
                        } else "index" === t.message && (i = Number(t.index));
                        return i
                    }, t.keyHandler = function(e, t, n) {
                        return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : ""
                    }, t.swipeStart = function(e, t, n) {
                        return "IMG" === e.target.tagName && c(e), !t || !n && -1 !== e.type.indexOf("mouse") ? "" : {
                            dragging: !0,
                            touchObject: {
                                startX: e.touches ? e.touches[0].pageX : e.clientX,
                                startY: e.touches ? e.touches[0].pageY : e.clientY,
                                curX: e.touches ? e.touches[0].pageX : e.clientX,
                                curY: e.touches ? e.touches[0].pageY : e.clientY
                            }
                        }
                    }, t.swipeMove = function(e, t) {
                        var n = t.scrolling,
                            r = t.animating,
                            a = t.vertical,
                            i = t.swipeToSlide,
                            o = t.verticalSwiping,
                            l = t.rtl,
                            u = t.currentSlide,
                            d = t.edgeFriction,
                            f = t.edgeDragged,
                            p = t.onEdge,
                            h = t.swiped,
                            m = t.swiping,
                            g = t.slideCount,
                            v = t.slidesToScroll,
                            w = t.infinite,
                            _ = t.touchObject,
                            k = t.swipeEvent,
                            x = t.listHeight,
                            z = t.listWidth;
                        if (!n) {
                            if (r) return c(e);
                            a && i && o && c(e);
                            var O, C = {},
                                P = E(t);
                            _.curX = e.touches ? e.touches[0].pageX : e.clientX, _.curY = e.touches ? e.touches[0].pageY : e.clientY, _.swipeLength = Math.round(Math.sqrt(Math.pow(_.curX - _.startX, 2)));
                            var j = Math.round(Math.sqrt(Math.pow(_.curY - _.startY, 2)));
                            if (!o && !m && j > 10) return {
                                scrolling: !0
                            };
                            o && (_.swipeLength = j);
                            var N = (l ? -1 : 1) * (_.curX > _.startX ? 1 : -1);
                            o && (N = _.curY > _.startY ? 1 : -1);
                            var L = Math.ceil(g / v),
                                T = y(t.touchObject, o),
                                M = _.swipeLength;
                            return w || (0 === u && ("right" === T || "down" === T) || u + 1 >= L && ("left" === T || "up" === T) || !b(t) && ("left" === T || "up" === T)) && (M = _.swipeLength * d, !1 === f && p && (p(T), C.edgeDragged = !0)), !h && k && (k(T), C.swiped = !0), O = a ? P + M * (x / z) * N : l ? P - M * N : P + M * N, o && (O = P + M * N), C = s(s({}, C), {}, {
                                touchObject: _,
                                swipeLeft: O,
                                trackStyle: S(s(s({}, t), {}, {
                                    left: O
                                }))
                            }), Math.abs(_.curX - _.startX) < .8 * Math.abs(_.curY - _.startY) || _.swipeLength > 10 && (C.swiping = !0, c(e)), C
                        }
                    }, t.swipeEnd = function(e, t) {
                        var n = t.dragging,
                            r = t.swipe,
                            a = t.touchObject,
                            i = t.listWidth,
                            o = t.touchThreshold,
                            l = t.verticalSwiping,
                            u = t.listHeight,
                            d = t.swipeToSlide,
                            f = t.scrolling,
                            p = t.onSwipe,
                            h = t.targetSlide,
                            m = t.currentSlide,
                            g = t.infinite;
                        if (!n) return r && c(e), {};
                        var v = l ? u / o : i / o,
                            b = y(a, l),
                            w = {
                                dragging: !1,
                                edgeDragged: !1,
                                scrolling: !1,
                                swiping: !1,
                                swiped: !1,
                                swipeLeft: null,
                                touchObject: {}
                            };
                        if (f) return w;
                        if (!a.swipeLength) return w;
                        if (a.swipeLength > v) {
                            var x, S;
                            c(e), p && p(b);
                            var O = g ? m : h;
                            switch (b) {
                                case "left":
                                case "up":
                                    S = O + k(t), x = d ? _(t, S) : S, w.currentDirection = 0;
                                    break;
                                case "right":
                                case "down":
                                    S = O - k(t), x = d ? _(t, S) : S, w.currentDirection = 1;
                                    break;
                                default:
                                    x = O
                            }
                            w.triggerSlideHandler = x
                        } else {
                            var C = E(t);
                            w.trackStyle = z(s(s({}, t), {}, {
                                left: C
                            }))
                        }
                        return w
                    }, t.getNavigableIndexes = function(e) {
                        for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, r = e.infinite ? -1 * e.slidesToShow : 0, a = []; n < t;) a.push(n), n = r + e.slidesToScroll, r += Math.min(e.slidesToScroll, e.slidesToShow);
                        return a
                    }),
                    _ = t.checkNavigable = function(e, t) {
                        var n = w(e),
                            r = 0;
                        if (t > n[n.length - 1]) t = n[n.length - 1];
                        else
                            for (var a in n) {
                                if (t < n[a]) {
                                    t = r;
                                    break
                                }
                                r = n[a]
                            }
                        return t
                    },
                    k = t.getSlideCount = function(e) {
                        var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
                        if (e.swipeToSlide) {
                            var n, r = e.listRef,
                                a = r.querySelectorAll && r.querySelectorAll(".slick-slide") || [];
                            if (Array.from(a).every(function(r) {
                                    if (e.vertical) {
                                        if (r.offsetTop + v(r) / 2 > -1 * e.swipeLeft) return n = r, !1
                                    } else if (r.offsetLeft - t + g(r) / 2 > -1 * e.swipeLeft) return n = r, !1;
                                    return !0
                                }), !n) return 0;
                            var i = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
                            return Math.abs(n.dataset.index - i) || 1
                        }
                        return e.slidesToScroll
                    },
                    x = t.checkSpecKeys = function(e, t) {
                        return t.reduce(function(t, n) {
                            return t && e.hasOwnProperty(n)
                        }, !0) ? null : console.error("Keys Missing:", e)
                    },
                    S = t.getTrackCSS = function(e) {
                        var t, n;
                        x(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
                        var r = e.slideCount + 2 * e.slidesToShow;
                        e.vertical ? n = r * e.slideHeight : t = P(e) * e.slideWidth;
                        var a = {
                            opacity: 1,
                            transition: "",
                            WebkitTransition: ""
                        };
                        if (e.useTransform) {
                            var i = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                                o = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                                l = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
                            a = s(s({}, a), {}, {
                                WebkitTransform: i,
                                transform: o,
                                msTransform: l
                            })
                        } else e.vertical ? a.top = e.left : a.left = e.left;
                        return e.fade && (a = {
                            opacity: 1
                        }), t && (a.width = t), n && (a.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? a.marginTop = e.left + "px" : a.marginLeft = e.left + "px"), a
                    },
                    z = t.getTrackAnimateCSS = function(e) {
                        x(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
                        var t = S(e);
                        return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
                    },
                    E = t.getTrackLeft = function(e) {
                        if (e.unslick) return 0;
                        x(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
                        var t, n, r = e.slideIndex,
                            a = e.trackRef,
                            i = e.infinite,
                            o = e.centerMode,
                            l = e.slideCount,
                            s = e.slidesToShow,
                            u = e.slidesToScroll,
                            c = e.slideWidth,
                            d = e.listWidth,
                            f = e.variableWidth,
                            p = e.slideHeight,
                            h = e.fade,
                            m = e.vertical;
                        if (h || 1 === e.slideCount) return 0;
                        var g = 0;
                        if (i ? (g = -O(e), l % u !== 0 && r + u > l && (g = -(r > l ? s - (r - l) : l % u)), o && (g += parseInt(s / 2))) : (l % u !== 0 && r + u > l && (g = s - l % u), o && (g = parseInt(s / 2))), t = m ? r * p * -1 + g * p : r * c * -1 + g * c, !0 === f) {
                            var v, y = a && a.node;
                            if (v = r + O(e), t = (n = y && y.childNodes[v]) ? -1 * n.offsetLeft : 0, !0 === o) {
                                v = i ? r + O(e) : r, n = y && y.children[v], t = 0;
                                for (var b = 0; b < v; b++) t -= y && y.children[b] && y.children[b].offsetWidth;
                                t -= parseInt(e.centerPadding), t += n && (d - n.offsetWidth) / 2
                            }
                        }
                        return t
                    },
                    O = t.getPreClones = function(e) {
                        return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0)
                    },
                    C = t.getPostClones = function(e) {
                        return e.unslick || !e.infinite ? 0 : e.slideCount
                    },
                    P = t.getTotalSlides = function(e) {
                        return 1 === e.slideCount ? 1 : O(e) + e.slideCount + C(e)
                    },
                    j = t.siblingDirection = function(e) {
                        return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + N(e) ? "left" : "right" : e.targetSlide < e.currentSlide - L(e) ? "right" : "left"
                    },
                    N = t.slidesOnRight = function(e) {
                        var t = e.slidesToShow,
                            n = e.centerMode,
                            r = e.rtl,
                            a = e.centerPadding;
                        if (n) {
                            var i = (t - 1) / 2 + 1;
                            return parseInt(a) > 0 && (i += 1), r && t % 2 == 0 && (i += 1), i
                        }
                        return r ? 0 : t - 1
                    },
                    L = t.slidesOnLeft = function(e) {
                        var t = e.slidesToShow,
                            n = e.centerMode,
                            r = e.rtl,
                            a = e.centerPadding;
                        if (n) {
                            var i = (t - 1) / 2 + 1;
                            return parseInt(a) > 0 && (i += 1), r || t % 2 != 0 || (i += 1), i
                        }
                        return r ? t - 1 : 0
                    },
                    T = (t.canUseDOM = function() {
                        return !("undefined" == typeof window || !window.document || !window.document.createElement)
                    }, t.validSettings = Object.keys(a.default))
            },
            9550: (e, t, n) => {
                "use strict";
                e.exports = n.p + "2630a3e3eab21c607e21.svg"
            },
            9698: (e, t) => {
                "use strict";
                var n = Symbol.for("react.transitional.element"),
                    r = Symbol.for("react.fragment");

                function a(e, t, r) {
                    var a = null;
                    if (void 0 !== r && (a = "" + r), void 0 !== t.key && (a = "" + t.key), "key" in t)
                        for (var i in r = {}, t) "key" !== i && (r[i] = t[i]);
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
                    i = Symbol.for("react.strict_mode"),
                    o = Symbol.for("react.profiler"),
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
                    k = {
                        H: null,
                        A: null,
                        T: null,
                        S: null,
                        V: null
                    },
                    x = Object.prototype.hasOwnProperty;

                function S(e, t, r, a, i, o) {
                    return r = o.ref, {
                        $$typeof: n,
                        type: e,
                        key: t,
                        ref: void 0 !== r ? r : null,
                        props: o
                    }
                }

                function z(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === n
                }
                var E = /\/+/g;

                function O(e, t) {
                    return "object" == typeof e && null !== e && null != e.key ? (n = "" + e.key, r = {
                        "=": "=0",
                        ":": "=2"
                    }, "$" + n.replace(/[=:]/g, function(e) {
                        return r[e]
                    })) : t.toString(36);
                    var n, r
                }

                function C() {}

                function P(e, t, a, i, o) {
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
                                    return P((c = e._init)(e._payload), t, a, i, o)
                            }
                    }
                    if (c) return o = o(e), c = "" === i ? "." + O(e, 0) : i, _(o) ? (a = "", null != c && (a = c.replace(E, "$&/") + "/"), P(o, t, a, "", function(e) {
                        return e
                    })) : null != o && (z(o) && (s = o, u = a + (null == o.key || e && e.key === o.key ? "" : ("" + o.key).replace(E, "$&/") + "/") + c, o = S(s.type, u, void 0, 0, 0, s.props)), t.push(o)), 1;
                    c = 0;
                    var d, h = "" === i ? "." : i + ":";
                    if (_(e))
                        for (var m = 0; m < e.length; m++) c += P(i = e[m], t, a, l = h + O(i, m), o);
                    else if ("function" == typeof(m = null === (d = e) || "object" != typeof d ? null : "function" == typeof(d = p && d[p] || d["@@iterator"]) ? d : null))
                        for (e = m.call(e), m = 0; !(i = e.next()).done;) c += P(i = i.value, t, a, l = h + O(i, m++), o);
                    else if ("object" === l) {
                        if ("function" == typeof e.then) return P(function(e) {
                            switch (e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason;
                                default:
                                    switch ("string" == typeof e.status ? e.then(C, C) : (e.status = "pending", e.then(function(t) {
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
                        }(e), t, a, i, o);
                        throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
                    }
                    return c
                }

                function j(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return P(e, r, "", "", function(e) {
                        return t.call(n, e, a++)
                    }), r
                }

                function N(e) {
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
                    map: j,
                    forEach: function(e, t, n) {
                        j(e, function() {
                            t.apply(this, arguments)
                        }, n)
                    },
                    count: function(e) {
                        var t = 0;
                        return j(e, function() {
                            t++
                        }), t
                    },
                    toArray: function(e) {
                        return j(e, function(e) {
                            return e
                        }) || []
                    },
                    only: function(e) {
                        if (!z(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = v, t.Fragment = a, t.Profiler = o, t.PureComponent = b, t.StrictMode = i, t.Suspense = c, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, t.__COMPILER_RUNTIME = {
                    __proto__: null,
                    c: function(e) {
                        return k.H.useMemoCache(e)
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
                        for (i in t.ref, void 0 !== t.key && (a = "" + t.key), t) !x.call(t, i) || "key" === i || "__self" === i || "__source" === i || "ref" === i && void 0 === t.ref || (r[i] = t[i]);
                    var i = arguments.length - 2;
                    if (1 === i) r.children = n;
                    else if (1 < i) {
                        for (var o = Array(i), l = 0; l < i; l++) o[l] = arguments[l + 2];
                        r.children = o
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
                        i = null;
                    if (null != t)
                        for (r in void 0 !== t.key && (i = "" + t.key), t) x.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
                    var o = arguments.length - 2;
                    if (1 === o) a.children = n;
                    else if (1 < o) {
                        for (var l = Array(o), s = 0; s < o; s++) l[s] = arguments[s + 2];
                        a.children = l
                    }
                    if (e && e.defaultProps)
                        for (r in o = e.defaultProps) void 0 === a[r] && (a[r] = o[r]);
                    return S(e, i, void 0, 0, 0, a)
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
                        _init: N
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: d,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = k.T,
                        n = {};
                    k.T = n;
                    try {
                        var r = e(),
                            a = k.S;
                        null !== a && a(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(T, L)
                    } catch (e) {
                        L(e)
                    } finally {
                        k.T = t
                    }
                }, t.unstable_useCacheRefresh = function() {
                    return k.H.useCacheRefresh()
                }, t.use = function(e) {
                    return k.H.use(e)
                }, t.useActionState = function(e, t, n) {
                    return k.H.useActionState(e, t, n)
                }, t.useCallback = function(e, t) {
                    return k.H.useCallback(e, t)
                }, t.useContext = function(e) {
                    return k.H.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e, t) {
                    return k.H.useDeferredValue(e, t)
                }, t.useEffect = function(e, t, n) {
                    var r = k.H;
                    if ("function" == typeof n) throw Error("useEffect CRUD overload is not enabled in this build of React.");
                    return r.useEffect(e, t)
                }, t.useId = function() {
                    return k.H.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return k.H.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return k.H.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return k.H.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return k.H.useMemo(e, t)
                }, t.useOptimistic = function(e, t) {
                    return k.H.useOptimistic(e, t)
                }, t.useReducer = function(e, t, n) {
                    return k.H.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return k.H.useRef(e)
                }, t.useState = function(e) {
                    return k.H.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return k.H.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return k.H.useTransition()
                }, t.version = "19.1.0"
            },
            9982: (e, t, n) => {
                "use strict";
                e.exports = n(4477)
            }
        },
        i = {};

    function o(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var n = i[e] = {
            id: e,
            exports: {}
        };
        return a[e](n, n.exports, o), n.exports
    }
    o.m = a, o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, o.t = function(n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var a = Object.create(null);
        o.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & r && n;
            "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach(e => i[e] = () => n[e]);
        return i.default = () => n, o.d(a, i), a
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce((t, n) => (o.f[n](e, t), t), [])), o.u = e => e + ".min.js", o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, r = "widgets_v2:", o.l = (e, t, a, i) => {
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
            l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, o.nc && l.setAttribute("nonce", o.nc), l.setAttribute("data-webpack", r + a), l.src = e), n[e] = [t];
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
    }, o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        o.g.importScripts && (e = o.g.location + "");
        var t = o.g.document;
        if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
                for (var r = n.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = n[r--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
    })(), (() => {
        o.b = document.baseURI || self.location.href;
        var e = {
            523: 0
        };
        o.f.j = (t, n) => {
            var r = o.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else {
                    var a = new Promise((n, a) => r = e[t] = [n, a]);
                    n.push(r[2] = a);
                    var i = o.p + o.u(t),
                        l = new Error;
                    o.l(i, n => {
                        if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var a = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")", l.name = "ChunkLoadError", l.type = a, l.request = i, r[1](l)
                        }
                    }, "chunk-" + t, t)
                }
        };
        var t = (t, n) => {
                var r, a, [i, l, s] = n,
                    u = 0;
                if (i.some(t => 0 !== e[t])) {
                    for (r in l) o.o(l, r) && (o.m[r] = l[r]);
                    s && s(o)
                }
                for (t && t(n); u < i.length; u++) a = i[u], o.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            n = self.webpackChunkwidgets_v2 = self.webpackChunkwidgets_v2 || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var l = {};
    return (() => {
        "use strict";
        o.r(l), o.d(l, {
            default: () => Ti
        });
        var e = o(4848);

        function t(e, t, n) {
            function r(n, r) {
                var a;
                Object.defineProperty(n, "_zod", {
                    value: n._zod ?? {},
                    enumerable: !1
                }), (a = n._zod).traits ?? (a.traits = new Set), n._zod.traits.add(e), t(n, r);
                for (const e in o.prototype) e in n || Object.defineProperty(n, e, {
                    value: o.prototype[e].bind(n)
                });
                n._zod.constr = o, n._zod.def = r
            }
            const a = n?.Parent ?? Object;
            class i extends a {}

            function o(e) {
                var t;
                const a = n?.Parent ? new i : this;
                r(a, e), (t = a._zod).deferred ?? (t.deferred = []);
                for (const e of a._zod.deferred) e();
                return a
            }
            return Object.defineProperty(i, "name", {
                value: e
            }), Object.defineProperty(o, "init", {
                value: r
            }), Object.defineProperty(o, Symbol.hasInstance, {
                value: t => !!(n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e)
            }), Object.defineProperty(o, "name", {
                value: e
            }), o
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
        const i = /^[cC][^\s-]{8,}$/,
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
            k = /^[A-Za-z0-9_-]*$/,
            x = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
            S = /^\+(?:[0-9]){6,14}[0-9]$/,
            z = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
            E = new RegExp(`^${z}$`);

        function O(e) {
            const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
            return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`
        }
        const C = /^\d+$/,
            P = /^-?\d+(?:\.\d+)?/i,
            j = /true|false/i,
            N = /^[^A-Z]*$/,
            L = /^[^a-z]*$/;

        function T(e, t) {
            return "bigint" == typeof t ? t.toString() : t
        }

        function M(e) {
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

        function R(e) {
            return null == e
        }

        function A(e) {
            const t = e.startsWith("^") ? 1 : 0,
                n = e.endsWith("$") ? e.length - 1 : e.length;
            return e.slice(t, n)
        }
        const D = Symbol("evaluating");

        function I(e, t, n) {
            let r;
            Object.defineProperty(e, t, {
                get() {
                    if (r !== D) return void 0 === r && (r = D, r = n()), r
                },
                set(n) {
                    Object.defineProperty(e, t, {
                        value: n
                    })
                },
                configurable: !0
            })
        }

        function $(e, t, n) {
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
        const H = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};

        function V(e) {
            return "object" == typeof e && null !== e && !Array.isArray(e)
        }
        const W = M(() => {
            if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
            try {
                return new Function(""), !0
            } catch (e) {
                return !1
            }
        });

        function B(e) {
            if (!1 === V(e)) return !1;
            const t = e.constructor;
            if (void 0 === t) return !0;
            const n = t.prototype;
            return !1 !== V(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
        }
        const Z = new Set(["string", "number", "symbol"]);

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

        function X(e, t) {
            return t.map(t => {
                var n;
                return (n = t).path ?? (n.path = []), t.path.unshift(e), t
            })
        }

        function J(e) {
            return "string" == typeof e ? e : e?.message
        }

        function ee(e, t, n) {
            const r = {
                ...e,
                path: e.path ?? []
            };
            if (!e.message) {
                const a = J(e.inst?._zod.def?.error?.(e)) ?? J(t?.error?.(e)) ?? J(n.customError?.(e)) ?? J(n.localeError?.(e)) ?? "Invalid input";
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
            ie = t("$ZodCheckLessThan", (e, t) => {
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
            oe = t("$ZodCheckGreaterThan", (e, t) => {
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
                        const i = n > a ? n : a;
                        return Number.parseInt(e.toFixed(i).replace(".", "")) % Number.parseInt(t.toFixed(i).replace(".", "")) / 10 ** i
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
                    [a, i] = Q[t.format];
                e._zod.onattach.push(e => {
                    const r = e._zod.bag;
                    r.format = t.format, r.minimum = a, r.maximum = i, n && (r.pattern = C)
                }), e._zod.check = o => {
                    const l = o.value;
                    if (n) {
                        if (!Number.isInteger(l)) return void o.issues.push({
                            expected: r,
                            format: t.format,
                            code: "invalid_type",
                            continue: !1,
                            input: l,
                            inst: e
                        });
                        if (!Number.isSafeInteger(l)) return void(l > 0 ? o.issues.push({
                            input: l,
                            code: "too_big",
                            maximum: Number.MAX_SAFE_INTEGER,
                            note: "Integers must be within the safe integer range.",
                            inst: e,
                            origin: r,
                            continue: !t.abort
                        }) : o.issues.push({
                            input: l,
                            code: "too_small",
                            minimum: Number.MIN_SAFE_INTEGER,
                            note: "Integers must be within the safe integer range.",
                            inst: e,
                            origin: r,
                            continue: !t.abort
                        }))
                    }
                    l < a && o.issues.push({
                        origin: "number",
                        input: l,
                        code: "too_small",
                        minimum: a,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort
                    }), l > i && o.issues.push({
                        origin: "number",
                        input: l,
                        code: "too_big",
                        maximum: i,
                        inst: e
                    })
                }
            }),
            ue = t("$ZodCheckMaxLength", (e, t) => {
                var n;
                re.init(e, t), (n = e._zod.def).when ?? (n.when = e => {
                    const t = e.value;
                    return !R(t) && void 0 !== t.length
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
                    return !R(t) && void 0 !== t.length
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
                    return !R(t) && void 0 !== t.length
                }), e._zod.onattach.push(e => {
                    const n = e._zod.bag;
                    n.minimum = t.length, n.maximum = t.length, n.length = t.length
                }), e._zod.check = n => {
                    const r = n.value,
                        a = r.length;
                    if (a === t.length) return;
                    const i = te(r),
                        o = a > t.length;
                    n.issues.push({
                        origin: i,
                        ...o ? {
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
                t.pattern ?? (t.pattern = N), fe.init(e, t)
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
            ke = t("$ZodError", _e),
            xe = t("$ZodError", _e, {
                Parent: Error
            }),
            Se = e => (t, r, i, o) => {
                const l = i ? Object.assign(i, {
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
                    const t = new(o?.Err ?? e)(s.issues.map(e => ee(e, l, a())));
                    throw H(t, o?.callee), t
                }
                return s.value
            },
            ze = e => async (t, n, r, i) => {
                const o = r ? Object.assign(r, {
                    async: !0
                }) : {
                    async: !0
                };
                let l = t._zod.run({
                    value: n,
                    issues: []
                }, o);
                if (l instanceof Promise && (l = await l), l.issues.length) {
                    const t = new(i?.Err ?? e)(l.issues.map(e => ee(e, o, a())));
                    throw H(t, i?.callee), t
                }
                return l.value
            }, Ee = e => (t, r, i) => {
                const o = i ? {
                        ...i,
                        async: !1
                    } : {
                        async: !1
                    },
                    l = t._zod.run({
                        value: r,
                        issues: []
                    }, o);
                if (l instanceof Promise) throw new n;
                return l.issues.length ? {
                    success: !1,
                    error: new(e ?? ke)(l.issues.map(e => ee(e, o, a())))
                } : {
                    success: !0,
                    data: l.value
                }
            }, Oe = Ee(xe), Ce = e => async (t, n, r) => {
                const i = r ? Object.assign(r, {
                    async: !0
                }) : {
                    async: !0
                };
                let o = t._zod.run({
                    value: n,
                    issues: []
                }, i);
                return o instanceof Promise && (o = await o), o.issues.length ? {
                    success: !1,
                    error: new e(o.issues.map(e => ee(e, i, a())))
                } : {
                    success: !0,
                    data: o.value
                }
            }, Pe = Ce(xe), je = {
                major: 4,
                minor: 0,
                patch: 14
            }, Ne = t("$ZodType", (e, t) => {
                var r;
                e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = je;
                const a = [...e._zod.def.checks ?? []];
                e._zod.traits.has("$ZodCheck") && a.unshift(e);
                for (const t of a)
                    for (const n of t._zod.onattach) n(e);
                if (0 === a.length)(r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
                    e._zod.run = e._zod.parse
                });
                else {
                    const t = (e, t, r) => {
                        let a, i = Y(e);
                        for (const o of t) {
                            if (o._zod.def.when) {
                                if (!o._zod.def.when(e)) continue
                            } else if (i) continue;
                            const t = e.issues.length,
                                l = o._zod.check(e);
                            if (l instanceof Promise && !1 === r?.async) throw new n;
                            if (a || l instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
                                await l, e.issues.length !== t && (i || (i = Y(e, t)))
                            });
                            else {
                                if (e.issues.length === t) continue;
                                i || (i = Y(e, t))
                            }
                        }
                        return a ? a.then(() => e) : e
                    };
                    e._zod.run = (r, i) => {
                        const o = e._zod.parse(r, i);
                        if (o instanceof Promise) {
                            if (!1 === i.async) throw new n;
                            return o.then(e => t(e, a, i))
                        }
                        return t(o, a, i)
                    }
                }
                e["~standard"] = {
                    validate: t => {
                        try {
                            const n = Oe(e, t);
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
                Ne.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? (n = e._zod.bag, new RegExp(`^${n?`[\\s\\S]{${n?.minimum??0},${n?.maximum??""}}`:"[\\s\\S]*"}$`)), e._zod.parse = (n, r) => {
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
            }), Me = t("$ZodGUID", (e, t) => {
                t.pattern ?? (t.pattern = h), Te.init(e, t)
            }), Re = t("$ZodUUID", (e, t) => {
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
            }), De = t("$ZodURL", (e, t) => {
                Te.init(e, t), e._zod.check = n => {
                    try {
                        const r = n.value.trim(),
                            a = new URL(r);
                        return t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(a.hostname) || n.issues.push({
                            code: "invalid_format",
                            format: "url",
                            note: "Invalid hostname",
                            pattern: x.source,
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
            }), $e = t("$ZodNanoID", (e, t) => {
                t.pattern ?? (t.pattern = f), Te.init(e, t)
            }), Fe = t("$ZodCUID", (e, t) => {
                t.pattern ?? (t.pattern = i), Te.init(e, t)
            }), Ue = t("$ZodCUID2", (e, t) => {
                t.pattern ?? (t.pattern = s), Te.init(e, t)
            }), He = t("$ZodULID", (e, t) => {
                t.pattern ?? (t.pattern = u), Te.init(e, t)
            }), Ve = t("$ZodXID", (e, t) => {
                t.pattern ?? (t.pattern = c), Te.init(e, t)
            }), We = t("$ZodKSUID", (e, t) => {
                t.pattern ?? (t.pattern = d), Te.init(e, t)
            }), Be = t("$ZodISODateTime", (e, t) => {
                t.pattern ?? (t.pattern = function(e) {
                    const t = O({
                            precision: e.precision
                        }),
                        n = ["Z"];
                    e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
                    const r = `${t}(?:${n.join("|")})`;
                    return new RegExp(`^${z}T(?:${r})$`)
                }(t)), Te.init(e, t)
            }), Ze = t("$ZodISODate", (e, t) => {
                t.pattern ?? (t.pattern = E), Te.init(e, t)
            }), qe = t("$ZodISOTime", (e, t) => {
                t.pattern ?? (t.pattern = new RegExp(`^${O(t)}$`)), Te.init(e, t)
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
            }), Xe = t("$ZodCIDRv6", (e, t) => {
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

        function Je(e) {
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
                    Je(n.value) || n.issues.push({
                        code: "invalid_format",
                        format: "base64",
                        input: n.value,
                        inst: e,
                        continue: !t.abort
                    })
                }
            }),
            tt = t("$ZodBase64URL", (e, t) => {
                t.pattern ?? (t.pattern = k), Te.init(e, t), e._zod.onattach.push(e => {
                    e._zod.bag.contentEncoding = "base64url"
                }), e._zod.check = n => {
                    (function(e) {
                        if (!k.test(e)) return !1;
                        const t = e.replace(/[-_]/g, e => "-" === e ? "+" : "/");
                        return Je(t.padEnd(4 * Math.ceil(t.length / 4), "="))
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
                Ne.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? P, e._zod.parse = (n, r) => {
                    if (t.coerce) try {
                        n.value = Number(n.value)
                    } catch (e) {}
                    const a = n.value;
                    if ("number" == typeof a && !Number.isNaN(a) && Number.isFinite(a)) return n;
                    const i = "number" == typeof a ? Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : "Infinity" : void 0;
                    return n.issues.push({
                        expected: "number",
                        code: "invalid_type",
                        input: a,
                        inst: e,
                        ...i ? {
                            received: i
                        } : {}
                    }), n
                }
            }),
            it = t("$ZodNumber", (e, t) => {
                se.init(e, t), at.init(e, t)
            }),
            ot = t("$ZodBoolean", (e, t) => {
                Ne.init(e, t), e._zod.pattern = j, e._zod.parse = (n, r) => {
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
                Ne.init(e, t), e._zod.parse = e => e
            }),
            st = t("$ZodNever", (e, t) => {
                Ne.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
                    expected: "never",
                    code: "invalid_type",
                    input: t.value,
                    inst: e
                }), t)
            });

        function ut(e, t, n) {
            e.issues.length && t.issues.push(...X(n, e.issues)), t.value[n] = e.value
        }
        const ct = t("$ZodArray", (e, t) => {
            Ne.init(e, t), e._zod.parse = (n, r) => {
                const a = n.value;
                if (!Array.isArray(a)) return n.issues.push({
                    expected: "array",
                    code: "invalid_type",
                    input: a,
                    inst: e
                }), n;
                n.value = Array(a.length);
                const i = [];
                for (let e = 0; e < a.length; e++) {
                    const o = a[e],
                        l = t.element._zod.run({
                            value: o,
                            issues: []
                        }, r);
                    l instanceof Promise ? i.push(l.then(t => ut(t, n, e))) : ut(l, n, e)
                }
                return i.length ? Promise.all(i).then(() => n) : n
            }
        });

        function dt(e, t, n, r) {
            e.issues.length && t.issues.push(...X(n, e.issues)), void 0 === e.value ? n in r && (t.value[n] = void 0) : t.value[n] = e.value
        }
        const ft = t("$ZodObject", (e, t) => {
            Ne.init(e, t);
            const n = M(() => {
                const e = Object.keys(t.shape);
                for (const n of e)
                    if (!(t.shape[n] instanceof Ne)) throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
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
            const i = V,
                o = !r.jitless,
                l = o && W.value,
                s = t.catchall;
            let u;
            e._zod.parse = (r, c) => {
                u ?? (u = n.value);
                const d = r.value;
                if (!i(d)) return r.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: d,
                    inst: e
                }), r;
                const f = [];
                if (o && l && !1 === c?.async && !0 !== c.jitless) a || (a = (e => {
                    const t = new we(["shape", "payload", "ctx"]),
                        r = n.value,
                        a = e => {
                            const t = U(e);
                            return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`
                        };
                    t.write("const input = payload.value;");
                    const i = Object.create(null);
                    let o = 0;
                    for (const e of r.keys) i[e] = "key_" + o++;
                    t.write("const newResult = {}");
                    for (const e of r.keys) {
                        const n = i[e],
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
            const i = e.filter(e => !Y(e));
            return 1 === i.length ? (t.value = i[0].value, i[0]) : (t.issues.push({
                code: "invalid_union",
                input: t.value,
                inst: n,
                errors: e.map(e => e.issues.map(e => ee(e, r, a())))
            }), t)
        }
        const ht = t("$ZodUnion", (e, t) => {
                Ne.init(e, t), I(e._zod, "optin", () => t.options.some(e => "optional" === e._zod.optin) ? "optional" : void 0), I(e._zod, "optout", () => t.options.some(e => "optional" === e._zod.optout) ? "optional" : void 0), I(e._zod, "values", () => {
                    if (t.options.every(e => e._zod.values)) return new Set(t.options.flatMap(e => Array.from(e._zod.values)))
                }), I(e._zod, "pattern", () => {
                    if (t.options.every(e => e._zod.pattern)) {
                        const e = t.options.map(e => e._zod.pattern);
                        return new RegExp(`^(${e.map(e=>A(e.source)).join("|")})$`)
                    }
                });
                const n = 1 === t.options.length,
                    r = t.options[0]._zod.run;
                e._zod.parse = (a, i) => {
                    if (n) return r(a, i);
                    let o = !1;
                    const l = [];
                    for (const e of t.options) {
                        const t = e._zod.run({
                            value: a.value,
                            issues: []
                        }, i);
                        if (t instanceof Promise) l.push(t), o = !0;
                        else {
                            if (0 === t.issues.length) return t;
                            l.push(t)
                        }
                    }
                    return o ? Promise.all(l).then(t => pt(t, a, e, i)) : pt(l, a, e, i)
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
                const r = M(() => {
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
                e._zod.parse = (a, i) => {
                    const o = a.value;
                    if (!V(o)) return a.issues.push({
                        code: "invalid_type",
                        expected: "object",
                        input: o,
                        inst: e
                    }), a;
                    const l = r.value.get(o?.[t.discriminator]);
                    return l ? l._zod.run(a, i) : t.unionFallback ? n(a, i) : (a.issues.push({
                        code: "invalid_union",
                        errors: [],
                        note: "No matching discriminator",
                        discriminator: t.discriminator,
                        input: o,
                        path: [t.discriminator],
                        inst: e
                    }), a)
                }
            }),
            gt = t("$ZodIntersection", (e, t) => {
                Ne.init(e, t), e._zod.parse = (e, n) => {
                    const r = e.value,
                        a = t.left._zod.run({
                            value: r,
                            issues: []
                        }, n),
                        i = t.right._zod.run({
                            value: r,
                            issues: []
                        }, n);
                    return a instanceof Promise || i instanceof Promise ? Promise.all([a, i]).then(([t, n]) => yt(e, t, n)) : yt(e, a, i)
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
            if (B(e) && B(t)) {
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
                Ne.init(e, t);
                const n = function(e) {
                        const t = Object.values(e).filter(e => "number" == typeof e);
                        return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t)
                    }(t.entries),
                    r = new Set(n);
                e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter(e=>Z.has(typeof e)).map(e=>"string"==typeof e?q(e):e.toString()).join("|")})$`), e._zod.parse = (t, a) => {
                    const i = t.value;
                    return r.has(i) || t.issues.push({
                        code: "invalid_value",
                        values: n,
                        input: i,
                        inst: e
                    }), t
                }
            }),
            wt = t("$ZodLiteral", (e, t) => {
                if (Ne.init(e, t), 0 === t.values.length) throw new Error("Cannot create literal schema with no valid values");
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
                Ne.init(e, t), e._zod.parse = (e, r) => {
                    const a = t.transform(e.value, e);
                    if (r.async) return (a instanceof Promise ? a : Promise.resolve(a)).then(t => (e.value = t, e));
                    if (a instanceof Promise) throw new n;
                    return e.value = a, e
                }
            });

        function kt(e, t) {
            return e.issues.length && void 0 === t ? {
                issues: [],
                value: void 0
            } : e
        }
        const xt = t("$ZodOptional", (e, t) => {
                Ne.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", I(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), I(e._zod, "pattern", () => {
                    const e = t.innerType._zod.pattern;
                    return e ? new RegExp(`^(${A(e.source)})?$`) : void 0
                }), e._zod.parse = (e, n) => {
                    if ("optional" === t.innerType._zod.optin) {
                        const r = t.innerType._zod.run(e, n);
                        return r instanceof Promise ? r.then(t => kt(t, e.value)) : kt(r, e.value)
                    }
                    return void 0 === e.value ? e : t.innerType._zod.run(e, n)
                }
            }),
            St = t("$ZodNullable", (e, t) => {
                Ne.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "pattern", () => {
                    const e = t.innerType._zod.pattern;
                    return e ? new RegExp(`^(${A(e.source)}|null)$`) : void 0
                }), I(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n)
            }),
            zt = t("$ZodDefault", (e, t) => {
                Ne.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
                    if (void 0 === e.value) return e.value = t.defaultValue, e;
                    const r = t.innerType._zod.run(e, n);
                    return r instanceof Promise ? r.then(e => Et(e, t)) : Et(r, t)
                }
            });

        function Et(e, t) {
            return void 0 === e.value && (e.value = t.defaultValue), e
        }
        const Ot = t("$ZodPrefault", (e, t) => {
                Ne.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n))
            }),
            Ct = t("$ZodNonOptional", (e, t) => {
                Ne.init(e, t), I(e._zod, "values", () => {
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
        const jt = t("$ZodCatch", (e, t) => {
                Ne.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
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
            Nt = t("$ZodPipe", (e, t) => {
                Ne.init(e, t), I(e._zod, "values", () => t.in._zod.values), I(e._zod, "optin", () => t.in._zod.optin), I(e._zod, "optout", () => t.out._zod.optout), I(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
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
            Ne.init(e, t), I(e._zod, "propValues", () => t.innerType._zod.propValues), I(e._zod, "values", () => t.innerType._zod.values), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (e, n) => {
                const r = t.innerType._zod.run(e, n);
                return r instanceof Promise ? r.then(Mt) : Mt(r)
            }
        });

        function Mt(e) {
            return e.value = Object.freeze(e.value), e
        }
        const Rt = t("$ZodCustom", (e, t) => {
            re.init(e, t), Ne.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = n => {
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
        class Dt {
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
            return new Dt
        }
        const $t = It();

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
            return new ie({
                check: "less_than",
                ...K(t),
                value: e,
                inclusive: !1
            })
        }

        function Ht(e, t) {
            return new ie({
                check: "less_than",
                ...K(t),
                value: e,
                inclusive: !0
            })
        }

        function Vt(e, t) {
            return new oe({
                check: "greater_than",
                ...K(t),
                value: e,
                inclusive: !1
            })
        }

        function Wt(e, t) {
            return new oe({
                check: "greater_than",
                ...K(t),
                value: e,
                inclusive: !0
            })
        }

        function Bt(e, t) {
            return new le({
                check: "multiple_of",
                ...K(t),
                value: e
            })
        }

        function Zt(e, t) {
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
            Be.init(e, t), dn.init(e, t)
        });
        const Yt = t("ZodISODate", (e, t) => {
            Ze.init(e, t), dn.init(e, t)
        });
        const Xt = t("ZodISOTime", (e, t) => {
            qe.init(e, t), dn.init(e, t)
        });
        const Jt = t("ZodISODuration", (e, t) => {
            Ge.init(e, t), dn.init(e, t)
        });
        const en = (e, t) => {
                ke.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
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
            on = Ce(tn),
            ln = t("ZodType", (e, t) => (Ne.init(e, t), e.def = t, Object.defineProperty(e, "_def", {
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
            }(t)), e.overwrite = t => e.check(Kt(t)), e.optional = () => Xn(e), e.nullable = () => er(e), e.nullish = () => Xn(er(e)), e.nonoptional = t => function(e, t) {
                return new rr({
                    type: "nonoptional",
                    innerType: e,
                    ...K(t)
                })
            }(e, t), e.array = () => Un(e), e.or = t => function(e, t) {
                return new Vn({
                    type: "union",
                    options: e,
                    ...K(t)
                })
            }([e, t]), e.and = t => new Bn({
                type: "intersection",
                left: e,
                right: t
            }), e.transform = t => or(e, new Qn({
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
            }, e.pipe = t => or(e, t), e.readonly = () => new lr({
                type: "readonly",
                innerType: e
            }), e.describe = t => {
                const n = e.clone();
                return $t.add(n, {
                    description: t
                }), n
            }, Object.defineProperty(e, "description", {
                get: () => $t.get(e)?.description,
                configurable: !0
            }), e.meta = (...t) => {
                if (0 === t.length) return $t.get(e);
                const n = e.clone();
                return $t.add(n, t[0]), n
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
                }(...t)), e.min = (...t) => e.check(qt(...t)), e.max = (...t) => e.check(Zt(...t)), e.length = (...t) => e.check(Gt(...t)), e.nonempty = (...t) => e.check(qt(1, ...t)), e.lowercase = t => e.check(function(e) {
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
                }(jn, t)), e.emoji = t => e.check(function(e, t) {
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
                }(On, t)), e.base64url = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "base64url",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(Cn, t)), e.xid = t => e.check(function(e, t) {
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
                }(kn, t)), e.ipv4 = t => e.check(function(e, t) {
                    return new e({
                        type: "string",
                        format: "ipv4",
                        check: "string_format",
                        abort: !1,
                        ...K(t)
                    })
                }(xn, t)), e.ipv6 = t => e.check(function(e, t) {
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
                    }(Xt, e)
                }(t)), e.duration = t => e.check(function(e) {
                    return function(e, t) {
                        return new e({
                            type: "string",
                            format: "duration",
                            check: "string_format",
                            ...K(t)
                        })
                    }(Jt, e)
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
                Me.init(e, t), dn.init(e, t)
            }),
            hn = t("ZodUUID", (e, t) => {
                Re.init(e, t), dn.init(e, t)
            }),
            mn = t("ZodURL", (e, t) => {
                De.init(e, t), dn.init(e, t)
            }),
            gn = t("ZodEmoji", (e, t) => {
                Ie.init(e, t), dn.init(e, t)
            }),
            vn = t("ZodNanoID", (e, t) => {
                $e.init(e, t), dn.init(e, t)
            }),
            yn = t("ZodCUID", (e, t) => {
                Fe.init(e, t), dn.init(e, t)
            }),
            bn = t("ZodCUID2", (e, t) => {
                Ue.init(e, t), dn.init(e, t)
            }),
            wn = t("ZodULID", (e, t) => {
                He.init(e, t), dn.init(e, t)
            }),
            _n = t("ZodXID", (e, t) => {
                Ve.init(e, t), dn.init(e, t)
            }),
            kn = t("ZodKSUID", (e, t) => {
                We.init(e, t), dn.init(e, t)
            }),
            xn = t("ZodIPv4", (e, t) => {
                Ke.init(e, t), dn.init(e, t)
            }),
            Sn = t("ZodIPv6", (e, t) => {
                Qe.init(e, t), dn.init(e, t)
            }),
            zn = t("ZodCIDRv4", (e, t) => {
                Ye.init(e, t), dn.init(e, t)
            }),
            En = t("ZodCIDRv6", (e, t) => {
                Xe.init(e, t), dn.init(e, t)
            }),
            On = t("ZodBase64", (e, t) => {
                et.init(e, t), dn.init(e, t)
            }),
            Cn = t("ZodBase64URL", (e, t) => {
                tt.init(e, t), dn.init(e, t)
            }),
            Pn = t("ZodE164", (e, t) => {
                nt.init(e, t), dn.init(e, t)
            }),
            jn = t("ZodJWT", (e, t) => {
                rt.init(e, t), dn.init(e, t)
            }),
            Nn = t("ZodNumber", (e, t) => {
                at.init(e, t), ln.init(e, t), e.gt = (t, n) => e.check(Vt(t, n)), e.gte = (t, n) => e.check(Wt(t, n)), e.min = (t, n) => e.check(Wt(t, n)), e.lt = (t, n) => e.check(Ut(t, n)), e.lte = (t, n) => e.check(Ht(t, n)), e.max = (t, n) => e.check(Ht(t, n)), e.int = t => e.check(Mn(t)), e.safe = t => e.check(Mn(t)), e.positive = t => e.check(Vt(0, t)), e.nonnegative = t => e.check(Wt(0, t)), e.negative = t => e.check(Ut(0, t)), e.nonpositive = t => e.check(Ht(0, t)), e.multipleOf = (t, n) => e.check(Bt(t, n)), e.step = (t, n) => e.check(Bt(t, n)), e.finite = () => e;
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
            }(Nn, e)
        }
        const Tn = t("ZodNumberFormat", (e, t) => {
            it.init(e, t), Nn.init(e, t)
        });

        function Mn(e) {
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
        const Rn = t("ZodBoolean", (e, t) => {
            ot.init(e, t), ln.init(e, t)
        });

        function An(e) {
            return function(e, t) {
                return new e({
                    type: "boolean",
                    ...K(t)
                })
            }(Rn, e)
        }
        const Dn = t("ZodUnknown", (e, t) => {
            lt.init(e, t), ln.init(e, t)
        });

        function In() {
            return new Dn({
                type: "unknown"
            })
        }
        const $n = t("ZodNever", (e, t) => {
            st.init(e, t), ln.init(e, t)
        });
        const Fn = t("ZodArray", (e, t) => {
            ct.init(e, t), ln.init(e, t), e.element = t.element, e.min = (t, n) => e.check(qt(t, n)), e.nonempty = t => e.check(qt(1, t)), e.max = (t, n) => e.check(Zt(t, n)), e.length = (t, n) => e.check(Gt(t, n)), e.unwrap = () => e.element
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
        const Hn = t("ZodObject", (e, t) => {
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
                        }($n, t)
                    });
                    var t
                }, e.strip = () => e.clone({
                    ...e._zod.def,
                    catchall: void 0
                }), e.extend = t => function(e, t) {
                    if (!B(t)) throw new Error("Invalid input to extend: expected a plain object");
                    const n = F(e._zod.def, {
                        get shape() {
                            const n = {
                                ...e._zod.def.shape,
                                ...t
                            };
                            return $(this, "shape", n), n
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
                            return $(this, "shape", n), n
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
                            return $(this, "shape", e), e
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
                                return $(this, "shape", r), r
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
                            return $(this, "shape", a), a
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
                            return $(this, "shape", a), a
                        },
                        checks: []
                    });
                    return G(t, r)
                }(rr, e, t[0])
            }),
            Vn = t("ZodUnion", (e, t) => {
                ht.init(e, t), ln.init(e, t), e.options = t.options
            });
        const Wn = t("ZodDiscriminatedUnion", (e, t) => {
                Vn.init(e, t), mt.init(e, t)
            }),
            Bn = t("ZodIntersection", (e, t) => {
                gt.init(e, t), ln.init(e, t)
            }),
            Zn = t("ZodEnum", (e, t) => {
                bt.init(e, t), ln.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
                const n = new Set(Object.keys(t.entries));
                e.extract = (e, r) => {
                    const a = {};
                    for (const r of e) {
                        if (!n.has(r)) throw new Error(`Key ${r} not found in enum`);
                        a[r] = t.entries[r]
                    }
                    return new Zn({
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
                    return new Zn({
                        ...t,
                        checks: [],
                        ...K(r),
                        entries: a
                    })
                }
            });

        function qn(e, t) {
            const n = Array.isArray(e) ? Object.fromEntries(e.map(e => [e, e])) : e;
            return new Zn({
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
            xt.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
        });

        function Xn(e) {
            return new Yn({
                type: "optional",
                innerType: e
            })
        }
        const Jn = t("ZodNullable", (e, t) => {
            St.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
        });

        function er(e) {
            return new Jn({
                type: "nullable",
                innerType: e
            })
        }
        const tr = t("ZodDefault", (e, t) => {
                zt.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap
            }),
            nr = t("ZodPrefault", (e, t) => {
                Ot.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
            }),
            rr = t("ZodNonOptional", (e, t) => {
                Ct.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
            }),
            ar = t("ZodCatch", (e, t) => {
                jt.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap
            }),
            ir = t("ZodPipe", (e, t) => {
                Nt.init(e, t), ln.init(e, t), e.in = t.in, e.out = t.out
            });

        function or(e, t) {
            return new ir({
                type: "pipe",
                in: e,
                out: t
            })
        }
        const lr = t("ZodReadonly", (e, t) => {
                Tt.init(e, t), ln.init(e, t), e.unwrap = () => e._zod.def.innerType
            }),
            sr = t("ZodCustom", (e, t) => {
                Rt.init(e, t), ln.init(e, t)
            });
        var ur = o(9710);
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
                children: i,
                iconNode: o,
                ...l
            }, s) => (0, ur.createElement)("svg", {
                ref: s,
                ...pr,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? 24 * Number(n) / Number(t) : n,
                className: dr("lucide", a),
                ...!i && !fr(l) && {
                    "aria-hidden": "true"
                },
                ...l
            }, [...o.map(([e, t]) => (0, ur.createElement)(e, t)), ...Array.isArray(i) ? i : [i]])),
            mr = (e, t) => {
                const n = (0, ur.forwardRef)(({
                    className: n,
                    ...r
                }, a) => {
                    return (0, ur.createElement)(hr, {
                        ref: a,
                        iconNode: t,
                        className: dr(`lucide-${i=cr(e),i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, n),
                        ...r
                    });
                    var i
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
            br = xr(qn(["firstAndLastInitials", "firstNamesOnly", "fullNames"]), {
                section: "style",
                label: "Name Display",
                enumLabels: {
                    firstAndLastInitials: "First and Last Initials",
                    firstNamesOnly: "First Name",
                    fullNames: "Full Name"
                }
            }),
            wr = xr(qn(["light", "dark"]), {
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
            _r = xr(qn(["none", "relative", "absolute"]), {
                section: "style",
                label: "Date Display",
                enumLabels: {
                    none: "None",
                    relative: "Relative",
                    absolute: "Absolute"
                },
                description: "The date format to display in each review snippet. Absolute displays the full date, relative displays the date in a relative format (e.g. '2 days ago')."
            }),
            kr = function(e) {
                const t = {
                    type: "object",
                    get shape() {
                        return $(this, "shape", {
                            ...e
                        }), this.shape
                    },
                    ...K(void 0)
                };
                return new Hn(t)
            }({
                layout: yr,
                language: xr(qn(["en", "pt-BR", "fr", "es", "it", "de", "ru", "pl", "cs", "da"]).prefault("en"), {
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
                allowed_domains: xr(Un(cn()).max(5), {
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

        function xr(e, t) {
            return e.meta({
                ui: t
            })
        }
        var Sr = kr.extend({
                layout: Kn("carousel_default"),
                color_scheme: wr,
                name_display: br,
                title: xr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: xr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                carousel_autoplay: xr(An(), {
                    section: "settings",
                    label: "Carousel Autoplay",
                    description: "Automatically cycle through reviews in the carousel."
                }),
                carousel_speed: xr(Mn().min(1e3).max(1e4), {
                    section: "settings",
                    label: "Carousel Speed (ms)",
                    numberMin: 1e3,
                    numberMax: 1e3,
                    numberPlaceholder: "3000",
                    description: "The speed at which the carousel will autoplay in milliseconds"
                }),
                max_characters: xr(Mn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "255"
                }),
                date_display: _r,
                summary: xr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: xr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: xr(An(), {
                    section: "style",
                    label: "Show Profile Pictures",
                    description: "Show or hide profile pictures in reviews. If hiding profile pictures, a letter with colored background will be used instead."
                })
            }),
            zr = function(e) {
                return "carousel_default" === e.config.layout
            },
            Er = o(5338),
            Or = o(8905),
            Cr = o.n(Or),
            Pr = o(3985),
            jr = o.n(Pr),
            Nr = o(6540);
        const Lr = mr("arrow-down-left", [
                ["path", {
                    d: "M17 7 7 17",
                    key: "15tmo1"
                }],
                ["path", {
                    d: "M17 17H7V7",
                    key: "1org7z"
                }]
            ]),
            Tr = mr("arrow-down-right", [
                ["path", {
                    d: "m7 7 10 10",
                    key: "1fmybs"
                }],
                ["path", {
                    d: "M17 7v10H7",
                    key: "6fjiku"
                }]
            ]);
        var Mr = kr.extend({
                layout: Kn("badge_default"),
                color_scheme: wr,
                floating: xr(An(), {
                    section: "style",
                    label: "Floating Badge",
                    description: "Float to the corner of the screen and not be affected by scrolling"
                }),
                float_position: xr(qn(["left", "right"]), {
                    section: "style",
                    label: "Floating Position",
                    enumLabels: {
                        left: "Left",
                        right: "Right"
                    },
                    enumIcons: {
                        left: Lr,
                        right: Tr
                    },
                    getDisabled: function(e) {
                        return !1 === e.floating
                    }
                }),
                dismissable: xr(An(), {
                    section: "style",
                    label: "Dismissable",
                    description: "If dimissable, the floating badge can be closed by clicking an 'X' icon.",
                    getDisabled: function(e) {
                        return !1 === e.floating
                    }
                }),
                show_badge_label: xr(An(), {
                    section: "style",
                    label: "Show Badge Label",
                    description: 'Show or hide the "Google Rating" label'
                })
            }),
            Rr = kr.extend({
                layout: Kn("grid_default"),
                color_scheme: wr,
                name_display: br,
                title: xr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: xr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                max_characters: xr(Mn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "255"
                }),
                date_display: _r,
                summary: xr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: xr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: xr(An(), {
                    section: "style",
                    label: "Show Profile Pictures",
                    description: "Show or hide profile pictures in reviews. If hiding profile pictures, a letter with colored background will be used instead."
                })
            }),
            Ar = kr.extend({
                layout: Kn("list_default"),
                color_scheme: wr,
                name_display: br,
                title: xr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: xr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                max_characters: xr(Mn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "255"
                }),
                date_display: _r,
                page_size: xr(Ln().min(1).max(50), {
                    section: "style",
                    label: "Page Size",
                    description: "Number of reviews per page",
                    numberMin: 1,
                    numberMax: 50,
                    numberPlaceholder: "5"
                }),
                summary: xr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: xr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: xr(An(), {
                    section: "style",
                    label: "Show Profile Pictures",
                    description: "Show or hide profile pictures in reviews. If hiding profile pictures, a letter with colored background will be used instead."
                })
            }),
            Dr = kr.extend({
                layout: Kn("masonry_default"),
                color_scheme: wr,
                name_display: br,
                title: xr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: xr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                max_characters: xr(Mn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "255"
                }),
                date_display: _r,
                max_columns: xr(Ln().min(1).max(6), {
                    section: "style",
                    label: "Max. Columns",
                    description: "The maximum number of columns to display in the grid",
                    numberMin: 1,
                    numberMax: 6,
                    numberPlaceholder: "4"
                }),
                summary: xr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: xr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: An()
            }),
            Ir = kr.extend({
                layout: Kn("slider_default"),
                color_scheme: wr,
                name_display: br,
                title: xr(cn().nullish(), {
                    section: "style",
                    label: "Title",
                    placeholder: "e.g. What our customers are saying"
                }),
                show_title: xr(An(), {
                    section: "style",
                    label: "Show Title",
                    booleanLabels: {
                        true: "Show",
                        false: "Hide"
                    }
                }),
                slider_autoplay: xr(An(), {
                    section: "settings",
                    label: "Slider Autoplay",
                    description: "Automatically cycle through reviews in the slider."
                }),
                slider_speed: xr(Mn().min(1e3).max(1e4), {
                    section: "settings",
                    label: "Slider Speed (ms)",
                    numberMin: 1e3,
                    numberMax: 1e4,
                    numberPlaceholder: "8000",
                    description: "The speed at which the slider will autoplay in milliseconds"
                }),
                max_characters: xr(Mn().min(1).max(1e3), {
                    section: "style",
                    label: "Max Characters",
                    description: "The maximum number of characters to display in each review snippet.",
                    numberMin: 1,
                    numberMax: 1e3,
                    numberPlaceholder: "500"
                }),
                date_display: _r,
                summary: xr(An(), {
                    section: "summary",
                    label: "Show Summary",
                    description: "Show a summary of reviews with your widget that includes the average rating and total review."
                }),
                summary_review_button: xr(An(), {
                    section: "summary",
                    label: "Show Review Button",
                    description: 'Show the "Write a Review" button with your widget.'
                }),
                show_profile_pictures: xr(An(), {
                    section: "style",
                    label: "Show Profile Pictures",
                    description: "Show or hide profile pictures in reviews. If hiding profile pictures, a letter with colored background will be used instead."
                })
            }),
            $r = (function(e, t) {
                new Wn({
                    type: "union",
                    options: t,
                    discriminator: "layout",
                    ...K(void 0)
                })
            }(0, [Sr, Rr, Mr, Ar, Dr, Ir]), {
                carousel_default: {
                    name: "Carousel",
                    bundle: function() {
                        return o.e(104).then(o.t.bind(o, 8104, 23))
                    },
                    configSchema: Sr,
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
                    isWidgetData: zr
                },
                grid_default: {
                    name: "Grid",
                    bundle: function() {
                        return o.e(514).then(o.t.bind(o, 8514, 23))
                    },
                    configSchema: Rr,
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
                        return o.e(991).then(o.t.bind(o, 5991, 23))
                    },
                    configSchema: Mr,
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
                        return o.e(522).then(o.t.bind(o, 5522, 23))
                    },
                    configSchema: Ar,
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
                        return o.e(175).then(o.t.bind(o, 4175, 23))
                    },
                    configSchema: Dr,
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
                    isWidgetData: function(e) {
                        return "masonry_default" === e.config.layout
                    }
                },
                slider_default: {
                    name: "Slider",
                    bundle: function() {
                        return o.e(715).then(o.t.bind(o, 3715, 23))
                    },
                    configSchema: Ir,
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
            Fr = function() {
                return Fr = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, Fr.apply(this, arguments)
            },
            Ur = function(e, t, n, r) {
                return new(n || (n = Promise))(function(a, i) {
                    function o(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function l(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(o, l)
                    }
                    s((r = r.apply(e, t || [])).next())
                })
            },
            Hr = function(e, t) {
                var n, r, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return o.next = l(0), o.throw = l(1), o.return = l(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(l) {
                    return function(s) {
                        return function(l) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, l[0] && (i = 0)), i;) try {
                                if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, r = l[1], l = [0];
                                        continue;
                                    case 7:
                                        l = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            i.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && i.label < a[1]) {
                                            i.label = a[1], a = l;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2], i.ops.push(l);
                                            break
                                        }
                                        a[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                l = t.call(e, i)
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
            Vr = function() {
                function e(e, t) {
                    this.isLoading = !0, this.isError = !1, this.renderWidget = e, this.layout = t
                }
                return e.prototype.reconcileWidgetConfig = function(e) {
                    if (!e || "object" != typeof e || !("layout" in e)) throw new Error("Invalid widget config schema");
                    var t = e.layout;
                    if (!t || "string" != typeof t) throw new Error("Invalid widget config layout, not a string or undefined");
                    var n = yr.safeParse(t);
                    if (!n.success) throw new Error("Invalid widget config layout");
                    var r = $r[n.data],
                        a = r.configSchema,
                        i = r.defaultConfig,
                        o = a.partial().strip().safeParse(e);
                    return o.success ? Fr(Fr({}, i), o.data) : i
                }, e.prototype.getWidgetData = function(e) {
                    return Ur(this, void 0, void 0, function() {
                        var t, n, r, a;
                        return Hr(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = "https://featurable.com/api", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, 5, 6]), [4, fetch("".concat(t, "/v2/widgets/").concat(e), {
                                        method: "GET"
                                    })];
                                case 2:
                                    return [4, i.sent().json()];
                                case 3:
                                    if (!(n = i.sent()).success) throw new Error(n.error.message);
                                    return r = this.reconcileWidgetConfig(n.widget.config), [2, Fr(Fr({}, n.widget), {
                                        config: r
                                    })];
                                case 4:
                                    return a = i.sent(), console.log("Failed to fetch or reconcile widget", a), this.isError = !0, [3, 6];
                                case 5:
                                    return this.isLoading = !1, [7];
                                case 6:
                                    return [2, null]
                            }
                        })
                    })
                }, e.prototype.initializeFeaturableWidget = function(e) {
                    return Ur(this, void 0, void 0, function() {
                        var t, n, r, a, i, o, l, s, u, c, d, f, p, h, m = this;
                        return Hr(this, function(g) {
                            switch (g.label) {
                                case 0:
                                    if (t = null, e instanceof Element) {
                                        if (!(t = e).id) throw new Error("Could not find review widget ID. Please ensure that the widget is properly installed.");
                                        n = t.id.replace("featurable-", "")
                                    } else if (Nr.isValidElement(e)) r = e.props, n = (null === (p = r.id) || void 0 === p ? void 0 : p.replace("featurable-", "")) || r["data-widget-id"], (t = document.createElement("div")).id = "featurable-".concat(n);
                                    else {
                                        if ("string" != typeof e) throw new Error("Invalid root element. Please provide a DOM Element, React element, or valid element ID.");
                                        if (!(t = document.getElementById(e)))
                                            for (a = document.getElementsByTagName("iframe"), i = 0; i < a.length; i++) try {
                                                if ((o = a[i].contentDocument || (null === (h = a[i].contentWindow) || void 0 === h ? void 0 : h.document)) && (t = o.getElementById(e))) break
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
                                        return Ur(m, void 0, void 0, function() {
                                            var e;
                                            return Hr(this, function(n) {
                                                if ((e = t.getAttribute("data-theme")) && ("light" === e || "dark" === e) && l) try {
                                                    this.renderWidget(d, Fr(Fr({}, l), {
                                                        config: Fr(Fr({}, l.config), {
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
                    return Ur(this, void 0, void 0, function() {
                        var e, t, n, r, a = this;
                        return Hr(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    0 === (e = document.querySelectorAll("div[data-featurable-async]")).length && console.error("No Featurable containers found. Aborting..."), t = function(t) {
                                        var r, i, o;
                                        return Hr(this, function(l) {
                                            switch (l.label) {
                                                case 0:
                                                    return r = e[t], (i = n.getHiddenParent(r)) ? (o = new MutationObserver(function() {
                                                        return Ur(a, void 0, void 0, function() {
                                                            return Hr(this, function(e) {
                                                                switch (e.label) {
                                                                    case 0:
                                                                        return this.getHiddenParent(r) ? [3, 2] : [4, this.initializeFeaturableWidget(r)];
                                                                    case 1:
                                                                        e.sent(), o.disconnect(), e.label = 2;
                                                                    case 2:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }), o.observe(i, {
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
                                    }, n = this, r = 0, i.label = 1;
                                case 1:
                                    return r < e.length ? [5, t(r)] : [3, 4];
                                case 2:
                                    i.sent(), i.label = 3;
                                case 3:
                                    return r++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e
            }(),
            Wr = o(6509),
            Br = o.n(Wr);

        function Zr(e) {
            var t, n, r = "";
            if ("string" == typeof e || "number" == typeof e) r += e;
            else if ("object" == typeof e)
                if (Array.isArray(e)) {
                    var a = e.length;
                    for (t = 0; t < a; t++) e[t] && (n = Zr(e[t])) && (r && (r += " "), r += n)
                } else
                    for (n in e) e[n] && (r && (r += " "), r += n);
            return r
        }
        const qr = function() {
            for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (t = Zr(e)) && (r && (r += " "), r += t);
            return r
        };
        var Gr = function(e) {
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
            },
            Kr = o(4589),
            Qr = function(t) {
                var n = t.className,
                    r = t.ref;
                return (0, e.jsx)("svg", {
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: qr(n || "h-6 w-6"),
                    children: (0, e.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
                        clipRule: "evenodd"
                    })
                })
            },
            Yr = function(t) {
                var n = t.className,
                    r = t.rating,
                    a = t.group,
                    i = (0, Nr.useMemo)(function() {
                        var e = r / 5 * 100,
                            t = e > 100 ? 100 : e < 0 ? 0 : e;
                        return 5 * Math.floor(t / 5)
                    }, [r]);
                return (0, e.jsxs)("div", {
                    className: qr("relative text-xl leading-none p-0 m-0", n, "star-rating"),
                    "data-featurable-classname": ".star-rating",
                    "data-featurable-description": "Star rating container",
                    "data-featurable-group": a,
                    children: [(0, e.jsx)("div", {
                        className: qr("flex items-center absolute left-0 top-0 overflow-hidden", "star-rating__fill"),
                        style: {
                            width: "".concat(i, "%")
                        },
                        "data-featurable-classname": ".star-rating__fill",
                        "data-featurable-description": "Star rating fill",
                        "data-featurable-group": a,
                        children: (0, e.jsxs)("span", {
                            style: {
                                color: "#F8AF0D"
                            },
                            className: qr("flex items-center"),
                            children: [(0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            })]
                        })
                    }), (0, e.jsx)("div", {
                        className: qr("flex items-center", "star-rating__empty"),
                        "data-featurable-classname": ".star-rating__empty",
                        "data-featurable-description": "Star rating empty",
                        "data-featurable-group": a,
                        children: (0, e.jsxs)("span", {
                            style: {
                                color: "#d1d5db"
                            },
                            className: qr("flex items-center"),
                            children: [(0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            }), (0, e.jsx)(Qr, {
                                className: "h-5 w-5"
                            })]
                        })
                    })]
                })
            };
        const Xr = e => "string" == typeof e,
            Jr = () => {
                let e, t;
                const n = new Promise((n, r) => {
                    e = n, t = r
                });
                return n.resolve = e, n.reject = t, n
            },
            ea = e => null == e ? "" : "" + e,
            ta = /###/g,
            na = e => e && e.indexOf("###") > -1 ? e.replace(ta, ".") : e,
            ra = e => !e || Xr(e),
            aa = (e, t, n) => {
                const r = Xr(t) ? t.split(".") : t;
                let a = 0;
                for (; a < r.length - 1;) {
                    if (ra(e)) return {};
                    const t = na(r[a]);
                    !e[t] && n && (e[t] = new n), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++a
                }
                return ra(e) ? {} : {
                    obj: e,
                    k: na(r[a])
                }
            },
            ia = (e, t, n) => {
                const {
                    obj: r,
                    k: a
                } = aa(e, t, Object);
                if (void 0 !== r || 1 === t.length) return void(r[a] = n);
                let i = t[t.length - 1],
                    o = t.slice(0, t.length - 1),
                    l = aa(e, o, Object);
                for (; void 0 === l.obj && o.length;) i = `${o[o.length-1]}.${i}`, o = o.slice(0, o.length - 1), l = aa(e, o, Object), l?.obj && void 0 !== l.obj[`${l.k}.${i}`] && (l.obj = void 0);
                l.obj[`${l.k}.${i}`] = n
            },
            oa = (e, t) => {
                const {
                    obj: n,
                    k: r
                } = aa(e, t);
                if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r]
            },
            la = (e, t, n) => {
                for (const r in t) "__proto__" !== r && "constructor" !== r && (r in e ? Xr(e[r]) || e[r] instanceof String || Xr(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : la(e[r], t[r], n) : e[r] = t[r]);
                return e
            },
            sa = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        var ua = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        const ca = e => Xr(e) ? e.replace(/[&<>"'\/]/g, e => ua[e]) : e,
            da = [" ", ",", "?", "!", ";"],
            fa = new class {
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
            pa = (e, t, n = ".") => {
                if (!e) return;
                if (e[t]) {
                    if (!Object.prototype.hasOwnProperty.call(e, t)) return;
                    return e[t]
                }
                const r = t.split(n);
                let a = e;
                for (let e = 0; e < r.length;) {
                    if (!a || "object" != typeof a) return;
                    let t, i = "";
                    for (let o = e; o < r.length; ++o)
                        if (o !== e && (i += n), i += r[o], t = a[i], void 0 !== t) {
                            if (["string", "number", "boolean"].indexOf(typeof t) > -1 && o < r.length - 1) continue;
                            e += o - e + 1;
                            break
                        } a = t
                }
                return a
            },
            ha = e => e?.replace("_", "-"),
            ma = {
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
        class ga {
            constructor(e, t = {}) {
                this.init(e, t)
            }
            init(e, t = {}) {
                this.prefix = t.prefix || "i18next:", this.logger = e || ma, this.options = t, this.debug = t.debug
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
                return new ga(this.logger, {
                    prefix: `${this.prefix}:${e}:`,
                    ...this.options
                })
            }
            clone(e) {
                return (e = e || this.options).prefix = e.prefix || this.prefix, new ga(this.logger, e)
            }
        }
        var va = new ga;
        class ya {
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
        class ba extends ya {
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
                    i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
                let o;
                e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], n && (Array.isArray(n) ? o.push(...n) : Xr(n) && a ? o.push(...n.split(a)) : o.push(n)));
                const l = oa(this.data, o);
                return !l && !t && !n && e.indexOf(".") > -1 && (e = o[0], t = o[1], n = o.slice(2).join(".")), !l && i && Xr(n) ? pa(this.data?.[e]?.[t], n, a) : l
            }
            addResource(e, t, n, r, a = {
                silent: !1
            }) {
                const i = void 0 !== a.keySeparator ? a.keySeparator : this.options.keySeparator;
                let o = [e, t];
                n && (o = o.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (o = e.split("."), r = t, t = o[1]), this.addNamespaces(t), ia(this.data, o, r), a.silent || this.emit("added", e, t, n, r)
            }
            addResources(e, t, n, r = {
                silent: !1
            }) {
                for (const r in n)(Xr(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], {
                    silent: !0
                });
                r.silent || this.emit("added", e, t, n)
            }
            addResourceBundle(e, t, n, r, a, i = {
                silent: !1,
                skipCopy: !1
            }) {
                let o = [e, t];
                e.indexOf(".") > -1 && (o = e.split("."), r = n, n = t, t = o[1]), this.addNamespaces(t);
                let l = oa(this.data, o) || {};
                i.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? la(l, n, a) : l = {
                    ...l,
                    ...n
                }, ia(this.data, o, l), i.silent || this.emit("added", e, t, n)
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
        var wa = {
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
        const _a = {},
            ka = e => !Xr(e) && "boolean" != typeof e && "number" != typeof e;
        class xa extends ya {
            constructor(e, t = {}) {
                var n, r;
                super(), n = e, r = this, ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"].forEach(e => {
                    n[e] && (r[e] = n[e])
                }), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = va.create("translator")
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
                const i = n && e.indexOf(n) > -1,
                    o = !(this.options.userDefinedKeySeparator || t.keySeparator || this.options.userDefinedNsSeparator || t.nsSeparator || ((e, t, n) => {
                        t = t || "", n = n || "";
                        const r = da.filter(e => t.indexOf(e) < 0 && n.indexOf(e) < 0);
                        if (0 === r.length) return !0;
                        const a = fa.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`);
                        let i = !a.test(e);
                        if (!i) {
                            const t = e.indexOf(n);
                            t > 0 && !a.test(e.substring(0, t)) && (i = !0)
                        }
                        return i
                    })(e, n, r));
                if (i && !o) {
                    const t = e.match(this.interpolator.nestingRegexp);
                    if (t && t.length > 0) return {
                        key: e,
                        namespaces: Xr(a) ? [a] : a
                    };
                    const i = e.split(n);
                    (n !== r || n === r && this.options.ns.indexOf(i[0]) > -1) && (a = i.shift()), e = i.join(r)
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
                    i = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                    {
                        key: o,
                        namespaces: l
                    } = this.extractFromKey(e[e.length - 1], r),
                    s = l[l.length - 1];
                let u = void 0 !== r.nsSeparator ? r.nsSeparator : this.options.nsSeparator;
                void 0 === u && (u = ":");
                const c = r.lng || this.language,
                    d = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                if ("cimode" === c?.toLowerCase()) return d ? a ? {
                    res: `${s}${u}${o}`,
                    usedKey: o,
                    exactUsedKey: o,
                    usedLng: c,
                    usedNS: s,
                    usedParams: this.getUsedParamsDetails(r)
                } : `${s}${u}${o}` : a ? {
                    res: o,
                    usedKey: o,
                    exactUsedKey: o,
                    usedLng: c,
                    usedNS: s,
                    usedParams: this.getUsedParamsDetails(r)
                } : o;
                const f = this.resolve(e, r);
                let p = f?.res;
                const h = f?.usedKey || o,
                    m = f?.exactUsedKey || o,
                    g = void 0 !== r.joinArrays ? r.joinArrays : this.options.joinArrays,
                    v = !this.i18nFormat || this.i18nFormat.handleAsObject,
                    y = void 0 !== r.count && !Xr(r.count),
                    b = xa.hasDefaultValue(r),
                    w = y ? this.pluralResolver.getSuffix(c, r.count, r) : "",
                    _ = r.ordinal && y ? this.pluralResolver.getSuffix(c, r.count, {
                        ordinal: !1
                    }) : "",
                    k = y && !r.ordinal && 0 === r.count,
                    x = k && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${w}`] || r[`defaultValue${_}`] || r.defaultValue;
                let S = p;
                v && !p && b && (S = x);
                const z = ka(S),
                    E = Object.prototype.toString.apply(S);
                if (!(v && S && z && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(E) < 0) || Xr(g) && Array.isArray(S))
                    if (v && Xr(g) && Array.isArray(p)) p = p.join(g), p && (p = this.extendTranslation(p, e, r, n));
                    else {
                        let t = !1,
                            a = !1;
                        !this.isValidLookup(p) && b && (t = !0, p = x), this.isValidLookup(p) || (a = !0, p = o);
                        const l = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && a ? void 0 : p,
                            d = b && x !== p && this.options.updateMissing;
                        if (a || t || d) {
                            if (this.logger.log(d ? "updateKey" : "missingKey", c, s, o, d ? x : p), i) {
                                const e = this.resolve(o, {
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
                                k && r[`defaultValue${this.options.pluralSeparator}zero`] && t.indexOf(`${this.options.pluralSeparator}zero`) < 0 && t.push(`${this.options.pluralSeparator}zero`), t.forEach(t => {
                                    n([e], o + t, r[`defaultValue${t}`] || x)
                                })
                            }) : n(e, o, x))
                        }
                        p = this.extendTranslation(p, e, r, f, n), a && p === o && this.options.appendNamespaceToMissingKey && (p = `${s}${u}${o}`), (a || t) && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${s}${u}${o}` : o, t ? p : void 0, r))
                    }
                else {
                    if (!r.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                        const e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, S, {
                            ...r,
                            ns: l
                        }) : `key '${o} (${this.language})' returned an object instead of string.`;
                        return a ? (f.res = e, f.usedParams = this.getUsedParamsDetails(r), f) : e
                    }
                    if (i) {
                        const e = Array.isArray(S),
                            t = e ? [] : {},
                            n = e ? m : h;
                        for (const e in S)
                            if (Object.prototype.hasOwnProperty.call(S, e)) {
                                const a = `${n}${i}${e}`;
                                t[e] = b && !p ? this.translate(a, {
                                    ...r,
                                    defaultValue: ka(x) ? x[e] : void 0,
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
                    const i = Xr(e) && (void 0 !== n?.interpolation?.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                    let o;
                    if (i) {
                        const t = e.match(this.interpolator.nestingRegexp);
                        o = t && t.length
                    }
                    let l = n.replace && !Xr(n.replace) ? n.replace : n;
                    if (this.options.interpolation.defaultVariables && (l = {
                            ...this.options.interpolation.defaultVariables,
                            ...l
                        }), e = this.interpolator.interpolate(e, l, n.lng || this.language || r.usedLng, n), i) {
                        const t = e.match(this.interpolator.nestingRegexp);
                        o < (t && t.length) && (n.nest = !1)
                    }!n.lng && r && r.res && (n.lng = this.language || r.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, (...e) => a?.[0] !== e[0] || n.context ? this.translate(...e, t) : (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null), n)), n.interpolation && this.interpolator.reset()
                }
                const i = n.postProcess || this.options.postProcess,
                    o = Xr(i) ? [i] : i;
                return null != e && o?.length && !1 !== n.applyPostProcessor && (e = wa.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
                    i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n)
                    },
                    ...n
                } : n, this)), e
            }
            resolve(e, t = {}) {
                let n, r, a, i, o;
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
                        this.isValidLookup(n) || (o = e, _a[`${p[0]}-${e}`] || !this.utils?.hasLoadedNamespace || this.utils?.hasLoadedNamespace(o) || (_a[`${p[0]}-${e}`] = !0, this.logger.warn(`key "${r}" for languages "${p.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), p.forEach(r => {
                            if (this.isValidLookup(n)) return;
                            i = r;
                            const o = [s];
                            if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(o, s, r, e, t);
                            else {
                                let e;
                                c && (e = this.pluralResolver.getSuffix(r, t.count, t));
                                const n = `${this.options.pluralSeparator}zero`,
                                    a = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                if (c && (o.push(s + e), t.ordinal && 0 === e.indexOf(a) && o.push(s + e.replace(a, this.options.pluralSeparator)), d && o.push(s + n)), f) {
                                    const r = `${s}${this.options.contextSeparator}${t.context}`;
                                    o.push(r), c && (o.push(r + e), t.ordinal && 0 === e.indexOf(a) && o.push(r + e.replace(a, this.options.pluralSeparator)), d && o.push(r + n))
                                }
                            }
                            let l;
                            for (; l = o.pop();) this.isValidLookup(n) || (a = l, n = this.getResource(r, e, l, t))
                        }))
                    })
                }), {
                    res: n,
                    usedKey: r,
                    exactUsedKey: a,
                    usedLng: i,
                    usedNS: o
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
        class Sa {
            constructor(e) {
                this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = va.create("languageUtils")
            }
            getScriptPartFromCode(e) {
                if (!(e = ha(e)) || e.indexOf("-") < 0) return null;
                const t = e.split("-");
                return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
            }
            getLanguagePartFromCode(e) {
                if (!(e = ha(e)) || e.indexOf("-") < 0) return e;
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
        const za = {
                zero: 0,
                one: 1,
                two: 2,
                few: 3,
                many: 4,
                other: 5
            },
            Ea = {
                select: e => 1 === e ? "one" : "other",
                resolvedOptions: () => ({
                    pluralCategories: ["one", "other"]
                })
            };
        class Oa {
            constructor(e, t = {}) {
                this.languageUtils = e, this.options = t, this.logger = va.create("pluralResolver"), this.pluralRulesCache = {}
            }
            addRule(e, t) {
                this.rules[e] = t
            }
            clearCache() {
                this.pluralRulesCache = {}
            }
            getRule(e, t = {}) {
                const n = ha("dev" === e ? "en" : e),
                    r = t.ordinal ? "ordinal" : "cardinal",
                    a = JSON.stringify({
                        cleanedCode: n,
                        type: r
                    });
                if (a in this.pluralRulesCache) return this.pluralRulesCache[a];
                let i;
                try {
                    i = new Intl.PluralRules(n, {
                        type: r
                    })
                } catch (n) {
                    if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Ea;
                    if (!e.match(/-|_/)) return Ea;
                    const r = this.languageUtils.getLanguagePartFromCode(e);
                    i = this.getRule(r, t)
                }
                return this.pluralRulesCache[a] = i, i
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
                return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((e, t) => za[e] - za[t]).map(e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`) : []
            }
            getSuffix(e, t, n = {}) {
                const r = this.getRule(e, n);
                return r ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n))
            }
        }
        const Ca = (e, t, n, r = ".", a = !0) => {
                let i = ((e, t, n) => {
                    const r = oa(e, n);
                    return void 0 !== r ? r : oa(t, n)
                })(e, t, n);
                return !i && a && Xr(n) && (i = pa(e, n, r), void 0 === i && (i = pa(t, n, r))), i
            },
            Pa = e => e.replace(/\$/g, "$$$$");
        class ja {
            constructor(e = {}) {
                this.logger = va.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || (e => e), this.init(e)
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
                    prefixEscaped: i,
                    suffix: o,
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
                this.escape = void 0 !== t ? t : ca, this.escapeValue = void 0 === n || n, this.useRawValueToEscape = void 0 !== r && r, this.prefix = a ? sa(a) : i || "{{", this.suffix = o ? sa(o) : l || "}}", this.formatSeparator = s || ",", this.unescapePrefix = u ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = d ? sa(d) : f || sa("$t("), this.nestingSuffix = p ? sa(p) : h || sa(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = g || 1e3, this.alwaysFormat = void 0 !== v && v, this.resetRegExp()
            }
            reset() {
                this.options && this.init(this.options)
            }
            resetRegExp() {
                const e = (e, t) => e?.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
                this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
            }
            interpolate(e, t, n, r) {
                let a, i, o;
                const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
                    s = e => {
                        if (e.indexOf(this.formatSeparator) < 0) {
                            const a = Ca(t, l, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                            return this.alwaysFormat ? this.format(a, void 0, n, {
                                ...r,
                                ...t,
                                interpolationkey: e
                            }) : a
                        }
                        const a = e.split(this.formatSeparator),
                            i = a.shift().trim(),
                            o = a.join(this.formatSeparator).trim();
                        return this.format(Ca(t, l, i, this.options.keySeparator, this.options.ignoreJSONStructure), o, n, {
                            ...r,
                            ...t,
                            interpolationkey: i
                        })
                    };
                this.resetRegExp();
                const u = r?.missingInterpolationHandler || this.options.missingInterpolationHandler,
                    c = void 0 !== r?.interpolation?.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                return [{
                    regex: this.regexpUnescape,
                    safeValue: e => Pa(e)
                }, {
                    regex: this.regexp,
                    safeValue: e => this.escapeValue ? Pa(this.escape(e)) : Pa(e)
                }].forEach(t => {
                    for (o = 0; a = t.regex.exec(e);) {
                        const n = a[1].trim();
                        if (i = s(n), void 0 === i)
                            if ("function" == typeof u) {
                                const t = u(e, a, r);
                                i = Xr(t) ? t : ""
                            } else if (r && Object.prototype.hasOwnProperty.call(r, n)) i = "";
                        else {
                            if (c) {
                                i = a[0];
                                continue
                            }
                            this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), i = ""
                        } else Xr(i) || this.useRawValueToEscape || (i = ea(i));
                        const l = t.safeValue(i);
                        if (e = e.replace(a[0], l), c ? (t.regex.lastIndex += i.length, t.regex.lastIndex -= a[0].length) : t.regex.lastIndex = 0, o++, o >= this.maxReplaces) break
                    }
                }), e
            }
            nest(e, t, n = {}) {
                let r, a, i;
                const o = (e, t) => {
                    const n = this.nestingOptionsSeparator;
                    if (e.indexOf(n) < 0) return e;
                    const r = e.split(new RegExp(`${n}[ ]*{`));
                    let a = `{${r[1]}`;
                    e = r[0], a = this.interpolate(a, i);
                    const o = a.match(/'/g),
                        l = a.match(/"/g);
                    ((o?.length ?? 0) % 2 == 0 && !l || l.length % 2 != 0) && (a = a.replace(/'/g, '"'));
                    try {
                        i = JSON.parse(a), t && (i = {
                            ...t,
                            ...i
                        })
                    } catch (t) {
                        return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${n}${a}`
                    }
                    return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, e
                };
                for (; r = this.nestingRegexp.exec(e);) {
                    let l = [];
                    i = {
                        ...n
                    }, i = i.replace && !Xr(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
                    const s = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
                    if (-1 !== s && (l = r[1].slice(s).split(this.formatSeparator).map(e => e.trim()).filter(Boolean), r[1] = r[1].slice(0, s)), a = t(o.call(this, r[1].trim(), i), i), a && r[0] === e && !Xr(a)) return a;
                    Xr(a) || (a = ea(a)), a || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), a = ""), l.length && (a = l.reduce((e, t) => this.format(e, t, n.lng, {
                        ...n,
                        interpolationkey: r[1].trim()
                    }), a.trim())), e = e.replace(r[0], a), this.regexp.lastIndex = 0
                }
                return e
            }
        }
        const Na = e => {
                const t = {};
                return (n, r, a) => {
                    let i = a;
                    a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (i = {
                        ...i,
                        [a.interpolationkey]: void 0
                    });
                    const o = r + JSON.stringify(i);
                    let l = t[o];
                    return l || (l = e(ha(r), a), t[o] = l), l(n)
                }
            },
            La = e => (t, n, r) => e(ha(n), r)(t);
        class Ta {
            constructor(e = {}) {
                this.logger = va.create("formatter"), this.options = e, this.init(e)
            }
            init(e, t = {
                interpolation: {}
            }) {
                this.formatSeparator = t.interpolation.formatSeparator || ",";
                const n = t.cacheInBuiltFormats ? Na : La;
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
                this.formats[e.toLowerCase().trim()] = Na(t)
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
                        formatOptions: i
                    } = (e => {
                        let t = e.toLowerCase().trim();
                        const n = {};
                        if (e.indexOf("(") > -1) {
                            const r = e.split("(");
                            t = r[0].toLowerCase().trim();
                            const a = r[1].substring(0, r[1].length - 1);
                            "currency" === t && a.indexOf(":") < 0 ? n.currency || (n.currency = a.trim()) : "relativetime" === t && a.indexOf(":") < 0 ? n.range || (n.range = a.trim()) : a.split(";").forEach(e => {
                                if (e) {
                                    const [t, ...r] = e.split(":"), a = r.join(":").trim().replace(/^'+|'+$/g, ""), i = t.trim();
                                    n[i] || (n[i] = a), "false" === a && (n[i] = !1), "true" === a && (n[i] = !0), isNaN(a) || (n[i] = parseInt(a, 10))
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
                            const o = r?.formatParams?.[r.interpolationkey] || {},
                                l = o.locale || o.lng || r.locale || r.lng || n;
                            t = this.formats[a](e, l, {
                                ...i,
                                ...r,
                                ...o
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
        class Ma extends ya {
            constructor(e, t, n, r = {}) {
                super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = va.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, r.backend, r)
            }
            queueLoad(e, t, n, r) {
                const a = {},
                    i = {},
                    o = {},
                    l = {};
                return e.forEach(e => {
                    let r = !0;
                    t.forEach(t => {
                        const o = `${e}|${t}`;
                        !n.reload && this.store.hasResourceBundle(e, t) ? this.state[o] = 2 : this.state[o] < 0 || (1 === this.state[o] ? void 0 === i[o] && (i[o] = !0) : (this.state[o] = 1, r = !1, void 0 === i[o] && (i[o] = !0), void 0 === a[o] && (a[o] = !0), void 0 === l[t] && (l[t] = !0)))
                    }), r || (o[e] = !0)
                }), (Object.keys(a).length || Object.keys(i).length) && this.queue.push({
                    pending: i,
                    pendingCount: Object.keys(i).length,
                    loaded: {},
                    errors: [],
                    callback: r
                }), {
                    toLoad: Object.keys(a),
                    pending: Object.keys(i),
                    toLoadLanguages: Object.keys(o),
                    toLoadNamespaces: Object.keys(l)
                }
            }
            loaded(e, t, n) {
                const r = e.split("|"),
                    a = r[0],
                    i = r[1];
                t && this.emit("failedLoading", a, i, t), !t && n && this.store.addResourceBundle(a, i, n, void 0, void 0, {
                    skipCopy: !0
                }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
                const o = {};
                this.queue.forEach(n => {
                    ((e, t, n) => {
                        const {
                            obj: r,
                            k: a
                        } = aa(e, t, Object);
                        r[a] = r[a] || [], r[a].push(n)
                    })(n.loaded, [a], i), ((e, t) => {
                        void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--)
                    })(n, e), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(e => {
                        o[e] || (o[e] = {});
                        const t = n.loaded[e];
                        t.length && t.forEach(t => {
                            void 0 === o[e][t] && (o[e][t] = !0)
                        })
                    }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                }), this.emit("loaded", o), this.queue = this.queue.filter(e => !e.done)
            }
            read(e, t, n, r = 0, a = this.retryTimeout, i) {
                if (!e.length) return i(null, {});
                if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
                    lng: e,
                    ns: t,
                    fcName: n,
                    tried: r,
                    wait: a,
                    callback: i
                });
                this.readingCalls++;
                const o = (o, l) => {
                        if (this.readingCalls--, this.waitingReads.length > 0) {
                            const e = this.waitingReads.shift();
                            this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                        }
                        o && l && r < this.maxRetries ? setTimeout(() => {
                            this.read.call(this, e, t, n, r + 1, 2 * a, i)
                        }, a) : i(o, l)
                    },
                    l = this.backend[n].bind(this.backend);
                if (2 !== l.length) return l(e, t, o);
                try {
                    const n = l(e, t);
                    n && "function" == typeof n.then ? n.then(e => o(null, e)).catch(o) : o(null, n)
                } catch (e) {
                    o(e)
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
                this.read(r, a, "read", void 0, void 0, (n, i) => {
                    n && this.logger.warn(`${t}loading namespace ${a} for language ${r} failed`, n), !n && i && this.logger.log(`${t}loaded namespace ${a} for language ${r}`, i), this.loaded(e, n, i)
                })
            }
            saveMissing(e, t, n, r, a, i = {}, o = () => {}) {
                if (!this.services?.utils?.hasLoadedNamespace || this.services?.utils?.hasLoadedNamespace(t)) {
                    if (null != n && "" !== n) {
                        if (this.backend?.create) {
                            const l = {
                                    ...i,
                                    isUpdate: a
                                },
                                s = this.backend.create.bind(this.backend);
                            if (s.length < 6) try {
                                let a;
                                a = 5 === s.length ? s(e, t, n, r, l) : s(e, t, n, r), a && "function" == typeof a.then ? a.then(e => o(null, e)).catch(o) : o(null, a)
                            } catch (e) {
                                o(e)
                            } else s(e, t, n, r, o, l)
                        }
                        e && e[0] && this.store.addResource(e[0], t, n, r)
                    }
                } else this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")
            }
        }
        const Ra = () => ({
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
            Aa = e => (Xr(e.ns) && (e.ns = [e.ns]), Xr(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), Xr(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), "boolean" == typeof e.initImmediate && (e.initAsync = e.initImmediate), e),
            Da = () => {};
        class Ia extends ya {
            constructor(e = {}, t) {
                var n;
                if (super(), this.options = Aa(e), this.services = {}, this.logger = va, this.modules = {
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
                const n = Ra();
                this.options = {
                    ...n,
                    ...this.options,
                    ...Aa(e)
                }, this.options.interpolation = {
                    ...n.interpolation,
                    ...this.options.interpolation
                }, void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator), void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator);
                const r = e => e ? "function" == typeof e ? new e : e : null;
                if (!this.options.isClone) {
                    let e;
                    this.modules.logger ? va.init(r(this.modules.logger), this.options) : va.init(null, this.options), e = this.modules.formatter ? this.modules.formatter : Ta;
                    const t = new Sa(this.options);
                    this.store = new ba(this.options.resources, this.options);
                    const a = this.services;
                    a.logger = va, a.resourceStore = this.store, a.languageUtils = t, a.pluralResolver = new Oa(t, {
                        prepend: this.options.pluralSeparator,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }), this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format && this.logger.warn("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), !e || this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format || (a.formatter = r(e), a.formatter.init && a.formatter.init(a, this.options), this.options.interpolation.format = a.formatter.format.bind(a.formatter)), a.interpolator = new ja(this.options), a.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    }, a.backendConnector = new Ma(r(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", (e, ...t) => {
                        this.emit(e, ...t)
                    }), this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector), a.languageDetector.init && a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new xa(this.services, this.options), this.translator.on("*", (e, ...t) => {
                        this.emit(e, ...t)
                    }), this.modules.external.forEach(e => {
                        e.init && e.init(this)
                    })
                }
                if (this.format = this.options.interpolation.format, t || (t = Da), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    const e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
                }
                this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
                    this[e] = (...t) => this.store[e](...t)
                }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
                    this[e] = (...t) => (this.store[e](...t), this)
                });
                const a = Jr(),
                    i = () => {
                        const e = (e, n) => {
                            this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(n), t(e, n)
                        };
                        if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
                        this.changeLanguage(this.options.lng, e)
                    };
                return this.options.resources || !this.options.initAsync ? i() : setTimeout(i, 0), a
            }
            loadResources(e, t = Da) {
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
                const r = Jr();
                return "function" == typeof e && (n = e, e = void 0), "function" == typeof t && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = Da), this.services.backendConnector.reload(e, t, e => {
                    r.resolve(), n(e)
                }), r
            }
            use(e) {
                if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && wa.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
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
                const n = Jr();
                this.emit("languageChanging", e);
                const r = e => {
                        this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                    },
                    a = (a, i) => {
                        i ? this.isLanguageChangingTo === e && (r(i), this.translator.changeLanguage(i), this.isLanguageChangingTo = void 0, this.emit("languageChanged", i), this.logger.log("languageChanged", i)) : this.isLanguageChangingTo = void 0, n.resolve((...e) => this.t(...e)), t && t(a, (...e) => this.t(...e))
                    },
                    i = t => {
                        e || t || !this.services.languageDetector || (t = []);
                        const n = Xr(t) ? t : t && t[0],
                            i = this.store.hasLanguageSomeTranslations(n) ? n : this.services.languageUtils.getBestMatchFromCodes(Xr(t) ? [t] : t);
                        i && (this.language || r(i), this.translator.language || this.translator.changeLanguage(i), this.services.languageDetector?.cacheUserLanguage?.(i)), this.loadResources(i, e => {
                            a(e, i)
                        })
                    };
                return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(i) : this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()), n
            }
            getFixedT(e, t, n) {
                const r = (e, t, ...a) => {
                    let i;
                    i = "object" != typeof t ? this.options.overloadTranslationOptionHandler([e, t].concat(a)) : {
                        ...t
                    }, i.lng = i.lng || r.lng, i.lngs = i.lngs || r.lngs, i.ns = i.ns || r.ns, "" !== i.keyPrefix && (i.keyPrefix = i.keyPrefix || n || r.keyPrefix);
                    const o = this.options.keySeparator || ".";
                    let l;
                    return l = i.keyPrefix && Array.isArray(e) ? e.map(e => `${i.keyPrefix}${o}${e}`) : i.keyPrefix ? `${i.keyPrefix}${o}${e}` : e, this.t(l, i)
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
                const i = (e, t) => {
                    const n = this.services.backendConnector.state[`${e}|${t}`];
                    return -1 === n || 0 === n || 2 === n
                };
                if (t.precheck) {
                    const e = t.precheck(this, i);
                    if (void 0 !== e) return e
                }
                return !(!this.hasResourceBundle(n, e) && this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages) && (!i(n, e) || r && !i(a, e)))
            }
            loadNamespaces(e, t) {
                const n = Jr();
                return this.options.ns ? (Xr(e) && (e = [e]), e.forEach(e => {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }), this.loadResources(e => {
                    n.resolve(), t && t(e)
                }), n) : (t && t(), Promise.resolve())
            }
            loadLanguages(e, t) {
                const n = Jr();
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
                const t = this.services?.languageUtils || new Sa(Ra());
                return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
            }
            static createInstance(e = {}, t) {
                return new Ia(e, t)
            }
            cloneInstance(e = {}, t = Da) {
                const n = e.forkResourceStore;
                n && delete e.forkResourceStore;
                const r = {
                        ...this.options,
                        ...e,
                        isClone: !0
                    },
                    a = new Ia(r);
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
                    a.store = new ba(e, r), a.services.resourceStore = a.store
                }
                return a.translator = new xa(a.services, r), a.translator.on("*", (e, ...t) => {
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
        const $a = Ia.createInstance();
        $a.createInstance = Ia.createInstance, $a.createInstance, $a.dir, $a.init, $a.loadResources, $a.reloadResources, $a.use, $a.changeLanguage, $a.getFixedT, $a.t, $a.exists, $a.setDefaultNamespace, $a.hasLoadedNamespace, $a.loadNamespaces, $a.loadLanguages, o(4915), Object.create(null);
        const Fa = {},
            Ua = (e, t, n, r) => {
                Ba(n) && Fa[n] || (Ba(n) && (Fa[n] = new Date), ((e, t, n, r) => {
                    const a = [n, {
                        code: t,
                        ...r || {}
                    }];
                    if (e?.services?.logger?.forward) return e.services.logger.forward(a, "warn", "react-i18next::", !0);
                    Ba(a[0]) && (a[0] = `react-i18next:: ${a[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...a) : console?.warn && console.warn(...a)
                })(e, t, n, r))
            },
            Ha = (e, t) => () => {
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
            Va = (e, t, n) => {
                e.loadNamespaces(t, Ha(e, n))
            },
            Wa = (e, t, n, r) => {
                if (Ba(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return Va(e, n, r);
                n.forEach(t => {
                    e.options.ns.indexOf(t) < 0 && e.options.ns.push(t)
                }), e.loadLanguages(t, Ha(e, r))
            },
            Ba = e => "string" == typeof e,
            Za = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
            qa = {
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
            Ga = e => qa[e];
        let Ka, Qa = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: e => e.replace(Za, Ga)
        };
        const Ya = {
                type: "3rdParty",
                init(e) {
                    ((e = {}) => {
                        Qa = {
                            ...Qa,
                            ...e
                        }
                    })(e.options.react), (e => {
                        Ka = e
                    })(e)
                }
            },
            Xa = (0, Nr.createContext)();
        class Ja {
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
        const ei = (e, t, n, r) => e.getFixedT(t, n, r),
            ti = JSON.parse('{"badge":{"dismiss":"ZavÅ™Ã­t hodnocenÃ­ Google","google_rating":"HodnocenÃ­ Google","read_reviews":"PÅ™eÄtÄ›te si naÅ¡ich {{ totalReviewCount }} recenzÃ­"},"enable_js":"Pro zobrazenÃ­ recenzÃ­ prosÃ­m povolte JavaScript.","failed_to_load":"NepodaÅ™ilo se naÄÃ­st recenze.","failed_to_load2":"Zkontrolujte prosÃ­m konfiguraci widgetu a zkuste to znovu.","hello_world":"Ahoj svÄ›te!","load_more":"NaÄÃ­st dalÅ¡Ã­","loading_reviews":"NaÄÃ­tÃ¡nÃ­ recenzÃ­...","powered_by":"BÄ›Å¾Ã­ na","review_card":{"days_ago--one":"pÅ™ed {{ count }} dnem","days_ago--few":"pÅ™ed {{ count }} dny","days_ago--other":"pÅ™ed {{ count }} dny","hours_ago--one":"pÅ™ed {{ count }} hodinou","hours_ago--few":"pÅ™ed {{ count }} hodinami","hours_ago--other":"pÅ™ed {{ count }} hodinami","just_now":"PrÃ¡vÄ› teÄ","minutes_ago--one":"pÅ™ed {{ count }} minutou","minutes_ago--few":"pÅ™ed {{ count }} minutami","minutes_ago--other":"pÅ™ed {{ count }} minutami","months_ago--one":"pÅ™ed {{ count }} mÄ›sÃ­cem","months_ago--few":"pÅ™ed {{ count }} mÄ›sÃ­ci","months_ago--other":"pÅ™ed {{ count }} mÄ›sÃ­ci","read_less":"Zobrazit mÃ©nÄ›","read_more":"Zobrazit vÃ­ce","years_ago--one":"pÅ™ed {{ count }} rokem","years_ago--few":"pÅ™ed {{ count }} lety","years_ago--other":"pÅ™ed {{ count }} lety"},"summary_bar":{"based_on":"Na zÃ¡kladÄ›","excellent":"VynikajÃ­cÃ­","fair":"UspokojivÃ©","good":"DobrÃ©","great":"SkvÄ›lÃ©","poor":"Å patnÃ©","rating":"HodnocenÃ­","reviews":"recenzÃ­","write_a_review":"Napsat recenzi"}}'),
            ni = JSON.parse('{"badge":{"dismiss":"Luk Google-bedÃ¸mmelsesbadge","google_rating":"Google-bedÃ¸mmelse","read_reviews":"LÃ¦s vores {{ totalReviewCount }} anmeldelser"},"enable_js":"AktivÃ©r JavaScript for at se anmeldelserne.","failed_to_load":"Kunne ikke indlÃ¦se anmeldelser.","failed_to_load2":"Tjek venligst din widget-konfiguration og prÃ¸v igen.","hello_world":"Hej verden!","load_more":"IndlÃ¦s mere","loading_reviews":"IndlÃ¦ser anmeldelser...","powered_by":"Drevet af","review_card":{"days_ago--one":"{{ count }} dag siden","days_ago--other":"{{ count }} dage siden","hours_ago--one":"{{ count }} time siden","hours_ago--other":"{{ count }} timer siden","just_now":"Lige nu","minutes_ago--one":"{{ count }} minut siden","minutes_ago--other":"{{ count }} minutter siden","months_ago--one":"{{ count }} mÃ¥ned siden","months_ago--other":"{{ count }} mÃ¥neder siden","read_less":"LÃ¦s mindre","read_more":"LÃ¦s mere","years_ago--one":"{{ count }} Ã¥r siden","years_ago--other":"{{ count }} Ã¥r siden"},"summary_bar":{"based_on":"Baseret pÃ¥","excellent":"Fremragende","fair":"Rimelig","good":"God","great":"Fantastisk","poor":"DÃ¥rlig","rating":"BedÃ¸mmelse","reviews":"anmeldelser","write_a_review":"Skriv en anmeldelse"}}'),
            ri = JSON.parse('{"badge":{"dismiss":"Google-Bewertungsabzeichen schlieÃŸen","google_rating":"Google-Bewertung","read_reviews":"Lesen Sie unsere {{ totalReviewCount }} Bewertungen"},"enable_js":"Bitte aktivieren Sie JavaScript, um die Bewertungen anzuzeigen.","failed_to_load":"Bewertungen konnten nicht geladen werden.","failed_to_load2":"Bitte Ã¼berprÃ¼fen Sie Ihre Widget-Konfiguration und versuchen Sie es erneut.","hello_world":"Hallo Welt!","load_more":"Mehr laden","loading_reviews":"Bewertungen werden geladen â€¦","powered_by":"Angetrieben von","review_card":{"days_ago":"Vor {{ count }} Tagen","hours_ago":"vor {{ count }} Stunden","just_now":"Soeben","minutes_ago":"vor {{ count }} Minuten","months_ago":"Vor {{ count }} Monaten","read_less":"Lese weniger","read_more":"Mehr anzeigen","years_ago":"Vor {{ count }} Jahren"},"summary_bar":{"based_on":"Bezogen auf","excellent":"Exzellent","fair":"Gerecht","good":"Gut","great":"GroÃŸartig","poor":"Arm","rating":"","reviews":"bewertungen","write_a_review":"Eine Rezension schreiben"}}'),
            ai = JSON.parse('{"badge":{"dismiss":"Dismiss Google rating badge","google_rating":"Google Rating","read_reviews":"Read our {{ totalReviewCount }} reviews"},"enable_js":"Please enable JavaScript to view the reviews.","failed_to_load":"Failed to load reviews.","failed_to_load2":"Please check your widget configuration and try again.","hello_world":"Hello, world!","load_more":"Load more","loading_reviews":"Loading reviews...","powered_by":"Powered by","review_card":{"days_ago--one":"{{ count }} day ago ","days_ago--other":"{{ count }} days ago ","hours_ago--one":"{{ count }} hour ago ","hours_ago--other":"{{ count }} hours ago ","just_now":"Just now","minutes_ago--one":"{{ count }} minute ago ","minutes_ago--other":"{{ count }} minutes ago ","months_ago--one":"{{ count }} month ago ","months_ago--other":"{{ count }} months ago ","read_less":"Read less","read_more":"Read more","years_ago--one":"{{ count }}  year ago ","years_ago--other":"{{ count }}  years ago "},"summary_bar":{"based_on":"Based on","excellent":"Excellent","fair":"Fair","good":"Good","great":"Great","poor":"Poor","rating":"Rating","reviews":"reviews","write_a_review":"Write a review"}}'),
            ii = JSON.parse('{"badge":{"dismiss":"Descartar la insignia de calificaciÃ³n de Google","google_rating":"CalificaciÃ³n de Google","read_reviews":"Lea nuestras {{ totalReviewCount }} reseÃ±as"},"enable_js":"Habilite JavaScript para ver las reseÃ±as.","failed_to_load":"No se pudieron cargar las reseÃ±as.","failed_to_load2":"Verifique la configuraciÃ³n de su widget e intÃ©ntelo nuevamente.","hello_world":"Â¡Hola Mundo!","load_more":"Carga mÃ¡s","loading_reviews":"Cargando reseÃ±as...","powered_by":"Energizado por ","review_card":{"days_ago":"Hace {{ count }} dÃ­as","hours_ago":" Hace {{ count }} horas","just_now":"En este momento","minutes_ago":"Hace {{ count }} minutos","months_ago":"Hace {{ count }} meses","read_less":"Leer menos","read_more":"Leer mÃ¡s","years_ago":"Hace {{ count }} aÃ±os"},"summary_bar":{"based_on":"Residencia en","excellent":"Excelente","fair":"Medio","good":"Bueno","great":"Muy bueno","poor":"Malo","rating":"","reviews":"reseÃ±as","write_a_review":"Escribe una reseÃ±a"}}'),
            oi = JSON.parse('{"badge":{"dismiss":"Ignorer le badge d\'Ã©valuation Google","google_rating":"Note Google","read_reviews":"Lisez nos {{ totalReviewCount }} avis"},"enable_js":"Veuillez activer JavaScript pour afficher les avis.","failed_to_load":"Ã‰chec du chargement des avis.","failed_to_load2":"Veuillez vÃ©rifier la configuration de votre widget et rÃ©essayer.","hello_world":"Bonjour le monde!","load_more":"Charger plus","loading_reviews":"Chargement des avis...","powered_by":"PropulsÃ© par","review_card":{"days_ago":"il y a {{ count }} Â jours","hours_ago":" Il y a {{ count }} Â heures","just_now":"Tout Ã  l\' heure","minutes_ago":"Il y a {{ count }} minutes","months_ago":"Il y a {{ count }} mois","read_less":"Lire moins","read_more":"En savoir plus","years_ago":"Il y a {{ count }} ans"},"summary_bar":{"based_on":"BasÃ© sur","excellent":"Excellent","fair":"Moyenne","good":"Bien","great":"Super","poor":"Mauvais","rating":"","reviews":"avis","write_a_review":"Ã‰crire une critique"}}'),
            li = JSON.parse('{"badge":{"dismiss":"Ignora il badge di valutazione di Google","google_rating":"Valutazione di Google","read_reviews":"Leggi le nostre {{ totalReviewCount }} recensioni"},"enable_js":"Abilita JavaScript per visualizzare le recensioni.","failed_to_load":"Impossibile caricare le recensioni.","failed_to_load2":"Controlla la configurazione del widget e riprova.","hello_world":"Ciao mondo!","load_more":"Carica di piÃ¹","loading_reviews":"Caricamento recensioni...","powered_by":"Offerto da","review_card":{"days_ago":"{{ count }} giorni fa","hours_ago":"{{ count }} ore fa","just_now":"Proprio adesso","minutes_ago":"{{ count }} minuti fa","months_ago":"{{ count }} mesi fa","read_less":"Leggi di meno","read_more":"Per saperne di piÃ¹","years_ago":"{{ count }} anni fa "},"summary_bar":{"based_on":"Basato su","excellent":"Eccellente","fair":"Giusto","good":"Bene","great":"Grande","poor":"Povero","rating":"","reviews":"recensioni","write_a_review":"Scrivere una recensione"}}'),
            si = JSON.parse('{"badge":{"dismiss":"OdrzuÄ‡ plakietkÄ™ oceny Google","google_rating":"Ocena Google","read_reviews":"Przeczytaj nasze {{ totalReviewCount }} recenzje"},"enable_js":"Aby zobaczyÄ‡ recenzje, wÅ‚Ä…cz JavaScript.","failed_to_load":"Nie udaÅ‚o siÄ™ zaÅ‚adowaÄ‡ recenzji.","failed_to_load2":"SprawdÅº konfiguracjÄ™ widÅ¼etu i sprÃ³buj ponownie.","hello_world":"Witaj Å›wiecie!","load_more":"ZaÅ‚aduj wiÄ™cej","loading_reviews":"Åadowanie recenzji...","powered_by":"ObsÅ‚ugiwane przez","review_card":{"days_ago":"{{ count }} dni temu","hours_ago":"{{ count }} godzin temu","just_now":"WÅ‚aÅ›nie","minutes_ago":"{{ count }} minut temu","months_ago":"{{ count }} miesiÄ™cy temu","read_less":"Mniej czytaÄ‡","read_more":"Czytaj wiÄ™cej","years_ago":"{{ count }} lat temu "},"summary_bar":{"based_on":"Oparte na","excellent":"DoskonaÅ‚y","fair":"Sprawiedliwy","good":"Dobry","great":"Åšwietnie","poor":"SÅ‚aby","rating":"","reviews":"opinie","write_a_review":"NapisaÄ‡ recenzjÄ™"}}'),
            ui = JSON.parse('{"badge":{"dismiss":"Ignorar selo de avaliaÃ§Ã£o do Google","google_rating":"AvaliaÃ§Ã£o do Google","read_reviews":"{{ totalReviewCount }} avaliaÃ§Ãµes"},"enable_js":"Ative o JavaScript para visualizar os comentÃ¡rios.","failed_to_load":"Falha ao carregar avaliaÃ§Ãµes.","failed_to_load2":"Verifique a configuraÃ§Ã£o do seu widget e tente novamente.","hello_world":"OlÃ¡, mundo!","load_more":"Carregar mais","loading_reviews":"Carregando avaliaÃ§Ãµes...","powered_by":"Disponibilizado pelo","review_card":{"days_ago--one":"{{ count }} dia atrÃ¡s","days_ago--other":"{{ count }} dias atrÃ¡s","hours_ago--one":"{{ count }} hora atrÃ¡s","hours_ago--other":"{{ count }} horas atrÃ¡s","just_now":"Agora mesmo","minutes_ago--one":"{{ count }} minuto atrÃ¡s","minutes_ago--other":"{{ count }} minutos atrÃ¡s","months_ago--one":"{{ count }} mÃªs atrÃ¡s ","months_ago--other":"{{ count }} meses atrÃ¡s ","read_less":"Leia menos","read_more":"Leia mais","years_ago--one":"{{ count }} ano atrÃ¡s ","years_ago--other":"{{ count }} anos atrÃ¡s "},"summary_bar":{"based_on":"Com base em","excellent":"Excelente","fair":"MÃ©dia","good":"Bom","great":"Ã“timo","poor":"Fraco","rating":"","reviews":"avaliaÃ§Ãµes","write_a_review":"Escreva uma avaliaÃ§Ã£o"}}'),
            ci = JSON.parse('{"badge":{"dismiss":"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð·Ð½Ð°Ñ‡Ð¾Ðº Ñ€ÐµÐ¹Ñ‚Ð¸Ð½Ð³Ð° Google","google_rating":"Ð ÐµÐ¹Ñ‚Ð¸Ð½Ð³ Google","read_reviews":"ÐŸÑ€Ð¾Ñ‡Ñ‚Ð¸Ñ‚Ðµ Ð½Ð°ÑˆÐ¸ {{ totalReviewCount }} Ð¾Ð±Ð·Ð¾Ñ€Ñ‹"},"enable_js":"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²ÐºÐ»ÑŽÑ‡Ð¸Ñ‚Ðµ JavaScript, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ð¾Ñ‚Ð·Ñ‹Ð²Ñ‹.","failed_to_load":"ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð¾Ñ‚Ð·Ñ‹Ð²Ñ‹.","failed_to_load2":"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ ÐºÐ¾Ð½Ñ„Ð¸Ð³ÑƒÑ€Ð°Ñ†Ð¸ÑŽ Ð²Ð¸Ð´Ð¶ÐµÑ‚Ð° Ð¸ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.","hello_world":"ÐŸÑ€Ð¸Ð²ÐµÑ‚, Ð¼Ð¸Ñ€!","load_more":"Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸ Ð±Ð¾Ð»ÑŒÑˆÐµ","loading_reviews":"Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð¾Ñ‚Ð·Ñ‹Ð²Ð¾Ð²...","powered_by":"ÐŸÐ¸Ñ‚Ð°Ñ‚ÑŒÑÑ Ð¾Ñ‚","review_card":{"days_ago":"{{ count }} Ð´Ð½ÐµÐ¹ Ð½Ð°Ð·Ð°Ð´","hours_ago":"{{ count }} Â Ñ‡Ð°ÑÐ° Ð½Ð°Ð·Ð°Ð´","just_now":"ÐŸÑ€ÑÐ¼Ð¾ ÑÐµÐ¹Ñ‡Ð°Ñ","minutes_ago":"{{ count }} Ð¼Ð¸Ð½ÑƒÑ‚ Ð½Ð°Ð·Ð°Ð´","months_ago":"{{ count }} Ð¼ÐµÑÑÑ†ÐµÐ² Ð½Ð°Ð·Ð°Ð´","read_less":"Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð¼ÐµÐ½ÑŒÑˆÐµ","read_more":"Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð´Ð°Ð»ÐµÐµ","years_ago":"{{ count }} Ð»ÐµÑ‚ Ð½Ð°Ð·Ð°Ð´ "},"summary_bar":{"based_on":"ÐÐ° Ð¾ÑÐ½Ð¾Ð²Ðµ","excellent":"ÐžÑ‚Ð»Ð¸Ñ‡Ð½Ñ‹Ð¹","fair":"Ð¡Ð¿Ñ€Ð°Ð²ÐµÐ´Ð»Ð¸Ð²Ñ‹Ð¹","good":"Ð¥Ð¾Ñ€Ð¾ÑˆÐ¸Ð¹","great":"Ð‘Ð¾Ð»ÑŒÑˆÐ¾Ð¹","poor":"Ð‘ÐµÐ´Ð½Ñ‹Ð¹","rating":"","reviews":"ÐžÑ‚Ð·Ñ‹Ð²Ñ‹","write_a_review":"ÐÐ°Ð¿Ð¸ÑÐ°Ñ‚ÑŒ Ð¾Ð±Ð·Ð¾Ñ€"}}');
        var di = function(e) {
                return $a.use(Ya).init({
                    resources: {
                        en: {
                            featurable: ai
                        },
                        "pt-BR": {
                            featurable: ui
                        },
                        fr: {
                            featurable: oi
                        },
                        es: {
                            featurable: ii
                        },
                        de: {
                            featurable: ri
                        },
                        pl: {
                            featurable: si
                        },
                        ru: {
                            featurable: ci
                        },
                        it: {
                            featurable: li
                        },
                        cs: {
                            featurable: ti
                        },
                        da: {
                            featurable: ni
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
                    } = (0, Nr.useContext)(Xa) || {}, i = n || r || Ka;
                    if (i && !i.reportNamespaces && (i.reportNamespaces = new Ja), !i) {
                        Ua(i, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
                        const e = (e, t) => {
                                return Ba(t) ? t : "object" == typeof(n = t) && null !== n && Ba(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e;
                                var n
                            },
                            t = [e, {}, !1];
                        return t.t = e, t.i18n = {}, t.ready = !1, t
                    }
                    i.options.react?.wait && Ua(i, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                    const o = {
                            ...Qa,
                            ...i.options.react,
                            ...t
                        },
                        {
                            useSuspense: l,
                            keyPrefix: s
                        } = o;
                    let u = e || a || i.options?.defaultNS;
                    u = Ba(u) ? [u] : u || ["translation"], i.reportNamespaces.addUsedNamespaces?.(u);
                    const c = (i.isInitialized || i.initializedStoreOnce) && u.every(e => ((e, t, n = {}) => t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
                            lng: n.lng,
                            precheck: (t, r) => {
                                if (n.bindI18n?.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1
                            }
                        }) : (Ua(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
                            languages: t.languages
                        }), !0))(e, i, o)),
                        d = ((e, t, n, r) => (0, Nr.useCallback)(ei(e, t, n, r), [e, t, n, r]))(i, t.lng || null, "fallback" === o.nsMode ? u : u[0], s),
                        f = () => d,
                        p = () => ei(i, t.lng || null, "fallback" === o.nsMode ? u : u[0], s),
                        [h, m] = (0, Nr.useState)(f);
                    let g = u.join();
                    t.lng && (g = `${t.lng}${g}`);
                    const v = ((e, t) => {
                            const n = (0, Nr.useRef)();
                            return (0, Nr.useEffect)(() => {
                                n.current = e
                            }, [e, t]), n.current
                        })(g),
                        y = (0, Nr.useRef)(!0);
                    (0, Nr.useEffect)(() => {
                        const {
                            bindI18n: e,
                            bindI18nStore: n
                        } = o;
                        y.current = !0, c || l || (t.lng ? Wa(i, t.lng, u, () => {
                            y.current && m(p)
                        }) : Va(i, u, () => {
                            y.current && m(p)
                        })), c && v && v !== g && y.current && m(p);
                        const r = () => {
                            y.current && m(p)
                        };
                        return e && i?.on(e, r), n && i?.store.on(n, r), () => {
                            y.current = !1, i && e?.split(" ").forEach(e => i.off(e, r)), n && i && n.split(" ").forEach(e => i.store.off(e, r))
                        }
                    }, [i, g]), (0, Nr.useEffect)(() => {
                        y.current && c && m(f)
                    }, [i, s, c]);
                    const b = [h, i, c];
                    if (b.t = h, b.i18n = i, b.ready = c, c) return b;
                    if (!c && !l) return b;
                    throw new Promise(e => {
                        t.lng ? Wa(i, t.lng, u, () => e()) : Va(i, u, () => e())
                    })
                })("featurable", {
                    lng: e
                })
            },
            fi = function(t) {
                var n = t.size,
                    r = void 0 === n ? "md" : n,
                    a = t.iconOnly,
                    i = void 0 !== a && a,
                    o = t.color,
                    l = void 0 === o ? "black" : o;
                return (0, e.jsx)(Nr.Fragment, {
                    children: i ? (0, e.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 106.81 106.14",
                        className: qr("xs" === r && "h-5", "sm" === r && "h-6", "md" === r && "h-7", "lg" === r && "h-8"),
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
                        className: qr("xs" === r && "h-4", "sm" === r && "h-5", "md" === r && "h-7", "lg" === r && "h-8"),
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
                        className: qr("xs" === r && "h-4", "sm" === r && "h-5", "md" === r && "h-7", "lg" === r && "h-8"),
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
            pi = function(t) {
                var n = t.inline,
                    r = t.theme,
                    a = void 0 === r ? "light" : r,
                    i = t.widgetId,
                    o = t.languageCode,
                    l = void 0 === o ? "en" : o,
                    s = t.previewMode,
                    u = t.previewModeBrandingAction,
                    c = t.size,
                    d = void 0 === c ? "md" : c,
                    f = di(l).t,
                    p = "https://featurable.com?utm_source=widget&utm_medium=".concat(i);
                return u && s ? (0, e.jsxs)("button", {
                    onClick: u,
                    className: qr("no-underline border border-solid rounded-full  px-3 py-1 transition-all duration-200", n ? "flex items-center space-x-1" : "", "light" === a ? "text-gray-950 bg-white hover:bg-gray-100 border-gray-200" : "text-white bg-gray-900 hover:bg-gray-800 border-gray-700"),
                    children: [(0, e.jsx)("div", {
                        className: qr("hidden text-sm -translate-x-7 absolute bg-white rounded-full shadow h-7 w-7 items-center justify-center border border-solid border-gray-200 hover:bg-gray-100", "edit-btn"),
                        children: "âœ•"
                    }), (0, e.jsx)(hi, {
                        label: f("powered_by"),
                        theme: a,
                        size: d
                    })]
                }) : (0, e.jsx)("a", {
                    href: p,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    className: qr("no-underline border border-solid  rounded-full px-3 py-1 transition-all duration-200", n ? "flex items-center space-x-1" : "", "light" === a ? "text-gray-950 bg-white hover:bg-gray-100 border-gray-200" : "text-white bg-gray-900 hover:bg-gray-800 border-gray-700"),
                    children: (0, e.jsx)(hi, {
                        label: f("powered_by"),
                        theme: a,
                        size: d
                    })
                })
            },
            hi = function(t) {
                var n = t.label,
                    r = t.theme,
                    a = t.size,
                    i = void 0 === a ? "md" : a;
                return (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)("p", {
                        className: qr("text-sm mb-0.5 no-underline", "sm" === i && "text-xs"),
                        children: (0, e.jsxs)("span", {
                            children: [n, " "]
                        })
                    }), (0, e.jsx)("div", {
                        className: qr("translate-y-[1px]"),
                        children: (0, e.jsx)(fi, {
                            size: "xs",
                            color: "light" === r ? "black" : "white"
                        })
                    })]
                })
            },
            mi = function() {
                return mi = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, mi.apply(this, arguments)
            },
            gi = function(t) {
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
                return (0, e.jsxs)("svg", mi({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    className: qr(n || "h-6 w-6")
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
            vi = function() {
                return vi = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }, vi.apply(this, arguments)
            },
            yi = function(t) {
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
                return (0, e.jsxs)("svg", vi({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 272 92",
                    className: qr(n || "h-6")
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
            bi = function(t) {
                var n = t.className,
                    r = t.rating,
                    a = t.size,
                    i = void 0 === a ? "md" : a,
                    o = Qr;
                return (0, e.jsx)("div", {
                    className: qr("flex items-center", "star-rating"),
                    "data-featurable-classname": ".star-rating",
                    "data-featurable-description": "Star rating container",
                    "data-featurable-group": "review card",
                    children: Array.from({
                        length: 5
                    }).map(function(t, a) {
                        return (0, e.jsx)(o, {
                            className: qr("sm" === i && "h-4 w-4", "md" === i && "h-5 w-5", "lg" === i && "h-6 w-6", "xl" === i && "h-6 w-6", n, r >= a + 1 ? "text-[#F8AF0D]" : "text-gray-400", "star-rating__star", "sm" === i && "star-rating__star--sm", "md" === i && "star-rating__star--md", "lg" === i && "star-rating__star--lg", "xl" === i && "star-rating__star--xl", r >= a + 1 ? "star-rating__star--filled" : "star-rating__star--empty"),
                            "data-featurable-classname": ".star-rating__star|.star-rating__star--sm|.star-rating__star--md|.star-rating__star--lg|.star-rating__star--xl|.star-rating__star--filled|.star-rating__star--empty",
                            "data-featurable-description": "Star icon|Small star icon|Medium star icon|Large star icon|Extra large star icon|Filled star icon|Empty star icon"
                        }, a)
                    })
                })
            },
            wi = function() {
                var e = Nr.useState(function() {
                        return "undefined" != typeof window ? Math.max(window.innerWidth, 320) : 1024
                    }),
                    t = e[0],
                    n = e[1],
                    r = Nr.useRef(null);
                return (0, Nr.useEffect)(function() {
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
            _i = function(e, t) {
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
            ki = function(e, t) {
                var n = new Date,
                    r = Math.abs(n.getTime() - e.getTime()),
                    a = Math.floor(r / 6e4),
                    i = Math.floor(r / 36e5),
                    o = Math.floor(r / 864e5),
                    l = Math.floor(o / 30),
                    s = Math.floor(l / 12);
                return s > 0 ? t("review_card.years_ago", {
                    count: s
                }) : l > 0 ? t("review_card.months_ago", {
                    count: l
                }) : o > 0 ? t("review_card.days_ago", {
                    count: o
                }) : i > 0 ? t("review_card.hours_ago", {
                    count: i
                }) : a > 0 ? t("review_card.minutes_ago", {
                    count: a
                }) : t("review_card.just_now")
            },
            xi = function(e, t) {
                var n = encodeURIComponent(e),
                    r = encodeURIComponent(window.location.href);
                return "https://featurable.com/go/from-widget?url=".concat(n, "&widget=").concat(t, "&referrer=").concat(r)
            },
            Si = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, a = 0, i = t.length; a < i; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
                return e.concat(r || Array.prototype.slice.call(t))
            },
            zi = function(t) {
                var n = t.widgetData,
                    r = n.uuid,
                    a = n.config,
                    i = n.reviews,
                    o = n.gbpLocationSummary,
                    l = (n.gbpLocationUuid, n.showBranding),
                    s = (0, Nr.useRef)(null),
                    u = (0, Nr.useRef)(null),
                    c = (0, Nr.useMemo)(function() {
                        if (i.length < 3) {
                            if (0 === i.length) return [];
                            if (1 === i.length) return Si(Si([], i, !0), i, !0);
                            if (2 === i.length) return Si(Si([], i, !0), [i[0]], !1)
                        }
                        return i
                    }, [i]),
                    d = (0, Nr.useMemo)(function() {
                        return null == a.carousel_autoplay || a.carousel_autoplay
                    }, [a.carousel_autoplay]),
                    f = (0, Nr.useMemo)(function() {
                        return null == a.carousel_speed ? 3e3 : a.carousel_speed
                    }, [a.carousel_speed]),
                    p = wi(),
                    h = p[0],
                    m = p[1],
                    g = (p[2], (0, Nr.useState)("desktop")),
                    v = g[0],
                    y = g[1],
                    b = Math.max(h, 320);
                (0, Nr.useEffect)(function() {
                    var e = v;
                    "mobile" === e ? b >= 670 && y("tablet") : "tablet" === e ? b < 620 ? y("mobile") : b >= 800 && y("desktop") : "desktop" === e && b < 750 && y("tablet")
                }, [b, v]);
                var w = function() {
                        return "mobile" === v ? {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        } : "tablet" === v ? {
                            slidesToShow: 2,
                            slidesToScroll: d ? 1 : 2,
                            initialSlide: 2
                        } : {
                            slidesToShow: 3,
                            slidesToScroll: d ? 1 : 3
                        }
                    },
                    _ = (0, Nr.useState)(0),
                    k = _[0],
                    x = _[1],
                    S = (0, Nr.useState)(!1),
                    z = S[0],
                    E = S[1];
                (0, Nr.useEffect)(function() {
                    var e = u.current;
                    if (e) {
                        var t = function() {
                                var t = e.querySelectorAll(".slick-active");
                                if (0 !== t.length) {
                                    var n = Array.from(t).map(function(e) {
                                            return e.getBoundingClientRect().height
                                        }),
                                        r = Math.max.apply(Math, n);
                                    r > 0 && (x(r), E(!0))
                                }
                            },
                            n = new MutationObserver(t);
                        n.observe(e, {
                            attributes: !0,
                            subtree: !0,
                            attributeFilter: ["class"]
                        }), requestAnimationFrame(function() {
                            t(), setTimeout(t, 100)
                        }), window.addEventListener("load", t);
                        var r = new ResizeObserver(t);
                        Array.from(e.children).forEach(function(e) {
                            r.observe(e)
                        });
                        var a = setTimeout(function() {
                            E(!0)
                        }, 500);
                        return function() {
                            n.disconnect(), window.removeEventListener("load", t), r.disconnect(), clearTimeout(a)
                        }
                    }
                }, [v]);
                var O = function() {
                        return "mobile" === v
                    },
                    C = function() {
                        return k > 0 ? k / 2 - 16 : "mobile" === v ? 120 : "tablet" === v ? 140 : 160
                    };
                return (0, e.jsxs)("div", {
                    className: qr("py-16", O() && "px-0", "tablet" === v && "px-2", "desktop" === v && "px-8", "widget"),
                    "data-featurable-classname": ".widget",
                    "data-featurable-description": "Main widget container",
                    "data-featurable-group": "carousel layout",
                    children: [(0, e.jsx)("style", {
                        children: a.custom_css.replace(/([^{}]+)(?=\s*\{)/g, " #featurable-".concat(r, " $1"))
                    }), a.title && a.show_title && (0, e.jsx)("h2", {
                        className: qr("text-3xl md:text-4xl font-bold text-center mb-8", "light" === a.color_scheme && "text-black", "dark" === a.color_scheme && "text-white", "title"),
                        "data-featurable-classname": ".title",
                        "data-featurable-description": "Carousel title",
                        "data-featurable-group": "carousel layout",
                        children: a.title
                    }), (0, e.jsxs)("div", {
                        className: qr("min-w-[320px] mx-auto", "parent", "container"),
                        ref: m,
                        "data-featurable-classname": ".container",
                        "data-featurable-description": "Main container for carousel widget",
                        "data-featurable-group": "carousel layout",
                        children: [a.summary && o && (0, e.jsx)("div", {
                            className: qr("max-w-7xl mx-auto mb-2", O() ? "px-0" : "px-12", "carousel__summary"),
                            "data-featurable-classname": ".carousel__summary",
                            "data-featurable-description": "Carousel summary bar container (if enabled)",
                            "data-featurable-group": "carousel layout",
                            children: (0, e.jsx)(Pi, {
                                uuid: r,
                                averageRating: o.rating,
                                totalReviewCount: o.reviewsCount,
                                profileUrl: o.writeAReviewUri,
                                config: a
                            })
                        }), (0, e.jsxs)("div", {
                            className: qr("max-w-7xl mx-auto relative", O() ? "px-7" : "px-12", "carousel"),
                            ref: u,
                            "data-featurable-classname": ".carousel",
                            "data-featurable-description": "Carousel container",
                            "data-featurable-group": "carousel layout",
                            children: [!z && (0, e.jsx)("div", {
                                className: "flex items-center justify-center py-8 opacity-50",
                                children: (0, e.jsx)("div", {
                                    className: "animate-pulse bg-gray-200 rounded-lg h-48 w-full max-w-md"
                                })
                            }), z && (0, e.jsxs)(e.Fragment, {
                                children: [(0, e.jsx)("button", {
                                    onClick: function(e) {
                                        var t;
                                        e.preventDefault(), e.stopPropagation(), null === (t = null == s ? void 0 : s.current) || void 0 === t || t.slickPrev()
                                    },
                                    className: qr("z-10 absolute h-10 w-10 rounded-full flex items-center justify-center shadow hover:shadow-md transition-all border border-solid cursor-pointer", "light" === a.color_scheme ? "bg-white text-gray-500 hover:bg-gray-100 border-gray-200" : "bg-gray-900 text-gray-400 hover:bg-gray-700 border-gray-800", "carousel__btn", "carousel__btn--left", "light" === a.color_scheme ? "carousel__btn--light" : "carousel__btn--dark"),
                                    style: {
                                        top: C() + "px",
                                        left: 0
                                    },
                                    "data-featurable-classname": ".carousel__btn|.carousel__btn--left|.carousel__btn--light|.carousel__btn--dark",
                                    "data-featurable-description": "Carousel left button|Carousel light theme button|Carousel dark theme button",
                                    "data-featurable-group": "carousel layout",
                                    children: (0, e.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: qr("w-6 h-6", "carousel__btn-icon"),
                                        "data-featurable-classname": ".carousel__btn-icon",
                                        "data-featurable-description": "Carousel button SVG icon",
                                        "data-featurable-group": "carousel layout",
                                        children: (0, e.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15.75 19.5 8.25 12l7.5-7.5"
                                        })
                                    })
                                }), (0, e.jsx)("button", {
                                    onClick: function(e) {
                                        var t;
                                        e.preventDefault(), e.stopPropagation(), null === (t = null == s ? void 0 : s.current) || void 0 === t || t.slickNext()
                                    },
                                    className: qr("z-10 absolute h-10 w-10 rounded-full flex items-center justify-center shadow hover:shadow-md transition-all border border-solid cursor-pointer", "light" === a.color_scheme ? "bg-white text-gray-500 hover:bg-gray-100 border-gray-200" : "bg-gray-900 text-gray-400 hover:bg-gray-700 border-gray-800", "carousel__btn", "carousel__btn--right", "light" === a.color_scheme ? "carousel__btn--light" : "carousel__btn--dark"),
                                    style: {
                                        top: C() + "px",
                                        right: 0
                                    },
                                    "data-featurable-classname": ".carousel__btn|.carousel__btn--right|.carousel__btn--light|.carousel__btn--dark",
                                    "data-featurable-description": "Carousel right button|Carousel light theme button|Carousel dark theme button",
                                    "data-featurable-group": "carousel layout",
                                    children: (0, e.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: qr("w-6 h-6", "carousel__btn-icon"),
                                        "data-featurable-classname": ".carousel__btn-icon",
                                        "data-featurable-description": "Carousel button SVG icon",
                                        "data-featurable-group": "carousel layout",
                                        children: (0, e.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "m8.25 4.5 7.5 7.5-7.5 7.5"
                                        })
                                    })
                                }), (0, e.jsx)(Kr.A, {
                                    dots: !1,
                                    infinite: !0,
                                    speed: 500,
                                    slidesToShow: w().slidesToShow,
                                    slidesToScroll: w().slidesToScroll,
                                    initialSlide: w().initialSlide || 0,
                                    className: "slick-align-start",
                                    ref: s,
                                    autoplay: d,
                                    autoplaySpeed: f,
                                    arrows: !1,
                                    children: c.map(function(t) {
                                        return (0, e.jsx)(Ei, {
                                            containerWidth: b,
                                            review: t,
                                            config: a
                                        }, t.id)
                                    })
                                }, "".concat(d, "-").concat(f, "-").concat(v)), l && (0, e.jsx)("div", {
                                    className: qr("flex items-center justify-center mt-4"),
                                    children: (0, e.jsx)(pi, {
                                        theme: a.color_scheme,
                                        widgetId: r,
                                        inline: !0
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            },
            Ei = function(t) {
                var n = t.containerWidth,
                    r = t.review,
                    a = t.config,
                    i = (r.title, Math.max(n, 320)),
                    o = function() {
                        return i < 640
                    };
                return (0, e.jsx)("div", {
                    className: qr(o() ? "py-2 px-0" : "p-2", "carousel__card", o() && "carousel__card--mobile"),
                    "data-featurable-classname": ".carousel__card|.carousel__card--mobile",
                    "data-featurable-description": "Review card container|Mobile review card container",
                    "data-featurable-group": "carousel layout",
                    children: (0, e.jsx)(Oi, {
                        review: r,
                        config: a
                    })
                }, r.id)
            },
            Oi = function(t) {
                var n = t.review,
                    r = t.config,
                    a = t.size,
                    i = void 0 === a ? "md" : a,
                    o = di(r.language).t,
                    l = (0, Nr.useState)(!1),
                    s = l[0],
                    u = l[1],
                    c = (0, Nr.useMemo)(function() {
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
                    d = (0, Nr.useMemo)(function() {
                        return c.length > r.max_characters
                    }, [c, r.max_characters]),
                    f = (0, Nr.useMemo)(function() {
                        return s ? c : function(e, t) {
                            if (e.length <= t) return e;
                            var n = e.slice(0, t),
                                r = n.lastIndexOf(" ");
                            return -1 !== r && (n = n.slice(0, r)), (n = n.replace(/[^a-zA-Z0-9]+$/, "")).length < e.length && (n += "..."), n
                        }(c, r.max_characters)
                    }, [s, c, r.max_characters, d]);
                return (0, e.jsxs)("div", {
                    className: qr("max-w-prose mx-auto w-full min-w-[200px] border border-solid shadow-md rounded-lg flex flex-col justify-between transition-all text-left", "sm" === i && "p-2", "md" === i && "p-3", "lg" === i && "p-4", "xl" === i && "p-3 px-5", "light" === r.color_scheme && "border-gray-200 bg-white", "dark" === r.color_scheme && "border-gray-700 bg-gray-900", "review", "sm" === i && "review--sm", "md" === i && "review--md", "lg" === i && "review--lg", "xl" === i && "review--xl", "light" === r.color_scheme && "review--light", "dark" === r.color_scheme && "review--dark"),
                    "data-featurable-classname": ".review|.review--sm|.review--md|.review--lg|.review--xl|.review--light|.review--dark",
                    "data-featurable-description": "Main review card container|Small review card|Medium review card|Large review card|Extra large review card|Light theme review card|Dark theme review card",
                    "data-featurable-group": "review card",
                    children: [(0, e.jsxs)("div", {
                        className: qr("review__header"),
                        "data-featurable-classname": ".review__header",
                        "data-featurable-description": "Review card header",
                        "data-featurable-group": "review card",
                        children: [(0, e.jsx)(Ci, {
                            review: n,
                            nameDisplay: r.name_display,
                            dateDisplay: r.date_display,
                            size: i,
                            colorScheme: r.color_scheme,
                            languageCode: r.language,
                            showProfilePictures: r.show_profile_pictures
                        }), (0, e.jsxs)("div", {
                            className: qr("mt-4"),
                            "data-featurable-classname": ".review__body-container--card|.review__body-container--testimonial--sm|.review__body-container--testimonial--md|.review__body-container--testimonial--lg|.review__body-container--testimonial--xl",
                            "data-featurable-description": "Card-style review body container|Small testimonial-style review body container|Medium testimonial-style review body container|Large testimonial-style review body container|Extra large testimonial-style review body container",
                            "data-featurable-group": "review card",
                            children: [(0, e.jsx)("p", {
                                className: qr("text-base", "light" === r.color_scheme && "text-gray-950", "dark" === r.color_scheme && "text-white", "sm" === i && "review__text--sm", "md" === i && "review__text--md", "lg" === i && "review__text--lg", "xl" === i && "review__text--xl", "light" === r.color_scheme && "review__text--light", "dark" === r.color_scheme && "review__text--dark"),
                                "data-review-comment": !0,
                                "data-review-id": n.id,
                                "data-featurable-classname": ".review__text--sm|.review__text--md|.review__text--lg|.review__text--xl|.review__text--light|.review__text--dark",
                                "data-featurable-description": "Review body text|Small review body text|Medium review body text|Large review body text|Extra large review body text|Light theme review body text|Dark theme review body text",
                                "data-featurable-group": "review card",
                                children: f
                            }), d && (0, e.jsx)("button", {
                                onClick: function(e) {
                                    e.preventDefault(), e.stopPropagation(), u(!s)
                                },
                                className: qr("mt-1 inline-block hover:underline border-0 bg-transparent cursor-pointer", "sm" === i && "text-sm leading-5 lg:text-base lg:leading-6", "md" === i && "text-sm leading-5 lg:text-base lg:leading-6", "lg" === i && "text-base leading-6 lg:text-lg lg:leading-7", "xl" === i && "text-base leading-6 lg:text-lg lg:leading-7", "light" === r.color_scheme && "text-gray-500", "dark" === r.color_scheme && "text-gray-400", "review__read-more", "sm" === i && "review__read-more--sm", "md" === i && "review__read-more--md", "lg" === i && "review__read-more--lg", "xl" === i && "review__read-more--xl", "light" === r.color_scheme && "review__read-more--light", "dark" === r.color_scheme && "review__read-more--dark"),
                                "data-featurable-classname": ".review__read-more--sm|.review__read-more--md|.review__read-more--lg|.review__read-more--xl|.review__read-more--light|.review__read-more--dark",
                                "data-featurable-description": "Read more button|Small read more button|Medium read more button|Large read more button|Extra large read more button|Light theme read more button|Dark theme read more button",
                                "data-featurable-group": "review card",
                                children: o(s ? "review_card.read_less" : "review_card.read_more")
                            })]
                        })]
                    }), (0, e.jsxs)("div", {
                        className: qr("flex items-center justify-between", "md" === i && "mt-4", "lg" === i && "mt-6", "xl" === i && "mt-8", "review__footer", "md" === i && "review__footer--md", "lg" === i && "review__footer--lg", "xl" === i && "review__footer--xl"),
                        "data-featurable-classname": ".review__footer|.review__footer--md|.review__footer--lg|.review__footer--xl",
                        "data-featurable-description": "Review card footer|Medium review card footer|Large review card footer|Extra large review card footer",
                        "data-featurable-group": "review card",
                        children: [n.rating && (0, e.jsx)(bi, {
                            rating: n.rating.value,
                            size: i
                        }), (0, e.jsx)(gi, {
                            className: qr("h-8 w-8", ".review__google-icon"),
                            "data-featurable-classname": ".review__google-icon",
                            "data-featurable-description": "Google icon",
                            "data-featurable-group": "review card"
                        })]
                    })]
                })
            },
            Ci = function(t) {
                var n, r, a, i, o, l, s, u = t.review,
                    c = t.nameDisplay,
                    d = t.dateDisplay,
                    f = t.size,
                    p = t.colorScheme,
                    h = void 0 === p ? "light" : p,
                    m = t.languageCode,
                    g = void 0 === m ? "en" : m,
                    v = t.showProfilePictures,
                    y = void 0 === v || v,
                    b = (0, Nr.useState)(!1),
                    w = b[0],
                    _ = b[1],
                    k = di(g).t;
                return (0, Nr.useEffect)(function() {
                    u.author && u.author.name && u.author.avatarUrl && y || _(!0)
                }, [u.author, null === (n = u.author) || void 0 === n ? void 0 : n.name, null === (r = u.author) || void 0 === r ? void 0 : r.avatarUrl, y]), (0, e.jsxs)("div", {
                    className: qr("flex items-center space-x-2", "review__reviewer"),
                    "data-featurable-classname": ".review__reviewer",
                    "data-featurable-description": "Main container for reviewer information",
                    "data-featurable-group": "review card",
                    children: [(0, e.jsxs)("div", {
                        className: qr("rounded-full relative", "sm" === f && "h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]", "md" === f && "h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]", "lg" === f && "h-12 w-12 min-h-[3rem] min-w-[3rem]", "xl" === f && "h-12 w-12 min-h-[3rem] min-w-[3rem]", "review__reviewer-container", "sm" === f && "review__reviewer-container--sm", "md" === f && "review__reviewer-container--md", "lg" === f && "review__reviewer-container--lg", "xl" === f && "review__reviewer-container--xl"),
                        "data-featurable-classname": ".review__reviewer-container--sm|.review__reviewer-container--md|.review__reviewer-container--lg|.review__reviewer-container--xl",
                        "data-featurable-description": "Reviewer container|Small reviewer container|Medium reviewer container|Large reviewer container|Extra large reviewer container",
                        "data-featurable-group": "review card",
                        children: [(0, e.jsx)("img", {
                            src: null !== (i = null === (a = u.author) || void 0 === a ? void 0 : a.avatarUrl) && void 0 !== i ? i : "",
                            onError: function(e) {
                                _(!0)
                            },
                            className: qr("rounded-full", "sm" === f && "h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]", "md" === f && "h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]", "lg" === f && "h-12 w-12 min-h-[3rem] min-w-[3rem]", "xl" === f && "h-12 w-12 min-h-[3rem] min-w-[3rem]", "review__reviewer-img", "sm" === f && "review__reviewer-img--sm", "md" === f && "review__reviewer-img--md", "lg" === f && "review__reviewer-img--lg", "xl" === f && "review__reviewer-img--xl"),
                            "data-featurable-classname": ".review__reviewer-img--sm|.review__reviewer-img--md|.review__reviewer-img--lg|.review__reviewer-img--xl",
                            "data-featurable-description": "Reviewer profile image|Small reviewer profile image|Medium reviewer profile image|Large reviewer profile image|Extra large reviewer profile image",
                            "data-featurable-group": "review card"
                        }), w && (0, e.jsx)("div", {
                            className: qr("rounded-full flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 font-medium text-white", "sm" === f && "text-xl leading-7", "md" === f && "text-xl leading-7", "lg" === f && "text-2xl leading-8", "xl" === f && "text-2xl leading-8"),
                            style: {
                                backgroundColor: Gr((null === (o = u.author) || void 0 === o ? void 0 : o.name) ? u.author.name[0].toLowerCase() : "a")
                            },
                            children: (null === (l = u.author) || void 0 === l ? void 0 : l.name) ? u.author.name[0].toUpperCase() : "A"
                        })]
                    }), (0, e.jsxs)("div", {
                        className: qr("review__reviewer-info"),
                        "data-featurable-classname": ".review__reviewer-info",
                        "data-featurable-description": "Reviewer information container",
                        "data-featurable-group": "review card",
                        children: [(0, e.jsx)("p", {
                            className: qr("font-bold", "sm" === f && "text-sm leading-5", "md" === f && "text-sm leading-5", "lg" === f && "text-base leading-6", "xl" === f && "text-base leading-6", "light" === h && "text-gray-950", "dark" === h && "text-white", "review__reviewer-name", "sm" === f && "review__reviewer-name--sm", "md" === f && "review__reviewer-name--md", "lg" === f && "review__reviewer-name--lg", "xl" === f && "review__reviewer-name--xl", "light" === h && "review__reviewer-name--light", "dark" === h && "review__reviewer-name--dark"),
                            "data-featurable-classname": ".review__reviewer-name--sm|.review__reviewer-name--md|.review__reviewer-name--lg|.review__reviewer-name--xl|.review__reviewer-name--light|.review__reviewer-name--dark",
                            "data-featurable-description": "Reviewer name|Small reviewer name|Medium reviewer name|Large reviewer name|Extra large reviewer name|Light theme reviewer name|Dark theme reviewer name",
                            "data-featurable-group": "review card",
                            children: (null === (s = u.author) || void 0 === s ? void 0 : s.name) ? _i(u.author.name, c) : "Anonymous"
                        }), "absolute" === d && (0, e.jsx)("p", {
                            className: qr("sm" === f && "text-sm leading-5", "md" === f && "text-sm leading-5", "lg" === f && "mt-1 text-base leading-6", "xl" === f && "mt-1 text-base leading-6", "light" === h && "text-gray-500", "dark" === h && "text-gray-400", "sm" === f && "review__date--sm", "md" === f && "review__date--md", "lg" === f && "review__date--lg", "xl" === f && "review__date--xl", "light" === h && "review__date--light", "dark" === h && "review__date--dark"),
                            "data-featurable-classname": ".review__date--sm|.review__date--md|.review__date--lg|.review__date--xl|.review__date--light|.review__date--dark",
                            "data-featurable-description": "Reviewer date|Small reviewer date|Medium reviewer date|Large reviewer date|Extra large reviewer date|Light theme reviewer date|Dark theme reviewer date",
                            "data-featurable-group": "review card",
                            children: new Date(u.publishedAt).toLocaleDateString(g, {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                        }), "relative" === d && (0, e.jsx)("p", {
                            className: qr("sm" === f && "text-sm leading-5", "md" === f && "text-sm leading-5", "lg" === f && "mt-1 text-base leading-6", "xl" === f && "mt-1 text-base leading-6", "light" === h && "text-gray-500", "dark" === h && "text-gray-400", "sm" === f && "review__date--sm", "md" === f && "review__date--md", "lg" === f && "review__date--lg", "xl" === f && "review__date--xl", "light" === h && "review__date--light", "dark" === h && "review__date--dark"),
                            "data-featurable-classname": ".review__date--sm|.review__date--md|.review__date--lg|.review__date--xl|.review__date--light|.review__date--dark",
                            "data-featurable-description": "Reviewer date|Small reviewer date|Medium reviewer date|Large reviewer date|Extra large reviewer date|Light theme reviewer date|Dark theme reviewer date",
                            "data-featurable-group": "review card",
                            children: ki(new Date(u.publishedAt), k)
                        })]
                    })]
                })
            },
            Pi = function(t) {
                var n = t.config,
                    r = t.averageRating,
                    a = t.totalReviewCount,
                    i = t.profileUrl,
                    o = t.uuid,
                    l = di(n.language).t,
                    s = l("summary_bar.excellent");
                r < 1 ? s = l("summary_bar.poor") : r < 2 ? s = l("summary_bar.fair") : r < 3 ? s = l("summary_bar.good") : r < 4 ? s = l("summary_bar.great") : r < 5 && (s = l("summary_bar.excellent"));
                var u = wi(),
                    c = u[0],
                    d = u[1],
                    f = Math.max(c, 320),
                    p = function() {
                        return f < 560
                    },
                    h = function() {
                        return f < 768 && f >= 560
                    };
                return (0, e.jsx)("div", {
                    ref: d,
                    children: (0, e.jsxs)("div", {
                        className: qr("border border-solid rounded-lg shadow flex relative min-w-[320px]", p() && "p-4 flex-col items-start space-y-3", h() && "py-3 px-4 flex-row items-center justify-between", !p() && !h() && "py-3 px-6 flex-row items-center justify-between", "light" === n.color_scheme ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700", "summary-bar", "light" === n.color_scheme ? "summary-bar--light" : "summary-bar--dark"),
                        "data-featurable-classname": ".summary-bar",
                        "data-featurable-description": "Summary bar container",
                        "data-featurable-group": "summary bar",
                        children: [(0, e.jsxs)("div", {
                            className: qr("flex", p() ? "flex-col items-start space-y-3 w-full" : "items-center", "summary-bar__container"),
                            "data-featurable-classname": ".summary-bar__container",
                            "data-featurable-description": "Summary bar main container",
                            "data-featurable-group": "summary bar",
                            children: [(0, e.jsxs)("div", {
                                className: qr("flex flex-col items-start ", "summary-bar__main"),
                                "data-featurable-classname": ".summary-bar__main",
                                "data-featurable-description": "Summary bar main inner container",
                                "data-featurable-group": "summary bar",
                                children: [(0, e.jsx)("div", {
                                    className: qr("text-xl font-bold no-underline", "light" === n.color_scheme ? "text-gray-950" : "text-white", "summary-bar__label", "light" === n.color_scheme ? "summary-bar__label--light" : "summary-bar__label--dark"),
                                    "data-featurable-classname": ".summary-bar__label|.summary-bar__label--light|.summary-bar__label--dark",
                                    "data-featurable-description": "Summary bar label|Light summary bar label|Dark summary bar label",
                                    "data-featurable-group": "summary bar",
                                    children: s
                                }), (0, e.jsxs)("div", {
                                    className: qr("flex items-center space-x-2", "summary-bar__rating-container"),
                                    "data-featurable-classname": ".summary-bar__rating-container",
                                    "data-featurable-description": "Summary bar rating container",
                                    "data-featurable-group": "summary bar",
                                    children: [(0, e.jsx)(Yr, {
                                        rating: r,
                                        className: "h-6"
                                    }), (0, e.jsx)("span", {
                                        className: qr("mt-[2px] font-bold text-base no-underline", "light" === n.color_scheme ? "text-gray-950" : "text-white", "summary-bar__rating", "light" === n.color_scheme ? "summary-bar__rating--light" : "summary-bar__rating--dark"),
                                        "data-featurable-classname": ".summary-bar__rating|.summary-bar__rating--light|.summary-bar__rating--dark",
                                        "data-featurable-description": "Summary bar rating|Light theme summary bar rating|Dark theme summary bar rating",
                                        "data-featurable-group": "summary bar",
                                        children: r.toFixed(1)
                                    })]
                                })]
                            }), (0, e.jsxs)("div", {
                                className: qr("flex items-start", p() ? "flex-col space-y-2 w-full" : "flex-col-reverse pl-4", "summary-bar__info"),
                                "data-featurable-classname": ".summary-bar__info",
                                "data-featurable-description": "Summary bar info container",
                                "data-featurable-group": "summary bar",
                                children: [(0, e.jsxs)("div", {
                                    className: qr("text-xs no-underline border-0 outline-0 shadow-none font-normal", p() ? "mt-0" : "mt-1 whitespace-nowrap", "light" === n.color_scheme ? "text-gray-500" : "text-gray-400", "summary-bar__sublabel", "light" === n.color_scheme ? "summary-bar__sublabel--light" : "summary-bar__sublabel--dark"),
                                    "data-featurable-classname": ".summary-bar__sublabel|.summary-bar__sublabel--light|.summary-bar__sublabel--dark",
                                    "data-featurable-description": "Summary bar sublabel|Light theme summary bar sublabel|Dark theme summary bar sublabel",
                                    "data-featurable-group": "summary bar",
                                    children: [l("summary_bar.based_on"), " ", (0, e.jsxs)("a", {
                                        href: i ? xi(i, o) : void 0,
                                        target: "_blank",
                                        rel: "nofollow noopener noreferrer",
                                        className: qr("font-bold underline", "summary-bar__profile-link"),
                                        "data-featurable-classname": ".summary-bar__profile-link",
                                        "data-featurable-description": "Summary bar profile link",
                                        "data-featurable-group": "summary bar",
                                        children: [a.toLocaleString(), " ", l("summary_bar.reviews")]
                                    })]
                                }), (0, e.jsxs)("div", {
                                    className: qr("flex", p() ? "mt-0 flex-row items-center space-x-2" : "mt-1 flex-row items-center space-x-2", "summary-bar__logo-container"),
                                    "data-featurable-classname": ".summary-bar__logo-container",
                                    "data-featurable-description": "Summary bar logo container",
                                    "data-featurable-group": "summary bar",
                                    children: [(0, e.jsx)("div", {
                                        className: qr("summary-bar__logo"),
                                        "data-featurable-classname": ".summary-bar__logo",
                                        "data-featurable-description": "Summary bar logo",
                                        "data-featurable-group": "summary bar",
                                        children: (0, e.jsx)(yi, {
                                            className: qr("h-6", "summary-bar__logo-svg"),
                                            "data-featurable-classname": ".summary-bar__logo-svg",
                                            "data-featurable-description": "Summary bar logo svg",
                                            "data-featurable-group": "summary bar"
                                        })
                                    }), (0, e.jsx)("span", {
                                        className: qr("text-base font-normal mb-[2px]", "light" === n.color_scheme ? "text-gray-950" : "text-white", "summary-bar__logo-label", "light" === n.color_scheme ? "summary-bar__logo-label--light" : "summary-bar__logo-label--dark"),
                                        "data-featurable-classname": ".summary-bar__logo-label|.summary-bar__logo-label--light|.summary-bar__logo-label--dark",
                                        "data-featurable-description": "Summary bar logo label|Light theme summary bar logo label|Dark theme summary bar logo label",
                                        "data-featurable-group": "summary bar",
                                        children: l("summary_bar.rating")
                                    })]
                                })]
                            })]
                        }), (0, e.jsx)("div", {
                            className: qr(p() && "mt-0 flex items-center justify-start w-full", "summary-bar__btn-container"),
                            style: {
                                display: n.summary_review_button ? "flex" : "none"
                            },
                            "data-featurable-classname": ".summary-bar__btn-container",
                            "data-featurable-description": "Summary bar button container",
                            "data-featurable-group": "summary bar",
                            children: (0, e.jsx)("a", {
                                href: i ? xi(i, o) : void 0,
                                target: "_blank",
                                rel: "nofollow noopener noreferrer",
                                className: qr("no-underline bg-blue-600 hover:bg-blue-700 transition-all text-white py-2 px-3 text-base rounded-md whitespace-nowrap", "summary-bar__btn"),
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
            ji = o(4775),
            Ni = o.n(ji),
            Li = function(t, n) {
                if (!zr(n)) throw new Error("Invalid config");
                var r = Er.createRoot(t),
                    a = [Br(), jr(), Cr(), Ni()].map(function(e) {
                        return e.toString()
                    }).join("\n");
                r.render((0, e.jsxs)("div", {
                    id: "featurable-".concat(n.uuid),
                    children: [(0, e.jsx)("style", {
                        children: a
                    }), (0, e.jsx)(zi, {
                        widgetData: n
                    })]
                }))
            };
        new Vr(Li, "carousel_default").initialize();
        const Ti = Li
    })(), l
})());
