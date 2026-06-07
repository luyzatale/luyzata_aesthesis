import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aesthesis — Poesia & Fotografia',
    short_name: 'Aesthesis',
    description: 'Um espaço literário onde poesia, fotografia e reflexão se encontram.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0806',
    theme_color: '#0A0806',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
