'use client'

import { useState } from 'react'
import MasonryGallery from '@/components/photos/MasonryGallery'
import AddPhotoModal from '@/components/photos/AddPhotoModal'
import PasswordModal from '@/components/ui/PasswordModal'
import { usePhotos } from '@/lib/hooks/usePhotos'
import type { Photo } from '@/lib/data/photos'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos: staticPhotos }: PhotoGalleryProps) {
  const [gating, setGating] = useState(false)
  const [adding, setAdding] = useState(false)
  const { allPhotos, addPhoto, removePhoto, hidePhoto, updatePhotoAlt } = usePhotos(staticPhotos)
  const { t } = useLanguage()

  const handleDelete = (id: string) => {
    const isUser = allPhotos.find((p) => p.id === id)?.isUser
    if (isUser) removePhoto(id)
    else hidePhoto(id)
  }

  return (
    <>
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setGating(true)}
          className="flex items-center gap-2 font-cinzel text-[0.6rem] tracking-[0.15em] uppercase px-5 py-3 border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
          aria-label={t('galleryAddAria')}
        >
          <PlusIcon className="w-3.5 h-3.5" />
          {t('galleryAddLabel')}
        </button>
      </div>

      <MasonryGallery
        photos={allPhotos}
        onDelete={handleDelete}
        onEditAlt={updatePhotoAlt}
      />

      {gating && (
        <PasswordModal
          onSuccess={() => { setGating(false); setAdding(true) }}
          onClose={() => setGating(false)}
        />
      )}

      {adding && (
        <AddPhotoModal
          onAdd={(file) => addPhoto(file)}
          onClose={() => setAdding(false)}
        />
      )}
    </>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className} aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
