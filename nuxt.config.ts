import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      title: "ChattyMix",
      meta: [{ name: "description", content: "ChattyMix discord clone." }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat:400,800",
        },
      ],
    },
  },
  modules: ["@sidebase/nuxt-auth"],
  auth: {
    isEnabled: true,
    origin: "http://localhost:3000",
    basePath: "/api/auth",
    enableSessionRefreshOnWindowFocus: true,
    enableGlobalAppMiddleware: true,
    defaultProvider: undefined,
    globalMiddlewareOptions: { allow404WithoutAuth: true },
  },
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : [],
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: ['@import "@/assets/variables.sass"',"@import simplebar/dist/simplebar.min.css"]
        },
      },
    },
  },
});
