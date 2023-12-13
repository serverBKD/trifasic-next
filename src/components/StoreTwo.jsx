import Image from 'next/image'

const productSec = {
	fullname: 'Tarjeta Madre Alarma 32 Zonas',
	description: 'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam iligo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.',
	marca: 'DSC',
	modelo: 'Power 1832',
	image: '/productsSec/DSC/HS2016-L-removebg-preview.png',
	width: 420,
	heigtt: 420,
	code: 'KDkdksksd-445xxd-s74dd',
	price: 32,
	stock: 12
}

function StoreTwo() {
	return (
		<section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
						<h2 className="text-sm title-font text-gray-500 tracking-widest">{productSec.marca}</h2>
						<h1 className="text-white text-3xl title-font font-medium mb-4">{productSec.fullname}</h1>
						<div className="flex mb-4">
							<a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
						</div>
						<p className="leading-relaxed mb-4">{productSec.description.substring(0,320)}</p>
						<div className="flex border-t border-gray-800 py-2">
							<span className="text-gray-500">Modelo</span>
							<span className="ml-auto text-white">{productSec.modelo}</span>
						</div>
						<div className="flex border-t border-gray-800 py-2">
							<span className="text-gray-500">Código</span>
							<span className="ml-auto text-white">{productSec.code}</span>
						</div>
						<div className="flex border-t border-b mb-6 border-gray-800 py-2">
							<span className="text-gray-500">Cantidad</span>
							<span className="ml-auto text-white">{productSec.stock}</span>
						</div>
						<div className="flex">
							<span className="title-font font-medium text-2xl text-white">${productSec.price}</span>
							<button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Comprar</button>
							<button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
								<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
									<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
								</svg>
							</button>
						</div>
					</div>
					<Image
						src="/productsSec/DSC/HS2016-L-removebg-preview.png"
						alt="ecommerce"
						width={380}
						height={380}
						className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded px-3 py-32"
					/>
                        
                        
				</div>
			</div>
		</section>
	)
}

export default StoreTwo