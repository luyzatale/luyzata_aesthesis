'use client'

import { useState, useRef, useEffect, useCallback, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface AddPhotoModalProps {
  onAdd:    (file: File) => Promise<unknown>
  onClose:  () => void
}

export default function AddPhotoModal({ onAdd, onClose }: AddPhotoModalProps) {
  const uid     = useId()
  const fileRef = useRef<HTMLInputElement>(null)
  const { t } = useLanguage()

  const [file,     setFile]     = useState<File | null>(null)
  const [preview,  setPreview]  = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const [saving,   setSaving]   = useState(false)
  const [error,    setError]    = useState('')

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleFile = useCallback((f: File) => {
    if (!f.type.startsWith('image/')) {
      setError(t('addPhotoErrorImg'))
      return
    }
    setFile(f)
    setPreview(URL.createObjectURL(f))
    setError('')
  }, [t])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFile(f)
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f) handleFile(f)
  }

  const handleSave = async () => {
    if (!file) { setError(t('addPhotoErrorSelect')); return }
    setSaving(true)
    try {
      await onAdd(file)
      onClose()
    } catch {
      setError(t('errorSave'))
      setSaving(false)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ background: 'rgba(10,8,6,0.90)', backdropFilter: 'blur(12px)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="w-full max-w-md"
          style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${uid}-heading`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--border)]">
            <p id={`${uid}-heading`} className="font-cinzel text-[0.65rem] tracking-[0.18em] uppercase text-[var(--accent)]">
              {t('addPhotoTitle')}
            </p>
            <button
              onClick={onClose}
              aria-label={t('modalCloseAria')}
              className="text-[var(--text-faint)] hover:text-[var(--text-primary)] transition-colors font-cinzel text-[0.6rem] tracking-[0.12em] uppercase focus-visible:outline-none"
            >
              {t('modalClose')}
            </button>
          </div>

          <div className="px-8 py-8">
            {/* Drop zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              onClick={() => fileRef.current?.click()}
              className={`cursor-pointer border border-dashed transition-all duration-300 flex flex-col items-center justify-center gap-3 ${
                dragging
                  ? 'border-[var(--accent)]'
                  : 'border-[var(--border)] hover:border-[var(--accent)]'
              }`}
              style={{ minHeight: preview ? 'auto' : '200px', background: 'var(--bg)' }}
              role="button"
              tabIndex={0}
              aria-label={t('addPhotoAriaSelect')}
              onKeyDown={(e) => e.key === 'Enter' && fileRef.current?.click()}
            >
              {preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={preview}
                  alt={t('addPhotoPreview')}
                  className="w-full max-h-72 object-contain"
                />
              ) : (
                <>
                  <UploadIcon className="w-8 h-8 text-[var(--text-faint)]" />
                  <p className="font-cinzel text-[0.6rem] tracking-[0.15em] uppercase text-[var(--text-faint)] text-center px-4">
                    {t('addPhotoClick')}
                  </p>
                  <p className="font-cormorant italic text-[var(--text-faint)] text-xs">
                    {t('addPhotoFormats')}
                  </p>
                </>
              )}
            </div>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onInputChange}
              className="sr-only"
              aria-hidden="true"
            />

            {file && (
              <p className="font-cinzel text-[0.5rem] tracking-[0.1em] uppercase text-[var(--text-faint)] mt-2">
                {file.name} · {(file.size / 1024 / 1024).toFixed(1)} MB
              </p>
            )}

            {error && (
              <p className="font-cinzel text-[0.6rem] tracking-[0.12em] uppercase text-red-500 mt-4">
                {error}
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 py-5 border-t border-[var(--border)] flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="font-cinzel text-[0.6rem] tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none"
            >
              {t('modalCancel')}
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving || !file}
              className="font-cinzel text-[0.6rem] tracking-[0.15em] uppercase px-6 py-2.5 bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
              {saving ? t('saving') : t('addPhotoAdd')}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  )
}
