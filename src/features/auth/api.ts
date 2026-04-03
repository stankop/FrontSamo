import type { ApiError, LoginRequestDto, LoginResponseDto } from './types'

const defaultLoginUrl = '/api/auth/login'

function isApiError(value: unknown): value is ApiError {
  if (!value || typeof value !== 'object') {
    return false
  }

  return 'message' in value
}

export async function login(request: LoginRequestDto): Promise<LoginResponseDto> {
  const response = await fetch(import.meta.env.VITE_AUTH_LOGIN_URL ?? defaultLoginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })

  const payload = (await response.json().catch(() => null)) as unknown

  if (!response.ok) {
    if (isApiError(payload)) {
      throw payload
    }

    throw {
      message: 'Login failed. Please try again.',
    } satisfies ApiError
  }

  return payload as LoginResponseDto
}
