'use client'

import { useEffect, useState } from 'react'
import { CornerOrnament } from '@/components/ui/OrnamentalDivider'

export default function CornerFrame() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3,
        pointerEvents: 'none',
      }}
    >
      <CornerOrnament
        position="tl"
        className="w-24 h-24 text-[var(--accent)] opacity-60"
        style={{ position: 'absolute', top: 'calc(var(--nav-h) + 8px)', left: '16px' }}
      />
      <CornerOrnament
        position="tr"
        className="w-24 h-24 text-[var(--accent)] opacity-60"
        style={{ position: 'absolute', top: 'calc(var(--nav-h) + 8px)', right: '16px' }}
      />
      <CornerOrnament
        position="bl"
        className="w-24 h-24 text-[var(--accent)] opacity-60"
        style={{ position: 'absolute', bottom: '16px', left: '16px' }}
      />
      <CornerOrnament
        position="br"
        className="w-24 h-24 text-[var(--accent)] opacity-60"
        style={{ position: 'absolute', bottom: '16px', right: '16px' }}
      />
    </div>
  )
}
