/**
 * One-time migration script: uploads all local photos and static poem data
 * to the new public Vercel Blob store.
 *
 * Usage:
 *   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_... node scripts/upload-to-blob.mjs
 */

import { put } from '@vercel/blob'
import { readFileSync, readdirSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT      = join(__dirname, '..')
const PHOTOS_DIR = join(ROOT, 'public', 'photos')

// ── Upload photos ────────────────────────────────────────────────────────────

const files = readdirSync(PHOTOS_DIR).filter(f => f.endsWith('.avif') || f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'))
console.log(`Found ${files.length} photo files to upload…\n`)

const urlMap = {}

for (const file of files) {
  const filePath = join(PHOTOS_DIR, file)
  const buffer   = readFileSync(filePath)
  const ext      = extname(file).slice(1)
  const mime     = ext === 'avif' ? 'image/avif' : ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg'
  const pathname = `photos/${file}`

  process.stdout.write(`  Uploading ${file}… `)
  const { url } = await put(pathname, buffer, {
    access:          'public',
    addRandomSuffix: false,
    contentType:     mime,
  })
  urlMap[file] = url
  console.log(`✓  ${url}`)
}

// ── Upload static poems as seed JSON ────────────────────────────────────────

const poemsModule = readFileSync(join(ROOT, 'lib', 'data', 'poems.ts'), 'utf-8')

// Extract poem slugs & basic data for a seed file (full poems stay in code)
const seedNote = {
  _note: 'Seed reference — full poem data is in lib/data/poems.ts',
  photoUrlMap: urlMap,
}
const { url: seedUrl } = await put('data/photo-url-map.json', JSON.stringify(seedNote, null, 2), {
  access:          'public',
  addRandomSuffix: false,
  contentType:     'application/json',
})
console.log(`\n✓  Saved URL map → ${seedUrl}`)

// ── Print updated photos.ts snippet ─────────────────────────────────────────

console.log('\n\n──── Blob URL mapping ────')
for (const [file, url] of Object.entries(urlMap)) {
  console.log(`  "${file}": "${url}"`)
}
console.log('\nCopy the URLs above and update lib/data/photos.ts (filename → blobUrl field)')
