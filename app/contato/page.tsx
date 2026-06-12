import type { Metadata } from 'next'
import ContatoContent from '@/components/pages/ContatoContent'

export const metadata: Metadata = {
  title: 'Contato — Fale Comigo',
  description:
    'Se um poema, fotografia ou reflexão ressoou em você, entre em contacto. Colaborações, exposições, publicações e projetos artísticos.',
}

export default function ContatoPage() {
  return <ContatoContent />
}
