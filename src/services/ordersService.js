import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const ORDERS_COLLECTION = 'orders'

function saveLocalOrder(order) {
  try {
    const key = 'nebras_local_orders'
    const raw = localStorage.getItem(key)
    const list = raw ? JSON.parse(raw) : []
    const id = `local-${Date.now()}`
    list.push({ id, ...order, orderStatus: 'pending', createdAt: new Date().toISOString() })
    localStorage.setItem(key, JSON.stringify(list))
    return { id }
  } catch (e) {
    console.error('saveLocalOrder', e)
    throw e
  }
}

export async function createOrder(order) {
  if (!db) {
    console.warn('Firestore `db` is not available, saving order locally')
    return saveLocalOrder(order)
  }

  try {
    const docRef = await addDoc(collection(db, ORDERS_COLLECTION), {
      ...order,
      orderStatus: 'pending',
      createdAt: serverTimestamp(),
    })
    return { id: docRef.id }
  } catch (e) {
    console.error('createOrder', e)
    // fallback to local storage
    return saveLocalOrder(order)
  }
}
