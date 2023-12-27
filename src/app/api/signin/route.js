import { SignIn } from '@/lib/app.firebase'
import { cookies } from 'next/headers'

export async function POST(req) {
	const {
		email,
		password
	} = await req.json()
	const userCredentials = await SignIn(email, password)
	const miTokenSx = await userCredentials.user.getIdToken()
	try {
		const oneDay = 24 * 60 * 60 * 1000
		cookies().set(
			'token',
			miTokenSx,
			{
				expires: Date.now() - oneDay,
				httpOnly: true,
				path: '/',
				secure: true
			})
	} catch (error) {
		console.log(error)
	}
	return Response.json({ FirebaseCredentials: userCredentials, miTokenSx: miTokenSx })
}

