'use client'

import { useEffect } from 'react'

export default function GlobalError({
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
    <html lang="pt-BR">
      <body style={{ background: '#F5EDD8', color: '#26211D', fontFamily: 'Georgia, serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0, textAlign: 'center' }}>
        <div>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08050', marginBottom: '1.5rem' }}>
            Erro crítico
          </p>
          <p style={{ fontSize: '1.125rem', fontStyle: 'italic', color: '#4A3A2C', marginBottom: '2rem', lineHeight: 1.8 }}>
            A aplicação encontrou um erro inesperado.
          </p>
          <button
            onClick={reset}
            style={{ fontFamily: 'Georgia, serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.75rem 2rem', background: '#26211D', color: '#F5EDD8', border: 'none', cursor: 'pointer' }}
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  )
}
