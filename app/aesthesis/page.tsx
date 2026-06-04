import type { Metadata } from 'next'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import ScrollBanner from '@/components/ui/ScrollBanner'
import PoemSearch from '@/components/poetry/PoemSearch'
import FallingFeathers from '@/components/ui/FallingFeathers'
import { getAllPoems } from '@/lib/data/poems'

export const metadata: Metadata = {
  title: 'Aesthesis — Arquivo de Poesia',
  description:
    'Arquivo completo de poemas. Percepção, sensibilidade e experiência estética em palavras.',
}

export default function AesthesisPage() {
  const poems = getAllPoems()

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <FallingFeathers />

      {/* Page header */}
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
            Percepção pelos Sentidos, Sensação, Experiência Sensível ou Capacidade de Sentir.
          </p>

          <OrnamentalDivider variant="short" className="mt-10" />
        </div>
      </header>

      {/* Archive */}
      <main className="max-w-site mx-auto px-6 pb-24">
        <PoemSearch poems={poems} />
      </main>
    </div>
  )
}
