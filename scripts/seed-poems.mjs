import { put } from '@vercel/blob'

// Try to migrate from old store, fallback to empty array
let poems = []
try {
  const res = await fetch('https://nvslhrp6qbdbxckxq.public.blob.vercel-storage.com/data/user-poems.json')
  if (res.ok) { poems = await res.json(); console.log(`Migrated ${poems.length} poems from old store`) }
  else console.log('Old store empty or inaccessible — seeding with []')
} catch { console.log('Old store not reachable — seeding with []') }

const { url } = await put('data/user-poems.json', JSON.stringify(poems), {
  access: 'public', addRandomSuffix: false, contentType: 'application/json',
})
console.log('✓ user-poems.json →', url)
