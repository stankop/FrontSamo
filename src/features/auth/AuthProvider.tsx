import type { ReactNode } from 'react'
import { useState } from 'react'
import { AuthContext } from './context'
import type { AuthContextValue } from './context'
import { clearStoredSession, loadStoredSession, storeSession } from './storage'
import type { LoginResponseDto } from './types'

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSessionState] = useState<LoginResponseDto | null>(() =>
    loadStoredSession()
  )

  const value: AuthContextValue = {
    isAuthenticated: Boolean(session?.accessToken),
    session,
    setSession: (nextSession) => {
      storeSession(nextSession)
      setSessionState(nextSession)
    },
    logout: () => {
      clearStoredSession()
      setSessionState(null)
    },
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
