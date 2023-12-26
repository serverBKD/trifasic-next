// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDeIE4rT-eAF00qUU0bMe1dObmn2qnA9ic',
	authDomain: 'server241-alpha-one.firebaseapp.com',
	projectId: 'server241-alpha-one',
	storageBucket: 'server241-alpha-one.appspot.com',
	messagingSenderId: '526676519084',
	appId: '1:526676519084:web:47dd9360f267aa4f231709',
	measurementId: 'G-RP7ZXBQKJ5'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const storage = getStorage(app)
// Initialize Firebase Authentication and get a reference to the servic
export const auth = getAuth(app)


export { ref, uploadBytes, getDownloadURL,createUserWithEmailAndPassword}

