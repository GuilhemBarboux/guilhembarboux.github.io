;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [979],
  {
    4441: function (e) {
      !(function () {
        function t(e, t) {
          document.addEventListener
            ? e.addEventListener("scroll", t, !1)
            : e.attachEvent("scroll", t)
        }
        function n(e) {
          ;(this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(e)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c)
        }
        function i(e, t) {
          e.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            t +
            ";"
        }
        function o(e) {
          var t = e.a.offsetWidth,
            n = t + 100
          return (
            (e.f.style.width = n + "px"),
            (e.c.scrollLeft = n),
            (e.b.scrollLeft = e.b.scrollWidth + 100),
            e.g !== t && ((e.g = t), !0)
          )
        }
        function s(e, n) {
          function i() {
            var e = s
            o(e) && e.a.parentNode && n(e.g)
          }
          var s = e
          t(e.b, i), t(e.c, i), o(e)
        }
        function a(e, t) {
          var n = t || {}
          ;(this.family = e),
            (this.style = n.style || "normal"),
            (this.weight = n.weight || "normal"),
            (this.stretch = n.stretch || "normal")
        }
        var r = null,
          d = null,
          c = null,
          l = null
        function u() {
          return null === l && (l = !!document.fonts), l
        }
        function h() {
          if (null === c) {
            var e = document.createElement("div")
            try {
              e.style.font = "condensed 100px sans-serif"
            } catch (t) {}
            c = "" !== e.style.font
          }
          return c
        }
        function f(e, t) {
          return [e.style, e.weight, h() ? e.stretch : "", "100px", t].join(" ")
        }
        ;(a.prototype.load = function (e, t) {
          var o = this,
            a = e || "BESbswy",
            c = 0,
            l = t || 3e3,
            h = new Date().getTime()
          return new Promise(function (e, t) {
            if (
              u() &&
              !(function () {
                if (null === d)
                  if (u() && /Apple/.test(window.navigator.vendor)) {
                    var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                      window.navigator.userAgent
                    )
                    d = !!e && 603 > parseInt(e[1], 10)
                  } else d = !1
                return d
              })()
            ) {
              var p = new Promise(function (e, t) {
                  !(function n() {
                    new Date().getTime() - h >= l
                      ? t(Error(l + "ms timeout exceeded"))
                      : document.fonts
                          .load(f(o, '"' + o.family + '"'), a)
                          .then(function (t) {
                            1 <= t.length ? e() : setTimeout(n, 25)
                          }, t)
                  })()
                }),
                m = new Promise(function (e, t) {
                  c = setTimeout(function () {
                    t(Error(l + "ms timeout exceeded"))
                  }, l)
                })
              Promise.race([m, p]).then(function () {
                clearTimeout(c), e(o)
              }, t)
            } else
              !(function (e) {
                document.body
                  ? e()
                  : document.addEventListener
                  ? document.addEventListener("DOMContentLoaded", function t() {
                      document.removeEventListener("DOMContentLoaded", t), e()
                    })
                  : document.attachEvent("onreadystatechange", function t() {
                      ;("interactive" != document.readyState &&
                        "complete" != document.readyState) ||
                        (document.detachEvent("onreadystatechange", t), e())
                    })
              })(function () {
                function d() {
                  var t
                  ;(t =
                    (-1 != w && -1 != v) ||
                    (-1 != w && -1 != y) ||
                    (-1 != v && -1 != y)) &&
                    ((t = w != v && w != y && v != y) ||
                      (null === r &&
                        ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          window.navigator.userAgent
                        )),
                        (r =
                          !!t &&
                          (536 > parseInt(t[1], 10) ||
                            (536 === parseInt(t[1], 10) &&
                              11 >= parseInt(t[2], 10))))),
                      (t =
                        r &&
                        ((w == x && v == x && y == x) ||
                          (w == b && v == b && y == b) ||
                          (w == g && v == g && y == g)))),
                    (t = !t)),
                    t &&
                      (E.parentNode && E.parentNode.removeChild(E),
                      clearTimeout(c),
                      e(o))
                }
                var u = new n(a),
                  p = new n(a),
                  m = new n(a),
                  w = -1,
                  v = -1,
                  y = -1,
                  x = -1,
                  b = -1,
                  g = -1,
                  E = document.createElement("div")
                ;(E.dir = "ltr"),
                  i(u, f(o, "sans-serif")),
                  i(p, f(o, "serif")),
                  i(m, f(o, "monospace")),
                  E.appendChild(u.a),
                  E.appendChild(p.a),
                  E.appendChild(m.a),
                  document.body.appendChild(E),
                  (x = u.a.offsetWidth),
                  (b = p.a.offsetWidth),
                  (g = m.a.offsetWidth),
                  (function e() {
                    if (new Date().getTime() - h >= l)
                      E.parentNode && E.parentNode.removeChild(E),
                        t(Error(l + "ms timeout exceeded"))
                    else {
                      var n = document.hidden
                      ;(!0 !== n && void 0 !== n) ||
                        ((w = u.a.offsetWidth),
                        (v = p.a.offsetWidth),
                        (y = m.a.offsetWidth),
                        d()),
                        (c = setTimeout(e, 50))
                    }
                  })(),
                  s(u, function (e) {
                    ;(w = e), d()
                  }),
                  i(u, f(o, '"' + o.family + '",sans-serif')),
                  s(p, function (e) {
                    ;(v = e), d()
                  }),
                  i(p, f(o, '"' + o.family + '",serif')),
                  s(m, function (e) {
                    ;(y = e), d()
                  }),
                  i(m, f(o, '"' + o.family + '",monospace'))
              })
          })
        }),
          (e.exports = a)
      })()
    },
    8988: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          default: function () {
            return c
          },
        })
      var i = n(2137),
        o = n(7757),
        s = n.n(o),
        a = n(4441),
        r = n.n(a),
        d = {}
      function c(e, t) {
        return l.apply(this, arguments)
      }
      function l() {
        return (l = (0, i.Z)(
          s().mark(function e(t, n) {
            return s().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      d[t] || (d[t] = new (r())(t, n)),
                      e.abrupt("return", d[t].load())
                    )
                  case 2:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
    },
  },
])
//# sourceMappingURL=fonts-20d439309c8879baae5e.js.map
