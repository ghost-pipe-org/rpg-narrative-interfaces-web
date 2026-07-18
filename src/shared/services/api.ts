import axios from "axios"

const getBaseURL = () => {
  if (import.meta.env.DEV) {
    return "/"
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
