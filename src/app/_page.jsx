'use client'
import { getSession } from 'next-auth/react'
import { useEffect } from 'react'
import Link from 'next/link'

function page() {

	useEffect( () => {
		(async() => {
			const session = await getSession()
			console.log(session)
		})()
	}, [])
    
	return (
		<main className="w-full h-screen bg-sky-900">
			<section className="w-[720px] h-[720px] bg-slate-400 flex flex-col">
				<h1>SX241</h1>
				<Link href={'http://localhost:3000/api/auth/signin'}>SignIn</Link>
				<Link href={'http://localhost:3000/api/auth/signout'}>SignOut</Link>
			</section>
		</main>
	)
}

export default page