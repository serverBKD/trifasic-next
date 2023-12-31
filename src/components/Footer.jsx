'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { fecthData } from '@/services/fetchAPI.service'

export default function Footer() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = handleSubmit(async (data) => {
		const _data = { ...data, formName: 'CTAForm' }
		const resp = await fecthData(_data, '/api/listemail')
		console.log(resp)
	})
	return (
		<footer className='text-gray-400 bg-gray-900 body-font'>
			<div className='container px-5 py-12 mx-auto'>
				<div className='flex flex-wrap md:text-left text-center order-first'>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
							Seguridad Electrónica
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Combos CCTV
								</Link>
							</li>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Alarmas Cableadas
								</Link>
							</li>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Alarmas Inalámbicas
								</Link>
							</li>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Cercados Eléctricos
								</Link>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
							Sistema de Facturación
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Contabilidad
								</Link>
							</li>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Finanzas
								</Link>
							</li>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Recursos Humanos
								</Link>
							</li>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Software
								</Link>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
							Tienda Virtual
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Hogar
								</Link>
							</li>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Juguetes
								</Link>
							</li>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									Electrodomésticos
								</Link>
							</li>
							<li>
								<Link
									href={'/'}
									className='text-gray-400 hover:text-white'
								>
									TV/Sonido
								</Link>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
							SUBSCRIBE
						</h2>
						<div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
							<form
								onSubmit={onSubmit}
								className='relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'
							>
								<label
									htmlFor='footer-field'
									className='leading-7 text-sm text-gray-400'
								>
									Lista de Correo
								</label>
								<div className='flex gap-2'>
									<input
										type='text'
										id='footer-field'
										name='footer-field'
										className='w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-secondary-color  focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
										{...register('listEmail', {
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message:
													'Ingrese un correo válido',
											},
										})}
									/>

									<button className='lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-secondary-color  border-0 py-2 px-6 focus:outline-none hover:bg-primary-color  rounded'>
										Enviar
									</button>
								</div>
								{errors.listEmail && (
									<span>{errors.listEmail?.message}</span>
								)}
							</form>
						</div>
						<p className='text-gray-500 text-sm mt-2 md:text-left text-center'>
							Recibe Ofertas y Cupones de Compras
						</p>
					</div>
				</div>
			</div>
			<div className='bg-gray-800 bg-opacity-75'>
				<div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
					<Link
						href={'/'}
						className='flex title-font font-medium items-center md:justify-start justify-center text-[#EFCA0A]'
					>
						<span className='ml-3 text-xl'>trifasicxtore</span>
					</Link>
					<p className='text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4'>
						<Link
							href='https://instagram.com/server241'
							className='text-gray-500 ml-1 hover:text-[#EFCA0A]'
							target='_blank'
							rel='noopener noreferrer'
						>
							© 2023
						</Link>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
						<Link
							href={'https://facebook.com/server241'}
							className='text-secondary-color hover:text-[#EFCA0A]'
						>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
							</svg>
						</Link>
						<Link
							href={'https://www.x.com/server241'}
							className='ml-3 text-secondary-color hover:text-[#EFCA0A]'
						>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
							</svg>
						</Link>
						<Link
							href={'https://www.instagram.com/server241'}
							className='ml-3 text-secondary-color hover:text-[#EFCA0A]'
						>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<rect
									width='20'
									height='20'
									x='2'
									y='2'
									rx='5'
									ry='5'
								></rect>
								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
							</svg>
						</Link>
						<Link
							href={'https://www.linkedin.com/server241'}
							className='ml-3 text-secondary-color hover:text-[#EFCA0A]'
						>
							<svg
								fill='currentColor'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='0'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path
									stroke='none'
									d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
								></path>
								<circle
									cx='4'
									cy='4'
									r='2'
									stroke='none'
								></circle>
							</svg>
						</Link>
					</span>
				</div>
			</div>
		</footer>
	)
}
