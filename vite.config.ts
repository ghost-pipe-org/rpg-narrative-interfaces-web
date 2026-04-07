import { copyFileSync, existsSync } from "node:fs"
import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base:
    mode === "production"
      ? process.env.VITE_BASE_PATH || "/"
      : "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "github-pages-spa-404",
      closeBundle() {
        const index = path.resolve(__dirname, "dist/index.html")
        const fallback = path.resolve(__dirname, "dist/404.html")
        if (existsSync(index)) copyFileSync(index, fallback)
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
