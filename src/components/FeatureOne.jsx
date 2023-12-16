import Link from 'next/link'

export default function FeatureOne() {
	return (
		<section className='text-gray-400 bg-slate-700 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20'>
					<span className='bg-[#EFCA0A] text-[#0096C2] px-3 rounded-sm font-extrabold underline'>
						Expertos
					</span>{' '}
					en Solucionar
					<br className='hidden sm:block' />
					apoyados en la tecnología
				</h1>
				<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
					<div className='p-4 md:w-1/3 flex'>
						<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#0096c2] text-[#EFCA08] mb-4 flex-shrink-0'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-6 h-6  '
								viewBox='0 0 24 24'
							>
								<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
							</svg>
						</div>
						<div className='flex-grow pl-6'>
							<h2 className='text-white text-lg title-font font-medium mb-2'>
								Expertos en evaluamos tus necesidades
							</h2>
							<p className='leading-relaxed text-white'>
								Cada caso es único, y queremos saber cómo
								podemos ayudarte a solucionar tus necesidades de
								Seguridad Electrónica, para tu Hogar ó Negocio.
							</p>
							<Link
								href={'/contacto'}
								className='mt-3 bg-[#0096c2] text-[#EFCA08] px-2 inline-flex items-center'
							>
								Saber más...
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-4 h-4 ml-2'
									viewBox='0 0 24 24'
								>
									<path d='M5 12h14M12 5l7 7-7 7'></path>
								</svg>
							</Link>
						</div>
					</div>
					<div className='p-4 md:w-1/3 flex'>
						<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#0096c2] text-[#EFCA08] mb-4 flex-shrink-0'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-6 h-6'
								viewBox='0 0 24 24'
							>
								<circle cx='6' cy='6' r='3'></circle>
								<circle cx='6' cy='18' r='3'></circle>
								<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
							</svg>
						</div>
						<div className='flex-grow pl-6'>
							<h2 className='text-white text-lg title-font font-medium mb-2'>
								Apoyados en Tecnología
							</h2>
							<p className='leading-relaxed text-white'>
								Sabemos que te encanta la tecnología como a
								nosotros pero quieres a expertos que te ayuden a
								implementarla en tu día a día.
							</p>
							<Link
								href={'/contacto'}
								className='mt-3 bg-[#0096c2] text-[#EFCA08] px-2 inline-flex items-center'
							>
								Saber más...
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-4 h-4 ml-2 bg-[#0096c2] text-[#EFCA08]'
									viewBox='0 0 24 24'
								>
									<path d='M5 12h14M12 5l7 7-7 7'></path>
								</svg>
							</Link>
						</div>
					</div>
					<div className='p-4 md:w-1/3 flex'>
						<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#0096c2] text-[#EFCA08] px-2 mb-4 flex-shrink-0'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-6 h-6'
								viewBox='0 0 24 24'
							>
								<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
								<circle cx='12' cy='7' r='4'></circle>
							</svg>
						</div>
						<div className='flex-grow pl-6'>
							<h2 className='text-white text-lg title-font font-medium mb-2'>
								Solucionamos con garantía extendida
							</h2>
							<p className='leading-relaxed text-white'>
								Más de 15 años son el aval de satisfacción de
								nuestros clientes y nos mantenemos en constante
								capacitación, pues la tecnología crece a un
								ritmo muy frenético.
							</p>
							<Link
								href={'/contacto'}
								className='mt-3 bg-[#0096c2] text-[#EFCA08] px-2 inline-flex items-center'
							>
								Saber más...
								{/* <!-- [#008DD5] [#1446A0] [#CCDA15] [#646CFF] [#181841] [#BBDEF0] [#0096c2] [#EFCA08] [#F49F0A] [#F08700] [#FFF] [#CCC]--> */}
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-4 h-4 ml-2 bg-[#0096c2] text-[#EFCA08]'
									viewBox='0 0 24 24'
								>
									<path d='M5 12h14M12 5l7 7-7 7'></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
