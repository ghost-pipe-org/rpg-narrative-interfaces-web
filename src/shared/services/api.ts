import axios from "axios"

const getBaseURL = () => {
  // Dev only: Vite proxies /api → VITE_API_URL (avoids CORS locally).
  // Production (GitHub Pages) has no proxy — API must allow the Pages origin.
  if (import.meta.env.DEV) {
    return "/api"
  }

  return import.meta.env.VITE_API_URL
}

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
  withCredentials: false,
})

export default api
