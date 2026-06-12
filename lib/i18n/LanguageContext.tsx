'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type Lang, type TranslationKey, getTranslations } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
  locale: string
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'pt',
  setLang: () => {},
  t: (key) => getTranslations('pt')[key],
  locale: 'pt-BR',
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('aesthesis-lang') as Lang | null
      if (stored === 'en' || stored === 'pt') setLangState(stored)
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('aesthesis-lang', l) } catch {}
  }

  const strings = getTranslations(lang)
  const t = (key: TranslationKey): string => strings[key]
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US'

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, locale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
