'use client'

import { useState } from 'react'
import EditPoemModal from '@/components/poetry/EditPoemModal'
import PasswordModal from '@/components/ui/PasswordModal'
import type { Poem } from '@/lib/data/poems'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface PoemActionsProps {
  poem: Poem
  overrides?: Partial<Poem>
  onHide: (slug: string) => void
  onSave: (slug: string, changes: Partial<Poem>) => void
  featured?: boolean
}

export default function PoemActions({ poem, overrides, onHide, onSave, featured }: PoemActionsProps) {
  const [gatingEdit,   setGatingEdit]   = useState(false)
  const [gatingDelete, setGatingDelete] = useState(false)
  const [editing,      setEditing]      = useState(false)
  const [confirming,   setConfirming]   = useState(false)
  const { t } = useLanguage()

  const isFeatured = featured ?? false

  return (
    <>
      <div className="flex items-center gap-1" onClick={(e) => e.preventDefault()}>
        {/* Star / Destaque */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onSave(poem.slug, { featured: !isFeatured }) }}
          aria-label={isFeatured ? t('poemRemoveFeatured') : t('poemAddFeatured')}
          title={isFeatured ? t('poemRemoveFeatured') : t('poemAddFeatured')}
          className="p-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded"
          style={{ color: isFeatured ? 'var(--accent)' : 'var(--text-faint)' }}
        >
          <StarIcon className="w-3.5 h-3.5" filled={isFeatured} />
        </button>

        {/* Edit */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setGatingEdit(true) }}
          aria-label={`${t('poemEditTitle')}: ${poem.title}`}
          title={t('poemEditTitle')}
          className="p-1.5 text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded"
        >
          <PencilIcon className="w-3.5 h-3.5" />
        </button>

        {/* Delete */}
        {confirming ? (
          <span className="flex items-center gap-1">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onHide(poem.slug); setConfirming(false) }}
              className="font-cinzel text-[0.5rem] tracking-[0.1em] uppercase px-2 py-1 text-red-500 border border-red-500/40 hover:bg-red-500/10 transition-colors focus-visible:outline-none"
            >
              {t('poemConfirm')}
            </button>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setConfirming(false) }}
              className="font-cinzel text-[0.5rem] tracking-[0.1em] uppercase px-2 py-1 text-[var(--text-faint)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none"
            >
              {t('poemCancel')}
            </button>
          </span>
        ) : (
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setGatingDelete(true) }}
            aria-label={`${t('poemRemoveTitle')}: ${poem.title}`}
            title={t('poemRemoveTitle')}
            className="p-1.5 text-[var(--text-faint)] hover:text-red-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-400 rounded"
          >
            <TrashIcon className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {gatingEdit && (
        <PasswordModal
          onSuccess={() => { setGatingEdit(false); setEditing(true) }}
          onClose={() => setGatingEdit(false)}
        />
      )}

      {gatingDelete && (
        <PasswordModal
          onSuccess={() => { setGatingDelete(false); setConfirming(true) }}
          onClose={() => setGatingDelete(false)}
        />
      )}

      {editing && (
        <EditPoemModal
          poem={poem}
          overrides={overrides}
          onSave={(changes) => onSave(poem.slug, changes)}
          onClose={() => setEditing(false)}
        />
      )}
    </>
  )
}

function StarIcon({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"
      fill={filled ? 'currentColor' : 'none'}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
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
