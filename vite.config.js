import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: "spa",
  build: {
    // Raise transpile target to drop Array.from / Math.trunc / Object.assign
    // polyfills (-~20 KiB legacy JS, surfaced by Lighthouse
    // "legacy-javascript-insight"). es2020 baseline covers 95%+ of mobile
    // traffic per caniuse.com (May 2020+).
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Heavy 3rd-party libs out of the entry bundle. posthog & sentry
          // are deferred (lazy-imported) but framer-motion runs on first
          // paint so it stays adjacent to the route bundle.
          if (id.includes("/node_modules/posthog-js/")) return "posthog";
          if (id.includes("/node_modules/@sentry/")) return "sentry";
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
    },
  },
});
