'use client'

import { useRouter } from 'next/navigation'
import PoemActions from '@/components/poetry/PoemActions'
import { usePoems } from '@/lib/hooks/usePoems'
import type { Poem } from '@/lib/data/poems'

interface PoemPageActionsProps {
  poem: Poem
}

export default function PoemPageActions({ poem }: PoemPageActionsProps) {
  const router = useRouter()
  const { hidePoem, saveEdit, getEdited } = usePoems([poem])

  const handleHide = (slug: string) => {
    hidePoem(slug)
    router.push('/aesthesis')
  }

  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <p className="font-cinzel text-[0.55rem] tracking-[0.12em] uppercase text-[var(--text-faint)]">
        Ações:
      </p>
      <PoemActions
        poem={poem}
        overrides={getEdited(poem.slug)}
        onHide={handleHide}
        onSave={saveEdit}
      />
    </div>
  )
}
