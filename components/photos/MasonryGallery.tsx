'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { DisplayPhoto } from '@/lib/hooks/usePhotos'

interface MasonryGalleryProps {
  photos: DisplayPhoto[]
}

export default function MasonryGallery({ photos }: MasonryGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const open  = useCallback((i: number) => {
    setActiveIndex(i)
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setActiveIndex(null)
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() =>
    setActiveIndex((i) => i === null ? null : (i + 1) % photos.length),
    [photos.length]
  )

  const goPrev = useCallback(() =>
    setActiveIndex((i) => i === null ? null : (i - 1 + photos.length) % photos.length),
    [photos.length]
  )

  return (
    <>
      <p className="font-cinzel text-[0.6rem] tracking-[0.12em] uppercase text-[var(--text-faint)] mb-8">
        {photos.length} imagens
      </p>

      <div className="masonry-grid">
        {photos.map((photo, i) => (
          <div key={photo.id} className="masonry-item">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.4), ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            >
              <button
                onClick={() => open(i)}
                className="w-full block relative overflow-hidden group bg-[var(--bg-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-label={`Ampliar imagem ${i + 1}`}
              >
                <PhotoImg
                  photo={photo}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[var(--bg)] opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />
              </button>
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            photo={photos[activeIndex]}
            index={activeIndex}
            total={photos.length}
            onClose={close}
            onNext={goNext}
            onPrev={goPrev}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function PhotoImg({
  photo,
  sizes,
  priority = false,
  className = '',
}: {
  photo: DisplayPhoto
  sizes?: string
  priority?: boolean
  className?: string
}) {
  if (photo.isUser) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo.src}
        alt={photo.alt}
        className={`w-full h-auto object-cover transition-all duration-700 grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] ${className}`}
        style={{ filter: 'contrast(1.04) brightness(0.97)' }}
        loading={priority ? 'eager' : 'lazy'}
      />
    )
  }
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      priority={priority}
      className={`w-full h-auto object-cover transition-all duration-700 grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] ${className}`}
      style={{ filter: 'contrast(1.04) brightness(0.97)' }}
    />
  )
}

interface LightboxProps {
  photo:   DisplayPhoto
  index:   number
  total:   number
  onClose: () => void
  onNext:  () => void
  onPrev:  () => void
}

function Lightbox({ photo, index, total, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowRight')  onNext()
      if (e.key === 'ArrowLeft')   onPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onNext, onPrev])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: 'rgba(10, 8, 6, 0.96)', backdropFilter: 'blur(14px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Imagem anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-leather-300 hover:text-white transition-colors focus-visible:outline-none"
      >
        <ChevronIcon direction="left" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Próxima imagem"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-leather-300 hover:text-white transition-colors focus-visible:outline-none"
      >
        <ChevronIcon direction="right" />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="relative max-w-5xl w-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close + counter */}
          <div className="flex items-center justify-between w-full mb-4 px-1">
            <span className="font-cinzel text-[0.55rem] tracking-[0.18em] uppercase text-leather-400">
              {index + 1} / {total}
            </span>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="text-leather-300 hover:text-white transition-colors font-cinzel text-[0.6rem] tracking-[0.15em] uppercase flex items-center gap-2 focus-visible:outline-none"
            >
              Fechar ✕
            </button>
          </div>

          <div className="overflow-hidden w-full">
            <PhotoImg
              photo={photo}
              priority
              className="w-full max-h-[80vh] object-contain !grayscale-0 !scale-100 !transition-none"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      {direction === 'left'
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 18 15 12 9 6" />
      }
    </svg>
  )
}
