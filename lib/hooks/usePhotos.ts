'use client'

import { useState, useEffect } from 'react'
import { upload } from '@vercel/blob/client'
import type { Photo } from '@/lib/data/photos'

const META_KEY = 'aesthesis-photos-v2'

interface UserPhotoMeta {
  id:      string
  url:     string
  date:    string
  width?:  number
  height?: number
}

export interface DisplayPhoto {
  id:      string
  src:     string
  alt:     string
  date?:   string
  width?:  number
  height?: number
  isUser?: boolean
}

const BLOB_BASE = 'https://xnt8obwd4nufxpsw.public.blob.vercel-storage.com'

function staticToDisplay(p: Photo): DisplayPhoto {
  return { id: p.id, src: `${BLOB_BASE}/photos/${p.filename}`, alt: p.alt, date: p.date, width: p.width, height: p.height }
}

export function usePhotos(staticPhotos: Photo[]) {
  const [userMeta, setUserMeta] = useState<UserPhotoMeta[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(META_KEY)
    if (stored) {
      try { setUserMeta(JSON.parse(stored)) } catch {}
    }
  }, [])

  const allPhotos: DisplayPhoto[] = [
    ...userMeta.map((m) => ({
      id:     m.id,
      src:    m.url,
      alt:    '',
      date:   m.date,
      width:  m.width,
      height: m.height,
      isUser: true,
    })),
    ...staticPhotos.map(staticToDisplay),
  ]

  const addPhoto = async (file: File) => {
    const id  = `photo-${Date.now()}`
    const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
    const { url } = await upload(`photos/${id}.${ext}`, file, {
      access: 'public',
      handleUploadUrl: '/api/photos/upload',
    })

    const meta: UserPhotoMeta = { id, url, date: new Date().toISOString().slice(0, 10) }
    const next = [meta, ...userMeta]
    setUserMeta(next)
    localStorage.setItem(META_KEY, JSON.stringify(next))
  }

  const removePhoto = async (id: string) => {
    const photo = userMeta.find((m) => m.id === id)
    if (!photo) return
    await fetch('/api/photos/delete', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ url: photo.url }),
    })
    const next = userMeta.filter((m) => m.id !== id)
    setUserMeta(next)
    localStorage.setItem(META_KEY, JSON.stringify(next))
  }

  return { allPhotos, addPhoto, removePhoto }
}
