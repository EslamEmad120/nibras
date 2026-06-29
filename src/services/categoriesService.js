import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const CATEGORIES_COLLECTION = 'categories'

export async function fetchCategories() {
  try {
    const snap = await getDocs(collection(db, CATEGORIES_COLLECTION))
    const results = []
    snap.forEach((d) => results.push({ id: d.id, ...d.data() }))
    return results
  } catch (e) {
    console.warn('fetchCategories', e)
    return []
  }
}
