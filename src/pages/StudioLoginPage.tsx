import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from '../features/auth/api'
import { useAuth } from '../features/auth/useAuth'
import {
  initialLoginFormValues,
  validateLoginForm,
} from '../features/auth/validation'
import type {
  ApiError,
  LoginFormErrors,
  LoginFormValues,
  LoginRequestDto,
} from '../features/auth/types'

type LoginLocationState = {
  from?: {
    pathname: string
  }
}

export function StudioLoginPage() {
  const { setSession } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [values, setValues] = useState<LoginFormValues>(initialLoginFormValues)
  const [errors, setErrors] = useState<LoginFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const locationState = location.state as LoginLocationState | null
  const redirectTo =
    locationState?.from?.pathname && locationState.from.pathname !== '/prijava'
      ? locationState.from.pathname
      : '/dashboard'

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, checked, value } = event.target
    const nextValue = type === 'checkbox' ? checked : value
    const fieldName = name as keyof LoginFormValues

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: nextValue,
    }))

    setErrors((currentErrors) => {
      if (!currentErrors[fieldName]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[fieldName]
      return nextErrors
    })

    setStatusMessage('')
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validateLoginForm(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatusMessage('Proverite polja oznacena ispod forme.')
      return
    }

    setErrors({})
    setIsSubmitting(true)
    setStatusMessage('')

    try {
      const requestDto: LoginRequestDto = {
        email: values.email,
        password: values.password,
        remember: values.remember,
      }

      const response = await login(requestDto)
      setSession(response)

      navigate(redirectTo, { replace: true })
    } catch (error) {
      const apiError = error as ApiError

      if (apiError.fieldErrors) {
        setErrors(apiError.fieldErrors)
      }

      setStatusMessage(apiError.message ?? 'Prijava nije uspela. Pokusajte ponovo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="content-page login-page">
      <div className="login-shell">
        <div className="login-copy">
          <p className="eyebrow">Prijava</p>
          <h1>Prijavite se i nastavite tamo gde ste stali.</h1>
          <p className="page-lead">
            Forma je spremna za povezivanje sa pravim API-jem, a za sada daje
            uredan ekran za prijavu sa jasnom strukturom i validnim input
            elementima.
          </p>

          <div className="login-benefits">
            <div className="login-benefit-card">
              <span className="member-role">Brz pristup</span>
              <p>Udjite u dashboard, pregled zadataka i internu dokumentaciju.</p>
            </div>
            <div className="login-benefit-card">
              <span className="member-role">Sigurno iskustvo</span>
              <p>Kasnije ovde mozemo dodati reset lozinke, 2FA i social login.</p>
            </div>
          </div>
        </div>

        <form className="login-card" noValidate onSubmit={handleSubmit}>
          <div className="login-card-head">
            <p className="panel-label">Dobrodosli nazad</p>
            <h2>Unesite svoje podatke</h2>
          </div>

          <label className="form-field">
            <span>Email adresa</span>
            <input
              autoComplete="email"
              className={errors.email ? 'input-error' : ''}
              value={values.email}
              onChange={handleChange}
              name="email"
              placeholder="ime@firma.com"
              type="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email ? (
              <span className="field-error" id="email-error">
                {errors.email}
              </span>
            ) : null}
          </label>

          <label className="form-field">
            <span>Lozinka</span>
            <input
              autoComplete="current-password"
              className={errors.password ? 'input-error' : ''}
              value={values.password}
              onChange={handleChange}
              name="password"
              placeholder="Unesite lozinku"
              type="password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password ? (
              <span className="field-error" id="password-error">
                {errors.password}
              </span>
            ) : null}
          </label>

          <div className="login-row">
            <label className="checkbox-field">
              <input
                checked={values.remember}
                name="remember"
                onChange={handleChange}
                type="checkbox"
              />
              <span>Zapamti me</span>
            </label>

            <Link className="inline-link" to="/kontakt">
              Zaboravljena lozinka?
            </Link>
          </div>

          {statusMessage ? (
            <p
              className={
                errors.email || errors.password
                  ? 'form-status form-status-error'
                  : 'form-status'
              }
            >
              {statusMessage}
            </p>
          ) : null}

          <button className="primary-button login-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Prijavljivanje...' : 'Prijavi se'}
          </button>

          <p className="login-meta">
            Nemate nalog? <Link to="/kontakt">Javite nam se</Link>
          </p>
        </form>
      </div>
    </section>
  )
}
