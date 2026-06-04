'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import ScrollBanner from '@/components/ui/ScrollBanner'
import type { Poem } from '@/lib/data/poems'
import { formatDateShort } from '@/lib/utils'

interface FeaturedPoemProps {
  poem: Poem
}

export default function FeaturedPoem({ poem }: FeaturedPoemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-24 px-6"
      aria-label="Poema em destaque"
    >
      <div className="max-w-2xl mx-auto">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-label text-center mb-10"
        >
          Poema em Destaque
        </motion.p>

        {/* Scroll banner title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <ScrollBanner size="md">
            {poem.title}
          </ScrollBanner>
        </motion.div>

        {/* Poem body */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="poem-body text-center">
            {poem.body.slice(0, 2).map((stanza, i) => (
              <p key={i}>{stanza}</p>
            ))}
            {poem.body.length > 2 && (
              <p className="text-[var(--text-faint)] italic">
                […]
              </p>
            )}
          </div>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center gap-4 mt-10"
        >
          <div className="flex items-center gap-4">
            <span className="block h-px w-12 bg-[var(--border-strong)]" />
            <cite className="font-cinzel text-[0.6rem] tracking-[0.18em] uppercase text-[var(--text-muted)] not-italic">
              {poem.author}
            </cite>
            <span className="block h-px w-12 bg-[var(--border-strong)]" />
          </div>

          <time
            dateTime={poem.date}
            className="font-cinzel text-[0.55rem] tracking-[0.15em] uppercase text-[var(--text-faint)]"
          >
            {formatDateShort(poem.date)}
          </time>

          <Link
            href={`/aesthesis/${poem.slug}`}
            className="mt-4 font-cinzel text-[0.6rem] tracking-[0.18em] uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-2 group"
          >
            Ler poema completo
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
