import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/** @see https://ko.vitejs.dev/guide/ */
export default defineConfig({
  plugins: [react()],

  /** @see {docs} https://ko.vitejs.dev/config/server-options.html#server-hmr */
  server: {
    host: true,
    open: "/",
    port: 3000,
  },

  resolve: {
    /** @see https://ko.vitejs.dev/config/shared-options.html#resolve-alias */
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
