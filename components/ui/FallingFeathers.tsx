'use client'

import { useEffect, useState } from 'react'

interface FeatherConfig {
  id:        number
  left:      string
  duration:  number
  delay:     number
  scale:     number
  opacity:   number
  animation: string
  easing:    string
}

const FEATHERS: FeatherConfig[] = [
  {
    id: 1, left: '7%',
    duration: 26, delay: 0,
    scale: 0.90, opacity: 0.45,
    animation: 'feather-a',
    easing: 'ease-in-out',
  },
  {
    id: 2, left: '80%',
    duration: 32, delay: -10,
    scale: 0.78, opacity: 0.38,
    animation: 'feather-b',
    easing: 'linear',
  },
  {
    id: 3, left: '46%',
    duration: 40, delay: -18,
    scale: 1.00, opacity: 0.50,
    animation: 'feather-c',
    easing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
  },
  {
    id: 4, left: '63%',
    duration: 22, delay: -6,
    scale: 0.82, opacity: 0.40,
    animation: 'feather-d',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
]

export default function FallingFeathers() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {FEATHERS.map((f) => (
        <div
          key={f.id}
          className="absolute top-0"
          style={{
            left:            f.left,
            color:           'var(--feather-color)',
            animation:       `${f.animation} ${f.duration}s ${f.delay}s ${f.easing} infinite`,
            '--f-op':        String(f.opacity),
            transform:       `scale(${f.scale})`,
            transformOrigin: 'top center',
          } as React.CSSProperties}
        >
          <FeatherSVG />
        </div>
      ))}
    </div>
  )
}

function FeatherSVG() {
  return (
    <svg
      viewBox="0 0 18 52"
      width="18"
      height="52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 3 Q9.5 26 9 50"                     stroke="currentColor" strokeWidth="0.7"  strokeLinecap="round" />
      <path d="M9 4 C 5 8, 1 16, 2 26 C 3 34, 6 40, 9 44"  stroke="currentColor" strokeWidth="0.5"  strokeLinecap="round" opacity="0.7" />
      <path d="M9 4 C 13 8, 17 16, 16 26 C 15 34, 12 40, 9 44" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.7" />
      <path d="M9 10 Q6 12 3 14"  stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.55" />
      <path d="M9 16 Q6 18 3 20"  stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.55" />
      <path d="M9 22 Q6 24 3 26"  stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.55" />
      <path d="M9 28 Q7 30 4 32"  stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.40" />
      <path d="M9 34 Q7 36 5 38"  stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.28" />
      <path d="M9 10 Q12 12 15 14" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.55" />
      <path d="M9 16 Q12 18 15 20" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.55" />
      <path d="M9 22 Q12 24 15 26" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.55" />
      <path d="M9 28 Q11 30 14 32" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.40" />
      <path d="M9 34 Q11 36 13 38" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" opacity="0.28" />
      <path d="M9 44 Q8.5 47 9 50" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}
