const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Avengers Unit",
  description: "Nơi lưu trữ các bài viết kỹ thuật, quy trình, các seminar của các thành viên trong Unit",

  dest: "./dist",

  head: [
    ['link', { rel: 'icon', href: '/logo-avg.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo-avg.png' }],
    ['link', { rel: 'mask-icon', href: '/logo-avg.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/logo-avg.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
    },
  },

  themeConfig: {
    logo: "/logo-avg.png",
    hostname: "https://avengers-unit.com",

    author: "Avengers Unit",
    //repo: "https://github.com/",

    plugins: [
      [
        "@mr-hope/pwa",
      ]
    ],
    nav: [
      { text: "About", link: "/", icon: "home" },
      { text: "Posts", link: "/content", icon: "creative" },
      // {
      //   text: "Posts",
      //   icon: "creative",
      //   link: "/posts/",
      // },
      // {
      //   text: "Docs",
      //   link: "https://vuepress-theme-hope.github.io/",
      //   icon: "note",
      // },
    ],

    // sidebar: {
    //   "/": [
    //     "",
    //     "home",
    //     // "slides",
    //     // "layout",
    //     // {
    //     //   title: "Posts",
    //     //   icon: "creative",
    //     //   prefix: "posts/",
    //     //   children: ["", "page", "markdown", "disable", "encrypt"],
    //     // },
    //   ],
    // },

    locales: {
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      // links: {
      //   Zhihu: "https://zhihu.com",
      //   Baidu: "https://baidu.com",
      //   Github: "https://github.com",
      // },
    },

    footer: {
      display: true,
      content: "",
    },

    comment: {
      type: "disable",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Ho_Chi_Minh",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/logo-avg.png",
      cachePic: true,
      apple: {
        icon: "/assets/icon/ico-192.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ico-192.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/ico-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/ico-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/ico-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/ico-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Posts",
            short_name: "Posts",
            url: "/posts/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
