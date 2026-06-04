'use client'

import { useEffect } from 'react'
import InkButton from '@/components/ui/InkButton'
import { CornerOrnament } from '@/components/ui/OrnamentalDivider'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

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

      <div className="text-center max-w-lg">
        <p className="section-label mb-6">Algo correu mal</p>

        <OrnamentalDivider variant="short" className="mb-8" />

        <p
          className="font-cormorant italic text-[var(--text-muted)] leading-relaxed mb-10"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
        >
          A página encontrou um erro inesperado.
          <br />
          Tente novamente ou regresse ao início.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <InkButton onClick={reset} variant="primary" size="md">
            Tentar novamente
          </InkButton>
          <InkButton href="/" variant="outline" size="md">
            Regressar ao início
          </InkButton>
        </div>
      </div>
    </div>
  )
}
