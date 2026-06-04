export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ paddingTop: 'var(--nav-h)' }}
      aria-label="Carregando"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="block w-1 h-1 rounded-full bg-[var(--accent)] animate-[float_1.2s_ease-in-out_infinite]" style={{ animationDelay: '0ms' }} />
          <span className="block w-1 h-1 rounded-full bg-[var(--accent)] animate-[float_1.2s_ease-in-out_infinite]" style={{ animationDelay: '150ms' }} />
          <span className="block w-1 h-1 rounded-full bg-[var(--accent)] animate-[float_1.2s_ease-in-out_infinite]" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="font-cinzel text-[0.55rem] tracking-[0.2em] uppercase text-[var(--text-faint)]">
          Aesthesis
        </p>
      </div>
    </div>
  )
}
