import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface OrnamentalDividerProps {
  className?: string
  variant?: 'full' | 'short' | 'dot' | 'chapter'
}

export default function OrnamentalDivider({
  className,
  variant = 'full',
}: OrnamentalDividerProps) {
  if (variant === 'dot') {
    return (
      <div className={cn('flex items-center justify-center gap-3 py-6', className)}>
        <span className="block w-1 h-1 rounded-full bg-[var(--accent)]" />
        <span className="block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        <span className="block w-1 h-1 rounded-full bg-[var(--accent)]" />
      </div>
    )
  }

  if (variant === 'short') {
    return (
      <div className={cn('flex items-center justify-center gap-4 py-8', className)}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--accent-warm)]" />
        <FleuronSVG className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--accent-warm)]" />
      </div>
    )
  }

  if (variant === 'chapter') {
    return (
      <div className={cn('flex flex-col items-center gap-3 py-10', className)}>
        <div className="flex items-center gap-4 w-full max-w-sm">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--border-strong)]" />
          <DiamondSVG className="w-3 h-3 text-[var(--accent)] flex-shrink-0" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--border-strong)]" />
        </div>
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-5 py-10', className)}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
      <OrnamentSVG className="w-20 h-5 text-[var(--accent)]" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
    </div>
  )
}

function OrnamentSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 10 H28" stroke="currentColor" strokeWidth="0.5" />
      <path d="M52 10 H80" stroke="currentColor" strokeWidth="0.5" />
      <path d="M32 4 L40 10 L32 16" stroke="currentColor" strokeWidth="0.75" fill="none" />
      <path d="M48 4 L40 10 L48 16" stroke="currentColor" strokeWidth="0.75" fill="none" />
      <circle cx="40" cy="10" r="2" fill="currentColor" />
      <circle cx="28" cy="10" r="1" fill="currentColor" />
      <circle cx="52" cy="10" r="1" fill="currentColor" />
    </svg>
  )
}

function FleuronSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 1 C8 1 10 5 8 8 C6 5 8 1 8 1Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M8 15 C8 15 10 11 8 8 C6 11 8 15 8 15Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M1 8 C1 8 5 10 8 8 C5 6 1 8 1 8Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M15 8 C15 8 11 10 8 8 C11 6 15 8 15 8Z"
        fill="currentColor"
        opacity="0.7"
      />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    </svg>
  )
}

function DiamondSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 1 L11 6 L6 11 L1 6 Z" fill="currentColor" opacity="0.9" />
    </svg>
  )
}

export function CornerOrnament({
  position,
  className,
  style,
}: {
  position: 'tl' | 'tr' | 'bl' | 'br'
  className?: string
  style?: CSSProperties
}) {
  const transforms = {
    tl: '',
    tr: 'translate(60, 0) scale(-1, 1)',
    bl: 'translate(0, 60) scale(1, -1)',
    br: 'translate(60, 60) scale(-1, -1)',
  }

  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <g transform={transforms[position]}>
        <path d="M2 2 L22 2" stroke="currentColor" strokeWidth="1" />
        <path d="M2 2 L2 22" stroke="currentColor" strokeWidth="1" />
        <path d="M2 2 L8 2 L8 8 L2 8 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <path d="M5 5 Q15 5 18 15" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M5 5 Q5 15 15 18" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="5" cy="5" r="1.5" fill="currentColor" />
        <circle cx="22" cy="2" r="0.75" fill="currentColor" />
        <circle cx="2" cy="22" r="0.75" fill="currentColor" />
      </g>
    </svg>
  )
}
