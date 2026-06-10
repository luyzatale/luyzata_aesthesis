import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody
  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/avif'],
        allowOverwrite: true,
      }),
      onUploadCompleted: async ({ blob }) => {
        console.log('[blob] upload completed', blob.url)
      },
    })
    return NextResponse.json(jsonResponse)
  } catch (err) {
    console.error('[/api/photos/upload]', err)
    return NextResponse.json({ error: String(err) }, { status: 400 })
  }
}
