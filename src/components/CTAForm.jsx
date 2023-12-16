'use client'
import { useForm } from 'react-hook-form'

export default function CTAForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({})

	const onSubmit = handleSubmit((data) => {
		console.log(data)
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
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0086C3] rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							{...register('fullname', {
								required: {
									value: true,
									message: 'Introduzca su Nombre y Apellido',
								},
								min: 4,
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
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0086C3] rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							{...register('email', {
								required: {
									value: true,
									message: 'email no válido',
								},
								pattern: 'xxxx@gmail.com',
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
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0086C3] rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							{...register('tel', {
								required: {
									value: true,
									message: 'introduce un número de contacto',
								},
								pattern: '04xx-xxxxxxx',
							})}
						/>
						{errors.tel && <span>{errors.tel?.message}</span>}
					</div>
					<button className='bg-[#0086C3] text-[#EFCA0A] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
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
