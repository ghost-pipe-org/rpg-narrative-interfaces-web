import axios from "axios"

function firstValidationMessage(data: unknown): string | null {
  if (!data || typeof data !== "object") return null
  const errors = (data as { errors?: unknown }).errors
  if (!Array.isArray(errors) || errors.length === 0) return null

  for (const item of errors) {
    if (!item || typeof item !== "object") continue
    const message = (item as { message?: unknown }).message
    if (typeof message === "string" && message.trim() && message !== "Invalid") {
      return message.trim()
    }
  }

  return null
}

export function getApiErrorMessage(
  error: unknown,
  fallback = "Ocorreu um erro inesperado"
): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data
    const message = data?.message
    if (typeof message === "string" && message.trim()) {
      return message
    }

    const validationMessage = firstValidationMessage(data)
    if (validationMessage) return validationMessage
  }

  if (error instanceof Error && error.message.trim()) {
    return error.message
  }

  return fallback
}
