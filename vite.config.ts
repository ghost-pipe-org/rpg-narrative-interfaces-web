import { copyFileSync, existsSync } from "node:fs"
import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const apiTarget = env.VITE_API_URL?.replace(/\/$/, "")

  if (mode !== "production" && !apiTarget) {
    throw new Error("VITE_API_URL is required in .env.development")
  }

  return {
    base: mode === "production" ? process.env.VITE_BASE_PATH || "/" : "/",
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
    server: {
      proxy: {
        "/api": {
          target: apiTarget,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    preview: {
      proxy: {
        "/api": {
          target: apiTarget,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  }
})
