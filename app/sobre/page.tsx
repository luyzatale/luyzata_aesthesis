import type { Metadata } from 'next'
import { CornerOrnament } from '@/components/ui/OrnamentalDivider'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import ScrollBanner from '@/components/ui/ScrollBanner'
import InkButton from '@/components/ui/InkButton'

export const metadata: Metadata = {
  title: 'Sobre — Sobre Aesthesis',
  description:
    'L. Serrano — heterônimo poético de 87 anos, introspectivo e existencial, com temas de liberdade, tempo subjetivo e o ser versus o nada.',
}

const bioFields = [
  {
    label: 'Heterônimo Poético',
    value: 'L. Serrano',
  },
  {
    label: 'Idade fictícia',
    value: '87 anos',
  },
  {
    label: 'Origem',
    value: 'Mundo, com família ligada à navegação e à literatura',
  },
  {
    label: 'Estilo poético',
    value:
      'Introspectivo, existencial, com grande atenção a tempos e espaços internos, lembrando os fluxos de consciência de Clarice Lispector e a profundidade de Fernando Pessoa. Alternância de linguagens para se aproximar do sentir.',
  },
  {
    label: 'Temas centrais',
    value:
      'Liberdade e confinamento, o tempo subjetivo, o diálogo entre interior e mundo externo, o ser versus o nada.',
  },
  {
    label: 'Personalidade',
    value:
      'Silencioso, observador, de fala rara; escreve para entender a si mesmo e ao mundo.',
  },
  {
    label: 'Assinatura poética',
    value:
      'Usa imagens de mar, céu, portas, sombras e horizontes, de tempos sentidos, presença genuína.',
  },
]

export default function SobrePage() {
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
            Sobre Aesthesis
          </ScrollBanner>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-prose mx-auto px-6 pb-24">
        <OrnamentalDivider variant="short" className="mb-16" />

        {/* Bio fields */}
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

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <InkButton href="/aesthesis" variant="primary" size="md">
            Explorar Poemas
          </InkButton>
          <InkButton href="/contato" variant="outline" size="md">
            Entrar em Contato
          </InkButton>
        </div>
      </main>
    </div>
  )
}
