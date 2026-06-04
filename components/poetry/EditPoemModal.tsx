'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RichEditor from '@/components/poetry/RichEditor'
import type { Poem } from '@/lib/data/poems'

interface EditPoemModalProps {
  poem: Poem
  overrides?: Partial<Poem>
  onSave: (changes: Partial<Poem>) => void
  onClose: () => void
}

export default function EditPoemModal({
  poem,
  overrides,
  onSave,
  onClose,
}: EditPoemModalProps) {
  const merged = { ...poem, ...overrides }

  const [title,    setTitle]    = useState(merged.title)
  const [author,   setAuthor]   = useState(merged.author)
  const [excerpt,  setExcerpt]  = useState(merged.excerpt)
  const [stanzas,  setStanzas]  = useState<string[]>(merged.body)

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const updateStanza = (i: number, value: string) => {
    setStanzas((prev) => prev.map((s, idx) => (idx === i ? value : s)))
  }
  const addStanza    = () => setStanzas((prev) => [...prev, ''])
  const removeStanza = (i: number) =>
    setStanzas((prev) => prev.filter((_, idx) => idx !== i))

  const handleSave = () => {
    onSave({
      title,
      author,
      excerpt,
      body:     stanzas.filter((s) => s.trim() !== ''),
    })
    onClose()
  }

  const labelClass =
    'block font-cinzel text-[0.55rem] tracking-[0.15em] uppercase text-[var(--accent)] mb-1.5'
  const inputClass =
    'w-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text-primary)] font-garamond text-base px-3 py-2 focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 placeholder:text-[var(--text-faint)]'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-10 px-4"
        style={{ background: 'rgba(10, 8, 6, 0.88)', backdropFilter: 'blur(10px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="w-full max-w-2xl"
          style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={`Editar poema: ${poem.title}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--border)]">
            <p className="font-cinzel text-[0.65rem] tracking-[0.18em] uppercase text-[var(--accent)]">
              Editar Poema
            </p>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="text-[var(--text-faint)] hover:text-[var(--text-primary)] transition-colors font-cinzel text-[0.6rem] tracking-[0.12em] uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
            >
              Fechar ✕
            </button>
          </div>

          {/* Form */}
          <div className="px-8 py-8 space-y-6">
            {/* Title */}
            <div>
              <label className={labelClass}>Título</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Author */}
            <div>
              <label className={labelClass}>Autor</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className={labelClass}>Excerto</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Body stanzas */}
            <div>
              <label className={labelClass}>Estrofes</label>
              <div className="space-y-4">
                {stanzas.map((stanza, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-[0.5rem] tracking-[0.1em] uppercase text-[var(--text-faint)]">
                        Estrofe {i + 1}
                      </span>
                      {stanzas.length > 1 && (
                        <button
                          onClick={() => removeStanza(i)}
                          aria-label="Remover estrofe"
                          className="font-cinzel text-[0.5rem] tracking-[0.1em] uppercase text-[var(--text-faint)] hover:text-red-500 transition-colors focus-visible:outline-none"
                        >
                          Remover
                        </button>
                      )}
                    </div>
                    <RichEditor
                      value={stanza}
                      onChange={(html) => updateStanza(i, html)}
                      placeholder={`Estrofe ${i + 1}…`}
                      minRows={3}
                    />
                  </div>
                ))}
                <button
                  onClick={addStanza}
                  className="font-cinzel text-[0.55rem] tracking-[0.12em] uppercase text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors"
                >
                  + Adicionar estrofe
                </button>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="px-8 py-5 border-t border-[var(--border)] flex items-center justify-end gap-4">
            <button
              onClick={onClose}
              className="font-cinzel text-[0.6rem] tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="font-cinzel text-[0.6rem] tracking-[0.15em] uppercase px-6 py-2.5 bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
            >
              Guardar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className} aria-hidden="true">
      <polyline points="3,6 5,6 21,6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  )
}
