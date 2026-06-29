import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

// Analytics will be dynamically imported only in browser environments when available

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

let app = null
let db = null
let storage = null
let auth = null
let analytics = null

// Defensive initialization: do not throw if config missing or invalid.
if (firebaseConfig.apiKey) {
  try {
    app = initializeApp(firebaseConfig)
    try {
      db = getFirestore(app)
    } catch (e) {
      db = null
    }
    try {
      storage = getStorage(app)
    } catch (e) {
      storage = null
    }
    try {
      auth = getAuth(app)
    } catch (e) {
      auth = null
    }

    // Initialize analytics only in browser and when measurementId is present
    if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
      try {
        import('firebase/analytics')
          .then(({ getAnalytics }) => {
            try {
              analytics = getAnalytics(app)
            } catch (e) {
              analytics = null
            }
          })
          .catch(() => {
            analytics = null
          })
      } catch (e) {
        analytics = null
      }
    }
  } catch (e) {
    // keep everything null on failure to avoid crashing the app
    app = null
    db = null
    storage = null
    auth = null
    analytics = null
  }
}

export { app, db, storage, auth, analytics }
export default app
