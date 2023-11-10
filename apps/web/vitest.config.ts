/// <reference types="vitest" />

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["**/node_modules/**", "**/public/**", "**/.next/**"],
    coverage: {
      reporter: ["text", "json-summary", "json"],
      lines: 70,
      statements: 70,
      branches: 70,
      functions: 70,
    },
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
});
