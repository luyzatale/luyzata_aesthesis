export interface Poem {
  id: string
  slug: string
  title: string
  body: string[]
  author: string
  authorNote?: string
  category: string[]
  tags: string[]
  date: string
  readingTime: number
  featured: boolean
  language: 'pt' | 'en'
  excerpt: string
  imageKey?: string    // IndexedDB key for attached image blob
  imageSrc?: string    // resolved blob URL (runtime only, not persisted)
  photoCredit?: string // e.g. "Photo by: João Silva"
}

export const poems: Poem[] = [
  {
    id: '001',
    slug: 'transeunte-eterno',
    title: 'Transeunte Eterno',
    body: [
      'Transeuntes eternos de nós mesmos,\nnão há paisagem senão aquela que somos.',
      'O horizonte que buscamos\nsomos nós mesmos no ar,\ne o mar que encontramos\né o próprio olhar.',
      'Partimos sempre do mesmo lugar —\no silêncio que habita\no fundo de ser.',
      'E quando julgamos chegar,\ndescubrimos apenas\nque ainda somos o caminho.',
    ],
    author: 'Fernando Pessoa',
    category: ['Existência', 'Identidade'],
    tags: ['identidade', 'viagem', 'ser', 'silêncio'],
    date: '2024-03-15',
    readingTime: 1,
    featured: true,
    language: 'pt',
    excerpt:
      'Transeuntes eternos de nós mesmos, não há paisagem senão aquela que somos.',
  },
  {
    id: '002',
    slug: 'the-dawn-within',
    title: 'The Dawn Within',
    body: [
      'The weight of trials may press your soul,\nYet faith within still makes you whole.\nThe chains of sorrow, veils of night,\nShall drift away before His Light.',
      'The storm may howl, the night may cry,\nBut dawn is near, the clouds pass by.\nWhat\'s built on truth shall never fall,\nFor Allah sees and knows it all.',
      'Your worth\'s not bound by fleeting hands,\nBut by the Light that always stands.\nEach tear you hide, each prayer you raise,\nIs stored with Him, in endless ways.',
      'So hold with strength, though hearts may tire,\nFor mercy flows and lifts you higher.\nAnd every burden, sharp and sore,\nBrings you to Jannah\'s open door.',
    ],
    author: 'Aesthesis',
    category: ['Fé', 'Resiliência'],
    tags: ['fé', 'esperança', 'luz', 'noite', 'misericórdia'],
    date: '2024-11-20',
    readingTime: 2,
    featured: true,
    language: 'en',
    excerpt:
      'The weight of trials may press your soul, Yet faith within still makes you whole.',
  },
  {
    id: '003',
    slug: 'o-mar-interior',
    title: 'O Mar Interior',
    body: [
      'Há um mar dentro de mim\nque ninguém jamais navegou.',
      'Suas águas não têm cor\nque os olhos possam nomear —\nsão feitas de tudo aquilo\nque ficou por dizer.',
      'As ondas batem em rochas\nque só eu conheço.\nAs tempestades nascem\nde silêncios antigos.',
      'E quando o mundo pergunta\ncomo estou,\neu digo: bem —\ne o mar dorme.',
    ],
    author: 'L. Serrano',
    category: ['Interioridade', 'Silêncio'],
    tags: ['mar', 'silêncio', 'interior', 'emoção'],
    date: '2024-07-08',
    readingTime: 1,
    featured: false,
    language: 'pt',
    excerpt:
      'Há um mar dentro de mim que ninguém jamais navegou.',
  },
  {
    id: '004',
    slug: 'horizonte',
    title: 'Horizonte',
    body: [
      'O horizonte não é um lugar.\nÉ a promessa que o espaço\nfaz a si mesmo.',
      'Cada vez que nos aproximamos,\nrecua —\nnão por crueldade,\nmas porque pertence\nà natureza do desejo.',
      'Aprendi que caminhar\nnão é chegar.\nÉ aprender a viver\nna distância entre\no que somos\ne o que esperamos ser.',
    ],
    author: 'L. Serrano',
    category: ['Viagem', 'Existência'],
    tags: ['horizonte', 'desejo', 'caminho', 'viagem'],
    date: '2024-05-21',
    readingTime: 1,
    featured: false,
    language: 'pt',
    excerpt:
      'O horizonte não é um lugar. É a promessa que o espaço faz a si mesmo.',
  },
  {
    id: '005',
    slug: 'in-silence',
    title: 'In Silence',
    body: [
      'Between words\nthere is a country\nI have always wanted to live in.',
      'A place where meaning\nis not spoken\nbut felt —\nthe way light moves\nthrough old glass.',
      'I have been learning\nthe language of pauses,\nthe grammar of absence,\nthe dialect of things\nnever said.',
      'In silence\nI am most\ncompletely\nmyself.',
    ],
    author: 'Aesthesis',
    category: ['Silêncio', 'Contemplação'],
    tags: ['silêncio', 'contemplação', 'linguagem', 'ser'],
    date: '2024-09-03',
    readingTime: 1,
    featured: false,
    language: 'en',
    excerpt:
      'Between words there is a country I have always wanted to live in.',
  },
  {
    id: '006',
    slug: 'vespera',
    title: 'Véspera',
    body: [
      'Na véspera das grandes partidas\ntudo parece mais nítido —\no cheiro do café,\na luz na janela,\na forma como o vento\ndobra as folhas de sempre.',
      'Há uma claridade estranha\nno que está prestes a ser perdido.',
      'Talvez a beleza\nsó se revele completamente\nquando sabemos\nque estamos a vê-la\npela última vez.',
    ],
    author: 'L. Serrano',
    category: ['Memória', 'Despedida'],
    tags: ['partida', 'memória', 'beleza', 'perda'],
    date: '2024-01-14',
    readingTime: 1,
    featured: true,
    language: 'pt',
    excerpt:
      'Na véspera das grandes partidas tudo parece mais nítido.',
  },
  {
    id: '007',
    slug: 'the-weight-of-light',
    title: 'The Weight of Light',
    body: [
      'A photograph is not a memory.\nIt is evidence\nthat something beautiful\nexisted,\nonce,\nlong enough\nto be seen.',
      'We press the shutter\nnot to stop time\nbut to confess\nour fear of losing it.',
      'Every image is a prayer\nfor permanence\nin a world\nthat will not grant it.',
    ],
    author: 'Aesthesis',
    category: ['Fotografia', 'Memória'],
    tags: ['fotografia', 'memória', 'tempo', 'luz'],
    date: '2024-08-17',
    readingTime: 1,
    featured: false,
    language: 'en',
    excerpt:
      'A photograph is not a memory. It is evidence that something beautiful existed, once.',
  },
  {
    id: '008',
    slug: 'as-estacoes',
    title: 'As Estações',
    body: [
      'O outono não é uma estação.\nÉ um estado de espírito\npara quem aprendeu\na deixar partir.',
      'O inverno não é frio.\nÉ o silêncio necessário\nantes de toda\nresurreição.',
      'A primavera não promete.\nApenas acontece —\ncomo a graça,\nsem aviso.',
      'E o verão\né tudo aquilo\nque ousamos\nser.',
    ],
    author: 'L. Serrano',
    category: ['Natureza', 'Tempo'],
    tags: ['estações', 'natureza', 'tempo', 'transformação'],
    date: '2024-04-22',
    readingTime: 1,
    featured: false,
    language: 'pt',
    excerpt:
      'O outono não é uma estação. É um estado de espírito para quem aprendeu a deixar partir.',
  },
  {
    id: '009',
    slug: 'despedida',
    title: 'Despedida',
    body: [
      'Partir\nnão é apenas ir embora.',
      'É deixar\numa versão de si\nno lugar onde se estava —\ncomo uma impressão\nno travesseiro\napós o sono.',
      'Cada despedida\nnos diminui um pouco\ne nos aumenta\nna mesma medida.',
      'E assim vamos\ntornando-nos\numa coleção\nde lugares\nque um dia\nforam nós.',
    ],
    author: 'L. Serrano',
    category: ['Despedida', 'Viagem'],
    tags: ['despedida', 'partida', 'identidade', 'lugares'],
    date: '2024-02-09',
    readingTime: 1,
    featured: false,
    language: 'pt',
    excerpt:
      'Partir não é apenas ir embora. É deixar uma versão de si no lugar onde se estava.',
  },
  {
    id: '010',
    slug: 'netherlands',
    title: 'Países Baixos',
    body: [
      'Neste país plano\naprendi que a grandeza\nnão precisa de montanhas.',
      'Aprendi que a luz\npode ser um evento —\nque o céu, quando amplo,\ntorna-se presença.',
      'E que a água\nque mantém o mar afastado\nem silêncio profundo\ntambém tem a sua forma\nde amor.',
    ],
    author: 'L. Serrano',
    authorNote: 'Escrito nos Países Baixos, inverno de 2023',
    category: ['Viagem', 'Natureza'],
    tags: ['holanda', 'luz', 'paisagem', 'água'],
    date: '2023-12-01',
    readingTime: 1,
    featured: false,
    language: 'pt',
    excerpt:
      'Neste país plano aprendi que a grandeza não precisa de montanhas.',
  },
]

export function getAllPoems(): Poem[] {
  return [...poems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPoemBySlug(slug: string): Poem | undefined {
  return poems.find((p) => p.slug === slug)
}

export function getFeaturedPoems(): Poem[] {
  return poems.filter((p) => p.featured)
}

export function getPoemsByCategory(category: string): Poem[] {
  return poems.filter((p) =>
    p.category.some((c) => c.toLowerCase() === category.toLowerCase())
  )
}

export function getAllCategories(): string[] {
  const all = poems.flatMap((p) => p.category)
  return [...new Set(all)].sort()
}

export function getAdjacentPoems(slug: string): {
  prev: Poem | null
  next: Poem | null
} {
  const sorted = getAllPoems()
  const idx = sorted.findIndex((p) => p.slug === slug)
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  }
}
