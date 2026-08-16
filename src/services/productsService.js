import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import sampleProducts from '../data/sampleProducts'
import { PRODUCT_METADATA } from '../data/productMetadata'
import { getImageGroups } from '../utils/imageMapper'

function colorNameToHex(name) {
  if (!name) return '#cccccc'
  const n = name.toLowerCase()
  const map = {
    black: '#000000',
    white: '#ffffff',
    blue: '#1e40af',
    red: '#ef4444',
    green: '#10b981',
    gray: '#9ca3af',
    grey: '#9ca3af',
    yellow: '#FFD700',
    brown: '#8b5e3c',
  }
  for (const k of Object.keys(map)) if (n.includes(k)) return map[k]
  return '#cccccc'
}

function filterAndMapProducts(products) {
  const groups = getImageGroups()
  const keys = Object.keys(groups)

  const catalog = keys.map((key) => {
    const images = groups[key]
    const keyMatch = products.find((p) => {
      if (!p) return false
      return (p.id || '').toLowerCase().includes(key.toLowerCase())
    })

    const colors = images.map((img) => ({
      name: img.color,
      arabicName: img.color,
      hex: colorNameToHex(img.color),
      image: img.src,
    }))

    const metadataOverride = PRODUCT_METADATA[key] || {}
    const baseProduct = keyMatch || {
      id: `img-${key}`,
      name: key,
      arabicName: key,
      description: '',
      price: 300,
      discountPrice: null,
      category: 'T-Shirts',
      sizes: [],
      stock: 0,
      featured: false,
      bestSeller: false,
      createdAt: Date.now(),
      currency: 'EGP',
    }

    return {
      ...baseProduct,
      ...metadataOverride,
      colors,
      currency: metadataOverride.currency || baseProduct.currency || 'EGP',
    }
  })

  return catalog
}

const PRODUCTS_COLLECTION = 'products'

export async function fetchProducts() {
  try {
    const q = query(collection(db, PRODUCTS_COLLECTION), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    if (snap.empty) {
      return filterAndMapProducts(sampleProducts)
    }

    const products = []
    snap.forEach((doc) => products.push({ id: doc.id, ...doc.data() }))
    return filterAndMapProducts(products)
  } catch (e) {
    console.warn('fetchProducts', e)
    return filterAndMapProducts(sampleProducts)
  }
}

export async function getProductById(id) {
  const products = await fetchProducts()
  return products.find((p) => p.id === id) || null
}
