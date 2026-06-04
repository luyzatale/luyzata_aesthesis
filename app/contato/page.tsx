import type { Metadata } from 'next'
import { CornerOrnament } from '@/components/ui/OrnamentalDivider'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import ScrollBanner from '@/components/ui/ScrollBanner'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contato — Fale Comigo',
  description:
    'Se um poema, fotografia ou reflexão ressoou em você, entre em contacto. Colaborações, exposições, publicações e projetos artísticos.',
}

export default function ContatoPage() {
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

        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-8">Correspondência</p>

          <ScrollBanner size="lg" className="inline-flex mb-10">
            Contato
          </ScrollBanner>

          <OrnamentalDivider variant="short" className="mt-10" />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-site mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">

          {/* Context */}
          <div className="space-y-10">
            <div>
              <p className="section-label mb-4">Email direto</p>
              <a
                href="mailto:alexandre.t.luyza@gmail.com"
                className="font-cormorant italic text-[var(--text-secondary)] text-base hover:text-[var(--accent)] transition-colors duration-300 ink-link"
              >
                alexandre.t.luyza@gmail.com
              </a>
            </div>

            <div>
              <p className="section-label mb-4">Localização</p>
              <p className="font-cormorant italic text-[var(--text-muted)] text-base">
                Brasil · Países Baixos
              </p>
            </div>

            <blockquote className="border-l-2 border-[var(--border-strong)] pl-5">
              <p className="font-cormorant italic text-[var(--text-muted)] text-base leading-loose">
                "A sua mensagem é bem-vinda."
              </p>
            </blockquote>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}
