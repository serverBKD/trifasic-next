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
		<section className='w-full max-h-screen overflow-scroll bg-slate-800'>
			<NavBar />
			<article className='w-full min-w-sm min-h-screen mt-3 flex flex-col gap-7 items-center'>
				<form
					onSubmit={onSubmit}
					className='flex flex-col bg-sky-700 p-3 rounded-sm'
				>
					{/* <!-- Row 1 Model - TradeMark --> */}
					<div className='flex gap-2'>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='model'>Model</label>
							<input type='text' name='model' id='model' />
						</div>
						<div className='w-full flex flex-col gap-y-3'>
							<label htmlFor='trademark'>TradeMark</label>
							<select name='trademark' id='trademark'>
								<option value='hikvision'>HikVision</option>
								<option value='dahua'>Dahua</option>
								<option value='samsung'>Samsung</option>
								<option value='bkd'>BKD</option>
							</select>
						</div>
					</div>
					{/* <!-- Row 2 Description --> */}
					<div className='flex flex-col gap-y-3'>
						<label htmlFor='description'>Description</label>
						<textarea
							name='description'
							id='description'
							cols='10'
							rows='4'
						></textarea>
					</div>
					{/* <!-- Row 3 Price_Base + Divisa + Delta --> */}
					<div className='flex gap-2'>
						<div className='w-full flex flex-col gap-y-3'>
							<label htmlFor='price_base'>Price Base</label>
							<input
								type='number'
								name='price_base'
								id='price_base'
								min={0}
								max={10000}
								step={0.1}
							/>
						</div>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='divisa'>Divisa</label>
							<select>
								<option value='usd'>USD</option>
								<option value='eur'>EUR</option>
								<option value='bs'>BS</option>
							</select>
						</div>
						{/* <!-- Delta = Ganancia = price_sell = price_base * delta --> */}
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='delta'>Delta</label>
							<input
								type='number'
								name='delta'
								id='delta'
								min={0}
								max={10000}
								step={0.1}
							/>
						</div>
					</div>
					{/* <!-- Row 4 Stock + Unity + Warehouse + Category + Dimension + Weigth--> */}
					<div className='flex flex-col md:flex-row gap-2'>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='stock'>Stock Inventory</label>
							<input type='number' name='stock' id='stock' />
						</div>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='warehouse'>Unity</label>
							<select name='unity' id='unity'>
								<option value='one'>1</option>
								<option value='ten'>10</option>
								<option value='dozen'>12</option>
								<option value='cent'>100</option>
								<option value='mil'>1000</option>
							</select>
						</div>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='warehouse'>Warehouse</label>
							<select name='warehouse' id='warehouse'>
								<option value='general'>general</option>
								<option value='cctv'>CCTV</option>
								<option value='alarm'>Alarm</option>
								<option value='private'>Privado</option>
								<option value='elect'>Electronic</option>
							</select>
						</div>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='tags'>Category</label>
							<input type='text' name='tags' id='tags' />
						</div>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='dimension'>Dimension</label>
							<input
								type='text'
								name='dimension'
								id='dimension'
							/>
						</div>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='weigth'>Weigth</label>
							<input type='text' name='weigth' id='dimension' />
						</div>
					</div>
					{/* <!-- Row 5 Serial + Barcode + SKU + Tags --> */}
					<div className='flex flex-col md:flex-row gap-2'>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='serial'>Serial</label>
							<input type='text' name='serial' id='serial' />
						</div>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='barcode'>Barcode</label>
							<input type='text' name='barcode' id='barcode' />
						</div>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='sku'>SKU</label>
							<input type='text' name='sku' id='sku' />
						</div>
						<div className='flex flex-col gap-y-3'>
							<label htmlFor='tags'>Tags</label>
							<input type='text' name='tags' id='tags' />
						</div>
					</div>
					{/* <!-- Row 6 NOTAS --> */}
					<div className='flex gap-4 items-center'>
						<div className='w-full flex flex-col'>
							<label htmlFor='nota'>Nota</label>
							<textarea
								name='nota'
								id='nota'
								cols='10'
								rows='2'
							></textarea>
						</div>
					</div>
					{/* <!-- IMAGEN --> */}
					<div className='flex flex-col gap-y-3'>
						<label htmlFor='file'>Imagen</label>
						<input
							type='file'
							name='upload'
							id='upload'
							{...register('file')}
						/>
					</div>
					<button className='w-full my-3 py-2 font-bold bg-[#EFCA0A] text-[#0086C2] hover:text-[#EFCA0A] hover:bg-[#0086CA]'>
						GUARDAR
					</button>
				</form>

				{/* {watch('file') && (
					<Image src={__data} alt='render' width={220} height={120} />
				)} */}
			</article>
		</section>
	)
}
