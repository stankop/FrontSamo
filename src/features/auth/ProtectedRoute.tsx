import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { useAuth } from './useAuth'

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth()
  const { t } = useLanguage()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to={t.routes.login} />
  }

  return <Outlet />
}
