export default function CTAForm() {
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
				<div className='lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
					<h2 className='text-white text-lg font-medium title-font mb-5'>
						Contacto
					</h2>
					<div className='relative mb-4'>
						<label
							htmlFor='full-name'
							className='leading-7 text-sm text-gray-400'
						>
							Nombre Completo
						</label>
						<input
							type='text'
							id='full-name'
							name='full-name'
							className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-[#0086C3] rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
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
						/>
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
						/>
					</div>
					<button className='bg-[#0086C3] text-[#EFCA0A] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
						Enviar Info
					</button>
					<p className='text-xs mt-3'>
						Pronto un asesor se pondrá en contacto.
					</p>
				</div>
			</div>
		</section>
	)
}
