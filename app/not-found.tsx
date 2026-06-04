import Link from 'next/link'
import { CornerOrnament } from '@/components/ui/OrnamentalDivider'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import InkButton from '@/components/ui/InkButton'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ paddingTop: 'var(--nav-h)' }}
    >
      <CornerOrnament
        position="tl"
        className="absolute top-6 left-6 w-14 h-14 text-[var(--accent)] opacity-25 pointer-events-none"
      />
      <CornerOrnament
        position="tr"
        className="absolute top-6 right-6 w-14 h-14 text-[var(--accent)] opacity-25 pointer-events-none"
      />
      <CornerOrnament
        position="bl"
        className="absolute bottom-6 left-6 w-14 h-14 text-[var(--accent)] opacity-25 pointer-events-none"
      />
      <CornerOrnament
        position="br"
        className="absolute bottom-6 right-6 w-14 h-14 text-[var(--accent)] opacity-25 pointer-events-none"
      />

      <div className="text-center max-w-lg">
        <p className="section-label mb-6">Página não encontrada</p>

        <p
          className="font-cinzel text-[var(--accent)] mb-4"
          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1 }}
          aria-label="404"
        >
          404
        </p>

        <OrnamentalDivider variant="short" className="mb-8" />

        <p
          className="font-cormorant italic text-[var(--text-muted)] leading-relaxed mb-10"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
        >
          Esta página partiu,
          <br />
          como um poema que ainda não foi escrito.
        </p>

        <InkButton href="/" variant="primary" size="md">
          Regressar ao início
        </InkButton>
      </div>
    </div>
  )
}
