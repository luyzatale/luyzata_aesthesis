import type { Metadata } from 'next'
import SobreContent from '@/components/pages/SobreContent'

export const metadata: Metadata = {
  title: 'Sobre — Sobre Aesthesis',
  description:
    'L. Serrano — heterônimo poético de 87 anos, introspectivo e existencial, com temas de liberdade, tempo subjetivo e o ser versus o nada.',
}

export default function SobrePage() {
  return <SobreContent />
}
