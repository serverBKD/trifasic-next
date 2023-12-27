import { storage,ref, uploadBytes, getDownloadURL,auth, createUserWithEmailAndPassword } from '@/lib/firebase.config.js'

//. Registrar Email And Password
export async function SignIn(email,password) {
	const FirebaseCredentials = await createUserWithEmailAndPassword(auth, email, password)
	return FirebaseCredentials
}

//. Subir Archivos
export async function SubirFiles(bytes, name) {
	const storageRef = ref(storage,name)
	const resp = await uploadBytes(storageRef, bytes)
	const download = await resp.getDownloadURL()
	console.log(download)
	
	if (!resp) return Response.send('Error al subir archivo')
	
	const URL = await getDownloadURL(storageRef).then((url) => {
		//.Insert url into an <img> tag to "download"
		console.log(url)
	})
	return URL
	
}