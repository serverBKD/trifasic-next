// import { storage, auth,ref, uploadBytes, getDownloadURL } from '@/lib/firebase.config.js'
import { auth, createUserWithEmailAndPassword } from '@/lib/firebase.config.js'

export async function SignIn(email,password) {
	const FirebaseCredentials = await createUserWithEmailAndPassword(auth, email, password)
	return FirebaseCredentials
}

// export async function SubirFiles(bytes, name) {
// 	const storageRef = ref(storage,name)
// 	const resp = await uploadBytes(storageRef, bytes)
// const download = await resp.getDownloadURL()
// 	if (!resp) return response.send('Error al subir archivo')
	
// 	const URL = await getDownloadURL(storageRef)
//   	    .then((url) => {
// Insert url into an <img> tag to "download"
// 			console.log(url)
// 		})
// 	return URL
	
// }