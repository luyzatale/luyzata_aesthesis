'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setProgress(Math.min(100, (scrollTop / docHeight) * 100))
      }
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura"
      className="fixed top-0 left-0 right-0 z-50 h-px pointer-events-none"
      style={{ background: 'var(--border)' }}
    >
      <div
        className="h-full transition-none"
        style={{
          width: `${progress}%`,
          background: 'var(--accent)',
        }}
      />
    </div>
  )
}
