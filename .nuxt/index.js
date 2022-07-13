import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_47dff04e from 'nuxt_plugin_plugin_47dff04e' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_workbox_aaf0e700 from 'nuxt_plugin_workbox_aaf0e700' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_f86758da from 'nuxt_plugin_metaplugin_f86758da' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_googleanalytics_0eca5142 from 'nuxt_plugin_googleanalytics_0eca5142' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_wow_2d4c4024 from 'nuxt_plugin_wow_2d4c4024' // Source: ../plugins/wow.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"FAST, BEST, ENJOY SOLUTIONS! | TNY Solutions","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"We are solving your problems with tiny solutions."},{"name":"msapplication-TileColor","content":"#ffffff"},{"name":"msapplication-TileImage","content":"\u002Fimages\u002Fms-icon-144x144.png"},{"name":"theme-color","content":"#ffffff"}],"link":[{"rel":"apple-touch-icon","type":"57x57","href":"\u002Fimages\u002Fapple-icon-57x57.png"},{"rel":"apple-touch-icon","type":"60x60","href":"\u002Fimages\u002Fapple-icon-60x60.png"},{"rel":"apple-touch-icon","type":"72x72","href":"\u002Fimages\u002Fapple-icon-72x72.png"},{"rel":"apple-touch-icon","type":"76x76","href":"\u002Fimages\u002Fapple-icon-76x76.png"},{"rel":"apple-touch-icon","type":"114x114","href":"\u002Fimages\u002Fapple-icon-114x114.png"},{"rel":"apple-touch-icon","type":"120x120","href":"\u002Fimages\u002Fapple-icon-120x120.png"},{"rel":"apple-touch-icon","type":"144x144","href":"\u002Fimages\u002Fapple-icon-144x144.png"},{"rel":"apple-touch-icon","type":"152x152","href":"\u002Fimages\u002Fapple-icon-152x152.png"},{"rel":"apple-touch-icon","type":"180x180","href":"\u002Fimages\u002Fapple-icon-180x180.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"192x192","href":"\u002Fimages\u002Fandroid-icon-192x192.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"132x32","href":"\u002Fimages\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"196x96","href":"\u002Fimages\u002Ffavicon-96x96.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"116x16","href":"\u002Fimages\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Fimages\u002Fmanifest.json"},{"hid":"gf-prefetch","rel":"dns-prefetch","href":"https:\u002F\u002Ffonts.gstatic.com\u002F"},{"hid":"gf-preconnect","rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com\u002F","crossorigin":""},{"hid":"gf-preload","rel":"preload","as":"style","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins:wght@400;500;600;700;800;900"}],"style":[],"script":[{"hid":"gf-script","innerHTML":"(function(){var l=document.createElement('link');l.rel=\"stylesheet\";l.href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins:wght@400;500;600;700;800;900\";document.querySelector(\"head\").appendChild(l);})();"}],"noscript":[{"hid":"gf-noscript","innerHTML":"\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins:wght@400;500;600;700;800;900\"\u003E"}],"__dangerouslyDisableSanitizersByTagID":{"gf-script":["innerHTML"],"gf-noscript":["innerHTML"]}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_47dff04e === 'function') {
    await nuxt_plugin_plugin_47dff04e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_aaf0e700 === 'function') {
    await nuxt_plugin_workbox_aaf0e700(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_f86758da === 'function') {
    await nuxt_plugin_metaplugin_f86758da(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_0eca5142 === 'function') {
    await nuxt_plugin_googleanalytics_0eca5142(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_wow_2d4c4024 === 'function') {
    await nuxt_plugin_wow_2d4c4024(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
