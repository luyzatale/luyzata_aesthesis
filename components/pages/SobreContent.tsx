'use client'

import { CornerOrnament } from '@/components/ui/OrnamentalDivider'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import ScrollBanner from '@/components/ui/ScrollBanner'
import InkButton from '@/components/ui/InkButton'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function SobreContent() {
  const { t } = useLanguage()

  const bioFields = [
    { label: t('sobreBioHeteronimo'), value: t('sobreBioHeteronimoVal') },
    { label: t('sobreBioAge'),        value: t('sobreBioAgeVal') },
    { label: t('sobreBioOrigin'),     value: t('sobreBioOriginVal') },
    { label: t('sobreBioStyle'),      value: t('sobreBioStyleVal') },
    { label: t('sobreBioThemes'),     value: t('sobreBioThemesVal') },
    { label: t('sobreBioPersonality'), value: t('sobreBioPersonalityVal') },
    { label: t('sobreBioSignature'),  value: t('sobreBioSignatureVal') },
  ]

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Header */}
      <header className="relative py-24 px-6 overflow-hidden">
        <CornerOrnament
          position="tl"
          className="absolute top-6 left-6 w-12 h-12 text-[var(--accent)] opacity-30 pointer-events-none"
        />
        <CornerOrnament
          position="tr"
          className="absolute top-6 right-6 w-12 h-12 text-[var(--accent)] opacity-30 pointer-events-none"
        />
        <CornerOrnament
          position="bl"
          className="absolute bottom-6 left-6 w-12 h-12 text-[var(--accent)] opacity-20 pointer-events-none"
        />
        <CornerOrnament
          position="br"
          className="absolute bottom-6 right-6 w-12 h-12 text-[var(--accent)] opacity-20 pointer-events-none"
        />

        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-8">αἴσθησις</p>
          <ScrollBanner size="lg" className="inline-flex mb-8">
            {t('sobreTitle')}
          </ScrollBanner>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-prose mx-auto px-6 pb-24">
        <OrnamentalDivider variant="short" className="mb-16" />

        <div className="space-y-10">
          {bioFields.map(({ label, value }) => (
            <div key={label} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 sm:gap-8 items-baseline">
              <p className="font-cinzel text-[0.6rem] tracking-[0.18em] uppercase text-[var(--accent)]">
                {label}
              </p>
              <p
                className="font-cormorant italic text-[var(--text-secondary)] leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)' }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <OrnamentalDivider className="my-16" />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <InkButton href="/aesthesis" variant="primary" size="md">
            {t('sobreCtaPoems')}
          </InkButton>
          <InkButton href="/contato" variant="outline" size="md">
            {t('sobreCtaContact')}
          </InkButton>
        </div>
      </main>
    </div>
  )
}
