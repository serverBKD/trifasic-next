import Image from 'next/image'
import Link from 'next/link'

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
	stock: 12,
	category: 'cctv'
}

function StoreGrid() {
	return (
		<section className="text-gray-400 bg-slate-600 body-font">
			<div className="container px-5 py-24 mx-auto ">
				<article className="flex flex-wrap -m-4 ">
					<article className="lg:w-1/4 md:w-1/2 w-full overflow-hidden rounded-lg hover:shadow-2xl">
						<Link href={'/'} className="block h-48 rounded-t-lg overflow-hidden ">
							<Image
								src="/productsSec/paradox/PGM4_Front_UHD-removebg-preview.png"
								alt="ecommerce: server/[241]"
								width={640}
								height={420}
								className="object-cover object-center w-full h-full  bg-white px-3"
							/>  
						</Link>
						<div className="w-auto h-full py-3 px-4  bg-slate-800 text-slate-200">
							<h3 className=" text-xs tracking-widest title-font mb-1">{productSec.category}</h3>
							<h2 className="text-white title-font text-lg font-medium">{productSec.fullname}</h2>
							<p className="mt-1">${productSec.price}</p>
						</div>
					</article>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
						<Link href={'/'} className="block relative h-48 rounded overflow-hidden">
							<Image
								src="/productsSec/paradox/PGM4_Front_UHD-removebg-preview.png"
								alt="ecommerce"
								width={420}
								height={420}
								className="object-cover object-center w-full h-full block"
							/>              
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
							<h2 className="text-white title-font text-lg font-medium">Shooting Stars</h2>
							<p className="mt-1">$21.15</p>
						</div>
					</div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
						<Link href={'/'} className="block relative h-48 rounded overflow-hidden">
							<Image
								src="/productsSec/paradox/PGM4_Front_UHD-removebg-preview.png"
								alt="ecommerce"
								width={420}
								height={420}
								className="object-cover object-center w-full h-full block"
							/>  
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
							<h2 className="text-white title-font text-lg font-medium">Neptune</h2>
							<p className="mt-1">$12.00</p>
						</div>
					</div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
						<Link href={'/'} className="block relative h-48 rounded overflow-hidden">
							<Image
								src="/productsSec/paradox/PGM4_Front_UHD-removebg-preview.png"
								alt="ecommerce"
								width={420}
								height={420}
								className="object-cover object-center w-full h-full block"
							/>  
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
							<h2 className="text-white title-font text-lg font-medium">The 400 Blows</h2>
							<p className="mt-1">$18.40</p>
						</div>
					</div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
						<Link href={'/'} className="block relative h-48 rounded overflow-hidden">
							<Image
								src="/productsSec/paradox/PGM4_Front_UHD-removebg-preview.png"
								alt="ecommerce"
								width={420}
								height={420}
								className="object-cover object-center w-full h-full block"
							/>  
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
							<h2 className="text-white title-font text-lg font-medium">The Catalyzer</h2>
							<p className="mt-1">$16.00</p>
						</div>
					</div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
						<Link href={'/'}  className="block relative h-48 rounded overflow-hidden">
							<Image
								src="/productsSec/paradox/PGM4_Front_UHD-removebg-preview.png"
								alt="ecommerce"
								width={420}
								height={420}
								className="object-cover object-center w-full h-full block"
							/>  
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
							<h2 className="text-white title-font text-lg font-medium">Shooting Stars</h2>
							<p className="mt-1">$21.15</p>
						</div>
					</div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
						<Link href={'/'}  className="block relative h-48 rounded overflow-hidden">
							<Image
								src="/productsSec/paradox/PGM4_Front_UHD-removebg-preview.png"
								alt="ecommerce"
								width={420}
								height={420}
								className="object-cover object-center w-full h-full block"
							/>  
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
							<h2 className="text-white title-font text-lg font-medium">Neptune</h2>
							<p className="mt-1">$12.00</p>
						</div>
					</div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
						<Link href={'/'} className="block relative h-48 rounded overflow-hidden">
							<Image
								src="/productsSec/paradox/PGM4_Front_UHD-removebg-preview.png"
								alt="ecommerce"
								width={420}
								height={420}
								className="object-cover object-center w-full h-full block"
							/>  
						</Link>
						<div className="mt-4">
							<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
							<h2 className="text-white title-font text-lg font-medium">The 400 Blows</h2>
							<p className="mt-1">$18.40</p>
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}

export default StoreGrid