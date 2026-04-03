import { createContext } from 'react'
import type { Language } from './types'
import type { translations } from './translations'

export type TranslationDictionary = (typeof translations)[Language]

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: TranslationDictionary
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
