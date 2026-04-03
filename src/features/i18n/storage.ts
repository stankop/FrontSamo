import type { Language } from './types'

const languageStorageKey = 'frontsamo-language'

export function loadStoredLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'sr'
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey)
  return storedLanguage === 'en' ? 'en' : 'sr'
}

export function storeLanguage(language: Language) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(languageStorageKey, language)
}

