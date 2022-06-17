module.exports = {
  css: ["~assets/styles/styles.scss", "animate.css/animate.min.css"],
  modules: ["@nuxtjs/style-resources"],
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/google-fonts",
    "@nuxtjs/google-analytics",
    "@nuxtjs/pwa"
  ],
  styleResources: {
    scss: ["~assets/styles/_variables.scss", "~assets/styles/_mixins.scss"]
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700, 800, 900]
    }
  },
  plugins: [
    {
      src: "~/plugins/wow.js",
      ssr: false
    }
  ],
  ssr: true,
  head: {
    title: "FAST, BEST, ENJOY SOLUTIONS! | TNY Solutions",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "We are solving your problems with tiny solutions."
      },
      { name: "msapplication-TileColor", content: "#ffffff" },
      {
        name: "msapplication-TileImage",
        content: "/images/ms-icon-144x144.png"
      },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        type: "57x57",
        href: "/images/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        type: "60x60",
        href: "/images/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        type: "72x72",
        href: "/images/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        type: "76x76",
        href: "/images/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        type: "114x114",
        href: "/images/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        type: "120x120",
        href: "/images/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        type: "144x144",
        href: "/images/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        type: "152x152",
        href: "/images/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        type: "180x180",
        href: "/images/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/images/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "132x32",
        href: "/images/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "196x96",
        href: "/images/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "116x16",
        href: "/images/favicon-16x16.png"
      },
      { rel: "manifest", href: "/images/manifest.json" }
    ]
  },
  pwa: {
    icon: {
      source: "/images/apple-icon.png"
    },
    manifest: {
      name: "TNY Solutions",
      lang: "tr",
      useWebmanifestExtension: false
    }
  },
  googleAnalytics: {
    id: "G-ZX22K6YJPM"
  }
};
