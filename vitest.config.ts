import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "**/*.{ts,tsx,js,jsx}"
    ],
    globals: true
  },
})
