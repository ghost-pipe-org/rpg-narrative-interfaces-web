import axios from "axios"

// Always same-origin `/api`.
// - Dev: Vite proxies to VITE_API_URL (.env.development)
// - Prod (Vercel): rewrite in vercel.json → API remota
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
  withCredentials: false,
})

export default api
