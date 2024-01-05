'use client'
import { useForm } from 'react-hook-form'
import { fecthData } from '@/services/fetchAPI.service'

export default function CTAForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({})

	const onSubmit = handleSubmit(async (data) => {
		const _data = { ...data, formName: 'CTAForm' }
		const resp = await fecthData(_data, '/api/listemail')
		console.log(resp)
	})

	return (
		<section className='text-gray-400 bg-slate-600 body-font'>
			<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
				<div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
					<h1 className='title-font font-medium text-3xl text-white'>
						Somos tu Tienda Virtual con la más amplia variedad de
						articulos de tecnología del país
					</h1>
					<p className='leading-relaxed mt-4'>
						Estamos en las redes sociales y en nuestras sedes
						físicas, queremos atender tus requerimientos, tenemos
						experiencia en solucionar.
					</p>
				</div>
				<form
					onSubmit={onSubmit}
					className='lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'
				>
					<h2 className='text-white text-lg font-medium title-font mb-5'>
						Contacto
					</h2>
					<div className='relative mb-4'>
						<label
							htmlFor='fullname'
							className='leading-7 text-sm text-gray-400'
						>
							Nombre Completo
						</label>
						<input
							type='text'
							id='fullname'
							name='fullname'
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-secondary-color rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							{...register('fullname', {
								required: {
									value: true,
									message: 'Introduzca su Nombre y Apellido',
								},
								min: 4,
								maxLength: 30,
							})}
						/>
						{errors.fullname && (
							<span>{errors.fullname?.message}</span>
						)}
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='email'
							className='leading-7 text-sm text-gray-400'
						>
							Correo Electrónico
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-secondary-color rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							{...register('email', {
								required: {
									value: true,
									message: 'enter an email',
								},
								pattern: {
									value: '^[w-.]+@([w-]+.)+[w-]{2,4}$',
									message: 'email incorrect',
								},
								maxLength: 30,
							})}
						/>
						{errors.email && <span>{errors.email?.message}</span>}
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='tel'
							className='leading-7 text-sm text-gray-400'
						>
							Teléfono (WhatsApp)
						</label>
						<input
							type='tel'
							id='tel'
							name='tel'
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-secondary-color rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							{...register('tel', {
								required: {
									value: true,
									message: 'introduce un número de contacto',
								},
								pattern: {
									value: '^(?:(?:00|+)58|0)(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))d{7}$',
									message:
										'introduce un número de contacto válido',
								},
								min: {
									value: 11,
									message:
										'introduce un número de contacto válido',
								},
								maxLength: 16,
							})}
						/>
						{errors.tel && <span>{errors.tel?.message}</span>}
					</div>
					<button className='bg-secondary-color text-primary-color border-0 py-2 px-8 focus:outline-none hover:bg-primary-color hover:text-secondary-color rounded text-lg'>
						Enviar Info
					</button>
					<p className='text-xs mt-3'>
						Pronto un asesor se pondrá en contacto.
					</p>
				</form>
			</div>
		</section>
	)
}
