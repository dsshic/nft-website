"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [55],
  {
    1055: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return C;
          },
        });
      var i,
        s,
        l,
        a,
        c,
        n,
        r,
        g,
        m,
        d,
        p,
        u,
        _,
        b = o(5893),
        h = o(7294),
        j = o(5675),
        y = o.n(j),
        I = {
          src: "/_next/static/media/sui-logo.ebc8b2b6.gif",
          height: 375,
          width: 375,
        },
        v = function () {
          var e = (0, h.useState)({ width: void 0, height: void 0 }),
            t = e[0],
            o = e[1];
          return (
            (0, h.useEffect)(function () {
              var e = function () {
                o({ width: window.innerWidth, height: window.innerHeight });
              };
              return (
                window.addEventListener("resize", e),
                e(),
                function () {
                  return window.removeEventListener("resize", e);
                }
              );
            }, []),
            t
          );
        },
        x = o(1163),
        f = function () {
          v();
          var e = (0, x.useRouter)();
          return (
            (0, h.useEffect)(
              function () {
                if (e.hash) {
                  var t = document.getElementById(e.hash.slice(1));
                  t && t.scrollIntoView({ behavior: "smooth" });
                } else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              },
              [e]
            ),
            (0, b.jsxs)(b.Fragment, {
              children: [
                " ",
                (0, b.jsxs)("section", {
                  className: "relative pb-10 pt-20 md:pt-32 h-1527",
                  style: { height: "100vh" },
                  children: [
                    (0, b.jsx)("picture", {
                      className:
                        "pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full",
                      children: (0, b.jsx)("img", {
                        src: "/images/sg_background.png",
                        alt: "gradient",
                        className: "h-full w-full",
                      }),
                    }),
                    (0, b.jsx)("picture", {
                      className:
                        "pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block",
                      children: (0, b.jsx)("img", {
                        src: "/images/sg_background.png",
                        alt: "gradient dark",
                        className: "h-full w-full",
                        style: { height: "100vh" },
                      }),
                    }),
                    (0, b.jsx)("div", {
                      className: "container h-full mx-auto",
                      children: (0, b.jsxs)("div", {
                        className:
                          "grid h-full items-center gap-4 md:grid-cols-12",
                        children: [
                          (0, b.jsxs)("div", {
                            className:
                              "col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4",
                            children: [
                              (0, b.jsx)("h1", {
                                className:
                                  "home-header-text font-bold font-display mb-6 text-center dark:text-white md:text-left ",
                                children:
                                  "The First NFT Marketplace for the next billion users \ud83d\udca7",
                              }),
                              (0, b.jsx)("p", {
                                className:
                                  "dark:text-jacarta-200 mb-8 text-center text-lg md:text-left",
                              }),
                              (0, b.jsxs)("div", {
                                className: "button-mobile flex",
                                style: { minWidth: "40vw" },
                                children: [
                                  (0, b.jsx)("a", {
                                    href: "https://forms.gle/dVYVzjq6pWQA3vnv9",
                                    rel: "noreferrer noopener",
                                    target: "_blank",
                                    children: (0, b.jsxs)("a", {
                                      className:
                                        "bg-artist bg-artist-mobile w-36 rounded-full py-3 px-8 text-center font-semibold transition-all",
                                      style: { borderRadius: "10px" },
                                      children: ["Project Application", " "],
                                    }),
                                  }),
                                  (0, b.jsx)("a", {
                                    href: "mailto:suigallery@protonmail.com",
                                    rel: "noreferrer noopener",
                                    target: "_blank",
                                    children: (0, b.jsx)("a", {
                                      className:
                                        "bg-contact bg-contact-mobile w-36 py-3 px-8 text-center font-semibold transition-all ",
                                      style: { borderRadius: "10px" },
                                      children: "Contact Us",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, b.jsx)("div", {
                            className: "col-span-6 xl:col-span-8",
                            children: (0, b.jsx)("div", {
                              className:
                                "relative text-center md:pl-8 md:text-right",
                              style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              },
                              children: (0, b.jsx)("div", {
                                className: "image-wrap-mobile",
                                children: (0, b.jsx)(y(), {
                                  src: I,
                                  unoptimized: !0,
                                  className:
                                    "hero-img mt-8 inline-block w-72 sm:w-full lg:w-[24rem] xl:w-[35rem] gif-mobile",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, b.jsx)("section", {
                  id: "upcoming-projects",
                  className: "relative pb-10 pt-10 md:pt-10 h-1527",
                  style: { backgroundColor: "#0F324D" },
                  children: (0, b.jsxs)("div", {
                    className: "general-mint-container",
                    children: [
                      (0, b.jsx)("div", {
                        className: "select-mint-container",
                        style: { marginBottom: "2vh" },
                        children: "Upcoming Projects",
                      }),
                      (0, b.jsx)("div", {
                        className: "projects-mint-container",
                        children: [
                          { title: "PFP", body: "Reserved", date: "Date:TBA" },
                          { title: "ART", body: "Reserved", date: "Date:TBA" },
                          { title: "ART", body: "Reserved", date: "Date:TBA" },
                          { title: "", body: "APPLY", date: "" },
                          { title: "", body: "APPLY", date: "" },
                          { title: "", body: "APPLY", date: "" },
                        ].map(function (e, t) {
                          return (0,
                          b.jsxs)("div", { className: "project-mint-component", children: [(0, b.jsx)("div", { className: "projects-top-right", children: e.title && (0, b.jsx)("div", { className: "projects-top-right-text", children: e.title }) }), (0, b.jsx)("div", { className: "projects-body", children: e.body }), (0, b.jsx)("div", { className: "projects-date", children: e.date })] }, t);
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      o(1082),
        o(1669),
        o(3372),
        o(8494),
        o(965),
        o(1664),
        o(9473),
        o(4954),
        o(8130),
        o(8364);
      function w(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      (i = {
        id: "0Art Me Outside",
        bigImage: "/images/collections/collection_1_1.jpg",
        subImage1: "/images/collections/collection_1_2.jpg",
        subImage2: "/images/collections/collection_1_3.jpg",
        subImage3: "/images/collections/collection_1_4.jpg",
        userImage: "/images/avatars/owner_5.png",
        userName: "Wow Frens",
        itemsCount: "10K",
        title: "Art Me Outside",
        category: "art",
      }),
        w(i, "category", "Collectibles"),
        w(i, "category", "photography"),
        w(i, "top", !0),
        w(i, "trending", !0),
        w(i, "recent", !0),
        (s = {
          id: "1PankySkal",
          bigImage: "/images/collections/collection_2_1.jpg",
          subImage1: "/images/collections/collection_2_2.jpg",
          subImage2: "/images/collections/collection_2_3.jpg",
          subImage3: "/images/collections/collection_2_4.jpg",
          userImage: "/images/avatars/owner_9.png",
          userName: "NFT stars",
          itemsCount: "2.8K",
          title: "PankySkal",
          category: "Collectibles",
        }),
        w(s, "category", "photography"),
        w(s, "category", "music"),
        w(s, "top", !1),
        w(s, "trending", !1),
        w(s, "recent", !1),
        (l = {
          id: "2VR Space_287",
          bigImage: "/images/collections/collection_3_1.jpg",
          subImage1: "/images/collections/collection_3_2.jpg",
          subImage2: "/images/collections/collection_3_3.jpg",
          subImage3: "/images/collections/collection_3_4.jpg",
          userImage: "/images/avatars/owner_4.png",
          userName: "Origin Morish",
          itemsCount: "8K",
          title: "VR Space_287",
          category: "domain",
        }),
        w(l, "category", "photography"),
        w(l, "top", !0),
        w(l, "trending", !1),
        w(l, "recent", !0),
        (a = {
          id: "3Metasmorf",
          bigImage: "/images/collections/collection_4_1.jpg",
          subImage1: "/images/collections/collection_4_2.jpg",
          subImage2: "/images/collections/collection_4_3.jpg",
          subImage3: "/images/collections/collection_4_4.jpg",
          userImage: "/images/avatars/owner_10.png",
          userName: "Lazy Panda",
          itemsCount: "1.5K",
          title: "Metasmorf",
          category: "music",
        }),
        w(a, "category", "photography"),
        w(a, "category", "art"),
        w(a, "top", !1),
        w(a, "trending", !0),
        w(a, "recent", !1),
        (c = {
          id: "43Landers",
          bigImage: "/images/collections/collection_5_1.jpg",
          subImage1: "/images/collections/collection_5_2.jpg",
          subImage2: "/images/collections/collection_5_3.jpg",
          subImage3: "/images/collections/collection_5_4.jpg",
          userImage: "/images/avatars/owner_11.png",
          userName: "051_Hart",
          itemsCount: "15K",
          title: "3Landers",
          category: "photography",
        }),
        w(c, "category", "Collectibles"),
        w(c, "category", "music"),
        w(c, "top", !0),
        w(c, "trending", !1),
        w(c, "recent", !0),
        (n = {
          id: "5SlimHoods",
          bigImage: "/images/collections/collection_6_1.jpg",
          subImage1: "/images/collections/collection_6_2.jpg",
          subImage2: "/images/collections/collection_6_3.jpg",
          subImage3: "/images/collections/collection_6_4.jpg",
          userImage: "/images/avatars/owner_3.png",
          userName: "Crytopank",
          itemsCount: "8.8K",
          title: "SlimHoods",
          category: "virtual world",
        }),
        w(n, "category", "music"),
        w(n, "category", "art"),
        w(n, "top", !0),
        w(n, "trending", !0),
        w(n, "recent", !1),
        (r = {
          id: "6The Overseers",
          bigImage: "/images/collections/collection_7_1.jpg",
          subImage1: "/images/collections/collection_7_2.jpg",
          subImage2: "/images/collections/collection_7_3.jpg",
          subImage3: "/images/collections/collection_7_4.jpg",
          userImage: "/images/avatars/creator_2.png",
          userName: "Hey Mrsmeseks",
          itemsCount: "13K",
          title: "The Overseers",
          category: "art",
        }),
        w(r, "category", "Collectibles"),
        w(r, "top", !1),
        w(r, "trending", !0),
        w(r, "recent", !0),
        (g = {
          id: "7Dope Shibas",
          bigImage: "/images/collections/collection_8_1.jpg",
          subImage1: "/images/collections/collection_8_2.jpg",
          subImage2: "/images/collections/collection_8_3.jpg",
          subImage3: "/images/collections/collection_8_4.jpg",
          userImage: "/images/avatars/owner_12.png",
          userName: "alyxbow",
          itemsCount: "3K",
          title: "Dope Shibas",
          category: "Collectibles",
        }),
        w(g, "category", "art"),
        w(g, "top", !0),
        w(g, "trending", !1),
        w(g, "recent", !0),
        (m = {
          id: "10VR Space_287",
          bigImage: "/images/collections/collection_3_1.jpg",
          subImage1: "/images/collections/collection_3_2.jpg",
          subImage2: "/images/collections/collection_3_3.jpg",
          subImage3: "/images/collections/collection_3_4.jpg",
          userImage: "/images/avatars/owner_4.png",
          userName: "Origin Morish",
          itemsCount: "8K",
          title: "VR Space_287",
          category: "domain",
        }),
        w(m, "category", "Collectibles"),
        w(m, "top", !0),
        w(m, "trending", !1),
        w(m, "recent", !0),
        (d = {
          id: "11Metasmorf",
          bigImage: "/images/collections/collection_4_1.jpg",
          subImage1: "/images/collections/collection_4_2.jpg",
          subImage2: "/images/collections/collection_4_3.jpg",
          subImage3: "/images/collections/collection_4_4.jpg",
          userImage: "/images/avatars/owner_10.png",
          userName: "Lazy Panda",
          itemsCount: "1.5K",
          title: "Metasmorf",
          category: "music",
        }),
        w(d, "category", "Collectibles"),
        w(d, "category", "virtual world"),
        w(d, "top", !0),
        w(d, "trending", !0),
        w(d, "recent", !1),
        (p = {
          id: "123Landers",
          bigImage: "/images/collections/collection_5_1.jpg",
          subImage1: "/images/collections/collection_5_2.jpg",
          subImage2: "/images/collections/collection_5_3.jpg",
          subImage3: "/images/collections/collection_5_4.jpg",
          userImage: "/images/avatars/owner_11.png",
          userName: "051_Hart",
          itemsCount: "15K",
          title: "3Landers",
          category: "photography",
        }),
        w(p, "category", "domain"),
        w(p, "category", "virtual world"),
        w(p, "top", !1),
        w(p, "trending", !0),
        w(p, "recent", !0),
        (u = {
          id: "13SlimHoods",
          bigImage: "/images/collections/collection_6_1.jpg",
          subImage1: "/images/collections/collection_6_2.jpg",
          subImage2: "/images/collections/collection_6_3.jpg",
          subImage3: "/images/collections/collection_6_4.jpg",
          userImage: "/images/avatars/owner_3.png",
          userName: "Crytopank",
          itemsCount: "8.8K",
          title: "SlimHoods",
          category: "virtual world",
        }),
        w(u, "category", "domain"),
        w(u, "top", !0),
        w(u, "trending", !1),
        w(u, "recent", !0),
        (_ = {
          id: "14The Overseers",
          bigImage: "/images/collections/collection_7_1.jpg",
          subImage1: "/images/collections/collection_7_2.jpg",
          subImage2: "/images/collections/collection_7_3.jpg",
          subImage3: "/images/collections/collection_7_4.jpg",
          userImage: "/images/avatars/creator_2.png",
          userName: "Hey Mrsmeseks",
          itemsCount: "13K",
          title: "The Overseers",
          category: "domain",
        }),
        w(_, "category", "virtual world"),
        w(_, "top", !0),
        w(_, "trending", !0),
        w(_, "recent", !1),
        o(6929),
        o(9217),
        o(7313);
      var N = o(3554),
        C = function () {
          return (0, b.jsxs)("main", {
            children: [
              (0, b.jsx)(N.Z, { title: "Sui Gallery" }),
              (0, b.jsx)(f, {}),
            ],
          });
        };
    },
  },
]);
