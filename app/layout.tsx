import type { Metadata, Viewport } from 'next'
import { Cinzel, Cormorant_Garamond, EB_Garamond, Caveat } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CornerFrame from '@/components/ui/CornerFrame'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aesthesis — Poesia & Fotografia',
    template: '%s | Aesthesis',
  },
  description:
    'Um espaço literário onde poesia, fotografia e reflexão se encontram. Palavras e imagens por Luyza T.A.',
  keywords: ['poesia', 'fotografia', 'reflexão', 'literatura', 'aesthesis', 'aisthesis'],
  authors: [{ name: 'Luyza T.A.' }],
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Aesthesis',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'Aesthesis — Poesia & Fotografia',
    description:
      'Um espaço literário onde poesia, fotografia e reflexão se encontram.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aesthesis — Poesia & Fotografia',
    description:
      'Um espaço literário onde poesia, fotografia e reflexão se encontram.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5EDD8' },
    { media: '(prefers-color-scheme: dark)',  color: '#0A0806' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Prevent flash of un-themed content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('aesthesis-theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${ebGaramond.variable} ${caveat.variable}`}
      >
        <Navigation />
        <CornerFrame />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
