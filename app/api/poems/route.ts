import { put, list } from '@vercel/blob'
import { NextResponse } from 'next/server'

const PATHNAME = 'data/user-poems.json'

export async function GET() {
  try {
    const { blobs } = await list({ prefix: PATHNAME })
    if (!blobs.length) return NextResponse.json([])
    const res = await fetch(blobs[0].url, { cache: 'no-store' })
    return NextResponse.json(await res.json())
  } catch {
    return NextResponse.json([])
  }
}

export async function POST(req: Request) {
  try {
    const poems = await req.json()
    await put(PATHNAME, JSON.stringify(poems), {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'application/json',
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[/api/poems POST]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
