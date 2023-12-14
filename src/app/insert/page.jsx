/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'
import NavBar from '@/components/NavBar.jsx'
import Image from 'next/image'

export default function page() {
	const [ file, setFile ] = useState(null)
	const[renderF, setRenderFile] = useState('/8d0be19a-99a5-478d-8a54-5b95d2f1fb67.jpeg')
	return (
		<section className="w-full min-h-screen bg-slate-800">
			<NavBar />
			<article className="w-full min-h-screen flex flex-col gap-7 justify-center items-center">
				<form onSubmit={
					async (e) => {
						e.preventDefault()
						const formData = new FormData()
						formData.append('file', file)
						console.log(formData.get('file'))

						const response = await fetch('/api/upload', {
							method: 'POST',
							body: formData,
						})
						const data = await response.json()
					}
				}
				>
					<input type="file" name="upload" id="upload" onChange={(e) => setFile(e.target.files[ 0 ])} />
					<button>upload</button>
				</form>

			
				{renderF ??
					<Image
					src={renderF}
					alt='render'
					width={220}
					height={120}
					/>}
			</article>
		</section>
	)
}
