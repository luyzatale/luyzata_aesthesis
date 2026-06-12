import type { Metadata } from 'next'
import PhotoGallery from '@/components/photos/PhotoGallery'
import FotosHeader from '@/components/pages/FotosHeader'
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
      <FotosHeader />

      {/* Gallery */}
      <main className="max-w-site mx-auto px-6 pb-24">
        <PhotoGallery photos={photos} />
      </main>
    </div>
  )
}
