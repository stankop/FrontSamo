export type LoginFormValues = {
  email: string
  password: string
  remember: boolean
}

export type LoginFormErrors = Partial<Record<keyof LoginFormValues, string>>

export type LoginRequestDto = {
  email: string
  password: string
  remember: boolean
}

export type LoginResponseDto = {
  accessToken: string
  refreshToken?: string
  expiresIn: number
  user: {
    id: string
    email: string
    displayName: string
  }
}

export type ApiError = {
  message: string
  code?: string
  fieldErrors?: Partial<Record<keyof LoginFormValues, string>>
}
