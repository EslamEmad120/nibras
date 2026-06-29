import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase/firebase'

export async function uploadImage(file, path = 'images') {
  const storageRef = ref(storage, `${path}/${Date.now()}-${file.name}`)
  const snapshot = await uploadBytes(storageRef, file)
  return getDownloadURL(snapshot.ref)
}
