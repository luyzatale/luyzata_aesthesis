'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Photo } from '@/lib/data/photos'

interface LatestPhotosProps {
  photos: Photo[]
}

export default function LatestPhotos({ photos }: LatestPhotosProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 px-6" aria-label="Fotografia recente">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-4">Fotografia</p>
          <h2
            className="font-cinzel text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)' }}
          >
            Imagens Recentes
          </h2>
          <p className="font-cormorant italic text-[var(--text-muted)] mt-3 text-lg">
            Uma extensão visual da experiência poética.
          </p>
        </motion.div>

        {/* Photo grid — asymmetric editorial layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.slice(0, 6).map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={
                i === 0
                  ? 'col-span-2 row-span-2 md:col-span-2'
                  : ''
              }
            >
              <PhotoTile photo={photo} priority={i === 0} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/fotos"
            className="font-cinzel text-[0.65rem] tracking-[0.18em] uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            Ver galeria completa
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function PhotoTile({ photo, priority = false }: { photo: Photo; priority?: boolean }) {
  return (
    <Link
      href="/fotos"
      className="block relative overflow-hidden group bg-[var(--bg-surface)]"
      style={{ aspectRatio: photo.width > photo.height ? '4/3' : '3/4' }}
      aria-label={`Ver foto: ${photo.caption ?? photo.alt}`}
    >
      <Image
        src={`/photos/${photo.filename}`}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-all duration-700 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-103"
        priority={priority}
        style={{ filter: 'contrast(1.05) brightness(0.96)' }}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      {/* Caption on hover */}
      {photo.caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="font-cinzel text-[0.55rem] tracking-[0.15em] uppercase text-[var(--text-primary)]">
            {photo.caption}
          </p>
        </div>
      )}
    </Link>
  )
}
