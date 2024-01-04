import Image from 'next/image'

export default function Hero() {
	return (
		<section className='text-gray-400 bg-gray-900 body-font bg-gradient-to-r from-slate-700 to-slate-500'>
			<div className='w-full min-w-[480px] min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-5'>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 bg-sky-500'>
					<Image
						src={'/heroServer241.jpg'}
						alt='hero'
						width={480}
						height={580}
						className='w-full max-h-[580px] object-cover object-center rounded bg-[#0086C9] shadow-xl shadow-slate-700'
					/>
				</div>
				<div className='max-w-[720px] min-w-[420px] lg:flex-grow md:w-1/2 lg:pl-24 md:pl-18 py-2 flex flex-col md:items-start md:text-left items-center text-center overflow-hidden'>
					<h1 className='title-font text-5xl md:text-4xl mb-4 font-medium text-slate-100 flex'>
						<p className='text-3xl'>
							¡Técnicos con{'       '}
							<span className='bg-primary-color  text-[#0096C2] font-bold rounded-md underline px-1'>
								Experiencia
							</span>
							{'       '}
							en Solucionar!
						</p>
					</h1>
					<h2 className='text-2xl my-3 text-[#EFCA0A]'>
						trifasicxtore
					</h2>
					<p className='mb-8 leading-relaxed text-slate-200 overflow-hidden tracking-wider px-7 md:px-0'>
						Con más de 15 años en el mercado de tecnología aplicada
						en <strong>solucionar</strong> cada aspecto de tu
						seguridad y comodidad, estamos para ayudarte con los
						mejores productos para tu hogar, comercio o industria.
					</p>
					<div className='flex justify-center'>
						<button className='w-32 inline-flex text-center text-[#0096C2] bg-primary-color  border-0 py-2 px-6 focus:outline-none hover:bg-[#0096C2] hover:text-primary-color  rounded text-lg'>
							Más Info
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
