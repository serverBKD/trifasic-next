// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics"
import { getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage'

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
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const storage = getStorage(app)

export async function SubirFiles(bytes, name) {
	const storageRef = ref(storage,name)
	const resp = await uploadBytes(storageRef, bytes)
	// const download = await resp.getDownloadURL()
	if (!resp) return response.send('Error al subir archivo')
	
	const URL = await getDownloadURL(storageRef)
  				.then((url) => {
			// Insert url into an <img> tag to "download"
			console.log(url)
		})
	return URL
	
}
