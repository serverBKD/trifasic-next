/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'
import NavBar from '@/components/NavBar.jsx'

export default function page() {
	const [file,setFile] = useState(null)
	return (
		<section className="w-full min-h-screen bg-slate-800">
			<NavBar />
			<article className="w-full min-h-screen flex justify-center items-center">
				<form onSubmit={
					async () => {
						const response = await fetch('api/upload', {
							method:'POST'
						})
						const data = await response.json()
						console.log(data)
					}
				}
				>
					<input type="file" name="upload" id="upload" onChange={(e) => console.log(e.target.files[ 0 ])} />
					<button>upload</button>
				</form>
			</article>
		</section>
	)
}
