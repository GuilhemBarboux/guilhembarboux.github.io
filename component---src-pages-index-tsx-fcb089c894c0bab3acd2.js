;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [691],
  {
    7449: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          default: function () {
            return h
          },
        })
      var a = n(7294),
        i = n(9246),
        r = n(5414),
        l = function (e) {
          var t = e.url,
            n = e.type,
            i = e.title,
            l = e.desc,
            o = e.image,
            m = e.locale
          return a.createElement(
            r.q,
            null,
            a.createElement("meta", { property: "og:locale", content: m }),
            a.createElement("meta", { property: "og:url", content: t }),
            a.createElement("meta", { property: "og:type", content: n }),
            a.createElement("meta", { property: "og:title", content: i }),
            a.createElement("meta", { property: "og:description", content: l }),
            a.createElement("meta", { property: "og:image", content: o }),
            a.createElement("meta", { property: "og:image:alt", content: l })
          )
        },
        o = function (e) {
          var t = e.type,
            n = void 0 === t ? "summary_large_image" : t,
            i = e.username,
            l = e.title,
            o = e.desc,
            m = e.image
          return a.createElement(
            r.q,
            null,
            i &&
              a.createElement("meta", { name: "twitter:creator", content: i }),
            a.createElement("meta", { name: "twitter:card", content: n }),
            a.createElement("meta", { name: "twitter:title", content: l }),
            a.createElement("meta", {
              name: "twitter:description",
              content: o,
            }),
            a.createElement("meta", { name: "twitter:image", content: m }),
            a.createElement("meta", { name: "twitter:image:alt", content: o })
          )
        },
        m = function (e) {
          var t = e.title,
            n = e.titleTemplate,
            i = e.titleSeparator,
            m = e.description,
            c = e.pathname,
            s = e.article,
            p = void 0 !== s && s,
            d = e.image,
            u = e.siteLanguage,
            g = e.siteLocale,
            h = e.twitterUsername,
            y = e.author,
            b = void 0 === y ? "J Doe." : y,
            f = e.datePublished,
            x = e.dateModified,
            w = {
              title: t.slice(0, 70),
              description: m.slice(0, 160),
              datePublished: f ? null : new Date(Date.now()).toISOString(),
              dateModified: x ? null : new Date(Date.now()).toISOString(),
            },
            E = new Date().getFullYear(),
            k = {
              "@context": "http://schema.org",
              "@type": "WebPage",
              url: c,
              headline: w.description,
              inLanguage: u,
              mainEntityOfPage: c,
              description: w.description,
              name: w.title,
              author: { "@type": "Person", name: b },
              copyrightHolder: { "@type": "Person", name: b },
              copyrightYear: E,
              creator: { "@type": "Person", name: b },
              publisher: { "@type": "Person", name: b },
              datePublished: w.datePublished,
              dateModified: w.dateModified,
              image: { "@type": "ImageObject", url: "" + d },
            },
            v = [
              {
                "@type": "ListItem",
                item: { "@id": c, name: "Homepage" },
                position: 1,
              },
            ],
            P = null
          p &&
            ((P = {
              "@context": "http://schema.org",
              "@type": "Article",
              author: { "@type": "Person", name: b },
              copyrightHolder: { "@type": "Person", name: b },
              copyrightYear: E,
              creator: { "@type": "Person", name: b },
              publisher: {
                "@type": "Organization",
                name: b,
                logo: { "@type": "ImageObject", url: "" + d },
              },
              datePublished: w.datePublished,
              dateModified: w.dateModified,
              description: w.description,
              headline: w.title,
              inLanguage: u,
              url: c,
              name: w.title,
              image: { "@type": "ImageObject", url: d },
              mainEntityOfPage: c,
            }),
            v.push({
              "@type": "ListItem",
              item: { "@id": c, name: w.title },
              position: 2,
            }))
          var Z = {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            description: "Breadcrumbs list",
            name: "Breadcrumbs",
            itemListElement: v,
          }
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              r.q,
              { title: w.title, titleTemplate: "%s " + (i || "·") + " " + n },
              a.createElement("html", { lang: u || "en" }),
              a.createElement("link", { rel: "canonical", href: c }),
              a.createElement("meta", {
                name: "description",
                content: w.description,
              }),
              !p &&
                a.createElement(
                  "script",
                  { type: "application/ld+json" },
                  JSON.stringify(k)
                ),
              p &&
                a.createElement(
                  "script",
                  { type: "application/ld+json" },
                  JSON.stringify(P)
                ),
              a.createElement(
                "script",
                { type: "application/ld+json" },
                JSON.stringify(Z)
              )
            ),
            d &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(l, {
                  desc: w.description,
                  image: d,
                  title: w.title,
                  type: p ? "article" : "website",
                  url: c,
                  locale: g || "en_gb",
                }),
                a.createElement(o, {
                  title: w.title,
                  image: d,
                  desc: w.description,
                  username: h,
                })
              )
          )
        },
        c = n(7611)
      var s = (0, i.Z)("div", { target: "e1qu5ftk2" })({
          name: "xdx11y",
          styles:
            "height:90vh;display:flex;align-items:center;justify-content:center;flex-direction:column",
        }),
        p = (0, i.Z)("h1", { target: "e1qu5ftk1" })(
          "font-family:",
          function (e) {
            return e.theme.fonts.header
          },
          ";text-transform:uppercase;color:white;font-size:120px;margin-bottom:0.2em;margin-top:0;background:#de6161;background:-webkit-linear-gradient(\n    to right,\n    #de6161,\n    #2657eb\n  );background:linear-gradient(\n    to right,\n    #de6161,\n    #2657eb\n  );-webkit-background-clip:text;-webkit-text-fill-color:transparent;max-width:300px;@media (min-width: 768px){max-width:none;}"
        ),
        d = (0, i.Z)("nav", { target: "e1qu5ftk0" })({
          name: "glipdv",
          styles:
            "display:flex;text-transform:uppercase;flex-direction:row;align-items:center;justify-content:center;color:white;span{display:none;}a,a:focus{color:white;font-size:14px;margin:0 15px;padding:5px;text-decoration:none;transition:all 450ms ease-out;&:hover{letter-spacing:3px;}}@media (min-width: 768px){a{font-size:18px;}span{display:inline;}}",
        }),
        u = function (e) {
          e.data
          return (0, c.tZ)(
            s,
            null,
            (0, c.tZ)(m, {
              title: "Freelance",
              titleSeparator: "-",
              description:
                "Guiilhem Barboux - développeur freenlance, diplomé de Gobelins Paris, qui travaille actuellement sur du Web, 3D et du jeu vidéo",
              image: "images/bg.png",
              pathname: "https//guix.dev",
              siteLanguage: "en",
              siteLocale: "en",
              twitterUsername: "@guix_b",
              titleTemplate: "Guilhem Barboux",
            }),
            (0, c.tZ)(p, null, "Guix dev"),
            (0, c.tZ)(
              d,
              null,
              (0, c.tZ)(
                "a",
                {
                  target: "_blank",
                  href: "https://www.linkedin.com/in/guilhembarboux/",
                },
                "Linkedin"
              ),
              (0, c.tZ)("span", null, "-"),
              (0, c.tZ)(
                "a",
                { target: "_blank", href: "https://github.com/GuilhemBarboux" },
                "Github"
              ),
              (0, c.tZ)("span", null, "-"),
              (0, c.tZ)(
                "a",
                {
                  target: "_blank",
                  href: "https://www.malt.fr/profile/guilhembarboux",
                },
                "Malt"
              ),
              (0, c.tZ)("span", null, "-"),
              (0, c.tZ)(
                "a",
                { target: "_blank", href: "mailto:guilhembarboux@gmail.com" },
                "Email"
              )
            )
          )
        },
        g = {
          title: "Bienvenue !",
          description: "Super site utilisant Gatsby, I18N et des transitions !",
        },
        h = function () {
          return (0, c.tZ)(u, { data: Object.assign({}, g) })
        }
    },
  },
])
//# sourceMappingURL=component---src-pages-index-tsx-fcb089c894c0bab3acd2.js.map
