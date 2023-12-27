import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
	apiKey: process.env.FIREBASE_apiKey,
	authDomain:  process.env.FIREBASE_authDomain,
	projectId:  process.env.FIREBASE_projectId,
	storageBucket:  process.env.FIREBASE_storageBucket,
	messagingSenderId: process.env.FIREBASE_messagingSenderId,
	appId: process.env.FIREBASE_appId,
	measurementId: process.env.FIREBASE_measurementId
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const auth = getAuth(app)

export { ref, uploadBytes, getDownloadURL,createUserWithEmailAndPassword}
