// Utility to map local product images into grouped products by filename prefix
// Uses Vite's import.meta.glob to bundle images.

const imgModules = import.meta.glob('../assets/images/*', { eager: true, as: 'url' })

function parseName(name) {
  // strip extension
  const base = name.replace(/\.[^/.]+$/, '')

  // match prefix and optional color suffix starting with uppercase (e.g., t3Black)
  const m = base.match(/^([a-zA-Z0-9_-]+?)([A-Z][A-Za-z0-9_-]*)?$/)
  if (!m) return { prefix: base, color: 'Default' }
  return { prefix: m[1], color: m[2] || 'Default' }
}

export function getImageGroups() {
  const groups = {}

  Object.entries(imgModules).forEach(([path, url]) => {
    const parts = path.split('/')
    const file = parts[parts.length - 1]
    const { prefix, color } = parseName(file)

    if (!groups[prefix]) groups[prefix] = []

    groups[prefix].push({
      file,
      color,
      src: url,
    })
  })

  // sort colors for deterministic order
  Object.values(groups).forEach((arr) =>
    arr.sort((a, b) => a.file.localeCompare(b.file)),
  )

  return groups
}

// Try to find a matching group for a product by internal product key/id only.
export function findGroupForProduct(product) {
  const groups = getImageGroups()
  const keys = Object.keys(groups)

  for (const k of keys) {
    if (product.id && product.id.toLowerCase().includes(k.toLowerCase())) {
      return { key: k, images: groups[k] }
    }
  }

  // fallback: if there's a short key that appears in id
  for (const k of keys) {
    if (k.length <= 3 && (product.id || '').toLowerCase().includes(k.toLowerCase())) {
      return { key: k, images: groups[k] }
    }
  }

  return null
}

export default { getImageGroups, findGroupForProduct }
