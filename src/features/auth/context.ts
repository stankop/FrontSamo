import { createContext } from 'react'
import type { LoginResponseDto } from './types'

export type AuthContextValue = {
  isAuthenticated: boolean
  session: LoginResponseDto | null
  setSession: (session: LoginResponseDto) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
