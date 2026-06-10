import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const file = form.get('file') as File | null
    if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 })

    const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
    const id  = `poem-img-${Date.now()}`
    const { url } = await put(`photos/${id}.${ext}`, file, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })
    return NextResponse.json({ url })
  } catch (err) {
    console.error('[/api/poems/image]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
