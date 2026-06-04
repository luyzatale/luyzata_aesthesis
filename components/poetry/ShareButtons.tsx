'use client'

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const url = `https://aesthesis.com/aesthesis/${slug}`
  const text = encodeURIComponent(`"${title}" — Aesthesis`)

  const copyLink = () => {
    navigator.clipboard?.writeText(url).catch(() => {})
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <a
        href={`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-cinzel text-[0.55rem] tracking-[0.15em] uppercase text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors duration-300"
        aria-label="Partilhar no Twitter"
      >
        Twitter
      </a>
      <span className="text-[var(--border-strong)]" aria-hidden>·</span>
      <a
        href={`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-cinzel text-[0.55rem] tracking-[0.15em] uppercase text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors duration-300"
        aria-label="Partilhar no WhatsApp"
      >
        WhatsApp
      </a>
      <span className="text-[var(--border-strong)]" aria-hidden>·</span>
      <button
        onClick={copyLink}
        className="font-cinzel text-[0.55rem] tracking-[0.15em] uppercase text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
        aria-label="Copiar ligação"
      >
        Copiar ligação
      </button>
    </div>
  )
}
