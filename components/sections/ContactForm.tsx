'use client'

import { useState } from 'react'
import InkButton from '@/components/ui/InkButton'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')
  const { t } = useLanguage()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((res) => setTimeout(res, 1400))
    setStatus('success')
    setForm(initialState)
  }

  if (status === 'success') {
    return (
      <div className="py-16 text-center space-y-6">
        <div className="flex justify-center mb-6">
          <OrnamentalDivider variant="short" className="w-48" />
        </div>
        <p
          className="font-cormorant italic text-[var(--text-primary)]"
          style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
        >
          {t('contactSuccessTitle')}
        </p>
        <p className="font-cormorant italic text-[var(--text-muted)] text-base">
          {t('contactSuccessSub')}
        </p>
        <div className="pt-6">
          <InkButton
            onClick={() => setStatus('idle')}
            variant="ghost"
            size="sm"
          >
            {t('contactSuccessBtn')}
          </InkButton>
        </div>
      </div>
    )
  }

  const fieldClass =
    'w-full bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-faint)] font-garamond text-base py-3 px-4 focus:outline-none focus:border-[var(--accent)] transition-colors duration-300'

  const labelClass =
    'block font-cinzel text-[0.6rem] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label={t('contactFormAria')}>
      <div>
        <label htmlFor="name" className={labelClass}>{t('contactNameLabel')}</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t('contactNamePlaceholder')}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t('contactEmailPlaceholder')}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>{t('contactSubjectLabel')}</label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className={`${fieldClass} cursor-pointer`}
          style={{ appearance: 'none' }}
        >
          <option value="" disabled>{t('contactSubjectDefault')}</option>
          <option value="colaboracao">{t('contactSubjectCollab')}</option>
          <option value="exposicao">{t('contactSubjectExpo')}</option>
          <option value="projeto">{t('contactSubjectProject')}</option>
          <option value="pensamento">{t('contactSubjectThought')}</option>
          <option value="outro">{t('contactSubjectOther')}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{t('contactMessageLabel')}</label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          value={form.message}
          onChange={handleChange}
          placeholder={t('contactMessagePlaceholder')}
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="font-cinzel text-[0.6rem] tracking-[0.12em] uppercase text-red-600 dark:text-red-400">
          {t('contactError')}
        </p>
      )}

      <div className="pt-2">
        <InkButton
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full"
        >
          {status === 'submitting' ? t('contactSubmitting') : t('contactSubmit')}
        </InkButton>
      </div>
    </form>
  )
}
