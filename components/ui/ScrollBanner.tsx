import { cn } from '@/lib/utils'

interface ScrollBannerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function ScrollBanner({
  children,
  className,
  size = 'md',
}: ScrollBannerProps) {
  const sizeClasses = {
    sm: 'px-8 py-3 text-sm',
    md: 'px-10 py-4 text-base',
    lg: 'px-14 py-5 text-lg',
  }

  return (
    <div className={cn('relative inline-flex flex-col items-center', className)}>
      {/* Scroll top curl */}
      <svg
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xs text-[var(--accent-warm)]"
        aria-hidden="true"
      >
        <path
          d="M20 20 Q60 4 120 4 Q180 4 220 20"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M20 20 Q60 8 120 8 Q180 8 220 20"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M0 22 Q20 18 20 20 L220 20 Q220 18 240 22"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </svg>

      {/* Banner body */}
      <div
        className={cn(
          'relative border-x border-[var(--border-strong)] bg-[var(--bg-surface)]',
          'flex items-center justify-center w-full',
          sizeClasses[size]
        )}
        style={{
          boxShadow: 'inset 0 1px 0 var(--border), inset 0 -1px 0 var(--border)',
        }}
      >
        <div className="font-cinzel tracking-widest text-[var(--text-primary)] text-center">
          {children}
        </div>
      </div>

      {/* Scroll bottom curl */}
      <svg
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xs text-[var(--accent-warm)]"
        aria-hidden="true"
      >
        <path
          d="M0 2 Q20 6 20 4 L220 4 Q220 6 240 2"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M20 4 Q60 20 120 20 Q180 20 220 4"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M20 4 Q60 16 120 16 Q180 16 220 4"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  )
}
