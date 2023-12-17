'use client'
import NavBar from '@/components/NavBar.jsx'
import { useForm } from 'react-hook-form'
export default function page() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setValue,
	} = useForm()
	const onSubmit = handleSubmit((data) => {
		setValue('formName', 'ContactoForm')
		console.log(data)
	})
	return (
		<section className='max-h-screen'>
			<NavBar />
			<section className='text-gray-400 bg-gray-900 body-font relative'>
				<div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
					<div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
						<iframe
							width='100%'
							height='100%'
							title='map'
							className='absolute inset-0'
							src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d260.0050654528799!2d-68.00817464677736!3d10.213612704083916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1701577008885!5m2!1ses!2sve'
						></iframe>

						{/* <!-- 10.213539990646032, -68.00817109465083 --> */}
						<div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
							<div className='lg:w-1/2 px-6'>
								<h2 className='title-font font-semibold text-white tracking-widest text-xs'>
									ADDRESS
								</h2>
								<p className='mt-1'>
									Centro Comercial Viñedo Plaza Primer Piso
									Oficina L-2-7 Valencia Carabobo
								</p>
							</div>
							<div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
								<h2 className='title-font font-semibold text-white tracking-widest text-xs'>
									EMAIL
								</h2>
								<a className='text-indigo-400 leading-relaxed'>
									info@server241.com
								</a>
								<h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
									PHONE
								</h2>
								<p className='leading-relaxed'>
									+58-412.436.32.14
								</p>
							</div>
						</div>
					</div>
					<form
						onSubmit={onSubmit}
						className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
					>
						<h2 className='text-white text-lg mb-1 font-medium title-font'>
							Feedback
						</h2>
						<p className='leading-relaxed mb-5'>
							¡Expertos en Solucionar!
						</p>
						<div className='relative mb-4'>
							Nombre
							<label
								htmlFor='name'
								className='leading-7 text-sm text-gray-400'
							>
								Completo
							</label>
							<input
								type='text'
								id='name'
								name='name'
								className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								{...register('fullname', {
									required: {
										value: true,
										message: 'introduce tu nombre completo',
									},
									minLength: {
										value: 4,
										message: 'introduce tu nombre completo',
									},
									maxLength: 16,
									//TODO
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
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								{...register('email', {
									required: {
										value: true,
										message:
											'introduce tu correo electronico',
									},
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Ingrese un correo válido',
									},
								})}
							/>
							{errors.email && (
								<span>{errors.email?.message}</span>
							)}
						</div>
						<div className='relative mb-4'>
							<label
								htmlFor='message'
								className='leading-7 text-sm text-gray-400'
							>
								Mensaje
							</label>
							<textarea
								id='message'
								name='message'
								className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
								{...register('message', {
									required: {
										value: true,
										message: 'introduce tu mensaje',
									},
								})}
							></textarea>
							{errors.message && (
								<span>{errors.message?.message}</span>
							)}
						</div>
						<button className='text-[#0086C3] bg-[#EFCA0A] border-0 py-2 px-6 focus:outline-none hover:bg-[#0086C3] hover:text-[#EFCA0A] rounded text-lg'>
							Enviar Formulario
						</button>
						<p className='text-xs text-gray-400 text-opacity-90 mt-3'>
							¡Pronto un asesor se pondrá en contacto!
						</p>
						{/* {//TODO: Mensaje de Enviado}	 */}
					</form>
				</div>
			</section>
		</section>
	)
}
