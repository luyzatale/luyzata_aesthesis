'use client'

import { useState, useEffect } from 'react'
import type { Poem } from '@/lib/data/poems'

const HIDDEN_KEY = 'aesthesis-hidden-poems'
const EDITS_KEY  = 'aesthesis-poem-edits'

async function fetchUserPoems(): Promise<Poem[]> {
  try {
    const res = await fetch('/api/poems', { cache: 'no-store' })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

async function persistUserPoems(poems: Poem[]): Promise<void> {
  const clean = poems.map(({ ...p }) => p)
  const res = await fetch('/api/poems', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(clean),
  })
  if (!res.ok) throw new Error(`Failed to save poems (${res.status})`)
}

export function usePoems(initial: Poem[]) {
  const [hidden,    setHidden]    = useState<string[]>([])
  const [edits,     setEdits]     = useState<Record<string, Partial<Poem>>>({})
  const [userPoems, setUserPoems] = useState<Poem[]>([])
  const [mounted,   setMounted]   = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const h = localStorage.getItem(HIDDEN_KEY)
        const e = localStorage.getItem(EDITS_KEY)
        if (h) setHidden(JSON.parse(h))
        if (e) setEdits(JSON.parse(e))
        const poems = await fetchUserPoems()
        setUserPoems(poems)
      } catch {}
      setMounted(true)
    }
    load()
  }, [])

  const basePoems: Poem[] = mounted
    ? initial
        .filter((p) => !hidden.includes(p.slug))
        .map((p) => (edits[p.slug] ? { ...p, ...edits[p.slug] } : p))
    : initial

  const activePoems: Poem[] = mounted
    ? [...userPoems.filter((p) => !hidden.includes(p.slug)), ...basePoems]
    : initial

  const hidePoem = (slug: string) => {
    const next = [...hidden, slug]
    setHidden(next)
    localStorage.setItem(HIDDEN_KEY, JSON.stringify(next))
  }

  const saveEdit = (slug: string, changes: Partial<Poem>) => {
    const isUserPoem = userPoems.some((p) => p.slug === slug)
    if (isUserPoem) {
      const next = userPoems.map((p) => p.slug === slug ? { ...p, ...changes } : p)
      setUserPoems(next)
      persistUserPoems(next)
      return
    }
    const next = { ...edits, [slug]: { ...(edits[slug] ?? {}), ...changes } }
    setEdits(next)
    localStorage.setItem(EDITS_KEY, JSON.stringify(next))
  }

  const addPoem = async (poem: Poem, imageFile?: File) => {
    let finalPoem = poem

    if (imageFile) {
      const id   = `poem-img-${poem.id}`
      const form = new FormData()
      form.append('file', imageFile)
      form.append('id', id)
      const res = await fetch('/api/photos/upload', { method: 'POST', body: form })
      if (!res.ok) throw new Error(`Image upload failed (${res.status})`)
      const { url } = await res.json()
      finalPoem = { ...poem, imageSrc: url, imageKey: url }
    }

    const next = [finalPoem, ...userPoems]
    setUserPoems(next)
    await persistUserPoems(next)
  }

  const getEdited = (slug: string): Partial<Poem> => {
    const userPoem = userPoems.find((p) => p.slug === slug)
    if (userPoem) return userPoem
    return edits[slug] ?? {}
  }

  const getUserPoem = (slug: string): Poem | undefined =>
    userPoems.find((p) => p.slug === slug)

  return { activePoems, hidePoem, saveEdit, addPoem, getEdited, getUserPoem, mounted }
}
