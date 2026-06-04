import type { Metadata } from 'next'
import { CornerOrnament } from '@/components/ui/OrnamentalDivider'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import ScrollBanner from '@/components/ui/ScrollBanner'
import PhotoGallery from '@/components/photos/PhotoGallery'
import { getAllPhotos } from '@/lib/data/photos'

export const metadata: Metadata = {
  title: 'Fotos — Galeria Fotográfica',
  description:
    'Uma extensão visual da experiência poética. Natureza, viagem, Países Baixos, Brasil e o cotidiano.',
}

export default function FotosPage() {
  const photos = getAllPhotos()

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Header */}
      <header className="relative py-24 px-6 overflow-hidden">
        <CornerOrnament
          position="tl"
          className="absolute top-6 left-6 w-12 h-12 text-[var(--accent)] opacity-30 pointer-events-none"
        />
        <CornerOrnament
          position="tr"
          className="absolute top-6 right-6 w-12 h-12 text-[var(--accent)] opacity-30 pointer-events-none"
        />

        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-8">Fotografia</p>

          <ScrollBanner size="lg" className="inline-flex mb-10">
            Fotos
          </ScrollBanner>

          <OrnamentalDivider variant="short" className="mt-10" />
        </div>
      </header>

      {/* Gallery */}
      <main className="max-w-site mx-auto px-6 pb-24">
        <PhotoGallery photos={photos} />
      </main>
    </div>
  )
}
