import Image from 'next/image'
import Link from 'next/link'

const productSec = [
	{
		id: 1,
		fullname: 'Tarjeta Madre Alarma 32 Zonas',
		description:
			'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam iligo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.',
		marca: 'DSC',
		modelo: 'Power 1832',
		image: '/productsSec/DSC/HS2016-L-removebg-preview.png',
		width: 420,
		heigtt: 420,
		code: 'KDkdksksd-445xxd-s74dd',
		price: 32,
		stock: 12,
		category: 'alarm',
	},
	{
		id: 2,
		fullname: 'CCTV XDRV 16CH',
		description:
			'Fam locavore kickstarter distillery. Mixtape  Gastropub blue bottle austin listicle pour-over, neutra jean.',
		marca: 'HIKVISION',
		modelo: 'Power 1832',
		image: '/trifasic_IMG/bateria_D_NQ_NP_697443-MLV69638180151_052023-O.webp',
		width: 420,
		heigtt: 420,
		code: 'KDkdksksd-445xxd-s74dd',
		price: 74,
		stock: 100,
		category: 'cctv',
	},
]

export default function StoreGrid() {
	return (
		<section className='w-full min-h-screen py-3 text-slate-200 bg-slate-600'>
			<section className='w-[80%] mx-auto p-12 bg-pink-600  flex gap-2'>
				<article className='bg-[#fff] rounded-lg overflow-hidden'>
					<Link href={'/prod/alarm'} className=''>
						<Image
							src={productSec[1].image}
							width={1080}
							height={540}
							className='w-40 h-40 p-3'
						/>
						<div className='px-5 rounded-b-lg bg-[#EFCA0A] '>
							<h3 className=''>{productSec[1].category}</h3>
							<h2 className=''>{productSec[1].fullname}</h2>
							<p className='my-1 text-lg '>
								${productSec[1].price}
							</p>
						</div>
					</Link>
				</article>
				<article className=''>
					<Link
						href={'/prod/alarm'}
						className='rounded-t-lg overflow-hidden '
					>
						<Image
							src={productSec[0].image}
							alt='ecommerce: server/[241]'
							width={1080}
							height={540}
							className='object-cover transition delay-75 object-center w-full max-w-[420px] h-32  px-1'
						/>
					</Link>
					<div className='w-auto px-5 rounded-b-lg text-[#0086C3] '>
						<h3 className='text-[#0086c3] tracking-widest font-bold mb-1'>
							{productSec.category}
						</h3>
						<h2 className='text-md font-medium'>
							{productSec.fullname}
						</h2>
						<p className='my-1 text-lg'>${productSec.price}</p>
					</div>
				</article>
			</section>
		</section>
	)
}
