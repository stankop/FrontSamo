import type { LoginFormErrors, LoginFormValues } from './types'

type ValidationMessages = {
  emailRequired: string
  emailInvalid: string
  passwordRequired: string
  passwordShort: string
}

export const initialLoginFormValues: LoginFormValues = {
  email: '',
  password: '',
  remember: false,
}

export function validateLoginForm(
  values: LoginFormValues,
  messages: ValidationMessages,
): LoginFormErrors {
  const errors: LoginFormErrors = {}

  if (!values.email.trim()) {
    errors.email = messages.emailRequired
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = messages.emailInvalid
  }

  if (!values.password) {
    errors.password = messages.passwordRequired
  } else if (values.password.length < 8) {
    errors.password = messages.passwordShort
  }

  return errors
}
