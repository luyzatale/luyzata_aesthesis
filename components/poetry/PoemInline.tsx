'use client'

import ScrollBanner from '@/components/ui/ScrollBanner'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import ShareButtons from '@/components/poetry/ShareButtons'
import PoemActions from '@/components/poetry/PoemActions'
import type { Poem } from '@/lib/data/poems'
import { formatDate } from '@/lib/utils'

interface PoemInlineProps {
  poem:      Poem
  onHide:    (slug: string) => void
  onSave:    (slug: string, changes: Partial<Poem>) => void
  overrides?: Partial<Poem>
}

export default function PoemInline({ poem, onHide, onSave, overrides }: PoemInlineProps) {
  // When no title, use the author's name in the banner
  const bannerText = poem.title.trim() || poem.author

  return (
    <div className="border border-[var(--border)] bg-[var(--bg-surface)]">

      {/* Header */}
      <div className="py-14 px-6 text-center border-b border-[var(--border)]">
        <ScrollBanner size="lg" className="inline-flex mb-8">
          {bannerText}
        </ScrollBanner>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <cite className="font-cinzel text-[0.65rem] tracking-[0.18em] uppercase text-[var(--text-muted)] not-italic">
            {poem.author}
          </cite>
          <span className="text-[var(--border-strong)]" aria-hidden>·</span>
          <time dateTime={poem.date} className="font-cinzel text-[0.6rem] tracking-[0.12em] uppercase text-[var(--text-faint)]">
            {formatDate(poem.date)}
          </time>
          <span className="text-[var(--border-strong)]" aria-hidden>·</span>
          <span className="font-cinzel text-[0.6rem] tracking-[0.12em] uppercase text-[var(--text-faint)]">
            {poem.readingTime} min de leitura
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-prose mx-auto px-6 py-12">

        {/* Actions */}
        <div className="flex justify-end mb-6">
          <PoemActions
            poem={poem}
            overrides={overrides}
            onHide={onHide}
            onSave={onSave}
          />
        </div>

        {/* Attached image */}
        {poem.imageSrc && (
          <div className="mb-12 flex justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poem.imageSrc}
              alt={`Imagem associada a ${bannerText}`}
              className="max-h-80 w-auto object-contain border border-[var(--border)]"
              style={{ filter: 'contrast(1.04) brightness(0.96)' }}
            />
          </div>
        )}

        {/* Poem text */}
        <article className="poem-body text-left">
          {poem.body.map((stanza, i) =>
            /<[^>]+>/.test(stanza) ? (
              <p key={i} dangerouslySetInnerHTML={{ __html: stanza }} />
            ) : (
              <p key={i}>{stanza}</p>
            )
          )}
        </article>

        {poem.authorNote && (
          <p className="mt-10 text-center font-cinzel text-[0.55rem] tracking-[0.12em] uppercase text-[var(--text-faint)]">
            {poem.authorNote}
          </p>
        )}

        <OrnamentalDivider className="my-14" />

        <div className="text-center">
          <p className="section-label mb-4">Partilhar</p>
          <ShareButtons title={bannerText} slug={poem.slug} />
        </div>
      </div>
    </div>
  )
}
