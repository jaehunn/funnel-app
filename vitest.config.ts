import path from "path";
import { defineConfig } from "vitest/config";

/** @see https://vitest.dev/guide/#configuring-vitest */
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],

    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
