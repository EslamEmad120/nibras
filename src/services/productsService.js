import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import sampleProducts from '../data/sampleProducts'

const PRODUCTS_COLLECTION = 'products'

export async function fetchProducts() {
  try {
    const q = query(collection(db, PRODUCTS_COLLECTION), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    if (snap.empty) return sampleProducts
    const products = []
    snap.forEach((doc) => products.push({ id: doc.id, ...doc.data() }))
    return products
  } catch (e) {
    console.warn('fetchProducts', e)
    return sampleProducts
  }
}

export async function getProductById(id) {
  const products = await fetchProducts()
  return products.find((p) => p.id === id) || null
}
