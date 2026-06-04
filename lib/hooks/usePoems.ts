'use client'

import { useState, useEffect } from 'react'
import { saveBlob, getBlob } from '@/lib/db'
import type { Poem } from '@/lib/data/poems'

const HIDDEN_KEY = 'aesthesis-hidden-poems'
const EDITS_KEY  = 'aesthesis-poem-edits'
const NEW_KEY    = 'aesthesis-new-poems'

async function resolveImageSrc(poem: Poem): Promise<Poem> {
  if (!poem.imageKey) return poem
  try {
    const blob = await getBlob(poem.imageKey)
    if (!blob) return poem
    return { ...poem, imageSrc: URL.createObjectURL(blob) }
  } catch {
    return poem
  }
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
        const n = localStorage.getItem(NEW_KEY)
        if (h) setHidden(JSON.parse(h))
        if (e) setEdits(JSON.parse(e))
        if (n) {
          const raw: Poem[] = JSON.parse(n)
          const resolved = await Promise.all(raw.map(resolveImageSrc))
          setUserPoems(resolved)
        }
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
    ? [
        ...userPoems.filter((p) => !hidden.includes(p.slug)),
        ...basePoems,
      ]
    : initial

  const hidePoem = (slug: string) => {
    const next = [...hidden, slug]
    setHidden(next)
    localStorage.setItem(HIDDEN_KEY, JSON.stringify(next))
  }

  const saveEdit = (slug: string, changes: Partial<Poem>) => {
    const isUserPoem = userPoems.some((p) => p.slug === slug)
    if (isUserPoem) {
      const next = userPoems.map((p) =>
        p.slug === slug ? { ...p, ...changes } : p
      )
      setUserPoems(next)
      // Persist without blob URLs
      const forStorage = next.map(({ imageSrc: _, ...rest }) => rest)
      localStorage.setItem(NEW_KEY, JSON.stringify(forStorage))
      return
    }
    const next = { ...edits, [slug]: { ...(edits[slug] ?? {}), ...changes } }
    setEdits(next)
    localStorage.setItem(EDITS_KEY, JSON.stringify(next))
  }

  const addPoem = async (poem: Poem, imageFile?: File) => {
    let finalPoem = poem

    if (imageFile) {
      const key = `poem-img-${poem.id}`
      await saveBlob(key, imageFile)
      const blobUrl = URL.createObjectURL(imageFile)
      finalPoem = { ...poem, imageKey: key, imageSrc: blobUrl }
    }

    const next = [finalPoem, ...userPoems]
    setUserPoems(next)

    // Persist without blob URLs
    const forStorage = next.map(({ imageSrc: _, ...rest }) => rest)
    localStorage.setItem(NEW_KEY, JSON.stringify(forStorage))
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
