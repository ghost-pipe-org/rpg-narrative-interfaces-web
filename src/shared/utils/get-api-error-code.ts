import axios from "axios"

export function getApiErrorCode(error: unknown): string | null {
  if (!axios.isAxiosError(error)) return null
  const code = error.response?.data?.code
  return typeof code === "string" ? code : null
}
