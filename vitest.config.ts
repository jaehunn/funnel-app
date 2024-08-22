import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitest.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
    include: ["**/*.test.?(c|m)[jt]s?(x)"],
  },
});
