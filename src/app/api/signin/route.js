import { SignIn } from '@/lib/app.firebase'
import { cookies } from 'next/headers'

export async function POST(req) {
	const { email, password } = await req.json()
	const userCredentials = await SignIn(email, password)
	const miToken = await userCredentials.user.getIdToken()
	cookies().set('token', miToken)
	return Response.json({ FirebaseCredentials: userCredentials })
}

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '1mb',
		},
	},
	// Specifies the maximum allowed duration for this function to execute (in seconds)
	maxDuration: 5,
}


// 'use server'
 
// import { cookies } from 'next/headers'
 
// async function create(data) {
// 	cookies().set('name', 'lee')
// 	or
// 	cookies().set('name', 'lee', { secure: true })
// or
// 	cookies().set({
// 		name: 'name',
// 		value: 'lee',
// 		httpOnly: true,
// 		path: '/',
// 	})
// }