import type { LoginFormErrors, LoginFormValues } from './types'

export const initialLoginFormValues: LoginFormValues = {
  email: '',
  password: '',
  remember: false,
}

export function validateLoginForm(values: LoginFormValues): LoginFormErrors {
  const errors: LoginFormErrors = {}

  if (!values.email.trim()) {
    errors.email = 'Unesite email adresu.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Email adresa nije u dobrom formatu.'
  }

  if (!values.password) {
    errors.password = 'Unesite lozinku.'
  } else if (values.password.length < 8) {
    errors.password = 'Lozinka mora da ima najmanje 8 karaktera.'
  }

  return errors
}
