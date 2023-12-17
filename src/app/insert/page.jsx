/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import NavBar from '@/components/NavBar.jsx'
import Image from 'next/image'

export default function page() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	// const [file, setFile] = useState(
	// 	'/8d0be19a-99a5-478d-8a54-5b95d2f1fb67.jpeg'
	// )
	const onSubmit = handleSubmit(async (data) => {
		const image = data.file[0]
		if (!image) return
		const formData = new FormData()
		formData.append('file', image)
		console.log(formData.get('file'))

		const response = await fetch('/api/upload', {
			method: 'POST',
			body: formData,
		})
		const __data = await response.json()
		console.log(await __data)
	})
	return (
		<section className='w-full min-h-screen bg-slate-800'>
			<NavBar />
			<article className='w-full min-h-screen flex flex-col gap-7 justify-center items-center'>
				<form onSubmit={onSubmit} className='flex flex-col'>
					<input
						type='file'
						name='upload'
						id='upload'
						{...register('file')}
					/>
					<button className='w-full my-3 bg-[#EFCA0A] text-[#0086C2]'>
						upload
					</button>
				</form>

				{/* {watch('file') && (
					<Image src={__data} alt='render' width={220} height={120} />
				)} */}
			</article>
		</section>
	)
}
