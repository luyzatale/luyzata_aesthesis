import type { Metadata } from 'next'
import PoemSearch from '@/components/poetry/PoemSearch'
import FallingFeathers from '@/components/ui/FallingFeathers'
import AesthesisHeader from '@/components/pages/AesthesisHeader'
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
      <AesthesisHeader />

      {/* Archive */}
      <main className="max-w-site mx-auto px-6 pb-24">
        <PoemSearch poems={poems} />
      </main>
    </div>
  )
}
