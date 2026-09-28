const STORAGE_KEY = "google_register_session"

export interface GoogleRegisterSession {
  googleIdToken: string
  email: string
  name?: string
}

export function saveGoogleRegisterSession(session: GoogleRegisterSession) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session))
}

export function readGoogleRegisterSession(): GoogleRegisterSession | null {
  const raw = sessionStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as GoogleRegisterSession
  } catch {
    return null
  }
}

export function clearGoogleRegisterSession() {
  sessionStorage.removeItem(STORAGE_KEY)
}
