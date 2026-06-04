'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface InkButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  external?: boolean
}

const base =
  'relative inline-flex items-center justify-center font-cinzel tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group'

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--bg-elevated)]',
  ghost:
    'text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-transparent',
  outline:
    'border border-[var(--border-strong)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] bg-transparent',
}

const sizes: Record<Size, string> = {
  sm: 'text-[0.6rem] px-5 py-2.5 gap-2',
  md: 'text-[0.7rem] px-7 py-3.5 gap-2.5',
  lg: 'text-[0.75rem] px-9 py-4 gap-3',
}

export default function InkButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  type = 'button',
  external,
}: InkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  const inner = (
    <>
      {/* Ink spread hover effect */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
        style={{ background: 'rgba(var(--accent-rgb), 0.12)' }}
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <Link href={href} className={classes} {...linkProps}>
        {inner}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {inner}
    </button>
  )
}
