!function (t) {
    "function" == typeof define && define.amd ? define(t) : t()
}((function () {
    "use strict";

    function t(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
    }

    function e(t, e) {
        if (e.length < t) throw new TypeError(t + " argument" + t > 1 ? "s" : " required, but only " + e.length + " present")
    }

    function a(t) {
        e(1, arguments);
        var a = Object.prototype.toString.call(t);
        return t instanceof Date || "object" == typeof t && "[object Date]" === a ? new Date(t.getTime()) : "number" == typeof t || "[object Number]" === a ? new Date(t) : ("string" != typeof t && "[object String]" !== a || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
    }

    function r(r, n) {
        e(2, arguments);
        var i = a(r).getTime(), o = t(n);
        return new Date(i + o)
    }

    function n(t) {
        var e = new Date(t.getTime()), a = Math.ceil(e.getTimezoneOffset());
        return e.setSeconds(0, 0), 6e4 * a + e.getTime() % 6e4
    }

    function i(t) {
        e(1, arguments);
        var r = a(t);
        return !isNaN(r)
    }

    var o = {
        lessThanXSeconds: {one: "less than a second", other: "less than {{count}} seconds"},
        xSeconds: {one: "1 second", other: "{{count}} seconds"},
        halfAMinute: "half a minute",
        lessThanXMinutes: {one: "less than a minute", other: "less than {{count}} minutes"},
        xMinutes: {one: "1 minute", other: "{{count}} minutes"},
        aboutXHours: {one: "about 1 hour", other: "about {{count}} hours"},
        xHours: {one: "1 hour", other: "{{count}} hours"},
        xDays: {one: "1 day", other: "{{count}} days"},
        aboutXMonths: {one: "about 1 month", other: "about {{count}} months"},
        xMonths: {one: "1 month", other: "{{count}} months"},
        aboutXYears: {one: "about 1 year", other: "about {{count}} years"},
        xYears: {one: "1 year", other: "{{count}} years"},
        overXYears: {one: "over 1 year", other: "over {{count}} years"},
        almostXYears: {one: "almost 1 year", other: "almost {{count}} years"}
    };

    function s(t) {
        return function (e) {
            var a = e || {}, r = a.width ? String(a.width) : t.defaultWidth;
            return t.formats[r] || t.formats[t.defaultWidth]
        }
    }

    var u = {
        date: s({
            formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"},
            defaultWidth: "full"
        }),
        time: s({
            formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"},
            defaultWidth: "full"
        }),
        dateTime: s({
            formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}"
            }, defaultWidth: "full"
        })
    }, l = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    };

    function d(t) {
        return function (e, a) {
            var r, n = a || {};
            if ("formatting" === (n.context ? String(n.context) : "standalone") && t.formattingValues) {
                var i = t.defaultFormattingWidth || t.defaultWidth, o = n.width ? String(n.width) : i;
                r = t.formattingValues[o] || t.formattingValues[i]
            } else {
                var s = t.defaultWidth, u = n.width ? String(n.width) : t.defaultWidth;
                r = t.values[u] || t.values[s]
            }
            return r[t.argumentCallback ? t.argumentCallback(e) : e]
        }
    }

    function c(t) {
        return function (e, a) {
            var r = String(e), n = a || {}, i = n.width,
                o = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth], s = r.match(o);
            if (!s) return null;
            var u, l = s[0], d = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth];
            return u = "[object Array]" === Object.prototype.toString.call(d) ? function (t, e) {
                for (var a = 0; a < t.length; a++) if (e(t[a])) return a
            }(d, (function (t) {
                return t.test(r)
            })) : function (t, e) {
                for (var a in t) if (t.hasOwnProperty(a) && e(t[a])) return a
            }(d, (function (t) {
                return t.test(r)
            })), u = t.valueCallback ? t.valueCallback(u) : u, {
                value: u = n.valueCallback ? n.valueCallback(u) : u,
                rest: r.slice(l.length)
            }
        }
    }

    var h, m = {
        code: "en-US", formatDistance: function (t, e, a) {
            var r;
            return a = a || {}, r = "string" == typeof o[t] ? o[t] : 1 === e ? o[t].one : o[t].other.replace("{{count}}", e), a.addSuffix ? a.comparison > 0 ? "in " + r : r + " ago" : r
        }, formatLong: u, formatRelative: function (t, e, a, r) {
            return l[t]
        }, localize: {
            ordinalNumber: function (t, e) {
                var a = Number(t), r = a % 100;
                if (r > 20 || r < 10) switch (r % 10) {
                    case 1:
                        return a + "st";
                    case 2:
                        return a + "nd";
                    case 3:
                        return a + "rd"
                }
                return a + "th"
            },
            era: d({
                values: {narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"]},
                defaultWidth: "wide"
            }),
            quarter: d({
                values: {
                    narrow: ["1", "2", "3", "4"],
                    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                }, defaultWidth: "wide", argumentCallback: function (t) {
                    return Number(t) - 1
                }
            }),
            month: d({
                values: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                }, defaultWidth: "wide"
            }),
            day: d({
                values: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                }, defaultWidth: "wide"
            }),
            dayPeriod: d({
                values: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    }
                },
                defaultWidth: "wide",
                formattingValues: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    }
                },
                defaultFormattingWidth: "wide"
            })
        }, match: {
            ordinalNumber: (h = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (t) {
                    return parseInt(t, 10)
                }
            }, function (t, e) {
                var a = String(t), r = e || {}, n = a.match(h.matchPattern);
                if (!n) return null;
                var i = n[0], o = a.match(h.parsePattern);
                if (!o) return null;
                var s = h.valueCallback ? h.valueCallback(o[0]) : o[0];
                return {value: s = r.valueCallback ? r.valueCallback(s) : s, rest: a.slice(i.length)}
            }),
            era: c({
                matchPatterns: {
                    narrow: /^(b|a)/i,
                    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                    wide: /^(before christ|before common era|anno domini|common era)/i
                }, defaultMatchWidth: "wide", parsePatterns: {any: [/^b/i, /^(a|c)/i]}, defaultParseWidth: "any"
            }),
            quarter: c({
                matchPatterns: {
                    narrow: /^[1234]/i,
                    abbreviated: /^q[1234]/i,
                    wide: /^[1234](th|st|nd|rd)? quarter/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]},
                defaultParseWidth: "any",
                valueCallback: function (t) {
                    return t + 1
                }
            }),
            month: c({
                matchPatterns: {
                    narrow: /^[jfmasond]/i,
                    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                },
                defaultParseWidth: "any"
            }),
            day: c({
                matchPatterns: {
                    narrow: /^[smtwf]/i,
                    short: /^(su|mo|tu|we|th|fr|sa)/i,
                    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                },
                defaultParseWidth: "any"
            }),
            dayPeriod: c({
                matchPatterns: {
                    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                },
                defaultMatchWidth: "any",
                parsePatterns: {
                    any: {
                        am: /^a/i,
                        pm: /^p/i,
                        midnight: /^mi/i,
                        noon: /^no/i,
                        morning: /morning/i,
                        afternoon: /afternoon/i,
                        evening: /evening/i,
                        night: /night/i
                    }
                },
                defaultParseWidth: "any"
            })
        }, options: {weekStartsOn: 0, firstWeekContainsDate: 1}
    };

    function g(a, n) {
        e(2, arguments);
        var i = t(n);
        return r(a, -i)
    }

    function f(t, e) {
        for (var a = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e;) r = "0" + r;
        return a + r
    }

    var p = function (t, e) {
        var a = t.getUTCFullYear(), r = a > 0 ? a : 1 - a;
        return f("yy" === e ? r % 100 : r, e.length)
    }, w = function (t, e) {
        var a = t.getUTCMonth();
        return "M" === e ? String(a + 1) : f(a + 1, 2)
    }, y = function (t, e) {
        return f(t.getUTCDate(), e.length)
    }, v = function (t, e) {
        return f(t.getUTCHours() % 12 || 12, e.length)
    }, b = function (t, e) {
        return f(t.getUTCHours(), e.length)
    }, T = function (t, e) {
        return f(t.getUTCMinutes(), e.length)
    }, M = function (t, e) {
        return f(t.getUTCSeconds(), e.length)
    }, P = function (t, e) {
        var a = e.length, r = t.getUTCMilliseconds();
        return f(Math.floor(r * Math.pow(10, a - 3)), e.length)
    };

    function D(t) {
        e(1, arguments);
        var r = 1, n = a(t), i = n.getUTCDay(), o = (i < r ? 7 : 0) + i - r;
        return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n
    }

    function S(t) {
        e(1, arguments);
        var r = a(t), n = r.getUTCFullYear(), i = new Date(0);
        i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
        var o = D(i), s = new Date(0);
        s.setUTCFullYear(n, 0, 4), s.setUTCHours(0, 0, 0, 0);
        var u = D(s);
        return r.getTime() >= o.getTime() ? n + 1 : r.getTime() >= u.getTime() ? n : n - 1
    }

    function C(t) {
        e(1, arguments);
        var a = S(t), r = new Date(0);
        r.setUTCFullYear(a, 0, 4), r.setUTCHours(0, 0, 0, 0);
        var n = D(r);
        return n
    }

    function x(r, n) {
        e(1, arguments);
        var i = n || {}, o = i.locale, s = o && o.options && o.options.weekStartsOn, u = null == s ? 0 : t(s),
            l = null == i.weekStartsOn ? u : t(i.weekStartsOn);
        if (!(l >= 0 && l <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var d = a(r), c = d.getUTCDay(), h = (c < l ? 7 : 0) + c - l;
        return d.setUTCDate(d.getUTCDate() - h), d.setUTCHours(0, 0, 0, 0), d
    }

    function A(r, n) {
        e(1, arguments);
        var i = a(r, n), o = i.getUTCFullYear(), s = n || {}, u = s.locale,
            l = u && u.options && u.options.firstWeekContainsDate, d = null == l ? 1 : t(l),
            c = null == s.firstWeekContainsDate ? d : t(s.firstWeekContainsDate);
        if (!(c >= 1 && c <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var h = new Date(0);
        h.setUTCFullYear(o + 1, 0, c), h.setUTCHours(0, 0, 0, 0);
        var m = x(h, n), g = new Date(0);
        g.setUTCFullYear(o, 0, c), g.setUTCHours(0, 0, 0, 0);
        var f = x(g, n);
        return i.getTime() >= m.getTime() ? o + 1 : i.getTime() >= f.getTime() ? o : o - 1
    }

    function k(a, r) {
        e(1, arguments);
        var n = r || {}, i = n.locale, o = i && i.options && i.options.firstWeekContainsDate, s = null == o ? 1 : t(o),
            u = null == n.firstWeekContainsDate ? s : t(n.firstWeekContainsDate), l = A(a, r), d = new Date(0);
        d.setUTCFullYear(l, 0, u), d.setUTCHours(0, 0, 0, 0);
        var c = x(d, r);
        return c
    }

    var E = "midnight", q = "noon", L = "morning", W = "afternoon", U = "evening", N = "night", I = {
        G: function (t, e, a) {
            var r = t.getUTCFullYear() > 0 ? 1 : 0;
            switch (e) {
                case"G":
                case"GG":
                case"GGG":
                    return a.era(r, {width: "abbreviated"});
                case"GGGGG":
                    return a.era(r, {width: "narrow"});
                case"GGGG":
                default:
                    return a.era(r, {width: "wide"})
            }
        }, y: function (t, e, a) {
            if ("yo" === e) {
                var r = t.getUTCFullYear(), n = r > 0 ? r : 1 - r;
                return a.ordinalNumber(n, {unit: "year"})
            }
            return p(t, e)
        }, Y: function (t, e, a, r) {
            var n = A(t, r), i = n > 0 ? n : 1 - n;
            return "YY" === e ? f(i % 100, 2) : "Yo" === e ? a.ordinalNumber(i, {unit: "year"}) : f(i, e.length)
        }, R: function (t, e) {
            return f(S(t), e.length)
        }, u: function (t, e) {
            return f(t.getUTCFullYear(), e.length)
        }, Q: function (t, e, a) {
            var r = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
                case"Q":
                    return String(r);
                case"QQ":
                    return f(r, 2);
                case"Qo":
                    return a.ordinalNumber(r, {unit: "quarter"});
                case"QQQ":
                    return a.quarter(r, {width: "abbreviated", context: "formatting"});
                case"QQQQQ":
                    return a.quarter(r, {width: "narrow", context: "formatting"});
                case"QQQQ":
                default:
                    return a.quarter(r, {width: "wide", context: "formatting"})
            }
        }, q: function (t, e, a) {
            var r = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
                case"q":
                    return String(r);
                case"qq":
                    return f(r, 2);
                case"qo":
                    return a.ordinalNumber(r, {unit: "quarter"});
                case"qqq":
                    return a.quarter(r, {width: "abbreviated", context: "standalone"});
                case"qqqqq":
                    return a.quarter(r, {width: "narrow", context: "standalone"});
                case"qqqq":
                default:
                    return a.quarter(r, {width: "wide", context: "standalone"})
            }
        }, M: function (t, e, a) {
            var r = t.getUTCMonth();
            switch (e) {
                case"M":
                case"MM":
                    return w(t, e);
                case"Mo":
                    return a.ordinalNumber(r + 1, {unit: "month"});
                case"MMM":
                    return a.month(r, {width: "abbreviated", context: "formatting"});
                case"MMMMM":
                    return a.month(r, {width: "narrow", context: "formatting"});
                case"MMMM":
                default:
                    return a.month(r, {width: "wide", context: "formatting"})
            }
        }, L: function (t, e, a) {
            var r = t.getUTCMonth();
            switch (e) {
                case"L":
                    return String(r + 1);
                case"LL":
                    return f(r + 1, 2);
                case"Lo":
                    return a.ordinalNumber(r + 1, {unit: "month"});
                case"LLL":
                    return a.month(r, {width: "abbreviated", context: "standalone"});
                case"LLLLL":
                    return a.month(r, {width: "narrow", context: "standalone"});
                case"LLLL":
                default:
                    return a.month(r, {width: "wide", context: "standalone"})
            }
        }, w: function (t, r, n, i) {
            var o = function (t, r) {
                e(1, arguments);
                var n = a(t), i = x(n, r).getTime() - k(n, r).getTime();
                return Math.round(i / 6048e5) + 1
            }(t, i);
            return "wo" === r ? n.ordinalNumber(o, {unit: "week"}) : f(o, r.length)
        }, I: function (t, r, n) {
            var i = function (t) {
                e(1, arguments);
                var r = a(t), n = D(r).getTime() - C(r).getTime();
                return Math.round(n / 6048e5) + 1
            }(t);
            return "Io" === r ? n.ordinalNumber(i, {unit: "week"}) : f(i, r.length)
        }, d: function (t, e, a) {
            return "do" === e ? a.ordinalNumber(t.getUTCDate(), {unit: "date"}) : y(t, e)
        }, D: function (t, r, n) {
            var i = function (t) {
                e(1, arguments);
                var r = a(t), n = r.getTime();
                r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
                var i = r.getTime(), o = n - i;
                return Math.floor(o / 864e5) + 1
            }(t);
            return "Do" === r ? n.ordinalNumber(i, {unit: "dayOfYear"}) : f(i, r.length)
        }, E: function (t, e, a) {
            var r = t.getUTCDay();
            switch (e) {
                case"E":
                case"EE":
                case"EEE":
                    return a.day(r, {width: "abbreviated", context: "formatting"});
                case"EEEEE":
                    return a.day(r, {width: "narrow", context: "formatting"});
                case"EEEEEE":
                    return a.day(r, {width: "short", context: "formatting"});
                case"EEEE":
                default:
                    return a.day(r, {width: "wide", context: "formatting"})
            }
        }, e: function (t, e, a, r) {
            var n = t.getUTCDay(), i = (n - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case"e":
                    return String(i);
                case"ee":
                    return f(i, 2);
                case"eo":
                    return a.ordinalNumber(i, {unit: "day"});
                case"eee":
                    return a.day(n, {width: "abbreviated", context: "formatting"});
                case"eeeee":
                    return a.day(n, {width: "narrow", context: "formatting"});
                case"eeeeee":
                    return a.day(n, {width: "short", context: "formatting"});
                case"eeee":
                default:
                    return a.day(n, {width: "wide", context: "formatting"})
            }
        }, c: function (t, e, a, r) {
            var n = t.getUTCDay(), i = (n - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case"c":
                    return String(i);
                case"cc":
                    return f(i, e.length);
                case"co":
                    return a.ordinalNumber(i, {unit: "day"});
                case"ccc":
                    return a.day(n, {width: "abbreviated", context: "standalone"});
                case"ccccc":
                    return a.day(n, {width: "narrow", context: "standalone"});
                case"cccccc":
                    return a.day(n, {width: "short", context: "standalone"});
                case"cccc":
                default:
                    return a.day(n, {width: "wide", context: "standalone"})
            }
        }, i: function (t, e, a) {
            var r = t.getUTCDay(), n = 0 === r ? 7 : r;
            switch (e) {
                case"i":
                    return String(n);
                case"ii":
                    return f(n, e.length);
                case"io":
                    return a.ordinalNumber(n, {unit: "day"});
                case"iii":
                    return a.day(r, {width: "abbreviated", context: "formatting"});
                case"iiiii":
                    return a.day(r, {width: "narrow", context: "formatting"});
                case"iiiiii":
                    return a.day(r, {width: "short", context: "formatting"});
                case"iiii":
                default:
                    return a.day(r, {width: "wide", context: "formatting"})
            }
        }, a: function (t, e, a) {
            var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
                case"a":
                case"aa":
                case"aaa":
                    return a.dayPeriod(r, {width: "abbreviated", context: "formatting"});
                case"aaaaa":
                    return a.dayPeriod(r, {width: "narrow", context: "formatting"});
                case"aaaa":
                default:
                    return a.dayPeriod(r, {width: "wide", context: "formatting"})
            }
        }, b: function (t, e, a) {
            var r, n = t.getUTCHours();
            switch (r = 12 === n ? q : 0 === n ? E : n / 12 >= 1 ? "pm" : "am", e) {
                case"b":
                case"bb":
                case"bbb":
                    return a.dayPeriod(r, {width: "abbreviated", context: "formatting"});
                case"bbbbb":
                    return a.dayPeriod(r, {width: "narrow", context: "formatting"});
                case"bbbb":
                default:
                    return a.dayPeriod(r, {width: "wide", context: "formatting"})
            }
        }, B: function (t, e, a) {
            var r, n = t.getUTCHours();
            switch (r = n >= 17 ? U : n >= 12 ? W : n >= 4 ? L : N, e) {
                case"B":
                case"BB":
                case"BBB":
                    return a.dayPeriod(r, {width: "abbreviated", context: "formatting"});
                case"BBBBB":
                    return a.dayPeriod(r, {width: "narrow", context: "formatting"});
                case"BBBB":
                default:
                    return a.dayPeriod(r, {width: "wide", context: "formatting"})
            }
        }, h: function (t, e, a) {
            if ("ho" === e) {
                var r = t.getUTCHours() % 12;
                return 0 === r && (r = 12), a.ordinalNumber(r, {unit: "hour"})
            }
            return v(t, e)
        }, H: function (t, e, a) {
            return "Ho" === e ? a.ordinalNumber(t.getUTCHours(), {unit: "hour"}) : b(t, e)
        }, K: function (t, e, a) {
            var r = t.getUTCHours() % 12;
            return "Ko" === e ? a.ordinalNumber(r, {unit: "hour"}) : f(r, e.length)
        }, k: function (t, e, a) {
            var r = t.getUTCHours();
            return 0 === r && (r = 24), "ko" === e ? a.ordinalNumber(r, {unit: "hour"}) : f(r, e.length)
        }, m: function (t, e, a) {
            return "mo" === e ? a.ordinalNumber(t.getUTCMinutes(), {unit: "minute"}) : T(t, e)
        }, s: function (t, e, a) {
            return "so" === e ? a.ordinalNumber(t.getUTCSeconds(), {unit: "second"}) : M(t, e)
        }, S: function (t, e) {
            return P(t, e)
        }, X: function (t, e, a, r) {
            var n = (r._originalDate || t).getTimezoneOffset();
            if (0 === n) return "Z";
            switch (e) {
                case"X":
                    return Y(n);
                case"XXXX":
                case"XX":
                    return H(n);
                case"XXXXX":
                case"XXX":
                default:
                    return H(n, ":")
            }
        }, x: function (t, e, a, r) {
            var n = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
                case"x":
                    return Y(n);
                case"xxxx":
                case"xx":
                    return H(n);
                case"xxxxx":
                case"xxx":
                default:
                    return H(n, ":")
            }
        }, O: function (t, e, a, r) {
            var n = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
                case"O":
                case"OO":
                case"OOO":
                    return "GMT" + O(n, ":");
                case"OOOO":
                default:
                    return "GMT" + H(n, ":")
            }
        }, z: function (t, e, a, r) {
            var n = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
                case"z":
                case"zz":
                case"zzz":
                    return "GMT" + O(n, ":");
                case"zzzz":
                default:
                    return "GMT" + H(n, ":")
            }
        }, t: function (t, e, a, r) {
            var n = r._originalDate || t;
            return f(Math.floor(n.getTime() / 1e3), e.length)
        }, T: function (t, e, a, r) {
            return f((r._originalDate || t).getTime(), e.length)
        }
    };

    function O(t, e) {
        var a = t > 0 ? "-" : "+", r = Math.abs(t), n = Math.floor(r / 60), i = r % 60;
        if (0 === i) return a + String(n);
        var o = e || "";
        return a + String(n) + o + f(i, 2)
    }

    function Y(t, e) {
        return t % 60 == 0 ? (t > 0 ? "-" : "+") + f(Math.abs(t) / 60, 2) : H(t, e)
    }

    function H(t, e) {
        var a = e || "", r = t > 0 ? "-" : "+", n = Math.abs(t);
        return r + f(Math.floor(n / 60), 2) + a + f(n % 60, 2)
    }

    function F(t, e) {
        switch (t) {
            case"P":
                return e.date({width: "short"});
            case"PP":
                return e.date({width: "medium"});
            case"PPP":
                return e.date({width: "long"});
            case"PPPP":
            default:
                return e.date({width: "full"})
        }
    }

    function _(t, e) {
        switch (t) {
            case"p":
                return e.time({width: "short"});
            case"pp":
                return e.time({width: "medium"});
            case"ppp":
                return e.time({width: "long"});
            case"pppp":
            default:
                return e.time({width: "full"})
        }
    }

    var j = {
        p: _, P: function (t, e) {
            var a, r = t.match(/(P+)(p+)?/), n = r[1], i = r[2];
            if (!i) return F(t, e);
            switch (n) {
                case"P":
                    a = e.dateTime({width: "short"});
                    break;
                case"PP":
                    a = e.dateTime({width: "medium"});
                    break;
                case"PPP":
                    a = e.dateTime({width: "long"});
                    break;
                case"PPPP":
                default:
                    a = e.dateTime({width: "full"})
            }
            return a.replace("{{date}}", F(n, e)).replace("{{time}}", _(i, e))
        }
    }, z = ["D", "DD"], $ = ["YY", "YYYY"];

    function G(t) {
        return -1 !== z.indexOf(t)
    }

    function X(t) {
        return -1 !== $.indexOf(t)
    }

    function B(t) {
        if ("YYYY" === t) throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");
        if ("YY" === t) throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");
        if ("D" === t) throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");
        if ("DD" === t) throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")
    }

    var Q = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, V = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        R = /^'([^]*?)'?$/, J = /''/g, K = /[a-zA-Z]/;

    function Z(r, o, s) {
        e(2, arguments);
        var u = String(o), l = s || {}, d = l.locale || m, c = d.options && d.options.firstWeekContainsDate,
            h = null == c ? 1 : t(c), f = null == l.firstWeekContainsDate ? h : t(l.firstWeekContainsDate);
        if (!(f >= 1 && f <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var p = d.options && d.options.weekStartsOn, w = null == p ? 0 : t(p),
            y = null == l.weekStartsOn ? w : t(l.weekStartsOn);
        if (!(y >= 0 && y <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if (!d.localize) throw new RangeError("locale must contain localize property");
        if (!d.formatLong) throw new RangeError("locale must contain formatLong property");
        var v = a(r);
        if (!i(v)) throw new RangeError("Invalid time value");
        var b = n(v), T = g(v, b), M = {firstWeekContainsDate: f, weekStartsOn: y, locale: d, _originalDate: v},
            P = u.match(V).map((function (t) {
                var e = t[0];
                return "p" === e || "P" === e ? (0, j[e])(t, d.formatLong, M) : t
            })).join("").match(Q).map((function (t) {
                if ("''" === t) return "'";
                var e = t[0];
                if ("'" === e) return tt(t);
                var a = I[e];
                if (a) return !l.useAdditionalWeekYearTokens && X(t) && B(t), !l.useAdditionalDayOfYearTokens && G(t) && B(t), a(T, t, d.localize, M);
                if (e.match(K)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
                return t
            })).join("");
        return P
    }

    function tt(t) {
        return t.match(R)[1].replace(J, "'")
    }

    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0

      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.

      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */
    function et(t, e, a, r) {
        return new (a || (a = Promise))((function (n, i) {
            function o(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                t.done ? n(t.value) : new a((function (e) {
                    e(t.value)
                })).then(o, s)
            }

            u((r = r.apply(t, e || [])).next())
        }))
    }

    const at = t => et(void 0, void 0, void 0, (function* () {
        let e;
        e = "string" == typeof t ? t : `https://graph.instagram.com/me/media?fields=caption,media_type,media_url,permalink,thumbnail_url,timestamp,children.media_url,children.media_type&access_token=${t.accessToken}&limit=100`;
        const a = yield fetch(e);
        if (!a.ok) throw new Error("HTTP Error");
        const r = yield a.json();
        if (r.error) throw new Error(r.error);
        return r
    }));

    class rt {
        constructor(t) {
            var e, a, r, n;
            this.feed = t, this.cacheDuration = 3e5, this.restartInteractionsAfterDisplay = !1, this.instagramDate = null, this.currentShowsPosts = 0, this.accessToken = this.feed.getAttribute("udesly-instagram-feed") || "", this.feedLimit = Number(this.feed.getAttribute("limit")) || 100, this.feed.getAttribute("restart-iteraction") && "true" == this.feed.getAttribute("restart-iteraction") && (this.restartInteractionsAfterDisplay = !0), this.loadMore = this.feed.querySelector('[instagram="load-more"]'), this.instagramPostImage = (null === (e = this.feed.querySelector('[instagram="post"]')) || void 0 === e ? void 0 : e.cloneNode(!0)) || null, this.instagramPostImage && (this.generatePostImage = this.parseTemplatePostImage(this.instagramPostImage)), this.instagramPostCarousel = (null === (a = this.feed.querySelector('[instagram="post-carousel"]')) || void 0 === a ? void 0 : a.cloneNode(!0)) || null, this.instagramPostCarousel && (this.generatePostCarousel = this.parseTemplatePostCarousel(this.instagramPostCarousel)), this.instagramPostVideo = (null === (r = this.feed.querySelector('[instagram="post-video"]')) || void 0 === r ? void 0 : r.cloneNode(!0)) || null, this.instagramPostVideo && (this.generatePostVideo = this.parseTemplatePostVideo(this.instagramPostVideo)), this.instagramPostWrapper = null === (n = this.feed.querySelector('[instagram="post"]')) || void 0 === n ? void 0 : n.parentElement, this.instagramPostImage && this.instagramPostWrapper ? (this.instagramPostWrapper.innerHTML = "", this.instagramPostWrapper.addEventListener("click", t => {
                if (t.target) if (t.target.matches('[data-player="video"]')) {
                    const e = t.target.closest(".instagram-post");
                    if (e) {
                        const a = e.querySelector("video");
                        (null == a ? void 0 : a.paused) ? (a.play(), t.target.classList.remove("paused")) : (null == a || a.pause(), t.target.classList.add("paused")), a && (a.onended = () => {
                            t.target.classList.add("paused")
                        })
                    }
                } else if (t.target.matches('[data-player="video-carousel"]')) {
                    const e = t.target.closest(".w-slide");
                    if (e) {
                        const a = e.querySelector("video");
                        (null == a ? void 0 : a.paused) ? (a.play(), t.target.classList.remove("paused")) : (null == a || a.pause(), t.target.classList.add("paused")), a && (a.onended = () => {
                            t.target.classList.add("paused")
                        })
                    }
                }
            }), this.init()) : this.instagramPostImage ? console.error("Insert single post template inside wrapper element") : console.error("Insert single post template")
        }

        init() {
            var t;
            return et(this, void 0, void 0, (function* () {
                this.instagramDate = yield this.loadPosts(), this.instagramDate && (this.getNextPosts(), null === (t = this.loadMore) || void 0 === t || t.addEventListener("click", t => {
                    t.preventDefault(), t.target.classList.replace("loaded", "loading"), this.getNextPosts()
                }))
            }))
        }

        loadPosts() {
            return et(this, void 0, void 0, (function* () {
                let t = null;
                if ((Number(localStorage.getItem("udesly-instagram-feed-time")) || 0) > Date.now()) t = JSON.parse(localStorage.getItem("udesly-instagram-feed")), console.log("Instagram posts loaded from cache!!!"); else try {
                    const e = this.accessToken.startsWith("/") ? this.accessToken : {accessToken: this.accessToken};
                    t = yield at(e), localStorage.setItem("udesly-instagram-feed", JSON.stringify(t)), localStorage.setItem("udesly-instagram-feed-time", String(Date.now() + this.cacheDuration))
                } catch (t) {
                    this.instagramPostWrapper && (this.instagramPostWrapper.innerHTML = "<p class='error-message'>Failed to fetch Instagram data, please disable any blocker</p>"), console.error(t)
                }
                return t
            }))
        }

        generateMediaTemplate(t) {
            switch (t.media_type) {
                case"IMAGE":
                    if (this.generatePostImage) return this.generatePostImage(t);
                    break;
                case"VIDEO":
                    if (this.generatePostVideo) return this.generatePostVideo(t);
                    break;
                case"CAROUSEL_ALBUM":
                    if (this.generatePostCarousel) return this.generatePostCarousel(t)
            }
            return ""
        }

        getNextPosts() {
            var t;
            if (this.instagramDate && this.instagramDate.data.length < this.feedLimit) {
                const t = this.instagramDate.data.reduce((t, e) => t + this.generateMediaTemplate(e), "");
                if (this.instagramPostWrapper) {
                    const e = document.createElement("template");
                    e.innerHTML = t.replace(/data-src/gm, "src").replace(/data-poster/gm, "poster").replace(/data-style/gm, "style"), this.instagramPostWrapper.append(e.content)
                }
            } else {
                if (this.instagramDate && this.currentShowsPosts < (null === (t = this.instagramDate) || void 0 === t ? void 0 : t.data.length)) {
                    const t = this.instagramDate.data.slice(this.currentShowsPosts, this.currentShowsPosts + this.feedLimit).reduce((t, e) => t + this.generateMediaTemplate(e), "");
                    if (this.instagramPostWrapper) {
                        const e = document.createElement("template");
                        e.innerHTML = t.replace(/data-src/gm, "src").replace(/data-poster/gm, "poster").replace(/data-style/gm, "style"), this.instagramPostWrapper.append(e.content)
                    }
                    this.currentShowsPosts += this.feedLimit
                }
                this.instagramDate && this.currentShowsPosts >= this.instagramDate.data.length - this.feedLimit && this.loadMorePosts(), window.Webflow.require("slider").redraw(), this.restartInteractionsAfterDisplay && this.restartInteractions(), this.feed.classList.replace("loading", "loaded"), this.feed.querySelectorAll(".loading").forEach(t => t.classList.replace("loading", "loaded")), this.feed.querySelectorAll("[hidden]").forEach(t => t.removeAttribute("hidden"))
            }
        }

        loadMorePosts() {
            return et(this, void 0, void 0, (function* () {
                if (this.instagramDate && this.currentShowsPosts <= this.instagramDate.data.length && this.instagramDate.paging.next) try {
                    const t = yield at(this.instagramDate.paging.next);
                    this.instagramDate.data.push(...t.data), t.paging.next ? this.instagramDate.paging.next = t.paging.next : this.instagramDate.paging.next = void 0, localStorage.setItem("udesly-instagram-feed", JSON.stringify(this.instagramDate))
                } catch (t) {
                    console.error(t)
                } else this.loadMore && (this.loadMore.style.visibility = "hidden")
            }))
        }

        parseTitle(t) {
            t.removeAttribute("instagram");
            const e = t.hasAttribute("limit") ? Number(t.getAttribute("limit")) : 0,
                a = t.hasAttribute("remove-tags") ? `, ${t.getAttribute("remove-tags")}` : ", false";
            t.innerText = `\${_udyRemoveTags(item.caption || '', '${t.getAttribute("more") || "..."}'${a},${e})}`
        }

        parseDate(t) {
            t.removeAttribute("instagram");
            const e = t.getAttribute("format") || "MM/dd/yyyy";
            t.innerText = `\${_udyFormatDate(item.timestamp, '${e}')}`
        }

        parseLink(t) {
            t.removeAttribute("instagram"), t.setAttribute("href", "${item.permalink || '#'}")
        }

        parseTags(t) {
            t.setAttribute("href", "${tag.href || '#'}");
            const e = t.hasAttribute("limit") ? Number(t.getAttribute("limit")) : 0;
            t.innerText = "${tag.text || ''}", t.outerHTML = `\${_udyGetHashtags(item.caption || '', ${e}).map( function(tag) { return \`${t.outerHTML}\`; }).join('')}`
        }

        parseImage(t) {
            t.removeAttribute("instagram"), "IMG" == t.tagName ? (t.setAttribute("data-src", "${item.media_url}"), t.removeAttribute("src"), t.removeAttribute("srcset"), t.removeAttribute("sizes")) : t.setAttribute("data-style", "background-image: url(${item.media_url})")
        }

        parseSlide(t) {
            t.querySelectorAll(".w-slide").forEach((t, e) => {
                e > 0 && t.remove();
                const a = t.cloneNode(!0);
                t.setAttribute("data-style", "background-image: url(${child.media_url})"), t.removeAttribute("style");
                const r = document.createElement("video");
                r.classList.add("instagram-carousel-video"), r.style.width = "100%", r.style.height = "100%", r.style.position = "absolute", r.style.left = "50%", r.style.top = "0", r.style.transform = "translateX(-50%)", r.style.zIndex = "-1", r.style.objectFit = "contain", r.setAttribute("data-src", "${child.media_url || ''}"), r.setAttribute("data-poster", "${child.thumbnail_url || ''}"), a.append(r), a.setAttribute("data-video", "carousel"), t.after(a), t.querySelectorAll('[instagram="video-play-button"]').forEach(t => t.remove()), a.querySelectorAll('[instagram="video-play-button"]').forEach(t => {
                    t.dataset.player = "video-carousel", t.classList.add("paused")
                }), window._udySlideImage = new Function("child", "return `" + t.outerHTML + "`"), t.replaceWith('if (child.media_type == "IMAGE") { return _udySlideImage(child); }'), window._udySlideVideo = new Function("child", "return `" + a.outerHTML + "`"), a.replaceWith('if (child.media_type == "VIDEO") { return _udySlideVideo(child); }')
            })
        }

        parseVideo(t) {
            const e = document.createElement("video");
            e.style.width = "100%", e.style.height = "100%", e.style.objectFit = "contain", e.setAttribute("data-src", "${item.media_url || ''}"), e.setAttribute("data-poster", "${item.thumbnail_url || ''}"), t.append(e)
        }

        parseTemplatePostImage(t) {
            return t.classList.add("animation-start"), t.querySelectorAll('[instagram="title"]').forEach(t => this.parseTitle(t)), "title" == t.getAttribute("instagram") && this.parseTitle(t), t.querySelectorAll('[instagram="date"]').forEach(t => this.parseDate(t)), "date" == t.getAttribute("instagram") && this.parseDate(t), t.querySelectorAll('[instagram="link"]').forEach(t => this.parseLink(t)), "link" === t.getAttribute("instagram") && this.parseLink(t), t.querySelectorAll('[instagram="tag"]').forEach(t => this.parseTags(t)), t.querySelectorAll('[instagram="image"]').forEach(t => this.parseImage(t)), "image" === t.getAttribute("instagram") && this.parseImage(t), new Function("item", "return `" + t.outerHTML + "`")
        }

        parseTemplatePostVideo(t) {
            return t.classList.add("animation-start"), t.classList.add("instagram-post"), t.querySelectorAll('[instagram="video-play-button"]').forEach(t => {
                t.dataset.player = "video", t.classList.add("paused")
            }), t.querySelectorAll('[instagram="title"]').forEach(t => this.parseTitle(t)), "title" == t.getAttribute("instagram") && this.parseTitle(t), t.querySelectorAll('[instagram="date"]').forEach(t => this.parseDate(t)), "date" == t.getAttribute("instagram") && this.parseDate(t), t.querySelectorAll('[instagram="link"]').forEach(t => this.parseLink(t)), "link" === t.getAttribute("instagram") && this.parseLink(t), t.querySelectorAll('[instagram="tag"]').forEach(t => this.parseTags(t)), t.querySelectorAll('[instagram="video-wrapper"]').forEach(t => this.parseVideo(t)), "video-wrapper" === t.getAttribute("instagram") && this.parseVideo(t), new Function("item", "return `" + t.outerHTML + "`")
        }

        parseTemplatePostCarousel(t) {
            return t.classList.add("animation-start"), t.classList.add("instagram-post"), t.querySelectorAll('[instagram="title"]').forEach(t => this.parseTitle(t)), "title" == t.getAttribute("instagram") && this.parseTitle(t), t.querySelectorAll('[instagram="date"]').forEach(t => this.parseDate(t)), "date" == t.getAttribute("instagram") && this.parseDate(t), t.querySelectorAll('[instagram="link"]').forEach(t => this.parseLink(t)), "link" === t.getAttribute("instagram") && this.parseLink(t), t.querySelectorAll('[instagram="tag"]').forEach(t => this.parseTags(t)), t.querySelectorAll(".w-slider-mask").forEach(t => {
                this.parseSlide(t), t.innerHTML = `\${item.children.data.map(function(child) {${t.innerHTML}})}`
            }), new Function("item", "return `" + t.outerHTML + "`")
        }

        restartInteractions() {
            if (this.restartInteractionsAfterDisplay && window.Webflow) {
                const t = window.Webflow.require("ix2");
                t && t.init();
                const e = window.Webflow.require("lottie");
                e && e.init()
            }
        }
    }

    window.requestIdleCallback ? window.requestIdleCallback(() => {
        console.log('Udesly Instagram Feed - Version "2.0.4"')
    }) : console.log('Udesly Instagram Feed - Version "2.0.4"'), window._udyFormatDate = function (t, e) {
        let a;
        if ("string" == typeof t) try {
            a = new Date(t.split("+")[0])
        } catch (t) {
            a = new Date
        } else a = t;
        e && "" != e || (e = "MM/dd/yyyy");
        try {
            return Z(a, e)
        } catch (t) {
            return Z(new Date, "MM/dd/yyyy")
        }
    }, window._udyRemoveTags = function (t, e, a, r) {
        if (!t) return "";
        if (r > 0 && (t = t.split(" ").slice(0, r).join(" ") + e), a) {
            const e = t.match(/\B\#\w\w+\b/g) || [];
            null == e || e.forEach(e => {
                t = t.replace(e, "")
            })
        }
        return t
    }, window._udyGetHashtags = function (t, e) {
        if (!t) return [];
        const a = [];
        let r = t.match(/\B\#\w\w+\b/g);
        return r && (e > 0 && (r = r.slice(0, e)), r.forEach(t => {
            a.push({href: `https://www.instagram.com/explore/tags/${t.replace("#", "")}/`, text: t})
        })), a
    }, document.querySelectorAll("[udesly-instagram-feed]").forEach(t => {
        new rt(t)
    })
}));