'use client'

import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import ScrollBanner from '@/components/ui/ScrollBanner'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function AesthesisHeader() {
  const { t } = useLanguage()

  return (
    <header className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label mb-8">αἴσθησις</p>

        <ScrollBanner size="lg" className="inline-flex mb-10">
          Aesthesis
        </ScrollBanner>

        <p
          className="font-cormorant italic text-[var(--text-muted)] leading-relaxed mx-auto"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '55ch' }}
        >
          {t('aesthesisPageSub')}
        </p>

        <OrnamentalDivider variant="short" className="mt-10" />
      </div>
    </header>
  )
}
