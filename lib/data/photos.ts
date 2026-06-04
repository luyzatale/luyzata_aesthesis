export interface Photo {
  id: string
  slug: string
  filename: string
  alt: string
  caption?: string
  reflection?: string
  relatedPoemSlug?: string
  category: string
  tags: string[]
  date?: string
  location?: string
  width: number
  height: number
  featured: boolean
}

export const photoCategories = [
  'Tudo',
  'Natureza',
  'Viagem',
  'Países Baixos',
  'Brasil',
  'Cotidiano',
  'Abstracto',
] as const

export type PhotoCategory = (typeof photoCategories)[number]

export const photos: Photo[] = [
  {
    id: 'p001', slug: 'nuvens-outono', filename: 'photo-001.avif',
    alt: 'Nuvens de outono sobre campos planos',
    caption: 'Nuvens de outono', reflection: 'O céu nos Países Baixos é sempre um evento.',
    relatedPoemSlug: 'netherlands',
    category: 'Países Baixos', tags: ['céu', 'nuvens', 'outono'],
    date: '2023-10-14', location: 'Países Baixos',
    width: 1600, height: 1067, featured: true,
  },
  {
    id: 'p002', slug: 'canal-amsterdam', filename: 'photo-002.avif',
    alt: 'Canal ao amanhecer em Amesterdão',
    caption: 'Canal ao amanhecer',
    category: 'Países Baixos', tags: ['canal', 'água', 'amanhecer'],
    date: '2023-09-07', location: 'Amesterdão',
    width: 1600, height: 1200, featured: false,
  },
  {
    id: 'p003', slug: 'floresta-silenciosa', filename: 'photo-003.avif',
    alt: 'Floresta em neblina matinal',
    caption: 'Floresta em silêncio', reflection: 'Há lugares que só existem de manhã.',
    relatedPoemSlug: 'in-silence',
    category: 'Natureza', tags: ['floresta', 'neblina', 'silêncio'],
    date: '2023-11-22',
    width: 1067, height: 1600, featured: true,
  },
  {
    id: 'p004', slug: 'praia-nordeste', filename: 'photo-004.avif',
    alt: 'Praia do Nordeste brasileiro ao entardecer',
    caption: 'Nordeste, entardecer',
    category: 'Brasil', tags: ['praia', 'mar', 'entardecer'],
    date: '2024-01-08', location: 'Brasil',
    width: 1600, height: 900, featured: false,
  },
  {
    id: 'p005', slug: 'tulipas-primavera', filename: 'photo-005.avif',
    alt: 'Campo de tulipas na primavera',
    caption: 'Primavera em flor',
    category: 'Países Baixos', tags: ['tulipas', 'primavera', 'flores'],
    date: '2024-04-19', location: 'Keukenhof',
    width: 1600, height: 1067, featured: true,
  },
  {
    id: 'p006', slug: 'rua-chuva', filename: 'photo-006.avif',
    alt: 'Rua de paralelepípedos na chuva',
    caption: 'Chuva de setembro',
    relatedPoemSlug: 'horizonte',
    category: 'Cotidiano', tags: ['rua', 'chuva', 'reflexo'],
    date: '2023-09-28',
    width: 1067, height: 1600, featured: false,
  },
  {
    id: 'p007', slug: 'luz-janela', filename: 'photo-007.avif',
    alt: 'Luz atravessando janela antiga',
    caption: 'Luz de inverno', reflection: 'A luz tem peso quando é antiga.',
    relatedPoemSlug: 'the-weight-of-light',
    category: 'Abstracto', tags: ['luz', 'sombra', 'janela'],
    date: '2023-12-10',
    width: 1200, height: 1600, featured: true,
  },
  {
    id: 'p008', slug: 'mercado-brasil', filename: 'photo-008.avif',
    alt: 'Mercado popular no Brasil',
    caption: 'Cotidiano',
    category: 'Brasil', tags: ['mercado', 'pessoas', 'cores'],
    date: '2024-02-14', location: 'Brasil',
    width: 1600, height: 1067, featured: false,
  },
  {
    id: 'p009', slug: 'inverno-gelo', filename: 'photo-009.avif',
    alt: 'Canal congelado no inverno',
    caption: 'Inverno',
    relatedPoemSlug: 'as-estacoes',
    category: 'Países Baixos', tags: ['inverno', 'gelo', 'canal'],
    date: '2024-01-17', location: 'Países Baixos',
    width: 1600, height: 900, featured: false,
  },
  {
    id: 'p010', slug: 'horizonte-mar', filename: 'photo-010.avif',
    alt: 'Horizonte sobre o mar ao entardecer',
    caption: 'Horizonte', reflection: 'O horizonte é uma promessa que o espaço faz a si mesmo.',
    relatedPoemSlug: 'horizonte',
    category: 'Natureza', tags: ['mar', 'horizonte', 'entardecer'],
    date: '2024-03-01',
    width: 1600, height: 800, featured: true,
  },
  {
    id: 'p011', slug: 'moinhos-vento', filename: 'photo-011.avif',
    alt: 'Moinhos de vento ao entardecer',
    caption: 'Moinhos',
    category: 'Países Baixos', tags: ['moinhos', 'campo', 'entardecer'],
    date: '2023-08-30', location: 'Kinderdijk',
    width: 1600, height: 900, featured: false,
  },
  {
    id: 'p012', slug: 'sombra-folhas', filename: 'photo-012.avif',
    alt: 'Sombras de folhas no chão',
    caption: 'Sombras',
    relatedPoemSlug: 'vespera',
    category: 'Abstracto', tags: ['sombra', 'luz', 'folhas'],
    date: '2024-05-03',
    width: 1200, height: 1600, featured: false,
  },
]

export function getAllPhotos(): Photo[] {
  return photos
}

export function getPhotosByCategory(category: string): Photo[] {
  if (category === 'Tudo') return photos
  return photos.filter((p) => p.category === category)
}

export function getFeaturedPhotos(): Photo[] {
  return photos.filter((p) => p.featured)
}

export function getPhotoBySlug(slug: string): Photo | undefined {
  return photos.find((p) => p.slug === slug)
}
