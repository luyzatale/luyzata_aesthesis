'use client'

import { useState, useEffect } from 'react'
import { saveBlob, getBlob, deleteBlob } from '@/lib/db'
import type { Photo } from '@/lib/data/photos'

const META_KEY = 'aesthesis-user-photos'

interface UserPhotoMeta {
  id:      string
  blobKey: string
  date:    string
  width:   number
  height:  number
}

export interface DisplayPhoto {
  id:      string
  src:     string
  alt:     string
  date?:   string
  width:   number
  height:  number
  isUser?: boolean
}

function toDisplay(p: Photo): DisplayPhoto {
  return {
    id:     p.id,
    src:    `/photos/${p.filename}`,
    alt:    p.alt,
    date:   p.date,
    width:  p.width,
    height: p.height,
  }
}

async function loadUserPhotos(): Promise<DisplayPhoto[]> {
  try {
    const raw = localStorage.getItem(META_KEY)
    if (!raw) return []

    // Parse and strip any legacy text fields (caption, alt, location, reflection)
    const parsed = JSON.parse(raw) as Record<string, unknown>[]
    const meta: UserPhotoMeta[] = parsed.map((m) => ({
      id:      m.id as string,
      blobKey: m.blobKey as string,
      date:    (m.date as string) ?? new Date().toISOString().slice(0, 10),
      width:   (m.width as number) ?? 1200,
      height:  (m.height as number) ?? 800,
    }))

    // Write back cleaned metadata (removes any legacy text fields)
    localStorage.setItem(META_KEY, JSON.stringify(meta))

    const results = await Promise.all(
      meta.map(async (m): Promise<DisplayPhoto | null> => {
        const blob = await getBlob(m.blobKey)
        if (!blob) return null
        return {
          id:     m.id,
          src:    URL.createObjectURL(blob),
          alt:    '',
          date:   m.date,
          width:  m.width,
          height: m.height,
          isUser: true,
        }
      })
    )
    return results.filter((r): r is DisplayPhoto => r !== null)
  } catch {
    return []
  }
}

function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file)
    const img = new window.Image()
    img.onload  = () => { resolve({ width: img.naturalWidth, height: img.naturalHeight }); URL.revokeObjectURL(url) }
    img.onerror = () => { resolve({ width: 1200, height: 800 });                           URL.revokeObjectURL(url) }
    img.src = url
  })
}

export function usePhotos(staticPhotos: Photo[]) {
  const [userPhotos, setUserPhotos] = useState<DisplayPhoto[]>([])
  const [mounted,    setMounted]    = useState(false)

  useEffect(() => {
    loadUserPhotos().then((photos) => {
      setUserPhotos(photos)
      setMounted(true)
    })
  }, [])

  const staticDisplay = staticPhotos.map(toDisplay)

  const allPhotos: DisplayPhoto[] = mounted
    ? [...userPhotos, ...staticDisplay]
    : staticDisplay

  const addPhoto = async (file: File) => {
    const { width, height } = await getImageDimensions(file)
    const id      = `user-${Date.now()}`
    const blobKey = `photo-blob-${id}`

    await saveBlob(blobKey, file)

    const meta: UserPhotoMeta = {
      id, blobKey,
      date:   new Date().toISOString().slice(0, 10),
      width,
      height,
    }

    const existing: UserPhotoMeta[] = JSON.parse(localStorage.getItem(META_KEY) ?? '[]')
    localStorage.setItem(META_KEY, JSON.stringify([meta, ...existing]))

    const display: DisplayPhoto = {
      id,
      src:    URL.createObjectURL(file),
      alt:    '',
      date:   meta.date,
      width,
      height,
      isUser: true,
    }

    setUserPhotos((prev) => [display, ...prev])
    return display
  }

  const removePhoto = async (id: string) => {
    const existing: UserPhotoMeta[] = JSON.parse(localStorage.getItem(META_KEY) ?? '[]')
    const target = existing.find((m) => m.id === id)
    if (target) await deleteBlob(target.blobKey)
    localStorage.setItem(META_KEY, JSON.stringify(existing.filter((m) => m.id !== id)))
    setUserPhotos((prev) => prev.filter((p) => p.id !== id))
  }

  return { allPhotos, addPhoto, removePhoto, mounted }
}
