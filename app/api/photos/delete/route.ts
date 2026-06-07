import { del } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { url } = await req.json()
  if (!url) return NextResponse.json({ error: 'Missing url' }, { status: 400 })
  await del(url)
  return NextResponse.json({ ok: true })
}
