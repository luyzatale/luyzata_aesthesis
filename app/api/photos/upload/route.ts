import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const form = await req.formData()
  const file = form.get('file') as File
  const id   = form.get('id')  as string

  if (!file || !id) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  try {
    const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
    const { url } = await put(`photos/${id}.${ext}`, file, { access: 'public' })
    return NextResponse.json({ url })
  } catch (err) {
    console.error('[/api/photos/upload]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
