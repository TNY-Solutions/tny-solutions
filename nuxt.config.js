module.exports = {
  css: ["~assets/styles/styles.scss", "animate.css/animate.min.css"],
  modules: ["@nuxtjs/style-resources"],
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/google-fonts"],
  styleResources: {
    scss: ["~assets/styles/_variables.scss", "~assets/styles/_mixins.scss"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700, 800, 900],
    },
  },
  plugins: [
    {
      src: "~/plugins/wow.js",
      ssr: false,
    },
  ],
  ssr: true,
};
