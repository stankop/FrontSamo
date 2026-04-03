import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { LanguageContext } from './context'
import { loadStoredLanguage, storeLanguage } from './storage'
import { translations } from './translations'
import type { Language } from './types'

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => loadStoredLanguage())

  useEffect(() => {
    storeLanguage(language)
    document.documentElement.lang = language === 'sr' ? 'sr' : 'en'
  }, [language])

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: setLanguageState,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

