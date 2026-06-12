'use client'

import { useState, useEffect, useRef, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const SECRET = 'Sun*1010'

interface PasswordModalProps {
  onSuccess: () => void
  onClose:   () => void
}

export default function PasswordModal({ onSuccess, onClose }: PasswordModalProps) {
  const uid      = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [value,  setValue]  = useState('')
  const [error,  setError]  = useState(false)
  const [shake,  setShake]  = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    setTimeout(() => inputRef.current?.focus(), 80)
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const attempt = () => {
    if (value === SECRET) {
      onSuccess()
    } else {
      setError(true)
      setShake(true)
      setValue('')
      setTimeout(() => setShake(false), 500)
      inputRef.current?.focus()
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ background: 'rgba(10,8,6,0.92)', backdropFilter: 'blur(14px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shake ? { x: [-6, 6, -5, 5, -3, 3, 0] } : { opacity: 1, y: 0, x: 0 }}
          transition={shake
            ? { duration: 0.45, ease: 'easeInOut' }
            : { duration: 0.32, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }
          }
          className="w-full max-w-sm"
          style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${uid}-heading`}
        >
          <div className="px-8 py-6 border-b border-[var(--border)] flex items-center justify-between">
            <p id={`${uid}-heading`} className="font-cinzel text-[0.65rem] tracking-[0.18em] uppercase text-[var(--accent)]">
              {t('pwdTitle')}
            </p>
            <button
              onClick={onClose}
              className="font-cinzel text-[0.6rem] tracking-[0.1em] uppercase text-[var(--text-faint)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none"
            >
              ✕
            </button>
          </div>

          <div className="px-8 py-8 space-y-5">
            <div>
              <label htmlFor={`${uid}-pw`} className="block font-cinzel text-[0.55rem] tracking-[0.15em] uppercase text-[var(--accent)] mb-2">
                {t('pwdLabel')}
              </label>
              <input
                id={`${uid}-pw`}
                ref={inputRef}
                type="password"
                value={value}
                onChange={(e) => { setValue(e.target.value); setError(false) }}
                onKeyDown={(e) => e.key === 'Enter' && attempt()}
                placeholder="••••••••"
                autoComplete="off"
                className="w-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text-primary)] font-garamond text-base px-3 py-2.5 focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 placeholder:text-[var(--text-faint)]"
                style={{ borderColor: error ? 'rgba(220,60,60,0.6)' : undefined }}
              />
              {error && (
                <p className="mt-2 font-cinzel text-[0.55rem] tracking-[0.12em] uppercase text-red-500">
                  {t('pwdError')}
                </p>
              )}
            </div>
          </div>

          <div className="px-8 py-5 border-t border-[var(--border)] flex justify-end gap-4">
            <button
              onClick={onClose}
              className="font-cinzel text-[0.6rem] tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none"
            >
              {t('modalCancel')}
            </button>
            <button
              onClick={attempt}
              className="font-cinzel text-[0.6rem] tracking-[0.15em] uppercase px-6 py-2.5 bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] transition-colors focus-visible:outline-none"
            >
              {t('pwdEnter')}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
