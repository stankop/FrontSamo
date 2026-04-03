import type { Language } from './types'

const localizedRouteMap = {
  '/': { sr: '/', en: '/' },
  '/about': { sr: '/about', en: '/about' },
  '/contact': { sr: '/contact', en: '/contact' },
  '/login': { sr: '/login', en: '/login' },
  '/dashboard': { sr: '/dashboard', en: '/dashboard' },
} as const

export function localizePathname(pathname: string, _language: Language) {
  const localizedRoute = localizedRouteMap[pathname as keyof typeof localizedRouteMap]
  return localizedRoute ? localizedRoute.en : pathname
}
