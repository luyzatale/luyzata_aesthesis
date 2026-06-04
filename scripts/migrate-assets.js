/**
 * Asset migration script.
 * Copies AVIF images from the old project to public/photos/
 * and creates the naming mapping used by lib/data/photos.ts.
 *
 * Usage: node scripts/migrate-assets.js
 */

const fs = require('fs')
const path = require('path')

const SRC_DIR = path.join(__dirname, '..', '..', 'luyzata-aesthesis_old', 'assets')
const DEST_DIR = path.join(__dirname, '..', 'public', 'photos')

if (!fs.existsSync(SRC_DIR)) {
  console.error('❌  Source directory not found:', SRC_DIR)
  console.error('   Make sure luyzata-aesthesis_old/assets/ exists beside this project.')
  process.exit(1)
}

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true })
}

const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.avif'))

console.log(`Found ${files.length} AVIF files in source directory.`)
console.log('Copying to public/photos/ with numbered names...\n')

files.forEach((file, i) => {
  const src = path.join(SRC_DIR, file)
  const destName = `photo-${String(i + 1).padStart(3, '0')}.avif`
  const dest = path.join(DEST_DIR, destName)
  fs.copyFileSync(src, dest)
  console.log(`  ${file} → ${destName}`)
})

console.log(`\n✅  Copied ${files.length} files to public/photos/`)
console.log('\nUpdate lib/data/photos.ts to match the new filenames.')
console.log('The first 12 entries already reference photo-001.avif through photo-012.avif.')
