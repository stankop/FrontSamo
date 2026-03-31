import type { LoginResponseDto } from './types'

const authStorageKey = 'frontsamo.auth.session'

export function loadStoredSession(): LoginResponseDto | null {
  if (typeof window === 'undefined') {
    return null
  }

  const rawSession = window.localStorage.getItem(authStorageKey)

  if (!rawSession) {
    return null
  }

  try {
    return JSON.parse(rawSession) as LoginResponseDto
  } catch {
    window.localStorage.removeItem(authStorageKey)
    return null
  }
}

export function storeSession(session: LoginResponseDto): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(authStorageKey, JSON.stringify(session))
}

export function clearStoredSession(): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(authStorageKey)
}
